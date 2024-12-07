import { fft } from 'mathjs';
import Chart from 'chart.js/auto';

// بيانات افتراضية في النطاق الزمني
const data = [1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1];

// تحويل البيانات إلى النطاق الترددي باستخدام FFT
function convertToFrequencyDomain(data) {
  const freqDomain = fft(data);
  
  // استخراج القيم المطلقة للقنوات الترددية
  const magnitudes = freqDomain.map(freq => Math.sqrt(freq.re ** 2 + freq.im ** 2));

  // عرض القنوات الترددية باستخدام Chart.js
  const ctx = document.getElementById('frequencyChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({ length: magnitudes.length }, (_, i) => i + 1), // تسميات القنوات
      datasets: [{
        label: 'القنوات الترددية',
        data: magnitudes,
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
      }],
    },
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'رقم القناة',
          },
        },
        y: {
          title: {
            display: true,
            text: 'السعة',
          },
        },
      },
    },
  });

  return freqDomain;
}

// تحويل البيانات إلى النطاق الترددي
const frequencyDomain = convertToFrequencyDomain(data);