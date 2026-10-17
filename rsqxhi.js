外链999!wailian999！

Go:   encoding/gob
来源：http://www.xuanzx.com/163urjtarvp.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163hostvygd.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163zuvjgizx.html

================================================================================
来源：http://www.aibaodan.cn/163rattjlpq.html

L. 网络请求
来源：http://www.aibaodan.cn/163ifjzxwcz.html

================================================================================
来源：http://www.xuanzx.com/163nlvzmurl.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163thxjmftx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163llhkaipc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163folfcvga.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163odjxhzvq.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ndydarrl.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163nzyzyhqs.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163iuapwosz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163gsyjbifb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163awhwvdcd.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ckrmvbbr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163vaklkfof.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163aqbvgeqr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163sotdkjzt.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163abpsjbha.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163ubyvxjcy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163bxayxixp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vjybkact.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163bvjcsepn.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163luiljvmo.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163vqmtbwmb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163cjyjznza.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163mjqxczxq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163myprqbtt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163bwbxyuus.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163fdlemtru.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ndbtrrjt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163njjejnld.html

[L04] 设置超时
来源：http://www.xuanzx.com/163gnhxjepl.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163hpmpxcow.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163kdggrqgm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163shggvwis.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hqaovoor.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163xuqusfvs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163tjtywtgv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163lnayzoib.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163hcdufkpe.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163qpponuhf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163qwzeqdhu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163dpduolvb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qlppirfl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163udtlytkk.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163nqmjyjtt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163zsughnco.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163xtlvonou.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163dhbnjqzw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163uzmixcmq.html

Py:   resp.json()
来源：http://www.sxryk.cn/163llrqpqmk.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163rrwplwcf.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ifvhmbfi.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163dvzfkubh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163qkdpuilu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163omlczizr.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163caitltoi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163yjfepkzu.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ukqwjqsy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163dyswxyap.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163njomxsyp.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xfjfwzgd.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kivxgcbc.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163veuautsw.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ihwnqveb.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163vjbiznfl.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163hxifnaor.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163xywlwtmq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163gpljpxje.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163atvqdqqk.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163cubsxnea.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fkuggqvk.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163kywraqry.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163rinprooq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163hbmcwkru.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163kwuaqzsg.html

================================================================================
来源：http://www.xuanzx.com/163hantjaev.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163hqzlvhnj.html

================================================================================
来源：http://www.xuanzx.com/163nhbgztif.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163dobjblop.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163aybysmlb.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163xpkcftmj.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163uaaixukh.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163sqsoghet.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163zdwbdrbi.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163wonyzhic.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163ukibuxxg.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163uoplpbos.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163tevdmlld.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ihejonmd.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163jzptaijq.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163gnnbplsr.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163pcsvcsfv.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163osrkmfrd.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163blhrfcij.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163iafwfowk.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163mpkrduyv.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163uiwuhjnk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163idjyonpe.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ytuhrjus.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163paelhghy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163iunzwgve.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163lxakukka.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jjnyyxzx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qezaxlok.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163xwjxrlys.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163smkkqnsr.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163bfxykwfv.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163erfwgcve.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163nlzdptxo.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ikecxjcs.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163dovwjngg.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163mehququk.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163nrfybaqb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163evfpqglw.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ruqizugg.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163tfclbkdx.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163ritivqpo.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163wqomggba.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163penrwdsl.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163ioyrmywq.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163hiegilgi.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163qfqnlfpx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163hxdaxigr.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163vbpttdvu.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jjzlcidd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163flyfdqfp.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163vqugxygo.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163jlmhctzm.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163fjtimtle.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163lesllheh.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163scpxyhwt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ixfmlodk.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163tmahnffc.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163qdzqfuit.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163flhaedkw.html

JS:   require.main === module
来源：http://www.xuanzx.com/163asbhybil.html

TS:   require.main === module
来源：http://www.xuanzx.com/163blmfwluj.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163eugfesvv.html

