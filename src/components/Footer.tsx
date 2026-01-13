export default function Footer() {
    return (
        <footer className="py-12 bg-[#0f0518] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="container mx-auto px-6 text-center z-10 relative">
                <p className="text-gray-400 font-light tracking-wide">
                    © {new Date().getFullYear()} <span className="text-white font-medium">Mohamed Elsayed</span>. All rights reserved.
                </p>
                <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-500">
                    <span className="hover:text-secondary cursor-pointer transition-colors">Privacy Policy</span>
                    <span className="hover:text-secondary cursor-pointer transition-colors">Terms of Service</span>
                </div>
            </div>
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        </footer>
    );
}
