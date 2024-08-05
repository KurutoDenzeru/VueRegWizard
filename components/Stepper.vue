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
        prefix="1"
        :done="done1"
      >
        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        prefix="2"
        :done="done2"
      >
        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="dark" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        prefix="3"
        :done="done3"
      >
        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Finish" />
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

.q-stepper__title {
  display: none;
}

.q-stepper__caption {
  display: none;
}

.q-stepper__tab--active {
  color: #eba013;
}

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

.q-stepper__tab:nth-child(1)::after {
  left: 40px;
}

.q-stepper__tab:nth-child(2)::after {
  left: 54px;
}

.q-stepper__tab:nth-child(3)::after {
  left: 71px;
}

.q-icon {
  display: none;
}

.q-stepper__dot {
  width: 50px;
  height: 50px;
  font-size: 24px;
  font-weight: 600;
}

.q-stepper__tab--active .q-stepper__dot {
  background-color: #eba013;
  color: white;
  transform: scale(1.4);
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