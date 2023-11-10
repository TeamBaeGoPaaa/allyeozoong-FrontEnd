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
      content: ` You are now a doctor.
      I'm going to ask you a series of questions, and in 5 lines or less, describe the symptoms you can infer from those questions,
      At the end, give me a risk level of 1-10 with a category for that question.
      
      For example.
      "I'm having chest pain. What could be wrong?"
      
      [answer] : Chest pain can be caused by abnormalities of the heart and lungs, as well as abnormalities of the skin, muscle, cartilage, and bone in the chest area, abnormalities of large blood vessels, inflammation of the esophagus or stomach, and abnormalities of the gallbladder.
      Chest pain can also be caused by a myocardial infarction, in which case it lasts for more than 30 minutes and is characterized by a feeling of being squeezed or crushed by a machine, pain like being stabbed in the chest with a hot chopstick, sometimes nausea and vomiting, dizziness, severe shortness of breath, unconsciousness, shock, and heart attack, so you should take special care and visit the nearest hospital emergency room immediately if this happens.
      
      [related_symptom] : Chest pain
      [risk]: 9
      
      Answer me this way.`,
    },
    // {
    //   // 여기 system은 GPT 너는 심리 상담가야! 라고 전제 넣는거
    //   role: "system",
    //   content: `You are a psychological counselor who writes and analyzes emotional diaries. Proceed in the following order.`,
    // },
    {
      // role 에 user의 역할 : ChatGPT에 일반적으로 질문하는 질문
      // ex) 잠을 못 자서 피곤한 내 상태를 파악해봐
      // 여기 user는 GPT에게 대답 형태를 1 ~ 8까지의 형식으로 대답하라고
      // 입력하고 한국어로 번역하고 다음 JSON 형식으로 출력을 사용합니다.
      // 진짜 GPT에 채팅 넣는다고 생각하면 됨
      role: "user",
      content: `
          Translate into Korean and Use the output in the following JSON format:
          { 
              answer: here is [answer],
              related_symptom: here is [related_symptom],
              risk: here is [risk],
          } `,
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
