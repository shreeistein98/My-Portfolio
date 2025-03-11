
import { Calendar, MapPin } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  descriptions: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  descriptions,
}) => {
  return (
    <div className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-all duration-300">
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
      <ul className="space-y-2 text-sm sm:text-base">
        {descriptions.map((desc, index) => (
          <li key={index} className="pl-4 border-l-2 border-primary/30">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles in data engineering and analytics.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ExperienceItem
            title="Data Engineer Intern"
            company="Bauhaus Group"
            location="Carson, California"
            period="May 2024 - Present"
            descriptions={[
              "Developed Apache Spark-based ETL pipelines and custom DAG scripts in Apache Airflow to automate workflow orchestration, ensuring fault-tolerant execution of real estate data.",
              "Created and updated 35 Data Extensions using SQL, Query Studio, Excel and built journeys in Salesforce Marketing Cloud.",
              "Collaborated with stakeholders to identify challenges and automated 3 applications using FastAPI and Python, reducing manual work by 40%."
            ]}
          />
          <ExperienceItem
            title="Senior Data Engineer"
            company="Persistent Systems"
            location="Cyber Security - Network Orchestration and Response"
            period="July 2020 - August 2023"
            descriptions={[
              "Designed 17+ dashboards in Tableau leveraging advance calculated fields for visualizing network traffic of monitored websites.",
              "Automated JIRA workflows using AWS Lambda and DynamoDB, enabling real-time ticket updates, automatic assignment, and improved tracking, reducing backlog by 20%.",
              "Enhanced 35+ SQL queries and implemented indexing and materialized views, reducing query execution time by 30%."
            ]}
          />
          <ExperienceItem
            title="Data Engineer"
            company="Persistent Systems"
            location="COVID-19 Dashboard"
            period="July 2020 - August 2023"
            descriptions={[
              "Applied Excel, Python libraries (pandas, numpy, scikit, statsmodels) to clean and process a 650,000-row COVID-19 dataset, reducing missing values by 30% and improving data reliability for analytics.",
              "Engineered a scalable data pipeline using GCP Dataflow & Data Fusion, enabling seamless data migration into Cloud SQL and BigQuery, reducing data processing costs by 25%.",
              "Constructed 9 interactive PowerBI dashboards, utilizing DAX calculations to track key KPIs such as infection rate trends, regional case distributions and recovery rates, using time-series analysis and correlation models with 80% accuracy."
            ]}
          />
          <ExperienceItem
            title="Data Engineer Intern"
            company="Persistent Systems"
            location="Teacher Assist"
            period="July 2020 - August 2023"
            descriptions={[
              "Drafted 40+ UAT test cases to validate data pipeline integrity, ETL workflows and database consistency.",
              "Performed automation and optimized Jenkins load through automated job cleanup; crafted a Bash script reducing cleanup duration from 40 minutes to 20 minutes.",
              "Engineered speech-to-text functionality using libraries like IBM-watson, achieving an accuracy of 95%."
            ]}
          />
        </div>
      </div>
    </section>
  );
};
