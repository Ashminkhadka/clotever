
export const handleAddToWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const existingProduct = wishlist.find(item => item.id === product.id);
    if (!existingProduct) {
      wishlist.push(product);
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    window.dispatchEvent(new Event('storage'));
};
  
export const handleRemoveFromWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const index = wishlist.findIndex(item => item.id === product.id);
    if (index > -1) {
        wishlist.splice(index, 1);
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        window.dispatchEvent(new Event('storage'));
};