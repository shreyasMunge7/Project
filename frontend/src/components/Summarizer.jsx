import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../api";
import { Loader2 } from "lucide-react";

export default function Summarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const { data } = await axios.post(`${API_BASE_URL}summarize/`, { text });
      setSummary(data.summary);
      localStorage.setItem("savedSummary", data.summary);
    } catch (error) {
      console.error("Error summarizing:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-full max-w-lg flex flex-col">
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          AI Summarizer
        </h1>

        {/* Text Area */}
        <textarea
          className="w-full border border-gray-300 rounded-lg p-3 text-lg shadow-md focus:ring-2 focus:ring-blue-500"
          rows="5"
          placeholder="Enter text to summarize..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Summarize Button */}
        <button
          onClick={handleSummarize}
          className="w-full flex items-center justify-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300"
          disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : "Summarize"}
        </button>

        {/* Summary Section (Always at Bottom) */}
        <div className="mt-6 p-4 bg-white shadow-md rounded-lg text-gray-900 min-h-[100px] flex items-center justify-center">
          {summary ? (
            <p className="text-gray-700 animate-fade-in">{summary}</p>
          ) : (
            <p className="text-gray-400 italic">Your summarized text will appear here...</p>
          )}
        </div>
      </div>
    </div>
  );
}
