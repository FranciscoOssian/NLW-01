import React, { useState, useEffect } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground, Image, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';

interface ItemPicker{
  label: string,
  value: string
}

interface IBGEUFResponse{
  sigla: string
}

interface IBGECityResponse{
  nome: string
}

const Home = () => {

  const [cities, setCities] = useState<ItemPicker[]>([]);
  const [ufs, setUfs] = useState<ItemPicker[]>([]);
  const [selectedUf, setSelectedUf] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then( response => {
        const ufsPicker = response.data.map(uf => (
          {
            label: uf.sigla,
            value: uf.sigla
          }
        ));
        setUfs(ufsPicker);
      })
  }, []);

  useEffect( ()=>{
    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then( response => {
        const CityNames = response.data.map(city => (
          {
            label: city.nome,
            value: city.nome
          }
        ));
        setCities(CityNames);
      })
  } , [selectedUf]);

  const navigation = useNavigation();

  function handleNavigationToPoints(){
    navigation.navigate('Points', {
      uf: selectedUf,
      city: selectedCity
    });
  }

  return (
    <ImageBackground
      source={require('../../assets/home-background.png')}
      style={styles.container}
      imageStyle={ { width:274, height:368 } }
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
      </View>

      <RNPickerSelect
            placeholder={{label:"estado"}}
            onValueChange={(value) => {
              setSelectedUf(value);
              setSelectedCity('');
            }}
            items={ufs}
      />

      <RNPickerSelect
            placeholder={{label:"cidade"}}
            onValueChange={(value) => setSelectedCity(value)}
            items={cities}
      />

      <Text>{selectedCity}{selectedCity !== '' && <Text> - </Text>}{selectedUf}</Text>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleNavigationToPoints}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#FFF" size={24}/>
            </Text>
          </View>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });




export default Home;