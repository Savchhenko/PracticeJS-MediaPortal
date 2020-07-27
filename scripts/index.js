import { radioPlayerInit } from "./radioPlayer.js";
import { musicPlayerInit } from "./musicPlayer.js";
import { videoPlayerInit } from "./videoPlayer.js";

const playerBtn = document.querySelectorAll(".player-btn");
const playerBlock = document.querySelectorAll(".player-block");
const temp = document.querySelector(".temp");

//напишем таб, по которому при нажатии на кнопку открывается сообветствующий блок

const deactivationPlayer = () => {
	temp.style.display = "none";
	playerBtn.forEach((item) => item.classList.remove("active"));
	playerBlock.forEach((item) => item.classList.remove("active"));
};

playerBtn.forEach((btn, i) => {
	//метод forEach запустил внутреннюю функцию столько раз, сколько у нас элементов
	btn.addEventListener("click", () => {
		deactivationPlayer();
		btn.classList.add("activ");
		playerBlock[i].classList.add("active");
	});
});

radioPlayerInit();
musicPlayerInit();
videoPlayerInit();
