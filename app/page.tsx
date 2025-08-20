import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiBehance, SiGithub, SiGmail, SiLinkedin, SiX } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { CreativeHero } from "@/components/creative-hero";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">
                  UI/UX on the Rocks, Code on the Side
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Nidhi Jain
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              A Passionate UI/UX design student with strong graphic design
              foundation, specializing in user-centered digital experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="https://www.behance.net/uxbynidhi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                  <span className="relative z-10 flex items-center">
                    View Projects{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button className="bg-white text-black hover:bg-gray-200">
                  Contact Me
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/thecreathiief"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white"
                >
                  <SiGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/uxbynidhi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white"
                >
                  <SiLinkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link
                href="https://www.behance.net/uxbynidhi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white"
                >
                  <SiBehance className="h-5 w-5" />
                  <span className="sr-only">Behance</span>
                </Button>
              </Link>
              <Link
                href="https://x.com/uxbynidhi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white"
                >
                  <SiX className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:jainnidhi190703@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white"
                >
                  <SiGmail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="About Me"
            subtitle="My background and journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <Image
                  src="/profile-picture.jpg"
                  alt="Nidhi Jain"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm a passionate designer transitioning from a graphic design
                  background into the world of UI/UX design.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I began my journey by designing logos, posters, and digital
                  content for clients and startups, where I developed a strong
                  eye for visuals, layout, and brand consistency. Over time, I
                  realized that great design isn't just about how things look —
                  it's about how they work for people. What drives s me is the
                  ability to create meaningful digital experiences that feel
                  thoughtful, easy to use, and inclusive.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I'm currently looking for UI/UX internship opportunities to
                  learn from real challenges, collaborate with teams, and grow
                  as a problem-solver.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Nidhi Jain</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">jainnidhi190703@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Gwalior, Madhya Pradesh</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">
                      Open to opportunities
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/nidhi_jain_resume.pdf?v=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
                      Download Resume
                    </Button>
                  </Link>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="My Skills"
            subtitle="A breakdown of my technical and design abilities."
          />

          <div className="mt-16 space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Design
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                <SkillBadge name="Figma" level={85} />
                <SkillBadge name="Adobe Photoshop" level={90} />
                <SkillBadge name="Adobe Illustrator" level={85} />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                UX & Strategy
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <SkillBadge name="Wireframing (Low/Mid-Fidelity)" level={85} />
                <SkillBadge name="User Flow Mapping" level={80} />
                <SkillBadge name="Prototyping (Figma, XD)" level={70} />
                <SkillBadge name="Heuristic Evaluation" level={80} />
                <SkillBadge
                  name="UX Research (User Insights, Surveys)"
                  level={65}
                />
                <SkillBadge name="Accessibility Awareness" level={60} />
                <SkillBadge name="Usability Testing (Basic)" level={60} />
                <SkillBadge name="Mobile-First & Responsive UX" level={70} />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                AI Tools
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <SkillBadge name="ChatGPT" level={90} />
                <SkillBadge name="Midjourney" level={75} />
                <SkillBadge name="Adobe Firefly" level={70} />
                <SkillBadge name="Gemini / Bing AI" level={70} />
                <SkillBadge name="Prompt Engineering" level={80} />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Technical
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <SkillBadge name="HTML5 (Basics)" level={60} />
                <SkillBadge name="CSS3 (Basics)" level={60} />
                <SkillBadge name="GitHub (Collaboration)" level={60} />
                <SkillBadge name="Figma Dev Mode & Inspect Tool" level={70} />
                <SkillBadge name="Zeplin / Design Handoff" level={65} />
                <SkillBadge name="Responsive Layout Design" level={60} />
                <SkillBadge name="Frontend Understanding" level={75} />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <SkillBadge name="Creative Problem Solving" level={85} />
                <SkillBadge name="Communication & Collaboration" level={80} />
                <SkillBadge name="Visual Storytelling" level={90} />
                <SkillBadge name="Time & Task Management" level={75} />
                <SkillBadge name="Design Thinking" level={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of my recent work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Heuristic Evaluation on Snapchat"
              description="A usability audit of Snapchat based on Nielsen's 10 Usability Heuristics with improvement suggestions and UI references."
              tags={["Figma", "Notion", "ChatGPT"]}
              image="/snapchat-cover.png"
              demoUrl="https://www.behance.net/gallery/209069463/Heuristic-Evaluation-on-Snapchat"
            />
            <ProjectCard
              title="Heuristic Evaluation on WhatsApp"
              description="A usability audit of WhatsApp using Nielsen's Heuristics — appreciated for its clear structure, practical UI suggestions.

"
              tags={["Figma", "Notion", "ChatGPT"]}
              image="/Whatsapp-cover.png"
              demoUrl="https://www.behance.net/gallery/209069463/Heuristic-Evaluation-on-Snapchat"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey"
          />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <SiGmail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <a
                      href="mailto:jainnidhi190703@gmail.com"
                      className="font-medium hover:underline"
                    >
                      jainnidhi190703@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <SiLinkedin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/uxbynidhi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline"
                    >
                      linkedin.com/in/uxbynidhi
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <SiGithub className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <a
                      href="https://github.com/thecreathiief"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline"
                    >
                      github.com/thecreathiief
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <SiBehance className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Behance</div>
                    <a
                      href="https://www.behance.net/uxbynidhi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline"
                    >
                      behance.net/uxbynidhi
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <SiX className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Twitter</div>
                    <a
                      href="https://x.com/uxbynidhi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline"
                    >
                      x.com/uxbynidhi
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>
                    Available for freelance work and full-time opportunities
                  </span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                The Creathiief
              </span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} The Creathiief. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/thecreathiief"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white"
              >
                <SiGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/uxbynidhi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white"
              >
                <SiLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link
              href="https://www.behance.net/uxbynidhi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white"
              >
                <SiBehance className="h-5 w-5" />
                <span className="sr-only">Behance</span>
              </Button>
            </Link>
            <Link
              href="https://x.com/uxbynidhi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white"
              >
                <SiX className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:jainnidhi190703@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white"
              >
                <SiGmail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
