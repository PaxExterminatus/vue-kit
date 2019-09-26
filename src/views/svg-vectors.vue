<template>
    <div class="page-svg">
        <h1>SVG vectors</h1>
        <p>Вывод единичных векторов</p>
        <div class="row">
            <svg-vector name="twitter"/>
            <svg-vector name="plus"/>
        </div>
        <p>Комбинация векторов</p>
        <div class="row">
            <svg-vector class="twitter-plus" :name="['twitter','plus']"/>
        </div>
    </div>
</template>

<script>
import svgVector from 'svg/components/svg-vector'
export default {
    components: {svgVector},
    data(){return{

    }}
}
</script>