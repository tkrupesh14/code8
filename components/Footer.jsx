import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/logo.png'
import { FaInstagram, FaDiscord, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from '../styles/Footer.module.css'
const Footer = () => {
    return (
        <>
            <footer class="bg-gradient-to-r from-gray-900 to-gray-900">
                <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <Image src={Logo} width="130px" height="75px"></Image>
                            <p class="max-w-xs mt-4 text-sm text-gray-600">
                            Enabling community led peer to peer learning like never before!
                            </p>
                            <div class="flex mt-8 space-x-6 text-white">
                                <a
                                    className="text-white text-xl"
                                    href="https://chat.whatsapp.com/Dy5uAVlpzFj3ent90TMjeW"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <FaWhatsapp />
                                </a>
                                <a
                                    className="text-white text-xl"
                                    href="https://instagram.com/codeate.in?igshid=YmMyMTA2M2Y="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    className="text-white text-xl"
                                    href="http://dsc.gg/code8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Discord"
                                >
                                    <FaDiscord />
                                </a>

                                <a
                                    className="text-white text-xl"
                                    href="https://www.linkedin.com/company/code8-connect"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <p class="font-medium text-white">
                                    Company
                                </p>
                                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <a class="hover:opacity-75" href> About </a>
                                    <a class="hover:opacity-75" href> Privacy Policy </a>
                                    <a class="hover:opacity-75" href> Terms & Conditions </a>
                                </nav>
                            </div>
                            <div>
                                <p class="font-medium text-white">
                                    Services
                                </p>
                                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <Link class="hover:opacity-75" href="/build"> Build </Link>
                                    <Link class="hover:opacity-75" href="/learn"> Learn </Link>
                                    <Link class="hover:opacity-75" href="/community"> Community </Link>
                                </nav>
                            </div>
                            <div>
                                <p class="font-medium text-white">
                                    Helpful Links
                                </p>
                                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <a class="hover:opacity-75" href> FAQs </a>
                                    <a class="hover:opacity-75" href> Live Chat </a>
                                </nav>
                            </div>
                            <div>
                                <p class="font-medium text-white">
                                    Contact Us
                                </p><br />
                                <p>
                                   <p className='font-medium text-white'> Email: </p> <a href="mailto:contact.us@codeate.in" class="text-gray-500">contact.us@codeate.in</a>
                                </p><br />
                                <p>
                                   <p className='font-medium text-white'> Phone </p> <a href="dial:+919182567700" class="text-gray-500">+91 91825 67700</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <p class="mt-8 text-xs text-white">
                        © 2023 Code8
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer