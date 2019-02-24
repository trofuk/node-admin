const createCollection = async (db) => {
    await db.createCollection('users', {
        validator: {
            $and: [
                { username: { $type: 'string' } },
                { hash: { $type: 'string'} },
                { firstName: { $type: 'string'} },
                { lastName: { $type: 'string' } },
                { avatar: { $type: 'string' } },
                { status: { $type: 'string' } },
                { department: { $type: 'string' } },
                { position: { $type: 'string' } },
                { skills: { $type: 'array' } },
                { createdDate: { $type: 'date', $default: Date.now } },

            ],
        },
        validationAction: 'error',
        validationLevel: 'strict',
    })
};

module.exports = {
  async up(db) {
      try {
          const col = await db.listCollections({ name: 'users' }).toArray()
          if(col.length > 0) {
              throw new Error('Collection users already exists in MongoDb. Exited...')
          } else {
              await createCollection(db)
          }
      } catch(err) {
          throw err
      }
  },

  async down(db) {
      try {
          await db.dropCollection('users')
      } catch(err) {
          throw err
      }
  }
};






module.exports = {
    async up(db) {
        try {
            const col = await db.listCollections({ name: 'games' }).toArray()
            if(col.length > 0) {
                throw new Error('Collection games already exists in MongoDb. Exited...')
            } else {
                await createCollection(db)
            }
        } catch(err) {
            throw err
        }
    },

    async down(db) {
        try {
            await db.dropCollection('games')
        } catch(err) {
            throw err
        }
    },
}