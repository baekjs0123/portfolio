import { ArrowRight, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-[#F0F7FF] via-white to-blue-50">
            <div className="max-w-[90%] mx-auto px-3 sm:px-4 lg:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* 왼쪽: 텍스트 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-6">
                            Frontend Developer
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
                            안녕하세요,<br />
                            <span className="text-blue-600">백종석</span>입니다.
                        </h1>
                        <p className="mt-4 max-w-xl text-lg text-gray-600 word-keep-all leading-relaxed">
                            React, Vue, TypeScript를 활용하여 사용자 중심의 인터랙티브한 웹 애플리케이션을 개발합니다.
                            새로운 기술에 대한 호기심과 지속적인 성장을 추구하는 개발자입니다.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <Link
                                to="/about"
                                className="px-8 py-4 text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                            >
                                프로필 보기 <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/projects"
                                className="px-8 py-4 text-base font-semibold rounded-xl text-gray-700 bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all shadow-sm flex items-center justify-center"
                            >
                                프로젝트 보기
                            </Link>
                        </div>

                        <div className="mt-10 flex justify-center lg:justify-start gap-4">
                            <a
                                href="https://github.com/baekjs0123"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                <Github className="w-5 h-5" />
                                <span className="text-sm">GitHub</span>
                            </a>
                            <a
                                href="mailto:baekjs0123@naver.com"
                                className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                <span className="text-sm">Email</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* 오른쪽: 이미지/그래픽 */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 flex justify-center"
                    >
                        <div className="relative">
                            {/* 배경 원형 */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-200 to-blue-100 rounded-full blur-2xl opacity-60"></div>

                            {/* 프로필 이미지 */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="/images/PROFILE.jpg"
                                    alt="백종석 프로필"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* 플로팅 뱃지들 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">🎓</span>
                                    <div>
                                        <p className="text-xs text-gray-500">Education</p>
                                        <p className="text-sm font-bold text-gray-900">SSAFY 13기</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-3"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">💻</span>
                                    <div>
                                        <p className="text-xs text-gray-500">Main Stack</p>
                                        <p className="text-sm font-bold text-gray-900">React / Vue</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
