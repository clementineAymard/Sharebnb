
<template>
  <section class="stay-details main-layout smaller-layout" v-if="stay">

    <section class="stay-details1">
      <h1 class="name-title">{{ stay.loc.city }} , {{ stay.loc.country }}</h1>
      <div class="flex justify-between">
        <div class="name-subtitle flex">
          <div class="rating-review flex">
            <span class="avg-rating flex font-md">
              <section class="icon-svg">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                  focusable="false" style="display: block; height: 14px; width: 14px; fill: currentcolor;">
                  <path
                    d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                    fill-rule="evenodd"></path>
                </svg>
              </section>
              3.73
            </span>
            <span>·</span>
            <span class="rev-count link font-md"> {{ stay.reviews.length }} reviews</span>
          </div>
          <span>·</span>
          <span class="address link font-md">{{ stay.loc.city }} , {{ stay.loc.country }}
          </span>
        </div>
        <div class="save-stay flex btn">
          <section class="icon-svg">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
              focusable="false"
              style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 2; overflow: visible;">
              <path
                d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
              </path>
            </svg>
          </section>
          <span class="link fs12">Save</span>
        </div>
      </div>
      <div class="images-container">
        <img class="stay-img" :src="this.stay.imgUrls[0]" alt="stay">
        <img class="stay-img" :src="this.stay.imgUrls[1]" alt="stay">
        <img class="stay-img" :src="this.stay.imgUrls[2]" alt="stay">
        <img class="stay-img" :src="this.stay.imgUrls[3]" alt="stay">
        <img class="stay-img" :src="this.stay.imgUrls[4]" alt="stay">
       
      </div>
      <div class="mid-section">
        <div class="more-details">
          <div class="heading flex justify-between">
            <div class="txt column flex justify-between">
              <h2 class="title subheading">{{ stay.host.fullname }}</h2>
              <div class="flex capacity-details">
                <div class="capacity-subtitle">2 guests</div>
                <span>·</span>
                <div class="capacity-subtitle">
                  1 bedroom
                </div>
                <span>·</span>
                <div class="capacity-subtitle">2 beds </div>
                <span>·</span>
                <div class="capacity-subtitle"> 1 bath
                </div>
              </div>
            </div>
            <img src="https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/male/40.jpg">
          </div>
          <div class="divider"></div>
          <div class="special-perks">
            <div class="flex">
              <section class="icon-svg">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;">
                  <path
                    d="m16.8438 27.1562-.00005-3.39845-.2608465.0913211c-.9857292.3215073-2.0303948.5116467-3.1127817.5499306l-.4076218.0071983-.2927873-.0037049c-6.03236807-.1528291-10.89442655-5.0148222-11.04725775-11.0472069l-.00370495-.2927882.00370495-.2927873c.1528312-6.03236807 5.01488968-10.89442655 11.04725775-11.04725775l.2927873-.00370495.2927882.00370495c6.0323847.1528312 10.8943778 5.01488968 11.0472069 11.04725775l.0037049.2927873-.00663.3912275c-.0484899 1.4286741-.3615343 2.7917824-.8920452 4.0406989l-.1327748.2963236 7.90645 7.90705v5.5834h-5.5834l-4.12505-4.12545zm-6.5313-19.93745c1.708641 0 3.09375 1.38511367 3.09375 3.09375 0 1.7086436-1.3851064 3.09375-3.09375 3.09375-1.70863633 0-3.09375-1.385109-3.09375-3.09375 0-1.70863365 1.38511635-3.09375 3.09375-3.09375zm0 2.0625c-.56954635 0-1.03125.46170365-1.03125 1.03125 0 .5695521.46169942 1.03125 1.03125 1.03125.5695564 0 1.03125-.4616936 1.03125-1.03125 0-.56955058-.4616979-1.03125-1.03125-1.03125zm12.1147 15.81255 4.12455 4.12495h2.667v-2.667l-8.37295-8.37255.3697-.6775.1603998-.3074798c.56763-1.1397167.90791-2.4128858.9606815-3.761954l.0072187-.3697662-.0038197-.2688703c-.1397418-4.91222958-4.0963692-8.86881961-9.0086094-9.00856l-.2688709-.0038197-.2688703.0038197c-4.91222958.13974039-8.86881961 4.09633042-9.00856 9.00856l-.0038197.2688703.0038197.2688709c.14228112 5.0015536 4.24146819 9.0124291 9.2774303 9.0124291 1.4456308 0 2.8116781-.3298367 4.0293209-.9177001l.3012791-.1522999 1.5131-.7998-.00045 4.61975z">
                  </path>
                </svg>
              </section>
              <div class="txt">
                <h4>Great check-in experience</h4>
                <span class="subtitle"> 100% of recent guests gave the check-in process a 5-star rating.</span>
              </div>
            </div>
            <div class="flex">
              <section class="icon-svg">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;">
                  <path
                    d="M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z">
                  </path>
                </svg>
              </section>
              <div class="txt">
                <h4>Great location</h4>
                <span class="subtitle"> 90% of recent guests gave the location a 5-star rating.</span>
              </div>
            </div>
            <div class="flex">
              <section class="icon-svg">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                  focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;">
                  <path
                    d="m26.6667.33325c2.7614237 0 5 2.23857625 5 5 0 1.31252243-.5057306 2.50692514-1.3329579 3.39897419l-.0003421 12.60097581-.0046196.2168878c-.110409 2.5868723-2.1864153 4.6647895-4.7725007 4.7782333l-.2228797.0048789-5.37965-.0007-3.95365 4.5193-3.95535-4.5193-5.378.0007-.21689009-.0046196c-2.58889537-.1104942-4.66799759-2.1896227-4.77849041-4.7784926l-.0046195-.2168878v-14.6667h2v14.6667l.00509267.1762674c.08786657 1.5164377 1.30214832 2.7307694 2.81863397 2.8186397l.17627336.0050929h6.28715l3.04585 3.4813 3.04665-3.4813h6.287c1.597725 0 2.903664-1.2489704 2.9949075-2.8237326l.0050925-.1762674-.0001078-11.2844332c-.5212771.1842357-1.0822276.2844832-1.6665922.2844832-2.7614237 0-5-2.23857625-5-5 0-.58436456.1002475-1.14531506.2844832-1.66659223l-15.2844332-.00015777-.17627336.00509271c-1.51648565.0878672-2.7307674 1.30215727-2.81863397 2.81863493l-.00509267.17502236-2 .00025.00461952-.21588934c.11040804-2.58688927 2.18639693-4.66478903 4.77249926-4.77823185l.22288122-.00487881 16.6009758-.0002921c.8920491-.82722728 2.0864518-1.3329579 3.3989742-1.3329579zm-1.1919682 2.24613101-.1437145.0668777-.062205.03189443-.162945.09259813-.1458283.0949218-.1106469.0804555-.1289779.10407113-.155155.14203386-.1448697.1524757-.1136922.13620282-.045604.05953215c-.3733536.50015804-.5943933 1.1206686-.5943933 1.79280577 0 1.65685425 1.3431458 3 3 3 .6245598 0 1.2045431-.19085456 1.6848096-.51742339l.1728464-.12676345.1564144-.13238455.1843168-.1820638.1005471-.11384792.1530375-.19855208.0480886-.0701581.0627236-.0984415.0650185-.1119245.0607666-.11593066.1075518-.24322537c.0352657-.09045929.0662674-.18304718.0927593-.27751925l.0437598-.17664562.032631-.17718882c.014177-.09256085.0241236-.18651477.0296363-.2816582l.0050927-.17627279c0-1.59768088-1.24892-2.90366088-2.8237272-2.99490731l-.1762728-.00509269-.1782955.00521057-.1957301.01787825-.0769938.01058982-.1930831.03563199-.1709809.04274164-.0945661.0283372-.0929723.03124429-.0955519.03572841z">
                  </path>
                </svg>
              </section>
              <div class="txt">
                <h4>Great communication</h4>
                <span class="subtitle"> 100% of recent guests rated Marián 5-star in communication.
                </span>
              </div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="summary">
            {{ stay.summary }}
          </div>
          <div class="divider"></div>
          <div class="amenities">
            <h4 class="subheading">What this place offers

            </h4>
            <div class="amenities-container"></div>
            <li><section class="amenity flex"><section class="icon-svg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"></path></svg></section><span>Wifi</span></section></li>
            <li><section class="amenity flex"><section class="icon-svg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path></svg></section><span>Kitchen</span></section></li>
            <li><section class="amenity flex"><section class="icon-svg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M21 3a2 2 0 0 1 1.995 1.85L23 5v7a6.996 6.996 0 0 1-2.226 5.12l-.2.181-.023.018.28.108a13.014 13.014 0 0 1 8.083 10.574h-2.016c-.634-4.631-4.16-8.401-8.789-9.298l-.109-.02.001-2.1a5.003 5.003 0 0 0 2.978-4.128l.016-.227L21 12l-.001-3h-10L11 12a5 5 0 0 0 3 4.583v2.098a10.922 10.922 0 0 0-3.001 1.017L11 28H9v-6.987a11.009 11.009 0 0 0-3.898 6.988L3.086 28a13.018 13.018 0 0 1 7.795-10.455l.288-.119.279-.109-.232-.206a6.995 6.995 0 0 1-2.193-4.543l-.018-.296L9 12V5a2 2 0 0 1 1.85-1.995L11 3zm-3 23a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7-17H11l-.001 2h10z"></path></svg></section><span>Doorman</span></section></li>
            <li><section class="amenity flex"><section class="icon-svg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M30 1a1 1 0 0 1 .993.883L31 2v28a1 1 0 0 1-.883.993L30 31H2a1 1 0 0 1-.993-.883L1 30V2a1 1 0 0 1 .883-.993L2 1zM3 3v26h12V3zm7 9v6.585l1.793-1.792 1.414 1.414-3.5 3.5a1 1 0 0 1-1.32.083l-.094-.083-3.5-3.5 1.414-1.414L8 18.585V12zm12.387-1.497a1 1 0 0 1 1.226 0l.094.083 3.5 3.5-1.414 1.414L24 13.707V20h-2v-6.293L20.207 15.5l-1.414-1.414 3.5-3.5zM17 29h12V3H17z"></path></svg></section><span>Elevator</span></section></li>
            <li><section class="amenity flex"><section class="icon-svg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 0a5 5 0 0 1 4.995 4.783L21 5l.001 12.756.26.217a7.984 7.984 0 0 1 2.717 5.43l.017.304L24 24a8 8 0 1 1-13.251-6.036l.25-.209L11 5A5 5 0 0 1 15.563.019l.22-.014zm0 2a3 3 0 0 0-2.995 2.824L13 5v13.777l-.428.298a6 6 0 1 0 7.062.15l-.205-.15-.428-.298L19 11h-4V9h4V7h-4V5h4a3 3 0 0 0-3-3zm1 11v7.126A4.002 4.002 0 0 1 16 28a4 4 0 0 1-1-7.874V13zm-1 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path></svg></section><span>Heating</span></section></li>
            <li><section class="amenity flex"><section class="icon-svg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M11 1v7l1.898 20.819.007.174c-.025 1.069-.804 1.907-1.818 1.999a2 2 0 0 1-.181.008h-7.81l-.174-.008C1.86 30.87 1.096 30.018 1.096 29l.002-.09 1.907-21L3.001 1zm6 0l.15.005a2 2 0 0 1 1.844 1.838L19 3v7.123l-2 8V31h-2V18.123l.007-.163.02-.162.033-.16L16.719 11H13V1zm11 0a2 2 0 0 1 1.995 1.85L30 3v26a2 2 0 0 1-1.85 1.995L28 31h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7v-2h7v-2h-7V9h7V7h-7V5h7V3h-7V1zM9.088 9h-4.18L3.096 29l.058.002L10.906 29l-.004-.058zM17 3h-2v6h2zM9.002 3H5L5 7h4.004z"></path></svg></section><span>Essentials</span></section></li>
            <li><section class="amenity flex"><section class="icon-svg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M16 2a5 5 0 0 1 1.661 9.717 1.002 1.002 0 0 0-.653.816l-.008.126v.813l13.23 9.052a3 3 0 0 1 1.299 2.279l.006.197a3 3 0 0 1-3 3H3.465a3 3 0 0 1-1.694-5.476L15 13.472v-.813c0-1.211.724-2.285 1.816-2.757l.176-.07a3 3 0 1 0-3.987-3.008L13 7h-2a5 5 0 0 1 5-5zm0 13.211L2.9 24.175A1 1 0 0 0 3.465 26h25.07a1 1 0 0 0 .565-1.825z"></path></svg></section><span>Hangers</span></section></li>
            <li><section class="amenity flex"><section class="icon-svg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 24px; width: 24px; fill: currentcolor;"><path d="M14 27l-.005.2a4 4 0 0 1-3.789 3.795L10 31H4v-2h6l.15-.005a2 2 0 0 0 1.844-1.838L12 27zM10 1c.536 0 1.067.047 1.58.138l.38.077 17.448 3.64a2 2 0 0 1 1.585 1.792l.007.166v6.374a2 2 0 0 1-1.431 1.917l-.16.04-13.554 2.826 1.767 6.506a2 2 0 0 1-1.753 2.516l-.177.008H11.76a2 2 0 0 1-1.879-1.315l-.048-.15-1.88-6.769A9 9 0 0 1 10 1zm5.692 24l-1.799-6.621-1.806.378a8.998 8.998 0 0 1-1.663.233l-.331.008L11.76 25zM10 3a7 7 0 1 0 1.32 13.875l.331-.07L29 13.187V6.813L11.538 3.169A7.027 7.027 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg></section><span>Hair dryer</span></section></li>
          </div>
        </div>
        <div class="reservation-section">
          <div class="reservation flex">
            <div class="reservation-container font-thin">
              <div><div class="reservation-form-header"><p><span class="cost font-md">${{ stay.price }}</span> night </p><div class="rating-review flex"><span class="avg-rating flex font-md"><section class="icon-svg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 14px; width: 14px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg></section> 3.73</span><span>·</span><span class="rev-count link font-md">{{ stay.reviews.length }} reviews</span></div></div><div class="reservation-data"><div class="date-picker"><div class="date-input"><label>CHECK-IN</label><input class="subtitle" fdprocessedid="b60swf"></div><div class="date-input"><label>CHECKOUT</label><input class="subtitle" fdprocessedid="l3c0t"></div></div><div class="guest-input"><label>GUESTS</label><input class="font-thin" placeholder="1 Adult" fdprocessedid="xr56ac"><svg viewBox="0 0 320 512" width="100" title="angle-down"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg></div></div><div class="branded-btn"><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="cell"></div><div class="content"><button class="action-btn" fdprocessedid="mx0lay"><div>Check availabilty</div></button></div></div></div>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="reviews-and-map">
          <div class="reviews">
            <h1 class="flex subheading">
              <div class="rating-review flex">
                <span class="avg-rating flex font-md">
                  <section class="icon-svg">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 14px; width: 14px; fill: currentcolor;"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" fill-rule="evenodd"></path></svg>
                  </section>
                  3.73
                </span>
                <span>·</span>
                <span class="rev-count link font-md">{{ stay.reviews.length }} review</span>
              </div>
            </h1>
            <div class="reviews-cpntainer">
              <div class="reviews-list">
                <li>
                  <div class="title flex">
                    <img src="https://res.cloudinary.com/dgzyxjapv/image/upload/v1670246635/stayby/avatars/female/48.jpg">
                    <div class="flex column">
                      <span class="name font-md">Rafaela</span>
                      <span class="subtitle fs14">jul 2016</span>
                    </div>
                  </div>
                  <div class="txt">
                    Host: Davit gave us a warm welcome and treated us kindly from the very beginning. She offered us help, told us what to visit and even put water, milk and orange juice in the fridge! We could have breakfast at her place which was perfect because she has a little sweet balcony! 
