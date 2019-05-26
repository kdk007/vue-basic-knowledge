var base={
    methods: {
       show: function () {
           this.visible=true;
       } ,
        hide: function () {
            this.visible=false;
        },
        toggle: function () {
            this.visible=!this.visible;
        }
},
    data: function () {
        return {
            visible:false,
        }
    }
};
Vue.component('tooltip',{
    template: `
    <div>
        <span @mouseenter="show" @mouseleave="hide">bys</span>
        <div v-if="visible">
            白岩松
        </div>
    </div>
    `,
    mixins: [base],
    // data: function () {
    //     return {
    //         visible: true,  //会把base中的东西覆盖掉，执行这一个
    //     }
    // }
})
Vue.component('popup',{
    template: `
    <div>
        <button @click="toggle">Popup</button>
            <div v-if="visible">
                <span @click="hide">X</span>
                 <h4>title</h4>
                 Lorem ipsum dolor sit amet,consectetur adipisicing<br>
                 Lorem ipsum dolor sit amet,consectetur adipisicing<br>
                 Lorem ipsum dolor sit amet,consectetur adipisicing<br>
                 Lorem ipsum dolor sit amet,consectetur adipisicing<br>
                 Lorem ipsum dolor sit amet,consectetur adipisicing<br>
                 Lorem ipsum dolor sit amet,consectetur adipisicing<br>
                 Lorem ipsum dolor sit amet,consectetur adipisicing<br>
                 Lorem ipsum dolor sit amet,consectetur adipisicing<br>
                 Lorem ipsum dolor sit amet,consectetur adipisicing<br>
                 Lorem ipsum dolor sit amet,consectetur adipisicing<br>
                 Lorem ipsum dolor sit amet,consectetur adipisicing<br>
               
            </div>
    </div>
    `,
    mixins: [base]

})
new Vue({
    el: '#app',
    data: {

    }
})
