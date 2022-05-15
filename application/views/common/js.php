
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/jquery-1.12.4.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/bootstrap.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/jquery.easing.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/jquery.countdown.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/device.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/form.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/jquery.placeholder.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/jquery.shuffle.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/jquery.parallax.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/jquery.circle-progress.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/jquery.swipebox.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/smoothscroll.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/wow.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/jquery.smartmenus.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/main.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/owl/wow.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/owl/jquery.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/owl/imagesloaded.pkgd.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/owl/owl.carousel.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/owl/jquery.magnific-popup.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/owl/jquery.simple-text-rotator.min.js"></script>
      <script src="<?=base_url(BHOOMIWEB);?>static/assets/js/owl/main.js"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-74191357-1"></script>
      <script async>
         window.dataLayer = window.dataLayer || [];
         
         function gtag() {
             dataLayer.push(arguments);
         }
         
         gtag('js', new Date());
         
         gtag('config', 'UA-74191357-1');
      </script>
      <script async>
         !function (f, b, e, v, n, t, s) {
             if (f.fbq) return;
             n = f.fbq = function () {
                 n.callMethod ?
                     n.callMethod.apply(n, arguments) : n.queue.push(arguments)
             };
             if (!f._fbq) f._fbq = n;
             n.push = n;
             n.loaded = !0;
             n.version = '2.0';
             n.queue = [];
             t = b.createElement(e);
             t.async = !0;
             t.src = v;
             s = b.getElementsByTagName(e)[0];
             s.parentNode.insertBefore(t, s)
         }(window, document, 'script',
             'https://connect.facebook.net/en_US/fbevents.js');
         fbq('init', '1744325142543680');
         fbq('track', 'PageView');
      </script>
      <noscript><img height="1" width="1" style="display:none"
         src="https://www.facebook.com/tr?id=1744325142543680&ev=PageView&noscript=1"
         /></noscript>
         
         <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">

        </script>  
        
         <script src="<?=base_url(BHOOMIWEB);?>assets/owlcarousel/owl.carousel.js"></script>
        <script type="text/javascript" charset="utf-8">
        $(function() { $('body').hide().show(); });
        </script>
<!-- GetButton.io widget -->
<script type="text/javascript">
    (function () {
        var options = {
            whatsapp: "+91 8591373711", // WhatsApp number
            call_to_action: "Message us", // Call to action
            position: "right", // Position may be 'right' or 'left'
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
    
    $(document).ready(function() {
              $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                 autoplay: true,
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: true,
                    stagePadding: 20,
                    margin: 10
                    
                  },
                  600: {
                    items: 1,
                    nav: false,
                    stagePadding: 20,
                    margin: 10
                    
                  },
                  1000: {
                    items: 5,
                    nav: true,
                    loop: true,
                    margin: 0
                  }
                }
              })
            })

    $(".clients-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  slideTransition: "linear",
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  autoplaySpeed: 4500,
  responsive: {
    0: {
      items: 2
    },
    500: {
      items: 3
    },
    600: {
      items: 4
    },
    800: {
      items: 4
    },
    1200: {
      items: 4
    }
  }
});

</script>
<!-- /GetButton.io widget -->
<script src='js/mahescript.js'></script>