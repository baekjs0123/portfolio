export const projects = [
    {
        id: 1,
        title: "RAG익스텐션",
        result: [
            "🏆 (SSAFY) 2학기 3차 프로젝트 기업연계 4반 1등 (7팀 중 1등)",
            "🏆 (SSAFY) 2학기 3차 프로젝트 결선 입상 (118팀 중 4등)"
        ],
        summary: "RAG 기반 지능형 문서 검색 및 답변 생성 플랫폼",
        description: "마이크로서비스 아키텍처를 통해 확장 가능한 RAG 파이프라인을 구축하고, 다양한 문서 형식(PDF, DOCX, XLSX, TXT, 이미지)을 지원하며, 벡터 검색과 LLM을 결합하여 정확하고 맥락에 맞는 답변을 제공하는 엔터프라이즈급 RAG 시스템입니다.",
        period: "2025.10 ~ 2025.11 (6주)",
        team: "7명",
        contribution: "20%",
        role: "백엔드",
        image: "/images/RAG익스텐션_표지.png",
        slideImages: [
            "/images/RAG-EXTENSION.png",
            "/images/RAG 템플릿.gif",
            "/images/매출요약.gif"
        ],
        stack: {
            FE: "React, TypeScript, Vite, TailwindCSS, Zustand, TanStack Query",
            BE: "Spring Boot, FastAPI, Python, Java",
            AI: "OpenAI GPT-4o, LangChain, Sentence Transformers, Cross-Encoder",
            DB: "MySQL, MongoDB, Redis, Milvus (Vector DB)",
            INFRA: "Docker, Jenkins, Nginx"
        },
        roleDetails: [
            "RAG 파이프라인 설정 템플릿 CRUD API 구현 (Ingest, Query, Prompt)",
            "개인 안경원 매출 요약 페이지 구현",
            "개인 안경원 매출 요약 보고서 생성 API 개발 (LLM 활용)",
            "체인 안경원 매출 요약 및 비교 분석 API 개발"
        ],
        learned: [
            "RAG 파이프라인의 전체 흐름(문서 추출 → 청킹 → 임베딩 → 검색 → 재정렬 → 답변 생성)을 이해하고 직접 구현해보았습니다.",
            "MSA 환경에서 FastAPI와 Spring Boot를 함께 사용하는 백엔드 아키텍처를 경험했습니다.",
            "LLM을 활용한 비즈니스 보고서 자동 생성 기능을 구현하며 프롬프트 엔지니어링 능력을 향상시켰습니다."
        ]
    },
    {
        id: 2,
        title: "On-Wear",
        result: "🏆 (SSAFY) 2학기 2차 프로젝트 부울경 2반 1등 (7팀 중 1등)",
        summary: "AI 기반 가상 시착 및 맞춤형 코디 추천 서비스",
        description: "사진 한 장만으로 원하는 옷을 착용해볼 수 있고, 개인화된 추천 시스템으로 맞춤형 코디 경험을 제공하는 가상 시착 서비스입니다. Stable Diffusion 모델로 시착을 제공하고 유사도 기반 검색 시스템을 통해 맞춤형 아이템을 추천합니다.",
        period: "2025.08 ~ 2025.09 (4주)",
        team: "6명",
        contribution: "25%",
        role: "프론트엔드",
        image: "/images/ON-WEAR표지.png",
        slideImages: [
            "/images/시착 페이지.png",
            "/images/이미지 검색 페이지.png",
            "/images/인기 페이지.png",
            "/images/추천 페이지.png",
            "/images/피팅룸에서 상세페이지.gif",
            "/images/ON-WEAR_로고.gif"
        ],
        slideInterval: 10000,
        stack: {
            FE: "TypeScript, React, Vite, Zustand, Axios, Emotion, GSAP, Playwright",
            BE: "Java 17, Spring Boot, Spring Security, MySQL, MongoDB, Redis",
            AI: "IDM-VTON, Fashion-CLIP, PyTorch, HuggingFace",
            INFRA: "Docker, Jenkins, Nginx, AWS, RunPod (GPU Server)"
        },
        roleDetails: [
            "로고 디자인 및 웹사이트 전반의 애니메이션 효과 제작 (GSAP 활용)",
            "Playwright를 활용한 E2E 테스트 환경 구축 및 테스트 케이스 작성",
            "피팅룸 페이지 UI/UX 설계 및 구현 (가상 시착 결과 표시)"
        ],
        learned: [
            "GSAP를 활용한 스크롤 기반 애니메이션과 인터랙티브한 UI 구현 방법을 익혔습니다.",
            "Playwright를 활용한 E2E 테스트 자동화 환경을 구축하고 테스트 케이스를 작성하는 경험을 했습니다.",
            "AI 모델(IDM-VTON)의 결과를 사용자에게 효과적으로 보여주는 프론트엔드 구현 방법을 학습했습니다."
        ]
    },
    {
        id: 3,
        title: "Alpacar (알파카)",
        result: "🎓 (SSAFY) 2학기 1차 프로젝트",
        summary: "스마트 주차 관리 시스템",
        description: "사용자의 차량 크기와 주차 실력을 고려해 최적의 주차 공간을 자동 추천하는 스마트 주차 관리 시스템입니다. 번호판 객체탐지 & OCR 인식, 차량 모델 자동 조회, PWA 기반 사용자 안내, 관리자 실시간 모니터링 기능을 제공합니다.",
        period: "2025.07 ~ 2025.08 (6주)",
        team: "6명",
        contribution: "20%",
        role: "PM & 프론트엔드",
        image: "/images/알파카표지.png",
        slideImages: [
            "/images/온보딩.gif",
            "/images/3d카드.gif",
            "/images/주차 공간 추천.gif",
            "/images/히스토리.gif",
            "/images/실시간주차현황.gif"
        ],
        slideInterval: 3000,
        stack: {
            FE: "Vue 3.5, JavaScript, Pinia, Vite, Vue Router, PWA",
            BE: "Django, Django REST Framework, Django Channels, MySQL",
            IoT: "ESP8266, WebSocket, Raspberry Pi, Picamera2",
            AI: "YOLO, EasyOCR, OpenCV",
            INFRA: "Docker, Docker Compose, NGINX, GitLab Runner"
        },
        roleDetails: [
            "PM(프로젝트 매니저)으로서 프로젝트 전체 일정 관리 및 팀 리딩",
            "Vue 3 기반 프론트엔드 개발 (JavaScript, Pinia 상태관리)",
            "PWA(Progressive Web App) 구현으로 모바일 웹앱 형태 제공",
            "사용자 주차 추천 페이지 및 주차 기록 히스토리 페이지 구현",
            "관리자 실시간 주차장 현황 모니터링 대시보드 개발"
        ],
        learned: [
            "PM 역할을 수행하며 프로젝트 일정 관리, 스프린트 계획, 팀 커뮤니케이션 능력을 향상시켰습니다.",
            "Vue 3 Composition API와 JavaScript를 활용한 프론트엔드 개발 경험을 쌓았습니다.",
            "PWA 기술을 적용하여 웹앱을 모바일 환경에 최적화하는 방법을 익혔습니다.",
            "WebSocket을 활용한 실시간 데이터 통신 구현 경험을 했습니다."
        ]
    }
];
