import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

// ---- DATA ----
const quickLinks = [
  {
    icon: '💊',
    iconClass: 'quick-card__icon--green',
    title: 'Médicaments',
    desc: 'Parcourez notre catalogue de médicaments',
    to: '/medicaments',
    variant: '',
  },
  {
    icon: '🩺',
    iconClass: 'quick-card__icon--blue',
    title: 'Services',
    desc: "Prise de rendez-vous, vaccination et plus",
    to: '/parapharmacie',
    variant: '',
  },
  {
    icon: '📞',
    iconClass: 'quick-card__icon--purple',
    title: 'Contact',
    desc: 'Posez vos questions, contactez-nous',
    to: '/contact',
    variant: '',
  },
  {
    icon: '🚨',
    iconClass: 'quick-card__icon--red',
    title: 'Urgence',
    desc: "Pharmacie de garde et numéros d'urgence",
    to: '/contact',
    variant: 'quick-card--urgence',
  },
]

const categories = [
  { icon: '🧴', title: 'Vitamines & Minéraux', desc: 'Soignez votre immunité avec notre sélection', to: '/medicaments?cat=vitamines' },
  { icon: '🌿', title: 'Soin de la Peau', desc: 'Les meilleurs produits dermatologiques', to: '/parapharmacie?cat=peau' },
  { icon: '🩺', title: 'Premiers Soins', desc: 'Tout pour votre trousse familiale', to: '/medicaments?cat=soins' },
]

// ---- COMPONENT ----
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/medicaments?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <div className="home">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            {/* Left: text */}
            <div className="hero__content">
              <div className="hero__badge">
                <span className="hero__badge-dot" />
                Pharmacie Chérifi — Alger
              </div>

              <h1 className="hero__title">
                Votre santé, notre<br />
                <span>engagement quotidien.</span>
              </h1>

              <p className="hero__desc">
                Trouvez vos médicaments, faites livrer vos ordonnances et 
                bénéficiez des conseils de nos pharmaciens experts.
              </p>

              {/* Pharmacist badge */}
              <div className="hero__pharmacist">
                <div className="hero__pharmacist-avatar">👩‍⚕️</div>
                <div className="hero__pharmacist-info">
                  <span className="hero__pharmacist-name">Docteur Bellal</span>
                  <span className="hero__pharmacist-role">Pharmacienne conseil</span>
                </div>
              </div>

              {/* Search bar */}
              <form className="hero__search" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Rechercher un médicament ou produit…"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="hero__search-btn">Chercher</button>
              </form>
            </div>

            {/* Right: image */}
            <div className="hero__image-wrapper">
              <div className="hero__image-placeholder">🏥</div>
              {/* Floating stats */}
              <div className="hero__stat hero__stat--tl">
                <span className="hero__stat-value">2000+</span>
                <span className="hero__stat-label">Médicaments</span>
              </div>
              <div className="hero__stat hero__stat--br">
                <span className="hero__stat-value">24h</span>
                <span className="hero__stat-label">Service rapide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="quick-links">
        <div className="container">
          <div className="quick-links__grid">
            {quickLinks.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className={`quick-card ${item.variant}`}
              >
                <div className={`quick-card__icon ${item.iconClass}`}>
                  {item.icon}
                </div>
                <div>
                  <div className="quick-card__title">{item.title}</div>
                  <div className="quick-card__desc">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ORDER BANNER ===== */}
      <section className="container">
        <div className="order-banner">
          <div className="order-banner__content">
            <div className="order-banner__label">✦ Service en ligne</div>
            <h2 className="order-banner__title">Gagnez du temps,<br />envoyez votre ordonnance</h2>
            <p className="order-banner__desc">
              Préparez votre commande à l'avance et récupérez-la au comptoir 
              sans attente. Simple, rapide et sécurisé.
            </p>
          </div>
          <div className="order-banner__actions">
            <div className="order-banner__icon">📋</div>
            <Link to="/ordonnance" className="btn btn-white">
              Déposer une ordonnance →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES VEDETTES ===== */}
      <section className="categories">
        <div className="container">
          <div className="categories__header">
            <div>
              <h2 className="section-title">Catégories Vedettes</h2>
              <p className="section-subtitle">Les produits les plus demandés en ce moment</p>
            </div>
            <Link to="/medicaments" className="categories__see-all">Voir tout →</Link>
          </div>

          <div className="categories__grid">
            {categories.map((cat) => (
              <Link key={cat.title} to={cat.to} className="category-card">
                <div className="category-card__image">{cat.icon}</div>
                <div>
                  <div className="category-card__title">{cat.title}</div>
                  <div className="category-card__desc">{cat.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAP / LOCATION ===== */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 'var(--space-6)' }}>
            Nous trouver à Alger
          </h2>
          <div className="map-section__inner">
            {/* Info */}
            <div className="map-info">
              <div className="map-info__title">Pharmacie Chérifi</div>

              <div className="map-info__item">
                <div className="map-info__icon">📍</div>
                <div>
                  <div className="map-info__label">Adresse</div>
                  <div className="map-info__value">Rue de l'Indépendance, Alger, Algérie</div>
                </div>
              </div>

              <div className="map-info__item">
                <div className="map-info__icon">⏰</div>
                <div>
                  <div className="map-info__label">Horaires d'ouverture</div>
                  <div className="map-info__value">
                    Lun–Sam : 08:00 – 20:00<br />
                    Dimanche : fermé
                  </div>
                </div>
              </div>

              <div className="map-info__item">
                <div className="map-info__icon">📞</div>
                <div>
                  <div className="map-info__label">Contact</div>
                  <div className="map-info__value">+213 00 00 00 00<br />pharmacie.cherifi@gmail.com</div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="map-placeholder">
              <div className="map-placeholder__bg" />
              <div className="map-placeholder__pin">
                <div className="map-placeholder__pin-icon" />
                <div className="map-placeholder__label">Pharmacie Chérifi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}