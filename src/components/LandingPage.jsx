import React, { useState } from 'react';
import starryNightBg from '../assets/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg';
import picassoImg from '../assets/Pablo Picasso.png';
import vanGoghImg from '../assets/Vincent Van Gogh.png';
import daVinciImg from '../assets/Leonardo Da Vinci.png';

const LandingPage = ({ onStart, onAbout, onContacts }) => {
    const [hoveredArtist, setHoveredArtist] = useState(null);

    const artists = [
        { img: vanGoghImg },
        { img: daVinciImg },
        { img: picassoImg },
    ];

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background - Starry Night */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("${starryNightBg}")` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">

                {/* Top Nav Bar */}
                <header className="flex items-center justify-between px-6 md:px-16 py-6 md:py-10 landing-fade-in">
                    {/* Logo */}
                    <div className="flex items-center gap-2 md:gap-3 opacity-60">
                        <div className="w-6 h-6 md:w-12 md:h-12 text-[#CDD400]">
                            <svg viewBox="0 0 100 100" fill="currentColor">
                                <path d="M50 15c-15 0-25 10-25 25 0 8 4 15 10 20-2 5-8 10-15 12 10 2 20-5 25-10 2 0 3 0 5 0s3 0 5 0c5 5 15 12 25 10-7-2-13-7-15-12 6-5 10-12 10-20 0-15-10-25-25-25zm-8 22c2 0 4 2 4 4s-2 4-4 4-4-2-4-4 2-4 4-4zm16 0c2 0 4 2 4 4s-2 4-4 4-4-2-4-4 2-4 4-4zM50 70c-10 0-18-5-20-10h40c-2 5-10 10-20 10z" />
                            </svg>
                        </div>
                        <h1 className="text-[20px] md:text-[42px] text-[#CDD400] leading-none font-jago font-extrabold tracking-tight opacity-60">
                            Artist.AI
                        </h1>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex items-center gap-6 md:gap-10">
                        <button
                            onClick={onAbout}
                            className="text-[14px] md:text-[18px] text-white/70 hover:text-[#CDD400] transition-colors duration-300 font-jago font-extrabold uppercase tracking-widest cursor-pointer"
                        >
                            About
                        </button>
                        <button
                            onClick={onContacts}
                            className="text-[14px] md:text-[18px] text-white/70 hover:text-[#CDD400] transition-colors duration-300 font-jago font-extrabold uppercase tracking-widest cursor-pointer"
                        >
                            Contacts
                        </button>
                    </nav>
                </header>

                {/* Center Content */}
                <div className="flex-1 flex flex-col items-center justify-center px-6 gap-8 md:gap-12">

                    {/* Tagline */}
                    <div className="text-center landing-slide-up" style={{ animationDelay: '0.2s' }}>
                        <p className="text-[16px] md:text-[22px] text-white/40 font-jago uppercase tracking-[0.3em]">
                            Speak to the legends
                        </p>
                    </div>

                    {/* Artist Portraits */}
                    <div className="flex items-end justify-center gap-4 md:gap-8 landing-slide-up" style={{ animationDelay: '0.4s' }}>
                        {artists.map((artist, i) => (
                            <div
                                key={artist.name}
                                className="landing-portrait group flex flex-col items-center gap-3 md:gap-4 cursor-pointer"
                                onMouseEnter={() => setHoveredArtist(i)}
                                onMouseLeave={() => setHoveredArtist(null)}
                                style={{ animationDelay: `${0.5 + i * 0.15}s` }}
                            >
                                <div
                                    className={`relative w-[90px] h-[110px] md:w-[160px] md:h-[200px] lg:w-[200px] lg:h-[250px] rounded-2xl md:rounded-3xl overflow-hidden border-2 transition-all duration-500 ${hoveredArtist === i
                                        ? 'border-[#CDD400]/60 shadow-[0_0_40px_rgba(205,212,0,0.2)] scale-105'
                                        : 'border-white/10 shadow-xl'
                                        }`}
                                >
                                    <img
                                        src={artist.img}
                                        alt={artist.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredArtist === i
                                        ? 'bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100'
                                        : 'bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-100'
                                        }`} />
                                </div>
                                <span className={`text-[11px] md:text-[16px] font-jago font-extrabold uppercase tracking-wider transition-all duration-300 ${hoveredArtist === i ? 'text-[#CDD400]' : 'text-white/50'
                                    }`}>
                                    {artist.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Start Button */}
                    <div className="landing-slide-up" style={{ animationDelay: '0.8s' }}>
                        <button
                            onClick={onStart}
                            className="group relative px-12 py-4 md:px-16 md:py-5 rounded-full bg-[#CDD400]/10 border border-[#CDD400]/30 text-[#CDD400] text-[18px] md:text-[24px] font-jago font-extrabold uppercase tracking-[0.2em] cursor-pointer transition-all duration-500 hover:bg-[#CDD400]/20 hover:border-[#CDD400]/60 hover:shadow-[0_0_50px_rgba(205,212,0,0.15)] hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10 opacity-60">Start Chat!</span>
                            <div className="absolute inset-0 rounded-full bg-[#CDD400]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </button>
                    </div>
                </div>

                {/* Bottom Footer */}
                <footer className="text-center pb-6 md:pb-10 landing-fade-in" style={{ animationDelay: '1s' }}>
                    <p className="text-[11px] md:text-[14px] text-white/15 font-jago tracking-widest uppercase">
                        Powered by Gemini AI
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;
