<template>
    <div class="flex fixed justify-around bottom-0 left-0 w-full bg-white p-2 border-t border-gray-300">
        <div class="text-center">
            <router-link to="/index">
                <img class="inline" src="../../assets/sunflower-logo-72.png" alt="">
            </router-link>
        </div>
        <div class="text-center">
            <router-link to="/howto/containers">
                <img class="inline" src="../../assets/step1.png" alt="">
            </router-link>
        </div>
        <div class="text-center">
            <router-link to="/howto/fill-containers">
                <img class="inline" src="../../assets/step2.png" alt="">
            </router-link>
        </div>
        <div class="text-center">
            <router-link to="/howto/pay">
                <img class="inline" src="../../assets/step3.png" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // headerImage: require('../../assets/unrap_jar.jpg'),
        }
    },
}
</script>