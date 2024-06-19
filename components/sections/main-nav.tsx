"use client"
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { MenuIcon } from 'lucide-react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { siteinfo } from '@/siteinfo'

export default function MainNav(){
  const { setTheme } = useTheme()

  const isDesktop = useMediaQuery("(min-width:850px)")
  const navigation = [
    { name: "Know more", href: "#aboutus" },
    { name: "Where you stay", href: "#stay" },
    { name: "Review", href: "#review" },
    { name: "Amenities", href: "#ameneties" },
    { name: "Contact", href: "#footer" },
  ];

  return(
    <header className="sticky top-0 left-0 flex w-full items-center  bg-accent/75 drop-shadow-lg z-50">
    <div className="container mx-auto bg-transparent">
      <div className="relative -mx-4 flex items-center justify-between">
        <div className="w-60 max-w-full px-4">
          <h2 className="text-lg font-bold hover:text-foreground/75">
            <Link href="/" className="block w-full py-5 font-semibold text-sm">
                {siteinfo.sitename}
            </Link>
          </h2>
        </div>
        <div className="flex justify-end items-center w-full px-4">
          <div>
            <nav
              id="navbarCollapse"
              className="flex w-full px-6 py-5 bg-transparent dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent"
            >
        { isDesktop ?
              <ul className="flex space-x-5 items-center text-sm text-nowrap">
                { navigation.map((item)=>(
                    <li key={item.name}>
                      <Link 
                        href={item.href}
                        className="flex py-2 text-sm font-medium hover:text-secondary-foreground/50 dark:text-dark-6 dark:hover:text-secondary-foreground lg:ml-12 lg:inline-flex"
                      >{item.name}
                      </Link>
                    </li>
                  ))}
                <li>
                  <a 
                    href='https://www.airbnb.com/h/pousadagrande'
                    target='__blank' 
                    className="bg-orange-600 hover:bg-orange-800  text-primary-foreground w-full px-4 py-4 rounded-md text-nowrap"
                    >
                    Book Now
                  </a>
                </li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </ul>   
          :
              <Drawer direction="left">
                <DrawerTrigger>
                  <MenuIcon className="dark:text-white" />
                </DrawerTrigger>
                <DrawerContent >
                    <nav> 
                      <ul className="flex flex-col pt-10">   
                        {
                          navigation.map((item)=>(
                            <Link 
                              key={item.name}
                              href={item.href}
                              className="flex px-2 py-2 text-base font-medium text-body-color hover:text-dark hover:bg-secondary dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                            >{item.name}
                            </Link>
                          ))
                        }
                        <li>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="outline" size="icon">
                                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => setTheme("light")}>
                                Light
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => setTheme("dark")}>
                                Dark
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => setTheme("system")}>
                                System
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </li>
                      </ul>
                    </nav>
                </DrawerContent>
              </Drawer>  
            }
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}