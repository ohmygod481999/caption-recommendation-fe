<template>
  <div class="login-form">
    <form action="/examples/actions/confirmation.php" method="post" style="padding-top: 30%;">
      <h2 class="text-center">Sign in</h2>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <span class="fa fa-user"></span>
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Username"
            required="required"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-lock"></i>
            </span>
          </div>
          <input
            type="password"
            class="form-control"
            name="password"
            placeholder="Password"
            required="required"
          />
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary login-btn btn-block">
          Sign in
        </button>
      </div>
      <div class="clearfix">
        <label class="float-left form-check-label" 
          ><input type="checkbox" /> Remember me</label
        >
        <router-link to="/Reset-password" style="margin-left: 25%;">Forgot Password?</router-link>
      </div>
      <div class="or-seperator"><i>or</i></div>
      <p class="text-center">Login with your social media account</p>
      <div class="text-center social-btn">
        <a href="#" class="btn btn-secondary"
          ><i class="fa fa-facebook"></i>&nbsp; Facebook</a
        >
        <a href="#" class="btn btn-info"
          ><i class="fa fa-twitter"></i>&nbsp; Twitter</a
        >
        <a href="#" class="btn btn-danger"
          ><i class="fa fa-google"></i>&nbsp; Google</a
        >
      </div>
    </form>
    <p class="text-center text-muted small">
      Don't have an account?
      <router-link to="/Sign-Up">Sign up here!</router-link>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
@import url(../../assets/css/main.css);
</style>