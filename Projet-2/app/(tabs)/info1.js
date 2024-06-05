import { Text, View, StyleSheet,ScrollView,TouchableOpacity, Image , Dimensions } from "react-native";
import LogoAsso from "./../../assets/LogoAsso.png"

const {width}= Dimensions.get('window');

export default function InfoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.content}>
      <Text style={styles.heading}>Qui sommes nous ?</Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum velit nec sem pulvinar, 
        ac aliquam est fermentum. Integer eget lacinia massa. Vestibulum ante ipsum primis in faucibus 
        orci luctus et ultrices posuere cubilia curae; Quisque ac ligula id mauris dignissim dictum non 
        vel justo. Curabitur venenatis justo et sem suscipit, eget tempor urna egestas.
      </Text>
      <Text style={styles.paragraph}>
        Morbi malesuada turpis a massa faucibus, in ultricies felis euismod. Sed in odio sed felis auctor 
        aliquam. Integer nec mi et dui cursus suscipit. Vestibulum in leo vitae sapien porttitor eleifend. 
        Cras et dui nec quam gravida pellentesque a at purus. Integer sed ornare orci.
      </Text>
      <Text style={styles.paragraph}>
        Praesent et ante pharetra, laoreet dolor ac, volutpat massa. Etiam sed sapien dui. Cras efficitur 
        dui in dolor condimentum, et sagittis dolor hendrerit. Aliquam erat volutpat. Nulla facilisi. 
        Suspendisse potenti.
      </Text>
      <Image
          source={LogoAsso}
          style={styles.image}
          resizeMode="contain"
        />
      <TouchableOpacity style={styles.linkContainer} onPress={() => navigation.navigate('MentionsLegales')}>
        <Text style={styles.linkText}>Mentions Légales</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
  linkContainer: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  linkText: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },

  backgroundImage:{
      width:320,
      height:480,
  },

  image: {
    width: width -40,
    marginBottom: 20,
    borderRadius: 10,
  },
});
