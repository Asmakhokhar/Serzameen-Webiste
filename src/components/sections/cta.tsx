import SectionButton from "../shared/section-button";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40 lg:py-48">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0F6B65] via-[#0D5452] to-[#0a4745] z-0" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D7C08A]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D7C08A]/5 rounded-full blur-3xl -z-10" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-295 px-6">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-[#D7C08A]/40 bg-white/5 px-6 py-2.5 backdrop-blur-sm">
            <span className="text-[#D7C08A] text-sm">★</span>
            <span className="ml-2.5 text-xs uppercase tracking-[2px] text-white/90">
              Start Your Journey
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white tracking-[-1px]">
              Ready to Find Your
            </h2>
            
            <div className="flex items-center justify-center gap-5">
              <span className="h-0.5 w-16 bg-linear-to-r from-[#D7C08A] to-transparent md:w-24" />
              
              <span className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-[#D7C08A] whitespace-nowrap">
                Perfect Home?
              </span>
              
              <span className="h-0.5 w-16 bg-linear-to-l from-[#D7C08A] to-transparent md:w-24" />
            </div>
          </div>

          {/* Description */}
          <p className="mt-8 mx-auto max-w-2xl text-base md:text-lg leading-8 text-white/85">
            Let our expert team guide you through finding the ideal property. 
            Whether you're seeking a luxury beachfront villa or a sophisticated urban residence, 
            we're here to make your real estate dreams a reality.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <SectionButton
              href="/properties"
              variant="primary"
              className="border-[#D7C08A] bg-white/10 text-white hover:border-white hover:bg-white hover:text-[#0F6B65] sm:px-10"
            >
              Browse Properties
            </SectionButton>
            
            <SectionButton
              href="/contact"
              variant="primary"
              className="border-white/30 bg-white/5 text-white hover:border-[#D7C08A] hover:bg-[#D7C08A]/20 hover:text-white sm:px-10"
            >
              Contact Our Team
            </SectionButton>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-light text-[#D7C08A]">500+</div>
              <p className="text-sm text-white/70 mt-1">Premium Properties</p>
            </div>
            
            <div className="w-px h-12 bg-white/10" />
            
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-light text-[#D7C08A]">10K+</div>
              <p className="text-sm text-white/70 mt-1">Satisfied Clients</p>
            </div>
            
            <div className="w-px h-12 bg-white/10" />
            
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-light text-[#D7C08A]">20+</div>
              <p className="text-sm text-white/70 mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
