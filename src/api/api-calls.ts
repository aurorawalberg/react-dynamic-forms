import axios from 'axios';
import { DynamicFieldData } from '../models/dynamic-control-types';

export async function getFormFields() {
  return await axios.get<DynamicFieldData[]>('/api/fields');
}
