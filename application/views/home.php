<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<?php $this->load->view(COMMON.'head'); ?>
<style type="text/css">
        /*.carousel, .item, .active, .carousel-inner {
        height: 70%;
        }

        */

        /* 
        ##Device = Desktops
        ##Screen = 1281px to higher resolution desktops
        */

        @media (min-width: 1281px) {

        .carousel, .item, .active, .carousel-inner {
        height: 100%;
        }
        .double-border12:before {
        background: none;
        border: 2px solid #c29643;
        content: "";
        display: block;
        position: absolute;
        top: 5px;
        left: 21px;
        right: 22px;
        bottom: 22px;
        pointer-events: none;
        }
        }

        /* 
        ##Device = Laptops, Desktops
        ##Screen = B/w 1025px to 1280px
        */

        @media (min-width: 1025px) and (max-width: 1280px) {

        .carousel, .item, .active, .carousel-inner {
        height: 100%;
        }

        .double-border12:before {
        background: none;
        border: 2px solid #c29643;
        content: "";
        display: block;
        position: absolute;
        top: 5px;
        left: 21px;
        right: 22px;
        bottom: 22px;
        pointer-events: none;
        }

        }

        /* 
        ##Device = Tablets, Ipads (portrait)
        ##Screen = B/w 768px to 1024px
        */

        @media (min-width: 768px) and (max-width: 1024px) {

        .carousel, .item, .active, .carousel-inner {
        height: 100%;
        }

        .double-border12:before {
        background: none;
        border: 2px solid #c29643;
        content: "";
        display: block;
        position: absolute;
        top: 5px;
        left: 21px;
        right: 22px;
        bottom: 22px;
        pointer-events: none;
        }
        }

        /* 
        ##Device = Tablets, Ipads (landscape)
        ##Screen = B/w 768px to 1024px
        */

        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {

        .carousel, .item, .active, .carousel-inner {
        height: 100%;
        }

        .double-border12:before {
        background: none;
        border: 2px solid #c29643;
        content: "";
        display: block;
        position: absolute;
        top: 5px;
        left: 21px;
        right: 22px;
        bottom: 22px;
        pointer-events: none;
        }


        }

        /* 
        ##Device = Low Resolution Tablets, Mobiles (Landscape)
        ##Screen = B/w 481px to 767px
        */

        @media (min-width: 481px) and (max-width: 767px) {

        .carousel, .item, .active, .carousel-inner {
        height: 80%;
        }
        .carousel-indicators{
        display: none;
        }

        .double-border12:before {
        background: none;
        border: 2px solid #c29643;
        content: "";
        display: block;
        position: absolute;
        top: 5px;
        left: 21px;
        right: 22px;
        bottom: 6px;
        pointer-events: none;
        }

        }

        /* 
        ##Device = Most of the Smartphones Mobiles (Portrait)
        ##Screen = B/w 320px to 479px
        */

        @media (min-width: 320px) and (max-width: 480px) {

        .carousel, .item, .active, .carousel-inner {
        height: 80%;
        }
        .carousel-indicators{
        display: none;
        }

        .double-border12:before {
        background: none;
        border: 2px solid #c29643;
        content: "";
        display: block;
        position: absolute;
        top: 5px;
        left: 21px;
        right: 22px;
        bottom: 6px;
        pointer-events: none;
        }

        }





        .card:not([class*=card-outline-]) {
        border: 0;
        }
        .card {
        height: 100%;

        box-shadow: 0 9px 23px 4px rgb(0 0 0 / 9%), 0 5px 5px 6px rgb(0 0 0 / 6%) !important;
        -webkit-transition: box-shadow 0.7s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
        -moz-transition: box-shadow 0.7s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
        -o-transition: box-shadow 0.7s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
        transition: box-shadow 0.7s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
        -webkit-border-radius: 0.4167rem;
        -moz-border-radius: 0.4167rem;
        -ms-border-radius: 0.4167rem;
        -o-border-radius: 0.4167rem;
        border-radius: 0.4167rem;
        }
        .blockquote {
        margin-bottom: 1rem;
        font-size: 1.25rem;
        }

        blockquote {
        padding: .5rem 1rem;
        font-size: 1.25rem;
        border-left: .25rem solid #eceeef;
        }
        blockquote {
        margin: 0 0 1rem;
        }
        .blockquote p {
        font-size: 1.1rem;
        }
        .card .card-body p {
        margin-bottom: 1rem;
        }

        /* Backgrounds */

        .bg-primary {
        color: #FFFFFF;
            /*background: -webkit-linear-gradient(45deg,#b96500, #efbe6a,#b16100);*/
            background: transparent;
            padding-top: 10px;
            padding-bottom: 5px;
            margin-bottom: 20px;
        }

        .bg-primary:hover{
            background: -webkit-linear-gradient(45deg,#b96500, #efbe6a,#b16100);
            color: white;
        }


        .card:hover .card-body p {
        margin-bottom: 1rem;
        color: white;

        }


        .card .card-body h3 {
        /*margin-bottom: 1rem;*/
        color: #b0872f;

        }
        .card:hover .card-body h3 {
        /*margin-bottom: 1rem;*/
        color: white;

        }

        .bg-secondary {
        color: #FFFFFF;
        background-color: #4f5b60 !important;
        }

        .bg-success {
        color: #FFFFFF;
        background-color: #0ad251 !important;
        }

        .bg-info {
        color: #FFFFFF;
        background-color: #55d3f5 !important;
        }

        .bg-warning {
        color: #ac9a02 !important;
        background-color: #fce418 !important;
        }

        .bg-danger {
        color: #FFFFFF;
        background-color: #f43a59 !important;
        }

        .bg-dark {
        background-color: #122f3b !important;
        }

        .bg-light {
        background-color: #F7F7FA !important;
        }

        .bg-tranparent {
        background-color: transparent !important;
        }

        .bg-dark *,
        .bg-danger *,
        .bg-warning *,
        .bg-info *,
        .bg-success *,
        .bg-secondary *,
        .bg-primary *,
        .bg-dark .batch-icon,
        .bg-danger .batch-icon,
        .bg-warning .batch-icon,
        .bg-info .batch-icon,
        .bg-success .batch-icon,
        .bg-secondary .batch-icon,
        .bg-primary .batch-icon {
        color: black;
        }
        .double-border {
        background-color: #fff;
        border: 4px solid #000;
        padding: 2em;
        /* width: 20em; */
        height: 16em;
        position: relative;
        /* margin: 0 auto; */
        }
        .double-border:before {
        background: none;
        border: 4px solid #c29643;
        content: "";
        display: block;
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        pointer-events: none;
        }

        .double-border:hover:before {
        background: none;
        border: 4px solid white;
        content: "";
        display: block;
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        pointer-events: none;
        }


        .bg-gradient [class^="card-"],
        .bg-gradient [class^="card-"] * {
        color: #FFFFFF !important;
        }


        /* Highlight Colors - Bottom Border */

        .highlight-color-blue {
        color: #FFFFFF !important;
        background-color: #07a7e3 !important;
        }

        .highlight-color-green {
        color: #FFFFFF !important;
        background-color: #0ad251 !important;
        }

        .highlight-color-orange {
        color: #FFFFFF !important;
        background-color: #FC9131 !important;
        }

        .highlight-color-yellow {
        color: #FFFFFF !important;
        background-color: #F8D800 !important;
        }

        .highlight-color-red {
        color: #FFFFFF !important;
        background-color: #EA5455 !important;
        }

        .highlight-color-purple {
        color: #FFFFFF !important;
        background-color: #973999 !important;
        }


</style>


        <script language=JavaScript>
        <!--

        //Disable right click script III- By Renigade (renigade@mediaone.net)
        //For full source code, visit http://www.dynamicdrive.com

        var message="";
        ///////////////////////////////////

        // --> 
        </script>



        <div id="slideout" style="z-index:999;"> <a href="#"><img src="<?=base_url(BHOOMIWEB);?>images/group-logo-slider2.png" width="160" height="47"></a></div>

        <style type="text/css">
            html,
            /*body {
              height: 100%;
            }*/
            .carousel {
              width: 100%;
              /*background-color: #000;*/
              height: 100%;
            }
            .carousel-fade .carousel-inner .item {
              -webkit-transition-property: opacity;
              transition-property: opacity;
            }
            .carousel-fade .carousel-inner .item,
            .carousel-fade .carousel-inner .active.left,
            .carousel-fade .carousel-inner .active.right {
              opacity: 0;
            }
            .carousel-fade .carousel-inner .active,
            .carousel-fade .carousel-inner .next.left,
            .carousel-fade .carousel-inner .prev.right {
              opacity: 1;
            }
            .carousel-fade .carousel-inner .next,
            .carousel-fade .carousel-inner .prev,
            .carousel-fade .carousel-inner .active.left,
            .carousel-fade .carousel-inner .active.right {
              left: 0;
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }
            .carousel-fade .carousel-control {
              z-index: 2;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .carousel-fade .carousel-control .glyphicon {
              font-size: 6rem;
            }
            .carousel,
            .carousel-inner,
            .carousel-inner .item {
              height: 100%;
            }
            .stopfade {
              opacity: 0.5;
            }
            .slide-content {
              color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              min-height: 100%;
            }
            .slide-content video {
              position: absolute;
              top: 50%;
              left: 50%;
              min-width: 100%;
              min-height: 100%;
              width: auto;
              height: auto;
              z-index: 0;
              -webkit-transform: translateX(-50%) translateY(-50%);
              transform: translateX(-50%) translateY(-50%);
              -webkit-transition: 1s opacity;
              transition: 1s opacity;
            }
            .slide-content video::-webkit-media-controls-start-playback-button {
              display: none !important;
              -webkit-appearance: none;
            }
            .door {
              font-family: Revista-Black;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              height: 100%;
              width: 100%;
              z-index: 1;
            }
            .door .title {
              font-size: 14rem;
              text-transform: uppercase;
              letter-spacing: 0.3rem;
              line-height: 13rem;
            }
            .door .description {
              border-top: 1px solid #fff;
              margin-top: 15px;
              font-size: 4rem;
            }
            @media screen and (max-width: 640px) {
                .door .description {
              font-size: 2rem;
            }
            .door .title {
              font-size: 4rem;
              text-transform: uppercase;
              letter-spacing: 0.3rem;
              line-height: 5rem;
            }
            .carousel-fade .carousel-control .glyphicon {
              font-size: 3rem;
            }

            }

            .service-24 {
              font-family: "Montserrat", sans-serif;
                color: #8d97ad;
              font-weight: 300;
            }

            .service-24 h1, .service-24 h2, .service-24 h3, .service-24 h4, .service-24 h5, .service-24 h6 {
              color: #3e4555;
            }

            .service-24 .card.card-shadow {
                -webkit-box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1);
                box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1);
            }

            .service-24 a {
                text-decoration: none;
            }

            .service-24 .card-hover:hover {
                 /* background: #2cdd9b;
                background: -webkit-linear-gradient(legacy-direction(to right), #2cdd9b 0%, #1dc8cc 100%);
                background: -webkit-gradient(linear, left top, right top, from(#2cdd9b), to(#1dc8cc));
                background: -webkit-linear-gradient(left, #2cdd9b 0%, #1dc8cc 100%);
                background: -o-linear-gradient(left, #2cdd9b 0%, #1dc8cc 100%);
                background: linear-gradient(to right, #2cdd9b 0%, #1dc8cc 100%);*/
            }

            .service-24 .card-hover:hover .bg-success-grediant {
                /*  color: #ffffff;
                text-fill-color: #ffffff;
                -webkit-text-fill-color: #ffffff;*/
            }

            .service-24 .card-hover .ser-title {
                /*color: #ffffff;*/
                color: #c29643;
                font-size: 15px;
                font-weight: bolder;
            }

            .service-24 .bg-success-grediant {
                   color: #c29643;
                font-size: 50px;
            }

            .service-24 .wrap-service-24 .card {
                -o-transition: 0.3s ease-out;
                transition: 0.3s ease-out;
                background: white;
                -webkit-transition: 0.3s ease-out;
                height: 130px;
                margin-bottom: 15px;
            }

            .service-24 .wrap-service-24 .card:hover {
                /*-ms-transform: translateY(-10px);
                transform: translateY(-10px);
                -webkit-transform: translateY(-10px);*/
            }

            .service-24 .btn-outline-success {
                    color: #2cdd9b !important;
                background-color: transparent;
                border-color: #2cdd9b;
            }

            .service-24 .btn-outline-success:hover {
                   /* background: #2cdd9b;
                border-color: #2cdd9b;
                color: #ffffff !important;*/
            }

            .service-24 .btn-md {
                padding: 15px 45px;
                font-size: 18px;
            }

            /*.double-border12:before {
                background: none;
                border: 2px solid #c29643;
                content: "";
                display: block;
                position: absolute;
                top: 5px;
                left: 21px;
                right: 22px;
                bottom: 22px;
                pointer-events: none;
            }*/

            .sec-heading {
              margin-bottom: 50px;
            }
            .sec-heading h2 {
              text-align: center;
              font-family: allura;
              font-size: 80px;
            }
            .clients {
              padding: 50px 0;
            }
            .box {
              display: grid;
              align-items: center;
              justify-items: center;
              width: 60%;
              height: auto;
              transition: transform 0.5s ease-in;
              margin: 8px auto;
            }
            .box img {
              max-width: 100%;
              max-height: 100%;
              width: 100%;
            }
            .box:hover {
              transform: scale(1.2);
            }

    </style>
    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
