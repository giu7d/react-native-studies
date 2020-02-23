import React from 'react';
import { Chip, Button, Card } from 'react-native-paper';
import AmCharts from './AmCharts';

export default function GraphCard(props) {

  const { drilldownCount, data, pop, push } = props;

  return (
    <Card
      style={{ marginVertical: 24 }}
      theme={{ colors: { primary: '#333333' } }}>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        right={() => (
          <Chip
            type="outlined"
            icon="pie-chart"
            margin={14}
            onPress={() => console.log('Drill Down')}>{drilldownCount}</Chip>
        )}
      />

      <Card.Content>
        <AmCharts
          data={data}
        />
      </Card.Content>

      <Card.Actions>
        <Button icon="remove" onPress={pop}>Pop</Button>
        <Button icon="add" onPress={push}>Add</Button>
      </Card.Actions>
    </Card>
  );
}
  