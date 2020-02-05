// for initiating charts
var pieChart = "";
var pieChart2 = "";
var pieChart3 = "";
var pieChart4 = "";

// sample queries
var queries = [
"@AJArabic",
"@AlArabiya",
"@Dhahi_Khalfan",
"@BakryMP",
"@ElwatanNews",
"@jamalrayyan",
"@RTarabic",
"@TawakkolKarman",
"@youm7",
"@AbdullahElshrif",
]

var dialectSamples = [

"لما بقابل موظف حكومه محترم ببقي عايز ابوس راسه والله",
"تصدقي يا ندى انا مش بحبها دمها تقيل و مش حلوة ولا حاجة دي تقيلة اوي",
"حب النادى حاجه . .. والمنتخب حاجه تانية . .. بس الحقيقة الموازيين عندنا متشقلبة . .. ولا انتا مش معايا",
"اعتقد ان رفع الدعم عن رغيف العيش لن يناقشه احد ولا حتى فى خياله . ..ده عيش . .عارفين يعنى ايه عيش بالنسبة للمصريين . ..ده ممكن يبقى الوجبة الوحيدة اللى بيسد بها الغلبان جوعه . ...",
"مبروك يا أعظم لاعب في تاريخ مصر . . فرحتك و كل إنجاز ليك اللي بيخلوا بكل المصريين فرحانين من قلبهم خلوك أسطورة مش هتتكرر . ..  #محمد_صلاح ",

"الله يعزك ويعلي قدرك وشانك ختيتو يارب وانت وخولة من أطيب الاشخاص الموجدين هنا ربي يحفظكم ويعطيكم كل لي تتمناوه يارب",
"مارهوش يحاولك فيك باه تنتخبي انت حرة في اختيارك ولي رايحين ينتخبوه هم احرار",
"ايه علابالي وللاسف الواقع ماولاش فيه رحمة . .. مبصح حدود الله ولا يحق لنا تجاوزها",
"نظن عارفين ان العريس مايجيش بهاذ الطريقة لكن الكبت و النقص العاطفي يخليهم يديرو هكا باش تلحقهم كلمة مجاملة الكترونية",
"والله انت طلعت اصيل اكثر منها عملتلي بلوك لان انصح فيها واش راكي رافدة يابلادي",

"بريد شنو يا بتاع الفته بالرز ان شالله تكون غيرتو جو كويس بحر دار كيف بالله",
"أنا مافتحته خشمي دا ولا قلته اي شي باالعكس قلته ل مونت ماصح كده ياخ ههههه",
"انا متابع مع شبابنا الهناك وما بكتب حاجة الا هم يقولوا لي اكتبها ومستنين الصباح عشان نمشي ندعمهم . .",
"الحاصل عندهم دا اصلا مطبوخ من خروج محمد علي الي ان يستلم الجيش البلد ياعم الشعب شحدو شحدة وشجعو عشان ينزل .",
"الزول دة ماعندوا بلد فيها مشاكل والله مرتاح وفاض",

"اني البارحة اول مرة اسمعة من كثر ما اسمع العالم تحجي بي كلت شو خل اسمعة طلع يعني حلو",
"اذا انت هيج خوش ما فتحت ابواب جهنم على البعثيه وداعش وحررت الموصل صار اكثر من شهر ؟ شو الانبار صار NUM اشهر ما فتحت . ..",
"اتركو تهمة البعث البعث انقبر واي حزب تسقط دولته ينتهي التهمة صارت شماعة والله تعلكون بيها فشلكم وع القناة انا هم أشوفها بدأت تفشل من جابت سوالف الضحك التافهة بس مو بعثية",
"مرحت اهلي وخليت اختي تدرس اهلي طب اسنان واني رحت حكومي . .. ما اعتبرهه تضحيه ابد بس الناس هيج تكول يعني",
"ع كولتك ، مو مال يتويوب وع فكرة يوتيوب همين هالايام تسمح بكلشي مو مثل قبل . .خربانين",

"ديك الضصارة اللي كادير فالريال سير كولها . .دوزتها لك على وجه هد الشيباني إنييستا",
"سوء تدبير الشأن الوطني من قبل سياسة صيبيانية للخدام دولة خلات بلد على محك ملي غادي تقود نييت غادي كل واحد اشد طيارة و يهرب",
"منعم عندو مايقول شاعر مبتدأ هو وعروستو زوينين ومحترمين ومقبولين هههههههه قتلني ديال الرباط بالضحك",
"كيتاصلو بيك ويقولو ليك راك ربحتي معانا واحد معنا مبلغ مالي ، كيقولو ليك عطيني سميتك والعنوان وكيطلبو ليك ارقام NUM تعبئات NUM درهم بلاحشمة وبلا حيا",
"تبحت عن من يعطيها درس في بزااف الامور اعتقد هدى متخلفة معرفاش بلي في تونس هناك إداعة راديو لشواد عندهم وقانون يحمي ويجوز لهم ممارسة مثل ها الامور الاخت بزاف معلومات في بلادها معرفهاش ايلا بغات نعاود لها القراية",

"مايقهروني غير البنوك يربطون اقلامهم بحبل الحين حنا واثقين فيكم وحاطين كل فلوسنا عندكم وانتوا مو واثقين فينا بقلم ب ريال ' ̮ رجعو فلوسي بس = )",
"احنا بالجنوب تهامة عسير احس الديره اليوم الجو مره براااااااااد الحمدلله كان حررر يذبح ورطووووووبه",
"عسى الله يطول عمار اللي يمشون في هواها . . فالكم الخير يبو سعود وعلمونا بمحلكم نسير عليكم",
"اتمنى يجلدونه قدام البيت اللي اطلق عليه النار ويطلقون عليه بعد كم رصاصه بس للتخويف عشان يعرف المهايطي ان الله حق",
"لو يقفلون النادي للموسم الجاي ابرك  من زين هاتمارين الي ماتفيد بالمباريات  لاعبين فاااشلين حتي نهاية الهجمه مايعرفونها",

"يا ليت محد يسألني إيش جديدك لأن حياتي تنسخ اللي حصل أمس و تلصقه كل يوم .",
"إن بغيت تكون فرحي هاك صدريٰ  وإن بغيت تكون حزني . . مأيخالف .",
"إن بغيت تكون فرحي هاك صدريٰ  وإن بغيت تكون حزني . . مأيخالف .",
"مدخلتو في مواجهه جت التعليمات عدم المواجهة اكلتوو الطعم اهم شي",
"إنتا من اول قاعد تقول كلام حلو وبديت اهداء وكل شيء صار كويس وخربتها الحين ب ماله الحق في تكبير الموضوع  انا الحين بنسى كل الكلام ورح تمسك ببالي هالكلمة ",

"يا اخي يلعن ابو الصنف اللي عم تتعاطاه ركز شوي ولما بتكون ضارب شي لاتفتح تويتر وتكتب",
"حاج تمجدو بهل الحكام كلون اسقط من بعض ما بيهمون غير هالكرسي و انتو بطبلو ألون",
"ماتفكر حالك شايف كلشي #ببلادنا_بتشوف اللي ما شفتو . ومفكر تشوفو .",
"شوف قديش نحن متفقين شقفة منتخب قالها بصوت عالي انه مع بشار #الأسد  واحد معارض ببرر لحاله انه الرياضة مادخلها . ..",
"العمى ضرب جوز عيونو اذا رئاسة بلدية مو هاين عليه يتركها  شلون الرئاسة ؟ شو راح يسوي بال NUM ! والله ليصير الدم للركب",  

"شكون كيفي ما تفرج في حتا حلقة من #gameofthrones و مستحمل أصحابو اللي نهار و طولو يحكيوا عليه",
"ان شاء اللٰه ' علي الجمل ' حارسنا اللي ماعندوش بديل في الترجي ، يكون خير حارس لعرين الدولة   #مربوحة_ان_شاءاللٰه #مكشخة  #الترجي_الوداد",
"المغرب : أنت و أدائك و زياش متاعدك ، و التسعة نقاط اللي ترشحتوا بيهم ، سفسريكم و باب عليوه متع مصر .",
"شكرا يعيشك لحقيقة اني ما عادش نشري كتب بالفرنسية و إلا بالإنجليزية خاتر غاليين برشا الكتاب الباهي أقل شي ب NUM د وليت نقرأ هم PDF",
"عكل يا انسه يا فاضله كان المفروض تحط حاجه عالتصويرة وعيب تهبطها هكا",

"احيانا كرة القدم تخليك تكرها . . راشد بالهول اهان الوصل كثير وضيع النادي هو وزبانيته اللي باذن الله نفتك منهم جريب ونحتفل",
"فالمستقبل القريب بتندمون على هذي الفضاوة ولعب الصغار اللي شغالين فيه الحين ولكم في سوريا وليبيا عبرة",
"ف ناس اترد ع تغريداتهم مرة و مرتين و ثلاث واكثر ولا يردون عليك . . حبيبي ع شو شايف نفسك يالطيب . . المشكله ما عنده متابعين عشان اتقول شايف نفسه لسبب . . هالاشكال ببدا اصفيهم",
"تخيل تنش الصبح و تشوف كريماتك ضايعه . . شو بتسوي حزتها ؟",
"وين الغلط لما اجنس لاعبين ممكن يضيفون للانديه والمنتخب اغلب الدول الاوروبيه جنست لاعبين واضافوا لدورياتهم ومنتخباتهم هذا الاحتراف ليش زيدان ما وصل فرنسا لكاس العالم وهو مجنس ! ؟ والا انتوا تاخذون من الاحتراف اللي تبونه واللي ماتبونه طاف",

"احلى اشي ، اصلا نبع الحنات لو تضرب بتعمل يومي وبصير احلى شي الله يحفظ امهاتنا كلنا",
"بلغي عنه ل تويتر ابعتيلهم مسج القصص هاي صارت كتير مستفزه صايره معي تقريبا نفس القصه هاي الفتره بس ع مستوى اكبر بكتير من تويتر ووكلت محامي وفي قضيه عالطريق ، ، ، لا خجل ولا حياء قسما بالله",
"اشي مقرف عنجد وبعدين بيدخل باسم فجاه ولو خو شي تاني بس انا الحساب الي بشوفه جديد والاسم فيك دغري بلوك",
"انا شخصيا صرت مبسوطة لما صرت تابعك و احضر مسلسلاتك  حتى بالمدرسة  بالصف بحط السماعات بس مشان اسمع صوتك الحلوووو",
"نزللنا كشف راتبك . الشهر الجاي . . مو مشان شي .  بس مشان الشفافيه يعنك",

"سوق الجمعة يشكروا فيه , قالى نمشيله وفي اكثر من واحد معاه .",
"انا مانبيش نصدمك ونقولك اللي تلقحي عليه بالكلام مدايرلك ميوت ريحينا بئا",
"من الحاجات اللي كنت نشوف فيها صعبه جدا وهي انبطل نشرب المشروب الغازي ، بس توا ولت عندي حاجة عادية جدا ونستغرب كيف يشربوا فيه الناس ، المهم النقطه اللي نبي نوصلها ان لما الانسان يقتنع داخليا و يحاول بالاصرار يوصل ، مفيش شي صعب ومستحيل ، بس احني نخافوا من المواجهة بس ، فنقولوا صعب",
"مفروض يكسروله باقي صوابعه بيش يستمر على هالمستوى",
"تخايل ي نعمان انت نازل من دروج الطيارة تلقي الشرادم بطرحة جديدة قدام وجهك يستقبلو فيك بمصطلحات ياعمو ويا شيباني لا تقيس عليك بسو",

"ابوي كل سنة بوزعها على العيلة والحبايب . . ما بضل حدا الا باكل منها . .",
"انتي حسابك فاتحتي الك و لتتسلي فيه و تتواصلي مع الي بتحبيهم و بحبوكي  اي موقف او تصرف او رد من شخص برا نطاق اهتمامك غلط يأثر فيكي ويخليكي تلغي حسابك . .  حسابك خليه منفس الك وسيبك من اي شئ",
"هلا كنت سايقة وبحكي تلفون الشرطي وقفني بدو يخالفني لما عرف انه بحكي مع الدكتور المشرف مشان توقيع الرسالة . . بطل يخالفني قال انا والماستر عليها",
"يا الله مو طايقة شي ولا طايقة حالي ولا طايقة حدا ولا حدا يا رب يا رب يااااا رب بس",
"اكيد مافي اطيب وانضف من اكل البيت ، ، بس لما بنجتمع بنطلب اكل ، مش كل يوم بقدر اروح اتغدا بالبيت",

"حطو عداد ع مناخيرنا كرمال ما نتنفس . ...العمى بقلبكن واحد ورا التاني انشالله بتولعو كلكن سوا #صار_بدها_ثورة_المظلومين",
"أحلى مرشح والله ورئيس لائحة , , , بتسكر المجلس بالهضامة والجو الحلو",
"بس تروح بيروح الخير والحب والعاطفة من كل الدني الله يرحمك يا امي",
"طلع جوزيف بو فاضل عصب محور المقاومة و الممانعة . . و قفولي هالمحور بدي انزل و كفي مع الكفار . .",
"بس يكون وفي متل الشهيد منرفعلو الشبو حبيبي بس م وصل لنقطة من الئيس الشهيد",

"ماحد فعلا بس الي يصير لحين صار القتل شربت ماي",
"اذا كان الموضوع فيه خير ف نحن موجودين  اما اذا الموضوع الجديد القديم طائفيه وعنصرية ومذهبية هذة مخليها لكم  انتم اهلها هالسوالف",
"اللي ف الملعب يقدرو يحددو شو كان الحكم المساعد حسبها . ..لكن في اعاده مب واضحه كثير . ..انا شفت المساعد رفع بعد ما عدت الكوره المرمى ولكن ما شفت نزل الرايه",
"ترااه حظك هذي المره نفعك ولا هو م شي منه   اول مره تصدق حظي يطلع حلو ولا مبونه كما وجهي",
"جيت وخذيت السنين وذكريات السنين  ماكنت ضيف المحاني كنت راعي محل ! وأقفيت من دون سبه لكن الله يعين  منت أول اللي عطيته دم قلبي ورحل !",

"والجو يجيب الهم زياده وان تواصلت معاي تجيك جلطه",
"الحين هبة الدايركت اليديده بالسناب  يسمونه التحرش التكانه تدزله هالصوره قبل لا تصور نفسها عشان يعرف شكلها",
"شنو العفو الشامل بعد . .. وين العداله  اللي مارتكب جريمه ونسجن شنو بيستفيد ! ! !",
"ماهوو انتي شايفه طلع وي دار مادخلك شر . يلعن ابو الفلوس . لو كان فقير ماطلع يلعن بو الفقر ",
"اليوم صارلي موقف غريب وعجيب ابيكم تسمعونه وتفكرون شنو سببه ووين نهايته",

"يا أخوي أرفع راسك أنت ولد قابوس و بمجرد هو ينطق أسم عمان المفروض يوقف على حيله . . هذولا متربية مجاري ومن ناحية قطر وأهلها مطوعين الصعايب دقوا خشومهم دق و قطر تصعب على من بغاها",
"تلفون مكتبي خربان من اسبوعين كل ما اكلم الاي تي يجون يغيرونه يتعدل  والله احس يحسبوني كذابة",
"يبه ماااااانبي نحج غصب !  حكومتنا مالها شغل احنا كشعب واعي على خياناتكم وغدركم مانقدر نستأمن نفوسنا في قعر داركم  لم يمنعنا احد قراراتنا في عدم الذهاب للحج هي من روسنا",
"#نادي_الريان_ارهابي صديقاتي الريانيات ها انشر اساميكم عشان تدخلون المجد  ترى عدد منهم من البحرين شلون عليهم معاهم والا ؟ !",
"لا العقول مب ضعيفه مثل ما تحطون التسجيلات و مبسوطين عليها من حقنا بعد ما وضحنا اسبابها تروونا ادلتكم اللي مستندين عليها في الاساءه لدولتي قطر ورموزها من حقنا معرفة الاسباب",

"اذبح روحي واحترم وقت الأولي والتالي واسوي لي جدول وحاله . . بس وين اللي يقدر ؟",
"ي ليل م اطولك لجيتونا ترى القضيه مش قضيه فلوس تعبت اقول في اتهامات على اميركم انه يدعم الارهاب فتحوا مخكم وافهموا شوي",
"احنا لو ناخذ المركز الثالث بنروح الدوري الاوروبي  اما انتو اذا خذتو المركز الثالث وين بتروحون ؟ !",
"البحريني اذا عجبه أكل من مطعم قال : بووو عجييب ، جنه شغل بيت ، ، واذا عجبه أكل بيت قال : والله روعة ، جنه مال مطاعم ! !   #انفصام_شخصيه  #شسالفه",
"مشكله للحين في ناس وايد برغم شهاداتهم وثقافاتهم تلاقينهم متخلفين بهالشي وعايشين عالعنصريه والتفرقه .",


]

