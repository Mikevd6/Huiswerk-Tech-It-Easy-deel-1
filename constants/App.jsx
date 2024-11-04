import React from 'react';
import { calculateSold } from './calculateSold.js';
import { calculatestock } from './calculatestock.js';
import { calculateremaining } from './calculateremaining.js';
import inventory from './constants/inventory';
function App() {
    return (
        <div>
            <h1>Tech It Easy Dashboard</h1>
            <p className="sold-count">Totaal verkochte TV's: {calculateSold(inventory)}</p>
            <p className="stock-count">Totaal ingekochte TV's: {calculatestock(inventory)}</p>
            <p className="remaining-count">Nog te verkopen TV's: {calculateremaining(inventory)}</p>
        </div>
    );
}
export default App;
