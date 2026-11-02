# Журнал пошуку та читання

[Протокол](protokol_dzherel.md) · [Реєстр](reiestr_tverdzhen.md)

Цільові перевірки; не систематичний огляд. Дата всіх записів нижче: 2026-11-02.

| ID | Питання / дія | Результат і рішення |
|---|---|---|
| Q001 | Повторне відкриття https://pubmed.ncbi.nlm.nih.gov/29792475/ з бібліотеки | Авторська анотація доступна; C001, асоціація, не причинний доказ |
| Q002 | Повторне відкриття https://pubmed.ncbi.nlm.nih.gov/28888927/ та пошук Findings | C002; анотаційна перевірка, повнотекстове читання лишається відкритим |
| Q003 | Відкриття https://consc.net/papers/facing.html | Вступ і §2; C003 — філософська атрибуція |
| Q004 | site.nature.com non enzymatic copying RNA protocells fatty acid vesicles 2013 Adamala Szostak | Знайдено PubMed 24288333 та авторський PDF; кандидат P04 |
| Q005 | site.nature.com common origins RNA protein lipid precursors cyanosulfidic protometabolism Patel 2015 | Знайдено DOI 10.1038/nchem.2202; кандидат P04 |
| Q006 | site.nasa.gov universe big bang what happened before inflation unknown | Знайдено офіційний контекст NASA і CfA; гіпотезу інфляції не прирівнювати до встановленого пояснення виникнення всього |

Для C001–C003 обрано джерела з наявної бібліотеки, щоб випробувати картки на різних типах тверджень. Це не означає, що вони є найновішим або повним оглядом тем. Для наступних записів фіксувати також відхилені релевантні альтернативи та причину відхилення.

## P04a — читання й обмеження доступу

2026-11-02: Q004–Q006 продовжено відкриттям CfA, PubMed 24288333 і 25803468 та NASA Life on Other Planets. Прочитано зазначені в пакеті розділи й анотації. Nature nchem.2202/nchem.1650 повернув недоступне перенаправлення; PMC4104020, PMC4568310, PMC7502746 — перевірку браузера. Авторський PDF Adamala/Szostak недоступний. Пошук «CO2 reduction pH gradients microfluidic origin life 2020 PNAS» дав DOI 10.1073/pnas.2002659117; PubMed не повернув змісту, анотацію прочитано в репозиторії UCL. PDF на сайті співавтора не завантажився. Доступ не обійдено; повнотекстове читання не заявлене. Роботу про конкуренцію протоклітин nchem.1650 не включено як додатковий доказ: залишилася на рівні пошукового фрагмента. Нові результати пошуку, які не прочитані, не видаються за перевірені.

## P05a — 2026-11-02

Запити: «jellyfish associative learning Tripedalia cystophora 2023 Current Biology»; «rats freeing trapped cagemate social experience helping behavior 2014»; «ctenophore sister all other animals chromosome 2023 Schultz»; «rats helping social contact not empathy Silberberg 2014»; «habituation non neural organism Physarum 2016». Відкриті PubMed 37741280, 24126919, 31752014 — прочитані анотації; для останнього також підписи рисунків 1/3. PMC3884117 дозволив читати Discussion і частину Methods. Повні методи всіх робіт не заявлені прочитаними. Пошук альтернативи S20 дав S21, а подальші результати — S22; збережено обидві сторони питання. Кандидати про Physarum і Schultz не включені як підтверджені результати. Повторна спроба легальних репозиторіїв Europe PMC для P04 також не дала тексту; доступ не обійдено.

## P04b — відновлення повнотекстового доступу, 2026-11-02

Повторне web-відкриття PMC4104020/4568310/7502746 повернуло перевірку браузера. Використано офіційні публічні канали без обходу перевірки: Europe PMC fullTextXML для PMC7502746 успішний, для двох інших — HTTP 500. NCBI BioC для PMC4568310 успішний, для PMC4104020 — немає результату в підмножині API. Звичайний HTTPS-запит до публічної сторінки PMC4104020 успішний. Перевірка браузера не розв’язувалася й не підроблялася. Основні тексти прочитані в обсязі [звіту P04b](p04_perevirka_povnykh_tekstiv.md); вивід S16 частково скоротив детальну хімію, тому повне прочитання всіх його абзаців не заявляється. Повні тексти не додавали до Git, збережено власний виклад та посилання.

## P04c — 2026-11-02

Цільові запити: «site.esa.int Planck universe 13.8 billion cosmic microwave background 2018 results»; «site.nasa.gov elements stars carbon oxygen origin universe»; «site.nobelprize.org prigogine dissipative structures open systems 1977». Відкрито ESA Planck science highlights, NASA Star Lifecycle, анотацію arXiv 1807.06209. NobelPrize через web повернув 403; звичайний HTTPS-запит до відкритого PDF успішний. Прочитано текст перших п’яти сторінок через pypdf; повний PDF не включали до Git. Залишено вузький контекст, без параметричних космологічних тверджень і застосування термодинамічних екстремальних принципів до психіки.
