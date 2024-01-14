<template>
  <div class="contact-us container">
    <div class="contact-us_content">
      <h2>
        Contact us
      </h2>
      <div class="form">
        <div class="form-menu">
          <div @click="toggleThemes" class="form--item button-menu" :class="{ 'button-active': isThemesOpen }">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path d="M6.4737 21.7579L2.33203 17.6163L3.55703 16.3913L6.4737 19.2788L11.6945 14.0579L12.9195 15.3121L6.4737 21.7579ZM6.4737 12.4246L2.33203 8.28294L3.55703 7.05794L6.4737 9.94544L11.6945 4.72461L12.9195 5.97878L6.4737 12.4246ZM15.1654 19.5413V17.7913H25.6654V19.5413H15.1654ZM15.1654 10.2079V8.45794H25.6654V10.2079H15.1654Z" fill="white" fill-opacity="0.38"/>
            </svg>
            <div class="text">
              <div class="text_placeholder">
                Theme of the appeal *
              </div>
              <div v-if="selectedTheme" class="text_selected">
                {{ selectedTheme.title }}
              </div>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow" :style="{ transform: isThemesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .3s ease-in-out' }">
              <g clip-path="url(#clip0_1976_6105)"><path d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z" fill="#FFFFFF61"></path></g><defs><clipPath id="clip0_1976_6105"><rect width="24" height="24" fill="white"></rect></clipPath></defs>
            </svg>
          </div>
          <div v-if="isThemesOpen" class="menu">
            <div v-for="theme, index in themes" :key="index" @click="selectTheme(theme)" class="menu--item">
              {{ theme.title }}
            </div>
          </div>
        </div>
        <label class="form--item input" :class="{ 'label_active': isEmailActive || emailValue !== '' }">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9987 25.6663C12.3848 25.6663 10.8681 25.3601 9.4487 24.7476C8.02925 24.1351 6.79453 23.3038 5.74453 22.2538C4.69453 21.2038 3.86328 19.9691 3.25078 18.5497C2.63828 17.1302 2.33203 15.6136 2.33203 13.9997C2.33203 12.3858 2.63828 10.8691 3.25078 9.44968C3.86328 8.03023 4.69453 6.79551 5.74453 5.74551C6.79453 4.69551 8.02925 3.86426 9.4487 3.25176C10.8681 2.63926 12.3848 2.33301 13.9987 2.33301C15.6126 2.33301 17.1293 2.63926 18.5487 3.25176C19.9681 3.86426 21.2029 4.69551 22.2529 5.74551C23.3029 6.79551 24.1341 8.03023 24.7466 9.44968C25.3591 10.8691 25.6654 12.3858 25.6654 13.9997V15.5455C25.6654 16.6344 25.2813 17.5531 24.5133 18.3018C23.7452 19.0504 22.807 19.4247 21.6987 19.4247C20.9987 19.4247 20.3376 19.2545 19.7154 18.9143C19.0931 18.574 18.6168 18.0927 18.2862 17.4705C17.7806 18.1316 17.1487 18.6226 16.3904 18.9434C15.632 19.2643 14.8348 19.4247 13.9987 19.4247C12.482 19.4247 11.1938 18.8997 10.1341 17.8497C9.07439 16.7997 8.54453 15.5163 8.54453 13.9997C8.54453 12.483 9.07439 11.19 10.1341 10.1205C11.1938 9.05106 12.482 8.51634 13.9987 8.51634C15.5154 8.51634 16.8036 9.05106 17.8633 10.1205C18.923 11.19 19.4529 12.483 19.4529 13.9997V15.5455C19.4529 16.1483 19.6716 16.6538 20.1091 17.0622C20.5466 17.4705 21.0765 17.6747 21.6987 17.6747C22.3015 17.6747 22.8216 17.4705 23.2591 17.0622C23.6966 16.6538 23.9154 16.1483 23.9154 15.5455V13.9997C23.9154 11.2386 22.9529 8.89551 21.0279 6.97051C19.1029 5.04551 16.7598 4.08301 13.9987 4.08301C11.2376 4.08301 8.89453 5.04551 6.96953 6.97051C5.04453 8.89551 4.08203 11.2386 4.08203 13.9997C4.08203 16.7608 5.04453 19.1038 6.96953 21.0288C8.89453 22.9538 11.2376 23.9163 13.9987 23.9163H20.2404V25.6663H13.9987ZM13.9987 17.6747C15.0293 17.6747 15.9043 17.3198 16.6237 16.6101C17.3431 15.9004 17.7029 15.0302 17.7029 13.9997C17.7029 12.9497 17.3431 12.065 16.6237 11.3455C15.9043 10.6261 15.0293 10.2663 13.9987 10.2663C12.9681 10.2663 12.0931 10.6261 11.3737 11.3455C10.6543 12.065 10.2945 12.9497 10.2945 13.9997C10.2945 15.0302 10.6543 15.9004 11.3737 16.6101C12.0931 17.3198 12.9681 17.6747 13.9987 17.6747Z" fill="white" fill-opacity="0.38"></path>
          </svg>
          <div class="label">
            Your e-mail *
          </div>
          <input v-model="emailValue" @focus="setEmailActive(true)" @blur="setEmailActive(false)" />
        </label>
        <label class="form--item input" :class="{ 'label_active': isIdActive || idValue !== '' }">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.71797 18.3456C5.32908 17.6456 5.05686 16.9407 4.9013 16.231C4.74575 15.5213 4.66797 14.797 4.66797 14.0581C4.66797 11.5109 5.58672 9.31849 7.42422 7.48099C9.26172 5.64349 11.4541 4.72474 14.0013 4.72474H15.2555L12.9221 2.39141L14.0596 1.25391L18.4055 5.59974L14.0596 9.94557L12.893 8.77891L15.1971 6.47474H14.0013C11.9207 6.47474 10.1367 7.21849 8.64922 8.70599C7.16172 10.1935 6.41797 11.9775 6.41797 14.0581C6.41797 14.622 6.47144 15.1567 6.57839 15.6622C6.68533 16.1678 6.81658 16.6442 6.97214 17.0914L5.71797 18.3456ZM13.8846 26.8331L9.5388 22.4872L13.8846 18.1414L15.0221 19.2789L12.6888 21.6122H14.0013C16.0819 21.6122 17.8659 20.8685 19.3534 19.381C20.8409 17.8935 21.5846 16.1095 21.5846 14.0289C21.5846 13.465 21.536 12.9303 21.4388 12.4247C21.3416 11.9192 21.1957 11.4428 21.0013 10.9956L22.2555 9.74141C22.6444 10.4414 22.9214 11.1463 23.0867 11.856C23.252 12.5657 23.3346 13.29 23.3346 14.0289C23.3346 16.5761 22.4159 18.7685 20.5784 20.606C18.7409 22.4435 16.5485 23.3622 14.0013 23.3622H12.6888L15.0221 25.6956L13.8846 26.8331Z" fill="white" fill-opacity="0.38"></path>
          </svg>
          <div class="label">
            Exchange ID
          </div>
          <input v-model="idValue" @focus="setIdActive(true)" @blur="setIdActive(false)" />
        </label>
        <label class="form--item textarea" :class="{ 'label_active': isMessageActive || messageValue !== '' }">
          <div class="label">
            Message
          </div>
          <textarea v-model="messageValue" @focus="setMessageActive(true)" @blur="setMessageActive(false)"/>
        </label>
        <div class="required">
          * Required fields 
        </div>
        <div class="button">
          Send
        </div>
      </div>
      <div class="desc">
        Or you can contact us via e-mail and telegram 
      </div>
      <div class="social">
        <div class="social--item">
          <img src="../../../assets/img/mailGreen.svg" alt="">
          <div class="link">
            support@swapuz.com
          </div>
        </div>
        <div class="social--item">
          <img src="../../../assets/img/telegramGreen.svg" alt="">
          <div class="link">
            @swapuz_support
          </div>
        </div>
        <div class="social--item">
          <img src="../../../assets/img/discordGreen.svg" alt="">
          <div class="link">
            discord.gg/swapuz
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      isThemesOpen: false,
      selectedTheme: null,
      themes: [
        { title: 'Funds not received' },
        { title: 'The amount received is incorrect' },
        { title: 'Sent a deposit on the wrong network' },
        { title: 'Online support does not respond' },
        { title: 'Incorrect memo indicated' },
        { title: 'Sent less than the deposit amount' },
        { title: 'Sent an amount greater than the deposit amount' },
        { title: 'Status not changed' },
        { title: 'Sent OLD token' },
        { title: 'Become a Partner' },
        { title: 'Affiliate Offer' },
        { title: 'Other' }
      ],
      emailValue: '',
      isEmailActive: false,
      idValue: '',
      isIdActive: false,
      messageValue: '',
      isMessageActive: false
    }
  },
  methods: {
    toggleThemes() {
      this.isThemesOpen = !this.isThemesOpen;
    },
    selectTheme(theme) {
      this.selectedTheme = theme;
      this.isThemesOpen = false;
    },
    setEmailActive(value) {
      this.isEmailActive = value;
    },
    setIdActive(value) {
      this.isIdActive = value;
    },
    setMessageActive(value) {
      this.isMessageActive = value;
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/contacts-page/contact-us";
</style>