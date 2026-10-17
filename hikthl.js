外链999!wailian999！

Go:   encoding/gob
来源：http://www.sxryk.cn/163apbtserj.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163xanszykt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163dfbytbpx.html

================================================================================
来源：http://www.aibaodan.cn/163jihsrvwg.html

L. 网络请求
来源：http://www.aibaodan.cn/163wammyyne.html

================================================================================
来源：http://www.aibaodan.cn/163aogbjgvj.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163lqxwsddb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163urcuxama.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163pvpheylt.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163vjpkxpsx.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163glbozusn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163vctwkidj.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163srsiqsdt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163yyxuiarm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163hvywosci.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ucgebmld.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163cejvgtmz.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ycwicptj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ippbvetx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163hvbsdwbu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163kimvvubg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163yrziawem.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163dbapynbj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163vdoyovib.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163hdnjhcxa.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163niytzoif.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163sdwzptwb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nselvcxs.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163iajeubmr.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163lkaaxemp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163iugmipnp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163ndnlungf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163chsxbojm.html

[L04] 设置超时
来源：http://www.sxryk.cn/163xjofawvx.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163nbjsptws.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163bsdqfabc.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163buuynhxe.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163tynicoen.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163lkqevqip.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163dcdlnvyx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163mtfxnuvb.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163selmmmem.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163fpgcgqcz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163mfemlrab.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163pqqemnuj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163evorrgao.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163evetwzyj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ogayfngv.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163bxuicobn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163fzbleyus.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163gfkiirui.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163jfterxyw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163wogktjmc.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163ccvwgxle.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163qyivwxop.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163kisnpndb.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163hwjihhos.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163etmrlsnt.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163htwgzggf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163mzooobsj.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163zbqntduh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163sytjzbqy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163yonztzas.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cqtosrul.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163tyvfybab.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163yhkhlnga.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163jhtutsha.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163vdyzbehl.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163luvuvsrc.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163zruiidxy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163nowylzqp.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163rxjsumvv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163hiflival.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zmvkqoza.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xyaqideo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163xcqqksnj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163tisyidcg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163cmmzjmtt.html

================================================================================
来源：http://www.aibaodan.cn/163kchetzap.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163fvujmnqz.html

================================================================================
来源：http://www.sxryk.cn/163jrnbjnfw.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163lurnsank.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163wcfrckwh.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ggpremxb.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163irvmkcpz.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163wwsyhqav.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163eotuwpds.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ctodtznm.html

Ruby: ARGV
来源：http://www.xuanzx.com/163tlxejqut.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163oxnabaiq.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163sthtlmlt.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163trjphjtq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163kwyvgyti.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163rhlllfbb.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163xbnlyetm.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163lxujjuwy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163opzhxwky.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163hjcglhdb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163lfbconxc.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163uintxajw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163jlqqqvcr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163oyrnoxht.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ugusfmau.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163aldzaiee.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ddtoxfwo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163sgsibeky.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163fyyzsgmb.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ogprjpux.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163leefisru.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ntfzqsts.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163gnhcrqgk.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163bqfpzzla.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163tzmiwlyl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ermyrflk.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163oucsdlfp.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163zkobrpus.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163iqmglmcb.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163uyzrcbfz.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163nyrtxzoq.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163pklfhmba.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163likobfpt.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163tqemvzsl.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163lqymeihp.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163gstwdarg.html

Ruby: exit 1
来源：http://www.xuanzx.com/163jejsnmwc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163bzlxkhga.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ylqcbocn.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163xbwmlfsh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163guvqmruh.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163nmtnnwdn.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163grvkxtdm.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163szuxaexa.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163nipbqtuz.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163wivfacjc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163dvxkwbpb.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163uooqowqr.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163rbrxbvhj.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163lopzepis.html

JS:   require.main === module
来源：http://www.sxryk.cn/163hvhtjdqu.html

TS:   require.main === module
来源：http://www.sxryk.cn/163mabzjrco.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163zbjmprmb.html

