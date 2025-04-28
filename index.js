const { Langfuse } = require("langfuse");

const langfuse = new Langfuse();

langfuse.debug();

const trace = langfuse.trace({
  name: "my-AI-application-endpoint",
});

// Example generation creation
const generation = trace.generation({
  name: "chat-completion",
  model: "gpt-4o",
  modelParameters: {
    temperature: 0.9,
    maxTokens: 2000,
  },
  input: { test: 1 },
});

// End generation - sets endTime
generation.end({
  output: { test: 2 },
});

langfuse.shutdownAsync();
