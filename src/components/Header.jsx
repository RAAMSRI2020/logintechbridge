import { socialMedia, callNumbers } from "../constants";
import {Button} from "../components"


const Header = () => (
  <header className="bg-black w-full">
    <div className="flex flex-row justify-between items-center w-full px-4">
      
      {/* Call Numbers Section on the Left */}
      <div className="flex items-center">
        {callNumbers.map((call) => (
          <div key={call.id} className="flex items-center">
            <img
              src={call.icon}
              alt={call.label}
              className="px-4"
            />
            <span className="text-white font-text hidden">
              {call.content}
            </span>
            {/* Mapping the phone numbers */}
            <div className="flex flex-row pl-4">
              {call.links.map((link, index) => (
                <a key={index} href={`tel:${link.number}`} className="text-white font-text px-2">
                  {link.number}
                </a>
              ))}
            </div>
          </div>
        ))}
        <Button/>
      </div>
      
      {/* Social Media Links Section on the Right */}
      <div className="flex items-center justify-between">
        {socialMedia.map((social) => (
          <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" className="px-2">
            <img src={social.icon} alt={social.id} className="w-6 h-6"/>
          </a>
        ))}
      </div>
      
    </div>
  </header>
);

export default Header;
