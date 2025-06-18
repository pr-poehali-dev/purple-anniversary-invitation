import InvitationHero from "@/components/InvitationHero";
import GuestSurvey from "@/components/GuestSurvey";
import ContactInfo from "@/components/ContactInfo";
import WishesSection from "@/components/WishesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <InvitationHero />
      <GuestSurvey />
      <ContactInfo />
      <WishesSection />
    </div>
  );
};

export default Index;