</head>
<body>
	<?php $this->load->view(COMMON.'navbar'); ?>

	<div id="carousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">
		<ol class="carousel-indicators">
		<li data-target="#carousel" data-slide-to="0" class="active"></li>

		</ol>

		<!-- Carousel items -->
		<div class="carousel-inner">
		<div class="item active">
		<div class="slide-content">
		 <video  muted  webkit-playsinline id="bgvid" loop>
		  <source src="<?=base_url(BHOOMIWEB);?>video1.mp4" type="video/mp4">
		</video>

		</div>
		</div>

		</div>
	</div>

	<section class="covercss">
		<div class="container">

		<h3 class="homeheading tes text-center">How it Works</h3>
		<div class="row g-5 mb-5">
		<div class="col-md-4 col-6 col-sm-6 mb-5">
		<div class="card double-border bg-primary mb-3 text-center">
		<div class="card-body">
		<p style="font-size: 20px;">Step 1.</p>
		<h3>OUTLINE</h3>
		<p>To understand requirements of your event</p><br>

		</div>
		</div>
		</div>
		<div class="col-md-4 col-6 col-sm-6 mb-5">
		<div class="card double-border bg-primary mb-3 text-center">
		<div class="card-body">
		<p style="font-size: 20px;">Step 2.</p>
		<h3>SCHEDULE</h3>
		<p>To schedule your meetings as per priority</p><br>

		</div>
		</div>
		</div>
		<div class="col-md-4 col-6 col-sm-6 mb-5">
		<div class="card double-border bg-primary mb-3 text-center">
		<div class="card-body">
		<p style="font-size: 20px;">Step 3.</p>
		<h3>BUDGET</h3>
		<p>Giving suitable options as per budget and putting value adds</p>

		</div>
		</div>
		</div>

		<div class="col-md-4 col-6 col-sm-6 mb-5">
		<div class="card double-border bg-primary mb-3 text-center">
		<div class="card-body">
		<p style="font-size: 20px;">Step 4.</p>
		<h3>PLANNING</h3>
		<p>Putting heads together for absorbed & well-contoured proceedings</p>

		</div>
		</div>
		</div>
		<div class="col-md-4 col-6 col-sm-6 mb-5">
		<div class="card double-border bg-primary mb-3 text-center">
		<div class="card-body">
		<p style="font-size: 20px;">Step 5.</p>
		<h3>DETAILING</h3>
		<p>To personalize every element</p><br>

		</div>
		</div>
		</div>
		<div class="col-md-4 col-6 col-sm-6 mb-5">
		<div class="card double-border bg-primary mb-3 text-center">
		<div class="card-body">
		<p style="font-size: 20px;">Step 6.</p>
		<h3>PLAN OF ACTION</h3>
		<p>To be ready to execute your event</p><br>

		</div>
		</div>
		</div>
		</div>


		</div>
	</section>


    <section class="bg-gray no-pad-btm" id="portfolio" style="background-image:url(static/assets/img/home/nav-back3a.png); background-repeat:repeat; width:100% height:auto;">
          <div class="container text-center">
            <div class="row wow fadeInUp">
               <div class="col-sm-10 col-sm-offset-1">
                
                  <h3 class="homeheading tes text-center">Portfolio</h3>
                  <p style="margin-top:-40px;"><strong>Get inspired in the visual way</strong></p>
                  <div style="text-align:center; margin-bottom:10%;">
                    
                     
                     

                  
                     
                  
                  <div class="carousel slide carousel-fade" id="carousel-testimonials" data-ride="carousel">
                        
                     <ol class="carousel-indicators">
                        <li class="active" data-target="#carousel-testimonials" data-slide-to="0"></li>
                        <li data-target="#carousel-testimonials" data-slide-to="1"></li>
                        <li data-target="#carousel-testimonials" data-slide-to="2"></li>
                        <li data-target="#carousel-testimonials" data-slide-to="3"></li>
                        <li data-target="#carousel-testimonials" data-slide-to="4"></li>
                     </ol>
                        
                        
                     <div class="carousel-inner" role="listbox">
                        <div class="item active">
                           <img class="center-block" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/07_portfolio/1.webp" alt="">
                        </div>
                        <div class="item">
                           <img class="center-block" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/07_portfolio/2.webp" alt="">
                        </div>
                        <div class="item">
                           <img class="center-block" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/07_portfolio/3.webp" alt="">
                        </div>
                        <div class="item">
                           <img class="center-block" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/07_portfolio/4.webp" alt="">
                        </div>
                        <div class="item">
                           <img class="center-block" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/07_portfolio/5.webp" alt="">
                        </div>
                     </div>
                  </div>
               
   
                     
                     
                  </div>
               </div>
            </div>
         </div>
      </section>
      
      
      <section class="section-small2">
         <div class="text-center container">
            <div class="row wow fadeInUp">
               <div class="col-lg-8 col-lg-offset-2">
                  <h3 class="homeheading tes text-center">Success Stories</h3>
                  <p style="margin-top:-40px;"><strong>When we created fairy tales from ‘ Once upon a time’ to ‘Happily ever after’.</strong></p><br>
               </div>
            </div>
            <div class="row wow fadeInUp " data-wow-duration="2s" data-wow-delay=".2s">
               <div class="col-lg-4 col-sm-6">
                  <a href="#" target="_blank">
                     <iframe width="300" height="250" src="https://www.youtube.com/embed/sL5AmbeofVE" frameborder="0" allowfullscreen ></iframe><br><br><br>
                    
                  </a>
               </div>
               <div class="col-lg-4 col-sm-6">
                  <a href="/profile/guadalupe-alvarez">
                     <iframe width="300" height="250" src="https://www.youtube.com/embed/Omkefke9irI" frameborder="0" allowfullscreen ></iframe><br><br><br>
                    
                  </a>
               </div>
               <div class="col-lg-4 col-sm-6">
                  <a href="/profile/jacqueline-vazquez">
                     <iframe width="300" height="250" src="https://www.youtube.com/embed/erLimd36bHE" frameborder="0" allowfullscreen ></iframe><br><br><br>
                     
                  </a>
               </div>
            </div>
            <a class="btn btn-violet" href="success-stories.html">View More</a>
         </div>
      </section>
      
      
      <!-- class="module bg-light"-->
      <section  class="section-small3">
         <div class="container text-center">
            <div class="row wow fadeInUp">
               <div>
                  <h3 class="homeheading tes text-center">Experiences</h3>
                  <p style="margin-top:-40px;"><strong>We cherish relationships with our precision, creativity, and integrity.</strong></p>
               </div>
            </div>
            <div class="py-5 service-24">
        <div class="container">
        <!-- Row -->
        <div class="row g-5 wrap-service-24">
            <!-- Column -->
            <div class="col-lg-3 col-md-6">
                <div class="card rounded card-shadow border-0 mb-4 double-border12">
                    <a href="javascript:void(0)" class="card-hover py-4 text-center d-block rounded"> 
                                               <img style="height:70px;width: 70px;margin-top: 20px;" src="<?=base_url(BHOOMIWEB);?>images/decor.png">
                        <h6 class="ser-title">Decor & Design</h6>
                    </a>
                </div>
            </div>
            <!-- Column -->
            <!-- Column -->
            <div class="col-lg-3 col-md-6">
                <div class="card card-shadow border-0 mb-4 double-border12">
                    <a href="javascript:void(0)" class="card-hover py-4 text-center d-block rounded"> 

                          <img style="height:70px;width: 70px;margin-top: 20px;" src="<?=base_url(BHOOMIWEB);?>images/homecoming.png">
                        <h6 class="ser-title">Homecoming Party</h6>
                    </a>
                </div>
            </div>
            <!-- Column -->
            <!-- Column -->
            <div class="col-lg-3 col-md-6">
                <div class="card card-shadow border-0 mb-4 double-border12">
                    <a href="javascript:void(0)" class="card-hover py-4 text-center d-block rounded"> 
                                         <img style="height:70px;width: 70px;margin-top: 20px;" src="<?=base_url(BHOOMIWEB);?>images/weddingfavor.png">
                        <h6 class="ser-title">Wedding Favours</h6>
                    </a>
                </div>
            </div>
            <!-- Column -->
            <!-- Column -->
            <div class="col-lg-3 col-md-6">
                <div class="card card-shadow double-border12 border-0 mb-4">
                    <a href="javascript:void(0)" class="card-hover py-4 text-center d-block rounded"> 
                                                <img style="height:70px;width: 70px;margin-top: 20px;" src="<?=base_url(BHOOMIWEB);?>images/app.png">
                        <h6 class="ser-title">Amp it up with App</h6>
                    </a>
                </div>
            </div>
            <!-- Column -->
            <!-- Column -->
            <div class="col-lg-3 col-md-6">
                <div class="card card-shadow border-0 mb-4 double-border12">
                    <a href="javascript:void(0)" class="card-hover py-4 text-center d-block rounded"> 
                                               <img style="height:70px;width: 70px;margin-top: 20px;" src="<?=base_url(BHOOMIWEB);?>images/accomodation.png">
                        <h6 class="ser-title">Accomodations</h6>
                    </a>
                </div>
            </div>
            <!-- Column -->
            <!-- Column -->
            <div class="col-lg-3 col-md-6">
                <div class="card card-shadow border-0 mb-4 double-border12">
                    <a href="javascript:void(0)" class="card-hover py-4 text-center d-block rounded"> 
                                                <img style="height:70px;width: 70px;margin-top: 20px;" src="<?=base_url(BHOOMIWEB);?>images/logistics.png">
                        <h6 class="ser-title">Logistics</h6>
                    </a>
                </div>
            </div>
            <!-- Column -->
            <!-- Column -->
            <div class="col-lg-3 col-md-6">
                <div class="card card-shadow border-0 mb-4 double-border12">
                    <a href="javascript:void(0)" class="card-hover py-4 text-center d-block rounded"> 
                                               <img style="height:70px;width: 70px;margin-top: 20px;" src="<?=base_url(BHOOMIWEB);?>images/assure.png">
                        <h6 class="ser-title">Assure to Insure</h6>
                    </a>
                </div>
            </div>
            <!-- Column -->
            <!-- Column -->
            <div class="col-lg-3 col-md-6">
                <div class="card card-shadow border-0 mb-4 double-border12">
                    <a href="javascript:void(0)" class="card-hover py-4 text-center d-block rounded"> 
                                                <img style="height:70px;width: 70px;margin-top: 20px;" src="<?=base_url(BHOOMIWEB);?>images/hospitality.png">
                        <h6 class="ser-title">Hospitality</h6>
                    </a>
                </div>
            </div>

             <div class="col-lg-3 col-md-6">
                <div class="card card-shadow border-0 mb-4 double-border12">
                    <a href="javascript:void(0)" class="card-hover py-4 text-center d-block rounded"> 
                                               <img style="height:70px;width: 70px;margin-top: 20px;" src="<?=base_url(BHOOMIWEB);?>images/entertainment.png">
                        <h6 class="ser-title">Entertainment</h6>
                    </a>
                </div>
            </div>

             <div class="col-lg-3 col-md-6">
                <div class="card card-shadow border-0 mb-4 double-border12">
                    <a href="javascript:void(0)" class="card-hover py-4 text-center d-block rounded"> 
                                                <img style="height:70px;width: 70px;margin-top: 20px;" src="<?=base_url(BHOOMIWEB);?>images/eat.png">
                        <h6 class="ser-title">Eat, Drink & Be Merry</h6>
                    </a>
                </div>
            </div>

             <div class="col-lg-3 col-md-6">
                <div class="card card-shadow border-0 mb-4 double-border12">
                    <a href="javascript:void(0)" class="card-hover py-4 text-center d-block rounded"> 
                                                <img style="height:70px;width: 70px;margin-top: 20px;" src="<?=base_url(BHOOMIWEB);?>images/events.png">
                        <h6 class="ser-title">Event Management</h6>
                    </a>
                </div>
            </div>

             <div class="col-lg-3 col-md-6">
                <div class="card card-shadow border-0 mb-4 double-border12">
                    <a href="javascript:void(0)" class="card-hover py-4 text-center d-block rounded"> 
                                              <img style="height:70px;width: 70px;margin-top: 20px;" src="<?=base_url(BHOOMIWEB);?>images/rsvp.png">
                        <h6 class="ser-title">RSVP</h6>
                    </a>
                </div>
            </div>
                       <!--  <div class="col-md-12 mt-3 text-center"> <a class="btn btn-outline-success btn-md"><span>View Details</span></a></div> -->
        </div>
        </div>
        </div>
         </div>
         </div>
      </section>
      
      <section id="testimonials">
         <div class="container-fluid">
            <div class="row wow fadeInUp" data-wow-duration="0s" data-wow-delay="2s">
               <div class="col-md-8 col-md-offset-2" style="text-align:center;">
                  <h3 class="homeheading tes text-center">What They Say!</h3>
                  <p class="text-center" style="margin-top:-40px;"><strong>Tales of emotions, spun by us, experienced by you.</strong></p>
                  </h3>
                  <div class="carousel slide carousel-fade" id="carousel-testimonials" data-ride="carousel">
    
                     <div class="carousel-inner" role="listbox">
                        <div class="item active">
                           <img class="center-block" style="box-shadow:5px 5px 10px grey;" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/06_what_they_say/1-Ritu & Jay.jpg" alt="">
                           <div class="carousel-caption">
                              <!--<h2 class="classic">Ritu & Jay</h2>-->
                              <q style="font-size:60px;"><h4 class="no-pad" style="text-transform:none">Absolutely amazing service. The decor was better than promised and the effort was visible in every single item. It was perfect. Thank you.</h4></q>
                           </div>
                        </div>
                        <div class="item">
                           <img class="center-block" style="box-shadow:5px 5px 10px grey;" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/06_what_they_say/2-Batais -Mansi & Abhed.jpg" alt="">
                           <div class="carousel-caption">
                            <q style="font-size:60px;">
                              <!--<h2 class="classic">Mansi & Abhed</h2>-->
                              <h4 class="no-pad" style="text-transform:none">Thank you so much for giving us more than we could’ve imagined. It was the most beautiful wedding, and I cannot thank you enough for it. You made it extremely special and memorable.</h4>
                          </q>
                           </div>
                        </div>
                        <div class="item">
                           <img class="center-block" style="box-shadow:5px 5px 10px grey;" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/06_what_they_say/3-Sujit & Alisha.jpg" alt="">
                           <div class="carousel-caption">
                            <q style="font-size:60px;">
                              <!--<h2 class="classic">Alisha & Sujit</h2>-->
                              <h4 class="no-pad" style="text-transform:none">The arrangements done by Bhoomi team was epic,  the event was grand and ran smoothly. You worked day and night to make it memorable for us. Can't thank you guys enough for managing each arrangement in a calm and efficient way.</h4>
                          </q>
                           </div>
                        </div>
                        <div class="item">
                           <img class="center-block" style="box-shadow:5px 5px 10px grey;" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/06_what_they_say/4-Shreya & Hishant.jpg" alt="">
                           <div class="carousel-caption">
                            <q style="font-size:60px;">
                              <!--<h2 class="classic">Shreya & Hishant</h2>-->
                              <h4 class="no-pad" style="text-transform:none">Our wedding was planned, organised and managed by  Bhoomi Events and Planners. A big thumbs up from our side. They took care of everything and gave full attention to the details we mentioned. You guys made our imagination look more beautiful by adding your hardwork and creativity to it.</h4>
                          </q>
                           </div>
                        </div>
                         <div class="item">
                           <img class="center-block" style="box-shadow:5px 5px 10px grey;" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/06_what_they_say/5-Hiral & Jainam.jpg" alt="">
                           <div class="carousel-caption">
                            <q style="font-size:60px;">
                              <!--<h2 class="classic">Hiral & Jainam</h2>-->
                              <h4 class="no-pad" style="text-transform:none">Thank you Bhoomi team for the fantastic event. You all have pulled together a very memorable  movement for our families together. The team was super calm in the most worked up moments.  Everything went smoothly without any trouble.</h4>
                          </q>
                           </div>
                        </div>
                        <div class="item">
                           <img class="center-block" style="box-shadow:5px 5px 10px grey;" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/06_what_they_say/6-Mr.Rajkumar Bansal - Ankur & Roopali.jpg" alt="">
                           <div class="carousel-caption">
                            <q style="font-size:60px;">
                              <!--<h2 class="classic">Roopali & Ankur</h2>-->
                              <h4 class="no-pad"  style="text-transform:none">Bhoomi team with their prolific, innovative and indelible effort made our family's first destination wedding a time to remember. All the arrangements and decorations were on mark along with the warm hospitalityit was a grand and fun-filled wedding.</h4>
                          </q>
                           </div>
                        </div>
                        <div class="item">
                           <img class="center-block" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/06_what_they_say/7-Miloni & Nihar.jpg" alt="">
                           <div class="carousel-caption">
                            <q style="font-size:60px;">
                              <!--<h2 class="classic">Miloni & Sanghvi</h2>-->
                              <h4 class="no-pad" style="text-transform:none">My family and I were so pleased that we chose Bhoomi Events for our decor. The team gave us more than we could have asked for! The highlight was our sparkling sangeet! Thank you so much for making our events beautiful and memorable.</h4>
                          </q>
                           </div>
                        </div>
                        <div class="item">
                           <img class="center-block" style="box-shadow:5px 5px 10px grey;" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/06_what_they_say/8-Onkar & Anisha.jpg" alt="">
                           <div class="carousel-caption">
                            <q style="font-size:60px;">
                              <!--<h2 class="classic">Anisha & Onkar</h2>-->
                              <h4 class="no-pad" style="text-transform:none">We had our event at Della Resorts which was organised by Bhoomi Events and Planners for both decoration and event management. They did a fantastic job in both the departments and offered more than what they committed. The best part of there team is their service which is untouchable. They do event management not only for a good business but to help people create remarkable memories with good intention and grace.</h4>
                          </q>
                           </div>
                        </div>
                        <div class="item">
                           <img class="center-block" style="box-shadow:5px 5px 10px grey;" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/06_what_they_say/9-Heena & Rohit.jpg" alt="">
                           <div class="carousel-caption">
                            <q style="font-size:60px;">
                              <!--<h2 class="classic">Heena & Rohit</h2>-->
                              <h4 class="no-pad" style="text-transform:none">We are still in awe when we look back on how you guys made our wedding day perfect. The team’s preparation and execution to each detailing was so amazing that I cannot think of any other planner for upcoming weddings in family. Thank You for beautiful memories.</h4>
                          </q>
                           </div>
                        </div>
                        <div class="item">
                           <img class="center-block" style="box-shadow:5px 5px 10px grey;" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/06_what_they_say/10-Richa & Khushil.jpg" alt="">
                           <div class="carousel-caption">
                            <q style="font-size:60px;">
                              <!--<h2 class="classic">Richa and Khushil</h2>-->
                              <h4 class="no-pad" style="text-transform:none">Bhoomi Events & Planners did a great job, Word's cannot express how much they helped us. There team was a breeze to work with. The decor was so on point that everyone loved every bit of it, right from Sangeet with traditional Gujju theme event to the wedding with Marigolds, bells and kaleereins and the implacable Arabian theme reception. Thank you for creating a perfect  wedding for us.</h4>
                          </q>
                           </div>
                        </div>
                        <div class="item">
                           <img class="center-block" style="box-shadow:5px 5px 10px grey;" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/06_what_they_say/11-Mrs. Emma & Ravi.jpg" alt="">
                           <div class="carousel-caption">
                            <q style="font-size:60px;">
                             <!-- <h2 class="classic">Emma & Ravi</h2>-->
                              <h4 class="no-pad" style="text-transform:none">Thank you for all the efforts making it a truly seamless & hassle-free experience for us!  We really appreciate your levels of dedication towards work and staying 24*7 to fulfil all our needs.</h4>
                          </q>
                           </div>
                        </div>
                        <div class="item">
                           <img class="center-block" style="box-shadow:5px 5px 10px grey;" src="<?=base_url(BHOOMIWEB);?>static/assets/img/home/06_what_they_say/12-Mr.Khandewal - Nikita & Parth.jpg" alt="">
                           <div class="carousel-caption">
                            <q style="font-size:60px;">
                             <!-- <h2 class="classic">Nikita & Parth</h2>-->
                              <h4 class="no-pad" style="text-transform:none">A big thank you to the entire team of Bhoomi. You guys did a splendid execution. Simply speechless! Keep up the amazing work! We’ll surely meet again in one of my relatives wedding.</h4>
                          </q>
                           </div>
                        </div>
                        
              
 

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>


      <section class="section-small3">
        <div class="container text-center">
            <div class="row wow fadeInUp">
               <div>
                  <h3 class="homeheading tes text-center">Featured On</h3>
               </div>
            </div>

            <div class="clients">
			<div class="">

			<div class="row">
			<div class="col-md-12">
			<div class="owl-carousel owl-theme clients-carousel">
			  <div class="item box"><img alt="client logo" class="client-img" src="<?=base_url(BHOOMIWEB);?>images/c1.png"></div>
			  <div class="item box"><img alt="client logo" class="client-img" src="<?=base_url(BHOOMIWEB);?>images/c2.png"></div>
			  <div class="item box"><img alt="client logo" class="client-img" src="<?=base_url(BHOOMIWEB);?>images/c3.png"></div>
			  <div class="item box"><img alt="client logo" class="client-img" src="<?=base_url(BHOOMIWEB);?>images/c4.png"></div>
			  <div class="item box"><img alt="client logo" class="client-img" src="<?=base_url(BHOOMIWEB);?>images/c5.png"></div>
			  <div class="item box"><img alt="client logo" class="client-img" src="<?=base_url(BHOOMIWEB);?>images/c6.png"></div>
			  <div class="item box"><img alt="client logo" class="client-img" src="<?=base_url(BHOOMIWEB);?>images/c7.png"></div>
			  <div class="item box"><img alt="client logo" class="client-img" src="<?=base_url(BHOOMIWEB);?>images/c8.png"></div>
			  <div class="item box"><img alt="client logo" class="client-img" src="<?=base_url(BHOOMIWEB);?>images/c9.png"></div>
			</div>
			</div>
			</div>
			</div>
			</div>
        </div>      
             
         
    </section>


    <?php $this->load->view(COMMON.'footer'); ?>

    <?php $this->load->view(COMMON.'js'); ?>

	<script type="text/javascript">
		// If not iPhone, play first video and setup event handlers for  carousel rotations
		// iPhone will not play videos inline, and will take control of the browser
		if(!/iPhone/i.test(navigator.userAgent)) {

			$('.active > div > video').get(0).play();

			$('#carousel').bind('slide.bs.carousel', function(e) {
				$(e.relatedTarget).find('video').get(0).play();
			});

			$('#carousel').bind('slid.bs.carousel', function(e) {
				$('video').not('.active > div > video').each(function() {
					$(this).get(0).pause();
				});
			});
		}
	</script>
</body>
</html>
