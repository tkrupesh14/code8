import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/images/code8.png'
import { FaInstagram, FaDiscord, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from '../styles/Footer.module.css'
const Footer = () => {
    return (
        <>
            <footer>
                <div className={styles.footer__container}>
                    <div className={styles.ooter__logo}>
                        <Link href="/" className={styles.social__logo}>
                            <Image src={Logo} alt="logo" />
                        </Link>
                    </div>
                    <section className={styles.footer__subscription}>
                        <h2 className={styles.footer__subscription__heading}>Newsletter</h2>
                        <div className={styles.input__areas}>
                            <form>
                                <input
                                    className={styles.footer__input}
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                />
                                <br />
                                <buthrefn
                                    type="submit"
                                    className="btn btn--sub"
                                    style={{ margin: "0" }}
                                >
                                    Submit
                                </buthrefn>
                            </form>
                        </div>
                        <section className={styles.social__media}>
                            <div className={styles.social__icons}>
                                <a
                                    className={styles.social__icon__link}
                                    href="https://chat.whatsapp.com/Dy5uAVlpzFj3ent90TMjeW"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <FaWhatsapp />
                                </a>

                                <a
                                    className={styles.social__icon__link}
                                    href="https://instagram.com/codeate.in?igshid=YmMyMTA2M2Y="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </a>

                                <a
                                    className={styles.social__icon__link}
                                    href="http://dsc.gg/code8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Discord"
                                >
                                    <FaDiscord />
                                </a>

                                <a
                                    className={styles.social__icon__link}
                                    href="https://www.linkedin.com/company/code8-connect"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </section>
                    </section>

                    <div className={styles.footer__links}>
                        <div className={styles.footer__link__wrapper}>
                            <div className={styles.footer__link__items}>
                                <h2 className={styles.footer__title}>Our Offerings</h2>
                                <Link href="/built">Build</Link>
                                <Link href="/learn">Learn</Link>
                                <Link href="/community">Community</Link>
                            </div>
                            <div className={styles.footer__link__items}>
                                <h2 className={styles.footer__title}>Quick Links</h2>
                                <Link href="/">Home</Link>
                                <Link href="/about-us">About</Link>
                                <Link href="learn">Blogs</Link>
                            </div>
                        </div>
                        <div className={styles.footer__link__wrapper}>
                            <div className={styles.footer__link__items}>
                                <h2 className={styles.footer__title}>Contact Us</h2>
                                <p className={styles.p__address}>
                                    Flat No. 117, Block C, Sunrise Residency, Rukmini enclave,
                                    Bolarum, Hyderbad.(500010)
                                </p>
                                <a href="mailhref:contact.code8@gmail.com">contact.us@codeate.in</a>
                                <p>+91 8602444273</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.subfooter}>
                    <div className={styles.subfooter__container}>
                        <div className={styles.subfooter__items}>
                        <Link href="/forms">
                            <h1 className={styles.subfooter__text}>Forms</h1>
                            </Link>
                            <h1 className={styles.subfooter__text}>Terms & conditions</h1>
                            <Link href="/privacy">
                                <h1 className={styles.subfooter__text}>Policy</h1>
                            </Link>
                            <h1 className={styles.subfooter__text}>Data Security</h1>
                            <h1 className={styles.subfooter__text}>Help & Support</h1>
                            <h1 className={styles.subfooter__text}>Chat</h1>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer