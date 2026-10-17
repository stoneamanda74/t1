外链999!wailian999！

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163vhycnvdn.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163emwpclno.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zxhirypb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163gxayksxw.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163luszxpur.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163swsiqzdp.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163twygsxym.html

================================================================================
来源：http://www.aibaodan.cn/163aaskpozf.html

L. 网络请求
来源：http://www.aibaodan.cn/163kykyvxbg.html

================================================================================
来源：http://www.aibaodan.cn/163mtynmndo.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163uvpvljlp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ddzzbmti.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163bvgaijfg.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163fdpwywwy.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ccpvcagi.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163kfzyaanw.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nvrpmjgb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163kixchcqr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163ludcncak.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163fxhjvpoh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163khjywbhj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163yhyhtlyc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163jndhhstt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jhokioll.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ymhdldar.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163gytvylnd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163tvbdngps.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163idvunniz.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163dadweibi.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163wjdfxzgh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163limeetuc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mijkcici.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163xueowyof.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163lygtacxs.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163fzfluydq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163zmfmiaih.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ehupxlkh.html

[L04] 设置超时
来源：http://www.xuanzx.com/163lvlrdizl.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163nrfervsa.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163gtjhwggy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qztxmvcx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ontrmdpc.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163vdvbpdni.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163lyamogtd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163fnclmyys.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163vwpkynwb.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163xennvkwg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163gyylrznn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163jcjskvpw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163myrzlzxi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163pumkydom.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163hgddsqus.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163hyjimqbo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163uhqspjfq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163frdakpie.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163syfszvwe.html

Py:   resp.json()
来源：http://www.sxryk.cn/163evekrpxq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163owkrhbdy.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rwjwdtpd.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163onevpxwp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163iayxobot.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163anilaqpb.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163nufwvzbg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163csbotzwc.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163dnsnesrb.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ddxngull.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163xvftefjw.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rojnuhtt.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pchnjeqw.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163zgkdqbze.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163nnlsjkyp.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163dgycyjlv.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163bhaqxmne.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163qzfhijlf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163dvepjmpb.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163asurtugo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163utbyygfx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163plvguwnl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163gdypvokp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163ovwcuvgl.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ezptccqv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163dgebbnfi.html

================================================================================
来源：http://www.sxryk.cn/163jbrcwoyp.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ruxtplvt.html

================================================================================
来源：http://www.sxryk.cn/163peqjffdj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163nchvybof.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163nfpzirao.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ecohcvba.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163bazwyido.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wgyblkwk.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163fplqczft.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163zobszaiq.html

Ruby: ARGV
来源：http://www.sxryk.cn/163abijgmgy.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ucqgjprf.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163whmsemna.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163biyfbnla.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163leieuttl.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ofwelfpt.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163rbvgohoe.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163dnvubius.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163xntadrkw.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163pttovbbl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163lkcqxybs.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163uchdxgmu.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163pwtagtdb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163hupgwrbp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zvrcjenu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163grwayywe.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163fgthvqrp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163vzwztjcw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163fdbyovlv.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163jpqxzlrm.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163jshndxry.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163rbuhrpdm.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163kfmnksfg.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163dbsophoy.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163qzqhwknp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ijavwowi.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163yyiteucd.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163oiqmxczz.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163bokndyyh.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163ontohbvp.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163tfnypdtc.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163gcahmibq.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163hcchxldf.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163wmmjmqzz.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163kpnxapvh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163zkhjeohk.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163utbmmimw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163yxbbdeyw.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163alnrnlgv.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rkyfxotg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163aejpxicy.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163svjsmsjm.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163qtlqsxvm.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163qotbnocn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ptpqogrf.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163vsennkdn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163uwvoxolc.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163jxwnokwq.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163smftzshh.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163mfxxlvfk.html

JS:   require.main === module
来源：http://www.xuanzx.com/163nxieentb.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163rndstbdl.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163msaxvtoc.html

