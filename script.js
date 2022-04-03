let date = new Date();
document.getElementById("date").innerHTML = date.toDateString();
document.getElementById("date").style.fontSize = "1.40rem";
let a;
let time;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
setInterval(() => {
  a = new Date();
  a.getHours();
  date = a.toLocaleDateString(undefined, options);
  Time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
  document.getElementById("time").innerHTML = Time;
  document.getElementById("time").style.fontSize = "1.40rem";
}, 1000);
function myFunction(a, b, c, d) {
  let myDate = new Date().getDate();
  if (a == myDate) {
    document.getElementById("shari").innerHTML = b;
    document.getElementById("shari").style.fontSize = "1.40rem";
    document.getElementById("namaj").innerHTML = c;
    document.getElementById("namaj").style.fontSize = "1.40rem";
    document.getElementById("efter").innerHTML = d;
    document.getElementById("efter").style.fontSize = "1.40rem";
  }
}
myFunction(3, "04:36", "04:42", "06:25");
myFunction(4, "04:34", "04:40", "06:26");
myFunction(5, "4:33", "04:39", "06:27");
myFunction(6, "04:32", "04:38", "06:27");
myFunction(7, "04:31", "04:37", "06:28");
myFunction(8, "04:30", "04:36", "06:28");
myFunction(9, "04:29", "04:35", "06:28");
myFunction(10, "04:28", "04:34", "06:29");
myFunction(11, "04:27", "04:33", "06:29");
myFunction(12, "04:26", "04:32", "06:29");
myFunction(13, "04:25", "04:31", "06:30");
myFunction(14, "04:24", "04:30", "06:30");
myFunction(15, "04:23", "04:29", "06:30");
myFunction(16, "04:22", "04:28", "06:31");
myFunction(17, "04:21", "04:27", "06:31");
myFunction(18, "04:20", "04:26", "06:32");
myFunction(19, "04:19", "04:25", "06:32");
myFunction(20, "04:18", "04:24", "06:32");
myFunction(21, "04:17", "04:23", "06:33");
myFunction(22, "04:16", "04:22", "06:33");
myFunction(23, "04:15", "04:21", "06:34");
myFunction(24, "04:14", "04:20", "06:34");
myFunction(25, "04:13", "04:19", "06:35");
myFunction(26, "04:12", "04:18", "06:35");
myFunction(27, "04:11", "04:17", "06:36");
myFunction(28, "04:10", "04:16", "06:36");
myFunction(29, "04:09", "04:15", "06:37");
myFunction(30, "04:08", "04:14", "06:37");
myFunction(1,"04:07", "04:13", "06:38");
myFunction(2,'04:06','04:12','06:38');

var typing = new Typed("#typing-01", {
  strings: [
    "আবহাওয়া অফিস ঢাকা থেকে প্রাপ্ত শুধুমাত্র মেহেরপুর জেলার জন্য ২০২২",
  ],
  typeSpeed: 20,
  backSpeed: 60,
  loop: false,
});
