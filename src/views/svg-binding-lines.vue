<template>
    <div class="page-svg-binding-lines">
        <div id="icons01" class="layout-icons" ref="root">
            <svg-binding-line class="layout-lines" v-if="bindingLineProps" :opt="bindingLineProps"/>
            <svg-vector class="i01 icon-js" name="twitter"/>
            <svg-vector class="i02 icon-js " name="twitter"/>
            <svg-vector class="i01 icon-js " name="twitter"/>
            <svg-vector class="i02 icon-js " name="twitter"/>
        </div>
    </div>
</template>

<script>
import SvgVector from 'svg/components/SvgVector'
import SvgBindingLine from 'svg/components/SvgBindingLine'
import {SvgBindingLineProps} from 'svg/components/SvgBindingLineProps'
export default {
    components: {SvgVector,SvgBindingLine},

    data(){return{
        bindingLineProps : null,
    }},

    mounted()
    {
        let root = null, els = null,  points = [];

        els = document.getElementsByClassName('icon-js');
        root = this.$refs.root.getBoundingClientRect();

        if (els)
        {
            [].forEach.call(els, el => {
                points.push(el.getBoundingClientRect());
            });
        }

        if (root && points.length)
        {
            this.bindingLineProps = new SvgBindingLineProps({root, points});
        }
    }
}
</script>
