window.onload = function() {
    document.querySelector('.time_unit').addEventListener('change', function() {
        let n = parseInt(this.value);

        let arr = [0, 0, 0];
        const unit_time = [4, 5, 10];
        const rates = [1000, 1500, 3000];

        function find(n) {
            if (n < 4) return 0;

            let maxProfit = 0;
            let index = -1;

            for (let i = 0; i < unit_time.length; i++) {
                if (n >= unit_time[i]) {
                    let profit = (n - unit_time[i]) * rates[i];
                    if (profit > maxProfit) {
                        maxProfit = profit;
                        index = i;
                    }
                }
            }

            if (index !== -1) {
                arr[index]++;
                return maxProfit + find(n - unit_time[index]);
            }

            return 0;
        }

        let earnings = find(n);
        let solution = "Earnings : $" + earnings + "<br>Solution: <br>T: " + arr[1] + ", P: " + arr[0] + ", C: " + arr[2];

        document.querySelector('.solution').innerHTML = solution;
    });
};
