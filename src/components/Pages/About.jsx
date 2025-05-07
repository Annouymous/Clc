import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("about");
  return (
    <div>
      <div
        className=" text-white text-center py-5"
        style={{
          backgroundImage: "url('/assets/images/about-empanorm.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="display-5 fw-bold">{t("about.para")}</h1>
        <img
          src="/assets/images/logo5.png"
          alt="logo5"
          className="img-fluid mt-3"
          style={{ maxHeight: "80px" }}
        />
      </div>
      <div className="container my-5">
        {/* Banner Section */}
        {/* Card Content */}
        <div className="card shadow-lg p-4 mb-5">
          <div className="card-body">
            <h2 className="card-title text-center mb-4 text-primary">
              {t("about.title")}
            </h2>

            <div className="mb-4">
              <h5>{t("about.q1")}</h5>
              <p>{t("about.ans1")}</p>
            </div>

            <div className="mb-4">
              <h5>{t("about.q2")}</h5>
              <p>{t("about.ans2")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q3")}</h5>
              <p>{t("about.ans3")}</p>
              <ul>
                <li>{t("about.l1")}</li>
                <li>{t("about.l2")}</li>
                <li>{t("about.l3")}</li>
                <li>{t("about.l4")}</li>
                <li>{t("about.l5")}</li>
              </ul>
              <p>{t("about.p1")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q4")}</h5>
              <p>{t("about.ans4")}</p>
            </div>

            <div className="mb-4">
              <h5>{t("about.q5")}</h5>
              <p>{t("about.ans5")}</p>
              <p>{t("about.ans5.1")}</p>

              <h5>{t("about.q6")}</h5>
              <li>-{t("about.ans6")}</li>
              <li>{t("about.l6")}</li>
              <li>{t("about.l6_1")}</li>
              <li>{t("about.l6_2")}</li>
              <li>{t("about.l6_3")}</li>
            </div>

            <div className="mb-4">
              <h5>{t("about.q7")}</h5>
              <p>{t("about.ans7")}</p>
              <p>{t("about.ans7_1")}</p>
              <p>{t("about.ans7_2")}</p>
            </div>

            <div className="mb-4">
              <h5>{t("about.q8")}</h5>
              <p>{t("about.ans8")}</p>
            </div>

            {/* Image */}
            <div className="text-center mb-4">
              <img
                src="/assets/images/empanorm1.png"
                alt="empanorm1"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="mb-4">
              <h5>{t("about.q9")}</h5>
              <p>{t("about.ans9")}</p>
              <ul>
                <li>{t("about.9.1")}</li>
                <li>{t("about.9.2")}</li>
                <li>{t("about.9.3")}</li>
                <li>{t("about.9.4")}</li>
                <li>{t("about.9.5")}</li>
              </ul>
            </div>

            <div className="mb-4">
              <h5>{t("about.q10")}</h5>
              <p>{t("about.ans10")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q11")}</h5>
              <p>{t("about.ans11")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q12")}</h5>
              <p>{t("about.ans12")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.ans13")}</h5>
              <p>{t("about.ans13")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q14")}</h5>
              <p>{t("about.ans14")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q15")}</h5>
              <p>{t("about.ans15")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q16")}</h5>
              <p>{t("about.ans16")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q17")}</h5>
              <p>{t("about.ans17")}</p>
            </div>
            <div className="mb-4">
              <h5>{t("about.q18")}</h5>
              <p>{t("about.ans18")}</p>
            </div>

            {/* Image */}
            <div className="text-center mb-4">
              <img
                src="/assets/images/empanorm2.png"
                alt="empanorm2"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="mb-4">
              <h5>{t("about.reference")}</h5>
              <ul>
                <li>
                  <a
                    href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/204629s033lbl.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Prescribing information Empagliflozin. Available here
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ema.europa.eu/en/documents/product-information/Empagliflozin-epar-product-information_en.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Summary of Product characteristics. Available here
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nhs.uk/medicines/empagliflozin/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Empagliflozin NHS. Available here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
