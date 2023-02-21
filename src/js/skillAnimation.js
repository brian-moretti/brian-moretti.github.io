function circularAnimation() {
  let skillElement = document.querySelectorAll(".skill");

  for (let i = 0; i < skillElement.length; i++) {
    skillElement[i].style.animationDelay = i * 2 + "s";
  }
  for (let singleSkill of skillElement) {
    singleSkill.style.animationDuration = skillElement.length * 2 + "s";
  }
}

export { circularAnimation };
