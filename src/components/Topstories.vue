<template>
  <div class="Top-news">
    <section class="md:h-full flex items-center">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center md-text-left mb-12">
          <h3 class="secondary-title text-2xl md:text-4xl mb-1 font-semibold">
            {{ head }}
          </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div v-for="info in cardInfo.slice(0, 3)" :key="info.id">
            <div class="p-4">
              <div
                class="
                  h-full
                  border-opacity-30
                  rounded-none
                  overflow-hidden
                  shadow-xl
                "
              >
                <img
                  :src="`../assets/${info.pic}`"
                  :alt="info.alt"
                  class="md:h-48 lg:h-72 w-full object-cover object-center"
                />
                <div
                  class="
                    p-6
                    hover:bg-hov hover:text-white
                    transition
                    duration-300
                    ease-in
                  "
                >
                  <h1 class="text-xl font-medium mb-3">
                    {{ info.headline }}
                  </h1>
                  <!-- <p class="leading-relaxed mb-3">
                  {{ info.preview }}
                </p> -->
                  <h2 class="text-base font-normal text-[#CCC9DC] mb-1">
                    {{ info.time }}
                  </h2>
                  <div class="flex items-center flex-wrap">
                    <a
                      href="#"
                      class="
                        text-[#CCC9DC]
                        inline-flex
                        items-center
                        md:mb-2
                        lg:mb-0
                      "
                      >Read More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span
                      class="
                        text-gray-400
                        mr-3
                        inline-flex
                        items-center
                        lg:ml-auto
                        md:ml-0
                        ml-auto
                        leading-none
                        text-sm
                        pr-3
                        py-1
                        border-r-2 border-gray-200
                      "
                    >
                      <svg
                        class="w-4 h-4 mr-3"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                        ></path>
                        <circle cx="12" cy="12" r="3"></circle></svg
                      >{{ info.views }}
                    </span>
                    <span
                      class="
                        text-gray-400
                        inline-flex
                        items-center
                        leading-none
                        text-sm
                      "
                    >
                      <svg
                        class="w-4 h-4 mr-1"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                        ></path></svg
                      >{{ info.comment }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import cardInfo from "../data/cardInfo";

export default {
  name: "Topstories",
  data: function () {
    return {
      methods: {
        addPicture: function (imagePath) {
          return require("../assets/images/" + imagePath);
        },
      },
      head: "Top Stories",
      cardInfo: cardInfo,
      info: null,
    };
  },
  props: [],
};
</script>
