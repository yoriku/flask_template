function sendNotification() {
    if (!("Notification" in window)) {
        alert("このブラウザは通知をサポートしていません");
    } else if (Notification.permission === "granted") {
        var notification = new Notification("通知のタイトル", {
            body: "通知の本文",
        });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                var notification = new Notification("通知のタイトル", {
                    body: "通知の本文",
                });
            }
        });
    }
}

// 30分ごとに通知を送信する
setInterval(function () {
    sendNotification();
}, 30 * 60 * 1000);