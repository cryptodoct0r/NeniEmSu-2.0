<template>

  <div class="card-test">
    <div class="card-test__image">
      <img src="https://kawaii-mobile.com/wp-content/uploads/2019/01/SSSS.Gridman-Rikka-Takarada-1080x1920.jpg">
      <div class="date">07 MAR</div>
    </div>
    <div class="card-test__content">
      <div class="card-test__content__category">SSSS.GRIDMAN</div>
      <div class="card-test__content__box">
        <h2>Rikka Takarada</h2>
        <h3>宝多六花</h3>
        <p class="hidden hide-text">Rikka is a friendly person, helping Yuta with his amnesia. She cares deeply for her friends. She is an empathetic person, as evidenced by her sadness at the deaths of Tonkawa and the others, despite not being friends with them. Rikka also offers assistance to total strangers, asking Anti if he wanted an umbrella and some food when he was out in the rain.</p>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:500,600,700&display=swap");

* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
}

body {
  background-color: #f4f4f7;
}

.card-test {
  width: 450px;
  height: 280px;
  cursor: pointer;
  margin: 24px auto;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1), 0 0 4px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  transition: 1s;
  &__image {
    background-color: #000;
    position: relative;
    border-radius: 16px 16px 0 0;
    img {
      width: 450px;
      height: auto;
      transition: 0.7s;
    }
    .date {
      font-size: 15px;
      font-weight: bold;
      color: white;
      background-color: rgba(51, 51, 51, 0.4);
      width: 50px;
      height: 50px;
      border-radius: 100%;
      padding-top: 5px;
      line-height: 18px;
      position: absolute;
      top: 10px;
      right: 10px;
      text-align: center;
    }
  }

  &__content {
    &__category {
      font-size: 15px;
      font-weight: bold;
      color: white;
      background-color: rgba(51, 51, 51, 0.4);
      padding-right: 10px;
      padding-left: 10px;
      padding-bottom: 6px;
      padding-top: 6px;
      text-align: center;
      position: absolute;
      top: 370px;
      transition: 0.8s;
    }
    &__box {
      width: 450px;
      height: 120px;
      overflow: hidden;
      background-color: white;
      border-radius: 0 0 16px 16px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      position: absolute;
      top: 400px;
      padding: 28px;
      transition: 0.8s;
      h2 {
        margin: 0;
        font-weight: 900;
      }
      h3 {
        color: #ef633d;
        font-weight: 600;
        font-size: 20px;
        margin-top: 2px;
        margin-bottom: 0px;
      }
      p {
        color: grey;
        font-size: 16px;
        text-align: justify;
      }
      .hide-text {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
      }
    }
  }

  &:hover {
    transition: 0.7s;
    height: 150px;
  }

  &:hover img {
    transform: scale(1.2);
    opacity: 0.7;
  }

  &:hover &__content__box {
    transform: translateY(-150px);
    -moz-animation: slide 0.8s ease 0.2s forwards;
    -webkit-animation: slide 0.8s ease 0.2s forwards;
    -o-animation: slide 0.8s ease 0.2s forwards;
    -ms-animation: slide 0.8s ease 0.2s forwards;
    animation: slide 0.8s ease 0.2s forwards;
  }

  &:hover &__content__category {
    transform: translateY(-150px);
  }

  &:not(:hover) .hidden {
    height: 120px;
    opacity: 0;
    animation: fade-out 0.5s;
  }

  &:hover .hidden {
    opacity: 1;
    color: grey;
    animation: fade-in 1.5s;
  }
}

/* Safari and Chrome */
@-webkit-keyframes slide {
  from {
    height: 120px;
  }
  to {
    height: 250px;
  }
}

/* Firefox */
@-moz-keyframes slide {
  from {
    height: 120px;
  }
  to {
    height: 250px;
  }
}

/* Opera */
@-o-keyframes slide {
  from {
    height: 120px;
  }
  to {
    height: 250px;
  }
}

/* IE10 */
@-ms-keyframes slide {
  from {
    height: 120px;
  }
  to {
    height: 250px;
  }
}

@keyframes slide {
  from {
    height: 120px;
  }
  to {
    height: 250px;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
