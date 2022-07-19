<template>
  <!-- header-place Этот блок нужен для того, чтобы не менялся размер страницы (убирает баг с дерганием header) -->
  <div class="header-place"></div>
  <div class="header" :class="scroll ? 'scroll' : ''">
    <div
      class="header-wrapper desctop flex"
      :class="openSpecialMenu ? 'modified-menu' : ''"
    >
      <div class="decor">
        <a href="#" class="logo">
          <svg
            width="90"
            height="65"
            viewBox="0 0 90 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M89.9945 7.20006V0H62.3945V7.20006H72.5945V19.2002C72.5945 22.5139 75.2808 25.2002 78.5945 25.2002H79.7945V7.20006H89.9945Z"
              fill="#696FE6"
            />
            <path
              d="M79.7967 28.7998H72.5967V35.9999H79.7967V28.7998Z"
              fill="#696FE6"
            />
            <path
              d="M38.3968 35.9998C40.385 35.9998 41.9968 34.388 41.9968 32.3998C41.9968 30.4116 40.385 28.7998 38.3968 28.7998C36.4086 28.7998 34.7969 30.4116 34.7969 32.3998C34.7969 34.388 36.4086 35.9998 38.3968 35.9998Z"
              fill="#696FE6"
            />
            <path
              d="M62.3982 35.9993H57.5446C55.6864 35.9993 53.933 35.1384 52.7969 33.668L44.3984 22.7993H52.278L62.3982 35.9993Z"
              fill="#696FE6"
            />
            <path
              d="M59.3966 12.3C59.3966 15.1957 57.5966 21 52.274 22.8C51.2146 23.2082 49.7967 23.4 48.5967 23.4C47.3967 23.4 44.3968 22.8 44.3968 22.8C49.4372 21.7571 52.1969 16.8 52.1969 12.6C52.1969 9.6 50.0969 7.2 47.0967 7.19999C44.3968 7.19999 41.9968 9.37499 41.9968 12.3V25.2H40.7969C37.4832 25.2 34.7969 22.5137 34.7969 19.2V12.3C34.7969 11.76 34.8569 9.83998 34.9769 9.29998C36.2587 4.27952 41.2039 0 46.4967 0C46.8367 0 47.0567 0 47.3967 0C54.3118 0.15367 59.3966 5.66863 59.3966 12.3Z"
              fill="#696FE6"
            />
            <path
              d="M32.401 36H29.1119C26.7349 36 24.582 34.5967 23.6225 32.4219L16.2007 15.6L8.77946 32.4218C7.81999 34.5967 5.66703 36 3.28994 36H0.000976562L15.6012 0H16.8012L32.401 36Z"
              fill="#696FE6"
            />
            <path
              d="M16.2006 28.7998L12.6006 35.9998H19.8006L16.2006 28.7998Z"
              fill="#FF5555"
            />
            <path
              d="M15.6247 54.8558H19.0167V48.1358H9.5127C7.30356 48.1358 5.5127 49.9267 5.5127 52.1358V60.9998C5.5127 63.2089 7.30356 64.9998 9.5127 64.9998H19.0167V58.2478H15.6247V61.8318H8.8727V51.3038H15.6247V54.8558Z"
              fill="#696FE6"
            />
            <path
              d="M23.0664 60.9998C23.0664 63.2089 24.8573 64.9998 27.0664 64.9998H30.3624V61.8318H26.4264V41.3838H23.0664V60.9998Z"
              fill="#696FE6"
            />
            <path
              d="M34.1202 44.7438H37.4802V41.3838H34.1202V44.7438ZM34.1202 64.9998H37.4802V48.1358H34.1202V64.9998Z"
              fill="#696FE6"
            />
            <path
              d="M51.5359 64.9998H54.9279V52.1358C54.9279 49.9266 53.1371 48.1358 50.9279 48.1358H41.4239V64.9998H44.7839V51.3038H51.5359V64.9998Z"
              fill="#696FE6"
            />
            <path
              d="M59.1027 43.0638C59.1027 43.9916 59.8549 44.7438 60.7827 44.7438C61.7105 44.7438 62.4627 43.9916 62.4627 43.0638C62.4627 42.136 61.7105 41.3838 60.7827 41.3838C59.8549 41.3838 59.1027 42.136 59.1027 43.0638ZM59.1027 64.9998H62.4627V48.1358H59.1027V64.9998Z"
              fill="#696FE6"
            />
            <path
              d="M76.5184 54.8558H79.9104V48.1358H70.4064C68.1973 48.1358 66.4064 49.9267 66.4064 52.1358V60.9998C66.4064 63.2089 68.1973 64.9998 70.4064 64.9998H79.9104V58.2478H76.5184V61.8318H69.7664V51.3038H76.5184V54.8558Z"
              fill="#696FE6"
            />
          </svg>
        </a>
        <div class="dot-arrow" @click="openSpecialMenu = !openSpecialMenu">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <a
          class="special-link"
          href="#block3"
          @click="openSpecialMenu = !openSpecialMenu"
          >Услуги медицинского маркетинга</a
        >
      </div>
      <div class="links">
        <div
          class="scroll_tracking__links"
          :class="scroll_tracking__linksClass"
        >
          <div class="links_row" ref="links_row">
            <a href="#step-one">Ребрендинг</a>
            <a href="#step-two">Веб-разработка</a>
            <a href="#step-three">Маркетинг</a>
          </div>
          <div
            class="prograss_row"
            :style="
              'padding-left:' +
              scrollTrackingLinksWidth.firstElement / 2 +
              'px; padding-right:' +
              scrollTrackingLinksWidth.thirdElement / 2 +
              'px;'
            "
          >
            <div class="progress">
              <div
                class="progress-active"
                :style="'width:' + progressWidth"
              ></div>
            </div>
          </div>
        </div>
        <a href="#block7">Кейсы</a>
        <a href="#block8">Наши методики</a>
        <a href="#block9">Результативность</a>
        <a href="#block10">Отзывы</a>
        <a href="#block11">Кто мы</a>
        <a href="#contacts">Контакты</a>
      </div>
      <!-- <div class="links">
        <a href="#block3">Услуги</a>
        <div
          class="scroll_tracking__links"
          :class="scroll_tracking__linksClass"
        >
          <div class="links_row" ref="links_row">
            <a href="#step-one">Ребрендинг</a>
            <a href="#step-two">Разработка сайта</a>
            <a href="#step-three">Маркетинг</a>
          </div>
          <div
            class="prograss_row"
            :style="
              'padding-left:' +
              scrollTrackingLinksWidth.firstElement / 2 +
              'px; padding-right:' +
              scrollTrackingLinksWidth.thirdElement / 2 +
              'px;'
            "
          >
            <div class="progress">
              <div
                class="progress-active"
                :style="'width:' + progressWidth"
              ></div>
            </div>
          </div>
        </div>
        <a href="#block7">Кейсы</a>
        <a href="#block8">Методы</a>
        <a href="#block9">Пример</a>
        <a href="#block10">Отзывы</a>
        <a href="#contacts">Контакты</a>
      </div> -->
      <div class="contact">
        <a href="" class="phone"> +7 921 0 250-250</a>
        <div class="order-call"><div class="text">Заказать звонок</div></div>
        <!-- <div class="order-call flex">
          <div class="phone-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 11.6833V14.63C15.5001 14.841 15.4202 15.0441 15.2763 15.1985C15.1325 15.3528 14.9355 15.4469 14.725 15.4617C14.3608 15.4867 14.0633 15.5 13.8333 15.5C6.46917 15.5 0.5 9.53083 0.5 2.16667C0.5 1.93667 0.5125 1.63917 0.538333 1.275C0.553102 1.06454 0.647151 0.867509 0.801503 0.723674C0.955855 0.579839 1.15902 0.499905 1.37 0.5H4.31667C4.42003 0.499896 4.51975 0.538216 4.59644 0.607517C4.67313 0.676818 4.72133 0.772152 4.73167 0.875C4.75083 1.06667 4.76833 1.21917 4.785 1.335C4.95061 2.49077 5.29 3.61486 5.79167 4.66917C5.87083 4.83583 5.81917 5.035 5.66917 5.14167L3.87083 6.42667C4.97038 8.98871 7.01212 11.0305 9.57417 12.13L10.8575 10.335C10.91 10.2617 10.9865 10.2091 11.0737 10.1864C11.161 10.1637 11.2535 10.1723 11.335 10.2108C12.3892 10.7116 13.513 11.0501 14.6683 11.215C14.7842 11.2317 14.9367 11.25 15.1267 11.2683C15.2294 11.2789 15.3245 11.3271 15.3936 11.4038C15.4628 11.4805 15.501 11.5801 15.5008 11.6833H15.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="text">Заказать звонок</div>
        </div> -->
      </div>
    </div>
    <div class="adaptive flex">
      <div class="decor">
        <a href="#" class="logo">
          <svg
            width="90"
            height="65"
            viewBox="0 0 90 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M89.9945 7.20006V0H62.3945V7.20006H72.5945V19.2002C72.5945 22.5139 75.2808 25.2002 78.5945 25.2002H79.7945V7.20006H89.9945Z"
              fill="#696FE6"
            />
            <path
              d="M79.7967 28.7998H72.5967V35.9999H79.7967V28.7998Z"
              fill="#696FE6"
            />
            <path
              d="M38.3968 35.9998C40.385 35.9998 41.9968 34.388 41.9968 32.3998C41.9968 30.4116 40.385 28.7998 38.3968 28.7998C36.4086 28.7998 34.7969 30.4116 34.7969 32.3998C34.7969 34.388 36.4086 35.9998 38.3968 35.9998Z"
              fill="#696FE6"
            />
            <path
              d="M62.3982 35.9993H57.5446C55.6864 35.9993 53.933 35.1384 52.7969 33.668L44.3984 22.7993H52.278L62.3982 35.9993Z"
              fill="#696FE6"
            />
            <path
              d="M59.3966 12.3C59.3966 15.1957 57.5966 21 52.274 22.8C51.2146 23.2082 49.7967 23.4 48.5967 23.4C47.3967 23.4 44.3968 22.8 44.3968 22.8C49.4372 21.7571 52.1969 16.8 52.1969 12.6C52.1969 9.6 50.0969 7.2 47.0967 7.19999C44.3968 7.19999 41.9968 9.37499 41.9968 12.3V25.2H40.7969C37.4832 25.2 34.7969 22.5137 34.7969 19.2V12.3C34.7969 11.76 34.8569 9.83998 34.9769 9.29998C36.2587 4.27952 41.2039 0 46.4967 0C46.8367 0 47.0567 0 47.3967 0C54.3118 0.15367 59.3966 5.66863 59.3966 12.3Z"
              fill="#696FE6"
            />
            <path
              d="M32.401 36H29.1119C26.7349 36 24.582 34.5967 23.6225 32.4219L16.2007 15.6L8.77946 32.4218C7.81999 34.5967 5.66703 36 3.28994 36H0.000976562L15.6012 0H16.8012L32.401 36Z"
              fill="#696FE6"
            />
            <path
              d="M16.2006 28.7998L12.6006 35.9998H19.8006L16.2006 28.7998Z"
              fill="#FF5555"
            />
            <path
              d="M15.6247 54.8558H19.0167V48.1358H9.5127C7.30356 48.1358 5.5127 49.9267 5.5127 52.1358V60.9998C5.5127 63.2089 7.30356 64.9998 9.5127 64.9998H19.0167V58.2478H15.6247V61.8318H8.8727V51.3038H15.6247V54.8558Z"
              fill="#696FE6"
            />
            <path
              d="M23.0664 60.9998C23.0664 63.2089 24.8573 64.9998 27.0664 64.9998H30.3624V61.8318H26.4264V41.3838H23.0664V60.9998Z"
              fill="#696FE6"
            />
            <path
              d="M34.1202 44.7438H37.4802V41.3838H34.1202V44.7438ZM34.1202 64.9998H37.4802V48.1358H34.1202V64.9998Z"
              fill="#696FE6"
            />
            <path
              d="M51.5359 64.9998H54.9279V52.1358C54.9279 49.9266 53.1371 48.1358 50.9279 48.1358H41.4239V64.9998H44.7839V51.3038H51.5359V64.9998Z"
              fill="#696FE6"
            />
            <path
              d="M59.1027 43.0638C59.1027 43.9916 59.8549 44.7438 60.7827 44.7438C61.7105 44.7438 62.4627 43.9916 62.4627 43.0638C62.4627 42.136 61.7105 41.3838 60.7827 41.3838C59.8549 41.3838 59.1027 42.136 59.1027 43.0638ZM59.1027 64.9998H62.4627V48.1358H59.1027V64.9998Z"
              fill="#696FE6"
            />
            <path
              d="M76.5184 54.8558H79.9104V48.1358H70.4064C68.1973 48.1358 66.4064 49.9267 66.4064 52.1358V60.9998C66.4064 63.2089 68.1973 64.9998 70.4064 64.9998H79.9104V58.2478H76.5184V61.8318H69.7664V51.3038H76.5184V54.8558Z"
              fill="#696FE6"
            />
          </svg>
        </a>
        <div class="dot-arrow">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <a class="special-link" href="#block3"
          >Услуги медицинского маркетинга</a
        >
      </div>
      <div class="menu-btn" @click="openMenu = true">
        <div class="menu-decor">
          <div class="menu-decor__line"></div>
          <div class="menu-decor__line"></div>
          <div class="menu-decor__line"></div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <div class="menu-wrapper" v-if="openMenu" key="menu-wrapper">
          <div class="menu">
            <div class="menu-header flex">
              <svg
                width="69"
                height="50"
                viewBox="0 0 69 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M68.9959 5.53851V0H47.8359V5.53851H55.6559V14.7694C55.6559 17.3184 57.7154 19.3848 60.2559 19.3848H61.1759V5.53851H68.9959Z"
                  fill="white"
                />
                <path
                  d="M61.1782 22.1538H55.6582V27.6923H61.1782V22.1538Z"
                  fill="white"
                />
                <path
                  d="M29.4377 27.6923C30.962 27.6923 32.1977 26.4524 32.1977 24.923C32.1977 23.3936 30.962 22.1538 29.4377 22.1538C27.9134 22.1538 26.6777 23.3936 26.6777 24.923C26.6777 26.4524 27.9134 27.6923 29.4377 27.6923Z"
                  fill="white"
                />
                <path
                  d="M47.8389 27.6919H44.1178C42.6932 27.6919 41.3489 27.0297 40.4779 25.8986L34.0391 17.5381H40.0801L47.8389 27.6919Z"
                  fill="white"
                />
                <path
                  d="M45.5375 9.46152C45.5375 11.689 44.1575 16.1538 40.0769 17.5384C39.2647 17.8525 38.1776 18 37.2576 18C36.3376 18 34.0377 17.5384 34.0377 17.5384C37.902 16.7362 40.0177 12.9231 40.0177 9.69231C40.0177 7.38461 38.4077 5.53846 36.1076 5.53846C34.0377 5.53845 32.1977 7.21153 32.1977 9.46153V19.3846H31.2777C28.7372 19.3846 26.6777 17.3182 26.6777 14.7692V9.46152C26.6777 9.04613 26.7237 7.56921 26.8157 7.15383C27.7985 3.29193 31.5898 0 35.6476 0C35.9083 0 36.077 0 36.3376 0C41.6392 0.118207 45.5375 4.36049 45.5375 9.46152Z"
                  fill="white"
                />
                <path
                  d="M24.841 27.6923H22.3194C20.497 27.6923 18.8464 26.6129 18.1108 24.9399L12.4208 12L6.73115 24.9399C5.99555 26.6128 4.34495 27.6923 2.52252 27.6923H0.000976562L11.9612 0H12.8812L24.841 27.6923Z"
                  fill="white"
                />
                <path
                  d="M12.4211 22.1538L9.66113 27.6923H15.1811L12.4211 22.1538Z"
                  fill="#FF5555"
                />
                <path
                  d="M11.9791 41.1541H14.5796V37.0278H8.22656C6.01743 37.0278 4.22656 38.8187 4.22656 41.0278V46.0001C4.22656 48.2093 6.01742 50.0001 8.22656 50.0001H14.5796V45.7695H11.9791V47.5632H6.80256V39.4648H11.9791V41.1541Z"
                  fill="white"
                />
                <path
                  d="M17.6844 46.0001C17.6844 48.2093 19.4753 50.0001 21.6844 50.0001H23.278V47.5632H20.2604V31.834H17.6844V46.0001Z"
                  fill="white"
                />
                <path
                  d="M26.159 34.4186H28.735V31.834H26.159V34.4186ZM26.159 50.0001H28.735V37.0278H26.159V50.0001Z"
                  fill="white"
                />
                <path
                  d="M39.5111 50.0001H42.1116V41.0278C42.1116 38.8187 40.3207 37.0278 38.1116 37.0278H31.7585V50.0001H34.3345V39.4648H39.5111V50.0001Z"
                  fill="white"
                />
                <path
                  d="M45.3122 33.1263C45.3122 33.8376 45.8889 34.4186 46.6002 34.4186C47.3116 34.4186 47.8882 33.8376 47.8882 33.1263C47.8882 32.4149 47.3116 31.834 46.6002 31.834C45.8889 31.834 45.3122 32.4149 45.3122 33.1263ZM45.3122 50.0001H47.8882V37.0278H45.3122V50.0001Z"
                  fill="white"
                />
                <path
                  d="M58.6643 41.1541H61.2648V37.0278H54.9118C52.7026 37.0278 50.9118 38.8187 50.9118 41.0278V46.0001C50.9118 48.2093 52.7026 50.0001 54.9118 50.0001H61.2648V45.7695H58.6643V47.5632H53.4878V39.4648H58.6643V41.1541Z"
                  fill="white"
                />
              </svg>
              <div class="close-btn" @click="openMenu = false">
                <div class="close-btn__line"></div>
                <div class="close-btn__line"></div>
              </div>
            </div>
            <div class="menu-links flex">
              <div class="left">
                <div
                  class="dropdown-link link"
                  :class="adaptiveMenuDropDown ? 'open' : ''"
                  @click="adaptiveMenuDropDown = !adaptiveMenuDropDown"
                >
                  <div class="top flex">
                    <div class="dropdown-link__title">Услуги</div>
                    <div class="dropdown-link__decor">
                      <svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="white"
                          stroke-width="2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="dropdown-link__content">
                    <a href="" class="link">Ребрендинг</a
                    ><a href="" class="link">Веб-разработка</a
                    ><a href="" class="link">Маркетинг</a>
                  </div>
                </div>
                <a href="#block7" class="link" @click="openMenu = false"
                  >Кейсы</a
                >
                <a href="#block8" class="link" @click="openMenu = false"
                  >Наши методики</a
                >
                <a href="#block9" class="link" @click="openMenu = false"
                  >Результативность</a
                >
              </div>
              <div class="right">
                <a href="#block10" class="link" @click="openMenu = false"
                  >Отзывы</a
                >
                <a href="#block11" class="link" @click="openMenu = false"
                  >Кто мы</a
                >
                <a href="" class="link" @click="openMenu = false">Контакты</a>
              </div>
            </div>
            <div class="contact flex">
              <div class="pink-button">Заказать звонок</div>
              <a class="phone flex">
                <svg
                  class="icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 11.6833V14.63C15.5001 14.841 15.4202 15.0441 15.2763 15.1985C15.1325 15.3528 14.9355 15.4469 14.725 15.4617C14.3608 15.4867 14.0633 15.5 13.8333 15.5C6.46917 15.5 0.5 9.53083 0.5 2.16667C0.5 1.93667 0.5125 1.63917 0.538333 1.275C0.553102 1.06454 0.647151 0.867509 0.801503 0.723674C0.955855 0.579839 1.15902 0.499905 1.37 0.5H4.31667C4.42003 0.499896 4.51975 0.538216 4.59644 0.607517C4.67313 0.676818 4.72133 0.772152 4.73167 0.875C4.75083 1.06667 4.76833 1.21917 4.785 1.335C4.95061 2.49077 5.29 3.61486 5.79167 4.66917C5.87083 4.83583 5.81917 5.035 5.66917 5.14167L3.87083 6.42667C4.97038 8.98871 7.01212 11.0305 9.57417 12.13L10.8575 10.335C10.91 10.2617 10.9865 10.2091 11.0737 10.1864C11.161 10.1637 11.2535 10.1723 11.335 10.2108C12.3892 10.7116 13.513 11.0501 14.6683 11.215C14.7842 11.2317 14.9367 11.25 15.1267 11.2683C15.2294 11.2789 15.3245 11.3271 15.3936 11.4038C15.4628 11.4805 15.501 11.5801 15.5008 11.6833H15.5Z"
                    fill="white"
                  />
                </svg>

                <div class="number">+7 921 0 250-250</div></a
              >
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scroll: false,
      scrollTrackingLinksWidth: {
        firstElement: 0,
        secondElement: 0,
        thirdElement: 0,
      },
      openMenu: false,
      adaptiveMenuDropDown: false,
    };
  },
  computed: {
    scroll_tracking__linksClass() {
      return this.$store.getters.getscrollTrackungStatus;
    },
    progressWidth() {
      if (this.scroll_tracking__linksClass == "active1") {
        return 0;
      } else if (this.scroll_tracking__linksClass == "active2") {
        return (
          this.scrollTrackingLinksWidth.firstElement / 2 +
          this.scrollTrackingLinksWidth.secondElement / 2 +
          55 +
          "px"
        );
      } else if (this.scroll_tracking__linksClass == "active3") {
        return "100%";
      } else {
        return "0px";
      }
    },
    openSpecialMenu: {
      get() {
        return this.$store.state.openSpecialMenuStatus;
      },
      set(value) {
        this.$store.dispatch("updateOpenSpecialMenuStatus", value);
      },
    },
  },
  mounted() {
    // const scrollTracking_linksRowSize = this.$refs.links_row.offsetWidth;
    const scrollTracking_linksChild = this.$refs.links_row.children;
    //Длинна первой ссылки
    this.scrollTrackingLinksWidth.firstElement =
      scrollTracking_linksChild[0].offsetWidth;
    //Длинна второй ссылки
    this.scrollTrackingLinksWidth.secondElement =
      scrollTracking_linksChild[1].offsetWidth;
    //Длинна третей ссылки
    this.scrollTrackingLinksWidth.thirdElement =
      scrollTracking_linksChild[2].offsetWidth;

    //Прикрепление шапки при скроле
    let scrollAmount = window.innerWidth <= 768 ? 0 : 120;
    window.addEventListener("resize", function () {});
    window.addEventListener(
      "scroll",
      function (event) {
        this.scroll = event.currentTarget.scrollY >= scrollAmount;
      }.bind(this)
    );
  },
};
</script>
<style lang="scss" scoped>
.header-place {
  height: 100px;
  width: 100%;
  position: relative;
  margin-bottom: -120px;
}
.header {
  width: 100%;
  height: 100px;
  transition: 0.5s;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 10;
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    content: "";
    background: #ffffff;
  }
  &::after {
    position: absolute;
    left: 50%;
    top: 0;
    width: 50%;
    height: 100%;
    content: "";
    background: #f4f5f9;
  }
  .header-wrapper {
    position: relative;
    z-index: 1;
    width: 1366px;
    padding: 0px 30px;
    margin: 0px auto;
  }
  .desctop {
    height: 100%;
    align-items: center;
    .decor {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      background-color: #ffffff;
      .logo {
        margin-right: 42px;
      }
      .dot-arrow {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-right: 25px;
        transition: margin-right 0.3s;
        cursor: pointer;
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 100%;
          background-color: #696fe5;
          transition: 0.3s;
          &:nth-of-type(2),
          &:nth-of-type(4) {
            margin-left: 10px;
          }
          &:nth-of-type(3) {
            margin-left: 20px;
          }
        }
      }
      .special-link {
        width: 74px;
        position: relative;
        cursor: pointer;
        //Стили текста
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: #5356ae;
        transition: 0.2s;
      }
      &::before {
        position: absolute;
        content: "";
        right: 0;
        transform: translateX(100%);
        width: 0;
        height: 0;
        border-top: 50px solid transparent;
        border-left: 52px solid #ffffff;
        border-right: 0px solid #ffffff;
        border-bottom: 50px solid transparent;
      }
    }

    .links {
      margin-left: auto;
      flex-grow: 1;
      height: 100%;
      background: #f4f5f9;
      display: flex;
      align-items: center;
      gap: 30px;
      padding-left: 85px;
      a {
        position: relative;
        display: block;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #424c5c;
        &:hover {
          text-shadow: 0 0 0.3px #333, 0 0 0.3px #333;
          &::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 1px;
            background-color: #696fe6;
            left: 0;
            bottom: -3px;
          }
        }
      }
      .scroll_tracking__links {
        position: relative;
        opacity: 0;
        width: 0;
        transition: width 0.3s;
        .links_row {
          position: relative;
          z-index: 3;
          display: flex;
          gap: 30px;
          a {
            display: flex;
            justify-content: center;
            &::before {
              position: absolute;
              content: "";
              width: 15px;
              height: 15px;
              border-radius: 100%;
              background-color: #cbcdf4;
              bottom: -15px;
              left: auto;
            }
            &:hover {
              &::before {
                background-color: #696fe6;
              }
            }
          }
        }
        .prograss_row {
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -8px;
          padding-left: 20px;
          .progress {
            width: 100%;
            height: 2px;
            background-color: #cbcdf4;
            .progress-active {
              transition: width 0.7s;
              height: 2px;
              width: 0px;
              background-color: #696fe6;
            }
          }
        }
        //Стиль заполнения
        &.active1 {
          .links_row {
            a:nth-of-type(1) {
              &::before {
                transition: background-color 0.7s;
                background-color: #696fe6;
              }
            }
          }
        }
        &.active2 {
          .links_row {
            a:nth-of-type(1),
            a:nth-of-type(2) {
              &::before {
                transition: background-color 0.7s;
                background-color: #696fe6;
              }
            }
          }
        }
        &.active3 {
          .links_row {
            a:nth-of-type(1),
            a:nth-of-type(2),
            a:nth-of-type(3) {
              &::before {
                transition: background-color 0.7s;
                background-color: #696fe6;
              }
            }
          }
        }
      }
    }
    .contact {
      display: flex;
      align-items: center;
      .phone {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
        color: #696fe6;
      }
      .order-call {
        cursor: pointer;
        margin-left: 20px;
        width: 148px;
        height: 34px;
        background: #696fe6;
        border-radius: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        .text {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          display: flex;
          align-items: center;
          color: #ffffff;
        }
        &:hover {
          background: #ff5555;
        }
      }
      // .order-call {
      //   margin-left: 20px;
      //   width: 200px;
      //   height: 40px;
      //   border-radius: 61px;
      //   border: 2px solid #696fe6;
      //   gap: 17px;
      //   cursor: pointer;
      //   align-items: center;
      //   position: relative;
      //   overflow: hidden;
      //   .phone-icon {
      //     width: 30px;
      //     height: 30px;
      //     display: flex;
      //     align-items: center;
      //     justify-content: center;
      //     background: #696fe6;
      //     border-radius: 100%;
      //     z-index: 1;
      //     position: relative;
      //     right: -5px;
      //     transition: right 0.3s;
      //   }
      //   .text {
      //     font-weight: 500;
      //     font-size: 16px;
      //     line-height: 19px;
      //     color: #696fe6;
      //     position: relative;
      //     z-index: 1;
      //     left: 0px;
      //     transition: color 0.3s, left 0.3s;
      //   }
      //   // &::before {
      //   //     position: absolute;
      //   //     content: "";
      //   //     width: 30px;
      //   //     height: 30px;
      //   //     border-radius: 61px;
      //   //     background: #696fe6;
      //   //     transition: width 0.3s, height 0.3s, left 0.3s;
      //   //     left: 5px;
      //   // }
      //   &:hover {
      //     background: #ff5555;
      //     border: 2px solid #ff5555;
      //     // transition: background;
      //     // transition-delay: 0.25s;
      //     .phone-icon {
      //       background: #fff;
      //       left: auto;
      //       right: -162px;
      //       svg {
      //         path {
      //           fill: #ff5555;
      //         }
      //       }
      //     }
      //     .text {
      //       color: #fff;
      //       left: -25px;
      //     }
      //     &::before {
      //       width: 200px;
      //       height: 40px;
      //       left: 0px;
      //     }
      //   }
      // }
    }
    &.modified-menu {
      .decor {
        .dot-arrow {
          margin-right: 50px;
          .dot {
            &:nth-of-type(2),
            &:nth-of-type(4) {
              margin-left: 10px;
            }
            &:nth-of-type(1),
            &:nth-of-type(5) {
              margin-left: 20px;
            }
            &:nth-of-type(3) {
              margin-left: 0px;
            }
          }
        }
        .special-link {
          opacity: 0;
          width: 0;
          pointer-events: none;
        }
        &::before {
          border-left: 0px solid #f4f5f9;
          border-right: 52px solid #f4f5f9;
          transform: translateX(0%);
        }
      }
      .links {
        padding-left: 0px;
        margin-left: -12px;
        .scroll_tracking__links {
          width: fit-content;
          opacity: 1;
          transition: opacity 0.3s;
        }
      }
      .contact {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 9px;
        .order-call {
          margin-left: 0px;
        }
      }
    }
  }
  .adaptive {
    height: 100%;
    align-items: center;
    padding: 0px 40px;
    position: relative;
    .decor {
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      background-color: #ffffff;
      .logo {
        margin-right: 42px;
      }
      .dot-arrow {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-right: 25px;
        transition: margin-right 0.3s;
        cursor: pointer;
        .dot {
          width: 6px;
          height: 6px;
          border-radius: 100%;
          background-color: #696fe5;
          transition: 0.3s;
          &:nth-of-type(2),
          &:nth-of-type(4) {
            margin-left: 10px;
          }
          &:nth-of-type(3) {
            margin-left: 20px;
          }
        }
      }
      .special-link {
        width: 74px;
        position: relative;
        cursor: pointer;
        //Стили текста
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: #5356ae;
        transition: 0.2s;
      }
      &::before {
        position: absolute;
        content: "";
        right: 0;
        transform: translateX(100%);
        width: 0;
        height: 0;
        border-top: 50px solid transparent;
        border-left: 52px solid #ffffff;
        border-right: 0px solid #ffffff;
        border-bottom: 50px solid transparent;
      }
    }
    .menu-btn {
      margin-left: auto;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background-color: #696fe5;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .menu-decor {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 3px;
        .menu-decor__line {
          background: #ffffff;
          border-radius: 7px;
          &:nth-of-type(1) {
            width: 18px;
            height: 3px;
          }
          &:nth-of-type(2) {
            width: 20px;
            height: 1px;
          }
          &:nth-of-type(3) {
            width: 18px;
            height: 1px;
          }
        }
      }
    }
    .menu-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background: #5356ae;
      .menu {
        width: 670px;
        margin: 0 auto;
        .menu-header {
          padding: 50px 0px 30px;
          border-bottom: 1px solid #cbcdf4;
          .close-btn {
            position: relative;
            display: flex;
            justify-content: center;
            align-content: center;
            margin-left: auto;
            padding-top: 19px;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            background-color: #cbcdf4;
            cursor: pointer;
            .close-btn__line {
              position: absolute;
              background-color: #5356ae;
              width: 16px;
              height: 2px;
              &:nth-of-type(1) {
                transform: rotate(45deg);
              }
              &:nth-of-type(2) {
                transform: rotate(-45deg);
              }
            }
          }
        }
        .menu-links {
          border-bottom: 1px solid #cbcdf4;
          .link {
            height: 50px;
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: 20px;
            cursor: pointer;
            //Стили текста
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            color: #ffffff;
            &:hover {
              background-color: #696fe6;
            }
            &.dropdown-link {
              display: block;
              overflow: hidden;
              height: auto;
              max-height: 50px;
              transition: max-height 0.3s linear;
              .top {
                gap: 8px;
                height: 50px;
                align-items: center;
                .dropdown-link__decor {
                  transform-origin: 50% 61%;
                  transition: transform 0.3s linear;
                }
              }
              .dropdown-link__content {
                padding-bottom: 0px;
                .link {
                  padding-left: 0px;
                  display: flex;
                  gap: 8px;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 17px;
                  &::before {
                    content: "";
                    position: relative;
                    background-color: #ecc0c7;
                    width: 5px;
                    height: 5px;
                    border-radius: 100%;
                  }
                  &:hover {
                    color: #cbcdf4;
                    &::before {
                      background-color: #cbcdf4;
                    }
                  }
                }
              }
              &.open {
                max-height: 335px;
                .top {
                  .dropdown-link__decor {
                    transform: rotate(180deg);
                  }
                }
              }
            }
          }
          .left {
            flex: 1;
          }
          .right {
            flex: 1;
          }
        }
        .contact {
          padding-top: 40px;
          align-items: center;
          gap: 70px;
          .phone {
            gap: 5px;
            .icon {
              width: 20px;
              height: auto;
            }
            .number {
              font-style: normal;
              font-weight: 700;
              font-size: 20px;
              line-height: 25px;
              letter-spacing: 0.02em;
              color: #ffffff;
            }
          }
        }
      }
    }
    .fade-enter-active {
      animation: showMenu 0.3s linear;
      @keyframes showMenu {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
    .fade-enter-active {
      animation: showMenu 0.3s linear;
      @keyframes showMenu {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
    .fade-leave-active {
      animation: closeMenu 0.3s linear;
      @keyframes closeMenu {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    }
  }

  &.scroll {
    height: 100px;
    box-shadow: 0px 12px 10px -4px rgba(34, 60, 80, 0.2);
  }
}

@media screen and (max-width: 1365px) {
  .header {
    &::before,
    &::after {
      display: none;
    }
    .header-wrapper {
    }
    .desctop {
      display: none;
    }
    .adaptive {
      display: flex !important;
    }
  }
}
@media screen and (max-width: 767px) {
  .header {
    .adaptive {
      padding: 0px calc(10px + 30 * (100vw - 320px) / (767 - 320));
      .menu-wrapper {
        .menu {
          width: 100%;
          max-width: 500px;
          padding: 20px;
          .menu-header {
            padding: 50px 20px 30px;
          }
          .menu-links {
            flex-direction: column;
            padding: 0px 20px;
          }
          .contact {
            padding: 40px 20px 0px;
            gap: 30px;
            flex-direction: column-reverse;
            align-items: flex-start;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 499px) {
  .header {
    .adaptive {
      padding: 0px calc(10px + 30 * (100vw - 320px) / (767 - 320));
      .decor {
        .dot-arrow {
          display: none;
        }
        .special-link {
          display: none;
        }
      }
    }
  }
}
</style>
