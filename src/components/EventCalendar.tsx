"use client"
import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  consectetur adipiscing elit",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  consectetur adipiscing elit",
    },
  ];

const EventCalendar = () => {

    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white p-4 '>
            <Calendar className={""} onChange={onChange} value={value} />

            <div className="flex justify-between items-center">
              <h1 className='text-xl font-semibold my-4'>Events</h1>
              <Image src="/moreDark.png" alt='' width={20} height={20}/>
            </div>

            <div className='flex flex-col gap-4'>
                {events.map(event => (
                    <div className='p-5 rounded-md border-2 border-gray-100 border-b-4 border-r-4 odd:border-b-lamaSky even:border-b-lamaPurple odd:border-r-lamaSky even:border-r-lamaPurple' key={event.id}>
                      <div className="flex items-center justify-between">
                        <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                        <span className='text-xs text-gray-300'>{event.time}</span>
                      </div>
                      <p className='mt-2 text-gray-400  text-sm'>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventCalendar;