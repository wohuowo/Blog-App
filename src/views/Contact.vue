<template>
  <div
    class="
      container
      mt-10
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
    <section class="w-full">
      <div class="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
        <div class="space-y-12">
          <div>
            <label class="text-tc block mb-6 text-xl font-bold">Name</label>
            <input
              class="w-full border border-input-border bg-input px-4 py-4"
            />
          </div>
          <div>
            <label class="text-tc block mb-6 text-xl font-bold">Email</label>
            <input
              type="email"
              class="w-full border border-input-border bg-input px-4 py-4"
            />
          </div>
          <div>
            <label class="text-tc block mb-6 text-xl font-bold">Message</label>
            <textarea
              type="email"
              class="w-full border border-input-border bg-input px-4 py-4"
            ></textarea>
          </div>
          <button class="px-6 py-2 bg-theme text-white font-bold">
            Send it!
          </button>
        </div>
        <div class="mt-12">
          <p>080-8287-8089</p>
          <a
            href="mailto:tonyobriku@gmail.com"
            class="text-secondary underline mt-20"
            >tonyobriku@gmail.com</a
          >
          <div class="flex mt-20 space-x-6">
            <a href="#"></a>
            <a href="#"></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>