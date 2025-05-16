
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download } from "lucide-react";

const Manifesto = () => {
  const manifestoTopics = [
    {
      id: "education",
      title: "Education",
      content: `
        <h3>Quality Education for All</h3>
        <p>We believe that every child deserves access to quality education. Our plan includes:</p>
        <ul>
          <li>Building and renovating school facilities across the constituency</li>
          <li>Recruiting and retaining qualified teachers through competitive compensation</li>
          <li>Implementing modern teaching methods and technologies in classrooms</li>
          <li>Establishing scholarship programs for disadvantaged students</li>
          <li>Creating vocational training centers for youth skill development</li>
        </ul>
        <p>By investing in education, we're investing in the future of our community and ensuring our youth have the tools they need to succeed.</p>
      `
    },
    {
      id: "healthcare",
      title: "Healthcare",
      content: `
        <h3>Accessible Healthcare Services</h3>
        <p>Everyone deserves access to quality healthcare regardless of their economic status. Our healthcare initiatives include:</p>
        <ul>
          <li>Upgrading existing health centers with modern equipment</li>
          <li>Establishing new clinics in underserved areas</li>
          <li>Implementing community health worker programs</li>
          <li>Creating preventive healthcare campaigns</li>
          <li>Ensuring availability of essential medicines</li>
        </ul>
        <p>We are committed to building a healthcare system that serves all members of our community efficiently and effectively.</p>
      `
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      content: `
        <h3>Modern Infrastructure Development</h3>
        <p>Quality infrastructure is the backbone of community development. Our infrastructure plan includes:</p>
        <ul>
          <li>Renovating and constructing roads to improve connectivity</li>
          <li>Developing reliable water supply systems</li>
          <li>Expanding electricity access to all areas</li>
          <li>Building public spaces and community centers</li>
          <li>Implementing proper waste management systems</li>
        </ul>
        <p>These improvements will enhance mobility, productivity, and quality of life for all residents.</p>
      `
    },
    {
      id: "economy",
      title: "Economy",
      content: `
        <h3>Economic Growth and Opportunity</h3>
        <p>A thriving local economy creates opportunities for all. Our economic development strategy includes:</p>
        <ul>
          <li>Supporting small business development through microfinance programs</li>
          <li>Attracting investments to create employment opportunities</li>
          <li>Developing local marketplaces and trade centers</li>
          <li>Promoting agricultural modernization and value addition</li>
          <li>Creating youth employment initiatives</li>
        </ul>
        <p>By strengthening our local economy, we aim to reduce poverty and increase prosperity across all segments of our community.</p>
      `
    },
    {
      id: "environment",
      title: "Environment",
      content: `
        <h3>Environmental Conservation</h3>
        <p>Protecting our natural resources ensures sustainability for future generations. Our environmental plan includes:</p>
        <ul>
          <li>Implementing reforestation programs</li>
          <li>Promoting renewable energy solutions</li>
          <li>Establishing community-based conservation projects</li>
          <li>Developing waste management and recycling programs</li>
          <li>Protecting water sources and promoting water conservation</li>
        </ul>
        <p>We are committed to sustainable development that balances economic growth with environmental protection.</p>
      `
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="My Manifesto"
        subtitle="A vision for progress and prosperity in our community"
        imageUrl="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
      />
      
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="prose max-w-none">
                <p className="text-xl mb-6">
                  My manifesto represents a comprehensive vision for the development and improvement 
                  of our community. It is based on extensive consultation with constituents, experts, 
                  and stakeholders to ensure it addresses the real needs of our people.
                </p>
                <p className="mb-8">
                  The following key pillars form the foundation of my agenda for positive change:
                </p>
              </div>
              
              <div className="text-center mb-8">
                <Button className="flex items-center gap-2">
                  <Download size={16} />
                  Download Full Manifesto PDF
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="education">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                {manifestoTopics.map((topic) => (
                  <TabsTrigger key={topic.id} value={topic.id}>
                    {topic.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {manifestoTopics.map((topic) => (
                <TabsContent key={topic.id} value={topic.id}>
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: topic.content }} />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="mt-12 border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold mb-6">My Commitment</h3>
              <p className="text-lg mb-6">
                This manifesto is not just a set of promises—it's a commitment to action. I pledge to:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p>Maintain transparency in all actions and decisions</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p>Provide regular progress reports to constituents</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p>Engage continuously with the community to address emerging needs</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p>Utilize resources efficiently and prevent wastage</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manifesto;
