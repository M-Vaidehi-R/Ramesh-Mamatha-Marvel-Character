//components always get imported here
import HeroThumb from './components/TheHeroThumbnail.js';
import LightBox from './components/TheLightboxComponent.js';

(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            //fetch calls always go here -> retrieve any data you need
            fetch('./data.json')  //go and get the remote data
            .then(res => res.json()) //convert the json object to plain JS object
            .then(data => this.heroData = data)  //store the data ion the vue instance
            .catch(error => console.error(error)); //report any errors that might occur
        },

        data() {
            return {
                heroData: {},
                lightboxData: {},
                showLightBox: false          //kinda a boolean expression in index.html

            }
        },

        methods: {
            loadLightBox(item) {
                //debugger;
                //pass the individual hero object back to the VM instance
                this.lightboxData = item;
                this.showLightBox=true;
            }
        },

        components: {
            herothumbnail: HeroThumb,         //its a key, which has herothumb as its value
            lightbox: LightBox
        }
    }).mount('#app')
})()