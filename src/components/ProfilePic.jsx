import React from 'react';

const ProfilePic = ({ src }) => {
    return (
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px] mx-auto animate-float hero-element">
            {/* Spinning Gradient Border Layer */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-primary animate-spin-slow shadow-[0_0_40px_rgba(59,130,246,0.5)]"></div>

            {/* Inner background layer to create the border effect */}
            <div className="absolute inset-2 rounded-full bg-white dark:bg-darkBg z-10"></div>

            {/* Actual Image */}
            <div className="absolute inset-3 z-20 rounded-full overflow-hidden">
                <img
                    src={src || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"}
                    alt="Sivasankar"
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
            </div>

            {/* Ambient background glow behind the entire component */}
            <div className="absolute -inset-4 rounded-full bg-blue-500 blur-3xl opacity-20 z-[-1]"></div>
        </div>
    );
};

export default ProfilePic;
