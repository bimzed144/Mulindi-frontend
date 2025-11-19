import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

const AcademicYear = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  const [academicYears, setAcademicYears] = useState([
    { id: 1, year: '2025-2026', terms: [] }
  ]);

  const [currentTerm, setCurrentTerm] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);

  const addYear = () => {
    const newYearStart = currentYear + 1;
    const newYearEnd = newYearStart + 1;
    const newYear = {
      id: Date.now(),
      year: `${newYearStart}-${newYearEnd}`,
      terms: []
    };
    setAcademicYears([...academicYears, newYear]);
    setCurrentYear(newYearStart);
  };

  const addTerm = (yearId) => {
    setAcademicYears(
      academicYears.map(year => {
        if (year.id === yearId) {
          if (year.terms.length >= 3) {
            alert('Maximum 3 terms allowed per academic year');
            return year;
          }
          const termNumber = year.terms.length + 1;
          return {
            ...year,
            terms: [
              ...year.terms,
              {
                id: Date.now(),
                name: `Term ${termNumber}`,
                year: year.year,
                closed: false
              }
            ]
          };
        }
        return year;
      })
    );
  };

  // ✔ FIXED LOGIC → Set term as current
  const setAsCurrentTerm = (termId) => {
    setAcademicYears(
      academicYears.map(year => ({
        ...year,
        terms: year.terms.map(term => {
          if (term.id === termId) {
            return { ...term, closed: false }; // remove closed status
          }
          return term;
        })
      }))
    );

    setCurrentTerm(termId); 
    setOpenMenu(null);
  };

  // ✔ FIXED LOGIC → Close term
  const closeTerm = (termId) => {
    setAcademicYears(
      academicYears.map(year => ({
        ...year,
        terms: year.terms.map(term =>
          term.id === termId ? { ...term, closed: true } : term
        )
      }))
    );

    // If the closed term was current, remove it
    if (currentTerm === termId) {
      setCurrentTerm(null);
    }

    setOpenMenu(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">academic year</h1>
          <button
            onClick={addYear}
            className="px-6 py-2 bg-blue-200 hover:bg-blue-300 text-gray-800 rounded"
          >
            add year
          </button>
        </div>

        <div className="space-y-8">
          {academicYears.map((year) => (
            <div key={year.id} className="bg-white rounded-lg shadow p-6">

              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">{year.year}</h2>
                <button
                  onClick={() => addTerm(year.id)}
                  disabled={year.terms.length >= 3}
                  className={`px-4 py-2 border-2 rounded flex items-center gap-2 ${
                    year.terms.length >= 3
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-gray-100 bg-blue-200'
                  }`}
                >
                  <span className="text-lg">+</span> add term
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">

                {year.terms.map((term) => (
                  <div
                    key={term.id}
                    className={`relative rounded-lg p-6 h-32 flex flex-col items-center justify-center transition cursor-pointer
                      ${term.closed ? "bg-red-200" : "bg-blue-100 hover:bg-blue-200"}
                    `}
                  >
                    <span className="text-gray-800 font-semibold text-lg">
                      {term.name}
                    </span>

                    <span className="text-blue-600 text-sm">{term.year}</span>

                    {/* Status labels */}
                    {currentTerm === term.id && !term.closed && (
                      <span className="text-green-600 text-xs mt-1">(current)</span>
                    )}

                    {term.closed && (
                      <span className="text-red-600 text-xs mt-1">(closed)</span>
                    )}

                    {/* 3 dots button */}
                    <button
                      className="absolute top-2 right-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenu(openMenu === term.id ? null : term.id);
                      }}
                    >
                      <BsThreeDotsVertical className="text-gray-700 text-xl" />
                    </button>

                    {/* Dropdown Menu */}
                    {openMenu === term.id && (
                      <div className="absolute top-10 right-2 bg-white shadow-lg rounded w-40 py-2 z-50">
                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          onClick={() => setAsCurrentTerm(term.id)}
                        >
                          Set as current term
                        </button>

                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                          onClick={() => closeTerm(term.id)}
                        >
                          Close term
                        </button>
                      </div>
                    )}
                  </div>
                ))}

                {/* Empty slots */}
                {[...Array(Math.max(0, 3 - year.terms.length))].map((_, idx) => (
                  <div key={idx} className="bg-gray-200 rounded-lg p-6 h-32" />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AcademicYear;