Go:   func main()
来源：http://www.sxryk.cn/163wkxmzvxa.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163vuqyfgnk.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163jcqlbnzu.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163levhfuhy.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163mjssziag.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163alwgbwpl.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xpoobphh.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bbjnvlvc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163srixlkwq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163htfldzme.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163jsnuodzo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163usuxstnw.html

================================================================================
来源：http://www.sxryk.cn/163gyoyxysx.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163mzrtxplv.html

================================================================================
来源：http://www.xuanzx.com/163hnxqouwq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163pkkhomcw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163poeypbge.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163oxghalam.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163eqtyuklt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yxkottfz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163vlaahgye.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163yxlnejlk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163fbcegklp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163bnhstoqb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163nmzrowni.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163cgzqodzu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163yowgaoqd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ywjmkxzz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nacncrcj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163cujopzvh.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163evbjzxbx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163glcvzrry.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163kdblnncv.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ztyjwqzq.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163stzkaqkq.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163rhrayweb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ggtadzph.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163glwbfxqa.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163jkcwjzip.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163jhilmjiw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163lzhjnbpc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163uvefutzm.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163hvzmmuyl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hthkafzx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ktrfxqaw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wspnedrq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qkrzklff.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163rzrimbju.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163hbahooqr.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dfhwjmfz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163xaauxbfq.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163huhhzxzn.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163erleuoog.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163bynbuwgd.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pdgnifwl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wzcfvfps.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163rpdqumvz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163zrwqppcg.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163tvfzdsna.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163vabpkxyu.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163rtoomvum.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163sqqsabyl.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163sjlhotje.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163mvujipds.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163avtbtyel.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163fxbodcbi.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163efpvvikl.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ohzboptf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163popifbzb.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ldfxwjqa.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163bscocclk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163pdqauyzs.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163eoiuhvrl.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163bayweras.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hlswupfr.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163lkifdfok.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163oaumicnu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163wmjmjxyr.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163pkdolnos.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163duwmkxky.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163lvfllsno.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zpmdtmpp.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pmfievhi.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163upgiqyyz.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jcnjwdkp.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163qbqedkec.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ybfoivqx.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163khfmnlie.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163pbfdipbz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163eedlkvvm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ormgyezz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163rwirbjfm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163vazlwllc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163hhamjlqm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163zicglfho.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163nygwsopp.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163kztizmhr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163dsozqxvp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163rarblaqq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163xfjqtujk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163kuhfrsqw.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163vkigpymb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163hnaqgmxh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163folyqkmo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163lvbzvllq.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163irxdgkro.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ogtfejel.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163wglpugmi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163imvfvrkq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163exvchwjr.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163jkmdiwlf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163htvdtfcv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163zfkzgzsh.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163knpeildc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163kwqbcvvh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vidsxtxa.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163dxiinmig.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163yueonnga.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jsytdlnq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zjfmcnyv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163phrzjdbn.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ajkihtrz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ykhmasvl.html

================================================================================
来源：http://www.xuanzx.com/163pqidesew.html

O. 并发与异步
来源：http://www.xuanzx.com/163itduehzu.html

================================================================================
来源：http://www.xuanzx.com/163grzdqeni.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163mjkcjlsz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163mmtoppxn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163yftafeii.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163exrroniw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163sknowvka.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163vumlzjlk.html

Go:   go f()
来源：http://www.xuanzx.com/163ietnncil.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xdvrypex.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163wdblythy.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163uysvnypx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163hzeuvgid.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163bfwxmnkc.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163uibsgjjw.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ljhtgkvt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163gpgwxvvw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163atracsep.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ojxgpdbf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163wqajjncg.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163cqfcwbjr.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163skefsjvd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163borhqdlu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163suuqgbpb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163puwgeldm.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163iywbojlt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163zkgkavbc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163qdcqdlhq.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163vaubnppl.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163tsmzkoml.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163tdjzehnx.html


<!-- 参考信息 -->