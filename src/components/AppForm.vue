<template>
  <div class="container">
    <h2 class="welcome">Welcome</h2>
    <div class="inputcontainer">
      <input type="text" class="sharp" placeholder="Email" />
      <input type="password" class="sharp" placeholder="Password" />
    </div>
    <div class="buttoncontainer">
      <button class="super">Sign Up</button>
    </div>
    <h5 class="loginwith">Or Login With</h5>
    <hr class="horizontalrule" />
    <div class="iconcontainer">
      <inline-svg class="icon facebookbackground" :src="facebookSourceUrl" width="24" height="24" />
      <inline-svg class="icon igbackground" :src="igSourceUrl" width="24" height="24" />
      <inline-svg class="icon xbackground" :src="xSourceUrl" width="24" height="24" />
    </div>
    <h4 class="forgotpassword">Forgot Password?</h4>
  </div>
</template>

<style>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0.5px);
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
}

.welcome {
  margin: 3rem 0 2rem 0;
}

.inputcontainer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
}

.sharp {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
}

.sharp:focus {
  display: inline-block;
  box-shadow: 0 0 0 0.2rem #b9abe8;
  backdrop-filter: blur(12rem);
  border-radius: 2rem;
}

.sharp::placeholder {
  color: #b9abe8;
  font-weight: 100;
  font-size: 1rem;
}

.buttoncontainer {
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.super {
  background: linear-gradient(to right, #14153c 0%, #03217b 79%);
  border-radius: 20px;
}

.loginwith {
  cursor: pointer;
}

.horizontalrule {
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.5rem 0 1rem 0;
  background: linear-gradient(to right, #14153c 0%, #03217b 79%);
  backdrop-filter: blur(0.5px);
  border-radius: 10px;
}

.iconcontainer {
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
}

.forgotpassword {
  cursor: pointer;
}

.icon {
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
}

.icon svg {
  width: 1.5rem;
  height: 1.5rem;
}

.facebookbackground {
  background: linear-gradient(to right, #0545a0 0%, #553fb5 100%);
}

.igbackground {
  background: linear-gradient(to right, #a12ac4 0%, #ed585c 40%, #f0a853 100%);
}

.xbackground {
  background: linear-gradient(to right, #55c1e1 0%, #35a9c3 100%);
}
</style>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      facebookSource: '/facebook.svg',
      igSource: '/ig.svg',
      xSource: '/x.svg'
    }
  },
  setup() {
    const facebookSourceUrl = () => import(`@/assets/${this.facebookSource}`)
    const igSourceUrl = () => import(`@/assets/${this.igSource}`)
    const xSourceUrl = () => import(`@/assets/${this.xSource}`)

    return {
      facebookSourceUrl,
      igSourceUrl,
      xSourceUrl
    }
  }
})
</script>
