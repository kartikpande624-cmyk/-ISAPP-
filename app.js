

const PKEY = "isapp_local_v2";
const TKEY = "isapp_theme_v1";
const THEMES = [
  { key: "blue",   name: "Blue",   c: "#1e63ff" },
  { key: "red",    name: "Red",    c: "#e8262b" },
  { key: "orange", name: "Orange", c: "#f26a00" },
  { key: "green",  name: "Green",  c: "#12a150" },
  { key: "teal",   name: "Teal",   c: "#00a3a3" },
  { key: "purple", name: "Purple", c: "#8a2be2" },
  { key: "pink",   name: "Pink",   c: "#e6188d" },
  { key: "sky",    name: "Sky",    c: "#0090d9" },
  { key: "indigo", name: "Indigo", c: "#4338ff" },
  { key: "lime",   name: "Lime",   c: "#5f9e00" },
  { key: "maroon", name: "Maroon", c: "#b0123a" },
  { key: "gold",   name: "Gold",   c: "#c98a00" }
];
const AKEY = "isapp_att_target_v1";
const NKEY = "isapp_notices_v1";
const MKEY = "isapp_mentor_notes_v1";

const BRANCHES = ["CS","CD","TC","AIDS","AI","AIML","AIR","EE","CE","CM","ME","AR"];
const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const CURRICULUM = {
  "1st Year": {
    CS: [
      { code: "15261101", name: "ETCS", short: "ETCS" },
      { code: "15261102", name: "Computer Programming", short: "Comp Prog" },
      { code: "15261103", name: "Digital Electronics", short: "Digital Elec" },
      { code: "15261104", name: "Cyber World and Security Concern", short: "Cyber Sec" },
      { code: "15261105", name: "Engineering Mathematics-II", short: "Maths-II" }
    ],
    CD: [
      { code: "29261101", name: "Virtual Design & Graphic", short: "VDG" },
      { code: "29261102", name: "Computer Programming", short: "Comp Prog" },
      { code: "29261103", name: "Digital Circuit Design", short: "DCD" },
      { code: "29261104", name: "Cyber World and Security Concern", short: "Cyber Sec" },
      { code: "29261105", name: "Linear Algebra", short: "Linear Alg" }
    ],
    TC: [
      { code: "TC-101", name: "Computer Programming", short: "Comp Prog" },
      { code: "TC-102", name: "Digital Logic & Systems", short: "Digital Sys" },
      { code: "TC-103", name: "Web & Internet Fundamentals", short: "Web Tech" },
      { code: "TC-104", name: "Engineering Mathematics", short: "Maths" },
      { code: "TC-105", name: "Cyber World & Communication", short: "Cyber Comm" }
    ],
    AIDS: [
      { code: "27261101", name: "Digital Logic Design", short: "DLD" },
      { code: "27261102", name: "Foundations of Data Science", short: "FDS" },
      { code: "27261103", name: "Internet and Web Technologies", short: "IWT" },
      { code: "27261104", name: "Problem Solving and Programming", short: "PSP" },
      { code: "27261105", name: "Linear Algebra", short: "Linear Alg" }
    ],
    EE: [
      { code: "13261101", name: "Electrical Engineering Materials", short: "EE Mat" },
      { code: "13261102", name: "Computer Programming", short: "Comp Prog" },
      { code: "13261103", name: "Digital Circuits and Systems", short: "DCS" },
      { code: "13261104", name: "Engineering Graphics", short: "Engg Graph" },
      { code: "13261105", name: "Basic Electrical & Electronics Engg.", short: "BEEE" }
    ],
    CE: [
      { code: "11261101", name: "Construction Materials, Machines & Tech.", short: "CMMT" },
      { code: "11261102", name: "Computer Programming", short: "Comp Prog" },
      { code: "11261103", name: "Engineering Mechanics", short: "Engg Mech" },
      { code: "11261104", name: "Building Design & Drawing", short: "BDD" },
      { code: "11261105", name: "Basic Electrical & Electronics Engg.", short: "BEEE" }
    ],
    AR: [
      { code: "21261101", name: "Graphics I", short: "Graphics I" },
      { code: "21261102", name: "Building Materials", short: "Bldg Mat" },
      { code: "21261103", name: "Structure I", short: "Structure I" },
      { code: "21261104", name: "History of Ancient Civilizations", short: "History I" },
      { code: "21261105", name: "Theory of Design", short: "Design" }
    ]
  },
  "2nd Year": {
    AR: [
      { code: "21252101", name: "Building Construction II", short: "Bldg Const II" },
      { code: "21252102", name: "History of Western Architecture", short: "Hist West" },
      { code: "21252103", name: "Structure III", short: "Structure III" },
      { code: "21252104", name: "Building Physics I", short: "Bldg Phys I" },
      { code: "21252105", name: "Building Services I", short: "Services I" }
    ]
  },
  "3rd Year": {
    AIDS: [
      { code: "27243101", name: "Data Mining & Warehousing", short: "DMW" },
      { code: "27243102", name: "Cloud Computing & Virtualization", short: "Cloud" },
      { code: "27243103", name: "Evolutionary Algorithms & Optimization", short: "EAO" },
      { code: "27243104", name: "Machine Learning", short: "ML" }
    ],
    AI: [
      { code: "31243101", name: "Machine Learning", short: "ML" },
      { code: "31243103", name: "Cloud Computing & Virtualization", short: "Cloud" },
      { code: "31243103B", name: "Evolutionary Algorithms & Optimization", short: "EAO" },
      { code: "31243104", name: "Statistical Computing", short: "Stat Comp" }
    ],
    AIML: [
      { code: "28243101", name: "Deep Learning", short: "DL" },
      { code: "28243102", name: "Cloud Computing & Big Data", short: "Cloud BD" },
      { code: "28243103", name: "Evolutionary Algorithms & Optimization", short: "EAO" },
      { code: "28243104", name: "Image Processing", short: "Img Proc" }
    ],
    AIR: [
      { code: "24243101", name: "Theory of Computation", short: "TOC" },
      { code: "24243102", name: "Internet of Things", short: "IoT" },
      { code: "24243103", name: "Robot Operating System", short: "ROS" },
      { code: "24243104", name: "Data Science", short: "Data Sci" }
    ],
    CM: [
      { code: "17243101", name: "Process Engineering & Costing", short: "PEC" },
      { code: "17243102", name: "Process Equipment Design", short: "PED" },
      { code: "17243103", name: "Data Science", short: "Data Sci" },
      { code: "17243104", name: "Process Modeling & Simulation", short: "PMS" }
    ],
    EE: [
      { code: "13243101", name: "Switchgear & Protection", short: "SGP" },
      { code: "13243102", name: "Control Systems", short: "Control" },
      { code: "13243103", name: "Data Science", short: "Data Sci" },
      { code: "13243104", name: "Electric Vehicles", short: "EV" }
    ],
    ME: [
      { code: "12243101", name: "Heat and Mass Transfer", short: "HMT" },
      { code: "12243102", name: "Machine Design", short: "MD" },
      { code: "12243103", name: "Data Science", short: "Data Sci" },
      { code: "12243104", name: "Statistical Quality Control", short: "SQC" }
    ],
    AR: [
      { code: "21243101", name: "Building Construction IV", short: "Bldg Const IV" },
      { code: "21243102", name: "Building Services III", short: "Services III" },
      { code: "21243103", name: "Urban Planning", short: "Urban Plan" },
      { code: "21243115", name: "Architectural Photography & Journalism", short: "Arch Photo" }
    ]
  }
};

const QUIZ_BRANCH_AVG = {
  CS: { "15261101": 13.8, "15261102": 11.4, "15261103": 14.2, "15261104": 15.6, "15261105": 11.8 },
  CD: { "29261101": 14.4, "29261102": 11.2, "29261103": 16.5, "29261104": 16.8, "29261105": 12.1 },
  AIDS: { "27261101": 11.9, "27261102": 12.6, "27261103": 14.1, "27261104": 11.8, "27261105": 13.4, "27243101": 16.4, "27243102": 11.8, "27243103": 13.7, "27243104": 12.6 },
  AI: { "31243101": 12.9, "31243103": 11.1, "31243103B": 13.8, "31243104": 12.8 },
  AIML: { "28243101": 14.3, "28243102": 17.1, "28243103": 14.5, "28243104": 11.4 },
  AIR: { "24243101": 16.2, "24243102": 17.5, "24243103": 16.3, "24243104": 19.3 },
  EE: { "13261101": 7.4, "13261102": 12.6, "13261103": 11.2, "13261104": 11.6, "13261105": 7.6, "13243101": 6.8, "13243102": 7.7, "13243103": 11.9, "13243104": 11.2 },
  CE: { "11261101": 15.6, "11261102": 8.2, "11261103": 8.4, "11261104": 13.9, "11261105": 6.1 },
  CM: { "17243101": 16.7, "17243102": 13.4, "17243103": 14.1, "17243104": 8.8 },
  ME: { "12243101": 8.9, "12243102": 7.8, "12243103": 9.6, "12243104": 13.2 },
  AR: { "21261101": 17.4, "21261102": 10.7, "21261103": 10.5, "21261104": 12.8, "21261105": 13.6 }
};

const DEMO_QUIZ = {
  "BTCS26O1001": [
    { code: "15261101", paper: "ETCS", totalQ: 10, correct: 7, marks: 14 },
    { code: "15261102", paper: "Computer Programming", totalQ: 10, correct: 7, marks: 12 },
    { code: "15261103", paper: "Digital Electronics", totalQ: 10, correct: 7, marks: 13 },
    { code: "15261104", paper: "Cyber World and Security Concern", totalQ: 10, correct: 10, marks: 20 },
    { code: "15261105", paper: "Engineering Mathematics-II", totalQ: 10, correct: 7, marks: 15 }
  ],
  "BTAD26O1002": [
    { code: "27261101", paper: "Digital Logic Design", totalQ: 10, correct: 7, marks: 13 },
    { code: "27261102", paper: "Foundations of Data Science", totalQ: 10, correct: 7, marks: 15 },
    { code: "27261103", paper: "Internet and Web Technologies", totalQ: 10, correct: 9, marks: 19 },
    { code: "27261104", paper: "Problem Solving and Programming", totalQ: 10, correct: 8, marks: 16 },
    { code: "27261105", paper: "Linear Algebra", totalQ: 10, correct: 9, marks: 19 }
  ],
  "BTCD26O1001": [
    { code: "29261101", paper: "Virtual Design & Graphic", totalQ: 10, correct: 7, marks: 16 },
    { code: "29261102", paper: "Computer Programming", totalQ: 10, correct: 4, marks: 7 },
    { code: "29261103", paper: "Digital Circuit Design", totalQ: 10, correct: 10, marks: 20 },
    { code: "29261104", paper: "Cyber World and Security Concern", totalQ: 10, correct: 7, marks: 16 },
    { code: "29261105", paper: "Linear Algebra", totalQ: 10, correct: 8, marks: 16 }
  ],
  "BTTC26O1063": [
    { code: "TC-101", paper: "Computer Programming", totalQ: 10, correct: 8, marks: 17 },
    { code: "TC-102", paper: "Digital Logic & Systems", totalQ: 10, correct: 8, marks: 16 },
    { code: "TC-103", paper: "Web & Internet Fundamentals", totalQ: 10, correct: 9, marks: 19 },
    { code: "TC-104", paper: "Engineering Mathematics", totalQ: 10, correct: 7, marks: 14 },
    { code: "TC-105", paper: "Cyber World & Communication", totalQ: 10, correct: 9, marks: 18 }
  ]
};

