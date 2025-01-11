"use client";

import {
  BookOpen,
  ExternalLink,
  GraduationCap,
  Library,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useState, useEffect } from "react";

const stats = [
  { name: "Digital Resources", value: "100,000+", icon: Library },
  { name: "Active Users", value: "15,000+", icon: Users },
  { name: "Courses", value: "50+", icon: GraduationCap },
];

const digitalResources = [
  {
    name: "DELNET",
    description: "Developing Library Network",
    url: "http://delnet.in",
  },
  {
    name: "NPTEL",
    description: "National Programme on Technology Enhanced Learning",
    url: "https://www.swayam.gov.in/NPTEL",
  },
  {
    name: "NDLI Club",
    description: "National Digital Library of India Club",
    url: "https://club.ndl.iitkgp.ac.in/sign-up",
  },
  {
    name: "IEEE Xplore",
    description: "IEEE Digital Library",
    url: "https://ieeexplore.ieee.org/Xplore/home.jsp",
  },
  {
    name: "British Council Library",
    description: "Access to British Council Resources",
    url: "http://www.library.britishcouncil.org.ac.in",
  },
  {
    name: "NDL",
    description: "National Digital Library",
    url: "https://ndl.iitkgp.ac.in",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full bg-[url('https://images.unsplash.com/photo-1583468982228-19f19164aee3?q=80&w=2662')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-sm">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Digital Library Portal
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Welcome to SVPUAT Digital Library
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Discover a world of knowledge with our comprehensive digital
                resources and academic collections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-primary hover:bg-primary/90"
                >
                  Explore Resources
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.name} className="bg-card">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2662"
                alt="University Campus"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About the University</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Sardar Vallabhbhai Patel University of Agriculture and
                Technology was established on October 02, 2000 by the Government
                of Uttar Pradesh. Located at Modipuram on Delhi-Dehradun
                highway, approximately 12 KM from Meerut city.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                The university aims to enhance education, research, and outreach
                activities in Agriculture, Veterinary Sciences, Biotechnology,
                and allied sciences, focusing on the overall development of
                rural communities in Uttar Pradesh.
              </p>
              <Button className="rounded-full">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Resources */}
      <section id="resources" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Digital Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access our comprehensive collection of digital resources and
              academic databases.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalResources.map((resource) => (
              <Card
                key={resource.name}
                className="group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {resource.name}
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our digital resources? We're here to help.
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="flex items-center justify-center gap-2">
                    <span className="font-medium">Email:</span>
                    <a
                      href="mailto:library@svpuat.ac.in"
                      className="text-primary hover:underline"
                    >
                      library@svpuat.ac.in
                    </a>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="font-medium">Phone:</span>
                    <a
                      href="tel:+911234567890"
                      className="text-primary hover:underline"
                    >
                      +91 123 456 7890
                    </a>
                  </p>
                  <p className="text-center text-sm text-muted-foreground">
                    Located at Modipuram, Delhi-Dehradun Highway
                    <br />
                    Meerut, Uttar Pradesh, India
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
