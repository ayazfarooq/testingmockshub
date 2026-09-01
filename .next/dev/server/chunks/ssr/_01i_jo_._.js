module.exports = [
"[project]/components/FullPracticeQuiz.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/components/PracticeSetupForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PracticeSetupForm",
    ()=>PracticeSetupForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/queries.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FullPracticeQuiz$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FullPracticeQuiz.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function PracticeSetupForm({ mode }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [certifications, setCertifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [certificationId, setCertificationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showQuiz, setShowQuiz] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        async function loadCertifications() {
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCertifications"])();
                if (cancelled) return;
                setCertifications(data);
            } catch  {
                if (!cancelled) setLoadError(true);
            } finally{
                if (!cancelled) setLoading(false);
            }
        }
        loadCertifications();
        return ()=>{
            cancelled = true;
        };
    }, []);
    function handleContinue() {
        if (!certificationId) return;
        if (mode === 'chapter') {
            const certification = certifications.find((option)=>String(option.id) === certificationId);
            const params = new URLSearchParams({
                certificationId
            });
            if (certification) params.set('name', certification.name);
            router.push(`/practice/chapters?${params.toString()}`);
            return;
        }
        if (mode === 'full') {
            setShowQuiz(true);
            return;
        }
    // Objective-based setup is not wired up yet.
    }
    if (showQuiz && mode === 'full') {
        const certification = certifications.find((option)=>String(option.id) === certificationId);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FullPracticeQuiz$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FullPracticeQuiz"], {
            certificationId: certificationId,
            certificationName: certification?.name ?? 'Unknown certification',
            onBack: ()=>setShowQuiz(false)
        }, void 0, false, {
            fileName: "[project]/components/PracticeSetupForm.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "certification",
                children: "Certification"
            }, void 0, false, {
                fileName: "[project]/components/PracticeSetupForm.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: "certification",
                value: certificationId,
                onChange: (event)=>setCertificationId(event.target.value),
                disabled: loading || loadError,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        disabled: true,
                        children: loading ? 'Loading certifications…' : loadError ? 'Unable to load certifications' : 'Select an ISTQB certification'
                    }, void 0, false, {
                        fileName: "[project]/components/PracticeSetupForm.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    certifications.map((certification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: certification.id,
                            children: certification.name
                        }, certification.id, false, {
                            fileName: "[project]/components/PracticeSetupForm.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/PracticeSetupForm.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            loadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "formMessage",
                role: "alert",
                children: "We couldn't load certifications right now. Please refresh the page."
            }, void 0, false, {
                fileName: "[project]/components/PracticeSetupForm.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "primaryButton",
                type: "button",
                disabled: !certificationId,
                onClick: handleContinue,
                children: "Continue"
            }, void 0, false, {
                fileName: "[project]/components/PracticeSetupForm.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/PracticeSetupForm.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSupabase",
    ()=>getSupabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
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
    client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, publishableKey);
    return client;
}
}),
"[project]/lib/supabase/queries.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-ssr] (ecmascript)");
;
async function getCertifications() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
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
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
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
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
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
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
    const { data, error } = await supabase.from('questions').select(`
      id,
      learning_objective_id,
      question_text,
      difficulty,
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
            difficulty: question.difficulty,
            answer_options: question.answer_options ?? []
        }));
}
async function getQuestionsByChapters(chapterIds, limit = 40) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
    const { data, error } = await supabase.from('questions').select(`
      id,
      learning_objective_id,
      question_text,
      difficulty,
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
            difficulty: question.difficulty,
            answer_options: question.answer_options ?? []
        }));
}
async function getQuestionsByLearningObjective(learningObjectiveId, limit = 20) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
    const { data, error } = await supabase.from('questions').select(`
      id,
      learning_objective_id,
      question_text,
      difficulty,
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
            difficulty: question.difficulty,
            answer_options: question.answer_options ?? []
        }));
}
async function getQuestionsByCertification(certificationId, limit = 40) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
    const { data, error } = await supabase.from('questions').select(`
      id,
      learning_objective_id,
      question_text,
      difficulty,
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
            difficulty: question.difficulty,
            answer_options: question.answer_options ?? []
        }));
}
async function checkQuestionAnswer(questionId, optionId) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabase"])();
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
}),
];

//# sourceMappingURL=_01i_jo_._.js.map