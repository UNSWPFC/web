import UpcomingEventsSection from "@/components/upcomingEventsSection";
import HeroSection from "./heroSection";
import JoinTodaySection from "./joinTodaySection";
import FeaturedPublicationsSection from "@/components/featuredPublicationsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <UpcomingEventsSection />
      <FeaturedPublicationsSection isHomePage={true} />
      <JoinTodaySection />
    </>
  );
}
