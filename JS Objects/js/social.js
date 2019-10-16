

const siteUsers = {
    rank: 1,
    dailyVisits: 100000,
    users: [
        {name:'Bruce', followers: 50000},
        {name:'Clark', followers: 35000},
        {name: 'Barry', followers: 20000}
    ],
    logout(){
        this.users.forEach(user => {
            console.log(`${user.name} is logged out`);
        });
    }
}

siteUsers.logout();