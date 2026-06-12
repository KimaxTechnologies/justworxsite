import type { CategoryId } from "./categories";

export type WorkItem = {
  id: string;
  title: string;
  description: string;
  category: CategoryId;
  materials: string[];
  accent: string;
  texture: string;
  aspectRatio: "portrait" | "landscape" | "square";
  featured?: boolean;
};

/**
 * Abstract panel placeholders until lookbook assets are provided.
 * Replace with image paths in /public/portfolio/ when ready.
 */
export const portfolioItems: WorkItem[] = [
  {
    id: "hardwood-board",
    title: "Hardwood Engraved Board",
    description: "A family crest, quietly etched into warm hardwood.",
    category: "gifts",
    materials: ["Hardwood", "Metal"],
    accent: "sand",
    texture: "wood",
    aspectRatio: "landscape",
    featured: true,
  },
  {
    id: "layered-wall",
    title: "Layered Botanical Wall",
    description: "A dimensional composition — depth, shadow, and stillness.",
    category: "wall-art",
    materials: ["Perspex", "Hardwood", "Stone"],
    accent: "linen",
    texture: "fabric",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "metal-sign",
    title: "Metal & Hardwood Signage",
    description: "Studio signage with layered hardwood and metal inlay.",
    category: "signage",
    materials: ["Hardwood", "Metal"],
    accent: "plaster",
    texture: "concrete",
    aspectRatio: "landscape",
    featured: true,
  },
  {
    id: "stone-piece",
    title: "Engraved Stone",
    description: "Natural stone carrying a name, a date, a memory.",
    category: "stone",
    materials: ["Stone", "Metal"],
    accent: "stone",
    texture: "stone",
    aspectRatio: "square",
    featured: true,
  },
  {
    id: "pendant-light",
    title: "Custom Pendant Light",
    description: "Geometric hardwood with a warm, ambient glow.",
    category: "light-fittings",
    materials: ["Hardwood", "Metal", "Perspex"],
    accent: "ceramic",
    texture: "stone",
    aspectRatio: "portrait",
  },
  {
    id: "console-table",
    title: "Engraved Console",
    description: "Minimal form with hand-finished grain and subtle detail.",
    category: "furniture",
    materials: ["Hardwood"],
    accent: "stone",
    texture: "wood",
    aspectRatio: "landscape",
  },
  {
    id: "eid-gift",
    title: "Seasonal Gift Set",
    description: "Engraved pieces for festive and seasonal celebrations.",
    category: "seasonal",
    materials: ["Hardwood", "Stone"],
    accent: "canvas",
    texture: "paper",
    aspectRatio: "square",
  },
  {
    id: "prayer-plaque",
    title: "Prayer Wall Plaque",
    description: "Sacred text engraved on warm-toned hardwood.",
    category: "spiritual-decor",
    materials: ["Hardwood", "Metal"],
    accent: "linen",
    texture: "wood",
    aspectRatio: "portrait",
  },
  {
    id: "corporate-award",
    title: "Corporate Recognition",
    description: "Executive plaques for milestones worth remembering.",
    category: "corporate",
    materials: ["Hardwood", "Metal", "Stone"],
    accent: "plaster",
    texture: "concrete",
    aspectRatio: "landscape",
  },
  {
    id: "teachers-gift",
    title: "Teacher Appreciation",
    description: "A thoughtful keepsake — simple, personal, enduring.",
    category: "gifts",
    materials: ["Hardwood", "Stone"],
    accent: "sand",
    texture: "wood",
    aspectRatio: "square",
  },
  {
    id: "wedding-table",
    title: "Wedding Table Number",
    description: "Elegant markers for destination celebrations.",
    category: "corporate",
    materials: ["Hardwood", "Perspex"],
    accent: "ceramic",
    texture: "linen",
    aspectRatio: "portrait",
  },
  {
    id: "nursery-art",
    title: "Nursery Name Art",
    description: "Soft layered wall art for a child's room.",
    category: "wall-art",
    materials: ["Hardwood", "Perspex"],
    accent: "linen",
    texture: "fabric",
    aspectRatio: "landscape",
  },
];
