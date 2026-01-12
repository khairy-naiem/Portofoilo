export default function Footer() {
    return (
        <footer className="py-8 bg-background border-t border-white/10 text-center">
            <p className="text-gray-400">
                © {new Date().getFullYear()} Mohamed Elsayed. All rights reserved.
            </p>
        </footer>
    );
}
