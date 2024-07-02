document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('dashboard')) {
    populateAttendanceTable();
    renderAttendanceChart();
  }

  if (document.getElementById('students')) {
    populateStudentAttendanceTable();
  }

  if (document.getElementById('departments')) {
    populateDepartmentsTable();
  }

  if (document.getElementById('admin')) {
    populateAdminTable();
  }
});

function populateAttendanceTable() {
  const tableBody = document.querySelector('#attendanceTable tbody');
  departmentsData.forEach(dept => {
    const row = document.createElement('tr');
    row.innerHTML = `<td class="py-2">${dept.department}</td><td class="py-2">${dept.head}</td><td class="py-2">${dept.students}</td>`;
    tableBody.appendChild(row);
  });
}

function renderAttendanceChart() {
  const ctx = document.getElementById('attendanceChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Absences',
        data: [10, 20, 30, 40, 50, 60],
        backgroundColor: 'red',
      }, {
        label: 'Présences',
        data: [90, 80, 70, 60, 50, 40],
        backgroundColor: 'green',
      }]
    },
    options: {
      scales: {
        x: { title: { display: true, text: 'Month' } },
        y: { title: { display: true, text: 'Number of Students' } }
      }
    }
  });
}

function populateStudentAttendanceTable() {
  const tableBody = document.querySelector('#studentAttendanceTable tbody');
  studentAttendanceData.forEach(record => {
    const row = document.createElement('tr');
    row.innerHTML = `<td class="py-2">${record.date}</td><td class="py-2">${record.status}</td>`;
    tableBody.appendChild(row);
  });
}

function populateDepartmentsTable() {
  const tableBody = document.querySelector('#departmentsTable tbody');
  departmentsData.forEach(dept => {
    const row = document.createElement('tr');
    row.innerHTML = `<td class="py-2">${dept.department}</td><td class="py-2">${dept.head}</td><td class="py-2">${dept.students}</td>`;
    tableBody.appendChild(row);
  });
}

function populateAdminTable() {
  const tableBody = document.querySelector('#adminTable tbody');
  adminUsers.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `<td class="py-2">${user.user}</td><td class="py-2">${user.role}</td><td class="py-2"><button class="bg-red-500 text-white px-2 py-1 rounded">Delete</button></td>`;
    tableBody.appendChild(row);
  });
}
