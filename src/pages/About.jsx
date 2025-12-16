import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen bg-[#F0F7FF] py-6 px-3 sm:px-4 lg:px-6">
            <div className="max-w-[90%] w-full mx-auto bg-white rounded-[2rem] shadow-sm overflow-hidden">
                <div className="flex flex-col lg:flex-row">

                    {/* Left Column: Profile & Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 p-8 md:p-12 space-y-6 border-r border-gray-100"
                    >
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                                안녕하세요,<br />
                                <span className="text-blue-600">백엔드</span> 개발자 백종석입니다.
                            </h1>
                        </div>

                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/images/PROFILE.jpg"
                                alt="백종석 프로필"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-5 text-gray-700">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    <span className="text-blue-600">안정성과 확장성</span>을 우선합니다.
                                </h3>
                                <p className="leading-relaxed text-gray-600 text-sm word-keep-all">
                                    트래픽과 데이터가 늘어도 흔들리지 않도록 아키텍처를 고민하고, API 설계·데이터 모델링·캐시 등 백엔드 핵심 요소를 기반으로 문제를 해결합니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    <span className="text-blue-600">팀 협업</span>을 중요하게 생각합니다.
                                </h3>
                                <p className="leading-relaxed text-gray-600 text-sm word-keep-all">
                                    PM 경험을 통해 일정 관리와 커뮤니케이션의 중요성을 배웠습니다. API 스펙 합의, 이슈 트래킹, 코드 리뷰 등 명확한 소통으로 협업 효율을 높입니다.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                    <span className="text-blue-600">지속적인 학습</span>을 추구합니다.
                                </h3>
                                <p className="leading-relaxed text-gray-600 text-sm word-keep-all">
                                    다양한 프로젝트를 통해 빠르게 기술을 습득하고 적용해왔습니다. 특히 데이터 처리, 서비스 분리(MSA), 배포 자동화 등 운영 관점까지 학습하며 성장하고 있습니다.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Education & Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 p-8 md:p-12 space-y-8 bg-[#F8FAFC]"
                    >
                        {/* Education */}
                        <div>
                            <div className="flex items-center mb-4">
                                <span className="text-xl mr-2">🎓</span>
                                <h2 className="text-xl font-bold text-gray-900">Education</h2>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2025.01 ~ 2025.12</span>
                                    <span className="text-gray-600 word-keep-all">삼성 청년 SW·AI 아카데미 13기 (Web 개발자 과정)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Projects Summary */}
                        <div>
                            <div className="flex items-center mb-4">
                                <span className="text-xl mr-2">💼</span>
                                <h2 className="text-xl font-bold text-gray-900">Project Experience</h2>
                            </div>
	                            <ul className="space-y-3 text-sm">
	                                <li className="flex gap-3">
	                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2025.10 ~ 2025.11</span>
	                                    <div className="flex flex-col gap-1">
	                                        <span className="text-gray-600 word-keep-all font-medium">RAG익스텐션 - RAG 기반 지능형 문서 검색 및 답변 생성 플랫폼</span>
	                                        <span className="text-gray-500 text-xs">Backend & AI 개발</span>
	                                    </div>
	                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2025.08 ~ 2025.09</span>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-gray-600 word-keep-all font-medium">On-Wear - AI 가상 시착 서비스</span>
                                        <span className="text-gray-500 text-xs">Frontend 개발 (애니메이션, E2E 테스트)</span>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[8.5rem] whitespace-nowrap">2025.07 ~ 2025.08</span>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-gray-600 word-keep-all font-medium">Alpacar - 스마트 주차 관리 시스템</span>
                                        <span className="text-gray-500 text-xs">PM & Frontend 개발</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Role Summary */}
                        <div>
                            <div className="flex items-center mb-4">
                                <span className="text-xl mr-2">🎯</span>
                                <h2 className="text-xl font-bold text-gray-900">Key Roles</h2>
                            </div>
	                            <ul className="space-y-2 text-sm">
	                                <li className="flex items-start gap-2">
	                                    <span className="text-blue-600">•</span>
	                                    <span className="text-gray-600 word-keep-all">PM(프로젝트 매니저) 경험으로 일정 관리 및 팀 리딩</span>
	                                </li>
	                                <li className="flex items-start gap-2">
	                                    <span className="text-blue-600">•</span>
	                                    <span className="text-gray-600 word-keep-all">Spring Boot, FastAPI 기반 REST API 설계 및 개발</span>
	                                </li>
	                                <li className="flex items-start gap-2">
	                                    <span className="text-blue-600">•</span>
	                                    <span className="text-gray-600 word-keep-all">MySQL, MongoDB, Redis, Vector DB(Milvus) 등 데이터 계층 연동</span>
	                                </li>
	                                <li className="flex items-start gap-2">
	                                    <span className="text-blue-600">•</span>
	                                    <span className="text-gray-600 word-keep-all">Docker, Nginx, Jenkins 기반 배포/운영 환경 구성 경험</span>
	                                </li>
	                                <li className="flex items-start gap-2">
	                                    <span className="text-blue-600">•</span>
	                                    <span className="text-gray-600 word-keep-all">MSA 환경에서 서비스 분리 및 연동(FastAPI + Spring Boot)</span>
	                                </li>
	                            </ul>
	                        </div>

                        {/* Contact */}
                        <div>
                            <div className="flex items-center mb-4">
                                <span className="text-xl mr-2">📬</span>
                                <h2 className="text-xl font-bold text-gray-900">Contact</h2>
                            </div>
                            <ul className="space-y-2 text-sm">
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[4rem]">Email</span>
                                    <span className="text-gray-600">baekjs0123@naver.com</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[4rem]">Phone</span>
                                    <span className="text-gray-600">010-2075-8023</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-semibold text-gray-800 min-w-[4rem]">GitHub</span>
                                    <a href="https://github.com/baekjs0123" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        github.com/baekjs0123
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
