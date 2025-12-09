import { motion } from 'framer-motion';
import { Mail, Phone, Github } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl w-full"
            >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        {/* Left Side: THANK YOU */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center md:text-left"
                        >
                            <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-tight tracking-tight">
                                THANK<br />
                                YOU<span className="text-blue-200">.</span>
                            </h1>
                        </motion.div>

                        {/* Vertical Divider */}
                        <div className="hidden md:block w-px h-64 bg-white/30"></div>

                        {/* Right Side: Contact Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white/60 text-sm font-medium">E-mail</h3>
                                    <a href="mailto:baekjs0123@naver.com" className="text-white text-lg font-semibold hover:text-blue-200 transition-colors">
                                        baekjs0123@naver.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white/60 text-sm font-medium">Mobile</h3>
                                    <p className="text-white text-lg font-semibold">010-2075-8023</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <Github className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white/60 text-sm font-medium">Github</h3>
                                    <a
                                        href="https://github.com/baekjs0123"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white text-lg font-semibold hover:text-blue-200 transition-colors"
                                    >
                                        github.com/baekjs0123
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
