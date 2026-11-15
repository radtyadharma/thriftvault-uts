# ThriftVault

Aplikasi mobile marketplace thrift fashion (jual-beli barang second) — proyek UTS mata kuliah Aplikasi Berbasis Platform. Dibangun dengan React Native + Expo (Expo Router).

## Fitur

- **8 screen fungsional:** Login, Register, Home, Explore, Detail Produk, Keranjang, Checkout, Profil
- **Bottom Tab Navigation:** Home, Explore, Keranjang, Profil
- **Stack Navigation:** Login/Register → halaman utama, Home → Detail Produk (parameter produk terkirim via query params), Detail/Keranjang → Checkout
- Keranjang dengan state global (React Context), qty stepper, ringkasan biaya + ongkir
- Pencarian + filter kategori di Explore
- Ikon: Lucide (@react-native-vector-icons/lucide)

## Menjalankan

```bash
npm install
npx expo start
```

Scan QR dengan aplikasi **Expo Go** (Android/iOS), atau jalankan di emulator: `npm run android` / `npm run ios`.

## Struktur

```
src/
  app/
    (tabs)/       index (home), explore, keranjang, profile (bottom tab)
    login.jsx     register.jsx
    details.jsx   detail produk (stack, parameter id via query)
    checkout.jsx  checkout (stack)
    _layout.jsx   root stack + cart provider
  context/        CartContext.jsx (state keranjang global)
  data/           products.js (data dummy + palette)
assets/
```

## Anggota

- Putu Raditya Dharma Putra — 240040015

## Aset & Lisensi

- Foto produk: [Unsplash License](https://unsplash.com/license) & [Pexels License](https://www.pexels.com/license/) — detail per foto: [ASSETS.md](./ASSETS.md)
- Ikon: [@expo/vector-icons](https://github.com/expo/vector-icons) (MIT)
- Font: sistem default (San Francisco / Roboto)
