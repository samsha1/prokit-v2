import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description:
    "Each photo is a memory held still—a quiet reminder of moments that time couldn't take away.",
};

export default function Photos() {
  return (
    <section>
      <h2>Explore</h2>
      <p>
        <i>
          Each photo is a memory held still—a quiet reminder of moments that
          time couldn't take away.
        </i>
      </p>
      <div className="mt-20">
        <ImageGrid
          columns={3}
          images={[
            {
              src: "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/streets-barcelona.jpg",
              alt: "Streets In Barcelona",
              href: "https://unsplash.com/photos/kezB4pSQegY",
            },
            {
              src: "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/helsinki-train.jpg",
              alt: "Train During Evening in Helsinki",
              href: "https://unsplash.com/photos/wy4pe4-vVmY",
            },
            {
              src: "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/helsinki-neogothic-cathedral.jpg",
              alt: "Helsinki Neogothic Cathedral",
              href: "https://unsplash.com/photos/8vddJyX2xo8",
            },
          ]}
        />
        

        <ImageGrid
          columns={2}
          images={[
            {
              src: "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/sann-polo-bridge.jpg",
              alt: "Sann Polo Bridge, Venice",
              href: "https://unsplash.com/photos/72UxPU3FqR4",
            },
            {
              src: "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/rara-nepal.jpg",
              alt: "Small Village in Jumla",
              href: "https://unsplash.com/photos/ozHZ4ovxSNo",
            },
            {
              src: "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/sagrada-familia.jpg",
              alt: "Sagrada Familia, Barcelona",
              href: "https://unsplash.com/photos/rUo4MDo-iE8",
            },
            {
              src: "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/ghandruk-nepal.jpg",
              alt: "Ghandruk, Nepal",
              href: "https://unsplash.com/photos/K6qnMGOUouw",
            },
            {
              src: "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/sea-ko-samet.jpg",
              alt: "Ko Samet Island, Thailand",
              // href: "https://unsplash.com/photos/K6qnMGOUouw",
            },
            {
              src: "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/sky-full-of-stars.jpg",
              alt: "sky-full-of-stars",
              // href: "https://unsplash.com/photos/K6qnMGOUouw",
            },
          ]}
        />

        <ImageGrid
          columns={2}
          images ={
            [
              {
                src: "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/monserat-full.jpg",
                alt:"monserat-full",
                href:"https://unsplash.com/photos/sott2h1XnOQ"
              },
              {
                src: "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/orthodox-cathedral.jpg",
                alt:"helsinki-orthodox-cathedral",
                href: "https://unsplash.com/photos/Yok5DwCuy74"
              }
            ]
          }

        />
        <ImageGrid
          columns={3}
          images={[
            {
              src: "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/bye-venice.jpg",
              alt: "Venice in air",
              // href: "https://unsplash.com/photos/kezB4pSQegY",
            },
            {
              src: "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/mardi.jpg",
              alt: "Monsoon in Mardi",
              // href: "https://unsplash.com/photos/wy4pe4-vVmY",
            },
            {
              src: "https://fnz1dopstoar937o.public.blob.vercel-storage.com/portfolio-kit-v2/architect.jpg",
              alt: "Helsinki Architect Cathedral",
              // href: "https://unsplash.com/photos/8vddJyX2xo8",
            },
          ]}
        />

        {/* <ImageGrid
        columns={4}
        images={[
          { src: "/photos/photo1.jpg", alt: "Roman columns" },
          { src: "/photos/photo2.jpg", alt: "Big Ben" },
          { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
          { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
          { src: "/photos/photo5.jpg", alt: "Taj Mahal" },
          { src: "/photos/photo6.jpg", alt: "Colosseum" },
        ]}
      /> */}
      </div>
    </section>
  );
}
