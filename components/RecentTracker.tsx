"use client";

import { useEffect } from "react";
import { addRecentGame } from "@/lib/favorites";

interface RecentTrackerProps {
  slug: string;
}

export function RecentTracker({ slug }: RecentTrackerProps) {
  useEffect(() => {
    addRecentGame(slug);
  }, [slug]);

  return null;
}
