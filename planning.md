# Forex Calculator: Fast-Tracked Planning Document

---

## DEFINE

**Purpose**  
Automate basic FOREX calculations.

**Users**  
Retail traders, including myself.

**Core Features**  
- PIP value calculator  
- Position size calculator

---

## FEATURE SCOPE

**Pages**  
- Landing page  
- PIP value calculator  
- Position size calculator

**User Actions**  
- Navigate between pages  
- Input values and submit calculator forms  
- View calculated results

---

## TECH STACK

### Frontend
- Vue 3  
- Tailwind CSS  
- Vite

### API
- [fawazahmed0/exchange-api](https://github.com/fawazahmed0/exchange-api) (Open-source, MVP default)  
- [exchangeratesapi.io](https://exchangeratesapi.io/) (Commercial, future-ready)

### Backend *(Future Implementation)*
- Node.js with Express

### Database *(Future Implementation)*
- MySQL (via PlanetScale)

### Hosting
- **Vercel** (Frontend)  
- **Render** (Backend)  
- **PlanetScale** (Database)

---

## MVP

**Stack**
- Vue 3 + Tailwind CSS + Vite  
- API: [fawazahmed0/exchange-api](https://github.com/fawazahmed0/exchange-api)  
- No backend or database  
- Logic handled client-side  
- Deployed via Vercel

---

## DEVOPS & TOOLS

**Version Control**  
- Git + GitHub

**CI/CD** *(Future Implementation)*  
- GitHub Actions

**Deployment**  
- Auto-deploy on push to `main` (via Vercel)

**Monitoring**  
- Vercel logs

---

## BASIC ARCHITECTURE
Browser → Vue App (Vercel) → Exchange API

**Directory Structure**

/src
- /components
- /pages
- /utils
- /styles
  
main.js

App.vue

---

## TESTING

**Manual Testing**
- User inputs and results verified in-browser

**Postman** *(Future Implementation)*
- For API testing if backend is added

---

## LAUNCH CHECKLIST

- [ ] Calculator inputs and results functional  
- [ ] Responsive layout (mobile-friendly)  
- [ ] Exchange rate API integrated  
- [ ] Deployed frontend on Vercel  
- [ ] Backend deployed on Render *(Future Implementation)*  
- [ ] Database seeded *(Future Implementation)*
