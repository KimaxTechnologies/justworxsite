import type { CategoryId } from "@/lib/content/categories";

export type LookbookTextureId =
  | "concrete"
  | "concrete-grit"
  | "concrete-cover"
  | "stone-beige"
  | "stone-panel"
  | "stone-panel-alt"
  | "parchment"
  | "plaster-light";

export const lookbookTextures: Record<
  LookbookTextureId,
  { src: string; label: string }
> = {
  concrete: {
    src: "/lookbook/textures/concrete.jpg",
    label: "Raw concrete",
  },
  "concrete-grit": {
    src: "/lookbook/textures/concrete-grit.jpg",
    label: "Grit plaster",
  },
  "concrete-cover": {
    src: "/lookbook/textures/concrete-cover.jpg",
    label: "Distressed plaster",
  },
  "stone-beige": {
    src: "/lookbook/textures/stone-beige.jpg",
    label: "Warm beige stone",
  },
  "stone-panel": {
    src: "/lookbook/textures/stone-panel.jpg",
    label: "Honed stone panel",
  },
  "stone-panel-alt": {
    src: "/lookbook/textures/stone-panel-alt.jpg",
    label: "Limestone panel",
  },
  parchment: {
    src: "/lookbook/textures/parchment.jpg",
    label: "Parchment",
  },
  "plaster-light": {
    src: "/lookbook/textures/plaster-light.jpg",
    label: "Light plaster",
  },
};

const categoryTextureMap: Record<CategoryId, LookbookTextureId> = {
  gifts: "stone-panel",
  signage: "parchment",
  "wall-art": "stone-beige",
  "light-fittings": "concrete-grit",
  furniture: "stone-panel-alt",
  stone: "concrete-cover",
  "spiritual-decor": "parchment",
  seasonal: "stone-beige",
  corporate: "plaster-light",
};

export function getCategoryTexture(categoryId: CategoryId): string {
  const textureId = categoryTextureMap[categoryId];
  return lookbookTextures[textureId].src;
}
