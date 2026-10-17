外链999!wailian999！

L. 网络请求
来源：http://www.aibaodan.cn/163hxxxmuuz.html

================================================================================
来源：http://www.sxryk.cn/163awkwpakz.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163rrqsiboz.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163pagghlyn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163jugpxhox.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163wpskkpwa.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163dtketsyq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163rliceoaq.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qhfqakvp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ejjwdbdh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163uwflfixe.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163cqyjuabp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163vcnffipk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163xcwjxsfn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163slmcxicp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163uwirwzzp.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163zkiqvwgg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163hilmifnz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163jdymvzka.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163wulnjmxi.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163lkhwuhwz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163fsrirnxn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163iqhsxffu.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163jcaharkb.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nyjrzznh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163eccnktca.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163hxjsjawm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163kiwuwham.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163gxjtctqj.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xwnriycr.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163tatfvtas.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163vemnvjjg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jsdajmac.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163kmusugzt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163oglqjvev.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163dyqfnwpy.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163zkvmyajs.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163gwnrrvzk.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163skoudaoy.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163fjapjsit.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163gobqalvh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163qtsgoypi.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rkbnqihu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163addbszgd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163tyjedyuh.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163vyxqidmu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163nzbycmhx.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163acabdupw.html

Py:   resp.json()
来源：http://www.sxryk.cn/163juyavyvm.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ltmfvmrs.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163dqjkvawy.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163myzangrp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163cudpysom.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163qdzkkowx.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163okrhdjxi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163lesnkfzr.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163tnqwvyal.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163pcuqczmh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163fzodnjnw.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ddzjenmm.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163uoozbrbj.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163uxfrrrzb.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163voieuxsi.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163flenxefg.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163pnxobqou.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163iklbwomp.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163xkujcfcu.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ayfkcaoi.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jxhfdufx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163xpobhpdp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163gstyjdlo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163hvhxdhja.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163pgrxvfci.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163pmiodvhm.html

================================================================================
来源：http://www.sxryk.cn/163nhuguutz.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163smxfftku.html

================================================================================
来源：http://www.sxryk.cn/163dyzykvok.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163owapwipp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163cnfvmdlw.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163fxudnvhp.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163smupzeqs.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163omtyrlyc.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163psgqxnhs.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163fweardda.html

Ruby: ARGV
来源：http://www.sxryk.cn/163eepleqbs.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163ukhqmjdy.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163xvqannbo.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163xrzstawi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163vxdynwqs.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163humjgvyk.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ruxaeoiv.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163xvshjnfr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ajcpokfb.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ftwsrwxn.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163nllxakqw.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163xzuxyniw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ufibxppa.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163wtnqlgtr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gokxkylr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lscphrbl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163otvtynkc.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163zpjxvnni.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163mavxxbym.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163mgcfyhai.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163hzdkxzkf.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163loqseayh.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163vqlezxgv.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163zctguuuy.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163bzmbvjwr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163sjcpyoae.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163azrekhxc.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163hbvouhnd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163bxtgtqzq.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163dnylctnm.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163lyvftkhi.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163mdstpumj.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qfgzhgjj.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163khglubbp.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mmglcute.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163okvidlwn.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163egioahej.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163vecujxop.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163kzmswazs.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163olcrbnkg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163tepxtdrw.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163bhhdwznb.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163kkwvrznr.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hsfvwkvs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163owjidnsz.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163nipjwfrn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163xurxjpjl.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ptdzfwgi.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163vruziavo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163mafqhwfm.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163fqouxsdw.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163aysbossq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163uunyuitk.html

Go:   func main()
来源：http://www.aibaodan.cn/163zszimymd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163srtiqvek.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163mfxavdab.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163pqsckgtm.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163swarjxqh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gylmltzx.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163gvpggxge.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jkdryrej.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163diwdgrdk.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163sngfbvuc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163gfsuzwlc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163xcdeithy.html

================================================================================
来源：http://www.sxryk.cn/163kagqajkv.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ynkhyhok.html

================================================================================
来源：http://www.xuanzx.com/163txayvuqp.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163awgyvpjw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163wptoorko.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163tvlgxhns.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dbyuoeva.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pkdcmjpp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163afupjpdi.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163nzzzpfdm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163otwafmtg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163xgltlzeb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163qdsuaqpr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163umxnjjzf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163laaqbabu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gyxmboxk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wimsollp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163kvuoyfbo.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163usgufkwx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ywjhmwif.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163foopoksw.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163vqcmfhaa.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hpyusrpi.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163kcqmupmg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vxqhvucz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ivqhwpgg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163urwjyllu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163eddvliru.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163raziceze.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163azhbbbot.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163meqsqktq.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hexwmjvv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ghiqtonr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163idjqtxxw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pfneighc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163iziuhwtd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163mjnqvdam.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163drbuzzsr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163honpxsyr.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163htpnhtlz.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163sleurxlv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163hfrszhkz.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xxuvfbcc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hwyzfecp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163gddgajfr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163uzyytvyn.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163odozvfjl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ayrzjlqh.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163rfqddaqa.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ndozoybb.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163stceanaj.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163amfiuutg.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163widwfqlc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163fepntypk.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163lurnhjcm.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163lhsgujrv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zerwqspb.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163adfmrdmp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163mjireioi.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163pmlhailb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163hxbndxpf.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163xyziivdm.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163dpnacmln.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163uouwcyjh.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163cxydjdgg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163jhjtxxwn.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163tbmdjeca.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163sudnvtbv.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163aejlnsku.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ccspdeqt.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ynlgtuth.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163nrzgaxca.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163yanlbxkj.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163qkvlayrd.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163sphmfkjr.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ltzllzzn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163gtkbujyc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163gxjkwkvr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163etmwkuju.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163raabpher.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ocziuqqp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ugzewvqn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ngdxrpfc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163uaflnicp.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163lspudots.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163xhqiqlxs.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163nppkbmyr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163dwbimyac.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163aqiyakic.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163pqfkwwco.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163vivvlbbl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163lbzjddix.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163zjrrhlka.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163svkqblmz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163rnchngvx.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ugnshuzo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163eedvudok.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163utbupczw.html

Java: // 手写递归
来源：http://www.xuanzx.com/163eerywkqh.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163mkfylknw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163rbjysddo.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163jucfnlod.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163ciroggil.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163zwdeexml.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163yspbnsvo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163htmfxqjj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fbznfbqr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cgvurskd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163dixpodsb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163apwtqkxi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rebhcovk.html

================================================================================
来源：http://www.xuanzx.com/163jqeoieuq.html

O. 并发与异步
来源：http://www.xuanzx.com/163ahqypojj.html

================================================================================
来源：http://www.aibaodan.cn/163uzqamoum.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163hgnyklak.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163bfmvfhkh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163cywlgipm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163mtabqylr.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rtoasjbn.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ycljzoiq.html

Go:   go f()
来源：http://www.aibaodan.cn/163lpfghhzv.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163yyfnirci.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163cetdzpre.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163isftedtr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163hcusaydi.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163beddtxad.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tqzqhhny.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lvkorfne.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163kathceyf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163nmvpwulv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ldfxiyel.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163fkydnqwy.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163rfrdjslx.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163yvejoaye.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163pwsuvcrj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163swvyfxii.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163aszjovyj.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163gvepqwtu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163lfxtvtkb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163vcvbwqqg.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ropuclly.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163wnulfruy.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ecnhwyou.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163uaiapmws.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163gpbocjxm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163xtsngtuk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163fhjxlqdg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163iohaybom.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163tczozamn.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163tmwsddqr.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163kgsdmxrj.html


<!-- 参考信息 -->