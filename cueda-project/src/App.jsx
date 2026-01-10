import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  Cpu, 
  Terminal, 
  ChevronRight, 
  ExternalLink, 
  MousePointer2, 
  Layers,
  Book,
  X,
  PanelLeftOpen,
  Trophy,
  Medal,
  Award,
  Microscope,
  Network,
  Binary,
  FileCode,
  ArrowRight,
  Maximize2,
  Menu,
  ChevronDown
} from 'lucide-react';

/**
 * CUHK Color Palette Constants
 * Primary Purple: #532E74
 * Accent Gold: #B98336
 */
const CUHK_PURPLE = '#532E74';
const CUHK_GOLD = '#B98336';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSidebarOpen(false);
  }, [currentPage]);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isSidebarOpen]);

  // Helper to scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsSidebarOpen(false);
    }
  };

  const Nav = () => (
    <nav className="sticky top-0 z-40 w-full bg-white/10 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button onClick={() => setCurrentPage('home')} className="text-2xl font-black tracking-tighter flex items-center text-slate-900 cursor-pointer outline-none hover:opacity-80 transition uppercase">
            CU<span style={{ color: CUHK_GOLD }}>EDA</span>
          </button>
          <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-600">
            <button 
              onClick={() => setCurrentPage('features')} 
              className={`transition-colors hover:text-[${CUHK_PURPLE}] ${currentPage === 'features' ? `text-[${CUHK_PURPLE}]` : ''}`}
              style={{ color: currentPage === 'features' ? CUHK_PURPLE : undefined }}
            >
              Features
            </button>
            <button 
              onClick={() => setCurrentPage('docs')} 
              className={`transition-colors hover:text-[${CUHK_PURPLE}] ${currentPage === 'docs' ? `text-[${CUHK_PURPLE}]` : ''}`}
              style={{ color: currentPage === 'docs' ? CUHK_PURPLE : undefined }}
            >
              Documentation
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            style={{ backgroundColor: CUHK_PURPLE }}
            className="hidden sm:block hover:opacity-90 text-white px-5 py-2 rounded-md text-sm font-bold transition shadow-lg shadow-purple-900/10"
          >
            Request Demo
          </button>
        </div>
      </div>
    </nav>
  );

  const HomeView = () => (
    <>
      <header className="relative w-full py-24 bg-white overflow-hidden border-b border-slate-200 flex justify-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#532E74_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div 
              style={{ backgroundColor: `${CUHK_PURPLE}10`, borderColor: `${CUHK_PURPLE}20`, color: CUHK_PURPLE }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold mb-6 tracking-widest uppercase"
            >
              <Zap size={14} fill="currentColor" /> GPU-Accelerated Logic Synthesis
            </div>
            <h1 className="text-5xl lg:text-5xl font-extrabold text-slate-900 leading-[1.05] mb-6 tracking-tight">
              Accelerate Circuit Design with <span style={{ color: CUHK_PURPLE }}>GPU-Acceleration</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              CUEDA delivers the industry's fastest VLSI logic synthesis turnaround time by offloading operators to the GPU, matching industry Quality of Results (QoR) at 20x speeds.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setCurrentPage('features')} 
                style={{ backgroundColor: CUHK_PURPLE }}
                className="hover:opacity-90 text-white px-8 py-4 rounded-md font-bold text-lg flex items-center gap-2 transition transform active:scale-95 shadow-xl shadow-purple-900/20"
              >
                Explore Features <ChevronRight size={20} />
              </button>
              <button onClick={() => setCurrentPage('docs')} className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-md font-bold text-lg flex items-center gap-2 transition border border-slate-200 shadow-sm">
                Documentation
              </button>
            </div>
          </div>
          <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200 shadow-xl relative">
            <div className="bg-white rounded-xl p-6 font-mono text-sm leading-relaxed overflow-hidden border border-slate-200 shadow-inner">
              <div className="flex gap-2 mb-4 border-b border-slate-100 pb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <span className="text-slate-400 ml-2 text-xs">cueda_shell</span>
              </div>
              <p className="text-slate-400">cueda&gt; read_hdl -v2k design.v</p>
              <p className="text-slate-400">cueda&gt; elaborate</p>
              <p className="text-slate-600 font-bold">cueda&gt; syn -effort high</p>
              <p className="text-blue-600">[INFO] Dispatching 2.4M nodes to GPU...</p>
              <p className="text-emerald-600 font-bold">[SUCCESS] Synthesis complete, Overall Runtime: 10.00s</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-[10px] text-slate-400 font-black mb-1">Runtime Speedup</div>
                <div className="text-2xl font-black text-blue-600">30x</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-[10px] text-slate-400 font-black mb-1">QoR Variance</div>
                <div className="text-2xl font-black text-emerald-600">&lt; 10%</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="w-full pt-10 pb-10 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10 mb-24">
            <div className="group bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-xl relative overflow-hidden cursor-pointer" 
                 onClick={() => setCurrentPage('docs')}
                 onMouseEnter={(e) => e.currentTarget.style.borderColor = CUHK_PURPLE}
                 onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
              <div style={{ backgroundColor: `${CUHK_PURPLE}10`, color: CUHK_PURPLE }} className="p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <MousePointer2 size={24} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Instant Feedback</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                Real-time QoR evaluation directly in your editor as you code RTL.
              </p>
              <span style={{ color: CUHK_PURPLE }} className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                Marketplace <ChevronRight size={16} />
              </span>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-xl cursor-pointer" 
                 onClick={() => setCurrentPage('features')}
                 onMouseEnter={(e) => e.currentTarget.style.borderColor = CUHK_PURPLE}
                 onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
              <div style={{ backgroundColor: `${CUHK_PURPLE}10`, color: CUHK_PURPLE }} className="p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu size={24} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">GPU-Native Kernels</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                Optimized for NVIDIA CUDA, handling massive logic restructuring.
              </p>
              <span style={{ color: CUHK_PURPLE }} className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                Technical Detail <ChevronRight size={16} />
              </span>
            </div>

            <div className="group bg-white p-8 rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-xl cursor-default"
                 onMouseEnter={(e) => e.currentTarget.style.borderColor = CUHK_PURPLE}
                 onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
              <div style={{ backgroundColor: `${CUHK_PURPLE}10`, color: CUHK_PURPLE }} className="p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Layers size={24} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Modular API</h3>
              <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                Available as a C++/Python Shared Library for custom integration.
              </p>
              <span style={{ color: CUHK_PURPLE }} className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all">
                API Docs <ChevronRight size={16} />
              </span>
            </div>
          </div>

          <div className="w-full bg-white rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden shadow-xl border border-slate-200">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none text-slate-900">
              <Trophy size={200} />
            </div>
            
            <div className="relative z-10">
              <div style={{ backgroundColor: `${CUHK_PURPLE}10`, borderColor: `${CUHK_PURPLE}20`, color: CUHK_PURPLE }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black tracking-widest uppercase mb-8">
                <Award size={14} /> Academic & Industrial Excellence
              </div>
              
              <h2 className="text-4xl font-black text-slate-900 mb-12 tracking-tight">Awards</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 style={{ color: CUHK_PURPLE }} className="font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <Medal size={16} /> Honors
                  </h4>
                  <ul className="space-y-6 text-slate-600">
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></div>
                      <p><span className="text-slate-900 font-bold">Best Paper Award Nomination</span>, ICCAD, 2025.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: CUHK_GOLD }}></div>
                      <p><span className="text-slate-900 font-bold">Best Paper Award</span>, ASP-DAC, 2024.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></div>
                      <p><span className="text-slate-900 font-bold">Best Paper Award Nomination</span>, DAC, 2023.</p>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h4 style={{ color: CUHK_GOLD }} className="font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <Trophy size={16} /> Global CAD Contests
                  </h4>
                  <ul className="space-y-6 text-slate-600">
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></div>
                      <p><span className="text-slate-900 font-bold">Second Place</span>, ICCAD CAD Contest, 2025.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300  shrink-0"></div>
                      <p><span className="text-slate-900 font-bold">Second Place</span>, ICCAD CAD Contest, 2024.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: CUHK_GOLD }}></div>
                      <p><span className="text-slate-900 font-bold">First Place</span>, ICCAD CAD Contest, 2021.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const FeaturesPageView = () => (
    <div className="w-full bg-white min-h-screen">
      <section className="py-24 max-w-[1440px] mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-24">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-grow">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Massive Parallellism on GPUs</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our core synthesis engine offloads logic optimization tasks to thousands of CUDA cores. By processing millions of And-Inverter Graph (AIG) nodes simultaneously, we achieve up to 100x speedups on extremely large circuits.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold border border-slate-200">CUDA Optimized</span>
                </div>
              </div>
              <div className="w-full lg:w-1/3 shrink-0">
                <img src="massivepara.png" alt="Massive Parallel Optimization" className="w-full rounded-2xl border border-slate-200 shadow-sm" />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-grow">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Fine-grained Thread Scheduling</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Fine-grained thread scheduling for each logic operator enumerates more optimization opportunities.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold border border-slate-200">Fine-grained Scheduling</span>
                </div>
              </div>
              <div className="w-full lg:w-1/3 shrink-0">
                <img src="finegrainedschedule.png" alt="Fine-grained GPU Scheduling" className="w-full rounded-2xl border border-slate-200 shadow-sm" />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-grow">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Heterogeneous Parallelism Schemes</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Parallellism on heterogeneous levels ensures global and local optimization.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold border border-slate-200">Multi-Dimension</span>
                </div>
              </div>
              <div className="w-full lg:w-1/3 shrink-0">
                <img src="heteroparallel.png" alt="Heterogeneous Parallelism" className="w-full rounded-2xl border border-slate-200 shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const DocsView = () => {
    const docSections = [
      { 
        id: 'optimization', 
        title: 'Logic Optimization', 
        commands: [
          { cmd: 'balance', desc: 'Reduces the depth of the AIG by tree-balancing. Offloaded to GPU via parallel level-order traversal.' },
          { cmd: 'rewrite', desc: 'Performs local AIG rewriting by finding smaller subgraphs in a pre-computed database.' },
          { cmd: 'refactor', desc: 'Iteratively collapses and re-synthesizes logic cones to reduce node count.' },
          { cmd: 'resub', desc: 'Logic resubstitution: expresses a node as a function of existing nodes in the circuit.' },
          { cmd: 'strash', desc: 'Structural hashing: transforms the circuit into an AIG with one-level functional reduction.' },
          { cmd: 'recopt', desc: 'Recursive optimization: combines rewriting and refactoring for deep logic compression.' }
        ]
      },
      { 
        id: 'mapping', 
        title: 'Mapping & Verification', 
        commands: [
          { cmd: 'lutmap', desc: 'FPGA-style technology mapping. Computes optimal K-LUT covers using parallel area/delay cuts.' },
          { cmd: 'scmap', desc: 'Standard cell mapping. Matches technology-independent AIGs against target library gates.' },
          { cmd: 'cec', desc: 'Combinational Equivalence Checking. Proves identity between two circuits using SAT-based GPU kernels.' }
        ]
      },
      { 
        id: 'timing', 
        title: 'Timing', 
        commands: [
          { cmd: 'sta', desc: 'Static Timing Analysis. GPU-accelerated arrival/required time propagation and slack calculation.' },
          { cmd: 'report_timing', desc: 'Report global timing information and critical path of the circuit.' },
          { cmd: 'sizing', desc: 'Performs gate sizing to fix timing violations.' },
          { cmd: 'bf', desc: 'Inserts and optimizes buffer trees to fix high-fanout nets and hold/setup violations.' }
        ]
      }
    ];

    return (
      <div className="max-w-[1440px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 w-full min-h-screen relative">
        {/* Mobile Sidebar Toggle */}
        <div className="fixed top-20 left-6 z-50 md:hidden">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center gap-2 bg-white/60 backdrop-blur-lg hover:bg-white/80 text-slate-900 p-3 rounded-xl font-bold text-sm border border-white/50 shadow-lg transition-all active:scale-95 group"
          >
            <PanelLeftOpen size={20} className="text-[${CUHK_PURPLE}]" />
          </button>
        </div>

        {isSidebarOpen && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] md:hidden" onClick={() => setIsSidebarOpen(false)} />
        )}

        <aside className={`
          fixed inset-y-0 left-0 z-[70] bg-white w-72 p-8 border-r border-slate-200 
          transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform
          md:relative md:translate-x-0 md:bg-transparent md:border-none md:p-0 md:w-64 md:z-auto md:block
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="sticky top-28 space-y-8">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Getting Started</h4>
              <ul className="space-y-2 text-sm font-semibold">
                {docSections.map(section => (
                  <li key={section.id}>
                    <button 
                      onClick={() => scrollToSection(section.id)}
                      className="text-slate-500 hover:text-slate-900 hover:translate-x-1 transition-all flex items-center gap-2 py-1 w-full text-left"
                    >
                      <ChevronRight size={14} />
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Pro Tip</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Use <code className="text-slate-900 font-bold">help &lt;cmd&gt;</code> in the shell for detailed parameter documentation.
              </p>
            </div> */}
          </div>
        </aside>

        <article className="flex-grow max-w-3xl prose prose-slate">
          <div className="mb-16">
            <div style={{ color: CUHK_PURPLE }} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4">
              <Terminal size={14} /> Documentation
            </div>
            <h1 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">GPU-Accelerated Operator Commands</h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              CUEDA implements a high-performance library of logic synthesis operators with massive GPU acceleration.
            </p>
          </div>

          <div className="space-y-6">
            {docSections.map(section => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h3 className="text-2xl font-black text-slate-900 border-b-4 w-fit pb-2 mb-8" style={{ borderColor: section.id === 'optimization' ? CUHK_PURPLE : section.id === 'mapping' ? CUHK_PURPLE : CUHK_PURPLE }}>
                  {section.title}
                </h3>
                <div className="grid gap-3">
                  {section.commands.map(item => (
                    <div key={item.cmd} className="group flex flex-col sm:flex-row gap-4 p-3 rounded-2xl bg-white border border-slate-200 transition-all hover:shadow-md hover:border-slate-300">
                      <div className="shrink-0">
                        <code className={`font-mono font-bold px-3 py-1 rounded-lg text-sm transition-colors ${
                          section.id === 'optimization' ? 'bg-slate-50 text-black-600' : 
                          section.id === 'mapping' ? 'bg-slate-50 text-black-600' : 
                          'bg-slate-50 text-black-600'
                        }`}>
                          {item.cmd}
                        </code>
                      </div>
                      <div className="flex-grow">
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Footer of the article */}
          {/* <div className="mt-24 pt-12 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-sm text-slate-400 italic">Last updated: Oct 2025</div>
            <button className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:gap-3 transition-all">
              View API Documentation <ExternalLink size={16} />
            </button>
          </div> */}
        </article>
      </div>
    );
  };

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50 flex flex-col w-full selection:bg-purple-100">
      <Nav />
      <main className="w-full flex-grow">
        {currentPage === 'home' && <HomeView />}
        {currentPage === 'features' && <FeaturesPageView />}
        {currentPage === 'docs' && <DocsView />}
      </main>
      <footer className="w-full bg-white text-slate-400 py-16 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center gap-6">
          <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">CU<span style={{ color: CUHK_GOLD }}>EDA</span></span>
          <p className="text-xs font-bold uppercase tracking-[0.3em]">© 2025 CUEDA Limited</p>
        </div>
      </footer>
    </div>
  );
};

export default App;