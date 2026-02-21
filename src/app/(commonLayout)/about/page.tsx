

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
