// Tüm kişisel içerikleri buradan değiştirebilirsiniz. Boş URL'ler yer tutucudur.
window.SITE_CONTENT = {
  nickname: "Vipe8",
  logo: "assets/vipe8-logo.png",
  links: { youtube: "https://www.youtube.com/@vipe-8/", kick: "https://kick.com/vipe808", discord: "https://discord.gg/WYdEuQhYtJ", comments: "" },
  videos: [
    { url: "https://youtu.be/PBQz-xd_jaY?si=Y21G5HjtxbJkYcib", title: "Bir Çağın Kapanışı (Flash Player)", description: "Flash Player tam olarak nedir, başına ne geldi ve oyunlara ne olacak? sorularını cevaplıyorum.", thumbnail: "" },
    { url: "https://youtu.be/U-ON4v7QcC4?si=o_JmBxNi7IM4EEbJ", title: "En İyi 25 Flash Player Oyunu", description: "Bilgisayarın başından kaldırtmayan, en sevdiğim 25 Flash Player oyunu ve sürpriz +1 olan listem.", thumbnail: "" },
    { url: "", title: "Efsanevi Flash Player Listesi", description: "Hem benim eklemelerim hem de sizden gelenlerin eklendiği efsanevi liste ve geleceğini anlatıyorum.", thumbnail: "" },
    { url: "", title: "ÇOK YAKINDA", description: "Çok yakında yeni bir video daha sizlerle.", thumbnail: "", comingSoon: true }
  ],
  playlist: { url: "assets/Efsaneler Listesi.json", filename: "Efsaneler Listesi.json", updated: "2026-10-14", gameCount: 162 }, // updated: YYYY-MM-DD
  guide: [
    {
      title: "Flashpoint’i İndir ve Kur",
      text: "Aşağıdaki linkten Flashpoint Infinity Installer'ın işletim sisteminize uygun versiyonunu indirip kurun. Ardından bir sonraki adım için çalıştırın.",
      image: "assets/flashpoint-indirme.png",
      alt: "Flashpoint Infinity indirme ekranı; Download Installer düğmesi işaretlenmiş",
      link: "https://flashpointarchive.org/downloads",
      linkText: "Flashpoint’i indir"
    },
    {
      title: "Playlisti İçeri Aktar",
      text: 'Flashpoint üzerinden "Oyunlar" sekmesine geçin. Sol taraftaki listelerin en aşağısına inerek "Oynatma Listesi İçe Aktar"a tıklayın.',
      image: "assets/playlist-iceri-aktar.png",
      alt: "Flashpoint sol menüsünün altındaki Oynama Listesini İçe Aktar düğmesi işaretlenmiş",
      link: "",
      linkText: "",
      continuation: [
        {
          text: 'İndirdiğiniz oynatma listesine tıklayıp "Aç"a basarak oynatma listesini yükleyebilirsiniz.',
          image: "assets/playlist-dosya-secimi.png",
          alt: "Efsaneler Listesi.json dosyasının seçildiği pencere ve Aç düğmesi"
        }
      ]
    }
  ]
};
