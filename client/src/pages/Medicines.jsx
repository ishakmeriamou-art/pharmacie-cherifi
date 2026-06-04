import medicines from "../data/medicines";

function Medicines() {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", color: "#2e7d32" }}>
        💊 Médicaments
      </h1>

      <div className="medicine-grid">
        {medicines.map((medicine) => (
          <div className="medicine-card" key={medicine.id}>
            <img
              src={medicine.image}
              alt={medicine.name}
            />

            <h3>{medicine.name}</h3>

            <p>{medicine.price} DA</p>

            <button>
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medicines;