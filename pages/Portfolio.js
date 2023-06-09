import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Image from "next/image"

const Portfolio = () => {
    return (
        <div>
            <Navbar />

            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="breadcrumb-hero">
                        <div className="container">
                            <div className="breadcrumb-hero">
                                <h2>Portolio</h2>
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
                            <li>Portolio</li>
                        </ol>
                    </div>
                </section>
                {/* End Breadcrumbs */}
                {/* ======= Portfolio Section ======= */}
                <section id="portfolio" className="portfolio">
                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-12 d-flex justify-content-center"
                                data-aos="fade-up"
                            >
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="filter-active">
                                        All
                                    </li>
                                    <li data-filter=".filter-app">App</li>
                                    <li data-filter=".filter-card">Card</li>
                                    <li data-filter=".filter-web">Web</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row portfolio-container" data-aos="fade-up">
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <Image
                                        src="/assets/img/portfolio/portfolio-1.jpg"
                                        className="img-fluid"
                                        alt="portfolio" width={415.99} height={311.99}/>

                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                        <div className="portfolio-links">
                                            <a
                                                href="/assets/img/portfolio/portfolio-1.jpg"
                                                data-gallery="portfolioGallery"
                                                className="portfolio-lightbox"
                                                title="App 1" width={415.99} height={311.99}
                                            >
                                                <i className="bx bx-plus" />
                                            </a>
                                            <a href="portfolio-details.html" title="More Details">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <Image
                                        src="/assets/img/portfolio/portfolio-2.jpg"
                                        className="img-fluid" width={415.99} height={311.99}
                                        alt="" />

                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                        <div className="portfolio-links">
                                            <a
                                                href="assets/img/portfolio/portfolio-2.jpg"
                                                data-gallery="portfolioGallery"
                                                className="portfolio-lightbox"
                                                title="Web 3"
                                            >
                                                <i className="bx bx-plus" />
                                            </a>
                                            <a href="portfolio-details.html" title="More Details">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <Image
                                        src="/assets/img/portfolio/portfolio-3.jpg"
                                        className="img-fluid" width={415.99} height={311.99}
                                        alt="" />

                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>App</p>
                                        <div className="portfolio-links">
                                            <a
                                                href="assets/img/portfolio/portfolio-3.jpg"
                                                data-gallery="portfolioGallery"
                                                className="portfolio-lightbox"
                                                title="App 2"
                                            >
                                                <i className="bx bx-plus" />
                                            </a>
                                            <a href="portfolio-details.html" title="More Details">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <Image
                                        src="/assets/img/portfolio/portfolio-4.jpg" width={415.99} height={311.99}
                                        className="img-fluid"
                                        alt="" />


                                    <div className="portfolio-info">
                                        <h4>Card 2</h4>
                                        <p>Card</p>
                                        <div className="portfolio-links">
                                            <a
                                                href="assets/img/portfolio/portfolio-4.jpg"
                                                data-gallery="portfolioGallery"
                                                className="portfolio-lightbox"
                                                title="Card 2"
                                            >
                                                <i className="bx bx-plus" />
                                            </a>
                                            <a href="portfolio-details.html" title="More Details">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <Image
                                        src="/assets/img/portfolio/portfolio-5.jpg" width={415.99} height={311.99}
                                        className="img-fluid"
                                        alt="" />

                                    <div className="portfolio-info">
                                        <h4>Web 2</h4>
                                        <p>Web</p>
                                        <div className="portfolio-links">
                                            <a
                                                href="assets/img/portfolio/portfolio-5.jpg"
                                                data-gallery="portfolioGallery"
                                                className="portfolio-lightbox"
                                                title="Web 2"
                                            >
                                                <i className="bx bx-plus" />
                                            </a>
                                            <a href="portfolio-details.html" title="More Details">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div className="portfolio-wrap">
                                    <Image
                                        src="/assets/img/portfolio/portfolio-6.jpg" width={415.99} height={311.99}
                                        className="img-fluid"
                                        alt="" />

                                    <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>App</p>
                                        <div className="portfolio-links">
                                            <a
                                                href="assets/img/portfolio/portfolio-6.jpg"
                                                data-gallery="portfolioGallery"
                                                className="portfolio-lightbox"
                                                title="App 3"
                                            >
                                                <i className="bx bx-plus" />
                                            </a>
                                            <a href="portfolio-details.html" title="More Details">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">

                                    <Image
                                        src="/assets/img/portfolio/portfolio-7.jpg" width={415.99} height={311.99}
                                        className="img-fluid"
                                        alt="" />
                                    <div className="portfolio-info">
                                        <h4>Card 1</h4>
                                        <p>Card</p>
                                        <div className="portfolio-links">
                                            <a
                                                href="assets/img/portfolio/portfolio-7.jpg"
                                                data-gallery="portfolioGallery"
                                                className="portfolio-lightbox"
                                                title="Card 1"
                                            >
                                                <i className="bx bx-plus" />
                                            </a>
                                            <a href="portfolio-details.html" title="More Details">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                <div className="portfolio-wrap">
                                    <Image
                                        src="/assets/img/portfolio/portfolio-8.jpg"
                                        className="img-fluid" width={415.99} height={311.99}
                                        alt="" />

                                    <div className="portfolio-info">
                                        <h4>Card 3</h4>
                                        <p>Card</p>
                                        <div className="portfolio-links">
                                            <a
                                                href="/assets/img/portfolio/portfolio-8.jpg" width={415.99} height={311.99}
                                                data-gallery="portfolioGallery"
                                                className="portfolio-lightbox"
                                                title="Card 3"
                                            >
                                                <i className="bx bx-plus" />
                                            </a>
                                            <a href="portfolio-details.html" title="More Details">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                <div className="portfolio-wrap">
                                    <Image
                                        src="/assets/img/portfolio/portfolio-9.jpg" width={415.99} height={311.99}
                                        className="img-fluid"
                                        alt="" />

                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                        <div className="portfolio-links">
                                            <a
                                                href="assets/img/portfolio/portfolio-9.jpg"
                                                data-gallery="portfolioGallery"
                                                className="portfolio-lightbox"
                                                title="Web 3"
                                            >
                                                <i className="bx bx-plus" />
                                            </a>
                                            <a href="portfolio-details.html" title="More Details">
                                                <i className="bx bx-link" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Portfolio Section */}
            </main>

            <Footer />
        </div>
    )
}

export default Portfolio