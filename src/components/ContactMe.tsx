import { Mail, Github, Linkedin, FileText } from "lucide-react"; // add FileText if you want icon

export const ContactMe = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Get In Touch</h2>
        
        <div className="max-w-xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            feel free to reach out and I'll get back to you as soon as possible!
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
            <a 
              href="mailto:piyushooo28@gmail.com" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>piyushooo28@gmail.com</span>
            </a>
            <a 
              href="https://github.com/PiyushJaiswall" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/piyush-jaiswal-435672229/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Resume Button */}
          <div className="mb-6">
            <a 
              href="https://drive.google.com/file/d/1zXJoGh4tddUGAh6BJgqoD35wWqNhmDK4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </a>
          </div>

          
          <div>
            <a 
              href="tel:9827422933" 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