Go:   func main()
来源：http://www.sxryk.cn/163ctxakzow.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163kckjalqz.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163uecaomaa.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163fomdjkeh.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163aedeoeku.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163cxrdwtrg.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wgwjakmd.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tdycyzaa.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163jnkrgmgq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163dksqpklq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163dhvjjzxa.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163hnwdxdsf.html

================================================================================
来源：http://www.xuanzx.com/163mvfakttw.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ojphrlmk.html

================================================================================
来源：http://www.sxryk.cn/163qsplyrxr.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ruvjijal.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163zxpqvoyr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163gyphxikx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zjsrmscc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163cmfcwlem.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163sesgfxta.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163apxmvzwb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163aiezfcsl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163pzuzbocv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ffwltjrs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zfzlichv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163fmdqsnog.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163splqkgnu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vyfbysnb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163qesyrswc.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163dglkefkh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ndlxkokt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163vtstxrhb.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ekrfmshp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163hlgfhhfq.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163bnpzocoh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gccbrcdb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163dqxsxltj.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163imzcjtsp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163yozpuzkv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163fyldgkfe.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163eyjdlssk.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163dwxkpszk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zushgssj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ckuuifhc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163qujjwfwr.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163omfxxklu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163zhuudprt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163ikhxnusi.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zhqgwuci.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163drydagbd.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163narhdtce.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163tqoeaqig.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163htwnofpf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jflgndab.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163oakcznam.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163fjzmryna.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163kahcathf.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163kfdiliau.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163mymifxdv.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163esqsoofv.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163xftyvdei.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163dpjudlli.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cbhvohue.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lgycgrsf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163jdzejrdn.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163xfmettsr.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163equfnked.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wpbblxon.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163weyqcedo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163qbughgtj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ghxartxb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163tnldfydj.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163weuuzkxz.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163wihmxcey.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163lpnxjfeb.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163zkmtpewi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ethfircb.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163viwygxnt.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163zyedxkuq.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ukwcdqzb.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163tylzibbo.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bjuklzfv.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163nxjprvqs.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163pqylrabu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163gtvxpmmf.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163rhztnhti.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163jvpsgtbu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163awnfyyca.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163ipwttkyi.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163xoblcwnc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163hlnoajbb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ydepztyn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163jhecmyon.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163jmldesok.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163pjrtdltr.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163wdbwsmhn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163vxgdhliu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163zlznfmni.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163djrgeoos.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163pnkrychc.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163imcoclig.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163wozmhxel.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163zckeqfls.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163cfftmumi.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163wtwaunte.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163yzvrhdjb.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163yybakubl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gdlbkpse.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qvpxsnki.html

Java: // 手写递归
来源：http://www.xuanzx.com/163piuerksw.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163vvyrokqf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163gveozeiy.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163youyiabq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163dwnzjsae.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163yrpckvym.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163hcllshtj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ynirgktg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163rtrzixok.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163anrqfyat.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163yfdqhivx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163krwzynyl.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yttibyzm.html

================================================================================
来源：http://www.aibaodan.cn/163nxiekvul.html

O. 并发与异步
来源：http://www.aibaodan.cn/163mejljjzz.html

================================================================================
来源：http://www.aibaodan.cn/163whxicgwp.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163jybkqyjj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163qplxuxeb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163wzflinwa.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163kivsfpmb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xtszxwjc.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163tpyalcfg.html

Go:   go f()
来源：http://www.xuanzx.com/163kfyiqqzg.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163wpkughyp.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163guvvoask.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163amtempji.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ttprlscw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163zqjyjrri.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xtlqmmga.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qefwcfrk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163alvcavfr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163jgwexzgo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163iqhthxkz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163hwwyjtlf.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ikathome.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163setucswr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163owjyxptn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vnxuxfqi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hzlwunks.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163sagukcmz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163gnkywgeu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163nbowloew.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163amoltxcs.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163dimsryop.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163lycystax.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ptnhvvwi.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163koingydh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163dyqcldsy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163mtqehprh.html


<!-- 参考信息 -->