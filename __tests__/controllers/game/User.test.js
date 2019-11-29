const faker = require('faker');
require('jest');

describe('the user CRUD operations', () => {
    let UserService;
    let body;
    
    beforeAll(() => {
        UserService = require('../../../src/app/services/game/UserService');
        const dotEnv = require('dotenv');
        dotEnv.config({
            path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
        });
        require('../../../src/db/config/database.js');
    });

    test('create user', async () => {
        const name = faker.name.findName();
        body = {
            name,
            userName: faker.internet.userName(name),
            email: faker.internet.email(name),
            password: faker.internet.password()
        }
        const userCreated = await UserService.create(body);

        expect(userCreated).toEqual(
            expect.objectContaining(body)
        );
    });

    test('create user (userName used)', async () => {
        const expectMessage = 'Username is already used';
        const userCreated = await UserService.create(body);
        
        expect(userCreated).toEqual(expectMessage);
    });

    test('find all users', async () => {
        const allUsers = await UserService.findAllUsers();

        expect([]).not.toEqual(
            expect.arrayContaining(allUsers)
        );
    });

    test('find user by userName', async () => {
        const user = await UserService.findByUserName(body.userName);

        expect(user).toEqual(
            expect.objectContaining(body)
        );
    });

    test('find user by userName (user Not Found)', async () => {
        const expectMessage = 'User not found';

        const user = await UserService.findByUserName('Carlito1997');

        expect(user).toEqual(expectMessage);
    });

    test('update user by userName', async () => {
        const name = faker.name.findName();
        const json = {
            name,
            userName: faker.internet.userName(name),
            email: faker.internet.email(name)
        };

        const expectMessage = 'User modfied';

        const user = await UserService.updateUserByUserName(body.userName, json);

        body.name = name;
        body.userName = json.userName;
        body.email = json.email;

        expect(user).toEqual(expectMessage);
    });

    test('update user by userName (user not found)', async () => {
        const name = faker.name.findName();
        const json = {
            name,
            userName: faker.internet.userName(name),
            email: faker.internet.email(name)
        };

        const expectMessage = 'User not found';

        const user = await UserService.updateUserByUserName('Carlito1997', json);

        expect(user).toEqual(expectMessage);
    });

    test('remove user by userName', async () => {
        const expectMessage = 'User removed';

        const user = await UserService.removeUserByUserName(body.userName);

        expect(user).toEqual(expectMessage);
    });

    test('remove user by userName (User not found)', async () => {
        const expectMessage = 'User not found';

        const user = await UserService.removeUserByUserName('Carlito1997');

        expect(user).toEqual(expectMessage);
    });

    afterAll(() => {
        mongoose.disconnect();
    });
});