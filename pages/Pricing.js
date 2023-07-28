import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


const Pricing = () => {
  return (
    <div>
        <Navbar />
        <main id="main">
  {/* ======= Breadcrumbs ======= */}
  <section id="breadcrumbs" className="breadcrumbs">
    <div className="breadcrumb-hero">
      <div className="container">
        <div className="breadcrumb-hero">
          <h2>Pricing</h2>
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
        <li>Pricing</li>
      </ol>
    </div>
  </section>
  {/* End Breadcrumbs */}
  {/* ======= Pricing Section ======= */}
  <section id="pricing" className="pricing">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="box" data-aos="fade-up">
            <h3>Free</h3>
            <h4>
              <sup>$</sup>0<span> / month</span>
            </h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li className="na">Pharetra massa</li>
              <li className="na">Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
          <div className="box featured" data-aos="fade-up" data-aos-delay={100}>
            <h3>Business</h3>
            <h4>
              <sup>$</sup>19<span> / month</span>
            </h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li className="na">Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
          <div className="box" data-aos="fade-up" data-aos-delay={200}>
            <h3>Developer</h3>
            <h4>
              <sup>$</sup>29<span> / month</span>
            </h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
          <div className="box" data-aos="fade-up" data-aos-delay={300}>
            <span className="advanced">Advanced</span>
            <h3>Ultimate</h3>
            <h4>
              <sup>$</sup>49<span> / month</span>
            </h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
            <div className="btn-wrap">
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Pricing Section */}
</main>

<Footer />
    </div>
  )
}

export default Pricing