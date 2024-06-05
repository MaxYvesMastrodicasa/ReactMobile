import { StyleSheet, ScrollView, Text, View } from "react-native";

export default function MentionsLegalesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.content}>
      <Text style={styles.heading}>Mentions Légales</Text>

      <Text style={styles.subHeading}>Informations Générales</Text>
      <Text style={styles.paragraph}>
        Nom de l'ONG : Sauver des Vies
      </Text>
      <Text style={styles.paragraph}>
        Adresse : 123 Rue de l'Exemple, 75000 Paris, France
      </Text>
      <Text style={styles.paragraph}>
        Téléphone : +33 1 23 45 67 89
      </Text>
      <Text style={styles.paragraph}>
        Email : contact@ongexemple.org
      </Text>
      <Text style={styles.paragraph}>
        Site Web : www.ongexemple.org
      </Text>

      <Text style={styles.subHeading}>Directeur de la Publication</Text>
      <Text style={styles.paragraph}>
        Nom : Jean Dupont
      </Text>
      <Text style={styles.paragraph}>
        Email : jean.dupont@ongexemple.org
      </Text>

      <Text style={styles.subHeading}>Hébergement</Text>
      <Text style={styles.paragraph}>
        Hébergeur : Hébergeur Exemple
      </Text>
      <Text style={styles.paragraph}>
        Adresse : 456 Avenue de l'Hébergement, 75000 Paris, France
      </Text>
      <Text style={styles.paragraph}>
        Téléphone : +33 1 98 76 54 32
      </Text>
      <Text style={styles.paragraph}>
        Site Web : www.hebergeurexemple.com
      </Text>

      <Text style={styles.subHeading}>Propriété Intellectuelle</Text>
      <Text style={styles.paragraph}>
        Le contenu du site www.ongexemple.org, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de l'ONG Exemple à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
      </Text>

      <Text style={styles.subHeading}>Protection des Données Personnelles</Text>
      <Text style={styles.paragraph}>
        Conformément à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification et de suppression des données personnelles vous concernant que vous pouvez exercer en nous contactant à l'adresse email : dpo@ongexemple.org.
      </Text>

      <Text style={styles.subHeading}>Cookies</Text>
      <Text style={styles.paragraph}>
        Le site www.ongexemple.org peut-être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez.
      </Text>

      <Text style={styles.subHeading}>Liens Hypertextes</Text>
      <Text style={styles.paragraph}>
        Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de l'ONG Exemple.
      </Text>

      <Text style={styles.subHeading}>Litiges</Text>
      <Text style={styles.paragraph}>
        Les présentes conditions du site www.ongexemple.org sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de l'ONG. La langue de référence, pour le règlement de contentieux éventuels, est le français.
      </Text>
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
  },

  content: {
    flex: 1,
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
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
});