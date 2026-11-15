export const C = {
  bg: "#FDFBF7",
  surface: "#F4F0EA",
  border: "#E6E1D6",
  text: "#1E1B18",
  sub: "#6B655C",
  primary: "#D96B27",
  success: "#1F7A4C",
};

export const PRODUCTS = [
  {
    id: "1",
    title: "Jaket Denim Vintage",
    price: 149000,
    condition: "Like New",
    img: "https://images.pexels.com/photos/2868882/pexels-photo-2868882.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Jaket denim second kondisi like new, barely used. Bahan tebal, tidak luntur. Ukuran M pas untuk badan 55-65 kg. Warna biru klasik, jahitan rapi.",
  },
  {
    id: "2",
    title: "Sneakers Putih",
    price: 210000,
    condition: "Like New",
    img: "https://images.pexels.com/photos/6748330/pexels-photo-6748330.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Sneakers putih second, sol masih kokoh dan empuk. Nyaman dipakai harian, mudah dibersihkan. Ukuran 42.",
  },
  {
    id: "3",
    title: "Tote Bag Kulit",
    price: 95000,
    condition: "Good",
    img: "https://images.pexels.com/photos/35685402/pexels-photo-35685402.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Tote bag kanvas dengan aksen kulit asli. Muat laptop 14 inci, kuat untuk daily use. Ada bekas pemakaian tipis di bagian dasar.",
  },
  {
    id: "4",
    title: "High-Top Sneakers",
    price: 185000,
    condition: "Good",
    img: "https://images.pexels.com/photos/5710077/pexels-photo-5710077.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "High-top sneakers second bergaya basket retro. Warna hitam-kuning, lace lengkap, upper masih mulus. Ukuran 41.",
  },
  {
    id: "5",
    title: "Flannel Plaid Cokelat",
    price: 89000,
    condition: "Like New",
    img: "https://images.unsplash.com/photo-1580166410643-ff1ce8bd470c?w=800&q=70&fm=jpg&fit=crop",
    desc: "Flannel plaid second, bahan lembut dan tebal. Cocok untuk hangat musim hujan. Warna cokelat-krem netral.",
  },
  {
    id: "6",
    title: "Jeans Blue Regular",
    price: 120000,
    condition: "Like New",
    img: "https://images.unsplash.com/photo-1621541780385-7641d3c3b472?w=800&q=70&fm=jpg&fit=crop",
    desc: "Jeans blue regular fit second, potongan lurus klasik. Bahan denim tebal, tidak melar. Ukuran 31.",
  },
  {
    id: "7",
    title: "Rak Vintage Pilihan",
    price: 75000,
    condition: "Good",
    img: "https://images.pexels.com/photos/30922974/pexels-photo-30922974.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Koleksi vintage pilihan minggu ini, diambil langsung dari rak curated ThriftVault. Stok terbatas.",
  },
  {
    id: "8",
    title: "Paket Flea Market",
    price: 150000,
    condition: "Good",
    img: "https://images.pexels.com/photos/16729590/pexels-photo-16729590.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Bundling 3 item thrift pilihan dari flea market, kondisi good, harga hemat. Isi acak sesuai kategori pilihan.",
  },
];

export const rupiah = (n) => "Rp " + n.toLocaleString("id-ID");