var sentimentSamples = [
"يا شباب العالم روحوا زوروا السجون المصرية وشوفوا عدد الشباب اللى فيها.#منتدى_شباب_العالم",
"#حقيقه_قناه_الجزيره عملت هذ القناه كل هذه السنوات على التحريض وبث سمومها في العالم العربي وهي من اثار الشعوب على حكوماتها في بدايات الربيع العربي",
"بعد مرور سنوات من الربيع العربي صار عند الغرب المجرم بطلاً قومياً مكافحاً للإرهاب والشعوب هي الشريرة الثورة تمرض ولا تموت",
"تيران وصنافير بعتوها بكيس رز ما سرقها منكم",
"#وضاع_النيل_يابلدي ضيع النيل واتنازل عن تيران وصنافير حسبي الله ونعم الوكيل",
"#منتدي_شباب_العالم ممكن لما تخلصوا تطلعونا بقى بانجازات المؤتمر ايه وجه الاستفادة اللى مصر هتستفديها منه ؟ الكلام ببلاش",
"أويحيى: مدبرو الربيع العربي خططوا لتدمير الجزائر",
"ازمة الخليج تدار من الخارج والاحتمالات مفزعة وهذا هو كلام أمير الكويت بفشل الوساطة واضح ربنا يستر",
"#حصار_قطر هذا عبث بالاقتصاد وبعيد عن تطبيق القانون السيطرة على اموال من من كان بوضع اليد لا يجوز",
"تتم محاكمة خليفة حفتر كمجرم حرب ؟ الخبر ... اسر واهالى ضحايا خليفة حفتر ممن تعرضوا للقتل والتصفية بسجون حفتر...",
"هداف الدورى الانجليزى #محمد_صلاح :clap::clap::clap::muscle:",
"#منتدى_شباب_العالممصر هى الماضي والحاضر والمستقبل ، مصر أيقونة العالم تاريخ وجغرافيا تحيا مصر ويحيى شعبها",
"رغم كل ما يُقال عن فشل الربيع العربي إلا أنني متفائل.على الأقل خلق هذا الربيع حراكاً شعبياً،وأرغم الحكومات على احترام شعوبها، وهذه بشرى خير.",
"نتمنى الفوز للمغرب وتونس تصفيات كأس العالم اليوم دعواتكم",
"#منتدي_قطر_للقانون الله يحفظ أميري و اميرتي ويحفظ الوالدنا أبو خليفه اصلا هذي رابع مره حصار وتنفك غصبن عنهم احنا مو محتاجين شي منهم فديت تراب قطر قبيلتنا قطر سمعه وطاعة",
"عاجل | تصفيات كأس العام: للمرة الأولى في تاريخ كأس العالم تتأهل 4 منتخبات عربية إلى النهائيات",
"#رأي_عام - #عمرو_عبدالحميد: تأثير #منتدى_شباب_العالم سينعكس إيجابا على مؤشرات السياحة في مصر",
"الزمالك كدا بقا 12 دوري و 20 كاس مصر وجون ل #شيكابالا ف تصفيات كاس العالم :joy::facepunch::joy:",
"#قطر #حصار_ قطر #تميم_ المجد #النائب_العام كفو :ok_hand::skin-tone-2::clap::skin-tone-2::clap::skin-tone-2::heart:",
"الوعي السياسي هو اول طريق الديموقراطية وده يمكن أهم مكتسب من مكتسبات ثورة يناير الحلوة :relaxed:",
]

