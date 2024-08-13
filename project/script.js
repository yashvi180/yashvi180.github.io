const budgetInput = document.getElementById('budget');
const totalBudget = document.getElementById('total-budget');
const totalExpenses = document.getElementById('total-expenses');
const budgetLeft = document.getElementById('budget-left');
const expenseList = document.getElementById('expense-list');
const expenseTitle = document.getElementById('expense-title');
const expenseAmount = document.getElementById('expense-amount');

let budget = 0;
let expenses = [];

function addBudget() {
    const newBudget = parseFloat(budgetInput.value);
    console.log('addBudget called');
    console.log('newBudget:', newBudget);

    if (isNaN(newBudget) || newBudget <= 0) {
        alert('Please enter a valid budget');
        return;
    }
    budget += newBudget;
    totalBudget.textContent = budget.toFixed(2);
    budgetLeft.textContent = (budget - calculateTotalExpenses()).toFixed(2);
}

function addExpense() {
    console.log('addExpense called');
    const title = expenseTitle.value.trim();
    const amount = parseFloat(expenseAmount.value);

    if (title === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid expense title and amount');
        return;
    }
    const newExpense = { title, amount };
    expenses.push(newExpense);
    console.log('expenses:', expenses);
    updateExpenseList();
    expenseTitle.value = '';
    expenseAmount.value = '';
    calculateTotalExpenses();
}

function removeExpense(index) {
    console.log('removeExpense called');
    console.log('index:', index);
    expenses.splice(index, 1);
    updateExpenseList();
    calculateTotalExpenses();
}

function updateExpenseList() {
    console.log('updateExpenseList called');
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        console.log('expense:', expense);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.title}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td><button onclick="removeExpense(${index})">Remove</button></td>
        `;
        expenseList.appendChild(row);
    });
}

function calculateTotalExpenses() {
    console.log('calculateTotalExpenses called');
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    totalExpenses.textContent = total.toFixed(2);
    budgetLeft.textContent = (budget - total).toFixed(2);
    return total;
    console.log('calculateTotalExpenses ends');
}

function resetAll() {
    console.log('resetAll called');
    budget = 0;
    expenses = [];
    totalBudget.textContent = '0.00';
    totalExpenses.textContent = '0.00';
    budgetLeft.textContent = '0.00';
    expenseList.innerHTML = '';
}
