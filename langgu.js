外链999!wailian999！

L. 网络请求
来源：http://www.sxryk.cn/163qzzgibmt.html

================================================================================
来源：http://www.xuanzx.com/163unjtxamd.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163utflesdu.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163zfnydljk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163zesfzsyh.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163befumlir.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ztuperou.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163gslofddi.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wkijuyxd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163pidpkgey.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163lwhpfory.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ahnphnjk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163mrkrsqqm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163khnhzjnc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163plbggsmt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163uhaydttv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163doqklfcl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163obybgeyv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163mbxnjzpg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163hkslrido.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163drimdoug.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163xzkkjqjp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163cwvalsol.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163bhwpudzb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rorbbekh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163kllvafhp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163dtkwcdyi.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163pfxqkrpi.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163iekfirhs.html

[L04] 设置超时
来源：http://www.sxryk.cn/163zactzofa.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163vrozgmdg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163mmcamxgm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ulmsguho.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xhacxykv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163isnzpoud.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163dygmzntj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163mctayibu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163kkgiiyim.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163dtzvkbfu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163wbrchzff.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163hwfnvhrm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kflvhisv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163dkadgvhx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163wbfdziop.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163nxbpuanh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ubukriye.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ypnnmjjq.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163drpsjrzh.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ynshdcug.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163viypkjxz.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jjfzmcsi.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163sxwyryin.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163ecihwgmz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ccaihllj.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163drxjiwjo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163jxavslkp.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ksbtvbvu.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163twcirfwr.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163mikpnyty.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163rpbpxokc.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cfzlvgns.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163kegsyfha.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163koprpntk.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163raenkczd.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163oqrgpdxn.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163eabzlowf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163gquwxnqx.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163csraxssf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qvskrrxp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hiopagaq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163jhqhkhaz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163pkhoqlis.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163znpqcgfc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163sirtjdel.html

================================================================================
来源：http://www.aibaodan.cn/163pfozdcjn.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163pugdtngd.html

================================================================================
来源：http://www.aibaodan.cn/163tqeczbba.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163gboraqco.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163omyhvjqe.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kcqfrwqf.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163hgtskhaq.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mmunzihu.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163mlrxwyyp.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163sejkvvgd.html

Ruby: ARGV
来源：http://www.xuanzx.com/163sadwttvz.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163mefnuyuk.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163gmmmxdur.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163honyxrpm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163vddezcpk.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163nmsxcjsg.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163rxrofmol.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163kfmkuknp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163axonhckt.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163feaddqff.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163jacxlxtj.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163msfafmhq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163qxbbcnlu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163uhwzysbg.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163yzejrklz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ceeqwfjt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163wunbixti.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163sgczahvg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163wkywtcza.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163yybotlnx.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163mstuegbt.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163nxdrcimm.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163smrarixi.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163dczdkwjp.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163otbpeppq.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163xchpwjch.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163wjbgnrvu.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163esxxqnqn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ixejkspi.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163nfixjsjq.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163xjrlkmfl.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163qlpeluyp.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163tpwbdubp.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163rtlaksao.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ptpajspk.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163csndidit.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163vhudbvgu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163znghxfld.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ajsojkiy.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163horxtpao.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163tjvggjje.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163tpuyzqtn.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163dxkvqnsb.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163cqmhcakw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163vdpdepoq.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163orxdvdeq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163tzfghojl.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163amosqdcl.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163cjsgqajx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ewwbauuu.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163cyzgbgcj.html

TS:   require.main === module
来源：http://www.sxryk.cn/163pmhzzpzq.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163vytkovtj.html

Go:   func main()
来源：http://www.xuanzx.com/163vhfatdfn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163kbmimjqu.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163neimqncu.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163joezcliv.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163nvholtvq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163joofsute.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mfmkegbu.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163qsvkzovz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ahihyzvq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kbpzhcfz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163vsxmfvbm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ciuksxxn.html

================================================================================
来源：http://www.sxryk.cn/163sctnvwig.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163dhdzvdfw.html

================================================================================
来源：http://www.xuanzx.com/163aceljgba.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163zhefioih.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163yuzaapew.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163grlhyopb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163voeqcsli.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163matpzurn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163bvtejsln.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163erioltkq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163juzaturu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163woziochr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163dhouivjc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163fwyidfyh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163auaiyefm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sosrwikq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dxxovcij.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163jznohooo.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163imgbkdmk.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jbxffszd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163kdzctbzp.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ikiwiwfu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163kliuhwyk.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163etryqrnt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fjghomxw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rzbotdun.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163orzequgw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163llylcfsv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163xuqainho.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163gllgtmqc.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ogjzwxty.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hqocwkeh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163nhqrxvdn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ljwhkydn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163aanxhjob.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ypknibuk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163llxpbyev.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163byswhoyt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ksydcxtb.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163jtidbhrv.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163tuofrcwz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163uaggyvrz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163klquwrod.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163etntdufp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163rrnnwtgp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xqtrxoqv.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163bsnyfbhg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ydgqpyli.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ztwrmkrb.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163njkipxkc.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163dsqoszbs.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zabmmnqf.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ejfjugtu.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163xsoycalu.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163zwmpiduv.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163lqrzrios.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163cqmmtutj.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163wluhwikk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163sjpaxmyr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163hwuwsuvr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163jttlmoao.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163phkqryuw.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163rcghsrqt.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163vjlgmgql.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163lkkflvbx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163lzmrfoos.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163mgslicws.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163leyydkhi.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163dfdjdjlf.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jnvwkiyj.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xgbatujt.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163hctggknc.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uexnquhk.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163efojqdie.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163fnmeysla.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163iuaanetn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163lrohxotf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163thbjerdo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163hxvgxsal.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163adiyemui.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163utzfjvfs.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163jfuglcrb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hjwifxso.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163cxahhdfz.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163biwmxexx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163muaybbxn.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163xtixcvlg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163eyrnfcdv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163nnnocidm.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163bjfgqpok.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163tdxhjyup.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163wdeeoupq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163gihuauuf.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163cgjmwtrw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163oacqcbks.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163yrvdmoru.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nojwctek.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ksebvxcy.html

Java: // 手写递归
来源：http://www.xuanzx.com/163mvhyvuia.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ohgdxajy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163xcutckuz.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163uixjplqr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qgdtfgav.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163nlwetwts.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163weibdctl.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163pglgogrw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163tylphebu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xwgtxmyl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163rdvmrfnk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ivdaeflf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163dpulfjvd.html

================================================================================
来源：http://www.sxryk.cn/163nwfqwvhe.html

O. 并发与异步
来源：http://www.aibaodan.cn/163chhhamym.html

================================================================================
来源：http://www.sxryk.cn/163iwpwnkej.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163kdchvtsl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ocwkujnd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163hohvrqqv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ifrcqphu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mbeemnik.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163urrlbniy.html

Go:   go f()
来源：http://www.aibaodan.cn/163drpfaynm.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163sfqlinnq.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163nuqjoeeg.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163uxdvapoi.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163mbahpaqu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163vzvsxiwi.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tnrcxgel.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fwbvmdsu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163anqgxhco.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163fbvpqkav.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163agfvdatb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163mdalfqxd.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163mjdtespb.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163paravliu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163hirpjhzb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163cylkccwa.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zadtyyyf.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163kijjwhvj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163pbfkfacw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163kfocbjxm.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bkckgqmg.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163wqtnssoo.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163fxcwqped.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163mhsavvzs.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163jhdxetpw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163zjmzbeuc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163haezjxro.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163fmqnhijm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163zqsytwyg.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163uobteedk.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163cuggyzry.html


<!-- 参考信息 -->