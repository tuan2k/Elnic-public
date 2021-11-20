<template>
  <div>
    <div class="col-md-9 col-md-push-3">
      <div class="tabs-block">
        <div class="tabulation-menu-wrapper text-center">
          <div class="tabulation-title simple-input">all</div>
          <ul class="tabulation-toggle">
            <li><a class="tab-menu active">all</a></li>
            <li><a class="tab-menu">top 10</a></li>
            <li><a class="tab-menu">gadgets</a></li>
            <li><a class="tab-menu">laptops</a></li>
            <li><a class="tab-menu">accessories</a></li>
          </ul>
        </div>
        <div class="empty-space col-xs-b30"/>
        <div class="tab-entry visible">
          <div class="row nopadding">
            
          
          <div class="col-sm-4" v-for="product in products" :key="product._id">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">{{ product.productName }}</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img :src="product.productImgs[0]" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#" v-on:click="addToCart(product)">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </div>
        <div class="tab-entry">
          <div class="row nopadding">
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-7.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>  
            </div>
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-9.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-11.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-entry">
          <div class="row nopadding">
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-8.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-10.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>  
            </div>
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-12.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-entry">
          <div class="row nopadding">
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-7.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>  
            </div>
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-8.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-11.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-12.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-entry">
          <div class="row nopadding">
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-10.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>  
            </div>
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-12.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="empty-space col-xs-b35 col-md-b70"/>

      <div
        class="swiper-container arrows-align-top"
        data-breakpoints="1"
        data-xs-slides="1"
        data-sm-slides="3"
        data-md-slides="4"
        data-lt-slides="4"
        data-slides-per-view="4">
        <div class="h4 swiper-title">our best categories</div>
        <div class="empty-space col-xs-b20"/>
        <div class="swiper-button-prev style-1"/>
        <div class="swiper-button-next style-1"/>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a class="product-shortcode style-2" href="#">
              <span class="preview"><img src="/static/img/product-13.png" alt="" /></span>
              <span class="description">
                <span class="h6 animate-to-green">smart watches</span>
                <span class="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
              </span>
            </a>
            <a class="product-shortcode style-2" href="#">
              <span class="preview"><img src="/static/img/product-17.png" alt="" /></span>
              <span class="description">
                <span class="h6 animate-to-green">smart watches</span>
                <span class="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
              </span>
            </a>
          </div>
          <div class="swiper-slide">
            <a class="product-shortcode style-2" href="#">
              <span class="preview"><img src="/static/img/product-14.png" alt="" /></span>
              <span class="description">
                <span class="h6 animate-to-green">smart watches</span>
                <span class="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
              </span>
            </a>
            <a class="product-shortcode style-2" href="#">
              <span class="preview"><img src="/static/img/product-18.png" alt="" /></span>
              <span class="description">
                <span class="h6 animate-to-green">smart watches</span>
                <span class="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
              </span>
            </a>
          </div>
          <div class="swiper-slide">
            <a class="product-shortcode style-2" href="#">
              <span class="preview"><img src="/static/img/product-15.png" alt="" /></span>
              <span class="description">
                <span class="h6 animate-to-green">smart watches</span>
                <span class="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
              </span>
            </a>
            <a class="product-shortcode style-2" href="#">
              <span class="preview"><img src="/static/img/product-19.png" alt="" /></span>
              <span class="description">
                <span class="h6 animate-to-green">smart watches</span>
                <span class="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
              </span>
            </a>
          </div>
          <div class="swiper-slide">
            <a class="product-shortcode style-2" href="#">
              <span class="preview"><img src="/static/img/product-16.png" alt="" /></span>
              <span class="description">
                <span class="h6 animate-to-green">smart watches</span>
                <span class="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
              </span>
            </a>
            <a class="product-shortcode style-2" href="#">
              <span class="preview"><img src="/static/img/product-20.png" alt="" /></span>
              <span class="description">
                <span class="h6 animate-to-green">smart watches</span>
                <span class="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
              </span>
            </a>
          </div>
          <div class="swiper-slide">
            <a class="product-shortcode style-2" href="#">
              <span class="preview"><img src="/static/img/product-15.png" alt="" /></span>
              <span class="description">
                <span class="h6 animate-to-green">smart watches</span>
                <span class="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
              </span>
            </a>
            <a class="product-shortcode style-2" href="#">
              <span class="preview"><img src="/static/img/product-16.png" alt="" /></span>
              <span class="description">
                <span class="h6 animate-to-green">smart watches</span>
                <span class="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
              </span>
            </a>
          </div>
          <div class="swiper-slide">
            <a class="product-shortcode style-2" href="#">
              <span class="preview"><img src="/static/img/product-13.png" alt="" /></span>
              <span class="description">
                <span class="h6 animate-to-green">smart watches</span>
                <span class="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
              </span>
            </a>
            <a class="product-shortcode style-2" href="#">
              <span class="preview"><img src="/static/img/product-14.png" alt="" /></span>
              <span class="description">
                <span class="h6 animate-to-green">smart watches</span>
                <span class="simple-article size-1 animate-to-fulltransparent">137 PRODUCTS</span>
              </span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination relative-pagination visible-xs"/>
      </div>

      <div class="empty-space col-xs-b35 col-md-b70"/>

      <div class="swiper-container arrows-align-top">
        <div class="h4 swiper-title">people choice</div>
        <div class="empty-space col-xs-b20"/>
        <div class="swiper-button-prev style-1"/>
        <div class="swiper-button-next style-1"/>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="banner-shortcode style-1">
              <div class="background" style="background-image: url(/img/thumbnail-10.jpg);"/>
              <div class="description valign-middle">
                <div class="valign-middle-content">
                  <div class="simple-article size-3 light fulltransparent">DON'T MISS!</div>
                  <div class="banner-title color">UP TO 70%</div>
                  <div class="h4 light">best android tv box</div>
                  <div class="empty-space col-xs-b25"/>
                  <a class="button size-1 style-3" href="#">
                    <span class="button-wrapper">
                      <span class="icon"><img src="/static/img/icon-4.png" alt=""></span>
                      <span class="text">learn more</span>
                    </span>
                  </a>
                </div>
                <div class="empty-space col-xs-b60 col-sm-b0"/>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="banner-shortcode style-1">
              <div class="background" style="background-image: url(/img/thumbnail-14.jpg);"/>
              <div class="description valign-middle">
                <div class="valign-middle-content">
                  <div class="simple-article size-3 light fulltransparent">DON'T MISS!</div>
                  <div class="banner-title color">UP TO 70%</div>
                  <div class="h4 light">best android tv box</div>
                  <div class="empty-space col-xs-b25"/>
                  <a class="button size-1 style-3" href="#">
                    <span class="button-wrapper">
                      <span class="icon"><img src="/static/img/icon-4.png" alt=""></span>
                      <span class="text">learn more</span>
                    </span>
                  </a>
                </div>
                <div class="empty-space col-xs-b60 col-sm-b0"/>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination visible-xs"/>
      </div>

      <div class="empty-space col-xs-b35 col-md-b70"/>

      <div
        class="swiper-container arrows-align-top"
        data-breakpoints="1"
        data-xs-slides="1"
        data-sm-slides="2"
        data-md-slides="2"
        data-lt-slides="2"
        data-slides-per-view="2">
        <div class="h4 swiper-title">hot proposes</div>
        <div class="empty-space col-xs-b20"/>
        <div class="swiper-button-prev style-1"/>
        <div class="swiper-button-next style-1"/>
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="product-shortcode style-3">
              <div class="simple-article size-5 grey col-xs-b20">BEST PRICE: <span class="color">$299.00</span></div>
              <div class="products-line col-xs-b25">
                <div class="line col-xs-b10"><div class="fill" style="width: 55%;"/></div>
                <div class="row">
                  <div class="col-xs-6 text-left">
                    <div class="simple-article size-1">AVAILABLE: <span class="grey">21</span></div>
                  </div>
                  <div class="col-xs-6 text-right">
                    <div class="simple-article size-1">SOLD: <span class="grey">14</span></div>
                  </div>
                </div>
              </div>
              <div class="swiper-container" data-loop="1" data-touch="0">
                <div class="swiper-button-prev style-1"/>
                <div class="swiper-button-next style-1"/>
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="/static/img/product-21.jpg" alt="" />
                  </div>
                  <div class="swiper-slide">
                    <img src="/static/img/product-23.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div class="empty-space col-xs-b20"/>
              <div class="h6 animate-to-green"><a href="#">smartphone VIBE S1</a></div>
              <div class="empty-space col-xs-b10"/>
              <div class="description">
                <div class="simple-article size-2">Penatibus nec consequat at In feugiat mole stie tortor a malesuada natoque penatibus</div>
              </div>
              <div class="empty-space col-xs-b20"/>
              <div class="countdown-wrapper">
                <div class="countdown" data-end="Sep,1,2017"/>
              </div>
              <div class="preview-buttons">
                <div class="buttons-wrapper">
                  <a class="button size-2 style-2" href="#">
                    <span class="button-wrapper">
                      <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                      <span class="text">Learn More</span>
                    </span>
                  </a>
                  <a class="button size-2 style-3" href="#">
                    <span class="button-wrapper">
                      <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                      <span class="text">Add To Cart</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="product-shortcode style-3">
              <div class="simple-article size-5 grey col-xs-b20">BEST PRICE: <span class="color">$299.00</span></div>
              <div class="products-line col-xs-b25">
                <div class="line col-xs-b10"><div class="fill" style="width: 55%;"/></div>
                <div class="row">
                  <div class="col-xs-6 text-left">
                    <div class="simple-article size-1">AVAILABLE: <span class="grey">21</span></div>
                  </div>
                  <div class="col-xs-6 text-right">
                    <div class="simple-article size-1">SOLD: <span class="grey">14</span></div>
                  </div>
                </div>
              </div>
              <div class="swiper-container" data-loop="1" data-touch="0">
                <div class="swiper-button-prev style-1"/>
                <div class="swiper-button-next style-1"/>
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="/static/img/product-22.jpg" alt="" />
                  </div>
                  <div class="swiper-slide">
                    <img src="/static/img/product-24.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div class="empty-space col-xs-b20"/>
              <div class="h6 animate-to-green"><a href="#">smartphone VIBE S1</a></div>
              <div class="empty-space col-xs-b10"/>
              <div class="description">
                <div class="simple-article size-2">Penatibus nec consequat at In feugiat mole stie tortor a malesuada natoque penatibus</div>
              </div>
              <div class="empty-space col-xs-b20"/>
              <div class="countdown-wrapper">
                <div class="countdown" data-end="Sep,1,2017"/>
              </div>
              <div class="preview-buttons">
                <div class="buttons-wrapper">
                  <a class="button size-2 style-2" href="#">
                    <span class="button-wrapper">
                      <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                      <span class="text">Learn More</span>
                    </span>
                  </a>
                  <a class="button size-2 style-3" href="#">
                    <span class="button-wrapper">
                      <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                      <span class="text">Add To Cart</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="product-shortcode style-3">
              <div class="simple-article size-5 grey col-xs-b20">BEST PRICE: <span class="color">$299.00</span></div>
              <div class="products-line col-xs-b25">
                <div class="line col-xs-b10"><div class="fill" style="width: 55%;"/></div>
                <div class="row">
                  <div class="col-xs-6 text-left">
                    <div class="simple-article size-1">AVAILABLE: <span class="grey">21</span></div>
                  </div>
                  <div class="col-xs-6 text-right">
                    <div class="simple-article size-1">SOLD: <span class="grey">14</span></div>
                  </div>
                </div>
              </div>
              <div class="swiper-container" data-loop="1" data-touch="0">
                <div class="swiper-button-prev style-1"/>
                <div class="swiper-button-next style-1"/>
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="/static/img/product-21.jpg" alt="" />
                  </div>
                  <div class="swiper-slide">
                    <img src="/static/img/product-23.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div class="empty-space col-xs-b20"/>
              <div class="h6 animate-to-green"><a href="#">smartphone VIBE S1</a></div>
              <div class="empty-space col-xs-b10"/>
              <div class="description">
                <div class="simple-article size-2">Penatibus nec consequat at In feugiat mole stie tortor a malesuada natoque penatibus</div>
              </div>
              <div class="empty-space col-xs-b20"/>
              <div class="countdown-wrapper">
                <div class="countdown" data-end="Sep,1,2017"/>
              </div>
              <div class="preview-buttons">
                <div class="buttons-wrapper">
                  <a class="button size-2 style-2" href="#">
                    <span class="button-wrapper">
                      <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                      <span class="text">Learn More</span>
                    </span>
                  </a>
                  <a class="button size-2 style-3" href="#">
                    <span class="button-wrapper">
                      <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                      <span class="text">Add To Cart</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="product-shortcode style-3">
              <div class="simple-article size-5 grey col-xs-b20">BEST PRICE: <span class="color">$299.00</span></div>
              <div class="products-line col-xs-b25">
                <div class="line col-xs-b10"><div class="fill" style="width: 55%;"/></div>
                <div class="row">
                  <div class="col-xs-6 text-left">
                    <div class="simple-article size-1">AVAILABLE: <span class="grey">21</span></div>
                  </div>
                  <div class="col-xs-6 text-right">
                    <div class="simple-article size-1">SOLD: <span class="grey">14</span></div>
                  </div>
                </div>
              </div>
              <div class="swiper-container" data-loop="1" data-touch="0">
                <div class="swiper-button-prev style-1"/>
                <div class="swiper-button-next style-1"/>
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="/static/img/product-22.jpg" alt="" />
                  </div>
                  <div class="swiper-slide">
                    <img src="/static/img/product-24.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div class="empty-space col-xs-b20"/>
              <div class="h6 animate-to-green"><a href="#">smartphone VIBE S1</a></div>
              <div class="empty-space col-xs-b10"/>
              <div class="description">
                <div class="simple-article size-2">Penatibus nec consequat at In feugiat mole stie tortor a malesuada natoque penatibus</div>
              </div>
              <div class="empty-space col-xs-b20"/>
              <div class="countdown-wrapper">
                <div class="countdown" data-end="Sep,1,2017"/>
              </div>
              <div class="preview-buttons">
                <div class="buttons-wrapper">
                  <a class="button size-2 style-2" href="#">
                    <span class="button-wrapper">
                      <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                      <span class="text">Learn More</span>
                    </span>
                  </a>
                  <a class="button size-2 style-3" href="#">
                    <span class="button-wrapper">
                      <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                      <span class="text">Add To Cart</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination relative-pagination visible-xs"/>
      </div>

      <div class="empty-space col-xs-b35 col-md-b70"/>

      <div class="tabs-block">
        <div class="row">
          <div class="col-lg-4 col-xs-b15 col-lg-b0">
            <div class="h4">best proposes</div>
          </div>
          <div class="col-lg-8">
            <div class="tabulation-menu-wrapper col-lg-text-right">
              <div class="tabulation-title simple-input">all</div>
              <ul class="tabulation-toggle">
                <li><a class="tab-menu active">all</a></li>
                <li><a class="tab-menu">featured</a></li>
                <li><a class="tab-menu">on sale</a></li>
                <li><a class="tab-menu">top rated</a></li>
              </ul>
            </div>
          </div>
        </div>
                            
        <div class="empty-space col-xs-b15 col-sm-b30"/>
        <div class="tab-entry visible">
          <div class="row nopadding">
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-25.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="color-selection">
                    <div class="entry active" style="color: #a7f050;"/>
                    <div class="entry" style="color: #50e3f0;"/>
                    <div class="entry" style="color: #eee;"/>
                  </div>
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>  
            </div>
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-26.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-27.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="color-selection">
                    <div class="entry active" style="color: #d0c45c;"/>
                    <div class="entry" style="color: #000;"/>
                    <div class="entry" style="color: #eee;"/>
                  </div>
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-entry">
          <div class="row nopadding">
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-26.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-27.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="color-selection">
                    <div class="entry active" style="color: #d0c45c;"/>
                    <div class="entry" style="color: #000;"/>
                    <div class="entry" style="color: #eee;"/>
                  </div>
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-entry">
          <div class="row nopadding">
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-25.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="color-selection">
                    <div class="entry active" style="color: #a7f050;"/>
                    <div class="entry" style="color: #50e3f0;"/>
                    <div class="entry" style="color: #eee;"/>
                  </div>
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>  
            </div>
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-26.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-entry">
          <div class="row nopadding">
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-25.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="color-selection">
                    <div class="entry active" style="color: #a7f050;"/>
                    <div class="entry" style="color: #50e3f0;"/>
                    <div class="entry" style="color: #eee;"/>
                  </div>
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>  
            </div>
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-27.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="color-selection">
                    <div class="entry active" style="color: #d0c45c;"/>
                    <div class="entry" style="color: #000;"/>
                    <div class="entry" style="color: #eee;"/>
                  </div>
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="product-shortcode style-1">
                <div class="title">
                  <div class="simple-article size-1 color col-xs-b5"><a href="#">SMART PHONES</a></div>
                  <div class="h6 animate-to-green"><a href="#">Smartphone vibe x2</a></div>
                </div>
                <div class="preview">
                  <img src="/static/img/product-26.jpg" alt="" />
                  <div class="preview-buttons valign-middle">
                    <div class="valign-middle-content">
                      <a class="button size-2 style-2" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-1.png" alt=""></span>
                          <span class="text">Learn More</span>
                        </span>
                      </a>
                      <a class="button size-2 style-3" href="#">
                        <span class="button-wrapper">
                          <span class="icon"><img src="/static/img/icon-3.png" alt=""></span>
                          <span class="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="price">
                  <div class="simple-article size-4 dark">$630.00</div>
                </div>
                <div class="description">
                  <div class="simple-article text size-2">Mollis nec consequat at In feugiat mole stie tortor a malesuada</div>
                  <div class="icons">
                    <a class="entry"><i class="fa fa-check" aria-hidden="true"/></a>
                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"/></a>
                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="empty-space col-xs-b35 col-md-b70"/>
    </div>
  </div>
</template>
<script type="text/javascript">
import axios from 'axios';
export default {
    created() {
        this.allProduct();
    },
    computed:{
        filtersearch(){
            return this.products.filter(product => {
                return product.productName.match(this.searchTerm);
            })
        }
    },
    data() {
        return {
            products: [],
            carts: [],
            searchTerm: ''
        }
    },
    methods: {
        allProduct(){
            axios.get('https://elnic-api.herokuapp.com/api/product')
                .then( ({data}) => {(this.products = data);})
                .catch()
        },
        addToCart(product) {
          this.$store.dispatch("addToCart", product);
        },
        deleteUser(id){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete('/api/user/'+id)
                        .then( () => {
                            this.users = this.users.filter(user => {
                                return user.id != id ;
                            })
                        })
                        .catch( () => {
                            this.$router.push({ name: 'category' })
                        })
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })

        }
    }

}
 </script>
