<template>
  <div class="flex flex-col h-screen justify-between px-[20%]">
    <header>
      <HeaderComp/>
    </header>
    <main class="mb-auto">
      <MainComp/>
    </main>
    <footer>
      <FooterComp/>
    </footer>
  </div>
</template>

<script>
  import HeaderComp from '../components/Layout/Header.vue';
  import FooterComp from '../components/Layout/Footer.vue';
  import MainComp from '../components/Layout/Main.vue';
  export default {
    name:"Index",
    components:{
      HeaderComp,
      FooterComp,
      MainComp,
    },
  }
</script>