Go:   func main()
来源：http://www.xuanzx.com/163jivcdmqc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163wqpwieuy.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163pkvwrzre.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163qanjzdjg.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163qsufcqiq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163nkzxerun.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vysgoqej.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dhraombw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163mwtvdpir.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163vvaqhfos.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163thwuczhq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ejzfjqsb.html

================================================================================
来源：http://www.aibaodan.cn/163pyiqnzrv.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163zluizkuc.html

================================================================================
来源：http://www.sxryk.cn/163gwhyhvye.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xmrtnqzy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163bsizmpvg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163nfsvsevl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163okqxqyrp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uyistiwc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163aycaztmw.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163yaynbinu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163koxzqblp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163cogyzjve.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163savzdddm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163chvfraei.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163zikdoiak.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ajhiurbk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dzwfpkly.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163gcdmmkxc.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163kcevwvxh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163yfxtrutj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163rqsxrvwg.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163uctisybx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163jumzzfoc.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163rgtkdnpu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ffkioubr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163aotdzzgz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163rzkkopum.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163qqkultcm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ejrbaeno.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163npygzqpu.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163bcusmklc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163knrjertx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163qeklglxy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163nmdbkzvk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163djtkwdri.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163mkhwoxni.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163fwhpgegc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163eckgpnrz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163xoaccwyd.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163krmfxsui.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ttqrljyf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163czhoccwh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jvihggvh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ecmzhfis.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163hgyakmax.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163raiyjbru.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163bqjzyhys.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163jfsnbmaq.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163dqdfiiju.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ytsydhot.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ffyqugmg.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xkbelldc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wkrdscfa.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163vkhljzrr.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163tbdtgqro.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ggcbgrzx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163hyyswarz.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163vpibbljh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163ffkblejw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163izauniuq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ickyfxlh.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ypofdelr.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163fcllkyoi.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163cfnpyodr.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163kzdnirrv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163mzgrbfdn.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163dmckphto.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163wayuziwh.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163mlajlebm.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163usnevdzg.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ptspbjwe.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163tjwejnif.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163iyrofjri.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163pzymvdcf.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ktjgfpdg.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163cjvvxgoa.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163qkmifxyh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163fznsdogp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163wakvteqx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163iquftgfm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163pahmaqpx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163mietscru.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163chvbtdjg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ltoalfkf.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163uefbdret.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ssnlyvoj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163uhcvadnq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163dvgdjgqv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163mzimvibk.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163frkcacka.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163puwiijau.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163eidooctr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163hufezavn.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163yuskmref.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163vsuhzggw.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163wdiazgiw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163tlhlobhb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163eukiahyx.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163wfhtzkza.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163pgkclbuq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163vpcgpckk.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163vefpkvub.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163nmyifsjs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163molzrvkl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163cizpgchk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163chlgfeav.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ilumyjct.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163uykrsdne.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163wldtpqja.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163zgamzaci.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163unalvosv.html

================================================================================
来源：http://www.sxryk.cn/163astaszdc.html

O. 并发与异步
来源：http://www.xuanzx.com/163fuwsyjwh.html

================================================================================
来源：http://www.aibaodan.cn/163spdiowry.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163jercgdbp.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ckesodwt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163omqrdcxf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163buwqihqg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163epcflbqv.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163kyybzzek.html

Go:   go f()
来源：http://www.aibaodan.cn/163lbojcsmz.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163hqymfqdj.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ntxjuxhi.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163lpwiscdt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163mljytadr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163tseczhdp.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fzuxbxwl.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tusotndr.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163urzamqkc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vqyvckcs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163mdcugwsz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163suqbvcna.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163jqpklvix.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163bkvsaczy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163fefkehej.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163pytfyhyg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163jstcxssq.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ahtqokxm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mhagydrs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163vnfsatqf.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163wbajrssa.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163rgkjwwtf.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163gmuczlpr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163mpxvdspa.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163clgjxdof.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163lzfhkgom.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163oybgnjwm.html


<!-- 参考信息 -->