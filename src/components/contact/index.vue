<template>
  <div>
    <div
      class="block-entry fixed-background"
      style="background-image: url(../../../static/images/elnic/background-26.jpg);"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <div class="cell-view simple-banner-height text-center">
              <div class="empty-space col-xs-b35 col-sm-b70" />
              <h1 class="h1">contact us</h1>
              <div class="title-underline center"><span /></div>
              <div class="simple-article light transparent size-4">
                Very nice to talk to you!
              </div>
              <div class="empty-space col-xs-b35 col-sm-b70" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="empty-space col-xs-b35 col-md-b70" />

    <div class="container">
      <div class="text-center">
        <div class="simple-article size-3 grey uppercase col-xs-b5">
          our contacts
        </div>
        <div class="h2">we ready for your questions</div>
        <div class="title-underline center"><span /></div>
      </div>
    </div>

    <div class="empty-space col-sm-b15 col-md-b50" />

    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="icon-description-shortcode style-1">
            <img
              class="icon"
              src="../../../static/images/elnic/icon-23.png"
              alt=""
            />
            <div class="title h6">phone</div>
            <div
              class="description simple-article size-2"
              style="line-height: 26px;"
            >
              <a href="tel:+84898325907">(+84) 898325907</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="icon-description-shortcode style-1">
            <img
              class="icon"
              src="../../../static/images/elnic/icon-28.png"
              alt=""
            />
            <div class="title h6">email</div>
            <div class="description simple-article size-2">
              <a href="mailto:elnic@business.com">elnic@business.com</a>
            </div>
          </div>
        </div>
        <!-- <div class="col-sm-3">
          <div class="icon-description-shortcode style-1">
            <img
              class="icon"
              src="../../../static/images/elnic/icon-26.png"
              alt=""
            />
            <div class="title h6">Follow us</div>
            <div class="follow light">
              <a class="entry" href="#"><i class="fa fa-facebook"/></a>
              <a class="entry" href="#"><i class="fa fa-twitter"/></a>
              <a class="entry" href="#"><i class="fa fa-linkedin"/></a>
              <a class="entry" href="#"><i class="fa fa-google-plus"/></a>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <div class="empty-space col-xs-b25 col-sm-b50" />

    <div class="container">
      <h4 class="h4 text-center col-xs-b25">have a questions?</h4>
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <form class="contact-form">
            <div class="row m5">
              <div class="col-sm-6">
                <input
                  class="simple-input col-xs-b20"
                  type="text"
                  value=""
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div class="col-sm-6">
                <input
                  class="simple-input col-xs-b20"
                  type="text"
                  value=""
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div class="col-sm-6">
                <input
                  class="simple-input col-xs-b20"
                  type="text"
                  value=""
                  placeholder="Phone"
                  name="phone"
                />
              </div>
              <div class="col-sm-6">
                <input
                  class="simple-input col-xs-b20"
                  type="text"
                  value=""
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div class="col-sm-12">
                <textarea
                  class="simple-input col-xs-b20"
                  placeholder="Your message"
                  name="message"
                />
              </div>
              <div class="col-sm-12">
                <div class="text-center">
                  <div class="button size-2 style-3">
                    <span class="button-wrapper">
                      <span class="icon"
                        ><img
                          src="../../../static/images/elnic/icon-4.png"
                          alt=""
                      /></span>
                      <span class="text">send message</span>
                    </span>
                    <input type="submit" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact"
  // OR
};
</script>
