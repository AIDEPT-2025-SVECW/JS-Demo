// =====================================================
// EXTERNAL JAVASCRIPT FILE
// Code here can be reused across many HTML pages
// =====================================================

// This function is called from index.html button
function showCricketCaptain() {

    // Change the name and test
    let captain = "Rohit Sharma";

    // Update HTML content
    document.getElementById("captainOutput").innerText =
        "Indian Cricket Team Captain: " + captain;
}
