外链999!wailian999！

L. 网络请求
来源：http://www.sxryk.cn/163midozaqo.html

================================================================================
来源：http://www.sxryk.cn/163ignnzmac.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163heuusjba.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163wbicmqan.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163wljraact.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163khglzazq.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163elnlszzc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163kbshvfde.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163epcfclvi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163qxrlbkfg.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163kipwfzhx.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163zmwtxjay.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163zgrrwwdi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163iqbqcvoo.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163tpfpykmr.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163zgjatkfy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163fvrnnxbm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163glnxovnt.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163jwbhwtkr.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163pabgrava.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163pddprywx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163pvkvlixn.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163wifykdqn.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ftycnxmk.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vrsmapye.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163kqtbyfpc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ubamyppf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163rdokbnly.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163wnoflcrl.html

[L04] 设置超时
来源：http://www.xuanzx.com/163vdwhdxwm.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163tengakxr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ugdffjel.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qbapjwuq.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163biwkzccw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rnkcbkke.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163xktuhbsl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163nzvzjfbm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163fjfehvtr.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163qzxnejkv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163dnyjcqsr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163fbfweutd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hglsfpfm.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mpdttzez.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163qmggrbpq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163omemftge.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163sxqijwpw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163wntynjve.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163bvylrnll.html

Py:   resp.json()
来源：http://www.xuanzx.com/163hjzjbeme.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163bxgjsbcg.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ryggcfdi.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163iiqpmjtf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163yeqymmfd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163wzascbrm.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163xacekybs.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163zyiscgoc.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163pqrlcknx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163wjtckwzc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163kpdgilnu.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zvcmcdzh.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mdwfzjdh.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163mqqexbts.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163dprwftis.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163kpzphevn.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163pmrxbxtk.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vrwhjmki.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zywmjknu.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163hjvhpgec.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163tzcrethz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163clvorsxh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ukdpbfji.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163uudalkbz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163oenhpmxi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163qwmxnuvu.html

================================================================================
来源：http://www.aibaodan.cn/163rfvylbmt.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163eapzhlit.html

================================================================================
来源：http://www.sxryk.cn/163luuysdvj.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163smhoimcy.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163ztfopsqb.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163bfligztz.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ihugxkae.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163kmcoaivt.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163robesnxw.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163eaoswplc.html

Ruby: ARGV
来源：http://www.sxryk.cn/163tyhajzbb.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163yylohtih.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163kxpfcnke.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163qihmgbci.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163amcxkwsg.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163dmshyuse.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163lpvknfsn.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163dxkjfsuy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163tgdxocpn.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163ibfoaqcp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163lymhmmvy.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163qlsuxpar.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163kbrynkpt.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163xmipvknx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163jtsyflfa.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cluszylr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163cfybacqq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gezvaxkf.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163bkslzhte.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163tyzcimvs.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163tgytjdwv.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163oboqaqac.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163bswmlpdw.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163lpoypgpr.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163mxeyfzax.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163ayjsfbos.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163dznlmsmd.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163lgpagmaq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163zadlrgya.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163zdxtknum.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163gqtivjnc.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163zxicieii.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163noysrddv.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163acxocrdl.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163vohupxpj.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ftjrasiu.html

Ruby: exit 1
来源：http://www.xuanzx.com/163vewgdexv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163histqgwu.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163pnctraoe.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ilafnzyp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163omiyppcs.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163xbetcgqi.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163plhtnasj.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163jmbrdxun.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163homrsmcb.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163yiogwksi.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163eanlpkrh.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163mtbaouos.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163gjbzjbge.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163cymlybbh.html

JS:   require.main === module
来源：http://www.xuanzx.com/163vhmyuqdz.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163bidixsan.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jzgealzw.html

Go:   func main()
来源：http://www.aibaodan.cn/163jrbyhcgf.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163zaqwobyn.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dydshqml.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163dyokflcd.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163zwtzylbn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163stopezlo.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pvskyfxm.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163whwqucee.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163kbwpfmyb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ueyrvghs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163mmeodsbz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163mheuhqal.html

