import { Award, BadgeCheck, ExternalLink } from "lucide-react";

export const Certificates = () => {
  const certificates = [
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google",
      date: "August 2024",
      image: "/lovable-uploads/df5719fb-2013-49d3-a80e-4ae81f09d814.png",
    },
    {
      title: "Applied Data Science Capstone",
      issuer: "IBM",
      date: "July 2022",
      image: "/lovable-uploads/70ae712a-fa7f-4809-b02a-18d3c101aabe.png",
    },
    {
      title: "Databases and SQL for Data Science with Python",
      issuer: "IBM",
      date: "June 2022",
      image: "/lovable-uploads/e7eed5a1-894c-4323-87d3-4b94b07f0e2b.png",
    },
    {
      title: "Tools of the Trade: Linux and SQL",
      issuer: "Google",
      date: "August 2024",
      image: "/lovable-uploads/2a987dda-00ae-48fd-bc25-8917ab29d76d.png",
    },
    {
      title: "Put It to Work: Prepare for Cybersecurity Jobs",
      issuer: "Google",
      date: "August 2024",
      image: "/lovable-uploads/49aed259-afc7-4094-8d85-3a5bc27bc91f.png",
    },
    {
      title: "Automate Cybersecurity Tasks with Python",
      issuer: "Google",
      date: "August 2024",
      image: "/lovable-uploads/a1b28d80-3b6d-4b0c-954e-f936c3257588.png",
    },
    {
      title: "Covid-19 Death Medical Analysis & Visualization using Plotly",
      issuer: "Coursera Project Network",
      date: "July 2022",
      image: "/lovable-uploads/6d6d65cf-48c7-4856-89c1-0a20347417df.png",
    },
    {
      title: "Python Project for Data Science",
      issuer: "IBM",
      date: "May 2022",
      image: "/lovable-uploads/1a93137d-c989-4684-9dae-d76d03455f2e.png",
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "May 2022",
      image: "/lovable-uploads/1767f50f-d3f8-45a5-ae06-6bf2aedc2f0b.png",
    },
    {
      title: "Introduction to Business Analytics with R",
      issuer: "University of Illinois",
      date: "August 2024",
      image: "/lovable-uploads/3aa0cdd7-0dca-4cf8-b601-85c57c5413e0.png",
    },
    {
      title: "Data Science Training",
      issuer: "Internshala",
      date: "August 2021",
      image: "/lovable-uploads/9ec0ded5-beba-4483-a481-356af560c8bd.png",
    },
    {
      title: "Excel for Beginners",
      issuer: "Great Learning Academy",
      date: "October 2020",
      image: "/lovable-uploads/84208ee4-a164-44ec-bced-d9ea90e21c9f.png",
    },
    {
      title: "Certificate of Participation - GPT.py",
      issuer: "GeeksForGeeks KIIT Chapter",
      date: "April 2023",
      image: "/lovable-uploads/29552c6e-e8ed-486e-af8e-60808c405f76.png",
    },

  ];

  return (
    <section id="certificates" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Certifications & Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-[1.05] border border-muted transform hover:transform"
            >
              <div className="h-48 bg-muted flex items-center justify-center p-6 border-b border-muted">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" 
                  />
                ) : (
                  <BadgeCheck className="w-16 h-16 text-primary/50" />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-foreground">{cert.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-primary font-medium">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">View all my certificates in the Google Drive folder</p>
          <a 
            href="https://drive.google.com/drive/folders/19cZM_Jvt0JvH1RfZ8AJ5hqDqng1pLF5M" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/20"
          >
            <Award className="w-5 h-5" />
            View All Certificates
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
