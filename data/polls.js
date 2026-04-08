const POLLS = [
  {
    id: 7,
    title: "전남광주특별시장 결선 양자대결",
    organization: "코리아리서치인터내셔널 / 뉴시스·무등일보·광주MBC 의뢰",
    method: "전화면접",
    period: "2026.04.06~07",
    sampleSize: 1001,
    margin: 3.1,
    confidence: 95,
    region: "광주+전남",
    note: "결선 투표(4.12~14) 직전 최신 조사 — 민형배 12%p 우세",
    candidates: [
      { id: "min-hyung-bae", name: "민형배", rate: 42.0 },
      { id: "kim-young-rok", name: "김영록", rate: 30.0 },
      { name: "모름/무응답",  rate: 28.0 }
    ],
    url: "https://www.newsis.com/view/NISX20260408_0003583180"
  },
  {
    id: 6,
    title: "전남광주특별시장 가상 양자대결 (결선 시뮬레이션)",
    organization: "한국갤럽 / KBS광주 의뢰",
    method: "전화면접",
    period: "2026.03.22~23",
    sampleSize: 1603,
    margin: 2.4,
    confidence: 95,
    region: "광주+전남",
    note: "전화면접 방식 기준 가장 큰 격차 — 민형배 우세 유효",
    candidates: [
      { id: "min-hyung-bae", name: "민형배", rate: 48.0 },
      { id: "kim-young-rok", name: "김영록", rate: 40.0 },
      { name: "모름/무응답",  rate: 12.0 }
    ],
    url: "https://www.yna.co.kr/view/AKR20260325061200054"
  },
  {
    id: 5,
    title: "전남광주특별시장 가상 양자대결 (결선 시뮬레이션)",
    organization: "코리아정보리서치 / 서울경제TV 의뢰",
    method: "ARS",
    period: "2026.03.23~24",
    sampleSize: 1808,
    margin: 2.3,
    confidence: 95,
    region: "광주+전남",
    note: "광주 민형배 30.9% vs 김영록 19.8% / 전남 김영록 29.1% vs 민형배 22.1%",
    candidates: [
      { id: "min-hyung-bae", name: "민형배", rate: 33.6 },
      { id: "kim-young-rok", name: "김영록", rate: 33.0 },
      { name: "모름/무응답",  rate: 33.4 }
    ],
    url: "https://www.sentv.co.kr/article/view/sentv202603260062"
  },
  {
    id: 4,
    title: "전남광주특별시장 가상 양자대결 (결선 시뮬레이션)",
    organization: "리얼미터 / 남도일보·광주CBS 노컷뉴스 의뢰",
    method: "ARS",
    period: "2026.03.22~23",
    sampleSize: 1787,
    margin: 2.3,
    confidence: 95,
    region: "광주+전남",
    note: "민주당 지지층: 민형배 29.8% vs 김영록 24.3%",
    candidates: [
      { id: "min-hyung-bae", name: "민형배", rate: 42.7 },
      { id: "kim-young-rok", name: "김영록", rate: 39.6 },
      { name: "모름/무응답",  rate: 17.7 }
    ],
    url: "https://www.namdonews.com/news/articleView.html?idxno=905097"
  }
];
