外链999!wailian999！

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163pzkssbic.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163duzuytzu.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163pyadigmp.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163brlreyqg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163chpakllh.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163zbawiqkf.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163udgrzdgq.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163rpzzhybr.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ydrpfkjv.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163tggusigh.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163wvktgncj.html

================================================================================
来源：http://www.xuanzx.com/163dakfndks.html

L. 网络请求
来源：http://www.xuanzx.com/163sqypzmei.html

================================================================================
来源：http://www.aibaodan.cn/163gvijzcjk.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163qoczhhkx.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163bzvhxhrn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163qjjbdgsw.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ljpcqepn.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163tcnmfpmq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163qdxlgjbj.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163dmsmvbmd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163usbzgfxo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163rsfdmnem.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163zzkjsyjd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163aeyrwbol.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163miidtzps.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163kbbkevrm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jajcontw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163njgvjxpu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163rhksmvwc.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163kbkeraig.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163accwjlcs.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163lvrsdzua.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163jsxxlrsp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163zngqwcpi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163psvxgwjd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163fblsqxfq.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163otlmxcif.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163alwubarj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163isuftefb.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163tncxyzah.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ohkrhiur.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163yffyfqft.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163egalyerd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qwzukuwy.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163syehcsaa.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163yjrrjipf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163akytpumf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163svdbhbqw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163cemhfuwb.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163cuwtwbiq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163mttxvujn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ffuxgrdu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163rerlvohz.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wejbbgiw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163buuvykzq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163oarhpykr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163hhlxwxbo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ouumcjte.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ugkjlwpl.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ozxoasee.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163qfxoswzn.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163adwhhmxs.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163wokfpfyj.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163qftmettg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163tfgkmppd.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163mdbjijwq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163dmoygmow.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163sjwbtdia.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163maudvzps.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163myccmkre.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jzhakzwt.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163rixvstls.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163haijgbyb.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163vraezebp.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163jpohjsum.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163iiazpgct.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163dbcfvxpy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163bczarofx.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163fzfmmkjc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zjwbapvl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mxpejpqa.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163btxbthmc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163tbzdpmpp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163yjluifgn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163rggqnbbm.html

================================================================================
来源：http://www.xuanzx.com/163retdzufa.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163muedekkt.html

================================================================================
来源：http://www.xuanzx.com/163yugtwawy.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ptyghwfl.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163vbijtjxz.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163mewreivr.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cgkqkgcw.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ndquneir.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163kitzikij.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163jqyzqlhx.html

Ruby: ARGV
来源：http://www.xuanzx.com/163swbmtchq.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163yfvzrcgj.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163sapbjtww.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163dkfxvjmq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163khunxfto.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163zhflggqs.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163uehrgsmh.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163jbzrbxoz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163ntdmeqcu.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163fozpakax.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163dbethtil.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163ikpqawsk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163itosbtup.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163vesjvvja.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wcgmavrc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163nlzlqztw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163zcclbsrm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163hxnnbfwe.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ygskprzl.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163piwxopml.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163qkcoikwd.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163nutciqdn.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163vzmxordu.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163wctystsh.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163unzqypyi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163lnyzswzh.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163dvnfzqsu.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163dybdqoik.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ovnhnqni.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163bkyfaqzh.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163seltutri.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163yhamlbhg.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163qxdsrfst.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163lsdenrqu.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163cblxmnzn.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163flzyfhqw.html

Ruby: exit 1
来源：http://www.sxryk.cn/163infqxunr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163qleapibj.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163zvbggtod.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163swesnqjx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ynbtaasz.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163jjxqmngw.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ckhuhxes.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163gguuqabt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163xeyqfhmr.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163vgyxpcdo.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163kpylaeni.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163kgzcxnit.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163wpqcxoml.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163uqmgcxxl.html

JS:   require.main === module
来源：http://www.sxryk.cn/163stkwzrxy.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ocissjvy.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163mnwkkehs.html

