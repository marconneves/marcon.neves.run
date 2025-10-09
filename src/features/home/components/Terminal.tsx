export function Terminal() {
  return (
    <div className="flex-1 w-full m-auto hidden md:block">
      <div className="w-full max-w-[550px] h-64 p-6 rounded-xl border-[1.5px] border-solid border-gray-800 inline-flex flex-col justify-start items-start gap-4">
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="size- flex justify-start items-center gap-2.5">
            <div className="size-3.5 bg-red-500 rounded-full" />
            <div className="size-3.5 bg-yellow-500 rounded-full" />
            <div className="size-3.5 bg-green-500 rounded-full" />
          </div>
          <div className="justify-start text-gray-500 text-sm font-normal font-code">zsh</div>
        </div>
        <div className="w-full h-[1.5px] bg-gray-800" />
        <div className="max-w-max self-stretch justify-start">
          <span className="text-sky-500 text-sm font-normal font-['Fira_Code']">marcon@neves</span>
          <span className="text-green-400 text-sm font-normal font-['Fira_Code']">:</span>
          <span className="text-sky-500 text-sm font-normal font-['Fira_Code']">~</span>
          <span className="text-green-400 text-sm font-normal font-['Fira_Code']">$ terraform init</span>
        </div>
      </div>
    </div>
  );
}