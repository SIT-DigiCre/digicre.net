import { Card, CardContainer, CardTextBox } from "./Card";
import { LinkButton } from "./LinkButton";

export const JoinUs = () => {
  return (
    <Card id="join-us">
      <CardContainer>
        <CardTextBox>
          <h2 className="text-24-700">デジクリで活動しませんか？</h2>

          <div>
            <p>
              入部受付フォームからメールアドレスをご登録いただくと、デジクリへの入部方法や見学案内などのメールをお送りします。
            </p>
          </div>
        </CardTextBox>

        <LinkButton href="https://forms.gle/cY25Kc6fssqv2tZz9">
          入部受付フォーム
        </LinkButton>
      </CardContainer>
    </Card>
  );
};
