<template>
    <div class="mb-20 flex flex-wrap font-body">
        <site-header class="w-full" />
        <we-believe class="w-full" />
        <div class="w-full container mx-auto flex flex-wrap">
            <Content class="w-full md:w-3/5" />
            <div class="w-full md:w-2/5 flex flex-wrap p-2 content-start">
                <div class="sticky top-0">
                    <image-grid class="w-full" />
                    <contact-details class="w-full" />
                </div>
            </div>
        </div>
        <footer-menu />
    </div>
</template>

<script>
export default {}
</script>
