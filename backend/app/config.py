from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    database_url: str = "mysql+pymysql://freshday:freshday@127.0.0.1:3307/freshday"
    jwt_secret: str = "change-me"
    access_token_minutes: int = 60
    environment: str = "development"
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

@lru_cache
def get_settings() -> Settings:
    return Settings()

