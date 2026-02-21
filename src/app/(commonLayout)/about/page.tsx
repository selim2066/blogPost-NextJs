// "use client";

// import { getBlogs } from "@/actions/blog-action";
// import { useEffect, useState } from "react";

// export default function AboutPage() {
//   const [data, setData] = useState<string | null>(null);
//   console.log(data)

//   useEffect(() => {
//     (async()=>{
//       const {postData}= await getBlogs()
//       setData(postData)
//     })()
//   }, []);
//   return (
//     <div>AboutPage</div>
//   );
// }
// "use client";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Github, Globe, Linkedin } from "lucide-react";

// export default function AboutPage() {
//   return (
//     <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
//       {/* Hero Section */}
//       <div className="space-y-3 text-center">
//         <h1 className="text-4xl font-bold tracking-tight">About This Blog</h1>
//         <p className="text-muted-foreground max-w-2xl mx-auto">
//           A modern platform where ideas, knowledge, and experiences are shared
//           through meaningful blog posts. Built with modern technologies for
//           performance, scalability, and great user experience.
//         </p>
//       </div>

//       <Separator />

//       {/* About Section */}
//       <Card>
//         <CardHeader>
//           <CardTitle>What is this platform?</CardTitle>
//           <CardDescription>
//             Learn more about the purpose of this blog
//           </CardDescription>
//         </CardHeader>

//         <CardContent className="space-y-4 text-muted-foreground">
//           <p>
//             This blog platform allows users to create, read, and manage blog
//             posts easily. It is designed to be fast, secure, and user-friendly.
//           </p>

//           <p>
//             Users can share their knowledge, ideas, tutorials, and personal
//             experiences with the community.
//           </p>

//           <p>
//             The system includes authentication, post management, comments,
//             pagination, and modern UI components.
//           </p>
//         </CardContent>
//       </Card>

//       {/* Mission Section */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Our Mission</CardTitle>
//         </CardHeader>

//         <CardContent className="space-y-3 text-muted-foreground">
//           <p>
//             Our mission is to provide a clean, simple, and powerful platform
//             where developers and writers can share valuable content.
//           </p>

//           <p>We believe knowledge should be accessible and easy to share.</p>
//         </CardContent>
//       </Card>

//       {/* Tech Stack Section */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Built With Modern Technologies</CardTitle>
//         </CardHeader>

//         <CardContent className="flex flex-wrap gap-2">
//           <Badge>Next.js</Badge>
//           <Badge>React</Badge>
//           <Badge>TypeScript</Badge>
//           <Badge>Prisma</Badge>
//           <Badge>PostgreSQL</Badge>
//           <Badge>Express.js</Badge>
//           <Badge>Tailwind CSS</Badge>
//           <Badge>shadcn/ui</Badge>
//         </CardContent>
//       </Card>

//       {/* Author Section */}
//       <Card>
//         <CardHeader>
//           <CardTitle>About the Author</CardTitle>
//         </CardHeader>

//         <CardContent className="flex items-center gap-4">
//           <Avatar className="h-14 w-14">
//             <AvatarImage src="/avatar.png" />
//             <AvatarFallback>MSR</AvatarFallback>
//           </Avatar>

//           <div>
//             <p className="font-semibold">Md Selim Reza</p>

//             <p className="text-sm text-muted-foreground">
//               MERN Stack Developer passionate about building modern web
//               applications using Next.js, Prisma, and Express.
//             </p>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Online Presence Section */}

//       <Card>
//         <CardHeader>
//           <CardTitle className="text-center text-2xl text-purple-300">
//             Connect with Me
//           </CardTitle>
//         </CardHeader>

//         <CardContent>
//           <div className="flex flex-wrap justify-center items-center gap-3">
//             <Button
//               className="
//     bg-linear-to-r from-purple-600 to-violet-600
//     text-white
//     shadow-lg shadow-purple-500/40
//     hover:shadow-purple-500/70
//     hover:scale-105
//     transition-all duration-300
//     border-0
//   "
//               asChild
//               variant="outline"
//               size="sm"
//             >
//               <a
//                 href="https://mdselimreza.netlify.app/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 "
//               >
//                 <Globe className="h-4 w-4" />
//                 Portfolio (Netlify)
//               </a>
//             </Button>

