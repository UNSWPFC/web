import FeaturedPublicationsSection from "@/components/featuredPublicationsSection";
import OtherPublicationsSection from "./otherPublicationsSection";

export default function Publications() {
  return (
    <>
      <FeaturedPublicationsSection isHomePage={false} />
      <OtherPublicationsSection />
    </>
  );
}
