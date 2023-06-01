import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.png";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Footer = () => {
  const position = [22.807691, 90.9598646];
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 pt-4  sm:pt-10 lg:pt-12">
        <footer className="max-w-screen-2xl px-4 md:px-8   mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-gray-600 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
            <div className="col-span-full lg:col-span-2">
              <Link
                to="/"
                aria-label="courstad"
                title="courstad"
                className="inline-flex items-center mr-8 mb-4"
              >
                <img className="w-7" src={logo} alt="" />
                <span className="ml-2 text-xl font-bold tracking-wide text-green-500 capitalize">
                  Cour
                  <span className="dark:text-white text-slate-800">stad</span>
                </span>
              </Link>

              <p className="text-gray-500 dark:text-gray-400 sm:pr-8 mb-6">
                If you want to eradicate bad things from the world just spread
                the message of education.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-500 dark:text-gray-400 active:text-gray-600 transition duration-100"
                >
                  <FaFacebookSquare className="text-2xl" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-500 dark:text-gray-400 active:text-gray-600 transition duration-100"
                >
                  <FaGithubSquare className="text-2xl" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-gray-500 dark:text-gray-400 active:text-gray-600 transition duration-100"
                >
                  <FaInstagramSquare className="text-2xl" />
                </a>
              </div>
            </div>

            <div>
              <div className="text-gray-800 dark:text-gray-200 font-bold tracking-widest uppercase mb-4">
                Company
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <Link
                    to="/"
                    className="text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-500 active:text-green-700 transition duration-100"
                  >
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    to="/courses"
                    className="text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-500 active:text-green-700 transition duration-100"
                  >
                    Courses
                  </Link>
                </div>

                <div>
                  <Link
                    to="/blog"
                    className="text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-500 active:text-green-700 transition duration-100"
                  >
                    Blog
                  </Link>
                </div>
              </nav>
            </div>
            <div>
              <div className="text-gray-800 dark:text-gray-200 font-bold tracking-widest uppercase mb-4">
                Support
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <Link
                    to="/faq"
                    className="text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-500 active:text-green-700 transition duration-100"
                  >
                    FAQ
                  </Link>
                </div>

                <div>
                  <Link
                    to="/about-us"
                    className="text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-500 active:text-green-700 transition duration-100"
                  >
                    About
                  </Link>
                </div>

                <div>
                  <Link
                    to="/contact"
                    className="text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-green-500 active:text-green-700 transition duration-100"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </div>
            <div>
              <div className="text-gray-800 dark:text-gray-200 font-bold tracking-widest uppercase mb-4">
                join us
              </div>
              <MapContainer
                center={position}
                className="w-72 h-72"
                zoom={8}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>Noakhali, Sadar Upazila</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          <div className="text-gray-400 text-sm text-center border-t border-gray-600 py-8">
            © 2022 - Courstad | All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
