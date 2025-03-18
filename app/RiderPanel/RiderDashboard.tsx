// import React from "react";
// import {
//   SafeAreaView,
//   Text,
//   View,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   StatusBar,
//   FlatList,
//   Dimensions,
//   ViewStyle,
//   TextStyle,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { router } from "expo-router";

// // Define interfaces for our data types
// interface TripRequest {
//   id: string;
//   userName: string;
//   userInitial: string;
//   amount: string;
//   duration: string;
//   distance: string;
//   date: string;
//   pickup: string;
//   dropoff: string;
//   tourLocations: string[];
// }

// interface EarningsData {
//   id: string;
//   userName: string;
//   userInitial: string;
//   amount: string;
//   duration: string;
//   distance: string;
// }

// export default function RiderDashboard() {
//   // Sample trip request data
//   const tripRequests: TripRequest[] = [
//     {
//       id: '1',
//       userName: 'Muskan Niraula',
//       userInitial: 'M',
//       amount: 'Rs. 4600',
//       duration: '3hr 45 mins',
//       distance: '24 km',
//       date: 'December 12, 2024',
//       pickup: 'islington college Kathmandu',
//       dropoff: 'herald college Kathmandu',
//       tourLocations: [
//         'Kathmandu Durbar Square',
//         'Patan Durbar Square',
//         'Baglamukhi Temple'
//       ]
//     },
//     {
//       id: '2',
//       userName: 'Siddhartha Thapa',
//       userInitial: 'S',
//       amount: 'Rs. 3800',
//       duration: '2hr 30 mins',
//       distance: '18 km',
//       date: 'December 14, 2024',
//       pickup: 'Thamel',
//       dropoff: 'Patan Durbar Square',
//       tourLocations: [
//         'Swayambhunath Stupa',
//         'Garden of Dreams',
//         'Kathmandu Durbar Square'
//       ]
//     },
//     {
//       id: '3',
//       userName: 'Rajesh Hamal',
//       userInitial: 'R',
//       amount: 'Rs. 5200',
//       duration: '4hr 15 mins',
//       distance: '32 km',
//       date: 'December 15, 2024',
//       pickup: 'Tribhuvan Airport',
//       dropoff: 'Hotel Annapurna',
//       tourLocations: [
//         'Boudhanath Stupa', 
//         'Pashupatinath Temple',
//         'Bhaktapur Durbar Square'
//       ]
//     }
//   ];

//   // Sample earnings data
//   const earningsData: EarningsData[] = [
//     {
//       id: '1',
//       userName: 'Umesh Prasad Yadav',
//       userInitial: 'U',
//       amount: 'Rs. 4600',
//       duration: '3hr 45 mins',
//       distance: '24 km',
//     },
//     {
//       id: '2',
//       userName: 'Umesh Prasad Yadav',
//       userInitial: 'U',
//       amount: 'Rs. 4600',
//       duration: '3hr 45 mins',
//       distance: '24 km',
//     },
//   ];

//   // Trip request card renderer
//   const renderTripRequestCard = ({ item }: { item: TripRequest }) => (
//     <View style={styles.tripRequestCard}>
//       <View style={styles.tripRequestHeader}>
//         <View style={styles.userInfo}>
//           <View style={styles.userAvatar}>
//             <Text style={styles.userAvatarText}>{item.userInitial}</Text>
//           </View>
//           <Text style={styles.userName} numberOfLines={1} ellipsizeMode="tail">{item.userName}</Text>
//         </View>
//         <View style={styles.tripAmount}>
//           <Text style={styles.amountText}>{item.amount}</Text>
//           <Text style={styles.tripDetails}>{item.duration}</Text>
//           <Text style={styles.tripDetails}>{item.distance}</Text>
//         </View>
//       </View>

//       <View style={styles.tripDetailsContainer}>
//         <View style={styles.tripDateRow}>
//           <Ionicons name="calendar-outline" size={18} color="#666" />
//           <Text style={styles.tripDateText} numberOfLines={1}>Trip Date: {item.date}</Text>
//         </View>
        
//         <View style={styles.locationRow}>
//           <Ionicons name="location-outline" size={18} color="#666" />
//           <Text style={styles.locationLabel}>Pickup from: </Text>
//           <Text style={styles.locationValue} numberOfLines={1} ellipsizeMode="tail">{item.pickup}</Text>
//         </View>
        
//         <View style={styles.tourLocationsContainer}>
//           <View style={styles.locationRow}>
//             <Ionicons name="location-outline" size={18} color="#666" />
//             <Text style={styles.locationLabel}>Tour Locations:</Text>
//           </View>
//           <View style={styles.tourLocationsList}>
//             {item.tourLocations.map((location: string, index: number) => (
//               <Text key={index} style={styles.tourLocation} numberOfLines={1} ellipsizeMode="tail">
//                 {index + 1}. {location}
//               </Text>
//             ))}
//           </View>
//         </View>
        
