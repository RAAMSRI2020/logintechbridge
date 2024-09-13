import React, { useState, useEffect } from "react";
import { socialMedia, callNumbers, emailAddress } from "../constants";
import { Button } from "../components";

const Header = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-black w-full font-paragraph">
      {isMobileView ? (
        // Mobile view (Icons only)
        <div className="flex justify-between items-center px-4 font-poppins ">
          <div className="flex items-center space-x-4 font-paragraph">
            {callNumbers.map((call) => (
              <a key={call.id} href={`tel:${call.links[0].number}`}>
                <img src={call.icon} alt={call.label} className="w-6 h-6" />
              </a>
            ))}
            {emailAddress.map((mail, index) => (
              <a key={index} href={`mailto:${mail.email}`}>
                <img src={mail.icon} alt={mail.id} className="w-6 h-6" />
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {socialMedia.map((social) => (
              <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.id} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      ) : (
        // Desktop view (Full content)
        <div className="flex flex-row justify-between items-center w-full px-4">
          {/* Call Numbers Section on the Left */}
          <div className="flex items-center justify-between ">
            {callNumbers.map((call) => (
              <div key={call.id} className="flex items-center">
                <img src={call.icon} alt={call.label} className="px-4" />
                <span className="text-white font-text">
                  {call.content}
                </span>
                <div className="flex flex-row pl-4">
                  {call.links.map((link, index) => (
                    <a key={index} href={`tel:${link.number}`} className="text-white font-text px-2">
                      {link.number}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Email Address Section */}
            <div className="flex items-center justify-between">
              {emailAddress.map((mail, index) => (
                <div key={index} className="flex items-center">
                  <img src={mail.icon} alt={mail.id} />
                  <span className="text-white font-text px-2">
                    <a href={`mailto:${mail.email}`}>{mail.email}</a>
                  </span>
                </div>
              ))}
            </div>
            <Button className="px-5" />
          </div>

          {/* Social Media Links Section on the Right */}
          <div className="flex items-center justify-between">
            {socialMedia.map((social) => (
              <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" className="px-2">
                <img src={social.icon} alt={social.id} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
