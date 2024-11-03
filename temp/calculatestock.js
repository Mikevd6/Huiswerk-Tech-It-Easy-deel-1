export function calculateStock(inventory) {
    return inventory.reduce((total, tv) => total + tv.originalStock, 0);
}
