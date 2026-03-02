/*
import stat_image from "/mid.gif"

const Stats = () => {
  return (
      <section className="min-h-[40vh] " style={{
          backgroundImage: `url(${stat_image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
      }}>
      <div className="flex justify-center items-center md:gap-22 py-18 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">+100</h1>
          <p>Happy Clients</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">+200</h1>
          <p>Projects Completed</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">+50</h1>
          <p>Awards Won</p>
        </div>
      </div>
    </section>
  )
}

export default Stats
*/

import { useEffect, useState } from "react";
import stat_image from "/mid.gif";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
};

const Stats = () => {
  return (
    <section
      className="py-24"
      style={{
        backgroundImage: `url(${stat_image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="bg-black/70 backdrop-blur-sm py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          <div>
            <h1 className="text-5xl font-bold text-green-400">
              +<Counter target={120} />
            </h1>
            <p className="text-gray-300 mt-2">Happy Clients</p>
          </div>

          <div>
            <h1 className="text-5xl font-bold text-green-400">
              +<Counter target={300} />
            </h1>
            <p className="text-gray-300 mt-2">Projects Completed</p>
          </div>

          <div>
            <h1 className="text-5xl font-bold text-green-400">
              +<Counter target={60} />
            </h1>
            <p className="text-gray-300 mt-2">Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
