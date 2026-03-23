"use client";

import { useEffect, useState } from "react";

const TERMINAL_LINES = [
  "$ npm i -g @stackr/cli",
  "",
  "# generates a wallet + API key for your agent",
  "$ Stackr login",
  "",
  "# launch a token for free",
  "$ Swap tokens easily",
  "",
  "# Buy into your favorite tokens as fast as possible",
];

export function AnimatedTerminal() {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= TERMINAL_LINES.length) {
      return;
    }

    const currentLine = TERMINAL_LINES[currentLineIndex];
    if (typeof currentLine !== "string") {
      return;
    }

    const typingSpeed = 30;

    const timer = setTimeout(() => {
      if (currentCharIndex < currentLine.length) {
        setDisplayedText((prev) => {
          const newText = [...prev];
          if (newText[currentLineIndex] === undefined) {
            newText[currentLineIndex] = "";
          }
          newText[currentLineIndex] += currentLine[currentCharIndex];
          return newText;
        });
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className="w-full max-w-2xl rounded-lg border border-border bg-foreground font-mono text-sm text-background pb-12 md:pb-16">
      <div className="mb-4 bg-muted/10 top-0 py-4 px-4 flex items-center gap-3 w-full">
        <div className="flex gap-2">
          <div className="size-3 rounded-full bg-red-500/70" />
          <div className="size-3 rounded-full bg-yellow-500/70" />
          <div className="size-3 rounded-full bg-green-500/70" />
        </div>
        <span className="text-xs text-background">stackr-cli</span>
      </div>

      <div className="space-y-1 px-4 md:px-6">
        {displayedText.map((line, index) => (
          <div
            key={index}
            className={`whitespace-pre-wrap break-words text-xs leading-relaxed md:text-sm ${
              typeof line === "string" && line.startsWith("#")
                ? "text-muted-foreground"
                : ""
            }`}
          >
            {typeof line === "string" && line.startsWith("$") ? (
              <>
                <span className="text-primary">$</span>
                <span className="text-background">{line.slice(1)}</span>
              </>
            ) : (
              line
            )}
            {index === displayedText.length - 1 &&
              currentLineIndex < TERMINAL_LINES.length && (
                <span className="ml-1 inline-block size-2 animate-pulse bg-primary" />
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
