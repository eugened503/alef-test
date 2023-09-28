<template>
    <form class="form" @submit.prevent="submitForm">
        <p class="form__title">Персональные данные</p>
        <div class="form__user">
            <div class="form__row">
                <label for="name">Имя</label>
                <input type="text" placeholder="Введите имя" v-model="form.nameUser" name="name" autocomplete="on" />
                <!-- <div class="form__errors">
                    <p v-for="(error, index) of v$.nameUser.$errors" :key="index" class="form__error">
                        {{ error.$message }}
                    </p>
                </div> -->
            </div>

            <div class="form__row">
                <label for="age">Возраст</label>
                <input type="number" placeholder="Введите возраст" v-model="form.ageUser" name="age" autocomplete="on" />
                <!-- <div class="form__errors">
                    <p v-for="(error, index) of v$.ageUser.$errors" :key="index" class="form__error">
                        {{ error.$message }}
                    </p>
                </div> -->
            </div>
        </div>
        <div class="form__children">
            <div class="form__children-header">
                <p class="form__title">Дети (макс. 5)</p>
                <button type="button" class="form__button button-add">
                    <img src="/images/btn-image.svg" alt="button-image">
                    <span>Добавить ребенка</span>
                </button>
            </div>
            <div class="form__children-body">
                <div class="form__children-row">
                    <div class="form__row">
                        <label for="nameСhild">Имя</label>
                        <input type="text" placeholder="Введите имя" v-model="form.nameСhild" name="nameСhild" autocomplete="on" />
                        <!-- <div class="form__errors">
                            <p v-for="(error, index) of v$.nameСhild.$errors" :key="index" class="form__error">
                                {{ error.$message }}
                            </p>
                        </div> -->
                    </div>
                    <div class="form__row">
                        <label for="ageСhild">Возраст</label>
                        <input  type="number" placeholder="Введите возраст" v-model="form.ageСhild" name="ageСhild" autocomplete="on" />
                        <!-- <div class="form__errors">
                            <p v-for="(error, index) of v$.ageСhild.$errors" :key="index" class="form__error">
                                {{ error.$message }}
                            </p>
                        </div> -->
                    </div>
                    <button type="button" class="form__button button-delete">Удалить</button>
                </div>
                <button type="submit" class="form__button button-save">
                    <span>Сохранить</span>
                </button>
            </div>

        </div>
    </form>
</template>

<script setup>
import { computed, reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, maxLength, helpers } from '@vuelidate/validators'

const form = reactive({
    nameUser: '',
    ageUser: '',
    nameСhild: '',
    ageСhild: ''
})

// const rules = computed(() => ({
//     nameUser: {
//         $autoDirty: true,
//         required: helpers.withMessage('Поле является обязательным', required)
//     },
//     ageUser: {
//         $autoDirty: true,
//         maxLength: helpers.withMessage('Максимальная длина пароля - 2 символа', maxLength(2)),
//         required: helpers.withMessage('Поле является обязательным', required)
//     },
//     nameСhild: {
//         $autoDirty: true,
//         required: helpers.withMessage('Поле является обязательным', required)
//     },
//     ageСhild: {
//         $autoDirty: true,
//         maxLength: helpers.withMessage('Максимальная длина пароля - 2 символа', maxLength(2)),
//         required: helpers.withMessage('Поле является обязательным', required)
//     }
// }))

//const v$ = useVuelidate(rules, form)

const submitForm = async () => {
    //const isFormCorrect = await v$.value.$validate()
    //if (!isFormCorrect) return
    //action(form);
}
</script>

<style lang="scss" scoped>
.form {
    margin: 109px auto 0;
    padding: 0 24px;
    height: 100%;
    max-width: 616px;

    &__title {
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
    }

    &__user {
        margin: 20px 0 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__children {
        margin: 33px 0 0;
    }

    &__children-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
    }

    &__children-body {
        margin: 11px 0 0;
    }

    &__children-row {
        display: flex;
        gap: 18px;

        .form__row {
            width: calc(260 / 616 * 100%);
        }
    }

    &__row {
        position: relative;
        padding: 26px 16px 6px;
        border: 1px solid $clr-grey;
    }

    &__button {
        display: flex;
        align-items: center;
        gap: 7px;
        border: none;
        background-color: transparent;
        color: $clr-primary-blue;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: center;
        padding: 10px 20px;
        border: 2px solid $clr-primary-blue;
        border-radius: 100px;
        cursor: pointer;

        &.button-delete {
            padding: 0;
            border: none;
        }

        &.button-save {
            margin: 30px 0 0;
            background-color: $clr-primary-blue;
            color: $clr-primary-white;
        }

        &.button-add {
            @media screen and (max-width: $tablet) {
                padding: 10px;
            }
        }
    }

    input {
        display: block;
        width: 100%;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
        appearance: none;
        border: none;
        outline: none;
        background: none;
        opacity: 0.8;
        transition: 0.4s;
        color: $clr-primary-black;

        &:focus {
            opacity: 1;
        }

        &::placeholder {
            color: inherit;
        }

        &:placeholder-shown {
            text-overflow: ellipsis;
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    label {
        position: absolute;
        top: 8px;
        left: 16px;
        font-family: Montserrat;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: left;
        color: $clr-primary-grey;
    }

    &__errors {
        color: $clr-red;
        font-size: 12px;
    }
}
</style>
