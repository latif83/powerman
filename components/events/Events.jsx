"use client";

import { getEvents } from "@/actions/actions";
import Image from "next/image";
import { useEffect, useState } from "react";

const mentorshipPrograms = [
  "Rise of the Eagles",
  "The Wealth Project",
  "Bible School",
];

const yearlyPrograms = [
  "The Power of Jesus",
  "Hour of Prophesies",
  "Healing School Conference",
  "Prophetic Horn",
  "Back to Church Crusades",
  "Schools Outreaches",
  "Healing School Conference",
];

export const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const gEvents = async () => {
      const req = await getEvents();
      if (req.status) {
        setEvents(req.events);
        console.log(req.events);
      }
    };

    gEvents();
  }, []);

  return (
    <div
    id="events"
      style={{ backgroundColor: "#002b67" }}
      className="bg-gradient-to-r from-gray-800 to-red-800 py-12 sm:px-12 px-3 text-white"
    >
      <h3 className="text-4xl font-bold">PROGRAMMES & EVENTS</h3>
      <p>
        Witness our energetic congregation in action as we celebrate our faith
        and grow closer to God through our events. From weekly worship services
        to yearly celebrations, find an event that fits your calendar and come
        experience the spirit of God.
      </p>

      <div id="mentor" className="py-10">
        <h1 className="font-bold text-xl">MENTORSHIP PROGRAMMES</h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-2 mt-3">
          {mentorshipPrograms.map((program, index) => (
            <div key={index} className="shadow-inner shadow-gray-50 border bg-gray-800 text-white rounded p-3">
              <p className="text-lg">{program}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="yearly" className="py-10">
        <h1 className="font-bold text-xl">YEARLY PROGRAMMES</h1>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-2 mt-3">
          {yearlyPrograms.map((program, index) => (
            <div key={index} className="shadow-inner shadow-gray-50 border bg-gray-800 text-white rounded p-3">
              <p className="text-lg">{program}</p>
            </div>
          ))}
        </div>
      </div>

      {/* {events.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 mt-10">
          {events.map((event) => (
            <div className="border rounded flex shadow-lg bg-white">
              <div>
              <Image
                src={event.imageUrl}
                alt="Image"
                width={400}
                height={400}
                className="h-full bg-red-200 w-[300px] object-cover"
              />
                </div>
              <div className="p-3 text-black">
                <h1 className="text-lg font-bold">{event.title}</h1>
                <p className="mt-3">{event.des}</p>
                <div className="mt-3">
                  <h1 className="font-bold">From:</h1>
                  <p>{new Date(event.sDate).toDateString()} @ {new Date(event.sDate).toLocaleTimeString()}</p>
                </div>

                <div className="mt-3">
                  <h1 className="font-bold">To:</h1>
                  <p>{new Date(event.eDate).toDateString()} @ {new Date(event.eDate).toLocaleTimeString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="italic mt-5">
          No events at the moment, please check again later.
        </p>
      )} */}
    </div>
  );
};
