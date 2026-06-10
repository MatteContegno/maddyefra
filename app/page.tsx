"use client";

import HomeSection from "@/app/components/HomeSection";
import LocationSection from "@/app/components/BenvenutoSection";
import RSVPSection from "@/app/components/RSVPSection";
import ListaNozzeSection from "@/app/components/ListaNozzeSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Home Section */}
      <section id="home" className="relative w-full overflow-hidden">
        <HomeSection />
      </section>

      {/* Location Section */}
      <section
        id="location"
        className="min-h-screen w-full flex items-center justify-center bg-linear-to-b from-black to-gray-900"
      >
        <LocationSection />
      </section>

      {/* RSVP Section */}
      <section
        id="rsvp"
        className="min-h-screen w-full flex items-center justify-center bg-linear-to-b from-gray-900 to-black"
      >
        <RSVPSection />
      </section>

      {/* Lista Nozze Section */}
      <section
        id="listanozze"
        className="min-h-screen w-full flex items-center justify-center bg-linear-to-b from-gray-900 to-black"
      >
        <ListaNozzeSection />
      </section>
    </div>
  );
}
