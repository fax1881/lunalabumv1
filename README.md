# Luna Albüm - E-ticaret Projesi

Bu proje Next.js 14, Prisma, MySQL ve Tailwind CSS kullanılarak geliştirilmiş bir e-ticaret uygulamasıdır.

## 🚀 Özellikler

- Kullanıcı kayıt ve giriş sistemi
- Ürün katalog ve sepet yönetimi
- Sipariş takip sistemi
- Adres yönetimi
- Admin paneli
- Responsive tasarım

## 🛠️ Teknolojiler

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS, Framer Motion
- **Backend:** Next.js API Routes
- **Database:** MySQL (Prisma ORM)
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcryptjs, helmet

## 🔧 Kurulum

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/fax1881/lunaalbu-mv3.git
   cd lunaalbu-mv3
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Environment variables oluşturun:**
   ```bash
   cp .env.example .env
   ```
   
   `.env` dosyasına şu değişkenleri ekleyin:
   ```env
   DATABASE_URL="mysql://username:password@localhost:3306/database_name"
   JWT_SECRET="your-super-secret-jwt-key-here"
   ```

4. **Veritabanını hazırlayın:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Geliştirme sunucusunu başlatın:**
   ```bash
   npm run dev
   ```

## 🔒 Güvenlik Özellikleri

- **JWT Authentication:** Güvenli token tabanlı kimlik doğrulama
- **Password Hashing:** bcryptjs ile şifre hashleme (12 salt rounds)
- **Input Validation:** Tüm kullanıcı girdileri doğrulanır
- **XSS Protection:** Güvenlik başlıkları ile XSS koruması
- **CSRF Protection:** SameSite cookie ayarları
- **SQL Injection Protection:** Prisma ORM kullanımı
- **Environment Variables:** Hassas bilgiler environment variables'da saklanır

## 🚀 Vercel Deployment

1. **Vercel'de proje oluşturun**
2. **Environment Variables ekleyin:**
   - `DATABASE_URL`: MySQL veritabanı bağlantı adresi
   - `JWT_SECRET`: Güçlü bir JWT secret key

3. **Deploy edin**

## 📁 Proje Yapısı

```
├── app/
│   ├── api/           # API routes
│   ├── admin/         # Admin paneli
│   ├── giris/         # Giriş sayfası
│   ├── kayit/         # Kayıt sayfası
│   └── hesap/         # Kullanıcı hesap sayfası
├── components/        # React bileşenleri
├── prisma/           # Database schema ve migrations
├── styles/           # CSS dosyaları
└── public/           # Statik dosyalar
```

## 🔧 API Endpoints

- `POST /api/kayit` - Kullanıcı kaydı
- `POST /api/giris` - Kullanıcı girişi
- `POST /api/siparis-ver` - Sipariş oluşturma
- `GET /api/adresler` - Kullanıcı adresleri
- `GET /api/urunler` - Ürün listesi
- `POST /api/urunler` - Ürün ekleme (admin)

## 🛡️ Güvenlik Kontrol Listesi

- [x] JWT secret environment variable'da
- [x] Password hashing (bcryptjs)
- [x] Input validation
- [x] SQL injection protection
- [x] XSS protection headers
- [x] CSRF protection
- [x] Secure cookie settings
- [x] Error handling
- [x] Rate limiting (helmet)
- [x] Environment variables protection

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun
