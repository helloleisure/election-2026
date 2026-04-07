const POLLS = [
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
