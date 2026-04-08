"use client";

import { useState, useMemo } from "react";

// Indian number formatting
function formatINR(num: number): string {
  const str = Math.round(num).toString();
  let lastThree = str.substring(str.length - 3);
  const rest = str.substring(0, str.length - 3);
  if (rest !== "") lastThree = "," + lastThree;
  return "₹" + rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
}

// SIP calculation
function calculateSIP(monthlyAmount: number, annualReturn: number, years: number) {
  const monthlyRate = annualReturn / 100 / 12;
  const months = years * 12;
  const futureValue =
    monthlyAmount *
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate));
  const invested = monthlyAmount * months;
  const returns = futureValue - invested;
  return { futureValue, invested, returns };
}

// Step-up SIP calculation
function calculateStepUpSIP(
  monthlyAmount: number,
  annualReturn: number,
  years: number,
  stepUpPercent: number
) {
  const monthlyRate = annualReturn / 100 / 12;
  let futureValue = 0;
  let invested = 0;
  let currentAmount = monthlyAmount;

  for (let year = 0; year < years; year++) {
    const monthsInYear = 12;
    const yearlyInvested = currentAmount * monthsInYear;
    invested += yearlyInvested;

    // Calculate FV for this year's SIP
    const yearsRemaining = years - year;
    const monthsRemaining = yearsRemaining * 12;
    const yearlyFV =
      currentAmount *
      (((Math.pow(1 + monthlyRate, monthsRemaining) - 1) / monthlyRate) *
        (1 + monthlyRate));
    futureValue += yearlyFV;

    currentAmount = currentAmount * (1 + stepUpPercent / 100);
  }

  const returns = futureValue - invested;
  return { futureValue, invested, returns };
}

// Lump sum calculation
function calculateLumpSum(
  amount: number,
  annualReturn: number,
  years: number
) {
  const monthlyRate = annualReturn / 100 / 12;
  const months = years * 12;
  const futureValue = amount * Math.pow(1 + monthlyRate, months);
  const returns = futureValue - amount;
  return { futureValue, invested: amount, returns };
}

// Goal planner calculation - reverse SIP
function calculateGoalSIP(
  targetAmount: number,
  annualReturn: number,
  years: number,
  inflation: number
) {
  const inflationAdjustedTarget = targetAmount * Math.pow(1 + inflation / 100, years);
  const monthlyRate = annualReturn / 100 / 12;
  const months = years * 12;

  // Reverse SIP formula: P = FV / [((1 + r)^n - 1) / r * (1 + r)]
  const monthlyAmount =
    inflationAdjustedTarget /
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate));

  return {
    inflationAdjustedTarget,
    monthlyAmount,
    totalInvested: monthlyAmount * months,
  };
}

// Year-by-year breakdown
function getYearByYearBreakdown(
  monthlyAmount: number,
  annualReturn: number,
  years: number
) {
  const monthlyRate = annualReturn / 100 / 12;
  let balance = 0;
  const breakdown = [];

  for (let year = 1; year <= years; year++) {
    for (let month = 0; month < 12; month++) {
      balance = balance * (1 + monthlyRate) + monthlyAmount;
    }
    const yearlyInvested = monthlyAmount * year * 12;
    breakdown.push({
      year,
      balance: Math.round(balance),
      invested: yearlyInvested,
      returns: Math.round(balance - yearlyInvested),
    });
  }

  return breakdown;
}

