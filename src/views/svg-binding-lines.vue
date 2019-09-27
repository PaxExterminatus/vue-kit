<template>
    <div class="page-svg-binding-lines">
        <div class="layout-icons">
            <div class="layout-lines">
                <svg-binding-lines></svg-binding-lines>
            </div>
            <svg-vector class="icon-item-01" name="twitter"/>
            <svg-vector class="icon-item-02 twitter-plus" :name="['twitter','plus']"/>
            <svg-vector class="icon-item-03" name="twitter"/>
        </div>

    </div>
</template>

<script>
import svgVector from 'svg/components/svg-vector'
import svgBindingLines from 'svg/components/svg-binding-lines'
export default {
    components: {svgVector,svgBindingLines},
}
</script>