// offensive/non-offensive samples
var offensiveSamples = [
"يا صبر الأرض عليك يا مدرب يا حثاله المشكلة يدفعون ملايين لمدرب سبااااااك",
"@USER وجمهور الاهلى لن ينسى موقفكم يا اتحاد العار يا مرتزقة يا مرتشين والحساب قريبا وياريت ماتتمسحش فى جمهور الاهلى عشان الكلاب اللى زيك جمهور الاهلى داس عليهم بالجزمة خلاص لان ده مقامك يا قذر",
"@USER @USER @USER ارجع لتاريخك وتاريخ ملك اسياء وتعرف من الوضيع يا ابو ثلاثه دوري يا محلي",
"@USER يارب يا كريم يا سميع يا بصير انك تحرم نادي الهلال الوضيع المنبطح الدوري وينهزم قدام التعاون والاتفاق والشباب امين يارب 🙌🏽",
"@USER @USER الله يقلعكم يالبدو يا مجرمين يا خراب المجتمعات ... طفيليات غير نافعه فقط تضر المجتمعات ابوكم ابو قبايلكم الزق",
"@USER يا كلب الصهاينة يا عميل الفرس أنت عبد من عبيد نعال الحكام الظلمة و القتلة، أنت لا تساوي ذرة رمل في شسع نعال الرجال يا أقذر خلق الله يا وقح.",
"قصدي وسط البلاد يا وسخين يا حقيرين يا نذلين ...<LF>احياء سكنيه و ناس مدنية ...<LF>تفو و حسبي الله و نعم الوكيل في كل من كان السبب💔",
"يا كريه يا لعين يا مُستفز يا سافل .. والله ماتشم الدوري URL",
"@USER روح يا ابن الزنا يا كلب يا فاسد انت وحكومتك ورئيسك يا زوامل يا عيال شحيبر حكومة ورئسة",
"@USER القوات راكبه امايتكن واحد واحد من كبيركن ل صفيركن . و صرمايه كل فرد و وزير او نائب اشرف من راس بياتكن و يا بجم يا حواش انتم سرطان المجتمع اللبناني .",
"RT @USER: يا رب الأفضل للأفضل.. يا رب الطيب للطيب.. يا رب النوايا لأهل النوايـا.. يا رب الخير كلـه لقلوبنا والجمال يتخلل أيامنا والر…",
"@USER حبيبي يا كابتن عصام يا جميل مساءك سعيد",
"ايش الاكل الحلو ذا ياسُميه تسلم يدك ياعسل ياقشطه ياحلوه ياسُكره يا طباخه يا فنانه يا كل شي💛.",
"يا بسمةَ الصّبحِ يا فألي ويا أملي ،<LF>يا نغمةَ الطيرِ إن غنىٰ بأسماعي 💛🕊<LF>URL",
"اللهم مغفرتك أوسع من ذنوبي ، ورحمتك أرجي عندي من عملي , <LF>سبحانك لا إله غيرك أغفر لي ذنبي وأصلح لي عملي إنك تغفر الذنوب لمن تشاء ,<LF>وأنت الغفور الرحيم يا غفار أغفر لي يا تواب تب علي يا رحمن أرحمني يا عفو أعفو عني يا رؤف أرءف بي .. - <LF> w: URL URL",
"يا ساحِرة البسمة يا حبيبتي أنا .",
"انا في حلم ولا وين يا رب لك الحمد يا رب💛💛💛💛💛💛💛",
"يا حي يا قيوم برحمتك استغيث يا ودود يا ودود ياودود يا ذا العرش المجيد يا رحمن يا رحيم يا فعالا لما تريد اللهم اني اسألك بعزك الذي لا يرام ومُلكك الذي لا يضام ونورك الذي ملأ ارجاء عرشك ان تقضي حاجتي يارب يا كريم عاجل بالاجابه يارب وراضي قلبي وراضيني وفرحني واجبر بخاطري يارب 🤲🏻",
"يا ملائكية الخدين ، يا حوراء العينين <LF>يا غجرية الشعر ، يا فواحة العبير ويا غذاء الروح",
"فى مثل هذا اليوم فى مثل هذه الساعة و بعد صلاة الظهر منذ عام بالتمام و الكمال واريتك فى التراب يا أغلى الناس يا اعز الناس، رحمة الله عليك يا أبي، اللهم اغفر له وارحمه واسكنه فسيح جناتك و اكرم منزله و ابعثه مع... URL"
]

// ad/non-ad samples
var adSamples = [
"@USER 👑🐝👑🐝👑🐝👑🐝👑🐝<LF>-امن🤛 صحي<LF>- تأخير القذف<LF><LF>👌بخاخ سوبر دراجون 👌<LF>-ليس له اضرار جانبية<LF>-ياخر القذف ما بين 20 ل 30 دقيقة<LF><LF>للتواصل واتساب :<LF>URL<LF>WFaHOQ",
"@USER 🔷🔷 منتج طبيعي من نبات الالوفيرا والعسل #كلين9 🔷<LF> تخلص من دهون جسمك مرة والي الابد<LF><LF>🇸🇦 🇰🇼<LF><LF>🇴🇲 🇦🇪<LF> لا تعرض حياتك لخطر ستندم عليه لاحقا بسبب السمنة <LF><LF>للتواصل عبر الخااص<LF>URL<LF>BMFkfb",
"@USER كلين9<LF>افضل برنامج تخسيس في الخليج🔱<LF><LF> فيت وان ينزل 25 كيلو خلال شهر🕑<LF>💪🍊🍐💪<LF>كلين 9 الوسط ينزل15كيلو خلال 21💪🍊🍏🍎🍋<LF>💪🍊🍏🍎🍋🍐<LF>كلين المصغر ينزل 9كيلو خلال 12يوم<LF>💪🍋🍐💪<LF>URL<LF>5Liy",
"@USER احصل علي حياه زوجيه سعيدة مع منتج جين شيا 😍<LF>المنتج يعمل على<LF>🌲تقويه الانتصاب<LF>🌲تأخير سرعة القذف لفترات اطول<LF>🌲زيادة فترة الجماع وزيادة كمية السائل<LF>🌲تحسين صحة البروستاتا<LF>للطلب والاستفسار عبر الواتساب<LF>URL<LF>او<LF>عبر صفحة الدكتورة الشخصية @USER<LF>tffW URL",
"@USER @USER * مجموعة علَاج البَـواسِير * الامرِيكية<LF><LF>علاج البَواسِير الداخلية والخارجية<LF>النتائج مضمونه وامنة وفعالة<LF>منتجات اعشاب طبيعية ومكملات غذائية🌵<LF><LF>للطلب والاستفسار تواصل واتساب مع د..سهام📲<LF>URL<LF>wtli",
"@USER لمن يعاني من السمنة والبدانة و الوزن الزائد<LF><LF>-يقضي على الترهلات والكرش<LF>كلين 9 لتخسيس الوزن💯<LF>-كلين9 يعمل على 'تخسيس وزنك من 10 إلى 15 كيلو <LF><LF>امن وفعال وصحي 100%<LF><LF>للطلب التواصل عالخاص<LF>URL<LF>rcydKv",
"@USER @USER 🎀♥♥♥♥💙👇👇👇👇👇👇👇👇 البديل الطبيعي للفياجرا <LF>لحل جميع المشكلات الجنسية 💚💚💚💛💛💛💘💘💘🌷🌷🌷💙💙❤❤👐👐👐👏👏👍👍👍<LF>💙♥♥💙♥💙<LF>🌹🌹🌹🌹<LF>👇👇F👇👇F👇F👇F👇<LF>URL<LF>x6b",
"عندك بحث ومو عارف تسويه ؟<LF>احنا نخدمك و نعملك بحث متكامل بأسعار رمزية<LF>تواصلوا خاص او واتس اب ٠٠٩٦٢٧٧٢٦٧٦٧٢٣ <LF>#بحوث #مشاريع_تخرج #جامعة #جامعة_الملك_فيصل  #جامعة_الطائف #جامعة_الشدادية #جامعة_الباحة  #جامعة_جدة #جامعه_القصيم #جامعة_الجوف #جامعة_الملك_عبدالعزيز #جامعه",
"@USER 🌹تخلص من مشاكل الحساسية والصدفيه والفطريات والقشور والجروح<LF><LF>و مشاكل القولون و الحموضه<LF>AA✅الافضل عالميا✅AA<LF><LF>♥️♥️✔✔✔⭕⭕<LF>♥♥👇👇👇 حيااكم احبائي و اصدقائي   حياة سعيدة بانتظاركم ان شاء الله 💛💛💘💘💘👐👏👏<LF>للطلب والاستفسار<LF>URL<LF>00p",
"@USER للعناية بالشعر وجماله والبشرة بشكل اصحي وامن تواصل عالخاص 😙😙<LF>URL",
"@USER لحظه صدق مع النفس ....مش بالضروى تكون نفس الصفات بس اكيد التلف اصاب بعض منها",
"RT @USER: الوقت ليل والشتاء بلا قمر <LF>نشتاق في سأم الشتاء شعاع دفء حولنا<LF>نشتاق قنديلا يسامر ليلنا ... نشتاق <LF>من يحكي لنا ..؟!<LF>نشتاق افرا…",
"RT @USER: اللهم إجعلنا ممن عفوت عنهم ، ورضيت عنهم ، وغفرت لهم ، وحميتهم من النار ، وكتبت لهم الجنة",
"RT @USER: صباح الخير، هل شخصياتنا في وسائل التواصل الاجتماعي مشابهة لما نحن عليه في الواقع؟",
"انطلاق تصفيات المرحلة الأولى<LF>من تصفيات #تحدي_القراءة_العربي<LF>التي تقام بــ #تعليم_بيشة<LF>في قطاعي البنين و البنات ضمن أنشطة الدورة الثالثة للمشروع . URL",
"الإنسان الأنيق في تعامله وحديثـه : يقتحـم أعماق كل من يقابله ويحظى بإحترام الجميع بطريقته كن بسيطًا تكن أجمل .! <LF><LF>#روز 🌸 URL",
"RT @USER: أصبحنا نتبسم لشاشة الأجهزه أكثر مما نتبسم في وجوه الناس<LF><LF>-<LF><LF>😴🌸🍃<LF>#آطيب_قلب ❤ URL",
"@USER وقضيتنا الكبرى في اكمال تعليمنا وحصولنا على البكالوريوس وتحسين اداءنا في مجال اختصاصنا",
"RT @USER: أشياءٌ كثِيرة لاَ تستحقُ منّا إلا أنْ نَنظُر لهَا بصمتْ لأن خُروج الكلماتْ حينهَا مُتعبٌ جداً",
"RT @USER: اللهم إن أبي كان باسمٌ الوجه، جميلُ الخلق، صابرًا في البلاء فأجعل مُستقره الجنة، ضاحكًا مستبشرًا يا أرحم الراحمين.",
]

