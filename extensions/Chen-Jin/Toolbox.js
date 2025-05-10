const cj_icon = 'data:image/png;base64,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';
const cj_icon_online = 'https://m.ccw.site/avatar/678cc9343778fc282d6252c5/4f8f1c67-6a2d-4670-bc70-a774bfe43b93.png';
const bg_image = 'https://m.ccw.site/works-covers/65554eb4-3a2d-4ed2-b503-2093c676be74.png';

const BlockType = Scratch.BlockType;
const ArgumentType = Scratch.ArgumentType;
const Cast = Scratch.Cast;

class cjToolbox {
    constructor(runtime) {
        this.runtime = runtime;
        this._formatMessage = runtime.getFormatMessage({
        "en":{
          "Doc":"Document",
          "Chen-Jin's Toolbox":"Chen-Jin's Toolbox",
        },
        "zh-cn": {
          "Notifications and Popups": "通知与弹窗",
          "Network and Page": "网络和页面",
          "Mobile Features": "移动端功能",
          "Battery": "电池状态",
          "Text and Math": "文本与数学",
          "Hidden Blocks": "隐藏积木",

          "Request system notification permission": "请求系统通知权限",
          "Has system notification permission?": "有系统通知权限?",
          "Show system notification title [TITLE] message [MESSAGE] icon [ICON]": "弹出系统通知 标题[TITLE]内容[MESSAGE]图标[ICON]",
          "Show alert [TEXT] and wait": "弹出警告框 内容[TEXT] 并等待",
          "Show confirmation [TEXT] and wait": "弹出确认框 问题[TEXT] 并等待",
          "Show prompt question [TEXT] default [DEFAULT] and wait": "弹出提示框 问题[TEXT] 默认回答[DEFAULT] 并等待",

          "Ask to open https://[URL]": "询问是否打开 https://[URL]",
          "Request API from https://[URL]": "请求 https://[URL] 的API数据",
          "Reload page (think twice)": "刷新页面 (三思而后行)",
          "Change page title to [TITLE]": "修改页面标题为 [TITLE]",
          "Is page visible?": "未离开当前页面？",
          "Current page URL": "当前网页地址",
          "Using [EDITOR] editor?": "正在使用[EDITOR]编辑作品?",
          "Dark mode enabled?": "深色模式已启用?",
          "[ACTION] fullscreen": "[ACTION]全屏模式",
          "Vibrate with pattern [PATTERN]": "以 [PATTERN]模式振动",
          "Stop vibration": "停止振动",

          "Battery level": "电池电量",
          "Is charging?": "正在充电?",

          "Comment or execute [TIP]": "注释或执行 [TIP]",
          "Return [STR] with comment [TIP]": "返回[STR]并注释[TIP]",
          "Return [BOOL] with comment [TIP]": "返回[BOOL]并注释[TIP]",
          "Always true with comment [TIP]": "总是真值 并注释[TIP]",
          "Always false with comment [TIP]": "总是假值 并注释[TIP]",
          "Convert string [STR] to boolean": "转换文本[STR]为布尔值",
          "π (pi)": "π (圆周率)",
          "Return [TEXT]": "返回[TEXT]",
          "New line character": "换行符",
          "Line 1 [L1] Line 2 [L2]": "第一行[L1]第二行[L2]",
          "If [BOOL] then [TRUE] else [FALSE]": "如果[BOOL]那么返回[TRUE]否则返回[FALSE]",
          "[A] to the power of [B]": "[A]的[B]次方",

          "trad. editor": "传统编辑器",
          "Enter or exit": "进入或退出",
          "Exit": "退出",

          "Chen-Jin's Toolbox":"Chen-Jin 的工具箱",
          "Can't show notificiton \ntitle:":"不能在移动端弹出通知！\n通知标题：",
          "\nbody:":"\n通知内容：",
          "This is a notificiton":"这是一个通知",
          "This is a warning":"这是一个警告",
          "This is a question":"这是一个问题",
          "This is default answer":"这是默认回答",
          "Hello":"你好",
          "Chen-Jin's Page":"Chen-Jin 的页面",
          "English":"简体中文",
          "Scratch language":"Scratch 语言",
          "More Blocks":"更多积木",
          "Doc":"文档",
          "[A] === [B]":"[A] = [B] （区分大小写）",
        },
        "es": {
          "Notifications and Popups": "Notificaciones y ventanas emergentes",
          "Network and Page": "Red y página",
          "Mobile Features": "Funciones móviles",
          "Battery": "Batería",
          "Tweening": "Animación interpolada",
          "Text and Math": "Texto y matemáticas",
          "Hidden Blocks": "Bloques ocultos",

          "Request system notification permission": "Solicitar permiso para notificaciones",
          "Has system notification permission?": "¿Tiene permiso para notificaciones?",
          "Show system notification title [TITLE] message [MESSAGE] icon [ICON]": "Mostrar notificación: título [TITLE] mensaje [MESSAGE] icono [ICON]",
          "Show alert [TEXT] and wait": "Mostrar alerta [TEXT] y esperar",
          "Show confirmation [TEXT] and wait": "Mostrar confirmación [TEXT] y esperar",
          "Show prompt question [TEXT] default [DEFAULT] and wait": "Mostrar pregunta [TEXT] respuesta por defecto [DEFAULT] y esperar",

          "Ask to open https://[URL]": "Preguntar para abrir https://[URL]",
          "Request API from https://[URL]": "Solicitar API de https://[URL]",
          "Reload page (think twice)": "Recargar página (piénselo dos veces)",
          "Change page title to [TITLE]": "Cambiar título de página a [TITLE]",
          "Is page visible?": "¿La página es visible?",
          "Current page URL": "URL actual de la página",
          "Using [EDITOR] editor?": "¿Usando editor [EDITOR]?",
          "Dark mode enabled?": "¿Modo oscuro activado?",
          "[ACTION] fullscreen": "[ACTION] pantalla completa",

          "Vibrate with pattern [PATTERN]": "Vibrar con patrón [PATTERN]",
          "Stop vibration": "Detener vibración",

          "Battery level": "Nivel de batería",
          "Is charging?": "¿Se está cargando?",

          "[MODE] ease [DIRECTION] [START] to [END] by [AMOUNT]%": "[MODE] suavizado [DIRECTION] de [START] a [END] en [AMOUNT]%",
          "tween [PROPERTY] to [VALUE] over [SEC] seconds using [MODE] ease [DIRECTION]": "Interpolar [PROPERTY] a [VALUE] en [SEC] segundos usando [MODE] [DIRECTION]",
          "tween to x: [X] y: [Y] over [SEC] seconds using [MODE] ease [DIRECTION]": "Mover a x:[X] y:[Y] en [SEC] segundos usando [MODE] [DIRECTION]",
          "tween variable [VAR] to [VALUE] over [SEC] seconds using [MODE] ease [DIRECTION]": "Interpolar variable [VAR] a [VALUE] en [SEC] segundos usando [MODE] [DIRECTION]",
          "back": "rebote",
          "bounce": "saltar",
          "circ": "circular",
          "cubic": "cúbico",
          "elastic": "elástico",
          "expo": "exponencial",
          "in": "entrada",
          "in out": "entrada-salida",
          "linear": "lineal",
          "out": "salida",
          "quad": "cuadrático",
          "quart": "cuártico",
          "quint": "quíntico",
          "sine": "seno",

          "Comment or execute [TIP]": "Comentar o ejecutar [TIP]",
          "Return [STR] with comment [TIP]": "Devolver [STR] con comentario [TIP]",
          "Return [BOOL] with comment [TIP]": "Devolver [BOOL] con comentario [TIP]",
          "Always true with comment [TIP]": "Siempre verdadero con comentario [TIP]",
          "Always false with comment [TIP]": "Siempre falso con comentario [TIP]",
          "Convert string [STR] to boolean": "Convertir texto [STR] a booleano",
          "π (pi)": "π (pi)",
          "Return [TEXT]": "Devolver [TEXT]",
          "New line character": "Carácter de nueva línea",
          "Line 1 [L1] Line 2 [L2]": "Línea 1 [L1] Línea 2 [L2]",
          "If [BOOL] then [TRUE] else [FALSE]": "Si [BOOL] entonces [TRUE] sino [FALSE]",
          "[A] to the power of [B]": "[A] elevado a [B]",

          "trad. editor": "Editor tradicional",
          "Enter or exit": "Entrar o salir",
          "Exit": "Salir",

          "x position":"posición x",
          "y position":"posición y",
          "direction":"dirección",
          "size":"tamaño",
          "Chen-Jin's Toolbox":"Caja de herramientas de Chen-Jin",
          "Can't show notificiton \ntitle:":"No se puede mostrar notificación en móvil!\nTítulo:",
          "\nbody:":"\nCuerpo:",
          "This is a notificiton":"Esta es una notificación",
          "This is a warning":"Esta es una advertencia",
          "This is a question":"Esta es una pregunta",
          "This is default answer":"Esta es la respuesta por defecto",
          "Hello":"Hola",
          "Chen-Jin's Page":"Página de Chen-Jin",
          "English":"Español",
          "Scratch language":"Idioma de Scratch",
          "More Blocks":"Más bloques",
          "Doc":"Documentación",
          "[A] === [B]":"[A] = [B] (distingue mayúsculas)",
        },
        "ms": {
          "Notifications and Popups": "Pemberitahuan dan Popup",
          "Network and Page": "Rangkaian dan Halaman",
          "Mobile Features": "Ciri-ciri Mudah Alih",
          "Battery": "Bateri",
          "Tweening": "Animasi Tween",
          "Text and Math": "Teks dan Matematik",
          "Hidden Blocks": "Blok Tersembunyi",

          "Request system notification permission": "Minta kebenaran pemberitahuan sistem",
          "Has system notification permission?": "Ada kebenaran pemberitahuan sistem?",
          "Show system notification title [TITLE] message [MESSAGE] icon [ICON]": "Tunjukkan pemberitahuan sistem tajuk [TITLE] mesej [MESSAGE] ikon [ICON]",
          "Show alert [TEXT] and wait": "Tunjukkan amaran [TEXT] dan tunggu",
          "Show confirmation [TEXT] and wait": "Tunjukkan pengesahan [TEXT] dan tunggu",
          "Show prompt question [TEXT] default [DEFAULT] and wait": "Tunjukkan soalan prompt [TEXT] lalai [DEFAULT] dan tunggu",

          "Ask to open https://[URL]": "Minta untuk buka https://[URL]",
          "Request API from https://[URL]": "Minta API dari https://[URL]",
          "Reload page (think twice)": "Muat semula halaman (fikir dua kali)",
          "Change page title to [TITLE]": "Tukar tajuk halaman kepada [TITLE]",
          "Is page visible?": "Adakah halaman kelihatan?",
          "Current page URL": "URL halaman semasa",
          "Using [EDITOR] editor?": "Menggunakan editor [EDITOR]?",
          "Dark mode enabled?": "Mod gelap dihidupkan?",
          "[ACTION] fullscreen": "[ACTION] skrin penuh",

          "Vibrate with pattern [PATTERN]": "Bergetar dengan corak [PATTERN]",
          "Stop vibration": "Hentikan getaran",

          "Battery level": "Tahap bateri",
          "Is charging?": "Sedang dicas?",

          "[MODE] ease [DIRECTION] [START] to [END] by [AMOUNT]%": "[MODE] kelancaran [DIRECTION] dari [START] ke [END] sebanyak [AMOUNT]%",
          "tween [PROPERTY] to [VALUE] over [SEC] seconds using [MODE] ease [DIRECTION]": "Tween [PROPERTY] ke [VALUE] dalam [SEC] saat menggunakan [MODE] [DIRECTION]",
          "tween to x: [X] y: [Y] over [SEC] seconds using [MODE] ease [DIRECTION]": "Pindah ke x:[X] y:[Y] dalam [SEC] saat menggunakan [MODE] [DIRECTION]",
          "tween variable [VAR] to [VALUE] over [SEC] seconds using [MODE] ease [DIRECTION]": "Tween pembolehubah [VAR] ke [VALUE] dalam [SEC] saat menggunakan [MODE] [DIRECTION]",
          "back": "pantulan",
          "bounce": "melantun",
          "circ": "bulatan",
          "cubic": "kubik",
          "elastic": "kenyal",
          "expo": "eksponen",
          "in": "masuk",
          "in out": "masuk keluar",
          "linear": "linear",
          "out": "keluar",
          "quad": "kuadratik",
          "quart": "kuartik",
          "quint": "kuintik",
          "sine": "sinus",

          "Comment or execute [TIP]": "Komen atau laksanakan [TIP]",
          "Return [STR] with comment [TIP]": "Kembalikan [STR] dengan komen [TIP]",
          "Return [BOOL] with comment [TIP]": "Kembalikan [BOOL] dengan komen [TIP]",
          "Always true with comment [TIP]": "Sentiasa benar dengan komen [TIP]",
          "Always false with comment [TIP]": "Sentiasa palsu dengan komen [TIP]",
          "Convert string [STR] to boolean": "Tukar rentetan [STR] kepada boolean",
          "π (pi)": "π (pi)",
          "Return [TEXT]": "Kembalikan [TEXT]",
          "New line character": "Aksara baris baru",
          "Line 1 [L1] Line 2 [L2]": "Baris 1 [L1] Baris 2 [L2]",
          "If [BOOL] then [TRUE] else [FALSE]": "Jika [BOOL] maka [TRUE] lain [FALSE]",
          "[A] to the power of [B]": "[A] kuasa [B]",

          "trad. editor": "Editor tradisional",
          "Enter or exit": "Masuk atau keluar",
          "Exit": "Keluar",

          "x position":"kedudukan x",
          "y position":"kedudukan y",
          "direction":"arah",
          "size":"saiz",
          "Chen-Jin's Toolbox":"Kotak Alat Chen-Jin",
          "Can't show notificiton \ntitle:":"Tidak boleh tunjuk pemberitahuan di mudah alih!\nTajuk:",
          "\nbody:":"\nIsi:",
          "This is a notificiton":"Ini pemberitahuan",
          "This is a warning":"Ini amaran",
          "This is a question":"Ini soalan",
          "This is default answer":"Ini jawapan lalai",
          "Hello":"Helo",
          "Chen-Jin's Page":"Halaman Chen-Jin",
          "English":"Bahasa Melayu",
          "Scratch language":"Bahasa Scratch",
          "More Blocks":"Blok Tambahan",
          "Doc":"Dokumen",
          "[A] === [B]":"[A] = [B] (peka huruf)",
        },
        "ru": {
          "Notifications and Popups": "Уведомления и всплывающие окна",
          "Network and Page": "Сеть и страница",
          "Mobile Features": "Мобильные функции",
          "Battery": "Батарея",
          "Tweening": "Анимация Tween",
          "Text and Math": "Текст и математика",
          "Hidden Blocks": "Скрытые блоки",

          "Request system notification permission": "Запросить разрешение на уведомления",
          "Has system notification permission?": "Есть разрешение на уведомления?",
          "Show system notification title [TITLE] message [MESSAGE] icon [ICON]": "Показать уведомление: заголовок [TITLE] сообщение [MESSAGE] иконка [ICON]",
          "Show alert [TEXT] and wait": "Показать предупреждение [TEXT] и ждать",
          "Show confirmation [TEXT] and wait": "Показать подтверждение [TEXT] и ждать",
          "Show prompt question [TEXT] default [DEFAULT] and wait": "Показать вопрос [TEXT] по умолчанию [DEFAULT] и ждать",

          "Ask to open https://[URL]": "Спросить об открытии https://[URL]",
          "Request API from https://[URL]": "Запросить API с https://[URL]",
          "Reload page (think twice)": "Перезагрузить страницу (подумайте дважды)",
          "Change page title to [TITLE]": "Изменить заголовок страницы на [TITLE]",
          "Is page visible?": "Страница видима?",
          "Current page URL": "Текущий URL страницы",
          "Using [EDITOR] editor?": "Используется редактор [EDITOR]?",
          "Dark mode enabled?": "Тёмный режим включён?",
          "[ACTION] fullscreen": "[ACTION] полноэкранный режим",

          "Vibrate with pattern [PATTERN]": "Вибрация с паттерном [PATTERN]",
          "Stop vibration": "Остановить вибрацию",

          "Battery level": "Уровень заряда",
          "Is charging?": "Заряжается?",

          "[MODE] ease [DIRECTION] [START] to [END] by [AMOUNT]%": "[MODE] плавность [DIRECTION] от [START] до [END] на [AMOUNT]%",
          "tween [PROPERTY] to [VALUE] over [SEC] seconds using [MODE] ease [DIRECTION]": "Анимировать [PROPERTY] до [VALUE] за [SEC] сек. используя [MODE] [DIRECTION]",
          "tween to x: [X] y: [Y] over [SEC] seconds using [MODE] ease [DIRECTION]": "Переместиться в x:[X] y:[Y] за [SEC] сек. используя [MODE] [DIRECTION]",
          "tween variable [VAR] to [VALUE] over [SEC] seconds using [MODE] ease [DIRECTION]": "Анимировать переменную [VAR] до [VALUE] за [SEC] сек. используя [MODE] [DIRECTION]",
          "back": "отскок",
          "bounce": "прыжок",
          "circ": "круг",
          "cubic": "кубический",
          "elastic": "упругий",
          "expo": "экспонента",
          "in": "вход",
          "in out": "вход-выход",
          "linear": "линейный",
          "out": "выход",
          "quad": "квадратичный",
          "quart": "квартичный",
          "quint": "квинтичный",
          "sine": "синус",

          "Comment or execute [TIP]": "Комментировать или выполнить [TIP]",
          "Return [STR] with comment [TIP]": "Вернуть [STR] с комментарием [TIP]",
          "Return [BOOL] with comment [TIP]": "Вернуть [BOOL] с комментарием [TIP]",
          "Always true with comment [TIP]": "Всегда истина с комментарием [TIP]",
          "Always false with comment [TIP]": "Всегда ложь с комментарием [TIP]",
          "Convert string [STR] to boolean": "Преобразовать строку [STR] в булево",
          "π (pi)": "π (пи)",
          "Return [TEXT]": "Вернуть [TEXT]",
          "New line character": "Символ новой строки",
          "Line 1 [L1] Line 2 [L2]": "Строка 1 [L1] Строка 2 [L2]",
          "If [BOOL] then [TRUE] else [FALSE]": "Если [BOOL] то [TRUE] иначе [FALSE]",
          "[A] to the power of [B]": "[A] в степени [B]",

          "trad. editor": "Традиционный редактор",
          "Enter or exit": "Войти или выйти",
          "Exit": "Выход",

          "x position":"позиция x",
          "y position":"позиция y",
          "direction":"направление",
          "size":"размер",
          "Chen-Jin's Toolbox":"Инструменты Chen-Jin",
          "Can't show notificiton \ntitle:":"Нельзя показать уведомление на мобильном!\nЗаголовок:",
          "\nbody:":"\nТекст:",
          "This is a notificiton":"Это уведомление",
          "This is a warning":"Это предупреждение",
          "This is a question":"Это вопрос",
          "This is default answer":"Это ответ по умолчанию",
          "Hello":"Привет",
          "Chen-Jin's Page":"Страница Chen-Jin",
          "English":"Русский",
          "Scratch language":"Язык Scratch",
          "More Blocks":"Дополнительные блоки",
          "Doc":"Документация",
          "[A] === [B]":"[A] = [B] (учёт регистра)",
        },
        "uk": {
          "Notifications and Popups": "Сповіщення та спливаючі вікна",
          "Network and Page": "Мережа та сторінка",
          "Mobile Features": "Мобільні функції",
          "Battery": "Акумулятор",
          "Tweening": "Анімація Tween",
          "Text and Math": "Текст та математика",
          "Hidden Blocks": "Приховані блоки",

          "Request system notification permission": "Запитати дозвіл на сповіщення",
          "Has system notification permission?": "Має дозвіл на сповіщення?",
          "Show system notification title [TITLE] message [MESSAGE] icon [ICON]": "Показати сповіщення: заголовок [TITLE] повідомлення [MESSAGE] іконка [ICON]",
          "Show alert [TEXT] and wait": "Показати попередження [TEXT] та чекати",
          "Show confirmation [TEXT] and wait": "Показати підтвердження [TEXT] та чекати",
          "Show prompt question [TEXT] default [DEFAULT] and wait": "Показати запитання [TEXT] за замовчуванням [DEFAULT] та чекати",

          "Ask to open https://[URL]": "Запитати про відкриття https://[URL]",
          "Request API from https://[URL]": "Запитати API з https://[URL]",
          "Reload page (think twice)": "Перезавантажити сторінку (подумайте двічі)",
          "Change page title to [TITLE]": "Змінити заголовок сторінки на [TITLE]",
          "Is page visible?": "Сторінка видима?",
          "Current page URL": "Поточний URL сторінки",
          "Using [EDITOR] editor?": "Використовується редактор [EDITOR]?",
          "Dark mode enabled?": "Темний режим увімкнено?",
          "[ACTION] fullscreen": "[ACTION] повноекранний режим",

          "Vibrate with pattern [PATTERN]": "Вібрація з паттерном [PATTERN]",
          "Stop vibration": "Зупинити вібрацію",

          "Battery level": "Рівень заряду",
          "Is charging?": "Заряджається?",

          "[MODE] ease [DIRECTION] [START] to [END] by [AMOUNT]%": "[MODE] плавність [DIRECTION] від [START] до [END] на [AMOUNT]%",
          "tween [PROPERTY] to [VALUE] over [SEC] seconds using [MODE] ease [DIRECTION]": "Анімувати [PROPERTY] до [VALUE] за [SEC] сек. використовуючи [MODE] [DIRECTION]",
          "tween to x: [X] y: [Y] over [SEC] seconds using [MODE] ease [DIRECTION]": "Переміститися до x:[X] y:[Y] за [SEC] сек. використовуючи [MODE] [DIRECTION]",
          "tween variable [VAR] to [VALUE] over [SEC] seconds using [MODE] ease [DIRECTION]": "Анімувати змінну [VAR] до [VALUE] за [SEC] сек. використовуючи [MODE] [DIRECTION]",
          "back": "відскок",
          "bounce": "стрибок",
          "circ": "коло",
          "cubic": "кубічний",
          "elastic": "пружний",
          "expo": "експонента",
          "in": "вхід",
          "in out": "вхід-вихід",
          "linear": "лінійний",
          "out": "вихід",
          "quad": "квадратичний",
          "quart": "квартичний",
          "quint": "квинтичний",
          "sine": "синус",

          "Comment or execute [TIP]": "Коментувати або виконати [TIP]",
          "Return [STR] with comment [TIP]": "Повернути [STR] з коментарем [TIP]",
          "Return [BOOL] with comment [TIP]": "Повернути [BOOL] з коментарем [TIP]",
          "Always true with comment [TIP]": "Завжди істина з коментарем [TIP]",
          "Always false with comment [TIP]": "Завжди хибно з коментарем [TIP]",
          "Convert string [STR] to boolean": "Перетворити рядок [STR] на булеве",
          "π (pi)": "π (пі)",
          "Return [TEXT]": "Повернути [TEXT]",
          "New line character": "Символ нового рядка",
          "Line 1 [L1] Line 2 [L2]": "Рядок 1 [L1] Рядок 2 [L2]",
          "If [BOOL] then [TRUE] else [FALSE]": "Якщо [BOOL] то [TRUE] інакше [FALSE]",
          "[A] to the power of [B]": "[A] у степені [B]",

          "trad. editor": "Традиційний редактор",
          "Enter or exit": "Увійти або вийти",
          "Exit": "Вихід",

          "x position":"позиція x",
          "y position":"позиція y",
          "direction":"напрямок",
          "size":"розмір",
          "Chen-Jin's Toolbox":"Інструменти Chen-Jin",
          "Can't show notificiton \ntitle:":"Не можна показати сповіщення на мобільному!\nЗаголовок:",
          "\nbody:":"\nТекст:",
          "This is a notificiton":"Це сповіщення",
          "This is a warning":"Це попередження",
          "This is a question":"Це запитання",
          "This is default answer":"Це відповідь за замовчуванням",
          "Hello":"Привіт",
          "Chen-Jin's Page":"Сторінка Chen-Jin",
          "English":"Українська",
          "Scratch language":"Мова Scratch",
          "More Blocks":"Додаткові блоки",
          "Doc":"Документація",
          "[A] === [B]":"[A] = [B] (враховує регістр)",
          }
        })
    }
    
  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    })
  }
  
  getInfo() {
    return {
      id: 'cjToolbox',
      name: this.formatMessage("Chen-Jin's Toolbox"),
      color1: '#00aeff',
      menuIconURI: cj_icon,
      blockIconURI: cj_icon,
      blocks: [

        /*
        {
          blockType: BlockType.LABEL,
          text: 'V 1.0'
        },
        {
          func:'doc',
          blockType:BlockType.BUTTON,
          text:this.formatMessage('Doc')
        },
        */

        // 通知与弹窗
        {
          blockType: BlockType.LABEL,
          text: this.formatMessage('Notifications and Popups')
        },
        {
          opcode: 'requestPermission',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('Request system notification permission')
        },
        {
          opcode: 'checkPermission',
          blockType: BlockType.BOOLEAN,
          text: this.formatMessage('Has system notification permission?'),
          disableMonitor: true
        },
        {
          opcode: 'notification',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('Show system notification title [TITLE] message [MESSAGE] icon [ICON]'),
          arguments: {
            TITLE: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('Chen-Jin\'s Toolbox')
            },
            MESSAGE: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage('This is a notificiton')
            },
            ICON: {
              type: ArgumentType.STRING,
              defaultValue: cj_icon_online
            }
          }
        },
        {
          opcode: 'alert',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('Show alert [TEXT] and wait'),
          arguments: {
            TEXT: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage("This is a warning")
            }
          }
        },
        {
          opcode: 'confirm',
          blockType: BlockType.BOOLEAN,
          text: this.formatMessage('Show confirmation [TEXT] and wait'),
          arguments: {
            TEXT: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage("This is a question")
            }
          }
        },
        {
          opcode: 'prompt',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('Show prompt question [TEXT] default [DEFAULT] and wait'),
          arguments: {
            TEXT: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage("This is a question")
            },
            DEFAULT: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage("This is default answer")
            }
          }
        },

        // 网络和页面
        {
          blockType: BlockType.LABEL,
          text: this.formatMessage('Network and Page')
        },
        {
          opcode: 'openweb',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('Ask to open https://[URL]'),
          arguments: {
            URL: {
              type: ArgumentType.STRING,
              defaultValue: "ccw.site/student/678cc9343778fc282d6252c5"
            }
          }
        },
        {
          opcode: 'api',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('Request API from https://[URL]'),
          arguments: {
            URL: {
              type: ArgumentType.STRING,
              defaultValue: "c.09870123.xyz/test.txt"
            }
          }
        },
        {
          opcode: 'reload',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('Reload page (think twice)'),
          isTerminal: true
        },
        {
          opcode: 'change_title',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('Change page title to [TITLE]'),
          arguments: {
            TITLE: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage("Chen-Jin's Page")
            }
          }
        },
        {
          opcode: 'visibility',
          blockType: BlockType.BOOLEAN,
          text: this.formatMessage('Is page visible?'),
          disableMonitor: true
        },
        {
          opcode: 'url',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('Current page URL')
        },
        {
          opcode: 'on_editor',
          blockType: BlockType.BOOLEAN,
          text: this.formatMessage('Using [EDITOR] editor?'),
          arguments: {
            EDITOR: {
              type: ArgumentType.STRING,
              menu: 'editors'
            }
          }
        },
        {
          opcode: 'dark',
          blockType: BlockType.BOOLEAN,
          text: this.formatMessage('Dark mode enabled?'),
          disableMonitor: true
        },
        {
          opcode: 'fullscreen',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('[ACTION] fullscreen'),
          arguments: {
            ACTION: {
              type: ArgumentType.STRING,
              menu: 'fullscreen_modes'
            }
          }
        },

        // 移动端功能
        {
          blockType: BlockType.LABEL,
          text: this.formatMessage('Mobile Features')
        },
        {
          opcode: 'vibration',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('Vibrate with pattern [PATTERN]'),
          arguments: {
            PATTERN: {
              type: ArgumentType.STRING,
              defaultValue: "1000,100,1000,100"
            }
          }
        },
        {
          opcode: 'vibration_stop',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('Stop vibration')
        },

        // 电池状态
        {
          blockType: BlockType.LABEL,
          text: this.formatMessage('Battery')
        },
        {
          opcode: 'battery_1',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('Battery level')
        },
        {
          opcode: 'battery_2',
          blockType: BlockType.BOOLEAN,
          text: this.formatMessage('Is charging?')
        },

        // 文本和数学
        {
          blockType: BlockType.LABEL,
          text: this.formatMessage('Text and Math')
        },
        {
          opcode: 'tip',
          blockType: BlockType.COMMAND,
          text: this.formatMessage('Comment or execute [TIP]'),
          arguments: {
            TIP: {
              type: ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'r_tip',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('Return [STR] with comment [TIP]'),
          arguments: {
            TIP: {
              type: ArgumentType.STRING
            },
            STR: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage("Hello")
            }
          }
        },
        {
          opcode: 'r_tip_bool',
          blockType: BlockType.BOOLEAN,
          text: this.formatMessage('Return [BOOL] with comment [TIP]'),
          arguments: {
            TIP: {
              type: ArgumentType.STRING
            },
            BOOL: {
              type: ArgumentType.BOOLEAN,
              defaultValue: false
            }
          }
        },
        {
          opcode: 'true_tip',
          blockType: BlockType.BOOLEAN,
          text: this.formatMessage('Always true with comment [TIP]'),
          arguments: {
            TIP: {
              type: ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'false_tip',
          blockType: BlockType.BOOLEAN,
          text: this.formatMessage('Always false with comment [TIP]'),
          arguments: {
            TIP: {
              type: ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'str_to_bool',
          blockType: BlockType.BOOLEAN,
          text: this.formatMessage('Convert string [STR] to boolean'),
          arguments: {
            STR: {
              type: ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
        {
          opcode: 'math_pi',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('π (pi)')
        },
        {
          opcode: 'r',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('Return [TEXT]'),
          arguments: {
            TEXT: {
              type: ArgumentType.STRING,
              defaultValue: ''
            }
          }
        },
        {
          opcode: 'enter',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('New line character')
        },
        {
          opcode: 'enter_text',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('Line 1 [L1] Line 2 [L2]'),
          arguments: {
            L1: {
              type: ArgumentType.STRING,
              defaultValue: '1'
            },
            L2: {
              type: ArgumentType.STRING,
              defaultValue: '2'
            }
          }
        },
        {
          opcode: 'if_return',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('If [BOOL] then [TRUE] else [FALSE]'),
          arguments: {
            BOOL: {
              type: ArgumentType.BOOLEAN
            },
            TRUE: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage("true")
            },
            FALSE: {
              type: ArgumentType.STRING,
              defaultValue: this.formatMessage("false")
            }
          }
        },
        {
          opcode: 'power',
          blockType: BlockType.REPORTER,
          text: this.formatMessage('[A] to the power of [B]'),
          arguments: {
            A: {
              type: ArgumentType.NUMBER,
              defaultValue: 2
            },
            B: {
              type: ArgumentType.NUMBER,
              defaultValue: 4
            }
          }
        },
        {
          opcode: 'is',
          blockType: BlockType.BOOLEAN,
          text: this.formatMessage('[A] === [B]'),
          arguments: {
            A: {
              type: ArgumentType.STRING,
              defaultValue: "CCW"
            },
            B: {
              type: ArgumentType.STRING,
              defaultValue: "ccw"
            }
          }
        },

        // 隐藏积木
        {
          blockType: BlockType.LABEL,
          text: this.formatMessage('Hidden Blocks')
        },
        {
          blockType: BlockType.XML,
          xml: '<block type="event_whentouchingobject"><value name="TOUCHINGOBJECTMENU"><shadow type="sensing_touchingobjectmenu"/></value></block>'
        },
        "---",
        {
          blockType: BlockType.XML,
          xml: '<block id="for_each" type="control_for_each"><value name="VALUE"><shadow type="math_whole_number"><field name="NUM">10</field></shadow></value></block>'
        },
        {
          blockType: BlockType.XML,
          xml: '<block id="while" type="control_while"/>'
        },
        "---",
        {
          blockType: BlockType.XML,
          xml: '<block type="control_get_counter"/>'
        },
        {
          blockType: BlockType.XML,
          xml: '<block type="control_incr_counter"/>'
        },
        {
          blockType: BlockType.XML,
          xml: '<block type="control_clear_counter"/>'
        },
        "---",
        {
          blockType: BlockType.XML,
          xml: '<block type="operator_round"><value name="NUM"><shadow type="note"><field name="NOTE">60</field></shadow></value></block>'
        },
        "---",
        {
          blockType: BlockType.XML,
          xml: '<block type="operator_join"><value name="STRING1"><shadow type="colour_picker"/></value><value name="STRING2"><shadow type="text"><field name="TEXT"></field></shadow></value></block>'
        },
        {
          blockType: BlockType.XML,
          xml: '<block type="operator_join"><value name="STRING1"><shadow type="matrix"><field name="MATRIX">1111110101001000010001110</field></shadow></value><value name="STRING2"><shadow type="text"><field name="TEXT"></field></shadow></value></block>'
        },
      ],
      menus: {
        editors: {
          acceptReporters: false,
          items: [
            { text: this.formatMessage("Gandi IDE"), value: "gandi" },
            { text: this.formatMessage("Trad. Editor"), value: "trad" }
          ]
        },
        fullscreen_modes: {
          acceptReporters: false,
          items: [
            { text: this.formatMessage("Enter or exit"), value: "enter" },
            { text: this.formatMessage("Exit"), value: "exit" }
          ]
          }
        },
      }
      }
    
    requestPermission() {
        Notification.requestPermission();
    }
    
    checkPermission() {
        return Notification.permission === 'granted';
    }

    notification(args){
        if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
            alert(this.formatMessage("Can't show notificiton \n title:")+args.TITLE+this.formatMessage("\nbody:")+args.MESSAGE)
        } else {
            new Notification(args.TITLE, {
                  body: args.MESSAGE,
                  icon: args.ICON
            })
        }
    }

    alert(args){
        alert(args.TEXT)
    }

    confirm(args){
        return confirm(args.TEXT)
    }

    prompt(args){
        return prompt(args.TEXT,args.DEFAULT)
    }
    
    openweb(args){
        if (confirm("作品请求在新窗口中打开 https://"+args.URL+"，是否打开？"))
        	open("https://"+args.URL)
    }

    api(args) {
      const data = fetch("https://"+args.URL)
        .then(response => response.text())
        .then(data => {return data})
        .catch(error => {return error})
      return data
    }
    
    vibration(args) {
        navigator.vibrate(args.PATTERN.split(","))
    }

	  reload(){
		  location.reload()
	  }

    vibration_stop() {
        navigator.vibrate(0)
    }

    battery_1(){
        return navigator.getBattery().then((battery) => `${battery.level * 100}`)
    }

    battery_2(){
        return navigator.getBattery().then((battery) => `${battery.charging}`)
    }

    battery_3(){
        return navigator.getBattery().then((battery) => `${battery.chargingTime}`)
    }

    battery_4(){
        return navigator.getBattery().then((battery) => `${battery.dischargingTime}`)
    }

    true_tip(){
        return true
    }
    
    false_tip(){
        return false
    }

    r_tip(args){
        return args.STR
    }

    r_tip_bool(args){
        return args.BOOL
    }

    str_to_bool(args){
        return args.STR
    }

    math_pi(){
        return Math.PI
    }

    r(args){
        return args.R_TEXT
    }

    change_title(args){
        document.title = args.TITLE;
    }

    visibility(){
      return document.visibilityState === "visible"
    }

    enter(){
      return "\n"
    }

    enter_text(args){
      return args.L1+"\n"+args.L2
    }

    url(){
      return location.href
    }

    on_editor(args){
      switch (args.EDITOR){
        case "gandi":{ 
          var href = location.href;
          return href.search("ccw.site/gandi") !== -1
        }
        case "trad":{ 
          var href = location.href;
          return href.search("ccw.site/creator") !== -1
        }
        default:{
          alert('未知参数：'+arg.EDITOR)
        }
      }
    }

    dark(){
      return window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    if_return(args){
      if (args.BOOL){
        return args.TRUE
      } else {
        return args.FALSE
      }
    }

    power(args){
      return Math.pow(args.A,args.B)
    }

    fullscreen(args) {
      switch (args.ACTION){
        case "enter":{
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
          }
        }
        case "exit":{    
            if (document.exitFullscreen) {
              document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
          }
        }
      }
    }

    is(args){
      return args.A === args.B
    }

}

Scratch.extensions.register(new cjToolbox());


window.tempExt = {
  Extension: cjToolbox,
  info: {
    name: 'cjToolbox',
    description: 'cjToolbox.description',
    extensionId: 'cjToolbox',
    featured: true,
    disabled: false,
    iconURL: bg_image,
    insetIconURL: cj_icon,
    collaboratorList: [
      {
        collaborator: 'Chen-Jin @ CCW',
        collaboratorURL:
          'https://www.ccw.site/student/678cc9343778fc282d6252c5',
      },
    ],
  },
  l10n: {
    'en': {
      'cjToolbox': 'Chen-Jin\'s Toolbox',
      'cjToolbox.description': 'Far beyond just network and text',
    },
    'zh-cn': {
      'cjToolbox': 'Chen-Jin 的工具箱',
      'cjToolbox.description': '远不止网络与文本',
    },
    'es': {
      'cjToolbox': 'Caja de herramientas de Chen-Jin',
      'cjToolbox.description': 'Mucho más que solo red y texto',
    },
    'ms': {
      'cjToolbox': 'Kotak Alat Chen-Jin',
      'cjToolbox.description': 'Lebih daripada sekadar rangkaian dan teks',
    },
    'ru': {
      'cjToolbox': 'Инструменты Chen-Jin',
      'cjToolbox.description': 'Гораздо больше, чем просто сеть и текст',
    },
    'uk': {
      'cjToolbox': 'Інструменти Chen-Jin',
      'cjToolbox.description': 'Набагато більше, ніж просто мережа та текст',
    }
  },
};
