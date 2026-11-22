const translations = {
  fa: {
    workspace:"فضای کاری",overview:"نمای کلی",dnsLab:"آزمایشگاه DNS",configLab:"مدیریت کانفیگ",networkLab:"ابزارهای شبکه",settings:"تنظیمات",personalWorkspace:"فضای شخصی",localPreview:"پیش‌نمایش محلی",systemStandby:"سیستم آماده‌به‌کار",controlCenter:"GAMING NETWORK CONTROL CENTER",welcome:"مرکز کنترل",welcomeSub:"ابزارهای DNS و مدیریت کانفیگ بازی‌های آنلاین، در یک فضای یکپارچه.",phaseOne:"مرحله اول · راه‌اندازی",platformStatus:"وضعیت پلتفرم",buildYourConnection:"اتصال بهتر، با کنترل بیشتر.",heroText:"ابزارهای شبکه‌ات را مدیریت کن؛ از بررسی DNS تا آماده‌سازی کانفیگ‌های اتصال.",openDnsLab:"ورود به آزمایشگاه DNS",quickAccess:"QUICK ACCESS",toolsAndModules:"ابزارها و ماژول‌ها",modulesCount:"۴ ماژول اصلی",dnsDescription:"بررسی و مدیریت DNSهای بازی",configDescription:"پروفایل‌ها و تنظیمات اتصال",networkDescription:"آزمایش و تحلیل وضعیت شبکه",settingsDescription:"زبان و ترجیحات محیط",engineStatus:"ENGINE STATUS",systemModules:"وضعیت موتورهای سیستم",initializing:"در حال راه‌اندازی",dnsEngineDesc:"آماده اتصال به سرویس‌های معتبر",configEngineDesc:"نیازمند زیرساخت سرور واقعی",notConnected:"متصل نشده",notConfigured:"پیکربندی نشده",honestStatus:"وضعیت واقعی، بدون عددسازی",honestText:"هنوز هیچ DNS یا سروری تست نشده است. نتایج و سرعت‌ها فقط پس از پیاده‌سازی و اندازه‌گیری واقعی نمایش داده می‌شوند.",dnsPageIntro:"مدیریت و بررسی سرویس‌های DNS برای بازی‌های آنلاین.",inDevelopment:"در حال توسعه",dnsEngineNext:"موتور DNS در مرحله پیاده‌سازی است",dnsEngineNextSub:"در این بخش فهرست سرویس‌های معتبر، آزمون پاسخ‌دهی و خروجی تنظیمات اضافه می‌شود. تا پیش از تست واقعی، هیچ نتیجه‌ای ساختگی نمایش داده نمی‌شود.",backToOverview:"بازگشت به نمای کلی",configPageIntro:"مدیریت پروفایل‌ها و فایل‌های تنظیمات اتصال.",configEngineNext:"موتور کانفیگ در انتظار زیرساخت واقعی است",configEngineNextSub:"ساخت کانفیگ WireGuard قابل اتصال به سرور واقعی نیاز دارد. در این بخش فقط پس از فراهم شدن زیرساخت، پروفایل واقعی تولید خواهد شد.",networkPageIntro:"اندازه‌گیری و تحلیل رفتار اتصال شبکه.",networkNext:"ابزارهای سنجش شبکه در راه‌اند",networkNextSub:"تست‌های قابل اتکا باید از دستگاه و با روش اندازه‌گیری مشخص اجرا شوند؛ پینگ DNS با پینگ داخل بازی یکسان نیست.",settingsPageIntro:"تنظیمات پایه محیط Game DNS Pro.",interfaceLanguage:"زبان رابط کاربری",languageDesc:"زبان نمایش پنل را انتخاب کن.",projectVersion:"نسخه پروژه",foundation:"مرحله پایه",configShort:"کانفیگ",networkShort:"شبکه"
  },
  en: {
    workspace:"WORKSPACE",overview:"Overview",dnsLab:"DNS Lab",configLab:"Config Manager",networkLab:"Network Tools",settings:"Settings",personalWorkspace:"Personal workspace",localPreview:"Local preview",systemStandby:"System standing by",controlCenter:"GAMING NETWORK CONTROL CENTER",welcome:"Control center",welcomeSub:"DNS tools and configuration management for online games, in one unified workspace.",phaseOne:"PHASE 01 · FOUNDATION",platformStatus:"PLATFORM STATUS",buildYourConnection:"Better connections. More control.",heroText:"Manage your network toolkit — from DNS inspection to connection profile preparation.",openDnsLab:"Open DNS Lab",quickAccess:"QUICK ACCESS",toolsAndModules:"Tools & modules",modulesCount:"4 core modules",dnsDescription:"Inspect and manage gaming DNS",configDescription:"Connection profiles and settings",networkDescription:"Test and analyze network behavior",settingsDescription:"Language and workspace preferences",engineStatus:"ENGINE STATUS",systemModules:"System engine status",initializing:"Initializing",dnsEngineDesc:"Ready for trusted resolver integration",configEngineDesc:"Requires real server infrastructure",notConnected:"Not connected",notConfigured:"Not configured",honestStatus:"Real status. No fabricated metrics.",honestText:"No DNS resolver or server has been tested yet. Results and speeds will appear only after real implementation and measurement.",dnsPageIntro:"Manage and inspect DNS services for online games.",inDevelopment:"IN DEVELOPMENT",dnsEngineNext:"DNS engine implementation is next",dnsEngineNextSub:"This area will include trusted resolvers, response testing, and configuration exports. No fabricated results will be shown before real tests.",backToOverview:"Back to overview",configPageIntro:"Manage connection profiles and configuration files.",configEngineNext:"Config engine requires real infrastructure",configEngineNextSub:"A working WireGuard profile requires a real server. This area will generate real profiles only after infrastructure is available.",networkPageIntro:"Measure and analyze network connection behavior.",networkNext:"Network measurement tools are coming",networkNextSub:"Reliable tests must run on-device with a defined measurement method. DNS lookup latency is not the same as in-game ping.",settingsPageIntro:"Basic Game DNS Pro workspace settings.",interfaceLanguage:"Interface language",languageDesc:"Choose the language used in the panel.",projectVersion:"Project version",foundation:"Foundation",configShort:"Config",networkShort:"Network"
  }
};
let currentLanguage = "fa";
let currentPage = "overview";
const pageKeys = {overview:"overview",dns:"dnsLab",configs:"configLab",network:"networkLab",settings:"settings"};
function applyLanguage(lang){
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.body.dir = lang === "fa" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll("#language-toggle,#language-toggle-settings").forEach(btn=>{
    btn.innerHTML = lang === "fa" ? 'EN <span>⌄</span>' : 'FA <span>⌄</span>';
  });
  document.title = "Game DNS Pro";
  updatePageLabel();
}
function updatePageLabel(){
  const label = document.getElementById("page-name");
  if(label && translations[currentLanguage][pageKeys[currentPage]]) label.textContent = translations[currentLanguage][pageKeys[currentPage]];
}
function navigate(page){
  if(!document.getElementById("page-"+page)) return;
  currentPage = page;
  document.querySelectorAll(".page").forEach(p=>p.classList.toggle("active",p.id==="page-"+page));
  document.querySelectorAll("[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  updatePageLabel();
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-page]").forEach(btn=>btn.addEventListener("click",()=>navigate(btn.dataset.page)));
document.querySelectorAll("[data-go]").forEach(btn=>btn.addEventListener("click",()=>navigate(btn.dataset.go)));
function toggleLanguage(){applyLanguage(currentLanguage==="fa"?"en":"fa")}
document.getElementById("language-toggle").addEventListener("click",toggleLanguage);
document.getElementById("language-toggle-settings").addEventListener("click",toggleLanguage);
applyLanguage("fa");