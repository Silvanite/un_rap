<template>
    <div class="my-8 px-8 py-16 text-3xl text-gray-700 leading-none font-display bg-orange-100 md:mt-0">
        <div class="container mx-auto md:px-8 md:text-center">
            We belive in
            <span class="font-bold text-orange-500 block md:inline">
                {{ believe }}.
            </span>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            believes: [
                'sustainable choice',
                'a circular economy',
                'solutions & positivity',
                'local community',
                'oraganic food',
                'unpackaged goods',
                'low carbon miles',
                'kindness & community',
            ],
            index: 0,
        }
    },

    computed: {
        believe() {
            const {believes, index} = this

            return believes[index]
        }
    },

    methods: {
        believeMore() {
            const {believes, index} = this

            index + 1 === believes.length ? this.index = 0 : this.index++
        }
    },

    mounted() {
        window.setInterval(() => {
            this.believeMore()
        }, 2000);
    },

}
</script>