<template>
  <div class="popup-wrapper">
    <div class="popup">
      <div class="close-btn">
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="content flex-column">
        <div class="popup__title">{{ popUpSelectPatern.title }}</div>
        <div class="popup__title_description">
          {{ popUpSelectPatern.title_description }}
        </div>
        <form class="popup__form flex-column">
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
              />
            </div>
          </template>
          <p class="req-description">
            <span class="red">*</span> - поля, обязательные для заполнения
          </p>
          <button class="pink-button" type="submit">
            {{ popUpSelectPatern.button }}
          </button>
          <p class="privacy-policy">
            Отправляя свои контакты, вы соглашаетесь с нашей
            <a href="" tabindex="_blank">Политикой конфиденциальности</a>
          </p>
        </form>
        <a href="https://t.me/ArtGorka" class="telegram" target="_blank">Связаться в Телеграм</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      popUpSelectPatern: {
        title: "Оставьте заявку на звонок",
        title_description: "Наш специалист свяжется с вами и проконсультирует",
        fields: [
          {
            type: "text",
            name: "name",
            placeholder: "Ваше имя",
            required: false,
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
              required: false,
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
      },
    };
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
  align-items: center;
  justify-content: center;
  .popup {
    position: relative;
    height: fit-content;
    width: 670px;
    padding: 60px 0px;
    background: #696fe6;
    border-radius: 20px;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 155px;
      background: #5356ae;
      border-radius: 20px;
      display: none;
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
      width: 460px;
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
          margin-bottom: 40px;
        }
      }
      .popup__form {
        gap: 30px;
        margin-bottom: 80px;
        .input-container {
          position: relative;
          input {
            outline: none;
            border: none;
            width: 360px;
            height: 59px;
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
              top: 15px;
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
      }
      .telegram {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 360px;
        height: 60px;
        background: #cbcdf4;
        border-radius: 20px;
        &:hover {
            background-color: #F4DCE6;
            
        }
        //Стили текста
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #5356ae;
      }
    }
  }
}
</style>