import SafeScreen from "@/components/SafeScreen";
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Slot } from 'expo-router'


export default function RootLayout() {
  return(
    <ClerkProvider tokenCache={tokenCache} publishableKey="pk_test_cmFyZS1mbGFtaW5nby0wLmNsZXJrLmFjY291bnRzLmRldiQ"> 
      <SafeScreen>
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  )
}