//hate/non-hate samples
var hateSamples = [
"يادلخ القصيم فيها حروب و مطران لا تحسب ان القصيم بكبرها  مافيها غير النازيين",
"يجيك اعرابي راعي جاهل بالتاريخ والأنساب يطعن بأنساب أسر بني تميم العريقة",
"يوم السبت يوم كريه، مو غريب انه عيد اليهود.",
"لا تتعبوا حالكم صحيح مجنس سعودي بس مذهبه شيعي",
"هذه المنافق يدعي انو هو ملحد، وهو من أشد داعمين اسرائيل وهي دولة على أساس ديني. حاله حال العلمانيين",
"كره الحضر للبدو .موجود في جيناتنا.ولا اعلم السبب.الحضري يحشم الصهيوني ولا يحشم البدوي",
"هؤلاء شله سرق ومرتزقه وتجار حروب قالك حكومه ششرعيه #الشرعيه_حاضنه_لارهاب_الدواعش",
"عدو الاسلام والمسلمين والعرب ذنب للمجوس الفارسي الايراني نور المالكي قتلة فيه تحرير العراق من ملكية المجوس الايراني",
"وفيما نتعرض كعراقيين وسوريين  (ولبنانيين ) لاحتلال ايراني وعمليات قتل ممنهجة على يد مليشيات ايران نجد اسيادك يا غاد…",
"منطق وفكر وأطروحات دعاة الليبرالية:  أما أن تلبسوا ثوب الليبرالية الذي أتينا به لكم من الغرب أو نلبسكم ثوب…",
"سلامتج كنت اطق فره بتويتر ودرعمت عليج سوري ع الازعاج",
"المجلس اﻹنتقالي حليف وفي وصادق.. أظهر التزامه التام  ببيانات وتوجيهات التحالف.. وهذا إثبات منه في رغبته الحقيقية في…",
"الثقة بالنفس شيء جميل جدا ، لكن لاتصير مثل الحمار الي يشوف نفسه حصان .~",
"عزيزي العميل / فضلاً تزويدنا برقم ملف المنشأة ,,, شاكرين لك تواصلك.",
"من أجمل ما سمعت ولا غرابه هالابداع من شمر",
"ذولا مافديدة بطيئ  تسبب زحمة  والحوادث من عند مستشفي غرب نجران العام",
"بديت السنة الجديدة بقهوة اللوز عادات اهل الحجاز عشان تكون سنة بيضاء 🤤💙",
"كل مايشاع عن حركة نزوح من جنوبي لبنان هو كلام سخيف وعارٍ عن الصحة NEWLINE الأهالي على الشرفات يشربون الشاي .",
"مع ايقافها بشددده ماعاد اجلس مع اخواني وخواتي نفس اول مدمنين عليها بشكل فضيع",
"اخواني المترجمين. استفسار بسيط  NEWLINE مين عنده خبره باختبار الترجمة بشركة ڤينيل والمقابلة فيها؟ وكيف استعد لها. وشكرًا…",
]

var pornoSamples = [
"مساج الرياض  messaag الرياض  مساج استرخائي لكامل الجسم بسرية تامة _ المكان موجود _ الرياض للجادين",
"علاء المصرى  01285144697a  القاهرة, مصر  ‏حابب اتعرف على انسانه جاده لعلاقة فى سرية تامة وأمان وده رقمى ورقم الواتس<LF>للجادات 01285144697",
"نور واحمد😍 raAFWfbDz9R8JHD المملكة الأردنية الهاشمية احنا زوجين متحررين من الاردن إعمار 30 😍25 وحابين نتعرف ع شخص عمره 40 وما فوق ويكون صادق وثقه وسرية  نحب السفر والإنبساط كاش",
"سهرات دبي بزنس ! VuY8RNH2pEdE90f الامارات العربية المتحدة  ‏سهرات بدبي # السهره 6 سعات 1500 وحساب التاكسي بتكون بالفندق ارسلي كرت الغرفه والكيشن وبرسلك الصورتختار <LF>00971551286548  ## 😍😍",
"احلام جده  ahlam12jidah    انا احلام من جده  عمري 27 هذي ‏سهره 600 نص تحويل  ونص في يدي وكرت 100 سوا  تبي عرض 100 فون 50 سوا 0549466732",
"شقه  دعاره مدينه نصر القاهره TOuU9P6KHCTC9sj القاهرة  مدينه نصر  ‏انا جاد. شقتي مفتوحه لجميع البنات من عمر 15 الي 50.",
"صديق عراقي alisadik122 Iraq  اني رجل سنكل غير متزوج ابحث عن عائله متحرره للصداقه الدائمه والجنس..احترام كافه الرغبات الجنسيه😍",
"مبادل جاد  i82o2wboTmP1nAq   مبادل من الاردن عمري 21 الخاص مفتوح للقريب ممكن نتقابل 💝💝💝",
"فحل الرياض للجاد فقط زاير جده  Al61682679    ‏‏‏ابحث عن زواج مسيار جاااااد الي جاده تكلمني خاص وبعطيها رقمي ونتواصل",
"سكس سعودي  sex_sudia المملكة العربية السعودية  صور بنات , رمزيات بنات , خلفيات بنت , صور بنت للواتس اب , رمزيات واتس اب بنات , بنات دلع للواتس اب , بنات جميلات , صور بنات",
"أروى البلوشي 🦋 Arawi_92  مسقط و في القلب الكويت  - خريجة جامعة الكويت- الاستشعار عن بعد “Remote Sensing “❤️ أحب الحياة.. الحب.. الابتسامة.. الجبال .. البحر .. الهدوء. و RS|| حسابي الثاني: @Space_N_RS",
"خالد راشد الفارسي  alkhalid86  عُمان (جنة الدنيا)  عماني هائم في بحور التاريخ والسياسة<LF>عاشق لهذا الوطن 🇴🇲<LF>سلمٌ لمن سالمه ،حربٌ لمن حاربه<LF><LF>أتشرف بمتابعتكم لي",
"عبدالرحمن العزام AlazzamAb Riyadh, Kingdom of Saudi Arabia لاعب المنتخب السعودي لتنس الارضي",
"محتار  lnzi1   أنا السّعودي رايتي رمز الإسلام أنا العرب واصل العروبة بلادي🇸🇦",
"بغدادية الهوى 👑  ragadfea  Iraq  ‏‏‏ولائي لديني واحب بلدي العراق العظيم وافدي السعودية بروحي",
"ساخر اردني joordn2017  المملكة الأردنية الهاشمية ‏اردني الجنسيه عاطل عن العمل متفرغ لتويتر غير مهتم للمتابعه مغرد ساخر وغير مسؤول عن تغريداتي وغير مسؤول عن احد وغير مسؤول عن تصرفات الفنان عبدالله بالخير 😂😂",
"Mohamed Mahmoud  Moaboelwafa القاهرة, مصر  انا شاب مصرى طموح أدرس فى كلية للهندسه <LF>اتمنى التوفيق لى ولكل شباب العرب❤😊",
"حسان سورية tJ5fwIvrsHzEtdJ طبرجل, المملكة العربية السعودي  الأخبار الدين المملكة العربية السعودية كرة القدم السعودية كرة قدم أوروبية و عالمية",
"🇶🇦 Qatarbinhamad Doha, Qatar عاشت قطر في ظل قايدها تميم",
"توصيل  مدينة الرياض  tawsel711 الرياض  توصيل مشاوير وتوصيل طلبات 🚖 ملتزم بالمواعيد كما يوجد لدينا محل ورود وهدايا💐🎁🎈 تنسيق وتوصيل /////. تواصل 0551840258",
]

var wordCloud = "";
var hashCloud = "";
var filename  = "output.txt";
var text = "";


// updates map with dialectal probabilities
function updateMap(newData){

  console.log("updating map");
  /* Data points defined as a mixture of WeightedLocation and LatLng objects */
  pointArray = new google.maps.MVCArray(newData);
  if (heatmap){
    heatmap.setMap(null);
  }
  heatmap = new google.maps.visualization.HeatmapLayer({
      data: pointArray

  });

  heatmap.setOptions({radius:30})

  console.log(pointArray)
  heatmap.setMap(map);
}

