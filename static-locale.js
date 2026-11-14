const translations = {
  'Three.js — three.js authors. MIT License. Procedural sculpture and lighting authored for this portfolio.':
    'Three.js — יוצרי three.js. רישיון MIT. הפסל והתאורה נוצרו בקוד עבור תיק העבודות.',
  '404 — An unbuilt corner · Moishy': '404 — פינה שעדיין לא נבנתה · מוישי',
  'An unbuilt corner of the internet.': 'פינה באינטרנט שעדיין לא נבנתה.',
  'There’s nothing here yet. The good stuff is back at the workshop.':
    'עדיין אין כאן כלום. הדברים המעניינים מחכים בבית המלאכה.',
  'Return to the portfolio ↗': 'חזרה לתיק העבודות ↖',
  'Credits & licenses · Moishy': 'קרדיטים ורישיונות · מוישי',
  'THE DETAILS BEHIND THE DETAILS': 'הפרטים שמאחורי הפרטים',
  'Made with care. Credited with care.': 'נוצר בתשומת לב. עם קרדיט ראוי.',
  'Original work': 'יצירה מקורית',
  'The M sculpture, logo, orbital composition, map, mockup interfaces, illustrations, animations and demo fixtures were made specifically for this portfolio. No third-party product screenshots, photographs, textures or copied effect components are used.':
    'פסל ה־M, הלוגו, הקומפוזיציה המסלולית, המפה, ממשקי ההדמיה, האיורים, האנימציות ונתוני הדמה נוצרו במיוחד לתיק העבודות. לא נעשה שימוש בצילומי מסך של צד שלישי, בתצלומים, במרקמים או ברכיבי אפקטים מועתקים.',
  'Project attribution': 'קרדיטים לפרויקטים',
  'Chat Studio · Prozi: original chat styling project by לשכת הרב. Userscript conversion and additions by Moishy / Prozi. This portfolio’s theme demo is an independent illustrative interface, not copied product artwork.':
    'Chat Studio · Prozi: פרויקט עיצוב הצ׳אט המקורי מאת לשכת הרב. הסבה לסקריפט ותוספות מאת מוישי / פרוזי. הדגמת ערכות הנושא כאן היא ממשק המחשה עצמאי, ולא יצירה חזותית שהועתקה מהמוצר.',
  'Google Chat Audio Speed Controller: original metadata author IMC; port/adaptation by Moishy. The portfolio uses a silent synthetic waveform, not a recording.':
    'בקר מהירות השמע ל־Google Chat: המחבר המקורי לפי המטא־דאטה הוא IMC; הסבה והתאמה מאת מוישי. תיק העבודות משתמש בגל סינתטי שקט, ולא בהקלטה.',
  'Private work is represented only by approved high-level descriptions and fictional concept interfaces. No source code from the featured projects is embedded in this site.':
    'עבודה פרטית מיוצגת רק באמצעות תיאורים כלליים שאושרו וממשקי קונספט עם נתונים בדויים. קוד המקור של הפרויקטים המוצגים אינו משולב באתר.',
  'Self-hosted typefaces': 'גופנים באחסון מקומי',
  'Manrope — The Manrope Project Authors. SIL Open Font License 1.1.':
    'Manrope — יוצרי פרויקט Manrope. רישיון SIL Open Font License 1.1.',
  'Heebo — The Heebo Project Authors. SIL Open Font License 1.1.':
    'Heebo — יוצרי פרויקט Heebo. רישיון SIL Open Font License 1.1.',
  'IBM Plex Mono — IBM Corp. SIL Open Font License 1.1.':
    'IBM Plex Mono — IBM Corp. רישיון SIL Open Font License 1.1.',
  'Interface dependencies': 'תלויות הממשק',
  'React and React DOM — Meta Platforms, Inc. and affiliates. MIT License.':
    'React ו־React DOM — Meta Platforms, Inc. ושותפיה. רישיון MIT.',
  'Lucide — Lucide Contributors; some portions derived from Feather by Cole Bemis. ISC / MIT notices preserved.':
    'Lucide — תורמי Lucide; חלקים נגזרו מ־Feather מאת Cole Bemis. הודעות הרישוי ISC / MIT נשמרו.',
  'Full original license notices': 'נוסחי הרישיונות המקוריים המלאים',
  'License documents are provided in their original legal language. No blanket license is asserted for the portfolio or the featured source projects.':
    'מסמכי הרישוי מובאים בשפתם המשפטית המקורית. לא נקבע רישיון גורף לתיק העבודות או לקוד הפרויקטים המוצגים.',
  'Local interactions & privacy': 'התנסות מקומית ופרטיות',
  'No analytics, advertising, API requests, authentication or message sending. Only your language preference is saved in this browser. All demonstrations use fictional fixtures.':
    'ללא אנליטיקה, פרסום, בקשות API, הזדהות או שליחת הודעות. רק העדפת השפה נשמרת בדפדפן. כל ההדגמות משתמשות בנתוני דמה.',
};
const nodes = [...document.querySelectorAll('[data-copy]')];
for (const node of nodes) node.dataset.original = node.textContent;
const originalTitle = document.title;
let locale = 'en';
try {
  if (localStorage.getItem('obsidian-language') === 'he') locale = 'he';
} catch {
  /* Optional persistence. */
}
function render() {
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === 'he' ? 'rtl' : 'ltr';
  document.title = locale === 'he' ? translations[originalTitle] || originalTitle : originalTitle;
  for (const node of nodes)
    node.textContent =
      locale === 'he'
        ? translations[node.dataset.original] || node.dataset.original
        : node.dataset.original;
  const toggle = document.getElementById('language');
  toggle.textContent = locale === 'en' ? 'עברית' : 'English';
  toggle.lang = locale === 'en' ? 'he' : 'en';
  toggle.setAttribute(
    'aria-label',
    locale === 'en' ? 'Switch language to Hebrew' : 'החלפת שפה לאנגלית',
  );
}
document.getElementById('language').addEventListener('click', () => {
  locale = locale === 'en' ? 'he' : 'en';
  try {
    localStorage.setItem('obsidian-language', locale);
  } catch {
    /* Still usable. */
  }
  render();
});
render();
