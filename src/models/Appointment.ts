import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAppointment extends Document {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: Date;
  preferredTime: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>({
  name: { type: String, required: [true, 'Please provide a name.'] },
  email: { type: String, required: [true, 'Please provide an email.'] },
  phone: { type: String, required: [true, 'Please provide a phone number.'] },
  service: { type: String, required: [true, 'Please select a service.'] },
  preferredDate: { type: Date, required: [true, 'Please select a preferred date.'] },
  preferredTime: { type: String, required: [true, 'Please select a preferred time.'] },
  message: { type: String, default: '' },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

const Appointment: Model<IAppointment> =
  mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);

export default Appointment;
