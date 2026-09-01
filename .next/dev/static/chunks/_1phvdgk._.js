(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/PracticeSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CertificationSelect",
    ()=>CertificationSelect,
    "PracticeSelector",
    ()=>PracticeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/queries.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const fallbackCertifications = [
    {
        id: 1,
        name: 'CTFL — Foundation Level'
    },
    {
        id: 2,
        name: 'CT-AI — Testing AI-Based Systems'
    }
];
const options = [
    {
        number: '01',
        title: 'Full mock exam',
        description: 'Take a timed, full-length simulation with the structure and challenge of the real certification exam.',
        href: '/practice/full',
        link: 'Start full exam'
    },
    {
        number: '02',
        title: 'Practice by chapter',
        description: 'Concentrate on one syllabus chapter, identify weak areas and strengthen your understanding.',
        href: '/practice/chapter',
        link: 'Choose a chapter'
    },
    {
        number: '03',
        title: 'Practice by learning objective',
        description: 'Select a specific learning objective inside a chapter and practise exactly what you need.',
        href: '/practice/objective',
        link: 'Choose an objective'
    }
];
function PracticeSelector() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "practiceSection",
        id: "practice-options",
        "aria-labelledby": "practice-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sectionHeading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "Choose your practice path"
                    }, void 0, false, {
                        fileName: "[project]/components/PracticeSelector.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "practice-title",
                        children: "Study at the level that works for you"
                    }, void 0, false, {
                        fileName: "[project]/components/PracticeSelector.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/PracticeSelector.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "practiceGrid",
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "practiceCard",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "cardNumber",
                                children: option.number
                            }, void 0, false, {
                                fileName: "[project]/components/PracticeSelector.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: option.title
                            }, void 0, false, {
                                fileName: "[project]/components/PracticeSelector.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: option.description
                            }, void 0, false, {
                                fileName: "[project]/components/PracticeSelector.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: option.href,
                                children: [
                                    option.link,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: " →"
                                    }, void 0, false, {
                                        fileName: "[project]/components/PracticeSelector.tsx",
                                        lineNumber: 50,
                                        columnNumber: 51
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/PracticeSelector.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, option.number, true, {
                        fileName: "[project]/components/PracticeSelector.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/PracticeSelector.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PracticeSelector.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = PracticeSelector;
function CertificationSelect() {
    _s();
    const [certifications, setCertifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CertificationSelect.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCertifications"])().then({
                "CertificationSelect.useEffect": (data)=>{
                    setCertifications(data && data.length > 0 ? data : fallbackCertifications);
                }
            }["CertificationSelect.useEffect"]).catch({
                "CertificationSelect.useEffect": ()=>setCertifications(fallbackCertifications)
            }["CertificationSelect.useEffect"]).finally({
                "CertificationSelect.useEffect": ()=>setLoading(false)
            }["CertificationSelect.useEffect"]);
        }
    }["CertificationSelect.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
        id: "certification",
        name: "certification",
        defaultValue: "",
        disabled: loading,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "",
                disabled: true,
                children: loading ? 'Loading certifications...' : 'Select an ISTQB certification'
            }, void 0, false, {
                fileName: "[project]/components/PracticeSelector.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            certifications.map((certification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: certification.id,
                    children: certification.name
                }, certification.id, false, {
                    fileName: "[project]/components/PracticeSelector.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/PracticeSelector.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(CertificationSelect, "bw29oKhYicJFmYMMdwsNevzqIho=");
_c1 = CertificationSelect;
var _c, _c1;
__turbopack_context__.k.register(_c, "PracticeSelector");
__turbopack_context__.k.register(_c1, "CertificationSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSupabase",
    ()=>getSupabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
let client;
function getSupabase() {
    if (client) return client;
    const url = ("TURBOPACK compile-time value", "https://grfgdmwlpehkgwjycnjc.supabase.co");
    const publishableKey = ("TURBOPACK compile-time value", "sb_publishable_a8vtvwZgRW4NpFeMsTWFHA_TIHofRw2");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, publishableKey);
    return client;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/supabase/queries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkQuestionAnswer",
    ()=>checkQuestionAnswer,
    "getCertifications",
    ()=>getCertifications,
    "getChapters",
    ()=>getChapters,
    "getLearningObjectives",
    ()=>getLearningObjectives,
    "getQuestionsByCertification",
    ()=>getQuestionsByCertification,
    "getQuestionsByChapter",
    ()=>getQuestionsByChapter,
    "getQuestionsByChapters",
    ()=>getQuestionsByChapters,
    "getQuestionsByLearningObjective",
    ()=>getQuestionsByLearningObjective
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-client] (ecmascript)");
;
async function getCertifications() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    const { data, error } = await supabase.from('certifications').select('id, name').eq('available', true).order('name', {
        ascending: true
    });
    if (error) {
        console.error('Certifications query failed:', error);
        throw new Error(error.message);
    }
    return data ?? [];
}
async function getChapters(certificationId) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    const { data, error } = await supabase.from('chapters').select('id, certification_id, chapter_number, chapter_name').eq('certification_id', certificationId).order('chapter_number', {
        ascending: true
    });
    if (error) {
        console.error('Chapters query failed:', error);
        throw new Error(error.message);
    }
    return data ?? [];
}
async function getLearningObjectives(chapterId) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    const { data, error } = await supabase.from('learning_objectives').select('id, chapter_id, lo_number, lo_title').eq('chapter_id', chapterId).order('lo_number', {
        ascending: true
    });
    if (error) {
        console.error('Learning-objectives query failed:', error);
        throw new Error(error.message);
    }
    return data ?? [];
}
async function getQuestionsByChapter(chapterId, limit = 20) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    const { data, error } = await supabase.from('questions').select(`
      id,
      learning_objective_id,
      question_text,
      explanation,
      learning_objectives!inner (
        chapter_id
      ),
      answer_options (
        id,
        question_id,
        option_text
      )
    `).eq('learning_objectives.chapter_id', chapterId).limit(limit);
    if (error) {
        console.error('Questions query failed:', {
            code: error.code,
            message: error.message,
            details: error.details,
            hint: error.hint
        });
        throw new Error(error.message);
    }
    return (data ?? []).map((question)=>({
            id: question.id,
            learning_objective_id: question.learning_objective_id,
            question_text: question.question_text,
            explanation: question.explanation,
            answer_options: question.answer_options ?? []
        }));
}
async function getQuestionsByChapters(chapterIds, limit = 40) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    const { data, error } = await supabase.from('questions').select(`
      id,
      learning_objective_id,
      question_text,
      explanation,
      learning_objectives!inner (
        chapter_id
      ),
      answer_options (
        id,
        question_id,
        option_text
      )
    `).in('learning_objectives.chapter_id', chapterIds).limit(limit);
    if (error) {
        console.error('Questions-by-chapters query failed:', {
            code: error.code,
            message: error.message,
            details: error.details,
            hint: error.hint
        });
        throw new Error(error.message);
    }
    return (data ?? []).map((question)=>({
            id: question.id,
            learning_objective_id: question.learning_objective_id,
            question_text: question.question_text,
            explanation: question.explanation,
            answer_options: question.answer_options ?? []
        }));
}
async function getQuestionsByLearningObjective(learningObjectiveId, limit = 20) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    const { data, error } = await supabase.from('questions').select(`
      id,
      learning_objective_id,
      question_text,
      explanation,
      answer_options (
        id,
        question_id,
        option_text
      )
    `).eq('learning_objective_id', learningObjectiveId).limit(limit);
    if (error) {
        console.error('Questions-by-objective query failed:', error);
        throw new Error(error.message);
    }
    return (data ?? []).map((question)=>({
            id: question.id,
            learning_objective_id: question.learning_objective_id,
            question_text: question.question_text,
            explanation: question.explanation,
            answer_options: question.answer_options ?? []
        }));
}
async function getQuestionsByCertification(certificationId, limit = 40) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    const { data, error } = await supabase.from('questions').select(`
      id,
      learning_objective_id,
      question_text,
      explanation,
      learning_objectives!inner (
        id,
        chapter_id,
        chapters!inner (
          id,
          certification_id
        )
      ),
      answer_options (
        id,
        question_id,
        option_text
      )
    `).eq('learning_objectives.chapters.certification_id', certificationId).limit(limit);
    if (error) {
        console.error('Questions-by-certification query failed:', {
            code: error.code,
            message: error.message,
            details: error.details,
            hint: error.hint
        });
        throw new Error(error.message);
    }
    return (data ?? []).map((question)=>({
            id: question.id,
            learning_objective_id: question.learning_objective_id,
            question_text: question.question_text,
            explanation: question.explanation,
            answer_options: question.answer_options ?? []
        }));
}
async function checkQuestionAnswer(questionId, optionId) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabase"])();
    const { data, error } = await supabase.rpc('check_question_answer', {
        p_question_id: questionId,
        p_option_id: optionId
    });
    if (error) {
        console.error('Answer validation failed:', error);
        throw new Error(error.message);
    }
    const result = data?.[0];
    if (!result) {
        throw new Error('No answer-validation result was returned.');
    }
    return {
        selected_is_correct: result.selected_is_correct,
        correct_option_ids: result.correct_option_ids ?? []
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1phvdgk._.js.map