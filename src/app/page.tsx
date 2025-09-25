import type { Metadata } from "next";
import { Box } from '@chakra-ui/react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { FeatureSection } from '../components/sections/FeatureSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { DownloadSection } from '../components/sections/DownloadSection';
import { SupportSection } from "@/components/sections/SupportSection";

export const metadata: Metadata = {
  title: "DOOODLE - 友達と絵を共有するアプリ",
  description: "DOOODLEは友達同士で落書きを描いて共有できるソーシャルアプリです。ウィジェットで友達の絵をリアルタイムに楽しめます。",
  keywords: "dooodle, 絵, お絵描き, SNS, ウィジェット, 友達, 共有, アプリ",
  openGraph: {
    title: "DOOODLE - 友達と絵を共有するアプリ",
    description: "友達同士で落書きを描いて共有。ウィジェットで友達の絵をリアルタイムチェック！",
    type: "website",
  }
};

export default function Home() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, purple.50, pink.50, yellow.50)"
    >
      <Header />
      <Box as="main">
        <HeroSection />
        <FeatureSection />
        <HowItWorksSection />
        <DownloadSection />
        <SupportSection />
      </Box>
      <Footer />
    </Box>
  );
}
