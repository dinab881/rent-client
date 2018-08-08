const Property = require('./models/property');
const User = require('./models/user');
const fakeDbData = require('./data.json');

class FakeDb {
  constructor() {
    this.properties = fakeDbData.properties;
    this.users = fakeDbData.users;
  }

  addPropertiesToDb() {
    const user = new User(this.users[0]);

    this.properties.forEach((property) => {
      const newProperty = new Property(property);
      newProperty.user = user;
      user.properties.push(newProperty);
      newProperty.save();

    });
    user.save();
  }

  async seedDb() {
    await this.cleanDb();
    this.addPropertiesToDb();
  }

  async cleanDb() {
    await User.remove({});
    await Property.remove({});
  }

}

module.exports = FakeDb;
