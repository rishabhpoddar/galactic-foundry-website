"use client"
import React from "react";
import "./globals.css"
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <div className="full-width" style={{
                marginTop: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div
                    style={{
                        paddingTop: "50px",
                        fontSize: "22px"
                    }}
                >All are Welcome</div>

                <div
                    style={{
                        paddingTop: "70px",
                        paddingBottom: "40px",
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

                <div
                    style={{
                        paddingBottom: "30px",
                        fontSize: "14px"
                    }}
                >©2024 by Galactic Foundry Consortium.</div>
            </div >
        </>
    );
};

export default Footer;