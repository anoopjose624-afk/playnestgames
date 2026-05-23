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
}
