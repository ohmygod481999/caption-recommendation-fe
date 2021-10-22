<template>
  <div class="container" style="position: relative;">
    <div class="row">
      <div class="col-md-4 col-md-offset-4" style="margin-top: 15%;">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="text-center">
              <h3><i class="fa fa-lock fa-4x"></i></h3>
              <h2 class="text-center">Forgot Password?</h2>
              <p>You can reset your password here.</p>
              <div class="panel-body">
                <form
                  id="register-form"
                  role="form"
                  autocomplete="off"
                  class="form"
                  method="post"
                >
                  <div class="form-group">
                    <div class="input-group">
                      <span class="input-group-addon"
                        ><i class="glyphicon glyphicon-envelope color-blue"></i
                      ></span>
                      <input
                        id="email"
                        name="email"
                        placeholder="email address"
                        class="form-control"
                        type="email"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <input
                      name="recover-submit"
                      class="btn btn-lg btn-primary btn-block"
                      value="Reset Password"
                      type="submit"
                    />
                  </div>

                  <input
                    type="hidden"
                    class="hide"
                    name="token"
                    id="token"
                    value=""
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
.form-gap {
    padding-top: 70px; 
}
.container{
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 36%;
}

</style>