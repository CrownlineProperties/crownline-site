import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, photo, quote, service } = testimonial;

  return (
    <div className="card h-full flex flex-col">
      <div className="flex items-center space-x-2 mb-4">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Star key={index} size={16} className="fill-gold text-gold" />
          ))}
      </div>
      <blockquote className="text-gray-700 italic mb-6 flex-grow">
        "{quote}"
      </blockquote>
      <div className="flex items-center mt-auto">
        <img
          src={photo}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600 capitalize">{service}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;