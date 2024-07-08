function generateLottoNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
      let randomNumber = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
      }
  }
  displayNumbers(numbers);
}

function displayNumbers(numbers) {
  const numbersContainer = document.getElementById('numbers');
  numbersContainer.innerHTML = '';
  numbers.forEach(number => {
      const numberElement = document.createElement('span');
      numberElement.textContent = number + ' ';
      numbersContainer.appendChild(numberElement);
  });

  // SweetAlert2로 알림 표시
  Swal.fire({
      title: '추천된 번호!',
      html: `<p class="text-2xl">${numbers.join(', ')}</p>`,
      icon: 'success',
      confirmButtonText: '확인',
      customClass: {
          confirmButton: 'btn btn-primary',
      }
  });
}
