/* ===============================
   DOM REFERENCES
================================ */
const dayGrid = document.getElementById("dayGrid");
const overlay = document.getElementById("overlay");
const panelTitle = document.getElementById("panelTitle");
const panelTasks = document.getElementById("panelTasks");
const closeBtn = document.getElementById("closeBtn");

/* ===============================
   LEARNING PLAN DATA
================================ */
const plan = {
  "DAY 1": ["What is Java", "Install JDK", "Run Hello World"],
  "DAY 2": ["Program structure", "System.out.println usage", "Print text and numbers"],
  "DAY 3": ["Variables concept", "int and String basics", "Simple variable program"],
  "DAY 4": ["Data types overview", "int and double", "Type understanding"],
  "DAY 5": ["Arithmetic operators", "Simple calculations", "Practice examples"],
  "DAY 6": ["if condition", "Even / Odd logic", "Explain logic in words"],
  "DAY 7": ["if-else concept", "Positive / Negative program", "Week 1 revision"],
  "DAY 8": ["for loop concept", "Print numbers 1 to 10", "Loop flow understanding"],
  "DAY 9": ["while loop concept", "Difference between for and while", "Simple while loop program"],
  "DAY 10": ["do-while loop concept", "When to use do-while", "do-while example program"],
  "DAY 11": ["Sum of numbers logic", "Accumulator concept", "Sum of 1 to N program"],
  "DAY 12": ["Digit extraction logic", "Modulo and division usage", "Count digits in number"],
  "DAY 13": ["Reverse number logic", "Step-by-step dry run", "Reverse number program"],
  "DAY 14": ["Palindrome number concept", "Compare original and reverse", "Week 2 revision"],
  "DAY 15": ["Prime number concept", "Why prime checking needs loop", "Prime number program"],
  "DAY 16": ["Fibonacci series concept", "Series flow understanding", "Fibonacci program using loop"],
  "DAY 17": ["Factorial concept", "Multiplication accumulator logic", "Factorial program"],
  "DAY 18": ["Comparison logic", "Find largest of three numbers", "Dry run examples"],
  "DAY 19": ["Find smallest of three numbers", "Conditional flow practice", "Rewrite without seeing code"],
  "DAY 20": ["Nested loop concept", "How inner loop works", "Basic star pattern"],
  "DAY 21": ["Number pattern concept", "Pattern logic breakdown", "Pattern practice"],
  "DAY 22": ["Array concept", "Why arrays are needed", "Declare and print array"],
  "DAY 23": ["Array input using loop", "Index understanding", "Loop through array"],
  "DAY 24": ["Find max element in array", "Find min element in array", "Practice examples"],
  "DAY 25": ["Reverse array logic", "Index-based thinking", "Reverse array program"],
  "DAY 26": ["String basics", "String methods overview", "String input and output"],
  "DAY 27": ["== vs equals in String", "String comparison logic", "Practice examples"],
  "DAY 28": ["Reverse string logic", "Loop through string", "Reverse string program"],
  "DAY 29": ["Palindrome string concept", "Comparison logic", "Palindrome string program"],
  "DAY 30": ["Week 1–4 full revision", "Rewrite any 5 programs", "Confidence check"],
  "DAY 31": ["What is OOPS", "Why OOPS is needed", "Real-world examples"],
  "DAY 32": ["Class concept", "Object concept", "Create simple class and object"],
  "DAY 33": ["Method concept", "Method calling", "Simple method program"],
  "DAY 34": ["Constructor concept", "Why constructor is used", "Default constructor program"],
  "DAY 35": ["Parameterized constructor", "Difference: default vs parameterized", "Practice constructor programs"],
  "DAY 36": ["this keyword concept", "Why this is needed", "Program using this keyword"],
  "DAY 37": ["Encapsulation concept", "Private variables idea", "Getter and Setter methods"],
  "DAY 38": ["Inheritance concept", "extends keyword", "Parent-child relationship"],
  "DAY 39": ["Types of inheritance (theory)", "Single inheritance focus", "Single inheritance program"],
  "DAY 40": ["Method overriding concept", "Why overriding is needed", "Overriding program"],
  "DAY 41": ["Polymorphism concept", "Compile-time vs Runtime", "Real-life examples"],
  "DAY 42": ["Runtime polymorphism", "Method call flow", "Polymorphism program"],
  "DAY 43": ["super keyword concept", "Access parent variables/methods", "Program using super"],
  "DAY 44": ["OOPS revision", "Explain Class, Inheritance, Polymorphism", "Rewrite 2 OOPS programs"],
  "DAY 45": ["Abstraction concept", "Why abstraction is needed", "Prepare for abstract class"],
  "DAY 46": ["Abstract class concept", "Abstract methods rules", "Simple abstract class program"],
  "DAY 47": ["Interface concept", "Difference: abstract class vs interface", "Simple interface implementation"],
  "DAY 48": ["Multiple inheritance using interface", "implements keyword", "Interface-based program"],
  "DAY 49": ["OOPS full revision", "Encapsulation, Inheritance recap", "Rewrite 2 OOPS programs"],
  "DAY 50": ["Introduction to Collections Framework", "Why collections are needed", "List, Set, Map overview"],
  "DAY 51": ["Array vs ArrayList", "ArrayList creation", "Add and print elements"],
  "DAY 52": ["ArrayList operations", "add, remove, get, size", "Loop through ArrayList"],
  "DAY 53": ["LinkedList concept", "ArrayList vs LinkedList", "LinkedList basic program"],
  "DAY 54": ["Set interface concept", "HashSet basics", "Remove duplicates using HashSet"],
  "DAY 55": ["Map interface concept", "HashMap basics", "Key-value pair program"],
  "DAY 56": ["Iterating HashMap", "keySet, values, entrySet", "Frequency count logic"],
  "DAY 57": ["Exception handling concept", "try-catch block", "Simple exception program"],
  "DAY 58": ["Multiple catch blocks", "finally block", "Exception flow understanding"],
  "DAY 59": ["throw vs throws", "Checked vs unchecked exceptions", "Custom exception (basic)"],
  "DAY 60": ["Introduction to multithreading", "Thread vs Runnable", "Simple thread program"],
  "DAY 61": ["File handling concept", "Why files are needed", "Text file vs binary file"],
  "DAY 62": ["File class usage", "Create file and check existence", "Basic file operations"],
  "DAY 63": ["FileWriter concept", "Write data into file", "Close resources properly"],
  "DAY 64": ["FileReader concept", "Read data from file", "Handle IO exception"],
  "DAY 65": ["BufferedReader usage", "Read file line by line", "File handling revision"],
  "DAY 66": ["JVM, JDK, JRE concepts", "How Java program runs", "Explain flow in your own words"],
  "DAY 67": ["Memory areas in Java", "Stack vs Heap", "Basic garbage collection idea"],
  "DAY 68": ["final vs finally vs finalize", "Why String is immutable", "Important theory questions"],
  "DAY 69": ["Core Java full revision", "Pick weak topics", "Rewrite programs without help"],
  "DAY 70": ["Interview-based questions", "Explain answers aloud", "Confidence & clarity check"],
  "DAY 71": ["Number programs revision", "Prime, palindrome, reverse recap", "Solve without seeing notes"],
  "DAY 72": ["String programs revision", "Reverse, palindrome, vowel count", "Explain logic step by step"],
  "DAY 73": ["Array programs revision", "Max, min, reverse array", "Dry run manually"],
  "DAY 74": ["OOPS concepts revision", "Class, inheritance, polymorphism", "Explain with real-life examples"],
  "DAY 75": ["Collections revision", "List vs Set vs Map", "Choose correct collection"],
  "DAY 76": ["Exception handling revision", "try-catch, throws, custom exception", "Common interview questions"],
  "DAY 77": ["Multithreading basics revision", "Thread lifecycle", "Thread vs Runnable explanation"],
  "DAY 78": ["Mixed coding practice", "Solve 3 random problems", "Focus on logic clarity"],
  "DAY 79": ["Mock interview (self)", "Answer aloud without fear", "Identify weak areas"],
  "DAY 80": ["Weak area improvement", "Final revision", "Confidence check"],
  "DAY 81": ["Core Java basics revision", "Variables, loops, conditions", "Write 2 basic programs"],
  "DAY 82": ["OOPS deep revision", "Explain encapsulation, inheritance", "Write one OOPS program"],
  "DAY 83": ["Collections deep revision", "ArrayList, HashMap use-cases", "Solve 2 collection problems"],
  "DAY 84": ["Exception handling revision", "Real-life exception scenarios", "Explain try-catch flow"],
  "DAY 85": ["Multithreading revision", "Thread lifecycle explanation", "Simple thread program"],
  "DAY 86": ["File handling revision", "Read/write file programs", "Handle IO exceptions"],
  "DAY 87": ["System understanding", "JVM memory flow", "Explain program execution"],
  "DAY 88": ["Full mock interview", "Time-bound coding", "Answer confidently"],
  "DAY 89": ["Mistake analysis", "Fix weak topics", "Short notes preparation"],
  "DAY 90": ["Final mock interview", "Self-confidence check", "READY FOR INTERVIEWS"]
};

