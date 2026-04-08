const CANDIDATES = {
  // ── 전남광주특별시장 ──
  mayor: [
    {
      id: "kim-young-rok", name: "김영록", party: "더불어민주당",
      color: "#22c55e", colorBg: "rgba(34,197,94,0.1)",
      position: "前 전라남도지사 (민선7·8기)",
      born: "1955-02-17",
      career: ["전라남도지사 (민선7·8기, 직무정지)","농림축산식품부 장관","국회의원 (5선)"],
      slogan: "400만 통합특별시, Y4-노믹스!",
      image: "https://2026win.kr/files/candidate/profile/20260212184807_d5c64f6ea88e2f4a.jpg",
      favorable: false, status: "결선중", statusNote: "결선 진출 (4.12~14)",
      hashtags: ["#대통령이원하는통합특별시장","#길을아는사람"]
    },
    {
      id: "min-hyung-bae", name: "민형배", party: "더불어민주당",
      color: "#60a5fa", colorBg: "rgba(96,165,250,0.1)",
      position: "국회의원 (광주 광산을, 3선)",
      born: "1961-06-15",
      career: ["국회의원 (광주 광산을, 3선)","前 광주 광산구청장 (2선)"],
      slogan: "서울을 넘다, 전남광주신성장특별시",
      image: "https://2026win.kr/files/candidate/profile/20260312124624_db51683602f91039.jpg",
      favorable: false, status: "결선중", statusNote: "결선 진출 (4.12~14)",
      hashtags: ["#대통령이밀어주는통합특별시","#민형배는합니다"]
    },
    {
      id: "shin-jeong-hoon", name: "신정훈", party: "더불어민주당",
      color: "#fbbf24", colorBg: "rgba(251,191,36,0.1)",
      position: "국회의원 (3선)",
      career: ["국회의원 (3선)","나주시장"],
      slogan: "", image: "",
      eliminated: true, eliminatedNote: "본경선 탈락 (2026.04.05)"
    },
    {
      id: "ju-cheol-hyeon", name: "주철현", party: "더불어민주당",
      color: "#a78bfa", colorBg: "rgba(167,139,250,0.1)",
      position: "국회의원", career: ["국회의원"],
      slogan: "", image: "",
      eliminated: true, eliminatedNote: "민형배와 단일화, 사퇴"
    }
  ],

  // ── 광주 기초단체장 ──
  gwangju_mayors: {
    "donggu":   { name: "동구청장", candidates: [
      { name:"임택",  position:"현직 동구청장",  status:"현직", competition:"단독",   image:"https://2026win.kr/files/candidate/profile/20260306200415_98b46429b4d169f9.jpg", born:"1963-10-02", career:["현직 현 광주 동구청장", "현직 현 더불어민주당 당대표 지방자치특보"], edu:["전남대학교 일반대학원(광주) 정치학과 정치학(박사) 수료", "조선대학교 정책대학원(광주) 행정학과 자치행정학(석사) 졸업"], nominated:true, favorable:true,  color:"#22c55e", slogan:"준비중" }
    ]},
    "seogu":    { name: "서구청장", candidates: [
      { name:"김이강", position:"현직 서구청장",  status:"현직", competition:"단독",   image:"https://2026win.kr/files/candidate/profile/20260306200414_f38c0b67be125ec3.jpg", born:"1971-06-15", career:["현직 서구청장", "전직 대통령 직속 일자리위원회 대외협력관"], edu:["전남대학교(광주) 경영학 경영학석사 졸업", "한국외국어대학교(서울) 무역학 졸업"], nominated:true, favorable:true,  color:"#22c55e", slogan:"#골목경제" }
    ]},
    "namgu":    { name: "남구청장", candidates: [
      { name:"김병내", position:"현직 남구청장",  status:"현직", competition:"단독",   image:"https://2026win.kr/files/candidate/profile/20260306200443_0faefa983a947d2b.jpg", born:"1973-05-16", career:["현직 광주광역시 남구 구청장", "전직 대통령실 행정관"], edu:["고려대학교 일반대학원(세종) 북한학과 박사 수료", "전남대학교 행정대학원(광주) 행정학과 석사 졸업"], nominated:true, favorable:true,  color:"#22c55e", slogan:"준비중" }
    ]},
    "bukgu":    { name: "북구청장", candidates: [
      { name:"신수정", position:"도전자",          status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200411_832eaaab04ba1427.jpg", born:"1973-01-19", career:["현직 광주광역시의회 의장", "전직 더불어민주당 중앙당 정책위원회 부의장"], edu:["전남대학교 정책대학원(광주) 사회문화복지정책 석사 졸업", "광주대학교(광주) 산업디자인학과 졸업"], runoffStatus:"결선중", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"정다은", position:"도전자",          status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200437_6a98f41181846d89.jpg", born:"1986-09-18", career:["현직 대한변호사협회 우수변호사", "현직 더불어민주당 중앙당 부대변인"], edu:["전남대학교 법학전문대학원(광주) 법학전문대학원 석사과정 졸업", "전남대학교(광주) 법학과 졸업"], runoffStatus:"결선중", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "gwangsan": { name: "광산구청장", candidates: [
      { name:"박병규", position:"현직 광산구청장", status:"현직", competition:"단독",   image:"https://2026win.kr/files/candidate/profile/20260306200413_eced449440e57cec.jpg", born:"1966-11-28", career:["현직 광주광역시 광산구청장", "전직 광주광역시 경제부시장"], edu:["송원대학(광주) 사회복지학과 졸업"], nominated:true, favorable:true,  color:"#22c55e", slogan:"준비중" }
    ]}
  },

  // ── 전남 기초단체장 ──
  jeonnam_mayors: {
    "gangjin":    { name:"강진군수",  jndc:"간접", candidates:[
      { name:"김보미", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260406232637_bbb1a17201d4c3a7.png", born:"1989-12-04", career:["현직 강진군의회 의원", "전직 민선9기 강진군의회 의장"], edu:["전남대학교 일반대학원(광주) 미술학과 석사 수료", "전남대학교(광주) 미술학과 졸업"], favorable:false, color:"#60a5fa", slogan:"돈을 버는 강진군! / 연180만원 강진기본소득" },
      { name:"차영수", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260402205941_724bdbe4e6075769.jpeg", born:"1963-05-30", career:["현직 전라남도의원", "현직 더불어민주당 정책위원회 부의장"], edu:["조선대학교(광주) 체육학과 졸업"], nominated:true, favorable:false, color:"#a78bfa", slogan:"머물고 일하고 돌아오는 강진 / 강진 예산 1조 시대" }
    ]},
    "goheung":    { name:"고흥군수",  jndc:"간접", candidates:[
      { name:"공영민", status:"현직",   competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145415_19229e9f9b9cee64.jpg", born:"1954-02-02", career:["현직 더불어민주당 현 고흥군수", "전직 기획재정부 23년 근무(부이사관 출신)"], edu:["중앙대학교대학원(서울) 사회복지학과 석사 졸업", "한성대학교대학원(서울) 정책학 박사 졸업"], favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"류제동", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260304170925_2034a8700e52e715.jpg", born:"1967-01-10", career:["현직 제9대 고흥군의회 후반기 의장", "전직 전남도당 청소년특별위원회 위원장"], edu:["서강실업전문대학(광주) 세무회계과 졸업"], favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"박준희", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145339_e692616911348919.jpg", born:"1966-01-27", career:["전직 전)고흥군 기획실장", "전직 전)도양읍장"], edu:["전남대학교(광주) 행정학과 졸업"], favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"신순식", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145334_e8861e4ee3b88e5e.jpg", born:"1959-04-11", career:["전직 국무총리행정조정실 조정관 과장", "전직 우정사업본부 전남체신청장"], edu:["동아대학교 대학원(부산) 법학과 석사 수료", "한양대학교(서울) 경제학과 졸업"], favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"안정민", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145248_f2488527250b445f.jpg", born:"1968-04-29", career:["전직 고흥군체육회 회장", "전직 제7대 고흥군의회 의원"], edu:["서강전문대학교(광주) 영양학 졸업", "조선 대학교 여자고등학(광주 동구)"], favorable:false, color:"#fb923c", slogan:"준비중" }
    ]},
    "gokseong":   { name:"곡성군수",  jndc:"간접", candidates:[
      { name:"강대광", status:"현직",   competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145413_c244ba5a6464c4cb.jpg", born:"1963-03-10", career:["전직 5.6.7대 곡성군의회 의원", "현직 전남대학교 총동창회 부회장"], edu:["전남대학교(광주) 농업경제학과 졸업"], favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"강덕구", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145225_60b5cc471831944b.jpg", born:"1974-04-22", career:["현직 곡성군의회 의장", "현직 더불어민주당 대표 특별보좌 전남특보"], edu:["조선대학교(광주) 토목공학과 졸업"], favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"조상래", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145340_3a1a00a41aae7fe6.jpg", born:"1957-11-18", career:["현직 더불어민주당 현 곡성군수", "전직 제10대 전라남도의회 의원"], edu:["성균관대학교(서울) 사회학과 졸업"], favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "gwangyang":  { name:"광양시장",  jndc:"직접", candidates:[
      { name:"김태균", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145346_dfcdc9dc06e6f7fc.jpg", born:"1963-08-10", career:["현직 전남도의회 의장", "전직 더불어민주당 전남도당 상임부위원장"], edu:["조선대학교(광주) 경영학 석사 졸업", "동의대학교(부산) 산업공학과 졸업"], favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"정인화", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145311_9afbd7ce48366189.jpg", born:"1957-07-27", career:["현직 현직 광양시장", "전직 제20대 국회의원(전남 광양", "곡성"], edu:["한양대학교 국제관광대학원(서울) 국제관광학 석사 졸업", "전남대학교(광주) 행정학과 졸업"], nominated:true, favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "gurye":      { name:"구례군수",  jndc:"간접", candidates:[
      { name:"김순호", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145315_5f9d7603e5e4a07d.jpg", born:"1962-12-07", career:["전직 3개면장 등 29년 공직 재직", "현직 민선 7기", "8기 구례군수"], edu:["순천대학교 경영행정대학원(전남) 행정학과 행정학석사 졸업", "한국방송통신대학교(서울) 행정학과 졸업"], favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"신동수", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145417_b3d4a7e05e0b05b5.jpg", born:"1973-03-15", career:["현직 구례새마을금고 이사장", "전직 경력없음"], edu:[], favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"장길선", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145318_20090fb41367683e.jpg", born:"1961-01-17", career:["현직 구례군의회 의장", "현직 더불어민주당 정책위원회 부의장"], edu:["전남대학교(광주) 사범대학 체육교육과 졸업"], favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"홍봉만", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145358_ae04a8d6e6e055f6.jpg", born:"1970-03-20", career:["전직 서울대학교 사범대학 학생회장", "현직 지리산장터 대표"], edu:["서울대학교(서울) 교육행정 석사 중퇴", "서울대학교(서울) 지리교육 졸업"], favorable:false, color:"#fb923c", slogan:"준비중" }
    ]},
    "naju":       { name:"나주시장",  jndc:"직접", candidates:[
      { name:"윤병태", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145322_e6626947f34ec6c9.jpg", born:"1960-08-25", career:["현직 민선8기 나주시장", "전직 전라남도 정무부지사"], edu:["美 미주리주립대학교(미국) 경제학 박사 졸업", "성균관대학교(서울) 경제학과 졸업"], nominated:true, favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"이재태", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145402_17de2906b970e437.jpg", born:"1967-08-24", career:["현직 더불어민주당 전남도의원", "현직 더불어민주당 나주화순지역위원회 부위원장"], edu:["목포대학교(전라) 사회과학대학 졸업"], favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "damyang":    { name:"담양군수",  jndc:"간접", candidates:[
      { name:"박종원", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145400_a6af7e4cf3df6b18.jpg", born:"1968-07-04", career:["전직 제 5대.7대 담양군의회 의원", "현직 제 11대.12대 전라남도의회 의원"], edu:["전남대학교 정책대학원(광주) 일반행정전공 행정학석사 졸업", "광주대학교(광주) 토목공학과 졸업"], runoffStatus:"결선중", favorable:false, color:"#60a5fa", slogan:"담양 주도 성장 / AI스마트농업·반도체밸리·정원도시 8대혁신" },
      { name:"이규현", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145412_5beb2f40ab218dfd.jpg", born:"1959-01-25", career:["현직 전라남도의회 의원", "현직 농어촌기본소득운동전남본부상임대표"], edu:["전남대학교(광주) 행정학 석사 수료", "전남대학교(광주) 지역개발학과 졸업"], runoffStatus:"결선중", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"이재종", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145226_d957a91cf65a6cb9.jpg", born:"1975-07-20", career:["전직 대통령 비서실 행정관", "현직 민주당 정책위원회 부의장"], edu:["전남대학교(광주) 국악과 졸업"], favorable:false, color:"#f472b6", slogan:"준비중" }
    ]},
    "mokpo":      { name:"목포시장",  jndc:"직접", candidates:[
      { name:"강성휘", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260401155104_62f97b7baf609aed.png", born:"1967-11-20", career:["현직 더불어민주당 정책위 부의장", "현직 국립목포대학교 행정학박사"], edu:["목포대학교 경영행정대학원(전남) 행정학 행정학(석사) 졸업", "목포대학교 경영행정대학원(전남) 행정학 행정학(박사) 졸업"], nominated:true, favorable:false, color:"#60a5fa", slogan:"제대로 목포시 대전환 / 시민주권·해상풍력 배후도시" },
      { name:"이호균", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260319190411_4a9588a66cf7addb.jpg", born:"1962-02-14", career:["현직 더불어민주당 정책위원회 부의장", "전직 전라남도의회 의장"], edu:["건국대학교 경영대학원(서울) 경영학 경영학 석사 졸업", "대불대학교 일반대학원(전라) 경영학 경영학 박사 졸업"], favorable:false, color:"#a78bfa", slogan:"이재명처럼 이호균 / 목포크게쓰자" }
    ]},
    "muan":       { name:"무안군수",  jndc:"직접", candidates:[
      { name:"김산",   status:"도전자", competition:"6인 혼전", image:"https://2026win.kr/files/candidate/profile/20260402173027_83e1450e0bae0dae.png", born:"1958-04-03", career:["현직 현 무안군수", "전직 무안군의회 의장"], edu:["목포대학교(전남) 지역개발학과 졸업"], favorable:false, color:"#60a5fa", slogan:"오직 군민! / 광주 군공항 이전, RE100 국가산단" },
      { name:"나광국", status:"도전자", competition:"6인 혼전", image:"https://2026win.kr/files/candidate/profile/20260403101545_ae2f995b5105a444.png", born:"1979-09-20", career:["현직 제11대‧12대 전남도의원", "현직 더불어민주당 정책위 부의장"], edu:["목포대학교(무안) 경영학과 석사 졸업", "목포대학교(전남) 생약자원학과 졸업"], favorable:false, color:"#a78bfa", slogan:"무안의 기회, 나광국 / 무안형 기본소득·국제공항 재도약" },
      { name:"류춘오", status:"도전자", competition:"6인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145332_9e2976a3b6d911fb.jpg", born:"1966-01-30", career:["현직 무안군체육회장", "전직 더불어민주당 전남도당 직능국장"], edu:["목포과학대학교(전남) 토목조경학과 졸업"], favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"이혜자", status:"도전자", competition:"6인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145225_2add55c4020344d6.jpg", born:"1956-10-05", career:["전직 전남도의회", "전직 동아보건대학교 겸임교수"], edu:["전남대학교 행정대학(광주) 행정학과 석사 졸업", "목포대학교대학원(무안) 행정학과 박사 졸업"], favorable:false, color:"#fb923c", slogan:"준비중" },
      { name:"정승욱", status:"도전자", competition:"6인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145227_6ebd93dd77aaed96.jpg", born:"1961-05-28", career:["전직 청와대 출입기자", "전직 한국외국어대학교 대학원 겸임교수"], edu:["연세대학교 행정대학원(서울) 정치행정리더십 석사 졸업", "한국외국더대학교대학원(서울) 국제관계학 박사 졸업"], favorable:false, color:"#38bdf8", slogan:"준비중" },
      { name:"최옥수", status:"도전자", competition:"6인 혼전", image:"https://2026win.kr/files/candidate/profile/20260407144923_8dceebde50f6724f.jpg", born:"1964-05-07", career:["전직 전)더불어민주당 무안군수후보", "현직 김대중재단 전라남도 무안군지회 회장"], edu:["호남대학교(광주) 사회융합대학원 석사 졸업", "호남대학교(광주) 관광경영학과 졸업"], favorable:false, color:"#34d399", slogan:"준비중" }
    ]},
    "boseong":    { name:"보성군수",  jndc:"간접", candidates:[
      { name:"김철우", status:"현직",   competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145416_acaa9fe6ee432ee6.jpg", born:"1964-09-28", career:["현직 보성군수", "전직 대통령직속 북방경제협력위원회 전문위원"], edu:["광주대학교대학원(광주) 경제금융학 경제학석사 졸업", "광주대학교(광주) 경제금융학 졸업"], favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"선형수", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145242_bbb1027c761230a4.jpg", born:"1963-07-19", career:["현직 민주당 중앙당 민주연구원 부원장", "전직 민주당 중앙당 정책위원회 부의장"], edu:["세종대학교(서울) 회화과 졸업"], favorable:false, color:"#60a5fa", slogan:"막힘없는행정·아낌없는교육·걱정없는노후" },
      { name:"임영수", status:"도전자", competition:"3인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "suncheon":   { name:"순천시장",  jndc:"간접", candidates:[
      { name:"서동욱", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260403223316_3c71cdde416f0b43.jpg", born:"1969-09-11", career:["전직 전) 전남도의회 의장", "현직 더불어 민주당 당대표 특별보좌역"], edu:["전남대학교(광주) 행정학과 석사 졸업", "순천대학교(전남) 농생물학과 졸업"], favorable:false, color:"#60a5fa", slogan:"순천이 키운 인물 / 24년 정치 경험" },
      { name:"손훈모", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260405173141_d7395ef1d30d12a9.jpg", born:"1969-08-05", career:["현직 법률사무소 순천 대표변호사", "현직 전남도당 부위원장"], edu:["순천대학원(순천) 사학과 석사 수료", "고려대학교(서울) 법학과 졸업"], favorable:false, color:"#a78bfa", slogan:"미래로 도약하는 경제특례도시 / 인권변호사" },
      { name:"오하근", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260402162411_c41e44da08df1829.png", born:"1968-01-05", career:["전직 더불어민주당 순천시장 후보", "현직 전략기획위원회 부위원장"], edu:["고려대학교(서울) 사회학과 졸업"], favorable:false, color:"#f472b6", slogan:"더 큰 순천 / 이재명 정부의 순천시장" },
      { name:"허석",   status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260402185447_918ecaf860cf4aad.jpg", born:"1964-09-30", career:["전직 민선7기 순천시장", "전직 서울대학교 경제학 학사"], edu:["서울대학교(서울) 경제학과 졸업"], favorable:false, color:"#fb923c", slogan:"미친예산! 순천도약! 첨단산업 강화!" }
    ]},
    "sinan":      { name:"신안군수",  jndc:"직접", candidates:[
      { name:"김경화", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145225_e06650840c63fdbf.jpg", born:"1949-12-07", career:["전직 전 민주당 체육특별위원회 부위원장", "전직 전 민주당 체육특별위원회 부위원장"], edu:[], favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"김행원", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145246_fba2ed518eda2f66.jpg", born:"1963-04-06", career:["전직 목포시청 지역경제과장", "전직 더불어민주당 해양수산특별위원회 부위원장"], edu:["마리아회(목포) 졸업"], favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"박석배", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145250_8ed2f632a8cdc9ce.jpg", born:"1963-01-05", career:["전직 더불어민주당 민주연구원/부원장", "현직 더불어민주당 전남도당 부위원장"], edu:["카톨릭대학교(경기) 회계학과 졸업"], favorable:false, color:"#f472b6", slogan:"군민주권신안" },
      { name:"박우량", status:"현직",   competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145259_9dc023fb5d79a907.jpg", born:"1955-09-14", career:["현직 더불어민주당 당대표 특별보좌역 전남특보", "전직 신안군수"], edu:["오사카대학(일본) 공법학 석사 졸업", "성균관대학(서울) 행정 박사 수료"], nominated:true, favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"천경배", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145223_8ae57b2e1e8beb9c.jpg", born:"1975-10-19", career:["전직 더불어민주당 당대표실 국장", "전직 민선7기 민주당 신안군수 후보"], edu:["중앙대학교(서울) 사회과학대학 국제관계학과 졸업"], favorable:false, color:"#fb923c", slogan:"준비중" }
    ]},
    "yeosu":      { name:"여수시장",  jndc:"직접", candidates:[
      { name:"김순빈", status:"도전자", competition:"7인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145337_80fddedafbf2dad1.jpg", born:"1952-11-20", career:["현직 여수시대학병원유치위원회 위원장", "전직 더불어민주당 법률 자문위원"], edu:["동아보건대학교(전라) 사회복지전공 졸업"], favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"김영규", status:"도전자", competition:"7인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145306_b3b18679623cb78f.jpg", born:"1956-11-05", career:["전직 제5대", "8대 전반기 여수시의회 의장", "현직 더불어민주당 정책위원회 부의장"], edu:["전남대학교 산학협력대학원(전라) 문화산업학과 경영학학사 졸업", "한영대학교(전남) 토목과 졸업"], favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"백인숙", status:"도전자", competition:"7인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145256_575a4be9f16723c8.jpg", born:"1961-07-03", career:["현직 여수시의회 의장", "전직 더불어민주당 전국여성 기초의원 상임대표"], edu:["전남대학교 정책대학원(광주) 일반행정전공 석사 졸업", "여수한영대학(여수) 사회복지학과 졸업"], favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"서영학", status:"도전자", competition:"7인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145423_a35a453c83609d7c.jpg", born:"1971-02-19", career:["전직 대통령비서실 행정관", "전직 여수시청 혁신분권기획단장"], edu:["전남대학교(광주) 임학과 석사 수료", "전남대학교(광주) 임학과(주전공) 졸업"], favorable:false, color:"#fb923c", slogan:"준비중" },
      { name:"이광일", status:"도전자", competition:"7인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145411_e82664a06e63311a.jpg", born:"1964-11-25", career:["현직 제12대 전라남도의회 후반기 부의장", "현직 더불어민주당 중앙당 장애인지방의원협의회 상임대표"], edu:["전남대학교(광주) 행정학과 졸업", "성동상업학교)(서울 중랑구) 졸업"], favorable:false, color:"#38bdf8", slogan:"준비중" },
      { name:"정기명", status:"현직",   competition:"7인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145355_d43bfc357cf63ec6.jpg", born:"1962-09-26", career:["현직 전라남도 여수시장", "전직 전남 여수시을 지역위원장"], edu:["전남대학교(광주) 법학과 졸업"], favorable:false, color:"#22c55e", slogan:"지역경제(산단대전환)·관광활성화(소상공인)" },
      { name:"주종섭", status:"도전자", competition:"7인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145351_3c089574f9d637a0.jpg", born:"1964-03-18", career:["현직 전라남도의원", "현직 전북대사회학박사"], edu:["전북대학교(전주) 사회학과 박사 졸업", "고려대학교(서울) 노동복지.정책 석사 졸업"], favorable:false, color:"#34d399", slogan:"준비중" }
    ]},
    "yeonggwang": { name:"영광군수",  jndc:"직접", candidates:[
      { name:"김혜영", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306094101_6b65cda980f2e8fb.jpg", born:"1976-01-27", career:["현직 더불어민주당 정책위원회 부의장", "현직 김혜영 농촌미래연구소 이사장"], edu:["경기대학교 일반대학원(서울) 관광경영학과 석사 졸업", "경기대학교 일반대학원(서울) 관광경영학과 박사 졸업"], favorable:false, color:"#60a5fa", slogan:"군민을 다시 주인으로 / K-에너지수도·기본소득·기본생활" },
      { name:"양재휘", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260401101052_5000e302ee32d17b.jpg", born:"1960-01-29", career:["현직 더불어민주당 기본사회위원회 부위원장", "전직 영광군 수산업협동조합 조합장 직무대행"], edu:["-"], favorable:false, color:"#a78bfa", slogan:"이제, 영광의 시대로" },
      { name:"장기소", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145255_1cd0cb5c47080faa.jpg", born:"1962-09-30", career:["현직 영광군의회 의원", "전직 광주대학교 대학원행정학석사"], edu:["광주대학교대학원(광주) 행정학과 석사 졸업", "광주대학교(광주) 경찰행정학 졸업"], favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"장세일", status:"현직",   competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260402230118_4c2949f33e260933.png", born:"1964-05-09", career:["현직 영광군수", "현직 더불어민주당 당대표 지방자치 특보"], edu:["동강(광주) 사회복지행정과 졸업", "영광(전남 영광군) 졸업"], favorable:false, color:"#22c55e", slogan:"잘 해온 군수! 더 잘할 군수! / 군민 평생연금·에너지 기본소득" }
    ]},
    "yeongam":    { name:"영암군수",  jndc:"직접", candidates:[
      { name:"우승희", status:"현직",   competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145330_7320c658aab8d95e.jpg", born:"1973-10-08", career:["현직 영암군수", "현직 더불어민주당 당대표 특보"], edu:["조선대학교(광주) 정치외교학과 석사 졸업", "조선대학교(광주) 정치외교학과 졸업"], nominated:true, favorable:true,  color:"#22c55e", slogan:"영암을 위해 한번 더 / 대통령 혁신 파트너·에너지 기본소득" },
      { name:"전동평", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145239_bc846f5a8078db14.jpg", born:"1961-02-07", career:["전직 전라남도 영암군 군수", "현직 더불어민주당 전남 도당 부위원장"], edu:["전남대학교(광주) 행정학과 석사 졸업", "전남대학교(광주) 산업공학과 졸업"], favorable:false, color:"#60a5fa", slogan:"함께 꾸는 꿈 현실로 / 준비된 리더" }
    ]},
    "wando":      { name:"완도군수",  jndc:"간접", candidates:[
      { name:"신의준", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145331_1cb140c64369a4fc.jpg", born:"1963-12-26", career:["현직 제12대전라남도의회 의원", "전직 제12대 전반기 농수산위원장"], edu:["경남대학교(경상) 수학과 졸업"], favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"우홍섭", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260320144036_51ff68c00d0002b0.png", born:"1965-06-24", career:["전직 진도 부군수", "현직 더불어 민주당 전남도당 부위원장"], edu:["조선대학교(광주) 행정학과 졸업"], favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"이철",   status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145429_799890ea659d1410.jpg", born:"1966-07-08", career:["현직 전남도의회 부의장", "현직 조선대학교 행정학 박사"], edu:["조선대학교 대학원(광주) 공공행정학과(행정학전공) 박사 졸업", "동신대학교(전라) 스포츠과학부 졸업"], favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"지영배", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145346_933d2cc9eb1bef3c.jpg", born:"1968-02-12", career:["전직 행정자치부 서기관", "전직 전라남도 지방부이사관"], edu:["전남(광주) 국민윤리교육 졸업", "금호(광주 북구) 중퇴"], favorable:false, color:"#fb923c", slogan:"준비중" },
      { name:"허궁희", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145427_4dd987fdadd56af9.jpg", born:"1960-06-05", career:["(현) 민주당 당대표특보", "(전) 제9대 완도군의회 전반기 의장"], edu:["동아보건대학교(전라) 사회복지학부 졸업"], favorable:false, color:"#38bdf8", slogan:"준비중" }
    ]},
    "jangseong":  { name:"장성군수",  jndc:"간접", candidates:[
      { name:"김한종", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145420_b7122dbb43bffa69.jpg", born:"1954-03-29", career:["현직 현 장성군수", "전직 전 전라남도의회 의장"], edu:["조선대학교(광주) 생체의용화학공학과 중퇴"], runoffStatus:"결선중", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"박노원", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145410_155f6394d6cd952f.jpg", born:"1969-11-05", career:["전직 대통령비서실 행정관", "전직 장성군 부군수"], edu:["한국개발연구원국제정책대학원(세종) 공공정책학과 석사 졸업", "전남대학교(광주) 경제학과 졸업"], favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"소영호", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145427_a0f67e2bd27c5a0b.jpg", born:"1969-06-21", career:["전직 목포시 부시장", "현직 더불어민주당 전국농어민위원회 부위원장"], edu:["KDI국제정책대학원(서울) 정책학과 석사 졸업", "경기대학교(서울) 행정학과 졸업"], runoffStatus:"결선중", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"유성수", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145341_843b4095cabf637c.jpg", born:"1968-10-10", career:["현직 더불어민주당 정책위원회 부의장", "전직 제11대 전라남도 의원"], edu:["원광(전북) 약학과 졸업"], favorable:false, color:"#fb923c", slogan:"준비중" }
    ]},
    "jangheung":  { name:"장흥군수",  jndc:"간접", candidates:[
      { name:"곽태수", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145422_c55550ad4ef56e41.jpg", born:"1962-10-07", career:["전직 전) 11대 전라남도 의원", "전직 전) 더불어민주당 전남도당 부위원장"], edu:["전남도립대학교(전남) 원예산업과 졸업", "초당대학교(전남) 창업경영학과 졸업"], runoffStatus:"결선중", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"김성",   status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145428_98ba1b5d6a2b4e86.jpg", born:"1959-09-23", career:["현직 장흥군수", "현직 더불어민주당 호남발전특별위원회 수석부위원장"], edu:["조선대학교(광주) 행정학과 박사 졸업", "건국대학교(서울) 무역학과 졸업"], runoffStatus:"결선중", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"왕윤채", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145303_9fdd94cf898add0e.jpg", born:"1964-10-02", career:["현직 전 장흥군의회 의장", "현직 더불어민주당 정책위원회 부의장"], edu:["순천대학교(순천) 경영학과 졸업"], favorable:false, color:"#f472b6", slogan:"준비중" }
    ]},
    "jindo":      { name:"진도군수",  jndc:"간접", candidates:[
      { name:"김인정", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145411_bc93167a95382d16.jpg", born:"1960-11-19", career:["현직 제12대 전라남도의원", "전직 제6", "7"], edu:["송원대학교(광주) 재활보건학과 졸업", "진도실업고등하교(진도 진도읍) 졸업"], favorable:false, color:"#60a5fa", slogan:"떠나지 않는 진도 / 인구소멸 위기 극복" },
      { name:"이재각", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145230_f473800c3d9d4506.jpg", born:"1961-04-09", career:["전직 충북지방병무청장", "현직 더불어민주당 전남도당 부위원장"], edu:["수원대학교(경기) 경영학과 석사 졸업", "광주대학교(광주) 행정학과 졸업"], nominated:true, favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "hampyeong":  { name:"함평군수",  jndc:"직접", candidates:[
      { name:"이남오", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145249_3011c35368f9c690.jpg", born:"1972-04-03", career:["현직 더불어민주당 당대표 특보", "현직 함평군의회 의장"], edu:["초당대학교 대학원(전라) 행정학과 석사 졸업", "전남대학교(광주) 경영전문대학원 경영자과정 수료"], favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"이상익", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145232_1c303d025293751b.jpg", born:"1956-07-07", career:["현직 현 함평군수", "현직 현 전국농어촌지역군수협의회 부회장"], edu:["초당대학교(전라) 사회복지학과 졸업"], favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "haenam":     { name:"해남군수",  jndc:"간접", candidates:[
      { name:"명현관", status:"현직",   competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145257_24902a6e92655d53.jpg", born:"1962-06-21", career:["현직 더불어민주당 현 해남군수", "전직 제10대 전라남도의회 전반기 의장"], edu:["호남대학교(광주) 체육학과 체육학 석사 졸업"], nominated:true, favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"김성주", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145331_2d4d5f13ce33fa17.jpg", born:"1959-07-08", career:["전직 해남군수협 3선 조합장", "현직 나주대학교 특임교수"], edu:["조선대학교 경영대학원(광주) 경영학과 석사 졸업", "전남대학교 일반대학원(광주) 수산과학과 박사 졸업"], favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"이길운", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145253_97453302edadabd4.jpg", born:"1966-03-09", career:["전직 해남군의회 의원(5대~7대)", "현직 해남군체육회 회장"], edu:["조선대학교 경영대학원(광주) 경영학과 석사 졸업", "조선대학교(광주) 원자력공학과 졸업"], favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "hwasun":     { name:"화순군수",  jndc:"간접", candidates:[
      { name:"문행주", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145235_9557a778af4be6e6.jpg", born:"1964-07-29", career:["전직 화순군의회의원", "전직 전라남도의회의원"], edu:["전남대학교(광주) 중어중문학과 졸업"], favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"윤영민", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145421_a1d720023f3dff7f.jpg", born:"1970-06-10", career:["전직 화순군의회부의장", "현직 더불어민주당정책위원회부의장"], edu:["전남대학교대학원(광주) 사회복지문화학 석사 졸업", "전남대학교대학원(광주) 기록관리협동과정 박사(기록관리학) 졸업"], runoffStatus:"결선중", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"임지락", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145404_dbeaf028df71004f.jpg", born:"1964-04-27", career:["현직 전라남도의회 의원", "현직 더불어민주당정책위원회 부의장"], edu:["전남대학교 행정대학원(광주) 행정학과 행정학석사 졸업", "전남대학교(광주) 농과대학 원예학과 졸업"], runoffStatus:"결선중", favorable:false, color:"#f472b6", slogan:"준비중" }
    ]}
  },

  // ── 광주 광역의원 ──
  gwangju_council: {
    "gwangsan": { name:"광산구", seats:5, candidates:[
      { name:"윤혜영", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200438_27afb36f6784b21b.jpg", born:"1962-08-03", career:["전직 제9대 광산구의회 전반기 부의장", "현직 더불어민주당 부대변인"], edu:["호남대학교 사회융합대학원(광주) 사회복지학과 사회복지학(석사) 졸업", "호남대학교(광주) 행정학과 졸업"], favorable:false },
      { name:"임이엽", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200410_76fe37c0eb1acf87.jpg", born:"1957-07-05", career:["전직 제7대 광산구의회 전반기 부의장", "현직 광산갑 지역위원회 부위원장"], edu:["전남대학교(광주) 행정학 박사 수료", "호남대학교(광주) 복지행정학과 석사 졸업"], favorable:false },
      { name:"정재봉", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200444_56355e3cdbf82a20.jpg", born:"1964-05-28", career:["현직 더불어민주당 중앙당 정책위원회 부의장", "전직 서강대학교 정치외교학과 졸업"], edu:["서강대학교(서울) 정치외교학과 졸업"], favorable:false },
      { name:"최지현", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200438_d0795fc405e9d833.jpg", born:"1972-12-03", career:["현직 광주광역시의회 의원(현 환경복지위원장)", "전직 광주환경운동연합 사무처장"], edu:["한양대학교공공정책대학원(서울) 시민사회학과 석사 수료", "전남대학교(광주) 식품공학과 졸업"], favorable:false },
      { name:"한귀례", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200446_9a817af2dc763779.jpg", born:"1967-08-05", career:["현직 더불어민주당 정책위원회 부의장", "전직 (재)광주광역시경제진흥상생일자리재단 평동종합비즈니스센터장"], edu:["동신대학교 대학원(전라) 상담심리학과 박사 졸업", "광주대학교 사회복지전문대학원(광주) 사회복지학과 석사 졸업"], favorable:false },
      { name:"김명수", district:"제2선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200414_ac0f579f690e3ef8.jpg", born:"1956-02-17", career:["현직 광산구의회 3선 현의장", "현직 더불어민주당 정청래 당대표 지방자치특보"], edu:["호남대학교(광주) 행정학과 행정학박사 졸업", "호남대학교(광주) 행정학과 졸업"], favorable:false },
      { name:"김창삼", district:"제2선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200426_f1e73f98f06f67e2.jpg", born:"1972-10-28", career:["현직 중앙당 기후 특위 부위원장", "현직 광산갑 민생실천 위원장"], edu:["전남과학대학교(전남) 건축과 졸업"], favorable:false },
      { name:"박경신", district:"제2선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200428_a461a6d7b525cb30.jpg", born:"1972-02-19", career:["전직 광산구의회 산업도시위원장", "현직 초록우산광주후원회사무국장"], edu:["호남대학교(광주) 사회복지학과 석사 졸업", "호남대학교(광주) 행정학과 졸업"], favorable:false },
      { name:"박종원", district:"제2선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145400_a6af7e4cf3df6b18.jpg", born:"1968-07-04", career:["전직 제 5대.7대 담양군의회 의원", "현직 제 11대.12대 전라남도의회 의원"], edu:["전남대학교 정책대학원(광주) 일반행정전공 행정학석사 졸업", "광주대학교(광주) 토목공학과 졸업"], runoffStatus:"결선중", favorable:false },
      { name:"이영순", district:"제2선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200416_a65f9101946b44af.jpg", born:"1958-12-14", career:["전직 광산구의회 의장", "전직 이재명대통령후보 국민주권위원회 광주전남본부 위원장"], edu:["광주여자대학원(광주) 미용과학과 박사 졸업", "광주여자대학교(광주) 미용학과 졸업"], favorable:false },
      { name:"박필순", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200414_6d76b73fa9adb75a.jpg", born:"1974-08-16", career:["현직 더불어민주당 현 광주광역시의원", "현직 광주광역시의회 산업건설위원장"], edu:["전남대학교(광주) 불어물문학과 중퇴"], favorable:false },
      { name:"이영훈", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200420_b4eda8b2c93863db.jpg", born:"1972-01-16", career:["전직 광산구의회 의장", "전직 대통령직속국가균형발전위원회국민소통특별위원"], edu:["호남대학교사회융합대학원(광주) 행정학과 행정학 석사 졸업", "호남대학교(광주) 행정학과 졸업"], favorable:false },
      { name:"조승유", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200415_563a523b1bc9f116.jpg", born:"1964-10-24", career:["전직 제 7대 광산구의회 의장 (후반기)", "전직 민선8기 광주광역시 광산구청장직 인수위원회 인수위원"], edu:["전남대학교(광주) 행정학 석사 졸업", "광주대학교(광주) 경제학과 졸업"], favorable:false },
      { name:"김동호", district:"제4선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200431_dcb7c364144287db.jpg", born:"1974-09-06", career:["전직 광산지역세무사 회장", "전직 제6대, 7대 광산구의회 의원"], edu:["전남대학교(광주) 회계학과 졸업"], favorable:false },
      { name:"이귀순", district:"제4선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200411_3dc2dab968858ebe.jpg", born:"1979-02-19", career:["현직 광주광역시의회 의원(전반기 부의장)", "현직 더불어민주당 중앙당 정책위원회 부의장"], edu:["호남대학교 사회융합대학원(광주) 행정학과 석사 졸업", "호남대학교(광주) 행정학과 졸업"], favorable:false },
      { name:"김광란", district:"제5선거구", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260306200406_cb0ca303c31e3aef.jpg", born:"1971-05-11", career:["전직 광주광역시의원", "전직 광주 광산구의원"], edu:["전남대학교(광주) 물리교육학과(사범대학) 중퇴", "국가평생교육원(서울) 경영학(학점은행제) 졸업"], favorable:true  }
    ]},
    "namgu":    { name:"남구", seats:3, candidates:[
      { name:"강원호", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200413_17f89daf516831a4.jpg", born:"1967-09-12", career:["전직 7대 광주남구의회 의장", "전직 대통령직속 국가균형발전위원회 국민소통특별위원"], edu:["조선대학교(광주) 행정학과 석사 졸업", "조선이공대(광주) 토목과 졸업"], favorable:false },
      { name:"남호현", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200445_7536a88a093ceec1.jpg", born:"1965-05-22", career:["현직 광주광역시 남구의회 의장", "전직 더불어민주당 중앙당 정책위원회 부의장"], edu:["전남대학교 정책대학원(광주) 사회문화복지정책전공 석사 졸업", "광주여자대학교(광주) 상담심리학과 졸업"], favorable:false },
      { name:"박상원", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200421_bed2450cf09f0ff2.jpg", born:"1963-12-05", career:["현직 민주당 광주시당 주민자치 특별위원장", "현직 광주대 사회복지학 박사"], edu:["광주대(광주) 사회복지학과 박사 졸업", "전남대(광주) 행정학과 석사 졸업"], favorable:false },
      { name:"박철호", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200419_3784814fc82f9bc9.jpg", born:"1974-09-21", career:["전직 광주광역시 자치행정국 정무특별보좌관", "전직 국회의원 보좌관"], edu:["전남대행정대학원(광주) 행정학과 석사 졸업", "조선대학교(광주) 금속공학과 졸업"], favorable:false },
      { name:"서임석", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200446_eebb0a0e015231d0.jpg", born:"1988-07-11", career:["현직 광주광역시의원", "전직 더불어민주당 중앙당 정책위원회 부의장"], edu:["전남대일반대학원(광주) 행정 석사", "제주대(제주) 법학대학원 졸업"], favorable:false },
      { name:"노소영", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200427_c1c82a740bab4609.jpg", born:"1973-12-20", career:["현직 현 남구의회 운영위원장", "현직 유네스코광주전남협회부회장"], edu:["전남대학교(광주) 생명과학부 졸업"], favorable:false },
      { name:"배진하", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200407_1ded79a4819993ac.jpg", born:"1971-06-22", career:["전직 제6대, 7대 남구의회 재선의원", "현직 더불어민주당 정책위 부의장"], edu:["광주대학교(광주) 신문방송학 졸업", "한국사이버대(서울) 사회복지학 졸업"], favorable:false },
      { name:"임미란", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200442_6e37c8bb1c862906.jpg", born:"1965-08-06", career:["현직 광주광역시의회 의원", "전직 더불어민주당 광주광역시당 여성위원장"], edu:["조선대학교대학원(광주) 디자인경영학과 박사 졸업", "홍익대학교대학원(서울) 건축도시디자인 석사 졸업"], favorable:false },
      { name:"하주아", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200427_5b83fda6fe0c3b8b.jpg", born:"1969-01-05", career:["현직 더불어민주당 중앙당 부대변인", "현직 하주아 건축사 사무소 대표"], edu:["조선대학교 일반대학원(광주) 건축공학과 박사 졸업", "조선대학교 일반대학원(광주) 건축공학과 석사 졸업"], favorable:false },
      { name:"김점기", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200440_e612b7219d787c66.jpg", born:"1958-09-05", career:["현직 더불어민주당 당대표특보", "전직 대통령직속 국가균형발전위원회 전문위원"], edu:["조선대학교 정책대학원(광주) 행정학 석사 졸업", "조선대학교 공과대학(광주) 전기공학과 졸업"], favorable:false },
      { name:"박상길", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200442_91bbfa14610b12dc.jpg", born:"1969-08-12", career:["현직 남구의회의원", "현직 민주당안도걸국회의원정무특별보좌관"], edu:["조선대학교(광주) 법학과 석사 재학", "조선대학교(광주) 법학과 졸업"], favorable:false },
      { name:"박희율", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200441_d37bf0fd7b2bc727.jpg", born:"1962-07-23", career:["현직 광주광역시의회 제9대 의원", "현직 더불어민주당 중앙당 부대변인"], edu:["광주대학교(광주) 행정학과 행정학석사 졸업", "호남대학교(광주) 경제학과 졸업"], favorable:false }
    ]},
    "donggu":   { name:"동구", seats:2, candidates:[
      { name:"최순례", district:"제1선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200407_2fb7671b2126f509.jpg", born:"1968-03-13", career:["전직 광주시당 부위원장", "현직 광주시당 여성위원회 부위원장"], edu:["조선이공대학(광주) 사회복지학과 졸업", "국가평생교육진흥원(서울) 사회복지학과 졸업"], favorable:false },
      { name:"홍기월", district:"제1선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200434_6f490c79969c2355.jpg", born:"1960-10-15", career:["현직 광주광역시의회 의원", "현직 민주당 광주동남을지역 부위원장"], edu:["조선대 정책대학원(광주) 행정학 석사 졸업", "광주대학교(광주) 경찰법행정학과 졸업"], favorable:false },
      { name:"김재식", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200433_0c4431f82713afda.jpg", born:"1974-08-03", career:["전직 더불어민주당 국회의원 비서", "전직 동구의회 제9대 전반기 의장"], edu:["조선대학교(광주) 아랍어과 졸업"], favorable:false },
      { name:"노진성", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200442_b5e73a538c5a9f0e.jpg", born:"1993-01-12", career:["현직 광주광역시 동구의회 부의장", "현직 더불어민주당 부대변인"], edu:["연세대학교 교육대학원(서울) 체육및여가교육 석사 졸업", "전남과학대학교(전남) 생활체육과 졸업"], favorable:false },
      { name:"박미정", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200413_94b3b9cdaf52c5a7.jpg", born:"1968-01-19", career:["현직 광주광역시의원", "전직 이재명 대통령후보 선대위 공동본부장"], edu:["성균관대학교 대학원(서울) 사회복지학과 박사 졸업", "성균관대학교 대학원(서울) 사회복지학과 석사 졸업"], favorable:false },
      { name:"박성영", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200433_34153125f883efe3.jpg", born:"1963-08-13", career:["전직 국민은행 상무외4개지점장", "현직 광주시민사회위원회위원"], edu:["순천대학교대학원(전라) 경영학과 석사 졸업", "순천대학교(전남) 무역학과 졸업"], favorable:false }
    ]},
    "bukgu":    { name:"북구", seats:6, candidates:[
      { name:"반재신", district:"제1선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200412_6ab694d3e26269d2.jpg", born:"1962-10-22", career:["전직 대통령직속 국가균형발전위원회 국민소통특별위원", "전직 광주광역시의원 예산결산특별위원장"], edu:["동아인재대학교(전남) 복지관광학과 졸업"], favorable:false },
      { name:"안평환", district:"제1선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200409_363145365b5a062c.jpg", born:"1968-08-12", career:["현직 광주시의회 행정자치위원장", "전직 민주당광주광역시당 대변인"], edu:["전남대학교대학원(광주) 행정학과 석사수료 수료", "전남대학교(광주) 독어독문학과 졸업"], favorable:false },
      { name:"전미용", district:"제1선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200417_9dc9a9c7a6372aba.jpg", born:"1976-01-10", career:["전직 북구의회 행정자치위원장", "현직 민주당 광주시당 여성위 부위원장"], edu:["조선대학교(광주) 경영학부 졸업"], favorable:false },
      { name:"김건안", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200424_f82732bc70078772.jpg", born:"1965-10-20", career:["전직 8대 북구의회 전반기 의회운영위원회 위원장", "현직 광주광역시 북구의회 의원 / 대통령 직속자문기관 민주평화통일자문회의 자문위원"], edu:["전남대학교 정책대학원(광주) 정책 석사 졸업", "광신대학교(광주) 사회복지학과 졸업"], favorable:false },
      { name:"설정환", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200432_bb620660f36aebd3.jpg", born:"1970-11-10", career:["전직 광주북구 마을자치도시재생센터 대표이사", "전직 국회의원 보좌관"], edu:["전남대 일반대학원(광주) 문화학과 박사과정 수료", "전남대 정책대학원(광주) 사회문화복지정책전공 정책학 석사 졸업"], favorable:false },
      { name:"전우근", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200405_798487ed2977c262.jpg", born:"1965-03-18", career:["전직 5대 광주시의회 예결산위원장", "현직 민주당 북구갑 연수위원장"], edu:["조선대학교 교육대학원(광주) 상업교육학과 석사 졸업"], favorable:false },
      { name:"정영묵", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200444_36b3fe404cfcd522.jpg", born:"1976-09-20", career:["현직 더불어민주당 정책위부의장", "현직 광주소상공인연합 북구부회장"], edu:["서영대학교(광주) 토목과 졸업", "남서울대학교(충청) 건축공학과 졸업"], favorable:false },
      { name:"김동희", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200410_9c9a2bff2f2af461.jpg", born:"1961-05-15", career:["현직 북구갑 지역위원회 민원지원단장", "전직 북구갑 지역위원회 두암3동협의회장"], edu:["전남대학교 정책대학원(광주) 사회문화복지정책전공 석사 재학", "광신대학교(광주) 사회복지상담학과 졸업"], favorable:false },
      { name:"박수민", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200410_277af3fc71bcf4eb.jpg", born:"1985-01-06", career:["현직 이재명 대통령비서실 청년미래자문단 위원", "전직 광주 YMCA 추천이사"], edu:["고려대학교(서울) 사회학과 석사 수료", "조선대학교(광주) 문예창작학과 졸업"], favorable:false },
      { name:"이숙희", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200424_2f48ea6a940687e7.jpg", born:"1969-03-15", career:["현직 북구의원", "전직 더불어민주당 중앙당 보육특별위원회 부위원장"], edu:["호남대학교대학원(광주) 유아교육학과 박사 수료", "호남대학교대학원(광주) 유아교육학과 석사 졸업"], favorable:false },
      { name:"김형수", district:"제4선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200433_a9c1750abcc75bbc.jpg", born:"1966-02-13", career:["현직 제9대 북구의회 의원", "전직 제9대 북구의회 전반기 의장"], edu:["전남대학교 정책대학원(광주) 사회문화복지정책 석사과정 졸업", "광주대학교 일반대학원(광주) 경영학과 석사과정 수료"], favorable:false },
      { name:"이부일", district:"제4선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200417_65b0540c8f0d9a88.jpg", born:"1976-11-04", career:["전직 제7대 광주 북구의회 의원", "전직 제21대 민주당 국회의원 비서관"], edu:["전남대학교(광주) 컴퓨터공학과 졸업"], favorable:false },
      { name:"조석호", district:"제4선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200425_1f9332c38375bd06.jpg", born:"1960-11-24", career:["전직 제8대 광주광역시의회 부의장", "현직 제9대 광주광역시의회 예산결산특별위원장"], edu:[], favorable:false },
      { name:"임종국", district:"제5선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200445_98d8c59d7a18cadd.jpg", born:"1978-06-23", career:["현직 더불어민주당 광주광역시당 부대변인", "현직 제9대 북구의회 부의장(후반기)"], edu:["전남대학교(광주) 일반행정 석사 졸업", "조선대학교(광주) 신문방송학과 졸업"], favorable:false },
      { name:"주순일", district:"제5선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200435_d031869f6f972701.jpg", born:"1954-10-03", career:["전직 제8대 북구의회 부의장", "전직 더불어민주당 광주시당 상무위원"], edu:["남부대학교(광주) 사회복지학과 박사 수료", "광주여자대학교(광주) 사회복지학과 석사 졸업"], favorable:false },
      { name:"강성훈", district:"제6선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200425_a3d98328f8ff6f48.jpg", born:"1963-04-11", career:["현직 광주광역시 북구의원", "전직 21대 이재명 대통령 공동선거대책부본부장"], edu:["순천대학교(전남) 경영행정 석사 수료", "순천대학교(전남) 농학과 졸업"], favorable:false },
      { name:"김나윤", district:"제6선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200413_b3bf08c61c942928.jpg", born:"1971-12-15", career:["현직 광주광역시의회 의원", "현직 변호사"], edu:["전남대학교 법학전문대학원(광주) 법학과 석사 졸업", "홍익대학교(서울) 법학과 졸업"], favorable:false },
      { name:"채은지", district:"제6선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200424_107d1fd968a03dc4.jpg", born:"1986-07-11", career:["현직 광주광역시의회 부의장", "현직 노무법인 태율 대표 노무사"], edu:["전남대학교(광주) 법학과 졸업"], favorable:false },
      { name:"허석진", district:"제6선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200440_d917f1acfab547e7.jpg", born:"1964-01-05", career:["전직 한양대 정치외교학과 졸업", "현직 민주당 광주북구을 자치분권위원장"], edu:["한양대(서울) 지방자치 지방행정 석사 졸업", "한양대(서울) 정치외교 졸업"], favorable:false }
    ]},
    "seogu":    { name:"서구", seats:4, candidates:[
      { name:"강수훈", district:"제1선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200407_0bcd72459b12fb70.jpg", born:"1984-02-27", career:["전직 더불어민주당 광주시당 대변인", "현직 광주시의회 AI특별위원장"], edu:["전남대학교(광주) 법학과 석사 졸업", "전남대학교(광주) 법학과 졸업"], favorable:false },
      { name:"전승일", district:"제1선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200422_cf192567bca836fb.jpg", born:"1969-08-20", career:["현직 광주광역시 서구의회 의장", "현직 조선대학교 대외협력외래교수"], edu:["호남대학교사회융합대학원(광주) 문화예술학과 석사 졸업", "고구려대학교(전남) 아동노인복지과 졸업"], favorable:false },
      { name:"오미섭", district:"제2선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200443_16f6b0d5b6359f7e.jpg", born:"1969-04-29", career:["전직 더불어민주당서구갑여성위원장", "전직 대통령직속민주평통서구간사"], edu:["호남대학교(광주) 사회복지학과 박사 졸업", "호남대학교(광주) 사회복지학과 석사 졸업"], favorable:false },
      { name:"임진택", district:"제2선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200429_789d553b1bf38454.jpg", born:"1965-01-19", career:["현직 미소담은한의원 원장", "현직 서구갑 지역위원회 보건의료 특별위원장"], edu:["우석대학교(전북) 한의학 박사 졸업", "우석대학교(전북) 한의학 석사 졸업"], favorable:false },
      { name:"정평호", district:"제2선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200445_33f1c133e7ce1178.jpg", born:"1990-06-07", career:["현직 더불어민주당 중앙당 정책위원회 부의장", "현직 더불어민주당 광주광역시당 청년위원장"], edu:["서영대학교(광주) 소방행정과 졸업"], favorable:false },
      { name:"고경애", district:"제3선거구", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260306200444_6a5a86e2eec53efd.jpg", born:"1959-10-01", career:["전직 제9대 서구의회 전반기 의장", "현직 더불어민주당 중앙당 정책위원회 부의장"], edu:["송원대학교(광주) 아동보육과 졸업", "광주대학교(광주) 디지털경영학부 졸업"], favorable:true  },
      { name:"김길원", district:"제4선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200406_e73f405b15dda7a0.jpg", born:"1967-02-12", career:["현직 더불어민주당 국가균형성장특별위원회 정책자문위원", "전직 더불어민주당 국회의원 비서관"], edu:["조선(광주) 경제 박사 졸업", "광주(광주) 법학과 졸업"], favorable:false },
      { name:"서용규", district:"제4선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200418_83cdaf6ffd7ef8d3.jpg", born:"1957-04-16", career:["현직 광주광역시의회 9대 의원", "전직 동강대학교 외래교수"], edu:["전남대학교(광주) 중어중문학과 졸업"], favorable:false },
      { name:"신정호", district:"제4선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200439_bdb9ea4a666bcc2b.jpg", born:"1976-05-29", career:["전직 광주광역시청 시민참여정책보좌관", "전직 더불어민주당 중앙당 정책위원회 부의장"], edu:["전남대학교(광주) 정책대학원 행정학석사 졸업", "전남대학교(광주) 경제학과 졸업"], favorable:false },
      { name:"심철의", district:"제4선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200419_4daff46ef23f347a.jpg", born:"1973-10-29", career:["전직 고려대학교 정치외교학과 졸업", "현직 더불어민주당 광주시당 대변인"], edu:["고려대학교(서울) 정치외교학과 졸업"], favorable:false },
      { name:"안형주", district:"제4선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200426_679b9eba1d3f290e.jpg", born:"1986-02-23", career:["현직 광주광역시 서구의원 사회도시위원장", "전직 더불어민주당 정책위 부의장"], edu:["전남대학교 정책대학원(광주) 부동산 및 지역개발 정책 석사 졸업", "호남대학교(광주) 호텔경영학과 졸업"], favorable:false }
    ]}
  },

  // ── 전남 광역의원 ──
  jeonnam_council: {
    "gangjin":    { name:"강진", jndc:"간접", candidates:[
      { name:"김주웅", district:"강진군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145254_7c3bc7547fc29e46.jpg", born:"1983-05-17", career:["현직 전라남도의원", "전직 더불어민주당 전국 농어민위원회 부위원장"], edu:["목포대학교(전남) 무역학전공 졸업"], favorable:false },
      { name:"김창주", district:"강진군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145343_d5a81673fe49206b.jpg", born:"1972-09-16", career:["현직 강진군의회 경제위원장", "전직 강진군농민회 사무국장"], edu:[], favorable:false, slogan:"진심이 통하고 감동있는 따뜻한 정치" }
    ]},
    "goheung":    { name:"고흥", jndc:"간접", candidates:[
      { name:"권영길", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145247_04549b1495425deb.jpg", born:"1956-07-05", career:["전직 고흥군의회의원", "전직 더불어민주당 당대표 특별보좌역"], edu:["청암대학교(순천) 사회복지학과 졸업"], favorable:false },
      { name:"박진권", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145259_a1b1a03d02bab0d4.jpg", born:"1972-07-06", career:["전직 제11대 전남도의원", "현직 더불어민주당 4050특위 부위원장"], edu:["조선대학교(광주) 정치외교학과 졸업"], favorable:false },
      { name:"송형곤", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145312_85ae902fe4645cc8.jpg", born:"1964-05-21", career:["현직 전라남도의회 의원", "전직 더불어민주당 정책위 부의장"], edu:["순천대학교 경영행정대학원(순천) 행정학과 석사 졸업", "조선대학교(광주) 토목공학과 졸업"], favorable:false },
      { name:"박선준", district:"제2", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145405_80f2b061726153ab.jpg", born:"1978-06-28", career:["현직 12대 도의원", "전직 더불어민주당 고보장강 청년위원장"], edu:["전남대학교(광주) 일반행정 석사 졸업", "경희호텔경영전문대학(서울) 조리학과 졸업"], favorable:true  }
    ]},
    "gokseong":   { name:"곡성", jndc:"간접", candidates:[
      { name:"문영태", district:"곡성군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145423_676d0202cdf49c9b.jpg", born:"1963-06-21", career:["전직 전남도당 장애인위원회 위원장", "현직 곡성군 사회복지사협회 회장"], edu:["광주대학교(광주) 사회복지학과 석사 졸업", "광주대학교(광주) 사회복지학과 박사 졸업"], favorable:false },
      { name:"진호건", district:"곡성군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145423_47a56dfe0abd41b2.jpg", born:"1978-10-20", career:["현직 전라남도의회 의원", "전직 곡성군 민주평통 간사"], edu:["부산외국어대학교(부산) 러시아어과 중퇴"], favorable:false }
    ]},
    "gwangyang":  { name:"광양", jndc:"직접", candidates:[
      { name:"임형석", district:"제1", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145348_1901c2c4d2a12553.jpg", born:"1978-03-07", career:["현직 전라남도의회 의원", "전직 광양청년회의소 회장"], edu:["국립목포대학교(전라) 도시및지역개발학과 석사과정 재학", "한려대학교(전라) 경찰행정학과 졸업"], favorable:true  },
      { name:"강정일", district:"제2", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145358_0d7e1f2d912b1c47.jpg", born:"1963-10-03", career:["현직 전라남도의회 의원", "전직 광양시의회 의원"], edu:["조선대학교(광주) 기계공학과 졸업"], favorable:true  },
      { name:"서영배", district:"제3", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145329_8b98e4d8113daf2a.jpg", born:"1965-01-19", career:["현직 광양시의회 의원", "현직 옥곡장례식장 대표"], edu:[], favorable:true  },
      { name:"김길용", district:"제4", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145423_cd82bd7337859105.jpg", born:"1976-08-07", career:["전직 전남도의원", "전직 더불어민주당 권향엽 국회의원 선임비서관"], edu:["전남대학교(광주) 사회과학대학 인류학과 졸업"], favorable:false, slogan:"경험과 실력으로 전남광주 재도약 선봉" },
      { name:"김장권", district:"제4", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145324_825c0c83d74448a2.jpg", born:"1979-06-20", career:["현직 민주당 순천광양곡성구례을 지역위 홍보소통위원장", "현직 광양시청년새마을연대회장"], edu:["전주대학교 일반대학원(전라) 금융보험학 석사 졸업", "홍익대학교 일반대학원(세종) 금융보험학 박사 수료"], favorable:false },
      { name:"박경미", district:"제4", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145239_3e51b2611edf15a6.jpg", born:"1971-05-07", career:["현직 전남도의회 의원", "현직 더불어민주당 중앙당 전략기획위원회 부위원장"], edu:["전남 광양시 한려대학교 석사(전남) 사회복지학 석사 졸업", "전남 광양시 한려대 사회복지경영학 박사(전남) 사회복지경영학 박사 졸업"], favorable:false },
      { name:"신용균", district:"제4", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145357_b8fed55648131402.jpg", born:"1980-04-23", career:["현직 더불어민주당 순천광양곡성구례(을)청년위원장", "전직 광양시청년연합회 회장"], edu:["순천(전남) 체육교육 석사 졸업", "순천(전남) 사회체육 졸업"], favorable:false }
    ]},
    "gurye":      { name:"구례", jndc:"간접", candidates:[
      { name:"김송식", district:"구례군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145357_3449137b6277fa99.jpg", born:"1962-11-30", career:["전직 구례군의회 제8대 의장", "전직 초심회 11대회장"], edu:["전남도립대학교(전남) 관광레저과 졸업"], favorable:false },
      { name:"이승옥", district:"구례군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145330_56af46ef7dfbaf68.jpg", born:"1966-11-01", career:["전직 7대 구례군의회 부의장", "전직 더불어민주당 전남도당 여성위원장"], edu:["서울디지털대학교(서울) 사회복지학과 중퇴"], favorable:false, slogan:"새로운 변화 더 큰구례! 군민과 함께" }
    ]},
    "naju":       { name:"나주", jndc:"직접", candidates:[
      { name:"박동민", district:"제1", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260407143549_fc12f0e5419a3de0.png", born:"1976-01-15", career:["현직 더불어민주당 나주화순지역위원회 나주장애인위원장", "현직 더불어민주당 전남도당 장애인위원회 부위원장"], edu:["동신대학교(전남) 호텔항공관광경영학부 3학년 중퇴 중퇴"], favorable:false },
      { name:"이민준", district:"제1", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260308232913_aa9c0224785384a3.png", born:"1964-06-02", career:["전직 제 11대 전라남도의회 전반기 부의장", "전직 민주당 중앙당 정책위원회 부의장"], edu:["전남대학교(광주) 도시및지역개발정책 석사 졸업", "동신대학교(전라) 경영학과 졸업"], favorable:false },
      { name:"이웅범", district:"제1", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260305094426_9258c921abff170f.jpg", born:"1967-02-01", career:["전직 나주농업진흥재단 부이사장", "전직 신정훈 국회의원 비서관"], edu:["동신대학교(나주) 사회복지학과 석사 졸업", "전남대학교(광주) 무역학과 졸업"], favorable:false, slogan:"실천하는 약속, 새로운 나주" },
      { name:"이재창", district:"제1", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145235_98ae34b6435d3f7c.jpg", born:"1961-03-29", career:["전직 더불어민주당 국회의원 보좌관", "전직 나주대학교 부교수"], edu:["전남대학교(광주) 미생물학과 석사 졸업", "전남대학교(광주) 미생물학과 박사 졸업"], favorable:false },
      { name:"권환진", district:"제2", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145251_c11b8c1df8aa7bd9.jpg", born:"1977-04-25", career:["현직 대통령직속 지방시대위원회 자문위원", "현직 더불어민주당 전략기획위원회 부위원장"], edu:["동신대학교(전라) 경영학과 경영학석사 졸업", "동신대학교(전라) 경영학과 경영학박사 졸업"], favorable:true,  slogan:"지금은 권환진, 다시 뛰는 나주" },
      { name:"김명선", district:"제3", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145359_f7eff49deadc169b.jpg", born:"1978-01-18", career:["전직 더불어민주당 전남도당 정책실장", "전직 전남도당 지방정책기획 특별위원회 위원장"], edu:["동신대학교(전남) 신문방송학과 졸업"], favorable:false },
      { name:"양순봉", district:"제3", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260407103337_c5e55462d55590ea.png", born:"1963-12-20", career:["현직 전남도당여성위원장", "전직 나주시여성단체협의회 회장"], edu:["광주대학교(광주) 사회복지학 사회복지학 석사 졸업", "조선대학교(광주) 교육학과 교육학석사 졸업"], favorable:false }
    ]},
    "damyang":    { name:"담양", jndc:"간접", candidates:[
      { name:"김정주", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145300_17f89acb6d4785f2.jpg", born:"1968-01-26", career:["전직 담양자치신문 편집국장", "전직 담양군배드민턴협회 회장"], edu:["서울시립대학교(서울) 행정학과 졸업"], favorable:false },
      { name:"박준엽", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145426_a19234256426082e.jpg", born:"1985-10-17", career:["현직 담양군의회 의원", "현직 더불어민주당 담양지역위원회 청년위원장"], edu:["동신대학교일반대학원(전라) 경영학과 경영학석사 졸업", "동신대학교일반대학원(전라) 경영학과 경영학박사 졸업"], favorable:false },
      { name:"김명우", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145253_4fa50126c456599e.jpg", born:"1969-03-18", career:["현직 더불어민주당 담양함평영광장성 담양지역위원회 부위원장", "전직 더불어민주당 담양함평영광장성 담양지역위원회 대외협력실장"], edu:["전남도립대학교(전라) 한옥건축과 졸업"], favorable:false },
      { name:"박영식", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145331_35c95bb3de505854.jpg", born:"1967-01-07", career:["전직 담양군 주민자치연합회 간사(사무국장)", "현직 없음"], edu:["한국외국어대학교(서울) 세계지역연구학 석사 수료", "건국대학교(서울) 지리학 졸업"], favorable:false },
      { name:"유영재", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145252_f74d924225f46818.jpg", born:"1957-05-13", career:["현직 더불어민주당 담양함평영광장성 지역위원회 부위원장", "현직 담양군 파크골프협회 회장"], edu:["전남과학대학교(전라) 건축과(야) 졸업"], favorable:false }
    ]},
    "mokpo":      { name:"목포", jndc:"직접", candidates:[
      { name:"김승길", district:"제1", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145226_d22675a256f21659.jpg", born:"1970-07-24", career:["전직 김대중노벨평화상기념관 운영팀장", "전직 목포시 직소민원담당관"], edu:["목포대학교(무안) 행정학과 행정학(석사) 졸업", "광주대학교(광주) 행정학과 졸업"], favorable:true  },
      { name:"강성찬", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145356_280071c137b8a659.jpg", born:"1997-01-06", career:["현직 더불어민주당 전남도당 청년위원회 부위원장", "전직 동국대학교 경제학 학사"], edu:["동국대학교(서울) 경제학과 졸업"], favorable:false },
      { name:"박상준", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145256_903e0fcbcc4617f8.jpg", born:"1966-06-23", career:["현직 한반도폐차장대표", "현직 목포시지역위원회북항동협의회장"], edu:["대불대학교(전남) 사회복지학과 졸업"], favorable:false },
      { name:"장복성", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145333_0fa9040658aaec52.jpg", born:"1962-05-23", career:["현직 더불어민주당 전남도당 부위원장", "전직 목포시의회 의장"], edu:["초당대학교 산업대학원(전남) 사회복지상담학과 사회복지학(석사) 졸업", "목포과학대학교(전남) 경영학과 졸업"], favorable:false, slogan:"일 잘하는 경험살려 원도심 살립니다! / 6선 시의원" },
      { name:"박문옥", district:"제3", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260306092957_3e485390a149f80d.jpg", born:"1976-08-26", career:["현직 전라남도의회 의회운영위원장", "현직 더불어민주당 정책위부의장"], edu:["목포대학교(전남) 정치외교학과 석사 수료", "목포대학교(전남) 정치외교학과 졸업"], favorable:true  },
      { name:"전경선", district:"제5", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145401_09f852bba018f5a4.jpg", born:"1965-04-08", career:["전직 전남도의회 부의장", "현직 더불어민주당 정책위 부의장"], edu:["세한대학교(전라) 관광외국어학부 관광영어 졸업"], favorable:true,  slogan:"목포 대혁신 지금은 경제야!" }
    ]},
    "muan":       { name:"무안", jndc:"직접", candidates:[
      { name:"고성석", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260405125511_4a927e84f7a26f0e.jpg", born:"1981-08-17", career:["현직 더불어민주당 서삼석 국회의원 선임비서관", "현직 더불어민주당 전략기획위원회 부위원장"], edu:["초당대학교(전남) 사회복지상담학과 졸업"], favorable:false },
      { name:"정길수", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145302_07d9cfa059667c48.jpg", born:"1957-04-14", career:["현직 제12대 전라남도의원", "전직 제5대 무안군의희 후반기 의장"], edu:[], favorable:false },
      { name:"강병국", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145342_4e785d89fb7a4ed4.jpg", born:"1984-06-17", career:["전직 무안군의회의원", "현직 더불어민주당 당대표특보"], edu:["목포대학교(무안) 정치언론홍보학과 석사 졸업", "목포대학교(무안) 자치복지행정학 행정학 박사 졸업"], favorable:false },
      { name:"이정운", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145301_9e8d77e50b71f408.jpg", born:"1958-10-15", career:["전직 지방행정사무관", "전직 무안군의회 의장"], edu:["초당대학교산업대학원(전남) 사회복지상담학과 졸업"], favorable:false }
    ]},
    "boseong":    { name:"보성", jndc:"간접", candidates:[
      { name:"임용민", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145320_f86d53fb19127fc3.jpg", born:"1977-02-19", career:["전직 보성군 제 9대 전반기 의장", "의원", "전직 한국 4-H 중앙연합회 제 27대 회장"], edu:["전남전문대학교(전라) 화예원예과 졸업", "광주대학교(광주) 사회복지학과 졸업"], favorable:false },
      { name:"정재홍", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145319_9d77dafc76d18b70.jpg", born:"1983-12-23", career:["현직 더불어민주당 중앙당 부대변인", "현직 더불어민주당 고흥보성장흥강진 정책특별보좌관"], edu:["호남대학교(광주) 관광경영학과 재학"], favorable:false },
      { name:"강경윤", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145407_c887575545bf9b7f.jpg", born:"1966-10-12", career:["현직 사)한국후계농업경영인보성군연합회회장", "전직 더불어민주당전남도당부대변인"], edu:["전남과학대학(전남) 화훼원예과 졸업"], favorable:false },
      { name:"이현우", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145336_dd5edefca0d1ac91.jpg", born:"1964-01-23", career:["전직", "전직 LG생활건강 보부상사 보성군대리점 대표"], edu:["청암대학교(전라) e-비지니스과 졸업"], favorable:false }
    ]},
    "suncheon":   { name:"순천", jndc:"간접", candidates:[
      { name:"오행숙", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145305_e4247f8354d7ed6c.jpg", born:"1960-11-05", career:["전직 제6대 예산결산검사 대표위원", "현직 제9대 순천시의회 후반기 부의장"], edu:[], favorable:false },
      { name:"정영균", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145257_477407ae539eab75.jpg", born:"1971-02-16", career:["현직 전라남도의회 도의원(제12대)", "현직 동산초등학교 제27", "28기운영위원장"], edu:["국립순천대학교(전라) 행정학과 중퇴"], favorable:false },
      { name:"정철균", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145410_2ef3bfc05baa8c19.jpg", born:"1956-12-08", career:["전직 순천시의원", "현직 순천매산학교총동창회부회장"], edu:["제일대(순천) 경영세무과 졸업"], favorable:false },
      { name:"강형구", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145347_3cf1d73ffbd230d3.jpg", born:"1962-11-13", career:["현직 순천시의회 의장", "전직 전라남도 의과대학 유치 지원 특위 위원장"], edu:["순천대학교 대학원(전남) 토목공학과 석사 졸업", "순천제일대학교(전남) 토목학과 졸업"], favorable:false },
      { name:"김행순", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145248_8ff134333eebc2f0.jpg", born:"1968-02-10", career:["현직 더불어민주당 전남도당 사회적경제위원회 부위원장", "현직 한국걸스카우트 전남광주연맹 순천지구연합회 회장"], edu:["한려대학교(전라) 사회복지학과 졸업"], favorable:false },
      { name:"임형률", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260305150535_5ef99171a4f239e5.jpg", born:"1993-12-25", career:["전직 더불어민주당 전남도당 대학생위원장", "전직 더불어민주당 정책위원회 부의장"], edu:["순천대학교(전남) 농업경제학과 졸업", "한국방송통신대학교(서울) 국어국문학과 졸업"], favorable:false, slogan:"청년의 시선으로, 새로운 전남" },
      { name:"김정희", district:"제3", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145338_be4bacf0e0e391b8.jpg", born:"1968-12-11", career:["현직 전라남도의회 교육위원장", "현직 순천대학교 특임교수"], edu:["국립순천대학교(전남) 신소재공학 박사 수료", "국립순천대학교(전남) 기계공학과 졸업"], favorable:false },
      { name:"염동섭", district:"제3", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145336_995cf2bdc4afc0bd.jpg", born:"1966-04-23", career:["전직 민주당전남도당 기업유치특별위원장", "현직 파크랜드순천 대표"], edu:["순천제일대학교(전남) 의료재활과 졸업"], favorable:false },
      { name:"김미연", district:"제4", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145349_b0aa138821ff94c3.jpg", born:"1965-10-20", career:["현직 순천시의회 문화경제위원장", "현직 순천연향중학교 학교운영위원장"], edu:["제일대(전라) 사회복지과 졸업"], favorable:false },
      { name:"이영민", district:"제4", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145425_04ec0f4e03a1e66d.jpg", born:"1978-11-02", career:["전직 전라남도의회 의장 보좌관", "전직 전라남도교육청 교육감 비서"], edu:["동서울 대학(경기) 전자과 졸업"], favorable:false },
      { name:"김진남", district:"제5", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260403121131_b46f12fbe2d83287.jpg", born:"1981-03-08", career:["현직 전남도의원", "현직 전남도의회 예산결산특별위원회 부위원장"], edu:["여수대학교(전남) 경영학과 졸업"], favorable:false, slogan:"왕조1동의 검증된 진짜 일꾼" },
      { name:"장경순", district:"제5", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260406205501_a81e1226df772281.jpg", born:"1967-03-11", career:["현직 순천시의회 행정자치위원장", "현직 민주당 당대표 정무특보"], edu:["순천대학교(전라) 사회서비스상담학과 졸업"], favorable:false, slogan:"예산 해결사! 장경순은 합니다" },
      { name:"신민호", district:"제6", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145319_581123b9cedcf96b.jpg", born:"1967-06-17", career:["현직 전라남도의원", "현직 국립순천대학교 특임교수"], edu:["순천대학교(전라) 경영행정대학원 석사 졸업", "순천대학교(전라) 생명자원학과 박사 졸업"], favorable:true  },
      { name:"정희선", district:"제7", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145417_e3a77f6b2c83d30b.jpg", born:"1982-02-05", career:["현직 순천시 해룡면 청년위원장", "현직 전남도당 청년위원회 부위원장"], edu:["광주조선대학교(광주) 식품영양학과 졸업"], favorable:true  },
      { name:"김영진", district:"제8", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145351_5d196bd47664968e.jpg", born:"1972-08-21", career:["현직 순천시의회 운영위원장", "전직 해룡면 주민 자치위원회 위원장"], edu:["순천공업전문대학(전라) 환경공업과 졸업"], favorable:false },
      { name:"김정이", district:"제8", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145347_c7d565d34ed5af13.jpg", born:"1962-10-10", career:["현직 전라남도의회 의원", "현직 전라남도의회 의원"], edu:["순천공업전문대학(순천) 건축과 졸업"], favorable:false }
    ]},
    "sinan":      { name:"신안", jndc:"직접", candidates:[
      { name:"김문수", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145317_854cecbac9a3d60d.jpg", born:"1958-04-03", career:["현직 전라남도의회 농수산위원장", "전직 신안군의회 4대", "5대 의원"], edu:["목포과학대학교(전라) 사회복지과 졸업"], favorable:false },
      { name:"최경순", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145312_dfe61454c94c95c4.jpg", born:"1963-07-29", career:["전직 국립목포대학교 공학박사", "전직 신안군 도시계획위원회 위원"], edu:["한양대학교 환경대학원(서울) 도시계획학과 석사 졸업", "목포대학교 환경토목공학대학원(전남) 토목공학과 박사 졸업"], favorable:false }
    ]},
    "yeosu":      { name:"여수", jndc:"직접", candidates:[
      { name:"민병대", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145406_0e12d55a976ffff1.jpg", born:"1963-05-29", career:["전직 여수MBC 아나운서", "전직 11대 전라남도 의원"], edu:["경희대 언론정보(서울) 전략커뮤니케이션 석사 졸업", "조선대학교(광주) 경제학과 졸업"], favorable:false },
      { name:"서대현", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145408_e773f2bec0a69661.jpg", born:"1961-09-21", career:["현직 전라남도의회 12대 후반기 교육위원회 의원", "전직 전라남도의회 12대 전반기 보건복지환경위원회 부위원장"], edu:["전남대학교(여수) 일반행정전공 행정학석사 졸업", "전남대학교(광주) 도서관학과 졸업"], favorable:false },
      { name:"강문성", district:"제3", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145310_3b5cd66995439830.jpg", born:"1965-09-24", career:["현직 제12대 후반기 전라남도의회 기획행정위원장", "전직 제11대 후반기 전라남도의회 경제관광문화부위원장"], edu:["경희대학교 행정대학원(서울) 행정학과 행정학 석사 졸업", "전주대학교(전북) 행정학과 졸업"], favorable:true  },
      { name:"김화신", district:"제4", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145238_d067606f172c10a2.jpg", born:"1965-03-10", career:["현직 전남도의원", "전직 더불어민주당 전남도당 여성위원장"], edu:["순천 청암대학교(전남) 세무회계과 졸업"], favorable:false },
      { name:"주연창", district:"제4", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145421_72688bdec952fe78.jpg", born:"1967-09-08", career:["전직 제10대 전라남도의회의원", "전직 제5대 여수시의회의원"], edu:["전남(광주) 지역개발학과 졸업", "여수(전남 여수시) 졸업"], favorable:false },
      { name:"문갑태", district:"제5", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145411_4061dd8a75ad6693.jpg", born:"1971-04-11", career:["현직 여수시의회 부의장", "전직 여수시민사회단체연대회의 사무국장"], edu:["한양대(서울) 국제관광대학원 석사 졸업", "전남대(광주) 일반대학원 박사수료 수료"], favorable:false, slogan:"유쾌한 변화, 행복한 전남" },
      { name:"최남선", district:"제5", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145314_957bc7ee99a3e617.jpg", born:"1971-02-03", career:["전직 더불어민주당여수을사무국장", "현직 여수시지방보조금관리위원"], edu:["전남대학교(전남) 해양수산산업관광레저융합학과 재학", "순천공업전문대학교(순천) 산업안전관리과 졸업"], favorable:false },
      { name:"강정희", district:"제6", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260403171508_0ba261b1af6c5c64.png", born:"1963-04-13", career:["전직 전라남도의회 제10대", "제11대 의원", "현직 더불어민주당 당대표 특보"], edu:["고려대학교 인문정보대학원(세종) 사회복지학과 석사과정 졸업", "조선대학교(광주) 법학과 졸업"], favorable:false, slogan:"검증된 경험과 실력! 강한 3선의 힘" },
      { name:"이석주", district:"제6", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260401174804_ff21f14c974d7026.jpg", born:"1985-02-25", career:["현직 여수시의회의원", "전직 더불어민주당여수시을지역위원회청년위원장"], edu:["전남대학교산학협력대학원(전남) 융합창업학과 석사 졸업", "여수한영대학교(전남) 경영회계학과 졸업"], favorable:false, slogan:"처음을 만드는 선택!" }
    ]},
    "yeonggwang": { name:"영광", jndc:"직접", candidates:[
      { name:"박원종", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260329204541_88a8e86975edfcbc.jpg", born:"1986-04-18", career:["현직 전라남도의회 의원", "현직 더불어민주당 전략기획위원회 부위원장"], edu:["단국대학교(충청) 식량자원학과 졸업"], favorable:false, slogan:"검증된 사람, 끝까지 책임질 사람" },
      { name:"장영진", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260404165744_77073828400a9e21.jpg", born:"1969-07-08", career:["현직 영광군의회 재선의원 장영진", "현직 원전특위위원장 장영진"], edu:["호남대학교(광주) 행정학과 졸업"], favorable:false, slogan:"영광의 몫을 확실히 가져올 장영진" },
      { name:"김강헌", district:"제2", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145354_f2f054797964cf22.jpg", born:"1956-05-05", career:["현직 제9대 영광군의회 후반기 의장", "현직 더불어민주당 당대표 특별보좌역 지방자치특보"], edu:["조선대학교 병설공업고등전문학교 통신과(광주 동구) 중퇴"], favorable:true  }
    ]},
    "yeongam":    { name:"영암", jndc:"직접", candidates:[
      { name:"노영미", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145259_9929660e5b9e2a1f.jpg", born:"1960-05-07", career:["전직 영암군의회 하반기 부의장", "전직 나란타어린이집 원장"], edu:["세한대학교(영암) 유아교육학과2년 중퇴"], favorable:false },
      { name:"신승철", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145309_f926f0286d1fccc9.jpg", born:"1960-06-27", career:["현직 전남도의원", "전직 영암군후계농업경영인연합회장"], edu:["전남도립(전남) 건설산업과 졸업", "영암(전남) 졸업"], favorable:false },
      { name:"이행도", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145241_62bbf51ad9502208.jpg", born:"1982-05-28", career:["현직 더불어민주당 전남도당 청년위원회 위원장", "전직 한국4-H중앙연합회 33-34대 회장"], edu:["한국농수산대학교(전라) 대가축학과 졸업"], favorable:false },
      { name:"손남일", district:"제2", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145316_070ebc1633d85e79.jpg", born:"1968-08-26", career:["현직 도의원(제12대 전라남도의회의원)", "전직 더불어민주당 전남도당 다문화위원장"], edu:["동강대학교(광주) 토목과 졸업"], favorable:true  }
    ]},
    "wando":      { name:"완도", jndc:"간접", candidates:[
      { name:"김재현", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145227_98ac1921d4791327.jpg", born:"1956-01-03", career:["현직 조선대학교대외협력외래교수", "현직 광주전남김대중재단완도군지회장"], edu:["조선대학교(광주) 행정학과 석사 졸업", "한국방송통신대학(종로) 농학과 졸업"], favorable:false },
      { name:"박재선", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145258_f72e9f1335870d26.jpg", born:"1973-12-17", career:["전직 완도군의회 부의장", "현직 완도군의회 행정자치위원장"], edu:["동아보건대학교(전라) 사회복지학과 졸업"], favorable:false },
      { name:"조인호", district:"제2", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145311_2148bec512b428b5.jpg", born:"1964-09-29", career:["현직 현 완도군의회 의원", "전직 전 완도군의회 의장"], edu:["광주대학교(광주) 세무경영학과 세무경영(석사) 수료", "광주대학교(광주) 세무경영학과 졸업"], favorable:true  }
    ]},
    "jangseong":  { name:"장성", jndc:"간접", candidates:[
      { name:"김수권", district:"제1", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145229_a9ab70d0e94d4e6e.jpg", born:"1970-03-08", career:["전직 장성군새마을회 회장", "전직 전남도당 자치분권위원회 부위원장"], edu:["동신대학교(전라) 전기공학과 4학년 재학"], favorable:true  },
      { name:"김회식", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145311_b9176c93f0dc6923.jpg", born:"1962-04-01", career:["현직 제12대 전라남도의원", "전직 제6·7·8대 장성군의원"], edu:["초당대학교(전라) 사회복지과 졸업"], favorable:false },
      { name:"정기성", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145326_619d4ca5fb113903.jpg", born:"1977-12-20", career:["현직 일신농자재산업 대표", "전직 국립목포대학교 총학생회장"], edu:["목포(전남) 토목공학과 졸업", "고창(고창 고창읍) 졸업"], favorable:false, slogan:"실천으로, 결과로 보여드리겠습니다" }
    ]},
    "jangheung":  { name:"장흥", jndc:"간접", candidates:[
      { name:"김재승", district:"제1", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145322_5370711dd093b98e.jpg", born:"1973-10-06", career:["현직 현)장흥군의회 의장", "전직 대통령소속 자치분권위원회 위원"], edu:["동신대학교(전라) 관광경영학과 졸업"], favorable:true  },
      { name:"윤명희", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145249_9dfabd3703e92f5a.jpg", born:"1960-08-23", career:["현직 전라남도의회 재선 도의원", "전직 전라남도의회 도의원"], edu:["호남대학교 대학원(광주) 경영학과 박사 졸업", "서강정보대학교(광주) 건축공학 졸업"], favorable:false },
      { name:"이충식", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145323_8ea35bd97e2ecadb.jpg", born:"1965-04-05", career:["전직 전라남도의회 의원", "전직 전남도지사 비서관"], edu:["조선대학교(광주) 행정학과 석사 수료", "광주대학교(광주) 행정학과 졸업"], favorable:false },
      { name:"주인천", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145235_a256b04f7e3d7a2a.jpg", born:"1962-08-01", career:["전직 한국농어촌공사", "전직 한국농어촌공사"], edu:["나주고구려대학(전남) 평생교육학과 졸업"], favorable:false }
    ]},
    "jindo":      { name:"진도", jndc:"간접", candidates:[
      { name:"이현명", district:"진도군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145356_5a001712a9d573d0.jpg", born:"1976-10-20", career:["현직 진도군의회 의원", "전직 진도군사회복지협의회 대표이사(회장)"], edu:["조선대학교(광주) 경제학과 졸업"], favorable:false },
      { name:"장영우", district:"진도군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145333_7e5d9ce84664a0d9.jpg", born:"1960-04-27", career:["전직 진도군의회 의장", "현직 진도군의회 의회운영위원장"], edu:["인천대학교(인천) 체육과 졸업"], favorable:false }
    ]},
    "hampyeong":  { name:"함평", jndc:"직접", candidates:[
      { name:"모정환", district:"함평군", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145231_50d06bf066bdb3e2.jpg", born:"1971-02-22", career:["현직 전라남도의회의원", "현직 더불어민주당 담양함평영광장성지역위원회 함평부위원장"], edu:["광주대학교(광주) 인문사회대학 경찰법행정학부 졸업"], favorable:true  }
    ]},
    "haenam":     { name:"해남", jndc:"간접", candidates:[
      { name:"김성일", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145303_b23995cc5ef3c6be.jpg", born:"1966-01-14", career:["현직 전남도의원", "현직 더불어민주당 전남도당 농어민위원장"], edu:["순천대학교(전라) 농업경제학과 졸업"], favorable:false },
      { name:"유행관", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145413_a15614f1b63e78ed.jpg", born:"1971-05-08", career:["전직 성화대학교수", "현직 동서대학교 디자인학 박사"], edu:["경희대학교 아트퓨전디자인대학원(경기) 디자인학과 석사 졸업", "동서대학교 디자인전문대학원(부산) 디자인학과 박사 졸업"], favorable:false },
      { name:"조영천", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145357_c99ce40f94e64bd1.jpg", born:"1961-11-11", career:["전직 해남교육지원청 교육장", "전직 해남공업고등학교 교장"], edu:["전남대학교 대학원(광주) 체육학과 석사 졸업", "전남대학교 사범대학(광주) 체육교육학과 졸업"], favorable:false },
      { name:"김병덕", district:"제2", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145258_999aa38743125c4a.jpg", born:"1969-01-14", career:["전직 해남군의회 의장", "전직 더불어민주당 해남완도진도 지역위원회 사무국장"], edu:["호남대학교(광주) 경제학과 졸업"], favorable:false },
      { name:"박성재", district:"제2", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145338_b0de59541e5bd3a8.jpg", born:"1960-09-18", career:["현직 전라남도의회 의원", "전직 땅끝농협 이사", "감사"], edu:["서강정보대학(서영대학교)(광주) 토목과 졸업"], favorable:false },
      { name:"이상미", district:"제2", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145320_ec6fc3c704d62c38.jpg", born:"1982-10-06", career:["현직 해남군의회 의원", "현직 해남군의회 예산결산특별위원장"], edu:["순천청암대학(전라) 컴퓨터정보과학부 졸업"], favorable:false, slogan:"해남에서 검증! 전남에서 완성!" },
      { name:"조광영", district:"제2", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145234_f3af8dd5118e3f8a.jpg", born:"1961-06-03", career:["전직 전라남도의회 11대 의원", "전직 해남군의회 5", "6"], edu:["세한대학교(전남) 관광경영학부 호텔경영학 졸업"], favorable:false }
    ]},
    "hwasun":     { name:"화순", jndc:"간접", candidates:[
      { name:"임탁진", district:"제1", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145401_a153dccad8c57887.jpg", born:"1968-06-29", career:["전직 국회의원 비서관", "전직 나주", "화순 지역위원회 연락소장"], edu:["광주대학교 사회복지전문대학원(광주) 사회복지학과 석사 졸업", "전남대학교(광주) 경영학과 졸업"], favorable:true  },
      { name:"류기준", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145248_ccf3c1a6ac2356d1.jpg", born:"1968-11-09", career:["현직 전라남도의원", "전직 화순군청 직소민원실장"], edu:["전남대학교(광주) 사회문화복지정책 석사 졸업", "국가평생교육진흥원(서울) 사회복지학 졸업"], favorable:false },
      { name:"문안식", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145420_9834dc88cb2f1bd0.jpg", born:"1967-11-16", career:["전직 화순군 정책보좌관", "현직 더불어민주당 화순지역위원회 부위원장"], edu:["동국대(서울) 사학과 석사 졸업", "동국대(서울) 사학과 박사 졸업"], favorable:false }
    ]}
  }
};
