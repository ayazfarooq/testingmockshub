module.exports=[66193,24186,a=>{"use strict";var b=a.i(87924),c=a.i(38246),d=a.i(72131),e=a.i(69240);async function f(){let a=(0,e.getSupabase)(),{data:b,error:c}=await a.from("certifications").select("id, name").eq("available",!0).order("name",{ascending:!0});if(c)throw console.error("Certifications query failed:",c),Error(c.message);return b??[]}async function g(a,b=40){let c=(0,e.getSupabase)(),{data:d,error:f}=await c.from("questions").select(`
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
    `).eq("learning_objectives.chapters.certification_id",a).limit(b);if(f)throw console.error("Questions-by-certification query failed:",{code:f.code,message:f.message,details:f.details,hint:f.hint}),Error(f.message);return(d??[]).map(a=>({id:a.id,learning_objective_id:a.learning_objective_id,question_text:a.question_text,difficulty:a.difficulty,answer_options:a.answer_options??[]}))}async function h(a,b){let c=(0,e.getSupabase)(),{data:d,error:f}=await c.rpc("check_question_answer",{p_question_id:a,p_option_id:b});if(f)throw console.error("Answer validation failed:",f),Error(f.message);let g=d?.[0];if(!g)throw Error("No answer-validation result was returned.");return{selected_is_correct:g.selected_is_correct,correct_option_ids:g.correct_option_ids??[]}}a.s(["checkQuestionAnswer",0,h,"getCertifications",0,f,"getQuestionsByCertification",0,g],24186);let i=[{id:1,name:"CTFL — Foundation Level"},{id:2,name:"CT-AI — Testing AI-Based Systems"}],j=[{number:"01",title:"Full mock exam",description:"Take a timed, full-length simulation with the structure and challenge of the real certification exam.",href:"/practice/full",link:"Start full exam"},{number:"02",title:"Practice by chapter",description:"Concentrate on one syllabus chapter, identify weak areas and strengthen your understanding.",href:"/practice/chapter",link:"Choose a chapter"},{number:"03",title:"Practice by learning objective",description:"Select a specific learning objective inside a chapter and practise exactly what you need.",href:"/practice/objective",link:"Choose an objective"}];a.s(["CertificationSelect",0,function(){let[a,c]=(0,d.useState)([]),[e,g]=(0,d.useState)(!0);return(0,d.useEffect)(()=>{f().then(a=>{c(a&&a.length>0?a:i)}).catch(()=>c(i)).finally(()=>g(!1))},[]),(0,b.jsxs)("select",{id:"certification",name:"certification",defaultValue:"",disabled:e,children:[(0,b.jsx)("option",{value:"",disabled:!0,children:e?"Loading certifications...":"Select an ISTQB certification"}),a.map(a=>(0,b.jsx)("option",{value:a.id,children:a.name},a.id))]})},"PracticeSelector",0,function(){return(0,b.jsxs)("section",{className:"practiceSection",id:"practice-options","aria-labelledby":"practice-title",children:[(0,b.jsxs)("div",{className:"sectionHeading",children:[(0,b.jsx)("p",{className:"eyebrow",children:"Choose your practice path"}),(0,b.jsx)("h2",{id:"practice-title",children:"Study at the level that works for you"})]}),(0,b.jsx)("div",{className:"practiceGrid",children:j.map(a=>(0,b.jsxs)("article",{className:"practiceCard",children:[(0,b.jsx)("span",{className:"cardNumber",children:a.number}),(0,b.jsx)("h3",{children:a.title}),(0,b.jsx)("p",{children:a.description}),(0,b.jsxs)(c.default,{href:a.href,children:[a.link,(0,b.jsx)("span",{"aria-hidden":"true",children:" →"})]})]},a.number))})]})}],66193)}];

//# sourceMappingURL=components_PracticeSelector_tsx_1mebg58._.js.map