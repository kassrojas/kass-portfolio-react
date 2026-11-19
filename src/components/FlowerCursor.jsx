import { useEffect, useRef, useState } from "react";
import { FaCog, FaTimes } from "react-icons/fa";

// A flower that replaces the mouse cursor. As it moves it sheds a slow trail of
// petals that drift down and pile up along the bottom of the screen. Sweeping
// the flower through the pile kicks the petals back up into the air.
//
// Only runs for mouse-style pointers and when the visitor hasn't asked for
// reduced motion; everyone else keeps the normal cursor.
//
// A small settings panel (cog above the back-to-top button) lets visitors tune
// the effect. Choices are remembered in this browser.

const PETAL_COLORS = [
  ["#ffd6e0", "#f4a6bb"],
  ["#fde2e4", "#f7b7c6"],
  ["#ffe8ef", "#eea1b5"],
  ["#fff1f4", "#f9c4d2"],
];
const FLOWER_LIGHT = "#fff1f4";
const FLOWER_DARK = "#f4a6bb";
const SPAWN_MIN_DIST = 10; // px the cursor must travel between petals
const COL_W = 8; // pile column width
const LAYER_H = 2.2; // how much each landed petal raises its column
const KICK_RADIUS = 46;
const FADE_MS = 4000; // how long a petal takes to fade once its timer runs out
const FADE_NEVER = 31; // "fade after" slider value meaning petals never fade
const MIN_LAND_LIFE = 0.15; // petals fainter than this vanish instead of landing

const INTERACTIVE = "a, button, [role='button'], summary, label, select, input";
const STORAGE_KEY = "flower-cursor-settings";

// ---- Color helpers: petal colors are recolored by rotating their hue. ----
function hexToHsl(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = ((n >> 16) & 255) / 255;
  const g = ((n >> 8) & 255) / 255;
  const b = (n & 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const sat = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return [h * 60, sat, l];
}

function hslToCss([h, sat, l]) {
  return `hsl(${((h % 360) + 360) % 360}, ${sat * 100}%, ${l * 100}%)`;
}

// The flower's own petal color sets the "home" hue; the slider shifts every
// color by the same amount, so the default reproduces the original pinks.
const DEFAULT_HUE = Math.round(hexToHsl(FLOWER_DARK)[0]);

function shiftHue(hex, hue) {
  if (hue === DEFAULT_HUE) return hex;
  const [h, sat, l] = hexToHsl(hex);
  return hslToCss([h - DEFAULT_HUE + hue, sat, l]);
}

export const DEFAULTS = {
  flowerCursor: true, // false = the regular system cursor
  petals: true, // false = no falling petals, just the cursor
  hue: 50, // petal color — pastel yellow (DEFAULT_HUE would be the original pink)
  spawnEveryMs: 500, // trail density while moving
  maxPileH: 60, // tallest the pile can get, px
  maxLanded: 500, // oldest petals fade away beyond this
  fadeAfterS: 2, // seconds in the air before a petal starts to fade
  flowerSize: 20, // radius in px
};

const SWITCHES = [
  { key: "flowerCursor", label: "Flower cursor" },
  { key: "petals", label: "Falling petals" },
];

// `needs` lists the switches a slider depends on; it's disabled when all are off.
const SLIDERS = [
  {
    key: "hue",
    label: "Petal color",
    min: 0,
    max: 359,
    step: 1,
    format: (v) => `${v}°`,
    needs: ["flowerCursor", "petals"],
  },
  {
    key: "spawnEveryMs",
    label: "Spawn every",
    min: 40,
    max: 600,
    step: 10,
    format: (v) => `${v} ms`,
    needs: ["petals"],
  },
  {
    key: "maxPileH",
    label: "Max pile height",
    min: 0,
    max: 160,
    step: 2,
    format: (v) => `${v} px`,
    needs: ["petals"],
  },
  {
    key: "maxLanded",
    label: "Max landed petals",
    min: 0,
    max: 1000,
    step: 10,
    format: (v) => `${v}`,
    needs: ["petals"],
  },
  {
    key: "fadeAfterS",
    label: "Fade while falling after",
    min: 1,
    max: FADE_NEVER,
    step: 1,
    format: (v) => (v >= FADE_NEVER ? "Never" : `${v} s`),
    needs: ["petals"],
  },
  {
    key: "flowerSize",
    label: "Flower size",
    min: 6,
    max: 30,
    step: 1,
    format: (v) => `${v} px`,
    needs: ["flowerCursor"],
  },
];

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved === "object") {
      const out = { ...DEFAULTS };
      for (const k of Object.keys(DEFAULTS)) {
        const ok =
          typeof DEFAULTS[k] === "boolean"
            ? typeof saved[k] === "boolean"
            : Number.isFinite(saved[k]);
        if (ok) out[k] = saved[k];
      }
      return out;
    }
  } catch {}
  return { ...DEFAULTS };
}

