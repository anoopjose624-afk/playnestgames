export type GameAspectRatio = "16:9" | "4:3" | "3:2" | "960:520";

export type GameBadge = "new" | "hot" | "featured";

export interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  embedUrl: string;
  categories: string[];
  featured: boolean;
  publisher?: string;
  /** CSS aspect-ratio value e.g. "16/9". Defaults to 16/9. */
  aspectRatio?: GameAspectRatio;
  /** ISO date for "Newly Added" sections. */
  addedAt?: string;
  /** Display badge on card. */
  badge?: GameBadge;
  /** Whether playnest-engine mobile controls are enabled. */
  mobile?: boolean;
  /** First-load hint shown on the play page. */
  loadingNotice?: string;
  /** MIT / author attribution for third-party games. */
  attribution?: {
    author: string;
    license: string;
    projectUrl: string;
    licensePath?: string;
  };
  /** Control reference for desktop and touch layouts. */
  controls?: {
    desktop: Array<{ action: string; keys: string }>;
    mobile: Array<{ action: string; keys: string }>;
  };
}

export interface GameFrameConfig {
  aspectRatio: string;
  minHeight: string;
  maxHeight: string;
}
