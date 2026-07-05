import type { SurfaceId } from "@/lib/design/surfaces";

export type CategoryId =
  | "gifts"
  | "signage"
  | "wall-art"
  | "light-fittings"
  | "furniture"
  | "stone"
  | "spiritual-decor"
  | "seasonal"
  | "corporate";

export type Category = {
  id: CategoryId;
  title: string;
  description: string;
  surface: SurfaceId;
  image?: string;
};

export const categories: Category[] = [
  {
    id: "gifts",
    title: "Heirloom Gifts",
    description:
      "Boards, keepsakes, and seasonal treasures — engraved with quiet intention.",
    surface: "wood",
  },
  {
    id: "signage",
    title: "Signature Signage",
    description:
      "Refined markers of presence — your brand, your space, your name.",
    surface: "paper",
    image: "/categories/signage.jpg",
  },
  {
    id: "wall-art",
    title: "Layered Wall Art",
    description:
      "Dimensional compositions that turn walls into living, tactile stories.",
    surface: "linen",
  },
  {
    id: "light-fittings",
    title: "Ambient Light",
    description:
      "Custom fittings that cast warmth — sculptural, soft, unforgettable.",
    surface: "ceramic",
    image: "/categories/light-fittings.jpg",
  },
  {
    id: "furniture",
    title: "Hardwood Furniture",
    description:
      "Hand-finished forms in sustainable hardwood — built to be lived with.",
    surface: "wood",
  },
  {
    id: "stone",
    title: "Stone Engraving",
    description:
      "Natural stone etched with names, dates, and sacred geometry.",
    surface: "stone",
    image: "/categories/stone.jpg",
  },
  {
    id: "spiritual-decor",
    title: "Sacred Objects",
    description:
      "Pieces for prayer spaces, altars, and interiors that ask for stillness.",
    surface: "paper",
  },
  {
    id: "corporate",
    title: "Occasions & Corporate",
    description:
      "Weddings, launches, executive gifting — moments that deserve permanence.",
    surface: "ceramic",
    image: "/categories/corporate.jpg",
  },
];

export const categoryMap = Object.fromEntries(
  categories.map((c) => [c.id, c]),
) as Record<CategoryId, Category>;

export const categoryFilterOptions: { id: CategoryId | "all"; label: string }[] =
  [
    { id: "all", label: "All Work" },
    ...categories.map((c) => ({ id: c.id, label: c.title })),
  ];
