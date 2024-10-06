
'use client';

import Image from "next/image"
import { useEffect, useState } from "react"

import { Button } from "@headlessui/react"
import { Checkbox } from '@headlessui/react'

import { CheckIcon } from '@heroicons/react/16/solid'
import { Field, Label, Radio, RadioGroup, Input } from '@headlessui/react'


import {ChevronRight, ChevronLeft, X, MoreHorizontal, MapPin, Calendar as CalendarIcon, Clock} from "lucide-react"

import { Calendar2 } from "@/components/ui/calendar2"

interface companyData 
{
  "id": number;
  "name": string;
  "category": string|any;
  "des": string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const categories = ["체험·테마관광", "관광기념품·캐릭터", "관광콘텐츠·여행상품","관광IT·플랫폼","SNS·마케팅","해양·레저","실감형 관광콘텐츠","지역특화콘텐츠","관광체험서비스","관광딥테크","관광인프라","관광체험 서비스"]

export default function Community() {

  const [company, setCompany] = useState<companyData[]>([])
  const [groupedData, setGroupedData] = useState<Record<string, companyData[]>>({})

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  useEffect(()=>{
    fetch('/startup.json').then(res=>res.json())
    .then(data=>setCompany(data))
    console.log(company)

    fetch('/grouped.json').then(res=>res.json())
    .then(data=>setGroupedData(data))
  }, [])

  const filteredItems = company.filter(item => 
    selectedCategories.length === 0 || selectedCategories.includes(item.category)
  )

  //////
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = Math.ceil(company.length / itemsPerPage)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
    setCurrentPage(1) // Reset to first page when filter changes
  }

