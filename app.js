async function newInspection() {
  document.getElementById("appView").classList.add("d-none");

  document.getElementById("inspectionForm").classList.remove("d-none");

  navigator.geolocation.getCurrentPosition((pos) => {
    localStorage.setItem("gps", JSON.stringify(pos.coords));
  });
}

async function saveInspection() {
  let data = {
    title: title.value,

    project: project.value,

    status: status.value,

    notes: notes.value,

    image: localStorage.getItem("image"),

    signature: getSignature(),

    gps: JSON.parse(localStorage.getItem("gps")),
  };

  saveLocal(data);

  queueSync(data);

  syncQueue();

  back();
}

function back() {
  inspectionForm.classList.add("d-none");

  appView.classList.remove("d-none");

  renderList();
}

function renderList() {
  let data = getLocal();

  inspectionList.innerHTML = "";

  data.forEach((i) => {
    inspectionList.innerHTML += `<div class="card mb-2">

<div class="card-body">

<b>${i.title}</b>

<br>${i.project}

<br>${i.status}

</div>

</div>`;
  });
}