var heatMapData = [];
var map, heatmap;
var pointArray;
var pieChart = "";
var lineChart = "";
function initiateMap(){


  heatMapData = [];

  map = new google.maps.Map(document.getElementById('map'),
            {
                zoom: 4,
                center: { lat: 25.28, lng:  51.53},
                mapTypeId: 'hybrid'
            });
  updateMap(heatMapData);
}


/** creates pie chart using chartjs **/
function createPie (id, labels, title){
  var pie = new Chart(document.getElementById(id), {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        label: title,
        backgroundColor: ["#D8401F", "#1F70D8"],
        data: [0,0]
      }]
    },
    options: {
       tooltips: {
    callbacks: {
      // percentage label
      label: function(tooltipItem, data) {
        var dataset = data.datasets[tooltipItem.datasetIndex];
        var meta = dataset._meta[Object.keys(dataset._meta)[0]];
        var total = meta.total;
        var currentValue = dataset.data[tooltipItem.index];
        var percentage = parseFloat((currentValue/total*100).toFixed(1));
        return currentValue + ' (' + percentage + '%)';
      },
      title: function(tooltipItem, data) {
        return data.labels[tooltipItem[0].index];
      }
    }
  },
      title: {
        display: true,
        text: title
      }
    }
  });
  return pie;
}

function download() {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
  // $(".file-processing").html("File processed and downloaded");

}

// Start file download.


function upload(){

  console.log($("#offensive").hasClass("active"));
  console.log($("#advertisement").hasClass("active"));
  console.log($("#hate-speech").hasClass("active"));
  console.log($("#sentiment").hasClass("active"));
  task = "";
  var file = "";
  if ($("#offensive").hasClass("active")){
    task = "offensive";
    file = $(".fileupload")[0].files[0];

  } else if ($("#advertisement").hasClass("active")){
    task = "advertisement";
    file = $(".fileupload")[1].files[0];

  } else if ($("#hate-speech").hasClass("active")){
    task = "hate-speech";
    file = $(".fileupload")[2].files[0];

  } else if ($("#sentiment").hasClass("active")){
    task = "sentiment";
    file = $(".fileupload")[3].files[0];

  } else if ($("#porno").hasClass("active")){
    task = "porno";
    file = $(".fileupload")[4].files[0];
  } else if ($("#dialect").hasClass("active")){
    task = "dialect";
    file = $(".fileupload")[5].files[0];
  }

  var data=new FormData();
          if (typeof file == "undefined"){
            alert ("Please choose file.");
            return;
          }
          data.append('file',file);
          data.append('task',task);
          // $("#txtTest").val("Classifier training in progress. Please wait.....");
          console.log("OI OI OI ");
          $(".file-processing").show();
          $.ajax({
              url:"/upload",
              type:'POST',
              data:data,
              cache:false,
              processData:false,
              contentType:false,
              error:function(response){
                  // alert ("Upload error");
                  console.log(response);
              },
              success:function(data){
                console.log("hio");
                console.log(data);

                $(".download-file").show();
                text = data;
                $(".file-processing").hide();

                  // console.log(JSON.parse(data));
                  // $("#txtTest").val("Classifier training complete. Your classifier will be used for violence detection.");
              }
          })
}

/* initiating function. hides some elements and initiates charts */
$(document).ready(function(){

  initiateMap();
    // initiates all clouds for offensive lang detection  
  $("#word-cloud-off-blue").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["8BCFFB", "0785D6"], });
  $("#word-cloud-off-red").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["C20202", "F38B81"], });
  $("#hash-cloud-off-blue").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["8BCFFB", "0785D6"], });
  $("#hash-cloud-off-red").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["C20202", "F38B81"], });

  $("#word-cloud-ad-blue").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["8BCFFB", "0785D6"], });
  $("#word-cloud-ad-red").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["C20202", "F38B81"], });
  $("#hash-cloud-ad-blue").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["8BCFFB", "0785D6"], });
  $("#hash-cloud-ad-red").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["C20202", "F38B81"], });

  $("#word-cloud-hate-blue").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["8BCFFB", "0785D6"], });
  $("#word-cloud-hate-red").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["C20202", "F38B81"], });
  $("#hash-cloud-hate-blue").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["8BCFFB", "0785D6"], });
  $("#hash-cloud-hate-red").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["C20202", "F38B81"], });

  $("#word-cloud-sent-blue").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["8BCFFB", "0785D6"], });
  $("#word-cloud-sent-red").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["C20202", "F38B81"], });
  $("#hash-cloud-sent-blue").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["8BCFFB", "0785D6"], });
  $("#hash-cloud-sent-red").jQCloud([], {  width:800, height:300, autoResize: true, colors : ["C20202", "F38B81"], });

  // hide all tables, info about tables etc
  $('.tables').hide();
  $(".infos").hide();
  $(".processing").hide();
  $(".top-blue").hide();
  $(".top-red").hide();
  $(".download-file").hide();
  $(".file-processing").hide();
  $(".cloud").hide();


  // initiates pie chart for offensive lang detection
  pieChart =  createPie("pie-chart", ["Offensive", "Not Offensive"], "Offensiveness distribution");

  // initiates pie chart for advertisement detection
  pieChart2 =  createPie("pie-chart2", ["Advertisement", "Not Advertisement"], "Advertisement distribution");

  // initiates pie chart for hate speech detection
  pieChart3 =  createPie("pie-chart3", ["Hate speech", "Not Hate speech"], "Hate speech distribution");

  // initiates pie chart for sentiment detection
  pieChart4 =  createPie("pie-chart4", [ "Negative", "Positive"], "Sentiment distribution");

  // hides all the initiated charts
  $(".pies").hide();
});


/* clears all tables and hides related information */
function clear_table(){
  $(".pies").hide();
  $(".tables").hide();
  $(".infos").hide();
  $(".top-blue").hide();
  $(".top-red").hide();
  $("table tbody").html('');
  $(".jqcloud").hide();
  $(".download-file").hide();
  $(".cloud").hide();

  text = "";
}

/**
Gets input from user, makes call to server and updates DOM based on level of 
offensivebess in text input by user as returned from server.
**/
function query_offense() {

  // gets input from user
  var classifier = $('#classifiername').find(":selected").text();
  var text = $('#search').val();

  if (text.length < 1){
    alert ("Empty text. Please enter text.");
    return
  }
  $('html, body').css("cursor", "wait");
  $(".processing").show();


  // makes request to server and updates dom
  $.post('/queryOffense', {
      text: text,
      model: classifier,
  }).done(function(response) {

      $('#indTable3').hide();
      $("#indTable").show();
      $('#indTable2').show();
      $("#word-cloud-off-red").show();
      $("#word-cloud-off-blue").show();
      $("#hash-cloud-off-red").show();
      $("#hash-cloud-off-blue").show();



      $("#indTable table tbody").html("");
      $("#indTable2 table tbody").html("");
      $("#indTable3 table tbody").html("");
      $(".top-red table tbody").html("");
      $(".top-blue table tbody").html("");

      var levels = response['levels'];
      var tweets = response['tweets'];
      var topBlue = response['blue'];
      var topRed = response['red'];

      var level = '';
      var text = '';
      var count1 = 0;
      var count2 = 0;

      // inserts into red table if offensive, blue table if not.
      for (var i = 0; i < levels.length; i++){
        level = levels[i];
        text = tweets[i];
        if (level == "NOT"){
          count1 += 1;
          var markup = "<tr><td> <font color = 'blue'>" + text + "</td><td> </font> <font color = 'blue'>  not offensive </font>  </td></tr>";
          $("#indTable2 table tbody").append(markup);
        } else {
          count2 += 1;
          var markup = "<tr><td> <font color = 'red'>" + text + "</td><td> </font> <font color = 'red'>  offensive </font> </td></tr>";
          $("#indTable table tbody").append(markup);
        }
      }

      // info about collected tweets
      $("#info1").html("Found " + count2.toString() + " offensive tweets out of " + (count1 + count2).toString() + " tweets.");
      $("#info2").html("Found " + count1.toString() + " non offensive tweets out of " + (count1 + count2).toString() +  " tweets.");

      $("#info1").show();
      $("#info2").show();

      // names of usesrs
      var redNames = response["red_names"];
      var blueNames = response["blue_names"];

      // UPDATES DOM WITH TOP 20 BLUE USERSS
      for (var i = 0; i < topBlue.length; i++){
         var markup = "<tr><td> <a target='_blank' href='https://www.twitter.com/" +topBlue[i][0] +"'>  <font color = 'blue'>" + topBlue[i][0] + "</a></td><td> </font> <font color = 'blue'> " + blueNames[i] + "</font>  </td><td> </font> <font color = 'blue'> " + topBlue[i][1] + "</font>  </td></tr>";
         $(".top-blue table tbody").append(markup);
      }


      // UPDATES DOM WITH TOP 20 RED USERSS
      for (var i = 0; i < topRed.length; i++){
         var markup = "<tr><td> <a target='_blank' href='https://www.twitter.com/" +topRed[i][0] +"'>  <font color = 'RED'>" + topRed[i][0] + "</a></td><td> </font> <font color = 'red'> " + redNames[i] + "</font>  </td><td> </font> <font color = 'red'> " + topRed[i][1] + "</font>  </td></tr>";
         $(".top-red table tbody").append(markup);
      }


      var wordCountsRed = response["word_counts_red"];
      var hashCountsRed = response["hash_counts_red"];
      var wordCountsBlue = response["word_counts_blue"];
      var hashCountsBlue = response["hash_counts_blue"];

      var freqWordsRed = []
      var freqHashRed = []
      var freqWordsBlue = []
      var freqHashBlue = []

      // word cloud and hash cloud for red
      for (var i = 0; i < wordCountsRed.length; i++){
        freqWordsRed.push({text : wordCountsRed[i][0], weight : wordCountsRed[i][1]});
      }

      for (var i = 0; i < hashCountsRed.length; i++){
        freqHashRed.push({text : hashCountsRed[i][0], weight : hashCountsRed[i][1]});
      }

      // word cloud and hash cloud for blue
      for (var i = 0; i < wordCountsBlue.length; i++){
        freqWordsBlue.push({text : wordCountsBlue[i][0], weight : wordCountsBlue[i][1]});
      }

      for (var i = 0; i < hashCountsBlue.length; i++){
        freqHashBlue.push({text : hashCountsBlue[i][0], weight : hashCountsBlue[i][1]});
      }


      $('#word-cloud-off-red').jQCloud('update', freqWordsRed);
      $('#hash-cloud-off-red').jQCloud('update', freqHashRed);
      $('#word-cloud-off-blue').jQCloud('update', freqWordsBlue);
      $('#hash-cloud-off-blue').jQCloud('update', freqHashBlue);
      $(".cloud").show();


      // display the tables containing top users
      $(".top-blue").show();
      $(".top-red").show(); 

      // update pie chart based on new info
      pieChart.data.datasets[0].data = [count2, count1]
      pieChart.update();
      $("#pie-chart").show();
      $(".processing").hide();
      $('html, body').css("cursor", "auto");

  }).fail(function() {
      // error 
      alert("Server error");
      $('html, body').css("cursor", "auto");
      $(".processing").hide();
  })
} 


