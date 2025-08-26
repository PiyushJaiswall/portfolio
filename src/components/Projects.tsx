import { 
  Github, 
  ExternalLink, 
  Camera, 
  Cpu, 
  Activity, 
  Film, 
  Car, 
  ScanText, 
  BookOpen,
  Users,
  TrendingUp
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useInView } from "@/hooks/use-in-view";

const ProjectCard = ({ project }: { project: typeof projects[number] }) => {
  const { ref, inView } = useInView(0.2);

  return (
    <div ref={ref}>
      <Card project={project} inView={inView} />
    </div>
  );
};

const projects = [
  {
    id: "face-recognition",
    title: "Face Recognition based Attendance System",
    description: "An automated attendance system using facial recognition technology to streamline the attendance-taking process.",
    github: "https://github.com/PiyushJaiswall/Face_Recognition_based_Attendance_System",
    tech: ["Python", "OpenCV", "Machine Learning"],
    demo: undefined
  },
  {
    id: "productivity",
    title: "Productivity Pro",
    description: "A full-stack productivity application with task management, Pomodoro timer, and statistics dashboard.",
    github: "https://github.com/PiyushJaiswall/Productivity-Pro",
    tech: ["React", "Express.js", "SQLite", "Context API"],
    demo: undefined
  },
  {
    id: "car-price",
    title: "Car Price Prediction",
    description: "ML model to predict car prices based on various features like make, model, year, and specifications.",
    github: "https://github.com/PiyushJaiswall/Car-Price-Prediction",
    tech: ["Python", "Scikit-learn", "Pandas", "Data Analysis"],
    demo: undefined
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    description: "Content-based movie recommendation system that suggests films based on user preferences and viewing history.",
    github: "https://github.com/PiyushJaiswall/Movie-Recommendation-System",
    tech: ["Python", "Machine Learning", "Natural Language Processing"],
    demo: undefined
  },
  {
    id: "hangman",
    title: "Hangman Game",
    description: "Classic word-guessing game implementation with a user-friendly interface.",
    github: "https://github.com/PiyushJaiswall/hangman",
    tech: ["Python", "Tkinter", "Game Development"],
    demo: undefined
  },
  {
    id: "number-plate",
    title: "Real-time Number Plate Recognition System",
    description: "Identifies and recognizes vehicle license plates in real-time with high accuracy using computer vision techniques.",
    github: "https://github.com/PiyushJaiswall/Real-time-Number-Plate-Recognition-System",
    tech: ["Python", "TensorFlow", "Computer Vision", "Image Processing"],
    demo: undefined
  },
  {
    id: "ocr",
    title: "Handwritten Character Optical Recognition",
    description: "Converts handwritten text into digital format using OCR technology with high accuracy.",
    github: "https://github.com/PiyushJaiswall/Handwritten-Character-Optical-Recognition",
    tech: ["Python", "TensorFlow", "Machine Learning", "Image Processing"],
    demo: undefined
  }
];

// Define which projects are featured
const featuredProjects = ["ocr", "number-plate", "productivity"];
const featured = projects.filter(project => featuredProjects.includes(project.id));

// Icon mapping for each project
const projectIcons = {
  'face-recognition': <Users size={48} className="text-white" />,
  'productivity': <Activity size={48} className="text-white" />,
  'car-price': <TrendingUp size={48} className="text-white" />,
  'movie-recommendation': <Film size={48} className="text-white" />,
  'hangman': <BookOpen size={48} className="text-white" />,
  'number-plate': <ScanText size={48} className="text-white" />,
  'ocr': <Cpu size={48} className="text-white" />
};

const Card = ({
  project,
  inView,
}: {
  project: typeof projects[number];
  inView: boolean;
}) => (
  <div
    className={`rounded-2xl backdrop-blur-md border border-white/10 shadow-lg transition-all duration-500 transform overflow-hidden group bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 ${
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    style={{ willChange: "opacity, transform" }}
  >
    {/* Project Icon Header */}
    <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
      <div className="p-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all">
        {projectIcons[project.id] || <Cpu size={48} className="text-white" />}
      </div>
    </div>

    <div className="p-5 flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80 border border-white/20 hover:bg-white/20 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-white hover:text-primary transition"
            title="View on GitHub"
          >
            <Github size={18} /> GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-green-400 hover:text-green-600 transition"
            title="View Live Demo"
          >
            <ExternalLink size={18} /> Live
          </a>
        )}
      </div>
    </div>
  </div>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-10">
          My Projects
        </h2>

        <Tabs defaultValue="featured" className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger
                value="featured"
                className="hover:scale-105 transition-transform duration-200"
              >
                Featured Projects
              </TabsTrigger>
              <TabsTrigger
                value="all"
                className="hover:scale-105 transition-transform duration-200"
              >
                All Projects
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent
            value="featured"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>

          <TabsContent
            value="all"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
