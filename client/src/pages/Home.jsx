function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "linear-gradient(135deg, #e8f5e9, #ffffff)",
        }}
      >
        <h1 style={{ fontSize: "3rem", color: "#2e7d32" }}>
          Pharmacie Chérifi 💊
        </h1>

        <p style={{ color: "#555", fontSize: "1.1rem" }}>
          Votre pharmacie et laboratoire médical à Ain Salah
        </p>

        <input
          type="text"
          placeholder="Rechercher un médicament..."
          style={{
            marginTop: "20px",
            padding: "12px",
            width: "300px",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        />
      </section>

      {/* Services */}
      <section
        style={{
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2>Nos Services</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <div className="card">💊 Médicaments</div>
          <div className="card">🧪 Analyses</div>
          <div className="card">📞 Consultation</div>
        </div>
      </section>
    </div>
  );
}

export default Home;