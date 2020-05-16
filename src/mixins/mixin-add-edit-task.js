export default {
    methods: {
        submitForm() {
            this.$refs.modalTaskName.$refs.name.validate();
            if (!this.$refs.modalTaskName.$refs.name.hasError) {
                this.submitTask();
            }
        }
    },
    components: {
        "modal-header": require("components/tasks/modals/shared/modal-header.vue")
            .default,
        "modal-task-name": require("components/tasks/modals/shared/modalTaskName.vue")
            .default,
        "modal-due-date": require("components/tasks/modals/shared/modalDueDate.vue")
            .default,
        "modal-due-time": require("components/tasks/modals/shared/modalDueTime.vue")
            .default,
        "modal-button": require("components/tasks/modals/shared/modal-Buttons.vue")
            .default
    }
}