import React from "react";
import vg from "../assets/2 (1).webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";
function Home() {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problem</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto animi
            dolorem ut harum enim ipsam error voluptatem eveniet expedita, dicta
            porro unde recusandae debitis blanditiis deleniti fugiat amet
            quisquam magnam? Atque reiciendis a quo?
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            cupiditate ipsam omnis corporis quidem quaerat officiis sequi
            aspernatur dolore quam similique labore consectetur aperiam hic
            incidunt animi culpa, harum sapiente. Asperiores quo magni aut,
            corrupti illum exercitationem. Qui impedi odit in, quam neque modi.
          </p>
        </div>
      </div>
      <div className="home4" id="brand">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay :"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay :"0.5s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay :"0.7s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay :"0.1.3s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
}

export default Home;
