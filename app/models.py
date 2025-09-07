from app import db

class Investment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(100), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    gold_quantity = db.Column(db.Float, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "amount": self.amount,
            "gold_quantity": self.gold_quantity
        }
