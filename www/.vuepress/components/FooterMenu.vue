<template>
    <div class="fixed bottom-0 left-0 w-full bg-white p-2 border-t border-gray-300">
        <div class="flex justify-around max-w-2xl mx-auto">
            <div class="text-center">
                <router-link to="/index">
                    <img class="inline h-16 w-16" src="../../assets/sunflower-logo-72.png" alt="">
                    <img class="hidden md:inline pr-8 h-12" src="../../assets/un_rap-logo.png" alt="">
                </router-link>
            </div>
            <div class="text-center">
                <router-link to="/howto/containers">
                    <img class="inline h-16 w-16" src="../../assets/step1.png" alt="">
                </router-link>
            </div>
            <div class="text-center">
                <router-link to="/howto/fill-containers">
                    <img class="inline h-16 w-16" src="../../assets/step2.png" alt="">
                </router-link>
            </div>
            <div class="text-center">
                <router-link to="/howto/pay">
                    <img class="inline h-16 w-16" src="../../assets/step3.png" alt="">
                </router-link>
            </div>
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