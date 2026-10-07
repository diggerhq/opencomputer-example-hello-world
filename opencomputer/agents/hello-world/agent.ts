import { useInput, useModel } from "@opencomputer/agent"

export default function Agent() {
  const input = useInput()
  useModel("anthropic/claude-sonnet-4.6")

  return "respond with only one word: BLAHHHH"
}
