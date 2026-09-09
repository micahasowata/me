// ============================================================
// ROADMAP DATA — COMPLETE
// ============================================================

const ROADMAP = {
  // ----- PHILOSOPHY -----
  philosophy: {
    title: "The Philosophy",
    text: `This roadmap is built on a single premise: depth compounds. You are not trying to cover everything. You are trying to become someone who can cover anything when needed, because your foundations are unshakeable. The strategy is simple: build a rock-solid foundation in C++, discrete mathematics, and algorithms — in that order of priority, but interleaved for reinforcement. Use that foundation to build increasingly serious projects, each one demonstrating a new capability. Expand into adjacent areas only after the foundation is genuinely stable. Treat your GitHub as a portfolio of capability, not a log of activity.`,
  },

  // ----- RULES (The Contract) -----
  rules: [
    "One primary implementation language at a time. During the foundational phase, that language is C++.",
    "Finish before starting. Do not begin a new book, language, or major project until the current one's exit criteria are complete.",
    "No resource hopping. The books listed in this roadmap are the only books you use.",
    "One project at a time. Do not have multiple active projects.",
    "Publish only substantial work. Small exercises stay local.",
    "Do not restart. If you fall behind, resume from where you stopped.",
    "Measure by capability, not pages. Ask: 'what can I now do that I couldn't before?'",
    "Read actively. If you're not taking notes, solving exercises, or implementing examples, you're not reading — you're browsing.",
    "Do not study for interviews until Phase 5. Interview skills come later.",
    "Do not start a macro-project before Phase 7. Build the foundation first.",
    "If a topic is not in this roadmap, ignore it.",
    "Do not create your own roadmap. This roadmap is your roadmap. Trust it.",
    "When life gets busy, do the minimum viable week. 5–8 hours is enough. Do not skip two days in a row.",
    "Do not confuse consumption with learning. Reading a book is not learning. Completing exercises, implementing concepts, and building projects is learning.",
    "Do not rewrite this roadmap. The purpose of the roadmap is to execute it, not to improve it.",
  ],

  // ----- PHASES -----
  phases: [
    // ============================================================
    // PHASE 0 — THE LAUNCHPAD
    // ============================================================
    {
      id: "phase0",
      number: 0,
      title: "The Launchpad",
      subtitle: "Building the Habit",
      status: "active",
      objective:
        "Establish the foundational habit of daily C++ programming and basic mathematical reasoning.",
      why: "Before you can implement algorithms, you need to be comfortable with the language. Before you can prove algorithms correct, you need to understand logic and induction. This phase builds both in parallel, with C++ getting slightly more attention initially.",
      concepts: [
        "C++ fundamentals (types, values, computation, errors)",
        "Basic logic and proof (propositions, truth tables, implication, quantifiers)",
        "Simple programming exercises that reinforce both",
      ],
      resources: {
        primary: "PPP3 Chapters 1–4",
        mathematics: "Stein Chapters 2.1–2.3, 3.1–3.3",
        reference: "cppreference.com",
      },
      tasks: [
        {
          id: "p0t1",
          text: "PPP3 Ch 1–2: Type in every example. Do the drills.",
        },
        {
          id: "p0t2",
          text: "Stein 2.1–2.3: Logic basics. Work through examples.",
        },
        { id: "p0t3", text: "PPP3 Ch 3: Complete all exercises." },
        {
          id: "p0t4",
          text: "Stein 3.1–3.3: Quantifiers. Practice translating statements.",
        },
        {
          id: "p0t5",
          text: "PPP3 Ch 4: Take it slowly. Complete all exercises.",
        },
        {
          id: "p0t6",
          text: "Implement prime number tester with proof comments.",
        },
        {
          id: "p0t7",
          text: "Implement summation calculator (loop vs closed form).",
        },
        {
          id: "p0t8",
          text: "Write truth tables for various logical statements.",
        },
        {
          id: "p0t9",
          text: "Translate English statements into predicate logic and back.",
        },
      ],
      projects: ["Prime Tester", "Summation Calculator"],
      projects_private: true,
      ignored: [
        "Advanced C++ (templates, move semantics, STL algorithms)",
        "CLRS (wait until Phase 1)",
        "Any other language",
        "Any other book",
      ],
      exit: [
        "Can write a C++ program from scratch that reads input, processes it, and produces output.",
        "Can explain the difference between compilation and execution.",
        "Can read and write basic logical statements (∀, ∃, →, ∧, ∨, ¬).",
        "Can identify the structure of a simple proof (direct, contrapositive, contradiction).",
        "Completed all PPP3 Ch 1–4 drills and exercises.",
        "Completed all Stein logic exercises for covered sections.",
      ],
    },

    // ============================================================
    // PHASE 1 — CORE MECHANICS
    // ============================================================
    {
      id: "phase1",
      number: 1,
      title: "Core Mechanics",
      subtitle: "Fluency & Induction",
      status: "locked",
      objective:
        "Develop programming fluency and mathematical induction skills simultaneously.",
      why: "Induction is the engine of algorithmic proof. You need to become comfortable with it before you can understand algorithm analysis. Meanwhile, your C++ skills need to grow to the point where you can implement moderately complex programs.",
      concepts: [
        "C++ functions, program structure, and technicalities",
        "Mathematical induction (weak and strong)",
        "First contact with algorithms via CLRS",
        "Recurrences and basic algorithm analysis",
      ],
      resources: {
        primary: "PPP3 Chapters 5–7",
        mathematics: "Stein Chapter 4.1–4.3",
        algorithms: "CLRS Chapter 1–2",
        intuition: "Algorithms Unlocked Chapters 1–2",
      },
      tasks: [
        { id: "p1t1", text: "Read Algorithms Unlocked Ch 1–2 for intuition." },
        {
          id: "p1t2",
          text: "Stein 4.1: Mathematical induction. Work through all examples.",
        },
        {
          id: "p1t3",
          text: "CLRS Ch 1–2: Pay special attention to loop invariants.",
        },
        {
          id: "p1t4",
          text: "PPP3 Ch 5–7: Write the calculator program from scratch.",
        },
        {
          id: "p1t5",
          text: "Stein 4.2–4.3: Recurrences. Work through examples.",
        },
        {
          id: "p1t6",
          text: "Re-read CLRS Ch 2 with recurrence understanding.",
        },
        {
          id: "p1t7",
          text: "Implement insertion sort and prove it correct using loop invariants.",
        },
        {
          id: "p1t8",
          text: "Implement merge sort and analyze its recurrence.",
        },
        {
          id: "p1t9",
          text: "Implement Fibonacci recursively and iteratively, comparing runtimes.",
        },
        { id: "p1t10", text: "Prove various summation formulas by induction." },
        {
          id: "p1t11",
          text: "Solve recurrence relations using substitution and recursion trees.",
        },
      ],
      projects: ["Big-O Visualizer", "Recursion vs Iteration Benchmark"],
      projects_private: false,
      ignored: [
        "Advanced C++ (templates, move semantics, STL algorithms)",
        "The rest of CLRS (not yet)",
        "Any other language",
        "Any other book",
      ],
      exit: [
        "Can write a function, call it, and understand argument passing.",
        "Can write and prove a loop invariant.",
        "Can prove a statement by induction.",
        "Can solve simple recurrences (T(n) = T(n/2) + n, etc.).",
        "Can explain what Big-O notation means and why it's used.",
        "Completed PPP3 Ch 5–7 exercises.",
        "Completed Stein 4.1–4.3 exercises.",
        "Solved at least 10 CLRS Ch 1–2 exercises.",
      ],
    },

    // ============================================================
    // PHASE 2 — ALGORITHMIC FOUNDATIONS
    // ============================================================
    {
      id: "phase2",
      number: 2,
      title: "Algorithmic Foundations",
      subtitle: "Analysis & Divide-and-Conquer",
      status: "locked",
      objective:
        "Develop strong algorithmic thinking through implementation and analysis.",
      why: "This is where you build the core mental models for algorithm design. Divide-and-conquer, asymptotic analysis, and recurrence solving are the foundation for everything that follows.",
      concepts: [
        "Growth of functions and asymptotic notation",
        "Divide-and-conquer algorithms",
        "Recurrence solving (Master Theorem)",
        "Probabilistic analysis and randomized algorithms",
        "C++ templates, classes, and essential operations",
      ],
      resources: {
        primary: "CLRS Chapters 3–5",
        mathematics: "Stein Chapter 4.4–4.6",
        cpp: "PPP3 Chapters 8, 15, 17",
        intuition: "Algorithms Unlocked Chapter 3",
      },
      tasks: [
        {
          id: "p2t1",
          text: "CLRS Ch 3: Growth of Functions — formal definitions of O, Ω, Θ.",
        },
        { id: "p2t2", text: "Stein 4.4: Master Theorem — supports CLRS Ch 4." },
        {
          id: "p2t3",
          text: "CLRS Ch 4: Divide-and-Conquer — up to the Master Theorem.",
        },
        {
          id: "p2t4",
          text: "Stein 4.5–4.6: More general recurrences, selection.",
        },
        { id: "p2t5", text: "CLRS Ch 5: Probabilistic Analysis." },
        {
          id: "p2t6",
          text: "PPP3 Ch 8: Classes — now you can implement your own data structures.",
        },
        {
          id: "p2t7",
          text: "PPP3 Ch 15: Vector — understand the STL container model.",
        },
        {
          id: "p2t8",
          text: "PPP3 Ch 17: Essential Operations — copy, move, destructor, assignment.",
        },
        { id: "p2t9", text: "Solve CLRS Ch 3–5 exercises (at least 1/3)." },
        { id: "p2t10", text: "Prove the Master Theorem cases by induction." },
        {
          id: "p2t11",
          text: "Implement Strassen's matrix multiplication (CLRS 4.2).",
        },
        { id: "p2t12", text: "Analyze the hiring problem (CLRS 5.1)." },
      ],
      projects: ["Vector Implementation", "Recurrence Solver"],
      projects_private: false,
      ignored: [
        "Advanced STL (you are building your own container first)",
        "Red-black trees, heaps, hash tables (coming in Phase 3)",
        "Any other language",
        "Any other book",
      ],
      exit: [
        "Can analyze an algorithm's running time formally.",
        "Can solve recurrences using the Master Theorem.",
        "Can implement a divide-and-conquer algorithm from scratch.",
        "Can explain randomized algorithms and their analysis.",
        "Can implement a container with proper RAII and move semantics.",
        "Completed CLRS Ch 3–5 exercises (at least 1/3).",
        "Completed Stein 4.4–4.6 exercises.",
        "Completed PPP3 Ch 8, 15, 17 exercises.",
      ],
    },

    // ============================================================
    // PHASE 3 — DATA STRUCTURES
    // ============================================================
    {
      id: "phase3",
      number: 3,
      title: "Data Structures",
      subtitle: "Building Blocks of Efficient Algorithms",
      status: "locked",
      objective:
        "Master fundamental data structures — their implementation, properties, and use cases.",
      why: "Data structures are the building blocks of efficient algorithms. Understanding them deeply — not just their interfaces — is what separates strong engineers from weak ones. This phase also introduces you to advanced C++.",
      concepts: [
        "Elementary data structures (arrays, stacks, queues, linked lists)",
        "Hash tables",
        "Binary search trees",
        "Heaps and priority queues",
        "Graph representations",
        "C++ STL containers and iterators",
      ],
      resources: {
        primary: "CLRS Chapters 6–13",
        mathematics: "Stein Chapter 6.1–6.2",
        cpp: "PPP3 Chapters 18–21",
        intuition: "Algorithms Unlocked Chapter 3",
      },
      tasks: [
        { id: "p3t1", text: "CLRS Ch 6: Heapsort — implement and analyze." },
        { id: "p3t2", text: "CLRS Ch 7: Quicksort — implement and analyze." },
        {
          id: "p3t3",
          text: "CLRS Ch 8: Linear-Time Sorting — counting, radix, bucket.",
        },
        { id: "p3t4", text: "Stein 6.1: Graphs — basic definitions." },
        { id: "p3t5", text: "CLRS Ch 9: Medians and Order Statistics." },
        { id: "p3t6", text: "CLRS Ch 10: Elementary Data Structures." },
        {
          id: "p3t7",
          text: "CLRS Ch 11: Hash Tables — implement your own hash map.",
        },
        { id: "p3t8", text: "CLRS Ch 12: BSTs — implement your own BST." },
        {
          id: "p3t9",
          text: "CLRS Ch 13: Red-Black Trees — implement insert/delete.",
        },
        { id: "p3t10", text: "PPP3 Ch 18: Templates and Exceptions." },
        { id: "p3t11", text: "PPP3 Ch 19: Containers and Iterators." },
        { id: "p3t12", text: "PPP3 Ch 20: Maps and Sets." },
        { id: "p3t13", text: "PPP3 Ch 21: Algorithms — STL algorithms." },
        { id: "p3t14", text: "Solve CLRS Ch 6–13 exercises (at least 1/4)." },
        { id: "p3t15", text: "Prove the properties of red-black trees." },
      ],
      projects: [
        "Sorting Showdown",
        "DIY Binary Search Tree",
        "DIY Hash Map",
        "Priority Queue",
        "Dutch National Flag",
      ],
      projects_private: false,
      ignored: [
        "Graph algorithms (coming in Phase 4)",
        "Advanced C++ (you'll get there in Phase 4)",
        "Any other language",
        "Any other book",
      ],
      exit: [
        "Can implement and analyze any major sorting algorithm.",
        "Can implement a hash table with various collision resolution strategies.",
        "Can implement a binary search tree with all major operations.",
        "Can explain the properties of red-black trees.",
        "Can compare data structure tradeoffs (e.g., BST vs hash table).",
        "Completed CLRS Ch 6–13 exercises (at least 1/4).",
        "Completed PPP3 Ch 18–21 exercises.",
      ],
    },

    // ============================================================
    // PHASE 4 — ADVANCED DATA STRUCTURES & DESIGN
    // ============================================================
    {
      id: "phase4",
      number: 4,
      title: "Advanced Design",
      subtitle: "DP, Greedy, Amortized Analysis",
      status: "locked",
      objective:
        "Master advanced data structures and algorithm design paradigms.",
      why: "Real-world problems require more sophisticated tools than basic data structures. Dynamic programming, greedy algorithms, and advanced structures like B-trees and disjoint sets are essential for serious systems work.",
      concepts: [
        "Dynamic programming",
        "Greedy algorithms",
        "Amortized analysis",
        "Augmenting data structures",
        "B-trees",
        "Disjoint sets",
        "C++ concepts and generic programming",
      ],
      resources: {
        primary: "CLRS Chapters 14–19",
        mathematics: "Stein Chapter 5.1–5.3",
        cpp: "Tour of C++ Chapter 7",
      },
      tasks: [
        {
          id: "p4t1",
          text: "CLRS Ch 14: DP — implement rod cutting, matrix-chain, LCS.",
        },
        {
          id: "p4t2",
          text: "CLRS Ch 15: Greedy — implement activity selection, Huffman coding.",
        },
        {
          id: "p4t3",
          text: "CLRS Ch 16: Amortized Analysis — take your time, this is challenging.",
        },
        {
          id: "p4t4",
          text: "Stein 5.1–5.3: Probability basics — prepare for randomized algorithms.",
        },
        {
          id: "p4t5",
          text: "CLRS Ch 17: Augmenting Data Structures — order-statistic trees, interval trees.",
        },
        {
          id: "p4t6",
          text: "CLRS Ch 18: B-Trees — important for databases and file systems.",
        },
        { id: "p4t7", text: "CLRS Ch 19: Disjoint Sets — Union-Find." },
        {
          id: "p4t8",
          text: "Tour of C++ Ch 7: Concepts — deepen generic programming understanding.",
        },
        { id: "p4t9", text: "Solve CLRS Ch 14–19 exercises (at least 1/4)." },
        {
          id: "p4t10",
          text: "Implement DP solutions: knapsack, edit distance, longest palindromic substring.",
        },
        {
          id: "p4t11",
          text: "Implement Union-Find with path compression and union by rank.",
        },
      ],
      projects: [
        "Knapsack Solver",
        "Autocomplete with a Trie",
        "B-Tree Implementation",
        "Task Scheduler",
      ],
      projects_private: false,
      ignored: [
        "Graph algorithms (coming in Phase 5)",
        "Distributed systems (much later)",
        "Any other language",
        "Any other book",
      ],
      exit: [
        "Can identify when to use DP vs greedy vs divide-and-conquer.",
        "Can analyze amortized time complexity.",
        "Can implement and explain Union-Find.",
        "Can implement and explain B-tree operations.",
        "Completed CLRS Ch 14–19 exercises (at least 1/4).",
        "Completed all projects in this phase.",
      ],
    },

    // ============================================================
    // PHASE 5 — GRAPH ALGORITHMS
    // ============================================================
    {
      id: "phase5",
      number: 5,
      title: "Graph Algorithms",
      subtitle: "Networks, Routing, and Flow",
      status: "locked",
      objective:
        "Master graph algorithms — the foundation of networks, routing, social graphs, and more.",
      why: "Graphs are everywhere. Understanding them deeply — including their algorithms and proofs — is essential for systems, databases, compilers, and distributed systems. This phase also introduces C++ concurrency.",
      concepts: [
        "Graph representations and elementary algorithms",
        "Minimum spanning trees",
        "Single-source shortest paths",
        "All-pairs shortest paths",
        "Maximum flow",
        "Matchings in bipartite graphs",
        "C++ concurrency",
      ],
      resources: {
        primary: "CLRS Chapters 20–25",
        mathematics: "Stein Chapter 6.3–6.5",
        cpp: "Tour of C++ Chapter 15",
      },
      tasks: [
        {
          id: "p5t1",
          text: "CLRS Ch 20: Elementary Graph Algorithms — BFS, DFS, topological sort.",
        },
        {
          id: "p5t2",
          text: "Stein 6.3: Eulerian/Hamiltonian graphs — extra graph theory context.",
        },
        { id: "p5t3", text: "CLRS Ch 21: MST — implement Kruskal and Prim." },
        {
          id: "p5t4",
          text: "CLRS Ch 22: Single-Source Shortest Paths — Dijkstra, Bellman-Ford.",
        },
        {
          id: "p5t5",
          text: "Stein 6.4: Matching Theory — helps with CLRS Ch 25.",
        },
        {
          id: "p5t6",
          text: "CLRS Ch 23: All-Pairs Shortest Paths — Floyd-Warshall.",
        },
        { id: "p5t7", text: "CLRS Ch 24: Maximum Flow — Ford-Fulkerson." },
        {
          id: "p5t8",
          text: "CLRS Ch 25: Matchings — bipartite matching, stable marriage.",
        },
        {
          id: "p5t9",
          text: "Tour of C++ Ch 15: Concurrency — think about parallel graph algorithms.",
        },
        { id: "p5t10", text: "Solve CLRS Ch 20–25 exercises (at least 1/4)." },
        {
          id: "p5t11",
          text: "Prove graph properties (e.g., Dijkstra's correctness).",
        },
      ],
      projects: [
        "Graph Builder and Traversal",
        "Shortest Path in a Maze",
        "Kevin Bacon Game",
        "Network Delay Time",
        "Max Flow",
      ],
      projects_private: false,
      ignored: [
        "Advanced graph algorithms (e.g., planar graphs, graph minors)",
        "Distributed systems (much later)",
        "Any other language",
        "Any other book",
      ],
      exit: [
        "Can implement BFS, DFS, Dijkstra, Bellman-Ford, Floyd-Warshall, Ford-Fulkerson from scratch.",
        "Can prove the correctness of these algorithms.",
        "Can analyze their time and space complexity.",
        "Completed CLRS Ch 20–25 exercises (at least 1/4).",
        "Completed all projects in this phase.",
      ],
    },

    // ============================================================
    // PHASE 6 — SELECTED TOPICS
    // ============================================================
    {
      id: "phase6",
      number: 6,
      title: "Selected Topics",
      subtitle: "Strings, Cryptography, NP-Completeness",
      status: "locked",
      objective:
        "Expand into important CS areas that build on your foundations.",
      why: "Not every topic can be covered in depth. This phase selects the most important ones for your goals: string matching, number theory (RSA), and NP-completeness. These topics will open doors to compilers, cryptography, and algorithm design.",
      concepts: [
        "String matching algorithms",
        "Number-theoretic algorithms (RSA)",
        "NP-completeness",
        "Approximation algorithms",
        "C++ file I/O and string handling",
      ],
      resources: {
        primary: "CLRS Chapters 31–35",
        mathematics: "Stein Chapter 2.1–2.4",
        cpp: "PPP3 Chapter 9",
      },
      tasks: [
        {
          id: "p6t1",
          text: "CLRS Ch 31: Number-Theoretic — implement RSA, GCD, modular exponentiation.",
        },
        {
          id: "p6t2",
          text: "Stein Ch 2: Cryptography — intuitive understanding of RSA.",
        },
        {
          id: "p6t3",
          text: "CLRS Ch 32: String Matching — implement KMP, Rabin-Karp, Boyer-Moore.",
        },
        {
          id: "p6t4",
          text: "CLRS Ch 34: NP-Completeness — focus on understanding reductions.",
        },
        {
          id: "p6t5",
          text: "Stein 6.3: NP-Complete Problems — reinforces CLRS.",
        },
        { id: "p6t6", text: "CLRS Ch 35: Approximation Algorithms." },
        {
          id: "p6t7",
          text: "PPP3 Ch 9: I/O Streams — prepare for file-based projects.",
        },
        { id: "p6t8", text: "Solve CLRS Ch 31–32 exercises." },
        { id: "p6t9", text: "Solve CLRS Ch 34–35 exercises (conceptual)." },
        {
          id: "p6t10",
          text: "Prove NP-completeness for simple problems (e.g., 3-SAT → Vertex Cover).",
        },
      ],
      projects: [
        "RSA Key Generator",
        "Boyer-Moore String Search",
        "N-Queens Solver",
      ],
      projects_private: false,
      ignored: [
        "Advanced NP-completeness proofs (know the basics, stop there)",
        "Distributed systems (much later)",
        "Any other language",
        "Any other book",
      ],
      exit: [
        "Can implement RSA key generation and encryption.",
        "Can implement KMP and Boyer-Moore from scratch.",
        "Can explain what NP-completeness means and give examples.",
        "Can analyze approximation algorithms.",
        "Completed CLRS Ch 31–32, 34–35 exercises.",
        "Completed all projects in this phase.",
      ],
    },

    // ============================================================
    // PHASE 7 — THE MACRO-PROJECT
    // ============================================================
    {
      id: "phase7",
      number: 7,
      title: "The Macro-Project",
      subtitle: "The Capstone",
      status: "locked",
      objective:
        "Build one substantial system that integrates everything you've learned.",
      why: "This is the capstone of the foundational phase. It demonstrates that you can build a complete, non-trivial system using the skills you've developed. It also serves as a centerpiece for your GitHub portfolio.",
      concepts: [
        "System design",
        "Integration of multiple algorithms and data structures",
        "Full project lifecycle",
        "Documentation and testing",
        "Portfolio-quality code",
      ],
      resources: {
        primary: "All previous books — now used as reference",
        documentation: "Project-specific documentation",
      },
      tasks: [
        {
          id: "p7t1",
          text: "Choose one macro-project option (Route Planner, Search Engine, Network Simulator, or Crypto Toolkit).",
        },
        {
          id: "p7t2",
          text: "Design the system architecture on paper before writing code.",
        },
        { id: "p7t3", text: "Implement the core functionality." },
        { id: "p7t4", text: "Add tests for all major components." },
        { id: "p7t5", text: "Write comprehensive documentation." },
        { id: "p7t6", text: "Polish the code and refactor where needed." },
        {
          id: "p7t7",
          text: "Create a README that explains the project and its significance.",
        },
        { id: "p7t8", text: "Publish the project on GitHub." },
        {
          id: "p7t9",
          text: "Write a retrospective: what you learned, what you'd do differently.",
        },
      ],
      projects: [
        "Macro-Project — choose one: Route Planner, Search Engine, Network Simulator, or Crypto Toolkit",
      ],
      projects_private: false,
      ignored: [
        "New languages (you already know C++)",
        "New books (you have enough references)",
        "New technologies (focus on the project)",
        "Any other project (one at a time)",
      ],
      exit: [
        "Completed the macro-project with documentation.",
        "Project is tested, documented, and runs correctly.",
        "Project is published on GitHub with a README explaining what it does and why it matters.",
        "Can explain every major design decision in the project.",
        "Completed the retrospective.",
      ],
    },

    // ============================================================
    // PHASE 8 — THE EXPANSION
    // ============================================================
    {
      id: "phase8",
      number: 8,
      title: "The Expansion",
      subtitle: "Specialization: PL, Distributed Systems, Hardware",
      status: "locked",
      objective:
        "Specialize by building three complete, portfolio-grade systems: a compiler toolchain, a distributed database, and a deep understanding of the hardware/OS interface.",
      why: "Phase 0-7 gave you a powerful, general-purpose foundation. Phase 8 is about applying that foundation to specific, high-value domains. You'll learn new languages (OCaml, Rust), but the focus is on the systems you build, not the languages themselves.",
      concepts: [
        "Language engineering (lexing, parsing, type checking, code generation)",
        "Distributed systems (Raft consensus, storage engines, network programming)",
        "Systems programming (hardware interaction, OS internals, performance)",
        "Functional programming (OCaml)",
        "Memory safety (Rust)",
      ],
      resources: {
        language_engineering:
          "Real World OCaml, How to Compile Your Language, Writing an Interpreter in Go, Writing a Compiler in Go",
        distributed_systems:
          "cstack DB Tutorial, Build Your Own Database, Raft KV Store, Building Git",
        systems_hardware: "CS:APP, OSTEP",
      },
      tasks: [
        // Track A: Language Engineering
        {
          id: "p8t1",
          text: "A1: Read Cornell OCaml Programming (Parts I–II).",
        },
        {
          id: "p8t2",
          text: "A1: Implement lexer, Pratt parser, AST, type checker, tree-walk interpreter in OCaml.",
        },
        {
          id: "p8t3",
          text: "A2: Implement bytecode VM or LLVM IR backend for your interpreter.",
        },
        {
          id: "p8t4",
          text: "A3: Implement standalone dependency resolver using PubGrub (Version SAT).",
        },

        // Track B: Distributed Systems & Storage
        {
          id: "p8t5",
          text: "B1: Build persistent B+ Tree or LSM storage engine in C++ with WAL and memory-mapped files.",
        },
        {
          id: "p8t6",
          text: "B2: Implement Raft consensus (leader election, log replication) over POSIX sockets.",
        },
        {
          id: "p8t7",
          text: "B3: Build Git clone: SHA hashing, blob/tree/commit objects, DAG traversal, staging index.",
        },

        // Track C: Systems & Hardware (Parallel Study)
        {
          id: "p8t8",
          text: "C: Complete core exercises on virtual memory, paging, and segmentation (CS:APP/OSTEP).",
        },
        {
          id: "p8t9",
          text: "C: Understand and demonstrate CPU cache line alignment and its performance impact.",
        },
        {
          id: "p8t10",
          text: "C: Implement and reason about low-level concurrency primitives (locks, semaphores).",
        },
        {
          id: "p8t11",
          text: "C: Trace and explain the path of a system call from user space to kernel.",
        },

        // Integration & Polish
        {
          id: "p8t12",
          text: "Write tests and documentation for all projects.",
        },
        {
          id: "p8t13",
          text: "Publish all projects on GitHub with clear READMEs.",
        },
        {
          id: "p8t14",
          text: "Write a retrospective: what you learned in Phase 8.",
        },
      ],
      projects: [
        "Compiler Toolchain (OCaml)",
        "Package Manager (OCaml)",
        "Distributed KV Store (C++/Rust)",
        "Version Control System (C++)",
      ],
      projects_private: false,
      ignored: [
        "New languages (you will learn OCaml and Rust as part of the projects, but they are tools, not the goal)",
        "Web development (not relevant to this phase)",
        "Mobile development (not relevant to this phase)",
        "Machine learning (not relevant to this phase)",
      ],
      exit: [
        "All compiler and package manager components are built, tested, and published.",
        "The distributed KV store and VCS are functional, tested, and published.",
        "You can explain and demonstrate the core OS/hardware concepts.",
        "You have written a retrospective for each major project.",
        "Your GitHub shows a clear progression from foundational work to specialized systems.",
      ],
    },
  ],

  // ============================================================
  // PROJECT LADDER
  // ============================================================
  projects: [
    // Phase 0
    {
      name: "Prime Tester",
      difficulty: 1,
      status: "private",
      demo: "Basic C++ + proof comments",
      phase: 0,
    },
    {
      name: "Summation Calculator",
      difficulty: 1,
      status: "private",
      demo: "Loops vs closed-form",
      phase: 0,
    },

    // Phase 1
    {
      name: "Big-O Visualizer",
      difficulty: 2,
      status: "public",
      demo: "Algorithm analysis + benchmarking",
      phase: 1,
    },
    {
      name: "Recursion vs Iteration Benchmark",
      difficulty: 2,
      status: "public",
      demo: "Performance comparison",
      phase: 1,
    },

    // Phase 2
    {
      name: "Vector Implementation",
      difficulty: 3,
      status: "public",
      demo: "RAII + move semantics",
      phase: 2,
    },
    {
      name: "Recurrence Solver",
      difficulty: 3,
      status: "public",
      demo: "Mathematical maturity + C++",
      phase: 2,
    },

    // Phase 3
    {
      name: "Sorting Showdown",
      difficulty: 3,
      status: "public",
      demo: "Algorithm performance analysis",
      phase: 3,
    },
    {
      name: "DIY Binary Search Tree",
      difficulty: 3,
      status: "public",
      demo: "Tree data structures",
      phase: 3,
    },
    {
      name: "DIY Hash Map",
      difficulty: 3,
      status: "public",
      demo: "Hashing + collision resolution",
      phase: 3,
    },
    {
      name: "Priority Queue",
      difficulty: 3,
      status: "public",
      demo: "Heap data structure",
      phase: 3,
    },
    {
      name: "Dutch National Flag",
      difficulty: 2,
      status: "public",
      demo: "3-way partitioning",
      phase: 3,
    },

    // Phase 4
    {
      name: "Knapsack Solver",
      difficulty: 4,
      status: "public",
      demo: "Comparing algorithmic approaches",
      phase: 4,
    },
    {
      name: "Autocomplete with a Trie",
      difficulty: 4,
      status: "public",
      demo: "String algorithms",
      phase: 4,
    },
    {
      name: "B-Tree Implementation",
      difficulty: 4,
      status: "public",
      demo: "External memory structures",
      phase: 4,
    },
    {
      name: "Task Scheduler",
      difficulty: 3,
      status: "public",
      demo: "Priority queue application",
      phase: 4,
    },

    // Phase 5
    {
      name: "Graph Builder and Traversal",
      difficulty: 5,
      status: "public",
      demo: "Comprehensive graph algorithms",
      phase: 5,
    },
    {
      name: "Shortest Path in a Maze",
      difficulty: 4,
      status: "public",
      demo: "BFS pathfinding",
      phase: 5,
    },
    {
      name: "Kevin Bacon Game",
      difficulty: 4,
      status: "public",
      demo: "Practical graph application",
      phase: 5,
    },
    {
      name: "Network Delay Time",
      difficulty: 4,
      status: "public",
      demo: "Dijkstra implementation",
      phase: 5,
    },
    {
      name: "Max Flow",
      difficulty: 5,
      status: "public",
      demo: "Ford-Fulkerson on a network",
      phase: 5,
    },

    // Phase 6
    {
      name: "RSA Key Generator",
      difficulty: 5,
      status: "public",
      demo: "Cryptography + number theory",
      phase: 6,
    },
    {
      name: "Boyer-Moore String Search",
      difficulty: 4,
      status: "public",
      demo: "String matching performance",
      phase: 6,
    },
    {
      name: "N-Queens Solver",
      difficulty: 3,
      status: "public",
      demo: "Backtracking",
      phase: 6,
    },

    // Phase 7
    {
      name: "Macro-Project",
      difficulty: 6,
      status: "public",
      demo: "Flagship GitHub repository",
      phase: 7,
    },

    // Phase 8
    {
      name: "Compiler Toolchain (OCaml)",
      difficulty: 7,
      status: "public",
      demo: "Lexer → Parser → Type Checker → Bytecode/LLVM",
      phase: 8,
    },
    {
      name: "Package Manager (OCaml)",
      difficulty: 6,
      status: "public",
      demo: "PubGrub dependency resolver",
      phase: 8,
    },
    {
      name: "Distributed KV Store (C++/Rust)",
      difficulty: 7,
      status: "public",
      demo: "LSM/B+Tree + Raft consensus",
      phase: 8,
    },
    {
      name: "Version Control System (C++)",
      difficulty: 6,
      status: "public",
      demo: "Git clone with SHA, DAG, staging",
      phase: 8,
    },
  ],

  // ============================================================
  // LIBRARY
  // ============================================================
  library: [
    // Phase 0–7
    {
      title: "Programming: Principles and Practice Using C++",
      author: "Bjarne Stroustrup",
      role: "Primary",
      subject: "C++",
      status: "In progress",
    },
    {
      title: "Discrete Mathematics for Computer Scientists",
      author: "Stein, Drysdale, Bogart",
      role: "Primary",
      subject: "Mathematics",
      status: "In progress",
    },
    {
      title: "Introduction to Algorithms (CLRS)",
      author: "Cormen, Leiserson, Rivest, Stein",
      role: "Primary",
      subject: "Algorithms",
      status: "Not started",
    },
    {
      title: "Algorithms Unlocked",
      author: "Thomas H. Cormen",
      role: "Intuition",
      subject: "Algorithms",
      status: "Not started",
    },
    {
      title: "A Tour of C++",
      author: "Bjarne Stroustrup",
      role: "Reference",
      subject: "C++",
      status: "Not started",
    },

    // Phase 8 — Language Engineering
    {
      title: "Real World OCaml",
      author: "Minsky, Madhavapeddy, Hickey",
      role: "Primary",
      subject: "PL/OCaml",
      status: "Not started",
    },
    {
      title: "How to Compile Your Language",
      author: "isuckatcs",
      role: "Primary",
      subject: "Compilers",
      status: "Not started",
    },
    {
      title: "Writing an Interpreter in Go",
      author: "Thorsten Ball",
      role: "Concepts",
      subject: "PL",
      status: "Not started",
    },
    {
      title: "Writing a Compiler in Go",
      author: "Thorsten Ball",
      role: "Concepts",
      subject: "PL",
      status: "Not started",
    },
    {
      title: "Compiling to Assembly from Scratch",
      author: "Vladimir Keleshev",
      role: "Reference",
      subject: "Assembly/Compilers",
      status: "Not started",
    },

    // Phase 8 — Distributed Systems & Storage
    {
      title: "Build Your Own Database",
      author: "James Smith",
      role: "Primary",
      subject: "Databases",
      status: "Not started",
    },
    {
      title: "Building Git",
      author: "James Coglan",
      role: "Primary",
      subject: "VCS",
      status: "Not started",
    },
    {
      title: "Raft KV Store",
      author: "Phil Eaton",
      role: "Primary",
      subject: "Distributed Systems",
      status: "Not started",
    },

    // Phase 8 — Systems & Hardware
    {
      title: "Computer Systems: A Programmer's Perspective",
      author: "Bryant, O'Hallaron",
      role: "Primary",
      subject: "Systems",
      status: "Not started",
    },
    {
      title: "Operating Systems: Three Easy Pieces",
      author: "Remzi, Andrea",
      role: "Primary",
      subject: "OS",
      status: "Not started",
    },
  ],

  // ============================================================
  // MATHEMATICS ROADMAP
  // ============================================================
  math: [
    {
      concept: "Logic (propositions, quantifiers)",
      application: "Proofs, algorithm correctness",
      phase: 0,
    },
    {
      concept: "Induction (weak and strong)",
      application: "Algorithm proofs, recurrences",
      phase: 1,
    },
    {
      concept: "Recurrences, Master Theorem",
      application: "Divide-and-conquer analysis",
      phase: 2,
    },
    {
      concept: "Graphs (basic definitions, trees)",
      application: "Data structures, graph algorithms",
      phase: 3,
    },
    {
      concept: "Probability (basics, conditional, expectation)",
      application: "Randomized algorithms",
      phase: 4,
    },
    {
      concept: "Graphs (Eulerian/Hamiltonian, matching, coloring)",
      application: "Advanced graph algorithms",
      phase: 5,
    },
    {
      concept: "Number theory (modular arithmetic, RSA)",
      application: "Cryptography",
      phase: 6,
    },
    {
      concept: "Recurrence relations (review)",
      application: "Algorithm analysis across all phases",
      phase: 7,
    },
    {
      concept: "Type theory (basics)",
      application: "Compiler type checking",
      phase: 8,
    },
    {
      concept: "Distributed systems theory (CAP, Raft)",
      application: "Distributed KV store",
      phase: 8,
    },
  ],

  // ============================================================
  // LANGUAGE STRATEGY
  // ============================================================
  languages: {
    current: {
      name: "C++",
      role: "Primary implementation language for Phases 0–7",
      resource: "PPP3",
      reason:
        "Gives low-level control, teaches memory management, widely used in systems programming",
    },
    future: [
      {
        name: "OCaml",
        when: "Phase 8",
        role: "Language engineering",
        resource: "Real World OCaml",
      },
      {
        name: "Rust",
        when: "Phase 8",
        role: "Distributed systems, memory safety",
        resource: "The Rust Book",
      },
      {
        name: "Go",
        when: "After Phase 8",
        role: "Microservices, backends",
        resource: "Let's Go",
      },
      {
        name: "JavaScript",
        when: "After Phase 8",
        role: "Frontend",
        resource: "Eloquent JavaScript",
      },
    ],
    ignored: ["Python", "Java", "Ruby", "Swift", "Kotlin"],
  },

  // ============================================================
  // WEEKLY OPERATING SYSTEM
  // ============================================================
  weekly: {
    good_week: {
      description: "30–40 hours",
      breakdown: [
        "Mathematics: 5–8 hours — reading, exercises, proofs",
        "Computer Science: 10–15 hours — reading CLRS, solving problems, working through algorithms",
        "Programming: 10–15 hours — implementing concepts, working on projects, debugging",
        "Review: 2–3 hours — revisiting concepts, consolidating understanding",
      ],
    },
    daily_structure: {
      morning:
        "2–3 hours — Mathematics or algorithms reading (the hard work when you're fresh)",
      afternoon:
        "2–3 hours — Programming and implementation (applying what you learned)",
      evening: "1 hour — Review, reading ahead, or light practice",
    },
    weekend: {
      saturday: "4–6 hours — Deep work on projects",
      sunday: "Rest — no computer science unless you want to",
    },
    minimum_viable: {
      description: "5–8 hours total",
      requirements: [
        "At least 1 hour of reading",
        "At least 1 hour of programming",
        "Do not skip more than 2 consecutive days",
      ],
    },
    recovery: {
      after_falling_behind: [
        "Do not restart from the beginning",
        "Resume from where you stopped",
        "If away for more than 2 weeks, spend one week reviewing (no new material)",
        "After review, resume the roadmap",
      ],
    },
  },

  // ============================================================
  // IMMEDIATE PLAN
  // ============================================================
  immediate: {
    next_7_days: [
      "Clear your desk and create a distraction-free workspace",
      "Open Obsidian and create a note titled 'Engineering Roadmap' — paste the entire roadmap into it",
      "Open PPP3. Read the first two pages. Then close it. Do not read the whole book",
      "Create a folder called 'foundational_work/' and a subfolder 'phase0/'",
      "Write your first C++ program: Hello, World!",
      "Write a second C++ program: a prime number tester",
      "Read the first chapter of Stein (Logic). Do the first few exercises",
      "By the end of day 7: complete PPP3 Ch 1–2 and Stein 2.1–2.2",
    ],
    next_30_days: [
      "Complete PPP3 Ch 3–4",
      "Complete Stein 2.3 and 3.1–3.3",
      "Complete the Phase 0 exit criteria",
      "Write the prime tester and summation calculator (private)",
      "Post your Phase 0 summary in your Obsidian roadmap (not GitHub)",
      "Do not open CLRS yet. Do not open any other books. Do not start any other projects",
    ],
    next_90_days: [
      "Complete Phases 0–1",
      "Build the Big-O visualizer and publish it on GitHub",
      "Build the Vector implementation and publish it on GitHub",
      "Complete all Phase 1 exit criteria",
      "Do not start a macro-project. Do not read about compilers. Do not start Rust",
    ],
  },

  // ============================================================
  // LONG-TERM MILESTONES
  // ============================================================
  milestones: [
    {
      period: "6 Months",
      description:
        "Complete Phases 0–3. Comfortable with C++ (up to move semantics). Understand sorting, hash tables, BSTs in depth. 4–5 solid GitHub repositories. Can analyze algorithm complexity independently. Can prove simple algorithm correctness using loop invariants and induction.",
    },
    {
      period: "1 Year",
      description:
        "Complete Phases 0–5. Comfortable with graph algorithms (BFS, DFS, Dijkstra, Floyd-Warshall, Ford-Fulkerson). Substantial graph library on GitHub. Understand DP and greedy algorithms. Reading CLRS without external help. Can read moderate-sized codebases (10–20k lines).",
    },
    {
      period: "2 Years",
      description:
        "Complete Phases 0–7. Flagship macro-project on GitHub. Comfortable with C++ (most features) and familiar with the STL. Understand NP-completeness and approximation algorithms. Ready to apply for internships or junior roles at strong companies.",
    },
    {
      period: "3–5 Years",
      description:
        "Complete Phase 8. Built a compiler toolchain, a distributed KV store, and a Git clone. Comfortable with OCaml and Rust. Deep understanding of hardware/OS interaction. Capable of building and deploying production systems. Ready for engineering leadership or founding a company.",
    },
  ],

  // ============================================================
  // THE CONTRACT — Full Text (also in rules)
  // ============================================================
  contract_full: `These are the rules I follow religiously. They are not motivational quotes — they are operating rules.

1. One language at a time. C++ is the primary language for the foundational phase. No Rust, no Go, no OCaml, no JavaScript until Phase 7 is complete.

2. Finish before starting. Do not begin a new book, language, or major project until the current one's exit criteria are complete.

3. No resource hopping. The books listed in this roadmap are the only books you use. Do not switch to another algorithms text, another discrete math text, or another C++ book.

4. One project at a time. Do not have multiple active projects. Finish one before starting the next. Small exercises do not count as projects.

5. Publish only substantial work. Small exercises stay local. Only projects that demonstrate significant capability go on GitHub.

6. Do not restart. If you fall behind, resume from where you stopped. Do not restart the book or the roadmap.

7. Measure by capability, not pages. Do not ask "how far along am I?" Ask "what can I now do that I couldn't before?"

8. Read actively. If you're not taking notes, solving exercises, or implementing examples, you're not reading — you're browsing.

9. Do not study interviews until Phase 5. Interview skills come later, once you have real ability.

10. Do not start a macro-project before Phase 7. The macro-project is the capstone. Build the foundation first.

11. If a topic is not in this roadmap, ignore it. This roadmap already includes what you need. Every new topic you add is a distraction.

12. Do not create your own roadmap. This roadmap is your roadmap. Trust it.

13. When life gets busy, do the minimum viable week. 5–8 hours is enough. Do not skip two days in a row.

14. Do not confuse consumption with learning. Reading a book is not learning. Completing exercises, implementing concepts, and building projects is learning.

15. Do not rewrite this roadmap. The purpose of the roadmap is to execute it, not to improve it. Improve it only after completion.`,
};

// ============================================================
// HELPERS (used by app.js)
// ============================================================

function getPhase(id) {
  return ROADMAP.phases.find((p) => p.id === id);
}

function getActivePhase() {
  return ROADMAP.phases.find((p) => p.status === "active");
}

function getTaskCount(phaseId) {
  const phase = getPhase(phaseId);
  if (!phase) return { total: 0, done: 0 };
  const total = phase.tasks.length;
  const done = phase.tasks.filter((t) => t.done).length;
  return { total, done };
}

function getPhaseProgress(phaseId) {
  const { total, done } = getTaskCount(phaseId);
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

function getOverallProgress() {
  const phases = ROADMAP.phases;
  let total = 0;
  let done = 0;
  phases.forEach((p) => {
    const t = p.tasks.length;
    const d = p.tasks.filter((t) => t.done).length;
    total += t;
    done += d;
  });
  return total === 0 ? 0 : Math.round((done / total) * 100);
}

function getNextTask() {
  for (const phase of ROADMAP.phases) {
    if (phase.status === "locked") continue;
    for (const task of phase.tasks) {
      if (!task.done) {
        return { phase, task };
      }
    }
  }
  return null;
}