const defTT = {
  Monday: [
    { time: "09:00", subject: "Core Lecture 1", room: "SH-2", color: "" },
    { time: "11:00", subject: "Lab / Practical", room: "Lab 1", color: "coral" },
    { time: "15:00", subject: "Self-Study: Coding Practice (1.5 hr)", room: "Hostel / Library", color: "gold" },
    { time: "17:30", subject: "Rest & Sports / Walk (1 hr)", room: "Campus Ground", color: "purple" }
  ],
  Tuesday: [
    { time: "09:00", subject: "Mathematics / Theory", room: "LH-1", color: "" },
    { time: "16:00", subject: "Self-Study: Quiz Revision (1 hr)", room: "Study Room", color: "gold" },
    { time: "18:00", subject: "Rest / Break (1 hr)", room: "Personal", color: "purple" }
  ],
  Wednesday: [
    { time: "10:00", subject: "Core Lecture 2", room: "SH-3", color: "" },
    { time: "14:00", subject: "Project & Git Practice (1.5 hr)", room: "Lab 2", color: "coral" },
    { time: "17:00", subject: "Rest & Music / Walk", room: "Free Time", color: "purple" }
  ],
  Thursday: [
    { time: "09:00", subject: "Core Lecture 3", room: "SH-2", color: "" },
    { time: "15:30", subject: "Self-Study: Notes & PYQs (1.5 hr)", room: "Library", color: "gold" }
  ],
  Friday: [
    { time: "10:00", subject: "Seminar / Minor Prep", room: "LH-2", color: "" },
    { time: "14:00", subject: "Build Project Hour", room: "Innovation Lab", color: "coral" },
    { time: "17:30", subject: "Rest & Recharge", room: "Weekend Start", color: "purple" }
  ],
  Saturday: [
    { time: "10:30", subject: "Weekly Revision (2 hrs)", room: "Self-Study", color: "gold" },
    { time: "16:00", subject: "Rest / Club / Sports", room: "Campus", color: "purple" }
  ]
};

const ranks = [
  { n: "Bronze", x: 0 }, { n: "Iron", x: 80 }, { n: "Silver", x: 180 },
  { n: "Gold", x: 300 }, { n: "Platinum", x: 450 }, { n: "Emerald", x: 650 },
  { n: "Sapphire", x: 900 }, { n: "Ruby", x: 1200 }, { n: "Amethyst", x: 1600 }, { n: "Diamond", x: 2100 }
];

const defNotices = [
  { id: "n1", title: "Central Quiz Marks Published", branch: "ALL", category: "Quiz", body: "Check your Central Quiz tab under Results & Exams to verify your score out of 20 and branch average.", author: "Dr. Meera Kulkarni", created_at: "2026-11-24T09:00:00Z" },
  { id: "n2", title: "Minor-1 Syllabus & Lab File Check", branch: "CS", category: "Exam", body: "Bring completed Computer Programming lab manuals before Friday 4 PM.", author: "Prof. R. Tiwari", created_at: "2026-11-23T11:30:00Z" }
];

const defNotes = [
  { id: "m1", student_id: "demo-student", student_name: "Kartik Verma", teacher_name: "Dr. Meera Kulkarni", badge: "Consistent Learner", note: "Strong improvement in Cyber World & Digital subjects. Keep up the steady attendance!", created_at: "2026-11-24" }
];

let sb = null, cloud = false, demoMode = false, otpSent = false;
let user = null, aTab = "login", page = "dashboard", curDay = todayName();
let peers = [], notices = [], mentorNotes = [], quizRows = [], tmr;
let attTarget = Number(localStorage.getItem(AKEY) || 75);

const blank = (role = "student") => ({
  profile: {
    role,
    full_name: "",
    branch: "CS",
    study_year: "1st Year",
    enrollment_no: "",
    college: "MITS Gwalior",
    email: "",
    cgpa: "",
    intro: "",
    skills: [],
    interests: [],
    department: "Computer Science & Engineering",
    subjects_taught: "",
    cabin: ""
  },
  subjects: [],
  achievements: [],
  timetable: structuredClone(defTT),
  prefs: { is_public: true, show_gpa: true, show_achievements: true }
});
let st = blank();

function todayName() {
  const d = new Date().toLocaleDateString("en-US", { weekday: "long" });
  return DAYS.includes(d) ? d : "Monday";
}

const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const ini = n => (n || "ST").trim().split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase();
const av = (s = "", n = st.profile.full_name) => `<div class="av ${s}">${esc(ini(n))}</div>`;
const isMitsEmail = e => /@mitsgwl\.ac\.in$/i.test(String(e || "").trim());
const verifiedTag = e => isMitsEmail(e) ? `<span class="tag verified">Verified MITS ID</span>` : "";

const sBadge = r => {
  const i = r.lastIndexOf(":");
  const nm = i > 0 ? r.slice(0, i).trim() : r.trim();
  const lv = i > 0 ? r.slice(i + 1).trim() : "Added";
  return `<span class="sbadge ${lv.toLowerCase()}"><b>${esc(nm)}</b><small>${esc(lv)}</small></span>`;
};

const subPct = s => {
  const ex = s.exams || [];
  if (!ex.length) return s.marks ? Number(s.marks) : null;
  const o = ex.reduce((a, x) => a + (Number(x.obtained) || 0), 0);
  const m = ex.reduce((a, x) => a + (Number(x.max) || 0), 0);
  return m > 0 ? Math.round((o / m) * 100) : 0;
};
const grade = p => p === null ? "—" : p >= 90 ? "A+" : p >= 80 ? "A" : p >= 70 ? "B+" : p >= 60 ? "B" : p >= 50 ? "C" : p >= 40 ? "D" : "F";

function attHint(pr, tot) {
  if (!tot) return `<div class="bunk">No classes recorded yet</div>`;
  const t = attTarget / 100;
  const pct = (pr / tot) * 100;
  if (pct >= attTarget) {
    const canMiss = Math.floor((pr - t * tot) / t);
    return `<div class="bunk ok">${canMiss > 0 ? `Safe: can miss ${canMiss} more class${canMiss === 1 ? "" : "es"}` : `Right on ${attTarget}% target`}</div>`;
  }
  const need = Math.ceil((t * tot - pr) / (1 - t));
  return `<div class="bunk warn">Attend next ${need} class${need === 1 ? "" : "es"} for ${attTarget}%</div>`;
}

function getCurriculum(year, branch) {
  const y = CURRICULUM[year] || {};
  if (y[branch]) return y[branch];
  if (CURRICULUM["1st Year"][branch]) return CURRICULUM["1st Year"][branch];
  if (CURRICULUM["3rd Year"][branch]) return CURRICULUM["3rd Year"][branch];
  return CURRICULUM["1st Year"].CS;
}

function setTheme(t) {
  const th = THEMES.find(x => x.key === t) || THEMES[0];
  document.body.dataset.theme = th.key;
  document.body.style.setProperty("--green", th.c);
  document.body.style.setProperty("--mint", th.c);
  document.body.style.setProperty("--side", th.c);
  localStorage.setItem(TKEY, th.key);
  if (page === "settings") render();
}

const saveL = () => {
  if ((!cloud || demoMode) && user) {
    try { localStorage.setItem(PKEY, JSON.stringify({ demo: demoMode, user, st })); } catch {}
  }
};
const loadL = () => { try { return JSON.parse(localStorage.getItem(PKEY) || "null"); } catch { return null; } };
const loadNoticesL = () => { try { return JSON.parse(localStorage.getItem(NKEY) || "null") || structuredClone(defNotices); } catch { return structuredClone(defNotices); } };
const saveNoticesL = () => { try { localStorage.setItem(NKEY, JSON.stringify(notices)); } catch {} };
const loadNotesL = () => { try { return JSON.parse(localStorage.getItem(MKEY) || "null") || structuredClone(defNotes); } catch { return structuredClone(defNotes); } };
const saveNotesL = () => { try { localStorage.setItem(MKEY, JSON.stringify(mentorNotes)); } catch {} };

const toast = m => {
  const r = document.getElementById("toastRoot");
  r.innerHTML = `<div class="toast">${esc(m)}</div>`;
  clearTimeout(tmr);
  tmr = setTimeout(() => (r.innerHTML = ""), 2800);
};
const amsg = (m, t = "info") => {
  const b = document.getElementById("auMsg");
  b.textContent = m;
  b.className = `amsg ${t}`;
};

function setTab(t) {
  aTab = t;
  otpSent = false;
  document.getElementById("tLog").classList.toggle("active", t === "login");
  document.getElementById("tSig").classList.toggle("active", t === "signup");
  document.getElementById("tOtp").classList.toggle("active", t === "otp");
  document.getElementById("suBox").classList.toggle("hidden", t !== "signup");
  document.getElementById("passBox").classList.toggle("hidden", t === "otp");
  document.getElementById("otpCodeBox").classList.add("hidden");
  document.getElementById("suName").required = t === "signup";
  document.getElementById("auPass").required = t !== "otp";
  document.getElementById("auBtn").textContent =
    t === "signup" ? "Create Account →" : t === "otp" ? "Send 6-Digit Code →" : "Log In →";
  document.getElementById("auMsg").className = "amsg hidden";
}

function cleanUrl(u) {
  u = String(u || "").trim();
  const m = u.match(/supabase\.com\/dashboard\/project\/([a-z0-9]+)/i);
  if (m) return `https://${m[1]}.supabase.co`;
  try { return new URL(u).origin; } catch { return u; }
}

function hydrateLocal() {
  notices = loadNoticesL();
  mentorNotes = loadNotesL();
  syncDemoPeers();
  matchQuiz();
}

async function init() {
  setTheme(localStorage.getItem(TKEY) || "blue");
  const url = cleanUrl(typeof SUPABASE_URL !== "undefined" ? SUPABASE_URL : "");
  const key = String(typeof SUPABASE_KEY !== "undefined" ? SUPABASE_KEY : "").trim();
  cloud = url.startsWith("https://") && !url.includes("PASTE_") && key && !key.includes("PASTE_") && Boolean(window.supabase);

  if (!cloud) {
    document.getElementById("authSub").textContent = "Local Preview Mode — ready for Expo demo.";
    const sv = loadL();
    if (sv?.user) { user = sv.user; st = Object.assign(blank(), sv.st); hydrateLocal(); enter(); }
    return;
  }

  sb = window.supabase.createClient(url, key);
  const { data: { session }, error } = await sb.auth.getSession();
  if (error) return amsg(error.message, "err");
  if (session) await onSess(session);
  else {
    const sv = loadL();
    if (sv?.demo) { demoMode = true; user = sv.user; st = Object.assign(blank(), sv.st); hydrateLocal(); enter(); }
  }
  sb.auth.onAuthStateChange(async (e, s) => {
    if (e !== "INITIAL_SESSION" && !demoMode) await onSess(s);
  });
}

