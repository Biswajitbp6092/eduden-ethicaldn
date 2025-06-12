import React from "react";
import { FaRegClock } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";

const Events = () => {
  const eventsDetails = [
    {
      id: 1,
      title: "Artificial Intelligence Bootcamp",
      subtitle:
        "Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse",
      time: "1hr, 24m",
      date: "jun 12, 2024",
      image: "assets/events-photo/events-img-1.jpg",
    },
    {
      id: 2,
      title: "Cybersecurity Mastery Bootcamp",
      subtitle:
        "Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse",
      time: "1hr, 24m",
      date: "jun 12, 2024",
      image: "assets/events-photo/events-img-2.jpg",
    },
    {
      id: 3,
      title: "Android App Development Bootcamp",
      subtitle:
        "Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse",
      time: "1hr, 24m",
      date: "jun 12, 2024",
      image: "assets/events-photo/events-img-3.jpg",
    },
    {
      id: 4,
      title: "Database Management",
      subtitle:
        "Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse",
      time: "1hr, 24m",
      date: "jun 12, 2024",
      image: "assets/events-photo/events-img-4.jpg",
    },
    {
      id: 5,
      title: "Database Management",
      subtitle:
        "Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse",
      time: "1hr, 24m",
      date: "jun 12, 2024",
      image: "assets/events-photo/events-img-5.jpg",
    },
    {
      id: 6,
      title: "Database Management",
      subtitle:
        "Fermentum fusce himenaeos neque condimentum maecenas vitae congue iaculis inceptos ullamcorper habitasse",
      time: "1hr, 24m",
      date: "jun 12, 2024",
      image: "assets/events-photo/events-img-6.jpg",
    },
  ];

  return (
    <section className="bg-black pt-[100px] lg:pt-[150px] px-4 lg:px-8 xl:px-[100px]">
      <h2 className="text-[2rem] lg:text-6xl font-bold text-left lg:text-center text-white pb-2">
        Upcoming <span className="border-b-3 border-yellow-300">Events</span>
      </h2>
      <p className="text-white items-center text-left lg:text-center pt-2 lg:pt-5 xl:px-[200px] leading-loose text-lg">
        Well, because we’re not your grandma’s boring old school! At Edu-Den,
        we’re the rebels of education, the mavericks of learning, and the
        champions of fun-filled knowledge. We’ll teach you how to slay dragons
        and code websites, all while cracking jokes and sipping on virtual
        coffee.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 pt-[80px]">
        {eventsDetails.map((event) => (
          <div
            key={event.id}
            className="group relative rounded-lg overflow-hidden shadow-md h-[419px] w-[100%] mx-auto cursor-pointer"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
            />

            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>

           
            <div className="absolute bottom-0 w-full px-3 lg:px-[40px] pb-6 text-center text-white">
              <h2 className="text-3xl font-semibold mb-4">{event.title}</h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {event.subtitle}
              </p>
              <div className="flex justify-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-1">
                  <FaRegClock />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CgCalendarDates />
                  <span>{event.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
