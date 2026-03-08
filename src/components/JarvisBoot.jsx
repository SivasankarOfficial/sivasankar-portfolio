import React, { useState, useEffect } from 'react';

const JarvisBoot = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [isExiting, setIsExiting] = useState(false);

    const commands = [
        "J.A.R.V.I.S. SYSTEM INITIALIZATION v3.0",
        "PROCESSOR: STARK INDUSTRIES QUANTUM CORE",
        "MEMORY... OK",
        "CONNECTING TO GLOBAL SURVEILLANCE SATELLITES... OK",
        "BYPASSING SECURITY FIREWALLS... OK",
        "ARC REACTOR CAPACITY: 100%",
        "AUTHENTICATING USER IDENTITY...",
        "ACCESS GRANTED.",
        "WELCOME BACK, SIR."
    ];

    useEffect(() => {
        let currentLine = 0;
        const interval = setInterval(() => {
            if (currentLine <= commands.length) {
                setLines(commands.slice(0, currentLine));
                currentLine++;
            } else {
                clearInterval(interval);
                // Begin exit animation shortly after reading the last line
                setTimeout(() => {
                    setIsExiting(true);
                    setTimeout(() => {
                        onComplete();
                    }, 500); // 500ms for exit transition
                }, 800);
            }
        }, 200);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[9999] bg-[#00050b] transition-transform duration-500 overflow-hidden ${isExiting ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>

            {/* Background grid / holographic lines */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* Scanning line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-[scan_3s_ease-in-out_infinite]"></div>

            <div className="absolute top-1/2 -translate-y-1/2 left-[10%] max-w-2xl w-full z-10 space-y-3 font-mono text-cyan-400 text-sm md:text-lg lg:text-xl drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
                {lines.map((line, idx) => (
                    <div key={idx} className="tracking-widest">
                        <span className="opacity-50 mr-2">{'>'}</span> {line}
                    </div>
                ))}
                {lines.length < commands.length && (
                    <div className="animate-pulse tracking-widest">
                        <span className="opacity-50 mr-2">{'>'}</span> <span className="w-3 h-5 inline-block bg-cyan-400"></span>
                    </div>
                )}
            </div>

            {/* Glowing Arc Reactor Element isolated on the right */}
            <div className="absolute top-1/2 right-[10%] -translate-y-1/2 flex items-center justify-center opacity-80 md:scale-100 scale-50">
                {/* Outer Ring */}
                <div className="w-80 h-80 border-2 border-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_20px_#06b6d4,inset_0_0_20px_#06b6d4] animate-[spin_8s_linear_infinite]">
                    {/* Dashed Inner Ring */}
                    <div className="w-64 h-64 border-[15px] border-dashed border-cyan-400 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>
                </div>
                {/* Core */}
                <div className="absolute w-40 h-40 border-4 border-cyan-300 rounded-full animate-pulse shadow-[0_0_40px_#67e8f9,inset_0_0_40px_#67e8f9] flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full shadow-[0_0_50px_40px_#cffafe]"></div>
                </div>
            </div>
        </div>
    );
};

export default JarvisBoot;
