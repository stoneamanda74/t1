外链999!wailian999！

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163djwvowlz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163ikzbamsb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163aclwvsqw.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163paeytaue.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163zmqrvfjk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163qifmhabu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163teuhasfv.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163lwwnvijn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163slpfagcp.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163htnwarrz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163okrlewzn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163jrwnhyzv.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163rgfpuycu.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163cxvyaknm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163ovxuvpii.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163trjsqqlo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163fuayrzwo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ozpuuvzo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163nxsuhtfc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163ujpzkfzu.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163mbeymthp.html

[L04] 设置超时
来源：http://www.xuanzx.com/163pbaryvgq.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ilcuejdo.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163nvqxyjvx.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163nniicngd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163kioztsto.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163iaknmlvz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163lnygskbe.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163jaflhpaa.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163erihhxsd.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163cqkopkit.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ipbiwpzd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163jrtufhgl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vjnbmbnr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kolnddxy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163lkdawtyx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163xmkxxumy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163eaeyuhyn.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163yshacjbf.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163yugvvexi.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jwiijnba.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163evsotkdv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163qgpsrbvw.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163qhdieiuf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163tljajczr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163yailsmzm.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163eiqwnayg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163mdqmcxqf.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163gpjiwlyd.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163chywwjts.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ygrccoya.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pltytkkd.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163rqcshmxq.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163yutdjqyl.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ukprueai.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163spvvywae.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163vztkqsdk.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163atgkwbjs.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163pohqchgs.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163nbaglptd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nytydevv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fxvrornn.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163zknfpzjp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163izyiwnlv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163ooaiclva.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163bspphjpy.html

================================================================================
来源：http://www.sxryk.cn/163hnenlspk.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163kehyksju.html

================================================================================
来源：http://www.aibaodan.cn/163jkiqdqss.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ayvkkinx.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ojcvwhlb.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163mmdktprs.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163mowqahpr.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163uvmbjdma.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163knxtlxnv.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ysznwfzu.html

Ruby: ARGV
来源：http://www.sxryk.cn/163scivqpmc.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163fnhmbbrb.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163tbenaqwv.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163bfckjfdn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ofhcumff.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163spcntvej.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163dlodwncf.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163vfomhdab.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163xuftmbkc.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163qbzsyxfi.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163cuhnmadf.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163fyfwiozf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163liollkft.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163pxytlqex.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163jufgiyah.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163xmacbjjo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163wmautvot.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163qekrwazl.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jfydqhma.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163tdmhxrjb.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163jusjvmyl.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163lgqfhhki.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163whfuycse.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163rvrfnugb.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163zpifkbep.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163afiefhed.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163fsovpwft.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163fdqfgwuc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163uokrwqpe.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163mtmxxdmg.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163yuoaovmf.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163wjjjuhvn.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163euoqgyur.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163etfzjqsr.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163tjxmtzde.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163kolhnbjt.html

Ruby: exit 1
来源：http://www.xuanzx.com/163slepeljh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163aqjuhuor.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163dohpavtx.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zkyuqumu.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163avbprxhn.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163rtdkspyy.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163banewrgt.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163qyzdnaxy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163jxxkfues.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163jjgppegl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163cvbfmyed.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163iuqkxgpl.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163rdijqukj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163sgxpdrfl.html

JS:   require.main === module
来源：http://www.sxryk.cn/163uumxaukc.html

TS:   require.main === module
来源：http://www.xuanzx.com/163tfpcqwhs.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163mbnymofd.html

Go:   func main()
来源：http://www.xuanzx.com/163uavfsunz.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ciwhnbqx.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163qckssqkt.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163xwttcrnd.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163yscgbbcq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163roognhnc.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163gkdkvggc.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vyvuzhlb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163pixhxnao.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ypzoapzi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163vvcmjizo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ebheuksl.html

================================================================================
来源：http://www.sxryk.cn/163rfrtgfot.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ggwiikwt.html