//         <View style={styles.locationRow}>
//           <Ionicons name="location-outline" size={18} color="#666" />
//           <Text style={styles.locationLabel}>Drop off: </Text>
//           <Text style={styles.locationValue} numberOfLines={1} ellipsizeMode="tail">{item.dropoff}</Text>
//         </View>
//       </View>

//       <View style={styles.actionButtons}>
//         <TouchableOpacity style={styles.declineButton}>
//           <Text style={styles.declineButtonText}>Decline</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.acceptButton}>
//           <Text style={styles.acceptButtonText}>Accept</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   // Earnings card renderer
//   const renderEarningsCard = ({ item }: { item: EarningsData }) => (
//     <View style={styles.earningsCard}>
//       <View style={styles.earningsRow}>
//         <View style={styles.earningsUserInfo}>
//           <View style={styles.userAvatar}>
//             <Text style={styles.userAvatarText}>{item.userInitial}</Text>
//           </View>
//           <View style={styles.earningsUserDetails}>
//             <Text style={styles.userName} numberOfLines={1} ellipsizeMode="tail">{item.userName}</Text>
//             <Text style={styles.tripDetails}>{item.duration}</Text>
//             <Text style={styles.tripDetails}>{item.distance}</Text>
//           </View>
//         </View>
//         <Text style={styles.earningsAmount}>{item.amount}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />
      
//       {/* Main scrollable content */}
//       <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.logoText}>LOGO</Text>
//           <TouchableOpacity style={styles.profileButton}>
//             <Text style={styles.profileIconText}>P</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Greeting */}
//         <View style={styles.greeting}>
//           <Text style={styles.greetingText}>
//             Hello, <Text style={styles.riderName}>Rider</Text>
//           </Text>
//         </View>

//         {/* Location Selection */}
//         <TouchableOpacity style={styles.locationSelector}>
//           <Ionicons name="location-outline" size={20} color="#000" />
//           <Text style={styles.locationText} numberOfLines={1} ellipsizeMode="tail">
//             Islington College Kathmandu
//           </Text>
//           <Ionicons name="chevron-forward" size={20} color="#000" />
//         </TouchableOpacity>

//         {/* Trip Requests Section */}
//         <View style={styles.sectionHeaderContainer}>
//           <Text style={styles.sectionTitle}>Trip Requests</Text>
//         </View>
        
//         {/* Horizontal scrollable trip requests */}
//         <FlatList
//           data={tripRequests}
//           renderItem={renderTripRequestCard}
//           keyExtractor={(item) => item.id}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           contentContainerStyle={styles.tripRequestsList}
//           snapToAlignment="start"
//           decelerationRate="fast"
//           snapToInterval={Dimensions.get('window').width - 40}
//           ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
//         />

//         {/* Earnings Section */}
//         <View style={styles.earningsHeader}>
//           <Text style={styles.sectionTitle}>Earnings</Text>
//           <TouchableOpacity style={styles.earningsFilter}>
//             <Text style={styles.earningsFilterText}>This Week</Text>
//             <Ionicons name="chevron-down" size={16} color="#000" />
//           </TouchableOpacity>
//         </View>

//         {/* Earnings List */}
//         <FlatList
//           data={earningsData}
//           renderItem={renderEarningsCard}
//           keyExtractor={(item) => item.id}
//           scrollEnabled={false}
//           contentContainerStyle={styles.earningsList}
//         />
        
//         {/* Extra space at bottom to ensure scrolling works well with the bottom nav */}
//         <View style={styles.bottomSpace} />
//       </ScrollView>

//       {/* Fixed Bottom Navigation */}
//       <View style={styles.bottomNavigation}>
//         <TouchableOpacity style={styles.navItem}>
//           <Ionicons name="document-text-outline" size={24} color="#666" />
//           <Text style={styles.navText}>Earnings</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity style={styles.navItemActive}>
//           <Ionicons name="home" size={24} color="#fff" />
//           <Text style={styles.navTextActive}>Home</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity style={styles.navItem}>
//           <Ionicons name="map-outline" size={24} color="#666" />
//           <Text style={styles.navText}>Trips</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const { width } = Dimensions.get('window');
// const cardWidth = width - 40; // Card width with margins

