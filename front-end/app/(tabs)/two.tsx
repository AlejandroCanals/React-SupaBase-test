import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { supabase } from '../../config/supabaseClient'; // Asegúrate de que la ruta sea correcta

export default function HomeScreen() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from('usuarios').select('*').limit(1);
      if (error) {
        console.error('Error conectando a Supabase:', error);
      } else {
        console.log('Conexión a Supabase exitosa. Datos recibidos:', data);
      }
    }
    testConnection();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Verifica la consola para confirmar la conexión a Supabase.</Text>
    </View>
  );
}
