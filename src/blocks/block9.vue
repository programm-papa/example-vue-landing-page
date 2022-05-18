<template>
  <div class="block" id="block9">
    <div class="bacground-color">
      <div class="wrapper">
        <div class="title flex">
          <div class="text">
            Разберём наглядный пример воронки продаж для небольшой стоматологии
          </div>
          <div class="description">
            Мы привели среднестатистические цифры исходя из зафиксированного
            выделенного бюджета на рекламу клиники, расположенной в городе с
            населением 450.000 человек.
          </div>
          <div class="decor-img"></div>
        </div>
        <div class="stages-sales-funnel flex-column">
          <div class="stage">
            <div class="stage-content">
              <div class="stage-title flex">
                <div class="quantitative-value">35.000 ₽</div>
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
                <div class="quantitative-value">5 402</div>
                <div class="number">2</div>
              </div>
              <div class="stage-description">
                <b>Общее количество визитов<br />на сайт в месяц</b> из
                поисковых запросов, контекстной рекламы, SMM. Средняя стоимость
                перехода на сайт 6,47 ₽.
              </div>
            </div>
          </div>
          <div class="stage">
            <div class="stage-content">
              <div class="stage-title flex">
                <div class="quantitative-value">356</div>
                <div class="number">3</div>
              </div>
              <div class="stage-description">
                <b>Количество обращений с сайта по запросам в месяц</b>(звонков
                и заявок). Средняя стоимость одного обращения 98 ₽. Конверсия
                посетителей сайта в обращения 3,2%.
              </div>
            </div>
          </div>
          <div class="stage">
            <div class="stage-content">
              <div class="stage-title flex">
                <div class="quantitative-value">162</div>
                <div class="number">4</div>
              </div>
              <div class="stage-description">
                <b>Количество записей на прием.</b> Конверсия от обрабатывающих
                администраторов клиники из обращений в запись на прием 55%.
                Средняя стоимость одного обращения 202 ₽.
              </div>
            </div>
          </div>
          <div class="stage">
            <div class="stage-content">
              <div class="stage-title flex">
                <div class="quantitative-value">104</div>
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
                <div class="quantitative-value">488 800 ₽</div>
                <div class="number">6</div>
              </div>
              <div class="stage-description">
                <b>Общий оборотный доход со всех приемов.</b> Средний чек по
                пациенту 4 700 ₽.
              </div>
            </div>
          </div>
          <div class="stage">
            <div class="stage-content">
              <div class="stage-title flex">
                <div class="quantitative-value red">453 800 ₽</div>
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
        <div class="want flex-column">
          <div class="pink-button">хочу так же!</div>
          <div class="description">*В итоговом результате не учитывается часть оборота клиники от постоянных клиентов, которые регулярно самостоятельно записываются к своему лечащему врачу или клиентов пришедших по рекомендации. В этой воронке мы учитываем только траффик с интернет-рекламы и попаданий на сайт с поисковых запросов и из соцсетей.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.block {
  &#block9 {
    border-bottom: 16px solid #ECC0C7;
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
        &:nth-of-type(n) {
          justify-content: flex-start;
        }
        &:nth-of-type(2n) {
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
</style>
