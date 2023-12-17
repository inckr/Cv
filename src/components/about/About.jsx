import React from "react";
import "./about.css";
const about = () => {
  return (
    <section id="about">
      <h2>Hakkımda</h2>
      <h5>
        <p>Merhaba! Ben Ahmet, yazılım geliştirmeye bağlılığı ve sürekli öğrenmeye açık kişiliği olan bir yazılım geliştiriciyim.
          Öğrenmeye açık, araştırmayı seven, uyumlu, yaratıcı, takım çalışmasına
          uygun ve hoşgörülü bir kişiliğe sahibim. <br /> Yazılımı seven ve bu
          alanda kendisine hedefler belirleyen, bu hedefler doğrultusunda
          disiplinli bir şekilde çalışarak ilerlemeyi kendisine görev edinmiş
          biriyim. <br />
Şu anda React ve .NET teknolojileri üzerinde kendimi geliştiriyorum.
 Kod yazmaktaki tutkum, her projeye farklı bir bakış açısı getirerek çözüm odaklı bir yaklaşım benimsememe olanak sağlıyor. <br /> İşimi sadece bir görev olarak değil, aynı zamanda sürekli öğrenme ve gelişme fırsatı olarak da görüyorum.
 Takım içinde etkili iletişim ve işbirliği kurabilme yeteneğim, projelerin başarılı bir şekilde tamamlanmasına katkı sağlamamı mümkün kılıyor. Ekip içinde uyum sağlamak ve ortak hedeflere ulaşmak için çaba göstermek benim için ön plandadır.
 Yeniliklere ve teknolojik gelişmelere olan merakım, sektördeki güncel trendleri takip etmeme ve bu bilgileri projelere entegre etmeme yardımcı oluyor. 
        </p>
      </h5>
      <div className="container about__container">
        <div className="about__me"></div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card"></article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
