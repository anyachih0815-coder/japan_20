// --- 【第 20 課完整單字庫 (依教材)】 ---
const vocabulary = [
    { id: "v1", kana: "いります", kanji: "要ります", zh: "需要 [ビザが～]", cat: "第20課 動詞(I)" },
    { id: "v2", kana: "しらべます", kanji: "調べます", zh: "調查、查詢", cat: "第20課 動詞(II)" },
    { id: "v3", kana: "しゅうりします", kanji: "修理します", zh: "修理", cat: "第20課 動詞(III)" },
    { id: "v4", kana: "ぼく", kanji: "僕", zh: "我 (男性用語，不如「わたし」禮貌)", cat: "第20課 代詞" },
    { id: "v5", kana: "きみ", kanji: "君", zh: "你 (用於同輩、部下、晚輩，不如「あなた」禮貌)", cat: "第20課 代詞" },
    { id: "v6", kana: "～くん", kanji: "～君", zh: "～君 (稱呼男性名字時使用，不如「さん」禮貌)", cat: "第20課 接尾詞" },
    { id: "v7", kana: "うん", kanji: "", zh: "嗯 (「はい」的口語)", cat: "第20課 感嘆詞" },
    { id: "v8", kana: "ううん", kanji: "", zh: "不 (「いいえ」的口語)", cat: "第20課 感嘆詞" },
    { id: "v9", kana: "ことば", kanji: "", zh: "單字、語彙、話語", cat: "第20課 名詞" },
    { id: "v10", kana: "きもの", kanji: "着物", zh: "和服 (傳統日本服裝)", cat: "第20課 名詞" },
    { id: "v11", kana: "ビザ", kanji: "", zh: "簽證", cat: "第20課 名詞" },
    { id: "v12", kana: "はじめ", kanji: "初め", zh: "開始、開頭", cat: "第20課 名詞" },
    { id: "v13", kana: "おわり", kanji: "終わり", zh: "結束", cat: "第20課 名詞" },
    { id: "v14", kana: "こっち", kanji: "", zh: "這邊 (「こちら」的口語)", cat: "第20課 代詞" },
    { id: "v15", kana: "そっち", kanji: "", zh: "那邊 (「そちら」的口語)", cat: "第20課 代詞" },
    { id: "v16", kana: "あっち", kanji: "", zh: "那邊 (「あちら」的口語)", cat: "第20課 代詞" },
    { id: "v17", kana: "どっち", kanji: "", zh: "哪邊、哪一個 (「どちら」的口語)", cat: "第20課 疑問詞" },
    { id: "v18", kana: "みんなで", kanji: "", zh: "大家一起", cat: "第20課 副詞" },
    { id: "v19", kana: "～けど", kanji: "", zh: "～但是 (不如「が」正式)", cat: "第20課 助詞" },
    { id: "v20", kana: "おなかが いっぱいです", kanji: "", zh: "肚子飽了", cat: "第20課 慣用語" },
    { id: "v21", kana: "よかったら", kanji: "", zh: "如果方便的話、如果你願意的話", cat: "第20課 會話" },
    { id: "v22", kana: "いろいろ", kanji: "", zh: "各式各樣", cat: "第20課 副詞/形容詞" }
];