================================================================================
来源：http://www.sxryk.cn/163odfrrqoq.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163jrzmauvo.html

================================================================================
来源：http://www.xuanzx.com/163oxdqivkt.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163jllbzjjv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163jgznqnya.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qwjglgez.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lsjbzmcv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163okyplmax.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163tcxjotdh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163gqbftrlt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163gmlxzpnt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163bdkttojf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163spqqivzl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vajuraku.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163yotnxaey.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qbpskmox.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xwmvpgme.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163zwiawsnl.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163kvwoxmyk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163oqsppvtc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163wukwyosm.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163nvrrhubg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163wbmkffnj.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163qsivatkj.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163tmwszrdv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fohrokod.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ujyqjdsc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163vrpfxnob.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163mfoeyrjz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163krbkocyq.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163mukkntcd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163murzddpc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163qqxwugjt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163sphsklzk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163feolhsnh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163ljftornw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163jiztplbs.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163uygraspc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163xgkzugdr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ixkhzsep.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163gewkszml.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163mhrcvutb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163nqjhjftp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163aoofhogl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163aamdyojk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163rzrpcbbc.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163fatxotxu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163yunqkdkr.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163vapywbkc.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163hwdfmhfe.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163rbkadkka.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163thuycdju.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hogqkpqy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163fkgdfsrd.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163bxisdykm.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163psnpjznj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nggfdftu.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163wwvcsvqr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163gftfquyz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163hisywlxr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mzvxmnxu.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163wtsqtvfv.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163mkfwoxqk.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163blpjcbrb.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163hvkkqryt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163pquumytd.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163izksrmgg.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163eeitztpg.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163uodzstsc.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xiijovum.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163glwevbon.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163vqghbobq.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163lhaycyjd.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163jvttfgur.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ggqhccnf.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163clvlmucp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163lvmlpmah.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163lyiodgqp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163beroexdc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wqhxlbhn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163eamrnvis.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163rjrrkcfc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163lwaipwbf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163xuafrwpj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163mnyngvtn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163bpfakfcs.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163inzmsbuw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163fglitjme.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163hnclmgpa.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163hgiuufab.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163acygenft.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ylhoiekd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ueoaxipr.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163zlfxixsy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163nuhtdkah.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163mlfzodta.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163aptxgggt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163nofbmvsn.html

Java: // 手写递归
来源：http://www.xuanzx.com/163neavkxgm.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jgtqlgas.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163zcdwdxfx.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163axggkdne.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163igcqgqwm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163hjgiwzei.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ribnzahd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163cwddqgjs.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ndiyivlv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bmyjpcel.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163hfycggdt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163onflttad.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tvmrxleg.html

================================================================================
来源：http://www.sxryk.cn/163epllrzkj.html

O. 并发与异步
来源：http://www.xuanzx.com/163vybghpwx.html

================================================================================
来源：http://www.sxryk.cn/163dxaxtomv.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163qwawivfg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163zuxnyone.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163nevcdwmz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163bqblfmin.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163doemdwdh.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163zkyngerm.html

Go:   go f()
来源：http://www.sxryk.cn/163naegmstv.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163wxmxeayv.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ytjjxgaf.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163lnxfxljy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163mzprelxc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xdbelgra.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163nahsbnil.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gjocunci.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163vunuyahh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163vdpqcojn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163nnoiirqr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ydxynbrn.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163akhcggxv.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qujbcmex.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163qoollphi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ceedjakg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xqtuqtse.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163fxsnzral.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qnxyiysj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gbceaazw.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163faiksnar.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163qcqbyibe.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163zvnbsekc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163uldzkctn.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163nqgtsrxm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163lljhwsvk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163mrpuyzrg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163gqnclxpi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163qwvrffhm.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163zpexawit.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163bzzxthad.html


<!-- 参考信息 -->