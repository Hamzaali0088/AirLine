import { MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomdScreen() {
    return (
        <SafeAreaView className='bg-secondary flex-1'>
            <StatusBar style='light' />
            <View className='h-full '>
                <View className='w-full px-4 items-center my-8'>
                    <Animated.View
                        entering={FadeInDown.duration(1000).springify()}

                        className='flex-row justify-between items-center'>
                        <MaterialCommunityIcons name='airplane' size={24} color='#0DA095' />
                        <Text className='text-white text-xl leading-[60px] pl-1'>STACKS</Text>
                        <Text className='text-primary text-xl leading-[60px] italic'>FLY</Text>
                    </Animated.View>
                    <Animated.View className=''
                        entering={FadeInDown.duration(1000).delay(200).springify()}
                    >
                        <Text className='text-white text-[52px] font-medium leading-[60px] mt-24'>
                            Discover your Dream Flight Easliy
                        </Text>
                    </Animated.View>
                    <Animated.View className='mt-4'
                        entering={FadeInDown.duration(1000).delay(400).springify()}
                    >
                        <Text className='text-neutral-300 text-lg font-medium leading-[38px]'>
                            Find an easy way to buy airplaine tickets with just a few clicks in the application
                        </Text>
                    </Animated.View>
                    <Animated.View
                        className='mt-4 w-full px-4'
                        entering={FadeInDown.duration(1000).delay(600).springify()}
                    >
                        <Pressable
                            onPress={() => router.push('/(tabs)')}

                            className='bg-primary rounded-lg flex justify-center items-center   w-full px-4 py-2'>
                            <Text className='text-white text-xl font-medium leading-[38px]'>Discover</Text>
                        </Pressable>
                    </Animated.View>
                    <View className='mt-4 w-full px-4 flex-row justify-center items-center gap-2'>
                        <Text className='text-neutral-300 text-lg font-medium leading-[38px]'>Don't have an account?</Text>
                        <Text className='text-white text-lg font-semibold leading-[38px]'>Register</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}