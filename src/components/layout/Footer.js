import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 text-center flex flex-col bg-slate-800">
      <p className="text-center inline-block mb-5">© 2023 </p>
      <div className="flex items-center justify-center text-xl font-normal  transition-all">
        <span className="hover:text-red-500 p-2">RSS</span>
        <span className="line bg-slate-500 h-[20px]"></span>
        <span className="hover:text-red-500 p-2">Google</span>{" "}
        <span className="line bg-slate-500 h-[20px]"></span>
        <span className="hover:text-red-500 p-2">Bing</span>
      </div>
    </footer>
  );
};

export default Footer;
