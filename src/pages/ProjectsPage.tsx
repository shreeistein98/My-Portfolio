
import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Award } from "lucide-react";

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
              A journey through my data engineering, analytics, and machine learning projects.
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
            <ProjectCard
              title="KnowFlow"
              problem="AI tools often require constant internet connectivity and struggle with sensitive data, limiting their use in offline or secure environments."
              approach="Leveraged Llama 3.2 with 4-bit quantization to build an offline-capable AI platform that can run on devices with limited resources."
              solution="Innovated an offline AI platform powered by Llama 3.2 for text, image, and data analysis, enabling automated dataset visualization and optimizing execution with 4-bit quantization for devices with 8GB RAM."
              technologies={["Llama 3.2", "Quantization", "Offline AI", "Data Visualization"]}
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
            />
            <ProjectCard
              title="COVID-19 Dashboard"
              problem="Health officials needed real-time visualization of COVID-19 spread patterns but lacked tools to quickly analyze the massive dataset."
              approach="Utilized Python libraries to clean and process a 650k-row dataset, then designed interactive PowerBI dashboards with time-series analysis."
              solution="Produced 13 interactive dashboards tracking infection rates, case distributions, and recovery rates, enabling data-driven health policy decisions with 93% accuracy models."
              technologies={["PowerBI", "Python", "DAX", "Time-series Analysis"]}
              image="https://images.unsplash.com/photo-1584483766114-2cea6facdf57"
            />
            <ProjectCard
              title="Automated JIRA Workflow"
              problem="Manual JIRA ticket management led to delayed responses, inconsistent tracking, and a growing backlog of issues."
              approach="Designed serverless architecture using AWS Lambda functions integrated with DynamoDB for real-time JIRA ticket processing."
              solution="Implemented automated assignment and tracking system that freed up 10+ hours per week for the team and significantly improved issue resolution speed."
              technologies={["AWS Lambda", "DynamoDB", "JIRA API"]}
              image="https://images.unsplash.com/photo-1561736778-92e52a7769ef"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
