外链999!wailian999！

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163pwflvhwz.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163qcemdoyr.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163dnunmxhh.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163dfrxpzjs.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163rlyilupo.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ihspuavm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163yyvzjmoy.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163dsofhocl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163xgkwmsry.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163clujzkry.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jiapmwrc.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163rfgxppsb.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163qyjtsrdf.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163csiqwzpy.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163xxemwswn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163jlbhbycg.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ryltbssd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163yfbbcdnf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ldqiraxp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qbgahqnt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163quolbnxm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163gxklsjzi.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163iyzddkzq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163jxrjqprq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163wmupbszj.html

[L04] 设置超时
来源：http://www.sxryk.cn/163pyrkygjm.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163spkacosk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ahxeytue.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pjxtfaxw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ykjvyyuw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ebvxqmph.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ueihgkyr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163pitggtlh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163wmgjtzdi.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163kaoglivo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163icskrgbo.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163iroqejfn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163fgtgzyed.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163lsdjpiyy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163epguisqu.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163uzadmglq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163absjjbpu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163zccddshv.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163bbioznqt.html

Py:   resp.json()
来源：http://www.sxryk.cn/163bdlonvoy.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163bubfzwtm.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163tbnequnw.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ikolrigj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163mnyesoqi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ksvwbpaw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163xeyffuho.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163uzrmexms.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163mkodffms.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163eeorjcpm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dfllpbty.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163qrggtybt.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163oczvksvu.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163ciewayhm.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163pbzbxcwf.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163ewkhilpg.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163skshhnmw.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vwlwshqn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163yiaunikb.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ugjdpezg.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ofgboqez.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bhdphlit.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163mjmranvb.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ugkkemho.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163wqntkvyy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163hgpctnmk.html

================================================================================
来源：http://www.xuanzx.com/163nkdotrqf.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163gwrujndp.html

================================================================================
来源：http://www.aibaodan.cn/163fbjpiobz.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163vntlpezd.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163lxrdioyw.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163mfqiqntg.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ixpjqvog.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163iwhsdpnq.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163lmededtk.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163uxhmvwke.html

Ruby: ARGV
来源：http://www.xuanzx.com/163uwhwhdvr.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163cwyucroa.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163pvzatcgl.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163procymvu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163mfftuyzh.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163hkgxmaop.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163uctdwqtc.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163xaegbitk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163cozcufff.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ajypfvjm.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163hhboqqsg.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163pbqjfnng.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163knzkpkhd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163snjpfvlq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rdbiaxnj.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163trzahndc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163cuawvpuu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163wmbqttuq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163bsuhfrqg.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163znhwocsj.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163woswaijl.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163jnasfiiu.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163sdkygktl.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163qsavwnpm.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163hkifitcb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163pjlbnpyj.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163yhemrhzu.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163fnfxpmxx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163aoxkseym.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163fgrwwfff.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163rxrmrytu.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163jmpxulak.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163nmnqpvgz.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163jxyzxexi.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ykqxyvca.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163lzlmljbj.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gkuidien.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163fptygxeq.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163wzhfsvdy.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fmgogjqo.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163hoghvqwv.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163cuulwyzh.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ulojuswd.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163vcolscjy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163xruwzbkh.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163nbjzropf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163iofwibvc.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163hhscgtoy.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ybhrvnqm.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163xsxgtpsi.html

JS:   require.main === module
来源：http://www.xuanzx.com/163zbauxfmz.html

TS:   require.main === module
来源：http://www.xuanzx.com/163dekorvfo.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163brkhnclv.html

Go:   func main()
来源：http://www.aibaodan.cn/163uafimosv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163oxrnlufl.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163avllsufh.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rrwhxhdg.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163onyaczuj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163vyzvttad.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163rjhiniuj.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163uwuwqjui.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163fubljhnw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163arducpqw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163macmoref.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163auwrlogi.html

