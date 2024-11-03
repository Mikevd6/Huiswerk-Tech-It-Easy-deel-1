export function calculateRemaining(inventory) {
    return inventory.reduce((total, tv) => total + (tv.originalStock - tv.sold), 0);
}
