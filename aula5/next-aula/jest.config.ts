import { getModuleNamedExports } from "next/dist/build/swc/generated-native";

export default {
  preset: "ts-jest",
  testEnviroment: "jsdom",
  transform: {
    "^+\\.tsx?$": ["ts-jest",
      {
        tsconfig: {
          jsx: "react-jsx",
        },
      },
    ]
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  ModuleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1"
  },
};