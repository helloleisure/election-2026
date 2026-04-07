const CONFIG = {
  election: {
    name: "제9회 전국동시지방선거",
    shortName: "6.3 지선",
    date: "2026-06-03T06:00:00+09:00",
    region: "광주·전남",
    title: "전남광주 개표센터"
  },
  // phase: "primary" | "preparation" | "dday" | "counting" | "final"
  phase: "primary",
  phases: {
    primary:     { label: "민주당 경선 결선 진행 중", color: "#f59e0b", dot: true },
    preparation: { label: "본선 준비 중",       color: "#60a5fa", dot: false },
    dday:        { label: "오늘 선거일",         color: "#ef4444", dot: true  },
    counting:    { label: "개표 진행 중",        color: "#ef4444", dot: true  },
    final:       { label: "개표 완료",           color: "#22c55e", dot: false }
  },
  lastUpdated: "2026-04-06T09:00:00+09:00",
  countingRate: 0  // 개표율 (0~100)
};
