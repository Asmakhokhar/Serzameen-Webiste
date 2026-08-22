import Image from "next/image";

interface VisionSectionProps {
  darkText: string;
  image: string;
  imageAlt?: string;
  grayText: string;
}

export default function VisionSection({
  darkText,
  image,
  imageAlt = "Serzameen property",
  grayText,
}: VisionSectionProps) {
  return (
    <section className="bg-[#FCFBF8] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <p
          className="
            max-w-[1250px]
            font-[var(--font-manrope)]
            text-[42px]
            font-medium
            leading-[1.02]
            tracking-[-2.5px]
            md:text-[58px]
            lg:text-[72px]
            xl:text-[82px]
          "
        >
          <span className="text-[#1E1E1E]">
            {darkText}
          </span>{" "}

          {/* Inline Property Image */}
          <span
            className="
              relative
              inline-block
              h-[42px]
              w-[95px]
              translate-y-[4px]
              overflow-hidden
              rounded-full
              align-middle
              md:h-[58px]
              md:w-[130px]
              md:translate-y-[5px]
              lg:h-[70px]
              lg:w-[155px]
              lg:translate-y-[6px]
            "
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="155px"
              className="object-cover"
            />
          </span>{" "}

          <span className="text-[#B8B8B8]">
            {grayText}
          </span>
        </p>
      </div>
    </section>
  );
}