import React from "react";
import "./about.css";
const about = () => {
  return (
    <section id="about">
      <h2>Hakkımda</h2>
      <h5>
        <p>
          Öğrenmeye açık, araştırmayı seven, uyumlu, yaratıcı, takım çalışmasına
          uygun ve hoşgörülü bir kişiliğe sahibim. <br /> Yazılımı seven ve bu
          alanda kendisine hedefler belirleyen, bu hedefler doğrultusunda
          disiplinli bir şekilde çalışarak ilerlemeyi kendisine görev edinmiş
          birisiyim.
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
