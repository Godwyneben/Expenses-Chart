// Fetch JSON from data.JSON file 
const data = fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })

    .catch(error => console.log(error));


// Convert data into array 
let chartContainer= document.querySelector('.chart-container');

// Map through data and populate chart 
data.then(data => {
    data.forEach(item => {
        let chart = document.createElement('div');
        chart.classList.add("chart");
        chartContainer.appendChild(chart);
        chart.setAttribute("data-chartStat", "$" + item.amount);
        const height = item.amount/5.5;
        chart.innerHTML = `
        <div class="chart-title">${item.day}</div>
        <div class="chart-value" style="--height:${height}em">
            <div class="chart-amount">${item.amount}</div>
        </div> 
        `;
        chartContainer.appendChild(chart);
    }
    )
}
)
