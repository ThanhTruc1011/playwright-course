const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Tạo 1 tài khoản ngân hàng
let account1 = {
    accountName: "Truc",
    accountNumber: "3339933985",
    routingNumber: "1111",
    balance: 20000
};

// Tạo một account khác
const account2 = JSON.parse(JSON.stringify(account1));
account2.accountName = 'Chuc';
account2.accountNumber = '12121212';

// Lưu các tk vào một mảng
let bankAccounts = [account1, account2];

// Tìm tài khoản theo accountNumber
function findAccount(accountNumber) {
    return bankAccounts.find(acc => acc.accountNumber === accountNumber);
}
function handleFindAccount() {
    rl.question("Input account: ", (accountNumber) => {
        let account = findAccount(accountNumber);
        if (account) {

            console.log(`Name: ${account.accountName}`);
            console.log(`Account: ${account.accountNumber}`);
            console.log(`Balance: ${account.balance} USD`);
        } else {
            console.log("Account not exits!");
        }
        showMenu();
    });
}

// Xử lý rút tiền
function handleWithdraw() {
    let attempts = 0;
    const MAX_ATTEMPTS = 3;
    function attemptWithdraw() {
        if (attempts >= MAX_ATTEMPTS) {
            console.log("Too many failed attempts. Returning to menu...");
            return showMenu();
        }
        rl.question("Input account: ", (accountNumber) => {
            let account = findAccount(accountNumber);
            if (!account) {
                attempts++;
                console.log(`Account not exists! (${attempts}/${MAX_ATTEMPTS} attempts)`);
                return attemptWithdraw();
            }
            rl.question("Please input withdraw amount: ", (amount) => {
                amount = parseFloat(amount);
                if (isNaN(amount) || amount <= 0) {
                    attempts++;
                    console.log(`Invalid amount! (${attempts}/${MAX_ATTEMPTS} attempts)`);
                    return attemptWithdraw();
                } else if (amount > account.balance) {
                    attempts++;
                    console.log(`Insufficient balance! (${attempts}/${MAX_ATTEMPTS} attempts)`);
                    return attemptWithdraw();
                } else {
                    account.balance -= amount;
                    console.log(`Success! New balance: ${account.balance} USD`);
                    showMenu();
                }
            });
        });
    }
    attemptWithdraw();
}

// Hiển thị menu
function showMenu() {
    console.log(`
    === Banking application ===
    1. Find an account
    2. Update balance
    0. Exit the program.
    `);
    rl.question("Please select an option: ", (option) => {
        switch (option) {
            case "1":
                handleFindAccount();
                break;
            case "2":
                handleWithdraw();
                break;
            case "0":
                console.log("Exit the program.");
                rl.close();
                break;
            default:
                console.log("Wrong option!!\n");
                showMenu();
        }
    });
}
showMenu();