export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 py-16 text-center relative">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-down" style={{ animationDelay: '300ms' }}>
            Hi, I'm <span className="text-primary">Piyush Jaiswal</span>
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light opacity-0 animate-fade-up" style={{ animationDelay: '600ms' }}>
            Software Developer | Data Analyst | ML Enthusiast
          </p>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground mb-12 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '900ms' }}>
            I'm a recent B.Tech graduate in Information Technology, passionate about software development, data analysis, and leveraging machine learning to solve real-world problems. I thrive on building scalable, impactful tech solutions.
          </p>
          <div className="flex justify-center gap-6 opacity-0 animate-fade-up" style={{ animationDelay: '1200ms' }}>
            <a 
              href="#contact" 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/20"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary/5 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
