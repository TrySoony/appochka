# Инструкция по настройке проекта

## Установка зависимостей

```bash
pip install -r requirements.txt
```

## Настройка переменных окружения

Создайте файл `.env` в корневой папке проекта со следующим содержимым:

```
BOT_TOKEN=ваш_токен_бота
ADMIN_ID=ваш_telegram_id
FLASK_ENV=development
FLASK_DEBUG=True
```

## Запуск проекта

```bash
python main.py
```

## Структура проекта

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

## Функциональность

- Telegram бот с рулеткой подарков
- Web-интерфейс для рулетки
- Система достижений
- Ежедневные бонусы
- Реферальная система
- Админ-панель 