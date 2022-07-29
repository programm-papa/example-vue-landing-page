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
    <div class="wrapper">
      <div class="steps-way">
        <img src="@/assets/image/block6/steps-way.svg" alt="" />
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
                      <img src="@/assets/image/block6/step1/row1.webp" alt="" />
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
                      <img src="@/assets/image/block6/step1/row2.webp" alt="" />
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
                      <img src="@/assets/image/block6/step1/row3.webp" alt="" />
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
            <img
              src="@/assets/image/block6/step1/decor-line-adaptive.svg"
              alt=""
              class="decor-line-adaptive"
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
          <!--Сам свайпер и фото в нем-->
          <swiper
            :slidesPerView="'auto'"
            :spaceBetween="30"
            :loop="true"
            class="swiper"
            :autoplay="{
              delay: 1500,
              disableOnInteraction: false,
            }"
            :navigation="{
              nextEl: '#block6 .swiper-button-next',
              prevEl: '#block6 .swiper-button-prev',
            }"
          >
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide1.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide2.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide3.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide4.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide5.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide6.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide7.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide8.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide9.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide10.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide11.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide12.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide13.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide14.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide15.webp"
                alt="slide_img"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="@/assets/image/block6/step1/slide16.webp"
                alt="slide_img"
              />
            </swiper-slide>
          </swiper>
        </div>
        <div class="wrapper">
          <div class="complex-services">
            <div class="title">
              Предлагаем комплекс услуг
              <span class="decor-line">по ребрендингу</span>
            </div>
            <div class="services-list flex-column">
              <div class="service flex">
                <img
                  src="@/assets/image/block6/step1/service1.webp"
                  alt=""
                  class="service-img"
                />
                <img
                  src="@/assets/image/block6/step1/service1-adaptive.webp"
                  alt=""
                  class="service-img-adaptive"
                />
                <div class="service-content">
                  <div class="service-title">Фирменный логотип и шрифты</div>
                  <div class="price">от 30.000 руб.</div>
                  <div class="list">
                    <p class="list-title">
                      <b>Разработка логотипа</b> - фирменный знак компании
                      индивидуально отражающий вашу суть, образ и деятельность, мы предложим:
                    </p>
                    <ul>
                      <li>
                        разработку уникального логотипа (предлагаем до 3 вариаций и
                        дорабатываем в финальную версию, готовим в различных
                        версиях - для применения в веб/соцсетях и для
                        полиграфии);
                      </li>
                      <li>
                        фирменные шрифты для всех полиграфических и
                        маркетинговых материалов;
                      </li>
                      <li>разработку фирменной цветовой палитры.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="service flex">
                <div class="service-content">
                  <div class="service-title">
                    Базовый набор фирменного стиля
                  </div>
                  <div class="price">от 15.000 руб.</div>
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
                  src="@/assets/image/block6/step1/service2.webp"
                  alt=""
                  class="service-img"
                />
                <img
                  src="@/assets/image/block6/step1/service2-adaptive.webp"
                  alt=""
                  class="service-img-adaptive"
                />
              </div>
              <div class="service flex">
                <img
                  src="@/assets/image/block6/step1/service3.webp"
                  alt=""
                  class="service-img"
                />
                <img
                  src="@/assets/image/block6/step1/service3-adaptive.webp"
                  alt=""
                  class="service-img-adaptive"
                />
                <div class="service-content">
                  <div class="service-title">
                    Расширенный набор фирменного стиля
                  </div>
                  <div class="price">от 18.000 руб.</div>
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
                  <div class="price">от 25.000 руб.</div>
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
                  src="@/assets/image/block6/step1/service4.webp"
                  alt=""
                  class="service-img"
                />
                <img
                  src="@/assets/image/block6/step1/service4-adaptive.webp"
                  alt=""
                  class="service-img-adaptive"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="breaf" id="breaf-one">
          <div class="decor">
            <div class="circle circle_one">
              <div class="circle circle_two">
                <div class="circle circle_three">
                  <div class="circle circle_four"></div>
                </div>
              </div>
            </div>
            <div class="special-decor">
              <div class="circle circle_one">
                <div class="circle circle_two">
                  <div class="circle circle_three">
                    <div class="circle circle_four"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bacground-wrapper">
            <div class="wrapper flex">
              <img
                src="@/assets/image/block6/step1/breaf_1.webp"
                alt=""
                class="left"
              />
              <div class="right">
                <div class="breaf-title">
                  Заполните бриф на комплексный брендинг вашей клиники
                </div>
                <div class="pink-button" @click="{this.$store.dispatch('updateBreafType', 'brending');this.$store.dispatch('updateOpenBreaf', true);}">Заполнить бриф</div>
              </div>
            </div>
            <img
              src="@/assets/image/block6/step1/breaf_1_decor_1.svg"
              alt=""
              class="decor-img_1"
            />
            <div class="decor-img_2" data-v-2ff20447="">
              <div class="circle" id="circle_1"></div>
              <div class="circle" id="circle_2"></div>
              <div class="triangle"></div>
              <div class="square"></div>
            </div>
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
            src="@/assets/image/block6/step2/step-description-img.webp"
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
        <!-- <img
          class="decor-img"
          id="decor-img_1"
          src="@/assets/image/block6/step2/decor-img_1.webp"
          alt="decor-img"
        /> -->
        <div class="decor-img" id="decor-img_1">
          <img src="@/assets/image/block6/step2/decor-img_1_1.webp" alt="" />
          <img src="@/assets/image/block6/step2/decor-img_1_2.webp" alt="" />
        </div>
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
          src="@/assets/image/block6/step2/decor-img_2.webp"
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
              <div class="pink-button" @click="{this.$store.dispatch('updateBreafType', 'site');this.$store.dispatch('updateOpenBreaf', true);}">Заполнить бриф</div>
            </div>
          </div>
          <div class="decor-img_1">
            <div class="img-wrapper">
              <img
                src="@/assets/image/block6/step2/bref_2_decor_1.webp"
                alt=""
              />
            </div>
          </div>
          <div class="decor-img_2">
            <div class="circle" id="circle_1"></div>
            <div class="circle" id="circle_2"></div>
            <div class="triangle"></div>
            <div class="square"></div>
          </div>
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
                src="@/assets/image/block6/step3/decor-img__avatar.webp"
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
              src="@/assets/image/block6/step3/step-description-img_1.webp"
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
          <div class="indicators-change-block">
            <div class="title">
              пример достигаемых результатов по ключевым показателям
            </div>
            <div class="indicators-change-tabs-btn">
              <div
                class="btn"
                :class="activeIndicatorsTab.indicatorsTab1 ? 'select' : ''"
                @click="changeActiveIndicatorsTab(1)"
              >
                До старта наших работ
              </div>
              <div
                class="btn"
                :class="activeIndicatorsTab.indicatorsTab2 ? 'select' : ''"
                @click="changeActiveIndicatorsTab(2)"
              >
                Через месяц
              </div>
              <div
                class="btn"
                :class="activeIndicatorsTab.indicatorsTab3 ? 'select' : ''"
                @click="changeActiveIndicatorsTab(3)"
              >
                Через 4 месяца
              </div>
            </div>
            <div class="indicators-change-tabs-btn_adaptive">
              <div
                class="dropdown"
                :class="mobileActiveIndicatorsOpen ? 'open' : ''"
              >
                <div
                  class="selectName"
                  @click="
                    mobileActiveIndicatorsOpen = !mobileActiveIndicatorsOpen
                  "
                >
                  {{ mobileActiveIndicatorsText }}
                  <div class="decor-triangle"></div>
                </div>
                <div class="dropdown-list">
                  <div
                    class="btn"
                    v-if="!activeIndicatorsTab.indicatorsTab1"
                    @click="
                      {
                        changeActiveIndicatorsTab(1);
                        mobileActiveIndicatorsOpen = false;
                      }
                    "
                  >
                    До старта наших работ
                  </div>
                  <div
                    class="btn"
                    v-if="!activeIndicatorsTab.indicatorsTab2"
                    @click="
                      {
                        changeActiveIndicatorsTab(2);
                        mobileActiveIndicatorsOpen = false;
                      }
                    "
                  >
                    Через месяц
                  </div>
                  <div
                    class="btn"
                    v-if="!activeIndicatorsTab.indicatorsTab3"
                    @click="
                      {
                        changeActiveIndicatorsTab(3);
                        mobileActiveIndicatorsOpen = false;
                      }
                    "
                  >
                    Через 4 месяца
                  </div>
                </div>
              </div>
            </div>
            <div class="indicators-tabs">
              <transition
                name="fade"
                mode="out-in"
                :duration="{ enter: 300, leave: 300 }"
              >
                <div class="tab" v-if="activeIndicatorsTab.indicatorsTab1">
                  <div class="values-main-indicators flex">
                    <div class="indicator flex-column">
                      <div class="indicator__decor"></div>
                      <div class="indicator__title">Переходы на сайт</div>
                      <div class="indicator__value">108</div>
                      <div class="indicator__changing-type">
                        <svg
                          class="corner"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.86074 0.495299C7.46173 -0.1651 8.53827 -0.1651 9.13926 0.4953L15.6292 7.62688C16.4745 8.55574 15.7812 10 14.49 10H1.51002C0.218809 10 -0.474532 8.55573 0.370761 7.62688L6.86074 0.495299Z"
                            fill="#12AB44"
                          />
                        </svg>
                        <div class="value">+3,4%</div>
                      </div>
                    </div>
                    <div class="indicator flex-column">
                      <div class="indicator__decor"></div>
                      <div class="indicator__title">Просмотры рекламы</div>
                      <div class="indicator__value">-</div>
                      <div class="indicator__changing-type">
                        <svg
                          class="corner"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.86074 0.495299C7.46173 -0.1651 8.53827 -0.1651 9.13926 0.4953L15.6292 7.62688C16.4745 8.55574 15.7812 10 14.49 10H1.51002C0.218809 10 -0.474532 8.55573 0.370761 7.62688L6.86074 0.495299Z"
                            fill="#12AB44"
                          />
                        </svg>
                        <div class="value">+3,4%</div>
                      </div>
                    </div>
                    <div class="indicator flex-column">
                      <div class="indicator__decor"></div>
                      <div class="indicator__title">Время на сайте</div>
                      <div class="indicator__value">01:16</div>
                      <div class="indicator__changing-type">
                        <svg
                          class="corner"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.86074 0.495299C7.46173 -0.1651 8.53827 -0.1651 9.13926 0.4953L15.6292 7.62688C16.4745 8.55574 15.7812 10 14.49 10H1.51002C0.218809 10 -0.474532 8.55573 0.370761 7.62688L6.86074 0.495299Z"
                            fill="#12AB44"
                          />
                        </svg>
                        <div class="value">+3,4%</div>
                      </div>
                    </div>
                    <div class="indicator flex-column">
                      <div class="indicator__decor"></div>
                      <div class="indicator__title">Новые посетители</div>
                      <div class="indicator__value">14%</div>
                      <div class="indicator__changing-type">
                        <svg
                          class="corner"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.86074 0.495299C7.46173 -0.1651 8.53827 -0.1651 9.13926 0.4953L15.6292 7.62688C16.4745 8.55574 15.7812 10 14.49 10H1.51002C0.218809 10 -0.474532 8.55573 0.370761 7.62688L6.86074 0.495299Z"
                            fill="#12AB44"
                          />
                        </svg>
                        <div class="value">+3,4%</div>
                      </div>
                    </div>
                  </div>
                  <div class="description flex">
                    <div class="left">
                      <p>
                        Здесь мы приводим наиболее распространенный пример,
                        когда клиент в момент обращения в нашу студию не смог
                        предоставить полную статистику продаж и маркетинговых
                        показателей по своей клинике, в связи с отсутствием
                        рекламной кампании и скудных показателей с метрики
                        сайта.
                      </p>
                      <p>
                        Наша задача – подготовить и запустить эффективную
                        контекстную рекламу на новый, специально подготовленный
                        для этих целей конверсионный сайт и сделать первый срез
                        показателей уже через месяц.
                      </p>
                    </div>
                    <div class="right">
                      <p>
                        Как правило уже
                        <span class="blue">через 3 - 4 месяца</span> грамотно
                        настроенная реклама дает кратное увеличение показателей,
                        в том числе благодаря регулярному анализу показателей,
                        оптимизации стоимости кликов и объявлений, выделяя из
                        них и прорабатывая далее наиболее эффективные с точки
                        зрения конверсии.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="tab" v-else-if="activeIndicatorsTab.indicatorsTab2">
                  <div class="values-main-indicators flex">
                    <div class="indicator flex-column">
                      <div class="indicator__decor"></div>
                      <div class="indicator__title">Переходы на сайт</div>
                      <div class="indicator__value">286</div>
                      <div class="indicator__changing-type positive">
                        <svg
                          class="corner"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.86074 0.495299C7.46173 -0.1651 8.53827 -0.1651 9.13926 0.4953L15.6292 7.62688C16.4745 8.55574 15.7812 10 14.49 10H1.51002C0.218809 10 -0.474532 8.55573 0.370761 7.62688L6.86074 0.495299Z"
                            fill="#12AB44"
                          />
                        </svg>
                        <div class="value">+164,8%</div>
                      </div>
                    </div>
                    <div class="indicator flex-column">
                      <div class="indicator__decor"></div>
                      <div class="indicator__title">Просмотры рекламы</div>
                      <div class="indicator__value">2765</div>
                      <div class="indicator__changing-type">
                        <svg
                          class="corner"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.86074 0.495299C7.46173 -0.1651 8.53827 -0.1651 9.13926 0.4953L15.6292 7.62688C16.4745 8.55574 15.7812 10 14.49 10H1.51002C0.218809 10 -0.474532 8.55573 0.370761 7.62688L6.86074 0.495299Z"
                            fill="#12AB44"
                          />
                        </svg>
                        <div class="value">+3,4%</div>
                      </div>
                    </div>
                    <div class="indicator flex-column">
                      <div class="indicator__decor"></div>
                      <div class="indicator__title">Время на сайте</div>
                      <div class="indicator__value">02:05</div>
                      <div class="indicator__changing-type positive">
                        <svg
                          class="corner"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.86074 0.495299C7.46173 -0.1651 8.53827 -0.1651 9.13926 0.4953L15.6292 7.62688C16.4745 8.55574 15.7812 10 14.49 10H1.51002C0.218809 10 -0.474532 8.55573 0.370761 7.62688L6.86074 0.495299Z"
                            fill="#12AB44"
                          />
                        </svg>
                        <div class="value">+64,4%</div>
                      </div>
                    </div>
                    <div class="indicator flex-column">
                      <div class="indicator__decor"></div>
                      <div class="indicator__title">Новые посетители</div>
                      <div class="indicator__value">32%</div>
                      <div class="indicator__changing-type positive">
                        <svg
                          class="corner"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.86074 0.495299C7.46173 -0.1651 8.53827 -0.1651 9.13926 0.4953L15.6292 7.62688C16.4745 8.55574 15.7812 10 14.49 10H1.51002C0.218809 10 -0.474532 8.55573 0.370761 7.62688L6.86074 0.495299Z"
                            fill="#12AB44"
                          />
                        </svg>
                        <div class="value">+128,6%</div>
                      </div>
                    </div>
                  </div>
                  <div class="dropdown-description">
                    <div
                      class="dropdown-open"
                      @click="openDetailedMetrics = !openDetailedMetrics"
                    >
                      <div class="text">Развернуть подробные показатели</div>
                      <div class="dropdown-open__btn flex">
                        <div class="line"></div>
                        <div class="corner">
                          <svg
                            width="320"
                            height="20"
                            viewBox="0 0 320 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 2H140L160 17L180 2H320"
                              stroke="#696FE6"
                              stroke-width="4"
                            />
                          </svg>
                        </div>
                        <div class="line"></div>
                      </div>
                    </div>
                    <div
                      class="dropdown-content"
                      :class="openDetailedMetrics ? 'open' : ''"
                    >
                      <div class="container flex">
                        <div class="left flex-column">
                          <div class="condition">
                            <div class="condition__name">
                              Стоимость рекламной кампании
                            </div>
                            <div class="condition__value">35.000 ₽</div>
                          </div>
                          <div class="condition">
                            <div class="condition__name">
                              Доход по итогам проведения кампании
                            </div>
                            <div class="condition__value">79.657 ₽</div>
                          </div>
                          <div class="condition">
                            <div class="condition__name">
                              Число обращений (звонков, заявок)
                            </div>
                            <div class="condition__value">43</div>
                          </div>
                          <div class="condition">
                            <div class="condition__name">
                              Людей, совершивших покупку
                            </div>
                            <div class="condition__value">17</div>
                          </div>
                        </div>
                        <div class="right">
                          <div class="indicator">
                            <div class="indicator__name">CTR, %</div>
                            <div class="indicator__value">10,34</div>
                            <div class="indicator__description_btn">
                              <svg
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.4 8.4798H2.56C2.56 8.05313 2.656 7.65313 2.848 7.2798C3.04 6.8958 3.27467 6.57046 3.552 6.3038C3.82933 6.02646 4.10667 5.76513 4.384 5.5198C4.66133 5.2638 4.896 4.98646 5.088 4.6878C5.28 4.38913 5.376 4.08513 5.376 3.7758C5.376 3.33846 5.22133 2.99713 4.912 2.7518C4.60267 2.50646 4.18667 2.3838 3.664 2.3838C3.16267 2.3838 2.73067 2.5118 2.368 2.7678C2.00533 3.0238 1.744 3.38646 1.584 3.8558L0 2.9598C0.288 2.21313 0.762667 1.6318 1.424 1.2158C2.096 0.799797 2.85867 0.591797 3.712 0.591797C4.672 0.591797 5.49333 0.863797 6.176 1.4078C6.86933 1.9518 7.216 2.7038 7.216 3.6638C7.216 4.10113 7.12 4.51713 6.928 4.9118C6.736 5.30646 6.50133 5.64246 6.224 5.9198C5.94667 6.19713 5.66933 6.46913 5.392 6.7358C5.11467 6.9918 4.88 7.26913 4.688 7.5678C4.496 7.86646 4.4 8.17046 4.4 8.4798ZM3.488 9.7918C3.81867 9.7918 4.10133 9.90913 4.336 10.1438C4.57067 10.3785 4.688 10.6611 4.688 10.9918C4.688 11.3225 4.57067 11.6051 4.336 11.8398C4.10133 12.0745 3.81867 12.1918 3.488 12.1918C3.15733 12.1918 2.87467 12.0745 2.64 11.8398C2.40533 11.6051 2.288 11.3225 2.288 10.9918C2.288 10.6611 2.4 10.3785 2.624 10.1438C2.85867 9.90913 3.14667 9.7918 3.488 9.7918Z"
                                  fill="#696FE6"
                                />
                              </svg>
                              <div class="tooltip">
                                CTR определяется как отношение числа кликов на
                                баннер или рекламное объявление к числу показов,
                                измеряется в процентах.
                                <div class="corner"></div>
                              </div>
                            </div>
                          </div>
                          <div class="indicator">
                            <div class="indicator__name">
                              CPS, ₽ (цена продажи)
                            </div>
                            <div class="indicator__value">2058,52</div>
                            <div class="indicator__description_btn">
                              <svg
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.4 8.4798H2.56C2.56 8.05313 2.656 7.65313 2.848 7.2798C3.04 6.8958 3.27467 6.57046 3.552 6.3038C3.82933 6.02646 4.10667 5.76513 4.384 5.5198C4.66133 5.2638 4.896 4.98646 5.088 4.6878C5.28 4.38913 5.376 4.08513 5.376 3.7758C5.376 3.33846 5.22133 2.99713 4.912 2.7518C4.60267 2.50646 4.18667 2.3838 3.664 2.3838C3.16267 2.3838 2.73067 2.5118 2.368 2.7678C2.00533 3.0238 1.744 3.38646 1.584 3.8558L0 2.9598C0.288 2.21313 0.762667 1.6318 1.424 1.2158C2.096 0.799797 2.85867 0.591797 3.712 0.591797C4.672 0.591797 5.49333 0.863797 6.176 1.4078C6.86933 1.9518 7.216 2.7038 7.216 3.6638C7.216 4.10113 7.12 4.51713 6.928 4.9118C6.736 5.30646 6.50133 5.64246 6.224 5.9198C5.94667 6.19713 5.66933 6.46913 5.392 6.7358C5.11467 6.9918 4.88 7.26913 4.688 7.5678C4.496 7.86646 4.4 8.17046 4.4 8.4798ZM3.488 9.7918C3.81867 9.7918 4.10133 9.90913 4.336 10.1438C4.57067 10.3785 4.688 10.6611 4.688 10.9918C4.688 11.3225 4.57067 11.6051 4.336 11.8398C4.10133 12.0745 3.81867 12.1918 3.488 12.1918C3.15733 12.1918 2.87467 12.0745 2.64 11.8398C2.40533 11.6051 2.288 11.3225 2.288 10.9918C2.288 10.6611 2.4 10.3785 2.624 10.1438C2.85867 9.90913 3.14667 9.7918 3.488 9.7918Z"
                                  fill="#696FE6"
                                />
                              </svg>
                              <div class="tooltip">
                                CPS (Cost Per Salе) – плата за продажу. Оплата
                                производится после совершения подтверждённой
                                покупки.<br /><br />Также есть понятие CPO (cost
                                per order) — стоимость 1 заказа товара/услуги.
                                Отличие состоит в том, что как правило, в CPO
                                учитываются все заказы, в том числе и не
                                оплаченные и эти данные можно фиксировать сразу
                                при оформлении услуги клиентом.
                                <div class="corner"></div>
                              </div>
                            </div>
                          </div>
                          <div class="indicator">
                            <div class="indicator__name">
                              CPC, ₽ (цена клика)
                            </div>
                            <div class="indicator__value">122,38</div>
                            <div class="indicator__description_btn">
                              <svg
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.4 8.4798H2.56C2.56 8.05313 2.656 7.65313 2.848 7.2798C3.04 6.8958 3.27467 6.57046 3.552 6.3038C3.82933 6.02646 4.10667 5.76513 4.384 5.5198C4.66133 5.2638 4.896 4.98646 5.088 4.6878C5.28 4.38913 5.376 4.08513 5.376 3.7758C5.376 3.33846 5.22133 2.99713 4.912 2.7518C4.60267 2.50646 4.18667 2.3838 3.664 2.3838C3.16267 2.3838 2.73067 2.5118 2.368 2.7678C2.00533 3.0238 1.744 3.38646 1.584 3.8558L0 2.9598C0.288 2.21313 0.762667 1.6318 1.424 1.2158C2.096 0.799797 2.85867 0.591797 3.712 0.591797C4.672 0.591797 5.49333 0.863797 6.176 1.4078C6.86933 1.9518 7.216 2.7038 7.216 3.6638C7.216 4.10113 7.12 4.51713 6.928 4.9118C6.736 5.30646 6.50133 5.64246 6.224 5.9198C5.94667 6.19713 5.66933 6.46913 5.392 6.7358C5.11467 6.9918 4.88 7.26913 4.688 7.5678C4.496 7.86646 4.4 8.17046 4.4 8.4798ZM3.488 9.7918C3.81867 9.7918 4.10133 9.90913 4.336 10.1438C4.57067 10.3785 4.688 10.6611 4.688 10.9918C4.688 11.3225 4.57067 11.6051 4.336 11.8398C4.10133 12.0745 3.81867 12.1918 3.488 12.1918C3.15733 12.1918 2.87467 12.0745 2.64 11.8398C2.40533 11.6051 2.288 11.3225 2.288 10.9918C2.288 10.6611 2.4 10.3785 2.624 10.1438C2.85867 9.90913 3.14667 9.7918 3.488 9.7918Z"
                                  fill="#696FE6"
                                />
                              </svg>
                              <div class="tooltip">
                                CPC (cost per click) — это цена клика, сумма,
                                которую рекламодатель платит контекстной системе
                                за клик по объявлению, сделанный пользователем.
                                <div class="corner"></div>
                              </div>
                            </div>
                          </div>
                          <div class="indicator">
                            <div class="indicator__name">
                              LTV, ₽ (доход с одного покупателя)
                            </div>
                            <div class="indicator__value">2626,88</div>
                            <div class="indicator__description_btn">
                              <svg
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.4 8.4798H2.56C2.56 8.05313 2.656 7.65313 2.848 7.2798C3.04 6.8958 3.27467 6.57046 3.552 6.3038C3.82933 6.02646 4.10667 5.76513 4.384 5.5198C4.66133 5.2638 4.896 4.98646 5.088 4.6878C5.28 4.38913 5.376 4.08513 5.376 3.7758C5.376 3.33846 5.22133 2.99713 4.912 2.7518C4.60267 2.50646 4.18667 2.3838 3.664 2.3838C3.16267 2.3838 2.73067 2.5118 2.368 2.7678C2.00533 3.0238 1.744 3.38646 1.584 3.8558L0 2.9598C0.288 2.21313 0.762667 1.6318 1.424 1.2158C2.096 0.799797 2.85867 0.591797 3.712 0.591797C4.672 0.591797 5.49333 0.863797 6.176 1.4078C6.86933 1.9518 7.216 2.7038 7.216 3.6638C7.216 4.10113 7.12 4.51713 6.928 4.9118C6.736 5.30646 6.50133 5.64246 6.224 5.9198C5.94667 6.19713 5.66933 6.46913 5.392 6.7358C5.11467 6.9918 4.88 7.26913 4.688 7.5678C4.496 7.86646 4.4 8.17046 4.4 8.4798ZM3.488 9.7918C3.81867 9.7918 4.10133 9.90913 4.336 10.1438C4.57067 10.3785 4.688 10.6611 4.688 10.9918C4.688 11.3225 4.57067 11.6051 4.336 11.8398C4.10133 12.0745 3.81867 12.1918 3.488 12.1918C3.15733 12.1918 2.87467 12.0745 2.64 11.8398C2.40533 11.6051 2.288 11.3225 2.288 10.9918C2.288 10.6611 2.4 10.3785 2.624 10.1438C2.85867 9.90913 3.14667 9.7918 3.488 9.7918Z"
                                  fill="#696FE6"
                                />
                              </svg>
                              <div class="tooltip">
                                LTV (lifetime value) – доход с одного
                                покупателя. Измеряет совокупный денежный поток
                                от каждого клиента.<br /><br />
                                С одной стороны, он оказывается отличным
                                параметром разных сегментов аудитории наряду с
                                их демографическими и поведенческими
                                характеристиками.<br /><br />
                                С другой стороны, его удобно сравнивать с
                                рекламными расходами, оценивая их
                                целесообразность.
                                <div class="corner"></div>
                              </div>
                            </div>
                          </div>
                          <div class="indicator">
                            <div class="indicator__name">
                              CPA, ₽ (цена обращения)
                            </div>
                            <div class="indicator__value">813,95</div>
                            <div class="indicator__description_btn">
                              <svg
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.4 8.4798H2.56C2.56 8.05313 2.656 7.65313 2.848 7.2798C3.04 6.8958 3.27467 6.57046 3.552 6.3038C3.82933 6.02646 4.10667 5.76513 4.384 5.5198C4.66133 5.2638 4.896 4.98646 5.088 4.6878C5.28 4.38913 5.376 4.08513 5.376 3.7758C5.376 3.33846 5.22133 2.99713 4.912 2.7518C4.60267 2.50646 4.18667 2.3838 3.664 2.3838C3.16267 2.3838 2.73067 2.5118 2.368 2.7678C2.00533 3.0238 1.744 3.38646 1.584 3.8558L0 2.9598C0.288 2.21313 0.762667 1.6318 1.424 1.2158C2.096 0.799797 2.85867 0.591797 3.712 0.591797C4.672 0.591797 5.49333 0.863797 6.176 1.4078C6.86933 1.9518 7.216 2.7038 7.216 3.6638C7.216 4.10113 7.12 4.51713 6.928 4.9118C6.736 5.30646 6.50133 5.64246 6.224 5.9198C5.94667 6.19713 5.66933 6.46913 5.392 6.7358C5.11467 6.9918 4.88 7.26913 4.688 7.5678C4.496 7.86646 4.4 8.17046 4.4 8.4798ZM3.488 9.7918C3.81867 9.7918 4.10133 9.90913 4.336 10.1438C4.57067 10.3785 4.688 10.6611 4.688 10.9918C4.688 11.3225 4.57067 11.6051 4.336 11.8398C4.10133 12.0745 3.81867 12.1918 3.488 12.1918C3.15733 12.1918 2.87467 12.0745 2.64 11.8398C2.40533 11.6051 2.288 11.3225 2.288 10.9918C2.288 10.6611 2.4 10.3785 2.624 10.1438C2.85867 9.90913 3.14667 9.7918 3.488 9.7918Z"
                                  fill="#696FE6"
                                />
                              </svg>
                              <div class="tooltip">
                                CPA (Cost per Action) — стоимость обращения:
                                показатель, с помощью которого рекламодатель
                                может рассчитать, во сколько ему обошлось
                                целевое действие пользователя на сайте.<br /><br />
                                Также можно использовать понятие CPL. Основное
                                отличие CPA и CPL в том, что во время CPA
                                рекламодатель получает простого, анонимного,
                                пользователя, в случае в CPL это уже практически
                                клиент с более конкретными данными.
                                <div class="corner"></div>
                              </div>
                            </div>
                          </div>
                          <div class="indicator indicator_roi">
                            <div class="indicator__name">
                              ROI, % (коэффициент возврата инвестиций)
                            </div>
                            <div class="indicator__value">127,59%</div>
                            <div class="indicator__description_btn">
                              <svg
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.4 8.4798H2.56C2.56 8.05313 2.656 7.65313 2.848 7.2798C3.04 6.8958 3.27467 6.57046 3.552 6.3038C3.82933 6.02646 4.10667 5.76513 4.384 5.5198C4.66133 5.2638 4.896 4.98646 5.088 4.6878C5.28 4.38913 5.376 4.08513 5.376 3.7758C5.376 3.33846 5.22133 2.99713 4.912 2.7518C4.60267 2.50646 4.18667 2.3838 3.664 2.3838C3.16267 2.3838 2.73067 2.5118 2.368 2.7678C2.00533 3.0238 1.744 3.38646 1.584 3.8558L0 2.9598C0.288 2.21313 0.762667 1.6318 1.424 1.2158C2.096 0.799797 2.85867 0.591797 3.712 0.591797C4.672 0.591797 5.49333 0.863797 6.176 1.4078C6.86933 1.9518 7.216 2.7038 7.216 3.6638C7.216 4.10113 7.12 4.51713 6.928 4.9118C6.736 5.30646 6.50133 5.64246 6.224 5.9198C5.94667 6.19713 5.66933 6.46913 5.392 6.7358C5.11467 6.9918 4.88 7.26913 4.688 7.5678C4.496 7.86646 4.4 8.17046 4.4 8.4798ZM3.488 9.7918C3.81867 9.7918 4.10133 9.90913 4.336 10.1438C4.57067 10.3785 4.688 10.6611 4.688 10.9918C4.688 11.3225 4.57067 11.6051 4.336 11.8398C4.10133 12.0745 3.81867 12.1918 3.488 12.1918C3.15733 12.1918 2.87467 12.0745 2.64 11.8398C2.40533 11.6051 2.288 11.3225 2.288 10.9918C2.288 10.6611 2.4 10.3785 2.624 10.1438C2.85867 9.90913 3.14667 9.7918 3.488 9.7918Z"
                                  fill="#696FE6"
                                />
                              </svg>
                              <div class="tooltip roi">
                                <div class="text">
                                  <b>Прибыль - расходы на рекламу</b> / Расходы
                                  на рекламу * 100%
                                </div>
                                <div class="line"></div>
                                <div class="text">
                                  <b>79.657 руб. - 35.000 руб.</b> / 35000 руб.
                                  * 100% <b class="result">= 127,59%</b>
                                </div>
                                <div class="corner"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab" v-else-if="activeIndicatorsTab.indicatorsTab3">
                  <div class="values-main-indicators flex">
                    <div class="indicator flex-column">
                      <div class="indicator__decor"></div>
                      <div class="indicator__title">Переходы на сайт</div>
                      <div class="indicator__value">798</div>
                      <div class="indicator__changing-type positive">
                        <svg
                          class="corner"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.86074 0.495299C7.46173 -0.1651 8.53827 -0.1651 9.13926 0.4953L15.6292 7.62688C16.4745 8.55574 15.7812 10 14.49 10H1.51002C0.218809 10 -0.474532 8.55573 0.370761 7.62688L6.86074 0.495299Z"
                            fill="#12AB44"
                          />
                        </svg>
                        <div class="value">+638,8%</div>
                      </div>
                    </div>
                    <div class="indicator flex-column">
                      <div class="indicator__decor"></div>
                      <div class="indicator__title">Просмотры рекламы</div>
                      <div class="indicator__value">5812</div>
                      <div class="indicator__changing-type">
                        <svg
                          class="corner"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.86074 0.495299C7.46173 -0.1651 8.53827 -0.1651 9.13926 0.4953L15.6292 7.62688C16.4745 8.55574 15.7812 10 14.49 10H1.51002C0.218809 10 -0.474532 8.55573 0.370761 7.62688L6.86074 0.495299Z"
                            fill="#12AB44"
                          />
                        </svg>
                        <div class="value">+110,2%</div>
                      </div>
                    </div>
                    <div class="indicator flex-column">
                      <div class="indicator__decor"></div>
                      <div class="indicator__title">Время на сайте</div>
                      <div class="indicator__value">03:18</div>
                      <div class="indicator__changing-type positive">
                        <svg
                          class="corner"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.86074 0.495299C7.46173 -0.1651 8.53827 -0.1651 9.13926 0.4953L15.6292 7.62688C16.4745 8.55574 15.7812 10 14.49 10H1.51002C0.218809 10 -0.474532 8.55573 0.370761 7.62688L6.86074 0.495299Z"
                            fill="#12AB44"
                          />
                        </svg>
                        <div class="value">+160,5%</div>
                      </div>
                    </div>
                    <div class="indicator flex-column">
                      <div class="indicator__decor"></div>
                      <div class="indicator__title">Новые посетители</div>
                      <div class="indicator__value">59%</div>
                      <div class="indicator__changing-type positive">
                        <svg
                          class="corner"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.86074 0.495299C7.46173 -0.1651 8.53827 -0.1651 9.13926 0.4953L15.6292 7.62688C16.4745 8.55574 15.7812 10 14.49 10H1.51002C0.218809 10 -0.474532 8.55573 0.370761 7.62688L6.86074 0.495299Z"
                            fill="#12AB44"
                          />
                        </svg>
                        <div class="value">+321,4%</div>
                      </div>
                    </div>
                  </div>
                  <div class="dropdown-description">
                    <div
                      class="dropdown-open"
                      @click="openDetailedMetrics = !openDetailedMetrics"
                    >
                      <div class="text">Развернуть подробные показатели</div>
                      <div class="dropdown-open__btn flex">
                        <div class="line"></div>
                        <div class="corner">
                          <svg
                            width="320"
                            height="20"
                            viewBox="0 0 320 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 2H140L160 17L180 2H320"
                              stroke="#696FE6"
                              stroke-width="4"
                            />
                          </svg>
                        </div>
                        <div class="line"></div>
                      </div>
                    </div>
                    <div
                      class="dropdown-content"
                      :class="openDetailedMetrics ? 'open' : ''"
                    >
                      <div class="container flex">
                        <div class="left flex-column">
                          <div class="condition">
                            <div class="condition__name">
                              Стоимость рекламной кампании
                            </div>
                            <div class="condition__value">50.000 ₽</div>
                          </div>
                          <div class="condition">
                            <div class="condition__name">
                              Доход по итогам проведения кампании
                            </div>
                            <div class="condition__value">241.485 ₽</div>
                          </div>
                          <div class="condition">
                            <div class="condition__name">
                              Число обращений (звонков, заявок)
                            </div>
                            <div class="condition__value">149</div>
                          </div>
                          <div class="condition">
                            <div class="condition__name">
                              Людей, совершивших покупку
                            </div>
                            <div class="condition__value">59</div>
                          </div>
                        </div>
                        <div class="right">
                          <div class="indicator">
                            <div class="indicator__name">CTR, %</div>
                            <div class="indicator__value">10,34</div>
                            <div class="indicator__description_btn">
                              <svg
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.4 8.4798H2.56C2.56 8.05313 2.656 7.65313 2.848 7.2798C3.04 6.8958 3.27467 6.57046 3.552 6.3038C3.82933 6.02646 4.10667 5.76513 4.384 5.5198C4.66133 5.2638 4.896 4.98646 5.088 4.6878C5.28 4.38913 5.376 4.08513 5.376 3.7758C5.376 3.33846 5.22133 2.99713 4.912 2.7518C4.60267 2.50646 4.18667 2.3838 3.664 2.3838C3.16267 2.3838 2.73067 2.5118 2.368 2.7678C2.00533 3.0238 1.744 3.38646 1.584 3.8558L0 2.9598C0.288 2.21313 0.762667 1.6318 1.424 1.2158C2.096 0.799797 2.85867 0.591797 3.712 0.591797C4.672 0.591797 5.49333 0.863797 6.176 1.4078C6.86933 1.9518 7.216 2.7038 7.216 3.6638C7.216 4.10113 7.12 4.51713 6.928 4.9118C6.736 5.30646 6.50133 5.64246 6.224 5.9198C5.94667 6.19713 5.66933 6.46913 5.392 6.7358C5.11467 6.9918 4.88 7.26913 4.688 7.5678C4.496 7.86646 4.4 8.17046 4.4 8.4798ZM3.488 9.7918C3.81867 9.7918 4.10133 9.90913 4.336 10.1438C4.57067 10.3785 4.688 10.6611 4.688 10.9918C4.688 11.3225 4.57067 11.6051 4.336 11.8398C4.10133 12.0745 3.81867 12.1918 3.488 12.1918C3.15733 12.1918 2.87467 12.0745 2.64 11.8398C2.40533 11.6051 2.288 11.3225 2.288 10.9918C2.288 10.6611 2.4 10.3785 2.624 10.1438C2.85867 9.90913 3.14667 9.7918 3.488 9.7918Z"
                                  fill="#696FE6"
                                />
                              </svg>
                              <div class="tooltip">
                                CTR определяется как отношение числа кликов на
                                баннер или рекламное объявление к числу показов,
                                измеряется в процентах.
                                <div class="corner"></div>
                              </div>
                            </div>
                          </div>
                          <div class="indicator">
                            <div class="indicator__name">
                              CPS, ₽ (цена продажи)
                            </div>
                            <div class="indicator__value">2058,52</div>
                            <div class="indicator__description_btn">
                              <svg
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.4 8.4798H2.56C2.56 8.05313 2.656 7.65313 2.848 7.2798C3.04 6.8958 3.27467 6.57046 3.552 6.3038C3.82933 6.02646 4.10667 5.76513 4.384 5.5198C4.66133 5.2638 4.896 4.98646 5.088 4.6878C5.28 4.38913 5.376 4.08513 5.376 3.7758C5.376 3.33846 5.22133 2.99713 4.912 2.7518C4.60267 2.50646 4.18667 2.3838 3.664 2.3838C3.16267 2.3838 2.73067 2.5118 2.368 2.7678C2.00533 3.0238 1.744 3.38646 1.584 3.8558L0 2.9598C0.288 2.21313 0.762667 1.6318 1.424 1.2158C2.096 0.799797 2.85867 0.591797 3.712 0.591797C4.672 0.591797 5.49333 0.863797 6.176 1.4078C6.86933 1.9518 7.216 2.7038 7.216 3.6638C7.216 4.10113 7.12 4.51713 6.928 4.9118C6.736 5.30646 6.50133 5.64246 6.224 5.9198C5.94667 6.19713 5.66933 6.46913 5.392 6.7358C5.11467 6.9918 4.88 7.26913 4.688 7.5678C4.496 7.86646 4.4 8.17046 4.4 8.4798ZM3.488 9.7918C3.81867 9.7918 4.10133 9.90913 4.336 10.1438C4.57067 10.3785 4.688 10.6611 4.688 10.9918C4.688 11.3225 4.57067 11.6051 4.336 11.8398C4.10133 12.0745 3.81867 12.1918 3.488 12.1918C3.15733 12.1918 2.87467 12.0745 2.64 11.8398C2.40533 11.6051 2.288 11.3225 2.288 10.9918C2.288 10.6611 2.4 10.3785 2.624 10.1438C2.85867 9.90913 3.14667 9.7918 3.488 9.7918Z"
                                  fill="#696FE6"
                                />
                              </svg>
                              <div class="tooltip">
                                CPS (Cost Per Salе) – плата за продажу. Оплата
                                производится после совершения подтверждённой
                                покупки.<br /><br />Также есть понятие CPO (cost
                                per order) — стоимость 1 заказа товара/услуги.
                                Отличие состоит в том, что как правило, в CPO
                                учитываются все заказы, в том числе и не
                                оплаченные и эти данные можно фиксировать сразу
                                при оформлении услуги клиентом.
                                <div class="corner"></div>
                              </div>
                            </div>
                          </div>
                          <div class="indicator">
                            <div class="indicator__name">
                              CPC, ₽ (цена клика)
                            </div>
                            <div class="indicator__value">82,64</div>
                            <div class="indicator__description_btn">
                              <svg
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.4 8.4798H2.56C2.56 8.05313 2.656 7.65313 2.848 7.2798C3.04 6.8958 3.27467 6.57046 3.552 6.3038C3.82933 6.02646 4.10667 5.76513 4.384 5.5198C4.66133 5.2638 4.896 4.98646 5.088 4.6878C5.28 4.38913 5.376 4.08513 5.376 3.7758C5.376 3.33846 5.22133 2.99713 4.912 2.7518C4.60267 2.50646 4.18667 2.3838 3.664 2.3838C3.16267 2.3838 2.73067 2.5118 2.368 2.7678C2.00533 3.0238 1.744 3.38646 1.584 3.8558L0 2.9598C0.288 2.21313 0.762667 1.6318 1.424 1.2158C2.096 0.799797 2.85867 0.591797 3.712 0.591797C4.672 0.591797 5.49333 0.863797 6.176 1.4078C6.86933 1.9518 7.216 2.7038 7.216 3.6638C7.216 4.10113 7.12 4.51713 6.928 4.9118C6.736 5.30646 6.50133 5.64246 6.224 5.9198C5.94667 6.19713 5.66933 6.46913 5.392 6.7358C5.11467 6.9918 4.88 7.26913 4.688 7.5678C4.496 7.86646 4.4 8.17046 4.4 8.4798ZM3.488 9.7918C3.81867 9.7918 4.10133 9.90913 4.336 10.1438C4.57067 10.3785 4.688 10.6611 4.688 10.9918C4.688 11.3225 4.57067 11.6051 4.336 11.8398C4.10133 12.0745 3.81867 12.1918 3.488 12.1918C3.15733 12.1918 2.87467 12.0745 2.64 11.8398C2.40533 11.6051 2.288 11.3225 2.288 10.9918C2.288 10.6611 2.4 10.3785 2.624 10.1438C2.85867 9.90913 3.14667 9.7918 3.488 9.7918Z"
                                  fill="#696FE6"
                                />
                              </svg>
                              <div class="tooltip">
                                CPC (cost per click) — это цена клика, сумма,
                                которую рекламодатель платит контекстной системе
                                за клик по объявлению, сделанный пользователем.
                                <div class="corner"></div>
                              </div>
                            </div>
                          </div>
                          <div class="indicator">
                            <div class="indicator__name">
                              LTV, ₽ (доход с одного покупателя)
                            </div>
                            <div class="indicator__value">3210,71</div>
                            <div class="indicator__description_btn">
                              <svg
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.4 8.4798H2.56C2.56 8.05313 2.656 7.65313 2.848 7.2798C3.04 6.8958 3.27467 6.57046 3.552 6.3038C3.82933 6.02646 4.10667 5.76513 4.384 5.5198C4.66133 5.2638 4.896 4.98646 5.088 4.6878C5.28 4.38913 5.376 4.08513 5.376 3.7758C5.376 3.33846 5.22133 2.99713 4.912 2.7518C4.60267 2.50646 4.18667 2.3838 3.664 2.3838C3.16267 2.3838 2.73067 2.5118 2.368 2.7678C2.00533 3.0238 1.744 3.38646 1.584 3.8558L0 2.9598C0.288 2.21313 0.762667 1.6318 1.424 1.2158C2.096 0.799797 2.85867 0.591797 3.712 0.591797C4.672 0.591797 5.49333 0.863797 6.176 1.4078C6.86933 1.9518 7.216 2.7038 7.216 3.6638C7.216 4.10113 7.12 4.51713 6.928 4.9118C6.736 5.30646 6.50133 5.64246 6.224 5.9198C5.94667 6.19713 5.66933 6.46913 5.392 6.7358C5.11467 6.9918 4.88 7.26913 4.688 7.5678C4.496 7.86646 4.4 8.17046 4.4 8.4798ZM3.488 9.7918C3.81867 9.7918 4.10133 9.90913 4.336 10.1438C4.57067 10.3785 4.688 10.6611 4.688 10.9918C4.688 11.3225 4.57067 11.6051 4.336 11.8398C4.10133 12.0745 3.81867 12.1918 3.488 12.1918C3.15733 12.1918 2.87467 12.0745 2.64 11.8398C2.40533 11.6051 2.288 11.3225 2.288 10.9918C2.288 10.6611 2.4 10.3785 2.624 10.1438C2.85867 9.90913 3.14667 9.7918 3.488 9.7918Z"
                                  fill="#696FE6"
                                />
                              </svg>
                              <div class="tooltip">
                                LTV (lifetime value) – доход с одного
                                покупателя. Измеряет совокупный денежный поток
                                от каждого клиента.<br /><br />
                                С одной стороны, он оказывается отличным
                                параметром разных сегментов аудитории наряду с
                                их демографическими и поведенческими
                                характеристиками.<br /><br />
                                С другой стороны, его удобно сравнивать с
                                рекламными расходами, оценивая их
                                целесообразность.
                                <div class="corner"></div>
                              </div>
                            </div>
                          </div>
                          <div class="indicator">
                            <div class="indicator__name">
                              CPA, ₽ (цена обращения)
                            </div>
                            <div class="indicator__value">485,44</div>
                            <div class="indicator__description_btn">
                              <svg
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.4 8.4798H2.56C2.56 8.05313 2.656 7.65313 2.848 7.2798C3.04 6.8958 3.27467 6.57046 3.552 6.3038C3.82933 6.02646 4.10667 5.76513 4.384 5.5198C4.66133 5.2638 4.896 4.98646 5.088 4.6878C5.28 4.38913 5.376 4.08513 5.376 3.7758C5.376 3.33846 5.22133 2.99713 4.912 2.7518C4.60267 2.50646 4.18667 2.3838 3.664 2.3838C3.16267 2.3838 2.73067 2.5118 2.368 2.7678C2.00533 3.0238 1.744 3.38646 1.584 3.8558L0 2.9598C0.288 2.21313 0.762667 1.6318 1.424 1.2158C2.096 0.799797 2.85867 0.591797 3.712 0.591797C4.672 0.591797 5.49333 0.863797 6.176 1.4078C6.86933 1.9518 7.216 2.7038 7.216 3.6638C7.216 4.10113 7.12 4.51713 6.928 4.9118C6.736 5.30646 6.50133 5.64246 6.224 5.9198C5.94667 6.19713 5.66933 6.46913 5.392 6.7358C5.11467 6.9918 4.88 7.26913 4.688 7.5678C4.496 7.86646 4.4 8.17046 4.4 8.4798ZM3.488 9.7918C3.81867 9.7918 4.10133 9.90913 4.336 10.1438C4.57067 10.3785 4.688 10.6611 4.688 10.9918C4.688 11.3225 4.57067 11.6051 4.336 11.8398C4.10133 12.0745 3.81867 12.1918 3.488 12.1918C3.15733 12.1918 2.87467 12.0745 2.64 11.8398C2.40533 11.6051 2.288 11.3225 2.288 10.9918C2.288 10.6611 2.4 10.3785 2.624 10.1438C2.85867 9.90913 3.14667 9.7918 3.488 9.7918Z"
                                  fill="#696FE6"
                                />
                              </svg>
                              <div class="tooltip">
                                CPA (Cost per Action) — стоимость обращения:
                                показатель, с помощью которого рекламодатель
                                может рассчитать, во сколько ему обошлось
                                целевое действие пользователя на сайте.<br /><br />
                                Также можно использовать понятие CPL. Основное
                                отличие CPA и CPL в том, что во время CPA
                                рекламодатель получает простого, анонимного,
                                пользователя, в случае в CPL это уже практически
                                клиент с более конкретными данными.
                                <div class="corner"></div>
                              </div>
                            </div>
                          </div>
                          <div class="indicator indicator_roi">
                            <div class="indicator__name">
                              ROI, % (коэффициент возврата инвестиций)
                            </div>
                            <div class="indicator__value">269,70%</div>
                            <div class="indicator__description_btn">
                              <svg
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.4 8.4798H2.56C2.56 8.05313 2.656 7.65313 2.848 7.2798C3.04 6.8958 3.27467 6.57046 3.552 6.3038C3.82933 6.02646 4.10667 5.76513 4.384 5.5198C4.66133 5.2638 4.896 4.98646 5.088 4.6878C5.28 4.38913 5.376 4.08513 5.376 3.7758C5.376 3.33846 5.22133 2.99713 4.912 2.7518C4.60267 2.50646 4.18667 2.3838 3.664 2.3838C3.16267 2.3838 2.73067 2.5118 2.368 2.7678C2.00533 3.0238 1.744 3.38646 1.584 3.8558L0 2.9598C0.288 2.21313 0.762667 1.6318 1.424 1.2158C2.096 0.799797 2.85867 0.591797 3.712 0.591797C4.672 0.591797 5.49333 0.863797 6.176 1.4078C6.86933 1.9518 7.216 2.7038 7.216 3.6638C7.216 4.10113 7.12 4.51713 6.928 4.9118C6.736 5.30646 6.50133 5.64246 6.224 5.9198C5.94667 6.19713 5.66933 6.46913 5.392 6.7358C5.11467 6.9918 4.88 7.26913 4.688 7.5678C4.496 7.86646 4.4 8.17046 4.4 8.4798ZM3.488 9.7918C3.81867 9.7918 4.10133 9.90913 4.336 10.1438C4.57067 10.3785 4.688 10.6611 4.688 10.9918C4.688 11.3225 4.57067 11.6051 4.336 11.8398C4.10133 12.0745 3.81867 12.1918 3.488 12.1918C3.15733 12.1918 2.87467 12.0745 2.64 11.8398C2.40533 11.6051 2.288 11.3225 2.288 10.9918C2.288 10.6611 2.4 10.3785 2.624 10.1438C2.85867 9.90913 3.14667 9.7918 3.488 9.7918Z"
                                  fill="#696FE6"
                                />
                              </svg>
                              <div class="tooltip roi">
                                <div class="text">
                                  <b>Прибыль - расходы на рекламу</b> / Расходы
                                  на рекламу * 100%
                                </div>
                                <div class="line"></div>
                                <div class="text">
                                  <b>241.485 руб. - 50.000 руб.</b> / 50000 руб.
                                  * 100% <b class="result">= 269,70%</b>
                                </div>
                                <div class="corner"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <div class="step-description flex" id="step-description_2">
            <img
              src="@/assets/image/block6/step3/step-description-img_2.webp"
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
                    src="@/assets/image/block6/step3/stages-marketing_1.webp"
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
                    src="@/assets/image/block6/step3/stages-marketing_2.webp"
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
                    src="@/assets/image/block6/step3/stages-marketing_3.webp"
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
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

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
      mobileActiveIndicatorsOpen: false,
      //Табы результатов по ключевым показателям
      activeIndicatorsTab: {
        indicatorsTab1: true,
        indicatorsTab2: false,
        indicatorsTab3: false,
      },
      //Открыт ли блок подробных показателей
      openDetailedMetrics: false,
      //Табы воронок
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
      //Предыдущая позиция скрола
      prevScrollPosition: 0,
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
    changeOpenSpecialMenu() {
      if (
        !this.openSpecialMenu &&
        this.blockElement.offsetTop <= window.scrollY + 100 &&
        this.blockElement.offsetTop + this.blockElement.offsetHeight >=
          window.scrollY + 100
      ) {
        this.openSpecialMenu = true;
      } else if (
        this.openSpecialMenu &&
        this.blockElement.offsetTop + this.blockElement.offsetHeight <=
          window.scrollY + 100 &&
        this.blockElement.offsetTop + this.blockElement.offsetHeight + 150 >=
          window.scrollY + 100 &&
        this.prevScrollPosition < window.scrollY
        // !this.scrollTrackung_status
      ) {
        this.openSpecialMenu = false;
      } else if (
        !this.openSpecialMenu &&
        this.blockElement.offsetTop + this.blockElement.offsetHeight >=
          window.scrollY + 100 &&
        this.blockElement.offsetTop <= window.scrollY + 100 &&
        this.prevScrollPosition > window.scrollY
      ) {
        this.openSpecialMenu = true;
      }
      this.prevScrollPosition = window.scrollY;
    },
    changeActiveIndicatorsTab(tabId) {
      Object.keys(this.activeIndicatorsTab).forEach((key) => {
        if ("indicatorsTab" + tabId == key) {
          this.activeIndicatorsTab[key] = true;
        } else {
          this.activeIndicatorsTab[key] = false;
        }
        this.scrollProgress();
      });
    },
  },
  computed: {
    openSpecialMenu: {
      get() {
        return this.$store.state.openSpecialMenuStatus;
      },
      set(value) {
        this.$store.dispatch("updateOpenSpecialMenuStatus", value);
      },
    },
    mobileActiveIndicatorsText() {
      if (this.activeIndicatorsTab.indicatorsTab1) {
        return "До старта наших работ";
      } else if (this.activeIndicatorsTab.indicatorsTab2) {
        return "Через месяц";
      } else {
        return "Через 4 месяца";
      }
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
        this.changeOpenSpecialMenu();
      }.bind(this)
    );
  },
};
</script>

