import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {HealthStatusCard} from './health-status-card';
import type { HealthItem } from '@/data/health-data';
import { cn } from '@/lib/utils';

interface HealthStatusGridProps {
  items: HealthItem[];
  gridClassName?: string;
  className?: string;
}

export const HealthStatusGrid = ({
  items,
  gridClassName,
  className
}:HealthStatusGridProps) => {
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const desktopScrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {

    const mobileContainer = mobileScrollRef.current;
    if (mobileContainer) {
      let isScrolling = false;
      let scrollTimeout: NodeJS.Timeout;

      const handleScroll = () => {
        if (!isScrolling) {
          isScrolling = true;
          mobileContainer.style.scrollBehavior = 'auto';
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {

          const cardWidth = 216;
          const scrollLeft = mobileContainer.scrollLeft;
          const snapPosition = Math.round(scrollLeft / cardWidth) * cardWidth;
          
          mobileContainer.style.scrollBehavior = 'smooth';
          mobileContainer.scrollLeft = snapPosition;
          
          isScrolling = false;
        }, 150);
      };

      mobileContainer.addEventListener('scroll', handleScroll);
      
      return () => {
        mobileContainer.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, []);

  useEffect(() => {
   
    const desktopContainer = desktopScrollRef.current;
    if (desktopContainer) {
      let isScrolling = false;
      let scrollTimeout: NodeJS.Timeout;

      const handleScroll = () => {
        if (!isScrolling) {
          isScrolling = true;
          desktopContainer.style.scrollBehavior = 'auto';
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
       
          const cardHeight = 120; 
          const scrollTop = desktopContainer.scrollTop;
          const snapPosition = Math.round(scrollTop / cardHeight) * cardHeight;
          
          desktopContainer.style.scrollBehavior = 'smooth';
          desktopContainer.scrollTop = snapPosition;
          
          isScrolling = false;
        }, 150);
      };

      desktopContainer.addEventListener('scroll', handleScroll);
      
      return () => {
        desktopContainer.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, []);

  useEffect(() => {
    const mobileContainer = mobileScrollRef.current;
    if (!mobileContainer) return;

    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      isDown = true;
      setIsDragging(true);
      mobileContainer.style.cursor = 'grabbing';
      mobileContainer.style.scrollBehavior = 'auto';
      
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      startX = clientX - mobileContainer.offsetLeft;
      scrollLeft = mobileContainer.scrollLeft;
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;
      e.preventDefault();
      
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const x = clientX - mobileContainer.offsetLeft;
      const walk = (x - startX) * 2;
      mobileContainer.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      isDown = false;
      setIsDragging(false);
      mobileContainer.style.cursor = 'grab';
      

      setTimeout(() => {
        const cardWidth = 216;
        const scrollLeft = mobileContainer.scrollLeft;
        const snapPosition = Math.round(scrollLeft / cardWidth) * cardWidth;
        
        mobileContainer.style.scrollBehavior = 'smooth';
        mobileContainer.scrollLeft = snapPosition;
      }, 50);
    };


    mobileContainer.addEventListener('mousedown', handleMouseDown);
    mobileContainer.addEventListener('mousemove', handleMouseMove);
    mobileContainer.addEventListener('mouseup', handleMouseUp);
    mobileContainer.addEventListener('mouseleave', handleMouseUp);


    mobileContainer.addEventListener('touchstart', handleMouseDown);
    mobileContainer.addEventListener('touchmove', handleMouseMove);
    mobileContainer.addEventListener('touchend', handleMouseUp);

    return () => {
      mobileContainer.removeEventListener('mousedown', handleMouseDown);
      mobileContainer.removeEventListener('mousemove', handleMouseMove);
      mobileContainer.removeEventListener('mouseup', handleMouseUp);
      mobileContainer.removeEventListener('mouseleave', handleMouseUp);
      mobileContainer.removeEventListener('touchstart', handleMouseDown);
      mobileContainer.removeEventListener('touchmove', handleMouseMove);
      mobileContainer.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.health-card');
    
    cards.forEach((card) => {
      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          y: -5,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, [items]);

  return (
    <div className="h-full">

      <div className="block md:hidden">
        <div 
          ref={mobileScrollRef}
          className={cn(
            "flex gap-4 overflow-x-auto overflow-y-hidden",
            "pb-2 px-1 cursor-grab",
            "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
            "scroll-smooth",
            isDragging && "cursor-grabbing",
            gridClassName
          )}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0 ">
              <HealthStatusCard
                className={cn(
                  "w-[200px] health-card transition-shadow duration-200", 
                  className
                )}
                {...item}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block h-full">
        <div 
          ref={desktopScrollRef}
          className={cn(
            "flex flex-col gap-4 overflow-y-auto overflow-x-hidden",
            "h-full max-h-[500px] pr-2 scroll-smooth",
            "[&::-webkit-scrollbar]:w-1.5",
            "[&::-webkit-scrollbar-track]:bg-transparent",
            "[&::-webkit-scrollbar-thumb]:bg-slate-300",
            "[&::-webkit-scrollbar-thumb]:rounded-sm",
            "[&::-webkit-scrollbar-thumb:hover]:bg-slate-400",
            gridClassName
          )}
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#cbd5e1 transparent'
          }}
        >
          {items.map((item) => (
            <div key={item.id} className="flex-shrink-0">
              <HealthStatusCard
                className={cn(
                  "min-w-[200px] health-card transition-shadow duration-200", 
                  className
                )}
                {...item}
              />
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};
