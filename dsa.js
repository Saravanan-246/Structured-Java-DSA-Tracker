const dayGrid = document.getElementById("dayGrid");
const overlay = document.getElementById("overlay");
const panelTitle = document.getElementById("panelTitle");
const panelTasks = document.getElementById("panelTasks");
const closeBtn = document.getElementById("closeBtn");

/* ===============================
   DSA PLAN (DAY 1–7)
================================ */
const dsaPlan = {

  "DAY 1": [
    "What is DSA (Data Structures & Algorithms)",
    "Why DSA is important for jobs",
    "How DSA improves problem-solving",
    "Mindset: think before coding"
  ],

  "DAY 2": [
    "What is an algorithm",
    "Steps to solve a problem",
    "Write solution in plain English",
    "Convert English steps to code idea"
  ],

  "DAY 3": [
    "Time complexity concept (intro)",
    "Why performance matters",
    "Count simple loop operations",
    "Understand O(1) and O(n)"
  ],

  "DAY 4": [
    "Arrays introduction",
    "Why arrays are needed",
    "Index concept (0-based index)",
    "Accessing elements"
  ],

  "DAY 5": [
    "Array traversal",
    "Loop through array",
    "Find sum of array elements",
    "Dry run manually"
  ],

  "DAY 6": [
    "Find maximum element in array",
    "Find minimum element in array",
    "Comparison logic understanding"
  ],

  "DAY 7": [
    "Revision Day 1–6",
    "Solve 3 simple array problems",
    "Explain logic aloud (very important)",
    "Confidence check"
  ],

"DAY 8": [
  "Array problems revision",
  "Find sum of array",
  "Find max and min again (speed practice)",
  "Think logic before code"
],

"DAY 9": [
  "Reverse array logic",
  "Reverse array using loop",
  "Dry run step by step",

  "IMPORTANT: After finishing today, write the logic in words in a notebook. \
This habit will help you in interviews and remove fear forever."
],

"DAY 10": [
  "Count elements in array",
  "Frequency of elements (basic)",
  "Understand counting logic"
],

"DAY 11": [
  "Second largest element",
  "Why simple max is not enough",
  "Comparison logic practice"
],

"DAY 12": [
  "Arrays recap",
  "Solve 3 array problems without seeing notes",
  "Confidence building"
],

"DAY 13": [
  "Strings introduction",
  "What is a String",
  "String traversal using loop"
],

"DAY 14": [
  "Reverse string logic",
  "Palindrome string concept",
  "Compare characters logic"
],

"DAY 15": [
  "String problems practice",
  "Count vowels in string",
  "Character checking logic"
],

"DAY 16": [
  "Time complexity deeper",
  "Understand O(n), O(n²)",
  "Analyze nested loops"
],

"DAY 17": [
  "Two pointer technique introduction",
  "Why two pointers are used",
  "Simple examples"
],

"DAY 18": [
  "Two pointer problems",
  "Reverse string using two pointers",
  "Improve logic speed"
],

"DAY 19": [
  "Revision Day 13–18",
  "Solve mixed array + string problems",
  "Explain solution aloud"
],

"DAY 20": [
  "Full revision Day 8–19",
  "Solve 5 problems calmly",
  "Mindset check: no fear, only logic"
],
"DAY 21": [
  "What is recursion",
  "Why recursion is used",
  "Base condition concept",
  "Understand call stack (theory only)"
],

"DAY 22": [
  "Simple recursion examples",
  "Print numbers using recursion",
  "Dry run recursion step by step"
],

"DAY 23": [
  "Recursion problems",
  "Factorial using recursion",
  "Sum of numbers using recursion"
],

"DAY 24": [
  "Recursion mindset practice",
  "Trace recursive calls on paper",
  "No coding rush today"
],

"DAY 25": [
  "Binary search concept",
  "Why binary search needs sorted array",
  "Understand mid logic"
],

"DAY 26": [
  "Binary search implementation",
  "Search element in sorted array",
  "Time complexity understanding"
],

"DAY 27": [
  "Binary search variations",
  "First occurrence",
  "Last occurrence"
],

"DAY 28": [
  "Binary search revision",
  "Solve 3 binary search problems",
  "Confidence check"
],

"DAY 29": [
  "Stack introduction",
  "What is stack (LIFO)",
  "Push and pop concept"
],

"DAY 30": [
  "Stack implementation (using array)",
  "Stack operations practice",
  "Real-life examples"
],

"DAY 31": [
  "Stack problems",
  "Reverse string using stack",
  "Understand problem flow"
],

"DAY 32": [
  "Valid parentheses problem",
  "Why stack is needed",
  "Dry run carefully"
],

"DAY 33": [
  "Stack revision",
  "Solve 2 stack problems",
  "Explain logic aloud"
],

"DAY 34": [
  "Queue introduction",
  "What is queue (FIFO)",
  "Enqueue and dequeue"
],

"DAY 35": [
  "Queue implementation (array)",
  "Queue operations practice",
  "Real-life examples"
],

"DAY 36": [
  "Queue vs Stack comparison",
  "When to use which",
  "Think in real scenarios"
],

"DAY 37": [
  "Circular queue concept",
  "Why circular queue is needed",
  "Understand logic (no rush)"
],

"DAY 38": [
  "Queue revision",
  "Solve 2 queue problems",
  "Dry run manually"
],

"DAY 39": [
  "Revision Day 21–38",
  "Solve mixed recursion + stack + queue problems",
  "Stay calm, no pressure"
],

"DAY 40": [
  "Strong revision day",
  "Explain recursion, stack, queue in your own words",
  "Confidence reset"
],
"DAY 41": [
  "What is Linked List",
  "Why Linked List is needed",
  "Difference: Array vs Linked List"
],

"DAY 42": [
  "Singly Linked List structure",
  "Node concept",
  "Traversal of Linked List"
],

"DAY 43": [
  "Insert node at beginning",
  "Insert node at end",
  "Understand pointer movement"
],

"DAY 44": [
  "Delete node from Linked List",
  "Search element in Linked List",
  "Dry run on paper"
],

"DAY 45": [
  "Reverse Linked List concept",
  "Understand step-by-step logic",
  "No speed coding today"
],

"DAY 46": [
  "Linked List revision",
  "Solve 2 Linked List problems",
  "Explain logic aloud"
],

"DAY 47": [
  "Hashing introduction",
  "Why hashing is powerful",
  "Key-value concept"
],

"DAY 48": [
  "HashMap usage",
  "Frequency counting problems",
  "Practice examples"
],

"DAY 49": [
  "HashSet usage",
  "Remove duplicates problems",
  "Understand uniqueness logic"
],

"DAY 50": [
  "Hashing revision",
  "Solve 3 hashing problems",
  "Think before coding"
],

"DAY 51": [
  "Sorting introduction",
  "Why sorting is needed",
  "Compare different sorting ideas"
],

"DAY 52": [
  "Bubble sort",
  "Swap logic",
  "Time complexity understanding"
],

"DAY 53": [
  "Selection sort",
  "How selection works",
  "Comparison with bubble sort"
],

"DAY 54": [
  "Insertion sort",
  "Shifting logic",
  "Best use cases"
],

"DAY 55": [
  "Sorting revision",
  "Solve 3 sorting problems",
  "Confidence check"
],

"DAY 56": [
  "Tree introduction",
  "What is a tree",
  "Tree terminology (root, child, leaf)"
],

"DAY 57": [
  "Binary Tree concept",
  "Why binary tree",
  "Basic structure understanding"
],

"DAY 58": [
  "Tree traversal concepts",
  "Inorder, Preorder, Postorder (theory)",
  "Dry run on paper"
],

"DAY 59": [
  "Binary Tree traversal implementation",
  "Recursive traversal",
  "Understand recursion flow"
],

"DAY 60": [
  "Revision Day 41–59",
  "Explain Linked List, Hashing, Sorting, Tree basics",
  "Mindset check: calm & confident"
],
"DAY 61": [
  "Binary Search Tree (BST) introduction",
  "BST properties",
  "Why BST is useful"
],

"DAY 62": [
  "Insert node in BST",
  "Search element in BST",
  "Dry run carefully"
],

"DAY 63": [
  "BST traversal revision",
  "BST vs Binary Tree",
  "Explain differences aloud"
],

"DAY 64": [
  "BST problems practice",
  "Min and max in BST",
  "Confidence building"
],

"DAY 65": [
  "Heap introduction",
  "Min Heap vs Max Heap",
  "Real-life examples"
],

"DAY 66": [
  "Heap implementation concept",
  "Priority Queue usage",
  "Basic heap problems"
],

"DAY 67": [
  "Heap revision",
  "Solve 2 heap problems",
  "Understand priority logic"
],

"DAY 68": [
  "Graph introduction",
  "What is graph",
  "Real-world graph examples"
],

"DAY 69": [
  "Graph representation",
  "Adjacency list concept",
  "Understand nodes and edges"
],

"DAY 70": [
  "Graph traversal concepts",
  "BFS and DFS (theory)",
  "Dry run on paper"
],

"DAY 71": [
  "BFS traversal implementation",
  "Queue usage in BFS",
  "Traversal flow understanding"
],

"DAY 72": [
  "DFS traversal implementation",
  "Recursion usage in DFS",
  "Stack vs recursion"
],

"DAY 73": [
  "Graph revision",
  "Solve simple graph problems",
  "Stay calm"
],

"DAY 74": [
  "Greedy algorithm concept",
  "Why greedy works",
  "Simple greedy examples"
],

"DAY 75": [
  "Greedy problems",
  "Activity selection",
  "Practice logic"
],

"DAY 76": [
  "Backtracking introduction",
  "Why backtracking is used",
  "Understand decision tree"
],

"DAY 77": [
  "Backtracking examples",
  "Generate subsets",
  "No speed pressure"
],

"DAY 78": [
  "Dynamic Programming introduction",
  "Why DP is needed",
  "Overlapping subproblems idea"
],

"DAY 79": [
  "DP examples",
  "Fibonacci using DP",
  "Compare recursion vs DP"
],

"DAY 80": [
  "DP mindset practice",
  "Identify DP problems",
  "No heavy problems yet"
],

"DAY 81": [
  "Revision Arrays & Strings",
  "Solve 3 mixed problems",
  "Explain logic aloud"
],

"DAY 82": [
  "Revision Recursion & Binary Search",
  "Solve 2 problems",
  "Dry run carefully"
],

"DAY 83": [
  "Revision Stack, Queue, Linked List",
  "Solve mixed problems",
  "Pointer confidence"
],

"DAY 84": [
  "Revision Hashing & Sorting",
  "Choose correct technique",
  "Time complexity focus"
],

"DAY 85": [
  "Revision Trees & BST",
  "Explain traversal logic",
  "Confidence building"
],

"DAY 86": [
  "Revision Heap & Graph",
  "Explain BFS vs DFS",
  "Real-life mapping"
],

"DAY 87": [
  "Revision Greedy & DP",
  "Identify approach quickly",
  "Think before coding"
],

"DAY 88": [
  "Mock interview coding",
  "Time-bound problem solving",
  "Stay calm"
],

"DAY 89": [
  "Weak area analysis",
  "Fix mistakes",
  "Short notes preparation"
],

"DAY 90": [
  "Final full revision",
  "Explain any topic confidently",
  "READY FOR INTERVIEWS"
]



};


