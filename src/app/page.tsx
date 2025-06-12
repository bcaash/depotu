import { Button } from '@/components/ui/button';
import { ArrowRightIcon, EyeIcon, UsersIcon, CheckCircleIcon, RocketIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { ClientFooter as Footer } from '@/components/layout/footer'; // Using client footer for dynamic year

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 animate-fadeIn">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
              Welcome to <span className="text-primary">CleanSlate</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Experience clarity and simplicity. Our platform is designed for focus and ease of use, with a minimalist aesthetic that puts your content first.
            </p>
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/30 transition-shadow">
              <Link href="#features">
                Discover More
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-16 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              Why Choose CleanSlate?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div className="p-8 bg-card rounded-xl shadow-lg animate-fadeIn hover:shadow-2xl transition-shadow duration-300" style={{ animationDelay: '0.4s' }}>
                <div className="flex justify-center md:justify-start mb-4">
                  <EyeIcon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Minimalist Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A clean, uncluttered interface that enhances focus and readability, letting your content shine.
                </p>
              </div>
              <div className="p-8 bg-card rounded-xl shadow-lg animate-fadeIn hover:shadow-2xl transition-shadow duration-300" style={{ animationDelay: '0.6s' }}>
                <div className="flex justify-center md:justify-start mb-4">
                  <UsersIcon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">User-Focused</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built with your experience in mind, ensuring intuitive navigation and a delightful interaction.
                </p>
              </div>
              <div className="p-8 bg-card rounded-xl shadow-lg animate-fadeIn hover:shadow-2xl transition-shadow duration-300" style={{ animationDelay: '0.8s' }}>
                <div className="flex justify-center md:justify-start mb-4">
                  <CheckCircleIcon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Responsive & Fast</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enjoy a seamless and speedy experience on any device, anywhere, anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 text-center">
             <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12 animate-fadeIn" style={{ animationDelay: '1s' }}>
              Visual Harmony
            </h2>
            <div className="relative w-full max-w-4xl mx-auto aspect-[2/1] rounded-xl overflow-hidden shadow-2xl animate-fadeIn" style={{ animationDelay: '1.2s' }}>
              <Image
                src="https://placehold.co/1200x600.png"
                alt="Minimalist abstract design"
                layout="fill"
                objectFit="cover"
                data-ai-hint="minimalist abstract"
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
             <p className="text-muted-foreground mt-8 max-w-xl mx-auto animate-fadeIn" style={{ animationDelay: '1.4s' }}>
              Our design philosophy emphasizes balance and generous whitespace to create a calming and productive digital environment.
            </p>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-primary/10">
          <div className="container mx-auto px-4 md:px-8 text-center animate-fadeIn" style={{ animationDelay: '1.6s' }}>
            <RocketIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Ready to Simplify Your World?</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join us and discover a new standard of clean, intuitive design. Start your journey with CleanSlate today.
            </p>
            <Button size="lg" className="shadow-lg hover:shadow-primary/30 transition-shadow">
                Get Started Now
                <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
