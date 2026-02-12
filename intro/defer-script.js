// =====================================================
// DEFER FILE
// Will always run AFTER HTML parsing is finished
// =====================================================

console.log("Defer script executed");

// HTML is guaranteed to be ready
document.getElementById("output").innerText =
    "Defer updated this text after HTML loaded!";
