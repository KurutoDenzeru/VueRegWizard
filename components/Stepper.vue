<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      color="dark"
      animated
    >
      <q-step
        :name="1"
        title="1"  
      >
        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="1" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="2"
      >
        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="2" />
          <q-btn flat @click="step = 1" color="dark" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="3"
      >
        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="3" />
          <q-btn flat @click="step = 2" color="dark" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { QStepper, QStep, QBtn, QStepperNavigation } from "quasar";
export default {
	components: {
		QStepper,
		QStep,
		QBtn,
		QStepperNavigation,
	},
	data() {
		return {
			step: 1,
			done1: false,
			done2: false,
			done3: false,
		};
	},
};
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo {
  font-size: 48px;
  color: yellow;
  background-color: black;
}

/* stepper */
.q-stepper__tab--active::after {
  content: attr(prefix);
  display: block;
  color: white;
  font-size: 40px;
  z-index: 10;
  position: absolute;
  top: 7px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
}

.q-stepper__tab:not(.q-stepper__tab--active) .q-stepper__dot {
  background-color: #000000;
}

.q-stepper {
  background-color: transparent;
  box-shadow: none;
  width: 100%;
}

.q-stepper__header--border {
  border: none;
}

.q-stepper__content {
  display: none;
}

.q-stepper__label {
  right: 48px !important;
}

.q-stepper__label--active {
  right: 55px !important;
}

.q-stepper__title {
  font-size: 35px;
  color: gray;
}

.q-stepper__caption {
  display: none;
}

.q-stepper__tab--active {
  color: #eba013;
  position: relative; /* Ensure the position is set to relative */
}

.q-stepper__tab--active .q-stepper__dot {
  background-color: #eba013;
  color: white;
  transform: scale(1.4);
  position: relative; /* Ensure the position is set to relative */
}

/* Ensure the prefix is displayed for active steps */
.q-stepper__tab--active .q-stepper__dot::after {
  content: attr(prefix);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 24px; /* Adjust font size as needed */
  font-weight: 600;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Ensure the prefix is displayed for inactive steps */
.q-stepper__tab .q-stepper__dot::after {
  content: attr(prefix);
  display: flex;
  justify-content: center;
  align-items: center;
  color: black; /* Adjust color as needed */
  font-size: 24px; /* Adjust font size as needed */
  font-weight: 600;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.q-stepper__dot {
  width: 50px;
  height: 50px;
  font-size: 24px;
  font-weight: 600;
}

/* .q-stepper__dot span i::after {
  content: attr(prefix);
  position: absolute;
  top: -10px
} */

.material-icons {
  display: none; 
}

.free-reg-container {
  font-weight: bold;
  font-size: 40px;
  font-family: 'Inter', sans-serif;
  color: white;
}

.stepper-container {
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 36px;
}

.stepper-container__inner {
  width: 420px;
  display: flex;
  justify-content: center;
  z-index: 9;
}

</style>