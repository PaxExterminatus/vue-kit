<template>
    <div class="page-svg-binding-lines">
        <div class="layout-icons" ref="root">
            <svg-binding-line class="layout-lines" v-if="bindingLineProps" :opt="bindingLineProps"/>
            <svg-vector class="icon-item-01 icon-js" name="twitter"/>
            <svg-vector class="icon-item-02 icon-js twitter-plus" :name="['twitter','plus']"/>
            <svg-vector class="icon-item-01 icon-js " name="twitter"/>
            <svg-vector class="icon-item-01 icon-js " name="twitter"/>
            <svg-vector class="icon-item-02 icon-js twitter-plus" :name="['twitter','plus']"/>
            <svg-vector class="icon-item-03 icon-js twitter-plus" :name="['twitter','plus']"/>
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
        let points = [], root = null;
        const els = document.getElementsByClassName('icon-js');
        [].forEach.call(els, el => {
            points.push(el.getBoundingClientRect());
        });

        root = this.$refs.root.getBoundingClientRect();

        if (points.length)
            this.bindingLineProps = new SvgBindingLineProps({root, points});
    }
}
</script>
