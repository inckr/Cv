import React from "react";
import './services.css'
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <section id="services">
      <h2>Servisler</h2>

      <div className="container servisler__container">
        <div className="design__container">
        <div className="servisler__title">
        <h3>UI Tasarımları</h3>
        </div>
          
          <article className="servisler__details">
            <FaCheck className="servisler__details-icon" />
            <h5>
              <p>Gallery</p>
            </h5>
          </article>
          <article className="servisler__details">
            <FaCheck className="servisler__details-icon" />
            <h5>
              <p>User Login</p>
            </h5>
          </article>
          <article className="servisler__details">
            <FaCheck className="servisler__details-icon" />
            <h5>
              <p>Notes</p>
            </h5>
          </article>
          <article className="servisler__details">
            <FaCheck className="servisler__details-icon" />
            <h5>
              <p>VKI (BMI)</p>
            </h5>
          </article>
        </div>
        <div className="development__container">
        <div className="servisler__title">
        <h3>Web Geliştime</h3>
        </div>
          <article className="servisler__details">
            <FaCheck className="servisler__details-icon" />
            <h5>
              <p>Zeroni</p>
            </h5>
          </article>
          <article className="servisler__details">
            <FaCheck className="servisler__details-icon" />
            <h5>
            <p>Öğrenci Sistemi</p>
            </h5>
          </article>
          {/* <article className="servisler__details">
            <FaCheck className="servisler__details-icon" />
            <h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                quisquam!
              </p>
            </h5>
          </article> */}
          <article className="servisler__details">
            <FaCheck className="servisler__details-icon" />
            <h5>
              <p>Yazar Sayfası</p>
            </h5>
          </article>
          <article className="servisler__details">
            <FaCheck className="servisler__details-icon" />
            <h5>
              <p>Blog Sayfası</p>
            </h5>
          </article>
        </div>
        {/* <div className="content__container">
        <div className="servisler__title">
        <h3>Yapılan Projeler</h3>
        </div>
          <article className="servisler__details">
            <FaCheck className="servisler__details-icon" />
            <h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                quisquam!
              </p>
            </h5>
          </article>
          <article className="servisler__details">
            <FaCheck className="servisler__details-icon" />
            <h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                quisquam!
              </p>
            </h5>
          </article>
          <article className="servisler__details">
            <FaCheck className="servisler__details-icon" />
            <h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                quisquam!
              </p>
            </h5>
          </article>
          <article className="servisler__details">
            <FaCheck className="servisler__details-icon" />
            <h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                quisquam!
              </p>
            </h5>
          </article>
          <article className="servisler__details">
            <FaCheck className="servisler__details-icon" />
            <h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                quisquam!
              </p>
            </h5>
          </article>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
