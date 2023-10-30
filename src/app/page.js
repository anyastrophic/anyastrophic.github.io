/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import { Tooltip } from "react-tooltip";

const logos = {
    discord:
        "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg",
    roblox: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Roblox_Logo.svg/1200px-Roblox_Logo.svg.png",
    github: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    spotify: "https://anyas.me/spotify.png",
};

function openInNewTab(href) {
    Object.assign(document.createElement("a"), {
        target: "_blank",
        rel: "noopener noreferrer",
        href: href,
    }).click();
}

function onGithubClick() {
    openInNewTab("https://github.com/anyastrophic");
}

function onRobloxClick() {
    openInNewTab("https://roblox.com/users/2947401001/profile");
}

function onDiscordClick() {
    openInNewTab("https://discord.com/users/804066391614423061");
}

function onSpotifyClick() {
    openInNewTab("https://open.spotify.com/user/31cet4a7zb4ec4w3vpz6qxvtmyde");
}

export default function Home() {
    useEffect(() => {
        // Initialize vanilla-tilt on the box element
        VanillaTilt.init(document.querySelector(".tilt-box"), {
            max: 2,
        });
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="tilt-box profilebg">
                <div>
                    <div className="flex">
                        <img
                            alt="abc"
                            className="pfp"
                            src="https://anyas.me/compressy.png"
                        ></img>
                        <div>
                            <p className="text-white text-4xl mt-3 ml-2 font-bold">
                                Anya
                            </p>
                            <p className="text-gray-400 text-sm ml-2">
                                Hi! I'm anya. I code in JS, PY and Lua. I suck
                                at <br></br>
                                HTML and CSS, so good luck if you're viewing
                                <br></br>
                                the source of this on my github.
                            </p>{" "}
                            <div className="image-gallery">
                                <img
                                    src={logos.discord}
                                    id="tooltip"
                                    className="w-[40px] hover:drop-shadow-glow hover:opacity-60 hover:rotate-360 transition ease-in-out duration-700 cursor-pointer"
                                    onClick={onDiscordClick}
                                />
                                <Tooltip anchorSelect="#tooltip" clickable>
                                    @49tt
                                </Tooltip>
                                <img
                                    src={logos.roblox}
                                    alt="Image 1"
                                    className="w-[40px] ml-8 hover:drop-shadow-glow hover:opacity-60 hover:rotate-360 transition ease-in-out duration-700 cursor-pointer"
                                    onClick={onRobloxClick}
                                />
                                <img
                                    src={logos.github}
                                    alt="Image 1"
                                    className="w-[40px] rounded-full ml-8 hover:drop-shadow-glow hover:opacity-60 hover:rotate-360 transition ease-in-out duration-700 cursor-pointer"
                                    onClick={onGithubClick}
                                />
                                <img
                                    src={logos.spotify}
                                    alt="Image 1"
                                    className="w-[40px] ml-8 hover:drop-shadow-glow hover:opacity-60 hover:rotate-360 transition ease-in-out duration-700 cursor-pointer"
                                    onClick={onSpotifyClick}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="status">
                        <div className="w-[100px] m-3">
                            <img
                                src="https://i.scdn.co/image/ab67616d0000b2733d03c883a4e7367279d5a274"
                                alt="Album Cover"
                                className="rounded-xl"
                            />
                        </div>

                        <div className="w-2/3 p-2">
                            <p className="text-2xl font-bold" id="songName">
                                paranoia
                            </p>
                            <p className="text-gray-600 text-lg" id="artist">
                                by shiey
                            </p>

                            <progress
                                className="h-2 rounded-full w-[113%] mt-6"
                                id="songProgress"
                                max="100"
                                value="70"
                            ></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
