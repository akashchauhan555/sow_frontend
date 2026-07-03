import { Helmet } from "react-helmet-async";
import PageHero from "@components/Common/PageHero";
import SectionHeading from "@components/Common/SectionHeading";
import GalleryGrid from "@components/Common/Gallery/GalleryGrid";
import { PROJECTS } from "@/data/projects";

const ALL_IMAGES = PROJECTS.flatMap((p) => [p.coverImage, ...p.gallery]);

export default function Gallery() {
  return (
    <>
      <Helmet><title>Gallery | Story Of Walls</title></Helmet>
      <PageHero
        title="Project Gallery"
        subtitle="A visual journey through our completed builds and interiors."
        image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80"
        breadcrumb={[{ label: "Gallery" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading eyebrow="Browse" title="Our Complete Gallery" align="left" />
          <GalleryGrid images={ALL_IMAGES} columns={4} />
        </div>
      </section>
    </>
  );
}
