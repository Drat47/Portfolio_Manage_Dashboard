from app import db
from app.models import Investment

# Sample investment data
seed_data = [
    {"user_name": "Dharmesh", "amount": 5000, "gold_quantity": 10},
    {"user_name": "Ravi", "amount": 10000, "gold_quantity": 25},
    {"user_name": "Anita", "amount": 7500, "gold_quantity": 15},
    {"user_name": "Sonal", "amount": 12000, "gold_quantity": 30},
    {"user_name": "Amit", "amount": 3000, "gold_quantity": 5},
    {"user_name": "Neha", "amount": 8000, "gold_quantity": 20},
    {"user_name": "Raj", "amount": 6000, "gold_quantity": 12},
    {"user_name": "Pooja", "amount": 15000, "gold_quantity": 40},
    {"user_name": "Vikas", "amount": 4000, "gold_quantity": 8},
    {"user_name": "Kavita", "amount": 9500, "gold_quantity": 22}
]

def seed_db():
    for record in seed_data:
        investment = Investment(
            user_name=record["user_name"],
            amount=record["amount"],
            gold_quantity=record["gold_quantity"]
        )
        db.session.add(investment)
    db.session.commit()
    print("✅ Seed data inserted successfully!")

if __name__ == "__main__":
    seed_db()
