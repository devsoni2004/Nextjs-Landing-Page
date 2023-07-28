import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Image from 'next/image'
const Service = () => {
    return (
        <div>
            <Navbar />
            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="breadcrumb-hero">
                        <div className="container">
                            <div className="breadcrumb-hero">
                                <h2>Services</h2>
                                <p>
                                    Est dolorum ut non facere possimus quibusdam eligendi voluptatem.
                                    Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis
                                    ipsam aperiam consequatur laboriosam nemo harum praesentium.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <ol>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>Services</li>
                        </ol>
                    </div>
                </section>
                {/* End Breadcrumbs */}
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
                {/* ======= Features Section ======= */}
                <section id="features" className="features">
                    <div className="container">
                        <div className="section-title" data-aos="fade-up">
                            <h2>Features</h2>
                            <p>
                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                                aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                                quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                                fugiat sit in iste officiis commodi quidem hic quas.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                                <div
                                    className="card"
                                    style={{ backgroundImage: "url(assets/img/features-1.jpg)" }}
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <a href="">Our Mission</a>
                                        </h5>
                                        <p className="card-text">
                                            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                                            tempor ut labore et dolore magna aliqua.
                                        </p>
                                        <div className="read-more">
                                            <a href="#">
                                                <i className="bi bi-arrow-right" /> Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                                data-aos="fade-up"
                            >
                                <div
                                    className="card"
                                    style={{ backgroundImage: "url(assets/img/features-2.jpg)" }}
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <a href="">Our Plan</a>
                                        </h5>
                                        <p className="card-text">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            doloremque laudantium, totam rem.
                                        </p>
                                        <div className="read-more">
                                            <a href="#">
                                                <i className="bi bi-arrow-right" /> Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-md-6 d-flex align-items-stretch mt-4"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <div
                                    className="card"
                                    style={{ backgroundImage: "url(assets/img/features-3.jpg)" }}
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <a href="">Our Vision</a>
                                        </h5>
                                        <p className="card-text">
                                            Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit,
                                            sed quia magni dolores.
                                        </p>
                                        <div className="read-more">
                                            <a href="#">
                                                <i className="bi bi-arrow-right" /> Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-md-6 d-flex align-items-stretch mt-4"
                                data-aos="fade-up"
                                data-aos-delay={100}
                            >
                                <div
                                    className="card"
                                    style={{ backgroundImage: "url(assets/img/features-4.jpg)" }}
                                >
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <a href="">Our Care</a>
                                        </h5>
                                        <p className="card-text">
                                            Nostrum eum sed et autem dolorum perspiciatis. Magni porro
                                            quisquam laudantium voluptatem.
                                        </p>
                                        <div className="read-more">
                                            <a href="#">
                                                <i className="bi bi-arrow-right" /> Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Features Section */}
            </main>


            <Footer />
        </div>
    )
}

export default Service