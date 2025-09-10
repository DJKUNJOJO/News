import { useState, useMemo, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

// Dummy images for news
const newsImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
];

const dummyNews = [
  {
    id: 1,
    title: "Admissions Open for 2025",
    date: "2025-09-09",
    category: "Admissions",
    details: "Applications for the 2025 batch are now open. Visit the admissions portal to apply. Early applicants get priority counseling and scholarship consideration.",
  },
  {
    id: 2,
    title: "Cultural Fest Announced",
    date: "2025-09-10",
    category: "Cultural",
    details: "The annual cultural fest will be held on 12th September. Register your teams now! This year features celebrity judges and a grand prize.",
  },
  {
    id: 3,
    title: "Midterm Exams Schedule Released",
    date: "2025-09-11",
    category: "Academics",
    details: "Midterm exams for all departments will begin from 15th September. Check the timetable section. Exam halls and seat numbers will be published soon.",
  },
  {
    id: 4,
    title: "Sports Meet Registrations",
    date: "2025-09-12",
    category: "Sports",
    details: "Registrations for the inter-college sports meet are now open. Last date: 18th September. New events added: relay race, chess, and e-sports.",
  },
];

function App() {
  const [modalNews, setModalNews] = useState(null);
  const [modalNewsPos, setModalNewsPos] = useState({ top: 0, left: 0, width: 0 });
  const newsRefs = useRef({});

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col" style={{ fontFamily: 'Dongle, sans-serif' }}>
      {/* Bubbles Animated Background */}
      <div className="fixed inset-0 -z-10 bubbles-bg">
        <div className="bubble bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 opacity-60" style={{ left: '10%', top: '30%', width: 180, height: 180, animationDelay: '0s' }} />
        <div className="bubble bg-gradient-to-br from-blue-400 via-cyan-300 to-purple-300 opacity-50" style={{ left: '60%', top: '10%', width: 220, height: 220, animationDelay: '1s' }} />
        <div className="bubble bg-gradient-to-br from-pink-400 via-yellow-300 to-purple-400 opacity-40" style={{ left: '40%', top: '60%', width: 200, height: 200, animationDelay: '2s' }} />
        <div className="bubble bg-gradient-to-br from-yellow-300 via-pink-400 to-blue-400 opacity-30" style={{ left: '80%', top: '50%', width: 160, height: 160, animationDelay: '1.5s' }} />
        <div className="bubble bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-400 opacity-40" style={{ left: '25%', top: '80%', width: 170, height: 170, animationDelay: '2.5s' }} />
      </div>
      <Toaster position="top-right" />
      <div className="relative z-10 flex flex-col items-center w-full min-h-screen pt-8 pb-8">
        {/* Glassmorphic Card Wrapper for all content */}
        <div className="w-full max-w-5xl mx-auto px-4 py-8 bg-white/30 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 flex flex-col gap-8">
          {/* Header Section */}
          <header className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="text-5xl font-bold tracking-wide text-navy drop-shadow-lg" style={{ fontFamily: 'Dongle, sans-serif', letterSpacing: '0.04em' }}>College ERP</div>
            <nav className="flex gap-6 mt-2 md:mt-0">
              <a href="#" className="text-blue-400 hover:text-pink-400 text-2xl transition font-bold">Home</a>
              <a href="#" className="text-blue-400 hover:text-pink-400 text-2xl transition font-bold">About</a>
              <a href="#" className="text-blue-400 hover:text-pink-400 text-2xl transition font-bold">Contact</a>
            </nav>
          </header>
          {/* Main Content */}
          <main className="flex-grow flex flex-col gap-8">
            {/* Section 1: Announcements & News */}
            <section className="w-full animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 text-blue-700" style={{ fontFamily: 'Dongle, sans-serif' }}>Latest Announcements & News</h2>
              <div className="bg-white/50 backdrop-blur-xl rounded-2xl shadow-lg p-8 space-y-6 border border-blue-200/50">
                {dummyNews.map((news) => (
                  <div key={news.id} className="border-b border-blue-100 pb-4 last:border-b-0">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-blue-400 text-lg font-bold">{news.date}</div>
                        <div className="font-bold text-2xl text-navy drop-shadow-sm">{news.title}</div>
                      </div>
                      <button
                        className="text-navy hover:text-pink-400 transition-transform duration-200 hover:scale-125 text-3xl"
                        onClick={() => setModalNews(news)}
                        aria-label="View details"
                      >
                        <span className="inline-block animate-bounce">&gt;</span>
                      </button>
                    </div>
                    <div className="text-navy/80 text-xl mt-1">{news.excerpt}</div>
                  </div>
                ))}
              </div>
            </section>
            {modalNews && (
              <div
                className="fixed z-50 flex items-center justify-center animate-fade-in"
                style={{
                  pointerEvents: 'auto',
                  background: 'rgba(30,40,80,0.18)',
                  top: 0,
                  left: 0,
                  width: '100vw',
                  height: '100vh',
                  backdropFilter: 'blur(2px)',
                  WebkitBackdropFilter: 'blur(2px)',
                }}
              >
                <div
                  className="relative rounded-3xl animate-fade-in-down"
                  style={{
                    minWidth: 320,
                    maxWidth: 420,
                    width: '90vw',
                    marginTop: (modalNewsPos.top || 0) + (modalNewsPos.height ? modalNewsPos.height * 0.6 : 60),
                    marginLeft: modalNewsPos.left + modalNewsPos.width / 2 - 210,
                    position: 'absolute',
                    zIndex: 100,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 60%, rgba(180,200,255,0.35) 100%)',
                    border: '2.5px solid',
                    borderImage: 'linear-gradient(90deg, #a5b4fc 0%, #f0abfc 100%) 1',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 1.5px 8px 0 rgba(180,200,255,0.10) inset',
                    padding: '2.5rem 2rem 2rem 2rem',
                    overflow: 'visible',
                    transition: 'transform 0.25s cubic-bezier(.4,2,.6,1), opacity 0.2s',
                    animation: 'scaleIn 0.25s cubic-bezier(.4,2,.6,1)',
                    backdropFilter: 'blur(18px)',
                    WebkitBackdropFilter: 'blur(18px)',
                  }}
                >
                  {/* Floating icon */}
                  <div style={{
                    position: 'absolute',
                    top: -38,
                    left: 32,
                    width: 56,
                    height: 56,
                    background: 'linear-gradient(135deg, #a5b4fc 0%, #f0abfc 100%)',
                    borderRadius: '50%',
                    boxShadow: '0 4px 16px 0 rgba(180,200,255,0.18)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 32,
                    color: '#fff',
                    zIndex: 102,
                    border: '3px solid #fff',
                  }}>
                    📰
                  </div>
                  {/* Elegant Arrow pointer */}
                  <div style={{
                    position: 'absolute',
                    top: -18,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '18px solid transparent',
                    borderRight: '18px solid transparent',
                    borderBottom: '18px solid #e0e7ff',
                    filter: 'drop-shadow(0 2px 6px rgba(31,38,135,0.10))',
                    zIndex: 101,
                  }} />
                  <button
                    type="button"
                    className="absolute right-3 bg-gradient-to-br from-blue-100 via-white to-pink-100 rounded-full shadow p-1 text-blue-400 hover:text-pink-400 hover:bg-blue-50 text-3xl transition border border-blue-100"
                    onClick={() => setModalNews(null)}
                    aria-label="Close"
                    style={{ top: 18, lineHeight: 1, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px 0 rgba(180,200,255,0.10)', position: 'absolute' }}
                  >
                    &times;
                  </button>
                  <div className="mb-2 flex items-center gap-2 mt-2">
                    <span className="text-lg text-blue-400 font-bold" style={{ fontFamily: 'Dongle, sans-serif' }}>{modalNews.date}</span>
                    <span className="text-lg px-3 py-1 rounded-full font-semibold bg-blue-100 text-navy" style={{ fontFamily: 'Dongle, sans-serif' }}>{modalNews.category}</span>
                  </div>
                  <div className="font-bold text-2xl mb-2 text-navy drop-shadow" style={{ fontFamily: 'Dongle, sans-serif', letterSpacing: '0.01em' }}>{modalNews.title}</div>
                  <div className="mb-4 text-navy/80 text-lg leading-relaxed" style={{ fontFamily: 'Dongle, sans-serif', fontWeight: 400 }}>{modalNews.details}</div>
                  <button className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 text-white px-7 py-2.5 rounded-xl hover:from-pink-400 hover:to-purple-400 font-bold shadow transition-all duration-200 mt-2 text-lg" onClick={() => setModalNews(null)} style={{ fontFamily: 'Dongle, sans-serif' }}>Close</button>
                </div>
                <style>{`
                  @keyframes scaleIn {
                    0% { opacity: 0; transform: scale(0.92) translateY(30px); }
                    100% { opacity: 1; transform: scale(1) translateY(0); }
                  }
                `}</style>
              </div>
            )}
            {/* News Section - Enhanced with images and tooltips */}
            <section className="w-full max-w-5xl mx-auto mb-8 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">📰</span>
                <h2 className="text-4xl font-bold text-blue-700" style={{ fontFamily: 'Dongle, sans-serif' }}>Latest News</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dummyNews.map((news, idx) => (
                  <div
                    key={news.id}
                    ref={el => newsRefs.current[news.id] = el}
                    className="bg-white/60 backdrop-blur-2xl rounded-2xl shadow-lg p-0 border border-blue-200/40 flex flex-col gap-0 cursor-pointer hover:scale-[1.025] transition-transform duration-200 relative group focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onClick={e => {
                      const rect = newsRefs.current[news.id]?.getBoundingClientRect();
                      setModalNewsPos(rect ? { top: rect.top + window.scrollY, left: rect.left + window.scrollX, width: rect.width } : { top: 100, left: 100, width: 400 });
                      setModalNews(news);
                    }}
                    tabIndex={0}
                    aria-label={`Open news: ${news.title}`}
                    role="button"
                    onKeyDown={e => { if (e.key === 'Enter') {
                      const rect = newsRefs.current[news.id]?.getBoundingClientRect();
                      setModalNewsPos(rect ? { top: rect.top + window.scrollY, left: rect.left + window.scrollX, width: rect.width } : { top: 100, left: 100, width: 400 });
                      setModalNews(news);
                    }}}
                    title="Click for full details"
                  >
                    <img src={newsImages[idx % newsImages.length]} alt="News visual" className="rounded-t-2xl w-full h-40 object-cover mb-0" />
                    <div className="flex flex-col gap-2 p-6">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg text-blue-400 font-bold">{news.date}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-blue-100 text-navy">{news.category}</span>
                      </div>
                      <div className="font-bold text-xl mb-1 text-navy drop-shadow" style={{ fontFamily: 'Dongle, sans-serif' }}>{news.title}</div>
                      <div className="text-navy/80 text-base mb-2 line-clamp-2">{news.details}</div>
                      <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 text-2xl">→</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Subscribe UI - Bubbles Theme */}
            <div className="relative flex justify-center items-center min-h-[260px] animate-fade-in">
              {/* Bubbles background for subscribe section (optional, can be removed if too much) */}
              <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                <div className="bubble bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 opacity-60" style={{ left: '10%', top: '30%', width: 80, height: 80, animationDelay: '0s' }} />
                <div className="bubble bg-gradient-to-br from-blue-400 via-cyan-300 to-purple-300 opacity-50" style={{ left: '60%', top: '10%', width: 120, height: 120, animationDelay: '1s' }} />
                <div className="bubble bg-gradient-to-br from-pink-400 via-yellow-300 to-purple-400 opacity-40" style={{ left: '40%', top: '60%', width: 100, height: 100, animationDelay: '2s' }} />
                <div className="bubble bg-gradient-to-br from-yellow-300 via-pink-400 to-blue-400 opacity-30" style={{ left: '80%', top: '50%', width: 60, height: 60, animationDelay: '1.5s' }} />
                <div className="bubble bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-400 opacity-40" style={{ left: '25%', top: '80%', width: 70, height: 70, animationDelay: '2.5s' }} />
              </div>
              <div className="relative z-10 w-full max-w-2xl">
                <div className="bg-white/30 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 px-10 py-8 flex flex-col md:flex-row items-center gap-8" style={{ fontFamily: 'Dongle, sans-serif' }}>
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <span className="text-5xl bg-gradient-to-br from-purple-400 via-blue-400 to-pink-400 text-white rounded-full p-3 shadow-lg">📬</span>
                    <div>
                      <div className="font-bold text-3xl text-navy mb-1 tracking-wide" style={{ fontFamily: 'Dongle, sans-serif', letterSpacing: '0.04em' }}>Stay Updated!</div>
                      <div className="text-navy/80 text-xl" style={{ fontFamily: 'Dongle, sans-serif' }}>Subscribe for instant notifications on important updates.</div>
                    </div>
                  </div>
                  <form className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
                    <label htmlFor="subscribe-select" className="font-medium text-navy sr-only">Subscribe to:</label>
                    <select id="subscribe-select" className="border border-purple-300 rounded-lg px-4 py-3 bg-white/60 text-navy text-lg focus:ring-2 focus:ring-purple-400 transition-all shadow-md" style={{ fontFamily: 'Dongle, sans-serif' }}>
                      <option>Admissions</option>
                      <option>Academics</option>
                      <option>Cultural</option>
                      <option>Sports</option>
                      <option>Government Notifications</option>
                    </select>
                    <button type="submit" className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 text-white px-8 py-3 rounded-xl shadow-lg hover:from-pink-400 hover:to-purple-400 font-bold text-xl transition-all duration-200" style={{ fontFamily: 'Dongle, sans-serif' }}>Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
            {/* Section 2: Event Reminders & Registrations */}
            <EventSection />
            {/* Section 3: Engagement Tools */}
            <EngagementTools />
            {/* Section 4: ERP Ecosystem Context */}
            <section className="w-full">
              <h2 className="text-4xl font-bold mb-4 text-blue-700" style={{ fontFamily: 'Dongle, sans-serif' }}>ERP Ecosystem Context</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 shadow border border-blue-200/50 text-xl flex items-center gap-2"><span className="font-bold text-2xl">📊</span> Student Risk Dashboard: <span className="text-blue-400 font-bold ml-1">Stay informed about deadlines that affect attendance/fees.</span></div>
                <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 shadow border border-blue-200/50 text-xl flex items-center gap-2"><span className="font-bold text-2xl">🎓</span> Digital Guidance Platform: <span className="text-blue-400 font-bold ml-1">Notifies about career-related seminars and counseling sessions.</span></div>
                <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 shadow border border-blue-200/50 text-xl flex items-center gap-2"><span className="font-bold text-2xl">🌱</span> Gamified Environmental Module: <span className="text-blue-400 font-bold ml-1">Pushes eco-challenges and events.</span></div>
                <div className="bg-white/50 backdrop-blur-xl rounded-2xl p-6 shadow border border-blue-200/50 text-xl flex items-center gap-2"><span className="font-bold text-2xl">🏫</span> Smart Student Hub: <span className="text-blue-400 font-bold ml-1">Promotes portfolio-building workshops and hackathons.</span></div>
              </div>
            </section>
          </main>
          {/* Footer */}
          <footer className="w-full text-pearl-white py-10 animate-fade-in-up mt-8 bg-gradient-to-t from-blue-100/40 via-white/0 to-white/0">
            <div className="flex flex-col md:flex-row md:justify-between gap-8 px-2 max-w-6xl mx-auto">
              <div>
                <div className="font-bold mb-1 text-2xl text-blue-400 flex items-center gap-2"><span>📞</span>Contact</div>
                <div className="text-lg bg-white/90 text-blue-700 px-2 py-1 rounded mb-1 shadow-sm">ERP Support: <a href="mailto:support@college.edu" className="underline hover:text-blue-500">support@college.edu</a></div>
                <div className="text-lg bg-white/90 text-blue-700 px-2 py-1 rounded mb-1 shadow-sm">College Admin Office: <a href="mailto:admin@college.edu" className="underline hover:text-blue-500">admin@college.edu</a></div>
                <div className="text-lg mt-2 bg-white/90 text-blue-700 px-2 py-1 rounded shadow-sm">Phone: <a href="tel:+1234567890" className="underline hover:text-blue-500">+1 234 567 890</a></div>
              </div>
              <div>
                <div className="font-bold mb-1 text-2xl text-blue-400 flex items-center gap-2"><span>🔗</span>Quick Links</div>
                <div className="flex flex-col text-lg">
                  <a href="#" className="hover:underline bg-white/90 text-blue-700 px-2 py-1 rounded mb-1 shadow-sm">Admissions</a>
                  <a href="#" className="hover:underline bg-white/90 text-blue-700 px-2 py-1 rounded mb-1 shadow-sm">Hostel</a>
                  <a href="#" className="hover:underline bg-white/90 text-blue-700 px-2 py-1 rounded mb-1 shadow-sm">Fee Portal</a>
                  <a href="#" className="hover:underline bg-white/90 text-blue-700 px-2 py-1 rounded shadow-sm">Dashboard</a>
                </div>
              </div>
              <div>
                <div className="font-bold mb-1 text-2xl text-blue-400 flex items-center gap-2"><span>🤝</span>Team</div>
                <div className="flex flex-col text-lg">
                  <span className="bg-white/90 text-blue-700 px-2 py-1 rounded mb-1 shadow-sm">Jeswin CJ (Lead Dev)</span>
                  <span className="bg-white/90 text-blue-700 px-2 py-1 rounded mb-1 shadow-sm">Gokul NR(UI/UX)</span>
                  <span className="bg-white/90 text-blue-700 px-2 py-1 rounded shadow-sm">Dheeraj Jayaraj(UI/UX)</span>
                  <span className="bg-white/90 text-blue-700 px-2 py-1 rounded shadow-sm">Devika R(UI/UX)</span>
                  <span className="bg-white/90 text-blue-700 px-2 py-1 rounded shadow-sm">Kamal Nayan M.S(UI/UX)</span>
                  <span className="bg-white/90 text-blue-700 px-2 py-1 rounded shadow-sm">Karthik Krishnan(UI/UX)</span>
                  
                </div>
              </div>
              <div>
                <div className="font-bold mb-1 text-2xl text-blue-400 flex items-center gap-2"><span>🌐</span>Follow Us</div>
                <div className="flex gap-4 text-lg">
                  <a href="#" className="hover:text-pink-400 bg-white/90 text-blue-700 px-2 py-1 rounded shadow-sm" aria-label="Twitter">Twitter</a>
                  <a href="#" className="hover:text-pink-400 bg-white/90 text-blue-700 px-2 py-1 rounded shadow-sm" aria-label="Facebook">Facebook</a>
                  <a href="#" className="hover:text-pink-400 bg-white/90 text-blue-700 px-2 py-1 rounded shadow-sm" aria-label="Instagram">Instagram</a>
                </div>
              </div>
            </div>
            <div className="text-center text-blue-300 text-sm mt-8">&copy; {new Date().getFullYear()} College ERP Portal. All rights reserved.</div>
          </footer>
        </div>
      </div>
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

function downloadICS(event) {
  // event: {title, date, description}
  const dt = new Date(event.date);
  const dtEnd = new Date(dt.getTime() + 2 * 60 * 60 * 1000); // 2hr event
  function fmt(d) {
    return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  }
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `DTSTART:${fmt(dt)}`,
    `DTEND:${fmt(dtEnd)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description || ''}`,
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
  const blob = new Blob([ics], {type: 'text/calendar'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${event.title.replace(/\s+/g,'_')}.ics`;
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
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
  const [calendarModal, setCalendarModal] = useState(null);
  const [calendarModalPos, setCalendarModalPos] = useState({ top: 0, left: 0, width: 0 });
  const calendarBtnRefs = useRef({});

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
      <div className="flex items-center gap-2 mb-4">
        <span className="text-3xl">⏰</span>
        <h2 className="text-2xl font-semibold">Event Reminders & Registrations</h2>
      </div>
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
              <button
                ref={el => calendarBtnRefs.current[event.id] = el}
                className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-600"
                title="Download .ics calendar file for this event"
                onClick={() => downloadICS(event)}
              >Add to Calendar</button>
              </div>
              </div>
            ))}
            {/* Calendar Modal Popup */}
            {calendarModal && (
              <div
              className="fixed z-50 flex items-center justify-center animate-fade-in"
              style={{
                pointerEvents: 'auto',
                background: 'rgba(30,40,80,0.18)',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backdropFilter: 'blur(2px)',
                WebkitBackdropFilter: 'blur(2px)',
              }}
              >
              <div
                className="relative rounded-3xl animate-fade-in-down"
                style={{
                minWidth: 320,
                maxWidth: 420,
                width: '90vw',
                // Move modal 400px from the left edge of the viewport
                top: '50%',
                left: '0px',
                transform: 'translateY(-50%)',
                marginLeft: '400px',
                position: 'absolute',
                zIndex: 100,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 60%, rgba(180,200,255,0.35) 100%)',
                border: '2.5px solid',
                borderImage: 'linear-gradient(90deg, #a5b4fc 0%, #f0abfc 100%) 1',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25), 0 1.5px 8px 0 rgba(180,200,255,0.10) inset',
                padding: '2.5rem 2rem 2rem 2rem',
                overflow: 'visible',
                transition: 'transform 0.25s cubic-bezier(.4,2,.6,1), opacity 0.2s',
                animation: 'scaleIn 0.25s cubic-bezier(.4,2,.6,1)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                }}
              >
                {/* Floating icon */}
                <div style={{
                position: 'absolute',
                top: -38,
                left: 32,
                width: 56,
                height: 56,
                background: 'linear-gradient(135deg, #38bdf8 0%, #a5b4fc 100%)',
                borderRadius: '50%',
                boxShadow: '0 4px 16px 0 rgba(180,200,255,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                color: '#fff',
                zIndex: 102,
                border: '3px solid #fff',
                }}>
                📅
                </div>
                {/* Elegant Arrow pointer */}
              <div style={{
                position: 'absolute',
                top: -18,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '18px solid transparent',
                borderRight: '18px solid transparent',
                borderBottom: '18px solid #e0e7ff',
                filter: 'drop-shadow(0 2px 6px rgba(31,38,135,0.10))',
                zIndex: 101,
              }} />
              <button
                type="button"
                className="absolute top-3 right-3 bg-gradient-to-br from-blue-100 via-white to-pink-100 rounded-full shadow p-1 text-blue-400 hover:text-pink-400 hover:bg-blue-50 text-3xl transition border border-blue-100"
                onClick={() => setCalendarModal(null)}
                aria-label="Close"
                style={{ lineHeight: 1, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px 0 rgba(180,200,255,0.10)' }}
              >
                &times;
              </button>
              <div className="mb-2 flex items-center gap-2 mt-2">
                <span className="text-lg text-blue-400 font-bold" style={{ fontFamily: 'Dongle, sans-serif' }}>{calendarModal.date}</span>
                <span className="text-lg px-3 py-1 rounded-full font-semibold bg-blue-100 text-navy" style={{ fontFamily: 'Dongle, sans-serif' }}>{calendarModal.type}</span>
              </div>
              <div className="font-bold text-2xl mb-2 text-navy drop-shadow" style={{ fontFamily: 'Dongle, sans-serif', letterSpacing: '0.01em' }}>{calendarModal.title}</div>
              <div className="mb-4 text-navy/80 text-lg leading-relaxed" style={{ fontFamily: 'Dongle, sans-serif', fontWeight: 400 }}>{calendarModal.description}</div>
              <button className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-white px-7 py-2.5 rounded-xl hover:from-pink-400 hover:to-purple-400 font-bold shadow transition-all duration-200 mt-2 text-lg" onClick={() => setCalendarModal(null)} style={{ fontFamily: 'Dongle, sans-serif' }}>Add to Google Calendar</button>
            </div>
            <style>{`
              @keyframes scaleIn {
                0% { opacity: 0; transform: scale(0.92) translateY(30px); }
                100% { opacity: 1; transform: scale(1) translateY(0); }
              }
            `}</style>
          </div>
        )}
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
  const feedbackBtnRef = useRef(null);
  const [feedbackPos, setFeedbackPos] = useState({ top: 0, left: 0, width: 0 });

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
      <div className="flex items-center gap-2 mb-4">
        <span className="text-3xl">🛠️</span>
        <h2 className="text-2xl font-semibold">Engagement Tools</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Feedback Form as Modal Trigger */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow p-4 flex flex-col justify-between border border-blue-200/40">
          <div>
            <div className="font-bold mb-2">Event Feedback</div>
            <div className="text-gray-600 text-sm mb-2">Share your thoughts about recent events.</div>
          </div>
          <button ref={feedbackBtnRef} className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-600 mt-2" onClick={e => {
            const rect = feedbackBtnRef.current?.getBoundingClientRect();
            setFeedbackPos(rect ? { top: rect.top + window.scrollY, left: rect.left + window.scrollX, width: rect.width } : { top: 100, left: 100, width: 400 });
            setShowFeedback(true);
          }}>Open Feedback Form</button>
        </div>
        {/* Discussion Board Mock */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow p-4 border border-blue-200/40">
          <div className="font-bold mb-2">Discussion Board</div>
          <div className="text-gray-600 text-sm mb-2">(Coming soon) Peer & faculty communication</div>
          <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded cursor-not-allowed" disabled>Open Board</button>
        </div>
        {/* Poll with live % results */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow p-4 border border-blue-200/40">
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
        <div className="fixed z-50" style={{ pointerEvents: 'auto', background: 'rgba(0,0,0,0.10)', top: feedbackPos.top + 40, left: feedbackPos.left, width: feedbackPos.width, position: 'absolute' }} role="dialog" aria-modal="true">
          <div className="bg-white/90 backdrop-blur-2xl rounded-2xl shadow-lg w-full p-6 relative animate-fade-in-up border border-blue-200/40">
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
              aria-label="Feedback text area"
            />
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600" type="submit" disabled={feedbackSent}>
              {feedbackSent ? "Submitted!" : "Submit"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default App;
