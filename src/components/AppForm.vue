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
      <!-- <IconFacebook class="icon facebookbackground" /> -->
      <svg
        class="icon facebookbackground"
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 509 509"
      >
        <g fill-rule="nonzero">
          <path
            fill="#0866FF"
            d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z"
          />
          <path
            fill="#fff"
            d="M354.18 332.27l14.28-77.77h-83.13V227c0-41.1 16.13-56.91 57.86-56.91 12.96 0 23.39.32 29.4.95v-70.5c-11.38-3.16-39.2-6.33-55.33-6.33-85.04 0-124.24 40.16-124.24 126.78v33.51h-52.48v77.77h52.48v169.24c19.69 4.88 40.28 7.49 61.48 7.49 10.44 0 20.72-.64 30.83-1.86V332.27h68.85z"
          />
        </g>
      </svg>
      <svg
        class="icon igbackground"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 132.004 132"
      >
        <defs>
          <linearGradient id="b">
            <stop offset="0" stop-color="#3771c8" />
            <stop stop-color="#3771c8" offset=".128" />
            <stop offset="1" stop-color="#60f" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="a">
            <stop offset="0" stop-color="#fd5" />
            <stop offset=".1" stop-color="#fd5" />
            <stop offset=".5" stop-color="#ff543e" />
            <stop offset="1" stop-color="#c837ab" />
          </linearGradient>
          <radialGradient
            id="c"
            cx="158.429"
            cy="578.088"
            r="65"
            xlink:href="#a"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)"
            fx="158.429"
            fy="578.088"
          />
          <radialGradient
            id="d"
            cx="147.694"
            cy="473.455"
            r="65"
            xlink:href="#b"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)"
            fx="147.694"
            fy="473.455"
          />
        </defs>
        <path
          fill="url(#c)"
          d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
          transform="translate(1.004 1)"
        />
        <path
          fill="url(#d)"
          d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
          transform="translate(1.004 1)"
        />
        <path
          fill="#fff"
          d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"
        />
      </svg>
      <!-- <IconInstagram  /> -->
      <!-- <IconX class="" /> -->
      <svg
        class="icon xbackground"
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        image-rendering="optimizeQuality"
        fill-rule="evenodd"
        clip-rule="evenodd"
        viewBox="0 0 512 509.64"
      >
        <rect width="512" height="509.64" rx="115.61" ry="115.61" />
        <path
          fill="#fff"
          fill-rule="nonzero"
          d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
        />
      </svg>
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
  border-radius: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 55%;
  height: 3rem;
  border: none;
  color: white;
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

@media only screen and (max-width: 320px) {
  .container {
    width: 80vw;
    height: 90vh;
  }

  .horizontalrule {
    margin-bottom: 0.3rem;
  }

  .loginwith {
    font-size: small;
  }
}

@media only screen and (min-width: 350px) {
  .container {
    width: 80vw;
    height: 90vh;
  }
  .loginwith {
    font-size: small;
  }
}

@media only screen and (min-width: 411px) {
  .container {
    width: 80vw;
    height: 90vh;
  }
}

@media only screen and (min-width: 758px) {
  .container {
    width: 80vw;
    height: 80vh;
  }
}

@media only screen and (min-width: 1024px) {
  .container {
    width: 70vw;
    height: 50vh;
  }

  .horizontalrule {
    margin-bottom: 0.3rem;
  }

  .loginwith {
    font-size: small;
  }
}

@media only screen and (min-width: 1280px) {
  .container {
    width: 80vw;
    height: 90vh;
  }
}
</style>
<script>
// import IconFacebook from '@/components/icons/IconFacebook.vue'
// import IconInstagram from '@/components/icons/IconInstagram.vue'
// import IconX from '@/components/icons/IconX.vue'
</script>
