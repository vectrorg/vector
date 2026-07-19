import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import { BackgroundBeams } from "./components/BackgroundBeams";
import { JoinTheWaitlist as Waitlist } from "./components/JoinTheWaitlist";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Waitlist />
      <div className="hidden sm:block">
        <CustomCursor />
      </div>
      <BackgroundBeams />
      <Footer />
    </div>
  );
}