function startDemo(role) {
  demoMode = true;
  if (role === "teacher") {
    user = { id: "demo-teacher", email: "meera.kulkarni@mitsgwl.ac.in" };
    st = blank("teacher");
    st.profile.full_name = "Dr. Meera Kulkarni";
    st.profile.email = user.email;
    st.profile.department = "Computer Science & Engineering";
    st.profile.subjects_taught = "Computer Programming, Cyber World, Machine Learning";
    st.profile.cabin = "CS Block · Room 204";
    st.profile.intro = "Faculty Advisor for 1st Year CS & TC. Office hours: Mon–Fri 3:00 PM – 4:30 PM.";
    page = "t_dashboard";
  } else {
    user = { id: "demo-student", email: "26tc1ka63@mitsgwl.ac.in" };
    st = blank("student");
    st.profile.full_name = "Kartik Verma";
    st.profile.branch = "TC";
    st.profile.study_year = "1st Year";
    st.profile.enrollment_no = "BTTC26O1063";
    st.profile.email = user.email;
    st.profile.cgpa = "8.65";
    st.profile.intro = "1st Year TC student exploring web apps, Python & robotics.";
    st.profile.skills = ["Python: Experienced", "HTML & CSS: Advanced", "C++: Learner"];
    st.profile.interests = ["Web Development", "AI/ML", "Hackathons"];
    st.subjects = getCurriculum("1st Year", "TC").map((s, idx) => ({
      id: "ds" + idx, code: s.code, name: s.name, short: s.short,
      present: 14 - (idx % 3), total: 16,
      exams: [{ name: "Central Quiz", obtained: 16 + (idx % 4), max: 20 }]
    }));
    st.achievements = [{ id: "da1", title: "Expo Prototype: ISAPP Portal", category: "PROJECT", date_earned: "Nov 2026", description: "Built integrated academic & classmate portal." }];
    page = "dashboard";
  }
  saveL();
  hydrateLocal();
  enter();
  toast(role === "teacher" ? "Opened Teacher Demo" : "Opened Student Demo");
}

function syncDemoPeers() {
  const samplePeers = [
    { id: "p-cs1", full_name: "Aalekh Kaushik", branch: "CS", study_year: "1st Year", enrollment_no: "BTCS26O1001", email: "26cs1aa01@mitsgwl.ac.in", college: "MITS Gwalior", cgpa: "8.8", show_gpa: true, intro: "Full-stack learner & robotics enthusiast.", skills: ["JavaScript: Experienced", "C: Learner"], interests: ["Web Dev", "Robotics"] },
    { id: "p-ad2", full_name: "Akshay Awasthi", branch: "AIDS", study_year: "1st Year", enrollment_no: "BTAD26O1002", email: "26ad1ak02@mitsgwl.ac.in", college: "MITS Gwalior", cgpa: "9.1", show_gpa: true, intro: "Data Science & Python lover.", skills: ["Python: Advanced", "SQL: Learner"], interests: ["Data Science", "Chess"] },
    { id: "p-cd1", full_name: "Aadi Vilas Patil", branch: "CD", study_year: "1st Year", enrollment_no: "BTCD26O1001", email: "26cd1aa01@mitsgwl.ac.in", college: "MITS Gwalior", cgpa: "8.4", show_gpa: true, intro: "UI/UX & Digital Circuit Design.", skills: ["Figma: Advanced", "C++: Beginner"], interests: ["Design", "Gaming"] }
  ];
  const mine = st.prefs.is_public && st.profile.role !== "teacher"
    ? [{ id: user.id, ...st.profile, show_gpa: st.prefs.show_gpa }]
    : [];
  peers = [...mine, ...samplePeers.filter(p => p.id !== user?.id)];
}

function matchQuiz() {
  const en = String(st.profile.enrollment_no || "").trim().toUpperCase();
  if (en && DEMO_QUIZ[en]) { quizRows = DEMO_QUIZ[en]; return; }
  const m = String(st.profile.email || "").match(/^(\d{2})([a-z]{2})\d[a-z]{2}(\d+)@mitsgwl\.ac\.in$/i);
  if (m) {
    const guess = `BT${m[2].toUpperCase()}${m[1]}O1${m[3].padStart(3, "0")}`;
    if (DEMO_QUIZ[guess]) { quizRows = DEMO_QUIZ[guess]; return; }
  }
  quizRows = [];
}

function enter() {
  document.getElementById("authScreen").classList.add("hidden");
  document.getElementById("appRoot").classList.remove("hidden");
  const isLocal = !cloud || demoMode;
  document.getElementById("cBadge").className = isLocal ? "spill local" : "spill";
  document.getElementById("cBadge").textContent = (isLocal ? "Preview · " : "") + (user?.email || "");
  document.getElementById("sMode").textContent = isLocal ? "Demo / Local Preview" : "Cloud Synced";
  if (st.profile.role === "teacher" && !page.startsWith("t_") && page !== "settings") page = "t_dashboard";
  if (st.profile.role !== "teacher" && page.startsWith("t_")) page = "dashboard";
  renderNav();
  render();
}

async function onSess(s) {
  demoMode = false;
  user = s ? s.user : null;
  if (!user) {
    document.getElementById("authScreen").classList.remove("hidden");
    document.getElementById("appRoot").classList.add("hidden");
    st = blank(); peers = []; notices = []; mentorNotes = []; quizRows = [];
    return;
  }
  await pullCloud();
  await fetchPeers();
  await fetchNotices();
  await fetchMentorNotes();
  await fetchCentralQuiz();
  enter();
}

async function signInWithGoogle() {
  if (!cloud) return startDemo("student");
  if (location.protocol === "file:") return amsg("Google login needs https:// (Netlify). Use Email+Password or Student Demo locally!", "err");
  const { error } = await sb.auth.signInWithOAuth({ provider: "google", options: { redirectTo: location.origin } });
  if (error) amsg(error.message, "err");
}

async function authSub(e) {
  e.preventDefault();
  const email = document.getElementById("auMail").value.trim();
  const password = document.getElementById("auPass").value;

  if (aTab === "otp") {
    if (!cloud) return amsg("Live OTP email requires Supabase hosting. Use Student Demo or Email+Password in local mode.", "info");
    if (!otpSent) {
      const { error } = await sb.auth.signInWithOtp({ email, options: { shouldCreateUser: true } });
      if (error) return amsg(error.message, "err");
      otpSent = true;
      document.getElementById("otpCodeBox").classList.remove("hidden");
      document.getElementById("auBtn").textContent = "Verify 6-Digit Code →";
      return amsg(`6-digit code sent to ${email}! Check your inbox.`, "info");
    }
    const token = document.getElementById("auOtp").value.trim();
    if (token.length !== 6) return amsg("Please enter the 6-digit code.", "err");
    const { error } = await sb.auth.verifyOtp({ email, token, type: "email" });
    if (error) return amsg(error.message, "err");
    return;
  }

  if (!cloud) {
    demoMode = true;
    user = { id: "local-" + Date.now(), email };
    st = blank("student");
    st.profile.full_name = document.getElementById("suName").value.trim() || email.split("@")[0];
    st.profile.branch = document.getElementById("suBranch").value;
    st.profile.study_year = document.getElementById("suYear").value;
    st.profile.enrollment_no = document.getElementById("suEnroll").value.trim().toUpperCase();
    st.profile.email = email;
    saveL();
    hydrateLocal();
    enter();
    return toast("Signed in (Local Preview).");
  }

  if (aTab === "signup") {
    const full_name = document.getElementById("suName").value.trim();
    const branch = document.getElementById("suBranch").value;
    const study_year = document.getElementById("suYear").value;
    const enrollment_no = document.getElementById("suEnroll").value.trim().toUpperCase();
    const { data, error } = await sb.auth.signUp({
      email, password,
      options: { data: { full_name, branch, study_year, enrollment_no }, emailRedirectTo: location.origin }
    });
    if (error) return amsg(error.message, "err");
    if (data.user && !data.session) amsg(`Verification link sent to ${email}! Check Gmail then log in.`);
  } else {
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) amsg(error.message, "err");
  }
}

async function signOut() {
  localStorage.removeItem(PKEY);
  if (cloud && !demoMode && sb) await sb.auth.signOut();
  demoMode = false;
  user = null;
  st = blank();
  document.getElementById("authScreen").classList.remove("hidden");
  document.getElementById("appRoot").classList.add("hidden");
  toast("Signed out.");
}

async function pullCloud() {
  const m = user.user_metadata || {};
  const { data: p, error: pe } = await sb.from("profiles").select("*").eq("id", user.id).maybeSingle();
  if (pe) toast("Profile load: " + pe.message);
  if (p) {
    st.profile = {
      role: p.role || "student",
      full_name: p.full_name || "",
      branch: p.branch || "CS",
      study_year: p.study_year || "1st Year",
      enrollment_no: p.enrollment_no || "",
      college: p.college || "MITS Gwalior",
      email: p.email || user.email,
      cgpa: p.cgpa ?? "",
      intro: p.intro || "",
      skills: p.skills || [],
      interests: p.interests || [],
      department: p.department || "Computer Science & Engineering",
      subjects_taught: p.subjects_taught || "",
      cabin: p.cabin || ""
    };
    st.prefs = { is_public: p.is_public ?? true, show_gpa: p.show_gpa ?? true, show_achievements: p.show_achievements ?? true };
    if (p.timetable) st.timetable = p.timetable;
  } else {
    st.profile = {
      ...blank().profile,
      full_name: m.full_name || m.name || user.email.split("@")[0],
      branch: m.branch || "CS",
      study_year: m.study_year || "1st Year",
      enrollment_no: m.enrollment_no || "",
      email: user.email
    };
    await saveProf();
  }
  const { data: a } = await sb.from("achievements").select("*").eq("user_id", user.id).order("created_at", { ascending: false });
  st.achievements = a || [];
  const { data: s } = await sb.from("subjects").select("*").eq("user_id", user.id).order("code");
  st.subjects = (s || []).map(x => ({ ...x, exams: x.exams || [] }));
}

async function saveProf() {
  if (!cloud || demoMode) { saveL(); syncDemoPeers(); return true; }
  const p = st.profile;
  const payload = {
    id: user.id,
    role: p.role || "student",
    full_name: p.full_name,
    branch: p.branch,
    study_year: p.study_year,
    enrollment_no: p.enrollment_no,
    college: p.college,
    email: user.email,
    cgpa: p.cgpa === "" ? null : Number(p.cgpa),
    intro: p.intro,
    skills: p.skills,
    interests: p.interests,
    department: p.department,
    subjects_taught: p.subjects_taught,
    cabin: p.cabin,
    is_public: st.prefs.is_public,
    show_gpa: st.prefs.show_gpa,
    show_achievements: st.prefs.show_achievements,
    timetable: st.timetable,
    updated_at: new Date().toISOString()
  };
  let { error } = await sb.from("profiles").upsert(payload);
  if (error && /column/i.test(error.message)) {
    const basic = {
      id: user.id, full_name: p.full_name, branch: p.branch, study_year: p.study_year,
      college: p.college, email: user.email, cgpa: p.cgpa === "" ? null : Number(p.cgpa),
      intro: p.intro, skills: p.skills, interests: p.interests,
      is_public: st.prefs.is_public, show_gpa: st.prefs.show_gpa,
      show_achievements: st.prefs.show_achievements, timetable: st.timetable,
      updated_at: new Date().toISOString()
    };
    const r2 = await sb.from("profiles").upsert(basic);
    error = r2.error;
  }
  if (error) { toast("Save error: " + error.message); return false; }
  await fetchPeers();
  return true;
}

async function fetchPeers() {
  if (!cloud || demoMode) { syncDemoPeers(); if (page === "directory" || page === "t_students") dirCards(); return; }
  const { data } = await sb.from("profiles").select("*").eq("is_public", true).order("updated_at", { ascending: false });
  peers = (data || []).filter(x => (x.role || "student") !== "teacher");
  const dc = document.getElementById("dirCount");
  if (dc) dc.textContent = peers.length;
  if (page === "directory" || page === "t_students") dirCards();
}

async function fetchNotices() {
  if (!cloud || demoMode) { notices = loadNoticesL(); return; }
  const { data, error } = await sb.from("notices").select("*").order("created_at", { ascending: false });
  notices = error ? loadNoticesL() : (data || []);
}

