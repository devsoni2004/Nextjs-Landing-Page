import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar"
import Footer  from "./components/Footer"
import Head from "next/head";
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 
  return (
   <>

   {/* Site Title */}
   <Head>
        <title>Next Js Forneted Dev..</title>
      </Head>
  {/* ======= Header ======= */}
  <Navbar />
  {/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero">
    <div className="hero-container" data-aos="fade-up">
      <h1>Welcome to Tech Dev</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <a href="#about" className="btn-get-started scrollto">
        Get Started
      </a>
    </div>
  </section>
  {/* End Hero */}
  <main id="main">
    {/* ======= About Section ======= */}
    <section id="about" className="about">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-11">
            <div className="row justify-content-end">
              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box py-5">
                  <i className="bi bi-emoji-smile" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={65}
                    className="purecounter"
                  >
                    0
                  </span>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box py-5">
                  <i className="bi bi-journal-richtext" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={85}
                    className="purecounter"
                  >
                    0
                  </span>
                  <p>Projects</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box pb-5 pt-0 pt-lg-5">
                  <i className="bi bi-clock" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={27}
                    className="purecounter"
                  >
                    0
                  </span>
                  <p>Years of experience</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box pb-5 pt-0 pt-lg-5">
                  <i className="bi bi-award" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={22}
                    className="purecounter"
                  >
                    0
                  </span>
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 video-box align-self-baseline position-relative">
            
          <Image
                                    src="/about.jpg" className="img-fluid" alt="logo" width="634" height="477"
                                >

                                </Image>
            <a
              href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
              className="glightbox play-btn mb-4"
            />
          </div>
          <div className="col-lg-6 pt-3 pt-lg-0 content">
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <i className="bx bx-check-double" /> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </li>
              <li>
                <i className="bx bx-check-double" /> Duis aute irure dolor in
                reprehenderit in voluptate velit.
              </li>
              <li>
                <i className="bx bx-check-double" /> Voluptate repellendus
                pariatur reprehenderit corporis sint.
              </li>
              <li>
                <i className="bx bx-check-double" /> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate trideta storacalaperda mastiro dolore
                eu fugiat nulla pariatur.
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* End About Section */}
    {/* ======= Cta Section ======= */}
    <section id="cta" className="cta">
      <div className="container" data-aos="fade-in">
        <div className="text-center">
          <h3>Call To Action</h3>
          <p>
            {" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <Link  href="./Contact" className="cta-btn"> Call To Action</Link>
        
        
           
           
        </div>
      </div>
    </section>
    {/* End Cta Section */}
    {/* ======= Services Section ======= */}
    <section id="services" className="services ">
      <div className="container">
        <div className="section-title pt-5" data-aos="fade-up">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="icon-box" data-aos="fade-up">
              <div className="icon">
              <Image
                                            src="/assets/img/reactjs.png"
                                            alt="Landscape picture" width={64} height={64}
                                        />
              </div>
              <h4 className="title">
                <a href="">React Js</a>
              </h4>
              <p className="description">
              React is a free and open-source front-end JavaScript library for building user interfaces based on components.
               It is maintained by Meta and a community of individual developers and companies.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="icon-box" data-aos="fade-up">
              <div className="icon">
              <Image
                                            src="/assets/img/nextjs.png"
                                            alt="Landscape picture" width={64} height={64}
                                        />
              </div>
              <h4 className="title">
                <a href="">Next Js</a>
              </h4>
              <p className="description">
              Next.js is an open-source web development framework created by the private company
               Vercel providing React-based web applications with server-side rendering and static website generation.
              </p>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="icon-box">
              <div className="icon">
              <Image
                                            src="/aassets/img/laravel.png"
                                            alt="Landscape picture" width={64} height={64}
                                        />

              </div>
              <h4 className="title">
                <a href="">Php FrameWork ( Laravel )</a>
              </h4>
              <p className="description">
              Laravel is a free and open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications 
              following the model–view–controller architectural pattern and based on Symfony
              </p>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="icon-box">
              <div className="icon">
              <Image
                                            src="/assets/img/mysql.png"
                                            alt="Landscape picture" width={64} height={64}
                                        />
              </div>
              <h4 className="title">
                <a href="">DataBase ( Msql)</a>
              </h4>
              <p className="description">
              MySQL is an open-source relational database management system. Its name is a combination of 
              My, the name of co-founder Michael Widenius daughter My, and SQL, the acronym for Structured Query Language.
              </p>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon-box">
              <div className="icon">
              <Image
                                            src="/assets/img/apple-touch-icon.png"
                                            alt="Landscape picture" width={64} height={64}
                                        />
              </div>
              <h4 className="title">
                <a href="">Bootstrap</a>
              </h4>
              <p className="description">
              Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, 
              forms, buttons, navigation, and other interface components.
              </p>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon-box">
              <div className="icon">
              <Image
                                            src="/assets/img/html.png"
                                            alt="Landscape picture" width={64} height={64}
                                        />
              </div>
              <h4 className="title">
                <a href="">Html & Css</a>
              </h4>
              <p className="description">
              The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.
               It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section */}
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  <Footer />
  {/* End Footer */}
</>

  )
}
