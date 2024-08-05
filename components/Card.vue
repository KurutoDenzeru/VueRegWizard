<template>
  <div class="q-pa-md row items-center justify-center">
    <q-card dark bordered class="my-card">
      <q-card-section>
        <div id="Continue">Continue with</div>
      </q-card-section>

      <div class="icon-container" style="padding-bottom: 10px;">
        <img src="@/assets/fb-icon.png" alt="Facebook Icon">
        <div id="breakpoint"></div>
        <img src="@/assets/google-icon.png" alt="Google Icon">
      </div>

      <div class="custom-separator">
        <div class="separator-line"></div>
        <div class="separator-text">or</div>
        <div class="separator-line"></div>
      </div>

      <q-card-section style="padding: 15px; margin: 10px;">
        <ValidationObserver v-slot="{ handleSubmit }">
          <q-form @submit.prevent="handleSubmit(onSubmit)" @reset="onReset">
            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6">
                <div class="input-container">
                  <label for="name">Username</label>
                  <ValidationProvider name="username" rules="required" v-slot="{ errors }">
                    <q-input
                      filled
                      id="name"
                      v-model="name"
                      placeholder="Please enter username."
                      :error="!!errors[0]"
                      :error-message="errors[0]"
                    />
                  </ValidationProvider>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="input-container">
                  <label for="password">Password</label>
                  <ValidationProvider name="password" rules="required" vid="password" v-slot="{ errors }">
                    <q-input 
                      filled 
                      v-model="password" 
                      placeholder="Please enter password." 
                      id="password" 
                      type="password"
                      :error="!!errors[0]"
                      :error-message="errors[0]"
                    />
                  </ValidationProvider>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="input-container">
                  <label for="confirmPassword">Confirm Password</label>
                  <ValidationProvider name="confirm password" rules="required|confirmed:password" v-slot="{ errors }">
                    <q-input 
                      filled 
                      v-model="confirmPassword" 
                      placeholder="Please enter password." 
                      id="confirmPassword" 
                      type="password"
                      :error="!!errors[0]"
                      :error-message="errors[0]"
                    />
                  </ValidationProvider>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="input-container">
                  <label for="mobileNumber">Mobile Number</label>
                  <ValidationProvider name="mobile number" rules="required" v-slot="{ errors }">
                    <q-input 
                      filled 
                      v-model="mobileNumber" 
                      placeholder="Please enter mobile number." 
                      id="mobileNumber"
                      :error="!!errors[0]"
                      :error-message="errors[0]"
                    />
                  </ValidationProvider>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="input-container">
                  <label for="email">E-mail Address</label>
                  <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                    <q-input 
                      filled 
                      v-model="email" 
                      placeholder="Please enter e-mail address." 
                      id="email"
                      :error="!!errors[0]"
                      :error-message="errors[0]"
                    />
                  </ValidationProvider>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="input-container">
                  <label for="identityNo">Identity No</label>
                  <ValidationProvider name="identity number" rules="required" v-slot="{ errors }">
                    <q-input 
                      filled 
                      v-model="identityNo" 
                      placeholder="Please enter correct ID number." 
                      id="identityNo"
                      :error="!!errors[0]"
                      :error-message="errors[0]"
                    />
                  </ValidationProvider>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="input-container">
                  <label for="referral">Referral</label>
                  <q-input filled v-model="referral" placeholder="Please enter referral username." id="referral" />
                  <label style="color: #959595">Leave blank if no referral</label>
                </div>
              </div>
              <!-- Verification Code -->
              <div class="col-12 col-sm-6">
                <label for="verification-container" style="text-align: start;">Verification Code</label>
                <div class="verification-container d-flex align-items-center">
                  <ValidationProvider name="verification code" rules="required" v-slot="{ errors }">
                    <q-input
                      filled
                      v-model="verificationCode"
                      placeholder="Verification Code."
                      id="verificationCode"
                      class="flex-grow-1"
                      :error="!!errors[0]"
                      :error-message="errors[0]"
                    >
                      <template v-slot:append>
                        <div class="random-box ms-2">
                          <p class="random-number">{{ randomNum }}</p>
                        </div>
                      </template>
                    </q-input>
                  </ValidationProvider>
                </div>
              </div>
            </div>

            <div class="q-mt-md">
              <ValidationProvider name="terms" rules="required" v-slot="{ errors }">
                <q-checkbox v-model="agree" class="white-checkbox">
                  <template v-slot:default>
                    I agree to <span class="terms-link">OCMS Terms & Conditions</span>
                  </template>
                </q-checkbox>
                <span class="error">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>

            <div class="text-center q-mt-lg">
              <q-btn type="submit" rounded color="orange" label="Register" class="glossy" />
            </div>

          </q-form>
        </ValidationObserver>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import { required, email, confirmed } from "vee-validate/dist/rules";

