import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/streets-barcelona.jpg",
            alt: "Streets In Barcelona",
            href: "https://unsplash.com/photos/kezB4pSQegY",
          },
          {
            src: "/photos/helsinki-train.jpg",
            alt: "Train During Evening in Helsinki",
            href: "https://unsplash.com/photos/wy4pe4-vVmY",
          },
          {
            src: "/photos/sann-polo-bridge.jpg",
            alt: "Sann Polo Bridge, Venice",
            href: "https://unsplash.com/photos/72UxPU3FqR4",
          },

        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/rara-nepal.jpg", alt: "Small Village in Jumla", href: "https://unsplash.com/photos/ozHZ4ovxSNo" },
          { src: "/photos/sagrada-familia.jpg", alt: "Sagrada Familia, Barcelona",href: "https://unsplash.com/photos/rUo4MDo-iE8" },
          { src: "/photos/helsinki-neogothic-cathedral.jpg", alt: "Helsinki Neogothic Cathedral", href: "https://unsplash.com/photos/8vddJyX2xo8" },
          { src: "/photos/ghandruk-nepal.jpg", alt: "Ghandruk, Nepal", href: "https://unsplash.com/photos/K6qnMGOUouw" },
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
    </section>
  );
}
