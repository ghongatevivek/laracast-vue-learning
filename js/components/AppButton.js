export default {
    template : `
        <button
        :class="{
            'border rounded px-5 py-2' : true,
            'bg-blue-200 hover:bg-blue-400' : buttonType === 'primary',
            'bg-purple-200 hover:bg-purple-400' : buttonType === 'secoundary',
        }">
            <slot/>
        </button>
    `,
    props : {
        buttonType : {
            type : String,
            default : 'primary', 
        },
    },
    // mounted () {
    //     alert("123");
    // }
}