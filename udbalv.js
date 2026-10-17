外链999!wailian999！

Go:   encoding/gob
来源：http://www.aibaodan.cn/163qtzxjucq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163yfeahnnn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163tdgbrllx.html

================================================================================
来源：http://www.sxryk.cn/163yimbaums.html

L. 网络请求
来源：http://www.sxryk.cn/163sqjsevog.html

================================================================================
来源：http://www.sxryk.cn/163mqnjwjcz.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163sxyerjzp.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163rocchavg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163vwhfbjsc.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163zcpmccdd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163noxoxfic.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163vxpfwfnj.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163gldfaran.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163wffuntgu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163zkrmpiet.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163nnwglicj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163dtgifrwh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163xwzjispn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tpmsysac.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163dzrjwdzs.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163diaxlynv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163pnebbnmv.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163seiovuhi.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163tgufvpbf.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163lggcerdp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163dyzgjaoj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163cwdfkonw.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xgkbqdlp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163rbtxetrt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163nscznbdb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163xfrgdhuq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163uownfpyh.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163qcwsgkkk.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163zsrbdjlm.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163oqwwitlx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ncvtebqq.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163jfxlhvyp.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163rqrifrqg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rbvuaujt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ugitqsof.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163wuojthrm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163wdystaoc.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163hojvwbel.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163sdnirqqd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mcfzzkfq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163bxqsjmgn.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163jxtdkasg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ytkamcbm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163lymvivhj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163sgvyymnr.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163kydiewve.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163hhmsifrh.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ffcmowzz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163gezkhhgr.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163okrqseew.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163yxtuzdre.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163spcmawqg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ncruenxw.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163nlsyowkx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163hecxnmwc.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163vlnsyxii.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163rhomoikt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ywhsqzkl.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163fwhlrhwj.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ipcheeos.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qkrkufng.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163eoztnoxb.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163lmxltzxa.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163reuqoubs.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163kvtlsixz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163dcvznrzv.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163jqguaqxt.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ozwmdvde.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163kxdaftif.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163qzrlhcxv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163voupofjt.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163lbrwnckh.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163otxgubqu.html

================================================================================
来源：http://www.aibaodan.cn/163tenhzhak.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163cbuychas.html

================================================================================
来源：http://www.xuanzx.com/163vdeyvizv.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163yzgthkep.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hwwvyxeo.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163wzetzgmv.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ggaasokg.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163muirhnwz.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163bqyrkubr.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163qrhstqco.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163yqcaqmzs.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163fzwlfsto.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163lhkqboef.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163namhutmf.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163yjiilbsm.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163zhushnfu.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163mdltbpub.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ffchqmwt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163aeldyhya.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163nsumuudk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163opnbwyxm.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163tktlvnij.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163mowsyxbi.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163mjixwfkf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163hdoukxxh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163nzvypifo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163uxzmvqkw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ofplqgxl.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163lbnzhbbp.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163bwheaywt.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163huoqcrfb.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163guyqlhwk.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163zogiindo.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163hixbkzgy.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163pvkpdesn.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ekngdwur.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163curaeadz.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163jrvdpvpc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163rntkcqrj.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163dnhvauip.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163smuxnbey.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163biwvgdbf.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163abqvemyq.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ozkglnas.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163qfdeaoir.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163znqjopiz.html

Ruby: exit 1
来源：http://www.sxryk.cn/163mtbfjpcp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163pledeysu.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163xzgyeujb.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163nooglxyz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163xxbhjqwo.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163kihalfzc.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163kcsmqweu.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163cvbjbzak.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163yggzfxgg.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163dznacixy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163jbtwwdyk.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163khaatulw.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163hxerzdeu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163fkesvbts.html

JS:   require.main === module
来源：http://www.xuanzx.com/163akvvfltk.html

TS:   require.main === module
来源：http://www.xuanzx.com/163voqhrnai.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163sstymchz.html

