<template>
    <form @submit.prevent="someAction()">
        <div class="field">
            <label for="passport_data">
                Серия и номер паспорта
            </label>
            <!--
            Ошибка в поле будет отображена сразу после начала ввода в него данных

            data-vv-as - атрибут для кастомизации названия поля в строчке с ошибкой
            name - название поля внутри объекта валидатора
            -->
            <input
                    id="passport_data"
                    type="text"
                    v-model="passportData"
                    v-validate="{ required: true, regex: /^\d{4} \d{6}$/ }"
                    placeholder="1234 123456"
                    data-vv-as="серия и номер паспорта"
                    name="passport_data"
            >
            <div class="error" v-if="errors.has('passport_data')">
                {{ errors.first('passport_data') }}
            </div>
        </div>

        <div class="field">
            <label for="passport_date">
                Дата выдачи паспорта
            </label>
            <!--
            По дефолту все ошибки отобразятся как только вы начнете вводить данные.
            Для изменения этого поведения используйте v-model-модификатор lazy
            или флаги валидации внутри fields.passport_date

            Флаг invalid означает то, что данные в поле неправильные
            Флаг touched означает, что поле ввода создало событие blur
         -->
            <input
                    id="passport_date"
                    type="text"
                    v-model.lazy="passportDate"
                    v-validate="{ required: true, date_format: 'dd.MM.yyyy' }"
                    data-vv-as="дата выдачи паспорта"
                    name="passport_date"
            >
            <div
                    class="error"
                    v-if="fields.passport_date
          && fields.passport_date.touched
          && fields.passport_date.invalid"
            >
                {{ errors.first('passport_date') }}
            </div>
        </div>

        <div class="field">
            <label for="name">
                Имя
            </label>
            <!--
            Если хотите отобразить сразу все ошибки поля,
            то используйте модификатор continues и метод errors.collect()
            -->
            <input
                    id="name"
                    type="text"
                    v-model="name"
                    v-validate.continues="{ required: true, alpha: true, max: 10 }"
                    data-vv-as="имя"
                    name="name"
            >
            <div
                    class="error"
                    v-for="error in errors.collect('name')"
                    :key="error"
            >
                {{ error }}
            </div>
        </div>

        <button type="submit" :disabled="!isFormValid">
            Отправить форму
        </button>
    </form>
</template>
<!--
    при использовании флагов внутри fields.passport_date пришлось проверить поле passport_date
    на присутствие — во время первого рендера у vee-validate нет информации о ваших полях и,
    соответственно, нет объекта с флагами. Чтобы избавиться от этой проверки, используйте
    специальный хелпер mapFields
-->
<script>
    export default {
        name: "V_validate",
        data() {
            return {
                passportData: null,
                name: null,
                passportDate: null,
            };
        },

        computed: {
            isFormValid() {

                return Object.keys(this.fields).every(field => this.fields[field].valid);
            },
        },

        methods: {
            someAction() {
                alert("Форма отправлена");
            },
        },
    };
</script>

<style scoped>
    .field {
        margin-bottom: 24px;
    }

    .field > label {
        margin-right: 8px;
    }

    .error {
        color: red;
    }
</style>