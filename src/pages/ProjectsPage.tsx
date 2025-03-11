
import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  github,
  demo,
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
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <div className="mt-2">
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
          <div className="flex gap-3 mt-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="View source code on GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in pt-24">
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">My Projects</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A collection of data engineering, analytics, and machine learning projects I've worked on.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Memory Mind"
              description="A fun learning plugin for ADHD individuals using Python, Flask, and NLP to extract keywords from text, convert it into catchy and engaging jingles in under 5 seconds."
              technologies={["Python", "Flask", "NLP", "AI"]}
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              github="https://github.com"
              demo="https://demo.example.com"
            />
            <ProjectCard
              title="Anomaly Motion Detection"
              description="Orchestrated a predictive model using 2-stream Convolutional Neural Network (CNN) leveraging a C3D model from more than 1,900 input videos, enhancing real-time security surveillance."
              technologies={["CNN", "Computer Vision", "C3D Model"]}
              image="https://images.unsplash.com/photo-1518770660439-4636190af475"
              github="https://github.com"
            />
            <ProjectCard
              title="Mean Variance Portfolio Optimization"
              description="Devised PostgreSQL and R scripts for ETL to identify high-return stocks for a given risk level, yielding 12% higher returns than SP500TR."
              technologies={["PostgreSQL", "R", "ETL", "Financial Analysis"]}
              image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
              github="https://github.com"
              demo="https://demo.example.com"
            />
            <ProjectCard
              title="COVID-19 Dashboard"
              description="Built interactive PowerBI dashboards tracking infection rates, case distributions, and recovery rates using time-series analysis. Processed 650,000-row dataset with Python."
              technologies={["PowerBI", "Python", "DAX", "Time-series Analysis"]}
              image="https://images.unsplash.com/photo-1584483766114-2cea6facdf57"
              demo="https://demo.example.com"
            />
            <ProjectCard
              title="Automated JIRA Workflow"
              description="Developed AWS Lambda functions and DynamoDB integration for real-time JIRA ticket updates, automatic assignment, and improved tracking. Reduced backlog by 20%."
              technologies={["AWS Lambda", "DynamoDB", "JIRA API"]}
              image="https://images.unsplash.com/photo-1561736778-92e52a7769ef"
              github="https://github.com"
            />
            <ProjectCard
              title="Network Traffic Visualization"
              description="Created Tableau dashboards for monitoring website network traffic using advanced calculated fields. Enabled real-time analysis of traffic patterns and security incidents."
              technologies={["Tableau", "Network Analysis", "Data Visualization"]}
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
              demo="https://demo.example.com"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
