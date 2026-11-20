# دليل إضافة القصص والكتب

يعتمد الموقع على Astro Content Collections. كل ملف Markdown داخل مجلد المجموعة يتحول إلى صفحة مستقلة تلقائياً، ويُستخدم اسم الملف (من دون الامتداد) كجزء `slug` من الرابط.

## إضافة قصة

أنشئ ملفاً جديداً داخل `src/content/stories/`، مثلاً `a-new-story.md`:

```md
---
title: "عنوان القصة"
description: "وصف موجز يظهر في صفحة القصة وبيانات المشاركة."
excerpt: "مقتطف قصير يظهر في بطاقة القصة."
author: "اسم الكاتب"
publishedAt: 2026-11-20
readingTime: 6
category: "Short Fiction"
cover: "https://example.com/story-cover.jpg"
coverAlt: "وصف واضح للصورة"
featured: false
---

## بداية القصة

اكتب نص القصة هنا باستخدام Markdown.
```

الحقول المطلوبة: `title`, `description`, `excerpt`, `author`, `publishedAt`, `readingTime`, `category`, `cover`, `coverAlt`. الحقل `featured` اختياري وقيمته الافتراضية `false`.

## إضافة كتاب

أنشئ ملفاً جديداً داخل `src/content/books/`، مثلاً `a-new-book.md`:

```md
---
title: "عنوان الكتاب"
subtitle: "عنوان فرعي اختياري"
author: "اسم المؤلف"
description: "نبذة موجزة عن الكتاب."
year: 2024
genre: "Literary Fiction"
pages: 240
cover: "https://example.com/book-cover.jpg"
coverAlt: "وصف غلاف الكتاب"
featured: false
---

## عن الكتاب

أضف مقدمة أو ملاحظة قراءة باستخدام Markdown.
```

الحقول المطلوبة: `title`, `author`, `description`, `year`, `genre`, `pages`, `cover`, `coverAlt`. الحقلان `subtitle` و`featured` اختياريان.

## قواعد مهمة

- استخدم اسماً لاتينياً واضحاً للملف مع شرطات، مثل `the-quiet-garden.md`. هذا الاسم يحدد الرابط.
- اكتب تاريخ القصة بصيغة `YYYY-MM-DD`، ويجب أن تكون مدة القراءة وعدد الصفحات أعداداً صحيحة موجبة.
- اجعل `coverAlt` وصفاً للصورة لا تكراراً آلياً للعنوان.
- استخدم صوراً تملك حق استخدامها، ويفضّل روابط صور مستقرة أو ملفات محلية داخل `public/`.
- لا تضع ملفات Markdown إرشادية داخل مجلدي القصص أو الكتب؛ كل ملف هناك يُعامل كعنصر محتوى ويخضع للمخطط.
- بعد الإضافة شغّل `npm run check` ثم `npm run build`.

## أين تُعرّف الحقول؟

مخططات التحقق موجودة في `src/content.config.ts`. إذا أضفت حقلاً جديداً، حدّث المخطط والمكونات والصفحات التي تعرض بيانات المجموعة، ثم حدّث هذا الدليل.
