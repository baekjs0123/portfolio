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
            { name: "Java", level: 2, descriptions: ["Spring Boot 기반 API 개발 경험"] },
            { name: "Python", level: 3, descriptions: ["FastAPI, Django 기반 API 개발 경험"] },
            { name: "SQL", level: 2, descriptions: ["MySQL 기반 데이터 조회/가공 및 스키마 이해"] },
            { name: "JavaScript / TypeScript", level: 2, descriptions: ["서비스 연동을 위한 비동기 처리 및 타입 시스템 이해"] },
        ],
        frameworks: [
            { name: "Spring Boot", level: 2, descriptions: ["REST API 설계/구현", "프로젝트에서 Spring Security 사용 경험"] },
            { name: "FastAPI", level: 3, descriptions: ["Python 기반 API 서버 개발", "MSA 환경에서 서비스 분리 경험"] },
            { name: "Django / DRF", level: 2, descriptions: ["CRUD API 개발", "Django Channels로 실시간 통신 경험"] },
            { name: "LangChain", level: 2, descriptions: ["RAG 파이프라인 구성 및 LLM 연동 경험"] },
        ],
        data: [
            { name: "MySQL", level: 3, descriptions: ["관계형 데이터 모델링 및 연동 경험"] },
            { name: "MongoDB", level: 2, descriptions: ["문서형 데이터 모델링 및 연동 경험"] },
            { name: "Redis", level: 2, descriptions: ["캐시/세션 등 인메모리 저장소 활용 경험"] },
        ],
        infra: [
            { name: "Git / GitLab", level: 3, descriptions: ["브랜치 전략, PR/MR 기반 협업 경험"] },
            { name: "Docker / Compose", level: 2, descriptions: ["컨테이너 기반 개발/배포 환경 구성 경험"] },
            { name: "AWS", level: 1, descriptions: ["클라우드 환경에서 서비스 운영 경험"] },
        ],
        architecture: [
            { name: "REST API", level: 3, descriptions: ["엔드포인트/상태코드/에러 스펙을 일관되게 설계"] },
            { name: "MSA", level: 2, descriptions: ["FastAPI + Spring Boot 기반 서비스 분리 및 연동 경험"] },
            { name: "Async / Realtime", level: 2, descriptions: ["WebSocket 기반 실시간 기능 구현 경험"] },
            { name: "Testing", level: 2, descriptions: ["E2E 테스트(Playwright) 환경 구축 및 테스트 작성 경험"] },
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
                            title="Database & Cache"
                            icon="🗄️"
                            color="pink"
                            skills={skillData.data}
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
                            title="Infra & DevOps"
                            icon="⚙️"
                            color="orange"
                            skills={skillData.infra}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <SkillCard
                            title="Architecture"
                            icon="🧩"
                            color="purple"
                            skills={skillData.architecture}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;
