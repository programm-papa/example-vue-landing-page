/* eslint-disable */
<template>
  <div class="block scroll-tracking" ref="scroll_tracking_block" id="block6">
    <div class="wrapper">
      <div class="viewing-status">
        <div class="verticale_line">
          <div
            class="prograss"
            :style="'height:' + scrollProgressValue + '%'"
          ></div>
        </div>
      </div>
    </div>
    <div class="bacground-color">
      <div class="step flex" id="step-one">
        <div class="wrapper">
          <div class="rebranding-comprehensive">
            <div class="title">
              <div
                class="step-number"
               
                :class="activeStepList.step1Active ? 'active' : ''"
                ref="step_number_1"
              >
                <div class="bacground"></div>
                <div class="number">1</div>
              </div>
              Комплексный ребрендинг
            </div>
            <div class="rebranding-comprehensive__description">
              <div
                class="row flex"
                id="rebranding-comprehensive__description_row1"
              >
                <div class="circles">
                  <div class="border-circle external">
                    <div class="border-circle internal">
                      <img src="@/assets/image/block6/step1/row1.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="description-text">
                  Для любой компании очень важна имиджевая составляющая. И наша
                  задача – предложить вам что-то
                  <b>более индивидуальное, чем у конкурентов</b>, в первую
                  очередь за счёт брендинга и системного дизайна.
                </div>
              </div>
              <div
                class="row flex"
                id="rebranding-comprehensive__description_row2"
              >
                <div class="circles">
                  <div class="border-circle external">
                    <div class="border-circle internal">
                      <img src="@/assets/image/block6/step1/row2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="description-text">
                  Вы можете быть давно на рынке, но при этом не иметь четкого
                  образа или прямых ассоциаций у ваших пациентов при
                  произношении названия клиники. Заботясь о имидже вашей
                  клиники, в нашей студии предлагают начать работу с
                  <b>комплексного ребрендинга</b>, в часть которого могут войти
                  работы из ниже представленных примеров.
                </div>
              </div>
              <div
                class="row flex"
                id="rebranding-comprehensive__description_row3"
              >
                <div class="circles">
                  <div class="border-circle external">
                    <div class="border-circle internal">
                      <img src="@/assets/image/block6/step1/row3.png" alt="" />
                    </div>
                  </div>
                </div>
                <div class="description-text">
                  Если вы только начинаете свой бизнес-путь или открываете новую
                  клинику - однозначно <b>стоит начать именно с брендинга</b>.
                  Ведь вся последующая философия и имидж компании будут
                  выстраиваться вокруг него.
                </div>
              </div>
            </div>
            <img
              src="@/assets/image/block6/step1/decor-line.svg"
              alt=""
              class="decor-line"
            />
          </div>
        </div>
        <div class="swiper-block">
          <div class="wrapper">
            <div class="swiper-pagination-btn-container flex">
              <div class="swiper-button-prev pagination-btn">
                <img
                  src="@/assets/image/block6/step1/slider-pagination-arrow.svg"
                  alt="arrow"
                />
              </div>
              <div class="swiper-button-next pagination-btn">
                <img
                  src="@/assets/image/block6/step1/slider-pagination-arrow.svg"
                  alt="arrow"
                />
              </div>
            </div>
          </div>
          <swiper
            :slidesPerView="3"
            :loop="true"
            :autoplay="true"
            :loopFillGroupWithBlank="true"
            class="swiper"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }"
          >
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide1.png"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide2.png"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide2.png"
                alt="slide_img"
              />
            </swiper-slide>
          </swiper>
        </div>
        <div class="wrapper">
          <div class="complex-services">
            <div class="title">
              Предлагаем комплекс услуг по ребрендингу
              <div class="decor-line"></div>
            </div>
            <div class="services-list flex-column">
              <div class="service flex">
                <img
                  src="@/assets/image/block6/step1/service1.png"
                  alt=""
                  class="service-img"
                />
                <div class="service-content">
                  <div class="service-title">Фирменный логотип и шрифты</div>
                  <div class="price">от 25.000 руб.</div>
                  <div class="list">
                    <p class="list-title">
                      <b>Разработка логотипа</b> - фирменный знак компании
                      индивидуально отражающий вашу суть, образ и деятельность
                    </p>
                    <ul>
                      <li>
                        разработка логотипа (предлагаем до 3 вариаций и
                        дорабатываем в финальную версию, готовим в различных
                        версиях - для применения в веб/соцсетях и для
                        полиграфии);
                      </li>
                      <li>
                        фирменные шрифты для всех полиграфических и
                        маркетинговых материалов;
                      </li>
                      <li>разработка фирменной цветовой палитры.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="service flex">
                <div class="service-content">
                  <div class="service-title">
                    Базовый набор фирменного стиля
                  </div>
                  <div class="price">от 12.000 руб.</div>
                  <div class="list">
                    <p class="list-title">
                      <b
                        >Разработка базовых макетов носителей фирменного
                        стиля:</b
                      >
                    </p>
                    <ul>
                      <li>фирменные визитки для персонала;</li>
                      <li>фирменный бланк клиники;</li>
                      <li>
                        разработка подарочного сертификата - Дисконт карта +
                        Конверт;
                      </li>
                      <li>фирменный гарантийный талон (выдается пациентам);</li>
                      <li>
                        разработка памятки графика посещения врача (для записей
                        с датами посещений и выдачи пациентам).
                      </li>
                    </ul>
                  </div>
                </div>
                <img
                  src="@/assets/image/block6/step1/service2.png"
                  alt=""
                  class="service-img"
                />
              </div>
              <div class="service flex">
                <img
                  src="@/assets/image/block6/step1/service3.png"
                  alt=""
                  class="service-img"
                />
                <div class="service-content">
                  <div class="service-title">
                    Расширенный набор фирменного стиля
                  </div>
                  <div class="price">от 15.000 руб.</div>
                  <div class="list">
                    <p class="list-title">
                      <b
                        >Разработка дополнительных фирменных макетов и
                        информационных носителей:</b
                      >
                    </p>
                    <ul>
                      <li>
                        разработка листовок рекомендаций (по направлениям,
                        например, хирургия, терапия и т.д.);
                      </li>
                      <li>
                        разработка комплекта макетов табличек и навигационных
                        элементов для интерьера клиники;
                      </li>
                      <li>
                        разработка подарочного сертификата - Дисконт карта +
                        Конверт;
                      </li>
                      <li>
                        прайс в фирменной обложке (папка на скрепках или
                        пружине, до 8 листов информации: описание и таблицы со
                        стоимостью услуг);
                      </li>
                      <li>
                        бэйджи нагрудные, разработка на каждого специалиста –
                        Ф.И.О. и должность.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="service flex">
                <div class="service-content">
                  <div class="service-title">
                    Внешнее оформление клиники и информационные носители
                  </div>
                  <div class="price">от 24.000 руб.</div>
                  <div class="list">
                    <p class="list-title">
                      <b
                        >Разработка макетов внешнего оформления клиники и
                        информационных макетов:</b
                      >
                    </p>
                    <ul>
                      <li>
                        разработка внешней вывески и спецификация для реализации
                        вывески (выбор материалов (акрил/пластик) и согласования
                        цветов (RAL или Pantone), вариантов освещения);
                      </li>
                      <li>разработка режима работы с реквизитами на вход;</li>
                      <li>
                        стенд настенный в вестибюль (с фотографиями
                        специалистов). Фото с информацией о сотрудниках и
                        обработка – за отдельную плату;
                      </li>
                      <li>стенд настенный (информационный) c карманами.</li>
                    </ul>
                  </div>
                </div>
                <img
                  src="@/assets/image/block6/step1/service2.png"
                  alt=""
                  class="service-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="breaf" id="breaf-one">
          <div class="bacground-wrapper">
            <div class="wrapper flex">
              <img
                src="@/assets/image/block6/step1/breaf_1.png"
                alt=""
                class="left"
              />
              <div class="right">
                <div class="breaf-title">
                  Заполните бриф на комплексный брендинг вашей клиники
                </div>
                <div class="pink-button">Заполнить бриф</div>
              </div>
            </div>
            <img
              src="@/assets/image/block6/step1/breaf_1_decor_1.svg"
              alt=""
              class="decor-img_1"
            />
            <img
              src="@/assets/image/block6/step1/breaf_1_decor_2.svg"
              alt=""
              class="decor-img_2"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="step flex" id="step-two">
      <div class="wrapper">
        <div class="title">
          <div
            class="step-number"
            :class="activeStepList.step2Active ? 'active' : ''"
            ref="step_number_2"
          >
            <div class="bacground"></div>
            <div class="number">2</div>
          </div>
          Разработка нового сайта
        </div>
        <div class="step-description flex">
          <img
            src="@/assets/image/block6/step2/step-description-img.png"
            alt=""
          />
          <div class="text">
            Наша работа для роста вашей медицинской клиники чаще всего
            начинается с разработки современного и продуманного сайта, который
            поможет дополнительно
            <b
              >привлечь новых клиентов через интернет, а также удержать текущих
              пациентов</b
            >, предоставляя необходимую информацию о Вашей клинике в удобном
            формате с любого устройства.
          </div>
        </div>
        <div class="features-website-development flex-column">
          <div class="feature-item flex">
            <svg
              class="check-mark"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#CBCDF4" />
              <path
                d="M7 14.5L13 20.5L23.5 10"
                stroke="#696FE6"
                stroke-width="3"
              />
            </svg>
            <div class="text">
              Задача нашей студии –
              <b>предоставить полноценный и функциональный сайт</b> для вашей
              клиники со стильным и персонализированным дизайном.
            </div>
          </div>
          <div class="feature-item flex">
            <svg
              class="check-mark"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#CBCDF4" />
              <path
                d="M7 14.5L13 20.5L23.5 10"
                stroke="#696FE6"
                stroke-width="3"
              />
            </svg>
            <div class="text">
              Если у вас уже есть сайт, наша команда проведёт аудит и определит
              <b>перечень доработок</b>, которые благоприятно повлияют на его
              дальнейшую качественную работу, либо предложит сделать
              <b>редизайн</b> — это полное обновление внешнего и внутреннего
              функционала сайта.
            </div>
          </div>
          <div class="feature-item flex">
            <svg
              class="check-mark"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#CBCDF4" />
              <path
                d="M7 14.5L13 20.5L23.5 10"
                stroke="#696FE6"
                stroke-width="3"
              />
            </svg>
            <div class="text">
              Благодаря <b>отлаженному процессу</b> внутри нашей студии и
              <b>первоклассным специалистам</b>, которые комплексно разбираются
              в digital разработке, создадим сайт, который будет заботиться о
              вашем пользователе, а взаимодействие с сайтом станет простым и
              удобным.
            </div>
          </div>
        </div>
      </div>
      <div class="site-features-container">
        <img
          class="decor-img"
          id="decor-img_1"
          src="@/assets/image/block6/step2/decor-img_1.png"
          alt="decor-img"
        />
        <div class="title">Каким должен быть сайт?</div>
        <div class="deployable-blocks-list flex-column">
          <div
            class="deployable-item"
            id="deployable-item_1"
            :class="deployableItem(1)"
            @click="deployableItemOpen(1)"
          >
            <div class="deployable-title flex">
              <div class="text">Оптимальным по цене/качеству</div>
              <div class="indicator">
                <div class="triangle"></div>
              </div>
            </div>
            <div class="deployable-content-wrapper">
              <div class="deployable-content flex-column">
                <p>
                  Учитывая ваши финансовые возможности предложим оптимальные
                  решения – исходя из бюджета. У нас нет дешевых решений, но мы
                  не берем сотни тысяч за воздух. Нам важен качественный
                  результат и последующий потенциал работы с сайтом по
                  продвижению и привлечению клиентов.
                </p>
                <p>
                  Подумайте об этом прежде, чем экономить или обращаться к
                  рядовому подрядчику либо универсалу-фрилансеру. Помните, что
                  <b>вложения на данном этапе обязательно окупятся</b>, учитывая
                  последующий качественный эффект от привлечения новых клиентов.
                </p>
              </div>
            </div>
          </div>
          <div
            class="deployable-item"
            id="deployable-item_2"
            :class="deployableItem(2)"
            @click="deployableItemOpen(2)"
          >
            <div class="deployable-title flex">
              <div class="text">Привлекательным внешне</div>
              <div class="indicator">
                <div class="triangle"></div>
              </div>
            </div>
            <div class="deployable-content-wrapper">
              <div class="deployable-content flex-column">
                <p>
                  Также мы понимаем, что у каждого клиента есть свое видение и
                  вкус, однако рекомендуем владельцев клиники думать в первую
                  очередь о бизнес-целях и доверять работы по разработке
                  специалистам нашей студии, учитывая наш накопленный опыт и
                  знания.
                </p>
              </div>
            </div>
          </div>
          <div
            class="deployable-item"
            id="deployable-item_3"
            :class="deployableItem(3)"
            @click="deployableItemOpen(3)"
          >
            <div class="deployable-title flex">
              <div class="text">Выполняющим поставленные бизнес-цели</div>
              <div class="indicator">
                <div class="triangle"></div>
              </div>
            </div>
            <div class="deployable-content-wrapper">
              <div class="deployable-content flex-column">
                <p>
                  Наша философия дизайн-мышления и навыки в практике маркетинга
                  обязательно помогут в контексте достижения намеченных
                  результатов, например увеличения конверсии на сайте с целью
                  роста продаж, расширения числа лояльной аудитории и
                  узнаваемости вашего бренда.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          class="decor-img"
          id="decor-img_2"
          src="@/assets/image/block6/step2/decor-img_2.png"
          alt="decor-img"
        />
      </div>
      <div class="breaf" id="breaf-two">
        <div class="bacground-wrapper">
          <div class="wrapper flex">
            <div class="right">
              <div class="breaf-title">
                Нужен новый сайт?<br />Мы хотим ознакомиться с вашими
                пожеланиями
              </div>
              <div class="pink-button">Заполнить бриф</div>
            </div>
          </div>
          <img
            src="@/assets/image/block6/step2/bref_2_decor_1.png"
            alt=""
            class="decor-img_1"
          />
          <img
            src="@/assets/image/block6/step2/bref_2_decor_2.svg"
            alt=""
            class="decor-img_2"
          />
        </div>
      </div>
    </div>
    <div class="bacground-color">
      <div class="step flex" id="step-three">
        <div class="wrapper">
          <div class="decor-img" id="decor-img_1"></div>
          <div class="title flex">
            <div
              class="step-number"
              :class="activeStepList.step3Active ? 'active' : ''"
              ref="step_number_3"
            >
              <div class="bacground"></div>
              <div class="number">3</div>
            </div>
            Внедряем маркетинг
            <div class="title__decor flex">
              <img
                src="@/assets/image/block6/step3/decor-img__avatar.png"
                alt=""
                class="avatar"
              />
              <div class="comment">
                Подчеркнули ваш имидж и подготовили сайт –
                <b>пора обеспечивать клинику заявками</b>
              </div>
            </div>
          </div>
          <div class="step-description flex" id="step-description_1">
            <img
              src="@/assets/image/block6/step3/step-description-img_1.png"
              alt=""
            />
            <div class="content">
              <div class="description__title">
                Получайте больше обращений и записей в клинику
              </div>
              <div class="description__text">
                Маркетинг для медицинских клиник работает на долгосрочной
                основе, но благодаря эффективным инструментам и отлаженной
                методологии мы можем наладить
                <span class="blue">2-кратный прирост заявок</span> в вашу
                клинику уже в первый месяц запуска. И это скромный прогноз на
                старте работы. Цифры и показатели говорят сами за себя
              </div>
            </div>
          </div>
          <div class="step-description flex" id="step-description_2">
            <img
              src="@/assets/image/block6/step3/step-description-img_2.png"
              alt=""
            />
            <div class="content">
              <div class="description__title">
                Мы знаем почти всё о медицинском маркетинге
              </div>
              <div class="description__text">
                и можем полностью
                <span class="blue">заменить маркетинговый отдел</span>
                практически любой клиники, гарантируя при этом меньшие затраты и
                большую эффективность.
              </div>
            </div>
          </div>
          <div class="stages-marketing-list flex">
            <div class="stage flex-column">
              <div class="img-circle">
                <div class="img-background">
                  <img
                    src="@/assets/image/block6/step3/stages-marketing_1.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="stage-title">Выведем в ТОП в поисковых системах</div>
            </div>
            <div class="stage flex-column">
              <div class="img-circle">
                <div class="img-background">
                  <img
                    src="@/assets/image/block6/step3/stages-marketing_2.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="stage-title">Увеличим конверсию сайта</div>
            </div>
            <div class="stage flex-column">
              <div class="img-circle">
                <div class="img-background">
                  <img
                    src="@/assets/image/block6/step3/stages-marketing_3.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="stage-title">
                Обеспечим поток заявок в ваши соцсети
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// swiper bundle styles
import "swiper/swiper-bundle.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      //Прогресс просмотра блока
      blockElement: "",
      scrollProgressValue: 0,
      step1: "",
      step2: "",
      step3: "",
      activeStepList: {
        step1Active: false,
        step2Active: false,
        step3Active: false,
      },
      //Выпадающие аккордеоны
      deployableItemData: {
        item1: true,
        item2: false,
        item3: false,
      },
    };
  },
  methods: {
    deployableItem: function (id) {
      switch (id) {
        case 1:
          return this.deployableItemData.item1 ? "selected" : "";
        case 2:
          return this.deployableItemData.item2 ? "selected" : "";
        case 3:
          return this.deployableItemData.item3 ? "selected" : "";
        default:
          return "";
      }
    },
    deployableItemOpen: function (id) {
      if (!this.deployableItemData["item" + id]) {
        this.deployableItemData.item1 =
          this.deployableItemData.item2 =
          this.deployableItemData.item3 =
            false;
        switch (id) {
          case 1:
            this.deployableItemData.item1 = true;
            break;
          case 2:
            this.deployableItemData.item2 = true;
            break;
          case 3:
            this.deployableItemData.item3 = true;
            break;
          default:
            return 0;
        }
      }
    },
    scrollProgress: function () {
      if (
        this.blockElement.offsetTop <=
          window.scrollY + window.innerHeight / 2 &&
        this.blockElement.offsetTop + this.blockElement.offsetHeight >=
          window.scrollY + window.innerHeight / 2
      ) {
        this.scrollProgressValue =
          ((window.scrollY +
            window.innerHeight / 2 -
            this.blockElement.offsetTop) *
            100) /
          this.blockElement.offsetHeight;
        //Заполнение кругов тайтлов
        //Первый блок
        if (
          this.step1.getBoundingClientRect().top + 30 <=
            window.innerHeight / 2 &&
          !this.activeStepList.step1Active
        ) {
          this.activeStepList.step1Active = true;
        } else if (
          this.step1.getBoundingClientRect().top + 30 >
          window.innerHeight / 2
        ) {
          this.activeStepList.step1Active = false;
        }
        //Второй блок
        if (
          this.step2.getBoundingClientRect().top + 30 <=
            window.innerHeight / 2 &&
          !this.activeStepList.step2Active
        ) {
          this.activeStepList.step2Active = true;
        } else if (
          this.step2.getBoundingClientRect().top + 30 >
          window.innerHeight / 2
        ) {
          this.activeStepList.step2Active = false;
        }
        //Третий блок
        if (
          this.step3.getBoundingClientRect().top + 30 <=
            window.innerHeight / 2 &&
          !this.activeStepList.step3Active
        ) {
          this.activeStepList.step3Active = true;
        } else if (
          this.step3.getBoundingClientRect().top + 30 >
          window.innerHeight / 2
        ) {
          this.activeStepList.step3Active = false;
        }
      } else if (
        this.blockElement.offsetTop >
        window.scrollY + window.innerHeight / 2
      ) {
        this.scrollProgressValue = 0;
        this.activeStepList.step1Active = false;
        this.activeStepList.step2Active = false;
        this.activeStepList.step3Active = false;
      } else {
        this.scrollProgressValue = 100;
        this.activeStepList.step1Active = true;
        this.activeStepList.step2Active = true;
        this.activeStepList.step3Active = true;
      }
    },
  },
  computed: {
    height: () => {
      return;
    },
  },
  watch: {
    deployableItemData: {
      handler() {
        this.scrollProgress();
      },
      deep: true,
    },
    activeStepList: {
      handler() {
        this.$store.dispatch("updatedActiveStepList", {
          ...this.activeStepList,
        });
      },
      deep: true,
    },
  },
  mounted() {
    this.blockElement = this.$refs.scroll_tracking_block;
    this.step1 = this.$refs.step_number_1;
    this.step2 = this.$refs.step_number_2;
    this.step3 = this.$refs.step_number_3;
    window.addEventListener(
      "scroll",
      function () {
        this.scrollProgress();
      }.bind(this)
    );
  },
};
</script>

