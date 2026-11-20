# Margins — مجلة أدبية ومكتبة قراءة

**Margins** مساحة أدبية هادئة لعرض القصص والكتب والمقالات القصيرة. المشروع موقع ثابت مبني باستخدام [Astro](https://astro.build/) ويُنشر على GitHub Pages.

- **الموقع المنشور:** https://gpldroid.github.io/gallery/
- **المستودع:** https://github.com/gpldroid/gallery
- **دليل التصميم:** [DESIGN.md](./DESIGN.md)
- **المساهمة في المشروع:** [CONTRIBUTING.md](./CONTRIBUTING.md)
- **إضافة القصص والكتب:** [docs/CONTENT_GUIDE.md](./docs/CONTENT_GUIDE.md)

## المزايا

- صفحة رئيسية تحريرية وأرشيف مستقل للقصص ومكتبة للكتب.
- صفحة مستقلة لكل قصة ولكل كتاب، تُنشأ تلقائياً من ملفات Markdown.
- تصميم متجاوب، وضع فاتح/داكن، وتأثيرات حركة تراعي إعداد تقليل الحركة في النظام.
- أيقونات وروابط التواصل الاجتماعي بألوان العلامات الأصلية.
- قوائم تنقل بتأثير CSS ثلاثي الأبعاد وبطاقات وأقسام بزوايا مستديرة.
- توليد صفحات ثابتة مناسبة للاستضافة على GitHub Pages.

## التقنيات

- Astro 7 و Astro Content Collections
- TypeScript
- GSAP للحركات التدريجية
- Lucide Astro للأيقونات
- CSS مخصص للتصميم المتجاوب والتأثيرات

## المتطلبات

- Node.js 22 أو أحدث ضمن الإصدار الرئيسي 22
- npm 10 أو أحدث

## التشغيل محلياً

```bash
git clone https://github.com/gpldroid/gallery.git
cd gallery
npm install
npm run dev
```

افتح العنوان المحلي الذي يعرضه Astro في الطرفية.

## الفحص والبناء

نفّذ الفحص قبل اعتماد أي تغيير:

```bash
npm run check
npm run build
npm run preview
```

- `npm run check` يفحص ملفات Astro وTypeScript.
- `npm run build` ينشئ الموقع الثابت داخل مجلد `dist/`.
- `npm run preview` يعرض نسخة البناء محلياً.

## بنية المشروع

```text
.
├── .github/workflows/verify.yml  # فحص وبناء ونشر GitHub Pages
├── docs/
│   └── CONTENT_GUIDE.md          # دليل كتابة المحتوى
├── public/                       # الملفات الثابتة مثل favicon
├── src/
│   ├── components/               # الرأس والتذييل وبطاقات المحتوى
│   ├── content/
│   │   ├── books/                # ملفات الكتب بصيغة Markdown
│   │   └── stories/              # ملفات القصص بصيغة Markdown
│   ├── layouts/                  # التخطيط العام
│   ├── pages/                    # صفحات الموقع والمسارات الديناميكية
│   ├── styles/                   # CSS العام
│   └── content.config.ts         # مخططات التحقق من المحتوى
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## المسارات

| المسار | المحتوى |
| --- | --- |
| `/` | الصفحة الرئيسية |
| `/stories/` | أرشيف القصص |
| `/stories/<slug>/` | صفحة قصة مستقلة |
| `/books/` | مكتبة الكتب |
| `/books/<slug>/` | صفحة كتاب مستقلة |
| `/about/` | عن المجلة |
| `/404.html` | صفحة غير موجودة |

> لأن الموقع منشور كمشروع GitHub Pages، فإن قيمة `base` في `astro.config.mjs` هي `/gallery`. لا تحذفها عند النشر على العنوان الحالي.

## المحتوى

أضف ملف Markdown جديداً إلى `src/content/stories/` أو `src/content/books/`. يجب أن يطابق الـ frontmatter الحقول المحددة في `src/content.config.ts`. راجع [دليل المحتوى](./docs/CONTENT_GUIDE.md) للحصول على قوالب جاهزة وأمثلة.

## النشر

كل عملية دفع إلى فرع `main` تشغّل سير العمل الموجود في `.github/workflows/verify.yml`:

1. تثبيت الاعتماديات.
2. تشغيل `npm run check`.
3. بناء الموقع باستخدام `npm run build`.
4. رفع مجلد `dist/` كأثر GitHub Pages.
5. نشر الأثر على GitHub Pages.

يمكن تشغيل سير العمل يدوياً من تبويب **Actions** في GitHub. يجب تفعيل GitHub Pages باستخدام **GitHub Actions** كمصدر للنشر.

## المساهمة

يرجى قراءة [CONTRIBUTING.md](./CONTRIBUTING.md) قبل فتح طلب دمج. حافظ على أسلوب التصميم الحالي، وتحقق من نجاح الفحص والبناء قبل إرسال التغييرات.
