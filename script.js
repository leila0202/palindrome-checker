const checkButton = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

const checkPalindrome = () => {
  if (input.value === "") {
    alert("Please input a value!");
    input.focus();
    return;
  }
  const orig = input.value;

  const clean = cleanInput(orig.toLowerCase()).split("");
  const rev = [...clean].reverse();
  const isPalindrome = rev.join() === clean.join();
  if (isPalindrome) {
    result.textContent = `${orig} is a palindrome`;
  } else {
    result.textContent = `${orig} is not a palindrome`;
  }
};

const cleanInput = (txt) => {
  const regex = /[^a-z0-9]/g;
  return txt.replace(regex, "");
};

checkButton.addEventListener("click", checkPalindrome);
