import Image from "next/image";

const Landing = () => {
  return (
    <>
      <section id="intro  mt">
        <div className="container-lg">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5 text-center text-md-start">
              <h1>
                <div className="display-2">Black Belt</div>
                <div className="display-5 text-muted">Your Coding Skills</div>
              </h1>
              <p className="lead my-4 text-muted">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <a href="#pricing" className="btn btn-secondary btn-lg">
                Buy Now
              </a>

              {/* open sidebar / offcanvas  */}
              <a
                href="#sidebar"
                className="d-block mt-3"
                data-bs-toggle="offcanvas"
                role="button"
                aria-controls="sidebar"
              >
                Explore my other books
              </a>
            </div>
            <div className="col-md-5 text-center d-none d-md-block ">
              <img
                className="img-fluid"
                src="/ebook-cover.png"
                alt="ebook cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-light mt-5">
        <div className="container-lg">
          <div className="text-center">
            <h2>Pricing Plans</h2>
            <p className="lead text-muted">
              Choose a pricing plan to suit you.{" "}
            </p>
          </div>

          <div className="row my-5 align-items-center justify-content-center g-0 ">
            <div className="col-8 col-lg-4 col-xl-3">
              <div className="card border-0">
                <div className="card-body text-center py-4">
                  <h4 className="card-title">Starter Edition</h4>
                  <p className="lead card-subtitle">eBook download only</p>
                  <p className="display-5 my-4 text-primary fw-bold">$12.99</p>
                  <p className="card-text mx-5 text-muted d-lg-block">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum aut aliquam distinctio dolor ullam laudantium.
                  </p>
                  <a href="#" className="btn btn-outline-primary btn-lg mt-3">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-9 col-lg-4">
              <div className="card border-primary border-2">
                <div className="card-header text-center text-primary">
                  Most Popular
                </div>
                <div className="card-body text-center py-5">
                  <h4 className="card-title">Complete Edition</h4>
                  <p className="lead card-subtitle">
                    eBook download & all updates
                  </p>
                  <p className="display-4 my-4 text-primary fw-bold">$18.99</p>
                  <p className="card-text mx-5 text-muted d-lg-block">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum aut aliquam distinctio dolor ullam laudantium.
                  </p>
                  <a href="#" className="btn btn-outline-primary btn-lg mt-3">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-8 col-lg-4 col-xl-3">
              <div className="card border-0">
                <div className="card-body text-center py-4">
                  <h4 className="card-title">Ultimate Edition</h4>
                  <p className="lead card-subtitle">
                    download, updates & extras
                  </p>
                  <p className="display-5 my-4 text-primary fw-bold">$24.99</p>
                  <p className="card-text mx-5 text-muted d-lg-block">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cum aut aliquam distinctio dolor ullam laudantium.
                  </p>
                  <a href="#" className="btn btn-outline-primary btn-lg mt-3">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="topics">
        <div className="container-md">
          <div className="text-center">
            <h2>Inside the Book...</h2>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <div className="row my-5 g-5 justify-content-around align-items-center">
            <div className="col-6 col-lg-4">
              <img src="/kindle.png" alt="ebook" className="img-fluid" />
            </div>

            <div className="col-lg-6">
              {/* accordion */}

              <div className="accordion" id="chapters">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-1"
                      aria-expanded="true"
                      aria-controls="chapter-1"
                    >
                      Chapter - 1 Your First Web Page
                    </button>
                  </h2>
                  <div
                    id="chapter-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading-1"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error inventore quibusdam repellendus repudiandae
                        dolores voluptatum eum sequi ipsa? Dignissimos maxime
                        consequatur beatae asperiores laborum maiores,
                        reprehenderit pariatur officiis accusantium nemo.
                      </p>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Saepe, modi, porro aperiam dolorem obcaecati
                        corrupti tenetur amet ratione recusandae ducimus aut
                        dicta neque nisi commodi.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-2">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-2"
                      aria-expanded="false"
                      aria-controls="chapter-2"
                    >
                      Chapter - 2 Mastering CSS
                    </button>
                  </h2>
                  <div
                    id="chapter-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-2"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error inventore quibusdam repellendus repudiandae
                        dolores voluptatum eum sequi ipsa? Dignissimos maxime
                        consequatur beatae asperiores laborum maiores,
                        reprehenderit pariatur officiis accusantium nemo.
                      </p>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Saepe, modi, porro aperiam dolorem obcaecati
                        corrupti tenetur amet ratione recusandae ducimus aut
                        dicta neque nisi commodi.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-3">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#chapter-3"
                      aria-expanded="false"
                      aria-controls="chapter-3"
                    >
                      Chapter - 3 The Power of JavaScript
                    </button>
                  </h2>
                  <div
                    id="chapter-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-3"
                    data-bs-parent="#chapters"
                  >
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error inventore quibusdam repellendus repudiandae
                        dolores voluptatum eum sequi ipsa? Dignissimos maxime
                        consequatur beatae asperiores laborum maiores,
                        reprehenderit pariatur officiis accusantium nemo.
                      </p>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Saepe, modi, porro aperiam dolorem obcaecati
                        corrupti tenetur amet ratione recusandae ducimus aut
                        dicta neque nisi commodi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-altlight">
        <div className="container-lg">
          <div className="text-center">
            <h2>
              <i className="bi bi-stars text-altdark"></i>
              Book Reviews
            </h2>
            <p className="lead">What my students have said about the book...</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="list-group">
                <div className="list-group-item py-3">
                  <div className="pb-2 text-altprimary">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5 className="mb-1">This is the review text</h5>
                  <p className="mb-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    velit reprehenderit sit molestias maxime ipsum similique
                    nesciunt alias aut, pariatur non est magni laborum, et
                    dicta. Dolorum eveniet dolorem consequuntur?
                  </p>
                  <small>Reviewd by John Doe</small>
                </div>

                <div className="list-group-item py-3">
                  <div className="pb-2 text-altprimary">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5 className="mb-1">This is the review text</h5>
                  <p className="mb-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    velit reprehenderit sit molestias maxime ipsum similique
                    nesciunt alias aut, pariatur non est magni laborum, et
                    dicta. Dolorum eveniet dolorem consequuntur?
                  </p>
                  <small>Reviewd by John Doe</small>
                </div>

                <div className="list-group-item py-3">
                  <div className="pb-2 text-altprimary">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5 className="mb-1">This is the review text</h5>
                  <p className="mb-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    velit reprehenderit sit molestias maxime ipsum similique
                    nesciunt alias aut, pariatur non est magni laborum, et
                    dicta. Dolorum eveniet dolorem consequuntur?
                  </p>
                  <small>Reviewd by John Doe</small>
                </div>

                <div className="list-group-item py-3">
                  <div className="pb-2 text-altprimary">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5 className="mb-1">This is the review text</h5>
                  <p className="mb-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    velit reprehenderit sit molestias maxime ipsum similique
                    nesciunt alias aut, pariatur non est magni laborum, et
                    dicta. Dolorum eveniet dolorem consequuntur?
                  </p>
                  <small>Reviewd by John Doe</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container-lg">
          <div className="text-center">
            <h2>Get in Touch</h2>
            <p className="lead">
              Questions to ask? Fill out the form to contact me directly...
            </p>
          </div>

          <div className="row justify-content-center my-5">
            <div className="col-lg-6">
              <form>
                <label for="email" className="form-label">
                  Email address:
                </label>
                <div className="mb-4 input-group">
                  <span className="input-group-text">
                    <i class="bi bi-envelope-at-fill"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="email@domain.com"
                  />
                </div>

                <label for="text" className="form-label">
                  Your name:
                </label>
                <div className="mb-4 input-group">
                  <span className="input-group-text">
                    <i class="bi bi-person-circle"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Doe"
                  />
                </div>

                <label for="subject" className="form-label">
                  What is your queston about?
                </label>
                <div className="mb-4 input-group">
                  <span className="input-group-text">
                    <i class="bi bi-question-circle-fill"></i>
                  </span>
                  <select className="form-select" id="subject">
                    <option value="pricing">Pricing query</option>
                    <option value="content">Content query</option>
                    <option value="other">Other query</option>
                  </select>
                </div>

                <div className="form-floating mb-4 mt-4">
                  <textarea
                    id="query"
                    // style="height: 140px;"
                    className="form-control"
                  ></textarea>
                  <label for="query">Your query...</label>
                </div>

                <div className="mb-4 text-start">
                  <button type="submit" className="btn btn-secondary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light">
        <div class="container">
          <div class="text-center">
            <h2>Stay in the loop</h2>
            <p class="lead">Get the latest updates as they happen...</p>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-8 text-center">
              <p class="text-muted my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                expedita at nam amet cum atque voluptatum eligendi neque
                perferendis est tenetur officiis, eum excepturi sed maiores
                dignissimos totam corporis deleniti facere sequi autem? Magni
                earum illum pariatur, in soluta minus.
              </p>
              <button
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#reg-modal"
              >
                Register for Updates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* modal */}

      <div
        class="modal fade"
        id="reg-modal"
        tabindex="-1"
        aria-labelledby="modal-title"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modal-title">
                Get the Latest Updates
              </h5>
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-labelledby="close"
              ></button>
            </div>
            <div class="modal-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                inventore dicta, voluptas harum mollitia sunt qui velit cum esse
                non eligendi similique expedita praesentium debitis perspiciatis
                dolorum deleniti laborum corporis.
              </p>
              <label for="modal-email" class="form-label">
                Your email address:
              </label>
              <input
                type="email"
                class="form-control"
                id="modal-email"
                placeholder="e.g. email@domain.com"
              />
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>

      {/* offcanvas */}

      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="sidebar"
        aria-labelledby="sidebar-label"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="sidebar-label">
            My Other Books
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis aperiam dolorum repudiandae vel architecto officiis rem
            ipsam esse, eum provident explicabo. Mollitia, pariatur eaque.
            Ratione veritatis molestiae dignissimos voluptatum ducimus debitis
            atque doloremque consectetur eius, quia voluptas possimus aperiam
            repellendus.
          </p>
        </div>
      </div>
    </>
  );
};

export default Landing;
