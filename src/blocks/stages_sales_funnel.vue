<template>
  <div class="block" id="block9">
    <div class="decor-img">
      <img src="@/assets/image/block9/img_dna.svg" alt="" />
    </div>
    <div class="bacground-color">
      <div class="wrapper">
        <div class="title flex">
          <div class="text">
            Разберём наглядный пример воронки продаж для {{ selectName }}
          </div>
          <div class="description">
            {{ selectDescription }}
          </div>
          <div class="decor-img"></div>
        </div>
        <div class="funnels-variants">
          <div
            class="tab"
            :class="tabsList.tab1 ? 'selected' : ''"
            @click="changeSelectTab('tab1')"
          >
            <div class="name">Небольшая стоматология</div>
            <div class="description">(5-20 сотрудников)</div>
          </div>
          <div
            class="tab"
            :class="tabsList.tab2 ? 'selected' : ''"
            @click="changeSelectTab('tab2')"
          >
            <div class="name">Средняя стоматология</div>
            <div class="description">(20-40 сотрудников)</div>
          </div>
          <div
            class="tab"
            :class="tabsList.tab3 ? 'selected' : ''"
            @click="changeSelectTab('tab3')"
          >
            <div class="name">Крупная клиника</div>
            <div class="description">(40-100+ сотрудников)</div>
          </div>
        </div>
        <transition
          name="fade"
          mode="out-in"
          :duration="{ enter: 500, leave: 500 }"
        >
          <div
            class="stages-sales-funnel flex-column"
            id="funnel_1"
            v-if="tabsList.tab1"
          >
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">20 000 ₽</div>
                  <div class="number">1</div>
                </div>
                <div class="stage-description">
                  <b>Рекламный бюджет.</b> Его размер в основном зависит от
                  региона продвижения, конкуренции и настроек показа рекламы
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">2 402</div>
                  <div class="number">2</div>
                </div>
                <div class="stage-description">
                  <b>Общее количество визитов на сайт в месяц</b> из поисковых
                  запросов и контекстной рекламы. Средняя стоимость перехода на
                  сайт 8,33 ₽.
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">84</div>
                  <div class="number">3</div>
                </div>
                <div class="stage-description">
                  <b>Количество обращений с сайта по запросам в месяц</b>
                  (звонков и заявок). Средняя стоимость одного обращения 238.10
                  ₽. Конверсия посетителей сайта в обращения 3,5%.
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">48</div>
                  <div class="number">4</div>
                </div>
                <div class="stage-description">
                  <b>Количество записей на прием.</b> Конверсия от
                  обрабатывающих администраторов клиники из обращений в запись
                  на прием 55%. Средняя стоимость одной записи 432.1 ₽.
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">29</div>
                  <div class="number">5</div>
                </div>
                <div class="stage-description">
                  <b>Количество состоявшихся приемов</b> с учетом того, что 30%
                  записавшихся пациентов не доходят до клиники.
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">62 850 ₽</div>
                  <div class="number">6</div>
                </div>
                <div class="stage-description">
                  <b>Общий доход с приемов.</b> Средний чек покупки 2167.2 ₽
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value red">42 850 ₽</div>
                  <div class="number">7</div>
                </div>
                <div class="stage-description black">
                  <b>Доход минус вложения в рекламу.</b>
                </div>
              </div>
            </div>
            <div class="decor-arrow">
              <div class="arrow">
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <div
            class="stages-sales-funnel flex-column"
            id="funnel_1"
            v-else-if="tabsList.tab2"
          >
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">50 000 ₽</div>
                  <div class="number">1</div>
                </div>
                <div class="stage-description">
                  <b>Рекламный бюджет.</b> Его размер в основном зависит от
                  региона продвижения, конкуренции и настроек показа рекламы
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">3 987</div>
                  <div class="number">2</div>
                </div>
                <div class="stage-description">
                  <b> Общее количество визитов</b> на сайт в месяц из поисковых
                  запросов, контекстной рекламы и SMM каналов. Средняя стоимость
                  перехода на сайт 12,5 ₽.
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">242</div>
                  <div class="number">3</div>
                </div>
                <div class="stage-description">
                  <b>Количество обращений с сайта по запросам в месяц</b>
                  (звонков и заявок). Средняя стоимость одного обращения 206.6
                  ₽. Конверсия посетителей сайта в обращения 6,07%
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">118</div>
                  <div class="number">4</div>
                </div>
                <div class="stage-description">
                  <b>Количество записей на прием.</b> Конверсия от
                  обрабатывающих администраторов клиники из обращений в запись
                  на прием 55%. Средняя стоимость одного обращения 202 ₽.
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">81</div>
                  <div class="number">5</div>
                </div>
                <div class="stage-description">
                  <b>Количество состоявшихся приемов</b> с учетом того, что 40%
                  записавшихся пациентов не доходят до клиники.
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">296 850 ₽</div>
                  <div class="number">6</div>
                </div>
                <div class="stage-description">
                  <b>Общий доход с приемов.</b> Средний чек покупки 3664.8 ₽
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value red">246 850 ₽</div>
                  <div class="number">7</div>
                </div>
                <div class="stage-description black">
                  <b>Доход минус вложения в рекламу.</b>
                </div>
              </div>
            </div>
            <div class="decor-arrow">
              <div class="arrow">
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <div
            class="stages-sales-funnel flex-column"
            id="funnel_1"
            v-else-if="tabsList.tab3"
          >
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">200 000 ₽</div>
                  <div class="number">1</div>
                </div>
                <div class="stage-description">
                  <b>Рекламный бюджет.</b> Его размер в основном зависит от
                  региона продвижения, конкуренции и настроек показа рекламы
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">30 890</div>
                  <div class="number">2</div>
                </div>
                <div class="stage-description">
                  <b>Общее количество визитов на сайт в месяц</b> из поисковых
                  запросов, контекстной рекламы и SMM каналов. Средняя стоимость
                  перехода на сайт 6,5 ₽.
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">1 287</div>
                  <div class="number">3</div>
                </div>
                <div class="stage-description">
                  <b>Количество обращений с сайта по запросам в месяц</b>
                  (звонков и заявок). Средняя стоимость одного обращения 155.40
                  ₽. Конверсия посетителей сайта в обращения 4,17%
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">694</div>
                  <div class="number">4</div>
                </div>
                <div class="stage-description">
                  <b>Количество записей на прием.</b> Конверсия от
                  обрабатывающих администраторов клиники из обращений в запись
                  на прием 54%. Средняя стоимость одной записи 216.8 ₽.
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">498</div>
                  <div class="number">5</div>
                </div>
                <div class="stage-description">
                  <b>Количество состоявшихся приемов</b> с учетом того, что
                  более 28% записавшихся пациентов не доходят до клиники.
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value">1 295 640 ₽</div>
                  <div class="number">6</div>
                </div>
                <div class="stage-description">
                  <b> Общий доход с приемов.</b> Средний чек покупки 2600 ₽
                </div>
              </div>
            </div>
            <div class="stage">
              <div class="stage-content">
                <div class="stage-title flex">
                  <div class="quantitative-value red">1 095 640 ₽</div>
                  <div class="number">7</div>
                </div>
                <div class="stage-description black">
                  <b>Доход минус вложения в рекламу.</b>
                </div>
              </div>
            </div>
            <div class="decor-arrow">
              <div class="arrow">
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </div>
          </div>
        </transition>
        <div class="want flex-column">
          <div class="pink-button">хочу так же!</div>
          <div class="description">
            *В итоговом результате не учитывается часть оборота клиники от
            постоянных клиентов, которые регулярно самостоятельно записываются к
            своему лечащему врачу или клиентов пришедших по рекомендации. В этой
            воронке мы учитываем только траффик с интернет-рекламы и попаданий
            на сайт с поисковых запросов и из соцсетей.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabsList: {
        tab1: false,
        tab2: true,
        tab3: false,
      },
    };
  },
  computed: {
    selectName() {
      if (this.tabsList.tab1) {
        return "небольшой клиники";
      } else if (this.tabsList.tab2) {
        return "средней клиники";
      } else {
        return "крупной клиники";
      }
    },
    selectDescription() {
      if (this.tabsList.tab1) {
        return "*Мы привели среднепрогнозируемые цифры дополнительного дохода исходя из зафиксированного выделенного бюджета на рекламу клиники с медицинским персоналом в размере 5 - 20 человек в штате, расположенной в городе с населением порядка 250 - 300 тыс. человек.";
      } else if (this.tabsList.tab2) {
        return "*Мы привели среднепрогнозируемые цифры дополнительного дохода исходя из зафиксированного выделенного бюджета на рекламу клиники с медицинским персоналом в размере 20 - 40 человек в штате, расположенной в городе с населением порядка 400 - 600 тыс. человек.";
      } else {
        return "*Мы привели среднепрогнозируемые цифры дополнительного дохода исходя из зафиксированного выделенного бюджета на рекламу клиники с медицинским персоналом в размере 40 - 100 человек в штате, расположенной в городе с населением более 1 млн. человек";
      }
    },
  },
  methods: {
    changeSelectTab(selectTabName) {
      for (const tabIndex in this.tabsList) {
        this.tabsList[tabIndex] = false;
      }
      this.tabsList[selectTabName] = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter {
  transition: opacity 0.5s;
  opacity: 0;
}
.fade-leave-to {
  transition: opacity 0.5s;
  opacity: 0;
}
.block {
  position: relative;
  .decor-img {
    position: absolute;
    right: 0;
    top: -420px;
    opacity: 0.7;
  }
  &#block9 {
    border-bottom: 16px solid #ecc0c7;
    .bacground-color {
      background-color: #f3f4f9;
      padding: 120px 0px;
    }
    .title {
      margin-bottom: 50px;
      gap: 40px;
      position: relative;
      .text {
        width: 660px;
        flex: 1;
        //Стили текста
        font-style: normal;
        font-weight: 800;
        font-size: 30px;
        line-height: 38px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #424c5c;
      }
      .description {
        width: 460px;
        //Стили текста
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #424c5c;
      }
      .decor-img {
        position: absolute;
        width: 0px;
        height: 0px;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 24px solid #ecc0c7;
        left: 670px;
        top: -25px;
        transform: rotate(-12deg);
      }
    }
    .funnels-variants {
      height: 100px;
      width: 1160px;
      background-color: #ffffff;
      margin: 0px auto 100px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      position: relative;
      z-index: 1;
      .tab {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 3px solid #ecc0c7;
        cursor: pointer;
        //Стили текста
        * {
          font-style: normal;
          font-size: 20px;
          line-height: 135%;
          text-align: center;
          color: #424c5c;
          user-select: none;
        }
        .name {
          font-weight: 600;
        }
        .description {
          font-weight: 500;
        }
        &:hover {
          border-bottom: 3px solid rgba(105, 111, 229, 0.7);
          .name {
            color: rgba(105, 111, 229, 0.7);
          }
        }
        &.selected {
          border-bottom: 3px solid #696fe5;
          .name {
            color: #696fe5;
          }
        }
      }
    }
    .stages-sales-funnel {
      width: 680px;
      margin: 0 auto;
      padding-bottom: 10px;
      margin-bottom: 100px;
      //Конструкция выше нужна для корректного отображения декоративной стрелки в блоке
      gap: 30px;
      position: relative;
      .decor-arrow {
        position: absolute;
        height: 100%;
        width: 2px;
        left: 339px;
        top: 50px;
        border-left: 2px dashed #696fe6;
        .arrow {
          position: absolute;
          bottom: 2px;
          .line {
            position: absolute;
            width: 14px;
            height: 2px;
            background-color: #696fe6;
            border-radius: 3px;
            &:nth-of-type(1) {
              transform: rotate(-135deg);
              left: -13px;
            }
            &:nth-of-type(2) {
              transform: rotate(315deg);
              left: -3px;
            }
          }
        }
      }
      .stage {
        display: flex;
        position: relative;
        z-index: 1;
        &:nth-of-type(odd) {
          justify-content: flex-start;
        }
        &:nth-of-type(even) {
          justify-content: flex-end;
          .stage-content {
            display: flex;
            flex-direction: column;
            .stage-title {
              flex-direction: row-reverse;
            }
            .stage-description {
              margin-left: auto;
            }
          }
        }
        .stage-content {
          width: 360px;
          .stage-title {
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
            .quantitative-value {
              width: 260px;
              height: 100px;
              background: #ffffff;
              box-shadow: 0px 14px 30px rgba(105, 111, 229, 0.14);
              border-radius: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              //Стили текста
              font-style: normal;
              font-weight: 700;
              font-size: 40px;
              line-height: 50px;
              text-align: center;
              letter-spacing: 0.02em;
              text-transform: uppercase;
              color: #696fe6;
              &.red {
                color: #ecc0c7;
              }
            }
            .number {
              width: 40px;
              height: 40px;
              border-radius: 100%;
              background: #696fe5;
              display: flex;
              align-items: center;
              justify-content: center;
              //Стили текста
              font-style: normal;
              font-weight: 700;
              font-size: 20px;
              line-height: 10px;
              text-align: center;
              letter-spacing: 0.02em;
              text-transform: uppercase;
              color: #ffffff;
            }
          }
          .stage-description {
            width: 260px;
            //Стили текста
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
            color: #424c5c;
            b {
              color: #696fe6;
            }
            &.black {
              * {
                color: #424c5c !important;
              }
            }
          }
        }
      }
    }
    .want {
      width: 710px;
      margin: 0 auto;
      align-items: center;
      .pink-button {
        margin-bottom: 40px;
      }
      .description {
        padding-left: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #424c5c;
      }
    }
  }
}
@media screen and (max-width: 1365px) {
  .block {
    &#block9 {
      .decor-img {
        display: none;
      }
      .wrapper {
        width: 768px;
        padding: 0px 50px;
        .title {
          flex-direction: column;
          margin-bottom: 40px;
          .description {
            width: 100%;
            max-width: 514px;
          }
          .decor-img {
            display: block;
            left: -30px;
            top: 78px;
          }
        }
        .funnels-variants {
          width: 100%;
          margin-bottom: 40px;
          .tab {
            .name {
              padding: 0px 40px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .block {
    &#block9 {
      .bacground-color {
        padding: 60px 0px;
        .wrapper {
          width: 100%;
          padding: 0px calc(10px + 40 * (100vw - 320px) / (767 - 320));
          .title {
            max-width: 660px;
            width: 100%;
            gap: 20px;
            .text {
              width: 100%;
              font-size: calc(24px + 6 * (100vw - 320px) / (767 - 320));
              line-height: calc(32px + 6 * (100vw - 320px) / (767 - 320));
            }
            .description {
              font-size: calc(14px + 2 * (100vw - 320px) / (767 - 320));
            }
            .decor-img {
              display: block;
              position: absolute;
              left: auto;
              top: -28px;
            }
          }
          .funnels-variants {
            // max-width: 400px;
            height: 300px;
            grid-template-columns: 1fr;
            .tab {
              &.selected {
                background: #696fe5;
                * {
                  color: #ffffff;
                }
              }
            }
          }
          .stages-sales-funnel {
            width: fit-content;
            min-width: 300px;
            max-width: 680px;
            .stage {
              .stage-content {
                max-width: 360px;
                min-width: 300px;
                width: fit-content;
                .stage-title {
                  max-width: 360px;
                  min-width: 300px;
                  gap: 20px;
                  .quantitative-value {
                    width: calc(240px + 20 * (100vw - 320px) / (767 - 320));
                    height: 70px;
                  }
                }
              }
              &:nth-of-type(odd) {
                .stage-content {
                  .stage-title {
                    flex-direction: row-reverse;
                  }
                  .stage-description {
                    margin-left: auto;
                  }
                }
              }
              &:nth-of-type(even) {
                justify-content: flex-start;
                .stage-content {
                  .stage-description {
                    margin-left: auto;
                  }
                }
              }
            }
            .decor-arrow {
              left: 19px;
            }
          }
          .want {
            width: 100%;
            .description {
              font-size: calc(14px + 2 * (100vw - 320px) / (767 - 320));
            }
          }
        }
      }
    }
  }
}
</style>
