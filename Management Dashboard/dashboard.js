// Data for Vehicle Maintenance Graph (Pie chart)
const maintenanceData = {
    labels: ['Good', 'Moderate', 'Urgent'],
    datasets: [{
        label: 'Vehicle Maintenance',
        data: [50, 30, 3], // Pie chart data (values for each section)
        backgroundColor: ['rgba(70, 200, 70, 1)', 'rgba(255, 255, 0, 1)', 'rgba(255, 0, 0, 1)'], // Correct background colors
        borderColor: ['rgba(70, 200, 70, 1)', 'rgba(255, 255, 0, 1)', 'rgba(255, 0, 0, 1)'], // Correct border colors
        borderWidth: 1
    }]
};

// Config for Vehicle Maintenance Graph (Pie chart)
const maintenanceConfig = {
    type: 'pie',
    data: maintenanceData,
    options: {
        responsive: true
    }
};

// Data for Vehicle Average Metrics Graph (Box Plot)
const metricsData = {
    labels: ['Oil Change', 'Tire Rotation', 'Brake Inspection', 'Battery Check'],
    datasets: [{
        label: 'Maintenance Data',
        data: [
            { min: 30, q1: 40, median: 50, q3: 60, max: 70 },  // Oil Change
            { min: 20, q1: 25, median: 30, q3: 35, max: 50 },  // Tire Rotation
            { min: 50, q1: 60, median: 70, q3: 80, max: 90 },  // Brake Inspection
            { min: 20, q1: 30, median: 40, q3: 50, max: 60 }   // Battery Check
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',  // Box color
        borderColor: 'rgba(75, 192, 192, 1)',  // Border color
        borderWidth: 2,
        itemRadius: 4
    }]
};

// Config for Vehicle Average Metrics Graph (Box Plot)
/*
const metricsConfig = {
    type: 'boxplot',  // Set chart type to 'boxplot'
    data: metricsData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Maintenance Types'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Cost ($)'
                },
                beginAtZero: true
            }
        }
    }
};
*/

// Initialize the charts
window.onload = function() {
    const maintenanceCtx = document.getElementById('maintenanceChart').getContext('2d');
    new Chart(maintenanceCtx, maintenanceConfig);

    //const metricsCtx = document.getElementById('metricsChart').getContext('2d');
    //new Chart(metricsCtx, metricsConfig);
};
