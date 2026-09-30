# Color Clash

لعبة بطاقات جماعية متزامنة لحظيًا عبر Firebase Realtime Database، من 2 إلى 10 لاعبين.

## النسخة الأولى

- غرفة برمز من 6 أرقام.
- من 2 إلى 10 لاعبين.
- 7 أوراق لكل لاعب.
- الأرقام + Skip + Reverse + Draw 2 + Wild + Wild 4.
- اختيار اللون بعد الأوراق الحرة.
- لا يوجد stacking في النسخة الأولى.
- زر UNO عند بقاء ورقة واحدة.
- عودة اللاعب لنفس الغرفة والمقعد بعد إعادة فتح التطبيق.
- كل لاعب يقرأ أوراقه فقط من Firebase؛ الآخرون يرون عدد الأوراق فقط.
- الرزمة لا تكشف إلا الورقة التي يحق للاعب الحالي سحبها.

## GitHub Pages

استخدم الطريقة الثابتة للمشاريع البسيطة:

`Settings → Pages → Deploy from a branch → main → /(root)`

بعد التفعيل يكون الرابط:

https://drburghash-sys.github.io/color-clash/

## Firebase

ادمج `firebase-rules-fragment.json` داخل كائن `rules` الموجود في Realtime Database دون حذف قواعد الألعاب الأخرى.
