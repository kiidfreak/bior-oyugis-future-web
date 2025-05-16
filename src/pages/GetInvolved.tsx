
import { useState } from "react";
import Hero from "@/components/Hero";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const volunteerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  location: z.string().min(2, { message: "Please enter your location." }),
  interests: z.string().min(2, { message: "Please tell us how you'd like to help." }),
  message: z.string().optional(),
});

type VolunteerFormValues = z.infer<typeof volunteerFormSchema>;

const GetInvolved = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<VolunteerFormValues>({
    resolver: zodResolver(volunteerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      interests: "",
      message: "",
    },
  });

  function onSubmit(data: VolunteerFormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      form.reset();
      toast({
        title: "Volunteer form submitted!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
    }, 1500);
  }
  
  const volunteerAreas = [
    {
      title: "Campaign Events",
      description: "Help organize and staff campaign events in your area.",
      icon: "📅",
    },
    {
      title: "Door-to-Door Outreach",
      description: "Engage with community members directly and share our message.",
      icon: "🏠",
    },
    {
      title: "Digital Marketing",
      description: "Assist with social media, email campaigns, and online outreach.",
      icon: "💻",
    },
    {
      title: "Content Creation",
      description: "Help create campaign materials, videos, and social media content.",
      icon: "🎨",
    },
    {
      title: "Community Organizing",
      description: "Coordinate volunteer efforts in your neighborhood.",
      icon: "👥",
    },
    {
      title: "Phone Banking",
      description: "Contact supporters and potential voters via phone.",
      icon: "📞",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Get Involved"
        subtitle="Join our campaign and be part of the change you want to see"
        imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      />
      
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Ways to Support Our Campaign</h2>
            <p className="text-lg text-center mb-12">
              There are many ways to get involved and support our campaign. Whether you have just a few hours 
              or want to take on a larger role, your help is valuable to our success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {volunteerAreas.map((area, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="text-3xl mb-4">{area.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Volunteer Sign-up Form</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Your neighborhood/town" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How would you like to help?</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us how you'd like to contribute" 
                          className="resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any other information you'd like to share" 
                          className="resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Follow Our Campaign</h3>
            <p className="mb-8">
              Stay updated with our campaign activities and share our message with your networks.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/moneybior/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:opacity-90 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span>Facebook</span>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-blue-500 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                <span>Twitter</span>
              </a>
              <a
                href="https://www.tiktok.com/discover/money-bior-house-in-oyugis"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
