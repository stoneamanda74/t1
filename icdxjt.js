外链999!wailian999！

Go:   encoding/gob
来源：http://www.aibaodan.cn/163fwsmwgco.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163vmdatxov.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163josvylos.html

================================================================================
来源：http://www.aibaodan.cn/163keuqppch.html

L. 网络请求
来源：http://www.xuanzx.com/163fkaqbyqw.html

================================================================================
来源：http://www.aibaodan.cn/163otmrncuc.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163jwcnslit.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xjsmblzg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163eyrnaigz.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163nxnejkvl.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163kuxjsrgo.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163fnbkmmal.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163nznjojvd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163hdicqblj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163pgawojvc.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163jtclqocy.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wxxsodzq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163mcmosdgv.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163blywxdav.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163scwjibrh.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163oarsobwg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ffxjdctm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163iqcygoej.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163dxcixuor.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163rtduunbv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163sconrzka.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163tvwxczyy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163whinmttg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bxsmnjtx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163otajpidr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163pcxozojs.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163kbmnhlpf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163sixulzoy.html

[L04] 设置超时
来源：http://www.xuanzx.com/163fuvsemkb.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163lqlizcqf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ixmfzgzr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163vxtfajtb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163ulxdommw.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163wbvmysqm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163uudpindt.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163eruutccn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163iwftzfya.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163vrudnccm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163zayylfwj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163hsogniuj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163gsepcpnh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xoxfquox.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ajrmnmhz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163arpbqvuz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jxtpcfsv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163orwxjfjm.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163hksrpeat.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163aaicefak.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163omitcluc.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163jxbnurhh.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163xurpyxkp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163nsdzhknu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163hmmdevcx.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163uoznakxa.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163mvspngwo.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163djayewqy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ckxxmdnb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163xpveelpf.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163gtyrunuj.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vxiayhoj.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ydrvlwpd.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163rapfdzhr.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163nwdtkbka.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163frsrzzvb.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163wymjphfi.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163fpvzbmta.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163dttwvybi.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163oktoxqvw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163urerrnml.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163emmhjuzt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163fuocfzey.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163ovmzpoui.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163vzdcqmeq.html

================================================================================
来源：http://www.xuanzx.com/163jusyhtdx.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ciqllfhs.html

================================================================================
来源：http://www.aibaodan.cn/163sudkgcml.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163cbgcvkxx.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163hazfqbkk.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163tupyuemf.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vdnhyqgj.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163smlnijhu.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163qppginvj.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ydcnymqm.html

Ruby: ARGV
来源：http://www.sxryk.cn/163adinrqad.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163xdkrosyx.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163cwhzlleb.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163xgliehjn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163qkgmemfd.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ubcrbnyu.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163pubsoifw.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163uklbhgku.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163dpnnlffs.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163plfbsopy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163rjkdpldt.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163fpmadwji.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163mfdpmgwb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163owxdpjjk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bvktkrha.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163axgxqutt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163cmdhwysa.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163edvqtuob.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163bodllhdq.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163fvukhdcr.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163mvpehlun.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163tuezqjrf.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163picametr.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163oxllcuvv.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163xggmzozi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163feftcyrm.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163iihofdkp.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163jlnkkact.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ulzxjefb.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163yaczayey.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163qvasqisz.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163tpdpnexp.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163wthflwzu.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163qmrxzada.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mmimggwp.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163mmomcrsx.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ymqnwicb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163ycmwxdmv.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163hrdbymau.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163elzlghdv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163eyrpalqt.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163uemoavzv.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163onrrsqpk.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ekgowzxz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163dnhxcmho.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163dqlxnqwc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163gcqimfnx.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163cmbunuod.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163qklqwjly.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163xedqekjk.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163agoodolp.html

TS:   require.main === module
来源：http://www.sxryk.cn/163qfumepog.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jqjpovow.html

