<template>
  <div class="q-pa-md row items-start q-gutter-md main-container">

    <!-- Dark Card -->
    <q-card dark bordered class="my-card">
      <q-card-section>
        <div id="Continue">Continue with</div>
      </q-card-section>

      <div class="icon-container" style="padding-bottom: 35px;">
        <img src="@/assets/fb-icon.png" alt="Facebook Icon">
        <div id="breakpoint"></div>
        <img src="@/assets/google-icon.png" alt="Google Icon">
      </div>

      <q-separator dark inset />

      <q-card-section style="padding: 15px ">
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <div class="row q-col-gutter-md">
            <div class="col-12 col-sm-6">
              <q-input filled v-model="username" label="Username" stack-label />
            </div>
            <div class="col-12 col-sm-6">
              <q-input filled v-model="password" label="Password" type="password" stack-label />
            </div>
            <div class="col-12 col-sm-6">
              <q-input filled v-model="confirmPassword" label="Confirm Password" type="password" stack-label />
            </div>
            <div class="col-12 col-sm-6">
              <q-input filled v-model="mobileNumber" label="Mobile Number" stack-label />
            </div>
            <div class="col-12 col-sm-6">
              <q-input filled v-model="email" label="E-mail Address" stack-label />
            </div>
            <div class="col-12 col-sm-6">
              <q-input filled v-model="identityNo" label="Identity No" stack-label />
            </div>
            <div class="col-12 col-sm-6">
              <q-input filled v-model="referral" label="Referral" stack-label />
            </div>
            <div class="col-12 col-sm-6">
              <q-input filled v-model="verificationCode" label="Verification Code" stack-label>
                <template v-slot:append>
                  <q-btn round dense flat icon="refresh" />
                </template>
              </q-input>
            </div>
          </div>
          
          <div class="q-mt-md">
            <q-checkbox v-model="agree">
              <template v-slot:default>
                I agree to <span class="terms-link">OCMS Terms & Conditions</span>
              </template>
            </q-checkbox>
          </div>

          <div class="text-center q-mt-lg">
            <q-btn type="submit" color="orange" label="Register" />
          </div>  
        </q-form>
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
export default {
	data() {
		return {
			username: "",
			password: "",
			confirmPassword: "",
			mobileNumber: "",
			email: "",
			identityNo: "",
			referral: "",
			verificationCode: "",
			agree: false,
		};
	},
	methods: {
		onSubmit() {
			// Handle form submission
		},
		onReset() {
			// Handle form reset
		},
	},
};
</script>

<style scoped>

.my-card {
  width: 100%;
  max-width: 490px;
  background-color: #1C1C1C;
  border-color: #EBA013;
  border-width: 2px;
  border-radius: 10px;
}

.icon-container {
  display: flex;
  align-items: center; /* Align items vertically in the center */
  justify-content: center; /* Distribute space between items */
  gap: 10px; /* Space between images */
  padding: 5px; /* Add padding if needed */
}

img {
  /* Optional: Styling for images */
  width: 50px; /* Adjust size as needed */
  height: auto;
}

.terms-link {
  color: #EBA013; /* This is a yellow color, you can adjust it as needed */
  cursor: pointer; /* This makes it look clickable */
}

.continue {
  
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Styles for input fields */
:deep(.q-field) {
  margin-bottom: 20px;
}

:deep(.q-field__label) {
  top: -25px;
  left: 0;
  color: #ffffff;
  font-size: 14px;
}

:deep(.q-field--filled .q-field__control) {
  background-color: #3a3a3a;  /* Light grey background */
  border-radius: 5px;
}

:deep(.q-field--filled .q-field__control:before) {
  border-bottom: none;
}

:deep(.q-field__marginal) {
  height: 56px;
}

  
</style>
