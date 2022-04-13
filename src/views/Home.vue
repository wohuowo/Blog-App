<template>
  <div class="home">
    <div
      class="
        container
        mt-16
        flex
        justify-between
        items-center
        mx-auto
        px-8
        md:px-14
        lg:px-24
        w-full
      "
    >
      <div class="flex flex-wrap md:flex-nowrap">
        <div
          class="
            flex flex-wrap
            lg:ml-20
            justify-center
            md:justify-start
            max-w-xl
            mt-0
            md:my-36
          "
        >
          <h1
            class="
              font-bold
              text-5xl
              md:text-6xl
              lg:text-7xl
              text-center
              md:text-left
            "
          >
            Sharing<br />
            my developer roadmap.
          </h1>
        </div>
        <!-- <img
          src="../assets/dark-monitors.jpg"
          alt="computer"
          class="w-3/4 mt-12 md:absolute -mt-6 md:mt-0 right-0 -z-1"
        /> -->
      </div>
    </div>
  </div>
  <Topstories
    v-for="info in card.slice(0, 3)"
    :key="info.value"
    :image="info.pic"
    :alt="info.alt"
  />
</template>

<script>
import Topstories from "../components/Topstories.vue";
export default {
  name: "Home",
  components: { Topstories },
  data: function () {
    return {
      card: [],
    };
  },
  async mounted() {
    const res = await fetch("./data/db.json");
    const data = await res.json();
    this.card = data;
  },
};
</script>


<style>
.-z-1 {
  z-index: -1;
}
</style>