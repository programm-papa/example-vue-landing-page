<template>
  <div class="block" id="block3">
    <div class="wrapper">
      <div class="left">
        <div class="title" id="block3_anchor">Наши услуги</div>
        <div class="point-description">
          <div class="pointer"></div>
          <div class="description">
            Помогаем клиентам сосредоточится на росте и развитии.
          </div>
        </div>
        <div class="decor-img">
          <div class="circles">
            <div class="border-circle">
              <div class="painted-circle"></div>
            </div>
          </div>
          <img
            src="@/assets/image/block3/decor-img-chart.png"
            alt=""
            class="chart"
          />
        </div>
      </div>
      <div class="right">
        <div class="card">
          <div class="rotate">
            <div class="item">
              <div class="num">01</div>
              <img src="@/assets/image/block3/dev.png" alt="" />
              <div class="name">Разработка / создание медицинских сайтов</div>
            </div>
            <div class="back">
              <div class="num">01</div>
              <div class="title">Разработка / создание медицинских сайтов</div>
              <div class="desc">
                Делаем удобные в использовании сайты и приложения, интегрируем
                решения для медицинских клиник и салонов:
                <ul>
                  <li>Корпоративный сайт клиники</li>
                  <li>Лендинг (посадочная страница)</li>
                  <li>Интеграция с CRM</li>
                  <li>Аналитика</li>
                  <li>Создание приложений</li>
                  <li>Индивидуальные решения</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="rotate">
            <div class="item">
              <div class="num">02</div>
              <img
                src="@/assets/image/block3/marketing-for-medicine.png"
                alt=""
              />
              <div class="name">
                Комплексный<br />маркетинг<br />для медицины
              </div>
            </div>
            <div class="back">
              <div class="num">02</div>
              <div class="title">
                Комплексный<br />маркетинг<br />для медицины
              </div>
              <div class="desc">
                Основная задача маркетинга – привлечение новых пациентов и
                увеличение продаж:
                <ul>
                  <li>Поисковое продвижение медицинских сайтов в SEO</li>
                  <li>Соцсети и рассылки</li>
                  <li>Контекстная реклама</li>
                  <li>Таргетированная реклама в соцсетях</li>
                  <li>Повышение лояльности</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="rotate">
            <div class="item">
              <div class="num">03</div>
              <img src="@/assets/image/block3/brand.png" alt="" />
              <div class="name">Брендинг и дизайн</div>
            </div>
            <div class="back">
              <div class="num">03</div>
              <div class="title">Брендинг и дизайн</div>
              <div class="desc">
                Создадим для вас бренд близкий потребителю.<br><br>Освежим или
                разработаем логотип с нуля.<br><br>Заложим основы фирменного стиля,
                либо предложим комплексное внедрение бренда клиники, взяв все
                дизайнерские решения на себя.
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="rotate">
            <div class="item">
              <div class="num">04</div>
              <img src="@/assets/image/block3/suport.png" alt="" />
              <div class="name">Поддержка<br />и сопровождение</div>
            </div>
            <div class="back">
              <div class="num">04</div>
              <div class="title">Поддержка<br />и сопровождение</div>
              <div class="desc">
                Специалисты студии помогут развивать ваши проекты, предоставляя:
                <ul>
                  <li>Медицинский копирайтинг</li>
                  <li>Техподдержка и консультации</li>
                  <li>Аудит</li>
                </ul>
              </div>
            </div>
          </div>
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
  &#block3 {
    padding: 70px 0px 40px;
    .wrapper {
      display: flex;
      .left {
        width: 400px;
        position: relative;
        .title {
          font-style: normal;
          font-weight: 800;
          font-size: 30px;
          line-height: 38px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #424c5c;
          margin-bottom: 40px;
        }
        .point-description {
          display: flex;
          gap: 10px;
          .pointer {
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background: #ecc0c7;
          }
          .description {
            width: 290px;
            padding-top: 10px;
          }
        }
        .decor-img {
          position: absolute;
          top: 260px;
          left: -52px;
          width: 454px;
          height: 419px;
          .circles {
            position: absolute;
            left: 0;
            top: 13px;
            .border-circle {
              width: 403px;
              height: 403px;
              border: 1px solid #5356ae;
              border-radius: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              .painted-circle {
                width: 329px;
                height: 329px;
                border-radius: 100%;
                background: #cbcdf4;
              }
            }
          }
          .chart {
            position: absolute;
            left: 93px;
            z-index: 1;
          }
        }
      }
      .right {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(2, 360px);
        grid-template-rows: repeat(2, 386px);
        gap: 40px;
        padding-top: 90px;
        .card {
          perspective: 800px;
          cursor: pointer;
          .rotate {
            position: relative;
            height: 100%;
            width: 100%;
            border-radius: 40px;
            transform-style: preserve-3d;
            transition: 0.5s;
            .item {
              position: relative;
              height: 100%;
              width: 100%;
              background: #fff0ee;
              border-radius: 40px;
              padding-top: 101px;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 100px 0px 0px;
              .num {
                position: absolute;
                left: 40px;
                top: 40px;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                letter-spacing: 0.02em;
                color: #424c5c;
              }
              img {
                margin-bottom: 40px;
              }
              .name {
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 30px;
                text-align: center;
                letter-spacing: 0.02em;
                color: #424c5c;
              }
            }
            .back {
              position: absolute;
              box-sizing: border-box;
              // top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              width: 360px;
              height: 100%;
              background: #696fe5;
              border-radius: 40px;
              padding: 100px 40px 40px;
              transform: translate3d(0, 0, -0.1px) scale(0.99) rotateY(180deg);
              transition: 0.5s;
              transition-delay: 0.25s;
              .num {
                position: absolute;
                top: 40px;
                left: 40px;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                letter-spacing: 0.02em;
                color: #ffffff;
              }
              .title {
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 30px;
                letter-spacing: 0.02em;
                color: #ffffff;
                margin-bottom: 20px;
              }
              .desc {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 20px;
                letter-spacing: 0.02em;
                color: #ffffff;
                ul,
                ol {
                  padding-top: 15px;
                  padding-left: 30px;
                }
              }
            }
          }
          &:hover {
            .rotate {
              transform: rotate3d(0, 1, 0, 180deg);
              .back {
                transform: translate3d(0, 0, -0.1px) scale(1) rotateY(180deg);
                box-shadow: 8px 8px 20px rgba(36, 43, 176, 0.3);
                height: 460px;
              }
            }
          }
        }
      }
    }
  }
}
</style>