<template>
  <div class="home bg-nav">
    <div
      class="
        container
        py-8
        lg:mt-0
        flex
        justify-between
        items-center
        mx-auto
        px-4
        sm:px-6
        md:px-10
        lg:px-20
        w-full
      "
    >
      <div class="flex flex-wrap md:flex-nowrap">
        <div
          class="flex flex-wrap lg:ml-20 justify-start max-w-xl mt-0 md:my-36"
        >
          <h1
            class="
              font-bold
              text-4xl
              md:text-5xl
              lg:text-6xl
              text-left
              md:text-left
            "
          >
            Frontend <br />
            road map
          </h1>

          <p class="font-light mt-4 inline flex-wrap justify-start">
            I do and write about frontend development
          </p>
          <div class="w-full flex justify-start">
            <button
              class="
                px-8
                py-1.5
                bg-theme
                text-white
                font-normal
                mt-12
                flex
                items-center
                space-x-3
                rounded-full
              "
            >
              <span>Start reading</span>
            </button>
          </div>
        </div>
        <img
          src="../assets/dark-monitors.jpg"
          alt="computer"
          class="
            w-3/4
            hidden
            md:!hidden
            mt-12
            md:absolute
            -mt-6
            md:mt-0
            right-0
            -z-1
          "
        />
      </div>
    </div>
  </div>
  <Topstories />
</template>

<script>
import Topstories from "../components/Topstories.vue";
import cardInfo from "../data/cardInfo";
export default {
  name: "Home",
  components: { Topstories },
  data: function () {
    return {
      cardInfo: cardInfo,
      info: null,
    };
  },
};
</script>


<style>
.-z-1 {
  z-index: -1;
}
</style>