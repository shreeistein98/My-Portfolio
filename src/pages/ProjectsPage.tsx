
import { useEffect } from "react";
import { Footer } from "@/components/Footer";

interface ProjectCardProps {
  title: string;
  problem: string;
  approach: string;
  solution: string;
  technologies: string[];
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  problem,
  approach,
  solution,
  technologies,
  image,
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
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        
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
              solution="Created a Python-based plugin using Flask and NLP libraries that extracts keywords from text and converts them into catchy jingles in under 5 seconds, enhancing memory retention."
              technologies={["Python", "Flask", "NLP", "AI"]}
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            />
            <ProjectCard
              title="Anomaly Motion Detection"
              problem="Traditional security systems lack the ability to detect unusual movement patterns in real-time video feeds, creating security vulnerabilities."
              approach="Implemented a 2-stream Convolutional Neural Network (CNN) architecture using a C3D model trained on over 1,900 videos of different movement patterns."
              solution="Delivered a predictive model capable of identifying anomalous movements in real-time video surveillance, significantly enhancing security monitoring capabilities."
              technologies={["CNN", "Computer Vision", "C3D Model"]}
              image="https://images.unsplash.com/photo-1518770660439-4636190af475"
            />
            <ProjectCard
              title="Mean Variance Portfolio Optimization"
              problem="Investors struggle to identify optimal stock portfolios that balance risk and return, often resulting in suboptimal investment decisions."
              approach="Developed ETL processes using PostgreSQL and R to analyze historical stock performance data and implemented mathematical models to optimize portfolio allocation."
              solution="Created an algorithm that identifies high-return stocks for a given risk level, yielding 12% higher returns than the SP500TR benchmark."
              technologies={["PostgreSQL", "R", "ETL", "Financial Analysis"]}
              image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
            />
            <ProjectCard
              title="COVID-19 Dashboard"
              problem="Health officials needed real-time visualization of COVID-19 spread patterns but lacked tools to quickly analyze the massive dataset."
              approach="Utilized Python libraries to clean and process a 650k-row dataset, then designed interactive PowerBI dashboards with time-series analysis."
              solution="Produced 9 interactive dashboards tracking infection rates, case distributions, and recovery rates, enabling data-driven health policy decisions."
              technologies={["PowerBI", "Python", "DAX", "Time-series Analysis"]}
              image="https://images.unsplash.com/photo-1584483766114-2cea6facdf57"
            />
            <ProjectCard
              title="Automated JIRA Workflow"
              problem="Manual JIRA ticket management led to delayed responses, inconsistent tracking, and a growing backlog of issues."
              approach="Designed serverless architecture using AWS Lambda functions integrated with DynamoDB for real-time JIRA ticket processing."
              solution="Implemented automated assignment and tracking system that reduced backlog by 20% and significantly improved response times."
              technologies={["AWS Lambda", "DynamoDB", "JIRA API"]}
              image="https://images.unsplash.com/photo-1561736778-92e52a7769ef"
            />
            <ProjectCard
              title="Network Traffic Visualization"
              problem="Security teams struggled to identify patterns and potential threats in complex network traffic data."
              approach="Leveraged Tableau's advanced calculated fields to transform raw network data into actionable visualizations."
              solution="Created dashboards for real-time analysis of traffic patterns and security incidents, enabling proactive threat detection."
              technologies={["Tableau", "Network Analysis", "Data Visualization"]}
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
