export type SurfaceId =
  | "linen"
  | "paper"
  | "stone"
  | "wood"
  | "ceramic"
  | "sand";

export const surfaces: Record<
  SurfaceId,
  { label: string; gradient: string }
> = {
  linen: {
    label: "Linen",
    gradient:
      "linear-gradient(165deg, var(--linen) 0%, var(--ceramic) 55%, var(--sand) 100%)",
  },
  paper: {
    label: "Paper",
    gradient:
      "linear-gradient(150deg, var(--canvas) 0%, var(--linen) 60%, var(--ceramic) 100%)",
  },
  stone: {
    label: "Stone",
    gradient:
      "linear-gradient(145deg, var(--stone) 0%, var(--plaster) 50%, var(--linen) 100%)",
  },
  wood: {
    label: "Wood",
    gradient:
      "linear-gradient(170deg, #e8dfd4 0%, #ddd2c4 45%, #ebe3d8 100%)",
  },
  ceramic: {
    label: "Ceramic",
    gradient:
      "linear-gradient(160deg, var(--ceramic) 0%, var(--sand) 50%, var(--linen) 100%)",
  },
  sand: {
    label: "Sand",
    gradient:
      "linear-gradient(140deg, var(--sand) 0%, var(--linen) 55%, var(--ceramic) 100%)",
  },
};

/** Map legacy content fields during migration */
export function resolveSurface(
  surface?: SurfaceId,
  accent?: string,
  texture?: string,
): SurfaceId {
  if (surface) return surface;
  const accentMap: Record<string, SurfaceId> = {
    canvas: "paper",
    linen: "linen",
    sand: "sand",
    stone: "stone",
    ceramic: "ceramic",
    plaster: "stone",
    marble: "paper",
    darkwood: "wood",
    metal: "ceramic",
  };
  const textureMap: Record<string, SurfaceId> = {
    linen: "linen",
    wood: "wood",
    darkwood: "wood",
    stone: "stone",
    paper: "paper",
    concrete: "stone",
    fabric: "linen",
    lace: "paper",
    bark: "stone",
    marble: "paper",
    metal: "ceramic",
  };
  return accentMap[accent ?? ""] ?? textureMap[texture ?? ""] ?? "linen";
}
