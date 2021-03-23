import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  createdAt: string;
  category: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            const {
              id,
              title,
              category,
              createdAt,
              type,
              amount,
            } = transaction;
            return (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>R$ {amount}</td>
                <td>{category}</td>
                <td>{createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
