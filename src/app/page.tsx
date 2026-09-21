import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParallaxCyber from "@/components/ParallaxCyber";
import GrowthGraphic from "@/components/GrowthGraphic";
import SkillsGraphic from "@/components/SkillsGraphic";
import EducationGraphic from "@/components/EducationGraphic";
import BackToTop from "@/components/BackToTop";
import { SectionHeading } from "@/components/Bits";
import CaseCard from "@/components/CaseCard";
import ReelCard from "@/components/ReelCard";
import SkillsGrid from "@/components/SkillsGrid";
import EducationList from "@/components/EducationList";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import {
  securityCases,
  reelCases,
  growthCases,
  seoCards,
} from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section
          id="security"
          className="relative overflow-hidden border-b border-white/10 py-20"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(232,0,45,0.05), transparent 40%)",
          }}
        >
          <ParallaxCyber variant="a" />
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <Reveal>
              <SectionHeading title="Cybersecurity & Cloud IT" note="CORE DISCIPLINE" />
            </Reveal>
            <div className="space-y-5">
              {securityCases.map((c, i) => (
                <CaseCard item={c} key={c.title + c.org} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </section>

        <section id="video" className="relative overflow-hidden border-b border-white/10 py-20">
          <ParallaxCyber variant="b" />
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <Reveal>
              <SectionHeading title="Videography & Content Editing" note="SECOND DISCIPLINE" />
            </Reveal>
            <div className="space-y-5">
              {reelCases.map((c, i) => (
                <ReelCard item={c} key={c.title + c.org} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </section>

        <section id="seo" className="relative overflow-hidden border-b border-white/10 py-20">
          <GrowthGraphic />
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <Reveal>
              <SectionHeading title="SEO & Digital Growth" note="SUPPORTING WORK" />
            </Reveal>
            <div className="space-y-5">
              {growthCases.map((c, i) => (
                <CaseCard item={c} key={c.title + c.org} delay={i * 0.08} />
              ))}
            </div>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              {seoCards.map((c, i) => (
                <Reveal delay={i * 0.08} key={c.title}>
                  <div className="rounded-md border border-white/[0.08] bg-white/[0.02] p-7">
                    <div className="mb-2.5 font-mono text-[12px] text-gold">{c.org}</div>
                    <h3 className="mb-2 font-display text-[17px] font-semibold">{c.title}</h3>
                    <p className="text-[14.5px] text-ink">{c.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="relative overflow-hidden border-b border-white/10 py-20">
          <SkillsGraphic />
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <Reveal>
              <SectionHeading title="Skills" note="TOOLKIT" />
            </Reveal>
            <SkillsGrid />
          </div>
        </section>

        <section id="education" className="relative overflow-hidden border-b border-white/10 py-20">
          <EducationGraphic />
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <Reveal>
              <SectionHeading title="Education & Certifications" note="CREDENTIALS" />
            </Reveal>
            <EducationList />
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