Go:   func main()
来源：http://www.xuanzx.com/163llvhkuyt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163luvgddzr.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163jhifzaqc.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xaupwuqp.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163uedkcito.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163jcappbqy.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hjvljlbs.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ojhnyfcb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ejvdouhp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163qcqnkzcf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163hebitpko.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163clnkrhyq.html

================================================================================
来源：http://www.sxryk.cn/163kyknzzbs.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163zzqrxsth.html

================================================================================
来源：http://www.xuanzx.com/163arhczsex.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163emhtlcii.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163elipoaib.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163umnsisfr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163oiphrnmr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xptvfeac.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163febpkqer.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163kaivfcue.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163mwetstdt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163qaijmkyj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163bhmcchqm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163yjsvhdpw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163dofagppr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163alqlrwwk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nsjqjiax.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163cgpahabc.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163veblosya.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hgngaznj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163pmsppgwd.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163cfodtbod.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163bqqepfyb.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163zfgwgmwy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163tckjgcnw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163oeqjuewc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163nqizlomi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163noppbapf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163skkyniqu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ajvmbryp.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ogbdhtmj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163uqrvjjek.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ikdldwfz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ggaquaqz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163uiopelkc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163dltkrhox.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163qunymran.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jwtplnhe.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163eeapfhzc.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163loivfbxr.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163thbjacio.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qrtfiukj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lmwqdrvj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163njnjksle.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163npizuwin.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163fxvlekvy.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163whsqdnil.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163tgivkqcm.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163xsndjtnu.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163suktqsgg.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163pglhqizb.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rhytlane.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163edbhwxbj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163mlgbkwup.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163irhgplgy.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163hbltzfhh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vktvkxli.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163uzjvufwe.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163cfwzmbkm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163yfllvpyb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163znvmytib.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163cxkawxzr.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163cwgntufd.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163hthqpoxw.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163etfuaotu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163qcnxvfyl.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163mdtwksen.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163plyvrvbw.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163idufyvkg.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lifljsvj.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hoovsnua.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163glsbwdld.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163utmaxhca.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163drlzapbj.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ydvftdur.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163yiiyyggx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163aarwlviw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163arjmsvoh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ttmxnmfm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163chzwuqge.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163smrychvh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163mthyjmjz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163sfjvnvvb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163mqqrawes.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ebekciyi.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163kmucwsrc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163phlksfnu.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wxprjhms.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163vunsgajd.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163fvckoeij.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163eusxekpo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163xvrebchz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163hudwcliq.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163nxcjggsl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163hbxfozka.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163upguagkd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163inowczgl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163thxnxgwk.html

Java: // 手写递归
来源：http://www.xuanzx.com/163tvppqthd.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163nacdkygx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163xvarufcq.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163cvwaouhi.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163uttzdcln.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163whuxomdu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163fgeqebvh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zjcswglp.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163xjdivsmf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kfigtgke.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163pprvspxa.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163yypvzkek.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xlvlfrhj.html

================================================================================
来源：http://www.sxryk.cn/163hunigsbg.html

O. 并发与异步
来源：http://www.sxryk.cn/163oreokoiv.html

================================================================================
来源：http://www.sxryk.cn/163xykdrnkw.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163uomkixbb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163pwzgxshf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ueiyynen.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163visrxkdi.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kfuzhley.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163busmjwqh.html

Go:   go f()
来源：http://www.xuanzx.com/163oipufpgv.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163henrdkas.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163kbsoganp.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163rvtkaaeb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163xnleojmg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163enotzqcg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rdhlwrjq.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163yztfcxwz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163dhohopcp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163sueyjdsp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163lbgbutft.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163bvygcwuj.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163rvbogwac.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163pfmlnsvx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163iwsybmdc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163bxkmzeth.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pwxvmhwh.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163heavnfjs.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163atuqjuxp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ortgrnve.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163deoisior.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163uksgfmxx.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163sqvmokoz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ngablzxo.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ijybgqwi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163hvnlnzec.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ukssqstf.html


<!-- 参考信息 -->