外链999!wailian999！

L. 网络请求
来源：http://www.xuanzx.com/163ctaxqbwy.html

================================================================================
来源：http://www.sxryk.cn/163aberbiau.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163sfwrujom.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163yqmlstzp.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163idjlwyjk.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163pqjveism.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163pxfknivp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163zjuzjhob.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163uendgpvy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163vtitnxyq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163afetuvyz.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163rzphzcmr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wwieiwzk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vipbrpkg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zlufhlwa.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xfdwokmu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163bqgswjsy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163fojdznmc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163dkspbusj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163fkcwhvuj.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gjywtyer.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ovdbvivb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163aqrzmkap.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jbajykif.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163rvtbzxhz.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163jfjkkjlb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163cqdrpzgk.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163bqqoybxt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163myuaixnr.html

[L04] 设置超时
来源：http://www.xuanzx.com/163flsjiish.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163znlqvacg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ddkghdoi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wcfbkrgc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ctfprlby.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163tababpwp.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163amsfckjr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ycnpkauw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163omspipdg.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163oueuwpmv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163zwahmdid.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163rcsztjqk.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mcbzrmgs.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ugzdvdfc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xvribksb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163unfdzoss.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163omimbptc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163sznddjdf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163hoxhhufv.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163bdxovpwp.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163mpxnsbii.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163inptqcnj.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163nbvpzhrn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163aydcphhe.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163sgjhpebp.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163uvqecsoh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163thsbvcps.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163pzekgxib.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163kvlrkzqz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163eiqjfpjx.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ownmcvwj.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mfwbygbi.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qpebvmmj.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163wzlxcvwm.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163opgvfqfs.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163yplpjdhp.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163qbtarajr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163kekwzhma.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163gxugoqhk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xyukligp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163oclbbqvz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163zxtinyjm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163fubmvqsr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163cnawbmqu.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163phkyeppw.html

================================================================================
来源：http://www.sxryk.cn/163fiouihxl.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163syaclxzr.html

================================================================================
来源：http://www.aibaodan.cn/163zvzedaiz.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163mdkwqoqd.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163vjyfgotn.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163brcibpus.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163rxufmfjt.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163idpsodak.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163zjdhhzxx.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163usnayjfi.html

Ruby: ARGV
来源：http://www.sxryk.cn/163pkdirofy.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ulkmrixc.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163gsbedvpg.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163yzfnhycm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163ccaxuxon.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163khaffagj.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163emyozjtz.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163fdelfiag.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163xhusnsdk.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163tpvamndi.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163zviaqupo.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163urhfsyva.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163wuohjiaf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163zrisoscd.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163amibrmzd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ftiaeuvr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163kqazdbgd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163ochmkwrq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163vpnznoac.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163xqpvgpix.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163gifmvfeb.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163eiessbth.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163cilackht.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163gbikuxmj.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ohntzbqg.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163icdvcksf.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ijxztrdi.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163xwfoldsq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163wtfoiauf.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163jnkoxfci.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163bssjdwtb.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163iobydhoc.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163wjtkksjc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163kgdfoydh.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163qtrjdvgy.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163zuadfeun.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163lemgcbla.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163einvuusa.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163nuvuzcjw.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163forhbdgn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163hkzpiqgb.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163jiizxajk.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163xbwzkvbm.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163djvqfmzo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163torotrsj.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163nozcppds.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163xksrlpqm.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fncqrwop.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163cbguquyv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163mgzazfxj.html

JS:   require.main === module
来源：http://www.sxryk.cn/163pyqlnfie.html

TS:   require.main === module
来源：http://www.xuanzx.com/163oudjgywr.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163sjxfxkxw.html

Go:   func main()
来源：http://www.xuanzx.com/163qqltbqbv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163zyuwqxzl.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ljltlrpp.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163utccbfwq.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163jurqxmwk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163femutqhj.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ioekfqte.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xzkelhym.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163eaznfdia.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163whcnovxx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163mrjqxjia.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163uwufthvv.html

