import Header from "../components/Header";
import Footer from "../components/Footer";
import Heading from "./components/Heading";
import CustomCursor from "../components/CustomCursor";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <div className="hidden sm:block">
        <CustomCursor />
      </div>
      <Header />
      <Heading />
      <Features />
      <Footer />
    </main>
  );
}
