'use client'
import MainNav from "./main-nav"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"


const FormSchema = z.object({
  cin: z.date({
    required_error: "check-in date is required.",
  }),
  cout: z.date({
    required_error: "check-out date is required.",
  }),
  pax: z.string({
      required_error: "Staying guest",
  }),
  email: z.string().email()
})

type HeaderFormSchema = z.infer<typeof FormSchema>

export default function Header(){

  const [loading, setLoading] = useState(false)

  const form = useForm<HeaderFormSchema>({
    resolver: zodResolver(FormSchema),
  })

  async function onSubmit(data:HeaderFormSchema){
      try {
        setLoading(true)
          await fetch('api/contact/',{
            method: 'POST',
            body: JSON.stringify(data)
          })
        toast({
          variant: "default",
          title: "☑️ Message Submitted",
          description: `Thank you for messaging us ${data.email}, We are going to respond shortly `
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
    <header className="header-area">
        {/* Hero Section */}
        <MainNav />
        <section className="relative overflow-hidden bg-cover bg-center h-screen flex items-center justify-center" style={{backgroundImage:'url(https://res.cloudinary.com/dh3h0lhyh/image/upload/v1717848955/pousada/hero-banner.jpg)'}}>

            <div className="z-10 text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold">Discover the art of luxury accommodation</h1>
                <p className="mt-4 text-lg md:text-xl">From breathtaking views to exquisite furnishings, our accommodations redefine luxury and offer an experience beyond compare.</p>
                <div className="mt-8 space-x-2 flex justify-center rounded-md bg-gray-200/60 md:bg-gray-200 p-7">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col md:flex-row w-full gap-5 items-center justify-center">
                      <FormField
                        control={form.control}
                        name="cin"
                        render={({ field }) => (
                          <FormItem className="flex flex-col items-start w-full text-slate-800">
                            <FormLabel className="text-muted-foreground ml-1">Check-in date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
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
                                  disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                  }
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
                          <FormItem className="flex flex-col w-full items-start text-slate-800">
                            <FormLabel className="text-muted-foreground ml-1">check-out date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
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
                                  disabled={(date) =>
                                    date > new Date() || date < new Date("1900-01-01")
                                  }
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
                        name='pax'
                        render={({ field })=>(
                          <FormItem className="flex flex-col w-full items-start text-slate-800">
                          <FormLabel className="text-muted-foreground ml-1" >no. of person</FormLabel>
                            <Input type="text" placeholder="input numbers" {...field} />
                          <FormMessage />
                        </FormItem>
                        )}        
                      />

                      <FormField 
                        control={form.control}
                        name='email'
                        render={({ field })=>(
                          <FormItem className="flex flex-col w-full items-start text-slate-800">
                          <FormLabel className="text-muted-foreground ml-1" >email</FormLabel>
                            <Input type="email" placeholder="yourmail@website.com" {...field} />
                          <FormMessage />
                        </FormItem>
                        )}        
                      />
                      <Button type="submit" disabled={loading} className="mt-4">Submit</Button>
                    </form>
                  </Form>
                </div>
            </div>
            <div className="absolute left-0 top-22 bg-gray-600 opacity-40 h-[120%] w-full"></div>
        </section>
      </header>
  )
}