Vue.filter('meter',function (val,unit) {
    val=val||0;
    unit=unit||'m';
    return (val/1000).toFixed(2)+unit;
})

Vue.filter('currency',function (val,unit) {
    val = val || 0;
    unit = unit || '元';
    return val + unit;
})

new Vue({
    el: '#app',
    data: {
        price: 100,
        length: 10
    }
})
