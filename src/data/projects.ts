export interface ProjectData {
  id: string;
  title: string;
  thumbnail: string;
  period: string;
  role: string;
  skills: string[];
  description: string;
  detailImages: string[];
  features: string[];
  link?: string;
  github?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'gh-housing',
    title: 'GH 경기주택도시공사 고도화',
    thumbnail: 'https://placehold.co/400x300/0070f3/ffffff?text=GH+Housing',
    period: '프로젝트 기간',
    role: '웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript', '웹 접근성(WA)'],
    description: '경기주택도시공사 웹사이트의 고도화 작업을 진행했습니다. 웹 표준 및 접근성 지침을 준수하여 모든 사용자가 원활하게 이용할 수 있도록 개선했습니다.',
    detailImages: [
      'https://placehold.co/800x400/0070f3/ffffff?text=Main+Page',
      'https://placehold.co/800x400/0070f3/ffffff?text=Sub+Page'
    ],
    features: [
      '웹 접근성(WA) 인증 마크 획득을 위한 마크업 개선',
      '반응형 웹 구현 및 크로스 브라우징 최적화',
      '시맨틱 태그를 활용한 SEO 개선'
    ]
  },
  {
    id: 'gh-safety',
    title: 'GH 도급안전관리시스템',
    thumbnail: 'https://placehold.co/400x300/ff9800/ffffff?text=GH+Safety',
    period: '프로젝트 기간',
    role: '웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'jQuery'],
    description: '도급 사업장의 안전 관리를 위한 사내 시스템 UI를 구축했습니다. 복잡한 데이터 테이블과 입력 폼을 직관적으로 사용할 수 있도록 구성했습니다.',
    detailImages: [
      'https://placehold.co/800x400/ff9800/ffffff?text=Dashboard',
      'https://placehold.co/800x400/ff9800/ffffff?text=Data+Table'
    ],
    features: [
      '관리자 대시보드 레이아웃 및 UI 컴포넌트 개발',
      '다양한 형태의 데이터 입력 폼 퍼블리싱',
      '동적 데이터 처리를 고려한 유연한 마크업 구조 설계'
    ]
  },
  {
    id: 'goseong-safety',
    title: '고성 천연가스 발전소 스마트안전관리 시스템',
    thumbnail: 'https://placehold.co/400x300/4caf50/ffffff?text=Smart+Safety',
    period: '프로젝트 기간',
    role: '웹 퍼블리싱',
    skills: ['HTML5', 'SCSS', 'JavaScript'],
    description: '발전소 현장의 실시간 안전 상태를 모니터링하는 스마트 관리 시스템의 UI를 개발했습니다.',
    detailImages: [
      'https://placehold.co/800x400/4caf50/ffffff?text=Monitoring+UI'
    ],
    features: [
      '실시간 데이터 모니터링을 위한 대시보드 UI 구현',
      'SCSS를 활용한 체계적인 스타일 관리',
      '다양한 차트 및 그래프 영역 레이아웃 구성'
    ]
  },
  {
    id: 'sh-housing',
    title: 'SH 서울주택도시공사 유지보수',
    thumbnail: 'https://placehold.co/400x300/607d8b/ffffff?text=SH+Housing',
    period: '프로젝트 기간',
    role: '웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
    description: '서울주택도시공사 웹사이트의 전반적인 유지보수 및 신규 페이지 퍼블리싱을 담당했습니다.',
    detailImages: [
      'https://placehold.co/800x400/607d8b/ffffff?text=Maintenance'
    ],
    features: [
      '신규 콘텐츠 페이지 마크업 및 스타일링',
      '기존 레거시 코드 리팩토링 및 웹 접근성 개선',
      '크로스 브라우징 이슈 해결'
    ]
  },
  {
    id: 'einvention-chatgpt',
    title: '이인벤션 / 안양시 청년 ChatGPT',
    thumbnail: 'https://placehold.co/400x300/9c27b0/ffffff?text=ChatGPT+Service',
    period: '프로젝트 기간',
    role: '웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
    description: 'ChatGPT API를 활용한 대민 서비스 웹사이트의 UI를 구축했습니다.',
    detailImages: [
      'https://placehold.co/800x400/9c27b0/ffffff?text=Chat+Interface'
    ],
    features: [
      '대화형 AI 서비스에 적합한 채팅 UI 컴포넌트 개발',
      '반응형 레이아웃 적용'
    ]
  },
  {
    id: 'tesla-stylelab',
    title: '테슬라 스타일랩',
    thumbnail: 'https://placehold.co/400x300/e53935/ffffff?text=Tesla+StyleLab',
    period: '프로젝트 기간',
    role: '웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
    description: '테슬라 차량 커스터마이징 서비스를 제공하는 스타일랩의 프로모션 웹사이트를 구축했습니다.',
    detailImages: [
      'https://placehold.co/800x400/e53935/ffffff?text=Promo+Page'
    ],
    features: [
      '브랜드 아이덴티티에 맞는 고급스러운 UI/UX 구현',
      '동적인 스크롤 애니메이션 적용'
    ]
  },
  {
    id: 'shinhan-invest',
    title: '신한투자증권 앱 챗봇 (AI 컨텍센터)',
    thumbnail: 'https://placehold.co/400x300/1e88e5/ffffff?text=Shinhan+Invest',
    period: '프로젝트 기간',
    role: '모바일 웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
    description: '신한그룹 공통 AI 컨텍센터 플랫폼 구축 사업의 일환으로, 신한투자증권 앱 내에 탑재되는 챗봇 및 보이는 ARS 멀티모달 UI를 구축했습니다.',
    detailImages: [
      'https://placehold.co/800x400/1e88e5/ffffff?text=Chatbot+UI',
      'https://placehold.co/800x400/1e88e5/ffffff?text=Visual+ARS'
    ],
    features: [
      '모바일 환경에 최적화된 챗봇 대화창 UI 개발',
      '보이는 ARS (멀티모달) 화면 마크업 및 인터랙션 구현',
      '금융권 보안 및 접근성 가이드라인 준수'
    ]
  },
  {
    id: 'jeju-bank',
    title: '제주은행 앱 챗봇 (AI 컨텍센터)',
    thumbnail: 'https://placehold.co/400x300/00acc1/ffffff?text=Jeju+Bank',
    period: '프로젝트 기간',
    role: '모바일 웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
    description: '제주은행 모바일 앱에 연동되는 AI 챗봇 시스템의 프론트엔드 UI를 담당했습니다.',
    detailImages: [
      'https://placehold.co/800x400/00acc1/ffffff?text=Chatbot+Interface'
    ],
    features: [
      '사용자 친화적인 대화형 UI/UX 구현',
      '다양한 디바이스 해상도에 대응하는 반응형 모바일 웹 구축',
      '자연스러운 애니메이션 및 트랜지션 효과 적용'
    ]
  },
  {
    id: 'autonomous-driving',
    title: '자율주행자동차',
    thumbnail: 'https://placehold.co/400x300/3f51b5/ffffff?text=Autonomous+Driving',
    period: '프로젝트 기간',
    role: '웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
    description: '자율주행자동차 관련 데이터 및 소개를 제공하는 웹페이지 UI를 구축했습니다.',
    detailImages: [
      'https://placehold.co/800x400/3f51b5/ffffff?text=Main+Page'
    ],
    features: [
      '데이터 시각화 UI 컴포넌트 마크업',
      '반응형 웹 디자인 적용'
    ]
  },
  {
    id: 'sokcho-facility',
    title: '속초시설관리공단',
    thumbnail: 'https://placehold.co/400x300/009688/ffffff?text=Sokcho+Facility',
    period: '프로젝트 기간',
    role: '웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript', '웹 접근성(WA)'],
    description: '속초시설관리공단 공식 홈페이지를 반응형 웹으로 구축하고 웹 접근성을 준수하여 퍼블리싱했습니다.',
    detailImages: [
      'https://placehold.co/800x400/009688/ffffff?text=Main+Page'
    ],
    features: [
      '공공기관 웹 접근성 지침 준수',
      '다양한 디바이스 환경을 고려한 반응형 UI'
    ]
  },
  {
    id: 'ansan-mayor',
    title: '안산시 열린시장실',
    thumbnail: 'https://placehold.co/400x300/8bc34a/ffffff?text=Ansan+Mayor',
    period: '프로젝트 기간',
    role: '웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
    description: '안산시 시민 소통을 위한 열린시장실 웹사이트 UI를 개발했습니다.',
    detailImages: [
      'https://placehold.co/800x400/8bc34a/ffffff?text=Main+Page'
    ],
    features: [
      '시민 참여형 게시판 및 폼 UI 마크업',
      '접근성을 고려한 시맨틱 구조 설계'
    ]
  },
  {
    id: 'seongbuk-parking',
    title: '성북구도시관리공단 공영주차 (모바일)',
    thumbnail: 'https://placehold.co/400x300/ffc107/ffffff?text=Seongbuk+Parking',
    period: '프로젝트 기간',
    role: '모바일 웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
    description: '성북구 공영주차장 이용 안내 및 결제를 위한 모바일 전용 웹페이지를 구축했습니다.',
    detailImages: [
      'https://placehold.co/800x400/ffc107/ffffff?text=Mobile+UI'
    ],
    features: [
      '모바일 터치 환경에 최적화된 UI/UX 구현',
      '결제 및 조회 폼 마크업'
    ]
  },
  {
    id: 'seoul-labor',
    title: '서울노동포털',
    thumbnail: 'https://placehold.co/400x300/795548/ffffff?text=Seoul+Labor',
    period: '프로젝트 기간',
    role: '웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript', '웹 접근성(WA)'],
    description: '서울시 노동자들을 위한 종합 정보 제공 포털 사이트의 UI를 개발했습니다.',
    detailImages: [
      'https://placehold.co/800x400/795548/ffffff?text=Portal+Main'
    ],
    features: [
      '방대한 정보의 효율적인 배치를 위한 레이아웃 설계',
      '웹 접근성(WA) 인증 마크 획득 지원'
    ]
  },
  {
    id: 'overseas-agri',
    title: '해외농업개발서비스',
    thumbnail: 'https://placehold.co/400x300/cddc39/ffffff?text=Overseas+Agri',
    period: '프로젝트 기간',
    role: '웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
    description: '해외 농업 진출 기업을 지원하는 정보 서비스 포털의 퍼블리싱을 담당했습니다.',
    detailImages: [
      'https://placehold.co/800x400/cddc39/ffffff?text=Service+Page'
    ],
    features: [
      '글로벌 사용자 환경을 고려한 UI 설계',
      '데이터 테이블 및 게시판 UI 마크업'
    ]
  },
  {
    id: 'elec-safety',
    title: '전기안전교육원',
    thumbnail: 'https://placehold.co/400x300/ff5722/ffffff?text=Elec+Safety',
    period: '프로젝트 기간',
    role: '웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
    description: '전기안전교육원의 온라인 교육 수강 및 안내를 위한 웹사이트 UI를 구축했습니다.',
    detailImages: [
      'https://placehold.co/800x400/ff5722/ffffff?text=Education+Portal'
    ],
    features: [
      '동영상 강의 플레이어 주변 UI 마크업',
      '수강 신청 및 결제 프로세스 폼 구현'
    ]
  },
  {
    id: 'mofa-rep',
    title: '외교부 대표 및 재외공관',
    thumbnail: 'https://placehold.co/400x300/303f9f/ffffff?text=MOFA',
    period: '프로젝트 기간',
    role: '웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript', '웹 접근성(WA)'],
    description: '외교부 대표 홈페이지 및 전 세계 재외공관 표준 웹사이트 템플릿을 퍼블리싱했습니다.',
    detailImages: [
      'https://placehold.co/800x400/303f9f/ffffff?text=MOFA+Main'
    ],
    features: [
      '다국어 지원을 고려한 유연한 마크업 구조',
      '공공기관 최고 수준의 웹 접근성 준수'
    ]
  },
  {
    id: 'ansan-water',
    title: '안산시 상하수도',
    thumbnail: 'https://placehold.co/400x300/03a9f4/ffffff?text=Ansan+Water',
    period: '프로젝트 기간',
    role: '웹 퍼블리싱',
    skills: ['HTML5', 'CSS3', 'JavaScript'],
    description: '안산시 상하수도 사업소의 요금 조회 및 민원 신청 웹사이트 UI를 개발했습니다.',
    detailImages: [
      'https://placehold.co/800x400/03a9f4/ffffff?text=Service+Page'
    ],
    features: [
      '복잡한 요금 조회 결과 테이블 마크업',
      '민원 신청 마법사(Wizard) 형태의 UI 구현'
    ]
  }
];
