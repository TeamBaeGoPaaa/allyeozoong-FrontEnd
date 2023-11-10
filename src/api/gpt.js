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
      // role 에 system의 역할 : ChatGPT에게 전제, 배경설명을 넣는거다.
      // ex) 너는 이제부터 성/건강 의료진이야!
      // 여기 system은 이미지를 출력하라고 전제 넣는거
      role: "system",
      content: `## INFO ##
        you can add images to the reply by URL, Write the image in JSON field 
        Use the Unsplash API (https://source.unsplash.com/1600x900/?). the query is just some tags that describes the image ## DO NOT RESPOND TO INFO BLOCK ##`,
    },
    {
      // 여기 system은 GPT 너는 심리 상담가야! 라고 전제 넣는거
      role: "system",
      content: `You are a psychological counselor who writes and analyzes emotional diaries. Proceed in the following order.`,
    },
    {
      // role 에 user의 역할 : ChatGPT에 일반적으로 질문하는 질문
      // ex) 잠을 못 자서 피곤한 내 상태를 파악해봐
      // 여기 user는 GPT에게 대답 형태를 1 ~ 8까지의 형식으로 대답하라고
      // 입력하고 한국어로 번역하고 다음 JSON 형식으로 출력을 사용합니다.
      // 진짜 GPT에 채팅 넣는다고 생각하면 됨
      role: "user",
      content: `1. [title] : Think of the diary title after understanding the [events] separated by """ at the bottom.
          2. [summarize] : summarize events in order with one line sentence.
          3. [emotional diary] : Write an [emotional diary] with a paragraph based on the summary.
          4. [evaluates] : The written emotional [evaluates], using explore the unconscious based on the contents of the [emotional diary].
          6. [Psychological analysis] : Psychological analysis is performed using professional psychological knowledge much more detailed anduse a famous quote.
          7. [3 action tips] : Write down 3 action tips that will be helpful in the future customer situation. The three action tips must beconverted into JSON Array format.
          8. [image] : Create an image by making the contents so far into one keyword.
          
          
          Translate into Korean and Use the output in the following JSON format:
          { 
              title: here is [title],
              thumbnail: here is [image],
              summary: here is [summarize]
              emotional_content: here is [emotional diary],
              emotional_result: here is [evaluates],
              analysis: here is [Psychological analysis],
              action_list: here is [3 action tips],
          }
          
          [events]:`,
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
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.7,
      //   max_tokens: 1_000,
    }),
  });
  const responseData = await response.json();
  console.log(">>responseData", responseData);

  const message = responseData.choices[0].message.content;

  return message;
};
