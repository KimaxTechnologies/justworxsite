"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import type { Category } from "@/lib/content/categories";
import {
  floralCardHoverClass,
  floralCardLightWashClass,
  floralCardScrimClass,
  floralCardTextureOrigin,
  getCategoryCardTexture,
  isFloralCategoryCard,
} from "@/lib/design/lookbook-textures";
import { cn } from "@/lib/utils";

type MaterialCardProps = {
  category: Category;
  index?: number;
  className?: string;
};

const categoryPhotoScale = 1.28;

function CategoryPhotoImage({
  src,
  alt,
  sizes,
  position,
  scale = categoryPhotoScale,
  focus = "center center",
}: {
  src: string;
  alt: string;
  sizes: string;
  position: string;
  scale?: number;
  focus?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      className={cn("z-[1] object-cover", position)}
      style={
        scale !== 1
          ? {
              transform: `scale(${scale})`,
              transformOrigin: focus,
            }
          : undefined
      }
      sizes={sizes}
    />
  );
}

function ScaledTextureImage({
  src,
  position,
  scale,
  sizes,
}: {
  src: string;
  position: string;
  scale?: number;
  sizes: string;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <Image
        src={src}
        alt=""
        fill
        unoptimized
        className={cn("object-cover", position)}
        style={
          scale
            ? {
                transform: `scale(${scale})`,
                transformOrigin: floralCardTextureOrigin,
              }
            : undefined
        }
        sizes={sizes}
      />
    </div>
  );
}

export function MaterialCard({ category, index = 0, className }: MaterialCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const isOffset = index % 2 === 1;
  const tilt = index % 3 === 0 ? 0.25 : index % 3 === 1 ? -0.2 : 0.1;
  const { src: textureSrc, position: texturePosition } =
    getCategoryCardTexture(index);
  const isFloralCard = isFloralCategoryCard(index);
  const isFloralTextureCard = isFloralCard && !category.image;
  const frontSrc = category.image ?? textureSrc;
  const frontFit = category.imageFit ?? "cover";
  const frontPosition = category.image
    ? "object-center"
    : texturePosition;
  const overflowShift = index % 2 === 0 ? { x: 10, y: 14 } : { x: -8, y: 12 };
  const imageSizes = "(max-width: 768px) 50vw, 25vw";

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={cn("group relative", isOffset && "md:mt-8", className)}
    >
      <div
        className="texture-overflow absolute inset-0 overflow-hidden"
        style={{
          transform: `translate(${overflowShift.x}px, ${overflowShift.y}px) rotate(${tilt * 1.4}deg) scale(1.04)`,
        }}
        aria-hidden
      >
        <ScaledTextureImage
          src={textureSrc}
          position={texturePosition}
          sizes={imageSizes}
        />
      </div>

      <Link
        href={`/work?category=${category.id}`}
        className={cn(
          "panel-raised moodboard-frame relative block overflow-hidden",
          isFloralTextureCard ? "bg-transparent" : "bg-canvas",
          isFloralCard
            ? floralCardHoverClass
            : "transition-transform duration-500 group-hover:-translate-y-0.5",
        )}
        style={{ rotate: `${tilt}deg` }}
      >
        {isFloralTextureCard && (
          <>
            <ScaledTextureImage
              src={textureSrc}
              position={texturePosition}
              sizes={imageSizes}
            />
            <div
              className={cn(
                "pointer-events-none absolute inset-0 z-[1]",
                floralCardScrimClass,
              )}
              aria-hidden
            />
            <div
              className={cn(
                "pointer-events-none absolute inset-0 z-[1]",
                floralCardLightWashClass,
              )}
              aria-hidden
            />
          </>
        )}

        <div
          className={cn(
            "relative aspect-[4/5] overflow-hidden",
            !isFloralTextureCard && frontFit !== "contain" && "bg-canvas",
          )}
        >
          {!isFloralTextureCard && (
            <>
              {frontFit === "contain" && (
                <ScaledTextureImage
                  src={textureSrc}
                  position={texturePosition}
                  sizes={imageSizes}
                />
              )}
              <CategoryPhotoImage
                src={frontSrc}
                alt={category.title}
                sizes={imageSizes}
                position={frontPosition}
                scale={category.imageScale}
                focus={category.imageFocus}
              />
            </>
          )}
          {!isFloralTextureCard && (
            <div
              className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-canvas/25 via-transparent to-canvas/5"
              aria-hidden
            />
          )}
          <div
            className="absolute -right-px top-6 z-10 h-14 w-1.5 bg-canvas/90"
            style={{ clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)" }}
            aria-hidden
          />
          <div
            className="absolute bottom-6 left-4 z-10 h-2 w-10 bg-canvas/80"
            style={{ clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)" }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-2 z-[3] border border-stone/12"
            aria-hidden
          />
        </div>

        <div
          className={cn(
            "relative z-10 px-5 py-5",
            isFloralTextureCard
              ? "border-t border-stone/15"
              : "border-t border-stone/15 bg-canvas",
          )}
        >
          <span className="label-caps mb-2 block text-[0.6rem]">
            {category.id.replaceAll("-", " ")}
          </span>
          <h3 className="font-heading text-xl text-espresso md:text-2xl">
            {category.title}
          </h3>
          <p
            className={cn(
              "mt-2 font-sans text-sm leading-relaxed",
              isFloralTextureCard
                ? "font-medium text-espresso/90"
                : "font-light text-taupe",
            )}
          >
            {category.description}
          </p>
          <span className="mt-4 inline-block h-px w-0 bg-wood/50 transition-all duration-500 group-hover:w-8" />
        </div>
      </Link>
    </motion.div>
  );
}
