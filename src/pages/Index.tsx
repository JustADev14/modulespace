import { ProjectCard } from "../components/ProjectCard";
import {
  Github,
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";

const projects = [
  {
    title: "QR Sticker Sheet Generator",
    description:
      "Generate professional QR code sticker sheets for events, marketing campaigns, and business cards. Customizable layouts with batch processing capabilities.",
    tags: ["Google API", "QRCode Monkey API", "File Export", "QR Codes"],
    demoUrl: "#",
    codeUrl: "#",
    featured: true,
    date: "2025",
  },
  {
    title: "Coming Soon",
    description: "",
    tags: [],
    comingSoon: true,
    date: "2025",
  },
  {
    title: "Coming Soon",
    description: "",
    tags: [],
    comingSoon: true,
    date: "2025",
  },
  {
    title: "Coming Soon",
    description: "",
    tags: [],
    comingSoon: true,
    date: "2025",
  },
  {
    title: "Coming Soon",
    description: "",
    tags: [],
    comingSoon: true,
    date: "2025",
  },
  {
    title: "Coming Soon",
    description: "",
    tags: [],
    comingSoon: true,
    date: "2025",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-nzxt-gradient pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:20px_20px] opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-glow opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-purple-glow opacity-10 pointer-events-none" />

      {/* Header */}
      <header className="relative border-b border-border/30 backdrop-blur-md bg-background/80">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-primary/25">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-semibold text-foreground">
                ModuleSpace Hub
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/JustADev14/modulespace"
                target="_blank"
                rel="noopener"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Professional Developer Tools
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Powerful Tools for
            <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent block">
              Modern Development
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Enterprise-ready tools and utilities built for developers,
            designers, and businesses. Streamline your workflow with our
            collection of professional-grade applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105">
              <ExternalLink className="w-4 h-4" />
              Explore Tools
            </button>
            <button className="border border-border/50 hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 text-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2 backdrop-blur-sm hover:border-primary/30">
              <Github className="w-4 h-4" />
              View Source
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-background/50 to-muted/20 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/20 backdrop-blur-sm">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Enterprise Ready
              </h3>
              <p className="text-muted-foreground text-sm">
                Built with security and scalability in mind for business use
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/20 backdrop-blur-sm">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Lightning Fast
              </h3>
              <p className="text-muted-foreground text-sm">
                Optimized for performance with modern web technologies
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-primary/20 backdrop-blur-sm">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Developer First
              </h3>
              <p className="text-muted-foreground text-sm">
                Clean APIs and documentation for seamless integration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A curated collection of professional tools and utilities designed
              to enhance your development workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Code2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-muted-foreground text-sm">
                © 2025 ModuleSpace Hub. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
