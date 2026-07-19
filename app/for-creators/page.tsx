import Header from "../components/Header";
import Footer from "../components/Footer";
import Heading from "./components/Heading";
import Features from "./components/Features";
import CustomCursor from "../components/CustomCursor";
// import CreatorForm from "./components/CreatorForm";

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <div className="hidden sm:block">
        <CustomCursor />
      </div>
      <Header />
      <Heading />
      <Features />
      {/* <CreatorForm/> */}
      <Footer />
    </main>
  );
}
