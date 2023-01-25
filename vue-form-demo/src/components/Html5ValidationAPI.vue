<template>
    <form @submit.prevent="say(JSON.stringify( {email,password,repeatedPassword} ))">
        <div class="field"><label>E-mail:
            <input v-model="email" type="email" required placeholder="demo@e-mail.com">
        </label>
        </div>
        <div class="field">
            <label> Password:
                <input v-model="password" type="password" required placeholder="password">
            </label>
        </div>
        <div class="field">
            <label> repeat pass:
                <input v-model="repeatedPassword" type="password" required ref="repeatedPasswordEl"
                       placeholder="password">
            </label>
        </div>
        <button type="submit">
            Отправить форму
        </button>
    </form>
</template>

<script>
    export default {
        name: "Html5ValidationAPI",
        data() {
            return {
                email: null,
                password: null,
                repeatedPassword: null,

            };
        },

        watch: {
            repeatedPassword: 'checkPasswordsEquality',
            password: 'checkPasswordsEquality',
        },

        methods: {
            checkPasswordsEquality() {
                const {password, repeatedPassword} = this;
                const {repeatedPasswordEl} = this.$refs;

                if (password !== repeatedPassword) {
                    repeatedPasswordEl.setCustomValidity(
                        'Пароли должны совпадать',
                    );
                } else {
                    repeatedPasswordEl.setCustomValidity('');
                }
            },
            say: function (message) {
                alert(message)
            }
        },

    };
</script>