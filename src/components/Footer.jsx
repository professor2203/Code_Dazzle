import React from "react";
import { Link as RouterLink } from "react-router-dom"; // Use for routing
import {
  Facebook,
  LinkedIn,
  Instagram,
  Twitter,
  YouTube,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0c1a3c] text-white w-full py-10">
      <div className="container mx-auto px-4 py-10 md:px-20 md:py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <RouterLink to="/" className="flex items-center text-white mb-4">
              <img
                src={logo}
                alt="Code Dazzle Logo"
                className="w-52 h-24 rounded-lg"
              />
            </RouterLink>
            <div className="flex gap-2">
              <a href="#" className="text-white">
                <Facebook />
              </a>
              <a href="#" className="text-white">
                <LinkedIn />
              </a>
              <a href="#" className="text-white">
                <Instagram />
              </a>
              <a href="#" className="text-white">
                <Twitter />
              </a>
              <a href="#" className="text-white">
                <YouTube />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h6 className="mb-2 text-lg font-semibold">Services</h6>
            <ul className="space-y-1">
              {[
                "Predictive Modelling",
                "Chat GPT Integration",
                "Natural Language Processing",
                "Machine Learning",
                "Computer Vision",
                "Big Data Analytics",
              ].map((service) => (
                <li key={service}>
                  <RouterLink
                    to="#"
                    className="text-white hover:text-[#2196F3] text-sm"
                  >
                    {service}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h6 className="mb-2 text-lg font-semibold">Get In Touch</h6>
            <p className="flex items-center gap-2 text-sm">
              <Phone fontSize="small" /> 03708050090
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Email fontSize="small" /> Example@gmail.com
            </p>
            <p className="flex items-center gap-2 text-sm">
              <LocationOn fontSize="small" /> Pakistan
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col mb-6 md:mb-0">
            <h6 className="mb-2 text-lg font-semibold">Join Our Newsletter</h6>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter Email"
                className="bg-white/10 text-white text-sm placeholder-white/60 rounded-md px-2 py-1 focus:outline-none border border-white/30 focus:border-white"
              />
              <button className="bg-[#9c4d9e] hover:bg-[#8a447c] text-white px-4 py-1 rounded-md">
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-white/60 text-xs">
          <p>
            2024 ©{" "}
            <RouterLink to="/" className="text-[#2196F3] hover:text-[#2196F3]">
              Code Dazzle
            </RouterLink>
            . All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <RouterLink
              to="/career"
              className="text-white hover:text-[#2196F3]"
            >
              Career
            </RouterLink>
            <RouterLink
              to="/privacy-policy"
              className="text-white hover:text-[#2196F3]"
            >
              Privacy Policy
            </RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
