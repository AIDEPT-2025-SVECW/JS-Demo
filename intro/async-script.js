// =====================================================
// ASYNC FILE
// Might run BEFORE or AFTER defer depending on load time
// =====================================================

console.log("Async script executed");

// Try modifying HTML
let el = document.getElementById("output");

if (el) {
    el.innerText = "Async updated this text!";
} else {
    console.log("Async: HTML not ready yet");
}
