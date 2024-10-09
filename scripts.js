function submitorder(){
    const checkboxes = document.querySelectorAll('input[type="checkboxes"]:checked');
    const menuItems =[
        {name: 'Nasi Goreng', Harga: 25000},
        {name: 'Ayam Bakar',  Harga: 30000},
        {name: 'Mie Goreng',  Harga: 20000},
    ];

    if (checkboxes.length > 0){
        console.log("Pesanan Anda:");
        checkboxes.forEach(checkbox, index) => {
            console.log ('${menuItems[index].name ) - Rp. ${menuItems[index].price}');

        };
    } else{
       console.log("Tidak ada makanan yang dipilih.");
    }
}
