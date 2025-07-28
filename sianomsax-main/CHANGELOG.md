# Журнал изменений

## Версия 2.0.0 - Реструктуризация проекта

### ✅ Выполненные улучшения

#### Структура проекта
- Создана правильная структура папок:
  - `static/` - для статических файлов
  - `static/css/` - для CSS стилей
  - `static/js/` - для JavaScript файлов
  - `static/images/` - для изображений
  - `templates/` - для HTML шаблонов

#### Очистка кода
- Удалены ненужные файлы:
  - `node.js` - неиспользуемый файл
  - `ls_test.py` - тестовый файл
  - `test_flask.py` - дублирующий функциональность
- Удалены отладочные `console.log` из JavaScript файлов
- Исправлен дублирующийся маршрут `/admin`
- Обновлен TODO комментарий

#### Безопасность
- Убран хардкод токена бота из `config.py`
- Добавлена проверка наличия токена в переменных окружения
- Создан файл `SETUP.md` с инструкциями по настройке

#### Пути к файлам
- Обновлены все пути к статическим файлам в HTML
- Обновлены пути к изображениям в JavaScript
- Исправлены маршруты Flask для новой структуры

#### Документация
- Обновлен `README.md` с новой структурой проекта
- Создан `SETUP.md` с инструкциями по установке
- Создан `CHANGELOG.md` для отслеживания изменений

### 🔧 Технические изменения

#### Flask маршруты
```python
# Было
@app.route('/<path:path>')
def static_files(path):
    return send_file(path)

# Стало
@app.route('/static/<path:path>')
def static_files(path):
    return send_file(f'static/{path}')
```

#### Пути к файлам
```html
<!-- Было -->
<link rel="stylesheet" href="style.css">
<script src="roulette.js"></script>

<!-- Стало -->
<link rel="stylesheet" href="/static/css/style.css">
<script src="/static/js/roulette.js"></script>
```

### 📁 Новая структура проекта
```
sianomsax-main/
├── main.py                 # Основной файл приложения
├── config.py              # Конфигурация
├── custom_methods.py      # Пользовательские методы
├── scraper.py             # Скрипт для парсинга
├── requirements.txt       # Зависимости Python
├── static/               # Статические файлы
│   ├── css/             # CSS стили
│   ├── js/              # JavaScript файлы
│   └── images/          # Изображения
├── templates/            # HTML шаблоны
└── README.md            # Документация
```

### 🚀 Следующие шаги
1. Создать файл `.env` с переменными окружения
2. Установить зависимости: `pip install -r requirements.txt`
3. Запустить проект: `python main.py` 