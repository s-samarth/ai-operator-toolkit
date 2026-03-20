import Hero from "@/components/Hero";
import CarryWeight from "@/components/CarryWeight";
import Armory from "@/components/Armory";
import OperatorTiers from "@/components/OperatorTiers";
import Paradox from "@/components/Paradox";
import ThreeLayers from "@/components/ThreeLayers";
import MissionLoadouts from "@/components/MissionLoadouts";
import ThreeKits from "@/components/ThreeKits";
import Doctrine from "@/components/Doctrine";
import EssentialGear from "@/components/EssentialGear";
import FieldOps from "@/components/FieldOps";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-night-ops min-h-screen">
    <Hero />
    <CarryWeight />
    <Armory />
    <OperatorTiers />
    <Paradox />
    <ThreeLayers />
    <MissionLoadouts />
    <ThreeKits />
    <Doctrine />
    <EssentialGear />
    <FieldOps />
    <Closing />
    <Footer />
  </div>
);

export default Index;
