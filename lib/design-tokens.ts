/** Display order for category navigation (unknown categories append alphabetically). */
export const CATEGORY_ORDER: readonly string[] = [
  "action",
  "arcade",
  "racing",
  "puzzle",
  "multiplayer",
  "horror",
  "sports",
  "casual",
  "classic",
  "strategy",
  "adventure",
  "brain",
  "cards",
] as const;

export const CATEGORY_ACCENTS: Record<string, string> = {
  action: "var(--pn-accent-red)",
  arcade: "var(--pn-accent-orange)",
  racing: "var(--pn-accent-cyan)",
  puzzle: "var(--pn-accent-blue)",
  multiplayer: "var(--pn-accent-purple)",
  horror: "var(--pn-accent-rose)",
  sports: "var(--pn-accent-cyan)",
  casual: "var(--pn-accent-green)",
  classic: "var(--pn-accent-gold)",
  strategy: "var(--pn-accent-indigo)",
  adventure: "var(--pn-accent-violet)",
  brain: "var(--pn-accent-purple)",
  cards: "var(--pn-accent-teal)",
};
