const healthTips = [
    "Stay hydrated and eat iron-rich foods during your period.",
    "Exercise regularly to reduce PMS symptoms.",
    "Get enough sleep and manage stress to ease period discomfort.",
    "Avoid excessive caffeine and alcohol during your period.",
    "Consume foods rich in vitamin C to help with iron absorption.",
    "Try yoga or light stretching to relieve menstrual cramps.",
    "Keep track of your cycle to understand your body better.",
    "Drink herbal teas like ginger and chamomile to ease cramps.",
    "Maintain a balanced diet with plenty of fiber.",
    "Avoid processed foods and opt for whole grains."
];

const healthImages = [
    "https://raw.githubusercontent.com/jsu622jejej/Health24h/refs/heads/main/Period-Fasting-scaled.jpg",
    "https://raw.githubusercontent.com/jsu622jejej/Health24h/refs/heads/main/pcos-and-depression.jpg",
    "https://raw.githubusercontent.com/jsu622jejej/Health24h/refs/heads/main/main_PremenstrualDysphoricDisorderSymptomsCauseTreatment.jpg",
    "https://raw.githubusercontent.com/jsu622jejej/Health24h/refs/heads/main/1677768714.jpg",
    "https://raw.githubusercontent.com/jsu622jejej/Health24h/refs/heads/main/Menstrual-Period-Irregularities-2-img-1.png"
];

let currentImageIndex = 0;

function calculate() {
    const lastPeriod = new Date(document.getElementById("lastPeriod").value);
    const cycleLength = 28;

    if (isNaN(lastPeriod.getTime())) {
        alert("Please enter a valid date.");
        return;
    }

    const nextPeriod = new Date(lastPeriod);
    nextPeriod.setDate(lastPeriod.getDate() + cycleLength);

    const ovulationDate = new Date(lastPeriod);
    ovulationDate.setDate(lastPeriod.getDate() + (cycleLength - 14));

    const fertileStart = new Date(ovulationDate);
    fertileStart.setDate(ovulationDate.getDate() - 5);

    const fertileEnd = new Date(ovulationDate);
    fertileEnd.setDate(ovulationDate.getDate() + 1);

    document.getElementById("nextPeriod").textContent = `Next Period: ${nextPeriod.toDateString()}`;
    document.getElementById("ovulationDate").textContent = `Ovulation Date: ${ovulationDate.toDateString()}`;
    document.getElementById("fertileWindow").textContent = `Fertile Window: ${fertileStart.toDateString()} to ${fertileEnd.toDateString()}`;

    document.getElementById("result").classList.remove("hidden");

    showRandomHealthTip();
    startImageRotation();
}

function showRandomHealthTip() {
    const randomIndex = Math.floor(Math.random() * healthTips.length);
    document.getElementById("healthTip").textContent = healthTips[randomIndex];
}

function startImageRotation() {
    document.getElementById("healthImage").src = healthImages[currentImageIndex];

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % healthImages.length;
        document.getElementById("healthImage").src = healthImages[currentImageIndex];
    }, 5000);
}
