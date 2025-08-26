import { Briefcase, Building, Clock, FileText } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const experiences = [
  {
    company: "Revature India",
    role: "Training Program – Java Backend Development",
    duration: "January 2025 - April 2025",
    description: [
      "Completed 10-week training in Java, SQL, JDBC, REST APIs, and Spring Boot.",
      "Developed 2 backend Blog API projects, implementing CRUD operations, layered architecture, and database integration.",
      "Applied Agile, Maven, Git/GitHub, and JUnit testing to ensure clean, maintainable, and scalable code.",
    ],
    certificateLink: "https://drive.google.com/file/d/1dicLXs8B4Niz-n0aIrwiBveJVAV_xO6w/view?usp=sharing",
    icon: Briefcase,
  },
  {
    company: "Eduskills Foundations",
    role: "Business Analyst Virtual Internship",
    duration: "January 2024 - March 2024",
    description: [
      "Leveraged Celonis' AI-powered platform on 2 projects, creating digital twins of end-to-end processes to optimize operations and deliver measurable business value.",
      "Explored how to leverage process mining to uncover complex business insights, identify execution gaps, and capture hidden value for companies."
    ],
    certificateLink: "https://drive.google.com/file/d/1_JDWa_fnPZLx77jOUHfULqLPcEEwxG3t/view?usp=sharing",
    icon: Briefcase,
  },
  {
    company: "Cube",
    role: "Business Development Associate Intern",
    duration: "September 2023 - November 2023",
    description: [
      "Implemented social media marketing strategies, resulting in a 20% increase in lead generation.",
      "Collaborated with the team to achieve 100% of sales targets.",
      "Engaged directly with leads via LinkedIn, successfully converting them into qualified prospects and strengthening Cube's sales pipeline.",
    ],
    certificateLink: "https://drive.google.com/file/d/13VkGDl8hxB5_7vSCwjTapoX2Wdc-R3QA/view?usp=sharing",
    icon: Briefcase,
  },
  {
    company: "Acmegrade",
    role: "Data Science Intern",
    duration: "February 2023 - April 2023",
    description: [
      "Developed and implemented machine learning models for predictive analytics, improving forecast accuracy by 30%.",
      "Conducted data analysis and improved pipelines, cutting processing time by 40%.",
      "Presented findings, boosting Python skills and driving 3 new data strategies.",
    ],
    certificateLink: "https://drive.google.com/file/d/1sQtQ76AkOMVPU2qpWuUWlJDQmFMMD0WZ/view?usp=sharing",
    icon: Briefcase,
  }
];


export const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Experience</h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 rounded-full hidden sm:block transform -translate-x-1/2 z-0" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => {
              const { ref, inView } = useInView(0.2);
              const Icon = exp.icon;
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  ref={ref}
                  className={`relative flex flex-col sm:flex-row items-center ${isLeft ? 'sm:justify-start' : 'sm:justify-end'} transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ willChange: 'opacity, transform' }}
                >
                  {/* Connector dot */}
                  <span className="absolute sm:static top-2 sm:top-auto sm:absolute left-1/2 transform -translate-x-1/2 z-10 bg-background">
                    <span className="w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg">
                      <Icon className="text-primary w-5 h-5" />
                    </span>
                  </span>

                  <div
                    className={`bg-card border border-muted shadow-md rounded-xl p-6 w-full sm:w-[45%] ${
                      isLeft ? 'sm:ml-12' : 'sm:mr-12'
                    } hover:shadow-lg transition-shadow`}
                  >
                    <div className="flex flex-col sm:flex-row justify-between mb-1">
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground mt-2 sm:mt-0">
                        <Clock className="w-4 h-4" />
                        {exp.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3 text-primary font-medium">
                      <Building className="w-5 h-5" />
                      <span>{exp.company}</span>
                    </div>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-2">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    
                    {/* Certification icon button */}
                    {exp.certificateLink && (
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:underline hover:text-primary/80"
                      >
                        <FileText className="w-4 h-4 mr-1" />
                        View Certification
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

