
import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { CheckCircle, Download, GraduationCap, Award, Trophy } from "lucide-react";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to handle resume download
  const handleResumeDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Create a link to the PDF file and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your PDF file in the public folder
    link.download = 'shreyas-gaikwad-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="animate-fade-in pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">About Me</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Data Engineer & Analytics Specialist with a passion for turning complex data into actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start"> {/* Changed from items-center to items-start */}
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-semibold mb-4">Shreyas Gaikwad</h2>
              <p className="text-muted-foreground mb-4">
                Enthusiastic and Persistent—these two words define me! I am passionate about problem-solving, 
                whether technical or analytical, and always strive to find effective solutions.
              </p>
              <p className="text-muted-foreground mb-4">
                The core value of 'Innovation' resonates with me the most because I am driven to develop creative and 
                efficient approaches to tackling data challenges. With my solid academic background and hands-on experience.
              </p>
              <p className="text-muted-foreground mb-4">
                I'm a data engineer with over 4 years of experience specializing in ETL pipeline development, 
                data visualization, and cloud technologies. Currently pursuing a Master's degree in Information Systems 
                with a focus on Business Analytics at California State University, Fullerton.
              </p>
              
              <p className="text-muted-foreground mb-6">
                My expertise lies in designing scalable data solutions that help businesses make data-driven decisions. 
                I enjoy working with technologies like Python, SQL, AWS, GCP, and various BI tools to transform raw data 
                into meaningful insights.
              </p>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border mb-6">
                <Trophy className="h-6 w-6 text-primary flex-shrink-0" />
                <p className="text-sm font-medium">
                  <span className="font-semibold">Fun Fact:</span> I am in the top 0.3% of chess players globally.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">Data Engineering</span>
                <span className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">Data Visualization</span>
                <span className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">ETL Pipeline Development</span>
                <span className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">Cloud Computing</span>
                <span className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">Data Analytics</span>
              </div>

              <a
                href="#"
                onClick={handleResumeDownload}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                Download Resume
                <Download size={16} />
              </a>
            </div>

            <div className="order-1 md:order-2 flex justify-center sticky top-24"> {/* Added sticky positioning */}
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 overflow-hidden rounded-xl border-4 border-white dark:border-gray-800 shadow-xl">
                <img
                  src="/lovable-uploads/2628dcaf-b870-4733-8ab8-67b73fcabdbc.png"
                  alt="Shreyas Gaikwad"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">Education</h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Master's in Information Systems - Business Analytics</h3>
                <p className="text-primary font-medium">California State University, Fullerton</p>
                <p className="text-muted-foreground mt-1">August 2023 - May 2025</p>
                <p className="mt-2">GPA: 3.9/4.0</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bachelor's in Engineering, Computer Science</h3>
                <p className="text-primary font-medium">Savitribai Phule Pune University</p>
                <p className="text-muted-foreground mt-1">August 2016 - May 2020</p>
                <p className="mt-2">GPA: 3.8/4.0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-center">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Python</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>R</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Java</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>SQL (MySQL, PostgreSQL)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-xl font-semibold mb-4">BI Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Tableau</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>PowerBI</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Looker</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>SuperSet</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-xl font-semibold mb-4">Cloud Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Google Cloud Platform (GCP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Amazon Web Services (AWS)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Snowflake</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Redshift</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-xl font-semibold mb-4">Other Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Apache Airflow</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Apache Spark</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>JIRA</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Docker</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-xl font-semibold mb-4">Data Engineering</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>ETL Pipeline Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Data Warehousing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Data Modeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Data Cleaning & Preprocessing</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>AWS Certified Solutions Architect - Associate</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Data Structures and Algorithms - Python (NPTEL)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Data Visualization using PowerBI (DataCamp)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Intermediate SQL (DataCamp)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
