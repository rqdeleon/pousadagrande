"use client"
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Testimony(){
  
  const testimonialData = [
    {
      slideNo: 1,
      name: "Eca Diaz",
      profile: "/images/testimonials/eca.jpg",
      text: "Thank you TripinGo! Book your journey now for a comfortable and reliable transportation experience.",
      job: "business-woman"
    },
    {
      slideNo: 2,
      name: "Mark Alvarez",
      profile: "/images/testimonials/mark.jpg",
      text: "Satifying transport service, I will never look on another ",
      job: "financial coach"
    },
    {
      slideNo: 3,
      name: "Jamie Gellido",
      profile: "/images/testimonials/jamie.jpg",
      text: "Very pleasant experience. Easy to reserve a trip online and received communication fast. Driver was friendly and polite a professional one.",
      job: "business owner"
    },
  ];
  
  return(
    <section id="review" className="pb-20 pt-20 dark:bg-dark lg:pb-[120px] lg:pt-[120px] bg-orange-300">
      <div className="container ">
        <h3 className="text-4xl font-bold mb-6">Every stay has a story</h3>
        <div className="relative flex justify-center ">
          <div className="relative w-full" >
            <Carousel
              opts={{ align: "start", }}
              className=""
            >
              <CarouselPrevious />
              <CarouselNext />
              <CarouselContent>
                {testimonialData.map((index) => (
                  <CarouselItem key={index.slideNo} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-secondary p-11 min-h-72 rounded-lg" >
                      <div className="">
                        <main className="">
                          <p className="text-md mb-11 font-normal italic text-body-color dark:text-dark-6" >
                            {index.text}
                          </p>
                        </main>
                        <footer className="flex gap-x-4">
                          <div className="relative rounded-full overflow-hidden w-20 h-20">
                            <Image
                                src={index.profile}
                                alt="profile image"
                                className="bg-cover object-cover"
                            />
                          </div>
                          <div className="content-center">
                            <h4 className="text-md font-semibold text-dark dark:text-white"
                            >
                              {index.name}
                            </h4>
                            <p className="text-xs text-body-color dark:text-dark-6">
                              {index.job}
                            </p>
                          </div>
                        </footer>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            </div>
          </div>
      </div>
    </section>
  );
}