extend("required", {
	...required,
	message: "{_field_} is required",
});

extend("email", {
	...email,
	message: "Please enter a valid email",
});

extend("confirmed", {
	...confirmed,
	message: "Passwords do not match",
});

export default {
	components: {
		ValidationObserver,
		ValidationProvider,
	},
	data() {
		return {
			name: "",
			password: "",
			confirmPassword: "",
			mobileNumber: "",
			email: "",
			identityNo: "",
			referral: "",
			agree: false,
			verificationCode: "",
			randomNum: Math.floor(1000 + Math.random() * 9000), // Generate a random 4-digit number
		};
	},
	methods: {
		onSubmit() {
			// Handle form submission
			console.log("Form submitted");
		},
		onReset() {
			// Handle form reset
			this.name = "";
			this.password = "";
			this.confirmPassword = "";
			this.mobileNumber = "";
			this.email = "";
			this.identityNo = "";
			this.referral = "";
			this.agree = false;
			this.verificationCode = "";
		},
	},
};
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 690px; /* Adjust width to accommodate the random number box */
  background-color: #1C1C1C;
  border-color: #EBA013;
  border-width: 2px;
  border-radius: 10px;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 5px;
}

.custom-separator {
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: white;
}

.separator-line {
  flex-grow: 1;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.28);
}

.separator-text {
  padding: 0 16px;
  font-size: 14px;
  white-space: nowrap;
}

.separator-line {
  margin: 10px;
}

img {
  width: 50px;
  height: auto;
}

.white-checkbox {
  color: white;
}

:deep(.white-checkbox .q-checkbox__inner) {
  color: white;
}

:deep(.white-checkbox .q-checkbox__inner:before) {
  border-color: white;
}

:deep(.white-checkbox .q-checkbox__bg) {
  border-color: white;
}

:deep(.white-checkbox .q-checkbox__svg) {
  color: #1C1C1C;
}

:deep(.white-checkbox.q-checkbox--checked .q-checkbox__bg) {
  background: white;
}

.terms-link {
  color: #EBA013;
  cursor: pointer;
}

/* Styles for input fields */
.input-container {
  display: block; /* Reverted to block to not affect other inputs */
}

.input-container label {
  display: block;
  text-align: start;
  color: #ffffff;
}

:deep(.q-field__control input::placeholder) {
  color: #C3C3C3;
  padding-left: 5px;
}

:deep(.q-field--filled .q-field__control) {
  background-color: #3a3a3a;
  border-radius: 5px;
}

:deep(.q-field--filled .q-field__control:before) {
  border-bottom: none;
}

:deep(.q-field__marginal) {
  height: 56px;
}

.verification-container {
  display: flex;
  align-items: center;
}

.random-box {
  background-color: white;
  text-align: center;
  min-width: 80px; /* Adjust as needed */
}

.random-number {
  color: red;
  font-size: 1.2em;
}

@media (max-width: 600px) {
  .my-card {
    width: 100%;
  }
}
</style>