Go:   func main()
来源：http://www.xuanzx.com/163qcxwrecu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163aloaptll.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163kabljfui.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ajeyplfn.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ictfpnyi.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ufjqmdtk.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vvskznln.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163yxbjpiwt.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163rnvyizkq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163jlldurur.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163gofrnmmw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163aafjmeeb.html

================================================================================
来源：http://www.aibaodan.cn/163yitoudbp.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163oyvhgjkd.html

================================================================================
来源：http://www.aibaodan.cn/163ekkscnpp.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163mulgmibi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163kcaltouy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163gvgfovhe.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ffmbffvw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ohmvtbdl.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163xuhpeolj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163wwicjwkv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163cqxolaaq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163cfuauspy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163mjvegvmq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bbgoqcun.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163lsqvgvxe.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fdtqgrbv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ljqbrtag.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163smfetojf.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163exncrlgm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163qqqapaum.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163kzksewmx.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163ncceffun.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ijkvznpn.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163rdhffpsl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ssvthgxg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xqyesesk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163mtzugxma.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163nayyhdhl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163jwpnxfzx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163mcmwdvly.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163hhwhkbck.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vcjzcqca.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ezsylgcw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kinvqyhb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163svpcqltq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163uygsgqoo.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163vboaachl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xycjanxg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163tttvtybc.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163kpstfbmg.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163lzjbeeok.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163hrkmusbj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pfgprgus.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ptwbmqbn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163limrofto.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ymwjrmkd.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163svsenirw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163klnltckc.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163whjjzvsn.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163qulfnndn.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ptfmcdwy.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163qkeemkty.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hmsmyijk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163zkvdazpo.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163alvpazbj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163vuihjjiq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163zzylhtmh.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ycbiayon.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163yyijtyim.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ykrmymph.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163cmgoaqmy.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163medbpnck.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163vkyzmemm.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163pheuaznx.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163lbjmipxa.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163okhtgltz.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163gerfqbgy.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163dehozavs.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163deptvquj.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kthckofk.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rzbvqgtq.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163fveqnofr.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rugddequ.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ffzweful.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bcfbybdu.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163mvypcmoc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163kjibjclv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ggopwtwt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163jmgeixwx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163hyxoslqn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163hgdcywvi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163fwyewtir.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163unkpxexk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163xauaezaq.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ukqsuieu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163vftwdazo.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163caqulski.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163dxxpiiny.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163cymixjeq.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163zvhfkaso.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163xfzqmhfv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163zxoleuyt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163qdzyadpb.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163bkinboxx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163swdwerao.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163mnmnrmjs.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163mdjbcojd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bnbctmno.html

Java: // 手写递归
来源：http://www.xuanzx.com/163dvsftzen.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163owmglhxo.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163srnkqsrv.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163iminrjvs.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ejglqfii.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163mqnnzgda.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163avxqlztu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163cpfuyhza.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163uwpcpfbu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vbufxnbe.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163uypbvbtd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163hlxhzbia.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163buqygvss.html

================================================================================
来源：http://www.xuanzx.com/163iyvcqorc.html

O. 并发与异步
来源：http://www.sxryk.cn/163dlstbosf.html

================================================================================
来源：http://www.xuanzx.com/163elnhmvlg.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163rrgtdpio.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163yckfrsfl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163dubtulha.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163bngjwaiw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163yzsyyshp.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163etmpoznu.html

Go:   go f()
来源：http://www.aibaodan.cn/163mfobbwur.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163wespntcr.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ylkeluiy.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163xacpiqgb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163qubyggmn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163izrqvdvu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163cofypfha.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163lrdgibxn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163qecfjydi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163qzyvgovm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163itjorsru.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163dbcqchrl.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163tnbqahsj.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163qgihfdhu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163lbtdscbn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163jsyhbnju.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163gektiezj.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163pjgaznfo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163rocjlnyp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163abnjcegl.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163exwvsfoi.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163axkcbhzc.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163apnpbqid.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163fkmfvgcm.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163sltsjrxr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163rseysozs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163zoubqcum.html


<!-- 参考信息 -->