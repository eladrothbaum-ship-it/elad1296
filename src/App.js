import React from "react";

export default function App() {
  const img1 = "/image1.jpeg";
  const img2 = "/image2.jpeg";
  const img3 = "/image3.jpeg";

  const whatsappLink = "https://wa.me/972525373656";
  const email = "eladrothbaum@gmail.com";

  const services = [
    {
      title: "אסטרטגיית תוכן",
      text: "מחדדים מסרים, קהל יעד וטון דיבור כדי שהתוכן שלך ייראה חד, מקצועי ומשכנע.",
      icon: "✦",
    },
    {
      title: "פיצוח רעיונות ותסריטים",
      text: "מזקקים ידע מקצועי לנושאים, זוויות ותסריטים שמדברים נכון לקהל שלך.",
      icon: "✎",
    },
    {
      title: "ניהול סושיאל מדויק",
      text: "ליווי אינסטגרם, פייסבוק וטיקטוק עם קו ברור שמחבר בין נוכחות לפניות.",
      icon: "◉",
    },
    {
      title: "וידאו וקריינות",
      text: "עריכת וידאו וקריינות מקצועית שמעלות את הרמה, הסמכות והאמינות של התוכן.",
      icon: "▶",
    },
  ];

  const aboutParagraphs = [
    "אני אלעד רוטבאום, ואני עוזר לבעלי עסקים, עצמאיים ואנשי מקצוע להפוך את הידע והניסיון שלהם לתוכן שמייצר אמון, נוכחות ולקוחות.",
    "אני מגיע מעולמות התקשורת, התוכן, האסטרטגיה והמדיה — עם הבנה עמוקה במסרים, נראות, הופעה, ניסוח וחיבור לקהל.",
    "המטרה שלי היא לקחת את מה שכבר קיים אצלכם — הידע, האישיות והערך — ולבנות ממנו נוכחות דיגיטלית מדויקת, ברורה ומשכנעת.",
  ];

  const fitItems = [
    "בעלי עסקים, עצמאיים ואנשי מקצוע שרוצים נוכחות דיגיטלית חזקה, ברורה ומשכנעת",
    "מי שיש לו ידע אמיתי וערך לתת, אבל עדיין לא מצליח להעביר את זה נכון דרך התוכן",
    "מי שרוצה להיראות מקצועי, לבנות אמון, וליצור תוכן שמחבר בין נוכחות דיגיטלית לתוצאות",
  ];

  const steps = [
    "מבינים את העסק, הקהל והיעדים",
    "מחדדים מסרים, שפה ותדמית",
    "בונים רעיונות, פוסטים ותסריטים",
    "הופכים את הנוכחות שלך לנכס שמביא אמון ופניות",
  ];

  return (
    <div className="site" dir="rtl">
      <main className="container">
        <nav className="nav">
          <div className="brand">
            <div className="brand-logo">ER</div>
            <div>
              <div className="brand-name">Elad Rothbaum</div>
              <div className="brand-sub">CONTENT • STRATEGY • AUTHORITY</div>
            </div>
          </div>

          <a href={whatsappLink} className="btn btn-light">
            בוא נדבר
          </a>
        </nav>

        <section className="hero">
          <div className="hero-text">
            <div className="pill">ניסיון בתקשורת, אסטרטגיה, תוכן ומדיה</div>

            <h1 className="hero-title">
              הופכים ידע מקצועי
              <span className="accent"> לתוכן </span>
              שמייצר אמון ולקוחות
            </h1>

            <p className="hero-desc">
              אסטרטגיית תוכן ונוכחות דיגיטלית שממצבות אותך כאוטוריטה בתחום שלך —
              ומחברות בין תוכן איכותי לבין פניות ולקוחות בפועל.
            </p>

            <div className="hero-actions">
              <a href={whatsappLink} className="btn btn-light">
                קבלו 2 רעיונות לתוכן
              </a>

              <a href={`mailto:${email}`} className="btn btn-ghost">
                {email}
              </a>
            </div>
          </div>

          <div className="hero-card">
            <img src={img1} alt="אלעד רוטבאום" className="hero-avatar" />

            <div className="hero-name">אלעד רוטבאום</div>
            <div className="hero-role">
              אסטרטג תוכן • מדיה • נוכחות דיגיטלית
            </div>

            <div className="hero-gallery">
              <img src={img2} alt="אלעד בתקשורת" className="gallery-img" />
              <img src={img3} alt="אלעד בטלוויזיה" className="gallery-img" />
            </div>

            <div className="hero-caption">
              ניסיון הופעה בטלוויזיה • תוכן שמייצר השפעה
            </div>
          </div>
        </section>

        <section className="section">
          <div className="card about-card">
            <div className="section-kicker about-kicker">קצת עליי</div>
            <h2 className="section-title">מי אני</h2>

            <div className="about-text">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-kicker">השירותים שלי</div>
          <h2 className="section-title">
            לא עוד “ניהול עמוד”. בניית סמכות דיגיטלית.
          </h2>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.title} className="card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-text">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="two-col">
          <div className="card big-card">
            <h2 className="section-title small">איך זה עובד</h2>
            <div className="stack">
              {steps.map((step, i) => (
                <div key={i} className="step-row">
                  <div className="step-number">{i + 1}</div>
                  <div className="step-text">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card big-card">
            <h2 className="section-title small">למי זה מתאים</h2>
            <div className="stack">
              {fitItems.map((item) => (
                <div key={item} className="fit-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="card cta-box">
            <div className="cta-kicker">LET&apos;S BUILD YOUR PRESENCE</div>
            <h2 className="cta-title">בוא נבנה נוכחות שמביאה לקוחות</h2>
            <p className="cta-text">
              אם יש לכם ידע אמיתי אבל הנוכחות שלכם ברשת עדיין לא משקפת אותו — זה
              הזמן להפוך אותו לתוכן מדויק, ברור ומשכנע.
            </p>

            <div className="hero-actions center">
              <a href={whatsappLink} className="btn btn-light">
                שלחו לי הודעה בוואטסאפ
              </a>
              <a href={`mailto:${email}`} className="btn btn-ghost">
                {email}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
