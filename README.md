# Vipe8 — Flash Köşesi

Statik hobi sitesi. index.html dosyasını tarayıcıda açabilirsiniz; derleme gerekmez.

## İçerikleri güncelleme
Tüm değişken içerikler content.js içindedir:
- nickname: Vipe8.
- logo: YouTube logo dosyanızın yolu (ör. assets/logo.png). Şimdiki V8 işareti yer tutucudur.
- links: YouTube, Kick, Discord ve videodaki yorumlara giden bağlantılar.
- videos: Üç videonun URL, başlık, açıklama ve isteğe bağlı kapak görseli.
- playlist: Dosyanın URL/yolu, görünen dosya ismi, YYYY-MM-DD biçiminde güncelleme tarihi ve oyun sayısı. Dosyayı assets/ altına koyup url alanına yolunu yazabilirsiniz.
- guide: Üç adımın görseli, alternatif metni, başlığı, açıklaması ve isteğe bağlı bağlantısı. SVG çizimler temsilidir, kendi ekran görüntülerinizle değiştirebilirsiniz.

Boş bağlantılar başka bir hesaba gitmez; tıklanınca "Bu içerik yakında eklenecek" mesajı verir. Playlist henüz mevcut olmadığından örnek bir oyun dosyası üretilmedi. Başlık ve açıklamalar taslak metindir. İlk iki video ve YouTube kanal bağlantısı eklenmiştir. Üçüncü video, Kick ve Discord yer tutucudur.

Kurulum metinleri için kaynaklar:
https://flashpointarchive.org/downloads
https://flashpointarchive.org/faq

Masaüstünde sabit sol menü ve yan yana üç video; 1200 px ve altında videolar alt alta; 720 px ve altında açılır mobil menü kullanılır.

Yayımlama için index.html, style.css, script.js, content.js ve assets klasörünü aynı dizinde barındırın. Bu değişiklikte dışarıya yayımlama yapılmadı.

Özgün portföyün sidebar, nav-flat, content, panel, panel-title, pad-btn ve link-chip yapıları ve ölçüleri korunmuştur. Ek CSS yalnızca Flash paleti ve yeni içerik alanları içindir.

Kurulum rehberi gerçek ekran görüntülerini kullanır. guide içindeki continuation alanı ek görsel ve ona hizalanan paragraf için kullanılır. Flashpoint Tüyoları bölümü henüz boş bırakılmıştır.
