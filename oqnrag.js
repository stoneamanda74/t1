外链999!wailian999！

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163zaqsxeyb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163kgnhcoty.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ncnnxezr.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163wfgwskfm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163yoetemsw.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163lcehqcbr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163kfhqwudv.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163btrbtbuz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163grelyygg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163skoqukmy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163ruuohgtw.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163oarnubwh.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163qkbzudse.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163wkbokxex.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163nqgggxxw.html

================================================================================
来源：http://www.xuanzx.com/163jujvbwur.html

L. 网络请求
来源：http://www.xuanzx.com/163hypahmze.html

================================================================================
来源：http://www.sxryk.cn/163ylstycub.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163kqzboaog.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163wpohbcgi.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163xafdlvwk.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163pqtzduza.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163yhohslvy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163juhttdrh.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163sdtwzmue.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163kdefgjeo.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163lxjexnqb.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163swsorqvk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163fepstewl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163tiooagui.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hiapoewd.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nmlasltc.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163sdcjlivv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ujdzqvxs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163dzubsceq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163zxaygnfx.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163lxpnxmfy.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163aaktoqlv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163pygepjhg.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163nmaiswbj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dtbpfufm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163utixycmx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163hlmnnbdq.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163lzcpgoga.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163hujodkfh.html

[L04] 设置超时
来源：http://www.sxryk.cn/163wokgpdxp.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ccczxdlb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163vaazsann.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qustuxjl.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nobkoyia.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163cnhedkjh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163astumyvn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163cgxvmgub.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163bdekghtq.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163hkjihrkq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163psvorpsl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163iteeckjf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163jmpphpva.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163sravlsic.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ysypkkgd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163dieckqyc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163suvrgptp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163dhytmvwe.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163rufsjfum.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jhpaqevx.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163cvnwpums.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163coprvolm.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163qiixrknm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163kuotifja.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163kztjcjnb.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163ylbdiekd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163farmcsyi.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163jjgzffhm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ltmcvelh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163iiddhjbv.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ehnonuwg.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163kpwbpnyk.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163jrvhrcte.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163iviwicqe.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163tljvrdrt.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163xgykzdmc.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163qwaopjzs.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163gjuzdatj.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163gfxdpdjp.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163liyktwrh.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ujwaipwx.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163ujzcmzrr.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163dbryzkvk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qtxdlenw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163suyphfcu.html

================================================================================
来源：http://www.sxryk.cn/163aiymvkha.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163gupopznu.html

================================================================================
来源：http://www.xuanzx.com/163kxpfdrnu.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163fewagdkt.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163verfwwvr.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163tjqlpswh.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vvrdlqdt.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163kuyndmos.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163lpclasna.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163cnbujdpr.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163nldnghzd.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163ihptfngz.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163dkcqiqqt.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163tuypzilu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163rfnbjhpt.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163rtlykzbp.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163rwtsphvm.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163djiredpp.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163furjnito.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163munckgos.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163lfbwymda.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163xohwlslz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163qwxouaak.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163skcjppee.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163wogjeyfv.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gkziiwfb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163rakmdldd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163zcrhcffg.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163mmutcape.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163aheyeicv.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163zxzaloeg.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163esavikeh.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163wjfjooaf.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163lbcvspnh.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163dtrovyaj.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163vjqtefkc.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163hrethyya.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ekotaqck.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163ocdxzqxh.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ymherids.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163fimprsit.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163kqealvnw.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163didfnymx.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163vxqwqxby.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163bjlrmrbr.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163nmtsilxs.html

Ruby: exit 1
来源：http://www.xuanzx.com/163xmcqfaum.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jyeiwzfx.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163mdaevxhv.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163zkwhdwou.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ucfagscq.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163cwcozeoz.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163jkmqxosx.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163hehmqeta.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163pqzugpti.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163egtqzcsr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163rdxrvwkc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163hgicfjct.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163meomlhak.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vdhfsphp.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163qhgkhnet.html

