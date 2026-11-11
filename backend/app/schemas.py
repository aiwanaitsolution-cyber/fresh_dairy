from datetime import datetime
from decimal import Decimal
from pydantic import BaseModel, ConfigDict, Field

class ProductOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int; slug: str; name: str; category: str; price: Decimal; unit: str; image_url: str

class OrderCreateItem(BaseModel):
    product_id: int
    quantity: int = Field(ge=1, le=100)

class OrderCreate(BaseModel):
    address_id: int
    items: list[OrderCreateItem] = Field(min_length=1)
    delivery_date: datetime

class OrderOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int; status: str; total: Decimal; delivery_date: datetime; eta_label: str; created_at: datetime

class SubscriptionOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    id: int; name: str; status: str; starts_on: datetime; ends_on: datetime; total_days: int; remaining_days: int

