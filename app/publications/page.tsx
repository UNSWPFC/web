import FeaturedPublicationsSection from "@/components/featuredPublicationsSection";
import AllPublicationsSection from "./allPublicationsSection";

export default function Publications() {
  return (
    <>
      <FeaturedPublicationsSection isHomePage={false} />
      <AllPublicationsSection />
    </>
  );
}
