import { useState, useMemo, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const dummyNews = [
  {
    id: 1,
    date: "2025-09-09",
    title: "Admissions Open for 2025",
    excerpt: "Admissions for the 2025 batch are now open. Apply before the deadline!",
    category: "Admissions",
    details: "Full details about the admissions process, eligibility, and important dates. Visit the admissions portal for more info.",
  },
  {
    id: 2,
    date: "2025-09-08",
    title: "New Sports Complex Inaugurated",
    excerpt: "The state-of-the-art sports complex is now open for all students.",
    category: "Sports",
    details: "The new complex includes facilities for football, basketball, and athletics. Inauguration event photos and schedule inside.",
  },
  {
    id: 3,
    date: "2025-09-07",
    title: "Cultural Fest Announced",
    excerpt: "Annual cultural fest dates and registration details released.",
    category: "Cultural",
    details: "Join the biggest cultural event of the year! See the list of events, rules, and registration process.",
  },
];

function App() {
  const [modalNews, setModalNews] = useState(null);

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 animate-gradient-move bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-navy via-sky to-pearl-white opacity-90"></div>
      <Toaster position="top-right" />
      {/* Header Section */}
  <header className="bg-gradient-to-r from-navy via-sky to-navy-dark text-pearl-white shadow animate-fade-in-down">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wide">College ERP</div>
          <nav className="flex gap-4">
            <a href="#" className="text-sky hover:text-pearl-white transition">Home</a>
            <a href="#" className="text-sky hover:text-pearl-white transition">About</a>
            <a href="#" className="text-sky hover:text-pearl-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
  <main className="flex-grow">
        {/* Section 1: Announcements & News */}
  <section className="max-w-5xl mx-auto w-full py-8 px-4 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-4 text-navy">Latest Announcements & News</h2>
          <div className="bg-white/40 backdrop-blur-xl rounded-2xl shadow-lg p-6 space-y-4 border border-sky-light/50 transition-transform duration-300 hover:scale-[1.01]">
            {dummyNews.map((news) => (
              <div key={news.id} className="border-b pb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sky text-sm">{news.date}</div>
                    <div className="font-bold text-lg text-navy">{news.title}</div>
                  </div>
                  <button
                    className="text-navy hover:text-sky transition-transform duration-200 hover:scale-125"
                    onClick={() => setModalNews(news)}
                    aria-label="View details"
                  >
                    <span className="inline-block animate-bounce">&gt;</span>
                  </button>
                </div>
                <div className="text-navy/80">{news.excerpt}</div>
              </div>
            ))}
          </div>
        </section>

        {modalNews && (
          <div className="fixed inset-0 bg-gradient-to-br from-navy/90 via-sky/70 to-pearl-white/80 flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-white/70 backdrop-blur-2xl rounded-2xl shadow-2xl max-w-md w-full p-8 relative border-2 border-sky-light animate-fade-in-up">
              <button
                type="button"
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
                onClick={() => setModalNews(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xs text-sky">{modalNews.date}</span>
                <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-sky-light text-navy">{modalNews.category}</span>
              </div>
              <div className="font-bold text-lg mb-2 text-navy">{modalNews.title}</div>
              <div className="mb-4 text-navy/80">{modalNews.details}</div>
              <button className="bg-navy text-pearl-white px-4 py-2 rounded-lg hover:bg-sky hover:text-navy font-semibold shadow transition-all duration-200" onClick={() => setModalNews(null)}>Close</button>
            </div>
          </div>
        )}
        {/* Subscribe UI */}
        <div className="mt-8 flex justify-center animate-fade-in">
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border border-sky-light/50 px-8 py-6 flex flex-col md:flex-row items-center gap-6 w-full max-w-2xl">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <span className="text-3xl bg-sky-light text-navy rounded-full p-2 shadow">📬</span>
              <div>
                <div className="font-bold text-lg text-navy mb-1">Stay Updated!</div>
                <div className="text-navy/70 text-sm">Subscribe to get instant notifications for important updates.</div>
              </div>
            </div>
            <form className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
              <label htmlFor="subscribe-select" className="font-medium text-navy sr-only">Subscribe to:</label>
              <select id="subscribe-select" className="border border-sky-light rounded px-3 py-2 bg-pearl-white text-navy focus:ring-2 focus:ring-sky transition-all shadow-sm">
                <option>Admissions</option>
                <option>Academics</option>
                <option>Cultural</option>
                <option>Sports</option>
                <option>Government Notifications</option>
              </select>
              <button type="submit" className="bg-gradient-to-r from-sky to-navy text-pearl-white px-5 py-2 rounded-lg shadow hover:from-navy hover:to-sky hover:text-navy font-semibold transition-all duration-200">Subscribe</button>
            </form>
          </div>
        </div>
  </main>

      {/* Section 2: Event Reminders & Registrations */}
      <EventSection />

      {/* Section 3: Engagement Tools */}
      <EngagementTools />

      {/* Section 4: ERP Ecosystem Context */}
      <section className="max-w-5xl mx-auto w-full py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">ERP Ecosystem Context</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 rounded p-4">
            <span className="font-bold">📊 Student Risk Dashboard:</span> Stay informed about deadlines that affect attendance/fees.
          </div>
          <div className="bg-blue-50 rounded p-4">
            <span className="font-bold">🎓 Digital Guidance Platform:</span> Notifies about career-related seminars and counseling sessions.
          </div>
          <div className="bg-blue-50 rounded p-4">
            <span className="font-bold">🌱 Gamified Environmental Module:</span> Pushes eco-challenges and events.
          </div>
          <div className="bg-blue-50 rounded p-4">
            <span className="font-bold">🏫 Smart Student Hub:</span> Promotes portfolio-building workshops and hackathons.
          </div>
        </div>
      </section>

      {/* Footer */}
  <footer className="bg-gradient-to-r from-navy via-sky to-navy-dark text-pearl-white py-6 mt-8 animate-fade-in-up">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between gap-4 px-4">
          <div>
            <div className="font-bold mb-1">Contact</div>
            <div>ERP Support: support@college.edu</div>
            <div>College Admin Office: admin@college.edu</div>
          </div>
          <div>
            <div className="font-bold mb-1">Quick Links</div>
            <div className="flex flex-col">
              <a href="#" className="hover:underline">Admissions</a>
              <a href="#" className="hover:underline">Hostel</a>
              <a href="#" className="hover:underline">Fee Portal</a>
              <a href="#" className="hover:underline">Dashboard</a>
            </div>
          </div>
          <div>
            <div className="font-bold mb-1">Follow Us</div>
            <div className="flex gap-2">
              <a href="#" className="hover:text-blue-300">Twitter</a>
              <a href="#" className="hover:text-blue-300">Facebook</a>
              <a href="#" className="hover:text-blue-300">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Event Section Component ---
// (imports already at top)

const dummyEvents = [
  {
    id: 1,
    title: "AI Workshop",
    date: "2025-09-09",
    type: "Workshop",
    description: "Hands-on session on AI tools and applications.",
    icon: "🤖",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 2,
    title: "Cultural Fest",
    date: "2025-09-12",
    type: "Fest",
    description: "Annual cultural extravaganza with music, dance, and drama.",
    icon: "🎉",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 3,
    title: "Seminar: Future of Tech",
    date: "2025-09-15",
    type: "Seminar",
    description: "Industry experts discuss upcoming technology trends.",
    icon: "💡",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 4,
    title: "Midterm Exams",
    date: "2025-09-10",
    type: "Exams",
    description: "Midterm exams for all departments.",
    icon: "📝",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 5,
    title: "Sports Meet",
    date: "2025-09-18",
    type: "Sports",
    description: "Inter-college athletics and games. Cheer for your teams!",
    icon: "🏅",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 6,
    title: "Blood Donation Camp",
    date: "2025-09-20",
    type: "Health",
    description: "Join the noble cause. Free health checkup for donors.",
    icon: "🩸",
    color: "bg-red-100 text-red-700",
  },
  {
    id: 7,
    title: "Coding Hackathon",
    date: "2025-09-22",
    type: "Hackathon",
    description: "24-hour coding challenge. Prizes for top teams!",
    icon: "💻",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    id: 8,
    title: "Photography Contest",
    date: "2025-09-25",
    type: "Contest",
    description: "Showcase your photography skills. Open to all students.",
    icon: "📸",
    color: "bg-orange-100 text-orange-700",
  },
];

function getDateRange(filter) {
  const today = new Date("2025-09-09"); // For demo, fixed date
  if (filter === "Today") return [today, today];
  if (filter === "This Week") {
    const end = new Date(today);
    end.setDate(today.getDate() + 6 - today.getDay());
    return [today, end];
  }
  return [today, new Date("2100-01-01")];
}

function EventSection() {
  const [filter, setFilter] = useState("Upcoming");
  const [registered, setRegistered] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("registeredEvents") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("registeredEvents", JSON.stringify(registered));
  }, [registered]);

  const filteredEvents = useMemo(() => {
    const [start, end] = getDateRange(filter);
    return dummyEvents.filter((e) => {
      const d = new Date(e.date);
      return d >= start && d <= end;
    });
  }, [filter]);

  function handleRegister(id) {
    if (!registered.includes(id)) {
      setRegistered((prev) => [...prev, id]);
      toast.success("Registered for event!");
    }
  }
  function handleUnregister(id) {
    setRegistered((prev) => prev.filter((eid) => eid !== id));
    toast("Registration removed", { icon: "🗑️" });
  }

  return (
    <section className="max-w-5xl mx-auto w-full py-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Event Reminders & Registrations</h2>
      {/* Event filters */}
      <div className="mb-4 flex gap-2 flex-wrap">
        {["Today", "This Week", "Upcoming"].map((cat) => (
          <button
            key={cat}
            className={`px-3 py-1 rounded font-medium border ${filter === cat ? "bg-blue-700 text-white" : "bg-gray-200 hover:bg-blue-200"}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Timeline view */}
      <div className="relative border-l-2 border-blue-200 ml-4 space-y-8">
        {filteredEvents.length === 0 && (
          <div className="ml-6 text-gray-400">No events found for this filter.</div>
        )}
        {filteredEvents.map((event, idx) => (
          <div
            key={event.id}
            className="ml-6 flex flex-col md:flex-row md:items-center md:justify-between group bg-white/70 rounded-xl shadow-md p-4 border-l-4 border-blue-300 hover:shadow-lg transition-all duration-200 mb-2"
          >
            <div className="flex items-center gap-4 mb-2 md:mb-0">
              <span className={`text-3xl ${event.color} rounded-full p-2 shadow-sm`}>{event.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-lg text-navy">{event.title}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ml-2 ${event.color}`}>{event.type}</span>
                </div>
                <div className="text-gray-500 text-sm mb-1">{event.date}</div>
                <div className="text-gray-700 mb-2">{event.description}</div>
              </div>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              {registered.includes(event.id) ? (
                <>
                  <button className="bg-gray-400 text-white px-3 py-1 rounded cursor-not-allowed" disabled>Registered</button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500" onClick={() => handleUnregister(event.id)}>Unregister</button>
                </>
              ) : (
                <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-500" onClick={() => handleRegister(event.id)}>Register</button>
              )}
              <button className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-600">Add to Calendar</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Engagement Tools Component ---
function EngagementTools() {
  // Poll state
  const [pollVotes, setPollVotes] = useState([5, 3, 2]); // Retro, Futuristic, Nature
  const [pollChoice, setPollChoice] = useState(null);
  const [pollVoted, setPollVoted] = useState(false);

  // Feedback modal state
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

  const totalVotes = pollVotes.reduce((a, b) => a + b, 0);
  const pollOptions = ["Retro", "Futuristic", "Nature"];

  function handleVote() {
    if (pollChoice !== null && !pollVoted) {
      const newVotes = [...pollVotes];
      newVotes[pollChoice]++;
      setPollVotes(newVotes);
      setPollVoted(true);
    }
  }

  function handleFeedbackSubmit(e) {
    e.preventDefault();
    setFeedbackSent(true);
    setTimeout(() => {
      setShowFeedback(false);
      setFeedbackSent(false);
      setFeedback("");
    }, 1200);
  }

  return (
    <section className="max-w-5xl mx-auto w-full py-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Engagement Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Feedback Form as Modal Trigger */}
        <div className="bg-white rounded shadow p-4 flex flex-col justify-between">
          <div>
            <div className="font-bold mb-2">Event Feedback</div>
            <div className="text-gray-600 text-sm mb-2">Share your thoughts about recent events.</div>
          </div>
          <button className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-600 mt-2" onClick={() => setShowFeedback(true)}>Open Feedback Form</button>
        </div>
        {/* Discussion Board Mock */}
        <div className="bg-white rounded shadow p-4">
          <div className="font-bold mb-2">Discussion Board</div>
          <div className="text-gray-600 text-sm mb-2">(Coming soon) Peer & faculty communication</div>
          <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded cursor-not-allowed" disabled>Open Board</button>
        </div>
        {/* Poll with live % results */}
        <div className="bg-white rounded shadow p-4">
          <div className="font-bold mb-2">Quick Poll</div>
          <div className="mb-2">Which fest theme do you prefer?</div>
          <div className="flex flex-col gap-1 mb-2">
            {pollOptions.map((opt, idx) => (
              <label key={opt} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="poll"
                  disabled={pollVoted}
                  checked={pollChoice === idx}
                  onChange={() => setPollChoice(idx)}
                />
                {opt}
                {pollVoted && (
                  <span className="ml-2 text-xs text-gray-500">{((pollVotes[idx] / totalVotes) * 100).toFixed(0)}%</span>
                )}
              </label>
            ))}
          </div>
          <button
            className={`mt-2 px-3 py-1 rounded text-white ${pollVoted ? "bg-gray-400 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-600"}`}
            onClick={handleVote}
            disabled={pollVoted || pollChoice === null}
          >
            {pollVoted ? "Thank you!" : "Vote"}
          </button>
        </div>
      </div>
      {/* Feedback Modal */}
      {showFeedback && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <form onSubmit={handleFeedbackSubmit} className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={() => setShowFeedback(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="font-bold text-lg mb-2">Event Feedback</div>
            <textarea
              className="w-full border rounded p-2 mb-2"
              rows={3}
              placeholder="Your feedback..."
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              required
            />
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit" disabled={feedbackSent}>
              {feedbackSent ? "Submitted!" : "Submit"}
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default App;
