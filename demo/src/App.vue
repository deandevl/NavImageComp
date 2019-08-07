<template>
  <div>
    <nav-image-comp
        heading="Favorite Old Barns"
        :sources="sources"
        v-on:navimage_comp_current_source="show_current_source">
    </nav-image-comp>
  </div>
</template>

<script>
  import NavImageComp from 'navimagecomp';

  export default {
    name: 'App',
    data: function() {
      return {
        sources:[
          'images/1919Barn.jpg',
          'images/1919Barn_2.jpg',
          'images/Barn At Mespo Festival.jpg',
          'images/barn_30.jpg',
          'images/barn_31.jpg',
          'images/barn_32.jpg',
          'images/flowerbarn.jpg',
          'images/flowerbarn2.jpg',
          'images/H Frame Gabled Tobacco.jpg',
          'images/H Frame Interior.jpg',
          'images/HomePlaceonGreenRiver.jpg',
          'images/HomePlaceonGreenRiver_2.jpg',
          'images/HomePlaceonGreenRiver_3.jpg',
          'images/HomePlaceonGreenRiver_4.jpg',
          'images/IndianaRoundBarn.jpg',
          'images/LeaningBarn.jpg',
          'images/OhioBarn.jpg',
          'images/penn_1.jpg',
          'images/penn_2.jpg',
          'images/penn_3.jpg',
          'images/PrettyBarnIndiana.jpg',
          'images/ThreeWhiteDoorsRusselvilleKY.jpg',
          'images/Wisc_37.jpg',
          'images/Wisc_38.jpg',
          'images/Wisc_39.jpg'
        ]
      };
    },
    methods: {
      show_current_source: function(source){
        console.log(`Current Source: ${source}`)
      }
    },
    components: {
      NavImageComp
    }
  }
</script>