================================================================================
来源：http://www.xuanzx.com/163qhocifdj.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163qzxmwvrj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163zyxznnnl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163iggyrele.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hdlcshlc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163kscwrign.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163abrvkcyr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163eoizqfkx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163hknszrhf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163cglnunct.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163tqfmmlay.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rtapaxin.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163kbumznwo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rvsyoobx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qxwuhasw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163ozlhrufl.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jmmcaymf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mzxsrjop.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163phvslzhy.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163qfwuwtxh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163oiohmivp.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163sajvrxzu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ctuwytjq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163uglisulr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163jvoqlzyg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163hbyraspd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ukksiota.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xdkceqrw.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163xfuhkbfu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163kagoqzbe.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163spjudybx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163cdjkpjph.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163wzeoksrb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163iesgavqw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ojffmeyp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jpsgasbk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163vosmcufo.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163mbzpizbz.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163dwokbfnm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163vttvhmbj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163sgnmntlc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163sjnoxyaq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163pnvsevzd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163rrwbxzhi.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163mlcybzlt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163dqjmvjyc.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163abxlriay.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163keknpktr.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163hdgdyjqi.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xmveraqw.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cfqmebgi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163fufuclng.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163qlyzplib.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163brihjhdv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163oafomoem.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163lterdsqt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163xivierup.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163wmlrvyvj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163elrdsgxx.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163lnftcqba.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163bcgpzfce.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163krlntwak.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163xdddldou.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163mhdolelx.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163atuhsbxp.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163bcxlnjuw.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163aaqfirjc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zjgebzos.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163hyvybycd.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163gedlgzvy.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nhnsndab.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163abnqardh.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jkgdqynw.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163vtbepoyt.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163qttaukbl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ouwihsnb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163idjujlbg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163babwhwde.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163hqmkwwft.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163jllqpjqt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163exnsljhi.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163khlumcdz.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163vzdoxwje.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163vdwshcqt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163btlmczra.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163tgepfddl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163nvymohwd.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ppabozmo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163hdunjfvg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163kqecrvrv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163hzcuzrvo.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163itjezpav.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163tzeavawj.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163oxrpimyk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gkbefegk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tnvxexmo.html

Java: // 手写递归
来源：http://www.sxryk.cn/163dmgvgebk.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163dbbzodri.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163jofclomw.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163iyiqclgg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163utajfpab.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163qmrmuasa.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163jeqgzcsj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163pvorgzsa.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kmwcmvws.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wlvtsaxa.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163xmcjvghb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163heufymgf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163amwmzcpd.html

================================================================================
来源：http://www.aibaodan.cn/163ckwmnemo.html

O. 并发与异步
来源：http://www.aibaodan.cn/163trkojtde.html

================================================================================
来源：http://www.sxryk.cn/163nhcjqgzt.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163dbwygsrx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163cbnzsflv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163szsqpjgv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163hpwcyoqk.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ahdtgzip.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163hjqmgyxn.html

Go:   go f()
来源：http://www.sxryk.cn/163xelhvsvj.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163fwhxnsnv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163xpcmwhgj.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xwwawyyu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163vznqplld.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163voklbkfb.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163pwcqakmy.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tsdyhciz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163cmsjjtig.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163wnqlwyea.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163oubwxntk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163llapwbrz.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163diljihoe.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163rborddea.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163nsofazfu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163njvdnoaj.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163vssosltb.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163jvbjkmsd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ckhomeqp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163dqrocmpk.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163dbqqtqxi.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ujgjkayk.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ihyychrl.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163tvqrzwcw.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163fcqymxln.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163yaplhsbc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ohjteyek.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163owcwgmwt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163yowqfnqh.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163hwxsster.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163vdeisidv.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163caxnyqda.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163jmlchsta.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163uaqlwsns.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163rrzlndro.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163rvmcqltx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163mdypnxeb.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163mcaydvey.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163mxydggvd.html


<!-- 参考信息 -->