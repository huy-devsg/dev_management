<template>
  <div class="bodypage">
    <div class="error">
      <p class="p">4</p>
      <span class="dracula">
        <div class="con">
          <div class="hair"></div>
          <div class="hair-r"></div>
          <div class="head"></div>
          <div class="eye"></div>
          <div class="eye eye-r"></div>
          <div class="mouth"></div>
          <div class="blod"></div>
          <div class="blod blod2"></div>
        </div>
      </span>
      <p class="p">4</p>

      <div class="page-ms">
        <p class="page-msg">Oops, the page you're looking for Disappeared</p>
        <router-link to="/" class="go-back">Go Back</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
.bodypage {
  background: #1b0034;
  background-image: linear-gradient(135deg, #1b0034 10%, #33265c 100%);
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
}

.error {
  width: 100%;
  height: auto;
  margin: 0 auto;
  text-align: center;
}

.dracula {
  width: 230px;
  height: 300px;
  display: inline-block;
  margin: auto;
  overflowx: hidden;
}

.error .p {
  height: 100%;
  color: #c0d7dd;
  font-size: 280px;
  margin: 10px;
  display: inline-block;
  font-family: 'Anton', sans-serif;
  font-family: 'Combo', cursive;
}

.con {
  width: 500px;
  height: 500px;
  position: relative;
  margin: 9% auto 0;
  animation: ani9 0.7s ease-in-out infinite alternate;
}

@keyframes ani9 {
  0% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(30px);
  }
}

.con > * {
  position: absolute;
  top: 0;
  left: 0;
}

.hair {
  top: -20px;
  width: 210px;
  height: 200px;
  background: #c0d7dd;
  border-radius: 0 50% 0 50%;
  transform: rotate(45deg);
  background: #33265c;
}
.hair-r {
  left: 20px;
  width: 210px;
  height: 200px;
  background: #c0d7dd;
  border-radius: 0 50% 0 50%;
  transform: rotate(45deg);
  background: #33265c;
}
.head {
  width: 200px;
  height: 200px;
  background: #c0d7dd;
  border-radius: 0 50% 0 50%;
  transform: rotate(45deg);
}
.eye {
  width: 20px;
  height: 20px;
  background: #111113;
  border-radius: 50%;
  top: 15%;
  left: 11.5%;
  transition: 0.3s linear;
}
.eye-r {
  left: 24%;
}

.mouth {
  width: 60px;
  height: 20px;
  background: #840021;
  top: 20%;
  left: 14%;
  border-radius: 50% / 0 0 100% 100%;
}
.mouth::after {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 13px solid #ffffff;
  left: 10px;
}
.mouth::before {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 13px solid #ffffff;
  left: 40px;
}

.blod {
  width: 8px;
  height: 20px;
  background: #840021;
  top: 23%;
  left: 17%;
  border-radius: 20px;
}
.blod::after {
  width: 2px;
  height: 10px;
  background: #fff;
  top: 20%;
  left: 10%;
  border-radius: 20px;
}
.blod2 {
  top: 23%;
  left: 20%;
  width: 13px;
  height: 13px;
  border-radius: 50% 50% 50% 0;
  transform: rotate(130deg);
  animation: blod 2s linear infinite;
  opacity: 0;
}
@keyframes blod {
  0% {
    opacity: 1;
  }
  100% {
    background: red;
    opacity: 0;
    top: 50%;
  }
}

/* page-ms */
.page-ms {
  transform: translateY(-50px);
}

.error p.page-msg {
  text-align: center;
  color: #c0d7dd;
  font-size: 30px;
  font-family: 'Combo', cursive;
  margin-bottom: 70px;
}
.go-back {
  font-size: 30px;
  font-family: 'Combo', cursive;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s linear;
  z-index: 9;
  border-radius: 10px;
  background: #c0d7dd;
  color: #33265c;
  box-shadow: 0 0 10px 0 #c0d7dd;
  margin-top: 20px;
  text-decoration: none;
}
.go-back:hover {
  box-shadow: 0 0 20px 0 #c0d7dd;
  text-decoration: none;
}
</style>
