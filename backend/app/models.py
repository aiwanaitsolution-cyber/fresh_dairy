from datetime import datetime
from decimal import Decimal
from sqlalchemy import Boolean, DateTime, ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship
from .db import Base

class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    phone: Mapped[str] = mapped_column(String(20), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(120), default="FreshDay customer")
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    addresses = relationship("Address", back_populates="user", cascade="all, delete-orphan")

class Address(Base):
    __tablename__ = "addresses"
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    label: Mapped[str] = mapped_column(String(40), default="Home")
    line1: Mapped[str] = mapped_column(String(255))
    city: Mapped[str] = mapped_column(String(80))
    pincode: Mapped[str] = mapped_column(String(6), index=True)
    user = relationship("User", back_populates="addresses")

class Product(Base):
    __tablename__ = "products"
    id: Mapped[int] = mapped_column(primary_key=True)
    slug: Mapped[str] = mapped_column(String(80), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(120))
    category: Mapped[str] = mapped_column(String(40), index=True)
    price: Mapped[Decimal] = mapped_column(Numeric(10, 2))
    unit: Mapped[str] = mapped_column(String(12))
    image_url: Mapped[str] = mapped_column(String(255))
    active: Mapped[bool] = mapped_column(Boolean, default=True)

class Order(Base):
    __tablename__ = "orders"
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    status: Mapped[str] = mapped_column(String(30), default="confirmed", index=True)
    total: Mapped[Decimal] = mapped_column(Numeric(10, 2))
    delivery_date: Mapped[datetime] = mapped_column(DateTime)
    eta_label: Mapped[str] = mapped_column(String(60), default="6:30 - 7:30 AM")
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class Subscription(Base):
    __tablename__ = "subscriptions"
    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.id"), index=True)
    name: Mapped[str] = mapped_column(String(120), default="Morning essentials")
    status: Mapped[str] = mapped_column(String(20), default="active", index=True)
    starts_on: Mapped[datetime] = mapped_column(DateTime)
    ends_on: Mapped[datetime] = mapped_column(DateTime)
    total_days: Mapped[int] = mapped_column(Integer, default=30)
    remaining_days: Mapped[int] = mapped_column(Integer, default=30)

