// Function: takes an array of 5 marks, returns { total, average, grade }
function calculateGrade(marks) {
  // Validation
  if (!Array.isArray(marks) || marks.length !== 5) {
    throw new Error("Please provide exactly 5 marks.");
  }
  if (marks.some(m => isNaN(m) || m < 0 || m > 100)) {
    throw new Error("All marks must be numbers between 0 and 100.");
  }

  // Total & average
  const total = marks.reduce((sum, m) => sum + m, 0);
  const average = total / marks.length;

  // Grade logic
  let grade;
  if (average >= 90) grade = "A";
  else if (average >= 80) grade = "B";
  else if (average >= 70) grade = "C";
  else if (average >= 60) grade = "D";
  else grade = "F";

  return { total, average, grade };
}

// ---------------------------
// DOM Handling
// ---------------------------
const btn = document.getElementById("calcBtn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  try {
    // Get marks from inputs
    const marks = [
      Number(document.getElementById("sub1").value),
      Number(document.getElementById("sub2").value),
      Number(document.getElementById("sub3").value),
      Number(document.getElementById("sub4").value),
      Number(document.getElementById("sub5").value),
    ];

    // Use reusable function
    const { total, average, grade } = calculateGrade(marks);

    // Show results
    result.textContent = `Total: ${total} | Average: ${average.toFixed(2)} | Grade: ${grade}`;

    // Color feedback
    if (grade === "A") result.style.color = "green";
    else if (grade === "B" || grade === "C") result.style.color = "orange";
    else result.style.color = "red";
  } catch (error) {
    result.textContent = error.message;
    result.style.color = "red";
  }
});
