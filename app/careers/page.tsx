"use client";

import React, { useState, useRef, useEffect } from "react";
import { Outfit } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Heading from "./components/Heading";
import CustomCursor from "../components/CustomCursor";
import { Sparkles } from "@/app/components/ui/Sparkles";
import Select from "react-select";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

type Role = {
  title: string;
  desc: string;
  category: string;
};

type Category = {
  name: string;
  describe: string;
  roles: Role[];
};

const categories: Category[] = [
  {
    name: "Technology",
    describe: "Building the future of Content-Tech.",
    roles: [
      { title: "Frontend Web Developer", desc: "Work with Next.js to create stunning UIs", category: "Technology" },
      { title: "Backend Web Developer", desc: "Help us scale our platform with Node.js.", category: "Technology" },
      { title: "Frontend App Developer", desc: "Build and optimize our mobile app UI using React Native.", category: "Technology" },
      { title: "Backend App Developer", desc: "Develop and maintain the server-side logic, APIs, and databases that power our application.", category: "Technology" },
      { title: "UI/UX Designer", desc: "Craft intuitive user flows and high-fidelity mockups using tools like Figma to create exceptional user experiences.", category: "Technology" },
    ],
  },
  {
    name: "Growth & Strategy",
    describe: "Driving growth through innovative marketing and strategic initiatives.",
    roles: [
      {
        title: "Growth Strategist",
        desc: "Plan and execute campaigns that scale user growth and engagement.",
        category: "Growth & Strategy"
      },
      {
        title: "Marketing Generalist",
        desc: "Assist across campaigns, channels, and performance tracking.",
        category: "Growth & Strategy"
      },
      {
        title: "Social Media & Community Manager",
        desc: "Own our online presence, manage creators, and engage with our growing student and educator community.",
        category: "Growth & Strategy"
      },
      {
        title: "UGC Content Creator",
        desc: "Create or script short-form videos that connect with students.",
        category: "Growth & Strategy"
      },
      {
        title: "Copywriter/Scriptwriter",
        desc: "Write scroll-stopping copy and scripts for ads, posts, reels, and landing pages.",
        category: "Growth & Strategy"
      },
      {
        title: "Graphic Designer & Video Editor",
        desc: "Turn concepts into visuals and videos that stand out.",
        category: "Growth & Strategy"
      },
    ],
  },
  {
    name: "Operations",
    describe: "Keeping the engine running smoothly.",
    roles: [
      { title: "Research & Analysis", desc: "Conduct market research and data analysis to uncover key insights that inform product and marketing strategies.", category: "Operations" },
      { title: "Founder's Office", desc: "Work directly with the founding team on high-impact strategic initiatives that drive the company's vision forward.", category: "Operations" },
      { title: "Outreach & Analysis", desc: "Identify and engage with potential partners or clients, while analyzing outreach performance to refine our strategy.", category: "Operations" },
    ],
  },
];

// Skills divided role-wise
const skillsByCategory: Record<string, string[]> = {
  "Technology": ["React.js", "Next.js", "TailwindCSS", "Node.js", "Supabase", "Flutter", "React Native", "UI/UX Design", "Figma"],
  "Growth & Strategy": ["Copywriting", "Marketing", "Social Media", "Graphic Design", "Video Editing", "Content Strategy", "Ads Management"],
  "Operations": ["Research", "Data Analysis", "Strategy", "Outreach", "Project Management", "Other"],
};

const SHEET_BEST_URL =
  "https://api.sheetbest.com/sheets/fa687439-547b-41fc-86e3-069174ddfcd5";

