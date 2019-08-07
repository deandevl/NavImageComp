<template>
  <div class="navImageComp" :style="navImageComp_style">
    <div class="navImageComp_headerBox" v-show="heading">{{heading}}</div>
    <div class="navImageComp_thumbnailsPanel">
      <div class="navImageComp_thumbnailsDiv" :style="thumbnails_div_style">
        <img
            class="navImageComp_thumbnail__notselected"
            v-for="(source,index) in computed_sources"
            :src="source"
            :key="source"
            v-on:mouseover="thumbnail_image_hover($event)"/>
      </div>
    </div>
    <div class="navImageComp_preview">
      <img
          class="navImageComp_preview_img"
          :src="current_source"
          :style="preview_img_style">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavImageComp',
    data(){
      return {
        current_source: null,
        current_thumbnail_img: null,
        navImageComp_style: null,
        thumbnails_div_style: null,
        preview_img_style: null
      }
    },
    props: {
      heading: {
        type: String,
        default: null
      },
      sources: {
        type: Array,
        default: null
      },
      container_width: {
        type: Number,
        default: 900
      },
      css_variables: {
        type: Object,
        default: () => {
          return null;
        }
      }
    },
    computed: {
      computed_sources: function(){
        if(this.sources !== null){
          let total_width = 0;
          for(let i=0; i<this.sources.length; i++){
            //image width: 160; border: 4; padding: 1; margin-right: 10
            total_width += 160 + 8 + 2 + 10;
          }
          this.navImageComp_style = `width: ${this.container_width}px;`;
          this.thumbnails_div_style = `width: ${total_width}px;`;
          this.preview_img_style = `width: ${this.container_width * 0.9}px; height: ${this.container_width * 0.75}px`;
          return this.sources;
        }
      }
    },
    methods: {
      thumbnail_image_hover: function(e){
        this.current_source = e.currentTarget.currentSrc;

        if(this.current_thumbnail_img !== null){
          this.current_thumbnail_img.classList.remove('navImageComp_thumbnail__selected');
          this.current_thumbnail_img.classList.add('navImageComp_thumbnail__notselected');
        }
        e.currentTarget.classList.remove('navImageComp_thumbnail__notselected');
        e.currentTarget.classList.add('navImageComp_thumbnail__selected');
        this.current_thumbnail_img = e.currentTarget;
        //child to parent event
        this.$emit('navimage_comp_current_source',this.current_source);
      }
    },
    mounted(){
      if(this.css_variables !== null){
        for(let key of Object.keys(this.css_variables)){
          this.$el.style.setProperty(`--${key}`, this.css_variables[key]);
        }
      }
    }
  }
</script>

<style lang="less">
  :root {
    --navimage_comp_font_family: Verdana,serif;
    --navimage_comp_background_color: #222;

    --navimage_comp_heading_color: white;
    --navimage_comp_heading_font_size: 1.5rem;
    --navimage_comp_heading_font_weight: bold;

    --navimage_comp_thumbnail_selected_border: 4px solid gold;
  }

  .navImageComp {
    display: flex;
    flex-direction: column;
    font-family: var(--navimage_comp_font_family);
    background-color: var(--navimage_comp_background_color);
    padding: .5rem;

    &_headerBox {
      align-self: center;
      color: var(--navimage_comp_heading_color);
      font-size: var(--navimage_comp_heading_font_size);
      font-weight: var(--navimage_comp_heading_font_weight);
    }
    &_thumbnailsPanel {
      overflow-x: auto;
      padding: .5rem;

      &::-webkit-scrollbar-track {
        background-color: #F5F5F5;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      }
      &::-webkit-scrollbar {
        background-color: transparent;
        width: 12px;
        height: 12px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #D62929;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      }
    }

    &_thumbnail__notselected {
      height: 6.25rem;
      width: 10rem;
      border-radius: 20px;
      padding: 1px;
      margin-right: .5rem;
      border: 4px solid #555;
      &:hover {
        cursor: pointer;
      }
    }

    &_thumbnail__selected {
      height: 6.25rem;
      width: 10rem;
      border-radius: 20px;
      padding: 1px;
      margin-right: .5rem;
      border: var(--navimage_comp_thumbnail_selected_border);
      &:hover {
        cursor: pointer;
      }
    }

    &_preview {
      align-self: center;
      margin-top: 1.25rem;
    }

    &_preview_img {
      border: 4px solid #444;
      border-radius: 30px;
      padding: 1px;
    }
  }
</style>