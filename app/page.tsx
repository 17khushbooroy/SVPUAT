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
import img from "@/public/1.jpeg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import heroBg from "@/public/image.jpg";

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
    name: "Shodhsuddhi",
    description: "Plagrism Chceker",
    url: "https://shodhshuddhi.inflibnet.ac.in/",
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
  {
    name: "JGATE",
    description:
      "J-Gate is an electronic gateway to global e-journal literature",
    url: "https://www.jgatenext.com/",
  },
  {
    name: "KrishiKosh",
    description:
      "Institutional Repository of Indian National Agricultural Research System",
    url: "https://krishikosh.egranth.ac.in/home",
  },
  {
    name: "Shodhganga",
    description: "A reservoir of Indian theses @ INFLIBNET",
    url: "https://shodhganga.inflibnet.ac.in:8443/jspui/",
  },
  {
    name: "ICAR Library",
    description: " ICAR-Indian Agricultural Research Institute. Agricultural Research can shape the future of India.",
    url: "https://lib.icar.gov.in/",
  },
];

const galleryImages = [
  {
    src: "/BKB_4321.JPG",
    alt: "Library Interior",
    caption: "SVPUAT Library Main Building",
    width: 800,
    height: 600,
  },
  {
    src: "/BKB_4458.JPG",
    alt: "Library Section",
    caption: "",
    width: 800,
    height: 600,
  },
  {
    src: "/BKB_4474.JPG",
    alt: "Study Area",
    caption: "",
    width: 800,
    height: 600,
  },
  {
    src: "/BKB_4479.JPG",
    alt: "Library Resources",
    caption: "",
    width: 800,
    height: 600,
  },
  {
    src: "/BKB_4506.JPG",
    alt: "Reading Room",
    caption: "",
    width: 800,
    height: 600,
  },
  {
    src: "/LMN_7627.JPG",
    alt: "Digital Section",
    caption: "Digital Resource Center",
    width: 800,
    height: 600,
  },
  {
    src: "/LMN_7632.JPG",
    alt: "Study Space",
    caption: "Quiet Study Area",
    width: 800,
    height: 600,
  },
  {
    src: "/LMN_7633.JPG",
    alt: "Library Collection",
    caption: "Book Collection",
    width: 800,
    height: 600,
  },
  {
    src: "/LMN_7644.JPG",
    alt: "Research Section",
    caption: "Research Reference Area",
    width: 800,
    height: 600,
  },
  {
    src: "/LMN_7649.JPG",
    alt: "Library Interior",
    caption: "Modern Library Facilities",
    width: 800,
    height: 600,
  },
  {
    src: "/LMN_7703.JPG",
    alt: "Study Environment",
    caption: "",
    width: 800,
    height: 600,
  },
  {
    src: "/LMN_7776.JPG",
    alt: "Library Resources",
    caption: "",
    width: 800,
    height: 600,
  },
  {
    src: "/LMN_7832.JPG",
    alt: "Reading Area",
    caption: "",
    width: 800,
    height: 600,
  },
  {
    src: "/LMN_7915.JPG",
    alt: "Library Facilities",
    caption: "",
    width: 800,
    height: 600,
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
      <div className="relative h-[600px] w-full">
        <Image
          src={heroBg}
          alt="Library Background"
          fill
          priority
          className="object-cover brightness-50 "
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60">
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-3xl">
              <div className="bg-primary/20 text-primary px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6 backdrop-blur-sm border border-primary/10">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">
                  Digital Library Portal
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Welcome to SVPUAT Digital Library
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 drop-shadow-md">
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
                  className="rounded-full border-white/30 text-black dark:text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {/* <section className="py-12 bg-muted"> */}
      {/*   <div className="container mx-auto px-4"> */}
      {/*     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> */}
      {/*       {stats.map((stat) => ( */}
      {/*         <Card key={stat.name} className="bg-card"> */}
      {/*           <CardContent className="flex items-center gap-4 p-6"> */}
      {/*             <div className="p-3 rounded-full bg-primary/10"> */}
      {/*               <stat.icon className="w-6 h-6 text-primary" /> */}
      {/*             </div> */}
      {/*             <div> */}
      {/*               <p className="text-3xl font-bold">{stat.value}</p> */}
      {/*               <p className="text-sm text-muted-foreground">{stat.name}</p> */}
      {/*             </div> */}
      {/*           </CardContent> */}
      {/*         </Card> */}
      {/*       ))} */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </section> */}

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={img}
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
      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision Card */}
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6" />
                  Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    The Central Library envisions providing seamless access to
                    information in a networked environment and aims to become a
                    premier Learning Resource Centre, offering state-of-the-art
                    library resources and services in Agriculture and Allied
                    Sciences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide well-equipped and functional spaces where
                    students can learn independently outside of the classroom.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mission Card */}
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    To develop representative collection for all users
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    To collect information on the current topic of research
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    To develop reading habits in students
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    To support classroom teaching
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    To develop healthy relationship with college libraries of
                    the university so that library resource sharing becomes
                    possible
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    To use modern tools techniques for collection, storage and
                    dissemination of information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    To access the user needs and accordingly provide necessary
                    services
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Library Details Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              About Our Library
            </h2>

            {/* History and Building Info */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p className="text-muted-foreground">
                Central Library building of Sardar Vallabhbhai Patel University
                of Agriculture & Technology, Meerut was inaugurated by Hon'ble
                Chief Minister, Shri Yogi Aadityanath and agriculture minister
                of Uttar Pradesh on 13 December, 2020. The Library building of
                SVPUA&T, Meerut is G+1 type. It is being constructed in 5179.85
                sqm (GFArea 2775 sqm+First Floor 2404.85sqm) area.
              </p>
            </div>

            {/* Facilities Grid */}
            {/* <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Ground Floor Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Entrance Fire & Clock room</li>
                    <li>Issue Counter</li>
                    <li>Printing/Classification room</li>
                    <li>Book Binding</li>
                    <li>Administration room</li>
                    <li>Central Auditorium</li>
                    <li>Technical Section/Photocopy/Office</li>
                    <li>Conference room</li>
                    <li>Periodical section</li>
                    <li>Reference Books</li>
                    <li>Reading room</li>
                    <li>E-Library sections</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>First Floor Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>Textbook lawn</li>
                    <li>Reading rooms</li>
                    <li>Special Reading room</li>
                    <li>Group study room</li>
                    <li>Group discussion room</li>
                    <li>Seminar room</li>
                  </ul>
                </CardContent>
              </Card>
            </div> */}

            {/* Collection Statistics */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Library Collection</CardTitle>
                <CardDescription>
                  More than one Lakh Books/Periodicals capacity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3">Books (15,073 Total)</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Text Books: 7,703</li>
                      <li>Reference Books: 4,248</li>
                      <li>SC-SP Sub Plane: 164</li>
                      <li>Gifted Books: 712</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">
                      Journals (2,623 Total)
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>International: 658 (47 titles)</li>
                      <li>National: 679 (52 titles)</li>
                      <li>Gifted Journals: 1,286</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Thesis (1,242 Total)</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>PhD: 326</li>
                      <li>MSc: 749</li>
                      <li>M.Tech: 147</li>
                      <li>M.VSc.: 20</li>
                      <li>B.Tech Projects: 146</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Student Facilities */}
            <Card>
              <CardHeader>
                <CardTitle>Student Facilities & Timings</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Photocopying Facility @ Rs.0.75/- per page for Students and
                    Research Scholars
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    E-learning facility
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Access to 58,817 journals through CeRA (Consortium for
                    e-Resources in Agriculture)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Centrally Air Conditioned, 24-hour Power Backup
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    Free Wi-Fi facility for University students and faculties
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <div>
                      <strong>Library Hours:</strong>
                      <br />
                      Regular Days: 7:00AM to 12:00AM
                      <br />
                      Holidays: 09:00 AM to 02:00 PM
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
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
          <h2 className="text-3xl font-bold mb-4 mt-8 text-center">
            More Resources
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <Card>
              <CardHeader>
                <CardTitle>E-Books</CardTitle>
              </CardHeader>
              <CardContent>Access thousands of digital books</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Online Journals</CardTitle>
              </CardHeader>
              <CardContent>Browse academic journals</CardContent>
            </Card>
            <a
              href="https://scholar.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Research Papers</CardTitle>
                </CardHeader>
                <CardContent>Download scholarly articles</CardContent>
              </Card>
            </a>
            <a
              href="https://www.dailyepaper.in/daily-news/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Free Newspapers</CardTitle>
                </CardHeader>
                <CardContent>Access daily news and archives</CardContent>
              </Card>
            </a>
            <Card>
              <CardHeader>
                <CardTitle>Free Educational Videos</CardTitle>
              </CardHeader>
              <CardContent>Watch educational content and lectures</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Library Photo Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our state-of-the-art library facilities and infrastructure
              through our photo gallery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="relative aspect-[4/3] group cursor-pointer overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium px-4 text-center">
                        {image.caption}
                      </span>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-full h-[85vh] p-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={900}
                      className="object-contain w-full h-full"
                      priority
                      sizes="90vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                      <p className="text-center text-lg">{image.caption}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
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
                      href="mailto:oic.library@svpuat.edu.in"
                      className="text-primary hover:underline"
                    >
                      oic.library@svpuat.edu.in
                    </a>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="font-medium">Phone:</span>
                    <a
                      href="tel:+918874942350"
                      className="text-primary hover:underline"
                    >
                      +91 8874942350
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
