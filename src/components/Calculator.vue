<template>
  <div class="calculator">
    <div class="calculator__head">
      <strong>Smart</strong>
      <span>до 20 000 грн на 30 дней</span>
    </div>
    <div class="calculator__main">
      <div class="calculator__form">
        <div class="calculator__ranges">
          <div class="range">
            <div class="range__head">
              <div class="range__head-title">Сумма:</div>
              <div class="range__head-sum">
                <div class="range__head-sum-value">{{ amount.value }}</div>
                грн
              </div>
            </div>
            <div class="range__slider">
              <RangeSlider
                :min="amount.min"
                :max="amount.max"
                :step="amount.step"
                :no-popover="true"
                :no-calibration="true"
                v-model="amount.value"
              />
            </div>
            <div class="range__values">
              <div class="range__values-item">{{ amount.min }} грн</div>
              <div class="range__values-item">
                до {{ amount.max.toLocaleString("ru") }} грн
              </div>
            </div>
          </div>
          <div class="range">
            <div class="range__head">
              <div class="range__head-title">Срок:</div>
              <div class="range__head-sum">
                <div class="range__head-sum-value">{{ days.value }}</div>
                дн
              </div>
            </div>
            <div class="range__slider">
              <RangeSlider
                :min="days.min"
                :max="days.max"
                :step="days.step"
                :no-popover="true"
                :no-calibration="true"
                v-model="days.value"
              />
            </div>
            <div class="range__values">
              <div class="range__values-item">{{ days.min }} день</div>
              <div class="range__values-item">до {{ days.max }} дней</div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="calculator__btn"
          @click="showLoginForm(amount.value, days.value)"
        >
          Оформить кредит
        </button>
      </div>
      <div class="calculator__results">
        <div class="calculator__result">
          <span class="calculator__result-title">Возврат до:</span>
          <span class="calculator__result-value">{{ returnDate }}</span>
        </div>
        <div class="calculator__result">
          <span class="calculator__result-title">Сумма, грн:</span>
          <span class="calculator__result-value">{{ amount.value }}</span>
        </div>
        <div class="calculator__result">
          <span class="calculator__result-title">Проценты, грн:</span>
          <span class="calculator__result-value">{{ percentValue }}</span>
        </div>
        <div class="calculator__result">
          <span class="calculator__result-title"> Вернуть, грн: </span>
          <span class="calculator__result-value">
            <strong>{{ returnValue }}</strong>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RangeSlider from "v-range-slider";
import "v-range-slider/dist/v-range-slider.css";

export default {
  name: "Calculator",
  data() {
    return {
      dayNames: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
      amount: {
        value: 1000,
        min: 100,
        max: 22000,
        step: 100,
      },
      days: {
        value: 7,
        min: 1,
        max: 30,
        step: 1,
      },
      ragseStyles: {
        mailStyle: {
          padding: "2px 0",
        },
        sliderStyle: {
          width: "20px",
          height: "20px",
          top: "-8px",
        },
        processStyle: {
          height: "4px",
        },
        bgStyle: {
          height: "4px",
        },
        tooltipStyle: {
          display: "none",
        },
      },
    };
  },
  components: {
    RangeSlider,
  },
  computed: {
    percentValue() {
      return Number(((this.amount.value * 0.01) / 100) * this.days.value)
        .toFixed(2)
        .replace(".", ",");
    },
    returnValue() {
      return (Number(this.percentValue.replace(",", ".")) + this.amount.value)
        .toFixed(2)
        .replace(".", ",");
    },
    returnDate() {
      let currentDate = new Date();
      let day = this.dayNames[
        new Date(
          new Date().setDate(currentDate.getDate() + this.days.value)
        ).getDay()
      ];
      let month =
        new Date(
          new Date().setDate(currentDate.getDate() + this.days.value)
        ).getMonth() + 1;
      let date = new Date(
        new Date().setDate(currentDate.getDate() + this.days.value)
      ).getDate();
      let year = currentDate.getFullYear();

      let fullDate = `${day}, ${month < 10 ? "0" + month : month}.${
        date < 10 ? "0" + date : date
      }.${year}`;
      return fullDate;
    },
  },
  methods: {
    showLoginForm(amount, days) {
      this.$emit("showLoginForm", { amount, days });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables";

// calculator styles
.calculator {
  width: 100%;
  padding: 32px 16px;
  background: #ffffff;

  &__head {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 20px;
    color: $gray-1;
    strong {
      display: inline-block;
      margin-right: 8px;
      font-weight: 600;
      font-size: 20px;
      line-height: 32px;
    }
  }
  &__main {
    display: flex;
    flex-direction: column-reverse;
  }
  &__ranges {
    margin-bottom: 20px;
  }
  .range {
    margin-bottom: 7px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__btn {
    display: block;
    background: $violet-gradient;
    padding: 8px 67px;
    margin: auto;
    box-shadow: 2px 6px 10px rgba(0, 0, 0, 0.15);
    border: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
  }
  &__results {
    margin-bottom: 8px;
    padding: 12px;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  }
  &__result {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 20px;
    &:last-child {
      margin-top: 11px;
      margin-bottom: 0;
      padding-top: 11px;
      border-top: 1px dashed $gray-2;
    }
    &:last-child & {
      &-title {
        font-weight: 600;
      }
    }
  }
}

// range component
.range {
  padding: 8px 12px;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  &__head {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 7px;
    &-title {
      min-width: 52px;
      margin-right: 16px;
      font-size: 14px;
      line-height: 20px;
    }
    &-sum {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      &-value {
        display: inline-block;
        min-width: 48px;
        margin-right: 3px;
        border-bottom: 1px solid $black;
        text-align: right;
      }
    }
  }
  &__values {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: -7px;
    &-item {
      font-size: 12px;
      line-height: 16px;
      color: $gray-2;
    }
  }
}

// change default tooltip
.range-slider {
  display: block;
  width: 100%;
  padding: 0;
  &-rail {
    background: #c5e7bf;
    border-radius: 2px;
  }
  &-knob {
    width: 20px;
    height: 20px;
    border: 2px solid #3dae2b;
    box-shadow: 2px 6px 10px rgba(0, 0, 0, 0.15);
  }
  &-fill {
    background: #3dae2b;
    border-radius: 2px;
  }
}

@media screen and (min-width: 835px) {
  .calculator {
    max-width: 836px;
    margin: auto;
    padding: 36px 36px 64px;
    box-shadow: 0px -3px 20px rgba(0, 0, 0, 0.1),
      0px 15px 30px rgba(0, 0, 0, 0.1);
    &__head {
      margin-bottom: 23px;
      font-size: 16px;
      line-height: 24px;

      strong {
        margin-right: 16px;
        font-size: 34px;
        line-height: 52px;
      }
    }
    &__main {
      flex-direction: row;
      justify-content: space-between;
    }
    &__form {
      flex-basis: 416px;
      max-width: 416px;
    }
    &__ranges {
      margin-bottom: 24px;
    }
    .range {
      margin-bottom: 31px;
    }
    &__results {
      flex-basis: 288px;
      max-width: 288px;
      box-shadow: none;
      padding: 0;
    }
    &__result {
      margin-bottom: 20px;
      &:last-child {
        margin-top: 0;
        padding-top: 20px;
      }
      &:last-child & {
        &-title {
          font-weight: 400;
        }
      }
    }
  }
  .range {
    padding: 0;
    box-shadow: none;
    &__head {
      margin-bottom: 11px;
      &-sum {
        &-value {
          padding-bottom: 2px;
        }
      }
    }
    &__values {
      margin-top: -5px;
    }
  }
}
</style>
