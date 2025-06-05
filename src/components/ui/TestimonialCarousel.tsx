import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { register } from 'swiper/element/bundle';
import TestimonialCard from './TestimonialCard';
import { Testimonial } from '../../types';

register();

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  title?: string;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  title,
}) => {
  const swiperRef = useRef<HTMLElement | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    
    if (!swiperContainer) return;
    
    // Object.assign for proper TypeScript typing with the Web Component
    Object.assign(swiperContainer, {
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
    
    swiperContainer.initialize();
    
    if (prevRef.current && nextRef.current) {
      prevRef.current.addEventListener('click', () => {
        swiperContainer.swiper.slidePrev();
      });
      
      nextRef.current.addEventListener('click', () => {
        swiperContainer.swiper.slideNext();
      });
    }
  }, []);

  return (
    <div className="relative">
      {title && <h2 className="section-title text-center">{title}</h2>}
      
      <div className="relative">
        <swiper-container ref={swiperRef} init="false">
          {testimonials.map((testimonial) => (
            <swiper-slide key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </swiper-slide>
          ))}
        </swiper-container>
        
        <div className="flex justify-center mt-8 space-x-4">
          <button
            ref={prevRef}
            className="p-2 rounded-full bg-navy text-white hover:bg-gold transition duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            ref={nextRef}
            className="p-2 rounded-full bg-navy text-white hover:bg-gold transition duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;