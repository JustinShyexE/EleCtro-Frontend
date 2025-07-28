<script lang="ts" setup>
import user from '../../assets/user.png';
import cart from '../../assets/cartt.png';
import searchbox from '../smallcomponents/searchbox.vue';
</script>

<template>
  <nav class="navbar">
    <div class="left center">
      <h3 class="logo">aShop</h3>
    </div>
    <div class="mid center">
      <searchbox />
    </div>
    <div class="right">
      <router-link to="/" class="routerwrap">
        <div class="cartIconWrap">
          <div class="quantity center">12</div>
          <img class=" cartIcon" :src="cart" />
        </div>
        <img class="accountIcon" :src="user" />
      </router-link>
    </div>
  </nav>

</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 100;
}

.accountIcon {
  height: 35px;
  width: 35px;
}

.cartIconWrap {
  height: 35px;
  width: 35px;
  display: none;
  position: relative;
}

.quantity {
  position: absolute;
  align-self: center;
  margin-bottom: 18px;
  margin-left: 14px;
  background-color: red;
  color: black;
  font-size: 0.7rem;
  font-weight: 600;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}

.cartIcon {
  width: 100%;
  height: 100%;
}

.left {
  width: 20%;
  height: 100%;
}

.mid {
  width: 60%;
  margin-top: 24px;
  ;
}

.right {
  width: 20%;
  height: 100%;
}

.logo {
  font-family: 'Inter', light-italic, sans-serif;
  color: rgba(172, 105, 105, 1);
  font-size: 1.2rem;
  font-weight: 400;
  text-decoration: underline;
  text-decoration-color: solid black;
  text-decoration-thickness: 2px;
  cursor: pointer;
  user-select: none
}

.routerwrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  gap: 5%;
}

@media only screen and (min-width: 400px) {

  .accountIcon {
    height: 40px;
    width: 40px;
  }

  .logo {
    font-size: 1.4rem;
    text-decoration-thickness: 2px;
    letter-spacing: 2px
  }
}

@media (min-width: 550px) {
  .mid {
    width: 33%;
  }

  .left {
    margin-left: 1rem;
  }

  .right {
    margin-right: 1rem;
  }

  .cartIconWrap {
    display: flex;
    justify-content: center;
    margin-top: 3px;
    height: 37px;
    width: 37px;
  }

  .logo {
    font-size: 1.6rem;
    text-decoration-thickness: 3px;
  }
}

@media (min-width: 768px) {
  .logo {
    font-size: 1.8rem;
    text-decoration-thickness: 3px;
    letter-spacing: 3px;
  }

  .cartIconWrap {
    margin-top: 3px;
    height: 39px;
    width: 39px;
  }

  .accountIcon {
    height: 42px;
    width: 42px;
  }
}

@media (min-width: 1024px) {
  .logo {
    font-size: 2rem;
    text-decoration-thickness: 3px;
    letter-spacing: 4px;
  }

  .quantity {
    width: 1rem;
    height: 1rem;
    margin-bottom: 22px;
    margin-left: 20px;
  }

  .cartIconWrap {
    height: 45px;
    width: 45px;
  }

  .accountIcon {
    height: 48px;
    width: 48px;
  }
}

@media (min-width: 1280px) {
  .logo {
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration-thickness: 3px;
  }
}

@media (min-width: 1536px) {
  .logo {
    font-size: 2.6rem;
    letter-spacing: 6px;
  }

  .routerwrap {
    justify-content: end;
  }

  .accountIcon {
    margin-right: 15%;
  }

  .cartIconWrap {
    height: 55px;
    width: 55px;
  }

  .accountIcon {
    height: 58px;
    width: 58px;
  }

  .quantity {
    width: 1.3rem;
    height: 1.3rem;
    margin-bottom: 22px;
    margin-left: 20px;
    font-size: 0.8rem;
  }

}
</style>