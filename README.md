# FurkanBxy - Fotoğraf Baskı Platformu

Modern, responsive ve kullanıcı dostu fotoğraf baskı platformu. Next.js, React, TypeScript ve Tailwind CSS kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- **Modern Tasarım**: Temiz ve profesyonel arayüz
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Animasyonlar**: Framer Motion ile akıcı animasyonlar
- **SEO Optimized**: Arama motorları için optimize edilmiş
- **Hızlı**: Next.js ile optimize edilmiş performans
- **Erişilebilir**: WCAG standartlarına uygun

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/yourusername/furkanbxy.git
cd furkanbxy
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🛠️ Kullanılan Teknolojiler

- **Next.js 14** - React framework
- **React 18** - UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - CSS framework
- **Framer Motion** - Animasyon kütüphanesi
- **Lucide React** - İkon kütüphanesi

## 📁 Proje Yapısı

```
furkanbxy/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global stiller
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Ana sayfa
├── components/            # React bileşenleri
│   ├── Header.tsx         # Site başlığı
│   ├── Hero.tsx           # Ana banner
│   ├── Products.tsx       # Ürünler bölümü
│   ├── About.tsx          # Hakkımızda
│   ├── Features.tsx       # Özellikler
│   ├── Instagram.tsx      # Instagram feed
│   ├── PreparationTimes.tsx # Hazırlık süreleri
│   ├── PaymentDelivery.tsx # Ödeme ve teslimat
│   ├── Contact.tsx        # İletişim formu
│   └── Footer.tsx         # Site altbilgisi
├── public/               # Statik dosyalar
├── tailwind.config.js    # Tailwind yapılandırması
├── next.config.js        # Next.js yapılandırması
└── package.json          # Proje bağımlılıkları
```

## 🎨 Özelleştirme

### Renkler
`tailwind.config.js` dosyasında renk paletini özelleştirebilirsiniz:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        400: '#38bdf8',
        600: '#0284c7',
        700: '#0369a1',
      },
      secondary: {
        600: '#7c3aed',
        700: '#6d28d9',
      },
      accent: {
        400: '#fbbf24',
      }
    }
  }
}
```

### İçerik
Her component dosyasında metinleri ve görselleri değiştirebilirsiniz.

## 📱 Responsive Tasarım

Site aşağıdaki breakpoint'lerde optimize edilmiştir:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Vercel (Önerilen)
1. [Vercel](https://vercel.com) hesabı oluşturun
2. GitHub reponuzu bağlayın
3. Otomatik deployment başlayacaktır

### Diğer Platformlar
```bash
npm run build
npm start
```

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

- **Website**: [furkanbxy.com](https://furkanbxy.com)
- **Email**: info@furkanbxy.com
- **Telefon**:tel:+90 0545 673 4497


## 🙏 Teşekkürler

- [Next.js](https://nextjs.org) ekibine
- [Tailwind CSS](https://tailwindcss.com) ekibine
- [Framer Motion](https://www.framer.com/motion/) ekibine
- [Lucide](https://lucide.dev) ekibine 
├── app/
│   ├── globals.css          # Global stiller
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Ana sayfa
├── components/
│   ├── Header.tsx           # Header component
│   ├── Hero.tsx             # Hero section
│   ├── Products.tsx         # Ürünler
│   ├── Features.tsx         # Özellikler
│   ├── About.tsx            # Hakkında
│   ├── Instagram.tsx        # Instagram feed
│   ├── PreparationTimes.tsx # Hazırlanma süreleri
│   ├── PaymentDelivery.tsx  # Ödeme ve teslimat
│   ├── Contact.tsx          # İletişim
│   └── Footer.tsx           # Footer
├── package.json             # Bağımlılıklar
├── tailwind.config.js       # Tailwind konfigürasyonu
├── next.config.js           # Next.js konfigürasyonu
└── README.md                # Bu dosya
```

## 🛠️ Kurulum

1. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

2. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

3. **Tarayıcıda açın:**
   ```
   http://localhost:3000
   ```

## 📱 Responsive Tasarım

- **Desktop**: 1200px ve üzeri
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: 480px altı

## 🎨 Özelleştirme

### Renkler
`tailwind.config.js` dosyasından renkleri değiştirebilirsiniz:

```javascript
colors: {
  primary: {
    500: '#3b82f6', // Ana renk
    600: '#2563eb', // Hover rengi
  },
  secondary: {
    500: '#ef4444', // İkincil renk
  }
}
```

### Ürünler
`components/Products.tsx` dosyasından ürünleri düzenleyebilirsiniz.

### İçerik
Her component dosyasından ilgili içeriği değiştirebilirsiniz.

## 🔧 Build ve Deploy

### Production Build
```bash
npm run build
npm start
```

### Vercel Deploy
```bash
npm install -g vercel
vercel
```

## 📧 İletişim

- **E-posta**: info@fotobaski.com
- **Telefon**: 0850 885 05 15
- **Adres**: İstanbul, Türkiye

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

---
