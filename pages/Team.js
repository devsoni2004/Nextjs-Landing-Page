import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Image from "next/image"

const Team = () => {
    return (
        <div>
            <Navbar />
            <main id="main">
                {/* ======= Breadcrumbs ======= */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="breadcrumb-hero">
                        <div className="container">
                            <div className="breadcrumb-hero">
                                <h2>Team</h2>
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
                            <li>Team</li>
                        </ol>
                    </div>
                </section>
                {/* End Breadcrumbs */}
                {/* ======= Team Section ======= */}
                <section id="team" className="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up">
                                    <div className="member-img">
                                        <Image
                                            src="/assets/img/team/team-1.jpg"
                                            className="img-fluid"
                                            alt="team" width={415.99} height={415.99}
                                        />

                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                        <p>
                                            Animi est delectus alias quam repellendus nihil nobis dolor. Est
                                            sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo
                                            qui. Eius nam deleniti ut omnis repudiandae perferendis qui.
                                            Neque non quidem sit sed pariatur quia modi ea occaecati.
                                            Incidunt ea non est corporis in.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="member-img">
                                        <Image
                                            src="/assets/img/team/team-2.jpg"
                                            className="img-fluid"
                                            alt="team" width={415.99} height={415.99}
                                        />

                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Product Manager</span>
                                        <p>
                                            Aspernatur iste esse aliquam enim et corporis. Molestiae
                                            voluptatem aut eligendi quis aut. Libero vel amet voluptatem eos
                                            rerum non doloremque. Dolores eum non.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="member-img">
                                        <Image
                                            src="/assets/img/team/team-3.jpg"
                                            className="img-fluid"
                                            alt="Team" width={415.99} height={415.99}
                                        />

                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                        <p>
                                            Ut enim possimus nihil cupiditate beatae. Veniam facere quae non
                                            qui necessitatibus rerum eos vero. Maxime sit sunt quo dolor
                                            autem est qui quaerat aliquid. Tenetur possimus qui enim.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up">
                                    <div className="member-img">
                                        <Image
                                            src="/assets/img/team/team-4.jpg"
                                            className="img-fluid"
                                            alt="tema" width={415.99} height={415.99}
                                        />

                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                        <p>
                                            Sint qui cupiditate. Asperiores fugit impedit aspernatur et
                                            mollitia. Molestiae qui placeat labore assumenda id qui nesciunt
                                            quo reprehenderit. Rem dolores similique quis soluta culpa enim
                                            quia ratione ea.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up" data-aos-delay={100}>
                                    <div className="member-img">
                                        <Image
                                            src="/assets/img/team/team-5.jpg"
                                            className="img-fluid"
                                            alt="team" width={415.99} height={415.99}
                                        />


                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Niall Katz</h4>
                                        <span>Marketing</span>
                                        <p>
                                            Aut ex esse explicabo quia harum ea accusamus excepturi.
                                            Temporibus at quia quisquam veritatis impedit. Porro laborum
                                            voluptatum sed necessitatibus a saepe. Deserunt laborum quasi
                                            consequatur voluptatum iusto sint qui fuga vel. Enim eveniet sed
                                            quibusdam rerum in. Non dicta architecto consequatur quo
                                            praesentium nesciunt.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="member-img">
                                        <Image
                                            src="/assets/img/team/team-6.jpg"
                                            className="img-fluid"
                                            alt="team" width={415.99} height={415.99}
                                        />

                                        <div className="social">
                                            <a href="">
                                                <i className="bi bi-twitter" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-facebook" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-instagram" />
                                            </a>
                                            <a href="">
                                                <i className="bi bi-linkedin" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Demi Lewis</h4>
                                        <span>Financing</span>
                                        <p>
                                            Amet labore numquam corrupti est. Nostrum amet voluptas
                                            consectetur dolor voluptatem architecto distinctio consequuntur
                                            eligendi. Quam impedit enim aut nesciunt aut dicta quam
                                            exercitationem. Reprehenderit exercitationem magnam. Ullam
                                            similique ut voluptas totam nobis porro accusamus nulla omnis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Team Section */}
            </main>

            <Footer />
        </div>
    )
}

export default Team