// // Define the styles with proper TypeScript typing
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//   } as ViewStyle,
//   scrollView: {
//     flex: 1,
//   } as ViewStyle,
//   scrollContent: {
//     paddingBottom: 80,
//   } as ViewStyle,
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingTop: 10,
//     paddingBottom: 10,
//   } as ViewStyle,
//   logoText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   } as TextStyle,
//   profileButton: {
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//     backgroundColor: "#000",
//     justifyContent: "center",
//     alignItems: "center",
//   } as ViewStyle,
//   profileIconText: {
//     fontSize: 16,
//     color: "#fff",
//   } as TextStyle,
//   greeting: {
//     paddingHorizontal: 20,
//     marginBottom: 15,
//   } as ViewStyle,
//   greetingText: {
//     fontSize: 18,
//   } as TextStyle,
//   riderName: {
//     fontWeight: "bold",
//   } as TextStyle,
//   locationSelector: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginHorizontal: 20,
//     padding: 12,
//     backgroundColor: "#fff",
//     borderRadius: 25,
//     marginBottom: 20,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   } as ViewStyle,
//   locationText: {
//     flex: 1,
//     marginLeft: 10,
//     fontSize: 16,
//   } as TextStyle,
//   sectionHeaderContainer: {
//     paddingHorizontal: 20,
//     marginBottom: 10,
//   } as ViewStyle,
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "500",
//   } as TextStyle,
//   tripRequestsList: {
//     paddingLeft: 20,
//     paddingRight: 5,
//   } as ViewStyle,
//   tripRequestCard: {
//     width: cardWidth,
//     backgroundColor: "#EEF5FF",
//     borderRadius: 15,
//     padding: 15,
//     marginBottom: 10,
//   } as ViewStyle,
//   tripRequestHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//     marginBottom: 15,
//   } as ViewStyle,
//   userInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//     flex: 1,
//     marginRight: 10,
//   } as ViewStyle,
//   userAvatar: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: "#000",
//     marginRight: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   } as ViewStyle,
//   userAvatarText: {
//     fontSize: 16,
//     color: "#fff",
//   } as TextStyle,
//   userName: {
//     fontSize: 16,
//     fontWeight: "500",
//     flex: 1,
//   } as TextStyle,
//   tripAmount: {
//     alignItems: "flex-end",
//   } as ViewStyle,
//   amountText: {
//     fontSize: 16,
//     fontWeight: "500",
//     color: "#00A651",
//   } as TextStyle,
//   tripDetails: {
//     fontSize: 14,
//     color: "#666",
//   } as TextStyle,
//   tripDetailsContainer: {
//     // Renamed from tripDetails to avoid conflict with tripDetails text style
//   } as ViewStyle,
//   tripDateRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   } as ViewStyle,
//   tripDateText: {
//     marginLeft: 8,
//     fontSize: 14,
//     color: "#666",
//     flex: 1,
//   } as TextStyle,
//   locationRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 5,
//     flexWrap: "nowrap",
//   } as ViewStyle,
//   locationLabel: {
//     marginLeft: 8,
//     fontSize: 14,
//     color: "#666",
//   } as TextStyle,
//   locationValue: {
//     fontSize: 14,
//     color: "#000",
//     flex: 1,
//   } as TextStyle,
//   tourLocationsContainer: {
//     marginBottom: 10,
//   } as ViewStyle,
//   tourLocationsList: {
//     paddingLeft: 26,
//   } as ViewStyle,
//   tourLocation: {
//     fontSize: 14,
//     marginBottom: 3,
//     paddingRight: 5,
//   } as TextStyle,
//   actionButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 15,
//   } as ViewStyle,
//   declineButton: {
//     flex: 1,
//     paddingVertical: 12,
//     borderRadius: 25,
//     borderWidth: 1,
//     borderColor: "#FF3B30",
//     alignItems: "center",
//     marginRight: 10,
//   } as ViewStyle,
//   declineButtonText: {
//     color: "#FF3B30",
//     fontWeight: "500",
//   } as TextStyle,
//   acceptButton: {
//     flex: 1,
//     paddingVertical: 12,
//     borderRadius: 25,
//     backgroundColor: "#00A651",
//     alignItems: "center",
//   } as ViewStyle,
//   acceptButtonText: {
//     color: "#fff",
//     fontWeight: "500",
//   } as TextStyle,
//   earningsHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginHorizontal: 20,
//     marginBottom: 10,
//     marginTop: 20,
//   } as ViewStyle,
//   earningsFilter: {
//     flexDirection: "row",
//     alignItems: "center",
//   } as ViewStyle,
//   earningsFilterText: {
//     marginRight: 5,
//     fontSize: 14,
//     color: "#666",
//   } as TextStyle,
//   earningsList: {
//     paddingHorizontal: 20,
//   } as ViewStyle,
//   earningsCard: {
//     backgroundColor: "#fff",
//     borderRadius: 15,
//     padding: 15,
//     marginBottom: 10,
//   } as ViewStyle,
//   earningsRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   } as ViewStyle,
//   earningsUserInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//     flex: 1,
//     marginRight: 10,
//   } as ViewStyle,
//   earningsUserDetails: {
//     flex: 1,
//   } as ViewStyle,
//   earningsAmount: {
//     fontSize: 16,
//     fontWeight: "500",
//     color: "#00A651",
//   } as TextStyle,
//   bottomNavigation: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     backgroundColor: "#fff",
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: "#e0e0e0",
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//   } as ViewStyle,
//   navItem: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 5,
//   } as ViewStyle,
//   navItemActive: {
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#0A214A",
//     paddingVertical: 5,
//     paddingHorizontal: 25,
//     borderRadius: 25,
//   } as ViewStyle,
//   navText: {
//     color: "#666",
//     fontSize: 12,
//     marginTop: 3,
//   } as TextStyle,
//   navTextActive: {
//     color: "#fff",
//     fontSize: 12,
//     marginTop: 3,
//   } as TextStyle,
//   bottomSpace: {
//     height: 80, // Provides extra space at the bottom for scrolling
//   } as ViewStyle,
// });