"use client";

import { useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating?: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Alex Johnson",
    role: "Founder, Startly",
    quote:
      "Working with this team was seamless. Our custom app was delivered on time and exceeded expectations.",
    avatar: "/avatar.jpg",
    rating: 5,
  },
  {
    name: "Maria Chen",
    role: "CMO, BrightEdge",
    quote:
      "Their marketing insights and development skills helped us 2x our lead conversion within a month.",
    avatar: "/avatar.jpg",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "CTO, NovaTech",
    quote:
      "The automation flows and dashboard they built saved our team hours each week. Highly recommend!",
    avatar: "/avatar.jpg",
    rating: 5,
  },
  {
    name: "Sophie Kim",
    role: "Marketing Lead, Growthly",
    quote:
      "Incredible service and attention to detail. Our project results exceeded expectations.",
    avatar: "/avatar.jpg",
    rating: 5,
  },
  {
    name: "James Alvarez",
    role: "CEO, Syncware",
    quote:
      "They helped us scale our web presence quickly and with style. Would work with them again in a heartbeat.",
    avatar: "/avatar.jpg",
    rating: 5,
  },
];

const cardsPerView = 3;
const totalPages = Math.ceil(testimonials.length / cardsPerView);

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const canSlideLeft = currentIndex > 0;
  const canSlideRight = currentIndex < totalPages - 1;

  const handlePrev = () => {
    if (canSlideLeft) setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (canSlideRight) setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section className="testimonials">
      <div className="testimonials__header">
        <h2 className="testimonials__title">
          See what our clients have to say
        </h2>
      </div>

      <div className="testimonials__slider">
        <div className="testimonials__track-wrapper">
          <div
            className="testimonials__track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div className="testimonials__card" key={i}>
                <div className="testimonials__card-head" />
                <div className="testimonials__avatar-wrapper">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="testimonials__avatar"
                  />
                </div>
                <div className="testimonials__card-body">
                  <p className="testimonials__name">{t.name}</p>
                  <p className="testimonials__role">{t.role}</p>
                  <p className="testimonials__quote">“{t.quote}”</p>
                  <div className="testimonials__stars">
                    {Array.from({ length: t.rating ?? 5 }).map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials__controls">
          <button
            className="testimonials__arrow testimonials__arrow--left"
            onClick={handlePrev}
            disabled={!canSlideLeft}
          >
            ‹
          </button>
          <button
            className="testimonials__arrow testimonials__arrow--right"
            onClick={handleNext}
            disabled={!canSlideRight}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
