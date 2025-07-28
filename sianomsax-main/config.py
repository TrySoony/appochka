# Конфигурационный файл для бота
import os
from dotenv import load_dotenv

# Загружаем переменные окружения из .env файла
load_dotenv()

TOKEN = os.getenv("BOT_TOKEN")
ADMIN_ID = int(os.getenv("ADMIN_ID", "7992930414"))  # Ваш Telegram ID

if not TOKEN:
    raise ValueError("BOT_TOKEN не установлен в переменных окружения") 