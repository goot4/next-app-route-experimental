
export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2 className={"mx-2 text-xl"}>展示Error错误发生时的fallback界面</h2>
      <div className={"m-4 p-4 border-2 rounded-lg"}>{children}</div>
    </div>
  );
}
