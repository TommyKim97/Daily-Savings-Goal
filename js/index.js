const btnResult = document.querySelector(".btn-result");
const btnShare = document.querySelector(".btn-share");
const btnLucky = document.querySelector(".btn-lucky");
const btnClose = document.querySelector(".btn-close");

const modal = document.querySelector("#modal");

let txtGoal, txtDate, txtResult;

btnResult.addEventListener("click", handleResult);
function handleResult(event) {
  const inpGoal = parseInt(document.querySelector(".inp-goal").value);
  const inpDate = document.querySelector(".inp-date");

  const now = new Date();
  const dday = new Date(inpDate.value);

  if (inpGoal === "" || isNaN(inpGoal) || inpDate.value === "") {
    alert("앗, 입력을 하지 않으셨어요!");
  } else if (inpGoal <= 0) {
    alert("목표 금액은 0원보다 큰 금액으로 설정해주세요!");
  } else if (now >= dday) {
    alert("목표 날짜는 현재 이후의 날짜로 설정해주세요!");
  } else {
    handleModal();

    txtGoal = document.querySelector("#textGoal");
    txtDate = document.querySelector("#textDate");
    txtResult = document.querySelector("#textResult");

    const passedTime = now.getTime() - dday.getTime();
    const passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));

    txtGoal.textContent = parseInt(inpGoal);
    txtDate.textContent = inpDate.value;
    txtResult.textContent = `${Math.floor(inpGoal / passedDay) * -1}`;

    modal.style.display = "block";
  }
}

function handleModal() {
  document.querySelector(".tit-modal").textContent =
    "🧐 당신의 티끌이 태산이 되려면 🧐";
  document.querySelector(".sec-result").innerHTML = `
    <p class="txt-result">
        <span id="textDate"></span> 까지<br />
        <span id="textGoal"></span> 원을 모으기 위해서<br />
        매일 <span id="textResult"></span> 원을 모으셔야 합니다!
    </p>
      `;
  btnLucky.style.display = "block";
}

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

btnLucky.addEventListener("click", handlebtnLucky);

function handlebtnLucky(event) {
  document.querySelector(".tit-modal").textContent =
    "🍀 당신을 위한 행운 부적 🍀";
  document.querySelector(".sec-result").innerHTML = `
          <img src="./images/lucky.png" alt="행운 부적 받기" class ="img-lucky"/>
          <p class="txt-lucky">당신의 목표를 응원합니다!<br/>오늘도 행운 가득한 하루 되세요!</p>
      `;
  btnLucky.style.display = "none";
}

btnClose.addEventListener("click", (event) => {
  modal.style.display = "none";
  document.querySelector(".inp-date").value = "";
  document.querySelector(".inp-goal").value = "";
  txtGoal.textContent = "";
  txtDate.textContent = "";
  txtResult.textContent = "";
});