// --- 【第 20 課精選文型與會話例句 (普通體口語)】 ---
const sentences = [
    { jp: "サントスさんは パーティーに 来なかった。", zh: "桑托斯先生沒有來派對。" },
    { jp: "東京は 人が 多い。", zh: "東京的人很多。" },
    { jp: "沖縄の 海は きれいだった。", zh: "沖繩的大海很漂亮。" },
    { jp: "きょうは 僕の 誕生日だ。", zh: "今天是我的生日。" },
    { jp: "アイスクリーム[を] 食べる？……うん、食べる。", zh: "要吃冰淇淋嗎？……嗯，吃。" },
    { jp: "そこに はさみ[が] ある？……ううん、ない。", zh: "那裡有剪刀嗎？……不，沒有。" },
    { jp: "きのう 木村さんに 会った？……ううん、会わなかった。", zh: "昨天有見到木村小姐嗎？……不，沒見到。" },
    { jp: "その カレー[は] おいしい？……うん、辛いけど、おいしい。", zh: "那個咖哩好吃嗎？……嗯，雖然辣，但很好吃。" },
    { jp: "あした みんなで 京都[へ] 行かない？……うん、いいね。", zh: "明天大家不一起去京都嗎？……嗯，好啊！" },
    { jp: "何[を] 食べたい？……今 お腹[が] いっぱいだから、何も 食べたくない。", zh: "想吃什麼？……現在肚子很飽，什麼都不想吃。" },
    { jp: "今 暇？……うん、暇。何？……ちょっと 手伝って。", zh: "現在有空嗎？……嗯，有空。怎麼了？……稍微幫我一下。" },
    { jp: "辞書[を] 持って [い]る？……ううん、持って [い]ない。", zh: "有帶字典嗎？……不，沒帶。" },
    { jp: "夏休みは 国へ 帰る？……ううん。帰りたいけど、……。", zh: "暑假要回國嗎？……不。雖然想回去，但……" },
    { jp: "タワポン君、富士山に 登った こと ある？……ううん、ない。", zh: "塔瓦朋君，你爬過富士山嗎？……不，沒有。" },
    { jp: "じゃ、よかったら、いっしょに 行かない？……うん。いつごろ？", zh: "那如果方便的話，要不要一起去？……好啊。大約什麼時候？" },
    { jp: "8月の 初めごろは どう？……いいよ。", zh: "8月初左右如何？……好喔。" },
    { jp: "じゃ、いろいろ 調べて、また 電話するよ。……ありがとう。待ってるよ。", zh: "那我調查看看，再打電話給你喔。……謝謝，等你電話喔。" }
];

// --- 【第 20 課普通體(常體)對照庫】 ---
const verbs = [
    {
        id: "vb1", group: "I 類動詞 (書く)", title: "書きます (寫)", zh: "寫",
        polPres: "書きます", plnPres: "書く",
        polNeg: "書きません", plnNeg: "書かない",
        polPast: "書きました", plnPast: "書いた",
        polPastNeg: "書きませんでした", plnPastNeg: "書かなかった"
    },
    {
        id: "vb2", group: "I 類動詞 (ある)", title: "あります (有、在)", zh: "有、存在 (無生命)",
        polPres: "あります", plnPres: "ある",
        polNeg: "ありません", plnNeg: "ない",
        polPast: "ありました", plnPast: "あった",
        polPastNeg: "ありませんでした", plnPastNeg: "なかった"
    },
    {
        id: "vb3", group: "I 類動詞 (行く)", title: "行きます (去)", zh: "去",
        polPres: "行きます", plnPres: "行く",
        polNeg: "行きません", plnNeg: "行かない",
        polPast: "行きました", plnPast: "行った",
        polPastNeg: "行きませんでした", plnPastNeg: "行かなかった"
    },
    {
        id: "vb4", group: "II 類動詞 (食べる)", title: "食べます (吃)", zh: "吃",
        polPres: "食べます", plnPres: "食べる",
        polNeg: "食べません", plnNeg: "食べない",
        polPast: "食べました", plnPast: "食べた",
        polPastNeg: "食べませんでした", plnPastNeg: "食べなかった"
    },
    {
        id: "vb5", group: "III 類動詞 (来る)", title: "来ます (來)", zh: "來",
        polPres: "来ます", plnPres: "来る (くる)",
        polNeg: "来ません", plnNeg: "来ない (こない)",
        polPast: "来ました", plnPast: "来た (きた)",
        polPastNeg: "来ませんでした", plnPastNeg: "来なかった (こなかった)"
    },
    {
        id: "vb6", group: "III 類動詞 (する)", title: "します (做)", zh: "做",
        polPres: "します", plnPres: "する",
        polNeg: "しません", plnNeg: "しない",
        polPast: "しました", plnPast: "した",
        polPastNeg: "しませんでした", plnPastNeg: "しなかった"
    },
    {
        id: "vb7", group: "い形容詞 (大きい)", title: "大きいです (大)", zh: "大的",
        polPres: "大きいです", plnPres: "大きい",
        polNeg: "大きくないです", plnNeg: "大きくない",
        polPast: "大きかったです", plnPast: "大きかった",
        polPastNeg: "大きくなかったです", plnPastNeg: "大きくなかった"
    },
    {
        id: "vb8", group: "な形容詞 (きれい)", title: "きれいです (漂亮/乾淨)", zh: "漂亮的、乾淨的",
        polPres: "きれいです", plnPres: "きれいだ",
        polNeg: "きれいじゃ ありません", plnNeg: "きれいじゃ ない",
        polPast: "きれいでした", plnPast: "きれいだった",
        polPastNeg: "きれいじゃ ありませんでした", plnPastNeg: "きれいじゃ なかった"
    },
    {
        id: "vb9", group: "名詞 (雨)", title: "雨です (雨)", zh: "雨天",
        polPres: "雨です", plnPres: "雨だ",
        polNeg: "雨じゃ ありません", plnNeg: "雨じゃ ない",
        polPast: "雨でした", plnPast: "雨だった",
        polPastNeg: "雨じゃ ありませんでした", plnPastNeg: "雨じゃ なかった"
    }
];

