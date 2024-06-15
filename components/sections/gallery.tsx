'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Waves, Dumbbell, Monitor, CloudSun } from "lucide-react";
import Image from "next/image";


export default function Gallery(){

  return(
    <section id="ameneties" className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Amenities</h2>
        <p className="text-gray-600">Explore our luxurious amenities</p>
      </div>

      <div className="container mx-auto px-4">
        <Tabs defaultValue="SwimmingPool" className="w-full text-center">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-20">
            <TabsTrigger value="SwimmingPool" className="flex gap-2 h-16"> <Waves /> Swimming Pool</TabsTrigger>
            <TabsTrigger value="gym" className="flex gap-2 h-16"><Dumbbell />Gym & Sportcenter</TabsTrigger>
            <TabsTrigger value="theatre" className="flex gap-2 h-16"><Monitor />Home Theatre</TabsTrigger>
            <TabsTrigger value="skygarden" className="flex gap-2 h-16"><CloudSun />Sky Garden</TabsTrigger>
          </TabsList>
          
          <TabsContent value="SwimmingPool">
              <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 gap-4 max-h-[450px]">
                  <div className="col-span-1 md:col-span-1 md:row-span-2">
                      <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1717990173/pousada/mlbaj0ap7pwdzma1lehu.jpg" alt="Image 1" className="w-full h-full object-cover rounded-lg shadow-md" />
                  </div>
                  <div className="col-span-1 md:col-span-2">
                      <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718384967/pousada/rfuudowxujd77rrogrh4.jpg" alt="Image 2" className="w-full h-full object-cover rounded-lg shadow-md" />
                  </div>
                  <div className="">
                      <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718384936/pousada/vo7gjarbbpwvz9zvlcdj.jpg" alt="Image 3" className="w-full h-full object-cover rounded-lg shadow-md" />
                  </div>
                  <div>
                      <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1717993351/pousada/mlbaj0ap7pwdzma1lehu.jpg" alt="Image 4" className="w-full h-full object-cover rounded-lg shadow-md" />
                  </div>
              </div>
          </TabsContent>
          <TabsContent value="gym">
              <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 gap-4 max-h-[450px]">
                  <div className="col-span-1 md:col-span-1 md:row-span-2">
                      <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1717990173/pousada/pk9vukepf3nudtejps6v.jpg" alt="Image 1" className="w-full h-full object-cover rounded-lg shadow-md" />
                  </div>
                  <div className="">
                      <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718384967/pousada/jneqlymfm9bhmkugfvav.jpg" alt="Image 2" className="w-full h-full object-cover rounded-lg shadow-md" />
                  </div>
                  <div className="col-span-1 md:col-span-1 md:row-span-2">
                      <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1717993351/pousada/IMG_7840_y1dx9r.jpg" alt="Image 4" className="w-full h-full object-cover rounded-lg shadow-md" />
                  </div>
                  <div className="">
                      <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718384936/pousada/olzclvsupv1k5lu6njkd.jpg" alt="Image 3" className="w-full h-full object-cover rounded-lg shadow-md" />
                  </div>

              </div>
          </TabsContent>
          <TabsContent value="theatre">
              <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 gap-4 max-h-[450px]">
                <div className="col-span-1 md:col-span-1 md:row-span-2">
                  <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1717990173/pousada/IMG_7723_i940ir.jpg" alt="Image 1" className="w-full h-full object-cover rounded-lg shadow-md" />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718384967/pousada/IMG_7739_zu04m1.jpg" alt="Image 2" className="w-full h-full object-cover rounded-lg shadow-md" />
                </div>
                <div className="">
                  <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1717993351/pousada/icqcxfafoswfs4d1x9wh.jpg" alt="Image 4" className="w-full h-full object-cover rounded-lg shadow-md" />
                </div>
                <div className="">
                  <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718384936/pousada/eticwxtxej78izkzp6wr.jpg" alt="Image 3" className="w-full h-full object-cover rounded-lg shadow-md" />
                </div>
              </div>
          </TabsContent>
          <TabsContent value="skygarden">
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 gap-4 max-h-[450px]">
              <div className="col-span-1 md:col-span-1 md:row-span-2">
                <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1717990173/pousada/IMG_7773_kvdyxs.jpg" alt="Image 1" className="w-full h-full object-cover rounded-lg shadow-md" />
              </div>
              <div className="">
                <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718384967/pousada/ee7shetxz88zpgbenitc.jpg" alt="Image 2" className="w-full h-full object-cover rounded-lg shadow-md" />
              </div>
              <div className="col-span-1 md:col-span-1 md:row-span-2">
                <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1717993351/pousada/pb0a9l0vtyihdwcdnmgg.jpg" alt="Image 4" className="w-full h-full object-cover rounded-lg shadow-md" />
              </div>
              <div className="">
                <Image src="https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718384936/pousada/lam9a4hzj7h9oexq2ifw.jpg" alt="Image 3" className="w-full h-full object-cover rounded-lg shadow-md" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );

}