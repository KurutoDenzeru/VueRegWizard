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
        caption="Optional"
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
.q-stepper__caption {
  display: none;
}
.q-stepper__dot {
  width: 50px;
  height: 50px;
}
.q-stepper__tab--active {
  color: #EBA013;
}
.q-stepper__tab--done {
  color: #EBA013;
}
.q-icon {
  size: 50px
}
</style>