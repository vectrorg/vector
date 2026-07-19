import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import DeleteAccount from "./DeleteAccount";
// import DeleteForm from "./DeleteForm";

export default function Home() {
    return (
        <main className="">
            <Header />
            <div className="sm:block">
                <CustomCursor />
                <DeleteAccount/>
                {/* <DeleteForm /> */}
            </div>
            <Footer />
        </main>
    );
}
