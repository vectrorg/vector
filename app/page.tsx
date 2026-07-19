// "use client";

// import { useState, useEffect } from "react";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Footer from "./components/Footer";
// import WhyVectr from "./components/WhyVectr";
// import Download from "./components/Download";
// import CustomCursor from "./components/CustomCursor";
// import BlinkingArrow from "./components/ui/BlinkingArrow";
// import Waitlist from "./components/Waitlist";
// import Loader from "./loading";
// import DownloadPopup from "./components/DownloadPopup"; // ⬅️ new import

// export default function Home() {
//   const [showLoader, setShowLoader] = useState<boolean | null>(null);
//   const [readyToShowContent, setReadyToShowContent] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const handleUnload = () => {
//       sessionStorage.removeItem("vectrLoaderPlayed");
//     };
//     window.addEventListener("beforeunload", handleUnload);
//     return () => window.removeEventListener("beforeunload", handleUnload);
//   }, []);

//   useEffect(() => {
//     const loaderAlreadyPlayed = sessionStorage.getItem("vectrLoaderPlayed");
//     if (!loaderAlreadyPlayed) {
//       setShowLoader(true);
//     } else {
//       setShowLoader(false);
//       setReadyToShowContent(true);
//       setTimeout(() => setShowPopup(true), 3000);
//     }
//   }, []);

//   const handleLoaderComplete = () => {
//     sessionStorage.setItem("vectrLoaderPlayed", "true");
//     setShowLoader(false);
//     setTimeout(() => {
//       setReadyToShowContent(true);
//       setTimeout(() => setShowPopup(true), 3000);
//     }, 100);
//   };

//   if (showLoader === null) return null;

//   return (
//     <div className="overflow-x-hidden">
//       {showLoader && !readyToShowContent ? (
//         <Loader onComplete={handleLoaderComplete} />
//       ) : (
//         <main className="bg-black relative min-h-screen">
//           <div className="hidden sm:block">
//             <CustomCursor />
//           </div>
//           <Header />
//           <Hero />
//           {/* <BlinkingArrow /> */}
//           <WhyVectr />
//           <Download />
//           {/* <Waitlist /> */}
//           <Footer />

//           <DownloadPopup show={showPopup} onClose={() => setShowPopup(false)} />
//         </main>
//       )}
//     </div>
//   );
// }







"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import WhyVectr from "./components/WhyVectr";
import Download from "./components/Download";
import CustomCursor from "./components/CustomCursor";
import Loader from "./loading";
import DownloadPopup from "./components/DownloadPopup";
import Proceed from "./components/ProceedPopup"; // ProceedPopup

export default function Home() {
  const [showLoader, setShowLoader] = useState<boolean | null>(null);
  const [readyToShowContent, setReadyToShowContent] = useState(false);
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [showProceedPopup, setShowProceedPopup] = useState(false);

  useEffect(() => {
    const handleUnload = () => {
      sessionStorage.removeItem("vectrLoaderPlayed");
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  useEffect(() => {
    const loaderAlreadyPlayed = sessionStorage.getItem("vectrLoaderPlayed");
    if (!loaderAlreadyPlayed) {
      setShowLoader(true);
    } else {
      setShowLoader(false);
      setReadyToShowContent(true);
      setTimeout(() => setShowDownloadPopup(true), 3000);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem("vectrLoaderPlayed", "true");
    setShowLoader(false);
    setTimeout(() => {
      setReadyToShowContent(true);
      setTimeout(() => setShowDownloadPopup(true), 3000);
    }, 100);
  };

  // Called when user clicks "Get it from Google Play"
  const handleProceed = () => {
    setShowDownloadPopup(false);
    setShowProceedPopup(true);
  };

  if (showLoader === null) return null;

  return (
    <div className="overflow-x-hidden">
      {showLoader && !readyToShowContent ? (
        <Loader onComplete={handleLoaderComplete} />
      ) : (
        <main className="bg-black relative min-h-screen">
          <div className="hidden sm:block">
            <CustomCursor />
          </div>
          <Header />
          <Hero />
          {/* <BlinkingArrow /> */}
          <WhyVectr />
          <Download />
          {/* <Waitlist /> */}
          <Footer />

          {/* Popups */}
          <DownloadPopup
            show={showDownloadPopup}
            onClose={() => setShowDownloadPopup(false)}
            onProceed={handleProceed}
          />
          <Proceed
            show={showProceedPopup}
            onClose={() => setShowProceedPopup(false)}
          />
        </main>
      )}
    </div>
  );
}
