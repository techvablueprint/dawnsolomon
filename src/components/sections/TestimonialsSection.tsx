import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Daniel Little",
    date: "October 17, 2024",
    initial: "D",
    review:
      "Working with Dawn was a pleasure, she took my site performance from a 35% to a 100% in just a few days. Dawn was also able to complete on-site and off-site SEO for my clients, while willing to learn and adapt to new tasks. Absolutely recommend her expertise.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Client <span className="text-primary">Reviews</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12 bg-muted">
                    <AvatarFallback className="bg-muted text-muted-foreground font-semibold">
                      {testimonial.initial}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.review}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
