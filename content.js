let intervalId;
let refreshCount = 0;

function startRefresh(timeInMinutes) {
  intervalId = setInterval(() => {
    chrome.tabs.reload();
    refreshCount++;
    updateRefreshCount();
  }, timeInMinutes * 60 * 1000);
}

function stopRefresh() {
  clearInterval(intervalId);
}

function updateRefreshCount() {
  document.getElementById("refreshCount").innerText = refreshCount;
}

function myFunction() {
  document.getElementById("fiveMinutes").addEventListener("click",startRefresh(5));
  document.getElementById("tenMinutes").addEventListener("click",  startRefresh(10));
  document.getElementById("fifteenMinutes").addEventListener("click", startRefresh(15));
  document.getElementById("twentyMinutes").addEventListener("click",startRefresh(20));
  document.getElementById("twentyFiveMinutes").addEventListener("click", startRefresh(25));
  document.getElementById("thirtyMinutes").addEventListener("click",startRefresh(30));
  document.getElementById("stopButton").addEventListener("click", stopRefresh);
}