import { Text, Dialog, Button, Container, Box } from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/react";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "ボディビルダーハイ&ローゲーム" },
    { name: "description", content: "" },
  ];
};

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      style={{ background: "var(--gold-5)", borderRadius: "var(--radius-3)" }}
    >
      <Container size="4" align="center">
        <Box width="100%" height="100%" my="8">
          <img
            src="main-background.webp"
            alt="A house in a forest"
            style={{
              objectFit: "cover",
              width: "100%",
              borderRadius: "var(--radius-2)",
              margin: "auto",
            }}
          />
        </Box>

        {/* </AspectRatio> */}

        <Dialog.Root open={isModalOpen}>
          <Dialog.Content maxWidth="500px">
            <Dialog.Title>BodyBuilder Hight-Low Game</Dialog.Title>
            <Text as="p">
              1.
              左右のボディービルダーの身長・体重を比較し、右の画像の選手の筋肉量が高いか低いかを選択します。
            </Text>
            <Text as="p">
              2.
              正解の場合、次の問題に進みます。不正解の場合、ゲームオーバーです。
            </Text>
            <Text as="p" align="right">
              <Button>Game Start !</Button>
            </Text>
          </Dialog.Content>
        </Dialog.Root>
      </Container>
    </Box>
  );
}
