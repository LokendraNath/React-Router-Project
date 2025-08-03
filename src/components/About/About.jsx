import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://i.pinimg.com/736x/8b/45/8e/8b458ec7d0b3e5b3f18ff25a435059f6.jpg"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is explored by Lokendra Verma with passion and
              curiosity
            </h2>
            <p className="mt-6 text-gray-600">
              This project is a part of my hands-on learning journey into the
              React ecosystem. I'm building this to deeply understand how modern
              frontend frameworks work, how routing behaves, and how real-world
              UIs are composed.
            </p>
            <p className="mt-4 text-gray-600">
              As a B.Com student transitioning into tech, I’m self-learning
              React and related tools to break into the full-stack web
              development space. This project is not just a demo—it's a stepping
              stone towards my goal of becoming an industry-ready developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
