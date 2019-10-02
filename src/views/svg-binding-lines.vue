<template>
    <div class="page-svg-binding-lines">
        <div id="icons" class="layout-icons" ref="icons">
            <svg-binding-line class="layout-lines" v-if="bindingLineProps" :opt="bindingLineProps"/>
            <svg-vector class="i01 icon-js" name="twitter"/>
            <svg-vector class="i02 icon-js" name="twitter"/>
            <svg-vector class="i01 icon-js" name="twitter"/>
            <svg-vector class="i02 icon-js" name="twitter"/>
        </div>
    </div>
</template>

<script>
import SvgVector from 'svg/components/SvgVector'
import SvgBindingLine from 'svg/components/SvgBindingLine'
import {SvgBindingLineOpt} from 'svg/components/SvgBindingLineOpt'
export default {
    components: {SvgVector,SvgBindingLine},

    data(){return{
        bindingLineProps : null,
    }},

    mounted()
    {
        let points = [],
            els = document.getElementsByClassName('icon-js'),
            root = this.$refs.icons;

        for(const el of els) {
            points.push(el.getBoundingClientRect());
        }

        this.bindingLineProps = new SvgBindingLineOpt({
            root: root.getBoundingClientRect(),
            points,
        });
    },
}
</script>
