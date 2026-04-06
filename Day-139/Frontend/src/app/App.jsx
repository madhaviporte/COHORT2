import { useState, useRef, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './App.css'

/* =====================================================
   MOCK DATA – simulates AI Arena API response
   ===================================================== */
const MOCK_RESPONSE = {
  problem: "write a code for Factorial function in js",
  solution_1: `# Factorial Function in JavaScript

Here are several ways to implement a factorial function in JavaScript:

## 1. Basic Recursive Approach
\`\`\`javascript
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(5)); // Output: 120
\`\`\`

## 2. Iterative Approach (for better performance with large numbers)
\`\`\`javascript
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(5)); // Output: 120
\`\`\`

## 3. One-line Recursive Approach (ES6)
\`\`\`javascript
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

// Example usage:
console.log(factorial(5)); // Output: 120
\`\`\`

## 4. Using BigInt for very large numbers
\`\`\`javascript
function factorial(n) {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(20n).toString()); // Output: "2432902008176640000"
\`\`\`

## 5. Memoization (caching results for better performance)
\`\`\`javascript
const factorial = (function() {
    const cache = {0: 1, 1: 1};

    return function(n) {
        if (cache[n] !== undefined) {
            return cache[n];
        }
        return cache[n] = n * factorial(n - 1);
    };
})();

// Example usage:
console.log(factorial(5)); // Output: 120
\`\`\`

**Note:** The recursive approach may cause a stack overflow for very large numbers (typically n > 10,000 in most JavaScript engines). For production use with large numbers, the iterative approach or BigInt version is recommended.`,
  solution_2: `Certainly! Below is a simple implementation of a factorial function in JavaScript. This function calculates the factorial of a given non-negative integer \`n\`.

\`\`\`javascript
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(5));   // Output: 120
console.log(factorial(0));   // Output: 1
console.log(factorial(-1));  // Output: "Factorial is not defined for negative numbers."
\`\`\`

### Explanation:
- **Input Validation**: The function first checks if the input \`n\` is negative. If it is, it returns a message indicating that factorial is not defined for negative numbers.
- **Base Case**: If \`n\` is 0 or 1, the factorial is 1, so the function returns 1.
- **Iterative Calculation**: For \`n > 1\`, the function initializes \`result\` to 1 and then iterates from 2 to \`n\`, multiplying \`result\` by each integer in this range.

### Recursive Version:
If you prefer a recursive implementation, here it is:

\`\`\`javascript
function factorialRecursive(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

// Example usage:
console.log(factorialRecursive(5));   // Output: 120
console.log(factorialRecursive(0));   // Output: 1
console.log(factorialRecursive(-1));  // Output: "Factorial is not defined for negative numbers."
\`\`\`

Both versions achieve the same result, but the iterative version is generally more efficient in terms of stack space, especially for larger values of \`n\`.`,
  judge: {
    solution_1_score: 9,
    solution_2_score: 8,
    solution_1_reasoning: "Solution 1 is comprehensive and covers various programming paradigms (recursive, iterative, ES6, memoization). Crucially, it includes a BigInt implementation, which is essential for factorial functions in JavaScript because standard Numbers lose precision after 18! or 21!. The inclusion of a memoized version also shows a deep understanding of optimization. However, it lacks input validation for negative integers, which would cause a stack overflow in the recursive examples.",
    solution_2_reasoning: "Solution 2 is more robust for beginners because it includes input validation for negative numbers. The code is clean and the explanations are clear. However, it misses the BigInt implementation. Without BigInt, the function returns inaccurate results for inputs larger than 21, and the results eventually become 'Infinity' after 170!, which is a significant limitation for a mathematical utility in JavaScript."
  }
}

/* =====================================================
   EXAMPLE PROMPTS
   ===================================================== */
const EXAMPLE_PROMPTS = [
  "Sort an array in JavaScript",
  "Binary search algorithm in Python",
  "Fibonacci sequence using dynamic programming",
  "Reverse a linked list in C++",
  "Find duplicates in an array",
]

/* =====================================================
   HISTORY ITEMS (mock)
   ===================================================== */
const HISTORY_ITEMS = [
  { id: 1, text: "Factorial function in JS", icon: "💬" },
  { id: 2, text: "Bubble sort algorithm", icon: "💬" },
  { id: 3, text: "REST API design pattern", icon: "💬" },
  { id: 4, text: "React hooks explained", icon: "💬" },
]

/* =====================================================
   SCORE BAR COMPONENT
   ===================================================== */
function ScoreBar({ score, maxScore = 10, variant }) {
  const pct = (score / maxScore) * 100
  return (
    <div className="score-bar-track">
      <div
        className={`score-bar-fill ${variant === 'purple' ? 'bar-purple' : 'bar-cyan'}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

/* =====================================================
   SOLUTION CARD COMPONENT
   ===================================================== */
function SolutionCard({ solutionNumber, content, score, model }) {
  const isPurple = solutionNumber === 1
  const scoreClass = score >= 9 ? 'score-high' : 'score-mid'

  return (
    <div className={`glass-card solution-card solution-${solutionNumber} fade-in-up`}>
      <div className={isPurple ? 'solution-card-glow-1' : 'solution-card-glow-2'} />
      <div className="solution-card-header">
        <div className="solution-badge">
          <span className={`solution-badge-pill ${isPurple ? 'pill-purple' : 'pill-cyan'}`}>
            Solution {solutionNumber}
          </span>
          <span className="solution-model">⚡ {model}</span>
        </div>
        <div className={`score-badge ${scoreClass}`}>
          <span>⭐</span>
          <span>{score}/10</span>
        </div>
      </div>
      <div className="solution-card-body">
        <div className="md-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

/* =====================================================
   JUDGE CARD COMPONENT
   ===================================================== */
function JudgeCard({ judge }) {
  const winner = judge.solution_1_score >= judge.solution_2_score ? 'Solution 1' : 'Solution 2'

  return (
    <div className="glass-card judge-card fade-in-up">
      <div className="judge-card-glow" />
      <div className="judge-card-header">
        <span style={{ fontSize: 20 }}>⚖️</span>
        <h3>Judge&apos;s Verdict</h3>
      </div>
      <div className="judge-card-body">

        {/* Winner Banner */}
        <div className="winner-banner">
          <span style={{ fontSize: 22 }}>🏆</span>
          <div>
            <div className="winner-text">{winner} Wins!</div>
            <div style={{ fontSize: 11, color: 'var(--on-surface-variant)', marginTop: 2 }}>
              Highest overall score
            </div>
          </div>
        </div>

        {/* Score Comparison */}
        <div className="score-comparison">
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--outline)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
            Score Comparison
          </div>
          <div className="score-row">
            <div className="score-row-header">
              <span className="score-row-label">Solution 1</span>
              <span className="score-row-value" style={{ color: 'var(--primary)' }}>
                {judge.solution_1_score}/10
              </span>
            </div>
            <ScoreBar score={judge.solution_1_score} variant="purple" />
          </div>
          <div className="score-row">
            <div className="score-row-header">
              <span className="score-row-label">Solution 2</span>
              <span className="score-row-value" style={{ color: 'var(--secondary)' }}>
                {judge.solution_2_score}/10
              </span>
            </div>
            <ScoreBar score={judge.solution_2_score} variant="cyan" />
          </div>
        </div>

        {/* Reasoning */}
        <div className="judge-reasoning-section">
          <h4>Analysis</h4>
          <div className="reasoning-item r-purple">
            <div className="reasoning-item-header">
              <span>🟣</span> Solution 1 · {judge.solution_1_score}/10
            </div>
            <p>{judge.solution_1_reasoning}</p>
          </div>
          <div className="reasoning-item r-cyan">
            <div className="reasoning-item-header">
              <span>🔵</span> Solution 2 · {judge.solution_2_score}/10
            </div>
            <p>{judge.solution_2_reasoning}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

/* =====================================================
   LOADING SKELETON
   ===================================================== */
function LoadingArena() {
  return (
    <div className="arena-response fade-in-up">
      <div className="arena-label">
        <div className="loading-dots">
          <div className="dot" /><div className="dot" /><div className="dot" />
          <span>AI models are competing…</span>
        </div>
      </div>
      <div className="loading-arena">
        {[1, 2, 3].map(i => (
          <div key={i} className="loading-card">
            <div className="skeleton" style={{ height: 24, width: '60%' }} />
            <div className="skeleton" style={{ height: 14, width: '100%' }} />
            <div className="skeleton" style={{ height: 14, width: '85%' }} />
            <div className="skeleton" style={{ height: 80, width: '100%', marginTop: 8 }} />
            <div className="skeleton" style={{ height: 14, width: '70%' }} />
            <div className="skeleton" style={{ height: 14, width: '90%' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

/* =====================================================
   ARENA RESULT COMPONENT
   ===================================================== */
function ArenaResult({ data }) {
  return (
    <div className="arena-response">
      <div className="arena-label">
        ⚡ Two AI models competed — here&apos;s the Arena result
      </div>
      <div className="arena-grid">
        <SolutionCard
          solutionNumber={1}
          content={data.solution_1}
          score={data.judge.solution_1_score}
          model="GPT-4"
        />
        <SolutionCard
          solutionNumber={2}
          content={data.solution_2}
          score={data.judge.solution_2_score}
          model="Claude"
        />
        <JudgeCard judge={data.judge} />
      </div>
    </div>
  )
}

/* =====================================================
   CHAT MESSAGES LIST
   ===================================================== */
function ChatMessages({ messages, isLoading }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  return (
    <div className="chat-area">
      {messages.length === 0 && !isLoading && (
        <div className="welcome-state">
          <div className="welcome-icon">⚔️</div>
          <h1 className="welcome-title">AI Arena</h1>
          <p className="welcome-subtitle">
            Submit a coding problem and watch two AI models compete. A judge will evaluate both solutions and crown a winner.
          </p>
          <div className="welcome-examples">
            {EXAMPLE_PROMPTS.map(p => (
              <span key={p} className="example-chip">{p}</span>
            ))}
          </div>
        </div>
      )}

      {messages.map((msg, idx) => (
        <div key={idx}>
          {msg.type === 'user' && (
            <div className="user-message-wrapper fade-in-up">
              <div className="user-message">
                💬 {msg.content}
              </div>
            </div>
          )}
          {msg.type === 'arena' && (
            <ArenaResult data={msg.data} />
          )}
        </div>
      ))}

      {isLoading && <LoadingArena />}
      <div ref={bottomRef} />
    </div>
  )
}

/* =====================================================
   SIDEBAR
   ===================================================== */
function Sidebar({ onNewChat, activeId }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">⚔️</div>
        <span className="sidebar-logo-text">AI Arena</span>
      </div>
      <button className="sidebar-new-chat" onClick={onNewChat} id="new-chat-btn">
        <span>✦</span> New Battle
      </button>
      <div className="sidebar-section-label">History</div>
      <div className="sidebar-history">
        {HISTORY_ITEMS.map(item => (
          <div
            key={item.id}
            className={`sidebar-history-item ${item.id === activeId ? 'active' : ''}`}
          >
            <span className="item-icon">{item.icon}</span>
            <span className="item-text">{item.text}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}

/* =====================================================
   INPUT BAR
   ===================================================== */
function InputBar({ onSend, disabled }) {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    const trimmed = value.trim()
    if (!trimmed || disabled) return
    onSend(trimmed)
    setValue('')
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }

  const handleInput = (e) => {
    setValue(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = Math.min(e.target.scrollHeight, 160) + 'px'
  }

  return (
    <div className="input-bar-container">
      <div className="input-bar">
        <textarea
          ref={textareaRef}
          id="chat-input"
          placeholder="Describe a coding problem… (Press Enter to battle)"
          value={value}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          rows={1}
          disabled={disabled}
        />
        <button
          id="send-btn"
          className="send-btn"
          onClick={handleSubmit}
          disabled={!value.trim() || disabled}
          aria-label="Send message"
        >
          ➤
        </button>
      </div>
      <p className="input-hint">
        Enter ↵ to send · Shift+Enter for new line · Two AI models will compete for your prompt
      </p>
    </div>
  )
}

/* =====================================================
   MAIN APP
   ===================================================== */
export default function App() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [chatCount, setChatCount] = useState(0)

  const handleSend = async (text) => {
    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: text }])
    setIsLoading(true)

    // Simulate API delay (1.5–2.5 seconds)
    const delay = 1500 + Math.random() * 1000
    await new Promise(resolve => setTimeout(resolve, delay))

    // Add arena result (mock)
    const responseData = {
      ...MOCK_RESPONSE,
      problem: text,
    }
    setMessages(prev => [...prev, { type: 'arena', data: responseData }])
    setIsLoading(false)
    setChatCount(prev => prev + 1)
  }

  const handleNewChat = () => {
    setMessages([])
    setIsLoading(false)
  }

  return (
    <div className="app-shell">
      <Sidebar onNewChat={handleNewChat} activeId={chatCount > 0 ? 1 : null} />
      <div className="main-content">
        <header className="top-bar">
          <span className="top-bar-title">⚔️ Battle Arena</span>
          <span className="top-bar-badge">2 Models • 1 Judge</span>
        </header>
        <ChatMessages messages={messages} isLoading={isLoading} />
        <InputBar onSend={handleSend} disabled={isLoading} />
      </div>
    </div>
  )
}
