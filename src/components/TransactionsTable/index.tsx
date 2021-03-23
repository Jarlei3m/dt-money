import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';

export function TransactionsTable() {
  const transactions = useContext(TransactionsContext);

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
                <td className={type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(amount)}
                </td>
                <td>{category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
