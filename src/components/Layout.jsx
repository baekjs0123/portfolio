import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Layout = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { to: '/', label: '홈' },
        { to: '/about', label: '소개' },
        { to: '/skills', label: '기술 스택' },
        { to: '/projects', label: '프로젝트' },
        { to: '/contact', label: '연락처' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-[#FFFBF5] text-gray-900 font-sans">
            <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 print:hidden">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold text-blue-600">
                        Portfolio<span className="text-gray-900">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className={`text-sm font-medium transition-colors ${
                                        isActive(link.to)
                                            ? 'text-blue-600'
                                            : 'text-gray-600 hover:text-blue-600'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-600" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-600" />
                        )}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 py-4">
                        <div className="flex flex-col space-y-2 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                                        isActive(link.to)
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            <main className="pt-16 print:pt-0">
                <Outlet />
            </main>

            <footer className="bg-gray-900 text-white py-8 print:hidden">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} 백종석. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