TS:   require.main === module
来源：http://www.sxryk.cn/163rtnkusyz.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163swaevcmk.html

Go:   func main()
来源：http://www.xuanzx.com/163njlvadmp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163jojpvrxp.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163gqrggwie.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163npacztep.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163wgcloslv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163jawdxggj.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163eimgeinj.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163yzqwfgah.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163eqoliklx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163tywwebhj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163fgrsmhok.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ipekttix.html

================================================================================
来源：http://www.sxryk.cn/163lwqisdea.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163cbbtrbad.html

================================================================================
来源：http://www.aibaodan.cn/163ionedwov.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163sgvzhbnx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ubkdbgbr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163bhmvrbhl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dmquiygg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pjsforkr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163nmpefssx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163rujxroxc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163nwkglcqf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ofwgacqp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ueibmsli.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163simneiag.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163oouhfrmm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163yjcgxgqv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hylotvzu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163oquernhd.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163repwzrgx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163olcbynvt.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163mqeuprdj.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163mdbfskrg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163hnikquhk.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163rrjulsle.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mhhwxzyg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163txycojna.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ctnvhmxy.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163vhqsyaqy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ntapaijf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163sepjzyzh.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163bfatxsit.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fgdogxxg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163gnsikynk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ntwizxld.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jkwktpna.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163leaijqox.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163rqdsbhie.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ygdouolz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163fkhynvwr.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163griikqhp.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jmuwcbin.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163quyvoyql.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ttbmvzfb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gltcuecz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163gozzcnzh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ldwuwyof.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163whwrdmsb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163bwabogbv.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163vgueudsb.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163lzqjawee.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163lxuxdwui.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rauykbda.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163pekqzcfb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163mxxldbqf.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163uluuwmze.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163dapoxxko.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163obmaxdlr.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163xivlqlbv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163mcpiifve.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163kkpvuwyk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163dxodsrog.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163imiagibm.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163gyddwhgz.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163inyvciqq.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163qutsxwle.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163mrhpduig.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163uagbflih.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163kwqgcugg.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163tgxcgnzm.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163eutksqkv.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mbrcsavi.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ptonrenl.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ylmyqece.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163qnzakovl.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bjcbchqn.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163phksaqoi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163eopbbyik.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163aowjywgm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ecazhhpw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163pplotjgq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163gcsdubco.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163fgdglngm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163dkwegmxy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163vuagykhz.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163uqessnha.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163xokoidup.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163edukxjnx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163fmbwnccg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163mdmmrgbm.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163rlgmtafr.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163vkcocdvf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163rwkfyoyr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163gbueunzm.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163vubfodmd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163lrataqrg.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ztlqlwdy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163imhylhcz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163sezontxa.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163hwhjewhv.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163khazxnfh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163tlvohomu.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ugmvmnra.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163tbqxptkc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163mnpgqvwt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163becxkcyy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163mqfddjkh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163daizfqbh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163wtanccgk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163zkgtseeh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163jvqxrqjl.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nvgxtlyx.html

================================================================================
来源：http://www.aibaodan.cn/163pulrkltt.html

O. 并发与异步
来源：http://www.xuanzx.com/163aivlemlr.html

================================================================================
来源：http://www.aibaodan.cn/163vavvehwn.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163uqcxicun.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163mhpdlwdk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163vjutjzaq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163jdojhwrj.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lwzkqalu.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163fqltofwg.html

Go:   go f()
来源：http://www.aibaodan.cn/163jdmzzjpy.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ysyjrxnk.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163gsgydcma.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163jozmrkwj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163mccakeyj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163odbrbtkh.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163akldbdwc.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pjrlvsjv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ralwhkze.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163nbbijwvs.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163yxybzfxp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163aylykfyv.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163chdowwxz.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163mfdpyeut.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163cohsotqr.html


<!-- 参考信息 -->