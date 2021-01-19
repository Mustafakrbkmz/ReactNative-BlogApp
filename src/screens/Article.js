import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';

const DATA = [
  {
    id: '1',
    Photo: '/src/img/OTT.jpeg',
    title:
      'OTT platformları',
    content:
      'Abone sayısı artan OTT platformları zengin içerikleri ile öne çıkmakta; ancak kullanıcı deneyimini artırmak için çoklu cihazdan izleme, UX/UI deneyimi ve sunucu bağlantıları da daha önemli hale geliyor.',
    liked: 0,
    CreatedDate: '14.01.2021',
  },
  {
    id: '2',
    Photo: '../img/digital_dunya_logo.png',
    title: 'Evden Çalışma',
    content:
      'Evden çalışmayı Eylül 2021 e kadar uzatan Google, Hibrit çalışmayı test edecek',
    liked: 0,
    CreatedDate: '13.01.2021',
  },
  {
    id: '3',
    Photo: '',
    title: 'Google Çalışanları',
    content:
      'Daha önce çalışanlara Temmuz 2021 e kadar evden çalışabileceklerini söyleyen Google CEO su Sundar Pichai, bu süreci Eylül 2021 e kadar uzattı. Şirket bu esnada hibrit çalışma modelini de kalıcı hale getirmeyi planlıyor. Esnek çalışma haftaları düzenlemeye başlayacak olan şirket, çalışanlara mail atarak konu hakkında bilgilendirdi.',
    liked: 0,
    CreatedDate: '12.01.2021',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text onPress={()=>alert("Detaylar hazır değil")}
    
     style={styles.title}>{title}</Text>
  </View>
);

function Article() {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#82f230',

    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Article;
