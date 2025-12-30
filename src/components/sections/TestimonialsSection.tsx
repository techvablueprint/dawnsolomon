import { Star } from "lucide-react";
import testimonialImage from "@/assets/testimonial-daniel.png";

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Client <span className="text-primary">Reviews</span>
        </h2>

        <div className="flex flex-col items-center gap-4">
          {/* 5 Star Rating */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Testimonial Image */}
          <div className="rounded-lg overflow-hidden border border-border/50 shadow-lg">
            <img
              src={testimonialImage}
              alt="Client review from Daniel Little - October 17, 2024"
              className="w-full max-w-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
