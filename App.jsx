import React from 'react';
import { calculateSold } from './calculateSold';
import { calculateStock } from './calculateStock';
import { calculateRemaining } from './calculateRemaining';
import inventory from './constants/inventory';
function App() {
    return (
        <div>
            <h1>Tech It Easy Dashboard</h1>
            <p className="sold-count">Totaal verkochte TV's: {calculateSold(inventory)}</p>
            <p className="stock-count">Totaal ingekochte TV's: {calculateStock(inventory)}</p>
            <p className="remaining-count">Nog te verkopen TV's: {calculateRemaining(inventory)}</p>
        </div>
    );
}
export default App;
