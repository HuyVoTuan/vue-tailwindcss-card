<template>
  <main class="flex h-screen w-full items-center justify-center bg-[#F3F8FE]">
    <the-card
      :name="user.name"
      :occupation="user.occupation"
      :ratings="user.ratings"
      :description="user.description"
    />
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'David Grant',
        occupation: '3D Artist',
        ratings: {
          rate: '4.7',
          reviews: '4.447',
          students: '478'
        },
        description: `David Grant has been making video games for a living for more than 14 years as a Designer,
        Producer, Creative Director, and Executive Producer, creating games for console, mobile, PC
        and Facebook.`
      }
    }
  }
}
</script>
