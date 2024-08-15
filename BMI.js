// script.js

// Mengambil elemen dari DOM
const bmiForm = document.getElementById('bmi-form');
const resultSection = document.getElementById('result');
const bmiValueText = document.getElementById('bmi-value');
const bmiCategoryText = document.getElementById('bmi-category');
const bmiDescriptionText = document.getElementById('bmi-description');
const downloadBmiLink = document.getElementById('download-bmi');

// Fungsi untuk menghitung BMI
function calculateBMI(weight, height) {
    height = height / 100; // konversi tinggi dari cm ke meter
    return (weight / (height * height)).toFixed(1);
}

// Fungsi untuk menentukan kategori BMI
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Kekurangan Berat Badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Berat Badan Normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Berat Badan Berlebih';
    } else {
        return 'Obesitas';
    }
}

// Fungsi untuk memberikan deskripsi BMI
function getBMIDescription(bmi) {
    if (bmi < 18.5) {
        return 'Anda berada dalam kategori kekurangan berat badan. Disarankan untuk menambah asupan kalori dan melakukan konsultasi dengan ahli gizi.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Selamat! Anda memiliki berat badan normal. Tetap jaga pola makan dan gaya hidup sehat.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Anda berada dalam kategori overweight. Disarankan untuk mulai mengatur pola makan dan rutin berolahraga.';
    } else {
        return 'Anda berada dalam kategori obesitas. Segera konsultasikan dengan dokter untuk mendapatkan penanganan lebih lanjut.';
    }
}

// Event listener untuk form submit
bmiForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil nilai dari form
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validasi input form
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Masukkan berat dan tinggi badan yang valid.');
        return;
    }

    // Menghitung BMI
    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);
    const description = getBMIDescription(bmi);

    // Menampilkan hasil
    bmiValueText.textContent = bmi;
    bmiCategoryText.textContent = category;
    bmiDescriptionText.textContent = description;

    // Menampilkan section hasil
    resultSection.style.display = 'block';

    // Mengaktifkan link download jika ingin
    downloadBmiLink.style.display = 'block';
    downloadBmiLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`BMI Anda: ${bmi}\nKategori: ${category}\n${description}`));
    downloadBmiLink.setAttribute('download', 'hasil_bmi.txt');
});
