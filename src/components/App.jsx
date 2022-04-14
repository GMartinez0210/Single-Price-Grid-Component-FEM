import React from "react";
import info from "../info";
import Section from "./Section";

const [section1, section2, section3] = info

function App() {
  return (
    <div className="container  main-container">
      <main className="row">
        <Section 
          key={"s0"}
          sectionClass={"col col-12 section px-5 py-4"}
          titleClass={"title-1 mt-3"}
          title={section1.title}
          detailClass={"detail-1"}
          detail={section1.detail}
          contentClass={"content-1"}
          content={section1.content}
        />
        <Section 
          key={"s1"}
          sectionClass={"col col-md-6 col-sm-12 section-2 px-5 py-4"}
          titleClass={"title-2 mt-3"}
          title={section2.title}
          detailClass={"detail-2"}
          detail={[
            <span className="me-3 price-2">{section2.detail.price}</span>,
            <span className="">{section2.detail.text}</span>
          ]}
          contentClass={"content-2 mt-3"}
          content={section2.content}
          buttonClass={"btn btn-lg btn-green mt-3"}
          button={section2.button}
        />
        <Section 
          key={"s2"}
          sectionClass={"col col-md-6 col-sm-12 section-3 px-5 py-4"}
          titleClass={"title-3 mt-3"}
          title={section3.title}
          detailClass={"detail-3"}
          detail={section3.detail}
          contentClass={"content-3"}
          content={section3.content.map((item, index) => {
            return (
              <li key={"i"+index}>{item}</li>
            )
          })}
        />
      </main>
    </div>
  );
}

export default App;
