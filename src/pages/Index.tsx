
import Hero from "@/components/Hero";
import CampaignCard from "@/components/CampaignCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const campaignHighlights = [
    {
      title: "Education Reform",
      description: "Building better schools and investing in our children's future with improved facilities and qualified teachers.",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      link: "/manifesto#education",
      linkText: "Learn More",
    },
    {
      title: "Infrastructure Development",
      description: "Improving roads, bridges and public facilities to enhance mobility and quality of life for all citizens.",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      link: "/manifesto#infrastructure",
      linkText: "Learn More",
    },
    {
      title: "Community Outreach",
      description: "Supporting local initiatives and directly engaging with constituents to address their needs and concerns.",
      imageUrl: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      link: "/campaigns",
      linkText: "View Events",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Together, We Build a Better Kasipul"
        subtitle="Join Money Bior's campaign for positive change in Kasipul constituency"
        imageUrl="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
        ctaText="Join the Movement"
        ctaLink="/get-involved"
      />
      
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Welcome to My Campaign</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm committed to serving Kasipul constituency and building a brighter future for all residents. 
              Together, we can create meaningful change and address the issues that matter most to our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaignHighlights.map((highlight, index) => (
              <CampaignCard
                key={index}
                {...highlight}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/about">
              <Button variant="secondary" size="lg">Learn More About Me</Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold">Town Hall Meeting</h3>
                  <p className="text-gray-600">Oyugis Community Center</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    June 20, 2025 • 6:00 PM
                  </span>
                </div>
              </div>
              <p className="mb-4">
                Join us for an open discussion about our community's needs and how we plan to address them.
              </p>
              <Link to="/campaigns">
                <Button variant="outline" size="sm">View All Events</Button>
              </Link>
            </div>
            
            <div className="flex justify-center">
              <Link to="/manifesto">
                <Button className="mr-4">Read My Manifesto</Button>
              </Link>
              <Link to="/posters">
                <Button variant="outline">Campaign Materials</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
