
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Campaigns = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const pastEvents = [
    {
      id: 1,
      title: "Community Clean-up Drive",
      date: "May 15, 2025",
      location: "Oyugis Central Park",
      imageUrl: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      description: "Led a team of volunteers to clean up the central park area, demonstrating commitment to environmental conservation."
    },
    {
      id: 2,
      title: "Youth Empowerment Workshop",
      date: "April 22, 2025",
      location: "Oyugis Community Center",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      description: "Organized a skills development workshop for local youth, focusing on entrepreneurship and technology."
    },
    {
      id: 3,
      title: "Healthcare Outreach Program",
      date: "March 10, 2025",
      location: "Multiple Villages",
      imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      description: "Partnered with healthcare professionals to provide basic medical services to underserved communities."
    }
  ];
  
  const upcomingEvents = [
    {
      id: 1,
      title: "Town Hall Meeting",
      date: "June 20, 2025",
      time: "6:00 PM",
      location: "Oyugis Community Center",
      description: "Join us for an open discussion about our community's needs and how we plan to address them."
    },
    {
      id: 2,
      title: "Education Fundraiser",
      date: "July 5, 2025",
      time: "4:00 PM",
      location: "Oyugis Central School",
      description: "Help us raise funds to provide scholarships for deserving students in our community."
    },
    {
      id: 3,
      title: "Infrastructure Development Forum",
      date: "July 18, 2025",
      time: "5:30 PM",
      location: "Oyugis Town Hall",
      description: "Discussing upcoming infrastructure projects and gathering community input."
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Campaign Events"
        subtitle="Join us at our events and be part of the positive change"
        imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      />
      
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="mb-6">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {event.date} • {event.time}
                        </span>
                      </div>
                    </div>
                    <p className="mb-4">
                      {event.description}
                    </p>
                    <Button variant="outline" size="sm">Add to Calendar</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h3 className="text-lg font-semibold mb-4">Event Calendar</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">
                  Select a date to see events scheduled for that day.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  View All Events
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Past Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{event.location}</p>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline">View More Past Events</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campaigns;
