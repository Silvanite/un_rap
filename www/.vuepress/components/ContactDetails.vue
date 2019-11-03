<template>
    <div class="flex flex-wrap w-full p-2">
        <p class="w-full mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-current inline"><path class="primary" d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"/><path class="secondary" d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"/></svg>
            <a class="md-link_open" href="mailto:info@unrap.co.uk">info@unrap.co.uk</a>
        </p>
        <p class="w-full mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-current inline"><path class="primary" d="M15 18.12L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"/><path class="secondary" d="M9 21V5.88l5.55-2.77A1 1 0 0 1 15 3v15.1L9.45 20.9A1 1 0 0 1 9 21z"/></svg>
            <a class="md-link_open" href="https://www.google.com/maps?saddr=My+Location&daddr=un_rap,+Webber+Hill,+Falmouth">1 Webber Hill, Falmouth, TR11 2TE</a>
        </p>
        <p class="w-full ml-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="-ml-8 w-6 h-6 fill-current inline"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M13 11.59l3.2 3.2a1 1 0 0 1-1.4 1.42l-3.5-3.5A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.59z"/></svg>
            Monday – Saturday: <span class="font-bold">9:30 - 16:30</span>
            <br>
            Sunday: <span class="font-bold">10:00 - 16:00</span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'ContactDetails',

    data() {
        return {
            //
        }
    },
}
</script>