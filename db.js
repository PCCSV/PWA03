const DB_NAME = "inspectionDB";

function saveLocal(data) {
  let all = JSON.parse(localStorage.getItem("inspections") || "[]");

  all.push(data);

  localStorage.setItem("inspections", JSON.stringify(all));
}

function getLocal() {
  return JSON.parse(localStorage.getItem("inspections") || "[]");
}

function queueSync(data) {
  let q = JSON.parse(localStorage.getItem("queue") || "[]");

  q.push(data);

  localStorage.setItem("queue", JSON.stringify(q));
}

async function syncQueue() {
  let q = JSON.parse(localStorage.getItem("queue") || "[]");

  for (let item of q) {
    await sendToServer(item);
  }

  localStorage.removeItem("queue");
}