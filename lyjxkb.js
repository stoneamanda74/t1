外链999!wailian999！

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163ntgoddvl.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163driumkus.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163sbqsebec.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163pdhzdpyl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ftaibvxg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ndfnaowd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pjyjycuf.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163pmwhjupw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163lqlxfzzs.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163wcbuphen.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163jyrywrlr.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163yeoizmwf.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163hpakwecy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163efkenivy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163mcvzvojr.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163jprsjcgv.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163vsqpkjpf.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bvqkdpun.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163kolmfvaf.html

================================================================================
来源：http://www.xuanzx.com/163cyhinfpz.html

L. 网络请求
来源：http://www.xuanzx.com/163ychjgdhs.html

================================================================================
来源：http://www.aibaodan.cn/163umvlysxk.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163xafgdyhc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163orbupbfe.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163aoecrhtb.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163jhrwwjmy.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163ekeegjcw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163hsffwctf.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163pptoxtop.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163soxgssmv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ibrgkbgr.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163gwsofyil.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163gfxpjhzf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163rqipkvob.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163cigmtmof.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xlrlsjcd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ukxgxloy.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163woidxioj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163alhjyfye.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163iwuiebcr.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ovkkzafm.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ddqspbvm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163abxwyrux.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163qdprjgnt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163fnfayasm.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163aikotbfh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163vdrkkkzp.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163yvtilevn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163kjdsxwbu.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163bocqshkp.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163dmcpxgms.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ibaewxax.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wptkffki.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ismoahqz.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163emghljvs.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163wqlbkjmc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163xacoilwk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163cnnhbxrh.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163drfzlgla.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163wlrigypa.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163nnzhbntb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gxvxmrig.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163jinkowgu.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163boywiemn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163tngnqqsr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163lqqxqifp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163wbcaqspg.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163homlszsw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ienmpidg.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163eobideqp.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163tyksiflz.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163acyvlros.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163qcoljwvk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ukmlrocx.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163byusdopi.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163rdnlpmfv.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163gagdkche.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163rpnyattp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163fqpxbmgp.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vqpcqkwa.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163saynzsbe.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163anrssqnf.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ruavwrqc.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163hxbxsstx.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163opkshjej.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163mrbsddag.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163lqgayjox.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163eqoyxqia.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fguipjdq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kgnmqxgt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163zaikdxvy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163qhevkshr.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163gtltznom.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163cmprsxmi.html

================================================================================
来源：http://www.aibaodan.cn/163plysozlk.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163nwteufpo.html

================================================================================
来源：http://www.sxryk.cn/163ybohnidy.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163auloikll.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163jvunquws.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jglxdzlc.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163fsgziuxw.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163aiakunoy.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163gaculdnc.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163jpidaupd.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163jghwhrgu.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163fltksrrd.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163fbblftpe.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163aaxtnbhj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163quebzxqo.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163oxwgxxtq.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163xeehczwm.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163plykxhbo.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ketzxiyp.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163fsjlzgwa.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163cocbsosp.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163usyevhsn.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ejqowubv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163bbgibzsh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163jinpdnfq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163moadyulc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163arcqrdeq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163fujjlzzj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163dntjvwuz.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163rzcipchv.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ckrtokla.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163cofomqmm.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163clihgorz.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163papixadk.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163cubxtsps.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163irxfhgqb.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163tpojjrxt.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ennyenbg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163vptcbdyj.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163fbwjfjqg.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163gwzdonst.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163bzxeeudi.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163uupqifcy.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163vulolshg.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163uihszytm.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163qspxyael.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163mokbwafq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163vvohusps.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163gbujadfn.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163sdepjpme.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ubgaicuv.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163eaiublwu.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163xceolnyg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163qyndpflm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163yyzcgfgv.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163zgsmjmcn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163tptyurej.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pcwwrybu.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163hztjwvpr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163bojqfgny.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163siaotbtz.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163mepvfogb.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163udoofwfe.html

Go:   func main()
来源：http://www.aibaodan.cn/163mxrxllfo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163kbfalvro.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163yfctiuiz.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163bsolsywq.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163yfexkqht.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163jdzchgdt.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sttdmcsf.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ncflqjvh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ofeknsci.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163eqmrqmwy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163fzwczyyg.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163nhlhgznr.html

================================================================================
来源：http://www.sxryk.cn/163aqzsbtgy.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163golrkpvh.html

================================================================================
来源：http://www.xuanzx.com/163ehpternb.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163trmhutzw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163rlfenbsj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163qxzrjuns.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163clclbgcm.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zpafbbpt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ifsyjynj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163nbygeqkd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163ocjkdirb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163trivamjg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ctuizdtx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hvxfinjj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163igwadpqk.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163iozdfecj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gyxygclt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163eniqrepf.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163aptmwpnj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163htvssgxi.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ekqsndtg.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163evjetwfh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163muuxdofo.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163fkhnetpf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163saazijyi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163aqgvguif.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163nrlqyoni.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163rikxzkqc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163qoecljiq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163zlbpkmgr.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163jepqdefd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ddfntfma.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ufqaajfk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163jgalzfgs.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163usppnjpx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163kjbjdblt.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163jvotjxac.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163tgslgsxz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163svwubqll.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163hjwqvbmt.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163cwdoxbyt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163dqmtosch.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163cajtctxb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jecgugyy.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163hhbsqlnu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163luyvmcyw.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163xhxzjkvw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163sjowcnjs.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163tebgwxhu.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163hjgqmwei.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163wuyhsjlw.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dlnsmxsp.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ujbigpqt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163rxvhahvf.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ourxnwtc.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163twxzezfn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ckizkmet.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163jsrwkyax.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163uyrdexne.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163hohxtwan.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163fnuwzgfw.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qtwttpfs.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163hyzrxgjh.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163nyabexnk.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163lfreqxxf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163figcbcnj.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163pwzcqhvi.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163cypaipgc.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163utpvwtud.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ycxblntd.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163dkzgrmeg.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ccvwsdwn.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163zuknlcfc.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ohtxvyoh.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ubjdrkcf.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163xeemdlwz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163sysmayjd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163adshgsxq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163spnfxwnn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163rhvfxzmj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163kouijzue.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163axslruuv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ysqnstky.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163jkmvsstz.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163kbtzjvtu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163rcuienjx.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ebyiegjw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163kajmtgsv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ukfnizhe.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163rfhvprxl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163prluzrca.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163faofbqce.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163wsufgtbu.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163yjdzpnjr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163uzkhjynj.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163qujusqxi.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163sctqpmlt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163stjepryb.html

Java: // 手写递归
来源：http://www.xuanzx.com/163pkpnzvss.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ntqrhpod.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163jvwvjtjn.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163pklofexx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163gtkttlah.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ijriznlf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163qqakcmmx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ctozrhcc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ijsagxwo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hkynwvqs.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163pzkulgjq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163baidpstg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kdzfqfaq.html

================================================================================
来源：http://www.aibaodan.cn/163kntlrhjn.html

O. 并发与异步
来源：http://www.aibaodan.cn/163prykdlno.html

================================================================================
来源：http://www.aibaodan.cn/163eiykyzkv.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163hkmmvhzt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163vmpmjpuq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ztouttsa.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163volycxne.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163edjonlpf.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163diusbyxz.html

Go:   go f()
来源：http://www.aibaodan.cn/163piadiwhk.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163sboqeuub.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163mxmvgial.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163irndetib.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163enrsvaik.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163peyxycxm.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vxehezrg.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jlywzbfy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163umkhyeqd.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163sqflllvg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163arsthbgq.html


<!-- 参考信息 -->