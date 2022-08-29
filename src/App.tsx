import React from "react";
import { QRCodeLink } from "./components/QRCode";

function App() {

  return (
    <>
      <div className="bg-gradient-to-r from-[#14161a] to-[#0d1016f8] w-full h-screen flex justify-center items-center text-white">
        <div className=" px-4 py-4 ">
          <QRCodeLink />
        </div>
        <div className="flex justify-end items-center absolute bottom-0 left-0 right-0 p-4">
          <p className="text-lg"> Feito por <a href="https://github.com/NiceColors" target="_blank" className="text-pink-500 hover:text-pink-600 font-medium">@NiceColors </a>com 💕</p>
        </div>
      </div>
    </>
  );
}

export default App;