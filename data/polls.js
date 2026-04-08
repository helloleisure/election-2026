const POLLS = [
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
  },
  {
    id: 3,
    title: "전남광주특별시장 후보 적합도",
    organization: "남도일보·광주CBS 노컷뉴스",
    method: "ARS",
    period: "2026.03.22~23",
    sampleSize: 1787,
    margin: 2.3,
    confidence: 95,
    region: "광주+전남",
    candidates: [
      { id: "min-hyung-bae",  name: "민형배", rate: 27.1 },
      { id: "kim-young-rok",  name: "김영록", rate: 22.4 },
      { id: "shin-jeong-hoon",name: "신정훈", rate: 12.3 },
      { name: "강기정",        rate: 12.0 },
      { name: "주철현",        rate: 8.5 },
      { name: "모름/무응답",   rate: 17.7 }
    ],
    url: "https://www.namdonews.com/news/articleView.html?idxno=905080"
  },
  {
    id: 2,
    title: "전남광주특별시장 후보 적합도",
    organization: "한국시민기자협회",
    method: "온라인",
    period: "2026.03.",
    sampleSize: 0,
    margin: 0,
    confidence: 95,
    region: "광주+전남",
    candidates: [
      { id: "min-hyung-bae",  name: "민형배", rate: 27.2 },
      { id: "kim-young-rok",  name: "김영록", rate: 19.4 },
      { name: "신정훈",        rate: 13.5 }
    ],
    url: "http://www.civilreporter.co.kr/news/articleView.html?idxno=534609"
  },
  {
    id: 1,
    title: "전남광주특별시장 후보 적합도",
    organization: "광주MBC",
    method: "전화면접",
    period: "2026.01.",
    sampleSize: 0,
    margin: 0,
    confidence: 95,
    region: "광주+전남",
    candidates: [
      { id: "min-hyung-bae",  name: "민형배", rate: 33.0 },
      { id: "kim-young-rok",  name: "김영록", rate: 24.0 },
      { name: "강기정",        rate: 14.0 },
      { name: "신정훈",        rate: 14.0 },
      { name: "주철현",        rate: 14.0 }
    ],
    url: "https://kjmbc.co.kr/NewsArticle/1498765"
  }
];
