
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Shield, Users } from 'lucide-react';
import MedicalRiskForm from '../components/MedicalRiskForm';
import Footer from '../components/Footer';
import { ThemeToggle } from '../components/ThemeToggle';

const Index = () => {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-pink-950 dark:via-purple-950 dark:to-blue-950">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <Button 
              variant="outline" 
              onClick={() => setShowForm(false)}
              className="mb-4 hover:bg-pink-50 transition-colors"
            >
              ← Back to Home
            </Button>
            <h1 className="text-3xl font-bold text-foreground mb-2">Patient Information</h1>
            <p className="text-lg text-foreground/70">Please fill in your medical details for risk assessment</p>
          </div>
          <MedicalRiskForm />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-pink-950 dark:via-purple-950 dark:to-blue-950">
      {/* Header */}
      <header className="bg-background/90 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🤰</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                MaternAI
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#about" className="text-foreground/80 hover:text-pink-600 transition-colors">About</a>
              <ThemeToggle />
              <Button 
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
              >
                Predict Risk
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center animate-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-in fade-in duration-1000 delay-300">
              🤰 <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                MaternAI
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-500">
              Pregnancy Risk Level Predictor
            </h2>
            <p className="text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in duration-1000 delay-700">
              Check your pregnancy risk with our advanced AI model, 
              <span className="font-semibold text-pink-600"> whose accuracy is almost 97%</span>. 
              Get instant, reliable predictions to help ensure a healthy pregnancy journey.
            </p>
            <Button 
              onClick={() => setShowForm(true)}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom-4 duration-1000 delay-1000"
            >
              Check Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-background/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in duration-1000">
            <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose MaternAI?</h3>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our AI-powered system provides comprehensive pregnancy risk assessment using advanced machine learning algorithms.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-in slide-in-from-left-4 duration-1000">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">97% Accuracy</h4>
              <p className="text-foreground/70">
                Our advanced AI model provides highly accurate pregnancy risk predictions based on comprehensive medical data analysis.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Safe & Secure</h4>
              <p className="text-foreground/70">
                Your medical information is protected with enterprise-grade security. We prioritize your privacy and data protection.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-in slide-in-from-right-4 duration-1000 delay-500">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Expert Backed</h4>
              <p className="text-foreground/70">
                Developed in collaboration with medical professionals and validated against real-world clinical data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