/**
Gets input from user, makes call to server and updates DOM based on level of 
offensivebess in text input by user as returned from server.
**/
function detect_offense() {

  $("#pie-chart").hide();

  // gets input from user
  var classifier = $('#classifiername').find(":selected").text();
  var text = $('#search').val();

  if (text.length < 1){
    alert ("Empty text. Please enter text.");
    return
  }

  // makes request to server and updates dom
  $.post('/detectOffense', {
      text: text,
      model: classifier,
  }).done(function(response) {
      $("#info1").hide();
      $("#info2").hide();
      $("#indTable").hide();
      $('#indTable2').hide();
      $('#indTable3').show();
      $(".top-blue").hide();
      $(".top-red").hide(); 
      $(".jqcloud").hide();
      $(".cloud").hide();


      
      //  updates table based on label
      var level = response['level']
      if (level == "NOT"){
        var markup = "<tr><td> <font color = 'blue'>" + text + "</td><td> </font> <font color = 'blue'>  not offensive </font>  </td></tr>";
        $("#indTable3 table tbody").append(markup);
      } else {
        var markup = "<tr><td> <font color = 'red'>" + text + "</td><td> </font> <font color = 'red'>  offensive </font> </td></tr>";
        $("#indTable3 table tbody").append(markup);
      }

  }).fail(function() {
      alert("Server error");
  });
} 

/* query twitter to find tweets and then classify */
function query_ad(){
  // gets input from user
  var classifier = $('#classifiername2').find(":selected").text();
  var text = $('#search2').val();

  if (text.length < 1){
    alert ("Empty text. Please enter text.");
    return
  }

  $('html, body').css("cursor", "wait");
  $(".processing").show();


  // makes request to server and updates dom
  $.post('/queryAd', {
      text: text,
      model: classifier,
  }).done(function(response) {

      // hides and shows appropriate tables
      $('#indTable6').hide();
      $("#indTable4").show();
      $('#indTable5').show();

      // activates clouds
      $("#word-cloud-ad-red").show();
      $("#word-cloud-ad-blue").show();
      $("#hash-cloud-ad-red").show();
      $("#hash-cloud-ad-blue").show();

      // empty previous tables
      $("#indTable4 table tbody").html("");
      $("#indTable5 table tbody").html("");
      $("#indTable6 table tbody").html("");
      $(".top-red table tbody").html("");
      $(".top-blue table tbody").html("");
      
      var levels = response['levels'];
      var tweets = response['tweets'];
      var topBlue = response['blue'];
      var topRed = response['red'];

      var level = '';
      var text = '';
      var count1 = 0;
      var count2 = 0;

      // updates query tables based on predicted labels for each tweet in query
      for (var i = 0; i < levels.length; i++){
        level = levels[i];
        text = tweets[i];
        if (level == "__label__NOTADS"){
          count1 += 1;
          var markup = "<tr><td> <font color = 'blue'>" + text + "</td><td> </font> <font color = 'blue'>  not advertisement </font>  </td></tr>";
          $("#indTable5 table tbody").append(markup);
        } else {
          count2 += 1;
          var markup = "<tr><td> <font color = 'red'>" + text + "</td><td> </font> <font color = 'red'>  advertisement </font> </td></tr>";
          $("#indTable4 table tbody").append(markup);
        }
      }

      // displays information about query results
      $("#info3").html("Found " + count2.toString() + " advertisement tweets out of " + (count1 + count2).toString() + " tweets.");
      $("#info4").html("Found " + count1.toString() + " non advertisement tweets out of " + (count1 + count2).toString() +  " tweets.");
      $("#info3").show();
      $("#info4").show();


      // names of usesrs
      var redNames = response["red_names"];
      var blueNames = response["blue_names"];

      // UPDATES DOM WITH TOP 20 BLUE USERSS
      for (var i = 0; i < topBlue.length; i++){
         var markup = "<tr><td> <a target='_blank' href='https://www.twitter.com/" +topBlue[i][0] +"'>  <font color = 'blue'>" + topBlue[i][0] + "</a></td><td> </font> <font color = 'blue'> " + blueNames[i] + "</font>  </td><td> </font> <font color = 'blue'> " + topBlue[i][1] + "</font>  </td></tr>";
         $(".top-blue table tbody").append(markup);
      }


      // UPDATES DOM WITH TOP 20 RED USERSS
      for (var i = 0; i < topRed.length; i++){
         var markup = "<tr><td> <a target='_blank' href='https://www.twitter.com/" +topRed[i][0] +"'>  <font color = 'RED'>" + topRed[i][0] + "</a></td><td> </font> <font color = 'red'> " + redNames[i] + "</font>  </td><td> </font> <font color = 'red'> " + topRed[i][1] + "</font>  </td></tr>";
         $(".top-red table tbody").append(markup);
      }

      var wordCountsRed = response["word_counts_red"];
      var hashCountsRed = response["hash_counts_red"];
      var wordCountsBlue = response["word_counts_blue"];
      var hashCountsBlue = response["hash_counts_blue"];

      var freqWordsRed = []
      var freqHashRed = []
      var freqWordsBlue = []
      var freqHashBlue = []

      // word cloud and hash cloud for red
      for (var i = 0; i < wordCountsRed.length; i++){
        freqWordsRed.push({text : wordCountsRed[i][0], weight : wordCountsRed[i][1]});
      }

      for (var i = 0; i < hashCountsRed.length; i++){
        freqHashRed.push({text : hashCountsRed[i][0], weight : hashCountsRed[i][1]});
      }

      // word cloud and hash cloud for blue
      for (var i = 0; i < wordCountsBlue.length; i++){
        freqWordsBlue.push({text : wordCountsBlue[i][0], weight : wordCountsBlue[i][1]});
      }

      for (var i = 0; i < hashCountsBlue.length; i++){
        freqHashBlue.push({text : hashCountsBlue[i][0], weight : hashCountsBlue[i][1]});
      }


      $('#word-cloud-ad-red').jQCloud('update', freqWordsRed);
      $('#hash-cloud-ad-red').jQCloud('update', freqHashRed);
      $('#word-cloud-ad-blue').jQCloud('update', freqWordsBlue);
      $('#hash-cloud-ad-blue').jQCloud('update', freqHashBlue);

      // display the tables containing top users
      $(".top-blue").show();
      $(".top-red").show(); 
      $(".cloud").show();

      // updates pie chart of advertisment distribution
      pieChart2.data.datasets[0].data = [count2, count1]
      pieChart2.update();
      $("#pie-chart2").show();

      $('html, body').css("cursor", "auto");
      $(".processing").hide();

  }).fail(function() {
      alert("Server error");
      $('html, body').css("cursor", "auto");
      $(".processing").hide();

  }); 
}


/**
Gets input from user, makes call to server and updates DOM based on level of 
offensivebess in text input by user as returned from server.
**/
function detect_ad() {
  $("#pie-chart2").hide();

  // gets input from user
  var classifier = $('#classifiername2').find(":selected").text();
  var text = $('#search2').val();

  if (text.length < 1){
    alert ("Empty text. Please enter text.");
    return
  }

  // makes request to server and updates dom
  $.post('/detectAd', {
      text: text,
      model: classifier,
  }).done(function(response) {

      // hide query tables
      $("#info3").hide();
      $("#info4").hide();
      $("#indTable4").hide();
      $('#indTable5').hide();
      $('#indTable6').show();
      $(".top-blue").hide();
      $(".top-red").hide();
      $(".jqcloud").hide();
      $(".cloud").hide();

 


      // $("#word-cloud-ad").jQCloud('destroy');
      // $("#hash-cloud-ad").jQCloud('destroy');
      // $(".jqcloud").hide();

      // updates table based on predicted label
      var level = response['level']
      if (level == "__label__NOTADS"){
        var markup = "<tr><td> <font color = 'blue'>" + text + "</td><td> </font> <font color = 'blue'>  not advertisement </font>  </td></tr>";
        $("#indTable6 table tbody").append(markup);
      } else {
        var markup = "<tr><td> <font color = 'red'>" + text + "</td><td> </font> <font color = 'red'>  advertisement </font> </td></tr>";
        $("#indTable6 table tbody").append(markup);
      }

  }).fail(function() {
      alert("Server error");
  });
  
} 

