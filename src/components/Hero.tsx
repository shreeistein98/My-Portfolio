
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-16">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="flex flex-col space-y-6 animate-fade-in">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 tracking-tight leading-tight">
              Hi, I'm 
              <span className="text-primary"> Shreyas Gaikwad</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
              Data Engineer & Analytics Specialist
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-lg">
            I build scalable data solutions and create insights that drive business decisions.
            Specializing in ETL pipelines, data visualization, and cloud technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get in touch
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-all duration-200"
            >
              View projects
            </Link>
          </div>
        </div>
        
        {/* Image */}
        <div className="relative flex justify-center items-center animate-fade-in-right">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
            <img
              src="/lovable-uploads/2628dcaf-b870-4733-8ab8-67b73fcabdbc.png"
              alt="Shreyas Gaikwad"
              className="w-full h-full object-cover object-center scale-110 translate-y-2"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-slow">
        <ArrowDown size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};
