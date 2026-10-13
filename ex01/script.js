function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
function checkAccess(age, hasticket) {
    if (typeof age !== "number" || typeof hasticket !== "boolean") {
        return false;
    }
        return (age >= 18) && hasticket;
    }
    console.log("--- Testing calculateGrade function ---");
    console.log("Score: 95, Grade:", calculateGrade(95)); // Expected: A
    console.log("Score: 85, Grade:", calculateGrade(85)); // Expected: B
    console.log("Score: 75, Grade:", calculateGrade(75)); // Expected: C
    console.log("Score: 65, Grade:", calculateGrade(65)); // Expected: D
    console.log("Score: 55, Grade:", calculateGrade(55)); // Expected: F
    console.log("invalid (text):", calculateGrade("abc"));

    console.log("\n--- Testing checkAccess---");
    console.log("Age: 20, Has Ticket: true, Access:", checkAccess(20, true));
    console.log("Age: 17, Has Ticket: true, Access:", checkAccess(17, true));
    console.log("Age: 25, Has Ticket: false, Access:", checkAccess(25, false));