<style lang="scss" scoped>
.fade-enter {
  transition: opacity 0.3s;
  opacity: 0;
}
.fade-leave-to {
  transition: opacity 0.3s;
  opacity: 0;
}
.block {
  position: relative;
  overflow: hidden;
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
  .steps-way {
    position: absolute;
    height: 100%;
    right: -110px;
    top: 94px;
  }
  &#block6 {
    .bacground-color {
      background: #f3f4f9;
    }
    .breaf {
      position: relative;
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
        .decor {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 596px;
          width: 596px;
          top: -102px;
          left: -143px;
          .circle {
            border-radius: 100%;
            background: #cbcdf4;
            display: flex;
            align-items: center;
            justify-content: center;
            &_one {
              width: 100%;
              height: 100%;
            }
            &_two {
              width: 444px;
              height: 444px;
              border: 1px solid #696fe5;
            }
            &_three {
              width: 293px;
              height: 293px;
              border: 1px solid #696fe5;
            }
            &_four {
              width: 142px;
              height: 142px;
              border: 1px solid #696fe5;
            }
          }
          .special-decor {
            width: 353px;
            height: 320px;
            position: absolute;
            right: 0;
            top: 102px;
            border-radius: 20px;
            overflow: hidden;
            z-index: 1;
            .circle {
              position: absolute;
              border-radius: 100%;
              background: inherit;
              display: flex;
              align-items: center;
              justify-content: center;
              &_one {
                height: 596px;
                width: 596px;
                top: -102px;
                left: -243px;
              }
              &_two {
                width: 444px;
                height: 444px;
                border: 1px solid #ecc0c7;
              }
              &_three {
                width: 293px;
                height: 293px;
                border: 1px solid #ecc0c7;
              }
              &_four {
                width: 142px;
                height: 142px;
                border: 1px solid #ecc0c7;
              }
            }
          }
        }
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
          width: 753px;
          height: 228px;
          position: absolute;
          left: 36%;
          top: 40px;
          .circle {
            &#circle_1 {
              position: absolute;
              left: 0;
              top: 0;
              width: 20px;
              height: 20px;
              border-radius: 100%;
              background-color: #5356ae;
            }
            &#circle_2 {
              position: absolute;
              right: 224px;
              top: auto;
              bottom: 0;
              width: 60px;
              height: 60px;
              border-radius: 100%;
              background-color: #cbcdf4;
            }
          }
          .triangle {
            width: 0;
            height: 0;
            border-bottom: 15px solid transparent;
            border-right: 30px solid #ecc0c7;
            border-top: 15px solid transparent;
            position: absolute;
            top: 30px;
            right: 230px;
          }
          .square {
            width: 20px;
            height: 20px;
            background-color: #424c5c;
            position: absolute;
            top: 0px;
            right: 0px;
          }
        }
      }
      &#breaf-two {
        .bacground-wrapper {
          background-color: #5356ae;
          min-width: 1366px;
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
          width: 863px;
          height: 863px;
          border-radius: 100%;
          background-color: #ecc0c7;
          position: absolute;
          z-index: 1;
          top: -270px;
          left: calc(-338px + 180 * (100vw - 1366px) / (1920 - 1366));
          .img-wrapper {
            width: 100%;
            height: 100%;
            border-radius: 100%;
            position: absolute;
            left: 0px;
            top: 0px;
            overflow: hidden;
            img {
              position: absolute;
              right: -133px;
              bottom: -20px;
              transform: rotate(-9deg);
            }
          }
        }
        .decor-img_2 {
          width: 688px;
          height: 228px;
          position: absolute;
          left: 43%;
          top: 40px;
          .circle {
            &#circle_1 {
              position: absolute;
              left: 0;
              top: 0;
              width: 20px;
              height: 20px;
              border-radius: 100%;
              background-color: #cbcdf4;
            }
            &#circle_2 {
              position: absolute;
              right: 178px;
              top: 168px;
              width: 60px;
              height: 60px;
              border-radius: 100%;
              background-color: #cbcdf4;
            }
          }
          .triangle {
            width: 0;
            height: 0;
            border-bottom: 15px solid transparent;
            border-right: 30px solid #ecc0c7;
            border-top: 15px solid transparent;
            position: absolute;
            top: 10px;
            right: 135px;
          }
          .square {
            width: 20px;
            height: 20px;
            background-color: #696fe5;
            position: absolute;
            top: 92px;
            right: 0px;
          }
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
        span.decor-line {
          display: inline;
          border-bottom: 10px solid #696fe5;
          width: fit-content;
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
          .decor-line-adaptive {
            display: none;
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
                &.swiper-button-disabled {
                  opacity: 1 !important;
                  cursor: pointer !important;
                  pointer-events: auto !important;
                }
              }
            }
          }
          .swiper {
            position: relative;
            width: 100%;
            height: 443px;
            .swiper-wrapper {
              .swiper-slide {
                //Некоторые стили слайдера вынесены в отдельный файл (assets/styles/slider-styles.scss)
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
            .service-img-adaptive {
              display: none;
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
              width: 456px;
              img {
                position: absolute;
                &:nth-of-type(1) {
                  animation: asteriskOne 5s linear infinite;
                  @keyframes asteriskOne {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(360deg);
                    }
                  }
                }
                &:nth-of-type(2) {
                  left: 227px;
                  top: -50px;
                  animation: asteriskTwo 5s linear infinite;
                  @keyframes asteriskTwo {
                    0% {
                      transform: rotate(0deg);
                    }
                    100% {
                      transform: rotate(-360deg);
                    }
                  }
                }
              }
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
                .deployable-title {
                  .indicator {
                    .triangle {
                      transform: rotate(180deg);
                    }
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
        .indicators-change-block {
          margin-bottom: 100px;
          .title {
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
          .indicators-change-tabs-btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 40px;
            .btn {
              cursor: pointer;
              width: 360px;
              height: 60px;
              border: 2px solid #cbcdf4;
              border-radius: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              //Стили текста
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 135%;
              color: #696fe6;
              &:hover {
                border: 2px solid #696fe6;
                color: #696fe6;
              }
              &.select {
                border: 2px solid #696fe6;
                background-color: #696fe6;
                color: #ffffff;
              }
            }
          }
          .indicators-change-tabs-btn_adaptive {
            display: none;
          }
          .indicators-tabs {
            .tab {
              .values-main-indicators {
                gap: 40px;
                margin-bottom: 80px;
                .indicator {
                  overflow: hidden;
                  position: relative;
                  width: 260px;
                  height: 260px;
                  padding: 86px 30px 20px;
                  background: #f9f9fd;
                  border-bottom: 4px solid #696fe6;
                  box-shadow: 0px 14px 30px rgba(105, 111, 229, 0.14);
                  border-radius: 30px;
                  .indicator__decor {
                    position: absolute;
                    right: -90px;
                    top: -90px;
                    width: 180px;
                    height: 180px;
                    border: 1px solid #cbcdf4;
                    border-radius: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    &::before {
                      position: relative;
                      content: "";
                      width: 108px;
                      height: 108px;
                      border: 1px solid #cbcdf4;
                      border-radius: 100%;
                    }
                  }
                  .indicator__title {
                    margin-bottom: 5px;
                    //Стили текста
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 150%;
                    color: #696fe6;
                  }
                  .indicator__value {
                    //Стили текста
                    font-style: normal;
                    font-weight: 700;
                    font-size: 48px;
                    line-height: 59px;
                    letter-spacing: 0.02em;
                    text-transform: uppercase;
                    color: #424c5c;
                  }
                  .indicator__changing-type {
                    margin-top: auto;
                    gap: 6px;
                    align-items: center;
                    .value {
                      font-style: normal;
                      font-weight: 500;
                      font-size: 20px;
                      line-height: 150%;
                      color: #12ab44;
                    }
                    display: none;
                    &.positive {
                      display: flex;
                    }
                    &.negative {
                      display: flex;
                      .corner {
                        transform: rotate(180deg);
                        path {
                          fill: #e93d3d;
                        }
                      }
                      .value {
                        color: #e93d3d;
                      }
                    }
                  }
                }
              }
              .description {
                border-top: 1px solid #cbcdf4;
                border-bottom: 1px solid #cbcdf4;
                padding: 40px 0px;
                gap: 40px;
                .left,
                .right {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  gap: 20px;
                  p {
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 150%;
                    color: #424c5c;
                    span.blue {
                      color: #696fe5;
                    }
                  }
                }
              }
              .dropdown-description {
                .dropdown-open {
                  cursor: pointer;
                  .text {
                    margin-bottom: 20px;
                    position: relative;
                    //Стили текста
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 150%;
                    text-align: center;
                    color: #696fe6;
                    //Анимация
                    animation: jumpText 1s linear infinite;
                    @keyframes jumpText {
                      0% {
                        top: 0px;
                      }
                      25% {
                        top: -6px;
                      }
                      50% {
                        top: 0px;
                      }
                      75% {
                        top: 6px;
                      }
                      100% {
                        top: 0;
                      }
                    }
                  }
                  .dropdown-open__btn {
                    justify-content: center;
                    .line {
                      flex: 2;
                      border-top: 4px solid #696fe5;
                    }
                    .corner {
                      flex: 1;
                    }
                  }
                }
                .dropdown-content {
                  max-height: 0px;
                  overflow: hidden;
                  transition: max-height 0.5s;
                  .container {
                    padding: 40px 0px;
                    border-bottom: 4px solid #696fe6;
                    gap: 40px;
                    .left {
                      gap: 50px;
                      min-width: 360px;
                      .condition {
                        .condition__name {
                          font-style: normal;
                          font-weight: 800;
                          font-size: 16px;
                          line-height: 150%;
                          color: #696fe6;
                        }
                        .condition__value {
                          font-style: normal;
                          font-weight: 700;
                          font-size: 36px;
                          line-height: 45px;
                          letter-spacing: 0.02em;
                          text-transform: uppercase;
                          color: #424c5c;
                        }
                      }
                    }
                    .right {
                      flex: 1;
                      display: grid;
                      gap: 30px 40px;
                      grid-template-columns: repeat(2, 360px);
                      grid-template-rows: repeat(3, 160px);
                      .indicator {
                        position: relative;
                        padding: 20px 30px;
                        width: 100%;
                        height: 100%;
                        border: 1px solid #cbcdf4;
                        display: flex;
                        flex-direction: column;
                        border-radius: 20px;
                        .indicator__name {
                          padding-right: 40px;
                          //Стили текста
                          font-style: normal;
                          font-weight: 800;
                          font-size: 16px;
                          line-height: 150%;
                          color: #696fe6;
                        }
                        .indicator__value {
                          //Стили текста
                          margin-top: auto;
                          font-style: normal;
                          font-weight: 700;
                          font-size: 48px;
                          line-height: 59px;
                          display: flex;
                          align-items: flex-end;
                          letter-spacing: 0.02em;
                          text-transform: uppercase;
                          color: #696fe6;
                        }
                        .indicator__description_btn {
                          cursor: pointer;
                          position: absolute;
                          right: 30px;
                          top: 20px;
                          width: 24px;
                          height: 24px;
                          border-radius: 100%;
                          background-color: #dfe0f7;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          .tooltip {
                            display: none;
                            position: absolute;
                            width: 380px;
                            height: fit-content;
                            padding: 20px 30px;
                            background: #ffffff;
                            box-shadow: 0px 14px 30px rgba(105, 111, 229, 0.14);
                            border-radius: 20px;
                            z-index: 1;
                            transform: translateY(calc(-100% - 15px));
                            left: -320px;
                            top: 0px;
                            //Стили текста
                            font-style: normal;
                            font-weight: 500;
                            font-size: 14px;
                            line-height: 17px;
                            color: #424c5c;
                            .corner {
                              border-left: 70px solid transparent;
                              border-right: 0px solid transparent;
                              border-top: 30px solid #ffffff;
                              width: 70px;
                              transform: skew(20deg);
                              position: absolute;
                              right: 54px;
                              bottom: -20px;
                            }
                            &.roi {
                              left: -410px;
                              width: 468px;
                              flex-direction: column;
                              align-items: flex-end;
                              gap: 10px;
                              .text {
                                font-size: 14px;
                                font-weight: 400;
                                line-height: 21px;
                                letter-spacing: 0em;
                                text-align: left;
                                color: #424c5c;
                                b {
                                  color: #696fe6;
                                  &.result {
                                    font-weight: 800;
                                    color: #696fe6;
                                  }
                                }
                              }
                              .line {
                                width: 100%;
                                height: 1px;
                                background: #cbcdf4;
                              }
                            }
                          }
                          &:hover {
                            .tooltip {
                              display: block;
                              &.roi {
                                display: flex;
                              }
                            }
                          }
                        }
                        &.indicator_roi {
                          background-color: #696fe6;
                          * {
                            color: #ffffff;
                          }
                        }
                        &:hover {
                          background-color: #696fe6;
                          * {
                            color: #ffffff;
                          }
                        }
                      }
                    }
                  }
                  &.open {
                    max-height: 624px;
                    overflow: visible;
                    animation: overflowDuration 0.6s linear;
                    @keyframes overflowDuration {
                      0% {
                        overflow: hidden;
                      }

                      100% {
                        overflow: hidden;
                      }
                    }
                  }
                }
              }
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
@media screen and (max-width: 1800px) {
  .block {
  }
}
@media screen and (max-width: 1600px) {
  .block {
    .viewing-status {
      .verticale_line {
        left: -60px;
      }
    }
    &#block6 {
      .step {
        .title {
          .step-number {
            left: -85px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1365px) {
  .viewing-status {
    display: none;
  }
  .steps-way {
    display: none;
  }
  .block {
    &#block6 {
      .breaf {
        &#breaf-one {
          .decor {
            left: 0px;
            .circle {
              display: none;
            }
            .special-decor {
              left: 50px;
            }
          }
          .bacground-wrapper {
            width: calc(100% - 100px);
            .wrapper {
              width: 100%;
              padding: 0px 20px;
              justify-content: center;
              gap: 33px;
            }
            .decor-img_1 {
              right: -350px;
            }
            .decor-img_2 {
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
              .circle {
                &#circle_1 {
                  left: auto;
                  right: auto;
                  left: 276px;
                  top: 21px;
                }
                &#circle_2 {
                  left: 47%;
                  right: auto;
                  top: auto;
                  bottom: -21px;
                }
              }
              .triangle {
                top: 15px;
                right: auto;
                left: 29px;
              }
              .square {
                top: 38px;
                right: 46px;
              }
            }
          }
        }
        &#breaf-two {
          min-width: auto;
          .bacground-wrapper {
            width: calc(100% - 100px);
            min-width: auto;
            .wrapper {
              width: 100%;
              .right {
                margin-left: auto;
              }
            }
            .decor-img_1 {
              width: 402px;
              height: 402px;
              top: -32px;
              left: -145px;
              img {
                width: 125%;
                right: -99px;
                bottom: -125px;
                transform: rotate(39deg);
              }
              &::before {
                width: 116px;
                height: 116px;
                border-radius: 100%;
                position: absolute;
                border: 2px solid #ecc0c7;
                content: "";
                right: -24px;
                bottom: 0px;
              }
            }
            .decor-img_2 {
              left: auto;
              right: 0;
              top: 0;
              width: 394px;
              height: 100%;
              .circle {
                &#circle_1 {
                  left: auto;
                  right: 394px;
                  top: 48px;
                }
                &#circle_2 {
                  left: auto;
                  right: 99px;
                  top: auto;
                  bottom: -26px;
                }
              }
              .triangle {
                top: 25px;
                right: 190px;
              }
              .square {
                top: 28px;
                right: 20px;
              }
            }
          }
        }
      }
      .step {
        padding: 60px 0px;
        .title {
          .step-number {
            display: none;
          }
        }
        &#step-one {
          padding: 120px 0px !important;
          .wrapper {
            background-size: cover;
            width: 768px;
            padding: 0px 50px;
            .rebranding-comprehensive {
              .rebranding-comprehensive__description {
                display: flex;
                flex-direction: column;
                gap: 60px;
                .row {
                  left: 0px !important;
                  .circles {
                    .border-circle {
                      &.external {
                        width: 180px;
                        height: 180px;
                      }
                      &.internal {
                        width: 150px;
                        height: 150px;
                      }
                    }
                  }
                  .description-text {
                    width: fit-content;
                  }
                  &#rebranding-comprehensive__description_row1 {
                    img {
                      width: 90px;
                      height: auto;
                    }
                  }
                  &#rebranding-comprehensive__description_row2 {
                    img {
                      width: 62px;
                      height: auto;
                    }
                  }
                  &#rebranding-comprehensive__description_row3 {
                    img {
                      width: 148px;
                      height: auto;
                    }
                  }
                }
              }
              .decor-line {
                display: none;
              }
              .decor-line-adaptive {
                display: block;
                position: absolute;
                top: 230px;
              }
            }
            .complex-services {
              .services-list {
                .service {
                  gap: 0px;
                  width: 100%;
                  height: fit-content;
                  flex-direction: column;
                  .service-img {
                    display: none;
                  }
                  .service-img-adaptive {
                    display: block;
                    height: auto;
                    width: 570px;
                  }
                  .service-content {
                    width: 100%;
                    padding: 40px 110px 50px 55px;
                  }
                  &:nth-of-type(2n) {
                    flex-direction: column-reverse;
                    align-items: flex-end;
                  }
                }
              }
            }
          }
        }
        &#step-two {
          .wrapper {
            width: 758px;
            padding: 0px 50px;
            .step-description {
              img {
                position: relative;
                left: -50px;
                margin-right: -50px;
              }
            }
          }
          .site-features-container {
            width: calc(758px - 100px);
            margin: 0px auto;
            padding: 60px 50px;
            overflow: hidden;
            .decor-img {
              &#decor-img_1 {
                display: none;
              }
              &#decor-img_2 {
                height: 300px;
                right: -77px;
                top: -9px;
                transform: rotate(317deg);
              }
            }
            .deployable-blocks-list {
              .deployable-item {
                width: 100%;
                .deployable-title {
                  .indicator {
                    width: 60px;
                  }
                }
              }
            }
          }
        }
        &#step-three {
          .wrapper {
            width: 768px;
            padding: 0px 50px;
            .title {
              flex-direction: column;
              align-items: flex-start;
              gap: 40px;
            }
            .step-description {
              align-items: flex-start;
              .content {
                .description__text {
                  width: fit-content;
                }
              }
            }
            .indicators-change-block {
              .title {
                width: 400px;
              }
              .indicators-change-tabs-btn {
                .btn {
                  width: 210px;
                }
              }
              .indicators-tabs {
                .tab {
                  .values-main-indicators {
                    display: grid;
                    gap: 30px;
                    grid-template-columns: 320px 320px;
                    grid-template-rows: 180px 180px;
                    .indicator {
                      width: 100%;
                      height: 100%;
                      padding: 30px 30px 10px;
                    }
                  }
                  .dropdown-description {
                    .dropdown-content {
                      .container {
                        flex-direction: column;
                        .left {
                          display: grid;
                          grid-template-columns: 320px 320px;
                        }
                        .right {
                          gap: 30px 30px;
                          grid-template-columns: repeat(2, 320px);
                          .indicator {
                            .indicator__description_btn {
                              .tooltip {
                                width: 320px;
                                left: -259px;
                              }
                            }
                          }
                        }
                      }
                      &.open {
                        max-height: 863px;
                      }
                    }
                  }
                }
              }
            }
            .stages-marketing-list {
              width: 100%;
              gap: 30px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .block {
    .wrapper {
      width: 100% !important;
      padding: 0px calc(10px + 40 * (100vw - 320px) / (767 - 320)) !important;
    }
    &#block6 {
      .breaf {
        &#breaf-one {
          .decor {
            width: 444px;
            height: 444px;
            top: 0;
            overflow: hidden;
            .special-decor {
              width: 444px;
              height: 444px;
              left: -243px;
              top: -26px;
              .circle {
                &.circle_one {
                  width: 100%;
                  height: 100%;
                  left: 0;
                  top: 0;
                }
              }
            }
          }
          .bacground-wrapper {
            width: 100%;
            .wrapper {
              flex-direction: column;
              align-items: self-start;
              width: 320px !important;
              padding: 40px 0px !important;
              .right {
                .breaf-title {
                  width: calc(300px + 20 * (100vw - 320px) / (767 - 320));
                  font-size: calc(20px + 6 * (100vw - 320px) / (767 - 320));
                }
              }
            }
            .decor-img_1 {
              display: none;
            }
            .decor-img_2 {
              top: 0px;
              left: 0px;
              width: 100%;
              .circle {
                &#circle_1 {
                  left: auto;
                  right: 22px;
                  left: auto;
                  top: 21px;
                }
                &#circle_2 {
                  left: auto;
                  right: -4px;
                  top: 230px;
                  bottom: auto;
                }
              }
              .triangle {
                top: 15px;
                right: auto;
                left: 29px;
              }
              .square {
                top: 148px;
                right: 56px;
              }
            }
          }
        }
        &#breaf-two {
          .bacground-wrapper {
            width: 100%;
            min-width: auto;
            .wrapper {
              width: 320px !important;
              padding: 0px !important;
              height: 534px;
              justify-content: center;
              .right {
                margin-left: 0px;
                padding: 0px 0px 30px;
                height: fit-content;
                margin-top: auto;
                .breaf-title {
                  font-size: calc(20px + 6 * (100vw - 320px) / (767 - 320));
                  line-height: calc(26px + 6 * (100vw - 320px) / (767 - 320));
                  margin-bottom: calc(
                    30px - 10 * (100vw - 320px) / (767 - 320)
                  );
                }
              }
            }
            .decor-img_1 {
              top: -84px;
              left: -167px;
              .img-wrapper {
                img {
                  bottom: -159px;
                }
              }
            }
            .decor-img_2 {
              .circle {
                &#circle_1 {
                  background-color: #696fe5;
                  right: 22px;
                  top: 22px;
                }
                &#circle_2 {
                  right: 20px;
                  top: 200px;
                }
              }
              .triangle {
                right: auto;
                left: 0;
                top: 150px;
              }
              .square {
                right: 76px;
                top: 113px;
              }
            }
          }
        }
      }
      .step {
        gap: 70px;
        .title {
          width: 100%;
          font-size: calc(24px + 6 * (100vw - 320px) / (767 - 320));
          line-height: calc(32px + 6 * (100vw - 320px) / (767 - 320));
        }
        &#step-one {
          .wrapper {
            .rebranding-comprehensive {
              .decor-line-adaptive {
                display: none;
              }
              .rebranding-comprehensive__description {
                gap: 40px;
                .row {
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  .circles {
                    .border-circle {
                      &.external {
                        width: 150px;
                        height: 150px;
                      }
                      &.internal {
                        width: 125px;
                        height: 125px;
                      }
                    }
                  }
                  .description-text {
                    font-size: calc(14px + 2 * (100vw - 320px) / (767 - 320));
                  }
                  &#rebranding-comprehensive__description_row1 {
                    img {
                      width: 75px;
                      height: auto;
                    }
                  }
                  &#rebranding-comprehensive__description_row2 {
                    img {
                      width: 54px;
                      height: auto;
                    }
                  }
                  &#rebranding-comprehensive__description_row3 {
                    img {
                      width: 125px;
                      height: auto;
                    }
                  }
                }
              }
            }
            .complex-services {
              .services-list {
                .service {
                  .service-img-adaptive {
                    width: calc(
                      100% - (24px + 64 * (100vw - 320px) / (767 - 320))
                    );
                    height: auto;
                  }
                  .service-content {
                    padding: calc(26px + 20 * (100vw - 320px) / (767 - 320))
                      calc(16px + 24 * (100vw - 320px) / (767 - 320)) 40px;
                    .service-title {
                      font-size: calc(20px + 4 * (100vw - 320px) / (767 - 320));
                      line-height: calc(
                        26px + 4 * (100vw - 320px) / (767 - 320)
                      );
                    }
                    .price {
                      font-size: calc(16px + 4 * (100vw - 320px) / (767 - 320));
                    }
                    .list {
                      * {
                        font-size: calc(
                          14px + 2 * (100vw - 320px) / (767 - 320)
                        );
                      }
                    }
                  }
                }
              }
            }
          }
          .swiper-block {
            padding: 40px 20px 0px;
            margin: 0px;
            .swiper {
              height: fit-content;
              .swiper-wrapper {
                .swiper-slide {
                  //Некоторые стили слайдера вынесены в отдельный файл (assets/styles/slider-styles.scss)
                  img {
                    background-color: #f3f4f9;
                    width: calc(100vw - 40px) !important;
                    // max-width: 600px !important;
                    height: auto !important;
                    border: 1px solid #cbcdf4;
                    border-radius: 20px;
                    padding: 10px !important;
                    margin-left: 0px;
                  }
                }
              }
            }
          }
        }
        &#step-two {
          .decor-img {
            display: none;
          }
          .wrapper {
            .step-description {
              flex-direction: column;
              align-items: center;
              img {
                left: 0px;
                margin-right: 0px;
              }
              .text {
                width: 100%;
                font-size: calc(14px + 2 * (100vw - 320px) / (767 - 320));
              }
            }
            .features-website-development {
              .feature-item {
                width: 100%;
                flex-direction: column;
                gap: 20px;
                padding: 30px;
                .text {
                  font-size: calc(14px + 2 * (100vw - 320px) / (767 - 320));
                }
              }
            }
          }
          .site-features-container {
            width: 100%;
            padding: 60px 20px;
            .title {
              text-align: center;
              width: 100%;
            }
            .deployable-blocks-list {
              .deployable-item {
                &.selected:nth-of-type(1) {
                  .deployable-content-wrapper {
                    max-height: calc(
                      410px - 110 * (100vw - 320px) / (767 - 320)
                    ) !important;
                  }
                }
                &.selected:nth-of-type(2),
                &.selected:nth-of-type(3) {
                  .deployable-content-wrapper {
                    max-height: calc(
                      194px - 89 * (100vw - 320px) / (767 - 320)
                    ) !important;
                  }
                }
                .deployable-title {
                  .text {
                    font-size: calc(14px + 2 * (100vw - 320px) / (767 - 320));
                    flex: 1;
                  }
                  .indicator {
                    width: 40px;
                  }
                }
                .deployable-content-wrapper {
                  .deployable-content {
                    padding: 30px 10px;
                    p {
                      font-size: calc(14px + 2 * (100vw - 320px) / (767 - 320));
                    }
                  }
                }
              }
            }
          }
        }
        &#step-three {
          .wrapper {
            .title {
              .title__decor {
                width: 100%;
                align-items: flex-end;
                gap: 20px;
                .avatar {
                  flex: 1;
                }
                .comment {
                  width: 100%;
                  height: fit-content;
                  background: none;
                  border: 1px solid #e7e7e7;
                  border-radius: 20px;
                  padding: 20px;
                }
              }
            }
            .step-description {
              flex-direction: column;
              .content {
                .description__title {
                  font-size: calc(16px + 4 * (100vw - 320px) / (767 - 320));
                  line-height: calc(20px + 4 * (100vw - 320px) / (767 - 320));
                  margin-bottom: 20px;
                }
                .description__text {
                  font-size: calc(14px + 2 * (100vw - 320px) / (767 - 320));
                }
              }
            }
            .indicators-change-block {
              margin-bottom: 60px;
              .title {
                font-size: calc(16px + 4 * (100vw - 320px) / (767 - 320));
                line-height: calc(20px + 4 * (100vw - 320px) / (767 - 320));
                width: 100%;
                max-width: 400px;
                margin-bottom: 20px;
              }
              .indicators-change-tabs-btn {
                display: none;
              }
              .indicators-change-tabs-btn_adaptive {
                display: block;
                position: relative;
                z-index: 1;
                height: 60px;
                margin-bottom: 60px;
                .dropdown {
                  width: 100%;
                  max-height: 60px;
                  transition: max-height 0.3s;
                  max-width: 400px;
                  margin: 0px auto;
                  border-radius: 20px;
                  overflow: hidden;
                  .selectName {
                    width: 100%;
                    height: 62px;
                    background-color: #696fe5;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    //Стили текста
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 135%;
                    color: #ffffff;
                  }
                  .btn {
                    position: relative;
                    width: 100%;
                    height: 62px;
                    background-color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    //Стили текста
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 135%;
                    color: #696fe5;
                    &:nth-child(1) {
                      &::before {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        width: 78%;
                        height: 1px;
                        background-color: #cbcdf4;
                      }
                    }
                    &:active,
                    &:hover {
                      background: #eaebfb;
                    }
                  }
                  &.open {
                    max-height: 186px;
                    filter: drop-shadow(
                      8px 16px 18px rgba(105, 111, 229, 0.18)
                    );
                  }
                }
              }
              .indicators-tabs {
                .tab {
                  .values-main-indicators {
                    width: 100%;
                    max-width: 320px;
                    min-width: 280px;
                    margin: 0px auto 60px;
                    grid-template-rows: none;
                    grid-template-columns: 1fr;
                    grid-auto-rows: calc(
                      140px + 40 * (100vw - 320px) / (767 - 320)
                    );
                    .indicator {
                      .indicator__value {
                        font-size: calc(
                          24px + 24 * (100vw - 320px) / (767 - 320)
                        );
                        line-height: calc(
                          30px + 29 * (100vw - 320px) / (767 - 320)
                        );
                      }
                      .indicator__changing-type {
                        .value {
                          font-size: calc(
                            14px + 6 * (100vw - 320px) / (767 - 320)
                          );
                        }
                      }
                    }
                  }
                  .description {
                    flex-direction: column;
                    p {
                      font-size: calc(
                        14px + 2 * (100vw - 320px) / (767 - 320)
                      ) !important;
                    }
                  }
                  .dropdown-description {
                    .dropdown-content {
                      &.open {
                        max-height: 1445px;
                      }
                      .container {
                        .left {
                          min-width: auto;
                          grid-template-columns: 1fr 1fr;
                          gap: 20px;
                          .condition {
                            .condition__name {
                              padding-right: 20px;
                              font-size: calc(
                                14px + 2 * (100vw - 320px) / (767 - 320)
                              );
                            }
                            .condition__value {
                              font-size: calc(
                                24px + 12 * (100vw - 320px) / (767 - 320)
                              );
                              line-height: calc(
                                30px + 15 * (100vw - 320px) / (767 - 320)
                              );
                            }
                          }
                        }
                        .right {
                          margin: 0px auto;
                          width: 100%;
                          max-width: 320px;
                          min-width: 280px;
                          grid-template-columns: 1fr;
                          .indicator {
                            width: 100%;
                            // height: calc(
                            //   130px + 30 * (100vw - 320px) / (767 - 320)
                            // );
                            height: 160px;
                            .indicator__value {
                              font-size: calc(
                                24px + 12 * (100vw - 320px) / (767 - 320)
                              );
                              line-height: calc(
                                30px + 15 * (100vw - 320px) / (767 - 320)
                              );
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            .stages-marketing-list {
              flex-direction: column;
              align-items: center;
            }
          }
        }
      }
    }
  }
}
</style>
