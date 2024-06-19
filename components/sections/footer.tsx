'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"
import { format, formatDate } from "date-fns"
import { 
  CalendarIcon,
  Facebook,
  MapPin
 } from 'lucide-react'

import { cn } from "@/lib/utils"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useToast } from "@/components/ui/use-toast"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { siteinfo } from '@/siteinfo'


const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email({message: "Check in date is required"}),
    cin: z.date({message: "Check in date is required"}),
    cout: z.date({message: "checout date is required"}),
    message: z.string().optional(),
})

type FooterFormSchema = z.infer<typeof formSchema>

export default function Footer(){

  const form = useForm<FooterFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      name:'',
      email:'',
      cin: new Date(),
      cout: new Date(),
      message:'',
    }
  })

  const { toast } = useToast()

  const [loading, setLoading] = useState(false)

  const onSubmit = async (data:FooterFormSchema) =>{

    try {
      setLoading(true)
        await fetch('api/contact/',{
          method: 'POST',
          body: JSON.stringify(data)
        })
      toast({
        variant: "default",
        title: "☑️ Message Submitted",
        description: `Thank you for messaging us ${data.name}, We are going to respond shortly `
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: " Something went wrong",
        description: `Please try again shortly error: ${error}`
      })
    } finally{
      setLoading(false)
    }
  }

  return(
    <div id="footer" className="">
      <footer className="bg-gray-100 pt-12 relative bg-cover bg-center z-0 " style={{backgroundImage:"url(https://res.cloudinary.com/dh3h0lhyh/image/upload/v1717855760/pousada/rovhczyzqnbxmvgjcnvt.jpg)"}}>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between z-10">
            <div className="lg:w-1/2 mb-8 lg:mb-0 z-10">
                <h2 className="text-4xl font-bold text-white mb-4">Make your reservation today and create lasting memories</h2>
                <p className="text-white/80" >From the moment you step foot into our hotel, our dedicated team will ensure that every detail of your stay is meticulously taken care of.</p>
            </div>
            <div className="-mb-16 lg:w-1/2 bg-white p-8 rounded-lg shadow-lg z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Book your extraordinary stay today</h3>
                <p className="text-gray-700 mb-6">Book your extraordinary stay today and embark on a journey of indulgence and relaxation.</p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-y-4'>
                    
                    <FormField 
                      control={form.control}
                      name='name'
                      render={({field})=>(
                        <FormItem>
                          <FormControl>
                            <Input 
                              type='text'
                              alt='name'
                              placeholder='what should we call you?'
                              className='w-full p-2'
                              disabled={loading}
                            {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>

                      )}
                    />

                    <FormField 
                      control={form.control}
                      name='email'
                      render={({field})=>(
                        <FormItem>
                          <FormControl>
                            <Input 
                              type='email'
                              alt='name'
                              placeholder='email'
                              className='w-full p-2'
                              disabled={loading}
                            {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>

                      )}
                    />
                    <div className='flex space-x-4 mt-4'>
                      <FormField
                        control={form.control}
                        name="cin"
                        render={({ field }) => (
                          <FormItem className="flex flex-col items-start w-1/2 text-slate-800">
                            <FormLabel className="text-muted-foreground ml-1">Check-in date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    disabled={loading}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="cout"
                        render={({ field }) => (
                          <FormItem className="flex flex-col items-start w-1/2 text-slate-800">
                            <FormLabel className="text-muted-foreground ml-1">Check-in date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    disabled={loading}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField 
                      control={form.control}
                      name='message'
                      render={({field})=>(
                        <FormItem>
                          <FormControl>
                            <Textarea placeholder='Anything you want to ask?' disabled={loading} {...field}/>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  <Button 
                    type="submit" 
                    className="w-full text-white px-4 py-2 rounded-lg "
                    disabled={loading}
                  >
                    Connect with us
                  </Button>

                  </form>
                </Form>
            </div>
        </div>
        <section className="bg-white z-50 py-8 pt-24">
            <div className="container mx-auto px-4 bg-white z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mt-8 z-10">
                    <div className="text-gray-600">
                      <h2 className='text-xl leading-10'>{siteinfo.sitename}</h2>
                      <p className='text-xs'>{siteinfo.description}</p>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <h4>follow us:</h4>
                        <a href={siteinfo.fb} target='_blank' className="text-gray-600 hover:text-gray-900"><Facebook /></a>
                        <a href={siteinfo.airbnb} className="text-gray-600 hover:text-gray-900"><MapPin /></a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center z-10 mt-7 text-xs">
                    <div className="flex gap-x-7 items-center z-10 ml-0">
                        <p className="text-gray-600">© {siteinfo.sitename}. All Rights Reserved { formatDate(Date(),'yyyy' )}</p>
                        <p className="text-gray-600">Web develop by <a href='https://mybranches.net' target='_blank'>Ralf Quezar De Leon</a></p>
                    </div>
                    <div className="flex space-x-4 z-10">
                        <a href="#" className="text-gray-600 hover:text-gray-900">Rooms</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a>
                    </div>
                </div>
            </div>
        </section>
        <div className="absolute inset-0 bg-slate-800 opacity-85 -z-10"></div>
      </footer>
    </div>
  );
}