<template>
  <div class="video-block container">
    <div class="template">
      <div class="template-content">
        <div class="template-content_updated">
          Updated
        </div>
        <h2 class="template-content_title">
          Install all new<br>
          Swapuz <span>app</span>
        </h2>
        <div class="template-content_desc">
          Safely, anonymously and fast crypto swaps with 24/7 support
        </div>
        <div class="template-content_buttons">
          <div class="button">
            <img src="../../../assets/img/GooglePlay.svg" alt="">
          </div>
          <div class="button">
            <img src="../../../assets/img/AppStore.svg" alt="">
          </div>
        </div>
      </div>
      <div class="template-bg">
        <img src="../../../assets/img/video-block_bg.png" class="background" alt="">
        <video ref="myVideo" width="480" height="480" muted class="hidden">
          <source src="../../../assets/video/originalvideo.mp4" type="video/mp4">
        </video>
          <img src="../../../assets/img/phoneImg.png" class="phone show" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import 'intersection-observer';

export default {
  name: 'VideoBlock',
  data() {
    return {
      observer: null,
      videoPlaying: false
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(this.handleIntersection, {
      threshold: 0.5,
    });

    this.observer.observe(this.$refs.myVideo)
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.videoPlaying) {
          this.$refs.myVideo.play();
          this.videoPlaying = true;
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/main-page/video-block";
</style>