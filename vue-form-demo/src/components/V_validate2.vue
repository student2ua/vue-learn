<template>

    <form v-on:submit.prevent="$validator.validateAll();say(JSON.stringify( form ))">
        <h1 class="title">Fun with Forms in Vue 2.0</h1>
        <p class="subtitle">
            Validating user inputs with  <strong>vee-validate</strong>!
        </p>
        <section class="form">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input name="name"
                           v-model.trim="form.name"
                           v-validate="'required|min:3'"
                           v-bind:class="{'is-danger': errors.has('name')}"
                           class="input" type="text" placeholder="text input">
                </div>
                <p class="help is-danger" v-show="errors.has('name')">
                    {{ errors.first('name') }}
                </p>
            </div>
            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Message" v-model="form.message"></textarea>
                </div>
            </div>
            <div class="field">
                <label class="label">Inquiry Type</label>
                <div class="control">
                    <div class="select">
                        <select class="browser-default" v-model="form.inquiry">
                            <option disabled value="">Nosing selected</option>
                            <option v-for="optionIT in options.inquiry" v-bind:key="optionIT.value"
                                    v-bind:value="optionIT.value">
                                {{optionIT.text}}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Multi select</label>
                <div class="control">
                    <div class="select is-multiple">
                        <select multiple v-model="form.multi">
                            <option>Debugging</option>
                            <option>Fixing Errors</option>
                            <option>User support</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label class="checkbox">
                        <input type="checkbox" v-model="form.terms"> I agree to the <a href="#">terms and conditions</a>
                    </label>
                </div>
            </div>
        </section>
        <div class="field">
            <label class="checkbox">
                <strong>c h e c k box</strong>

                <input type="checkbox" v-model="form.concepts" value="promises">Promises
            </label>
        <label class="checkbox"   >
            <input type="checkbox" v-model="form.concepts" value="testing">Testing
        </label>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button
                        v-bind:disabled="errors.any()"
                        class="button is-primary">
                    Submit
                </button>
            </div>
        </div>
    </form>
</template>
<script>
    export default {
        name: "V_validate2",
        data() {
            return {
                form: {
                    name: '',
                    message: '',
                    inquiry: '',   // single select box value
                    multi: [],
                    terms: false, // single checkbox value
                    concepts: []
                },
                options: {
                    inquiry: [
                        {value: 'feature', text: 'Feature request'},
                        {value: 'bug', text: 'Bug report'},
                        {value: 'support', text: 'Support'}
                    ]
                }
            }
        } , methods:{
            consoleLog:function (event) {
             alert("Submit");
                if (event) {
                    alert(event.target.tagName)
                }
            },
            say: function (message) {
                alert(message)
            }
        }
    }

</script>
<style>
  /*  #results {
        position: fixed;
        right: 0;
        top: 10%;
    }*/
</style>