import LocationMap from "@/components/shared/location-map";

const MAP_URL =
  "https://www.google.com/maps?q=Dubai%2C%20United%20Arab%20Emirates&output=embed";

export default function ContactMap() {
  return (
    <section
      aria-label="Our location"
      className="relative overflow-hidden bg-[#FCFBF8] py-16 md:py-20"
    >
      <div className="mx-auto max-w-350 px-6">
        <div className="relative overflow-hidden rounded-3xl border border-[#E7E0D5]">
          <LocationMap src={MAP_URL} />
        </div>
      </div>
    </section>
  );
}
