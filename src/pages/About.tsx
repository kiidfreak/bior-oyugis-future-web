
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Hero
        title="About Money Bior"
        subtitle="Dedicated to serving our community with integrity and vision"
        imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
      />
      
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 md:mb-16">
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <div className="prose max-w-none">
                <p className="mb-4 text-lg">
                  Born and raised in Oyugis, I've witnessed firsthand the challenges 
                  and opportunities our community faces. My journey from humble beginnings 
                  to community leadership has shaped my understanding of what truly matters to our people.
                </p>
                <p className="mb-4 text-lg">
                  After completing my education, I returned to Oyugis with a vision to give back 
                  to the community that nurtured me. With over 10 years of experience in community 
                  service and public affairs, I've dedicated my career to advocating for positive change.
                </p>
                <p className="text-lg">
                  My approach to leadership is based on transparency, accountability, and genuine 
                  engagement with constituents. I believe in listening before acting, and in finding 
                  practical solutions that reflect the real needs of our diverse community.
                </p>
              </div>
            </div>
            
            <div className="mb-12 md:mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1469041797191-50ace28483c3" 
                    alt="Money Bior with community members" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">My Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p><strong>Integrity:</strong> Honesty and transparency in all actions</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p><strong>Accountability:</strong> Taking responsibility for decisions and outcomes</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p><strong>Community Focus:</strong> Prioritizing the needs of all citizens</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p><strong>Innovation:</strong> Finding creative solutions to persistent challenges</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Testimonials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-4 italic">
                    "Money Bior has consistently shown dedication to our community's issues. 
                    His approach to problem-solving is thoughtful and effective."
                  </p>
                  <p className="font-medium">- Sarah Johnson, Community Leader</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-4 italic">
                    "I've seen firsthand how Money listens to constituents and takes action. 
                    His commitment to transparency is exactly what our leadership needs."
                  </p>
                  <p className="font-medium">- Michael Ochieng, Business Owner</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/manifesto">
                <Button size="lg">Read My Manifesto</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
