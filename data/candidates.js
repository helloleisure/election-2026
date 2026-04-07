const CANDIDATES = {
  // ── 전남광주특별시장 ──
  mayor: [
    {
      id: "kim-young-rok", name: "김영록", party: "더불어민주당",
      color: "#22c55e", colorBg: "rgba(34,197,94,0.1)",
      position: "前 전라남도지사 (민선7·8기)",
      age: 66, born: "1960년",
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
      age: 58, born: "1968년",
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
      { name:"임택",  position:"현직 동구청장",  status:"현직", competition:"단독",   favorable:true,  color:"#22c55e", slogan:"준비중" }
    ]},
    "seogu":    { name: "서구청장", candidates: [
      { name:"김이강", position:"현직 서구청장",  status:"현직", competition:"단독",   favorable:true,  color:"#22c55e", slogan:"#골목경제" }
    ]},
    "namgu":    { name: "남구청장", candidates: [
      { name:"김병내", position:"현직 남구청장",  status:"현직", competition:"단독",   favorable:true,  color:"#22c55e", slogan:"준비중" }
    ]},
    "bukgu":    { name: "북구청장", candidates: [
      { name:"신수정", position:"도전자",          status:"도전자", competition:"2인 경합", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"정다은", position:"도전자",          status:"도전자", competition:"2인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "gwangsan": { name: "광산구청장", candidates: [
      { name:"박병규", position:"현직 광산구청장", status:"현직", competition:"단독",   favorable:true,  color:"#22c55e", slogan:"준비중" }
    ]}
  },

  // ── 전남 기초단체장 ──
  jeonnam_mayors: {
    "gangjin":    { name:"강진군수",  jndc:"간접", candidates:[
      { name:"김보미", status:"도전자", competition:"2인 경합", favorable:false, color:"#60a5fa", slogan:"돈을 버는 강진군! / 연180만원 강진기본소득" },
      { name:"차영수", status:"도전자", competition:"2인 경합", favorable:false, color:"#a78bfa", slogan:"머물고 일하고 돌아오는 강진 / 강진 예산 1조 시대" }
    ]},
    "goheung":    { name:"고흥군수",  jndc:"간접", candidates:[
      { name:"공영민", status:"현직",   competition:"5인 혼전", favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"류제동", status:"도전자", competition:"5인 혼전", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"박준희", status:"도전자", competition:"5인 혼전", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"신순식", status:"도전자", competition:"5인 혼전", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"안정민", status:"도전자", competition:"5인 혼전", favorable:false, color:"#fb923c", slogan:"준비중" }
    ]},
    "gokseong":   { name:"곡성군수",  jndc:"간접", candidates:[
      { name:"강대광", status:"현직",   competition:"3인 경합", favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"강덕구", status:"도전자", competition:"3인 경합", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"조상래", status:"도전자", competition:"3인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "gwangyang":  { name:"광양시장",  jndc:"직접", candidates:[
      { name:"김태균", status:"도전자", competition:"2인 경합", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"정인화", status:"도전자", competition:"2인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "gurye":      { name:"구례군수",  jndc:"간접", candidates:[
      { name:"김순호", status:"도전자", competition:"4인 경합", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"신동수", status:"도전자", competition:"4인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"장길선", status:"도전자", competition:"4인 경합", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"홍봉만", status:"도전자", competition:"4인 경합", favorable:false, color:"#fb923c", slogan:"준비중" }
    ]},
    "naju":       { name:"나주시장",  jndc:"직접", candidates:[
      { name:"윤병태", status:"도전자", competition:"2인 경합", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"이재태", status:"도전자", competition:"2인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "damyang":    { name:"담양군수",  jndc:"간접", candidates:[
      { name:"박종원", status:"도전자", competition:"3인 경합", favorable:false, color:"#60a5fa", slogan:"담양 주도 성장 / AI스마트농업·반도체밸리·정원도시 8대혁신" },
      { name:"이규현", status:"도전자", competition:"3인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"이재종", status:"도전자", competition:"3인 경합", favorable:false, color:"#f472b6", slogan:"준비중" }
    ]},
    "mokpo":      { name:"목포시장",  jndc:"직접", candidates:[
      { name:"강성휘", status:"도전자", competition:"2인 경합", favorable:false, color:"#60a5fa", slogan:"제대로 목포시 대전환 / 시민주권·해상풍력 배후도시" },
      { name:"이호균", status:"도전자", competition:"2인 경합", favorable:false, color:"#a78bfa", slogan:"이재명처럼 이호균 / 목포크게쓰자" }
    ]},
    "muan":       { name:"무안군수",  jndc:"직접", candidates:[
      { name:"김산",   status:"도전자", competition:"6인 혼전", favorable:false, color:"#60a5fa", slogan:"오직 군민! / 광주 군공항 이전, RE100 국가산단" },
      { name:"나광국", status:"도전자", competition:"6인 혼전", favorable:false, color:"#a78bfa", slogan:"무안의 기회, 나광국 / 무안형 기본소득·국제공항 재도약" },
      { name:"류춘오", status:"도전자", competition:"6인 혼전", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"이혜자", status:"도전자", competition:"6인 혼전", favorable:false, color:"#fb923c", slogan:"준비중" },
      { name:"정승욱", status:"도전자", competition:"6인 혼전", favorable:false, color:"#38bdf8", slogan:"준비중" },
      { name:"최옥수", status:"도전자", competition:"6인 혼전", favorable:false, color:"#34d399", slogan:"준비중" }
    ]},
    "boseong":    { name:"보성군수",  jndc:"간접", candidates:[
      { name:"김철우", status:"현직",   competition:"3인 경합", favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"선형수", status:"도전자", competition:"3인 경합", favorable:false, color:"#60a5fa", slogan:"막힘없는행정·아낌없는교육·걱정없는노후" },
      { name:"임영수", status:"도전자", competition:"3인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "suncheon":   { name:"순천시장",  jndc:"간접", candidates:[
      { name:"서동욱", status:"도전자", competition:"4인 경합", favorable:false, color:"#60a5fa", slogan:"순천이 키운 인물 / 24년 정치 경험" },
      { name:"손훈모", status:"도전자", competition:"4인 경합", favorable:false, color:"#a78bfa", slogan:"미래로 도약하는 경제특례도시 / 인권변호사" },
      { name:"오하근", status:"도전자", competition:"4인 경합", favorable:false, color:"#f472b6", slogan:"더 큰 순천 / 이재명 정부의 순천시장" },
      { name:"허석",   status:"도전자", competition:"4인 경합", favorable:false, color:"#fb923c", slogan:"미친예산! 순천도약! 첨단산업 강화!" }
    ]},
    "sinan":      { name:"신안군수",  jndc:"직접", candidates:[
      { name:"김경화", status:"도전자", competition:"5인 혼전", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"김행원", status:"도전자", competition:"5인 혼전", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"박석배", status:"도전자", competition:"5인 혼전", favorable:false, color:"#f472b6", slogan:"군민주권신안" },
      { name:"박우량", status:"현직",   competition:"5인 혼전", favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"천경배", status:"도전자", competition:"5인 혼전", favorable:false, color:"#fb923c", slogan:"준비중" }
    ]},
    "yeosu":      { name:"여수시장",  jndc:"직접", candidates:[
      { name:"김순빈", status:"도전자", competition:"7인 혼전", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"김영규", status:"도전자", competition:"7인 혼전", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"백인숙", status:"도전자", competition:"7인 혼전", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"서영학", status:"도전자", competition:"7인 혼전", favorable:false, color:"#fb923c", slogan:"준비중" },
      { name:"이광일", status:"도전자", competition:"7인 혼전", favorable:false, color:"#38bdf8", slogan:"준비중" },
      { name:"정기명", status:"현직",   competition:"7인 혼전", favorable:false, color:"#22c55e", slogan:"지역경제(산단대전환)·관광활성화(소상공인)" },
      { name:"주종섭", status:"도전자", competition:"7인 혼전", favorable:false, color:"#34d399", slogan:"준비중" }
    ]},
    "yeonggwang": { name:"영광군수",  jndc:"직접", candidates:[
      { name:"김혜영", status:"도전자", competition:"4인 경합", favorable:false, color:"#60a5fa", slogan:"군민을 다시 주인으로 / K-에너지수도·기본소득·기본생활" },
      { name:"양재휘", status:"도전자", competition:"4인 경합", favorable:false, color:"#a78bfa", slogan:"이제, 영광의 시대로" },
      { name:"장기소", status:"도전자", competition:"4인 경합", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"장세일", status:"현직",   competition:"4인 경합", favorable:false, color:"#22c55e", slogan:"잘 해온 군수! 더 잘할 군수! / 군민 평생연금·에너지 기본소득" }
    ]},
    "yeongam":    { name:"영암군수",  jndc:"직접", candidates:[
      { name:"우승희", status:"현직",   competition:"2인 경합", favorable:true,  color:"#22c55e", slogan:"영암을 위해 한번 더 / 대통령 혁신 파트너·에너지 기본소득" },
      { name:"전동평", status:"도전자", competition:"2인 경합", favorable:false, color:"#60a5fa", slogan:"함께 꾸는 꿈 현실로 / 준비된 리더" }
    ]},
    "wando":      { name:"완도군수",  jndc:"간접", candidates:[
      { name:"신의준", status:"도전자", competition:"5인 혼전", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"우홍섭", status:"도전자", competition:"5인 혼전", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"이철",   status:"도전자", competition:"5인 혼전", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"지영배", status:"도전자", competition:"5인 혼전", favorable:false, color:"#fb923c", slogan:"준비중" },
      { name:"허궁희", status:"도전자", competition:"5인 혼전", favorable:false, color:"#38bdf8", slogan:"준비중" }
    ]},
    "jangseong":  { name:"장성군수",  jndc:"간접", candidates:[
      { name:"김한종", status:"도전자", competition:"4인 경합", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"박노원", status:"도전자", competition:"4인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"소영호", status:"도전자", competition:"4인 경합", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"유성수", status:"도전자", competition:"4인 경합", favorable:false, color:"#fb923c", slogan:"준비중" }
    ]},
    "jangheung":  { name:"장흥군수",  jndc:"간접", candidates:[
      { name:"곽태수", status:"도전자", competition:"3인 경합", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"김성",   status:"도전자", competition:"3인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"왕윤채", status:"도전자", competition:"3인 경합", favorable:false, color:"#f472b6", slogan:"준비중" }
    ]},
    "jindo":      { name:"진도군수",  jndc:"간접", candidates:[
      { name:"김인정", status:"도전자", competition:"2인 경합", favorable:false, color:"#60a5fa", slogan:"떠나지 않는 진도 / 인구소멸 위기 극복" },
      { name:"이재각", status:"도전자", competition:"2인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "hampyeong":  { name:"함평군수",  jndc:"직접", candidates:[
      { name:"이남오", status:"도전자", competition:"2인 경합", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"이상익", status:"도전자", competition:"2인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "haenam":     { name:"해남군수",  jndc:"간접", candidates:[
      { name:"명현관", status:"현직",   competition:"3인 경합", favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"김성주", status:"도전자", competition:"3인 경합", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"이길운", status:"도전자", competition:"3인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "hwasun":     { name:"화순군수",  jndc:"간접", candidates:[
      { name:"문행주", status:"도전자", competition:"3인 경합", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"윤영민", status:"도전자", competition:"3인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"임지락", status:"도전자", competition:"3인 경합", favorable:false, color:"#f472b6", slogan:"준비중" }
    ]}
  },

  // ── 광주 광역의원 ──
  gwangju_council: {
    "gwangsan": { name:"광산구", seats:5, candidates:[
      { name:"윤혜영", district:"제1선거구", competition:"5인 혼전", favorable:false },
      { name:"임이엽", district:"제1선거구", competition:"5인 혼전", favorable:false },
      { name:"정재봉", district:"제1선거구", competition:"5인 혼전", favorable:false },
      { name:"최지현", district:"제1선거구", competition:"5인 혼전", favorable:false },
      { name:"한귀례", district:"제1선거구", competition:"5인 혼전", favorable:false },
      { name:"김명수", district:"제2선거구", competition:"5인 혼전", favorable:false },
      { name:"김창삼", district:"제2선거구", competition:"5인 혼전", favorable:false },
      { name:"박경신", district:"제2선거구", competition:"5인 혼전", favorable:false },
      { name:"박종원", district:"제2선거구", competition:"5인 혼전", favorable:false },
      { name:"이영순", district:"제2선거구", competition:"5인 혼전", favorable:false },
      { name:"박필순", district:"제3선거구", competition:"3인 경합", favorable:false },
      { name:"이영훈", district:"제3선거구", competition:"3인 경합", favorable:false },
      { name:"조승유", district:"제3선거구", competition:"3인 경합", favorable:false },
      { name:"김동호", district:"제4선거구", competition:"2인 경합", favorable:false },
      { name:"이귀순", district:"제4선거구", competition:"2인 경합", favorable:false },
      { name:"김광란", district:"제5선거구", competition:"단독",     favorable:true  }
    ]},
    "namgu":    { name:"남구", seats:3, candidates:[
      { name:"강원호", district:"제1선거구", competition:"5인 혼전", favorable:false },
      { name:"남호현", district:"제1선거구", competition:"5인 혼전", favorable:false },
      { name:"박상원", district:"제1선거구", competition:"5인 혼전", favorable:false },
      { name:"박철호", district:"제1선거구", competition:"5인 혼전", favorable:false },
      { name:"서임석", district:"제1선거구", competition:"5인 혼전", favorable:false },
      { name:"노소영", district:"제2선거구", competition:"4인 경합", favorable:false },
      { name:"배진하", district:"제2선거구", competition:"4인 경합", favorable:false },
      { name:"임미란", district:"제2선거구", competition:"4인 경합", favorable:false },
      { name:"하주아", district:"제2선거구", competition:"4인 경합", favorable:false },
      { name:"김점기", district:"제3선거구", competition:"3인 경합", favorable:false },
      { name:"박상길", district:"제3선거구", competition:"3인 경합", favorable:false },
      { name:"박희율", district:"제3선거구", competition:"3인 경합", favorable:false }
    ]},
    "donggu":   { name:"동구", seats:2, candidates:[
      { name:"최순례", district:"제1선거구", competition:"2인 경합", favorable:false },
      { name:"홍기월", district:"제1선거구", competition:"2인 경합", favorable:false },
      { name:"김재식", district:"제2선거구", competition:"4인 경합", favorable:false },
      { name:"노진성", district:"제2선거구", competition:"4인 경합", favorable:false },
      { name:"박미정", district:"제2선거구", competition:"4인 경합", favorable:false },
      { name:"박성영", district:"제2선거구", competition:"4인 경합", favorable:false }
    ]},
    "bukgu":    { name:"북구", seats:6, candidates:[
      { name:"반재신", district:"제1선거구", competition:"3인 경합", favorable:false },
      { name:"안평환", district:"제1선거구", competition:"3인 경합", favorable:false },
      { name:"전미용", district:"제1선거구", competition:"3인 경합", favorable:false },
      { name:"김건안", district:"제2선거구", competition:"4인 경합", favorable:false },
      { name:"설정환", district:"제2선거구", competition:"4인 경합", favorable:false },
      { name:"전우근", district:"제2선거구", competition:"4인 경합", favorable:false },
      { name:"정영묵", district:"제2선거구", competition:"4인 경합", favorable:false },
      { name:"김동희", district:"제3선거구", competition:"3인 경합", favorable:false },
      { name:"박수민", district:"제3선거구", competition:"3인 경합", favorable:false },
      { name:"이숙희", district:"제3선거구", competition:"3인 경합", favorable:false },
      { name:"김형수", district:"제4선거구", competition:"3인 경합", favorable:false },
      { name:"이부일", district:"제4선거구", competition:"3인 경합", favorable:false },
      { name:"조석호", district:"제4선거구", competition:"3인 경합", favorable:false },
      { name:"임종국", district:"제5선거구", competition:"2인 경합", favorable:false },
      { name:"주순일", district:"제5선거구", competition:"2인 경합", favorable:false },
      { name:"강성훈", district:"제6선거구", competition:"4인 경합", favorable:false },
      { name:"김나윤", district:"제6선거구", competition:"4인 경합", favorable:false },
      { name:"채은지", district:"제6선거구", competition:"4인 경합", favorable:false },
      { name:"허석진", district:"제6선거구", competition:"4인 경합", favorable:false }
    ]},
    "seogu":    { name:"서구", seats:4, candidates:[
      { name:"강수훈", district:"제1선거구", competition:"2인 경합", favorable:false },
      { name:"전승일", district:"제1선거구", competition:"2인 경합", favorable:false },
      { name:"오미섭", district:"제2선거구", competition:"3인 경합", favorable:false },
      { name:"임진택", district:"제2선거구", competition:"3인 경합", favorable:false },
      { name:"정평호", district:"제2선거구", competition:"3인 경합", favorable:false },
      { name:"고경애", district:"제3선거구", competition:"단독",     favorable:true  },
      { name:"김길원", district:"제4선거구", competition:"5인 혼전", favorable:false },
      { name:"서용규", district:"제4선거구", competition:"5인 혼전", favorable:false },
      { name:"신정호", district:"제4선거구", competition:"5인 혼전", favorable:false },
      { name:"심철의", district:"제4선거구", competition:"5인 혼전", favorable:false },
      { name:"안형주", district:"제4선거구", competition:"5인 혼전", favorable:false }
    ]}
  },

  // ── 전남 광역의원 ──
  jeonnam_council: {
    "gangjin":    { name:"강진", jndc:"간접", candidates:[
      { name:"김주웅", district:"강진군", competition:"2인 경합", favorable:false },
      { name:"김창주", district:"강진군", competition:"2인 경합", favorable:false, slogan:"진심이 통하고 감동있는 따뜻한 정치" }
    ]},
    "goheung":    { name:"고흥", jndc:"간접", candidates:[
      { name:"권영길", district:"제1", competition:"3인 경합", favorable:false },
      { name:"박진권", district:"제1", competition:"3인 경합", favorable:false },
      { name:"송형곤", district:"제1", competition:"3인 경합", favorable:false },
      { name:"박선준", district:"제2", competition:"단독",     favorable:true  }
    ]},
    "gokseong":   { name:"곡성", jndc:"간접", candidates:[
      { name:"문영태", district:"곡성군", competition:"2인 경합", favorable:false },
      { name:"진호건", district:"곡성군", competition:"2인 경합", favorable:false }
    ]},
    "gwangyang":  { name:"광양", jndc:"직접", candidates:[
      { name:"임형석", district:"제1", competition:"단독",     favorable:true  },
      { name:"강정일", district:"제2", competition:"단독",     favorable:true  },
      { name:"서영배", district:"제3", competition:"단독",     favorable:true  },
      { name:"김길용", district:"제4", competition:"4인 경합", favorable:false, slogan:"경험과 실력으로 전남광주 재도약 선봉" },
      { name:"김장권", district:"제4", competition:"4인 경합", favorable:false },
      { name:"박경미", district:"제4", competition:"4인 경합", favorable:false },
      { name:"신용균", district:"제4", competition:"4인 경합", favorable:false }
    ]},
    "gurye":      { name:"구례", jndc:"간접", candidates:[
      { name:"김송식", district:"구례군", competition:"2인 경합", favorable:false },
      { name:"이승옥", district:"구례군", competition:"2인 경합", favorable:false, slogan:"새로운 변화 더 큰구례! 군민과 함께" }
    ]},
    "naju":       { name:"나주", jndc:"직접", candidates:[
      { name:"박동민", district:"제1", competition:"4인 경합", favorable:false },
      { name:"이민준", district:"제1", competition:"4인 경합", favorable:false },
      { name:"이웅범", district:"제1", competition:"4인 경합", favorable:false, slogan:"실천하는 약속, 새로운 나주" },
      { name:"이재창", district:"제1", competition:"4인 경합", favorable:false },
      { name:"권환진", district:"제2", competition:"단독",     favorable:true,  slogan:"지금은 권환진, 다시 뛰는 나주" },
      { name:"김명선", district:"제3", competition:"2인 경합", favorable:false },
      { name:"양순봉", district:"제3", competition:"2인 경합", favorable:false }
    ]},
    "damyang":    { name:"담양", jndc:"간접", candidates:[
      { name:"김정주", district:"제1", competition:"2인 경합", favorable:false },
      { name:"박준엽", district:"제1", competition:"2인 경합", favorable:false },
      { name:"김명우", district:"제2", competition:"3인 경합", favorable:false },
      { name:"박영식", district:"제2", competition:"3인 경합", favorable:false },
      { name:"유영재", district:"제2", competition:"3인 경합", favorable:false }
    ]},
    "mokpo":      { name:"목포", jndc:"직접", candidates:[
      { name:"김승길", district:"제1", competition:"단독",     favorable:true  },
      { name:"강성찬", district:"제2", competition:"3인 경합", favorable:false },
      { name:"박상준", district:"제2", competition:"3인 경합", favorable:false },
      { name:"장복성", district:"제2", competition:"3인 경합", favorable:false, slogan:"일 잘하는 경험살려 원도심 살립니다! / 6선 시의원" },
      { name:"박문옥", district:"제3", competition:"단독",     favorable:true  },
      { name:"전경선", district:"제5", competition:"단독",     favorable:true,  slogan:"목포 대혁신 지금은 경제야!" }
    ]},
    "muan":       { name:"무안", jndc:"직접", candidates:[
      { name:"고성석", district:"제1", competition:"2인 경합", favorable:false },
      { name:"정길수", district:"제1", competition:"2인 경합", favorable:false },
      { name:"강병국", district:"제2", competition:"2인 경합", favorable:false },
      { name:"이정운", district:"제2", competition:"2인 경합", favorable:false }
    ]},
    "boseong":    { name:"보성", jndc:"간접", candidates:[
      { name:"임용민", district:"제1", competition:"2인 경합", favorable:false },
      { name:"정재홍", district:"제1", competition:"2인 경합", favorable:false },
      { name:"강경윤", district:"제2", competition:"2인 경합", favorable:false },
      { name:"이현우", district:"제2", competition:"2인 경합", favorable:false }
    ]},
    "suncheon":   { name:"순천", jndc:"간접", candidates:[
      { name:"오행숙", district:"제1", competition:"3인 경합", favorable:false },
      { name:"정영균", district:"제1", competition:"3인 경합", favorable:false },
      { name:"정철균", district:"제1", competition:"3인 경합", favorable:false },
      { name:"강형구", district:"제2", competition:"3인 경합", favorable:false },
      { name:"김행순", district:"제2", competition:"3인 경합", favorable:false },
      { name:"임형률", district:"제2", competition:"3인 경합", favorable:false, slogan:"청년의 시선으로, 새로운 전남" },
      { name:"김정희", district:"제3", competition:"2인 경합", favorable:false },
      { name:"염동섭", district:"제3", competition:"2인 경합", favorable:false },
      { name:"김미연", district:"제4", competition:"2인 경합", favorable:false },
      { name:"이영민", district:"제4", competition:"2인 경합", favorable:false },
      { name:"김진남", district:"제5", competition:"2인 경합", favorable:false, slogan:"왕조1동의 검증된 진짜 일꾼" },
      { name:"장경순", district:"제5", competition:"2인 경합", favorable:false, slogan:"예산 해결사! 장경순은 합니다" },
      { name:"신민호", district:"제6", competition:"단독",     favorable:true  },
      { name:"정희선", district:"제7", competition:"단독",     favorable:true  },
      { name:"김영진", district:"제8", competition:"2인 경합", favorable:false },
      { name:"김정이", district:"제8", competition:"2인 경합", favorable:false }
    ]},
    "sinan":      { name:"신안", jndc:"직접", candidates:[
      { name:"김문수", district:"제1", competition:"2인 경합", favorable:false },
      { name:"최경순", district:"제1", competition:"2인 경합", favorable:false }
    ]},
    "yeosu":      { name:"여수", jndc:"직접", candidates:[
      { name:"민병대", district:"제2", competition:"2인 경합", favorable:false },
      { name:"서대현", district:"제2", competition:"2인 경합", favorable:false },
      { name:"강문성", district:"제3", competition:"단독",     favorable:true  },
      { name:"김화신", district:"제4", competition:"2인 경합", favorable:false },
      { name:"주연창", district:"제4", competition:"2인 경합", favorable:false },
      { name:"문갑태", district:"제5", competition:"2인 경합", favorable:false, slogan:"유쾌한 변화, 행복한 전남" },
      { name:"최남선", district:"제5", competition:"2인 경합", favorable:false },
      { name:"강정희", district:"제6", competition:"2인 경합", favorable:false, slogan:"검증된 경험과 실력! 강한 3선의 힘" },
      { name:"이석주", district:"제6", competition:"2인 경합", favorable:false, slogan:"처음을 만드는 선택!" }
    ]},
    "yeonggwang": { name:"영광", jndc:"직접", candidates:[
      { name:"박원종", district:"제1", competition:"2인 경합", favorable:false, slogan:"검증된 사람, 끝까지 책임질 사람" },
      { name:"장영진", district:"제1", competition:"2인 경합", favorable:false, slogan:"영광의 몫을 확실히 가져올 장영진" },
      { name:"김강헌", district:"제2", competition:"단독",     favorable:true  }
    ]},
    "yeongam":    { name:"영암", jndc:"직접", candidates:[
      { name:"노영미", district:"제1", competition:"3인 경합", favorable:false },
      { name:"신승철", district:"제1", competition:"3인 경합", favorable:false },
      { name:"이행도", district:"제1", competition:"3인 경합", favorable:false },
      { name:"손남일", district:"제2", competition:"단독",     favorable:true  }
    ]},
    "wando":      { name:"완도", jndc:"간접", candidates:[
      { name:"김재현", district:"제1", competition:"2인 경합", favorable:false },
      { name:"박재선", district:"제1", competition:"2인 경합", favorable:false },
      { name:"조인호", district:"제2", competition:"단독",     favorable:true  }
    ]},
    "jangseong":  { name:"장성", jndc:"간접", candidates:[
      { name:"김수권", district:"제1", competition:"단독",     favorable:true  },
      { name:"김회식", district:"제2", competition:"2인 경합", favorable:false },
      { name:"정기성", district:"제2", competition:"2인 경합", favorable:false, slogan:"실천으로, 결과로 보여드리겠습니다" }
    ]},
    "jangheung":  { name:"장흥", jndc:"간접", candidates:[
      { name:"김재승", district:"제1", competition:"단독",     favorable:true  },
      { name:"윤명희", district:"제2", competition:"3인 경합", favorable:false },
      { name:"이충식", district:"제2", competition:"3인 경합", favorable:false },
      { name:"주인천", district:"제2", competition:"3인 경합", favorable:false }
    ]},
    "jindo":      { name:"진도", jndc:"간접", candidates:[
      { name:"이현명", district:"진도군", competition:"2인 경합", favorable:false },
      { name:"장영우", district:"진도군", competition:"2인 경합", favorable:false }
    ]},
    "hampyeong":  { name:"함평", jndc:"직접", candidates:[
      { name:"모정환", district:"함평군", competition:"단독",     favorable:true  }
    ]},
    "haenam":     { name:"해남", jndc:"간접", candidates:[
      { name:"김성일", district:"제1", competition:"3인 경합", favorable:false },
      { name:"유행관", district:"제1", competition:"3인 경합", favorable:false },
      { name:"조영천", district:"제1", competition:"3인 경합", favorable:false },
      { name:"김병덕", district:"제2", competition:"4인 경합", favorable:false },
      { name:"박성재", district:"제2", competition:"4인 경합", favorable:false },
      { name:"이상미", district:"제2", competition:"4인 경합", favorable:false, slogan:"해남에서 검증! 전남에서 완성!" },
      { name:"조광영", district:"제2", competition:"4인 경합", favorable:false }
    ]},
    "hwasun":     { name:"화순", jndc:"간접", candidates:[
      { name:"임탁진", district:"제1", competition:"단독",     favorable:true  },
      { name:"류기준", district:"제2", competition:"2인 경합", favorable:false },
      { name:"문안식", district:"제2", competition:"2인 경합", favorable:false }
    ]}
  }
};
