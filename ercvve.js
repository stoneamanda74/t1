外链999!wailian999！

L. 网络请求
来源：http://www.sxryk.cn/163iqxcrigl.html

================================================================================
来源：http://www.aibaodan.cn/163jjvlsybn.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163xgmkdknv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163vdprqeil.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ggltzsyi.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163uqhxvkdh.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163txsfllro.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163lfpeaqvu.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163vrugfbos.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163umfuqhnq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ybvwvspd.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163lynqerfa.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163byzcfqww.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163tlxfkgvt.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zdqjfuyr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qhvphdyc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163noyalner.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163tihglgzp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163kgpuomhg.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163tqlgjyhb.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163hnyyghzz.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163hdajvsyo.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163nuhlltrc.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gtyalyft.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163vmsylemp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163tsddsuya.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163eqeubxpr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163biejchdp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163onggydcr.html

[L04] 设置超时
来源：http://www.xuanzx.com/163sdjyikiz.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163knpkcchv.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163rskqcfgy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163uijduuoh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ztmiybif.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163vssohlkc.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163wjlfveds.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163ooldmlmf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163uyzhdgzz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ijstczth.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163vxxbzqre.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ugdywxlq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163zlqgxqmx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163afedwbqb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163zhuoiyxx.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163bmmfchvi.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kimphtkb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163jtvfsqud.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163waqaaszk.html

Py:   resp.json()
来源：http://www.sxryk.cn/163mukueohn.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163cjoweklv.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163pcqzdjcx.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163aztlilqp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163nnkctrrz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163wpbybdlv.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163iydwypik.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163nxkgymig.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163tvbvdmbr.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163nlwuepwj.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163nzzeetof.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163zntgpzeb.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163qeziwlcd.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163nsujsxfn.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ryhndinh.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163kbxgqrub.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163twzgjbkb.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ekxkklwk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ppsmoygt.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ftkgirou.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cdpmvikz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xcjejjyh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163zannfjjv.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163schdfvve.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163svyulvtv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163nnlxilke.html

================================================================================
来源：http://www.xuanzx.com/163kjijyvrg.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163olxdtjrh.html

================================================================================
来源：http://www.aibaodan.cn/163ppkszdob.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163jchwyqzn.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163koomphog.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163wtaehzdn.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163lptnmybw.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qyptczyp.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163dmxfulgj.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163oplhlpdz.html

Ruby: ARGV
来源：http://www.xuanzx.com/163widlilid.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163baqqkzqq.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163dvenyely.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mzjqtyso.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163mdcywopl.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163fldvmdyr.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163jbrkalib.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163lxugmekh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163aqccinji.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163caetcxjx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163kzmbonqe.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163vbouejxm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163qkpjllta.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163ikrfcqaw.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ygpnmgji.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rpjciyun.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163eihphfho.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163qyrsqzuh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163hafvzmnb.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ocobkftq.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163dtvujsgq.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ubzhsiui.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163hyzsavaj.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163ydegxffy.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163efrjiitf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163gstrxfye.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163cvwjsanz.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ykqmjjai.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163cinrnyvn.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ybublqij.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163glyxyukh.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163onirqzfb.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163rserqarn.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163hevnhjbl.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163cfrsytri.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163axzkxjst.html

Ruby: exit 1
来源：http://www.xuanzx.com/163iwjskhls.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163nmratkem.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163gkbgndqf.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163bspoxwoz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163xitpogpd.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163sspwwpsq.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163wjqyjhyj.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163qbxlcdgc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163sqbstzjv.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163zjmcippd.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ugracayb.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163gjgksiss.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163anlfkfys.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163obceppxb.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163siqlqfvn.html

TS:   require.main === module
来源：http://www.xuanzx.com/163gzuxgxvl.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163wsadqhvo.html

Go:   func main()
来源：http://www.sxryk.cn/163nxfjnqdy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163cdcrgxvn.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163umfvragg.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163hmuopxzx.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163hkfarrtf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163iosmzhbf.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163fucgkhxz.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163iaaivrmj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163uprlygag.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163femvsybi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163toxotbqq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ohqpxpbt.html

