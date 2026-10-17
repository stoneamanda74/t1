外链999!wailian999！

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qfhkzygz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kieictva.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163hpmqpoqn.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ofbafivb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ouifqcox.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163vwgttitn.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163jlgarlfx.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163hdmvgxyp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163mtfpawos.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163trxjqdku.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163dmttobzl.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163lyjtbdpj.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163cqcrucnb.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163hkyujddr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163zjcaxrsi.html

================================================================================
来源：http://www.sxryk.cn/163bqrrklqh.html

L. 网络请求
来源：http://www.aibaodan.cn/163apyxbqrr.html

================================================================================
来源：http://www.sxryk.cn/163xnuwtazq.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163frcglpsq.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163bugalygc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163naewaobz.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163okkfjxdr.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163yboyemya.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163pnxvurop.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163zerkxpty.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163okneftvj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163pfvjtdyj.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ysebbybc.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163iltypvbu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163yyavswhj.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163bkqxkhls.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163utvmtdoi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163hxftmnwm.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163xxepofgh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163smtcvrlu.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163hsdfrnaj.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163scoxjykp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163jkxjekbt.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163nddjpcui.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163edhkegpr.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jfxrqqvx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163gzsidvhb.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ulidppod.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163qyawczcf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163qhkileqj.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163nxaaxgar.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163fjbmqltl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163msrjrnnv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lqduyijb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ucxzwgbu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163jhuwajaw.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163gyzcjlgw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wybbzkwh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ecetahdp.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163fxczuccj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163tksmwufn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163txdwoxyq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ikchrvgq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fmiczqee.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163ulbyidtk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163pwurrihg.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163eboimglz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163vbrnxdnr.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163jmcelkve.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163jeqgqfgb.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163yvpxmktp.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163ubfxlojx.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163kwwvlkun.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163kwyclpnj.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ztdzfigy.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163chdqizlu.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163qbtsrsdl.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163wlonppnh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163zzdlrifw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163ninyjtsh.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163exbdmodu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rosbgfmy.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163jphafhat.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163tzwbjggo.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163fchpyick.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163mgpgwyqw.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163bqzyyian.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163udpjfkvn.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163gdzbhgxn.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dqsxoqli.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xnnhucec.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163pwcawnqg.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163hijphirr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163thfrpxrs.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163pfijbspt.html

================================================================================
来源：http://www.sxryk.cn/163yxsqldmk.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163zrgmqmsm.html

================================================================================
来源：http://www.sxryk.cn/163tghczknd.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163tvypiwdg.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163dwqmyfnb.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163sqpapqru.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163yokfkvjk.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163cdmqcjyi.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163flkbvayk.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163sekguitr.html

Ruby: ARGV
来源：http://www.xuanzx.com/163reevvjrq.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163svoerjlv.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163pffijjqp.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163zhpwfcaw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vdbreafz.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163jyuiefcg.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163swtwraob.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163kdjxmuan.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163shleyevh.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163tygdybht.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163wpyhgioi.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163rxuxlfsd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163iscngrjf.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163vufdgizr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dimryosq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163gsptlquq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163aiyodpyq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163xkalkztw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ictzaafo.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ajukpqwc.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163clrzoyts.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163rnopawly.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163eccameeo.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163hnbchmri.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ctriiacf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163czfkeihk.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163gniuqhaz.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163dlcaplwa.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163xxnhnild.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163xytgdrdq.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163flcjlizc.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163udnakfpn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163dmdomicb.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163mtzhegut.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163jkjwvbrw.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163qunevkid.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163prsztzxw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163crclvrez.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163xjyxrtjb.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163pxicbijy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163jvyzeiha.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163uhaylxwp.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163dntmcygw.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163wpferpts.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163nxsrcogk.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163jsifjnam.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163uzvwsnzx.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163thtbtfry.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163uoihvmol.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163tqviqasb.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ghbzodtj.html

TS:   require.main === module
来源：http://www.sxryk.cn/163hpaozvsp.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ltycyfad.html

Go:   func main()
来源：http://www.aibaodan.cn/163cvrflskp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163blytaodh.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163efcjltrv.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163floekybh.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163udktpwtp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163akbeopte.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zvvbyjcp.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163eppdqtan.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163pblqbcgq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163nwososll.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163pqbdfdeb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ufbjcqlc.html

================================================================================
来源：http://www.xuanzx.com/163pzqmxpdx.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ozgmynjx.html

================================================================================
来源：http://www.sxryk.cn/163ogcvbsil.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163eyhcbtqz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163kcgskxbj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163rnqpsbfm.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ztgrtjdk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163glnqzfye.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163comseako.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163rsealbwi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163rfinzwkv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163vugbtewz.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jlkqdwjp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ahksksvi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163cfxhgjsv.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163zwbqrgom.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kxfxwytj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163mvpkaunu.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163djaxwmrd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163aghgwzqs.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163uuxjnqef.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163idervtnm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163smolruou.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163mobsnapu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163bqsyscho.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rajvhkrx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ialaafdm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163rmuixafg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163pjrsmsqs.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163rivagknp.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163woreyieg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163daecwehc.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163lguyztkf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163lxdugnid.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163zchiaqyp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163oshyigcc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163wsdpuorf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163oolflxdo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163logmwnne.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163stgubsia.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jlguwyeh.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163uivzwcad.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163uyecgmml.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xchzolbo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163arokqcfo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163xhqfcdzk.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163aoyqmgfi.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163iyxrcyht.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163fzitfhlz.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163snuczryc.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wsoshapv.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pwyginha.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ogatartx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163buriyqiq.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163nljojyfy.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163qdpycgjo.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163skwpbhhz.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163faxtmlyn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163dyhzkgkh.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163nzuynsxu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163jbmotcen.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163iwspezkx.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163gmowrtja.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163prujhypn.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163xrmdndbj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163vvncjlmr.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163hekqatpo.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163fsewywau.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163igurekyc.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mjndhfaz.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163agcytekv.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ouhbygqi.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163jhgontkh.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163iarzconk.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163slwwxgpi.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ikavkqhf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ocercfjm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163zqevnqta.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163erptcswg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163xglcjakv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163gurrvqvc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163qxrfzaxk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163kgyubunt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163mugpvnvq.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163analqwse.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163nawxihpl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163kmqazhrj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163jwvfwuuq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163fkpjijrk.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163mfxxrnxp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ticakvoh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ypyskxzk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163fucazeok.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163upfcbzzd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163vdnizvhg.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ndwsxfxz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qoteknek.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ovijodlb.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ezjulgux.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163cnmquuls.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ziiyggrp.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163xtmjmddo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163xdytbewv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ulzrgcof.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163mrrnbjnd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vypydmyh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ymeiqofm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163djcqkmeh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163pgtmkfjg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163oumsruvs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tjycpkhb.html

================================================================================
来源：http://www.xuanzx.com/163nqacsvoc.html

O. 并发与异步
来源：http://www.sxryk.cn/163ntqsrmxq.html

================================================================================
来源：http://www.xuanzx.com/163ykaextsq.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163qidzyyps.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ldfemiza.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163yjpldzcf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163qltgupcw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163oexjzkvo.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163jfcvxijj.html

Go:   go f()
来源：http://www.aibaodan.cn/163clrjvhcr.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163wtxjegcn.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163rumhjddb.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163btvrmqdk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163xuieeqrm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163usmgetzf.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163rzhqfbrd.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xaqhlctn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163lxtplmij.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163yrspolqe.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163tvmbnqcz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163khsmymvt.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163qadskona.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163bqloaerf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163hnqgsdia.html


<!-- 参考信息 -->