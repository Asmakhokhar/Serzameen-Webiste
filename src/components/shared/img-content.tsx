import Image from "next/image";
import SectionHeading from "./section-heading";
import SectionButton from "./section-button";

interface Props {
  image: string;
  smallTitle: string;
  title: string;
  italicWord?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function ImageContent({
  image,
  smallTitle,
  title,
  italicWord,
  description,
  buttonText,
  buttonLink,
}: Props) {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={image}
                alt={title}
                width={700}
                height={850}
                className="object-cover w-full h-[620px]"
              />
            </div>
          </div>

          <div className="space-y-8">

            <SectionHeading
              smallTitle={smallTitle}
              title={title}
              italicWord={italicWord}
            />

            <p className="text-gray-600 leading-9 text-lg">
              {description}
            </p>

            <SectionButton href={buttonLink}>
              {buttonText}
            </SectionButton>

          </div>

        </div>
      </div>
    </section>
  );
}