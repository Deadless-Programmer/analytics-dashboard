# Admin Dashboard

A responsive admin dashboard built with Next.js, displaying key business metrics, charts, and interactive filters.

## Demo

🔗 **Live Demo**: https://your-dashboard-name.vercel.app  


## Features

- KPI cards: Total Revenue, Users, Orders, Conversion Rate
- Date filters: Last 7 Days, Last 30 Days, Last 12 Months
- Revenue trend (Area + Line chart)
- Orders per period (Bar chart)
- User distribution (Pie chart)
- Traffic sources (Pie chart)
- Responsive layout (mobile & desktop)
- Loading skeletons & error handling
- Static data from JSON file

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **State Management**: Redux Toolkit
- **Data Fetching**: Fetch API (static JSON from `/public/data`)
- **Other**: clsx, react-redux

## Project Structure

- `app/`                → Main pages (dashboard)
- `components/`         → All UI & chart components
  - `charts/`           → Revenue, Orders, User, Traffic charts
  - `filters/`          → Filter controls
  - `kpi/`              → KPI cards
  - `layout/`           → Layout wrapper
  - `ui/`               → Reusable UI (Skeleton etc.)
- `public/data/`        → Static JSON data
- `redux/`              → Redux store & slices
- `services/`           → Data fetching helpers


## Setup Instructions (Local)

1. **Clone the repository**

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   npm run dev