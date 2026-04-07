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
      { name:"임택",  position:"현직 동구청장",  status:"현직", competition:"단독",   image:"https://2026win.kr/files/candidate/profile/20260306200415_98b46429b4d169f9.jpg", favorable:true,  color:"#22c55e", slogan:"준비중" }
    ]},
    "seogu":    { name: "서구청장", candidates: [
      { name:"김이강", position:"현직 서구청장",  status:"현직", competition:"단독",   image:"https://2026win.kr/files/candidate/profile/20260306200414_f38c0b67be125ec3.jpg", favorable:true,  color:"#22c55e", slogan:"#골목경제" }
    ]},
    "namgu":    { name: "남구청장", candidates: [
      { name:"김병내", position:"현직 남구청장",  status:"현직", competition:"단독",   image:"https://2026win.kr/files/candidate/profile/20260306200443_0faefa983a947d2b.jpg", favorable:true,  color:"#22c55e", slogan:"준비중" }
    ]},
    "bukgu":    { name: "북구청장", candidates: [
      { name:"신수정", position:"도전자",          status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200411_832eaaab04ba1427.jpg", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"정다은", position:"도전자",          status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200437_6a98f41181846d89.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "gwangsan": { name: "광산구청장", candidates: [
      { name:"박병규", position:"현직 광산구청장", status:"현직", competition:"단독",   image:"https://2026win.kr/files/candidate/profile/20260306200413_eced449440e57cec.jpg", favorable:true,  color:"#22c55e", slogan:"준비중" }
    ]}
  },

  // ── 전남 기초단체장 ──
  jeonnam_mayors: {
    "gangjin":    { name:"강진군수",  jndc:"간접", candidates:[
      { name:"김보미", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260406232637_bbb1a17201d4c3a7.png", favorable:false, color:"#60a5fa", slogan:"돈을 버는 강진군! / 연180만원 강진기본소득" },
      { name:"차영수", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260402205941_724bdbe4e6075769.jpeg", favorable:false, color:"#a78bfa", slogan:"머물고 일하고 돌아오는 강진 / 강진 예산 1조 시대" }
    ]},
    "goheung":    { name:"고흥군수",  jndc:"간접", candidates:[
      { name:"공영민", status:"현직",   competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145415_19229e9f9b9cee64.jpg", favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"류제동", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260304170925_2034a8700e52e715.jpg", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"박준희", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145339_e692616911348919.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"신순식", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145334_e8861e4ee3b88e5e.jpg", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"안정민", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145248_f2488527250b445f.jpg", favorable:false, color:"#fb923c", slogan:"준비중" }
    ]},
    "gokseong":   { name:"곡성군수",  jndc:"간접", candidates:[
      { name:"강대광", status:"현직",   competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145413_c244ba5a6464c4cb.jpg", favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"강덕구", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145225_60b5cc471831944b.jpg", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"조상래", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145340_3a1a00a41aae7fe6.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "gwangyang":  { name:"광양시장",  jndc:"직접", candidates:[
      { name:"김태균", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145346_dfcdc9dc06e6f7fc.jpg", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"정인화", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145311_9afbd7ce48366189.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "gurye":      { name:"구례군수",  jndc:"간접", candidates:[
      { name:"김순호", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145315_5f9d7603e5e4a07d.jpg", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"신동수", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145417_b3d4a7e05e0b05b5.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"장길선", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145318_20090fb41367683e.jpg", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"홍봉만", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145358_ae04a8d6e6e055f6.jpg", favorable:false, color:"#fb923c", slogan:"준비중" }
    ]},
    "naju":       { name:"나주시장",  jndc:"직접", candidates:[
      { name:"윤병태", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145322_e6626947f34ec6c9.jpg", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"이재태", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145402_17de2906b970e437.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "damyang":    { name:"담양군수",  jndc:"간접", candidates:[
      { name:"박종원", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145400_a6af7e4cf3df6b18.jpg", favorable:false, color:"#60a5fa", slogan:"담양 주도 성장 / AI스마트농업·반도체밸리·정원도시 8대혁신" },
      { name:"이규현", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145412_5beb2f40ab218dfd.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"이재종", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145226_d957a91cf65a6cb9.jpg", favorable:false, color:"#f472b6", slogan:"준비중" }
    ]},
    "mokpo":      { name:"목포시장",  jndc:"직접", candidates:[
      { name:"강성휘", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260401155104_62f97b7baf609aed.png", favorable:false, color:"#60a5fa", slogan:"제대로 목포시 대전환 / 시민주권·해상풍력 배후도시" },
      { name:"이호균", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260319190411_4a9588a66cf7addb.jpg", favorable:false, color:"#a78bfa", slogan:"이재명처럼 이호균 / 목포크게쓰자" }
    ]},
    "muan":       { name:"무안군수",  jndc:"직접", candidates:[
      { name:"김산",   status:"도전자", competition:"6인 혼전", image:"https://2026win.kr/files/candidate/profile/20260402173027_83e1450e0bae0dae.png", favorable:false, color:"#60a5fa", slogan:"오직 군민! / 광주 군공항 이전, RE100 국가산단" },
      { name:"나광국", status:"도전자", competition:"6인 혼전", image:"https://2026win.kr/files/candidate/profile/20260403101545_ae2f995b5105a444.png", favorable:false, color:"#a78bfa", slogan:"무안의 기회, 나광국 / 무안형 기본소득·국제공항 재도약" },
      { name:"류춘오", status:"도전자", competition:"6인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145332_9e2976a3b6d911fb.jpg", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"이혜자", status:"도전자", competition:"6인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145225_2add55c4020344d6.jpg", favorable:false, color:"#fb923c", slogan:"준비중" },
      { name:"정승욱", status:"도전자", competition:"6인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145227_6ebd93dd77aaed96.jpg", favorable:false, color:"#38bdf8", slogan:"준비중" },
      { name:"최옥수", status:"도전자", competition:"6인 혼전", image:"https://2026win.kr/files/candidate/profile/20260407144923_8dceebde50f6724f.jpg", favorable:false, color:"#34d399", slogan:"준비중" }
    ]},
    "boseong":    { name:"보성군수",  jndc:"간접", candidates:[
      { name:"김철우", status:"현직",   competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145416_acaa9fe6ee432ee6.jpg", favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"선형수", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145242_bbb1027c761230a4.jpg", favorable:false, color:"#60a5fa", slogan:"막힘없는행정·아낌없는교육·걱정없는노후" },
      { name:"임영수", status:"도전자", competition:"3인 경합", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "suncheon":   { name:"순천시장",  jndc:"간접", candidates:[
      { name:"서동욱", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260403223316_3c71cdde416f0b43.jpg", favorable:false, color:"#60a5fa", slogan:"순천이 키운 인물 / 24년 정치 경험" },
      { name:"손훈모", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260405173141_d7395ef1d30d12a9.jpg", favorable:false, color:"#a78bfa", slogan:"미래로 도약하는 경제특례도시 / 인권변호사" },
      { name:"오하근", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260402162411_c41e44da08df1829.png", favorable:false, color:"#f472b6", slogan:"더 큰 순천 / 이재명 정부의 순천시장" },
      { name:"허석",   status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260402185447_918ecaf860cf4aad.jpg", favorable:false, color:"#fb923c", slogan:"미친예산! 순천도약! 첨단산업 강화!" }
    ]},
    "sinan":      { name:"신안군수",  jndc:"직접", candidates:[
      { name:"김경화", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145225_e06650840c63fdbf.jpg", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"김행원", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145246_fba2ed518eda2f66.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"박석배", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145250_8ed2f632a8cdc9ce.jpg", favorable:false, color:"#f472b6", slogan:"군민주권신안" },
      { name:"박우량", status:"현직",   competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145259_9dc023fb5d79a907.jpg", favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"천경배", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145223_8ae57b2e1e8beb9c.jpg", favorable:false, color:"#fb923c", slogan:"준비중" }
    ]},
    "yeosu":      { name:"여수시장",  jndc:"직접", candidates:[
      { name:"김순빈", status:"도전자", competition:"7인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145337_80fddedafbf2dad1.jpg", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"김영규", status:"도전자", competition:"7인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145306_b3b18679623cb78f.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"백인숙", status:"도전자", competition:"7인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145256_575a4be9f16723c8.jpg", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"서영학", status:"도전자", competition:"7인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145423_a35a453c83609d7c.jpg", favorable:false, color:"#fb923c", slogan:"준비중" },
      { name:"이광일", status:"도전자", competition:"7인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145411_e82664a06e63311a.jpg", favorable:false, color:"#38bdf8", slogan:"준비중" },
      { name:"정기명", status:"현직",   competition:"7인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145355_d43bfc357cf63ec6.jpg", favorable:false, color:"#22c55e", slogan:"지역경제(산단대전환)·관광활성화(소상공인)" },
      { name:"주종섭", status:"도전자", competition:"7인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145351_3c089574f9d637a0.jpg", favorable:false, color:"#34d399", slogan:"준비중" }
    ]},
    "yeonggwang": { name:"영광군수",  jndc:"직접", candidates:[
      { name:"김혜영", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306094101_6b65cda980f2e8fb.jpg", favorable:false, color:"#60a5fa", slogan:"군민을 다시 주인으로 / K-에너지수도·기본소득·기본생활" },
      { name:"양재휘", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260401101052_5000e302ee32d17b.jpg", favorable:false, color:"#a78bfa", slogan:"이제, 영광의 시대로" },
      { name:"장기소", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145255_1cd0cb5c47080faa.jpg", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"장세일", status:"현직",   competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260402230118_4c2949f33e260933.png", favorable:false, color:"#22c55e", slogan:"잘 해온 군수! 더 잘할 군수! / 군민 평생연금·에너지 기본소득" }
    ]},
    "yeongam":    { name:"영암군수",  jndc:"직접", candidates:[
      { name:"우승희", status:"현직",   competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145330_7320c658aab8d95e.jpg", favorable:true,  color:"#22c55e", slogan:"영암을 위해 한번 더 / 대통령 혁신 파트너·에너지 기본소득" },
      { name:"전동평", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145239_bc846f5a8078db14.jpg", favorable:false, color:"#60a5fa", slogan:"함께 꾸는 꿈 현실로 / 준비된 리더" }
    ]},
    "wando":      { name:"완도군수",  jndc:"간접", candidates:[
      { name:"신의준", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145331_1cb140c64369a4fc.jpg", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"우홍섭", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260320144036_51ff68c00d0002b0.png", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"이철",   status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145429_799890ea659d1410.jpg", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"지영배", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145346_933d2cc9eb1bef3c.jpg", favorable:false, color:"#fb923c", slogan:"준비중" },
      { name:"허궁희", status:"도전자", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145427_4dd987fdadd56af9.jpg", favorable:false, color:"#38bdf8", slogan:"준비중" }
    ]},
    "jangseong":  { name:"장성군수",  jndc:"간접", candidates:[
      { name:"김한종", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145420_b7122dbb43bffa69.jpg", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"박노원", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145410_155f6394d6cd952f.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"소영호", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145427_a0f67e2bd27c5a0b.jpg", favorable:false, color:"#f472b6", slogan:"준비중" },
      { name:"유성수", status:"도전자", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145341_843b4095cabf637c.jpg", favorable:false, color:"#fb923c", slogan:"준비중" }
    ]},
    "jangheung":  { name:"장흥군수",  jndc:"간접", candidates:[
      { name:"곽태수", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145422_c55550ad4ef56e41.jpg", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"김성",   status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145428_98ba1b5d6a2b4e86.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"왕윤채", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145303_9fdd94cf898add0e.jpg", favorable:false, color:"#f472b6", slogan:"준비중" }
    ]},
    "jindo":      { name:"진도군수",  jndc:"간접", candidates:[
      { name:"김인정", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145411_bc93167a95382d16.jpg", favorable:false, color:"#60a5fa", slogan:"떠나지 않는 진도 / 인구소멸 위기 극복" },
      { name:"이재각", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145230_f473800c3d9d4506.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "hampyeong":  { name:"함평군수",  jndc:"직접", candidates:[
      { name:"이남오", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145249_3011c35368f9c690.jpg", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"이상익", status:"도전자", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145232_1c303d025293751b.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "haenam":     { name:"해남군수",  jndc:"간접", candidates:[
      { name:"명현관", status:"현직",   competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145257_24902a6e92655d53.jpg", favorable:false, color:"#22c55e", slogan:"준비중" },
      { name:"김성주", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145331_2d4d5f13ce33fa17.jpg", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"이길운", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145253_97453302edadabd4.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" }
    ]},
    "hwasun":     { name:"화순군수",  jndc:"간접", candidates:[
      { name:"문행주", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145235_9557a778af4be6e6.jpg", favorable:false, color:"#60a5fa", slogan:"준비중" },
      { name:"윤영민", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145421_a1d720023f3dff7f.jpg", favorable:false, color:"#a78bfa", slogan:"준비중" },
      { name:"임지락", status:"도전자", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145404_dbeaf028df71004f.jpg", favorable:false, color:"#f472b6", slogan:"준비중" }
    ]}
  },

  // ── 광주 광역의원 ──
  gwangju_council: {
    "gwangsan": { name:"광산구", seats:5, candidates:[
      { name:"윤혜영", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200438_27afb36f6784b21b.jpg", favorable:false },
      { name:"임이엽", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200410_76fe37c0eb1acf87.jpg", favorable:false },
      { name:"정재봉", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200444_56355e3cdbf82a20.jpg", favorable:false },
      { name:"최지현", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200438_d0795fc405e9d833.jpg", favorable:false },
      { name:"한귀례", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200446_9a817af2dc763779.jpg", favorable:false },
      { name:"김명수", district:"제2선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200414_ac0f579f690e3ef8.jpg", favorable:false },
      { name:"김창삼", district:"제2선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200426_f1e73f98f06f67e2.jpg", favorable:false },
      { name:"박경신", district:"제2선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200428_a461a6d7b525cb30.jpg", favorable:false },
      { name:"박종원", district:"제2선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260227145400_a6af7e4cf3df6b18.jpg", favorable:false },
      { name:"이영순", district:"제2선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200416_a65f9101946b44af.jpg", favorable:false },
      { name:"박필순", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200414_6d76b73fa9adb75a.jpg", favorable:false },
      { name:"이영훈", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200420_b4eda8b2c93863db.jpg", favorable:false },
      { name:"조승유", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200415_563a523b1bc9f116.jpg", favorable:false },
      { name:"김동호", district:"제4선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200431_dcb7c364144287db.jpg", favorable:false },
      { name:"이귀순", district:"제4선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200411_3dc2dab968858ebe.jpg", favorable:false },
      { name:"김광란", district:"제5선거구", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260306200406_cb0ca303c31e3aef.jpg", favorable:true  }
    ]},
    "namgu":    { name:"남구", seats:3, candidates:[
      { name:"강원호", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200413_17f89daf516831a4.jpg", favorable:false },
      { name:"남호현", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200445_7536a88a093ceec1.jpg", favorable:false },
      { name:"박상원", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200421_bed2450cf09f0ff2.jpg", favorable:false },
      { name:"박철호", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200419_3784814fc82f9bc9.jpg", favorable:false },
      { name:"서임석", district:"제1선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200446_eebb0a0e015231d0.jpg", favorable:false },
      { name:"노소영", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200427_c1c82a740bab4609.jpg", favorable:false },
      { name:"배진하", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200407_1ded79a4819993ac.jpg", favorable:false },
      { name:"임미란", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200442_6e37c8bb1c862906.jpg", favorable:false },
      { name:"하주아", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200427_5b83fda6fe0c3b8b.jpg", favorable:false },
      { name:"김점기", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200440_e612b7219d787c66.jpg", favorable:false },
      { name:"박상길", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200442_91bbfa14610b12dc.jpg", favorable:false },
      { name:"박희율", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200441_d37bf0fd7b2bc727.jpg", favorable:false }
    ]},
    "donggu":   { name:"동구", seats:2, candidates:[
      { name:"최순례", district:"제1선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200407_2fb7671b2126f509.jpg", favorable:false },
      { name:"홍기월", district:"제1선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200434_6f490c79969c2355.jpg", favorable:false },
      { name:"김재식", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200433_0c4431f82713afda.jpg", favorable:false },
      { name:"노진성", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200442_b5e73a538c5a9f0e.jpg", favorable:false },
      { name:"박미정", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200413_94b3b9cdaf52c5a7.jpg", favorable:false },
      { name:"박성영", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200433_34153125f883efe3.jpg", favorable:false }
    ]},
    "bukgu":    { name:"북구", seats:6, candidates:[
      { name:"반재신", district:"제1선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200412_6ab694d3e26269d2.jpg", favorable:false },
      { name:"안평환", district:"제1선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200409_363145365b5a062c.jpg", favorable:false },
      { name:"전미용", district:"제1선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200417_9dc9a9c7a6372aba.jpg", favorable:false },
      { name:"김건안", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200424_f82732bc70078772.jpg", favorable:false },
      { name:"설정환", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200432_bb620660f36aebd3.jpg", favorable:false },
      { name:"전우근", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200405_798487ed2977c262.jpg", favorable:false },
      { name:"정영묵", district:"제2선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200444_36b3fe404cfcd522.jpg", favorable:false },
      { name:"김동희", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200410_9c9a2bff2f2af461.jpg", favorable:false },
      { name:"박수민", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200410_277af3fc71bcf4eb.jpg", favorable:false },
      { name:"이숙희", district:"제3선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200424_2f48ea6a940687e7.jpg", favorable:false },
      { name:"김형수", district:"제4선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200433_a9c1750abcc75bbc.jpg", favorable:false },
      { name:"이부일", district:"제4선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200417_65b0540c8f0d9a88.jpg", favorable:false },
      { name:"조석호", district:"제4선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200425_1f9332c38375bd06.jpg", favorable:false },
      { name:"임종국", district:"제5선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200445_98d8c59d7a18cadd.jpg", favorable:false },
      { name:"주순일", district:"제5선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200435_d031869f6f972701.jpg", favorable:false },
      { name:"강성훈", district:"제6선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200425_a3d98328f8ff6f48.jpg", favorable:false },
      { name:"김나윤", district:"제6선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200413_b3bf08c61c942928.jpg", favorable:false },
      { name:"채은지", district:"제6선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200424_107d1fd968a03dc4.jpg", favorable:false },
      { name:"허석진", district:"제6선거구", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200440_d917f1acfab547e7.jpg", favorable:false }
    ]},
    "seogu":    { name:"서구", seats:4, candidates:[
      { name:"강수훈", district:"제1선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200407_0bcd72459b12fb70.jpg", favorable:false },
      { name:"전승일", district:"제1선거구", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200422_cf192567bca836fb.jpg", favorable:false },
      { name:"오미섭", district:"제2선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200443_16f6b0d5b6359f7e.jpg", favorable:false },
      { name:"임진택", district:"제2선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200429_789d553b1bf38454.jpg", favorable:false },
      { name:"정평호", district:"제2선거구", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260306200445_33f1c133e7ce1178.jpg", favorable:false },
      { name:"고경애", district:"제3선거구", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260306200444_6a5a86e2eec53efd.jpg", favorable:true  },
      { name:"김길원", district:"제4선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200406_e73f405b15dda7a0.jpg", favorable:false },
      { name:"서용규", district:"제4선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200418_83cdaf6ffd7ef8d3.jpg", favorable:false },
      { name:"신정호", district:"제4선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200439_bdb9ea4a666bcc2b.jpg", favorable:false },
      { name:"심철의", district:"제4선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200419_4daff46ef23f347a.jpg", favorable:false },
      { name:"안형주", district:"제4선거구", competition:"5인 혼전", image:"https://2026win.kr/files/candidate/profile/20260306200426_679b9eba1d3f290e.jpg", favorable:false }
    ]}
  },

  // ── 전남 광역의원 ──
  jeonnam_council: {
    "gangjin":    { name:"강진", jndc:"간접", candidates:[
      { name:"김주웅", district:"강진군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145254_7c3bc7547fc29e46.jpg", favorable:false },
      { name:"김창주", district:"강진군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145343_d5a81673fe49206b.jpg", favorable:false, slogan:"진심이 통하고 감동있는 따뜻한 정치" }
    ]},
    "goheung":    { name:"고흥", jndc:"간접", candidates:[
      { name:"권영길", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145247_04549b1495425deb.jpg", favorable:false },
      { name:"박진권", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145259_a1b1a03d02bab0d4.jpg", favorable:false },
      { name:"송형곤", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145312_85ae902fe4645cc8.jpg", favorable:false },
      { name:"박선준", district:"제2", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145405_80f2b061726153ab.jpg", favorable:true  }
    ]},
    "gokseong":   { name:"곡성", jndc:"간접", candidates:[
      { name:"문영태", district:"곡성군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145423_676d0202cdf49c9b.jpg", favorable:false },
      { name:"진호건", district:"곡성군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145423_47a56dfe0abd41b2.jpg", favorable:false }
    ]},
    "gwangyang":  { name:"광양", jndc:"직접", candidates:[
      { name:"임형석", district:"제1", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145348_1901c2c4d2a12553.jpg", favorable:true  },
      { name:"강정일", district:"제2", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145358_0d7e1f2d912b1c47.jpg", favorable:true  },
      { name:"서영배", district:"제3", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145329_8b98e4d8113daf2a.jpg", favorable:true  },
      { name:"김길용", district:"제4", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145423_cd82bd7337859105.jpg", favorable:false, slogan:"경험과 실력으로 전남광주 재도약 선봉" },
      { name:"김장권", district:"제4", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145324_825c0c83d74448a2.jpg", favorable:false },
      { name:"박경미", district:"제4", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145239_3e51b2611edf15a6.jpg", favorable:false },
      { name:"신용균", district:"제4", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145357_b8fed55648131402.jpg", favorable:false }
    ]},
    "gurye":      { name:"구례", jndc:"간접", candidates:[
      { name:"김송식", district:"구례군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145357_3449137b6277fa99.jpg", favorable:false },
      { name:"이승옥", district:"구례군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145330_56af46ef7dfbaf68.jpg", favorable:false, slogan:"새로운 변화 더 큰구례! 군민과 함께" }
    ]},
    "naju":       { name:"나주", jndc:"직접", candidates:[
      { name:"박동민", district:"제1", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260407143549_fc12f0e5419a3de0.png", favorable:false },
      { name:"이민준", district:"제1", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260308232913_aa9c0224785384a3.png", favorable:false },
      { name:"이웅범", district:"제1", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260305094426_9258c921abff170f.jpg", favorable:false, slogan:"실천하는 약속, 새로운 나주" },
      { name:"이재창", district:"제1", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145235_98ae34b6435d3f7c.jpg", favorable:false },
      { name:"권환진", district:"제2", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145251_c11b8c1df8aa7bd9.jpg", favorable:true,  slogan:"지금은 권환진, 다시 뛰는 나주" },
      { name:"김명선", district:"제3", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145359_f7eff49deadc169b.jpg", favorable:false },
      { name:"양순봉", district:"제3", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260407103337_c5e55462d55590ea.png", favorable:false }
    ]},
    "damyang":    { name:"담양", jndc:"간접", candidates:[
      { name:"김정주", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145300_17f89acb6d4785f2.jpg", favorable:false },
      { name:"박준엽", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145426_a19234256426082e.jpg", favorable:false },
      { name:"김명우", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145253_4fa50126c456599e.jpg", favorable:false },
      { name:"박영식", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145331_35c95bb3de505854.jpg", favorable:false },
      { name:"유영재", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145252_f74d924225f46818.jpg", favorable:false }
    ]},
    "mokpo":      { name:"목포", jndc:"직접", candidates:[
      { name:"김승길", district:"제1", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145226_d22675a256f21659.jpg", favorable:true  },
      { name:"강성찬", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145356_280071c137b8a659.jpg", favorable:false },
      { name:"박상준", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145256_903e0fcbcc4617f8.jpg", favorable:false },
      { name:"장복성", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145333_0fa9040658aaec52.jpg", favorable:false, slogan:"일 잘하는 경험살려 원도심 살립니다! / 6선 시의원" },
      { name:"박문옥", district:"제3", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260306092957_3e485390a149f80d.jpg", favorable:true  },
      { name:"전경선", district:"제5", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145401_09f852bba018f5a4.jpg", favorable:true,  slogan:"목포 대혁신 지금은 경제야!" }
    ]},
    "muan":       { name:"무안", jndc:"직접", candidates:[
      { name:"고성석", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260405125511_4a927e84f7a26f0e.jpg", favorable:false },
      { name:"정길수", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145302_07d9cfa059667c48.jpg", favorable:false },
      { name:"강병국", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145342_4e785d89fb7a4ed4.jpg", favorable:false },
      { name:"이정운", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145301_9e8d77e50b71f408.jpg", favorable:false }
    ]},
    "boseong":    { name:"보성", jndc:"간접", candidates:[
      { name:"임용민", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145320_f86d53fb19127fc3.jpg", favorable:false },
      { name:"정재홍", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145319_9d77dafc76d18b70.jpg", favorable:false },
      { name:"강경윤", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145407_c887575545bf9b7f.jpg", favorable:false },
      { name:"이현우", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145336_dd5edefca0d1ac91.jpg", favorable:false }
    ]},
    "suncheon":   { name:"순천", jndc:"간접", candidates:[
      { name:"오행숙", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145305_e4247f8354d7ed6c.jpg", favorable:false },
      { name:"정영균", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145257_477407ae539eab75.jpg", favorable:false },
      { name:"정철균", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145410_2ef3bfc05baa8c19.jpg", favorable:false },
      { name:"강형구", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145347_3cf1d73ffbd230d3.jpg", favorable:false },
      { name:"김행순", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145248_8ff134333eebc2f0.jpg", favorable:false },
      { name:"임형률", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260305150535_5ef99171a4f239e5.jpg", favorable:false, slogan:"청년의 시선으로, 새로운 전남" },
      { name:"김정희", district:"제3", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145338_be4bacf0e0e391b8.jpg", favorable:false },
      { name:"염동섭", district:"제3", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145336_995cf2bdc4afc0bd.jpg", favorable:false },
      { name:"김미연", district:"제4", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145349_b0aa138821ff94c3.jpg", favorable:false },
      { name:"이영민", district:"제4", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145425_04ec0f4e03a1e66d.jpg", favorable:false },
      { name:"김진남", district:"제5", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260403121131_b46f12fbe2d83287.jpg", favorable:false, slogan:"왕조1동의 검증된 진짜 일꾼" },
      { name:"장경순", district:"제5", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260406205501_a81e1226df772281.jpg", favorable:false, slogan:"예산 해결사! 장경순은 합니다" },
      { name:"신민호", district:"제6", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145319_581123b9cedcf96b.jpg", favorable:true  },
      { name:"정희선", district:"제7", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145417_e3a77f6b2c83d30b.jpg", favorable:true  },
      { name:"김영진", district:"제8", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145351_5d196bd47664968e.jpg", favorable:false },
      { name:"김정이", district:"제8", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145347_c7d565d34ed5af13.jpg", favorable:false }
    ]},
    "sinan":      { name:"신안", jndc:"직접", candidates:[
      { name:"김문수", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145317_854cecbac9a3d60d.jpg", favorable:false },
      { name:"최경순", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145312_dfe61454c94c95c4.jpg", favorable:false }
    ]},
    "yeosu":      { name:"여수", jndc:"직접", candidates:[
      { name:"민병대", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145406_0e12d55a976ffff1.jpg", favorable:false },
      { name:"서대현", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145408_e773f2bec0a69661.jpg", favorable:false },
      { name:"강문성", district:"제3", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145310_3b5cd66995439830.jpg", favorable:true  },
      { name:"김화신", district:"제4", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145238_d067606f172c10a2.jpg", favorable:false },
      { name:"주연창", district:"제4", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145421_72688bdec952fe78.jpg", favorable:false },
      { name:"문갑태", district:"제5", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145411_4061dd8a75ad6693.jpg", favorable:false, slogan:"유쾌한 변화, 행복한 전남" },
      { name:"최남선", district:"제5", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145314_957bc7ee99a3e617.jpg", favorable:false },
      { name:"강정희", district:"제6", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260403171508_0ba261b1af6c5c64.png", favorable:false, slogan:"검증된 경험과 실력! 강한 3선의 힘" },
      { name:"이석주", district:"제6", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260401174804_ff21f14c974d7026.jpg", favorable:false, slogan:"처음을 만드는 선택!" }
    ]},
    "yeonggwang": { name:"영광", jndc:"직접", candidates:[
      { name:"박원종", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260329204541_88a8e86975edfcbc.jpg", favorable:false, slogan:"검증된 사람, 끝까지 책임질 사람" },
      { name:"장영진", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260404165744_77073828400a9e21.jpg", favorable:false, slogan:"영광의 몫을 확실히 가져올 장영진" },
      { name:"김강헌", district:"제2", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145354_f2f054797964cf22.jpg", favorable:true  }
    ]},
    "yeongam":    { name:"영암", jndc:"직접", candidates:[
      { name:"노영미", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145259_9929660e5b9e2a1f.jpg", favorable:false },
      { name:"신승철", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145309_f926f0286d1fccc9.jpg", favorable:false },
      { name:"이행도", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145241_62bbf51ad9502208.jpg", favorable:false },
      { name:"손남일", district:"제2", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145316_070ebc1633d85e79.jpg", favorable:true  }
    ]},
    "wando":      { name:"완도", jndc:"간접", candidates:[
      { name:"김재현", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145227_98ac1921d4791327.jpg", favorable:false },
      { name:"박재선", district:"제1", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145258_f72e9f1335870d26.jpg", favorable:false },
      { name:"조인호", district:"제2", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145311_2148bec512b428b5.jpg", favorable:true  }
    ]},
    "jangseong":  { name:"장성", jndc:"간접", candidates:[
      { name:"김수권", district:"제1", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145229_a9ab70d0e94d4e6e.jpg", favorable:true  },
      { name:"김회식", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145311_b9176c93f0dc6923.jpg", favorable:false },
      { name:"정기성", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145326_619d4ca5fb113903.jpg", favorable:false, slogan:"실천으로, 결과로 보여드리겠습니다" }
    ]},
    "jangheung":  { name:"장흥", jndc:"간접", candidates:[
      { name:"김재승", district:"제1", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145322_5370711dd093b98e.jpg", favorable:true  },
      { name:"윤명희", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145249_9dfabd3703e92f5a.jpg", favorable:false },
      { name:"이충식", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145323_8ea35bd97e2ecadb.jpg", favorable:false },
      { name:"주인천", district:"제2", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145235_a256b04f7e3d7a2a.jpg", favorable:false }
    ]},
    "jindo":      { name:"진도", jndc:"간접", candidates:[
      { name:"이현명", district:"진도군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145356_5a001712a9d573d0.jpg", favorable:false },
      { name:"장영우", district:"진도군", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145333_7e5d9ce84664a0d9.jpg", favorable:false }
    ]},
    "hampyeong":  { name:"함평", jndc:"직접", candidates:[
      { name:"모정환", district:"함평군", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145231_50d06bf066bdb3e2.jpg", favorable:true  }
    ]},
    "haenam":     { name:"해남", jndc:"간접", candidates:[
      { name:"김성일", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145303_b23995cc5ef3c6be.jpg", favorable:false },
      { name:"유행관", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145413_a15614f1b63e78ed.jpg", favorable:false },
      { name:"조영천", district:"제1", competition:"3인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145357_c99ce40f94e64bd1.jpg", favorable:false },
      { name:"김병덕", district:"제2", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145258_999aa38743125c4a.jpg", favorable:false },
      { name:"박성재", district:"제2", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145338_b0de59541e5bd3a8.jpg", favorable:false },
      { name:"이상미", district:"제2", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145320_ec6fc3c704d62c38.jpg", favorable:false, slogan:"해남에서 검증! 전남에서 완성!" },
      { name:"조광영", district:"제2", competition:"4인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145234_f3af8dd5118e3f8a.jpg", favorable:false }
    ]},
    "hwasun":     { name:"화순", jndc:"간접", candidates:[
      { name:"임탁진", district:"제1", competition:"단독",     image:"https://2026win.kr/files/candidate/profile/20260227145401_a153dccad8c57887.jpg", favorable:true  },
      { name:"류기준", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145248_ccf3c1a6ac2356d1.jpg", favorable:false },
      { name:"문안식", district:"제2", competition:"2인 경합", image:"https://2026win.kr/files/candidate/profile/20260227145420_9834dc88cb2f1bd0.jpg", favorable:false }
    ]}
  }
};