//             <Button
//               className="
//     glow-gold
// bg-linear-to-r from-amber-500 to-yellow-500
// text-black
// shadow-lg shadow-yellow-500/40
// hover:shadow-yellow-500/70
// hover:scale-105
// transition-all duration-300
// border-0"
//               asChild
//               variant="outline"
//               size="sm"
//             >
//               <a
//                 href="https://md-selim-reza-portfolio.vercel.app/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2"
//               >
//                 <Globe className="h-4 w-4" />
//                 Portfolio (Vercel)
//               </a>
//             </Button>

//             <Button className="glow-dark
// bg-linear-to-r from-gray-500 to-gray-900
// text-white
// shadow-lg shadow-gray-900/50
// hover:shadow-gray-900/80
// hover:scale-105
// transition-all duration-300
// border-0" asChild variant="outline" size="sm">
//               <a
//                 href="https://github.com/selim2066"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2"
//               >
//                 <Github className="h-4 w-4" />
//                 GitHub
//               </a>
//             </Button>

//             <Button className="glow-blue
// bg-gradient-to-r from-blue-600 to-cyan-400
// text-white
// shadow-lg shadow-blue-500/40
// hover:shadow-blue-500/70
// hover:scale-105
// transition-all duration-300
// border-0" asChild variant="outline" size="sm">
//               <a
//                 href="https://www.linkedin.com/in/mdselimreza2000/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2"
//               >
//                 <Linkedin className="h-4 w-4" />
//                 LinkedIn
//               </a>
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
//await new Promise((resolve) => setTimeout(resolve, 3000));


// "use client";

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
// } from "@/components/ui/card";
// import { Github, Globe, Linkedin } from "lucide-react";

// export default function AboutPage() {
//   return (
//     <div className="max-w-5xl mx-auto px-6 py-12">

//       {/* Container with unified background */}
//       <div className="
//         rounded-2xl
//         border
//         bg-gradient-to-b from-background to-muted/30
//         shadow-xl
//         p-8
//         space-y-8
//       ">

//         {/* Hero */}
//         <Card className="border-0 shadow-none bg-transparent">
//           <CardHeader className="text-center">
//             <CardTitle className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
//               About This Blog
//             </CardTitle>

//             <CardDescription className="max-w-2xl mx-auto text-base">
//               A modern platform where ideas, knowledge, and experiences are shared
//               through meaningful blog posts. Built using modern technologies for
//               performance, scalability, and excellent user experience.
//             </CardDescription>
//           </CardHeader>
//         </Card>


//         {/* Platform Info */}
//         <Card className="border border-border/50 shadow-md hover:shadow-purple-500/10 transition-all">
//           <CardHeader>
//             <CardTitle className="text-purple-300">
//               Platform Overview
//             </CardTitle>
//           </CardHeader>

//           <CardContent className="space-y-3 text-muted-foreground">
//             <p>
//               This blog platform enables users to create, read, and manage posts
//               efficiently in a secure and scalable environment.
//             </p>

//             <p>
//               It is designed with modern architecture and clean UI to provide
//               the best reading and writing experience.
//             </p>
//           </CardContent>
//         </Card>


//         {/* Mission */}
//         <Card className="border border-border/50 shadow-md hover:shadow-purple-500/10 transition-all">
//           <CardHeader>
//             <CardTitle className="text-purple-300">
//               Mission
//             </CardTitle>
//           </CardHeader>

//           <CardContent className="text-muted-foreground">
//             Our mission is to create a powerful and elegant platform where
//             developers and writers can share knowledge freely and effectively.
//           </CardContent>
//         </Card>


//         {/* Tech Stack with glowing badges */}
//         <Card className="border border-border/50 shadow-md hover:shadow-purple-500/10 transition-all">
//           <CardHeader>
//             <CardTitle className="text-purple-300">
//               Technology Stack
//             </CardTitle>
//           </CardHeader>

//           <CardContent className="flex flex-wrap gap-3">

//             {[
//               "Next.js",
//               "React",
//               "TypeScript",
//               "Prisma",
//               "PostgreSQL",
//               "Express.js",
//               "Tailwind CSS",
//               "shadcn/ui",
//             ].map((tech) => (
//               <Badge
//                 key={tech}
//                 className="
//                   bg-gradient-to-r from-purple-600 to-violet-600
//                   text-white
//                   shadow-md shadow-purple-500/30
//                   hover:shadow-purple-500/60
//                   hover:scale-105
//                   transition-all
//                   border-0
//                 "
//               >
//                 {tech}
//               </Badge>
//             ))}

