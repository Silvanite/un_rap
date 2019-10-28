<template>
    <ul class="flex flex-col w-full">
        <li v-for="{path, title, frontmatter} in navItems" class="flex-1">
            <router-link
                :to="path"
                class="md-link_open"
            >
                {{ title }}
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        path: {
            type: String,
            required: false,
            default: null,
        },
    },
    computed: {
        allItems() {
            return this.$site.pages
        },
        navItems() {
            if (this.filterPath === '/') return null
            return this.$site.pages
                .filter(({ path }) => path !== this.filterPath)
                .filter(({ path }) => path.match(new RegExp(`^${this.filterPath}?.*`)))
                .sort((a, b) => a.path < b.path ? 1 : -1)
        },
        filterPath() {
            return this.path || this.$page.path
        }
    },
}
</script>

<style>
    .router-link {}
    .router-link-exact-active {}
</style>