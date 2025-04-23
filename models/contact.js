import mongoose from 'mongoose';
  import validator from 'validator';

  const contactSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: 'Please enter a valid email address',
      },
    },
    message: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => value.length <= 1000,
        message: 'Message cannot exceed 1000 characters',
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  export default mongoose.model('Contact', contactSchema);