export default function Home() {
  // SIP Calculator state
  const [sipMonthly, setSipMonthly] = useState(5000);
  const [sipReturn, setSipReturn] = useState(12);
  const [sipYears, setSipYears] = useState(10);

  // Step-up SIP state
  const [stepUpPercent, setStepUpPercent] = useState(10);

  // Lump sum state
  const [lumpSumAmount, setLumpSumAmount] = useState(500000);

  // Goal planner state
  const [goalType, setGoalType] = useState("home");
  const [goalAmount, setGoalAmount] = useState(5000000);
  const [goalInflation, setGoalInflation] = useState(6);
  const [goalYears, setGoalYears] = useState(10);
  const [goalReturn, setGoalReturn] = useState(12);

  // Active tab
  const [activeTab, setActiveTab] = useState("sip");

  // Show year breakdown
  const [showBreakdown, setShowBreakdown] = useState(false);

  // Calculations
  const sipResult = useMemo(() => calculateSIP(sipMonthly, sipReturn, sipYears), [sipMonthly, sipReturn, sipYears]);
  const stepUpResult = useMemo(
    () => calculateStepUpSIP(sipMonthly, sipReturn, sipYears, stepUpPercent),
    [sipMonthly, sipReturn, sipYears, stepUpPercent]
  );
  const lumpSumResult = useMemo(
    () => calculateLumpSum(lumpSumAmount, sipReturn, sipYears),
    [lumpSumAmount, sipReturn, sipYears]
  );
  const goalResult = useMemo(
    () => calculateGoalSIP(goalAmount, goalReturn, goalYears, goalInflation),
    [goalAmount, goalReturn, goalYears, goalInflation]
  );
  const yearBreakdown = useMemo(
    () => getYearByYearBreakdown(sipMonthly, sipReturn, sipYears),
    [sipMonthly, sipReturn, sipYears]
  );

  const sipDonutPercent = (sipResult.invested / sipResult.futureValue) * 100;
  const stepUpDonutPercent = (stepUpResult.invested / stepUpResult.futureValue) * 100;

  const goalTypes = [
    { id: "home", name: "Home", icon: "🏠" },
    { id: "car", name: "Car", icon: "🚗" },
    { id: "education", name: "Education", icon: "🎓" },
    { id: "retirement", name: "Retirement", icon: "🏖️" },
    { id: "wedding", name: "Wedding", icon: "💍" },
    { id: "travel", name: "Travel", icon: "✈️" },
    { id: "emergency", name: "Emergency Fund", icon: "🆘" },
    { id: "custom", name: "Custom", icon: "⭐" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">SIP Calculator</h1>
          <p className="text-green-100 text-lg">
            Calculate your investment returns, plan financial goals, and compare investment strategies
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Mode Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: "sip", label: "SIP Calculator" },
            { id: "stepup", label: "Step-Up SIP" },
            { id: "lumpsum", label: "Lump Sum vs SIP" },
            { id: "goal", label: "Goal Planner" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SIP Calculator Tab */}
        {activeTab === "sip" && (
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-8">
                {/* Monthly Amount */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Monthly Investment Amount
                  </label>
                  <div className="flex gap-3">
                    <span className="text-3xl font-bold text-green-600">{formatINR(sipMonthly)}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={sipMonthly}
                    onChange={(e) => setSipMonthly(Number(e.target.value))}
                    className="w-full mt-4"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>₹500</span>
                    <span>₹1,00,000</span>
                  </div>
                  <input
                    type="number"
                    value={sipMonthly}
                    onChange={(e) => setSipMonthly(Number(e.target.value))}
                    className="w-full mt-3 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Return Rate */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Expected Annual Return Rate
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-green-600">{sipReturn.toFixed(1)}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="0.5"
                    value={sipReturn}
                    onChange={(e) => setSipReturn(Number(e.target.value))}
                    className="w-full mt-4"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>1%</span>
                    <span>30%</span>
                  </div>
                </div>

                {/* Investment Period */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Investment Period
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-green-600">{sipYears}</span>
                    <span className="text-slate-600">years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="1"
                    value={sipYears}
                    onChange={(e) => setSipYears(Number(e.target.value))}
                    className="w-full mt-4"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>1 year</span>
                    <span>40 years</span>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                {/* Donut Chart */}
                <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl animate-donut">
                  <svg viewBox="0 0 200 200" className="w-48 h-48">
                    {/* Outer circle - invested */}
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="30"
                      strokeDasharray={`${(sipDonutPercent / 100) * 565} 565`}
                      strokeLinecap="round"
                      transform="rotate(-90 100 100)"
                    />
                    {/* Inner circle - returns */}
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="30"
                      strokeDasharray={`${((100 - sipDonutPercent) / 100) * 565} 565`}
                      strokeDashoffset={`-${(sipDonutPercent / 100) * 565}`}
                      strokeLinecap="round"
                      transform="rotate(-90 100 100)"
                    />
                    {/* Center text */}
                    <text
                      x="100"
                      y="90"
                      textAnchor="middle"
                      className="text-sm font-semibold fill-slate-600"
                      fontSize="12"
                    >
                      Total Value
                    </text>
                    <text
                      x="100"
                      y="110"
                      textAnchor="middle"
                      className="text-base font-bold fill-green-600"
                      fontSize="16"
                    >
                      {formatINR(sipResult.futureValue).substring(0, 15)}
                    </text>
                  </svg>
                  <div className="mt-6 flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="text-slate-600">Invested</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full" />
                      <span className="text-slate-600">Returns</span>
                    </div>
                  </div>
                </div>

                {/* Results Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                    <p className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                      Total Invested
                    </p>
                    <p className="text-2xl font-bold text-green-700 mt-1">
                      {formatINR(sipResult.invested)}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-lg border border-cyan-200">
                    <p className="text-xs font-semibold text-cyan-700 uppercase tracking-wide">
                      Estimated Returns
                    </p>
                    <p className="text-2xl font-bold text-cyan-700 mt-1">
                      {formatINR(sipResult.returns)}
                    </p>
                  </div>
                </div>

                {/* Total Value */}
                <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white p-6 rounded-lg">
                  <p className="text-sm font-semibold opacity-90 uppercase tracking-wide">
                    Total Portfolio Value
                  </p>
                  <p className="text-4xl font-bold mt-2">
                    {formatINR(sipResult.futureValue)}
                  </p>
                </div>

                {/* Breakdown Button */}
                <button
                  onClick={() => setShowBreakdown(!showBreakdown)}
                  className="w-full px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200 transition"
                >
                  {showBreakdown ? "Hide Year Breakdown" : "Show Year Breakdown"}
                </button>
              </div>
            </div>

            {/* Year Breakdown Table */}
            {showBreakdown && (
              <div className="mt-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-green-600 to-teal-600 text-white sticky top-0">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Year</th>
                      <th className="px-4 py-3 text-right font-semibold">Total Invested</th>
                      <th className="px-4 py-3 text-right font-semibold">Returns</th>
                      <th className="px-4 py-3 text-right font-semibold">Portfolio Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearBreakdown.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-b ${idx % 2 === 0 ? "bg-slate-50" : "bg-white"} hover:bg-slate-100`}
                      >
                        <td className="px-4 py-3 font-semibold text-slate-700">{row.year}</td>
                        <td className="px-4 py-3 text-right text-slate-600">
                          {formatINR(row.invested)}
                        </td>
                        <td className="px-4 py-3 text-right text-green-600 font-semibold">
                          {formatINR(row.returns)}
                        </td>
                        <td className="px-4 py-3 text-right font-bold text-slate-900">
                          {formatINR(row.balance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Step-Up SIP Tab */}
        {activeTab === "stepup" && (
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-8">
                {/* Monthly Amount */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Initial Monthly Investment
                  </label>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {formatINR(sipMonthly)}
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={sipMonthly}
                    onChange={(e) => setSipMonthly(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>₹500</span>
                    <span>₹1,00,000</span>
                  </div>
                </div>

                {/* Step-Up Percent */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Annual Step-Up Increase
                  </label>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {stepUpPercent.toFixed(1)}%
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="0.5"
                    value={stepUpPercent}
                    onChange={(e) => setStepUpPercent(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>1%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Return Rate */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Expected Annual Return
                  </label>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {sipReturn.toFixed(1)}%
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="0.5"
                    value={sipReturn}
                    onChange={(e) => setSipReturn(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Investment Period */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Investment Period
                  </label>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {sipYears} years
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="1"
                    value={sipYears}
                    onChange={(e) => setSipYears(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                {/* Comparison Bars */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl">
                  <p className="text-sm font-semibold text-slate-700 mb-6 uppercase tracking-wide">
                    Regular vs Step-Up Comparison
                  </p>

                  {/* Regular SIP Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-slate-700">Regular SIP</span>
                      <span className="font-bold text-slate-900">
                        {formatINR(sipResult.futureValue)}
                      </span>
                    </div>
                    <div className="w-full bg-slate-300 rounded-full h-8 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-500 to-teal-500 h-full flex items-center justify-end pr-3"
                        style={{
                          width: "100%",
                        }}
                      >
                        <span className="text-white text-xs font-bold">100%</span>
                      </div>
                    </div>
                  </div>

                  {/* Step-Up SIP Bar */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-slate-700">Step-Up SIP</span>
                      <span className="font-bold text-slate-900">
                        {formatINR(stepUpResult.futureValue)}
                      </span>
                    </div>
                    <div className="w-full bg-slate-300 rounded-full h-8 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full flex items-center justify-end pr-3"
                        style={{
                          width: "100%",
                        }}
                      >
                        <span className="text-white text-xs font-bold">
                          {((stepUpResult.futureValue / sipResult.futureValue) * 100).toFixed(0)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Difference */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                  <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                    Extra Wealth with Step-Up
                  </p>
                  <p className="text-3xl font-bold text-blue-700 mt-2">
                    {formatINR(stepUpResult.futureValue - sipResult.futureValue)}
                  </p>
                  <p className="text-sm text-blue-600 mt-1">
                    {(
                      ((stepUpResult.futureValue - sipResult.futureValue) /
                        sipResult.futureValue) *
                      100
                    ).toFixed(1)}
                    % more than regular SIP
                  </p>
                </div>

                {/* Results Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                    <p className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                      Total Invested
                    </p>
                    <p className="text-xl font-bold text-green-700 mt-1">
                      {formatINR(stepUpResult.invested)}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-lg border border-cyan-200">
                    <p className="text-xs font-semibold text-cyan-700 uppercase tracking-wide">
                      Total Returns
                    </p>
                    <p className="text-xl font-bold text-cyan-700 mt-1">
                      {formatINR(stepUpResult.returns)}
                    </p>
                  </div>
                </div>

                {/* Final Value */}
                <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white p-6 rounded-lg">
                  <p className="text-sm font-semibold opacity-90 uppercase tracking-wide">
                    Final Portfolio Value
                  </p>
                  <p className="text-4xl font-bold mt-2">
                    {formatINR(stepUpResult.futureValue)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lump Sum vs SIP Tab */}
        {activeTab === "lumpsum" && (
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-8">
                {/* Lump Sum Amount */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Total Investment Amount
                  </label>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {formatINR(lumpSumAmount)}
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="100000"
                    value={lumpSumAmount}
                    onChange={(e) => setLumpSumAmount(Number(e.target.value))}
                    className="w-full"
                  />
                  <input
                    type="number"
                    value={lumpSumAmount}
                    onChange={(e) => setLumpSumAmount(Number(e.target.value))}
                    className="w-full mt-3 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Return Rate */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Expected Annual Return
                  </label>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {sipReturn.toFixed(1)}%
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="0.5"
                    value={sipReturn}
                    onChange={(e) => setSipReturn(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Investment Period */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Investment Period
                  </label>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {sipYears} years
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="1"
                    value={sipYears}
                    onChange={(e) => setSipYears(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                {/* Comparison Bars */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl">
                  <p className="text-sm font-semibold text-slate-700 mb-6 uppercase tracking-wide">
                    Investment Outcomes
                  </p>

                  {/* Lump Sum Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-slate-700">Lump Sum</span>
                      <span className="font-bold text-slate-900">
                        {formatINR(lumpSumResult.futureValue)}
                      </span>
                    </div>
                    <div className="w-full bg-slate-300 rounded-full h-8 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-full flex items-center justify-end pr-3"
                        style={{
                          width: "100%",
                        }}
                      >
                        <span className="text-white text-xs font-bold">100%</span>
                      </div>
                    </div>
                  </div>

                  {/* Monthly SIP Bar */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-slate-700">Monthly SIP</span>
                      <span className="font-bold text-slate-900">
                        {formatINR(
                          calculateSIP(
                            lumpSumAmount / (sipYears * 12),
                            sipReturn,
                            sipYears
                          ).futureValue
                        )}
                      </span>
                    </div>
                    <div className="w-full bg-slate-300 rounded-full h-8 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-500 to-teal-500 h-full flex items-center justify-end pr-3"
                        style={{
                          width: `${
                            (calculateSIP(
                              lumpSumAmount / (sipYears * 12),
                              sipReturn,
                              sipYears
                            ).futureValue /
                              lumpSumResult.futureValue) *
                            100
                          }%`,
                        }}
                      >
                        <span className="text-white text-xs font-bold">
                          {(
                            (calculateSIP(
                              lumpSumAmount / (sipYears * 12),
                              sipReturn,
                              sipYears
                            ).futureValue /
                              lumpSumResult.futureValue) *
                            100
                          ).toFixed(0)}
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lump Sum Details */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
                  <p className="text-sm font-semibold text-orange-700 uppercase tracking-wide">
                    Lump Sum Investment
                  </p>
                  <p className="text-3xl font-bold text-orange-700 mt-2">
                    {formatINR(lumpSumResult.futureValue)}
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-orange-600">Invested</span>
                      <span className="font-semibold text-orange-900">
                        {formatINR(lumpSumResult.invested)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-orange-600">Returns</span>
                      <span className="font-semibold text-orange-900">
                        {formatINR(lumpSumResult.returns)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* SIP Details */}
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg border border-green-200">
                  <p className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                    Monthly SIP Investment
                  </p>
                  <p className="text-lg font-bold text-slate-600 mt-1">
                    {formatINR(lumpSumAmount / (sipYears * 12))} / month
                  </p>
                  <p className="text-3xl font-bold text-green-700 mt-2">
                    {formatINR(
                      calculateSIP(
                        lumpSumAmount / (sipYears * 12),
                        sipReturn,
                        sipYears
                      ).futureValue
                    )}
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-600">Invested</span>
                      <span className="font-semibold text-green-900">
                        {formatINR(lumpSumAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-600">Returns</span>
                      <span className="font-semibold text-green-900">
                        {formatINR(
                          calculateSIP(
                            lumpSumAmount / (sipYears * 12),
                            sipReturn,
                            sipYears
                          ).returns
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Goal Planner Tab */}
        {activeTab === "goal" && (
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="space-y-8">
              {/* Goal Type Selection */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Select Your Financial Goal
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {goalTypes.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => setGoalType(goal.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-center ${
                        goalType === goal.id
                          ? "border-green-600 bg-green-50"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="text-3xl mb-2">{goal.icon}</div>
                      <p className="text-xs font-semibold text-slate-700">{goal.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal Inputs */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                  {/* Goal Amount */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Target Amount (Today's Value)
                    </label>
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {formatINR(goalAmount)}
                    </div>
                    <input
                      type="number"
                      value={goalAmount}
                      onChange={(e) => setGoalAmount(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  {/* Inflation Rate */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Expected Inflation Rate
                    </label>
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {goalInflation.toFixed(1)}%
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      step="0.5"
                      value={goalInflation}
                      onChange={(e) => setGoalInflation(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>

                  {/* Time to Goal */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Time to Goal
                    </label>
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {goalYears} years
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="40"
                      step="1"
                      value={goalYears}
                      onChange={(e) => setGoalYears(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>

                  {/* Expected Return */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Expected Annual Return
                    </label>
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {goalReturn.toFixed(1)}%
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="0.5"
                      value={goalReturn}
                      onChange={(e) => setGoalReturn(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                  {/* Inflation Adjusted Target */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                    <p className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
                      Inflation-Adjusted Target
                    </p>
                    <p className="text-3xl font-bold text-purple-700 mt-2">
                      {formatINR(goalResult.inflationAdjustedTarget)}
                    </p>
                    <p className="text-xs text-purple-600 mt-2">
                      You'll need this amount after {goalYears} years to have the same purchasing power
                    </p>
                  </div>

                  {/* Monthly SIP Required */}
                  <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg border border-green-200">
                    <p className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                      Required Monthly SIP
                    </p>
                    <p className="text-3xl font-bold text-green-700 mt-2">
                      {formatINR(goalResult.monthlyAmount)}
                    </p>
                    <p className="text-xs text-green-600 mt-2">
                      Invest this amount every month to reach your goal
                    </p>
                  </div>

                  {/* Total Investment */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                    <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                      Total Amount to Invest
                    </p>
                    <p className="text-3xl font-bold text-blue-700 mt-2">
                      {formatINR(goalResult.totalInvested)}
                    </p>
                    <p className="text-xs text-blue-600 mt-2">
                      Over {goalYears} years ({goalYears * 12} months)
                    </p>
                  </div>

                  {/* Goal Cross-Link for Home */}
                  {goalType === "home" && (
                    <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg border border-indigo-300">
                      <p className="text-sm font-semibold text-indigo-900 mb-2">
                        💡 Pro Tip: Planning a Home Purchase?
                      </p>
                      <p className="text-xs text-indigo-800 mb-3">
                        Use EMI Calculator to see monthly loan EMI options
                      </p>
                      <a
                        href="https://emicalc.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-indigo-700 hover:text-indigo-900 underline"
                      >
                        Visit emicalc.app →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Privacy Notice */}
        <div className="mt-12 text-center text-sm text-slate-600">
          <p>🔒 All calculations happen in your browser. Your data stays private.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">SIP Calculator</h3>
              <p className="text-sm">
                Free online SIP calculator for India. Calculate investment returns, compare strategies, and plan your financial goals.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Tools</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    SIP Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Step-Up SIP
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Goal Planner
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/blog" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
            <p>© 2026 SIP Calculator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
