
import { ExternalLink, Github, Award } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  problem: string;
  approach: string;
  solution: string;
  technologies: string[];
  image?: string;
  award?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  problem,
  approach,
  solution,
  technologies,
  image,
  award,
}) => {
  return (
    <div className="group rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 bg-card h-full flex flex-col">
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          {award && (
            <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">
              <Award size={14} />
              <span>{award}</span>
            </div>
          )}
        </div>
        
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-medium text-primary">Problem Statement</h4>
            <p className="text-muted-foreground">{problem}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-primary">Approach</h4>
            <p className="text-muted-foreground">{approach}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-primary">Solution</h4>
            <p className="text-muted-foreground">{solution}</p>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my data engineering and analytics projects.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Memory Mind"
            problem="ADHD individuals often struggle to retain information from texts, leading to challenges in learning and retention."
            approach="Leveraged NLP techniques to extract key concepts from text and developed an algorithm to convert these into memorable, engaging jingles."
            solution="Built a fun learning plugin using Python, Flask and NLP to extract keywords, create catchy jingles in under 5 seconds, winning HackSC 2024 at the University of Southern California."
            technologies={["Python", "Flask", "NLP", "AI"]}
            image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            award="HackSC Hackathon Winner"
          />
          
          <ProjectCard
            title="Anomaly Motion Detection"
            problem="Traditional security systems lack the ability to detect unusual movement patterns in real-time video feeds, creating security vulnerabilities."
            approach="Implemented a 2-stream Convolutional Neural Network (CNN) architecture using a C3D model trained on over 1,900 videos of different movement patterns."
            solution="Orchestrated a predictive model using a 2-stream CNN with a C3D model, analyzing 1,900+ input videos to enhance real-time security surveillance."
            technologies={["CNN", "Computer Vision", "C3D Model"]}
            image="https://images.unsplash.com/photo-1518770660439-4636190af475"
          />
          
          <ProjectCard
            title="Mean Variance Portfolio Optimization"
            problem="Investors struggle to identify optimal stock portfolios that balance risk and return, often resulting in suboptimal investment decisions."
            approach="Developed ETL processes using PostgreSQL and R to analyze historical stock performance data and implemented mathematical models to optimize portfolio allocation."
            solution="Devised PostgreSQL and R scripts for ETL to identify high-return stocks based on risk levels, achieving a 12% higher return than SP500TR."
            technologies={["PostgreSQL", "R", "ETL", "Financial Analysis"]}
            image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
          />
        </div>

        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-all duration-200 inline-flex items-center gap-2"
          >
            View all projects
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