  const renderPaginationButtons = () => {
    const buttons = []
    const maxButtons = 5 // Maximum number of buttons to show

    if (totalPages <= maxButtons) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <Button
            key={i}
            className={currentPage === i ? " inline-flex items-center justify-center text-white whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white-foreground hover:bg-black/90 h-10 px-4 py-2" : " inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-5 border border-input bg-background hover:bg-accent hover:text-accent-foreground"}
            onClick={() => paginate(i)}
            aria-label={`Go to page ${i}`}
            aria-current={currentPage === i ? "page" : undefined}
          >
            {i}
          </Button>
        )
      }
    } else {
      // Always show first page
      buttons.push(
        <Button
          key={1}
          //variant={currentPage === 1 ? "default" : "outline"}
          onClick={() => paginate(1)}
          aria-label="Go to first page"
          aria-current={currentPage === 1 ? "page" : undefined}
          className={currentPage === 1 ? "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium text-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white-foreground hover:bg-black/90 h-10 px-4 py-2" : "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"}
        >
          1
        </Button>
      )

      // Show ellipsis if necessary
      if (currentPage > 3) {
        buttons.push(
          <Button key="ellipsis1" 
          className=" border-input bg-background hover:bg-accent hover:text-accent-foreground"
          disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        )
      }

      // Show current page and surrounding pages
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        buttons.push(
          <Button
            key={i}
            className={currentPage === i ? "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-white font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white-foreground hover:bg-black/90 h-10 px-4 py-2" : "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"}
            onClick={() => paginate(i)}
            aria-label={`Go to page ${i}`}
            aria-current={currentPage === i ? "page" : undefined}
          >
            {i}
          </Button>
        )
      }

      // Show ellipsis if necessary
      if (currentPage < totalPages - 2) {
        buttons.push(
          <Button key="ellipsis2" className=" border-input bg-background hover:bg-accent hover:text-accent-foreground" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        )
      }

      // Always show last page
      buttons.push(
        <Button
          key={totalPages}
          className={currentPage === totalPages ? "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-black-foreground text-white hover:bg-black/90 h-10 px-4 py-2" : " inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"}
          onClick={() => paginate(totalPages)}
          aria-label="Go to last page"
          aria-current={currentPage === totalPages ? "page" : undefined}
        >
          {totalPages}
        </Button>
      )

    }
    return buttons
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState<companyData[] | any>([]);

  // Handle search input change
  const handleSearch = (e: any) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter the data based on the search term
    const filtered = company.filter((item) =>
      item.name.toLowerCase().includes(term) || 
      item.category.toLowerCase().includes(term) ||
      item.des.toLowerCase().includes(term)
    );

    setFilteredData(filtered);
  };

  const [loading, setLoading] = useState(false);

  const meetings = [
    { name: "Leslie Alexander", date: "January 10th, 2022 at 5:00 PM", location: "Starbucks" },
    { name: "Michael Foster", date: "January 12th, 2022 at 3:00 PM", location: "Tim Hortons" },
    { name: "Dries Vincent", date: "January 12th, 2022 at 5:00 PM", location: "Costa Coffee at Braehead" },
  ]

  const [addEvent, setAddEvent] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date())
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically handle the form submission,
    // e.g., sending the data to an API or updating local state
    console.log("Form submitted")
    setAddEvent(false)
  }
  const [newEvent, setnewEvent] = useState(false);
  return (
    <>
      <div className="w-full">
        {loading && (
          <>
            <div className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl">
              <div className="z-20">
                
                <div className="flex gap-4">
                  
                  <div className="p-4">
                    <h1 className="text-2xl font-bold mb-8">Upcoming meetings</h1>
                    {meetings.map((meeting, index) => (
                      <div key={index} className="flex items-start space-x-4 mb-4 last:mb-0">
                        <div className="flex-grow">
                          <h2 className="font-semibold">{meeting.name}</h2>
                          <div className="text-sm text-gray-500 flex items-center">
                            <CalendarIcon className="w-4 h-4 mr-1" />
                            {meeting.date}
                          </div>
                          
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                    {newEvent && (
                      <div className="flex items-start space-x-4 mb-4 last:mb-0">
                      <div className="flex-grow">
                        <h2 className="font-semibold">장채연</h2>
                        <div className="text-sm text-gray-500 flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-1" />
                          October 6th, 2024
                        </div>
                        
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                    )}
                  </div>
                  <div className="space-y-4 h-full">
                    <div>
                      <Calendar2 className="rounded-md border" />
                      {addEvent && (
                        <>
                          <Field>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="name" className="text-right">
                                Name
                              </Label>
                              <Input id="name" className={classNames(
                                'mt-3 block w-full rounded-lg border-none bg-zinc-200 py-1.5 px-3 text-sm/6 text-black col-span-3',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                              )} />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="date" className="text-right">
                                Date
                              </Label>
                              <div className="col-span-3 flex items-center">
                                <Input
                                  id="date"
                                  value={date ? date.toLocaleDateString() : ""}
                                  className={classNames(
                                    'mt-3 block w-full rounded-lg border-none bg-zinc-200 py-1.5 px-3 text-sm/6 text-black',
                                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                  )}
                                />
                                <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                              </div>
                            </div>
                          </div>
                          </Field>
                        </>
                      )}
                      
                    </div>
                    <button onClick={()=>{
                      {addEvent ? setAddEvent(false) : setAddEvent(true)};
                      {addEvent ? setnewEvent(true): ""};
                    }} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                      {addEvent ? "Save event" : "Add event"}
                    </button>
                  </div>
                  
                </div>
              </div>
              <div className="inset-x-0 z-0 bottom-0 h-full absolute bg-gradient-to-t [mask-image:radial-gradient(900px_at_center,transparent_30%,white)]"></div>
            </div>
          </>
        )}
        {loading && (
          <button
            className="fixed top-4 right-4 text-black dark:text-white z-[120]"
            onClick={() => {
              setLoading(false);
            }}
          >
            <X className="h-10 w-10 stroke-black" />
          </button>
        )}
        <div className="relative w-full h-[580px]">
          <Image src="/community2.png" layout="fill" objectFit="cover" alt="sea" className="brightness-[.7]" />
          <div className="absolute inset-0 flex flex-col text-center items-center justify-center">
            <p className="text-[36px] font-bold text-[#ffffff]">Workation을 넘어, 새로운 혁신이 발생하는 곳</p>
            <p className="mt-6 text-lg text-[#ffffff]">소통과 혁신이 함께하는 워크스페이스, 새로운 가능성을 발견하세요.</p>
          </div>
        </div>
        <div className="w-full">
          <div className="container mx-auto px-4 py-16 relative">
            <div className="relative">

              <header className="mb-16 px-6 ">
                <h2 className="text-md text-gray-600 mb-2">네트워킹 with Busan</h2>
                <h1 className="text-4xl font-bold mb-2">
                  <span className="text-gray-400">스몰미팅</span>을 통해 워케이션을 더욱 가치있게 만듭니다.
                </h1>
                <p className="text-lg text-gray-600">네트워킹을 통해 성장하는 기업 그리고 부산</p>
              </header>
              <div className="">
                <div className="grid grid-cols-6 border py-4 mb-8 px-6">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2 mb-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="group size-6 rounded-md bg-gray-50 p-1 ring-1 ring-gray-300 ring-inset data-[checked]:bg-gray-300"
                      >
                        <CheckIcon className="hidden size-4 fill-white group-data-[checked]:block" />
                      </Checkbox>
                      <label htmlFor={category} className="text-semibold">{category}</label>
                    </div>
                  ))}
                </div>
                
                <div className=" grid grid-cols-2 gap-4">
                  {company && currentItems.map((data, index)=>(
                    <button onClick={() => setLoading(true)} className="">
                      <div className="rounded-lg border shadow-sm h-[120px]">
                        <div className="flex flex-row p-4 px-6 border-b">
                          <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                            {data.name}
                          </h3>
                          <span className="px-4 text-sm text-gray-600 align-text-bottom">{data.category}</span>
                        </div>
                        <div className="pt-3 px-6 pb-6">
                          <p className="leading-tight text-left">{data.des}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-center items-center space-x-2 mt-8">
                  <Button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Go to previous page"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {renderPaginationButtons()}
                  <Button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Go to next page"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}