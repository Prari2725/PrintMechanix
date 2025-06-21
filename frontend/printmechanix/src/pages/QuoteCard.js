import React, { useState, useEffect } from 'react';

const materialOptions = ['PLA', 'PETG', 'TPU'];
const colorOptions = ['Red', 'Blue', 'Black', 'White'];
const resolutionOptions = ['0.1mm', '0.2mm', '0.3mm'];
const infillOptions = ['20%', '50%', '100%'];

function QuoteCard({ file, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [material, setMaterial] = useState('PLA');
  const [color, setColor] = useState('Black');
  const [resolution, setResolution] = useState('0.2mm');
  const [infill, setInfill] = useState('20%');
  const [basePrice, setBasePrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  // Mock auto-quote on mount
  useEffect(() => {
    const mockPrice = 50 + Math.random() * 50;
    setBasePrice(mockPrice);
    setFinalPrice(mockPrice * quantity);
  }, [file]);

  useEffect(() => {
    const multiplier =
      (material === 'TPU' ? 1.2 : material === 'PETG' ? 1.1 : 1) *
      (infill === '100%' ? 1.5 : infill === '50%' ? 1.2 : 1) *
      (resolution === '0.1mm' ? 1.3 : resolution === '0.3mm' ? 0.9 : 1);
    setFinalPrice((basePrice * multiplier * quantity).toFixed(2));
  }, [material, resolution, infill, quantity, basePrice]);

  return (
    <div className="card p-3 shadow">
      <p><strong>Base Price:</strong> ₹{basePrice.toFixed(2)}</p>
      <div className="row mb-2">
        <div className="col">
          <label>Material:</label>
          <select className="form-control" value={material} onChange={e => setMaterial(e.target.value)}>
            {materialOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>
        <div className="col">
          <label>Color:</label>
          <select className="form-control" value={color} onChange={e => setColor(e.target.value)}>
            {colorOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <label>Resolution:</label>
          <select className="form-control" value={resolution} onChange={e => setResolution(e.target.value)}>
            {resolutionOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>
        <div className="col">
          <label>Infill:</label>
          <select className="form-control" value={infill} onChange={e => setInfill(e.target.value)}>
            {infillOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </div>
      </div>
      <div className="mb-3">
        <label>Quantity:</label>
        <input
          type="number"
          className="form-control"
          min={1}
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
        />
      </div>
      <h5 className="text-success">Total: ₹{finalPrice}</h5>
      <button
        className="btn btn-primary mt-2"
        onClick={() =>
          onAddToCart({
            fileName: file.name,
            material,
            color,
            resolution,
            infill,
            quantity,
            price: finalPrice,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default QuoteCard;
