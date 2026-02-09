Folder Structure (Clean & Scalable)
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   └── Header.tsx
│   │
│   ├── kpi/
│   │   └── KPICard.tsx
│   │
│   └── charts/
│       ├── RevenueLineChart.tsx
│       ├── OrdersBarChart.tsx
│       └── UserPieChart.tsx
│
├── redux/
│   ├── store.ts
│   └── features/
│       └── dashboardSlice.ts
│
├── services/
│   └── api.ts
│
├── data/
│   └── dashboard.json
│
└── types/
    └── dashboard.ts