const budgetInput = document.getElementById('budget');
const totalBudget = document.getElementById('total-budget');
const totalExpenses = document.getElementById('total-expenses');
const budgetLeft = document.getElementById('budget-left');
const expenseList = document.getElementById('expense-list');
const expenseTitle = document.getElementById('expense-title');
const expenseAmount = document.getElementById('expense-amount');

let budget = 0;
let expenses = [];

function updateLabelValues() {
  const storedData = localStorage.getItem('budgetTracker');
  if (storedData) {
    const data = JSON.parse(storedData);
    budget = data.budget;
    expenses = data.expenses;
  }
  totalBudget.textContent = budget.toFixed(2);
  budgetLeft.textContent = (budget - calculateTotalExpenses()).toFixed(2);
  updateExpenseList(); 
}

const userObj = {
  username: "expense title",
  email: "maria@mail.com",
};

localStorage.setItem('user', JSON.stringify(userObj));

function addBudget() {
  const newBudget = parseFloat(budgetInput.value);

  if (isNaN(newBudget) || newBudget <= 0) {
    alert('Please enter a valid budget');
    return;
  }
  budget += newBudget;
  updateLocalStorage();
  updateLabelValues();
}

function addExpense() {
  const title = expenseTitle.value.trim();
  const amount = parseFloat(expenseAmount.value);

  if (title === '' || isNaN(amount) || amount <= 0) {
    alert('Please enter a valid expense title and amount');
    return;
  }
  const newExpense = { title, amount };
  expenses.push(newExpense);
  updateLocalStorage();
  updateExpenseList();
  expenseTitle.value = '';
  expenseAmount.value = '';
  calculateTotalExpenses();
}

function removeExpense(index) {
  expenses.splice(index, 1);
  updateLocalStorage();
  updateExpenseList();
  calculateTotalExpenses();
}

function updateExpenseList() {
  expenseList.innerHTML = '';
  expenses.forEach((expense, index) => {
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
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  totalExpenses.textContent = total.toFixed(2);
  budgetLeft.textContent = (budget - total).toFixed(2);
  return total;
}

function resetAll() {
  budget = 0;
  expenses = [];
  totalBudget.textContent = '0.00';
  totalExpenses.textContent = '0.00';
  budgetLeft.textContent = '0.00';
  expenseList.innerHTML = '';
  budgetInput.value = '';
  localStorage.removeItem('budgetTracker');
}

function updateLocalStorage() {
  const data = {
    budget: budget,
    expenses: expenses
  };
  localStorage.setItem('budgetTracker', JSON.stringify(data));
}

updateLabelValues();