<style lang="scss" scoped>
.block {
  position: relative;
  .viewing-status {
    position: absolute;
    height: 100%;
    .verticale_line {
      position: absolute;
      left: -95px;
      width: 10px;
      height: calc(100% - 16px);
      background: #cbcdf4;
      .prograss {
        width: 10px;
        background: #696fe5;
        transition: height 0.5s;
      }
    }
  }
  &#block6 {
    .bacground-color {
      background: #f3f4f9;
    }
    .breaf {
      .bacground-wrapper {
        width: calc(100% - 200px);
        margin: 0px auto;
        background: #696fe6;
        border-radius: 20px;
        min-height: 320px;
        overflow: hidden;
        position: relative;
        .wrapper {
          min-height: 320px;
          align-items: center;
        }
      }
      &#breaf-one {
        .wrapper {
          padding-left: 108px;
          gap: 100px;
          position: relative;
          z-index: 2;
          .left {
            width: 212px;
            height: 252px;
          }
          .right {
            height: 252px;
            padding-top: 30px;
            .breaf-title {
              width: 356px;
              margin-bottom: 30px;
              font-style: normal;
              font-weight: 700;
              font-size: 26px;
              line-height: 32px;
              letter-spacing: 0.02em;
              color: #ffffff;
            }
          }
        }
        .decor-img_1 {
          position: absolute;
          right: 0;
          top: 0px;
        }
        .decor-img_2 {
          position: absolute;
          left: 37%;
          top: 40px;
        }
      }
      &#breaf-two {
        .bacground-wrapper {
          background-color: #5356ae;
        }
        .wrapper {
          padding-left: 521px;
          position: relative;
          z-index: 2;
          .right {
            height: 252px;
            padding-top: 30px;
            .breaf-title {
              width: 305px;
              margin-bottom: 30px;
              font-style: normal;
              font-weight: 700;
              font-size: 26px;
              line-height: 32px;
              letter-spacing: 0.02em;
              color: #ffffff;
            }
          }
        }
        .decor-img_1 {
          position: absolute;
          left: 0;
          top: 0px;
        }
        .decor-img_2 {
          position: absolute;
          left: 43%;
          top: 40px;
        }
      }
    }
    .step {
      padding: 120px 0px;
      flex-direction: column;
      gap: 120px;
      .title {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;

        //Стили текста
        font-style: normal;
        font-weight: 800;
        font-size: 30px;
        line-height: 38px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #424c5c;
        .decor-line {
          margin-top: 3px;
          width: 257px;
          height: 10px;
          background: #696fe6;
        }
        .step-number {
          width: 60px;
          height: 60px;
          border-radius: 100%;
          background-color: #cbcdf4;
          position: absolute;
          left: -120px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          .bacground {
            position: absolute;
            background-color: #696fe5;
            border-radius: 100%;
            top: -30px;
            width: 0px;
            height: 0px;
            transition: 0.9s;
          }
          .number {
            font-style: normal;
            font-weight: 800;
            font-size: 30px;
            line-height: 38px;
            color: #ffffff;
            position: relative;
            z-index: 1;
          }
          &.active {
            .bacground {
              width: 120px;
              height: 120px;
            }
          }
        }
      }
      &#step-one {
        position: relative;
        .title {
          margin-bottom: 40px;
        }
        .rebranding-comprehensive {
          position: relative;
          .rebranding-comprehensive__description {
            .row {
              width: fit-content;
              position: relative;
              z-index: 2;
              align-items: center;
              gap: 30px;
              .circles {
                .border-circle.external {
                  width: 240px;
                  height: 240px;
                  border-radius: 100%;
                  background: #f3f4f9;
                  border: 1px solid #cbcdf4;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                .border-circle.internal {
                  width: 200px;
                  height: 200px;
                  border-radius: 100%;
                  border: 3px solid #ecc0c7;
                  background: #ffffff;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
              }
              .description-text {
                width: 520px;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 150%;
                color: #424c5c;
                b {
                  font-weight: 700;
                }
              }
              &#rebranding-comprehensive__description_row2 {
                left: 320px;
              }
            }
          }
          .decor-line {
            position: absolute;
            top: 91px;
          }
        }
        .swiper-block {
          margin-top: -40px;
          user-select: none;
          .wrapper {
            position: relative;
            .swiper-pagination-btn-container {
              position: absolute;
              width: 140px;
              height: 60px;
              right: 0;
              top: -80px;
              align-items: center;
              .pagination-btn {
                position: absolute;
                z-index: 2;
                top: auto;
                content: "" !important;
                width: 40px;
                height: 40px;
                transition: width 0.1s, height 0.1s;
                border-radius: 100%;
                background-color: #fff;
                &::after {
                  display: none !important;
                }
                &.swiper-button-next {
                  transform: rotate(180deg);
                }
                &:hover {
                  width: 60px;
                  height: 60px;
                  img {
                    width: 23px;
                  }
                }
                &:active {
                  box-shadow: 0px 0px 10px 5px rgba(105, 111, 229, 0.1);
                }
              }
            }
          }
          .swiper {
            position: relative;
            width: 100%;
            height: 443px;
            .swiper-wrapper {
              .swiper-slide,
              .swiper-slide-duplicate {
                img {
                  background-color: #f3f4f9;
                  width: 600px !important;
                  height: 443px !important;
                  border: 1px solid #cbcdf4;
                  border-radius: 20px;
                  padding: 20px !important;
                  margin-left: 40px;
                  width: 100%;
                  height: auto;
                }
              }
            }
          }
        }
        .complex-services {
          .title {
            width: 480px;
          }
        }
        .services-list {
          gap: 40px;
          .service {
            overflow: hidden;
            width: 1160px;
            height: 540px;
            background: #f3f4f9;
            /* shadow 3 soft */
            box-shadow: 0px 14px 30px rgba(105, 111, 229, 0.14);
            border-radius: 20px;
            gap: 40px;
            .service-img {
              height: 100%;
            }
            .service-content {
              padding: 40px 0px;
              width: 500px;
              .service-title {
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 30px;
                letter-spacing: 0.02em;
                color: #696fe6;
                margin-bottom: 15px;
              }
              .price {
                width: fit-content;
                height: 25px;
                margin-bottom: 30px;
                padding: 0px 4px;
                display: flex;
                align-items: center;
                background: #ecc0c7;
                //стили текста
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
                letter-spacing: 0.02em;
                color: #5356ae;
              }
              .list {
                .list-title {
                  margin-bottom: 20px;
                  font-style: normal;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 20px;
                  letter-spacing: 0.02em;
                  color: #424c5c;
                  b {
                    font-weight: 700;
                  }
                }
                ul {
                  padding-left: 20px;
                  display: flex;
                  flex-direction: column;
                  gap: 20px;
                  li {
                    display: block;
                    position: relative;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    letter-spacing: 0.02em;
                    color: #424c5c;
                    &::before {
                      content: "";
                      position: absolute;
                      left: -20px;
                      top: 8px;
                      width: 6px;
                      height: 6px;
                      border-radius: 100%;
                      background: #ecc0c7;
                    }
                  }
                }
              }
            }
            & .service-content:first-child {
              margin-left: 60px;
            }
          }
        }
      }
      &#step-two {
        .title {
          margin-bottom: 50px;
        }
        .step-description {
          margin-bottom: 30px;
          .text {
            width: 520px;
            padding-top: 10px;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
            color: #424c5c;
            b {
              font-weight: 700;
            }
          }
        }
        .features-website-development {
          gap: 40px;
          .feature-item {
            width: 660px;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
            border-radius: 20px;
            padding: 30px 40px;
            gap: 20px;
            .text {
              flex: 1;
              //стиль текста
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              line-height: 150%;
              color: #424c5c;
              b {
                font-weight: 700;
              }
            }
          }
        }
        .site-features-container {
          width: 1300px;
          padding: 60px 70px;
          margin: 0 auto;
          background-color: #f3f4f9;
          border-radius: 20px;
          position: relative;
          .decor-img {
            position: absolute;
            &#decor-img_1 {
              right: 14px;
              top: -261px;
            }
            &#decor-img_2 {
              height: 450px;
              right: 115px;
              top: 95px;
            }
          }
          .title {
            margin-bottom: 40px;
            //Стили текста
            font-style: normal;
            font-weight: 800;
            font-size: 30px;
            line-height: 38px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #696fe6;
          }
          .deployable-blocks-list {
            gap: 40px;
            .deployable-item {
              width: 860px;
              .deployable-title {
                min-height: 60px;
                padding: 5px;
                border: 1px solid #696fe6;
                border-radius: 20px;
                align-items: center;
                cursor: pointer;
                &:hover {
                  box-shadow: 0px 0px 5px 2px rgba(105, 111, 229, 0.1);
                }
                .text {
                  padding: 0px 36px;
                  //Стили текста
                  font-style: normal;
                  font-weight: 700;
                  font-size: 20px;
                  line-height: 150%;
                  color: #424c5c;
                }
                .indicator {
                  margin-left: auto;
                  width: 100px;
                  height: 50px;
                  background: #cbcdf4;
                  border-radius: 15px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  .triangle {
                    width: 0;
                    height: 0;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-top: 10px solid #24375b;
                    transition: transform 0.5s;
                  }
                }
              }
              .deployable-content-wrapper {
                overflow: hidden;
                max-height: 0px;
                transition: max-height 0.9s;
                .deployable-content {
                  padding: 30px 35px 0px 30px;
                  gap: 20px;
                  p {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 150%;
                    color: #424c5c;
                  }
                }
              }
              &.open {
                .deployable-title {
                  .indicator {
                    .triangle {
                      transform: rotate(180deg);
                    }
                  }
                }
              }
              &.selected {
                &:nth-of-type(1) {
                  .deployable-content-wrapper {
                    max-height: 300px;
                  }
                }
                &:nth-of-type(2) {
                  .deployable-content-wrapper {
                    max-height: 105px;
                  }
                }
                &:nth-of-type(3) {
                  .deployable-content-wrapper {
                    max-height: 105px;
                  }
                }
              }
            }
          }
        }
      }
      &#step-three {
        border-bottom: 16px solid #696fe6;
        .wrapper {
          position: relative;
        }
        .decor-img {
          &#decor-img_1 {
            width: 0;
            height: 0;
            border-bottom: 15px solid transparent;
            border-right: 30px solid #24375b;
            border-top: 15px solid transparent;
            position: absolute;
            left: 393px;
            top: -50px;
          }
        }
        .title {
          align-items: center;
          justify-content: flex-start;
          flex-direction: row;
          text-align: left;
          gap: 76px;
          margin-bottom: 33px;
          .title__decor {
            width: 520px;
            gap: 10px;
            .avatar {
              width: 70px;
              height: 70px;
            }
            .comment {
              padding: 21px 19px 0px 54px;
              width: 438px;
              height: 78px;
              background: url(../assets/image/block6/step3/decor-img__comment.svg)
                center center no-repeat;
              background-size: cover;
              text-transform: none;
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              letter-spacing: 0.02em;
              color: #424c5c;
            }
          }
        }
        .step-description {
          gap: 40px;
          align-items: center;
          img {
            background-color: #ffffff;
            border: 2px solid #ecc0c7;
            border-radius: 20px;
          }
          .content {
            .description__title {
              width: 250px;
              margin-bottom: 30px;
              //Стили текста
              font-style: normal;
              font-weight: 700;
              font-size: 20px;
              line-height: 25px;
              letter-spacing: 0.02em;
              text-transform: uppercase;
              color: #424c5c;
            }
            .description__text {
              width: 520px;
              font-style: normal;
              font-weight: 500;
              font-size: 16px;
              line-height: 150%;
              color: #424c5c;
              .blue {
                color: #696fe5;
                font-weight: 600;
              }
            }
          }
          &#step-description {
            &_1 {
              margin-bottom: 50px;
            }
            &_2 {
              margin-bottom: 60px;
            }
          }
        }
        .stages-marketing-list {
          width: 1100px;
          margin: 0 auto;
          justify-content: space-between;
          .stage {
            align-items: center;
            .img-circle {
              border-radius: 100%;
              width: 180px;
              height: 180px;
              margin-bottom: 27px;
              border: 2px dashed #696fe6;
              display: flex;
              align-items: center;
              justify-content: center;
              .img-background {
                width: 150px;
                height: 150px;
                background: #cbcdf4;
                box-shadow: inset 0px 4px 6px rgba(83, 86, 174, 0.5);
                border-radius: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
            .stage-title {
              font-style: normal;
              font-weight: 700;
              font-size: 16px;
              line-height: 150%;
              text-align: center;
              color: #696fe6;
            }
          }
        }
      }
    }
  }
}
</style>
