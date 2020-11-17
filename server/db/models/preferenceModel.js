const mongoose = require('mongoose'),
  validators = require('validator');

//PREFERENCES SCHEMA

const PreferenceSchema = new mongoose.Schema({
  name: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    required: true
  },
  sunSign: [
    {
      type: String,
      enum: [
        'Aries',
        'Taurus',
        'Gemini',
        'Cancer',
        'Leo',
        'Virgo',
        'Libra',
        'Scorpio',
        'Sagittarius',
        'Capricorn',
        'Aquarius',
        'Pisces'
      ]
    }
  ],
  religion: String,
  age: {
    type: Number,
    validate(value) {
      if (value < 18) {
        throw new Error('That is not a valid age');
      }
    }
  },
  //will need to figure out how to fetch location relative to others
  location: [
    {
      type: Number
    },
    {
      type: Number
    }
  ]
});

module.exports = mongoose.model('Preference', PreferenceSchema);