const Careers = () => {
  const [openRole, setOpenRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(false);
  const [popupMsg, setPopupMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [openCategory, setOpenCategory] = useState<Category | null>(null);

  const categoryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (openCategory && categoryRef.current) {
      categoryRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [openCategory]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    role: Role
  ) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const selectedSkills = formData.getAll("skills") as string[];

    const newApp = {
      Name: formData.get("name") as string,
      Contact: formData.get("contact") as string,
      Email: formData.get("email") as string,
      Role: role.title,
      Category: role.category,
      Skills: selectedSkills.join(", "),
      Experience: formData.get("experience") as string,
      Resume: formData.get("resume") || "Not Provided",
      WhyHire: formData.get("why") as string,
      Timestamp: new Date().toISOString(),
    };

    try {
      await fetch(SHEET_BEST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newApp),
      });

      setPopupMsg({ type: "success", text: "✅ Application submitted successfully!" });
      form.reset();
      setOpenRole(null);
    } catch (err) {
      console.error(err);
      setPopupMsg({ type: "error", text: "❌ Submission failed. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-black overflow-x-hidden relative">
      <div className="min-h-screen bg-black text-white flex flex-col relative">
        <Sparkles
          className="absolute inset-0 w-full h-full z-0"
          density={200}
          speed={1}
          size={2}
          opacity={0.5}
          color="#AD49E1"
          background="transparent"
        />
        <div className="hidden sm:block">
          <CustomCursor />
        </div>

        <Header />
        <Heading />

        {/* === INTRO CONTENT === */}
        <div className="relative z-10 flex flex-col items-center px-6 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 md:pb-3 bg-gradient-to-r from-purple-600 to-white bg-clip-text text-transparent">
            Our Magnitude & Direction
          </h1>
          <p className="text-lg md:text-xl max-w-4xl text-gray-300 mb-8">
            <span className="font-bold">EdTech is changing fast.<br /> </span>
            Students no longer want to be trapped in one app or one teacher’s ecosystem.
            They want<br /> <span className="font-bold"> freedom, variety, and focus. </span>
          </p>
          <p className="text-lg md:text-xl max-w-4xl text-gray-300 mb-8">
            Every year, 30M+ students sit for competitive exams (2.5M+ for JEE/NEET alone), spending over ₹30,000 crore — yet fewer than 10% succeed. The real challenge isn’t access.
          </p>
          <p className="text-lg md:text-xl max-w-4xl text-gray-300 mb-8">
            It’s <span className="font-bold">focus </span>and <span className="font-bold">efficiency </span>.
          </p>
          <p className="text-lg md:text-xl max-w-4xl text-gray-300 mb-8">
            That’s where <span className="font-bold"> Vectr.</span> comes in.<br />
            We solve<span className="font-bold"> Distraction </span> and<span className="font-bold"> Distribution </span> - killing scattered study for students, and fixing visibility, discoverability, and reach for educators.
          </p>
          <p className="text-lg md:text-xl max-w-4xl text-gray-300 mb-8">
            Our mission is simple:
            To make Vectr the single, distraction-free channel where<span className="font-bold"> students discover the right educators, courses, and tools,</span> and<span className="font-bold"> educators reach learners without barriers.</span>
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600">
            Ready to give your career some direction (and magnitude)?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            Meaningful work that actually makes a difference (goes well with your schedule too!)
          </p>
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-gray-900 border border-gray-700 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg hover:scale-[1.02] transition relative"
              >
                <h2 className="text-2xl font-semibold text-purple-600 mb-4">
                  {cat.name}
                </h2>
                <h3>{cat.describe}</h3>
                <button
                  onClick={() =>
                    setOpenCategory(openCategory?.name === cat.name ? null : cat)
                  }
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-[#9333ea] transition mt-auto"
                >
                  View All
                </button>
              </div>
            ))}

            {/* Full-width expanding section — part of document flow */}
            {openCategory && (
              <div ref={categoryRef} className="col-span-full flex justify-center mt-6">
                <div className="rounded-2xl p-8 animate-slideDown w-full max-w-6xl shadow-2xl">
                  <h3 className="text-3xl font-bold text-center text-purple-600 mb-8">
                    {openCategory.name}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {openCategory.roles.map((role) => (
                      <div
                        key={role.title}
                        className="bg-gray-800 hover:bg-gray-700 transition transform hover:scale-[1.02] p-6 rounded-xl flex flex-col items-center text-center shadow-lg"
                      >
                        <span className="text-2xl font-bold text-purple-600 mb-2">
                          {role.title}
                        </span>
                        <span className="text-lg text-gray-300 mb-6">
                          {role.desc}
                        </span>

                        <button
                          onClick={() => {
                            setOpenRole(role);
                            setOpenCategory(null);
                          }}
                          className="bg-purple-600 hover:bg-[#9333ea] text-white font-medium px-6 py-2 rounded-full shadow-md transition"
                        >
                          Apply Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>

      {/* === Modal Form === */}
      {openRole && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setOpenRole(null)} // Close when clicking outside
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8 w-full max-w-lg relative"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setOpenRole(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-purple-600">
              Apply for {openRole.title}
            </h2>

            <form onSubmit={(e) => handleSubmit(e, openRole)}>
              <div className="flex flex-col gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="text-gray-50 px-4 py-2 rounded-md bg-gray-800 border border-gray-600 focus:border-purple-600"
                />
                <input
                  name="contact"
                  type="text"
                  placeholder="Your Contact Number"
                  required
                  className="text-gray-50 px-4 py-2 rounded-md bg-gray-800 border border-gray-600 focus:border-purple-600"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="text-gray-50 px-4 py-2 rounded-md bg-gray-800 border border-gray-600 focus:border-purple-600"
                />

                {/* Dynamic Skills Dropdown */}
                <Select
                  name="skills"
                  placeholder="Skills"
                  isMulti
                  options={skillsByCategory[openRole.category].map((skill) => ({
                    value: skill,
                    label: skill,
                  }))}
                  className="w-full"
                  classNamePrefix="react-select"
                  styles={{
                    control: (base) => ({
                      ...base,
                      backgroundColor: "#1f2937",
                      borderColor: "#4b5563",
                      color: "white",
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: "#1f2937",
                    }),
                    multiValue: (base) => ({
                      ...base,
                      backgroundColor: "#9333ea",
                    }),
                    multiValueLabel: (base) => ({
                      ...base,
                      color: "white",
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused ? "#4b5563" : "#1f2937",
                      color: "white",
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: "#9ca3af", // gray-400
                    }),
                  }}
                />

                <textarea
                  name="experience"
                  placeholder="Experience (if any)"
                  rows={2}
                  className="text-gray-50 px-4 py-2 rounded-md bg-gray-800 border border-gray-600 focus:border-purple-600"
                />
                <textarea
                  name="resume"
                  placeholder="Resume drive link (optional)"
                  rows={2}
                  className="text-gray-50 px-4 py-2 rounded-md bg-gray-800 border border-gray-600"
                />
                <textarea
                  name="why"
                  placeholder="Why should we hire you?"
                  rows={4}
                  className="text-gray-50 px-4 py-2 rounded-md bg-gray-800 border border-gray-600 focus:border-purple-600"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-[#9333ea] transition disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* === Popup Message === */}
      {popupMsg && (
        <div className="fixed bottom-5 right-5 bg-gray-900 border border-gray-700 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in z-50">
          <p className={popupMsg.type === "success" ? "text-green-400" : "text-red-400"}>
            {popupMsg.text}
          </p>
          <button onClick={() => setPopupMsg(null)} className="ml-3 text-sm text-gray-400 hover:text-white">Close</button>
        </div>
      )}
    </main>
  );
};

export default Careers;