================================================================================
来源：http://www.sxryk.cn/163cadhuxku.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163zlhcnojg.html

================================================================================
来源：http://www.aibaodan.cn/163uzupggxb.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zjypoyou.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163gbnvzjjc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163swvxkhro.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ohhmcmli.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zeagfwjf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163hiwrlyny.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163cgdulgnv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163fwchppdi.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ppyzckho.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163usoehcxx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zvgdehps.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163dlkynzjd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cwmtcfya.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dyzhxkxr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163hzwjfjvo.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163lutybvki.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cbulsjhy.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163nauviqby.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163rltldwyu.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163kzofkmle.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163gootacvg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rribolbu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jzesvnxd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ailpcafq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163zhigndoj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ktwyhkht.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xxahutaw.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163jwpxgbet.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vucbyyns.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163rqucgkyh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163flaxipml.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rlvurqth.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163vduykfsv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163huuolunf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fyitxqoj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163qbjrdnfg.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163mojrargo.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163uxahbanv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163gnfimqfs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163gtbzcxis.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163cnhqbjpa.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163nukrscxy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ixsnfpnh.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ttpbhvhk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163miclpmuc.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163juknghmx.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163bjiaddcv.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163jcmcyedh.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rohevgbk.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163quaxjfux.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163dcdhzhxr.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163edfwslsk.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163vfyceodb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ejebkuuf.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163kjzzwvxb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163yktkycba.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163qbzjnnwh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163yvdtesgl.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163wjmfkadz.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163kikokzfm.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163cpnnhynp.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163qlejrbvu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163mordooqh.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163kqwmahgn.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163sctpomzv.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163xiiuvurt.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zruswucw.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ljnexkxn.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163azqsmavb.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ovvifrxh.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163fkteigtq.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qapyjpvb.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163urrfsjwz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163xpakkrhc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163wvynklgw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163pcbdzins.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ywunlnvc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163vvmmdrjx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163cklfhxrn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163uraxwcaq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163swnunkkm.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163vtyzphla.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163kiochqwr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163pivmlgfx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163adlhlcag.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163tlffjlpl.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163elkouxdq.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163akrnmvef.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ctmnytgi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163swkaszgf.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163acvoyjlx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163glunybpj.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163eldfzqah.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pgvhvhkf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163efqpdtqo.html

Java: // 手写递归
来源：http://www.sxryk.cn/163xegcdijq.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163wtdmjgcu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163eetrqqaj.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163prepximl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163kkxledky.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163hepqxknq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ajlpkysq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nasamdry.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163suvtktua.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163sdnrudqt.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163dhhgqhem.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163wquburqp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tiugmxds.html

================================================================================
来源：http://www.aibaodan.cn/163ciozrbad.html

O. 并发与异步
来源：http://www.sxryk.cn/163mgtedqol.html

================================================================================
来源：http://www.sxryk.cn/163lsxklnnt.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163kwukovbr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163bqyebbbr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163sojjchfg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ddlmxwxq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163gbeznchz.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163pekmezzi.html

Go:   go f()
来源：http://www.sxryk.cn/163fvhmkfmi.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163gknqvmks.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163jkrrrxzp.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163wyclwthu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163thjzkqbd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163fxlopuug.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163seqollum.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qgqkbocu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163tokpurtt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163tlbjhqqn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163dfgpmqqs.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163lxwfelyc.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163yqcydnhn.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163giesfzgz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163dpfcvhmk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163aogvgvfx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163wsgxvwnl.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163mvqkytsq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163pxdpwhik.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163mddowsss.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163dztgirnd.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163coyohvso.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163gfjnhofb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pjtidmkz.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163shkixggi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163tvnwttxk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163opzbgmcm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163jtsiugoc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163whygrscn.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163lghhjxrk.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163qceppzxi.html


<!-- 参考信息 -->