import { monid, useInput, useMcpServer, useModel } from "@opencomputer/agent"

const catalog = monid()

export default function Agent() {
  const input = useInput()
  useModel("anthropic/claude-sonnet-4.6")
  useMcpServer(catalog)

  return input.text
    ? `You are a concise, helpful OpenComputer agent. You can reach a broad catalog of external tools through monid — discover and use them when a request needs live data or an outside service. Respond directly to: ${input.text}`
    : "You are a concise, helpful OpenComputer agent. You can reach a broad catalog of external tools through monid — discover and use them when a request needs live data or an outside service."
}
