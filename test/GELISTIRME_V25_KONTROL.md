# Gökboğa Arena — v25 geliştirme ve regresyon kontrolü

> Tarih: 2026-11-21. Çalışma dalı: `test/chatgpt-erisim-20261121`. Bu belge **canlı oyunda test yapıldığı anlamına gelmez**. v24'ün 16,7 MB tek HTML dosyasına bu oturumda tam içerik erişimi olmadığından, aşağıdakiler uygulanacak test ve geliştirme ölçütleridir.

## Yayın güvenliği
- [ ] v24'ü SHA-256 ile yedekle ve doğrula.
- [ ] Değişiklikleri yalnız test dalında yap.
- [ ] Masa oyunları, banka, VIP, reklam ve profil için otomatik regresyon testlerini çalıştır.
- [ ] Başkan onayı olmadan `main` veya canlı GitHub Pages dosyasını değiştirme.
- [ ] Supabase TEST ve LIVE projelerini kesin olarak ayır.

## Başkanlık Odası
- [x] Ayrı bir yönetim ekranı prototipi oluşturuldu: `test/Baskanlik-Odasi-v25-onizleme.html`.
- [x] Örnek Nida kayıtları için arama, filtreleme ve durum değişimi prototipi.
- [x] Oyuncu yönetimi, reklam, gelir, Nara ve işlem günlüğü sekmeleri.
- [ ] Gerçek Başkan oturumu: sunucuda JWT + `gokboga_baskan_mi()` doğrulaması.
- [ ] `20261119_gokboga_test_kurulumu.sql` yalnız TEST ortamında ayrıca incelenip onayla uygulanmalı.
- [ ] Gerçek şikâyet kayıtları için sunucu tarafı sayfalama, RLS, kanıt erişimi, denetim günlüğü.
- [ ] Uyarı/susturma/engel kararları gerekçe, yetki ve geri alma işlemleriyle.
- [ ] Gelir, ödeme ve iadeler yalnız doğrulanmış sunucu kayıtlarından; gizli anahtarlar istemciye konmamalı.
- [ ] Nara öneri üretebilir; para ve ceza işlemlerini otomatik uygulamamalı.

## Profil ve Çanta
- [ ] Çanta'da 20 avatar çerçevesinin gerçek görsel dosyalarını yükle; her birine sabit ürün ID'si.
- [ ] 10 oda kartının ayrı görselleri, masa teması ilişkisi, seç/tak/kaldır.
- [ ] Yüklenen eşyanın sayfa yenilemesi ve farklı cihazda korunması için güvenli sunucu kaydı.
- [ ] Profil adı, oyuncu ID, profil fotoğrafı ve kamera butonları için gerçek işlem alanları.
- [ ] Geri ve X düğmeleri aynı önceki ekrana dönmeli; hiçbir panel kilitli kalmamalı.

## Oyunlar
- [ ] 101 Okey: 2/3/4 kişi, standart/turbo, taş çek/at, diz, bitiş ve tur hesabı.
- [ ] Normal Okey: çifte bitiş ve 2/3/4 kişilik masa.
- [ ] Tavla: hamle kuralları, bağlantı kopunca koltuğa dönüş.
- [ ] Slot: 5×3, 9 çizgi, HAN/KAĞAN, 777 ödeme mantığı ve çift ödül önleme.
- [ ] Küçük oyunlar: 2048, Hafıza, Kelime Avı, Yılan Yolu; eksik Dama, Zar Ustası, Bilgi Arenası.
- [ ] Reklam izleyerek ödül: yalnız reklam sağlayıcısının sunucu doğrulaması sonrası tek ödül.

## Telefon ve tablet
- [ ] Android telefon dikey/yatay; tablet dikey/yatay.
- [ ] Ekranda taşma, kaydırma, kesilen görsel ve üst üste düğme olmamalı.
- [ ] Kamera ve mikrofon izin reddi durumunda uygulama kilitlenmemeli.
- [ ] Ses/müzik tek küresel yöneticiden kontrol edilmeli.

## Kabul ölçütü
Bir özellik yalnızca **arayüz + gerçek işlem + veri kalıcılığı + hata durumu + cihaz testi** birlikte doğrulandığında “tamamlandı” sayılır. Prototipler gerçek sisteme bağlanmadan tamamlandı olarak işaretlenmez.
