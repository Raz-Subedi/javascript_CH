

    // Write concise object literal declarations using simple fields

    const creatPerson = (name,age,gender) => ({name,age,gender});

    // Instead of doing this the above code is good
        // return {
        //     name: name,
        //     age: age,
        //     gender: gender
        // };


    console.log(creatPerson("Zodiac Hasbro",56,"male"));
