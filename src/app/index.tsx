import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import Logo from "@/assets/images/logo.png";
import LandingPage1 from "@/assets/images/landing-page/1.jpg";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaContext } from "react-native-safe-area-context";
import { SimpleBookingType } from "@/utils/zod";
import { ArrowDown, ChevronDown } from "lucide-react-native";

export default function LandingScreen() {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(
    new Date(Date.now() + 24 * 60 * 60 * 1000), // +1 day
  );
  const [guests, setGuests] = useState<SimpleBookingType["guests"]>({
    adults: 1,
    children: 0,
  });
  const [showCheckInDate, setShowCheckInDate] = useState(false);
  const [showCheckOutDate, setShowCheckOutDate] = useState(false);

  const onChange = (_event: any, selectedDate?: Date) => {
    if (showCheckInDate) {
      setShowCheckInDate(false);
      if (selectedDate) {
        setCheckInDate(selectedDate);
      }
    }
    if (showCheckOutDate) {
      setShowCheckOutDate(false);
      if (selectedDate) {
        setCheckOutDate(selectedDate);
      }
    }
  };

  return (
    <ScrollView className="flex-1">
      <ImageBackground
        className="object-cover flex gap-y-36 items-center justify-center pb-36"
        resizeMode="cover"
        source={LandingPage1}
      >
        <View className="flex items-center p-5">
          <Image
            source={Logo}
            className="w-30 h-30 rounded-lg mb-2"
            height={150}
            width={150}
          />
        </View>

        <View className="flex items-center justify-center gap-8">
          <Text className="text-center text-white text-3xl">
            WELCOME TO VINTANO HOTEL
          </Text>
          <Text className="text-center text-[#ab916c] text-lg font-bold">
            EXPERIENCE UNPARALLELED LUXURY!
          </Text>
          <Pressable className="text-white bg-[#ab916c] px-6 py-4">
            <Text className="text-xl text-white">Discover More</Text>
          </Pressable>
        </View>

        <View className="flex items-center justify-center gap-10 px-10 w-full">
          <View className="flex items-center justify-center border border-[#ab916c] w-full px-2">
            <Pressable
              className="flex flex-row p-6 border w-full border-[#ab916c] -mt-2 justify-between"
              onPress={() => setShowCheckInDate(true)}
            >
              <Text className="text-center text-lg text-white">Check In</Text>
              <View className="flex flex-row">
                <Text className="text-center text-sm text-white">
                  {checkInDate.toDateString()}
                </Text>
                <ChevronDown color="white" size={14} />
              </View>
            </Pressable>
            <Pressable
              className="flex flex-row p-6 border w-full border-[#ab916c] -mt-2 justify-between"
              onPress={() => setShowCheckInDate(true)}
            >
              <Text className="text-center text-lg text-white">Check In</Text>
              <View className="flex flex-row">
                <Text className="text-center text-sm text-white">
                  {checkOutDate.toDateString()}
                </Text>
                <ChevronDown color="white" size={14} />
              </View>
            </Pressable>
            <Pressable
              className="flex flex-row p-6 border w-full border-[#ab916c] -mt-2 justify-between"
              onPress={() => setShowCheckInDate(true)}
            >
              <Text className="text-center text-lg text-white">Guests</Text>
              <View className="flex flex-row">
                <Text className="text-center text-sm text-white">
                  {guests.adults} Adult, {guests.children} Child
                </Text>
                <ChevronDown color="white" size={14} />
              </View>
            </Pressable>
            <Pressable className="flex flex-row p-6 border w-full border-[#ab916c] -mb-2">
              <Text className="text-center text-lg text-white w-full">
                Check Availabilty
              </Text>
            </Pressable>
            {showCheckInDate && (
              <DateTimePicker
                value={checkInDate}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={onChange}
              />
            )}
          </View>
        </View>
      </ImageBackground>

      <View className="bg-white h-[50vh] px-5 py-10">
        <Text className="text-3xl text-center">
          WHERE ELEGANCE MEETS EXCELLENCE
        </Text>

        <View className="relative h-[40vh"></View>
      </View>
    </ScrollView>
  );
}
