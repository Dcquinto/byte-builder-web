import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Zap, Shield, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import heroImage from "@/assets/hero-computer.jpg";
import desktopPc from "@/assets/desktop-pc.jpg";
import laptop from "@/assets/laptop.jpg";
import components from "@/assets/components.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            Next-Gen Computing
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the future of performance with cutting-edge technology designed for professionals and enthusiasts
          </p>
          <Button size="lg" className="group">
            Explore Collection
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Powerful Performance</h3>
              <p className="text-muted-foreground">
                Latest processors and graphics cards delivering unmatched speed and efficiency for any task
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all duration-300">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Optimized cooling and architecture ensuring peak performance during intensive workloads
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Built to Last</h3>
              <p className="text-muted-foreground">
                Premium components and robust construction ensuring reliability for years to come
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div id="products" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Systems</h2>
          <p className="text-xl text-muted-foreground">Engineered for excellence</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <div className="relative overflow-hidden aspect-square">
              <img 
                src={desktopPc} 
                alt="High-performance gaming desktop with RGB lighting" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-2">Gaming Desktop</h3>
              <p className="text-muted-foreground mb-4">
                Ultimate gaming experience with top-tier components and stunning RGB aesthetics
              </p>
              <Button variant="outline" className="w-full group/btn">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300">
            <div className="relative overflow-hidden aspect-square">
              <img 
                src={laptop} 
                alt="Premium laptop with backlit keyboard" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-2">Pro Laptop</h3>
              <p className="text-muted-foreground mb-4">
                Portable powerhouse combining sleek design with professional-grade performance
              </p>
              <Button variant="outline" className="w-full group/btn">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
            <div className="relative overflow-hidden aspect-square">
              <img 
                src={components} 
                alt="High-end computer components with RGB lighting" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-2">Custom Build</h3>
              <p className="text-muted-foreground mb-4">
                Handpick every component to create your perfect system tailored to your needs
              </p>
              <Button variant="outline" className="w-full group/btn">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Next-Gen Computing. Engineered for excellence.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
