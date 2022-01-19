const url = "http://localhost:8000/api"

function getReports() {
  return fetch(`${url}/list-reports`)
        .then(res => res.json())
        .then(res => res.data)
}

function downloadReport(report_id) {
  window.open(`${url}/get-report/${report_id}`, '_blank').focus();
}

function generateReport(title, startBirthDate, endBirthDate, token){
  return fetch(`${url}/generate-report`,{
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json, text-plain, */*",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": token
      },
    method: 'post',
    body: JSON.stringify({
        title: title,
        startBirthDate: startBirthDate,
        endBirthDate:endBirthDate
      })
  })
  .then(res => res.json())
  .then(res => res.data)
}
export default { getReports, downloadReport, generateReport }
