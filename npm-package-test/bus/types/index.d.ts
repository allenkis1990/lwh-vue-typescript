// import Vue, { ComponentOptions } from 'vue';
declare module 'vue/types/vue' {
    interface Vue {
        $bus: any;
    }
}

// declare module 'vue/types/options' {
//     interface ComponentOptions<V extends Vue> {
//         bus?: any;
//     }
// }

declare function bus():any
export default bus
