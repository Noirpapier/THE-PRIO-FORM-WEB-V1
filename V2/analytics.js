const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || "G-5RDVWDCCPR";
const isValidMeasurementId = /^G-[A-Z0-9]+$/i.test(measurementId || "");

if (isValidMeasurementId) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    anonymize_ip: true,
    send_page_view: false,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.append(script);
}

export function trackPageView(path, title) {
  if (!isValidMeasurementId || typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_location: new URL(path, window.location.origin).href,
    page_path: path,
    page_title: title,
  });
}
