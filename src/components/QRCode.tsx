import React, { useEffect, Fragment, useState } from "react"
import { Transition } from '@headlessui/react'

import QRCode from 'qrcode'

const opts = {
    color: {
        dark: "#ffffff",
        light: "#ffbf600"
    }
}

export const QRCodeLink = () => {
    let [isOpen, setIsOpen] = useState(false)
    const [qrCodeLink, setQRCodeLink] = useState('')
    const [imgSrc, setImgSrc] = useState<string | null>(null)

    useEffect(() => {
        setQRCodeLink(window.location.href)
    }, [])

    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="bg-[#293e9baa] h-[350px] rounded-md shadow-lg flex justify-center items-center w-full max-w-md transform overflow-hidden p-6 text-left transition-all">
                    <Transition
                        as={Fragment}
                        show={isOpen}
                        enter="transform transition duration-[400ms]"
                        enterFrom="opacity-0 scale-50"
                        enterTo="opacity-100 scale-100"
                        leave="transform duration-200 transition ease-in-out"
                        leaveFrom="opacity-100  scale-100 "
                        leaveTo="opacity-0 scale-95 "
                    >
                        {imgSrc && <img src={imgSrc} alt="qrcode" className="w-full" />}
                    </Transition>
                </div>

                <div className="flex relative z-20 drop-shadow-lg"
                >
                    <div className="before:bg-[#212d494e] before:blur-[86px] before:absolute before:w-[300px] before:h-[300px] before:rounded-full before:top-[-140px] before:right-[20px] before:z-10"></div>

                    <input
                        className="z-20 mr-4 bg-gray-800 rounded-lg px-4 py-2 text-white focus:ring focus:ring-blue-500"
                        type="text"
                        autoFocus
                        placeholder="Digite ou cole o link"
                        onChange={(e) => setQRCodeLink(e.target.value)}
                    />
                    <button
                        className="z-20 inline-flex justify-center rounded-md border border-transparent bg-blue-200 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={async () => {
                            const data = await QRCode.toDataURL(qrCodeLink, opts)
                            data && (setImgSrc(data), setIsOpen(true))
                        }}>Criar QRCode</button>
                </div>
            </div>
        </>
    );
}