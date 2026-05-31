// Static class maps so Tailwind can detect them at build time.
// Never concatenate class strings dynamically with accent tokens.

export const accentBar: Record<string, string> = {
  "cyan-press": "bg-cyan-press",
  "magenta-press": "bg-magenta-press",
  "yellow-press": "bg-yellow-press",
  "emerald-press": "bg-emerald-press",
};

export const accentBg15: Record<string, string> = {
  "cyan-press": "bg-cyan-press/15",
  "magenta-press": "bg-magenta-press/15",
  "yellow-press": "bg-yellow-press/15",
  "emerald-press": "bg-emerald-press/15",
};

export const accentBg20: Record<string, string> = {
  "cyan-press": "bg-cyan-press/20",
  "magenta-press": "bg-magenta-press/20",
  "yellow-press": "bg-yellow-press/20",
  "emerald-press": "bg-emerald-press/20",
};

export const accentRing30: Record<string, string> = {
  "cyan-press": "ring-cyan-press/30",
  "magenta-press": "ring-magenta-press/30",
  "yellow-press": "ring-yellow-press/30",
  "emerald-press": "ring-emerald-press/30",
};

export const accentBorderColumn: Record<string, string> = {
  "cyan-press": "border-cyan-press",
  "magenta-press": "border-magenta-press",
  "yellow-press": "border-yellow-press",
  "emerald-press": "border-emerald-press",
};

export const dotBg: Record<string, string> = {
  "cyan-press": "bg-cyan-press",
  "magenta-press": "bg-magenta-press",
  "yellow-press": "bg-yellow-press",
  "emerald-press": "bg-emerald-press",
  "ink/20": "bg-ink/20",
};
