import SectionHeading from "@components/Common/SectionHeading";
import GalleryGrid from "@components/Common/Gallery/GalleryGrid";

const IMAGES = [
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80",
  "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=800&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
];

// Interior gallery masonry grid with lightbox — shown on the Home page.
export default function InteriorGallery() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Interior Showcase"
          title="Spaces That Tell A Story"
          description="A curated look inside some of our favourite interior transformations."
        />
        <GalleryGrid images={IMAGES} columns={3} />
      </div>
    </section>
  );
}
