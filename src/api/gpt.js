// prompt이 사용자가 입력하는 채팅창이다.
export const CallGPT = async ({ prompt }) => {
  console.log(">>CallGPT");
  // GPT API Call

  /* 
    curl https://api.openai.com/v1/chat/completions \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -d '{
       "model": "gpt-3.5-turbo",
       "messages": [{"role": "user", "content": "Say this is a test!"}],
       "temperature": 0.7
     }'
  */

  const messages = [
    {
      role: "system",
      content:
        "너는 증상과 위험도를 평가하는 상담사야. 유저의 질문에 대한 설명과 상담을 진행하고 대답의 마지막에 증상을 한 단어로 말하고 위험도를 1~10으로 말해줘",
    },
    {
      // 여기 user는 사용자의 입력 즉, 채팅입력창이야
      role: "user",
      content: `
            """
            ${prompt}
            """`,
    },
  ];

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_GPT_API_KEY}`,
    },
    body: JSON.stringify({
      model: "ft:gpt-3.5-turbo-0613:personal::8JzAUoED",
      messages,
      temperature: 0.7,
      //   max_tokens: 1_000,
    }),
  });
  const responseData = await response.json();
  console.log("gpt.js>>responseData", responseData);

  const message = responseData.choices[0].message.content;

  return message;
};