//           </CardContent>
//         </Card>


//         {/* Author */}
//         <Card className="border border-border/50 shadow-md hover:shadow-purple-500/10 transition-all">
//           <CardHeader>
//             <CardTitle className="text-purple-300">
//               Author
//             </CardTitle>
//           </CardHeader>

//           <CardContent className="flex items-center gap-4">
//             <Avatar className="h-14 w-14 ring-2 ring-purple-500/40 shadow-md shadow-purple-500/30">
//               <AvatarImage src="/avatar.png" />
//               <AvatarFallback>MSR</AvatarFallback>
//             </Avatar>

//             <div>
//               <p className="font-semibold text-white">
//                 Md Selim Reza
//               </p>

//               <p className="text-sm text-muted-foreground">
//                 MERN Stack Developer specializing in building scalable modern
//                 web applications with Next.js, Prisma, and Express.
//               </p>
//             </div>
//           </CardContent>
//         </Card>


//         {/* Connect with Me */}
//         <Card className="border border-border/50 shadow-md hover:shadow-purple-500/10 transition-all">

//           <CardHeader>
//             <CardTitle className="text-center text-2xl bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
//               Connect with Me
//             </CardTitle>
//           </CardHeader>

//           <CardContent>
//             <div className="flex flex-wrap justify-center gap-3">

//               {/* Netlify */}
//               <Button
//                 asChild
//                 size="sm"
//                 className="bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/40 hover:shadow-purple-500/70 hover:scale-105 transition-all border-0"
//               >
//                 <a href="https://mdselimreza.netlify.app/" target="_blank">
//                   <Globe className="h-4 w-4 mr-2" />
//                   Portfolio
//                 </a>
//               </Button>


//               {/* Vercel */}
//               <Button
//                 asChild
//                 size="sm"
//                 className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black shadow-lg shadow-yellow-500/40 hover:shadow-yellow-500/70 hover:scale-105 transition-all border-0"
//               >
//                 <a href="https://md-selim-reza-portfolio.vercel.app/" target="_blank">
//                   <Globe className="h-4 w-4 mr-2" />
//                   Portfolio (Vercel)
//                 </a>
//               </Button>


//               {/* GitHub */}
//               <Button
//                 asChild
//                 size="sm"
//                 className="bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg shadow-gray-900/50 hover:shadow-gray-900/80 hover:scale-105 transition-all border-0"
//               >
//                 <a href="https://github.com/selim2066" target="_blank">
//                   <Github className="h-4 w-4 mr-2" />
//                   GitHub
//                 </a>
//               </Button>


//               {/* LinkedIn */}
//               <Button
//                 asChild
//                 size="sm"
//                 className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/40 hover:shadow-blue-500/70 hover:scale-105 transition-all border-0"
//               >
//                 <a href="https://linkedin.com" target="_blank">
//                   <Linkedin className="h-4 w-4 mr-2" />
//                   LinkedIn
//                 </a>
//               </Button>

//             </div>
//           </CardContent>

//         </Card>

//       </div>
//     </div>
//   );
// }

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Github, Globe, Linkedin } from "lucide-react";

