<template>
  <div class="features-how-to-use container">
    <div class="template">
      <h2>
        How to swap coins
      </h2>
      <div class="template-content">
        <div class="block">
          <div class="block-text">
            <div class="block-text_title">
              <h3 class="num">1</h3>
              <h3>Details</h3>
            </div>
            <div class="block-text_desc">
              <h4>To start the exchange, select the trading pair you are interested in, and in the drop-down list of coins, click on the network in which you will send the deposit and in which you wish to receive the coins.</h4>
              <h4>At this point, you have the option to specify how many coins you want to send, or how many coins you want to receive, then we will automatically determine how many you will need to send.</h4>
              <h4>By default you will have a floating rate selected (it does not guarantee the final receipt amount, it shows an approximate rate and will be determined after confirming the deposit), in order for us to guarantee your receipt amount click on the "lock" to select a fixed rate.</h4>
              <h4>The last action will be to fill in the recipient address, please note that we validate the address for its belonging to the selected network (if you select the Tron network for USDT, we will block the possibility of creating an exchange if you insert the Ethereum address, until you insert the correct address belonging to the Tron network). To simplify address copying and transferring, we added ability to connect address with WalletConnect, scan QR-code from your wallet and your address will automatically appear in the line, then agree to the rules and swap will be ready to create.</h4>
            </div>
          </div>
          <div class="block-img">
            <img src="../../../assets/img/detailsScreen.png" alt="">
          </div>
        </div>
        <div class="block">
          <div class="block-text">
            <div class="block-text_title">
              <h3 class="num">2</h3>
              <h3>Processing</h3>
            </div>
            <div class="block-text_desc">
              <h4>This stage has 4 successful statuses:</h4>
              <div class="subtitle">
                <div class="subtitle-symbol">•</div>
                Send Deposit
              </div>
              <h4>You will have a second chance to choose which network you want to send deposit, please send deposit only to specified address, only in specified network and if there is MEMO, do not forget to specify it, otherwise funds may be lost.</h4>
              <h4>You will be given a unique exchange number which you can click on to get support and also the time when you have to send your deposit, do not worry if your deposit did not reach in time, it is not dangerous for the safety of funds.</h4>
              <h4>Again to simplify the process we have added the ability to send a deposit using WalletConnect, to do this scan the QR-code and send the transaction through your wallet.</h4>
              <div class="subtitle">
                <div class="subtitle-symbol">•</div>
                Confirming
              </div>
              <h4>After sending your deposit, wait for the blockchain to confirm your transaction and for it to go through Swapuz confirmation.</h4>
              <div class="subtitle">
                <div class="subtitle-symbol">•</div>
                Exchanging
              </div>
              <h4>This process goes by lightning fast, so you may not notice it, but at this point your coins are exchanged for receiving coins.</h4>
              <div class="subtitle">
                <div class="subtitle-symbol">•</div>
                Sending
              </div>
              <h4>We've already sent you the funds, but they're waiting for confirmation from the blockchain until the transaction has a hash.</h4>
            </div>
          </div>
          <div class="block-img">
            <img src="../../../assets/img/processingScreen.png" alt="">
          </div>
        </div>
        <div class="block">
          <div class="block-text">
            <div class="block-text_title">
              <h3 class="num">3</h3>
              <h3>Finish</h3>
            </div>
            <div class="block-text_desc">
              <h4>Congratulations, after just a few minutes your exchange has gone all the way and is now successfully completed.</h4>
              <h4>In the current status you can see all the final data, as well as contact support if you have any questions.</h4>
              <h4>You can also get a receipt of your exchange, we will deliver the data from this exchange in a documented form. Leave an email and we'll deliver the file to you or save the PDF file in a pop-up.</h4>
              <div class="button">
                Lets try to swap
                <img src="../../../assets/img/arrow-right-black.svg" alt="">
              </div>
            </div>
          </div>
          <div class="block-img">
            <img src="../../../assets/img/finishScreen.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="template">
      <h2>
        Errors and fuckups
      </h2>
      <div class="template-content">
        <div class="block">
          <div class="block-text">
            <div class="block-text_title">
              <h3 class="num">1</h3>
              <h3>Time is over</h3>
            </div>
            <div class="block-text_desc">
              <h4>Unfortunately you did not have time to send the deposit in the specified time, try to create a new swap.</h4>
              <h4>If you sent a deposit and it got stuck or our system doesn't see it, please don't panic, nothing bad will happen, try to contact support or wait a little longer.</h4>
            </div>
            <div class="block-text_title">
              <h3 class="num">2</h3>
              <h3>Oops.. We need a KYC</h3>
            </div>
            <div class="block-text_desc">
              <h4>It seems you have done a bad thing, if we have asked you to go through KYC, regular users should not pay attention to this fuckup, it is extremely rare for more details check out our KYC/AML policy.</h4>
            </div>
            <div class="block-text_title">
              <h3 class="num">3</h3>
              <h3>Refunding</h3>
            </div>
            <div class="block-text_desc">
              <h4>Something went wrong. Don't worry, if you've encountered this issue, please contact support for a refund. Most likely, our system was unable to execute the swap due to technical or market-related reasons.</h4>
            </div>
          </div>
          <div class="block-img">
            <img src="../../../assets/img/overdueScreen.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesHowToUse'
}
</script>

<style lang="scss">
@import "../../../assets/styles/pages/how-to-use/features-how-to-use";
</style>