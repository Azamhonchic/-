let user = [
    {
        name: 'Azam',
        username: 'Murodov',
        age: '20',
        course: {
            title: 'dev'
        }
    },
    {
        name: 'Shoxa',
        username: 'Islomov',
        age: '25',
        course: {
            title: '3d max'
        }
    },
    {
        name: 'Asad',
        username: 'Suphonov',
        age: '18',
        course: {
            title: 'smm'
        }
    },
    {
        name: 'Artem',
        username: 'Basiliyev',
        age: '35',
        course: {
            title: 'dev'
        }
    },{
        name: 'Dior',
        username: 'Ahmedov',
        age: '20',
        course: {
            title: '3d max'
        }
    },{
        name: 'Alex',
        username: 'Adams',
        age: '16',
        course: {
            title: 'smm'
        }
    },{
        name: 'Doston',
        username: 'Naimov',
        age: '14',
        course: {
            title: 'dev'
        }
    }
    ]
    user.sort((a,b) => a.age - b.age)
    let a = user.filter((item,index) => item.age >=  18 &&  item.name[0].toLowerCase()  === 'a')
    let saved = []
    
    let total = 0
    let average = 0
    for(let item of user)  {
     total = total + item.age }
    average = total / user.length
    Math.round(total + item.age)
    document.write(Math.floor(Math.random() * saved[name].length))

    saved.push(a)
    console.log(user);
    console.log(a);
    console.log(saved);
    console.log(average);