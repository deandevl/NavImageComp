## nav-image-comp

**nav-image-comp** is a Vue.js (>=2.5) that provides navigation and display of a list of submitted images.  Thumbnails of the images are displayed across the top with a horizontal scroll bar appearing below if necessary.  By simply hovering over a thumbnail, a large preview rendition of the image is displayed.  Images can be quickly reviewed with the combination of horizontal scrolling and hovering over the thumbnails.  

**nav-image-comp** depends on the [vue.js](https://vuejs.org/ "Vue.js") framework. The dependency  can be installed via [npm install](https://docs.npmjs.com/cli/install.html "npm install") with the included `package.json` file.   Three [webpack](https://webpack.js.org/concepts/) npm scripts are included for building  development, production, or hot recompile/execute of the demo.   `build-dev` and `build-prod` scripts produce  a `dist` folder containing the `index.html`.  The size of the `main.js` bundle using `build-prod` is 10 KiB along with calling a CDN for incorporating the Vue framework.

## Props

A prop in Vue.js is a custom attribute for passing information from a parent component hosting **nav-image-comp** instance(s) to an **nav-image-comp** as a child component.  **nav-image-comp** has the following props for a parent to bind and send information to:

`heading` -- a heading to be displayed above the thumbnail horizontal image list (string,default: null)

`sources` --  an array of file paths to set the component's image sources (array,default: null)

`container_width` -- a number that defines the overall width dimension of the component (Number, default: 900)

`css_variables` -- defines the css variables for **nav-image-comp** (object, default: null)

## Styling

The **css_variables** prop is a javascript object that contains any combination of css variable names as keys and associated values.  The following list are the css variable names along with their default values for a quick styling of **nav-image-comp**:

```
{
  navimage_comp_font_family: 'Verdana,serif',
  navimage_comp_background_color: '#222',

  navimage_comp_heading_color: 'white',
  navimage_comp_heading_font_size: '1.5rem',
  navimage_comp_heading_font_weight: 'bold',

  navimage_comp_thumbnail_selected_border: '4px solid gold'
}
```

## Events

**nav-image-comp** has one event that notifies the parent component of the current selected image source:

```
'navimage_comp_current_source' --- returns the current selected image's source
```

The parent component can listen to the above event and provide a callback for further processing.  Events emitted from a child component back to the parent is explained at [Vue Custom Events](https://vuejs.org/v2/guide/components.html#Using-v-on-with-Custom-Events).

The demonstration shows how the event can be incorporated.

## Demonstration

One demonstration of **nav-image-comp**  is provided in the folder named `demo/dist` and can be viewed by hosting the `index.html`file.  The demo (templated in the `App.vue` file)  sets the sources of 25 jpeg image files.

As a suggestion, install [http-server](https://www.npmjs.com/package/http-server "http-server") globally via [npm](https://www.npmjs.com/ "npm") then enter the command `http-server`in the **nav-image-comp** `dist` directory.  From a browser enter the url: `localhost:8080/` to view the demo.

Here is some example code for using **nav-image-comp** taken from the `App.vue` file:

```
    <div class='demo_container'>     
      <nav-image-comp
        :sources="sources"
        heading="Favorite Old Barns"
        v-on:navimage_comp_current_source="show_current_source">
      </nav-image-comp>
    </div>
```

And the supporting data references:

```
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
    }
  },
  methods: {
    show_current_source: function(source){
      console.log(`Current Source: ${source}`)
    }
  }
```

