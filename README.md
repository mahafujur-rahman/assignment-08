# 🌐 AppVerse - Modern App Discovery Platform

AppVerse is a fully responsive React-based web application that allows users to explore, install, and manage apps interactively — just like a mini app store. It provides app browsing, detailed analytics visualization, local installation management, and smooth navigation with modern UI components.

---

## 🚀 Live Demo

🔗 **Deployed Site:** [Visit AppVerse on Netlify](https://curious-dieffenbachia-311770.netlify.app/)

---

## 🧭 Features

### 🧱 Layout & Navigation
- Custom **Header** with logo and navigation links (Home, Apps, Installation)
- Active route indication for smooth UX
- **Contribution button** linking directly to GitHub profile
- Beautiful **custom Footer** designed with TailwindCSS

### 🏠 Home Page
- Interactive **Banner Section** with App Store and Play Store buttons  
- **State cards** showing key metrics  
- **Top Apps Section** showcasing 8 featured apps with image, rating & downloads  
- “**Show All**” button to view all available apps

### 📱 All Apps Page
- Displays all apps from local JSON data (12–20 app objects)
- Live **Search bar** with real-time filtering (case-insensitive)
- **No App Found** message for unmatched queries
- Dynamic **app cards** with title, rating, and download count

### 📊 App Details Page
- Shows app image, title, downloads, reviews, and ratings
- Interactive **Install button**
  - On click → becomes **Installed**
  - Saved in **localStorage**
  - Shows **toast notification**
- **Recharts graph** visualizing app ratings
- Detailed **app description** section

### 💾 My Installation Page
- Displays all installed apps (from localStorage)
- **Uninstall button** to remove app instantly
- Shows **toast notifications** on uninstall
- Includes **sorting dropdown**
  - High → Low downloads
  - Low → High downloads

### ⚙️ Additional Features
- Fully **responsive design** for all screen sizes
- Custom **Error Page** for invalid routes
- Smooth **Loading animations** for:
  - Page navigation
  - Search operations
- **Reload-safe deployment** (no 404 errors on refresh)

---

## 🧩 Tech Stack

| Technology && Purpose |

| ⚛️ **React.js** ---> Frontend framework |
| 💅 **Tailwind CSS** ---> Styling and responsive layout |
| 🎨 **DaisyUI** ---> Pre-built components with customization |
| 📊 **Recharts** ---> Data visualization (App Rating Chart) |
| 💾 **LocalStorage API** ---> Save and manage installed apps |
| 🌐 **Netlify** ---> Deployment platform |

---

## 🗂️ Data Structure (Example)
```js
{
  image: "https://example.com/image.png",
  title: "TaskFlow",
  companyName: "FlowTech",
  id: 1,
  description: "Smart task management app for productivity.",
  size: 45,
  reviews: 1800,
  ratingAvg: 4.6,
  downloads: 250000,
  ratings: [
    { name: "1 star", count: 10 },
    { name: "2 star", count: 40 },
    { name: "3 star", count: 100 },
    { name: "4 star", count: 300 },
    { name: "5 star", count: 1350 }
  ]
}
````


## 💡 Key Highlights

* Clean, scalable React architecture
* Reusable & modular components
* Fully dynamic data rendering
* Optimized for both desktop and mobile devices
* Smooth UX with DaisyUI and Tailwind animations

---

## 🧑Developer

**👤 Md. Mahafujur Rahman**
💼 [GitHub Profile](https://github.com/mahafujur-rahman)
📧 [mdmahafujurrahman2040@gmail.com](mailto:mdmahafujurrahman2040@gmail.com)

```