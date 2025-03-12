
import { GraduationCap } from "lucide-react";

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  period,
  gpa,
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="p-3 rounded-full bg-primary/10">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold">{degree}</h3>
        <p className="text-primary font-medium">{institution}</p>
        <p className="text-muted-foreground mt-1">{period}</p>
        <p className="mt-2">GPA: {gpa}</p>
      </div>
    </div>
  );
};

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <EducationItem
            degree="Master's in Information Systems - Business Analytics"
            institution="California State University, Fullerton"
            period="August 2023 - May 2025"
            gpa="3.9/4.0"
          />
          <EducationItem
            degree="Bachelor's in Engineering, Computer Science"
            institution="Savitribai Phule Pune University"
            period="August 2016 - May 2020"
            gpa="3.8/4.0"
          />
        </div>
      </div>
    </section>
  );
};
