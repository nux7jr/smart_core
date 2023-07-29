<template>
  <header>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__li"><NuxtLink to="/">home</NuxtLink></li>
        <li class="nav__li"><NuxtLink to="/about">about</NuxtLink></li>
        <li class="nav__li"><NuxtLink to="/post">post</NuxtLink></li>
        <li class="nav__li"><NuxtLink to="/post/2">post1</NuxtLink></li>
        <li class="nav__li"><NuxtLink to="/post/asd">post404</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
<style>
.nav__list {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  gap: 2em;
}
</style>