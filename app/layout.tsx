import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from 'next/font/google';

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Vectr.",
  description: "If you're preparing for JEE, NEET, or any other competitive exam, you've probably faced the nightmare of juggling multiple platforms like YouTube, Telegram, Discord, and generic study apps that barely help you stay focused. That's where Vectr comes in — an all-in-one, distraction-free content engagement platform designed specifically for JEE aspirants, NEET aspirants, and students from Class 11, Class 12, and drop years. Whether you’re grinding through organic chemistry, struggling with physics numericals, or revising NCERT biology, Vectr helps you stay on track with tools like focus mode, AI doubt solver, study sprint timers, task manager, and peer leaderboards. Join active JEE communities, NEET telegram alternatives, and structured study groups that feel more like friends than forums. Discover free YouTube lecture alternatives, curated playlists, top educator channels, and even paid courses — all hosted natively within the app, without the usual distractions.\nVectr isn’t just a learning platform — it’s a complete education tech solution that reduces the need for note-taking apps, Google Drive links, Reddit threads, or hopping between classroom LMS, quora posts, and edtech tools. Educators and online creators can upload content, build audiences, and even monetize without building their own website or subscribing to costly LMS hosting platforms. Unlike traditional learning apps, Vectr gives full control back to students and teachers by removing clutter and surfacing what matters: focus, community, and smart discovery.\nWhether you’re solving JEE mains PYQs, watching NEET crash courses, managing your study schedule, or just looking for a clean study dashboard, Vectr brings it all under one roof. Say goodbye to switching between Telegram study groups, YouTube coaching channels, Pomodoro apps, self-tracking sheets, and Discord accountability servers. This is your study operating system — clean, powerful, and focused. Start your journey towards IIT, AIIMS, or any top college without the chaos. Download Vectr now — the only app you’ll need from test prep to productivity, from motivation to execution.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfitFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
