<template>
  <section class="workSection container">
    <h2 class="mb-5 mx-auto text-center">
      My Top Projects
    </h2>

    <div
      class="work clearfix"
      data-aos="fade-up"
    >
      <div class="workText">
        <h3>NeniEmSu</h3>
        <a href="#">
          <h5>View Project</h5>
        </a>
        <div class="underline" />
      </div>
      <ul>
        <li><a href="#"><i class="fas fa-link fa-2x" /></a></li>
        <li><a href="#"><i class="fab fa-github fa-2x" /></a></li>
        <li
          v-b-tooltip.hover
          title="Next Project"
        >
          <a href="#"><i class="fas fa-forward fa-2x" /></a>
        </li>
      </ul>
      <img
        src="~/assets/img/neniemsu.png"
        alt="project img"
        class="workImg"
      >
    </div>

    <div
      class="work2 clearfix"
      data-aos="fade-up"
    >
      <div class="workText">
        <h3>NeniEmSu</h3>
        <a href="#">
          <h5>View Project</h5>
        </a>
        <div class="underline" />
      </div>
      <ul>
        <li><a href="#"><i class="fas fa-link fa-2x" /></a></li>
        <li><a href="#"><i class="fab fa-github fa-2x" /></a></li>
        <li
          v-b-tooltip.hover
          title="Next Project"
        >
          <a href="#"><i class="fas fa-forward fa-2x" /></a>
        </li>
      </ul>
      <img
        src="~/assets/img/test.image.png"
        alt="project img"
        class="workImg"
      >
    </div>

    <div
      class="work clearfix"
      data-aos="fade-up"
    >
      <div class="workText">
        <h3>Nugs-Ternopil</h3>
        <a href="#">
          <h5>View Project</h5>
        </a>
        <div class="underline" />
      </div>
      <ul>
        <li><a href="#"><i class="fas fa-link fa-2x" /></a></li>
        <li><a href="#"><i class="fab fa-github fa-2x" /></a></li>
        <li
          v-b-tooltip.hover
          title="See More"
        >
          <nuxt-link :to="localePath({name: 'portfolio'},$i18n.locale)">
            <i class="fas fa-forward fa-2x" />
          </nuxt-link>
        </li>
      </ul>
      <img
        to="#"
        src="~/assets/img/nugshdark.png"
        alt="project img"
        class="workImg"
      >
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #17191a;
}

.work {
  width: 100%;
  position: relative;
  margin-bottom: 5em;
}

.work > .workText {
  position: absolute;
  top: 65px;
}

.work > .workText > .underline {
  display: block;
  background-color: $primary;
  height: 3px;
  width: 61px;
  margin-top: 5px;
}

.work > .workImg {
  width: 85%;
  float: right;
  box-shadow: 0px 3px 70px 0px rgba(23, 30, 0, 0.5);
  -webkit-box-shadow: 0px 3px 70px 0px rgba(23, 30, 0, 0.5);
  -moz-box-shadow: 0px 3px 70px 0px rgba(23, 30, 0, 0.5);
}

.work ul {
  position: absolute;
  bottom: 0;
  right: 86%;
}

.work ul li {
  margin-top: 20px;
}

.work2 {
  width: 100%;
  position: relative;
  margin-bottom: 5em;
}

.work2 > .workText {
  position: absolute;
  top: 65px;
  right: 0;
  text-align: right;
}

.work2 > .workText > .underline {
  display: block;
  background-color: $primary;
  height: 3px;
  width: 61px;
  margin-top: 5px;
  float: right;
}

.work2 > .workImg {
  width: 85%;
  float: left;
  box-shadow: 0px 3px 70px 0px rgba(23, 30, 0, 0.5);
  -webkit-box-shadow: 0px 3px 70px 0px rgba(23, 30, 0, 0.5);
  -moz-box-shadow: 0px 3px 70px 0px rgba(23, 30, 0, 0.5);
}

.work2 ul {
  position: absolute;
  bottom: 0;
  left: 82%;
}

.work2 ul li {
  margin-top: 20px;
}

@media screen and (max-width: 425px) {
  .work > .workText {
    position: absolute;
    top: 20px;
    background: rgba(228, 230, 222, 0.25);
  }

  .work2 > .workText {
    position: absolute;
    top: 20px;
    background: rgba(228, 230, 222, 0.25);
  }

  .work ul {
    display: flex;
    right: 50%;
    background: rgba(228, 230, 222, 0.25);
  }

  .work ul li {
    margin: 0 10px 0;
    display: flex;
  }

  .work2 ul {
    display: flex;
    left: 35%;
    background: rgba(228, 230, 222, 0.25);
  }

  .work2 ul li {
    margin: 0 10px 0;
    display: flex;
  }
}
</style>
