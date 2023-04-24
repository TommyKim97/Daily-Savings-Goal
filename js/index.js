const btnResult = document.querySelector(".btn-result");
const btnShare = document.querySelector(".btn-share");
const btnLucky = document.querySelector(".btn-lucky");
const btnClose = document.querySelector(".btn-close");

const modal = document.querySelector("#modal");

btnResult.addEventListener("click", (event) => {
  const inpGoal = parseInt(document.querySelector(".inp-goal").value);
  const inpDate = document.querySelector(".inp-date");

  const txtDate = document.querySelector("#textDate");
  const txtGoal = document.querySelector("#textGoal");
  const txtResult = document.querySelector("#textResult");

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
  document.querySelectorAll("input").value = null;
});

btnClose.addEventListener("click", (event) => {
  modal.style.display = "none";
  inpDate.value = null;
  inpGoal = null;
});
