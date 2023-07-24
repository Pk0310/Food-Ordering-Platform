import React from "react";
import AboutImg from "../Component/images/about.jpg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>About</span> Us
        </h1>
        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>
          <div className="content">
            <h3>What Makes Our Food Awesome</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ducimus magnam repellendus numquam, alias nostrum quae officiis
              porro iste incidunt ex animi magni cum, minus natus quod eos!
              Similique totam, perferendis, autem necessitatibus perspiciatis
              placeat quia eum nulla accusantium molestiae iste est repudiandae.
              Praesentium recusandae corporis veritatis ab perferendis eius
              tempora veniam non reiciendis quam laboriosam possimus totam
              ratione nihil saepe, et dignissimos? Numquam atque non dolorem
              aperiam? Animi accusantium consequatur excepturi nihil quod ipsa
              aliquam voluptatibus sapiente magni, quaerat vero obcaecati
              ducimus nobis sunt sit accusamus perferendis blanditiis totam.
            </p>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
