import Releases from "../../public/releases.json";
const arrayDeArrays = Object.entries(Releases).map(([key, value]) => {
  return [key, value];
});

export const allReleases: any = arrayDeArrays.map((release: any) => {
  const version = release[0];
  const information = release[1];
  const informationCleaned = {
    documentation: information.docs,
    notes: information.notes ?? "",
    stdDocs: information.stdDocs ?? "",
    source: {
      sourceBootstrap: information.bootstrap ?? "",
      src: information.src ?? "",
    },
    windows: {
      aarch64: information["aarch64-windows"] ?? "",
      x86_64: information["x86_64-windows"] ?? "",
      i386: information["i386-windows"] ?? "",
    },
    macos: {
      aarch64: information["aarch64-macos"] ?? "",
      x86_64: information["x86_64-macos"] ?? "",
    },
    linux: {
      aarch64: information["aarch64-linux"] ?? "",
      armv7a: information["armv7a-linux"] ?? "",
      i386: information["i386-linux"] ?? "",
      riscv64: information["riscv64-linux"] ?? "",
      x86_64: information["x86_64-linux"] ?? "",
      powerpc64le: information["powerpc64le-linux"] ?? "",
    },
    freebsd: {
      x86_64: information["x86_64-freebsd"] ?? "",
    },
  };
  return {
    version,
    information: informationCleaned,
  };
});
