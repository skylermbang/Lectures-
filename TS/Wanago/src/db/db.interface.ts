import { Document, Schema, model, connect } from 'mongoose';

interface User extends Document {
  name: string;
  email: string;
  avatar?: string;
}

export default User ;