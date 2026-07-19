import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import { PrivacyPolicy as Privacy } from "./PrivacyPolicy";

export default function Home() {
    return (
        <main className="">
            <Header />
            <Privacy />
            <div className="hidden sm:block">
                <CustomCursor />
            </div>
            <Footer />
        </main>
    );
}
