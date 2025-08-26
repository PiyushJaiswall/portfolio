import { useInView } from "@/hooks/use-in-view";
import { GraduationCap, Code2, Database, Cloud, Settings, User } from "lucide-react";

export const About = () => {
  const { ref, inView } = useInView(0.2);

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
          About Me
        </h2>

        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
            }`}
        >
          <div className="bg-card border border-muted rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow mb-8">
            <p className="text-lg text-muted-foreground mb-4">
              I'm a recent B.Tech graduate in Information Technology with a strong foundation in programming, 
              software development, and problem-solving. Proficient in Python, Java, and C, with skills in SQL, 
              Git, and hands-on experience with cloud platforms like AWS and GCP.
            </p>
            <p className="text-lg text-muted-foreground">
              Passionate about machine learning, data analysis, and applying innovative technologies to solve real-world challenges. 
              Experienced in predictive modelling, backend development, and cross-functional collaboration. Always eager to contribute technical expertise to impactful and scalable projects.
            </p>
          </div>

          {/* Skills */}
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Programming Languages", icon: <Code2 />, items: ["Python", "Java", "C++", "C"] },
              { title: "Web Development", icon: <Settings />, items: ["Django", "Flask", "React"] },
              { title: "Databases", icon: <Database />, items: ["MySQL", "SQL (Intermediate)"] },
              { title: "Cloud Platforms", icon: <Cloud />, items: ["AWS", "Azure", "Google Cloud Platform"] },
              { title: "Tools and IDE", icon: <Settings />, items: ["Git", "GitHub", "VS Code", "Jupyter Notebook"] },
              { title: "Soft Skills", icon: <User />, items: ["Communication", "Teamwork", "Problem-solving", "Time Management"] },
            ].map((skill, idx) => (
              <div key={idx} className="bg-card border border-muted rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-2 text-primary font-medium">
                  {skill.icon}
                  <h4>{skill.title}</h4>
                </div>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Education</h3>
            <div className="space-y-6">
              {[
                {
                  title: "B.Tech. (Information Technology)",
                  year: "2021 - 2025",
                  institute: "KIIT University",
                  score: "CGPA: 8.60"
                },
                {
                  title: "CBSE (12th Grade)",
                  year: "2020 - 2021",
                  institute: "TSG Gurukul School",
                  score: "Percentage: 95.6%"
                },
                {
                  title: "CBSE (10th Grade)",
                  year: "2018 - 2019",
                  institute: "Kerala English Medium School",
                  score: "Percentage: 93.4%"
                }
              ].map((edu, i) => (
                <div key={i} className="bg-card border border-muted rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium text-foreground">{edu.title}</h4>
                    <span className="text-sm text-muted-foreground">{edu.year}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.institute}</p>
                  <p className="text-muted-foreground text-sm">{edu.score}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
