import Header from "../components/Header";
import Footer from "../components/Footer";
import Founder from "./components/Founder";
import CustomCursor from "../components/CustomCursor";
import TeamMembers from "./components/TeamMembers";
import Heading from "./components/Heading";
// import Loading from "./loading";


export default function Home() {
  return (
    <main className="">
      <div className="hidden sm:block">
        <CustomCursor />
      </div>
      <Header />
      <Heading />
      <Founder />
      <TeamMembers />
      <Footer />
    </main>
  );
}
