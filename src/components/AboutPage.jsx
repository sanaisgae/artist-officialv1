import React from 'react';
import bgDescription from '../assets/bg description.png';

const AboutPage = ({ onBack }) => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background - Starry Night Over the Rhone */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("${bgDescription}")` }}
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">

                {/* Top Bar */}
                <header className="flex items-center justify-between px-6 md:px-16 py-6 md:py-10 landing-fade-in">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-white/60 hover:text-[#CDD400] transition-colors duration-300 cursor-pointer group"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-1">
                            <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
                        </svg>
                        <span className="text-[14px] md:text-[18px] font-jago font-extrabold uppercase tracking-widest">
                            Back
                        </span>
                    </button>

                    <h1 className="text-[28px] md:text-[42px] text-[#CDD400] leading-none font-jago font-extrabold tracking-tight opacity-60">
                        Artist.AI
                    </h1>
                </header>

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center px-6 md:px-16 landing-slide-up">
                    <div className="max-w-3xl w-full">
                        <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[2rem] p-8 md:p-14">
                            <h2 className="text-[32px] md:text-[48px] text-[#CDD400] font-jago font-extrabold mb-6 md:mb-8 leading-none">
                                About
                            </h2>

                            <div className="space-y-4 md:space-y-6">
                                <p className="text-[15px] md:text-[20px] text-white/70 leading-relaxed font-jago">
                                    Welcome to <span className="text-[#CDD400] font-extrabold">Artist.AI</span> — an immersive AI-powered experience that lets you converse with history's most iconic artists.
                                </p>

                                <p className="text-[15px] md:text-[20px] text-white/70 leading-relaxed font-jago">
                                    Step into the minds of <span className="text-white/90">Pablo Picasso</span>, <span className="text-white/90">Vincent Van Gogh</span>, and <span className="text-white/90">Leonardo Da Vinci</span>. Each artist has been brought to life through advanced AI, capturing their unique perspectives, philosophies, and artistic visions.
                                </p>

                                <p className="text-[15px] md:text-[20px] text-white/70 leading-relaxed font-jago">
                                    Ask them about their masterpieces, their struggles, their inspirations — or simply have a conversation about life, art, and creativity. Every response is crafted to reflect the personality and wisdom of these legendary masters.
                                </p>

                                <p className="text-[15px] md:text-[20px] text-white/40 leading-relaxed font-jago italic opacity-50">
                                    Powered by Gemini AI · Built with passion for art and technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
