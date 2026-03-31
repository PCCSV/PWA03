
async function generatePDF(id){

await fetch(API+"?action=pdf&id="+id);

}

async function sendEmail(id){

await fetch(API+"?action=email&id="+id);

}