async function fetchMentorNotes() {
  if (!cloud || demoMode) { mentorNotes = loadNotesL(); return; }
  const { data, error } = await sb.from("mentor_notes").select("*").order("created_at", { ascending: false });
  mentorNotes = error ? loadNotesL() : (data || []);
}

async function fetchCentralQuiz() {
  if (!cloud || demoMode) { matchQuiz(); return; }
  const en = String(st.profile.enrollment_no || "").trim().toUpperCase();
  if (!en) { matchQuiz(); return; }
  const { data, error } = await sb.from("central_quiz").select("*").eq("enrollment_no", en);
  if (error || !data?.length) matchQuiz();
  else quizRows = data.map(r => ({ code: r.course_code, paper: r.paper_name, totalQ: r.total_q || 10, correct: r.total_correct || 0, marks: r.marks || 0 }));
}

function mets() {
  const subs = st.subjects;
  const pr = subs.reduce((a, s) => a + s.present, 0);
  const tot = subs.reduce((a, s) => a + s.total, 0);
  const att = tot ? Math.round((pr / tot) * 100) : 0;
  const gr = subs.map(subPct).filter(x => x !== null);
  const avg = gr.length ? (gr.reduce((a, x) => a + x, 0) / gr.length).toFixed(1) : "0.0";
  const p = st.profile;
  const exCnt = subs.reduce((a, s) => a + (s.exams?.length || 0), 0);
  const xp = (p.full_name ? 10 : 0) + (p.college ? 10 : 0) + (p.cgpa ? 10 : 0) + (p.enrollment_no ? 15 : 0) +
    (p.intro.length >= 20 ? 20 : p.intro ? 10 : 0) + Math.min(50, p.skills.length * 10) +
    Math.min(30, p.interests.length * 10) + subs.length * 15 + exCnt * 20 +
    st.achievements.length * 60 + (tot >= 5 && att >= 85 ? 80 : tot >= 5 && att >= 75 ? 50 : 0);
  let i = 0;
  for (let k = 0; k < ranks.length; k++) if (xp >= ranks[k].x) i = k;
  const c = ranks[i], nx = ranks[i + 1] || null;
  const np = nx ? Math.min(100, Math.round(((xp - c.x) / (nx.x - c.x)) * 100)) : 100;
  return { pr, tot, mis: tot - pr, att, avg, xp, rank: c.n, nxRank: nx?.n || "Max", nxXp: nx?.x || c.x, np };
}

const hd = (t, s, c = "") => `<div class="phead"><div><h1>${t}</h1><p>${s}</p></div>${c ? (c.startsWith("<") ? c : `<span class="dchip">${c}</span>`) : ""}</div>`;
const sc = (l, v, n) => `<div class="card sc"><div class="slbl">${l}</div><div class="sval">${v}</div><div class="snote">${n}</div></div>`;

function vDash() {
  const m = mets(), p = st.profile;
  const relNotices = notices.filter(n => n.branch === "ALL" || n.branch === p.branch).slice(0, 3);
  const lowSubs = st.subjects.filter(s => s.total > 0 && Math.round((s.present / s.total) * 100) < attTarget);
  return `${hd(`Hi, ${esc(p.full_name || "Student")}!`, `${esc(p.study_year)} · ${esc(p.branch)}${p.enrollment_no ? ` · ${esc(p.enrollment_no)}` : ""}`, `${m.rank} · ${m.xp} XP`)}
  <div class="grid stats">
    ${sc("Attendance", m.att + "%", `${m.pr}/${m.tot} classes (Target ${attTarget}%)`)}
    ${sc("Average Marks", m.avg + "%", p.cgpa ? `CGPA ${Number(p.cgpa).toFixed(2)}` : "CGPA not set")}
    ${sc("Rank & XP", m.rank, m.nxRank === "Max" ? "Max rank!" : `${m.xp}/${m.nxXp} XP → ${m.nxRank}`)}
    ${sc("Classmates", peers.length, "In directory")}
  </div>

  ${lowSubs.length ? `<div class="mbox" style="border-left-color:var(--red)"><strong>Attendance Alert (Below ${attTarget}%):</strong> ${lowSubs.map(s => `${esc(s.short)} (${Math.round(s.present / s.total * 100)}%)`).join(", ")} — <button class="link-btn" onclick="go('attendance')">Check Bunk Calculator →</button></div>` : ""}

  <div class="grid qgrid">
    <button class="quick" onclick="openEP()"><div class="qic"></div><div><strong>Edit Profile</strong><small>Bio, skills &amp; enroll no.</small></div></button>
    <button class="quick" onclick="go('attendance')"><div class="qic"></div><div><strong>Attendance</strong><small>Target ${attTarget}% calculator</small></div></button>
    <button class="quick" onclick="go('results')"><div class="qic"></div><div><strong>Results &amp; Quiz</strong><small>Central Quiz &amp; exams</small></div></button>
    <button class="quick" onclick="go('timetable')"><div class="qic"></div><div><strong>Timetable</strong><small>Lectures, study &amp; rest</small></div></button>
  </div>

  <div class="two">
    <div class="card">
      <div class="card-heading"><div><h2>Class Notices</h2><p>Posted by faculty for ${esc(p.branch)} &amp; All</p></div></div>
      ${relNotices.map(n => `<div class="notice-item"><div class="notice-head"><strong>${esc(n.title)}</strong><span class="tag gold">${esc(n.branch)} · ${esc(n.category)}</span></div><div style="font-size:12px">${esc(n.body)}</div><div class="hint" style="margin-top:4px">By ${esc(n.author)}</div></div>`).join("") || `<p class="hint">No notices posted yet.</p>`}
    </div>
    <div class="card">
      <div class="card-heading"><div><h2>Today's Plan (${curDay})</h2><p>Classes, study &amp; rest blocks</p></div><button class="link-btn" onclick="go('timetable')">Edit →</button></div>
      ${(st.timetable[curDay] || []).map(c => `<div class="srow"><div><strong>${esc(c.subject)}</strong><p>${esc(c.room)}</p></div><span class="tag">${esc(c.time)}</span></div>`).join("") || `<p class="hint">No blocks scheduled for ${curDay}.</p>`}
    </div>
  </div>

  <div class="card">
    <div class="card-heading"><div><h2>Subject Marks Overview</h2><p>Updates automatically from your exams &amp; Central Quiz</p></div><button class="link-btn" onclick="go('results')">Manage →</button></div>
    ${st.subjects.map(s => { const sp = subPct(s); return sp === null ? "" : `<div class="brow"><span>${esc(s.short || s.name)}</span><div class="btrk"><div class="bfil ${sp < 50 ? "red" : sp < 75 ? "amber" : "mint"}" style="width:${sp}%"></div></div><b>${sp}%</b></div>`; }).join("") || `<p class="hint">No exam marks yet. Go to Results &amp; Exams or Attendance → Load Branch Subjects!</p>`}
  </div>`;
}

function vProf() {
  const p = st.profile, m = mets();
  const myNotes = mentorNotes.filter(n => String(n.student_id) === String(user?.id));
  return `${hd("My Profile", "Your academic identity, skills, and mentor notes.", st.prefs.is_public ? "Public" : "Private")}
  <div class="phero">${av("lg")}
    <div style="flex:1">
      <h2>${esc(p.full_name || "Add your name")}</h2>
      <p>${esc(p.study_year)} · ${esc(p.branch)}${p.enrollment_no ? ` · <b>${esc(p.enrollment_no)}</b>` : ""}${p.college ? ` · ${esc(p.college)}` : ""}${st.prefs.show_gpa && p.cgpa ? ` · CGPA ${Number(p.cgpa).toFixed(2)}` : ""}</p>
      <div class="tags">
        <span class="tag gold">${m.rank} · ${m.xp} XP</span>
        ${verifiedTag(p.email)}
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-meta"><span>Next: ${m.nxRank}</span><span>${m.xp} / ${m.nxXp} XP</span></div>
        <div class="btrk"><div class="bfil amber" style="width:${m.np}%"></div></div>
      </div>
    </div>
    <button class="btn pri" onclick="openEP()">Edit Profile</button>
  </div>
  <div class="two">
    <div class="card">
      <h3 class="section-title">About Me</h3>
      <p style="font-size:13px">${esc(p.intro || "Click Edit Profile to add your bio, goals, or hackathon interests.")}</p>
      <div class="section-divider"></div>
      <h3 class="section-title">Skills &amp; Levels</h3>
      <div class="sbadges">${p.skills.map(sBadge).join("") || '<span class="hint">Add skills like "Python: Experienced"</span>'}</div>
      <div class="section-divider"></div>
      <h3 class="section-title">Interests</h3>
      <div class="tags">${p.interests.map(i => `<span class="tag">${esc(i)}</span>`).join("") || '<span class="hint">None added</span>'}</div>
    </div>
    <div class="card">
      <h3 class="section-title">Teacher Mentor Notes (${myNotes.length})</h3>
      ${myNotes.map(n => `<div class="note-box"><div style="display:flex;justify-content:space-between;align-items:center"><span class="tag mentor">${esc(n.badge)}</span><span class="hint">${esc(n.created_at)}</span></div><p style="margin:6px 0 2px;font-size:13px">${esc(n.note)}</p><div class="hint">— ${esc(n.teacher_name)}</div></div>`).join("") || '<p class="hint">No teacher endorsements yet.</p>'}
      <div class="section-divider"></div>
      <h3 class="section-title">Achievements (${st.achievements.length})</h3>
      ${st.prefs.show_achievements ? (st.achievements.map(a => `<div class="srow"><div><strong>${esc(a.title)}</strong><p>${esc(a.category)} · ${esc(a.date_earned)}</p></div></div>`).join("") || '<p class="hint">No achievements yet.</p>') : '<p class="hint">Hidden in privacy settings.</p>'}
    </div>
  </div>`;
}

