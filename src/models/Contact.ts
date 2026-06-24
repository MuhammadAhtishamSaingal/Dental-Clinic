import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: [true, 'Please provide your name.'] },
  email: { type: String, required: [true, 'Please provide your email.'] },
  phone: { type: String, required: [true, 'Please provide your phone number.'] },
  subject: { type: String, required: [true, 'Please provide a subject.'] },
  message: { type: String, required: [true, 'Please provide a message.'] },
  createdAt: { type: Date, default: Date.now },
});

const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
