"use client"
import React from "react";
import Link from "next/link";
import "./globals.css"
import Image from 'next/image';

const Navbar = () => {
    return (
        <>
            <div className="full-width" style={{
                backgroundColor: "#f7f6ef",
                paddingTop: "5px",
                paddingBottom: "5px"
            }}>
                <div className="margin-width" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <ul className="md:flex gap-x-6" style={{
                        fontSize: "14px"
                    }}>
                        <li>
                            <Link href="/">
                                <p>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/more">
                                <p>More</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/goals">
                                <p>Our Goals</p>
                            </Link>
                        </li>
                    </ul>
                    <div style={{
                        flex: 1
                    }} />
                    <div
                        style={{
                            padding: "10px",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            window.open("https://discord.gg/nShSTvtpeX", "_blank");
                        }}>
                        <Image
                            priority
                            src="/images/discord.svg"
                            width={20}
                            height={20}
                            alt="Join our Discord"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;