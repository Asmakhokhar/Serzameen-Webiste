import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen">

    <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover"
    />

    <div className="absolute inset-0 bg-black/35"/>

</section>
  );
}
