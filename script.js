// Fungsi untuk membuka/menutup Drawer Menu
function toggleDrawer() {
  const drawer = document.getElementById("menuDrawer");
  if (drawer.classList.contains("translate-y-full")) {
    drawer.classList.remove(
      "translate-y-full",
      "opacity-0",
      "pointer-events-none",
    );
    drawer.classList.add("translate-y-0", "opacity-100");
  } else {
    drawer.classList.add(
      "translate-y-full",
      "opacity-0",
      "pointer-events-none",
    );
    drawer.classList.remove("translate-y-0", "opacity-100");
  }
}

// Fungsi untuk navigasi Tab (Data Diri, Pengalaman, Dokumentasi)
function switchTab(tabId) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach((content) => content.classList.remove("active"));

  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("border-white", "text-white");
    btn.classList.add("border-transparent", "text-gray-400");
  });

  const activeContent = document.getElementById(tabId);
  if (activeContent) activeContent.classList.add("active");

  const activeBtn = document.getElementById(`tab-btn-${tabId}`);
  if (activeBtn) {
    activeBtn.classList.remove("border-transparent", "text-gray-400");
    activeBtn.classList.add("border-white", "text-white");
  }
}

// Efek Mengetik (Typing Text)
const textToType = "SIAP BEKERJA SAMA & MEMBANGUN SOLUSI DIGITAL PROFESIONAL";
const typingElement = document.getElementById("typing-text");
let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    typingElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 60);
  }
}
document.addEventListener("DOMContentLoaded", typeText);

// Color Picker untuk mengubah warna glow dinamis
document.getElementById("primaryColor").addEventListener("input", (e) => {
  document.documentElement.style.setProperty("--glow-color", e.target.value);
});

document.getElementById("secondaryColor").addEventListener("input", (e) => {
  document.documentElement.style.setProperty(
    "--glow-color-secondary",
    e.target.value,
  );
});
