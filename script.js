async function optimizeResume() {
  const input = document.getElementById("resumeInput").value;

  const response = await fetch("http://localhost:3000/optimize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ resume: input }),
  });

  const data = await response.json();
  document.getElementById("output").innerText = data.result;
}
