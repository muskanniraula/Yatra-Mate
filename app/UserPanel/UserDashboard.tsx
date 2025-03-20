import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

// Define the type for a travel package
interface TravelPackage {
  id: string;
  name: string;
  locations: string[];
  estimatedTime: string;
  estimatedDistance: string;
  price: number;
}

export default function UserDashboard() {
  // Sample travel packages data
  const travelPackages: TravelPackage[] = [
    {
      id: "1",
      name: "Package Name",
      locations: [
        "Kathmandu Durbar Square",
        "Patan Durbar Square",
        "Baglamukhi Temple",
      ],
      estimatedTime: "3hr 45 mins",
      estimatedDistance: "24 km",
      price: 4600,
    },
    {
      id: "2",
      name: "Heritage Tour",
      locations: ["Swayambhunath", "Bouddhanath", "Pashupatinath"],
      estimatedTime: "4hr 30 mins",
      estimatedDistance: "28 km",
      price: 5200,
    },
    {
      id: "3",
      name: "Mountain View",
      locations: ["Nagarkot", "Dhulikhel", "Bhaktapur"],
      estimatedTime: "5hr 15 mins",
      estimatedDistance: "45 km",
      price: 6500,
    },
  ];

  // Render function for a travel package
  const renderTravelPackage = ({ item }: { item: TravelPackage }) => (
    <View style={styles.travelPackageCard}>
      <Text style={styles.packageName}>{item.name}</Text>

      <Text style={styles.tourLocationsTitle}>Tour Locations:</Text>
      {item.locations.map((location: string, index: number) => (
        <Text key={index} style={styles.tourLocation}>
          {index + 1}. {location}
        </Text>
      ))}

      <Text style={styles.estimatedTime}>
        Estimated Time: {item.estimatedTime}
      </Text>
      <Text style={styles.estimatedDistance}>
        Estimated Distance: {item.estimatedDistance}
      </Text>

      <Text style={styles.price}>
        Price: <Text style={styles.priceAmount}>Rs. {item.price}</Text>
      </Text>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.scheduleTripButton}>
          <Text style={styles.scheduleTripButtonText}>Schedule Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.findRiderButton}>
          <Text style={styles.findRiderButtonText}>Find Rider</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Main scrollable content */}
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>LOGO</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileIconText}>U</Text>
          </TouchableOpacity>
        </View>

        {/* Greeting */}
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>
            Hello, <Text style={styles.userName}>User</Text>
          </Text>
        </View>

        {/* Location Selection */}
        <TouchableOpacity style={styles.locationSelector}>
          <Ionicons name="location-outline" size={20} color="#000" />
          <Text style={styles.locationText} numberOfLines={1} ellipsizeMode="tail">
            Islington College Kathmandu
          </Text>
          <Ionicons name="chevron-forward" size={20} color="#000" />
        </TouchableOpacity>

        {/* Vehicle Selection */}
        <View style={styles.vehicleContainer}>
          <TouchableOpacity style={styles.vehicleCard}>
            <Image
              source={require("../../assets/images/bike-icon.png")}
              style={styles.vehicleIcon}
              defaultSource={require("../../assets/images/bike-icon.png")}
            />
            <Text style={styles.vehicleName}>Bike</Text>
            <Text style={styles.passengerCount}>1 Passenger</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.vehicleCard}>
            <Image
              source={require("../../assets/images/car-icon.png")}
              style={styles.vehicleIcon}
              defaultSource={require("../../assets/images/car-icon.png")}
            />
            <Text style={styles.vehicleName}>Car</Text>
            <Text style={styles.passengerCount}>2-5 Passengers</Text>
          </TouchableOpacity>
        </View>

        {/* Travel Package Section */}
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>Travel Packages</Text>
        </View>

        {/* Horizontal Scrollable Travel Packages */}
        <FlatList
          data={travelPackages}
          renderItem={renderTravelPackage}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.travelPackagesContainer}
          snapToAlignment="start"
          decelerationRate="fast"
          snapToInterval={width - 32 + 16} // Card width + right margin
        />
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.homeButtonActive}>
          <Ionicons name="home" size={18} color="#fff" />
          <Text style={styles.navButtonTextActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tripsButton}>
          <Ionicons name="document-text-outline" size={18} color="#fff" />
          <Text style={styles.navButtonText}>Trips</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  scrollView: {
    flex: 1,
    paddingBottom: 80, // Make space for bottom navigation
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileButton: {
    height: 36,
    width: 36,
    borderRadius: 18,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  profileIconText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  greeting: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  greetingText: {
    fontSize: 18,
  },
  userName: {
    fontWeight: "bold",
  },
  locationSelector: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 25,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  locationText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },
  vehicleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  vehicleCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  vehicleIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  vehicleName: {
    fontSize: 16,
    fontWeight: "500",
  },
  passengerCount: {
    fontSize: 12,
    color: "#666",
  },
  sectionTitle: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitleText: {
    fontSize: 18,
    fontWeight: "500",
  },
  travelPackagesContainer: {
    paddingLeft: 16,
    paddingRight: 8,
  },
  travelPackageCard: {
    backgroundColor: "#F5F9FF", // Light blue background as in the image
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    width: width - 32, // Screen width minus horizontal margins
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  packageName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2C6BED",
    marginBottom: 8,
  },
  tourLocationsTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  tourLocation: {
    fontSize: 14,
    color: "#333",
    marginBottom: 2,
  },
  estimatedTime: {
    fontSize: 14,
    marginTop: 8,
    color: "#333",
  },
  estimatedDistance: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    marginTop: 4,
    marginBottom: 16,
  },
  priceAmount: {
    color: "green",
    fontWeight: "bold",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scheduleTripButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: "#fff",
  },
  scheduleTripButtonText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 14,
  },
  findRiderButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    backgroundColor: "#0B264B",
    alignItems: "center",
  },
  findRiderButtonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 14,
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    gap: 8,
  },
  homeButtonActive: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0B264B",
    paddingVertical: 12,
    borderRadius: 25,
  },
  tripsButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9DB0C9", // Lighter blue for inactive button
    paddingVertical: 12,
    borderRadius: 25,
  },
  navButtonTextActive: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 8,
    fontWeight: "500",
  },
  navButtonText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 8,
  },
});