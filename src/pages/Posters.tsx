
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Posters = () => {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);
  
  const posterCategories = [
    {
      id: "campaign",
      title: "Campaign Posters",
      posters: [
        {
          id: "poster1",
          title: "Vote for Change",
          thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
          description: "Official campaign poster featuring Money Bior's vision for the community."
        },
        {
          id: "poster2",
          title: "Building Our Future",
          thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
          description: "Poster highlighting infrastructure development plans."
        },
        {
          id: "poster3",
          title: "Education First",
          thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
          description: "Campaign poster focused on educational reforms and initiatives."
        }
      ]
    },
    {
      id: "events",
      title: "Event Posters",
      posters: [
        {
          id: "event1",
          title: "Town Hall Meeting",
          thumbnail: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
          description: "Poster for the upcoming town hall meeting on June 20."
        },
        {
          id: "event2",
          title: "Youth Forum",
          thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
          description: "Advertisement for youth engagement forum and career fair."
        }
      ]
    },
    {
      id: "social",
      title: "Social Media",
      posters: [
        {
          id: "social1",
          title: "Instagram Banner",
          thumbnail: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
          description: "Social media banner optimized for Instagram sharing."
        },
        {
          id: "social2",
          title: "Facebook Cover",
          thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
          description: "Facebook cover image featuring campaign slogan."
        },
        {
          id: "social3",
          title: "Twitter Header",
          thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
          description: "Twitter header image with campaign highlights."
        }
      ]
    }
  ];
  
  const handleSelectPoster = (posterId: string) => {
    setSelectedPoster(posterId === selectedPoster ? null : posterId);
  };
  
  const findSelectedPoster = () => {
    if (!selectedPoster) return null;
    
    for (const category of posterCategories) {
      const poster = category.posters.find(p => p.id === selectedPoster);
      if (poster) return poster;
    }
    
    return null;
  };
  
  const selectedPosterData = findSelectedPoster();

  return (
    <div className="min-h-screen">
      <Hero
        title="Campaign Materials"
        subtitle="Download and share our campaign materials to help spread the message"
        imageUrl="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
      />
      
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Downloadable Campaign Materials</h2>
            <p className="text-lg text-center">
              These materials are free to download and distribute to help spread our campaign message. 
              Please share them within your networks to help us reach more community members.
            </p>
          </div>
          
          <Tabs defaultValue="campaign">
            <TabsList className="grid grid-cols-3 mb-8 max-w-md mx-auto">
              {posterCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {posterCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.posters.map((poster) => (
                    <div 
                      key={poster.id} 
                      className={`bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer ${selectedPoster === poster.id ? 'ring-2 ring-blue-500' : ''}`}
                      onClick={() => handleSelectPoster(poster.id)}
                    >
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <img
                          src={poster.thumbnail}
                          alt={poster.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">{poster.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{poster.description}</p>
                        <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-1">
                          <Download size={14} />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          {selectedPosterData && (
            <div className="mt-12 max-w-4xl mx-auto bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src={selectedPosterData.thumbnail}
                      alt={selectedPosterData.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-2">{selectedPosterData.title}</h3>
                  <p className="text-gray-600 mb-6">{selectedPosterData.description}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Download Options</h4>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Download size={14} />
                          JPG Format
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Download size={14} />
                          PNG Format
                        </Button>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Download size={14} />
                          PDF Format
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Printing Instructions</h4>
                      <p className="text-sm text-gray-600">
                        For best results, print on A3 paper (297 × 420mm) with high-quality settings.
                        The file is 300 DPI and suitable for professional printing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-12 text-center">
            <p className="mb-4">Need custom campaign materials?</p>
            <Button>Contact Our Team</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Posters;
