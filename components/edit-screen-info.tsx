import { H4, Paragraph, YStack } from 'tamagui';

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <YStack>
      <YStack alignItems="center" marginHorizontal="$6" gap="$1">
        <H4>Open up the code of this screen:</H4>
        <YStack borderRadius="$3" marginVertical="$1">
          <Paragraph>{path}</Paragraph>
        </YStack>
        <Paragraph>
          Change any of the text, save the file, and your app will automatically update.
        </Paragraph>
      </YStack>
    </YStack>
  );
}
