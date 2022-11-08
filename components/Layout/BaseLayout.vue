<template>
    <div class="container">
      <header class="fixed top-0 w-full px-[10%]">
        <slot name="header"></slot>
      </header>
      <main class="w-full">
        <slot></slot>
      </main>
      <footer class="fixed bottom-0 w-full px-[10%]">
        <slot name="footer"></slot>
      </footer>
    </div>
</template>