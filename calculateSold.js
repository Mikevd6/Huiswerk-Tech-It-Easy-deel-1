export function calculateSold(inventory) {
    return inventory.reduce((total, tv) => total + tv.sold, 0);
}
