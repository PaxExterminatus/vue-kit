<template>
<svg class="binding-line-cmp" v-html="ent.htmlPoints">
    <path d="M50 50 h10 m5 0 h10 m5 0 h10 m5 0 h10 m0 5 v10 m0 5 v10 m0 5 v10 m0 5 v10 m0 5 v10 m0 5 v10"/>
</svg>
</template>

<script>
import {SvgBindingLineEntity} from './SvgBindingLineEntity'
export default {
    props: {
        opt: {}
    },

    data(){return{
        ent: new SvgBindingLineEntity({
            root: this.opt.root,
            points: this.opt.points,
        }),
    }},
}
</script>