function vAtt() {
  const m = mets(), p = st.profile;
  return `${hd("Attendance", `Target: ${attTarget}% (change in Settings). Includes safe-to-miss & recovery calculator.`, `<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn sm" onclick="seedSubs()">Load ${esc(p.branch)} (${esc(p.study_year)}) Subjects</button><button class="btn pri sm" onclick="openAddSub()">＋ Add Subject</button></div>`)}
  <div class="mbox">
    <strong>Overall Attendance: ${m.att}%</strong> (${m.pr} / ${m.tot} classes) ${attHint(m.pr, m.tot)}
    <div class="btrk" style="margin-top:8px"><div class="bfil ${m.att < attTarget && m.tot ? "red" : ""}" style="width:${m.att}%"></div></div>
  </div>
  <div class="card">
    ${st.subjects.length === 0 ? `<div class="empty">No subjects yet. Click <b>Load ${esc(p.branch)} (${esc(p.study_year)}) Subjects</b> above!</div>` :
    `<div style="display:grid;gap:10px">${st.subjects.map((s, i) => {
      const pct = s.total ? Math.round((s.present / s.total) * 100) : 0;
      return `<div class="acard">
        <div><strong>${esc(s.name)}</strong><div class="hint">${esc(s.code)} · ${s.present}/${s.total}</div>${attHint(s.present, s.total)}</div>
        <div class="btrk"><div class="bfil ${pct < attTarget ? "red" : pct < attTarget + 5 ? "amber" : ""}" style="width:${pct}%"></div></div>
        <b>${pct}%</b>
        <div style="display:flex;gap:5px;flex-wrap:wrap">
          <button class="btn sm" onclick="mark(${i},1)">+Present</button>
          <button class="btn sm ghost" onclick="mark(${i},0)">+Missed</button>
          <button class="btn sm ghost" onclick="openEditAtt(${i})">Edit</button>
          <button class="btn sm del" onclick="delSub(${i})">Delete</button>
        </div>
      </div>`;
    }).join("")}</div>`}
  </div>`;
}

function vRes() {
  const bAvg = QUIZ_BRANCH_AVG[st.profile.branch] || {};
  return `${hd("Results & Central Quiz", "Track Minor/Major/Viva marks alongside your official Central Quiz scores.", `<button class="btn pri sm" onclick="openAddSub()">＋ Add Subject</button>`)}
  <div class="card" style="margin-bottom:16px">
    <div class="card-heading">
      <div><h2>Central Quiz Scorecard (Out of 20)</h2><p>Matched via Enrollment Number (${esc(st.profile.enrollment_no || "Not linked")})</p></div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        <button class="btn sm" onclick="openLinkEnroll()">Link / Try Demo EnrollNo</button>
        ${quizRows.length ? `<button class="btn pri sm" onclick="syncQuizToExams()">Sync to My Subjects</button>` : ""}
      </div>
    </div>
    ${quizRows.length ? `<div class="twrap"><table><thead><tr><th>Paper</th><th>Code</th><th>Correct</th><th>Marks / 20</th><th>Branch Avg</th></tr></thead><tbody>
      ${quizRows.map(q => {
        const avg = bAvg[q.code] ?? "—";
        const diff = typeof avg === "number" ? (q.marks - avg).toFixed(1) : null;
        return `<tr><td><b>${esc(q.paper)}</b></td><td>${esc(q.code)}</td><td>${q.correct} / ${q.totalQ}</td><td><b>${q.marks} / 20</b> (${Math.round(q.marks / 20 * 100)}%)</td><td>${avg}${diff !== null ? ` <span class="tag ${Number(diff) >= 0 ? "verified" : "gold"}">${Number(diff) >= 0 ? "+" : ""}${diff}</span>` : ""}</td></tr>`;
      }).join("")}
    </tbody></table></div>` : `<div class="hint">No Central Quiz record matched yet. Click <b>Link / Try Demo EnrollNo</b> and try <code>BTCS26O1001</code>, <code>BTAD26O1002</code>, <code>BTCD26O1001</code>, or <code>BTTC26O1063</code>!</div>`}
  </div>

  <div class="card">
    <div class="card-heading"><div><h2>Subject Exams (Minor / Major / Lab)</h2><p>Add any exam with custom max marks</p></div></div>
    ${st.subjects.length === 0 ? `<div class="empty">No subjects yet. Add one or load your branch subjects!</div>` :
    `<div class="twrap"><table><thead><tr><th>Subject</th><th>Exams</th><th>Overall</th><th>Grade</th><th>Actions</th></tr></thead><tbody>
      ${st.subjects.map((s, i) => {
        const p = subPct(s), ex = s.exams || [];
        return `<tr><td><b>${esc(s.name)}</b><div class="hint">${esc(s.code)}</div></td>
          <td><div class="echips">${ex.map((x, ei) => `<span class="echip">${esc(x.name)}: <b>${x.obtained}/${x.max}</b><button onclick="delEx(${i},${ei})">×</button></span>`).join("") || '<span class="hint">None</span>'}</div></td>
          <td><b>${p === null ? "—" : p + "%"}</b></td><td><span class="tag">${grade(p)}</span></td>
          <td><button class="btn sm" onclick="openAddEx(${i})">＋ Exam</button> <button class="btn sm del" onclick="delSub(${i})">Delete</button></td></tr>`;
      }).join("")}
    </tbody></table></div>`}
  </div>`;
}

function vDir() {
  return `${hd("Classmates", "Filter by keyword, MITS branch, or year.", `<button class="btn sm" onclick="fetchPeers();toast('Refreshed')">Refresh</button>`)}
  <div class="card">
    <div class="flts">
      <input id="dSrch" class="sinp" placeholder="Search: Python, CS, BTCS, or name..." oninput="dirCards()">
      <select id="dBr" onchange="dirCards()"><option value="ALL">All Branches</option>${BRANCHES.map(b => `<option>${b}</option>`).join("")}</select>
      <select id="dYr" onchange="dirCards()"><option value="ALL">All Years</option><option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option></select>
    </div>
    <div id="dGrid" class="slist"></div>
  </div>`;
}

function dirCards(isTeacherView = false) {
  const q = (document.getElementById("dSrch")?.value || "").toLowerCase();
  const b = document.getElementById("dBr")?.value || "ALL";
  const y = document.getElementById("dYr")?.value || "ALL";
  const f = peers.filter(s =>
    (b === "ALL" || s.branch === b) &&
    (y === "ALL" || s.study_year === y) &&
    (!q || [s.full_name, s.branch, s.enrollment_no, s.college, s.intro, ...(s.skills || []), ...(s.interests || [])].join(" ").toLowerCase().includes(q))
  );
  const g = document.getElementById("dGrid");
  if (!g) return;
  g.innerHTML = f.length ? f.map(s => `<div class="scard" onclick="openPeer('${esc(String(s.id))}',${isTeacherView})">
    <div style="display:flex;gap:10px;align-items:center">${av("", s.full_name)}
      <div style="flex:1"><h3>${esc(s.full_name)}${s.id === user?.id ? " (You)" : ""}</h3><p>${esc(s.branch)} · ${esc(s.study_year)}${s.enrollment_no ? " · " + esc(s.enrollment_no) : ""}</p></div>
      ${s.show_gpa && s.cgpa ? `<span class="tag gold">${Number(s.cgpa).toFixed(2)}</span>` : ""}
    </div>
    <p style="font-size:12px;color:var(--muted);margin:8px 0">${esc(s.intro || "No bio yet.")}</p>
    <div class="sbadges">${(s.skills || []).map(sBadge).join("")}</div>
    ${isTeacherView ? `<div style="margin-top:10px"><button class="btn sm pri" onclick="event.stopPropagation();openAddNote('${esc(String(s.id))}','${esc(s.full_name)}')">Add Mentor Note</button></div>` : ""}
  </div>`).join("") : `<div class="empty" style="grid-column:1/-1">No students found.</div>`;
}

function openPeer(id, isTeacher = false) {
  const s = peers.find(x => String(x.id) === String(id));
  if (!s) return;
  const notes = mentorNotes.filter(n => String(n.student_id) === String(s.id));
  document.getElementById("modalRoot").innerHTML = `<div class="mbg" onclick="if(event.target===this)this.remove()"><div class="modal">
    <div class="mhd"><h2>${esc(s.full_name)}</h2><button class="xbtn" onclick="document.getElementById('modalRoot').innerHTML=''">✕</button></div>
    <p class="hint">${esc(s.branch)} · ${esc(s.study_year)}${s.enrollment_no ? " · " + esc(s.enrollment_no) : ""}${s.college ? " · " + esc(s.college) : ""}</p>
    <div class="tags" style="margin-bottom:8px">${verifiedTag(s.email)}</div>
    <p>${esc(s.intro || "No bio.")}</p>
    <h4>Skills</h4><div class="sbadges">${(s.skills || []).map(sBadge).join("") || "None"}</div>
    <h4>Interests</h4><div class="tags">${(s.interests || []).map(i => `<span class="tag">${esc(i)}</span>`).join("") || "None"}</div>
    <h4 style="margin-top:14px">Teacher Mentor Notes (${notes.length})</h4>
    ${notes.map(n => `<div class="note-box"><span class="tag mentor">${esc(n.badge)}</span><p style="margin:4px 0;font-size:12px">${esc(n.note)}</p><div class="hint">— ${esc(n.teacher_name)}</div></div>`).join("") || `<p class="hint">None yet.</p>`}
    ${isTeacher ? `<div class="acts"><button class="btn pri" onclick="openAddNote('${esc(String(s.id))}','${esc(s.full_name)}')">Write Mentor Note</button></div>` : ""}
  </div></div>`;
}

function vTT() {
  const times = [...new Set(DAYS.flatMap(d => (st.timetable[d] || []).map(c => c.time)))].sort();
  return `${hd("Timetable", "Green = Lecture · Amber = Self-Study · Coral = Lab/Project · Purple = Rest/Break", `<button class="btn pri sm" onclick="openCls('${curDay}')">＋ Add Block</button>`)}
  <div class="card">
    <div class="wtabs">${DAYS.map(d => `<button class="wtab ${d === curDay ? "active" : ""}" onclick="curDay='${d}';render()">${d}</button>`).join("")}</div>
    ${!times.length ? `<div class="empty">Empty timetable. Click ＋ Add Block!</div>` :
    `<div class="twrap"><div class="ttable"><div class="thd">TIME</div>${DAYS.map(d => `<div class="dhd">${d.slice(0, 3)}</div>`).join("")}
      ${times.map(t => `<div class="tcell">${esc(t)}</div>${DAYS.map(d => {
        const l = st.timetable[d] || [], i = l.findIndex(r => r.time === t), c = i >= 0 ? l[i] : null;
        return `<div class="ccell">${c ? `<div class="cblk ${c.color || ""}" style="${d === curDay ? "" : "opacity:.6"}" onclick="openCls('${d}',${i})"><strong>${esc(c.subject)}</strong><span>${esc(c.room)}</span></div>` : ""}</div>`;
      }).join("")}`).join("")}
    </div></div>`}
  </div>`;
}

function vAch() {
  return `${hd("Achievements", "Projects, certificates & competitions.", `<button class="btn pri sm" onclick="openAch()">＋ Add Achievement</button>`)}
  <div class="agrid">${st.achievements.map((a, i) => `<div class="ach"><span class="tag gold">${esc(a.category)}</span><h3>${esc(a.title)}</h3><p>${esc(a.description || "")}</p><div class="ach-meta"><span>${esc(a.date_earned)}</span><button class="btn sm del" onclick="delAch('${esc(String(a.id))}',${i})">Remove</button></div></div>`).join("")}</div>
  ${!st.achievements.length ? `<div class="card empty">No achievements yet.</div>` : ""}`;
}

function vTDash() {
  const counts = {};
  peers.forEach(p => { counts[p.branch] = (counts[p.branch] || 0) + 1; });
  const topBranches = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return `${hd(`Welcome, ${esc(st.profile.full_name || "Faculty")}`, `${esc(st.profile.department)} · Teacher Interface`, "Teacher Account")}
  <div class="grid stats">
    ${sc("Public Students", peers.length, "Visible in directory")}
    ${sc("Class Notices", notices.length, "Active announcements")}
    ${sc("Mentor Notes", mentorNotes.length, "Student endorsements")}
    ${sc("Branches Active", topBranches.length, "Across MITS")}
  </div>
  <div class="grid qgrid">
    <button class="quick" onclick="openPostNotice()"><div class="qic"></div><div><strong>Post Class Notice</strong><small>Reaches student dashboards</small></div></button>
    <button class="quick" onclick="go('t_students')"><div class="qic"></div><div><strong>Endorse Student</strong><small>Write verified mentor note</small></div></button>
    <button class="quick" onclick="openTeacherEdit()"><div class="qic"></div><div><strong>Edit Faculty Info</strong><small>Cabin &amp; subjects taught</small></div></button>
    <button class="quick" onclick="go('settings')"><div class="qic"></div><div><strong>Settings</strong><small>Theme &amp; password</small></div></button>
  </div>
  <div class="two">
    <div class="card">
      <div class="card-heading"><div><h2>Recent Class Notices</h2></div><button class="link-btn" onclick="go('t_notices')">Manage →</button></div>
      ${notices.slice(0, 4).map(n => `<div class="notice-item"><div class="notice-head"><strong>${esc(n.title)}</strong><span class="tag gold">${esc(n.branch)}</span></div><div style="font-size:12px">${esc(n.body)}</div></div>`).join("") || `<p class="hint">No notices yet.</p>`}
    </div>
    <div class="card">
      <div class="card-heading"><div><h2>Branch Student Breakdown</h2></div><button class="link-btn" onclick="go('t_students')">Browse →</button></div>
      ${topBranches.map(([b, c]) => `<div class="brow"><span>${esc(b)}</span><div class="btrk"><div class="bfil" style="width:${Math.min(100, c * 20)}%"></div></div><b>${c}</b></div>`).join("") || `<p class="hint">No public students yet.</p>`}
    </div>
  </div>`;
}

function vTNotices() {
  return `${hd("Class Notices", "Announcements posted here show up on every matching student's Dashboard.", `<button class="btn pri sm" onclick="openPostNotice()">＋ Post Notice</button>`)}
  <div class="card">
    ${notices.length ? notices.map((n, i) => `<div class="notice-item"><div class="notice-head"><div><strong>${esc(n.title)}</strong> <span class="tag gold">${esc(n.branch)} · ${esc(n.category)}</span></div><button class="btn sm del" onclick="delNotice('${esc(String(n.id))}',${i})">Delete</button></div><div style="font-size:13px">${esc(n.body)}</div><div class="hint" style="margin-top:4px">Posted by ${esc(n.author)}</div></div>`).join("") : `<div class="empty">No notices posted yet.</div>`}
  </div>`;
}

function vTStudents() {
  return `${hd("Students & Mentor Notes", "Browse public student profiles and leave encouraging Mentor Notes.", `<button class="btn sm" onclick="fetchPeers();toast('Refreshed')">Refresh</button>`)}
  <div class="card">
    <div class="flts">
      <input id="dSrch" class="sinp" placeholder="Search student name, skill, or enroll no..." oninput="dirCards(true)">
      <select id="dBr" onchange="dirCards(true)"><option value="ALL">All Branches</option>${BRANCHES.map(b => `<option>${b}</option>`).join("")}</select>
      <select id="dYr" onchange="dirCards(true)"><option value="ALL">All Years</option><option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option></select>
    </div>
    <div id="dGrid" class="slist"></div>
  </div>`;
}

function vTProfile() {
  const p = st.profile;
  return `${hd("Teacher Profile", "Visible reference details for your faculty account.", "Faculty")}
  <div class="phero">${av("lg")}
    <div style="flex:1">
      <h2>${esc(p.full_name || "Faculty Member")}</h2>
      <p>${esc(p.department || "Department")} · ${esc(p.college || "MITS Gwalior")}</p>
      <div class="tags">${verifiedTag(p.email)} <span class="tag mentor">Verified Faculty</span></div>
    </div>
    <button class="btn pri" onclick="openTeacherEdit()">Edit Profile</button>
  </div>
  <div class="card">
    <div class="srow"><div><strong>Subjects Taught</strong><p>${esc(p.subjects_taught || "Not added yet")}</p></div></div>
    <div class="srow"><div><strong>Cabin / Office Hours</strong><p>${esc(p.cabin || "Not added yet")}</p></div></div>
    <div class="srow"><div><strong>Faculty Bio</strong><p>${esc(p.intro || "Not added yet")}</p></div></div>
  </div>`;
}

function vSet() {
  const curTheme = localStorage.getItem(TKEY) || "blue";
  const isTeacher = st.profile.role === "teacher";
  return `${hd("Settings", "Customize theme, attendance target, password, and privacy.")}
  <div class="two">
    <div class="card">
      <h3 class="section-title">Appearance &amp; Academic Rules</h3>
      <div class="srow">
        <div><strong>Portal Color Theme</strong><p>Pick your accent color.</p></div>
        <div class="swatches">
          ${THEMES.map(t => `<button class="swatch ${curTheme === t.key ? "active" : ""}" style="background:${t.c}" title="${t.name}" onclick="setTheme('${t.key}')"></button>`).join("")}
        </div>
      </div>
      ${!isTeacher ? `
      <div class="srow">
        <div><strong>Target Attendance %</strong><p>Used for red/amber alerts &amp; bunk math.</p></div>
        <select onchange="setAttTarget(this.value)" style="padding:6px 10px;border-radius:6px;border:1px solid var(--line)">
          ${[75, 80, 85].map(v => `<option value="${v}" ${attTarget === v ? "selected" : ""}>${v}%</option>`).join("")}
        </select>
      </div>
      <div class="srow">
        <div><strong>Print / Save Profile Summary</strong><p>Export a clean PDF summary of your profile &amp; marks.</p></div>
        <button class="btn sm pri" onclick="window.print()">Print / Save PDF</button>
      </div>
      <div class="srow">
        <div><strong>Reset Timetable</strong><p>Restore default lectures, study hours &amp; rest blocks.</p></div>
        <div style="display:flex;gap:6px">
          <button class="btn sm" onclick="resetTT(false)">Default</button>
          <button class="btn sm del" onclick="resetTT(true)">Clear</button>
        </div>
      </div>` : ""}
    </div>

    <div class="card">
      <h3 class="section-title">Security &amp; Privacy</h3>
      <form onsubmit="changePass(event)" style="margin-bottom:14px">
        <div class="fld"><label>Change Password (6+ chars)</label><input id="newPass" type="password" minlength="6" required placeholder="Enter new password"></div>
        <button type="submit" class="btn pri sm">Update Password</button>
      </form>
      ${!isTeacher ? `
      <div class="section-divider"></div>
      <div class="srow"><div><strong>Show in Classmates Directory</strong><p>Let classmates find your profile.</p></div><button class="sw ${st.prefs.is_public ? "on" : ""}" onclick="tPref('is_public')"></button></div>
      <div class="srow"><div><strong>Show CGPA</strong><p>Display CGPA badge on directory card.</p></div><button class="sw ${st.prefs.show_gpa ? "on" : ""}" onclick="tPref('show_gpa')"></button></div>
      <div class="srow"><div><strong>Show Achievements on Profile</strong></div><button class="sw ${st.prefs.show_achievements ? "on" : ""}" onclick="tPref('show_achievements')"></button></div>` : ""}
    </div>
  </div>`;
}

function openEP() {
  const p = st.profile;
  document.getElementById("modalRoot").innerHTML = `<div class="mbg" onclick="if(event.target===this)this.remove()"><div class="modal">
    <div class="mhd"><h2>Edit Profile</h2><button class="xbtn" onclick="document.getElementById('modalRoot').innerHTML=''">✕</button></div>
    <form onsubmit="saveEP(event)"><div class="fg">
      <div class="fld full"><label>Full Name</label><input id="epN" required value="${esc(p.full_name)}"></div>
      <div class="fld"><label>Branch</label><select id="epB">${BRANCHES.map(b => `<option ${p.branch === b ? "selected" : ""}>${b}</option>`).join("")}</select></div>
      <div class="fld"><label>Year</label><select id="epY">${["1st Year", "2nd Year", "3rd Year", "4th Year"].map(y => `<option ${p.study_year === y ? "selected" : ""}>${y}</option>`).join("")}</select></div>
      <div class="fld"><label>Enrollment No.</label><input id="epEn" placeholder="e.g. BTCS26O1001" value="${esc(p.enrollment_no)}"></div>
      <div class="fld"><label>CGPA (optional)</label><input id="epG" type="number" step="0.01" min="0" max="10" value="${esc(p.cgpa)}"></div>
      <div class="fld full"><label>College</label><input id="epC" value="${esc(p.college)}"></div>
      <div class="fld full"><label>About / Open Space</label><textarea id="epI">${esc(p.intro)}</textarea></div>
      <div class="fld full"><label>Skills &amp; Levels (comma-separated)</label><input id="epS" placeholder="Python: Experienced, HTML: Master" value="${esc(p.skills.join(", "))}"></div>
      <div class="fld full"><label>Interests (comma-separated)</label><input id="epIn" value="${esc(p.interests.join(", "))}"></div>
    </div><div class="acts"><button type="button" class="btn ghost" onclick="document.getElementById('modalRoot').innerHTML=''">Cancel</button><button type="submit" class="btn pri">Save</button></div></form>
  </div></div>`;
}

async function saveEP(e) {
  e.preventDefault();
  const p = st.profile;
  p.full_name = document.getElementById("epN").value.trim();
  p.branch = document.getElementById("epB").value;
  p.study_year = document.getElementById("epY").value;
  p.enrollment_no = document.getElementById("epEn").value.trim().toUpperCase();
  p.college = document.getElementById("epC").value.trim();
  p.cgpa = document.getElementById("epG").value.trim();
  p.intro = document.getElementById("epI").value.trim();
  p.skills = document.getElementById("epS").value.split(",").map(s => s.trim()).filter(Boolean);
  p.interests = document.getElementById("epIn").value.split(",").map(s => s.trim()).filter(Boolean);
  document.getElementById("modalRoot").innerHTML = "";
  await fetchCentralQuiz();
  if (await saveProf()) toast("Profile saved!");
  render();
}

function openLinkEnroll() {
  document.getElementById("modalRoot").innerHTML = `<div class="mbg" onclick="if(event.target===this)this.remove()"><div class="modal">
    <div class="mhd"><h2>Link Enrollment Number</h2><button class="xbtn" onclick="document.getElementById('modalRoot').innerHTML=''">✕</button></div>
    <form onsubmit="saveLinkEnroll(event)">
      <div class="fld"><label>Enrollment Number</label><input id="leInp" required placeholder="e.g. BTCS26O1001" value="${esc(st.profile.enrollment_no)}">
      <span class="hint">Demo IDs with preloaded Central Quiz data: <code>BTCS26O1001</code>, <code>BTAD26O1002</code>, <code>BTCD26O1001</code>, <code>BTTC26O1063</code></span></div>
      <div class="acts"><button type="button" class="btn ghost" onclick="document.getElementById('modalRoot').innerHTML=''">Cancel</button><button type="submit" class="btn pri">Match Quiz Marks</button></div>
    </form>
  </div></div>`;
}

async function saveLinkEnroll(e) {
  e.preventDefault();
  st.profile.enrollment_no = document.getElementById("leInp").value.trim().toUpperCase();
  document.getElementById("modalRoot").innerHTML = "";
  await saveProf();
  await fetchCentralQuiz();
  render();
  toast(quizRows.length ? "Central Quiz matched!" : "Enrollment saved.");
}

async function syncQuizToExams() {
  let added = 0;
  for (const q of quizRows) {
    let sub = st.subjects.find(s => s.code === q.code || s.name.toLowerCase() === q.paper.toLowerCase());
    if (!sub) {
      const row = { user_id: user.id, name: q.paper, code: q.code, short: q.paper.slice(0, 14), present: 0, total: 0, exams: [] };
      if (!cloud || demoMode) { sub = { id: "sq" + Date.now() + Math.random(), ...row }; st.subjects.push(sub); }
      else {
        const { data } = await sb.from("subjects").insert([row]).select().single();
        if (data) { sub = { ...data, exams: [] }; st.subjects.push(sub); }
      }
    }
    if (sub && !sub.exams.some(x => x.name === "Central Quiz")) {
      sub.exams.push({ name: "Central Quiz", obtained: q.marks, max: 20 });
      if (cloud && !demoMode) await sb.from("subjects").update({ exams: sub.exams, marks: subPct(sub) || 0 }).eq("id", sub.id).eq("user_id", user.id);
      added++;
    }
  }
  saveL();
  render();
  toast(added ? `Synced ${added} Central Quiz score(s)!` : "Already synced!");
}

function openAddSub() {
  document.getElementById("modalRoot").innerHTML = `<div class="mbg" onclick="if(event.target===this)this.remove()"><div class="modal"><div class="mhd"><h2>Add Subject</h2><button class="xbtn" onclick="document.getElementById('modalRoot').innerHTML=''">✕</button></div><form onsubmit="saveSub(event)"><div class="fg"><div class="fld full"><label>Subject Name</label><input id="sn" required placeholder="e.g. Computer Programming"></div><div class="fld"><label>Code</label><input id="sc" required placeholder="e.g. 15261102"></div><div class="fld"><label>Short Name</label><input id="ss" required placeholder="e.g. Comp Prog"></div><div class="fld"><label>Attended</label><input id="sp" type="number" min="0" value="0"></div><div class="fld"><label>Total Held</label><input id="st" type="number" min="0" value="0"></div></div><div class="acts"><button type="button" class="btn ghost" onclick="document.getElementById('modalRoot').innerHTML=''">Cancel</button><button type="submit" class="btn pri">Add</button></div></form></div></div>`;
}

async function saveSub(e) {
  e.preventDefault();
  const pr = Number(document.getElementById("sp").value) || 0;
  const tot = Math.max(pr, Number(document.getElementById("st").value) || 0);
  const row = { user_id: user.id, name: document.getElementById("sn").value.trim(), code: document.getElementById("sc").value.trim(), short: document.getElementById("ss").value.trim(), present: pr, total: tot, exams: [] };
  document.getElementById("modalRoot").innerHTML = "";
  if (!cloud || demoMode) { st.subjects.push({ id: "s" + Date.now(), ...row }); saveL(); render(); return toast("Subject added!"); }
  const { data, error } = await sb.from("subjects").insert([row]).select().single();
  if (error) return toast(error.message);
  st.subjects.push({ ...data, exams: [] });
  render();
  toast("Subject added!");
}

async function seedSubs() {
  const list = getCurriculum(st.profile.study_year, st.profile.branch)
    .filter(c => !st.subjects.some(s => s.code === c.code))
    .map(c => ({ ...c, present: 0, total: 0, exams: [] }));
  if (!list.length) return toast("All branch subjects already loaded!");
  if (!cloud || demoMode) {
    list.forEach((s, i) => st.subjects.push({ id: "s" + Date.now() + i, ...s }));
    saveL(); render(); return toast(`Loaded ${st.profile.branch} subjects!`);
  }
  const { data, error } = await sb.from("subjects").insert(list.map(s => ({ user_id: user.id, ...s }))).select();
  if (error) return toast(error.message);
  st.subjects = st.subjects.concat(data.map(s => ({ ...s, exams: [] })));
  render();
  toast(`Loaded ${st.profile.branch} subjects!`);
}

async function delSub(i) {
  const s = st.subjects[i];
  if (!confirm(`Delete "${s.name}"?`)) return;
  if (cloud && !demoMode) {
    const { error } = await sb.from("subjects").delete().eq("id", s.id).eq("user_id", user.id);
    if (error) return toast(error.message);
  }
  st.subjects.splice(i, 1); saveL(); render(); toast("Subject deleted.");
}

async function mark(i, p) {
  const s = st.subjects[i], o = { present: s.present, total: s.total };
  s.total++; if (p) s.present++;
  if (!cloud || demoMode) { saveL(); render(); return toast("Updated!"); }
  const { error } = await sb.from("subjects").update({ present: s.present, total: s.total }).eq("id", s.id).eq("user_id", user.id);
  if (error) { s.present = o.present; s.total = o.total; render(); return toast(error.message); }
  render(); toast("Updated!");
}

function openEditAtt(i) {
  const s = st.subjects[i];
  document.getElementById("modalRoot").innerHTML = `<div class="mbg" onclick="if(event.target===this)this.remove()"><div class="modal"><div class="mhd"><h2>Edit Attendance — ${esc(s.short)}</h2><button class="xbtn" onclick="document.getElementById('modalRoot').innerHTML=''">✕</button></div><form onsubmit="saveAtt(event,${i})"><div class="fg"><div class="fld"><label>Classes Attended</label><input id="ap" type="number" min="0" required value="${s.present}"></div><div class="fld"><label>Total Classes</label><input id="at" type="number" min="0" required value="${s.total}"></div></div><div class="acts"><button type="button" class="btn ghost" onclick="document.getElementById('modalRoot').innerHTML=''">Cancel</button><button type="submit" class="btn pri">Save</button></div></form></div></div>`;
}

async function saveAtt(e, i) {
  e.preventDefault();
  const s = st.subjects[i], o = { present: s.present, total: s.total };
  const pr = Math.max(0, Number(document.getElementById("ap").value) || 0);
  const tot = Math.max(pr, Number(document.getElementById("at").value) || 0);
  s.present = pr; s.total = tot;
  document.getElementById("modalRoot").innerHTML = "";
  if (!cloud || demoMode) { saveL(); render(); return toast("Saved!"); }
  const { error } = await sb.from("subjects").update({ present: pr, total: tot }).eq("id", s.id).eq("user_id", user.id);
  if (error) { s.present = o.present; s.total = o.total; render(); return toast(error.message); }
  render(); toast("Saved!");
}

function openAddEx(i) {
  const s = st.subjects[i];
  document.getElementById("modalRoot").innerHTML = `<div class="mbg" onclick="if(event.target===this)this.remove()"><div class="modal"><div class="mhd"><h2>Add Exam — ${esc(s.short)}</h2><button class="xbtn" onclick="document.getElementById('modalRoot').innerHTML=''">✕</button></div><form onsubmit="saveEx(event,${i})"><div class="fld"><label>Exam Name</label><input id="en" required placeholder="e.g. Minor 1, Major, Lab Viva"></div><div class="fg"><div class="fld"><label>Marks Scored</label><input id="eo" type="number" step="0.5" min="0" required placeholder="17"></div><div class="fld"><label>Max Marks</label><input id="em" type="number" step="0.5" min="1" required placeholder="20"></div></div><div class="acts"><button type="button" class="btn ghost" onclick="document.getElementById('modalRoot').innerHTML=''">Cancel</button><button type="submit" class="btn pri">Add Exam</button></div></form></div></div>`;
}

async function saveEx(e, i) {
  e.preventDefault();
  const s = st.subjects[i]; s.exams = s.exams || [];
  s.exams.push({ name: document.getElementById("en").value.trim(), obtained: Number(document.getElementById("eo").value) || 0, max: Math.max(1, Number(document.getElementById("em").value) || 100) });
  document.getElementById("modalRoot").innerHTML = "";
  if (!cloud || demoMode) { saveL(); render(); return toast("Exam added!"); }
  const { error } = await sb.from("subjects").update({ exams: s.exams, marks: subPct(s) || 0 }).eq("id", s.id).eq("user_id", user.id);
  if (error) { s.exams.pop(); render(); return toast(error.message); }
  render(); toast("Exam saved!");
}

async function delEx(si, ei) {
  const s = st.subjects[si], rm = s.exams.splice(ei, 1)[0];
  if (!cloud || demoMode) { saveL(); render(); return toast("Exam removed."); }
  const { error } = await sb.from("subjects").update({ exams: s.exams, marks: subPct(s) || 0 }).eq("id", s.id).eq("user_id", user.id);
  if (error) { s.exams.splice(ei, 0, rm); render(); return toast(error.message); }
  render(); toast("Exam removed.");
}

function openCls(day, idx = null) {
  const ed = idx !== null, it = ed ? st.timetable[day][idx] : { time: "09:00", subject: "", room: "", color: "" };
  document.getElementById("modalRoot").innerHTML = `<div class="mbg" onclick="if(event.target===this)this.remove()"><div class="modal"><div class="mhd"><h2>${ed ? "Edit Block" : "Add Timetable Block"}</h2><button class="xbtn" onclick="document.getElementById('modalRoot').innerHTML=''">✕</button></div><form onsubmit="saveCls(event,${ed},'${day}',${idx})"><div class="fg"><div class="fld"><label>Day</label><select id="cd">${DAYS.map(d => `<option ${day === d ? "selected" : ""}>${d}</option>`).join("")}</select></div><div class="fld"><label>Time</label><input id="ct" required value="${esc(it.time)}" placeholder="e.g. 09:00"></div><div class="fld full"><label>Lecture / Study / Rest Activity</label><input id="cs" required value="${esc(it.subject)}" placeholder="e.g. Self-Study: DSA (1.5 hr) or Rest"></div><div class="fld"><label>Room / Place</label><input id="cr" value="${esc(it.room)}" placeholder="e.g. SH-2 or Library"></div><div class="fld"><label>Type / Color</label><select id="cc"><option value="" ${it.color === "" ? "selected" : ""}>Lecture (Green)</option><option value="gold" ${it.color === "gold" ? "selected" : ""}>Self-Study (Amber)</option><option value="coral" ${it.color === "coral" ? "selected" : ""}>Lab / Project (Coral)</option><option value="purple" ${it.color === "purple" ? "selected" : ""}>Rest / Break (Purple)</option></select></div></div><div class="acts">${ed ? `<button type="button" class="btn del" style="margin-right:auto" onclick="delCls('${day}',${idx})">Delete Delete</button>` : ""}<button type="button" class="btn ghost" onclick="document.getElementById('modalRoot').innerHTML=''">Cancel</button><button type="submit" class="btn pri">Save</button></div></form></div></div>`;
}

async function saveCls(e, ed, od, oi) {
  e.preventDefault();
  const old = structuredClone(st.timetable), nd = document.getElementById("cd").value;
  const en = { time: document.getElementById("ct").value.trim(), subject: document.getElementById("cs").value.trim(), room: document.getElementById("cr").value.trim(), color: document.getElementById("cc").value };
  if (ed) st.timetable[od].splice(oi, 1);
  st.timetable[nd] = st.timetable[nd] || []; st.timetable[nd].push(en); curDay = nd;
  document.getElementById("modalRoot").innerHTML = "";
  if (cloud && !demoMode) { if (!(await saveProf())) { st.timetable = old; return render(); } } else saveL();
  render(); toast("Timetable saved!");
}

async function delCls(d, i) {
  const old = structuredClone(st.timetable);
  st.timetable[d].splice(i, 1);
  document.getElementById("modalRoot").innerHTML = "";
  if (cloud && !demoMode) { if (!(await saveProf())) { st.timetable = old; return render(); } } else saveL();
  render(); toast("Removed.");
}

function openAch() {
  document.getElementById("modalRoot").innerHTML = `<div class="mbg" onclick="if(event.target===this)this.remove()"><div class="modal"><div class="mhd"><h2>Add Achievement</h2><button class="xbtn" onclick="document.getElementById('modalRoot').innerHTML=''">✕</button></div><form onsubmit="saveAch(event)"><div class="fld"><label>Title</label><input id="at1" required placeholder="e.g. SIH Finalist, Built ISAPP"></div><div class="fg"><div class="fld"><label>Category</label><select id="ac1"><option>PROJECT</option><option>CERTIFICATE</option><option>COMPETITION</option><option>CLUB</option></select></div><div class="fld"><label>Date</label><input id="ad1" required placeholder="e.g. Nov 2026"></div></div><div class="fld" style="margin-top:10px"><label>Description</label><textarea id="ax1" required></textarea></div><div class="acts"><button type="button" class="btn ghost" onclick="document.getElementById('modalRoot').innerHTML=''">Cancel</button><button type="submit" class="btn pri">Add</button></div></form></div></div>`;
}

async function saveAch(e) {
  e.preventDefault();
  const it = { user_id: user.id, title: document.getElementById("at1").value.trim(), category: document.getElementById("ac1").value, date_earned: document.getElementById("ad1").value.trim(), description: document.getElementById("ax1").value.trim() };
  document.getElementById("modalRoot").innerHTML = "";
  if (!cloud || demoMode) { st.achievements.unshift({ id: "a" + Date.now(), ...it }); saveL(); render(); return toast("Added!"); }
  const { data, error } = await sb.from("achievements").insert([it]).select().single();
  if (error) return toast(error.message);
  st.achievements.unshift(data); render(); toast("Saved!");
}

async function delAch(id, i) {
  if (!confirm("Remove?")) return;
  if (cloud && !demoMode) {
    const { error } = await sb.from("achievements").delete().eq("id", id).eq("user_id", user.id);
    if (error) return toast(error.message);
  }
  st.achievements.splice(i, 1); saveL(); render(); toast("Removed.");
}

function openPostNotice() {
  document.getElementById("modalRoot").innerHTML = `<div class="mbg" onclick="if(event.target===this)this.remove()"><div class="modal"><div class="mhd"><h2>Post Class Notice</h2><button class="xbtn" onclick="document.getElementById('modalRoot').innerHTML=''">✕</button></div><form onsubmit="saveNotice(event)"><div class="fld"><label>Title</label><input id="ntT" required placeholder="e.g. Minor-1 Timetable Released"></div><div class="fg"><div class="fld"><label>Target Branch</label><select id="ntB"><option value="ALL">ALL Branches</option>${BRANCHES.map(b => `<option>${b}</option>`).join("")}</select></div><div class="fld"><label>Category</label><select id="ntC"><option>Exam</option><option>Quiz</option><option>Syllabus</option><option>General</option></select></div></div><div class="fld" style="margin-top:10px"><label>Message</label><textarea id="ntM" required placeholder="Write announcement details..."></textarea></div><div class="acts"><button type="button" class="btn ghost" onclick="document.getElementById('modalRoot').innerHTML=''">Cancel</button><button type="submit" class="btn pri">Publish Notice</button></div></form></div></div>`;
}

async function saveNotice(e) {
  e.preventDefault();
  const row = { title: document.getElementById("ntT").value.trim(), branch: document.getElementById("ntB").value, category: document.getElementById("ntC").value, body: document.getElementById("ntM").value.trim(), author: st.profile.full_name || user.email, user_id: user.id };
  document.getElementById("modalRoot").innerHTML = "";
  if (!cloud || demoMode) { notices.unshift({ id: "n" + Date.now(), ...row, created_at: new Date().toISOString() }); saveNoticesL(); render(); return toast("Notice published!"); }
  const { data, error } = await sb.from("notices").insert([row]).select().single();
  if (error) return toast("Notice error: " + error.message);
  notices.unshift(data); render(); toast("Notice published!");
}

async function delNotice(id, i) {
  if (!confirm("Delete this notice?")) return;
  if (cloud && !demoMode) {
    const { error } = await sb.from("notices").delete().eq("id", id);
    if (error) return toast(error.message);
  }
  notices.splice(i, 1); saveNoticesL(); render(); toast("Notice deleted.");
}

function openAddNote(sid, sname) {
  document.getElementById("modalRoot").innerHTML = `<div class="mbg" onclick="if(event.target===this)this.remove()"><div class="modal"><div class="mhd"><h2>Mentor Note for ${esc(sname)}</h2><button class="xbtn" onclick="document.getElementById('modalRoot').innerHTML=''">✕</button></div><form onsubmit="saveMentorNote(event,'${esc(sid)}','${esc(sname)}')"><div class="fld"><label>Endorsement Badge</label><select id="mnB"><option>Top Performer</option><option>Consistent Learner</option><option>Great Project</option><option>Active Participant</option><option>Helpful Peer</option></select></div><div class="fld"><label>Appreciation / Feedback Note</label><textarea id="mnT" required placeholder="Encouraging feedback visible on the student's profile..."></textarea></div><div class="acts"><button type="button" class="btn ghost" onclick="document.getElementById('modalRoot').innerHTML=''">Cancel</button><button type="submit" class="btn pri">Save Note</button></div></form></div></div>`;
}

async function saveMentorNote(e, sid, sname) {
  e.preventDefault();
  const row = { student_id: sid, student_name: sname, teacher_id: user.id, teacher_name: st.profile.full_name || user.email, badge: document.getElementById("mnB").value, note: document.getElementById("mnT").value.trim(), created_at: new Date().toISOString().slice(0, 10) };
  document.getElementById("modalRoot").innerHTML = "";
  if (!cloud || demoMode) { mentorNotes.unshift({ id: "m" + Date.now(), ...row }); saveNotesL(); render(); return toast("Mentor note added!"); }
  const { data, error } = await sb.from("mentor_notes").insert([row]).select().single();
  if (error) return toast("Note error: " + error.message);
  mentorNotes.unshift(data); render(); toast("Mentor note saved!");
}

function openTeacherEdit() {
  const p = st.profile;
  document.getElementById("modalRoot").innerHTML = `<div class="mbg" onclick="if(event.target===this)this.remove()"><div class="modal"><div class="mhd"><h2>Edit Teacher Profile</h2><button class="xbtn" onclick="document.getElementById('modalRoot').innerHTML=''">✕</button></div><form onsubmit="saveTeacherEdit(event)"><div class="fld"><label>Full Name</label><input id="tpN" required value="${esc(p.full_name)}"></div><div class="fld"><label>Department</label><input id="tpD" value="${esc(p.department)}"></div><div class="fld"><label>Subjects Taught</label><input id="tpS" value="${esc(p.subjects_taught)}" placeholder="e.g. Computer Programming, ML"></div><div class="fld"><label>Cabin / Office Hours</label><input id="tpC" value="${esc(p.cabin)}" placeholder="e.g. CS Block 204 · 3–4 PM"></div><div class="fld"><label>Bio</label><textarea id="tpI">${esc(p.intro)}</textarea></div><div class="acts"><button type="button" class="btn ghost" onclick="document.getElementById('modalRoot').innerHTML=''">Cancel</button><button type="submit" class="btn pri">Save</button></div></form></div></div>`;
}

async function saveTeacherEdit(e) {
  e.preventDefault();
  const p = st.profile;
  p.full_name = document.getElementById("tpN").value.trim();
  p.department = document.getElementById("tpD").value.trim();
  p.subjects_taught = document.getElementById("tpS").value.trim();
  p.cabin = document.getElementById("tpC").value.trim();
  p.intro = document.getElementById("tpI").value.trim();
  document.getElementById("modalRoot").innerHTML = "";
  if (await saveProf()) toast("Teacher profile saved!");
  render();
}

function setAttTarget(v) { attTarget = Number(v); localStorage.setItem(AKEY, attTarget); toast(`Attendance target set to ${attTarget}%`); render(); }
async function resetTT(empty) {
  if (!confirm(empty ? "Clear your entire timetable?" : "Reset timetable to default study/rest schedule?")) return;
  st.timetable = empty ? { Monday: [], Tuesday: [], Wednesday: [], Thursday: [], Friday: [], Saturday: [] } : structuredClone(defTT);
  if (cloud && !demoMode) await saveProf(); else saveL();
  toast(empty ? "Timetable cleared." : "Timetable reset to defaults."); render();
}
async function changePass(e) {
  e.preventDefault();
  const password = document.getElementById("newPass").value;
  if (!cloud || demoMode) return toast("Password updates work on live Supabase accounts.");
  const { error } = await sb.auth.updateUser({ password });
  if (error) return toast(error.message);
  document.getElementById("newPass").value = "";
  toast("Password updated!");
}
async function tPref(k) { st.prefs[k] = !st.prefs[k]; await saveProf(); render(); toast("Saved!"); }

function renderNav() {
  const nav = document.getElementById("mainNav");
  const isTeacher = st.profile.role === "teacher";
  document.getElementById("brandSub").textContent = isTeacher ? "Teacher Interface" : "Student Portal";
  document.getElementById("qSrch").classList.toggle("hidden", isTeacher);
  nav.innerHTML = isTeacher ? `
    <button class="nbtn" data-page="t_dashboard">Teacher Dashboard</button>
    <button class="nbtn" data-page="t_notices">Class Notices <span class="ncnt">${notices.length}</span></button>
    <button class="nbtn" data-page="t_students">Students &amp; Notes <span class="ncnt" id="dirCount">${peers.length}</span></button>
    <button class="nbtn" data-page="t_profile">Teacher Profile</button>
  ` : `
    <button class="nbtn" data-page="dashboard">Dashboard</button>
    <button class="nbtn" data-page="profile">My Profile</button>
    <button class="nbtn" data-page="attendance">Attendance</button>
    <button class="nbtn" data-page="results">Results &amp; Quiz</button>
    <button class="nbtn" data-page="directory">Classmates <span class="ncnt" id="dirCount">${peers.length}</span></button>
    <button class="nbtn" data-page="timetable">Timetable</button>
    <button class="nbtn" data-page="achievements">Achievements</button>
  `;
}

function render() {
  const p = st.profile;
  const titles = {
    dashboard: "Dashboard", profile: "My Profile", attendance: "Attendance",
    results: "Results & Central Quiz", directory: "Classmates", timetable: "Timetable",
    achievements: "Achievements", settings: "Settings",
    t_dashboard: "Teacher Dashboard", t_notices: "Class Notices",
    t_students: "Students & Mentor Notes", t_profile: "Teacher Profile"
  };
  renderNav();
  document.getElementById("crumb").textContent = titles[page] || "Dashboard";
  document.querySelectorAll("#sidebar .nbtn[data-page]").forEach(b => b.classList.toggle("active", b.dataset.page === page));
  document.getElementById("sName").textContent = p.full_name || (p.role === "teacher" ? "Faculty" : "Student");
  document.getElementById("sMeta").textContent = p.role === "teacher" ? (p.department || "Teacher") : `${p.study_year} · ${p.branch}`;
  document.getElementById("sAv").textContent = ini(p.full_name);
  document.getElementById("tAv").textContent = ini(p.full_name);

  const views = {
    dashboard: vDash, profile: vProf, attendance: vAtt, results: vRes,
    directory: vDir, timetable: vTT, achievements: vAch, settings: vSet,
    t_dashboard: vTDash, t_notices: vTNotices, t_students: vTStudents, t_profile: vTProfile
  };
  document.getElementById("content").innerHTML = (views[page] || vDash)();
  if (page === "directory") dirCards(false);
  if (page === "t_students") dirCards(true);
}

function go(p) {
  page = p;
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("scrim").classList.remove("open");
  render();
  scrollTo(0, 0);
}

document.getElementById("sidebar").onclick = e => {
  const b = e.target.closest("[data-page]");
  if (b) go(b.dataset.page);
};
document.getElementById("mBtn").onclick = () => {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("scrim").classList.add("open");
};
document.getElementById("scrim").onclick = () => {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("scrim").classList.remove("open");
};
document.getElementById("qSrch").onclick = () => {
  go("directory");
  setTimeout(() => document.getElementById("dSrch")?.focus(), 60);
};
document.addEventListener("keydown", e => {
  if (e.key === "Escape") document.getElementById("modalRoot").innerHTML = "";
});
addEventListener("DOMContentLoaded", init);