// --- 標記儲存邏輯 (LocalStorage) ---
let starredVocabIds = JSON.parse(localStorage.getItem('starred_vocab_20') || '[]');
let starredVerbIds = JSON.parse(localStorage.getItem('starred_verb_20') || '[]');

let vocabMode = 'jp-zh';
let currentVocabIdx = 0;
let currentSentenceIdx = 0;
let currentVerbIdx = 0;

let hwMissedQuestions = [];
let hwCurrentItem = null;

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}

function switchTab(e, tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    document.getElementById(`${tabId}-section`).classList.add('active');
}

function normalizeText(text) {
    if (!text) return "";
    return text.toString().trim().toLowerCase()
        .replace(/[\s\(\)\[\]（）「」\.\…\。\、\！\？\!\?ー\-]/g, '')
        .replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
}

/* --- 1. 單字卡區塊 (含標記權重抽取) --- */
function setVocabMode(mode) {
    vocabMode = mode;
    renderVocabQuestion();
}

function toggleVocabStar() {
    const item = vocabulary[currentVocabIdx];
    const index = starredVocabIds.indexOf(item.id);
    if (index === -1) {
        starredVocabIds.push(item.id);
    } else {
        starredVocabIds.splice(index, 1);
    }
    localStorage.setItem('starred_vocab_20', JSON.stringify(starredVocabIds));
    updateVocabStarButton();
    renderTable(vocabulary);
}

function updateVocabStarButton() {
    const item = vocabulary[currentVocabIdx];
    const btn = document.getElementById("vocab-star-btn");
    if (starredVocabIds.includes(item.id)) {
        btn.classList.add("starred");
        btn.innerText = "★ 已加入重點複習 (點擊取消)";
    } else {
        btn.classList.remove("starred");
        btn.innerText = "☆ 標記多複習";
    }
}

function renderVocabQuestion() {
    const item = vocabulary[currentVocabIdx];
    document.getElementById("vocab-category").innerText = item.cat;
    document.getElementById("vocab-answer-container").style.display = "none";
    updateVocabStarButton();

    if (vocabMode === 'jp-zh') {
        document.getElementById("vocab-prompt-label").innerText = "請猜出中文意思是：";
        document.getElementById("vocab-question-text").innerText = item.kana;
        document.getElementById("vocab-answer-text").innerText = item.zh;
        document.getElementById("vocab-extra-text").innerText = (item.kanji && item.kanji.trim() !== '') ? `漢字：${item.kanji}` : '';
    } else {
        document.getElementById("vocab-prompt-label").innerText = "請猜出日文唸法是：";
        document.getElementById("vocab-question-text").innerText = item.zh;
        document.getElementById("vocab-answer-text").innerText = item.kana;
        document.getElementById("vocab-extra-text").innerText = (item.kanji && item.kanji.trim() !== '') ? `漢字：${item.kanji}` : '';
    }
}

function nextVocabQuestion() {
    if (starredVocabIds.length > 0 && Math.random() < 0.6) {
        const starPool = vocabulary.filter(v => starredVocabIds.includes(v.id));
        const picked = starPool[Math.floor(Math.random() * starPool.length)];
        currentVocabIdx = vocabulary.findIndex(v => v.id === picked.id);
    } else {
        currentVocabIdx = (currentVocabIdx + 1) % vocabulary.length;
    }
    renderVocabQuestion();
}