Location: calmly situated in a side street, very near to the Placa Catalunya, the Rambla and the gothic area of Barcelona (very beautiful:)) so you have the old cultural center as well as all the restaurants and bars just nearby.
House/Room: the appartment is not a huge, but I think you have everything you need (beautiful sitting room, balcony, kitchen) in it. You have to share the appartment with Marian so pay attention and don't be too loud in the evening!!
disadvantage: the heat is terrible in summer and there is no air-condition..

                  I would overall recommend it to everybody!! But if you want to party and stay up late, take a hostel
                  or another appartment.
                </div>
              </li>
            </div>
          </div>
        </div>
        <div class="divider"></div>
      </div>
    </div>








  </section>
</section></template>
  


<script>
import { stayService } from '../services/stay.service.local.js'

export default {
  name: 'stay-detail',
  data() {
    return {
      stay: null,
    }
  },
  async created() {
    const { stayId } = this.$route.params
    const stay = await stayService.getById(stayId)
    this.stay = stay
    // console.log(stay)
  },
  methods: {
    goBack() {
      this.$router.push('/stay')
    },
  },
  computed: {
    formattedDate() {
      return new Date(this.stay.createdAt).toLocaleDateString()
    },
    // getLabels(){
    //   return this.stay?.labels.join(', ')
    // }
  },
}
</script>
