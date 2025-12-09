import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

const ImageSlider = ({ images, interval = 10000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 border border-gray-100">
            <div className="relative min-h-64 flex items-center justify-center">
                <img
                    src={images[currentIndex]}
                    alt={`슬라이드 ${currentIndex + 1}`}
                    className="w-full h-full object-contain max-h-96"
                />
            </div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={goToPrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-all"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${
                                    idx === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-400/60 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

const ProjectDetail = () => {
    const { id } = useParams();
    const projectId = parseInt(id);
    const project = projects.find(p => p.id === projectId);

    const prevProject = projects.find(p => p.id === projectId - 1);
    const nextProject = projects.find(p => p.id === projectId + 1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">프로젝트를 찾을 수 없습니다</h1>
                    <Link to="/projects" className="text-blue-600 hover:underline">
                        프로젝트 목록으로 돌아가기
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#F0F7FF] via-[#F8FAFC] to-[#E6F0FF] py-6 px-3 sm:px-4 lg:px-6">
            <div className="max-w-[90%] mx-auto">
                {/* 네비게이션 */}
                <div className="flex justify-between items-center mb-6">
                    <Link
                        to="/projects"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>목록으로</span>
                    </Link>
                    <div className="flex gap-4">
                        {prevProject && (
                            <Link
                                to={`/projects/${prevProject.id}`}
                                className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span className="hidden sm:inline">이전</span>
                            </Link>
                        )}
                        {nextProject && (
                            <Link
                                to={`/projects/${nextProject.id}`}
                                className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                <span className="hidden sm:inline">다음</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        )}
                    </div>
                </div>

                {/* 프로젝트 카드 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                    {/* 상단: 제목 영역 */}
                    <div className="bg-gradient-to-r from-[#F0F7FF] to-[#E6F0FF] px-6 py-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{project.title}</h1>
                        {project.result && (
                            <div className="mt-4 flex flex-col items-start gap-2">
                                {Array.isArray(project.result) ? (
                                    project.result.map((item, idx) => (
                                        <div key={idx} className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full shadow-sm">
                                            <span className="text-gray-700 font-medium word-keep-all">{item}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full shadow-sm">
                                        <span className="text-gray-700 font-medium word-keep-all">{project.result}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* 본문: 좌우 2단 레이아웃 */}
                    <div className="flex flex-col lg:flex-row">
                        {/* 왼쪽: 요약 + 이미지 */}
                        <div className="lg:w-1/2 p-6 border-r border-gray-100">
                            <div className="w-12 h-1 bg-blue-400 mb-5"></div>
                            <h2 className="text-xl font-bold text-blue-600 mb-4 word-keep-all whitespace-pre-line">
                                {project.summary}
                            </h2>
                            <p className="text-gray-600 word-keep-all leading-relaxed whitespace-pre-line mb-8">
                                {project.description}
                            </p>

                            {project.slideImages ? (
                                <ImageSlider images={project.slideImages} interval={project.slideInterval} />
                            ) : (
                                <div className="rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 border border-gray-100 p-8 flex items-center justify-center min-h-64">
                                    <span className="text-4xl font-bold text-blue-600">{project.title}</span>
                                </div>
                            )}
                        </div>

                        {/* 오른쪽: 상세 정보 */}
                        <div className="lg:w-1/2 p-6 space-y-6">
                            {/* 기간 / 인원 */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">기간 / 인원 수</h3>
                                <p className="text-gray-600">{project.period} / {project.team}</p>
                            </div>

                            {/* 기술 스택 */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-3">기술 스택</h3>
                                <div className="text-gray-600 space-y-1">
                                    {Object.entries(project.stack).map(([key, value]) => (
                                        <div key={key} className="flex items-start">
                                            <span className="font-medium text-blue-600 mr-2">[{key}]</span>
                                            <span className="word-keep-all">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 담당 역할 */}
                            <div>
                                <h3 className="font-bold text-gray-900 mb-3">
                                    담당 역할
                                    {project.role && (
                                        <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                                            {project.role}
                                        </span>
                                    )}
                                </h3>
                                <div className="text-gray-600">
                                    {project.contribution && (
                                        <div className="font-semibold text-blue-600 mb-4">
                                            기여도 {project.contribution}
                                        </div>
                                    )}
                                    <ul className="list-disc list-outside ml-5 space-y-2">
                                        {project.roleDetails.map((detail, i) => (
                                            <li key={i} className="word-keep-all">{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* 배운 내용 */}
                            {project.learned && (
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-3">배운 내용</h3>
                                    <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600">
                                        {project.learned.map((item, i) => (
                                            <li key={i} className="word-keep-all">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* 하단 네비게이션 */}
                <div className="flex justify-between items-center mt-8">
                    {prevProject ? (
                        <Link
                            to={`/projects/${prevProject.id}`}
                            className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-400" />
                            <div className="text-left">
                                <p className="text-xs text-gray-400">이전 프로젝트</p>
                                <p className="font-medium text-gray-900">{prevProject.title}</p>
                            </div>
                        </Link>
                    ) : <div />}

                    {nextProject ? (
                        <Link
                            to={`/projects/${nextProject.id}`}
                            className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="text-right">
                                <p className="text-xs text-gray-400">다음 프로젝트</p>
                                <p className="font-medium text-gray-900">{nextProject.title}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400" />
                        </Link>
                    ) : <div />}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
