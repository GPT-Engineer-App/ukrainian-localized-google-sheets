import React from "react";
import { Container, Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";

const Index = () => {
  // Припустимо, що ми отримали дані з Google Sheets у такому форматі:
  const data = [
    { id: 1, name: "Олександр", age: 29 },
    { id: 2, name: "Марія", age: 25 },
    { id: 3, name: "Іван", age: 32 },
  ];

  return (
    <Container maxW="container.md" py={4}>
      <Text fontSize="2xl" mb={4}>
        Таблиця даних з Google Sheets
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Ідентифікатор</Th>
            <Th>Ім'я</Th>
            <Th>Вік</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <Tr key={row.id}>
              <Td>{row.id}</Td>
              <Td>{row.name}</Td>
              <Td>{row.age}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default Index;