function saveSettings(settings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {}
}

function effectAllowed() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// Pre-render each petal color once so drawing is just a rotated drawImage.
function makePetalSprite([light, dark], hue, dpr) {
  const w = 12;
  const h = 16;
  const c = document.createElement("canvas");
  c.width = w * dpr;
  c.height = h * dpr;
  const g = c.getContext("2d");
  g.scale(dpr, dpr);
  const grad = g.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, shiftHue(light, hue));
  grad.addColorStop(1, shiftHue(dark, hue));
  g.fillStyle = grad;
  g.beginPath();
  // Teardrop with a small notch at the tip, like a cherry blossom petal.
  g.moveTo(w / 2, h);
  g.bezierCurveTo(-1, h * 0.65, 0, h * 0.1, w * 0.36, 0.5);
  g.lineTo(w / 2, h * 0.14);
  g.lineTo(w * 0.64, 0.5);
  g.bezierCurveTo(w, h * 0.1, w + 1, h * 0.65, w / 2, h);
  g.fill();
  return { canvas: c, w, h };
}

function drawFlower(ctx, x, y, angle, scale, size, colors) {
  const r = size * scale;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
  ctx.shadowBlur = 6;
  for (let i = 0; i < 5; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI * 2) / 5);
    const grad = ctx.createRadialGradient(
      0,
      -r * 0.55,
      0,
      0,
      -r * 0.55,
      r * 0.6,
    );
    grad.addColorStop(0, colors[0]);
    grad.addColorStop(1, colors[1]);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(0, -r * 0.55, r * 0.36, r * 0.52, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  ctx.shadowBlur = 0;
  ctx.fillStyle = "#f6cf6b";
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.26, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#e8a93e";
  for (let i = 0; i < 5; i++) {
    const a = (i * Math.PI * 2) / 5 + 0.6;
    ctx.beginPath();
    ctx.arc(
      Math.cos(a) * r * 0.12,
      Math.sin(a) * r * 0.12,
      r * 0.045,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }
  ctx.restore();
}

export default function FlowerCursor() {
  const canvasRef = useRef(null);
  const [enabled] = useState(effectAllowed);
  const [settings, setSettings] = useState(loadSettings);
  const [open, setOpen] = useState(false);
  // The animation loop reads the latest settings from here every frame.
  const settingsRef = useRef(settings);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    settingsRef.current = settings;
    saveSettings(settings);
  }, [settings]);

  // Close the panel on Escape or a click outside it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClick = (e) => {
      if (
        !panelRef.current?.contains(e.target) &&
        !toggleRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onClick);
    };
  }, [open]);

  // Hide the system cursor only while the flower is standing in for it.
  useEffect(() => {
    if (!enabled || !settings.flowerCursor) return;
    const root = document.documentElement;
    root.classList.add("flower-cursor");
    return () => root.classList.remove("flower-cursor");
  }, [enabled, settings.flowerCursor]);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let W = 0;
    let H = 0;
    let dpr = 1;
    let sprites = [];
    let spriteHue = null;
    let flowerColors = [FLOWER_LIGHT, FLOWER_DARK];
    let cols = [];

    const buildSprites = (hue) => {
      sprites = PETAL_COLORS.map((c) => makePetalSprite(c, hue, dpr));
      flowerColors = [shiftHue(FLOWER_LIGHT, hue), shiftHue(FLOWER_DARK, hue)];
      spriteHue = hue;
    };

    const mouse = {
      x: -100,
      y: -100,
      visible: false,
      down: false,
      hover: false,
    };
    let lastSpawn = { t: 0, x: 0, y: 0 };
    let flowerAngle = 0;
    let flowerScale = 1;
    let falling = [];
    let landed = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      buildSprites(settingsRef.current.hue);
      // The pile is laid out against the old size, so start it fresh.
      cols = new Array(Math.ceil(W / COL_W) + 1).fill(0);
      landed = [];
    };
    resize();

    const colAt = (x) =>
      Math.max(0, Math.min(cols.length - 1, Math.floor(x / COL_W)));

    const spawnPetal = (x, y, burst = false) => {
      const speed = burst ? 1.2 + Math.random() * 1.4 : 0;
      const dir = Math.random() * Math.PI * 2;
      falling.push({
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 8,
        vx: Math.cos(dir) * speed,
        vy: Math.sin(dir) * speed - (burst ? 0.6 : 0),
        rot: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.04,
        swayPhase: Math.random() * Math.PI * 2,
        swayAmp: 0.25 + Math.random() * 0.35,
        fall: 0.35 + Math.random() * 0.35, // terminal fall speed, px/frame
        scale: 0.6 + Math.random() * 0.45,
        sprite: (Math.random() * sprites.length) | 0,
        alpha: 0, // fade-in / fade-out when spawned or cleared
        age: 0, // ms spent in the air
        life: 1, // 1 = full strength; drops to 0 once the fade timer runs out
      });
    };

    const land = (p) => {
      // Settle into the lower of this column and its neighbours so the pile
      // spreads out into a soft drift instead of stacking into spikes.
      let c = colAt(p.x);
      const left = Math.max(0, c - 1);
      const right = Math.min(cols.length - 1, c + 1);
      if (cols[left] < cols[c] - LAYER_H * 2) c = left;
      else if (cols[right] < cols[c] - LAYER_H * 2) c = right;

      if (cols[c] >= settingsRef.current.maxPileH) {
        // Full here: let it rest on top and quietly fade out.
        p.fading = true;
      } else {
        cols[c] += LAYER_H;
      }
      p.col = c;
      p.x = c * COL_W + Math.random() * COL_W;
      p.y = H - cols[c] - 2 + Math.random() * 3;
      // Petals lie mostly flat once they land.
      p.rot =
        (Math.random() < 0.5 ? 1 : -1) * (Math.PI / 2) +
        (Math.random() - 0.5) * 0.9;
      p.alpha = 1;
      // Mostly faded by the time it reached the ground: just let it go.
      if (p.life < MIN_LAND_LIFE) {
        unland(p);
        return;
      }
      landed.push(p);
    };

    const unland = (p) => {
      if (!p.fading) cols[p.col] = Math.max(0, cols[p.col] - LAYER_H);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.visible = true;
      mouse.hover = !!(
        e.target instanceof Element && e.target.closest(INTERACTIVE)
      );
    };
    const onLeave = (e) => {
      if (!e.relatedTarget) mouse.visible = false;
    };
    const onDown = (e) => {
      mouse.down = true;
      if (!settingsRef.current.petals) return;
      for (let i = 0; i < 6; i++) spawnPetal(e.clientX, e.clientY, true);
    };
    const onUp = () => {
      mouse.down = false;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("mouseout", onLeave);

    let raf = 0;
    let prev = performance.now();

    const frame = (now) => {
      // Normalise to 60fps steps so motion speed doesn't depend on refresh rate.
      const dt = Math.min((now - prev) / 16.67, 3);
      prev = now;
      const cfg = settingsRef.current;
      if (cfg.hue !== spriteHue) buildSprites(cfg.hue);

      // Shed a petal now and then while the cursor is moving.
      if (mouse.visible && cfg.petals) {
        const moved = Math.hypot(mouse.x - lastSpawn.x, mouse.y - lastSpawn.y);
        if (now - lastSpawn.t > cfg.spawnEveryMs && moved > SPAWN_MIN_DIST) {
          spawnPetal(mouse.x, mouse.y);
          lastSpawn = { t: now, x: mouse.x, y: mouse.y };
        }
      }

      // Brushing the flower through the pile tosses petals back up.
      if (
        mouse.visible &&
        cfg.petals &&
        mouse.y > H - cfg.maxPileH - KICK_RADIUS
      ) {
        for (let i = landed.length - 1; i >= 0; i--) {
          const p = landed[i];
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < KICK_RADIUS) {
            unland(p);
            landed.splice(i, 1);
            const push = (1 - d / KICK_RADIUS) * 3 + 1;
            p.vx = (dx / (d || 1)) * push + (Math.random() - 0.5);
            p.vy = -2 - Math.random() * 2.5;
            p.spin = (Math.random() - 0.5) * 0.12;
            p.fading = false;
            falling.push(p);
          }
        }
      }

      // Too many on the ground: fade out the oldest ones. With petals switched
      // off, everything on the ground fades away.
      const excess = cfg.petals ? landed.length - cfg.maxLanded : landed.length;
      for (let i = 0; i < excess; i++) landed[i].fading = true;

      for (let i = falling.length - 1; i >= 0; i--) {
        const p = falling[i];
        p.swayPhase += 0.03 * dt;
        // Ease toward a slow drift with a gentle side-to-side sway.
        p.vx += (Math.sin(p.swayPhase) * p.swayAmp - p.vx) * 0.03 * dt;
        p.vy += (p.fall - p.vy) * 0.03 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += (p.spin + Math.cos(p.swayPhase) * 0.01) * dt;
        // Petals switched off: ones still in the air fade out where they are.
        p.alpha = cfg.petals
          ? Math.min(1, p.alpha + 0.06 * dt)
          : p.alpha - 0.03 * dt;

        // Fade timer: after `fadeAfterS` in the air the petal slowly fades.
        // It only ever gets fainter, even if the setting changes mid-fall, and
        // a petal that lands keeps whatever strength it had left.
        p.age += dt * 16.67;
        if (cfg.fadeAfterS < FADE_NEVER) {
          const over = p.age - cfg.fadeAfterS * 1000;
          if (over > 0) p.life = Math.min(p.life, 1 - over / FADE_MS);
        }

        if (p.alpha <= 0 || p.life <= 0 || p.x < -20 || p.x > W + 20) {
          falling.splice(i, 1);
        } else if (p.y >= H - cols[colAt(p.x)] - 4) {
          falling.splice(i, 1);
          land(p);
        }
      }

      for (let i = landed.length - 1; i >= 0; i--) {
        const p = landed[i];
        if (p.fading) {
          p.alpha -= 0.01 * dt;
          if (p.alpha <= 0) {
            unland(p);
            landed.splice(i, 1);
          }
        }
      }

      flowerAngle += (mouse.hover ? 0.035 : 0.008) * dt;
      const targetScale = mouse.down ? 0.85 : mouse.hover ? 1.3 : 1;
      flowerScale += (targetScale - flowerScale) * 0.2 * dt;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);

      const drawPetal = (p) => {
        const s = sprites[p.sprite];
        ctx.globalAlpha = Math.max(0, p.alpha * p.life) * 0.92;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.scale(p.scale, p.scale);
        ctx.drawImage(s.canvas, -s.w / 2, -s.h / 2, s.w, s.h);
        ctx.restore();
      };
      landed.forEach(drawPetal);
      falling.forEach(drawPetal);
      ctx.globalAlpha = 1;

      if (mouse.visible && cfg.flowerCursor)
        drawFlower(
          ctx,
          mouse.x,
          mouse.y,
          flowerAngle,
          flowerScale,
          cfg.flowerSize,
          flowerColors,
        );

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  const update = (key, value) => setSettings((s) => ({ ...s, [key]: value }));
  const isDefault = Object.keys(DEFAULTS).every(
    (k) => settings[k] === DEFAULTS[k],
  );
  const swatch = shiftHue(FLOWER_DARK, settings.hue);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="flower-cursor-canvas"
        aria-hidden="true"
      />

      <button
        ref={toggleRef}
        type="button"
        className={`petal-settings-toggle ${open ? "is-open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Flower cursor settings"
        aria-expanded={open}
        aria-controls="petal-settings"
      >
        <FaCog />
      </button>

      {open && (
        <div
          ref={panelRef}
          id="petal-settings"
          className="petal-settings"
          role="dialog"
          aria-label="Flower cursor settings"
        >
          <div className="petal-settings__head">
            <h2>Flower settings</h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close settings"
            >
              <FaTimes />
            </button>
          </div>

          {SWITCHES.map(({ key, label }) => (
            <label key={key} className="petal-settings__switch">
              <span>{label}</span>
              <input
                type="checkbox"
                role="switch"
                checked={settings[key]}
                onChange={(e) => update(key, e.target.checked)}
              />
              <span className="petal-settings__track" aria-hidden="true" />
            </label>
          ))}

          {SLIDERS.map(({ key, label, min, max, step, format, needs }) => {
            const disabled = needs.every((n) => !settings[n]);
            return (
              <label
                key={key}
                className={`petal-settings__row ${disabled ? "is-disabled" : ""}`}
              >
                <span className="petal-settings__label">
                  {label}
                  <output>
                    {key === "hue" && (
                      <span
                        className="petal-settings__swatch"
                        style={{ background: swatch }}
                      />
                    )}
                    {format(settings[key])}
                  </output>
                </span>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={step}
                  value={settings[key]}
                  onChange={(e) => update(key, Number(e.target.value))}
                  className={key === "hue" ? "is-hue" : undefined}
                  disabled={disabled}
                />
              </label>
            );
          })}

          <button
            type="button"
            className="petal-settings__reset"
            onClick={() => setSettings({ ...DEFAULTS })}
            disabled={isDefault}
          >
            Reset to defaults
          </button>
        </div>
      )}
    </>
  );
}
