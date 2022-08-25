<template>
  <div class="popup-wrapper">
    <div class="popup" :class="!successSend ? 'bottom-decor' : ''">
      <div class="close-btn" @click="openCallBackPopUp = false">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="content flex-column" v-if="!successSend">
        <div class="popup__title">{{ popUpSelectPatern.title }}</div>
        <div class="popup__title_description">
          {{ popUpSelectPatern.title_description }}
        </div>
        <form
          ref="form"
          class="popup__form flex-column"
          @submit.prevent="customSubmitForm"
          novalidate
          :class="validationFormClass"
        >
          <template
            v-for="(field, index) in popUpSelectPatern.fields"
            :key="index"
          >
            <div
              class="input-container"
              :class="field.required ? 'required' : ''"
            >
              <input
                :type="field.type"
                :name="field.name"
                :placeholder="field.placeholder"
                :required="field.required"
                @input="
                  field.required ? changeValidationFormClass(field.name) : ''
                "
              />
            </div>
          </template>
          <p class="req-description">
            <span class="red">*</span> - поля, обязательные для заполнения
          </p>
          <vue-recaptcha
            class="captcha"
            ref="recaptcha"
            size="invisible"
            :sitekey="sitekey"
            @verify="sendMail"
            @expired="onCaptchaExpired"
          />
          <button class="pink-button" type="submit">
            {{ popUpSelectPatern.button }}
          </button>
          <p class="privacy-policy">
            Отправляя свои контакты, вы соглашаетесь с нашей
            <router-link
              :to="{ path: '/privacy', hash: '#privacy-page' }"
              @click="openCallBackPopUp = false"
              >Политикой конфиденциальности</router-link
            >
          </p>
        </form>
        <a href="https://t.me/ArtGorka" class="telegram" target="_blank"
          ><svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 1.10223L15.9946 16.7923C15.9946 16.7923 15.5741 17.8801 14.4189 17.3584L7.48458 11.8526L7.45242 11.8364C8.38909 10.9654 15.6524 4.20266 15.9698 3.89612C16.4613 3.42136 16.1562 3.13873 15.5856 3.49736L4.85679 10.553L0.717638 9.11077C0.717638 9.11077 0.0662573 8.87083 0.00359284 8.34911C-0.0598962 7.82653 0.739076 7.5439 0.739076 7.5439L17.6131 0.688948C17.6131 0.688948 19 0.05793 19 1.10223V1.10223Z"
              fill="#5356AE"
            />
          </svg>
          Связаться в Телеграм</a
        >
      </div>
      <div class="content flex-column" v-if="successSend">
        <div class="popup__title">Заявка принята</div>
        <div class="popup__title_description">Благодарим за ваше обращение</div>
        <img
          class="success-img"
          src="@\assets\image\popup-success.png"
          alt="Готово"
        />
        <div class="wait-call">
          <div class="wait-call__title">Ожидайте звонка с номера</div>
          <div class="wait-call__phone">+7 (921) 0250 250</div>
        </div>
        <div class="description">
          Наш специалист свяжется с вами для обсуждения деталей
        </div>
        <div
          class="pink-button"
          @click="
            {
              openCallBackPopUp = false;
              successSend = false;
            }
          "
        >
          Вернуться к сайту
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueRecaptcha } from "vue-recaptcha";
import axios from "axios";
// import api from "@/api";
export default {
  components: { VueRecaptcha },
  data() {
    return {
      sitekey: "6Leb2w8hAAAAAJU6tatt0pLakroQRrTWM2HMAcPZ",
      successSend: false,
      successTimer: null,
      validationFormClass: [],
      popUpSelectPatern: {
        title: "Оставьте заявку на звонок",
        title_description: "Наш специалист свяжется с вами и проконсультирует",
        fields: [
          {
            type: "text",
            name: "name",
            placeholder: "Ваше имя",
            required: true,
          },
          {
            type: "text",
            name: "phone",
            placeholder: "+7 (900) 000 00 00",
            required: true,
          },
        ],
        button: "Отправить заявку",
      },
      popUpPaterns: {
        call: {
          title: "Оставьте заявку на звонок",
          title_description:
            "Наш специалист свяжется с вами и проконсультирует",
          fields: [
            {
              type: "text",
              name: "name",
              placeholder: "Ваше имя",
              required: true,
            },
            {
              type: "text",
              name: "phone",
              placeholder: "+7 (900) 000 00 00",
              required: true,
            },
          ],
          button: "Отправить заявку",
        },
        consultationV1: {
          title: "Оставьте заявку для обсуждения деталей",
          title_description:
            "Оценим Вашу ситуацию и предложим варианты решения",
          fields: [
            {
              type: "text",
              name: "name",
              placeholder: "Ваше имя",
              required: true,
            },
            {
              type: "text",
              name: "phone",
              placeholder: "+7 (900) 000 00 00",
              required: true,
            },
            {
              type: "text",
              name: "mail",
              placeholder: "Ваш e-mail",
              required: true,
            },
            {
              type: "text",
              name: "link",
              placeholder: "Ссылка на ваш сайт",
            },
          ],
          button: "Отправить заявку",
        },
        consultationV2: {
          title: "Запишитесь на диагностическую консультацию",
          title_description:
            "Оценим Вашу ситуацию и предложим варианты решения",
          fields: [
            {
              type: "text",
              name: "name",
              placeholder: "Ваше имя",
              required: true,
            },
            {
              type: "text",
              name: "phone",
              placeholder: "+7 (900) 000 00 00",
              required: true,
            },
            {
              type: "text",
              name: "mail",
              placeholder: "Ваш e-mail",
              required: true,
            },
            {
              type: "text",
              name: "link",
              placeholder: "Ссылка на ваш сайт",
            },
          ],
          button: "Отправить заявку",
        },
        consultationV3: {
          title: "Необходим качественный прирост клиентуры?",
          title_description:
            "Оценим Вашу ситуацию и предложим варианты решения",
          fields: [
            {
              type: "text",
              name: "name",
              placeholder: "Ваше имя",
              required: true,
            },
            {
              type: "text",
              name: "phone",
              placeholder: "+7 (900) 000 00 00",
              required: true,
            },
            {
              type: "text",
              name: "mail",
              placeholder: "Ваш e-mail",
              required: true,
            },
            {
              type: "text",
              name: "link",
              placeholder: "Ссылка на ваш сайт",
            },
          ],
          button: "Отправить заявку",
        },
        case: {
          title:
            "Понравился кейс и хотите не менее успешный результат для себя?",
          title_description: "Смело заполняйте форму обратной связи!",
          fields: [
            {
              type: "text",
              name: "name",
              placeholder: "Ваше имя",
              required: true,
            },
            {
              type: "text",
              name: "phone",
              placeholder: "+7 (900) 000 00 00",
              required: true,
            },
            {
              type: "text",
              name: "mail",
              placeholder: "Ваш e-mail",
              required: true,
            },
          ],
          button: "Получить предложение",
        },
        dialogue: {
          title: "Мы готовы к предметному диалогу",
          title_description:
            "Оценим Вашу ситуацию и предложим варианты решения",
          fields: [
            {
              type: "text",
              name: "name",
              placeholder: "Ваше имя",
              required: true,
            },
            {
              type: "text",
              name: "phone",
              placeholder: "+7 (900) 000 00 00",
              required: true,
            },
            {
              type: "text",
              name: "mail",
              placeholder: "Ваш e-mail",
              required: true,
            },
          ],
          button: "Получить предложение",
        },
        price: {
          title: "Заявка на расчёт необходимых услуг",
          title_description:
            "Мы свяжемся для уточнения деталей, чтобы выполнить предварительный расчет",
          fields: [
            {
              type: "text",
              name: "name",
              placeholder: "Ваше имя",
              required: true,
            },
            {
              type: "text",
              name: "phone",
              placeholder: "+7 (900) 000 00 00",
              required: true,
            },
            {
              type: "text",
              name: "mail",
              placeholder: "Ваш e-mail",
              required: true,
            },
            {
              type: "text",
              name: "link",
              placeholder: "Ссылка на ваш сайт",
            },
          ],
          button: "Отправить заявку",
        },
      },
      reName: /^[а-яё -\s]+$/i,
      rePhone: /^[\d\+][\d\(\)\ -]{4,14}\d$/,
      reMail: /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,
    };
  },
  computed: {
    openCallBackPopUp: {
      get() {
        return this.$store.state.openCallBackPopUp;
      },
      set(value) {
        this.$store.dispatch("updateOpenCallBackPopUp", value);
      },
    },
    callBackPopUpType() {
      return this.$store.state.callBackPopUpType;
    },
  },
  methods: {
    customSubmitForm(e) {
      this.validationFormClass = [];
      const form = this.$refs.form;
      const inputs = Array.from(form.elements).filter((tag) =>
        ["input"].includes(tag.tagName.toLowerCase())
      );
      for (const input of inputs) {
        if (
          input.required &&
          input.name == "name" &&
          !this.reName.test(input.value)
        ) {
          this.validationFormClass.push("empty-" + input.name);
          continue;
        }
        if (
          input.required &&
          input.name == "phone" &&
          !this.rePhone.test(input.value)
        ) {
          this.validationFormClass.push("empty-" + input.name);
          continue;
        }
        if (
          input.required &&
          input.name == "mail" &&
          !this.reMail.test(input.value)
        ) {
          this.validationFormClass.push("empty-" + input.name);
          continue;
        }
      }
      if (!this.validationFormClass.length) {
        this.$refs.recaptcha.execute();
      }
    },
    changeValidationFormClass(fieldName) {
      if (this.validationFormClass.includes("empty-" + fieldName)) {
        this.validationFormClass.splice(
          this.validationFormClass.indexOf("empty-" + fieldName),
          1
        );
      }
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },
    async sendMail() {
      let formData = new FormData(this.$refs.form);
      formData.append("popUpType", this.callBackPopUpType);
      const response = await axios({
        method: "post",
        url: "https://************", //url for mailer api
        withCredentials: false,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Content-Type": "multipart/form-data",
          Accept: "*/*",
        },
        data: formData,
      });
      console.log(response);
      if (response.data.result == "success") {
        this.successSend = true;
        this.successTimer = setTimeout(
          function () {
            this.openCallBackPopUp = false;
            this.successSend = false;
            clearTimeout(this.successTimer);
            this.successTimer = null;
          }.bind(this),
          5000
        );
      } else {
        alert(
          "Не удалось отправить заявку, обновите страницу и попробуйте снова."
        );
      }
      // axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
      // api.mail.sendMail({formData}).catch((err) => {
      //   console.log(err);
      // });
    },
  },
  mounted() {
    this.popUpSelectPatern = this.popUpPaterns[this.callBackPopUpType];
  },
};
</script>
<style lang="scss" scoped>
.popup-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 12;
  backdrop-filter: blur(3px);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  .popup {
    margin: auto;
    position: relative;
    height: fit-content;
    width: 670px;
    padding: 50px 0px;
    background: #696fe6;
    border-radius: 20px;
    &.bottom-decor {
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 155px;
        background: #5356ae;
        border-radius: 20px;
      }
    }
    .close-btn {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 10px;
      right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .line {
        transform: rotate(45deg);
        &:nth-of-type(1) {
          position: absolute;
          width: 28px;
          height: 2px;
          background-color: #cbcdf4;
        }
        &:nth-of-type(2) {
          position: absolute;
          width: 2px;
          height: 28px;
          background-color: #cbcdf4;
        }
      }
    }
    .content {
      width: 560px;
      margin: 0 auto;
      align-items: center;
      .popup__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        color: #ffffff;
        margin-bottom: 10px;
        &_description {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          text-align: center;
          color: #ffffff;
          margin-bottom: 30px;
        }
      }
      .popup__form {
        gap: 20px;
        margin-bottom: 60px;
        .input-container {
          position: relative;
          input {
            outline: none;
            border: none;
            width: 360px;
            height: 49px;
            background: #ffffff;
            border: 1px solid #ffffff;
            border-radius: 20px;
            padding: 0px 20px;
            //Стили текста
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.02em;
            color: #424c5c;
            &::placeholder {
              color: #a1a6ae;
            }
          }
          &.required {
            &::before {
              right: 10px;
              top: 10px;
              position: absolute;
              content: "*";
              color: #ff5555;
              font-size: 40px;
            }
          }
        }
        .req-description {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: #ffffff;
          .red {
            color: #ff5555;
          }
        }
        button {
          width: 360px;
          height: 60px;
          border: none;
          outline: none;
        }
        .privacy-policy {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          text-align: center;
          color: #bfc2ff;
          a {
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #bfc2ff;
            text-decoration: underline;
          }
        }
        &.empty-name {
          input[name="name"] {
            border: 1px solid #ff5555;
          }
        }
        &.empty-phone {
          input[name="phone"] {
            border: 1px solid #ff5555;
          }
        }
        &.empty-mail {
          input[name="mail"] {
            border: 1px solid #ff5555;
          }
        }

        .captcha {
          margin: -10px 0px;
        }
      }
      .telegram {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 2;
        gap: 15px;
        width: 100%;
        max-width: 360px;
        height: 60px;
        background: #cbcdf4;
        border-radius: 20px;
        &:hover {
          background-color: #696fe5;
          color: #ffffff;
          svg {
            path {
              fill: #ffffff;
            }
          }
        }
        //Стили текста
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #5356ae;
      }
      .success-img {
        margin-bottom: 20px;
      }
      .wait-call {
        width: 300px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background-color: #ffffff;
        border-radius: 20px;
        padding: 15px 0px;
        .wait-call__phone {
          font-size: 20px;
          font-weight: 700;
          line-height: 30px;
          text-align: center;
          color: #696fe6;
        }
        .wait-call__title {
          font-weight: 500;
          font-size: 16px;
          line-height: 150%;
          text-align: center;
          color: #696fe6;
        }
      }
      .description {
        width: 360px;
        margin-bottom: 30px;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #ffffff;
      }
      .pink-button {
        width: 360px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    // align-items: flex-start;
    padding: 0px;
    overflow: auto;
    .popup {
      width: calc(100% - 20px);
      max-width: 670px;
      min-width: 320px;
      .content {
        width: calc(100% - 30px);
        max-width: 560px;
        .popup__form {
          width: 100%;
          max-width: 360px;
          .input-container {
            input {
              width: 100%;
            }
          }
          * {
            width: 100% !important;
          }
        }
      }
    }
  }
}
</style>