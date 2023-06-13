from flask import jsonify
from flask import Flask, render_template

app = Flask(__name__, template_folder='static')


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/send_notification", methods=["GET"])
def send_notification():
    # 通知の送信処理を記述
    return jsonify({"message": "通知が送信されました"})


if __name__ == '__main__':
    app.run(debug=True)
