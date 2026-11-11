from datetime import datetime, timedelta

from app.db import Base, SessionLocal, engine
from app.models import Address, Order, Product, Subscription, User


PRODUCTS = [
    ("a2", "A2 Milk", "L", 110, "Milk"),
    ("paneer", "Paneer", "kg", 450, "Fresh"),
    ("dahi", "Dahi", "kg", 160, "Fresh"),
    ("chhach", "Chhach", "L", 50, "Fresh"),
    ("butter", "White Butter", "kg", 1550, "Pantry"),
    ("ghee", "Desi Ghee", "kg", 2850, "Pantry"),
    ("khoya", "Khoya", "kg", 650, "Pantry"),
]


def seed() -> None:
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        user = db.query(User).filter(User.id == 1).first()
        if not user:
            user = User(id=1, name="Aarav Mehta", phone="9999999999")
            db.add(user)
            db.flush()
        if not db.query(Address).filter(Address.user_id == user.id).first():
            db.add(Address(user_id=user.id, label="Home", line1="14, Bluebell Residency", city="Jaipur", pincode="302017"))
        for sku, name, unit, price, category in PRODUCTS:
            if not db.query(Product).filter(Product.sku == sku).first():
                db.add(Product(sku=sku, name=name, unit=unit, price=price, category=category, stock_qty=250, is_active=True))
        if not db.query(Subscription).filter(Subscription.user_id == user.id).first():
            db.add(Subscription(user_id=user.id, plan_name="Morning Essentials", quantity=1, price=2499, status="active", next_delivery=datetime.utcnow() + timedelta(days=1)))
        if not db.query(Order).filter(Order.user_id == user.id).first():
            db.add(Order(user_id=user.id, status="out_for_delivery", total=110, delivery_date=datetime.utcnow() + timedelta(days=1)))
        db.commit()
        print("FreshDay demo data seeded")
    finally:
        db.close()


if __name__ == "__main__":
    seed()