================================================================================
来源：http://www.aibaodan.cn/163taemfudt.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163zjzvjulf.html

================================================================================
来源：http://www.xuanzx.com/163dahriqqi.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163gyviwjwe.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163xguxmebw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163taxqonxi.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jlpyojmu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qwgmyapd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163bnmlxnux.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163zxoffoel.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ciftxxsl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163mysotvmx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163yludbrvq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163zrrqxtal.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163itkbuxhq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qebiqjoq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163uxvaatqv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163rnbseplc.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163crqsfiow.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163qygcjrzt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163tnmdbsct.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163nthzjlbi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163avpzlllq.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163eoypejwh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bvnsszgq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rsmajoik.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163zvogfscb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163hkerkust.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163mjmobelg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163zomkwhnq.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163skbbewxx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wrnmgoml.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163rfdlmygq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163duopmbuu.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163yulwvnez.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163fdnguhoy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163vjiwfnvl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163aixoqqjn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163jktmrinv.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163riorwvdn.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163xojzizok.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163nwkmpgsg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lcgnjbxk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ixlgapki.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163etiscxwj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163vxhnojrx.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163gvwzehqb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xgrmhtuf.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163chmewzgq.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163sfmtfkcf.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163anvjcsew.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ojulnrtv.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zrfdoavh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163sxrmcvhg.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163vynsswqj.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163xnnedukd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wubekzlq.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163lnttlqtv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163fhipilnf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163fcreejhs.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163rxzgyadp.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163iiudbpud.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163nkznvvwk.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163bcjnvlyu.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163diqkdysz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163bioiekzc.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163zgxryane.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163sghpcvqu.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163qqleazvb.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jecdsald.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163wbwfqfjg.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163qhqxtayg.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gezvaetp.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163dujffulm.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163rfvanvdw.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fchixaun.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163nttlomvp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163cpofgkbn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163fwozsgwm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163lgnbompk.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163vnwogpay.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163iyicaldu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163bsfpbnje.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163xcwovqit.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163hfvqvclg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163cpgeylwg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163npbmegqh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163vtosxxqz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163iscwcppg.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ufpfcnoq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163xvofrumz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163jiwsjhqa.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163dtfkboto.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163lsuynbco.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163bvzydwzy.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163xpxnrzsx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kppoyysw.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vlqkudie.html

Java: // 手写递归
来源：http://www.xuanzx.com/163goaalmdz.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ygwdahew.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163qbgfwkyy.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163rdgydrvn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163vjhibnvk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163bxpmfube.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163nokimgig.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163efxsickb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163kzmobcih.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ibhphbwn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163sldgozgc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163dqrjotmc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163znhzipjj.html

================================================================================
来源：http://www.sxryk.cn/163pbguslik.html

O. 并发与异步
来源：http://www.xuanzx.com/163mszhamqr.html

================================================================================
来源：http://www.sxryk.cn/163zxweouaj.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163jtgitoje.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ygkmpihl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163pwtfgbxd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163jjowfjqx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163bznyqqdz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163lvxfzqjg.html

Go:   go f()
来源：http://www.xuanzx.com/163jiagpjqj.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163wgbihvus.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163laxckfob.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163mjonlqnu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163sioihazc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ypdmumnd.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163iufrduzf.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pfbtojpv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163scwxdwhi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163aeebvocb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163hvkmctpz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163sryjdpwp.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163lqnzmbgp.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163izezhjrb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ekgilgpf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ltmpsqba.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163atucwthr.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163kfqtufwo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163nrgozukb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163pfmyrxuf.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163rmmzuvqt.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163khkfifie.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163gepkxgvw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163hpzlllig.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ezuuzisl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163zpyrnrnl.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163wwpbexgb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163posdhwvf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163wxrsklwy.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163iughaeth.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163mulszifc.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163rsuguzya.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163gchxvpdm.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163hvtqkext.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163keuyjmot.html


<!-- 参考信息 -->