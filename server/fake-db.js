const Property = require('./models/property')
const fakeDbData = require('./data.json');

class FakeDb{
  constructor() {
    this.properties = fakeDbData.properties;
    this.users = fakeDbData.users;
  }

  addPropertiesToDb(){
    this.properties.forEach((property) => {
      const newProperty = new Property(property);
        newProperty.save();

    })
  }

  seedDb(){
    this.cleanDb();
    this.addPropertiesToDb();
  }

  async cleanDb(){
   await Property.remove({});
  }

}
module.exports = FakeDb;
