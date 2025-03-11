
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  excerpt,
  date,
  image,
  slug,
}) => {
  return (
    <Link to={`/blog/${slug}`} className="group">
      <div className="rounded-xl overflow-hidden border border-border group-hover:shadow-lg transition-all duration-300 bg-card h-full flex flex-col">
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
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground">{excerpt}</p>
        </div>
      </div>
    </Link>
  );
};

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My thoughts and insights on data engineering, analytics, and technology.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BlogPost
            title="Building Scalable ETL Pipelines with Apache Airflow"
            excerpt="Learn how to design and implement robust ETL workflows using Apache Airflow DAGs for efficient data orchestration."
            date="June 15, 2024"
            image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            slug="building-scalable-etl-pipelines"
          />
          <BlogPost
            title="Optimizing SQL Queries for Big Data Performance"
            excerpt="Practical techniques for improving query performance in large-scale databases using indexing and materialized views."
            date="May 22, 2024"
            image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            slug="optimizing-sql-queries"
          />
          <BlogPost
            title="Data Visualization Best Practices with Tableau"
            excerpt="Key principles for creating effective dashboards that communicate insights clearly and drive decision-making."
            date="April 10, 2024"
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            slug="data-visualization-best-practices"
          />
        </div>

        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg inline-block"
          >
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
};
