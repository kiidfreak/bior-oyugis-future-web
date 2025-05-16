
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero = ({ title, subtitle, imageUrl, ctaText, ctaLink }: HeroProps) => {
  return (
    <div className="relative bg-blue-700 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt="Kasipul constituency landscape"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <Link to={ctaLink}>
            <Button size="lg" className="text-lg px-8 py-6">
              {ctaText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
