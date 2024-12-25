// script.js
function getNextSunday() {
    const now = new Date();
    const nextSunday = new Date();
    nextSunday.setDate(now.getDate() + (7 - now.getDay()) % 7); // Hitung hari Minggu berikutnya
    nextSunday.setHours(8, 0, 0, 0); // Set pukul 08:00 pagi
    return nextSunday;
}

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const eventDate = getNextSunday();
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        countdownElement.textContent = "Acara telah dimulai! Selamat bersenang-senang! 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
}

// Perbarui setiap 1 detik
setInterval(updateCountdown, 1000);
