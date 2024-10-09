function submitPesanan() {
    const form = document.getElementById('pesananForm');
    const makananTerpilih = [];

    form.querySelectorAll('input[name="makanan"]:checked').forEach(checkbox => {
        makananTerpilih.push(checkbox.value);
    });

    if (makananTerpilih.length > 0) {
        console.log("Pesanan Anda:", makananTerpilih.join(', '));
    } else {
        console.log("Tidak ada makanan yang dipilih.");
    }
}
