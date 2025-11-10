import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import Slider from "react-slick";



const HeroBanner = () => {
  const slides = [
    {
      title: "Find Your Perfect Study Partner",
      desc: "Connect with learners who share your goals, subjects, and study styles. Collaborate, grow, and achieve more together!",
      img: "https://images.stockcake.com/public/4/9/5/495af026-bda2-4f1a-91f0-aaa298aff36a_large/students-studying-together-stockcake.jpg",
      cta: "Find Partners",
    },
    {
      title: "Collaborate Anytime, Anywhere",
      desc: "Join or create virtual study rooms, share resources, and track your learning progress in real time.",
      img: "https://www.mcollins.com/wp-content/uploads/2025/04/Depositphotos_129750380_XL-scaled.jpg",
      cta: "Create Profile",
    },
    {
      title: "Grow Together, Learn Faster",
      desc: "Build lasting academic connections, boost motivation, and make learning a fun shared experience.",
      img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
      cta: "Get Started",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <section className="relative w-full overflow-hidden bg-base-100 text-base-content transition-all duration-500">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full">
            {/* Background Image */}
            <div
              className="relative h-[80vh] md:h-[90vh] flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#111827]/80 via-[#111827]/60 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 max-w-2xl">
                  {slide.desc}
                </p>
                <Link
                  to="/find-partners"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F97316] to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all"
                >
                  {slide.cta}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Gradient Divider (Subtle brand detail) */}
      <div className="h-1 w-full bg-gradient-to-r from-[#F97316] to-orange-600"></div>
    </section>
  );
};

export default HeroBanner;