function prevVocabQuestion() {
    currentVocabIdx = (currentVocabIdx - 1 + vocabulary.length) % vocabulary.length;
    renderVocabQuestion();
}

function toggleVocabAnswer() {
    const box = document.getElementById("vocab-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakVocab() {
    speakText(vocabulary[currentVocabIdx].kana);
}

/* --- 2. 普通體會話與例句測驗 --- */
function renderSentenceQuestion() {
    const item = sentences[currentSentenceIdx];
    document.getElementById("sentence-question-text").innerText = item.zh;
    document.getElementById("sentence-answer-text").innerText = item.jp;
    document.getElementById("sentence-answer-container").style.display = "none";
}

function nextSentenceQuestion() {
    currentSentenceIdx = (currentSentenceIdx + 1) % sentences.length;
    renderSentenceQuestion();
}

function prevSentenceQuestion() {
    currentSentenceIdx = (currentSentenceIdx - 1 + sentences.length) % sentences.length;
    renderSentenceQuestion();
}

function toggleSentenceAnswer() {
    const box = document.getElementById("sentence-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakSentence() {
    speakText(sentences[currentSentenceIdx].jp);
}

/* --- 3. 手寫測驗 --- */
function updateHwBadge() {
    document.getElementById("hw-review-badge").innerText = `待複習錯題：${hwMissedQuestions.length}`;
}

function nextHandwritingQuestion() {
    document.getElementById("hw-user-input").value = "";
    document.getElementById("hw-feedback-container").className = "feedback-box hidden";

    if (hwMissedQuestions.length > 0 && Math.random() < 0.6) {
        hwCurrentItem = hwMissedQuestions[0];
    } else if (starredVocabIds.length > 0 && Math.random() < 0.5) {
        const starPool = vocabulary.filter(v => starredVocabIds.includes(v.id));
        hwCurrentItem = starPool[Math.floor(Math.random() * starPool.length)];
    } else {
        hwCurrentItem = vocabulary[Math.floor(Math.random() * vocabulary.length)];
    }

    document.getElementById("hw-category").innerText = hwCurrentItem.cat;
    document.getElementById("hw-question").innerText = hwCurrentItem.zh;
    updateHwBadge();
}

function checkHandwritingAnswer() {
    const userInput = document.getElementById("hw-user-input").value;
    if (!userInput) return alert("請先輸入答案！");

    const feedbackBox = document.getElementById("hw-feedback-container");
    feedbackBox.classList.remove("hidden");

    const cleanUser = normalizeText(userInput);
    const cleanKana = normalizeText(hwCurrentItem.kana);
    const cleanKanji = hwCurrentItem.kanji ? normalizeText(hwCurrentItem.kanji) : "";
    const isCorrect = (cleanUser === cleanKana || (cleanKanji && cleanUser === cleanKanji));

    if (isCorrect) {
        feedbackBox.className = "feedback-box correct";
        document.getElementById("hw-feedback-status").innerText = "🎉 比對正確！";
        document.getElementById("hw-feedback-detail").innerHTML = `標準答案：<strong>${hwCurrentItem.kana}</strong> ${hwCurrentItem.kanji ? '(' + hwCurrentItem.kanji + ')' : ''}`;
        
        const existIdx = hwMissedQuestions.findIndex(q => q.id === hwCurrentItem.id);
        if (existIdx !== -1) hwMissedQuestions.splice(existIdx, 1);
        speakText(hwCurrentItem.kana);
    } else {
        feedbackBox.className = "feedback-box wrong";
        document.getElementById("hw-feedback-status").innerText = "❌ 答錯了！已加入錯題佇列";
        document.getElementById("hw-feedback-detail").innerHTML = `標準答案：<strong>${hwCurrentItem.kana}</strong> ${hwCurrentItem.kanji ? '(' + hwCurrentItem.kanji + ')' : ''}`;

        const existIdx = hwMissedQuestions.findIndex(q => q.id === hwCurrentItem.id);
        if (existIdx === -1) hwMissedQuestions.push(hwCurrentItem);
    }
    updateHwBadge();
}

/* --- 4. 普通體對照變化區塊 (含標記複習) --- */
function toggleVerbStar() {
    const item = verbs[currentVerbIdx];
    const index = starredVerbIds.indexOf(item.id);
    if (index === -1) {
        starredVerbIds.push(item.id);
    } else {
        starredVerbIds.splice(index, 1);
    }
    localStorage.setItem('starred_verb_20', JSON.stringify(starredVerbIds));
    updateVerbStarButton();
}

function updateVerbStarButton() {
    const item = verbs[currentVerbIdx];
    const btn = document.getElementById("verb-star-btn");
    if (starredVerbIds.includes(item.id)) {
        btn.classList.add("starred");
        btn.innerText = "★ 已加入重點複習 (點擊取消)";
    } else {
        btn.classList.remove("starred");
        btn.innerText = "☆ 標記多複習";
    }
}

function renderVerbQuestion() {
    const item = verbs[currentVerbIdx];
    document.getElementById("verb-group").innerText = item.group;
    document.getElementById("verb-masu").innerText = item.title;
    document.getElementById("verb-meaning").innerText = `中文意思：${item.zh}`;
    
    document.getElementById("vb-pol-pres").innerText = item.polPres;
    document.getElementById("vb-pln-pres").innerText = item.plnPres;
    
    document.getElementById("vb-pol-neg").innerText = item.polNeg;
    document.getElementById("vb-pln-neg").innerText = item.plnNeg;
    
    document.getElementById("vb-pol-past").innerText = item.polPast;
    document.getElementById("vb-pln-past").innerText = item.plnPast;
    
    document.getElementById("vb-pol-pastneg").innerText = item.polPastNeg;
    document.getElementById("vb-pln-pastneg").innerText = item.plnPastNeg;
    
    document.getElementById("verb-answer-container").style.display = "none";
    updateVerbStarButton();
}

function nextVerbQuestion() {
    if (starredVerbIds.length > 0 && Math.random() < 0.6) {
        const starPool = verbs.filter(v => starredVerbIds.includes(v.id));
        const picked = starPool[Math.floor(Math.random() * starPool.length)];
        currentVerbIdx = verbs.findIndex(v => v.id === picked.id);
    } else {
        currentVerbIdx = (currentVerbIdx + 1) % verbs.length;
    }
    renderVerbQuestion();
}

function prevVerbQuestion() {
    currentVerbIdx = (currentVerbIdx - 1 + verbs.length) % verbs.length;
    renderVerbQuestion();
}

function toggleVerbAnswer() {
    const box = document.getElementById("verb-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakCurrentVerb() {
    speakText(verbs[currentVerbIdx].plnPres);
}

/* --- 5. 單字列表與搜尋 --- */
function renderTable(data) {
    const tbody = document.getElementById("word-table-body");
    tbody.innerHTML = "";
    data.forEach(item => {
        const isStarred = starredVocabIds.includes(item.id);
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><button class="btn-sound" onclick="speakText('${item.kana}')">🔊</button></td>
            <td><strong>${item.kana}</strong></td>
            <td>${item.kanji || '-'}</td>
            <td>${item.zh}</td>
            <td>
                <button class="btn-star ${isStarred ? 'starred' : ''}" onclick="toggleListStar('${item.id}')">
                    ${isStarred ? '★ 已標記' : '☆ 標記'}
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function toggleListStar(id) {
    const index = starredVocabIds.indexOf(id);
    if (index === -1) {
        starredVocabIds.push(id);
    } else {
        starredVocabIds.splice(index, 1);
    }
    localStorage.setItem('starred_vocab_20', JSON.stringify(starredVocabIds));
    renderTable(vocabulary);
    updateVocabStarButton();
}

function filterWords() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filtered = vocabulary.filter(item => 
        item.kana.toLowerCase().includes(query) || 
        item.kanji.toLowerCase().includes(query) || 
        item.zh.includes(query)
    );
    renderTable(filtered);
}

window.onload = function() {
    renderVocabQuestion();
    renderSentenceQuestion();
    nextHandwritingQuestion();
    renderVerbQuestion();
    renderTable(vocabulary);
};