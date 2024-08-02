<template>
  <div class="container">
    <div>
      <Logo />
      <Stepper />
      <Card />
      <!-- <Index /> -->
    </div>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import Stepper from "~/components/Stepper.vue";
import Card from "~/components/Card.vue";
export default {
	components: {
		Logo,
		Stepper,
		Card,
	},
};
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgb(151,42,177);
  background: linear-gradient(0deg, rgba(151,42,177,1) 0%, rgba(28,58,112,1) 80%, rgba(8,24,50,1) 100%);
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495E;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>