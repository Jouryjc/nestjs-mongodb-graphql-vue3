export interface TableRow {
  name: string;
  status: 'pending' | 'doing' | 'finished';
  _id: string;
}
