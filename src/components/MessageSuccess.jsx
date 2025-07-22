import React, { useEffect, useState } from 'react';
import gmailSvg from '../assets/icons8-gmail.svg';

const MessageSuccess = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        w-[330px] h-15 rounded-lg px-4 py-2 bg-white shadow-md 
        flex items-center justify-around gap-4 fixed top-20 right-5 overflow-hidden 
        z-50 transform transition-all duration-500 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}
      `}
    >
      <svg
        className="absolute rotate-90 left-[-31px] top-8 w-20 fill-[#04e4003a]"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L0,320Z"
          fillOpacity="1"
        ></path>
      </svg>

      <div className="w-9 h-9 flex justify-center items-center bg-[#04e40048] rounded-full ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-[17px] h-[17px] text-green-700"
          fill="currentColor"
        >
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
        </svg>
      </div>

      <div className="flex flex-col justify-center items-start flex-grow">
          <p className="text-green-700 font-bold flex items-center gap-2">
            Message sent
            <img src={gmailSvg} alt="" width={30} height={30} />
          </p>
      </div>

    </div>
  );
}

export default MessageSuccess
