
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const HomeAbout: React.FC = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-2">About Me</h2>
            <p className="text-muted-foreground mb-4">
              Enthusiastic and Persistent—these two words define me! I am passionate about problem-solving, 
              whether technical or analytical, and always strive to find effective solutions.
            </p>
            <p className="text-muted-foreground mb-4">
              I'm a data engineer with over 4 years of experience specializing in ETL pipeline development, 
              data visualization, and cloud technologies. Currently pursuing a Master's degree in Information Systems 
              with a focus on Business Analytics at California State University, Fullerton.
            </p>
            <div className="pt-4">
              <Link 
                to="/about" 
                className="group inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Learn more about me
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-80 overflow-hidden rounded-xl border-4 border-white dark:border-gray-800 shadow-xl">
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
  );
};
