# ThriftVault

Aplikasi mobile marketplace thrift fashion (jual-beli barang second) — proyek UTS mata kuliah Aplikasi Berbasis Platform. Dibangun dengan React Native + Expo (Expo Router).

## Fitur

- **8 screen fungsional:** Login, Register, Home, Explore, Detail Produk, Keranjang, Checkout, Profil
- **Bottom Tab Navigation:** Home, Explore, Keranjang, Profil
- **Stack Navigation:** Login/Register → halaman utama, Home → Detail Produk (dengan parameter produk), Detail/Keranjang → Checkout
- Keranjang dengan state global (React Context), qty stepper, ringkasan biaya + ongkir
- Pencarian + filter kategori di Explore

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
    (auth)/       login, register
    (tabs)/       home, explore, keranjang, profil (bottom tab)
    detail/[id]/  detail produk (stack, parameter id)
    checkout.tsx  checkout (stack)
  components/     ProductCard
  lib/            products (data + palette), cart (CartContext)
  assets/
```

## Anggota

- Putu Raditya Dharma Putra — 240040015

## Aset & Lisensi

- Foto produk: [Unsplash License](https://unsplash.com/license) & [Pexels License](https://www.pexels.com/license/) — detail per foto: [ASSETS.md](./ASSETS.md)
- Ikon: [@expo/vector-icons](https://github.com/expo/vector-icons) (MIT)
- Font: sistem default (San Francisco / Roboto)
