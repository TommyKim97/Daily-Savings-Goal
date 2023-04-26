const btnResult = document.querySelector(".btn-result");
const btnShare = document.querySelector(".btn-share");
const btnLucky = document.querySelector(".btn-lucky");
const btnClose = document.querySelector(".btn-close");

const txtGoal = document.querySelector("#textGoal");
const txtDate = document.querySelector("#textDate");
const txtResult = document.querySelector("#textResult");

const modal = document.querySelector("#modal");

btnResult.addEventListener("click", (event) => {
  const inpGoal = parseInt(document.querySelector(".inp-goal").value);
  const inpDate = document.querySelector(".inp-date");

  const now = new Date();
  const dday = new Date(inpDate.value);

  if (inpGoal === "" || isNaN(inpGoal) || inpDate.value === "") {
    alert("앗, 입력을 하지 않으셨어요!");
  } else if (inpGoal <= 0) {
    alert("목표 금액은 0원보다 큰 금액으로 설정해주세요!");
  } else if (now.getDate() >= dday.getDate()) {
    alert("목표 날짜는 현재 이후의 날짜로 설정해주세요!");
  } else {
    const passedTime = now.getTime() - dday.getTime();
    const passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));

    txtGoal.textContent = parseInt(inpGoal);
    txtDate.textContent = inpDate.value;
    txtResult.textContent = `${Math.floor(inpGoal / passedDay) * -1}`;

    modal.style.display = "block";
  }
});

btnClose.addEventListener("click", (event) => {
  modal.style.display = "none";
  document.querySelector(".inp-date").value = "";
  document.querySelector(".inp-goal").value = "";
  txtGoal.textContent = "";
  txtDate.textContent = "";
  txtResult.textContent = "";
});

btnShare.addEventListener("click", (event) => {
  let url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert(
        "URL이 복사되었습니다. 이 홈페이지를 소개해주고 싶은 친구에게 전해주세요!"
      );
    })
    .catch((err) => {
      alert("URL이 복사되지 않았습니다. 호환되는 브라우저가 아닙니다.");
      console.log(err);
    });
});

btnLucky.addEventListener("click", (event) => {
  document.querySelector(".tit-modal").textContent =
    "🍀 당신을 위한 행운 부적 🍀";
  document.querySelector(".sec-result").innerHTML = `
          <img src="./images/lucky.png" alt="행운 부적 받기" class ="img-lucky"/>
          <p class="txt-lucky">당신의 목표를 응원합니다!<br/>오늘도 행운 가득한 하루 되세요!</p>
      `;
  btnLucky.style.display = "none";
});
