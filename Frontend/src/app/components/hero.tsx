"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* ซ้าย: ข้อความ */}
        <div className="space-y-6">
          <h1 className="text-balance font-extrabold leading-tight text-4xl sm:text-5xl lg:text-6xl">
            Navigating the digital landscape for success
          </h1>

          <p className="text-pretty text-base sm:text-lg text-gray-600">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              className="px-5 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 active:scale-95 transition"
              onClick={() => alert("Let's go! 🚀")}
            >
              Get Started
            </button>

            <Link
              href="/get-started"
              className="px-5 py-3 rounded-xl border font-medium hover:bg-gray-50 transition"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* ขวา: รูปภาพ */}
        <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[560px] order-last lg:order-none">
          <Image
            src="/images/Illustration.png"  // ต้องมีใน public/images/Illustration.png
            alt="Hero Image"
            fill
            className="object-contain"
            priority
            sizes="(min-width: 1024px) 50vw, 100vw" 
          />
        </div>
      </div>
      <div className="flex items-center justify-center py-6 bg-gray-50">
        <Image src="/images/amz logo.png" alt="amazon logo" width={150} height={50} className="mx-10"/>
        <Image src="/images/Company logo 2.png" alt="com logo 2" width={150} height={50} className="mx-10"/>
        <Image src="/images/HS.png" alt="HS" width={150} height={50} className="mx-10"/>
        <Image src="/images/NT.png" alt="NT" width={150} height={50} className="mx-10"/>
        <Image src="/images/NF.png" alt="NF" width={150} height={50} className="mx-10"/>
        <Image src="/images/Z.png" alt="Z" width={150} height={50} className="mx-10"/>
      </div>
    </section>
  );
}
