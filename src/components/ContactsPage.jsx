import React from 'react';
import starryNightBg from '../assets/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg';

const ContactsPage = ({ onBack }) => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url("${starryNightBg}")` }}
                />
                <div className="absolute inset-0 bg-black/70" />
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
                    <div className="max-w-2xl w-full">
                        <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-[2rem] p-8 md:p-14">
                            <h2 className="text-[32px] md:text-[48px] text-[#CDD400] font-jago font-extrabold mb-8 md:mb-12 leading-none">
                                Contacts
                            </h2>

                            <div className="space-y-6 md:space-y-8">
                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <span className="text-[12px] md:text-[14px] text-white/30 font-jago font-extrabold uppercase tracking-[0.3em]">
                                        Email
                                    </span>
                                    <a
                                        href="mailto:portillobuboy@gmail.com"
                                        className="text-[18px] md:text-[26px] text-white/80 hover:text-[#CDD400] transition-colors duration-300 font-jago font-extrabold break-all"
                                    >
                                        portillobuboy@gmail.com
                                    </a>
                                </div>

                                {/* Phone */}
                                <div className="flex flex-col gap-2">
                                    <span className="text-[12px] md:text-[14px] text-white/30 font-jago font-extrabold uppercase tracking-[0.3em]">
                                        Phone
                                    </span>
                                    <a
                                        href="tel:09930273440"
                                        className="text-[18px] md:text-[26px] text-white/80 hover:text-[#CDD400] transition-colors duration-300 font-jago font-extrabold"
                                    >
                                        09930273440
                                    </a>
                                </div>
                            </div>

                            {/* Decorative Divider */}
                            <div className="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-white/5">
                                <p className="text-[13px] md:text-[16px] text-white/20 font-jago italic">
                                    Feel free to reach out for collaboration, inquiries, or just to talk about art.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;
