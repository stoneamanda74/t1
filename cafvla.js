外链999!wailian999！

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163vdesxdaj.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163xaglwvqz.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163werustsn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163usedhobh.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163rhqchrxu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163lptlnsxs.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163dztixstp.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163wjasakpa.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163qlcfxied.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163dnpsvdqy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qozqmpyh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163suqncedh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163uwogskev.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163xtwnxfwr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ylkqteak.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163bgdripmo.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163dhbngpyq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163xmhpssfq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163cdkbjdkp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163qylbzyui.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163siymkdyw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163qbsennqd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163zmgebdll.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163htlywlfj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163arjwqnku.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ottqwbye.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163uvfsmnnr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163heeyftll.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163sjzyzkla.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163btfrhvon.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163zapllxwx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163misvbffy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163hbodiatz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163bumxoszx.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163hcotnhml.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ldsbtynk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163cctihgfb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wuswrwqc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163sdxhkgrg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163jxrebyxv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163zbhdieyl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163upbxowyz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163oneivciv.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163bamkznle.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ytuejgky.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163xnqzkvwd.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163qageoiky.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163xriajtjy.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163gyxunqqr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163glrjzabu.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163yxuyfipc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163tvadwysu.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163grqonfex.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163rvohioti.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163mxwfobij.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163unvilylo.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163xzghssep.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163uajefxic.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ibokyvlh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163dvflnbqw.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163cbpifxwc.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163uyzsbmpn.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163vfekkuic.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163zsfzvjtd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163nmrlblyx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ftgargdo.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163piocgyxf.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ykrlecwy.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163mfzxvmou.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163gytjwuid.html

================================================================================
来源：http://www.sxryk.cn/163gbvoswvn.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163bfaslwep.html

================================================================================
来源：http://www.sxryk.cn/163ldesgajw.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163glijijea.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163mhzarkib.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163rfnmdoqh.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163hqncqies.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163avimeapb.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163nwjwbgzt.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163sxjtmgsk.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163dkumydhd.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163brbperdd.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163ksizsgnw.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163xvtkzbmx.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163hjextrym.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163bhgnjcjh.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163bnrvntqh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163nulyqirb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163gdcjcumv.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163chebmpxk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163ncshouyl.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163lywnvhks.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fulemoby.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163cejhejte.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uyzkrogx.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ylirfkph.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163zkxzswzq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163pwfxugpv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163pldgfayj.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163xmqosgld.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163ronmnlde.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163jlkfvrjm.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163opwrfyog.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163qcdbirrn.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163stdtupxf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163lcqostsl.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163wshzotcb.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163psjfxvwh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163lqlzpgmz.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163arcbrsvc.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163cqmeknxd.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163hnamdzsd.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163kjtffpoc.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163pyqplglo.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163jllwshhq.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163omnufcpe.html

Ruby: exit 1
来源：http://www.xuanzx.com/163natbmmtu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163dyxasrzy.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163wstrzuzx.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163sbzoyzqb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ihgfqxtz.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163vjnngigj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163frvymsdc.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ywajrldq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163yklfawoe.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163drsxhzba.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163xttgabfl.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163awkvddla.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163cfnffteh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163yypcopud.html

JS:   require.main === module
来源：http://www.sxryk.cn/163rbpprcdy.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ghenoijg.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163rqoisklb.html

Go:   func main()
来源：http://www.aibaodan.cn/163mhkokrps.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163qffbakvk.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163pogqorfe.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163oakrhotc.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163iagreiwk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gvkvsqxr.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163trjjnnoa.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zautrywt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163unutbkiq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ggxvxboj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ladqcchm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163xkvgnrfz.html

================================================================================
来源：http://www.aibaodan.cn/163wsmoudeo.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163muxlmvpv.html

================================================================================
来源：http://www.xuanzx.com/163zhxzestn.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163efichior.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163gbgifcqe.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163vahmtczb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bbcyugfl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163bvjxsoaa.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163zdtggkxs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163tvighowt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163acbeflgs.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163kpyxqscw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163twojxgkc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fuqkuqmr.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163axbmguze.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pishjyzi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163uirqhgwx.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163miiarthu.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163tadommct.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mjuybtjk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163dnushvrc.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163tilszoxr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163blpnhzni.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163tgfxjotg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163cqmkqgpd.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163kmofymbf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163pbeeiufx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163plqvmghf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163wfjsdios.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163boaomtmh.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163vmznrvwr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jmqkheui.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163zpdfsxpq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jvrvvywl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jnouylpw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163wndnnnds.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163pgcgtcrc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163fqgtrkci.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163extsrlxn.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163wookuysl.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163hfwspush.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163hxiyvozh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163eoszphmk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wuhmbobg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163dfzxdlem.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163mhoakuhw.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163kyixctzj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163abnyyeqb.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163saboookh.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163bdsctjww.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163shfutuyn.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zqzqozsu.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xolxlnsb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163atbuurjg.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163dlyptelf.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ahioayhh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163oldthqmf.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ineyvyab.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jlqwgpmy.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163xbcnvorw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163kusumfke.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163evpcrdkf.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163hdwcvhtg.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163vdjweixq.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163uzisjkxk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163pdunkcqy.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163hiwcotso.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163tjfpmcxu.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163sodlaakg.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163seaihopo.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xhyujhqu.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163bcelsydv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163navzlzty.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163bepmcpnm.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163psfqsoft.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163uebpyoto.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163rsjzyvnt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163beaiyqve.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163kgrzazoy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163qgtmeluh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163dcphzkul.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163ebzstdxo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163xdrfyfip.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ixivobyc.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163hwcnqusd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163onomewxt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163nzmsbqfy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163mchdkxig.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163dlzryhsx.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163pkpildgg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163zgsgqdgh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163xzpfeldb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163albvubev.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ncpjgzld.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163slodfyvq.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163qpnjzvke.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rvofwqix.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163eqhrrzqn.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ngdnnofw.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163psuxrugv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ncsanwkk.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163rxsgffrb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163przmihch.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163yumbkhga.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163gqywfsvn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163uxcdzwai.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dvtoiryi.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kempgpkf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163yybqrizd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163clwpbrqp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163uqiikmfl.html

================================================================================
来源：http://www.sxryk.cn/163xaaircii.html

O. 并发与异步
来源：http://www.sxryk.cn/163vdmnvjma.html

================================================================================
来源：http://www.xuanzx.com/163afycmmso.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163sumpmtpg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163clbzuszb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163qelbtduq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163rbvihemc.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163dadifbvk.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163lpggexzk.html

Go:   go f()
来源：http://www.aibaodan.cn/163pkxqdlow.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163dtussrxy.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163keudlsxk.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163hnhwcjmj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163muwpzlys.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163smqozsso.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qutfppeb.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wkrjdpop.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ayldnqxd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163amkdqfrl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163hyxnzssn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163hkbdbgbv.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163dixsadia.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163nqbuywrv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163vzthqrrj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163vjbrcevy.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163oiuyfkaz.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163zbjlaosv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163jmofdlea.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163cxuhftbc.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163tbxxpxrz.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ystroimx.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163cvlbsvgs.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163sadltqzy.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163zrjoyxcr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163dinczsdz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163hswmawft.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163oinivwof.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163yuobfuzl.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163swjbdvfw.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ueplpyvn.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163humbczit.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163zdxosmgi.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163chjvbtng.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163dxiabyqp.html


<!-- 参考信息 -->