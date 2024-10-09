function submitorder() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const menuItems = [
        {name: 'Nasi Goreng', price: 25000},
        {name: 'Ayam Bakar', price: 30000},
        {name: 'Mie Goreng', price: 20000},
    ];

    if (checkboxes.length > 0) {
        console.log("Pesanan Anda:");
        checkboxes.forEach((checkbox, index) => {
            const selectedItem = menuItems.find(item => item.name === checkbox.value);
            if (selectedItem) {
                console.log(`${selectedItem.name} - Rp. ${selectedItem.price}`);
            }
        });
    } else {
        console.log("Tidak ada makanan yang dipilih.");
    }
}
