<template>
    <div>
        <header>
            <div class="header-top">
                <div class="content-margins">
                    <div class="row">
                        <div class="col-md-5 hidden-xs hidden-sm">
                            <div class="entry"><b>contact us:</b> <a href="tel:+84898325907">(+84) 898325907</a></div>
                            <div class="entry"><b>email:</b> <a href="mailto:elnic@business.com">elnic@business.com</a></div>
                        </div>
                        <div class="col-md-7 col-md-text-right">
                            <span v-if="this.username === 0 ">
                            <div class="entry"><router-link to="/login" class="open-popup" data-rel="1"><b>login</b>
                            </router-link>&nbsp; or &nbsp;<router-link to="/register" class="open-popup" data-rel="2"><b>register</b></router-link></div>
                            </span>
                            <span v-else>
                            <div class="entry"><p to="/login" class="open-popup" data-rel="1">
                            Welcome <b>{{ this.username }}</b>
                            </p></div>
                            </span> 
                            <div class="entry hidden-xs hidden-sm"><a href="#"><img  src="../../../static/icons/heart-thin.svg" width="12px" height="12px" alt="heart" /></a></div>
                            <div class="entry hidden-xs hidden-sm cart">
                                <router-link to="/cart">
                                    <b class="hidden-xs">Your bag</b>
                                    <span class="cart-icon">
                                        <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                                        <span class="cart-label">{{count}}</span>
                                    </span>
                                </router-link>
                                <div class="cart-toggle hidden-xs hidden-sm">
                                    <div class="cart-overflow" v-for="(cart,index) in carts" :key="cart._id">
                                        <div class="cart-entry clearfix">
                                            <a class="cart-entry-thumbnail" href="#"><img id="heo_image" :src="cart.productThambnail" alt="" /></a>
                                            <div class="cart-entry-description">
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <div class="h6"><a href="#">{{ cart.productName }}</a></div>
                                                            <div class="simple-article size-1" v-for="(qt,i) in quantity" :key="qt[index]">
                                                                <span v-if="i === index">QUANTITY: {{ qt }}</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="simple-article size-3 grey">{{ cart.discountPrice}}</div>
                                                            <div v-for="(qt,ind) in quantity" :key="qt[index]" class="simple-article size-1">
                                                            <span v-if="ind === index ">TOTAL: {{ cart.discountPrice*qt }}</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="cart-color" style="background: #eee;"></div>
                                                        </td>
                                                        <td>
                                                            <div class="button-close"></div>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="empty-space col-xs-b40"></div>
                                    <div class="row">
                                        <div class="col-xs-6 text-right">
                                            <router-link class="button size-2 style-3" to="/checkout">
                                                <span class="button-wrapper">
                                                    <span class="icon"><img src="img/icon-4.png" alt=""></span>
                                                    <span class="text">proceed to checkout</span>
                                                </span>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hamburger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom">
                <div class="content-margins">
                    <div class="row">
                        <div class="col-xs-3 col-sm-1">
                            <a id="logo" href="#"><img src="img/logo-2.png" alt="" /></a>  
                        </div>
                        <div class="col-xs-9 col-sm-11 text-right">
                            <div class="nav-wrapper">
                                <div class="nav-close-layer"></div>
                                <nav>
                                    <ul>
                                        <li class="active">
                                            <router-link to="/">Home</router-link>
                                            <div class="menu-toggle"></div>
                                            <ul>
                                                <li class="active"><a href="#">Homepage 1</a></li>
                                                <li><a href="index2.html">Homepage 2</a></li>
                                                <li><a href="index3.html">Homepage 3</a></li>
                                                <li><a href="index4.html">Homepage 4</a></li>
                                                <li><a href="index5.html">Homepage 5</a></li>
                                                <li><a href="index6.html">Homepage 6</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" @click="onClickAboutUs">about us</a>
                                        </li>
                                        <li class="megamenu-wrapper">
                                            <a href="products1.html">products</a>
                                            <div class="menu-toggle"></div>
                                            <div class="megamenu">
                                                <div class="links">
                                                    <a class="active" href="products1.html">Products Landing 1</a>
                                                    <a href="products2.html">Products Landing 2</a>
                                                    <a href="products3.html">Products Landing 3</a>
                                                    <a href="product.html">Product Detail</a>
                                                </div>
                                                <div class="content">
                                                    <div class="row nopadding">
                                                        <div class="col-xs-6">
                                                            <div class="product-shortcode style-5">
                                                                <div class="product-label green">best price</div>
                                                                <div class="icons">
                                                                    <a class="entry"><i class="fa fa-check" aria-hidden="true"></i></a>
                                                                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                                                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                                                                </div>
                                                                <div class="preview">
                                                                    <div class="swiper-container" data-loop="1">
                                                                        <div class="swiper-button-prev style-1"></div>
                                                                        <div class="swiper-button-next style-1"></div>
                                                                        <div class="swiper-wrapper">
                                                                            <div class="swiper-slide">
                                                                                <img src="img/product-59.jpg" alt="" />
                                                                            </div>
                                                                            <div class="swiper-slide">
                                                                                <img src="img/product-61.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div> 
                                                                </div>
                                                                <div class="content-animate">
                                                                    <div class="title">
                                                                        <div class="shortcode-rate-wrapper">
                                                                            <div class="rate-wrapper align-inline">
                                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div class="h6 animate-to-green"><a href="product.html">modern beat nine</a></div>
                                                                    </div>
                                                                    <div class="description">
                                                                        <div class="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada</div>
                                                                    </div>
                                                                    <div class="price">
                                                                        <div class="simple-article size-4 dark">$630.00</div>
                                                                    </div>
                                                                </div>
                                                                <div class="preview-buttons">
                                                                    <div class="buttons-wrapper">
                                                                        <a class="button size-2 style-2" href="product.html">
                                                                            <span class="button-wrapper">
                                                                                <span class="icon"><img src="img/icon-1.png" alt=""></span>
                                                                                <span class="text">Learn More</span>
                                                                            </span>
                                                                        </a>
                                                                        <a class="button size-2 style-3" href="#">
                                                                            <span class="button-wrapper">
                                                                                <span class="icon"><img src="img/icon-3.png" alt=""></span>
                                                                                <span class="text">Add To Cart</span>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-6">
                                                            <div class="product-shortcode style-5">
                                                                <div class="product-label green">best price</div>
                                                                <div class="icons">
                                                                    <a class="entry"><i class="fa fa-check" aria-hidden="true"></i></a>
                                                                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                                                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                                                                </div>
                                                                <div class="preview">
                                                                    <div class="swiper-container" data-loop="1">
                                                                        <div class="swiper-button-prev style-1"></div>
                                                                        <div class="swiper-button-next style-1"></div>
                                                                        <div class="swiper-wrapper">
                                                                            <div class="swiper-slide">
                                                                                <img src="img/product-60.jpg" alt="" />
                                                                            </div>
                                                                            <div class="swiper-slide">
                                                                                <img src="img/product-61.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div> 
                                                                </div>
                                                                <div class="content-animate">
                                                                    <div class="title">
                                                                        <div class="shortcode-rate-wrapper">
                                                                            <div class="rate-wrapper align-inline">
                                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div class="h6 animate-to-green"><a href="product.html">modern beat nine</a></div>
                                                                    </div>
                                                                    <div class="description">
                                                                        <div class="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada</div>
                                                                    </div>
                                                                    <div class="price">
                                                                        <div class="simple-article size-4 dark">$630.00</div>
                                                                    </div>
                                                                </div>
                                                                <div class="preview-buttons">
                                                                    <div class="buttons-wrapper">
                                                                        <a class="button size-2 style-2" href="product.html">
                                                                            <span class="button-wrapper">
                                                                                <span class="icon"><img src="img/icon-1.png" alt=""></span>
                                                                                <span class="text">Learn More</span>
                                                                            </span>
                                                                        </a>
                                                                        <a class="button size-2 style-3" href="#">
                                                                            <span class="button-wrapper">
                                                                                <span class="icon"><img src="img/icon-3.png" alt=""></span>
                                                                                <span class="text">Add To Cart</span>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>  
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="services1.html">Services</a>
                                        </li>
                                        <li>
                                            <a href="blog3.html">blog</a>
                                            <div class="menu-toggle"></div>
                                            <ul>
                                                <li>
                                                    <a href="blog3.html">Blog Landing Pages</a>
                                                    <div class="menu-toggle"></div>
                                                    <ul>
                                                        <li><a href="blog3.html">Blog Landing 1</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="blogdetail1.html">Blog Detail Pages</a>
                                                    <div class="menu-toggle"></div>
                                                    <ul>
                                                        <li><a href="blogdetail1.html">Blog Detail 1</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="gallery1.html">gallery</a>
                                            <div class="menu-toggle"></div>
                                            <ul>
                                                <li><a href="gallery1.html">Gallery 1</a></li>
                                                <li><a href="gallery2.html">Gallery 2</a></li>
                                            </ul>
                                        </li>
                                        <li class="megamenu-wrapper">
                                            <a href="#">Pages</a>
                                            <div class="menu-toggle"></div>
                                            <div class="megamenu">
                                                <div class="links">
                                                    <a class="active" href="checkout1.html">Checkout 1</a>
                                                    <a href="checkout2.html">Checkout 2</a>
                                                    <a href="cart.html">Cart</a>
                                                    <a href="elements.html">Elements</a>
                                                </div>
                                                <div class="content">
                                                    <div class="row nopadding">
                                                        <div class="col-xs-6">
                                                            <div class="product-shortcode style-5">
                                                                <div class="product-label green">best price</div>
                                                                <div class="icons">
                                                                    <a class="entry"><i class="fa fa-check" aria-hidden="true"></i></a>
                                                                    <a class="entry open-popup" data-rel="3"><i class="fa fa-eye" aria-hidden="true"></i></a>
                                                                    <a class="entry"><i class="fa fa-heart-o" aria-hidden="true"></i></a>
                                                                </div>
                                                                <div class="preview">
                                                                    <div class="swiper-container" data-loop="1">
                                                                        <div class="swiper-button-prev style-1"></div>
                                                                        <div class="swiper-button-next style-1"></div>
                                                                        <div class="swiper-wrapper">
                                                                            <div class="swiper-slide">
                                                                                <img src="img/product-61.jpg" alt="" />
                                                                            </div>
                                                                            <div class="swiper-slide">
                                                                                <img src="img/product-59.jpg" alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div> 
                                                                </div>
                                                                <div class="content-animate">
                                                                    <div class="title">
                                                                        <div class="shortcode-rate-wrapper">
                                                                            <div class="rate-wrapper align-inline">
                                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                                <i class="fa fa-star-o" aria-hidden="true"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div class="h6 animate-to-green"><a href="product.html">modern beat nine</a></div>
                                                                    </div>
                                                                    <div class="description">
                                                                        <div class="simple-article text size-2">Mollis nec consequat at In feugiat molestie tortor a malesuada</div>
                                                                    </div>
                                                                    <div class="price">
                                                                        <div class="simple-article size-4 dark">$630.00</div>
                                                                    </div>
                                                                </div>
                                                                <div class="preview-buttons">
                                                                    <div class="buttons-wrapper">
                                                                        <a class="button size-2 style-2" href="product.html">
                                                                            <span class="button-wrapper">
                                                                                <span class="icon"><img src="img/icon-1.png" alt=""></span>
                                                                                <span class="text">Learn More</span>
                                                                            </span>
                                                                        </a>
                                                                        <a class="button size-2 style-3" href="#">
                                                                            <span class="button-wrapper">
                                                                                <span class="icon"><img src="img/icon-3.png" alt=""></span>
                                                                                <span class="text">Add To Cart</span>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-6">
                                                            <div class="banner-shortcode style-3 rounded-image text-center" style="background-image: url(img/background-11.jpg);">
                                                                <div class="valign-middle-cell">
                                                                    <div class="valign-middle-content">
                                                                        <div class="simple-article size-5 light transparent uppercase col-xs-b5"><span class="color">30%</span>DISCOUNT</div>
                                                                        <h3 class="h3 light col-xs-b15">all models from relax seriece</h3>
                                                                        <div class="simple-article size-3 light transparent col-xs-b30">Vivamus in tempor eros. Phasellus rhoncus in nunc sit amet mattis. Integer in ipsum vestibulum, molestie arcu ac</div>
                                                                        <a class="button size-2 style-1" href="#">
                                                                            <span class="button-wrapper">
                                                                                <span class="icon"><img src="img/icon-1.png" alt=""></span>
                                                                                <span class="text">learn more</span>
                                                                            </span>
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><router-link to="/contact">contact</router-link></li>
                                    </ul>
                                    <div class="navigation-title">
                                        Navigation
                                        <div class="hamburger-icon active">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div class="header-bottom-icon toggle-search"><i class="fa fa-search" aria-hidden="true"></i></div>
                            <div class="header-bottom-icon visible-rd"><i class="fa fa-heart-o" aria-hidden="true"></i></div>
                            <div class="header-bottom-icon visible-rd">
                                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                                <span class="cart-label">5</span>
                            </div>
                        </div>
                    </div>
                    <div class="header-search-wrapper">
                        <div class="header-search-content">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
                                        <form>
                                            <div class="search-submit">
                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                <input type="submit"/>
                                            </div>
                                            <input class="simple-input style-1" type="text" value="" placeholder="Enter keyword" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="button-close"></div>
                        </div>
                    </div>
                </div>
            </div>

        </header>  
    
    <div class="header-empty-space"></div>
    <div class="slider-wrapper">
            <div class="swiper-button-prev visible-lg"></div>
            <div class="swiper-button-next visible-lg"></div>
            <div class="swiper-container" data-parallax="1" data-auto-height="1">
               <div class="swiper-wrapper">
                   <div class="swiper-slide">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="cell-view page-height">
                                        <div class="col-xs-b40 col-sm-b80"></div>
                                        <div data-swiper-parallax-x="-600">
                                            <div class="simple-article grey size-5">BEST PRICE <span class="color">$199.00</span></div>
                                            <div class="col-xs-b5"></div>
                                        </div>
                                        <div data-swiper-parallax-x="-500">
                                            <h1 class="h1">smartphone x transform</h1>
                                            <div class="title-underline left"><span></span></div>
                                        </div>
                                        <div data-swiper-parallax-x="-400">
                                            <div class="simple-article size-4 grey">In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</div>
                                            <div class="col-xs-b30"></div>
                                        </div>
                                        <div data-swiper-parallax-x="-300">
                                            <div class="buttons-wrapper">
                                                <a class="button size-2 style-2" href="#">
                                                    <span class="button-wrapper">
                                                        <span class="icon"><img src="img/icon-1.png" alt=""></span>
                                                        <span class="text">Learn More</span>
                                                    </span>
                                                </a>
                                                <a class="button size-2 style-3" href="#">
                                                    <span class="button-wrapper">
                                                        <span class="icon"><img src="img/icon-3.png" alt=""></span>
                                                        <span class="text">Add To Cart</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-xs-b40 col-sm-b80"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="slider-product-preview">
                                <div class="product-preview-shortcode">
                                    <div class="preview">
                                        <div class="swiper-lazy-preloader"></div>
                                        <div class="entry full-size swiper-lazy active" data-background="img/product-preview-1.jpg"></div>
                                        <div class="entry full-size swiper-lazy" data-background="img/product-preview-2.jpg"></div>
                                        <div class="entry full-size swiper-lazy" data-background="img/product-preview-3.jpg"></div>
                                    </div>
                                    <div class="sidebar valign-middle" data-swiper-parallax-x="-300">
                                        <div class="valign-middle-content">
                                            <div class="entry active"><img src="img/product-4.png" alt="" /></div>
                                            <div class="entry"><img src="img/product-5.png" alt="" /></div>
                                            <div class="entry"><img src="img/product-6.png" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="empty-space col-xs-b80 col-sm-b0"></div>
                        </div>
                   </div>
                   <div class="swiper-slide">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 col-sm-offset-6">
                                    <div class="cell-view page-height">
                                        <div class="col-xs-b40 col-sm-b80"></div>
                                        <div data-swiper-parallax-x="-600">
                                            <div class="simple-article grey size-5">BEST PRICE <span class="color">$199.00</span></div>
                                            <div class="col-xs-b5"></div>
                                        </div>
                                        <div data-swiper-parallax-x="-500">
                                            <h1 class="h1">smartphone x transform</h1>
                                            <div class="title-underline left"><span></span></div>
                                        </div>
                                        <div data-swiper-parallax-x="-400">
                                            <div class="simple-article size-4 grey">In feugiat molestie tortor a malesuada. Etiam a venenatis ipsum. Proin pharetra elit at feugiat commodo vel placerat tincidunt sapien nec</div>
                                            <div class="col-xs-b30"></div>
                                        </div>
                                        <div data-swiper-parallax-x="-300">
                                            <div class="buttons-wrapper">
                                                <a class="button size-2 style-2" href="#">
                                                    <span class="button-wrapper">
                                                        <span class="icon"><img src="img/icon-1.png" alt=""></span>
                                                        <span class="text">Learn More</span>
                                                    </span>
                                                </a>
                                                <a class="button size-2 style-3" href="#">
                                                    <span class="button-wrapper">
                                                        <span class="icon"><img src="img/icon-3.png" alt=""></span>
                                                        <span class="text">Add To Cart</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-xs-b40 col-sm-b80"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="slider-product-preview align-left">
                                <div class="product-preview-shortcode">
                                    <div class="preview">
                                        <div class="swiper-lazy-preloader"></div>
                                        <div class="entry full-size swiper-lazy active" data-background="img/product-preview-1.jpg"></div>
                                        <div class="entry full-size swiper-lazy" data-background="img/product-preview-2.jpg"></div>
                                        <div class="entry full-size swiper-lazy" data-background="img/product-preview-3.jpg"></div>
                                    </div>
                                    <div class="sidebar valign-middle" data-swiper-parallax-x="-300">
                                        <div class="valign-middle-content">
                                            <div class="entry active"><img src="img/product-4.png" alt="" /></div>
                                            <div class="entry"><img src="img/product-5.png" alt="" /></div>
                                            <div class="entry"><img src="img/product-6.png" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="empty-space col-xs-b80 col-sm-b0"></div>
                        </div>
                   </div>
               </div>
               <div class="swiper-pagination"></div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ElnicHeader',
  created() {
      this.getCartItems();
      this.getQuantity();
      this.getProduct()
      this.username =this.$store.state.username;
      console.log(this.username);
  },
   data () {
      return {
        carts : [],
        quantity: [],
        products: [],
        username: '',
        form : {

        },
        }
    },
    computed: {
        count() {
            return this.$store.state.cartItemCount;
        }
    },
    methods : {
    getCartItems() {
        this.carts = this.$store.state.cartItems;
    },
    getQuantity() {
        this.quantity = this.$store.state.cartQuantity;
    },
    getProduct(){
        for (let i =0 ; i< this.carts.length; i++) {
            this.products.push(this.carts[i])
            for (let j=0;j< this.quantity.length;j++){
                if (i===j) {
                    this.products[i].cartNumber = this.quantity[j];
                }
            }
        }
    },
    onClickAboutUs(){
        this.$router.push({ name: 'about' })
    }
    }
};
</script>
<style scoped>
#heo_image {
    width: 70px;
    height: 70px;
}
</style>