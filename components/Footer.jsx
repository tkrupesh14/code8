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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
                            </p>
                            <div className="newsletter-footer-section mt-2">
                                <form action="#" method="post">
                                    <input type="email" name='newsletter-footer' id='newsletter-footer' className='bg-transparent border border-blue-600 rounded-full p-1 w-1/2 text-sm' placeholder='subscribe to newsletter' />
                                    <input type="submit" value="Subscribe" className='p-2 m-2 text-white rounded-full bg-blue-600 cursor-pointer' />
                                </form>
                            </div>
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
                                    <a class="hover:opacity-75" href> Meet the Team </a>
                                    <a class="hover:opacity-75" href> History </a>
                                    <a class="hover:opacity-75" href> Careers </a>
                                </nav>
                            </div>
                            <div>
                                <p class="font-medium text-white">
                                    Services
                                </p>
                                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <a class="hover:opacity-75" href> 1on1 Coaching </a>
                                    <a class="hover:opacity-75" href> Company Review </a>
                                    <a class="hover:opacity-75" href> Accounts Review </a>
                                    <a class="hover:opacity-75" href> HR Consulting </a>
                                    <a class="hover:opacity-75" href> SEO Optimisation </a>
                                </nav>
                            </div>
                            <div>
                                <p class="font-medium text-white">
                                    Helpful Links
                                </p>
                                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <a class="hover:opacity-75" href> Contact </a>
                                    <a class="hover:opacity-75" href> FAQs </a>
                                    <a class="hover:opacity-75" href> Live Chat </a>
                                </nav>
                            </div>
                            <div>
                                <p class="font-medium text-white">
                                    Legal
                                </p>
                                <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                    <a class="hover:opacity-75" href> Privacy Policy </a>
                                    <a class="hover:opacity-75" href> Terms &amp; Conditions </a>
                                    <a class="hover:opacity-75" href> Returns Policy </a>
                                    <a class="hover:opacity-75" href> Accessibility </a>
                                </nav>
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