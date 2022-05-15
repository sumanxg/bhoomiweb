<!DOCTYPE html>
<html class="no-js" lang="en" data-theme="light">

<?php $this->load->view(COMMON.'head'); ?>

<body>
    <svg xmlns="http://www.w3.org/2000/svg" style="border: 0 !important; clip: rect(0 0 0 0) !important; height: 1px !important; margin: -1px !important; overflow: hidden !important; padding: 0 !important; position: absolute !important; width: 1px !important;"
    class="root-svg-symbols-element">
        
    </svg>
    <div class="page-wrapper">
        <main class="page-auth">
            <div class="page-auth__center">
                <div class="page-auth__screen">
                    <div class="auth-logo">
                        <img class="auth-logo__icon" src="<?php echo base_url(IMAGES); ?>content/logotype.svg" width="44" alt="#" />
                        <div class="auth-logo__text">arion</div>
                    </div>
                    <img class="page-auth__screen-bg auth-bg-image-light" src="<?php echo base_url(IMAGES); ?>content/auth-bg.jpg" alt="#">
                    <img class="page-auth__screen-bg auth-bg-image-dark" src="<?php echo base_url(IMAGES); ?>content/auth-bg-dark.jpg" alt="#">
                </div>
                <div class="auth-card card">
                    <div class="card__wrapper">
                        <div class="auth-card__left">
                            <div class="auth-card__logo">
                                <div class="auth-logo">
                                    <img class="auth-logo__icon" src="<?php echo base_url(IMAGES); ?>content/logotype.svg" width="44" alt="#" />
                                    <div class="auth-logo__text">arion</div>
                                </div>
                            </div>
                            <img class="auth-card__bg auth-bg-image-light" src="<?php echo base_url(IMAGES); ?>content/auth-bg.jpg" alt="#">
                            <img class="auth-card__bg auth-bg-image-dark" src="<?php echo base_url(IMAGES); ?>content/auth-bg-dark.jpg" alt="#">
                        </div>
                        <form id="login-form-id" name="login-form" class="auth-card__right" action="<?=base_url('validate-login');?>" method="POST">
                            <div class="auth-card__top">
                                <h1 class="auth-card__title">Welcome to <span class="text-theme">Arion</span></h1>
                                <p class="auth-card__text">Welcome Back, Please login
                                    <br>to your account.</p>
                            </div>
                            <div class="auth-card__body">
                                <div class="form-group">
                                    <div class="input-group input-group--prepend"><span class="input-group__prepend">
                        <svg class="icon-icon-user">
                          <use xlink:href="#icon-user"></use>
                        </svg></span>
                         <label for="username" class="form-label">Email address</label>
                                        <input class="form-control" type="email" id="id-username" name="username" required="" placeholder="Enter your email">
                                    </div>
                                </div>
                                <div class="form-group">
                                     <label for="id-password" class="form-label">Password</label>
                                        <div class="input-group input-group-merge">
                                            <input type="password" id="id-password" name="password" class="form-control" placeholder="Enter your password">
                                            <div class="input-group-text" data-password="false">
                                                <span class="password-eye"></span>
                                            </div>
                                        </div>
                                </div>
                               
                            </div>
                            <div class="auth-card__bottom">
                                <div class="auth-card__buttons">
                                    <!-- <div class="auth-card__button"><a class="button button--secondary button--block" href="auth-create.html"><span class="button__text">Sign Up</span></a>
                                    </div> -->
                                    <div class="text-center d-grid">
                                        <div class="alert d-none" id="login_resp" role="alert"></div>
                                        <button id="id-btn_submit" name="btn_submit" class="btn btn-primary" type="submit"> Log In </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
     <?php $this->load->view(COMMON.'js'); ?>
     <script src="<?=base_url();?>assets/js/custom_js/login.js"></script>
</body>

</html>