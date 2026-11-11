from datetime import datetime, timedelta
from fastapi import Depends, FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import select
from sqlalchemy.orm import Session
from .db import Base, engine, get_db
from .models import Address, Order, Product, Subscription, User
from .schemas import OrderCreate, OrderOut, ProductOut, SubscriptionOut

app = FastAPI(title="FreshDay API", version="1.0.0")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

@app.on_event("startup")
def startup():
    Base.metadata.create_all(bind=engine)

@app.get("/health")
def health():
    return {"status": "ok", "service": "freshday-api"}

@app.get("/api/v1/products", response_model=list[ProductOut])
def list_products(category: str | None = Query(default=None), db: Session = Depends(get_db)):
    query = select(Product).where(Product.active.is_(True))
    if category and category.lower() != "all": query = query.where(Product.category == category)
    return db.scalars(query.order_by(Product.name)).all()

@app.get("/api/v1/orders", response_model=list[OrderOut])
def list_orders(user_id: int = Query(default=1), db: Session = Depends(get_db)):
    return db.scalars(select(Order).where(Order.user_id == user_id).order_by(Order.created_at.desc())).all()

@app.post("/api/v1/orders", response_model=OrderOut, status_code=201)
def create_order(payload: OrderCreate, user_id: int = Query(default=1), db: Session = Depends(get_db)):
    address = db.get(Address, payload.address_id)
    if not address or address.user_id != user_id: raise HTTPException(400, "Address is not available for this customer")
    products = {p.id: p for p in db.scalars(select(Product).where(Product.id.in_([i.product_id for i in payload.items]))).all()}
    if len(products) != len(payload.items): raise HTTPException(400, "One or more products are unavailable")
    total = sum(products[item.product_id].price * item.quantity for item in payload.items)
    order = Order(user_id=user_id, total=total, delivery_date=payload.delivery_date, status="confirmed")
    db.add(order); db.commit(); db.refresh(order); return order

@app.get("/api/v1/subscriptions", response_model=list[SubscriptionOut])
def list_subscriptions(user_id: int = Query(default=1), db: Session = Depends(get_db)):
    return db.scalars(select(Subscription).where(Subscription.user_id == user_id).order_by(Subscription.ends_on)).all()

@app.post("/api/v1/subscriptions/{subscription_id}/toggle", response_model=SubscriptionOut)
def toggle_subscription(subscription_id: int, user_id: int = Query(default=1), db: Session = Depends(get_db)):
    subscription = db.get(Subscription, subscription_id)
    if not subscription or subscription.user_id != user_id: raise HTTPException(404, "Subscription not found")
    subscription.status = "active" if subscription.status == "paused" else "paused"
    db.commit(); db.refresh(subscription); return subscription

@app.get("/api/v1/admin/orders", response_model=list[OrderOut])
def admin_orders(db: Session = Depends(get_db)):
    return db.scalars(select(Order).order_by(Order.created_at.desc()).limit(100)).all()

