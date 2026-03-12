// import React from 'react'

// function OurTeamSection() {
//   return (
//     <div>OurTeamSection</div>
//   )
// }

// export default OurTeamSection
"use client";

import { Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "James Mitchell",
    role: "Chief Executive Officer",
    description:
      "Visionary leader with 15+ years of experience in technology and product development.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    description:
      "Tech innovator specializing in scalable platforms and AI-driven solutions.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Michael Torres",
    role: "Chief Operations Officer",
    description:
      "Operations expert focused on building efficient systems and exceptional teams.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    description:
      "Creative director passionate about user-centric design and brand experiences.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80",
  },
    {
    name: "James Mitchell",
    role: "Chief Executive Officer",
    description:
      "Visionary leader with 15+ years of experience in technology and product development.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    description:
      "Tech innovator specializing in scalable platforms and AI-driven solutions.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Michael Torres",
    role: "Chief Operations Officer",
    description:
      "Operations expert focused on building efficient systems and exceptional teams.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    description:
      "Creative director passionate about user-centric design and brand experiences.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=500&q=80",
  },
  
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    description:
      "Tech innovator specializing in scalable platforms and AI-driven solutions.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Michael Torres",
    role: "Chief Operations Officer",
    description:
      "Operations expert focused on building efficient systems and exceptional teams.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
];

export default function OurTeamSection() {
  return (
    <section className="relative overflow-hidden bg-[#020617] px-6 py-20 text-white md:px-12 lg:px-20">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(59,130,246,0.16),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_80px] opacity-20" />

      {/* <div className="relative mx-auto max-w-7xl"> */}
      <div className="relative w-full">
        {/* heading */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Our <span className="text-[#5b7cff]">Team</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-400 md:text-[18px]">
            Meet the passionate individuals behind Auxvera who are dedicated to
            building the future of device lifecycle management.
          </p>
        </div>

        {/* cards */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5 " >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-[24px] border border-blue-900/30 bg-[linear-gradient(180deg,rgba(7,12,35,0.98),rgba(2,6,23,0.98))] px-10  pb-8 pt-10 text-center shadow-[0_0_35px_rgba(37,99,235,0.18),0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(59,130,246,0.24),0_24px_70px_rgba(0,0,0,0.6)]"
            >
              {/* bottom blue glow */}
              <div className="absolute inset-x-8 bottom-0 h-16 rounded-full bg-blue-600/20 blur-3xl" />

              {/* top soft glow */}
              <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_35%)]" />

              <div className="relative">
                <div className="mx-auto mb-8 h-52 w-52 overflow-hidden rounded-full border-[3px] border-[#1d2748] shadow-[0_0_0_4px_rgba(2,6,23,0.9)]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h3 className="text-[22px] font-bold text-white">
                  {member.name}
                </h3>

                <p className="mt-2 text-[16px] font-medium text-[#5b7cff]">
                  {member.role}
                </p>

                <p className="mx-auto mt-6 max-w-[280px] text-[16px] leading-8 text-gray-400">
                  {member.description}
                </p>

                <div className="mt-7 flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0c132b] text-gray-400 transition hover:text-white"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>

                  <a
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0c132b] text-gray-400 transition hover:text-white"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}