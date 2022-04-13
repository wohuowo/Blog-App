<script>
export default {
  name: "App",
  data: function () {
    return {
      title: "Wohu",
    };
  },
  async mounted() {
    const res = await fetch("./data/db.json");
    const data = await res.json();
  },
};
</script>
<template>
  <div id="nav">
    <header class="py-5">
      <div
        class="
          container
          flex
          justify-between
          item-center
          mx-auto
          px-8
          md:px-14
          lg:px-24
          w-full
        "
      >
        <div class="blog-name text-lg font-bold">{{ title }}</div>
        <div class="hidden md:flex space-x-14 items-center">
          <router-link to="/">Home </router-link>
          <router-link to="/articles">Articles </router-link>
          <router-link to="/about"> About </router-link>
          <router-link to="/contact">
            <button class="px-6 py-2 bg-theme font-bold">Contact Me</button>
          </router-link>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <section class="footer m-0 py-10 box-border">
      <div class="social text-center pb-6">
        <a href="www.instagram.com/tony.uw"><i class="fab fa-instagram"></i></a>
        <a href="www.twitter.com/_wohu"><i class="fab fa-twitter"></i></a>
        <a href="www.github.com/wohuowo"><i class="fab fa-github"></i></a>
        <a href="www.linkedIn.com"><i class="fab fa-linkedin"></i></a>
      </div>
      <ul>
        <li><router-link to="/">Home </router-link></li>
        <li><router-link to="/articles">Articles </router-link></li>
        <li><router-link to="/about"> About </router-link></li>
        <li><router-link to="/contact"> Contact Me </router-link></li>
      </ul>
      <p class="brand-name">Obriku Tony @ 2022</p>
    </section>
  </div>
</template>
<style>
#nav a.router-link-exact-active {
  @apply text-selected-text;
}
.footer .social a {
  font-size: 24px;
  color: inherit;
  border: 1px solid #ccc;
  width: 40px;
  height: 40px;
  line-height: 38px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  margin: 0 8px;
  opacity: 0.75;
}
.footer .social a:hover {
  opacity: 0.9;
}
.footer ul {
  margin-top: 0;
  padding: 0;
  list-style: none;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 0;
  text-align: center;
}
.footer ul li a {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
}
.footer ul li {
  display: inline-block;
  padding: 0 15px;
}
.footer ul li a:hover {
  opacity: 1;
}
.footer .brand-name {
  margin-top: 15px;
  text-align: center;
  font-size: 13px;
}
</style>