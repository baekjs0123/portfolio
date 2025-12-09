import { motion } from 'framer-motion';

const SkillCard = ({ title, icon, color, skills }) => {
    const colorClasses = {
        blue: {
            title: "text-blue-600",
            dot: "bg-blue-600",
            border: "border-blue-200",
            bg: "bg-blue-50"
        },
        green: {
            title: "text-emerald-600",
            dot: "bg-emerald-600",
            border: "border-emerald-200",
            bg: "bg-emerald-50"
        },
        purple: {
            title: "text-purple-600",
            dot: "bg-purple-600",
            border: "border-purple-200",
            bg: "bg-purple-50"
        },
        orange: {
            title: "text-orange-600",
            dot: "bg-orange-600",
            border: "border-orange-200",
            bg: "bg-orange-50"
        },
        pink: {
            title: "text-pink-600",
            dot: "bg-pink-600",
            border: "border-pink-200",
            bg: "bg-pink-50"
        }
    };

    const colors = colorClasses[color] || colorClasses.blue;

    return (
        <div className={`rounded-2xl border ${colors.border} ${colors.bg} p-6 h-full`}>
            <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{icon}</span>
                <h3 className={`text-lg font-bold ${colors.title}`}>{title}</h3>
            </div>
            <div className="space-y-4">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-gray-900">{skill.name}</span>
                            <div className="flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-2.5 h-2.5 rounded-full ${i < skill.level ? colors.dot : 'bg-gray-200'}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <ul className="text-gray-600 text-sm space-y-1">
                            {skill.descriptions.map((desc, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-gray-400 mr-2">•</span>
                                    <span className="word-keep-all">{desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    const skillData = {
        languages: [
            { name: "TypeScript", level: 3, descriptions: ["타입 시스템을 이해하고 안정적인 코드 작성 가능"] },
            { name: "JavaScript", level: 3, descriptions: ["ES6+ 문법 활용, 비동기 처리 이해"] },
            { name: "Python", level: 3, descriptions: ["FastAPI, Django 백엔드 개발 경험"] },
            { name: "Java", level: 2, descriptions: ["Spring Boot 기반 API 개발 경험"] },
        ],
        frameworks: [
            { name: "React", level: 3, descriptions: ["Hooks, Context API, 상태관리 라이브러리 활용", "TypeScript와 함께 사용하여 프로젝트 진행"] },
            { name: "Vue.js", level: 3, descriptions: ["Vue 3 Composition API 활용", "Pinia 상태관리, Vue Router 라우팅"] },
            { name: "Spring Boot", level: 2, descriptions: ["REST API 개발 경험"] },
            { name: "FastAPI", level: 2, descriptions: ["Python 기반 API 서버 개발"] },
        ],
        tools: [
            { name: "Git / GitLab", level: 3, descriptions: ["브랜치 전략, PR 기반 협업 경험"] },
            { name: "Vite", level: 3, descriptions: ["프로젝트 빌드 도구로 활용"] },
            { name: "Docker", level: 2, descriptions: ["컨테이너 기반 개발 환경 구성"] },
            { name: "Figma", level: 2, descriptions: ["UI 디자인 협업 및 로고 제작"] },
        ],
        frontend: [
            { name: "GSAP", level: 3, descriptions: ["스크롤 애니메이션, 인터랙티브 UI 구현"] },
            { name: "Framer Motion", level: 2, descriptions: ["React 애니메이션 라이브러리 활용"] },
            { name: "TailwindCSS", level: 3, descriptions: ["유틸리티 기반 스타일링"] },
            { name: "Playwright", level: 2, descriptions: ["E2E 테스트 환경 구축 및 테스트 작성"] },
        ],
        state: [
            { name: "Zustand", level: 3, descriptions: ["경량 상태관리 라이브러리 활용"] },
            { name: "Pinia", level: 3, descriptions: ["Vue.js 공식 상태관리 라이브러리"] },
            { name: "TanStack Query", level: 2, descriptions: ["서버 상태 관리 및 데이터 캐싱"] },
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F0F7FF] to-[#E6F0FF] py-6 px-3 sm:px-4 lg:px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-[90%] mx-auto"
            >
                {/* 페이지 타이틀 */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        Skills<span className="text-blue-600">.</span>
                    </h1>
                    <p className="mt-3 text-gray-600">기술 스택 및 역량</p>
                </div>

                {/* 스킬 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <SkillCard
                            title="Programming Language"
                            icon="💻"
                            color="blue"
                            skills={skillData.languages}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <SkillCard
                            title="Framework / Library"
                            icon="🚀"
                            color="green"
                            skills={skillData.frameworks}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <SkillCard
                            title="Frontend Tools"
                            icon="🎨"
                            color="pink"
                            skills={skillData.frontend}
                        />
                    </motion.div>
                </div>

                {/* 하단 2개 카드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <SkillCard
                            title="DevOps & Tools"
                            icon="⚙️"
                            color="orange"
                            skills={skillData.tools}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <SkillCard
                            title="State Management"
                            icon="🗄️"
                            color="purple"
                            skills={skillData.state}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;
