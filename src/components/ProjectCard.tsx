import { ExternalLink, Code, Star, Calendar, Clock } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  comingSoon?: boolean;
  date?: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  demoUrl,
  codeUrl,
  featured = false,
  comingSoon = false,
  date,
}: ProjectCardProps) => {
  return (
    <div
      className={`group relative bg-card border border-border rounded-xl p-6 transition-all duration-500 backdrop-blur-sm bg-gradient-to-br from-card to-card/50 ${
        comingSoon
          ? "opacity-75 hover:opacity-90 hover:shadow-lg hover:shadow-muted/10 hover:border-muted/30 hover:-translate-y-1"
          : "hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-2"
      }`}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-500 pointer-events-none ${
          comingSoon
            ? "bg-gradient-to-br from-muted/5 to-muted/5 opacity-0 group-hover:opacity-100"
            : "bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100"
        }`}
      />

      {featured && (
        <div className="absolute -top-3 left-6 z-10">
          <div className="bg-gradient-to-r from-primary to-purple-500 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg shadow-primary/25">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        </div>
      )}

      <div className="space-y-4 relative z-10">
        {comingSoon ? (
          <div className="flex flex-col items-center justify-center h-32 space-y-4">
            <h3 className="text-xl font-semibold text-muted-foreground">
              {title}
            </h3>
          </div>
        ) : (
          <>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}

        {comingSoon ? (
          <div className="flex items-center justify-center pt-2">
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              Stay tuned...
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-purple-400 transition-all duration-300 font-medium hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {codeUrl && (
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  <Code className="w-4 h-4" />
                  Code
                </a>
              )}
            </div>
            {date && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {date}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
