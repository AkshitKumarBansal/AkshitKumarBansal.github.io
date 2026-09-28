import React, { useState, useEffect } from 'react';
import { Code2, Target, Zap, AlertCircle } from 'lucide-react';

const LeetCodeStats = ({ username = "your_leetcode_username" }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        setLoading(true);
        // Using a popular open-source wrapper for LeetCode's GraphQL API
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        const data = await response.json();

        if (data.status === "success") {
          setStats(data);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch LeetCode stats", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchLeetCodeStats();
    }
  }, [username]);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8 bg-slate-900 rounded-xl border border-slate-800 animate-pulse min-h-[250px]">
        <p className="text-slate-400">Loading live stats...</p>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="flex flex-col justify-center items-center p-8 bg-slate-900 rounded-xl border border-red-900/50 min-h-[250px]">
        <AlertCircle className="w-8 h-8 text-red-500 mb-2" />
        <p className="text-slate-400 text-sm">Could not load LeetCode profile.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 shadow-xl w-full max-w-md">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Code2 className="text-yellow-500 w-6 h-6" />
          <h3 className="text-xl font-bold text-white">LeetCode Stats</h3>
        </div>
        <span className="text-xs font-mono bg-slate-800 text-slate-300 px-2 py-1 rounded">
          @{username}
        </span>
      </div>

      {/* Total Solved Overview */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-slate-400 text-sm mb-1">Total Solved</p>
          <div className="text-4xl font-bold text-white tracking-tight">
            {stats.totalSolved} <span className="text-lg text-slate-500 font-normal">/ {stats.totalQuestions}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-1 text-emerald-400 mb-1">
            <Target className="w-4 h-4" />
            <span className="text-sm font-semibold">{stats.acceptanceRate}%</span>
          </div>
          <p className="text-xs text-slate-500">Acceptance Rate</p>
        </div>
      </div>

      {/* Difficulty Breakdown */}
      <div className="space-y-4">
        {/* Easy */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-emerald-400">Easy</span>
            <span className="text-slate-300 font-medium">{stats.easySolved} <span className="text-slate-600 text-xs">/ {stats.totalEasy}</span></span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div 
              className="bg-emerald-400 h-2 rounded-full" 
              style={{ width: `${(stats.easySolved / stats.totalEasy) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Medium */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-yellow-400">Medium</span>
            <span className="text-slate-300 font-medium">{stats.mediumSolved} <span className="text-slate-600 text-xs">/ {stats.totalMedium}</span></span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div 
              className="bg-yellow-400 h-2 rounded-full" 
              style={{ width: `${(stats.mediumSolved / stats.totalMedium) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Hard */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-red-400">Hard</span>
            <span className="text-slate-300 font-medium">{stats.hardSolved} <span className="text-slate-600 text-xs">/ {stats.totalHard}</span></span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div 
              className="bg-red-400 h-2 rounded-full" 
              style={{ width: `${(stats.hardSolved / stats.totalHard) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Algorithmic Focus Badges */}
      <div className="mt-6 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 mb-3 text-sm text-slate-400">
          <Zap className="w-4 h-4 text-blue-400" />
          <span>Core Competencies</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded border border-blue-500/20">Dynamic Programming</span>
          <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/20">Graph Algorithms</span>
          <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded border border-orange-500/20">Monotonic Stacks</span>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeStats;