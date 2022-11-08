<template>
  <div>
    <BaseLayout>
      <template v-slot:header>
        <HeaderComp/>
      </template>
      <template v-slot >
        <MainComp />
      </template>
      <template v-slot:footer>
        <FooterComp/>
      </template>
    </BaseLayout>
  </div>
</template>

<script>
  import HeaderComp from '../components/Layout/Header.vue';
  import FooterComp from '../components/Layout/Footer.vue';
  import MainComp from '../components/Layout/Main.vue';
  import BaseLayout from '../components/Layout/BaseLayout.vue';
  export default {
    name:"Index",
    components:{
      HeaderComp,
      FooterComp,
      MainComp,
      BaseLayout,
    },
  }
</script>