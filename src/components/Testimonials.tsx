import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "SocialPro heeft onze social media aanwezigheid getransformeerd. Onze engagement steeg met 400% in slechts drie maanden.",
    author: "Sarah Johnson",
    role: "Marketing Directeur",
    company: "TechStart BV",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    quote: "De ROI die we hebben gezien sinds we met SocialPro werken is ongelooflijk. Ze begrijpen onze merkidentiteit echt.",
    author: "Michael Chen",
    role: "CEO",
    company: "Growth Dynamics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
];

export function Testimonials() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Vertrouwd door Marktleiders
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bekijk wat onze klanten zeggen over hun ervaring met ons
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.id} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
                <div className="flex gap-x-4 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-900">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-50 object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-gray-600">{testimonial.role} bij {testimonial.company}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}