/* query twitter to find tweets and then classify */
function query_hate(){
  // gets input from user
  var classifier = $('#classifiername3').find(":selected").text();
  var text = $('#search3').val();

  if (text.length < 1){
    alert ("Empty text. Please enter text.");
    return
  }

  $('html, body').css("cursor", "wait");
  $(".processing").show();


  // makes request to server and updates dom
  $.post('/queryHate', {
      text: text,
      model: classifier,
  }).done(function(response) {

      $('#indTable9').hide();
      $("#indTable7").show();
      $('#indTable8').show();
      $("#word-cloud-hate-red").show();
      $("#word-cloud-hate-blue").show();
      $("#hash-cloud-hate-red").show();
      $("#hash-cloud-hate-blue").show();


      $("#indTable7 table tbody").html("");
      $("#indTable8 table tbody").html("");
      $("#indTable9 table tbody").html("");
      $(".top-red table tbody").html("");
      $(".top-blue table tbody").html("");

      var levels = response['levels'];
      var tweets = response['tweets'];
      var topBlue = response['blue'];
      var topRed = response['red'];

      var level = '';
      var text = '';
      var count1 = 0;
      var count2 = 0;
      
      // updates tables based on HS or NOT-HS
      for (var i = 0; i < levels.length; i++){
        level = levels[i];
        text = tweets[i];
        if (level == "NOT_HS"){
          count1 += 1;
          var markup = "<tr><td> <font color = 'blue'>" + text + "</td><td> </font> <font color = 'blue'>  not hate speech </font>  </td></tr>";
          $("#indTable8 table tbody").append(markup);
        } else {
          count2 += 1;
          var markup = "<tr><td> <font color = 'red'>" + text + "</td><td> </font> <font color = 'red'>  hate speech </font> </td></tr>";
          $("#indTable7 table tbody").append(markup);
        }
      }

      // displays info about tweets found
      $("#info5").html("Found " + count2.toString() + " hate speech tweets out of " + (count1 + count2).toString() + " tweets.");
      $("#info6").html("Found " + count1.toString() + " not hate speech tweets out of " + (count1 + count2).toString() +  " tweets.");
      $("#info5").show();
      $("#info6").show();


      // names of usesrs
      var redNames = response["red_names"];
      var blueNames = response["blue_names"];

      // UPDATES DOM WITH TOP 20 BLUE USERSS
      for (var i = 0; i < topBlue.length; i++){
         var markup = "<tr><td> <a target='_blank' href='https://www.twitter.com/" +topBlue[i][0] +"'>  <font color = 'blue'>" + topBlue[i][0] + "</a></td><td> </font> <font color = 'blue'> " + blueNames[i] + "</font>  </td><td> </font> <font color = 'blue'> " + topBlue[i][1] + "</font>  </td></tr>";
         $(".top-blue table tbody").append(markup);
      }


      // UPDATES DOM WITH TOP 20 RED USERSS
      for (var i = 0; i < topRed.length; i++){
         var markup = "<tr><td> <a target='_blank' href='https://www.twitter.com/" +topRed[i][0] +"'>  <font color = 'RED'>" + topRed[i][0] + "</a></td><td> </font> <font color = 'red'> " + redNames[i] + "</font>  </td><td> </font> <font color = 'red'> " + topRed[i][1] + "</font>  </td></tr>";
         $(".top-red table tbody").append(markup);
      }


      var wordCountsRed = response["word_counts_red"];
      var hashCountsRed = response["hash_counts_red"];
      var wordCountsBlue = response["word_counts_blue"];
      var hashCountsBlue = response["hash_counts_blue"];

      var freqWordsRed = []
      var freqHashRed = []
      var freqWordsBlue = []
      var freqHashBlue = []

      // word cloud and hash cloud for red
      for (var i = 0; i < wordCountsRed.length; i++){
        freqWordsRed.push({text : wordCountsRed[i][0], weight : wordCountsRed[i][1]});
      }

      for (var i = 0; i < hashCountsRed.length; i++){
        freqHashRed.push({text : hashCountsRed[i][0], weight : hashCountsRed[i][1]});
      }

      // word cloud and hash cloud for blue
      for (var i = 0; i < wordCountsBlue.length; i++){
        freqWordsBlue.push({text : wordCountsBlue[i][0], weight : wordCountsBlue[i][1]});
      }

      for (var i = 0; i < hashCountsBlue.length; i++){
        freqHashBlue.push({text : hashCountsBlue[i][0], weight : hashCountsBlue[i][1]});
      }


      $('#word-cloud-hate-red').jQCloud('update', freqWordsRed);
      $('#hash-cloud-hate-red').jQCloud('update', freqHashRed);
      $('#word-cloud-hate-blue').jQCloud('update', freqWordsBlue);
      $('#hash-cloud-hate-blue').jQCloud('update', freqHashBlue);

      // display the tables containing top users
      $(".top-blue").show();
      $(".top-red").show();
      $(".cloud").show();
 

      // updates piechart
      pieChart3.data.datasets[0].data = [count2, count1]
      pieChart3.update();
      $("#pie-chart3").show();

      $('html, body').css("cursor", "auto");
      $(".processing").hide();

  }).fail(function() {
      alert("Server error");
      $('html, body').css("cursor", "auto");
      $(".processing").hide();


  });
  
}


/**
Gets input from user, makes call to server and updates DOM based on 
hate-speech in text input by user as returned from server.
**/
function detect_hate() {
  $("#pie-chart3").hide();

  // gets input from user
  var classifier = $('#classifiername3').find(":selected").text();
  var text = $('#search3').val();

  if (text.length < 1){
    alert ("Empty text. Please enter text.");
    return
  }

  // makes request to server and updates dom
  $.post('/detectHate', {
      text: text,
      model: classifier,
  }).done(function(response) {
      // hide query tables
      $("#info5").hide();
      $("#info6").hide();
      $("#indTable7").hide();
      $('#indTable8').hide();
      $('#indTable9').show();
      $(".top-blue").hide();
      $(".top-red").hide(); 
      $(".jqcloud").hide();
      $(".cloud").hide();


      // $(".jqcloud").hide();

      // $("#word-cloud-hate").jQCloud('destroy');
      // $("#hash-cloud-hate").jQCloud('destroy');

      //  updates table based on predicted label
      var level = response['level']
      if (level == "NOT_HS"){
        var markup = "<tr><td> <font color = 'blue'>" + text + "</td><td> </font> <font color = 'blue'>  not hate speech </font>  </td></tr>";
        $("#indTable9 table tbody").append(markup);
      } else {
        var markup = "<tr><td> <font color = 'red'>" + text + "</td><td> </font> <font color = 'red'>  hate speech </font> </td></tr>";
        $("#indTable9 table tbody").append(markup);
      }

  }).fail(function() {
      alert("Server error");
  });
}

/* query twitter to find tweets and then classify */
function query_sentiment(){
  // gets input from user
  var classifier = $('#classifiername4').find(":selected").text();
  var text = $('#search4').val();

  if (text.length < 1){
    alert ("Empty text. Please enter text.");
    return
  }

  $('html, body').css("cursor", "wait");
  $(".processing").show();


  // makes request to server and updates dom
  $.post('/querySentiment', {
      text: text,
      model: classifier,
  }).done(function(response) {

      $('#indTable12').hide();
      $("#indTable11").show();
      $('#indTable10').show();

      $('#word-cloud-sent-red').show();
      $('#word-cloud-sent-blue').show();
      $('#hash-cloud-sent-red').show();
      $('#hash-cloud-sent-blue').show();
      // $("#word-cloud-sentiment").jQCloud('destroy');
      // $("#hash-cloud-sentiment").jQCloud('destroy');


      $("#indTable10 table tbody").html("");
      $("#indTable11 table tbody").html("");
      $("#indTable12 table tbody").html("");
      $(".top-red table tbody").html("");
      $(".top-blue table tbody").html("");

      var levels = response['levels'];
      var tweets = response['tweets'];
      var topBlue = response['blue'];
      var topRed = response['red'];

      var level = '';
      var text = '';
      var count1 = 0;
      var count2 = 0;
      
      // updates tables based on HS or NOT-HS
      for (var i = 0; i < levels.length; i++){
        level = levels[i];
        text = tweets[i];
        if (level == "Positive"){
          count1 += 1;
          var markup = "<tr><td> <font color = 'blue'>" + text + "</td><td> </font> <font color = 'blue'>  positive </font>  </td></tr>";
          $("#indTable11 table tbody").append(markup);
        } else if (level == "Negative") {
          count2 += 1;
          var markup = "<tr><td> <font color = 'red'>" + text + "</td><td> </font> <font color = 'red'>  negative </font> </td></tr>";
          $("#indTable10 table tbody").append(markup);
        }
      }

      // displays info about tweets found
      $("#info7").html("Found " + count2.toString() + " negative tweets out of " + (count1 + count2).toString() + " tweets.");
      $("#info8").html("Found " + count1.toString() + " positive speech tweets out of " + (count1 + count2).toString() +  " tweets.");
      $("#info7").show();
      $("#info8").show();


      // names of usesrs
      var redNames = response["red_names"];
      var blueNames = response["blue_names"];

      // UPDATES DOM WITH TOP 20 BLUE USERSS
      for (var i = 0; i < topBlue.length; i++){
         var markup = "<tr><td> <a target='_blank' href='https://www.twitter.com/" +topBlue[i][0] +"'>  <font color = 'blue'>" + topBlue[i][0] + "</a></td><td> </font> <font color = 'blue'> " + blueNames[i] + "</font>  </td><td> </font> <font color = 'blue'> " + topBlue[i][1] + "</font>  </td></tr>";
         $(".top-blue table tbody").append(markup);
      }


      // UPDATES DOM WITH TOP 20 RED USERSS
      for (var i = 0; i < topRed.length; i++){
         var markup = "<tr><td> <a target='_blank' href='https://www.twitter.com/" +topRed[i][0] +"'>  <font color = 'RED'>" + topRed[i][0] + "</a></td><td> </font> <font color = 'red'> " + redNames[i] + "</font>  </td><td> </font> <font color = 'red'> " + topRed[i][1] + "</font>  </td></tr>";
         $(".top-red table tbody").append(markup);
      }

      var wordCountsRed = response["word_counts_red"];
      var hashCountsRed = response["hash_counts_red"];
      var wordCountsBlue = response["word_counts_blue"];
      var hashCountsBlue = response["hash_counts_blue"];

      var freqWordsRed = []
      var freqHashRed = []
      var freqWordsBlue = []
      var freqHashBlue = []

      // word cloud and hash cloud for red
      for (var i = 0; i < wordCountsRed.length; i++){
        freqWordsRed.push({text : wordCountsRed[i][0], weight : wordCountsRed[i][1]});
      }

      for (var i = 0; i < hashCountsRed.length; i++){
        freqHashRed.push({text : hashCountsRed[i][0], weight : hashCountsRed[i][1]});
      }

      // word cloud and hash cloud for blue
      for (var i = 0; i < wordCountsBlue.length; i++){
        freqWordsBlue.push({text : wordCountsBlue[i][0], weight : wordCountsBlue[i][1]});
      }

      for (var i = 0; i < hashCountsBlue.length; i++){
        freqHashBlue.push({text : hashCountsBlue[i][0], weight : hashCountsBlue[i][1]});
      }


      $('#word-cloud-sent-red').jQCloud('update', freqWordsRed);
      $('#hash-cloud-sent-red').jQCloud('update', freqHashRed);
      $('#word-cloud-sent-blue').jQCloud('update', freqWordsBlue);
      $('#hash-cloud-sent-blue').jQCloud('update', freqHashBlue);
      // display the tables containing top users
      $(".top-blue").show();
      $(".top-red").show();
      $(".cloud").show();
 

      // updates piechart
      pieChart4.data.datasets[0].data = [count2, count1]
      pieChart4.update();
      $("#pie-chart4").show();

      $('html, body').css("cursor", "auto");
      $(".processing").hide();

  }).fail(function() {
      alert("Server error");
      $('html, body').css("cursor", "auto");
      $(".processing").hide();


  });
  
}


