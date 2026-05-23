import type { Metadata } from "next";
import { FavoritesList } from "@/components/FavoritesList";

export const metadata: Metadata = {
  title: "Favorites",
  description: "Your saved games on PlayNest.",
};

export default function FavoritesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="mb-2 text-3xl font-extrabold text-white">Favorites</h1>
      <p className="mb-8 text-white/60">Games you saved on this device.</p>
      <FavoritesList />
    </div>
  );
}
