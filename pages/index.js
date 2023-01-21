import Head from "next/head";
import 'regenerator-runtime/runtime';
import { useState } from "react";
import styles from "./index.module.css";
import Language from "../components/language"
import LoadingScreen from "../components/loadingScreen";
import Content from "../components/content";
import History from "../components/history";


const languages = {
  ar: {
    slug:"ar",
    lang: "arabic",
    smart_rabbit_opening: "مرحبًا ، هل لديك سؤال لي؟",
    title: "الأرنب الذكي",
    placeholder: "ما هو سؤالك؟",
    btn_title: "إجابة",
    btn_title_change: "...الأرنب يفكر",
    note: "",
    mic:"ar-SA",
    voice:"ar-SA-ZariyahNeural"
  },
  fr: {
    slug:"fr",
    lang: "frensh",
    title: "Le lapin Intelligent",
    smart_rabbit_opening: "Salut, avez-vous une question pour moi?",
    placeholder: "Quelle est votre question ?",
    btn_title: "Réponse",
    btn_title_change: "Le lapin réfléchit...",
    note: "",
    mic:"fr-FR",
    voice:"fr-FR-BrigitteNeural"
  },
  en: {
    slug:"en",
    lang: "english",
    smart_rabbit_opening: "Hey, do you have a question for me?",
    title: "The Smart Rabbit",
    placeholder: "what's your question?",
    btn_title: "Answer",
    btn_title_change: "Am thinking...",
    note: "",
    mic:"en-US",
    voice:"en-US-JaneNeural"
  },
  da: {
    slug:"da",
    lang: "darija",
    smart_rabbit_opening: "salam, 3ndk chi soal?",
    title: "9niya Dkiya",
    placeholder: "ach nahowa soal dylk?",
    btn_title: "Jawbni",
    btn_title_change: "ana kankfr.....",
    note: "mola7da:darija ba9i khdam 3liha",
    mic:"ar-MA",
    voice:"ar-MA-MounaNeural"
  },
  ch: {
    slug:"ch",
    lang: "chinese",
    smart_rabbit_opening: "嘿，你有什么问题要问我吗？",
    title: "聪明的兔子",
    placeholder: "你的问题是什么？",
    btn_title: "回答",
    btn_title_change: "我在想....",
    note: "注意：使用中文",
    mic:"zh-CN",
    voice:"zh-CN-XiaoxiaoNeural"
  },
};




export default function Home() {


  
  //better to user Context
  const [language, setLanguage] = useState(languages["en"]);
  //history
  const [answers,setAnswers]=useState([]);

  return (
    <div className="top">
      <Head>
        <title>{language.title}</title>
        <link rel="icon" href="/rabbit_header_orange-min.png" />
      </Head>

      <main className={styles.main}>
        <LoadingScreen time={1000}/>
        <div style={{display:"flex",justifyContent:"space-between",flexDirection:"row",width:100+"vw"}}>

        <History answers={answers} setAnswers={setAnswers}></History>
        <Language languages={languages} selected_language={language} setLanguage={setLanguage}  />
        </div>
        <div className={styles.content_wrapper}>
        <Content language={language} setAnswers={setAnswers} />
        </div>
        
      </main>
    </div>
  );
}