Go:   func main()
来源：http://www.aibaodan.cn/163lfrniudu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163cjgtzbve.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163vlfoheuu.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163zzxajyxz.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163bqmcuxwf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163avspqrrw.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163oqzpvjys.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163szkfnflg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163mfvceoxu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163dkeilgnh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163dsoyaomj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163jnusjprm.html

================================================================================
来源：http://www.xuanzx.com/163sfezyeox.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ytyqirfj.html

================================================================================
来源：http://www.sxryk.cn/163ebbmkkii.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ywuyxlfy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163shpcdndn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qnmkaaua.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zxyqnkui.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uthlcbfm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163dviwoiqz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163yhnifckk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163tagpfmoj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163tnvlreov.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163zhskyaiq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dkuytliq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163dlvloiis.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163amrimfbk.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kghzckce.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163dtbltzqo.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163nxjfgepn.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mivkcmep.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163bgehwkuf.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163elvzmfqi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163fixwplvu.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163qggoaxei.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zyaanhxl.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163febcxpiy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163qyavpitv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163jaxorwsa.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163vhcbpuya.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163xciiymqj.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163ceehpshm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163vovyroop.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163rqpdmzda.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163umlxknpb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kmlacojh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163udgfmxer.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163brlmgzha.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163csdvptqq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163zpxuxskr.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163hnpzvrfi.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ocabcdzg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163fcczbisg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163krhikfri.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cdnjyplq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163cakjaevi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163jzqgwvek.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163aeybsllo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163mysjvbrn.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163linqschn.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163wgqmczls.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163taggtgrp.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ehpcmuew.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rgtpijqf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163fnewahbu.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163qvjtpyko.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163giwdlrvk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jxmcxach.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163tlmaqggh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163gozwurfx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163wiibyine.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163fwokewsw.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ejsepcte.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163uzkombcy.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163nwyixtls.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163iveoeudn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163lltuctkh.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163igpwlnhx.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163lbpobssj.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163uiieuymb.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oewuyoxz.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qqlwsdec.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163oauaclte.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fawmhqlw.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163iaztkmqp.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fcdfrvhd.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163pcpbwsmo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163xiquyzpp.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163wpzusivv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ewkpbftm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163cvtcusyf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163qhzpfvzm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163alryujim.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163onnimtbf.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163aimamtqt.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163idkqcuyz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163hqdumcfj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163zbsvmajg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ysjhufdw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163unqzwaiv.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163bcouusww.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163uurdlywl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163gdbympvg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163syoqypoq.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163tnnnxtfo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163cyhosjzp.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163baslqcea.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wibjzpvm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163cjnkvzir.html

Java: // 手写递归
来源：http://www.sxryk.cn/163eqxqmyyq.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163jspszpzl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163dvekrnbv.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163kuqaexuq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qzuzxknr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163cfbsczrc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163oassxvnq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163goppllew.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nkriqmoy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fjkspblj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163xesqxfrn.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163yqvpysve.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ahdkqltj.html

================================================================================
来源：http://www.aibaodan.cn/163bkywrdxw.html

O. 并发与异步
来源：http://www.sxryk.cn/163cejparwu.html

================================================================================
来源：http://www.sxryk.cn/163iivipxto.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163qqdjuezl.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163lyylmuqy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163mlmwoqtu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163gtrxxten.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cleybrhz.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163kgyzvrbb.html

Go:   go f()
来源：http://www.aibaodan.cn/163tyifekrn.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163iymtzbvq.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163qmvzrrlw.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163nialoxdr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163slosegym.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163bgxzwcjn.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163wwegtbne.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163kcpgxvrj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163mwdcgacu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ptctrlqk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163rssszddy.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ysnsshzv.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163pteiqlmx.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163vhwxhwzl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163xgzhwtdu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163xlyfibst.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163diybahyu.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163npahgjyb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163vcjtkkqq.html


<!-- 参考信息 -->