export default function AboutPage() {
  const techStack = [
    { name: "Next.js", className: "bg-black text-white shadow-md shadow-white/20 hover:shadow-white/40" },
    { name: "React", className: "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md shadow-cyan-400/40 hover:shadow-cyan-400/70" },
    { name: "TypeScript", className: "bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/40 hover:shadow-blue-500/70" },
    { name: "Prisma", className: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/40 hover:shadow-indigo-500/70" },
    { name: "PostgreSQL", className: "bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-md shadow-blue-700/40 hover:shadow-blue-700/70" },
    { name: "Express.js", className: "bg-gradient-to-r from-gray-600 to-gray-900 text-white shadow-md shadow-gray-700/40 hover:shadow-gray-700/70" },
    { name: "Tailwind CSS", className: "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-md shadow-cyan-500/40 hover:shadow-cyan-500/70" },
    { name: "shadcn/ui", className: "bg-gradient-to-r from-zinc-700 to-zinc-900 text-white shadow-md shadow-zinc-700/40 hover:shadow-zinc-700/70" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="rounded-2xl border bg-card dark:bg-muted/20 shadow-xl p-8 space-y-8">

        {/* Hero */}
        <Card className="border-0 shadow-none bg-transparent text-center">
          <CardHeader>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r  dark:from-purple-400 dark:to-violet-600 from-black to-purple-800 bg-clip-text text-transparent">
              About This Blog
            </CardTitle>
            <CardDescription className="max-w-2xl mx-auto text-base text-foreground">
              A modern platform where ideas, knowledge, and experiences are shared
              through meaningful blog posts. Built using modern technologies for
              performance, scalability, and excellent user experience.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Platform Info */}
        <Card className="border border-border/50 shadow-md hover:shadow-purple-500/10 transition-all text-center bg-card dark:bg-muted/10">
          <CardHeader>
            <CardTitle className="text-xl dark:from-purple-400 dark:to-violet-600 from-black to-purple-800">
              Platform Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground">
            This blog platform enables users to create, read, and manage posts
            efficiently in a secure and scalable environment. It is designed with
            modern architecture and clean UI to provide the best reading and writing experience.
          </CardContent>
        </Card>

        {/* Mission */}
        <Card className="border border-border/50 shadow-md hover:shadow-purple-500/10 transition-all text-center bg-card dark:bg-muted/10">
          <CardHeader>
            <CardTitle className="text-xl dark:from-purple-400 dark:to-violet-600 from-black to-purple-800">
              Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground">
            Our mission is to create a powerful and elegant platform where
            developers and writers can share knowledge freely and effectively.
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <Card className="border border-border/50 shadow-md hover:shadow-purple-500/10 transition-all text-center bg-card dark:bg-muted/10">
          <CardHeader>
            <CardTitle className="text-xl dark:from-purple-400 dark:to-violet-600 from-black to-purple-800">
              Technology Stack
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech) => (
              <Badge
                key={tech.name}
                className={`${tech.className} border-0 hover:scale-105 transition-all duration-300 px-3 py-1`}
              >
                {tech.name}
              </Badge>
            ))}
          </CardContent>
        </Card>

        {/* Author */}
        <Card className="border border-border/50 shadow-md hover:shadow-purple-500/10 transition-all text-center bg-card dark:bg-muted/10">
          <CardHeader>
            <CardTitle className="text-xl dark:from-purple-400 dark:to-violet-600 from-black to-purple-800">
              Author
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <Avatar className="h-16 w-16 ring-2 ring-purple-500/40 shadow-md shadow-purple-500/30">
              <AvatarImage src="https://media.licdn.com/dms/image/v2/D4E03AQGbQVZXE9k7hg/profile-displayphoto-scale_400_400/B4EZlkTr_ZIUAk-/0/1758324509220?e=1773273600&v=beta&t=kYm7Xuncnzkg8mKKe2P53M1GF4HJ2-PSoRRbu64prmo" />
              <AvatarFallback>MSR</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">Md Selim Reza</p>
              <p className="text-sm text-muted-foreground max-w-md">
                Fullstack Developer specializing in building scalable modern
                web applications using Next.js, Prisma, Express, and PostgreSQL.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Connect with Me */}
        <Card className="border border-border/50 shadow-md hover:shadow-purple-500/10 transition-all text-center bg-card dark:bg-muted/10">
          <CardHeader>
            <CardTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r dark:from-purple-400 dark:to-violet-500 from-black to-purple-800">
              Connect with Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-violet-600 text-foreground shadow-lg shadow-purple-500/40 hover:shadow-purple-500/70 hover:scale-105 transition-all border-0"
              >
                <a href="https://mdselimreza.netlify.app/" target="_blank">
                  <Globe className="h-4 w-4 mr-2" />
                  Portfolio
                </a>
              </Button>

              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-foreground shadow-lg shadow-yellow-500/40 hover:shadow-yellow-500/70 hover:scale-105 transition-all border-0"
              >
                <a href="https://md-selim-reza-portfolio.vercel.app/" target="_blank">
                  <Globe className="h-4 w-4 mr-2" />
                  Portfolio (Vercel)
                </a>
              </Button>

              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-gray-700 to-gray-900  shadow-lg  text-white shadow-gray-900/50 hover:shadow-gray-900/80 hover:scale-105 transition-all border-0"
              >
                <a href="https://github.com/selim2066" target="_blank">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>

              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-foreground shadow-lg shadow-blue-500/40 hover:shadow-blue-500/70 hover:scale-105 transition-all border-0"
              >
                <a href="https://www.linkedin.com/in/mdselimreza2000/" target="_blank">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
