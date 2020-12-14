<template>
  <div class="gallery-container">
    <ul class="flex flex-wrap justify-stretch pa0">
      <li
        v-for="(item, index) in estateList"
        :key="index"
        class="flex gallery-item"
      >
        <!-- TODO: create route/component for specific estate item  -->
        <!-- <NuxtLink
          :to="`estates/${item.slug}`"
          class="no-underline"
          :alt="item.description"
        > -->
        <NuxtLink
          :to="`/our-real-estate`"
          class="no-underline"
          :alt="item.description"
        >
          <img
            :src="require(`../../assets/images/partials/${item.imgUrl}`)"
            :alt="item.description"
            class="flex"
          >
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'EstateGallery',
    data() {
        return {
            estateList: [
                {
                    name: 'Estate 1',
                    slug: 'estate_1',
                    imgUrl: 'estate_1.webp',
                    description: ''
                },
                {
                    name: 'Estate 2',
                    slug: 'estate_2',
                    imgUrl: 'estate_2.webp',
                    description: ''
                },
                {
                    name: 'Estate 3',
                    slug: 'estate_3',
                    imgUrl: 'estate_3.webp',
                    description: ''
                },
                {
                    name: 'Estate 4',
                    slug: 'estate_4',
                    imgUrl: 'estate_4.webp',
                    description: ''
                },
                {
                    name: 'Estate 5',
                    slug: 'estate_5',
                    imgUrl: 'estate_5.webp',
                    description: ''
                },
                {
                    name: 'Estate 6',
                    slug: 'estate_6',
                    imgUrl: 'estate_6.webp',
                    description: ''
                },
                {
                    name: 'Estate 7',
                    slug: 'estate_7',
                    imgUrl: 'estate_7.webp',
                    description: ''
                },
                {
                    name: 'Estate 8',
                    slug: 'estate_8',
                    imgUrl: 'estate_8.webp',
                    description: ''
                }
            ]
        };
    }
};
</script>

<style scoped>
    .gallery-item {
        flex: 1 0 21%;
    }
</style>