/* ===============================
   INITIALIZE PROGRESS (FIXED)
================================ */
let progress = JSON.parse(localStorage.getItem("javaPlan")) || {};

// Initialize missing days
Object.keys(plan).forEach(day => {
  if (!progress[day]) {
    progress[day] = plan[day].map(task => ({
      text: task,
      done: false,
      date: null
    }));
  }
});

localStorage.setItem("javaPlan", JSON.stringify(progress));

/* ===============================
   RENDER DAY GRID
================================ */
function renderGrid() {
  if (!dayGrid) return;

  dayGrid.innerHTML = "";

  Object.keys(plan).forEach(day => {
    const box = document.createElement("div");
    box.className = "day-box";
    box.textContent = day;

    const tasks = progress[day];
    const total = tasks.length;
    const done = tasks.filter(t => t.done).length;
    const ratio = total === 0 ? 0 : done / total;

    // Color coding based on completion
    if (ratio === 1) {
      box.classList.add("complete"); // Green - 100%
    } else if (ratio >= 0.6) {
      box.classList.add("medium"); // Yellow - 60%+
    } else if (ratio > 0) {
      box.classList.add("partial"); // Orange - some done
    }
    // White - not started

    box.addEventListener("click", () => openPanel(day));
    dayGrid.appendChild(box);
  });
}

/* ===============================
   OPEN PANEL (TASK DETAILS)
================================ */
function openPanel(day) {
  panelTitle.textContent = day;
  panelTasks.innerHTML = "";

  progress[day].forEach((task, index) => {
    const label = document.createElement("label");
    label.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      task.date = checkbox.checked ? new Date().toDateString() : null;
      localStorage.setItem("javaPlan", JSON.stringify(progress));
      renderGrid();
      openPanel(day); // Refresh panel
    });

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(task.text));
    panelTasks.appendChild(label);
  });

  if (overlay) {
    overlay.classList.remove("hidden");
  }
}

/* ===============================
   CLOSE PANEL
================================ */
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    if (overlay) {
      overlay.classList.add("hidden");
    }
  });
}

if (overlay) {
  overlay.addEventListener("click", e => {
    if (e.target === overlay) {
      overlay.classList.add("hidden");
    }
  });
}

/* ===============================
   INITIALIZE ON PAGE LOAD
================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderGrid();
});
