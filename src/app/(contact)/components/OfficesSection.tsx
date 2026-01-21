"use client";

import Image from "next/image";
import { Mail, Phone, Building } from "lucide-react";

interface OfficeInfo {
  title: string;
  emails: string[];
  phones: string[];
  address: string;
  image: string;
}

interface OfficesSectionProps {
  title: string;
  description: string;
  office: OfficeInfo;
  classWidth: string;
}

export function OfficesSection({
  title,
  description,
  office,
  classWidth,
}: OfficesSectionProps) {
  return (
    <section className="bg-white px-4 md:px-0 py-16 md:pt-20 w-full">
      <div className="max-w-[1344px] mx-auto">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-6 items-center text-center mx-auto px-0 md:px-9">
            <h2 className="font-display font-normal text-black text-[32px] leading-normal md:text-[44px] md:leading-[48px] tracking-[-1.28px] md:tracking-[-1.76px] uppercase">
              {title}
            </h2>
            <p className={classWidth}>{description}</p>
          </div>

          {/* Office Card */}
          <div className="flex flex-col md:flex-row w-full">
            {/* Office Image */}
            <div className="flex-1 aspect-[642/405] relative">
              <Image
                src={office.image}
                alt={office.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Office Details */}
            <div className="flex-1 bg-[#f9f6ef] flex flex-col">
              <div className="flex flex-col gap-5 md:gap-6 p-4 md:px-10 md:py-6">
                {/* Office Title */}
                <h3 className="font-display font-normal text-[var(--brown-yellow-500)] text-2xl leading-[1.2] md:text-[32px] md:leading-[1.2]">
                  {office.title}
                </h3>

                {/* Contact Details */}
                <div className="flex flex-col gap-5 md:gap-6">
                  {/* Email Row */}
                  <div className="flex gap-4 items-start md:items-center">
                    <Mail className="w-6 h-6 text-[#2c2c2c] shrink-0" />
                    <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-start md:items-center">
                      {office.emails.map((email, index) => (
                        <div key={index} className="flex items-center gap-3">
                          {index > 0 && (
                            <span className="hidden md:block w-px h-4 bg-[#9e9e9e]" />
                          )}
                          <a
                            href={`mailto:${email}`}
                            className="font-sans font-normal text-[#2c2c2c] text-base leading-6 tracking-[-0.32px] hover:opacity-80 transition-opacity"
                          >
                            {email}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Phone Row */}
                  <div className="flex gap-4 items-start md:items-center">
                    <Phone className="w-6 h-6 text-[#2c2c2c] shrink-0" />
                    <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-start md:items-center">
                      {office.phones.map((phone, index) => (
                        <div key={index} className="flex items-center gap-3">
                          {index > 0 && (
                            <span className="hidden md:block w-px h-4 bg-[#9e9e9e]" />
                          )}
                          <a
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="font-sans font-normal text-[#2c2c2c] text-base leading-6 tracking-[-0.32px] hover:opacity-80 transition-opacity"
                          >
                            {phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Address Row */}
                  <div className="flex gap-4 items-start">
                    <Building className="w-6 h-6 text-[#2c2c2c] shrink-0" />
                    <p className="font-sans font-normal text-[#2c2c2c] text-base leading-6 tracking-[-0.32px]">
                      {office.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
