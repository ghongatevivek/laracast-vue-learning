export default {
    template : `
        <button>
            <slot/>
        </button>
    `,

    mounted () {
        alert("123");
    }
}