/**
Gets input from user, makes call to server and updates DOM based on 
hate-speech in text input by user as returned from server.
**/
function detect_sentiment() {
  $("#pie-chart4").hide();

  // gets input from user
  var classifier = $('#classifiername4').find(":selected").text();
  var text = $('#search4').val();

  if (text.length < 1){
    alert ("Empty text. Please enter text.");
    return
  }

  // makes request to server and updates dom
  $.post('/detectSentiment', {
      text: text,
      model: classifier,
  }).done(function(response) {
      // hide query tables
      $("#info7").hide();
      $("#info8").hide();
      $("#indTable10").hide();
      $('#indTable11').hide();
      $('#indTable12').show();
      $(".top-blue").hide();
      $(".top-red").hide(); 
      $(".jqcloud").hide();
      $(".cloud").hide();


      // $("#word-cloud-hate").jQCloud('destroy');
      // $("#hash-cloud-hate").jQCloud('destroy');
      // $(".jqcloud").hide();

      //  updates table based on predicted label
      var level = response['level']
      if (level == "Positive"){
        var markup = "<tr><td> <font color = 'blue'>" + text + "</td><td> </font> <font color = 'blue'>  positive </font>  </td></tr>";
        $("#indTable12 table tbody").append(markup);
      } else if (level == "Negative") {
        var markup = "<tr><td> <font color = 'red'>" + text + "</td><td> </font> <font color = 'red'>  negative </font> </td></tr>";
        $("#indTable12 table tbody").append(markup);
      } else if (level == "Mixed") {
        var markup = "<tr><td> <font color = 'orange'>" + text + "</td><td> </font> <font color = 'orange'>  mixed </font> </td></tr>";
        $("#indTable12 table tbody").append(markup);
      } else {
        var markup = "<tr><td> <font color = 'black'>" + text + "</td><td> </font> <font color = 'black'>  neutral </font> </td></tr>";
        $("#indTable12 table tbody").append(markup);
      }

  }).fail(function() {
      alert("Server error");
  });
}


function detect_porno() {
  // $("#pie-chart4").hide();

  // gets input from user
  var classifier = $('#classifiername5').find(":selected").text();
  var text = $('#search5').val();

  if (text.length < 1){
    alert ("Empty text. Please enter text.");
    return
  }

  // makes request to server and updates dom
  $.post('/detectPorno', {
      text: text,
      model: classifier,
  }).done(function(response) {
      // hide query tables
      // $("#info7").hide();
      // $("#info8").hide();
      // $("#indTable10").hide();
      // $('#indTable11').hide();
      $('#indTable15').show();
      // $(".top-blue").hide();
      // $(".top-red").hide(); 
      // $(".jqcloud").hide();
      // $(".cloud").hide();

      console.log("miss me?");
      console.log(response);
      // $("#word-cloud-hate").jQCloud('destroy');
      // $("#hash-cloud-hate").jQCloud('destroy');
      // $(".jqcloud").hide();

      //  updates table based on predicted label
      var level = response['level']
      if (level == "NOT_PORNO"){
        var markup = "<tr><td> <font color = 'blue'>" + text + "</td><td> </font> <font color = 'blue'>  Non Porno </font>  </td></tr>";
        $("#indTable15 table tbody").append(markup);
      } else {
        var markup = "<tr><td> <font color = 'red'>" + text + "</td><td> </font> <font color = 'red'>  Porno </font> </td></tr>";
        $("#indTable15 table tbody").append(markup);
      } 

  }).fail(function() {
      alert("Server error");
  });
}

function detect_dialect() {
  // $("#pie-chart4").hide();

  // gets input from user
  var classifier = $('#classifiername6').find(":selected").text();
  var text = $('#search6').val();

  if (text.length < 1){
    alert ("Empty text. Please enter text.");
    return
  }

  // makes request to server and updates dom
  $.post('/detectDialect', {
      text: text,
      model: classifier,
  }).done(function(response) {

      console.log("miss me?");
      console.log(response);
      var countries = response["countries"];
      var percentages = response["percentages"];
      var longitudes = response["longitudes"];
      var latitudes = response["latitudes"];
      var numItems = countries.length;
      console.log(countries);
      console.log(percentages);
      console.log(longitudes);
      console.log(latitudes);

      content = "<strong> Dialect Probabilities: </strong> ";
      for (var i = 0; i < numItems; i ++){
        content += "<strong>" + countries[i] + ": </strong>"
        if (i < numItems-1){
          content += percentages[i].toString() + "%, &nbsp"
        } else {
          content += percentages[i].toString() + "% &nbsp"

        }
      }
      $("#output").html(content);

      heatMapData = [];
      for (var i = 0; i < numItems; i++){
        heatMapData.push({location: new google.maps.LatLng( latitudes[i], longitudes[i]), weight: percentages[i]})
      }
      updateMap(heatMapData);

  }).fail(function() {
      alert("Server error");
  });
}


// gets random input for offense detection
function randomizeOff() {
  if (document.getElementById('searchType').checked){
    console.log ("GOTCHU");
    var rand = queries[Math.floor(Math.random() * queries.length)];
    document.getElementById("search").value = rand;
  } else {
    console.log("I WEEP");
    var rand = offensiveSamples[Math.floor(Math.random() * offensiveSamples.length)];
    document.getElementById("search").value = rand;
  }
}

// gets random input for ad detection
function randomizeAd() {
  if (document.getElementById('searchType2').checked){
    console.log ("GOTCHU");
    var rand = queries[Math.floor(Math.random() * queries.length)];
    document.getElementById("search2").value = rand;
  } else {
    console.log("I WEEP");
    var rand = adSamples[Math.floor(Math.random() * adSamples.length)];
    document.getElementById("search2").value = rand;
  }
}

// gets random input for hate-speech detection
function randomizeHate() {
  if (document.getElementById('searchType3').checked){
    console.log ("GOTCHU");
    var rand = queries[Math.floor(Math.random() * queries.length)];
    document.getElementById("search3").value = rand;
  } else {
    console.log("I WEEP");
    var rand = hateSamples[Math.floor(Math.random() * hateSamples.length)];
    document.getElementById("search3").value = rand;
  }
}

// gets random input for hate-speech detection
function randomizeSentiment() {
  if (document.getElementById('searchType4').checked){
    console.log ("GOTCHU");
    var rand = queries[Math.floor(Math.random() * queries.length)];
    document.getElementById("search4").value = rand;
  } else {
    console.log("I WEEP");
    var rand = sentimentSamples[Math.floor(Math.random() * sentimentSamples.length)];
    document.getElementById("search4").value = rand;
  }
}

// gets random input for hate-speech detection
function randomizePorno() {
  // if (document.getElementById('searchType5').checked){
  //   console.log ("GOTCHU");
  //   var rand = queries[Math.floor(Math.random() * queries.length)];
  //   document.getElementById("search4").value = rand;
  // } else {
    console.log("I WEEP");
    var rand = pornoSamples[Math.floor(Math.random() * pornoSamples.length)];
    document.getElementById("search5").value = rand;
  // }
}

function randomizeDialect() {
  // if (document.getElementById('searchType5').checked){
  //   console.log ("GOTCHU");
  //   var rand = queries[Math.floor(Math.random() * queries.length)];
  //   document.getElementById("search4").value = rand;
  // } else {
    console.log("I WEEP");
    var rand = dialectSamples[Math.floor(Math.random() * dialectSamples.length)];
    document.getElementById("search6").value = rand;
  // }
}

// checks if user wants to analyze text or make a query. redirects request accordingly
function check_offense(){
  if (document.getElementById('searchType').checked){
    query_offense();
  } else {
    detect_offense();
  }
}

// checks if user wants to analyze text or make a query. redirects request accordingly
function check_ad(){
  if (document.getElementById('searchType2').checked){
    query_ad();
  } else {
    detect_ad();
  }
}

// checks if user wants to analyze text or make a query. redirects request accordingly
function check_hate(){
  if (document.getElementById('searchType3').checked){
    query_hate();
  } else {
    detect_hate();
  }
}

// checks if user wants to analyze text or make a query. redirects request accordingly
function check_sentiment(){
  if (document.getElementById('searchType4').checked){
    query_sentiment();
  } else {
    detect_sentiment();
  }
}