/* ===============================
   STORAGE
================================ */
let progress = JSON.parse(localStorage.getItem("dsaPlan")) || {};

for (let day in dsaPlan) {
  if (!progress[day]) {
    progress[day] = dsaPlan[day].map(task => ({
      text: task,
      done: false
    }));
  }
}

localStorage.setItem("dsaPlan", JSON.stringify(progress));

/* ===============================
   RENDER
================================ */
function renderGrid() {
  dayGrid.innerHTML = "";

  Object.keys(dsaPlan).forEach(day => {
    const box = document.createElement("div");
    box.className = "day-box";
    box.textContent = day;
    box.onclick = () => openPanel(day);
    dayGrid.appendChild(box);
  });
}

function openPanel(day) {
  panelTitle.textContent = day;
  panelTasks.innerHTML = "";

  progress[day].forEach(task => {
    const label = document.createElement("label");
    label.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    checkbox.onchange = () => {
      task.done = checkbox.checked;
      localStorage.setItem("dsaPlan", JSON.stringify(progress));
    };

    label.appendChild(checkbox);
    label.append(task.text);
    panelTasks.appendChild(label);
  });

  overlay.classList.remove("hidden");
}

closeBtn.onclick = () => overlay.classList.add("hidden");
overlay.onclick = e => {
  if (e.target === overlay) overlay.classList.add("hidden");
};

renderGrid();
