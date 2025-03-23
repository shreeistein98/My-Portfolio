
import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Award } from "lucide-react";

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
  award?: string;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  title,
  company,
  location,
  period,
  descriptions,
  projects,
  award,
}) => {
  return (
    <div className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-all duration-300 mb-8">
      <div className="mb-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          {award && (
            <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">
              <Award size={14} />
              <span>{award}</span>
            </div>
          )}
        </div>
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
              title="Data Analyst Intern"
              company="Bauhaus Group"
              location="Carson, California"
              period="May 2024 - Present"
              descriptions={[
                "Developed Apache Spark ETL pipelines and Airflow DAGs to integrate real estate records from multiple sources, added fault tolerance to prevent job failures and reduced data processing time by 65%, from 40 to 14 minutes.",
                "Optimized 35+ SQL database tables by implementing indexing and materialized views, cutting query time from 50 to 20 seconds.",
                "Created interactive Apache Superset dashboards to analyze maintenance and repair expenses over 9 years, identifying cost-saving opportunities and reducing unnecessary expenditures by $8,500 annually.",
                "Collaborated with stakeholders to identify challenges and automated three applications using Python and FastAPI, reducing manual work from 60 minutes to 5 minutes and saving over 200 work hours per quarter."
              ]}
              projects={[
                {
                  name: "Real Estate Data Integration",
                  description: "Built fault-tolerant ETL pipelines that reduced processing time by 65% and integrated data from multiple sources.",
                  technologies: ["Apache Spark", "Airflow", "ETL", "Python"]
                },
                {
                  name: "Expense Analysis Dashboard",
                  description: "Created interactive dashboards that identified $8,500 in annual cost-saving opportunities across maintenance and repair expenses.",
                  technologies: ["Apache Superset", "SQL", "Data Visualization"]
                }
              ]}
            />
            
            <WorkExperienceCard
              title="Senior Data Engineer"
              company="Persistent Systems"
              location="Cyber Security - Network Orchestration and Response"
              period="July 2020 - August 2023"
              descriptions={[
                "Designed Tableau dashboards with calculated fields and time-series analysis, minimizing anomaly detection time from 2 hours to 10 minutes and helping prevent over 30 potential security threats.",
                "Automated JIRA workflows using AWS Lambda and DynamoDB, enabling real-time ticket updates and status tracking, eliminating manual handling and freeing up 10+ hours per week to improve team productivity and issue resolution speed.",
                "Enhanced SQL queries with partitioning and window functions, slashing log analysis time from 30 minutes to 2 minutes and accelerating threat detection across 50K+ security events."
              ]}
              projects={[
                {
                  name: "Security Threat Detection",
                  description: "Implemented dashboards that reduced anomaly detection time from 2 hours to 10 minutes, preventing over 30 potential security threats.",
                  technologies: ["Tableau", "Time-series Analysis", "SQL"]
                },
                {
                  name: "Automated JIRA Workflow",
                  description: "Built serverless solution that eliminated manual ticket handling and freed up 10+ hours per week for the team.",
                  technologies: ["AWS Lambda", "DynamoDB", "JIRA API"]
                }
              ]}
              award="Top Talent Award"
            />
            
            <WorkExperienceCard
              title="Data Engineer"
              company="Persistent Systems"
              location="COVID-19 Dashboard"
              period="July 2020 - August 2023"
              descriptions={[
                "Applied Excel, Python libraries (Pandas, NumPy, Scikit, Statsmodels) to clean and process a 650,000-row COVID-19 dataset, improving data reliability for analytics and reducing missing values by 30% (from 195,000 to 136,500).",
                "Engineered a scalable data pipeline using GCP Dataflow & Data Fusion, delivering seamless data migration into Cloud SQL and BigQuery, cutting data processing costs by approximately $1,100 per month.",
                "Constructed 13 interactive Power BI dashboards, utilizing DAX calculations to track key KPIs, including infection rate trends, regional case distributions and recovery rates, leveraging time-series analysis and correlation models with 93% accuracy."
              ]}
              projects={[
                {
                  name: "COVID-19 Data Analysis",
                  description: "Processed and cleaned a 650,000-row dataset, reducing missing values by 30% and improving data reliability for analytics.",
                  technologies: ["Python", "Pandas", "NumPy", "Scikit-learn"]
                },
                {
                  name: "GCP Data Pipeline",
                  description: "Built scalable pipeline that reduced processing costs by $1,100 per month while maintaining data integrity.",
                  technologies: ["GCP", "Dataflow", "Data Fusion", "BigQuery"]
                }
              ]}
            />
            
            <WorkExperienceCard
              title="Data Engineer Intern"
              company="Persistent Systems"
              location="Teacher Assist"
              period="July 2020 - August 2023"
              descriptions={[
                "Drafted 40+ UAT test cases to validate ETL workflows and database consistency, uncovering 15+ defects pre-deployment.",
                "Integrated speech-to-text functionality using IBM Watson, increasing transcription accuracy from 80% to 95% over previous tools, reducing manual note-taking for students, and saving approximately 5 hours per week.",
                "Implemented real-time question prompts in Zoom sessions using Azure Cognitive Services, based on teachers' live lectures, increasing student response rates by 40% and securing first place in the Asia-Pacific region at the \"Call for Code\" Hackathon."
              ]}
              projects={[
                {
                  name: "Speech-to-Text Integration",
                  description: "Increased transcription accuracy from 80% to 95%, saving students approximately 5 hours per week on note-taking.",
                  technologies: ["IBM Watson", "Speech Recognition", "API Integration"]
                },
                {
                  name: "Real-time Question Prompts",
                  description: "Implemented system that increased student response rates by 40% and won first place at the \"Call for Code\" Hackathon.",
                  technologies: ["Azure Cognitive Services", "Zoom API", "NLP"]
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
