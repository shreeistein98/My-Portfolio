
import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  categories: string[];
  image?: string;
  slug: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  excerpt,
  date,
  readTime,
  categories,
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
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readTime}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 flex-grow">{excerpt}</p>
          
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="flex items-center text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  <Tag size={12} className="mr-1" />
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

const BlogPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in pt-24">
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Blog</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Insights and thoughts on data engineering, analytics, and technology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BlogPostCard
              title="Building Scalable ETL Pipelines with Apache Airflow"
              excerpt="Learn how to design and implement robust ETL workflows using Apache Airflow DAGs for efficient data orchestration."
              date="June 15, 2024"
              readTime="8 min read"
              categories={["Data Engineering", "ETL", "Apache Airflow"]}
              image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              slug="building-scalable-etl-pipelines"
            />
            <BlogPostCard
              title="Optimizing SQL Queries for Big Data Performance"
              excerpt="Practical techniques for improving query performance in large-scale databases using indexing and materialized views."
              date="May 22, 2024"
              readTime="6 min read"
              categories={["SQL", "Performance", "Database"]}
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              slug="optimizing-sql-queries"
            />
            <BlogPostCard
              title="Data Visualization Best Practices with Tableau"
              excerpt="Key principles for creating effective dashboards that communicate insights clearly and drive decision-making."
              date="April 10, 2024"
              readTime="5 min read"
              categories={["Data Visualization", "Tableau", "BI"]}
              image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              slug="data-visualization-best-practices"
            />
            <BlogPostCard
              title="Cloud Data Warehousing: GCP vs AWS"
              excerpt="A comparative analysis of data warehousing solutions on Google Cloud Platform and Amazon Web Services."
              date="March 18, 2024"
              readTime="10 min read"
              categories={["Cloud", "GCP", "AWS", "Data Warehouse"]}
              image="https://images.unsplash.com/photo-1547658719-da2b51169166"
              slug="cloud-data-warehousing"
            />
            <BlogPostCard
              title="Machine Learning for Anomaly Detection"
              excerpt="How to build effective ML models to identify unusual patterns in data and prevent security breaches."
              date="February 5, 2024"
              readTime="7 min read"
              categories={["Machine Learning", "Security", "Python"]}
              image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
              slug="machine-learning-anomaly-detection"
            />
            <BlogPostCard
              title="The Future of Data Engineering: Trends to Watch"
              excerpt="Emerging technologies and methodologies that will shape the data engineering landscape in the coming years."
              date="January 12, 2024"
              readTime="9 min read"
              categories={["Trends", "Future Tech", "Industry Insights"]}
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
              slug="future-of-data-engineering"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
