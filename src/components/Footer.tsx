
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-display font-semibold tracking-tight">
              Shreyas Gaikwad
            </Link>
            <p className="mt-3 text-muted-foreground">
              Data Engineer & Analytics Specialist based in Fullerton, California.
              Passionate about building scalable data solutions and creating insights
              that drive business decisions.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com/in/shreyas-gaikwad98"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:shreyasgaikwad.sg98@gmail.com"
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Technical Skills</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Python, R, Java, SQL</li>
              <li className="text-muted-foreground">Tableau, PowerBI, Looker</li>
              <li className="text-muted-foreground">GCP, AWS, Snowflake</li>
              <li className="text-muted-foreground">Apache Airflow, Spark</li>
              <li className="text-muted-foreground">ETL Pipeline Development</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Shreyas Gaikwad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