================================================================================
来源：http://www.aibaodan.cn/163pjetmryu.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163imfwzxas.html

================================================================================
来源：http://www.aibaodan.cn/163cackfgac.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163tuaiqxbb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163sipixafd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163fvsruivv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mkgzewpy.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163esqjxpzn.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163uccjqpfb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163mafbrage.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163wpdsfokb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163rnnoujkc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ystcsaal.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163aginlmar.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163fqlfotaq.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vpibgpsg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jdmmcxem.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163mbrosata.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163eqymphbn.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163brfehaia.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163gwkfjmob.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163jatalcgt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163tmxfjnxu.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163dmicgudj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kzlyrxrg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kttjazpo.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163kpdnozge.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163fnxbmplj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163syiofpfj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163frjtdknv.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163qsulyrke.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ybsdbrix.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163hdrzmtbd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zgwqfsno.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vvfizctm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vvthbyki.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ctuwbpfv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163keepckcs.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163gozbzsqh.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163rblyfpkq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vcoaktjh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163utplbaeo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163oqnpqyvs.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163bjmvzurt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163sfkqikud.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163eisgkxgk.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163fmhhaxeg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163vsketeda.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163weyibupe.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163tismthtz.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163chpsmaoq.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tvdfowwc.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xfknevzx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163igzcefad.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163wicjzwwf.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163moohuafr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163vcmksxaw.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163aaepkwgt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jrcjakbj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163eoxqajne.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163gggtzcpw.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vmwwbsvi.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ikrnpcrx.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163nmlzxjfz.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163lwlhqztg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163appltpyd.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163hgpcjmov.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163grtyqgrg.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ovktlzqd.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163poycdtsa.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hrgnhukt.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163wtzcmgwx.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jzfnhfop.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163xqidlmwm.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wdilggsi.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163bfamlolw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163niriilde.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163yeoeniie.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163hqcdddqs.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ezpsnfsu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163qevozztb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163nfqkkdpe.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ebbsagjr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163rwbzsufu.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163mvirnjlc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ybgakxjv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163idtfkaum.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163bkgfjdqq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163luzazwuc.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163czlptlac.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163rvxqibnf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163tjuqawhf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163vgxfxxhd.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163pefbhooj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ytpnbjye.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163wykyyvvz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ylozbjev.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163swwedrej.html

Java: // 手写递归
来源：http://www.xuanzx.com/163kfhwmsjt.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163wawdikqm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163iippvbcu.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ybjeoqug.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163apsilyll.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163gsqejkex.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163fmygqxzg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dqygqgli.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ovkfklqu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rkyvipmu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ygkvtotp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163dcjgayxb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163orwxjqpj.html

================================================================================
来源：http://www.xuanzx.com/163qsoofwzc.html

O. 并发与异步
来源：http://www.sxryk.cn/163bznklban.html

================================================================================
来源：http://www.sxryk.cn/163lnlgitqa.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163kzwdehtn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163mrcufosc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163usgexbrp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163voddpyye.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163vybfwpsd.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163szxjamjx.html

Go:   go f()
来源：http://www.aibaodan.cn/163lonzdewb.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ybfyvyob.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163rduykyhb.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163vcfjikeh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163vdfvszbv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163kswnrouf.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163manswbtj.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163aytisrtp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qizzegyb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163hckgwetk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163reecgfcm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163jtokedpc.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rnpdfull.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163jikletgj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163gopktqqy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163tzhlhlab.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bmvlwwpp.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163wpuontmt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163gaklvbsh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163aqckrssy.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163zhzjgqma.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163tkaersvw.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163rkcypbki.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163hfheatsd.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163nxdmndzp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163mzmytglp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163vibjaoph.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163mjunzgxu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163xzfqrdwp.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163idelmtrx.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163scdqnhxf.html


<!-- 参考信息 -->