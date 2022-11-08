export default {
    name: 'TheLightboxComponent',

    props: ['hero'],

    template: 
    `
    <section class="lightbox">
      <!--validate data goes here -->
    <!--<pre>{{ hero }}</pre>-->
      <!--remove when working -->  
     
    <img @click="closeLB" src="images/closeIcon.png" class="lightbox_close">
    <!-- hero image on the left, text on the right -->
    <!-- her image is a background image -->
    <article>
        <h3 class="lb_heading">{{ hero.name }}</h3>
        <p class="lb_text">
            {{ hero.bio }}
        </p>
        <p class="lb_text">
            {{ hero.id }}
        </p>
    </article>
    </section>
    `,

    methods: {
        closeLB(){
            this.$emit('closelb');
        }
    }
}