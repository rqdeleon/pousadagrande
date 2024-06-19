'use client'
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star,Wifi,Bed,Tv } from "lucide-react";

export default function Features(){
  const highlights = [
      {
        text: 5,
        icon: <Star className="w-5"/>
      },
      {
        text: '100mbps',
        icon: <Wifi className="w-5" />
      },
      {
        text: '2 Bedroom',
        icon: <Bed className="w-5" />
      },
      {
        text: 'Smart TV 75"',
        icon: <Tv className="w-5" />
      }
  ]
  const featureData = [
    {
      slideNo: 1,
      title: "Master Bed Room",
      image: "https://res.cloudinary.com/dh3h0lhyh/image/upload/v1717990250/pousada/pvw3xbtpke6yjih6dloj.jpg",
      descript: "Thank you TripinGo! Book your journey now for a comfortable and reliable transportation experience.",
    },
    {
      slideNo: 2,
      title: "Bunk Bed Room",
      image: "https://res.cloudinary.com/dh3h0lhyh/image/upload/v1717990232/pousada/gr1pbrihshret0m3l2uk.jpg",
      descript: "Satifying transport service, I will never look on another ",

    },
  ];
  
  return(
    <section id="stay" className="relative h-screen flex items-center">
    <div className="container relative">
      <div className="gap-x-11 relative pr-20">
        <h2 className="text-4xl font-bold mb-6 ">Immerse yourself in our featured suites</h2>
        <p className="mb-12">Experience a stay like no other as you immerse yourself in our featured rooms, carefully crafted to provide the perfect blend of comfort and luxury.</p>
      </div>       
        <div className="">
          <Carousel opts={{align:"start"}} className="w-full relative mt-9">
              <div className="absolute -top-8 right-10">
                <CarouselPrevious className="-left-9"/>
                <CarouselNext className="-right-9" />
              </div>
            <CarouselContent>
              {featureData.map((data)=>(
                <CarouselItem key={data.slideNo} className="md:basis-3/4">
                  <div className="relative overflow-hidden w-full min-h-[450px]">
                    <Image src={data.image} alt={data.title} fill style={{objectFit:"cover"}} className=" transition-all delay-150 w-full h-[450px] object-cover rounded-lg shadow-lg hover:scale-110" />
                    <div className="absolute bottom-5 left-5 max-w-lg rounded-sm bg-secondary/85 p-8 bg-gray-900 text-secondary-foreground bg-opacity-50">
                      <h3 className="text-2xl font-bold">{data.title}</h3>
                      <p className="mt-2 text-sm">{data.descript}</p>
                      <div className="flex items-center mt-7 text-sm">
                        {highlights.map((f)=>(
                          <span key={f.text} className="flex gap-1 mr-7">{f.icon} {f.text}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                 
                </CarouselItem>
              ))} 
            </CarouselContent>
          </Carousel>
        </div>
    </div>
  </section>
  );
}