'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Waves, Dumbbell, Monitor, CloudSun } from "lucide-react";
import { cn } from "@/lib/utils";


const tabContent = [
  {
    tabValue: "swimming",
    images:[
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/pousada/mlbaj0ap7pwdzma1lehu',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/pousada/rfuudowxujd77rrogrh4',
        divStyle: 'col-span-1 md:col-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/pousada/vo7gjarbbpwvz9zvlcdj',
        divStyle: '',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/pousada/mlbaj0ap7pwdzma1lehu',
        divStyle: '',
      },
    ]
  },
  {
    tabValue: "gym",
    images:[
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/pousada/pk9vukepf3nudtejps6v',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/pousada/jneqlymfm9bhmkugfvav',
        divStyle: '',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/pousada/IMG_7840_y1dx9r',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718682961/pousada/olzclvsupv1k5lu6njkd',
        divStyle: '',
      },
    ]
  },
  {
    tabValue: "theatre",
    images:[
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/pousada/IMG_7723_i940ir',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/pousada/IMG_7739_zu04m1',
        divStyle: '',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/pousada/icqcxfafoswfs4d1x9wh',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/pousada/eticwxtxej78izkzp6wr',
        divStyle: '',
      },
    ]
  },
  {
    tabValue: "skygarden",
    images:[
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/pousada/IMG_7773_kvdyxs',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/pousada/ee7shetxz88zpgbenitc',
        divStyle: '',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/f_auto,q_auto/v1/pousada/pb0a9l0vtyihdwcdnmgg',
        divStyle: 'col-span-1 md:col-span-1 md:row-span-2',
      },
      {
        source: 'https://res.cloudinary.com/dh3h0lhyh/image/upload/v1718607860/pousada/lam9a4hzj7h9oexq2ifw.jpg',
        divStyle: '',
      },
    ]
  },
]
export default function Gallery(){

  return(
    <section id="ameneties" className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Amenities</h2>
        <p className="text-gray-600">Explore our luxurious amenities</p>
      </div>

      <div className="container mx-auto px-4">
        <Tabs defaultValue="swimming" className="w-full text-center">
          <TabsList className="grid w-full grid-cols-2 min-h-[150px] mb-11 md:grid-cols-4  md:mb-3 md:min-h-24">
            <TabsTrigger value="swimming" className="flex gap-2 h-16"> <Waves /> Swimming Pool</TabsTrigger>
            <TabsTrigger value="gym" className="flex gap-2 h-16"><Dumbbell />Gym & Sportcenter</TabsTrigger>
            <TabsTrigger value="theatre" className="flex gap-2 h-16"><Monitor />Home Theatre</TabsTrigger>
            <TabsTrigger value="skygarden" className="flex gap-2 h-16"><CloudSun />Sky Garden</TabsTrigger>
          </TabsList>

          {
            tabContent.map((tab)=>(
              <TabsContent key={tab.tabValue} value={tab.tabValue} >
                <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 gap-4 max-h-[450px]">
                  {tab.images.map((img)=>(
                    <div key={img.source} className={cn('relative overflow-hidden',img.divStyle)}>
                      <img loading="lazy" src={img.source} alt="Image 1" className="object-cover w-full h-full rounded-lg shadow-md" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))
          }

        </Tabs>
      </div>
    </section>
  );

}