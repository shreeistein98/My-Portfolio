
import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin } from "lucide-react";

interface WorkExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  descriptions: string[];
  projects?: {
    name: string;
    description: string;
    technologies: string[];
  }[];
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  title,
  company,
  location,
  period,
  descriptions,
  projects,
}) => {
  return (
    <div className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-all duration-300 mb-8">
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <h4 className="text-lg text-primary font-medium mt-1">{company}</h4>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{period}</span>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h5 className="font-medium mb-2">Responsibilities:</h5>
        <ul className="space-y-2 text-sm sm:text-base">
          {descriptions.map((desc, index) => (
            <li key={index} className="pl-4 border-l-2 border-primary/30">
              {desc}
            </li>
          ))}
        </ul>
      </div>

      {projects && projects.length > 0 && (
        <div>
          <h5 className="font-medium mb-3 text-primary">Key Projects:</h5>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="p-4 rounded-lg bg-secondary/30">
                <h6 className="font-medium mb-2">{project.name}</h6>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const WorkExperiencePage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in pt-24">
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Work Experience</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              My professional journey as a Data Engineer and Analyst.
            </p>
          </div>

          <div className="space-y-6">
            <WorkExperienceCard
              title="Data Engineer Intern"
              company="Bauhaus Group"
              location="Carson, California"
              period="May 2024 - Present"
              descriptions={[
                "Developed Apache Spark-based ETL pipelines and custom DAG scripts in Apache Airflow to automate workflow orchestration, ensuring fault-tolerant execution of real estate data.",
                "Created and updated 35 Data Extensions using SQL, Query Studio, Excel and built journeys in Salesforce Marketing Cloud.",
                "Collaborated with stakeholders to identify challenges and automated 3 applications using FastAPI and Python, reducing manual work by 40%."
              ]}
              projects={[
                {
                  name: "Salesforce Marketing Cloud Integration",
                  description: "Integrated Salesforce Marketing Cloud with existing data pipelines to automate customer journeys and marketing campaigns.",
                  technologies: ["Salesforce", "SQL", "Query Studio", "Excel"]
                },
                {
                  name: "ETL Pipeline Automation",
                  description: "Developed and optimized ETL pipelines using Apache Spark and Airflow for real estate data processing.",
                  technologies: ["Apache Spark", "Airflow", "Python", "ETL"]
                }
              ]}
            />
            
            <WorkExperienceCard
              title="Senior Data Engineer"
              company="Persistent Systems"
              location="Cyber Security - Network Orchestration and Response"
              period="July 2020 - August 2023"
              descriptions={[
                "Designed 17+ dashboards in Tableau leveraging advance calculated fields for visualizing network traffic of monitored websites.",
                "Automated JIRA workflows using AWS Lambda and DynamoDB, enabling real-time ticket updates, automatic assignment, and improved tracking, reducing backlog by 20%.",
                "Enhanced 35+ SQL queries and implemented indexing and materialized views, reducing query execution time by 30%."
              ]}
              projects={[
                {
                  name: "Network Traffic Visualization",
                  description: "Created comprehensive dashboards for real-time analysis of traffic patterns and security incidents, enabling proactive threat detection.",
                  technologies: ["Tableau", "SQL", "Network Analysis", "Data Visualization"]
                },
                {
                  name: "Automated JIRA Workflow",
                  description: "Implemented automated assignment and tracking system that reduced backlog by 20% and significantly improved response times.",
                  technologies: ["AWS Lambda", "DynamoDB", "JIRA API", "Python"]
                }
              ]}
            />
            
            <WorkExperienceCard
              title="Data Engineer"
              company="Persistent Systems"
              location="COVID-19 Dashboard"
              period="July 2020 - August 2023"
              descriptions={[
                "Applied Excel, Python libraries (pandas, numpy, scikit, statsmodels) to clean and process a 650,000-row COVID-19 dataset, reducing missing values by 30% and improving data reliability for analytics.",
                "Engineered a scalable data pipeline using GCP Dataflow & Data Fusion, enabling seamless data migration into Cloud SQL and BigQuery, reducing data processing costs by 25%.",
                "Constructed 9 interactive PowerBI dashboards, utilizing DAX calculations to track key KPIs such as infection rate trends, regional case distributions and recovery rates, using time-series analysis and correlation models with 80% accuracy."
              ]}
              projects={[
                {
                  name: "COVID-19 Dashboard",
                  description: "Developed interactive dashboards tracking infection rates, case distributions, and recovery rates, enabling data-driven health policy decisions.",
                  technologies: ["PowerBI", "Python", "DAX", "Time-series Analysis"]
                },
                {
                  name: "GCP Data Pipeline",
                  description: "Built scalable data pipelines to process and analyze COVID-19 data, reducing costs by 25% while improving data reliability.",
                  technologies: ["GCP", "Dataflow", "Data Fusion", "Cloud SQL", "BigQuery"]
                }
              ]}
            />
            
            <WorkExperienceCard
              title="Data Engineer Intern"
              company="Persistent Systems"
              location="Teacher Assist"
              period="July 2020 - August 2023"
              descriptions={[
                "Drafted 40+ UAT test cases to validate data pipeline integrity, ETL workflows and database consistency.",
                "Performed automation and optimized Jenkins load through automated job cleanup; crafted a Bash script reducing cleanup duration from 40 minutes to 20 minutes.",
                "Engineered speech-to-text functionality using libraries like IBM-watson, achieving an accuracy of 95%."
              ]}
              projects={[
                {
                  name: "Jenkins Automation",
                  description: "Optimized Jenkins load through automated job cleanup, reducing maintenance time by 50%.",
                  technologies: ["Jenkins", "Bash", "Automation"]
                },
                {
                  name: "Speech-to-Text Implementation",
                  description: "Implemented high-accuracy speech recognition capabilities for teacher assistance applications.",
                  technologies: ["IBM Watson", "Python", "Speech Recognition", "NLP"]
                }
              ]}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkExperiencePage;
