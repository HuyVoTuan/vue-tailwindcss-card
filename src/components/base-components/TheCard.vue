<template>
  <section class="flex w-[507px] rounded-[25px] bg-white p-[50px]">
    <img
      class="mr-4 h-[114-px] w-[114px] self-start rounded-full border-[11px] border-[##E6EFFA]"
      src="https://placewaifu.com/image/300"
      alt="profile-image"
    />
    <article class="space-y-[28px] pt-[24px] text-[#1C2B62]">
      <div class="w-fit">
        <h1 class="font-meri text-[26px] font-bold">{{ name }}</h1>
        <h2 class="font-popi w-fit text-[16px]">{{ occupation }}</h2>
      </div>

      <ul class="font-popi w-fit space-y-[16px]">
        <li>
          <font-awesome-icon :icon="['fas', 'star']" class="mr-[4px] inline-block" />{{
            ratings.rate
          }}
          Rating
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'medal']" class="mr-[4px] inline-block" />{{
            ratings.reviews
          }}
          Reviews
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'user']" class="mr-[4px] inline-block" />{{
            ratings.students
          }}
          Students
        </li>
      </ul>

      <p class="text-md font-popi">
        {{ description }}
      </p>

      <the-button />
    </article>
  </section>
</template>

<script>
export default {
  props: ['name', 'occupation', 'ratings', 'description']
}
</script>
