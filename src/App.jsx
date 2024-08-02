import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <header>
          <div className="left">
            <img src="/public/logo/group 1.png" alt="logo" />
            <img src="/public/logo/Locus.png" alt="locus" />
          </div>
          <div className="links">
            <a href="#">Home</a>
            <a href="#">Contact</a>
            <a href="#">Location</a>
            <a href="#">About Us</a>
          </div>

          <button>Sign Up</button>
        </header>

        <section>
          <div className="section_top">
            <div className="left">
              <h1>Get the inspiration
              of interior design 
              here</h1>
              <p>architecture not only about engineering, it even 
              lands to art and aesthetics. With us, you will get 
              a residentical design with an extraordinary touch 
              of art.</p>
              <button>Let’s go</button>
            </div>
            <div className="right">
              <div className="img_block">
                <img src="/public/sectionsIMG/border.png" alt="" />
              </div>
              <div className="img_block_">
                <img src="/public/sectionsIMG/image 1.png" alt="" />
              </div>
            </div>
          </div>

          <div className="next_section">
            <div className="top">
              <h1>How it works</h1>
              <p>Spice up your space even simpler <br />
              than you think</p>
            </div>

            <div className="bottom">
              <div className="imgroom">
                <img src="/public/sectionsIMG/room1.png" alt="room1" />
              </div>
              <div className="txtroom">
                <p>We provide design and build 
                for commercial building, 
                interior and furniture to improve 
                the better life. </p>
                <h2>S E E  V I D E O</h2>
              </div>
            </div>
          </div>

          <div className="mid_section">
            <img src="/public/sectionsIMG/room2.png" alt="room2" />

            <div className="right">
              <h1>Our mission is to 
              deliver aesthetic visual 
              for your home</h1>
              <p>By applying bacis psychology principles, 
              we are going to explain how perception 
              works and how we can use this understanding 
              to maximise the space that we occupy in 
              our homes.</p>
            </div>
          </div>

          <div className="mid_section_bottom">
            <div className="top">
              <h1>Our project </h1>
              <p>Introducing our first official project</p>

              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>

          <div className="bootom">
              <div className="elem">
                <h1>Project Livingroom</h1>
                <p>A simple guide to create the perfect livingro-
                om for . Night Watc works beautifully in a wi-
                de gamut of arrangements.</p>
                <img src="/public/sectionsIMG/room3.png" alt="3" />
              </div>
              <div className="item">
                <img src="/public/sectionsIMG/room4.png" alt="4" />
                <h1>Project workspace</h1>
                <p>A simple guide to create the perfect livingro-
                om for . Night Watc works beautifully in a wi-
                de gamut of arrangements.</p>
              </div>
              <div className="elem">
                <h1>Library</h1>
                <p>A simple guide to create the perfect livingro-
                om for . Night Watc works beautifully in a wi-
                de gamut of arrangements.</p>
                <img src="/public/sectionsIMG/room5.png" alt="5" />
              </div>
            </div>

            <div className="imzo_txt">
              <h1>Testimonial</h1>
              <div className="imzo">
                <img src="/public/sectionsIMG/imzo.png" alt="1" />
                <img src="/public/sectionsIMG/imzo2.png" alt="2" />
                <img src="/public/sectionsIMG/imzo3.png" alt="3" />
                <img src="/public/sectionsIMG/imzo4.png" alt="4" />
              </div>
            </div>

            <div className="end_block">
              <img src="/public/sectionsIMG/nigga.png" alt="nigga" />

              <div className="rightPos">
                <div className="top">

                  <div className="item">
                    <h1>105</h1>
                    <h2>project done</h2>
                  </div>
                  <div className="item">
                    <h1>12</h1>
                    <h2>years of experience</h2>
                  </div>
                  <div className="item">
                    <h1>10+</h1>
                    <h2>big company partnership</h2>
                  </div>

                </div>

                <p>"Not able to tell you how happy I am with interior design. 
                Interior design has completely surpassed our expectations. 
                Interior design saved my business. Interior design is worth 
                much more than I paid."</p>
                <span>- Roscoe</span>
              </div>

              <div className="position">
                <img src="/public/sectionsIMG/possition.png" alt="" />
              </div>
            </div>

            <footer>
              <div className="bl">
              <div className="left_block">
                <h1>Contact Us</h1>
                <p>Have any questions? Want help <br />
                before getting started?</p>
              </div>
              <div className="line_"></div>
              <div className="line_"></div>
              </div>

              <div className="right_block">
                <p>Full name</p>
                <div className="line"></div>
                <p>Email address</p>
                <div className="line"></div>
                <p>Description</p>

                <button>Send now</button>
              </div>
            </footer>
        </section>
      </div>
    </>
  )
}

export default App
