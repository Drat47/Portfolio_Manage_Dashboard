from flask import request, jsonify
from app.models import db, Investment

def register_routes(app):
    @app.route("/investments", methods=["GET"])
    def get_investments():
        investments = Investment.query.all()
        return jsonify([i.to_dict() for i in investments])

    @app.route("/investments/<int:id>", methods=["GET"])
    def get_investment(id):
        investment = Investment.query.get_or_404(id)
        return jsonify(investment.to_dict())

    @app.route("/investments", methods=["POST"])
    def create_investment():
        data = request.get_json()
        if not data.get("user_name") or not data.get("amount") or not data.get("gold_quantity"):
            return jsonify({"error": "Missing required fields"}), 400

        investment = Investment(
            user_name=data["user_name"],
            amount=data["amount"],
            gold_quantity=data["gold_quantity"]
        )
        db.session.add(investment)
        db.session.commit()
        return jsonify(investment.to_dict()), 201

    @app.route("/investments/<int:id>", methods=["PUT"])
    def update_investment(id):
        investment = Investment.query.get_or_404(id)
        data = request.get_json()

        investment.user_name = data.get("user_name", investment.user_name)
        investment.amount = data.get("amount", investment.amount)
        investment.gold_quantity = data.get("gold_quantity", investment.gold_quantity)

        db.session.commit()
        return jsonify(investment.to_dict())

    @app.route("/investments/<int:id>", methods=["DELETE"])
    def delete_investment(id):
        investment = Investment.query.get_or_404(id)
        db.session.delete(investment)
        db.session.commit()
        return jsonify({"message": "Investment deleted"})
