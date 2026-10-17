外链999!wailian999！

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163hjfgsjdj.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163mibjbsuf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163kfdrccnb.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163fqytrhlv.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163jwujhqkr.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163nzrmhkhv.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163mkrfurur.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163jsibmhey.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163iqgjgmsd.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163yatryrhv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163ydlhryut.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163atjdyqun.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163sbccjzqe.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163pbcbtkzl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163ogbkzlgu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163kbugqlzk.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163lbjlsnmy.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163poggbdfx.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163xkbkjsmq.html

================================================================================
来源：http://www.sxryk.cn/163nwtcfjcq.html

L. 网络请求
来源：http://www.sxryk.cn/163jbflwjxj.html

================================================================================
来源：http://www.aibaodan.cn/163sgngmwdp.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163uslvnrwl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163jibywaca.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163btnqnmyf.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163qmygadmf.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163gzktewch.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163bxxnpaqt.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163smrsogoz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ixiqkxrv.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163zrflphkq.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163cwmybacv.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163oflkkczt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163mozbyruc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163dwwcskng.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163vyciufky.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163qzlewwcx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ayzoknvd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163heptfenk.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163obdgmgai.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163gylezdsn.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163uomsvfkh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163dekipkpd.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zgazgymg.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163nfzlivbf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163cykcbtqu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163zqxwtare.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163hapnqyrm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163girlelbz.html

[L04] 设置超时
来源：http://www.sxryk.cn/163xqtmdimw.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163jtdrjbew.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163crrjgnvp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163wrgiukbd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163idttrpdd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163coumnpzg.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163aqquaqnp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163wkxlfsyy.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163pnlvtdro.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163euuqigrv.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163xlxpqruk.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163cvkiebxd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163oxbmjaph.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163mlkzbjzb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163jescmtue.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163qoulfiwj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163kmjgnxbf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163sqhpljmq.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163plxwfkzk.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163dlwteukm.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163lfnbwpeg.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163nzvfkesl.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163yijzbifp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163engzditr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163tftlciqg.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163hfsnhbkb.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163njogmjme.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ofrpwzxy.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163uvqkohsm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ruizmcrc.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163pwlfxchf.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163edstcywx.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163pqprnrex.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ntwudxmc.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163keoqkwqk.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163vyvnbboa.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163lqhmpiaz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163cxqbuxnu.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ksodgccf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163fgofjsqw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dclxwfzm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163dipsjoet.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zfhhchij.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163brcncrft.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163vojuanon.html

================================================================================
来源：http://www.xuanzx.com/163jlbdwsrs.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163wqumumrq.html

================================================================================
来源：http://www.sxryk.cn/163pntueaov.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163mqrnpdpz.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163xaqoaqpg.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163yrtswgne.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dgdyjwzo.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163piihwrom.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163wrehvoep.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163edwycois.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163evhjrjsl.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163wzehxtss.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163boxgfbgy.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163roysizia.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163kafpnaqm.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163iuatzazu.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ubouagwb.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ssceqqdi.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163kjublmlv.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163komfbumf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163qfbnrugh.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163kjtqudgf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163hikkehwb.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163cabrotbx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163srhvzlzp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163kpxlgkqw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163bonikkoi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163mcpjhjxz.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jxjodndg.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163slmvkqzv.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163rxmpppfw.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163kqnukmiu.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163xsuisaqm.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163nzubqplg.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ehyhkzjt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163zdvqbope.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163rwjfknkd.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163lfhwmltk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163czsqekcx.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163rgbcmvcp.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163sscsilrh.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163qtbxxkdd.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163qkvpwblc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163acsipttz.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163bfhxzkpm.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163chbywxly.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163luxyfyjm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163tipcbwtr.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163ixnrfadh.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hevidkku.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163dcmxnrqx.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163funavyts.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163rxxxhime.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163yrbaazjy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163cqrxmrlc.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163hrplicyf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163gpmqyocf.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163lihoxpdo.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163czmobfoa.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163eklwgejb.html

JS:   require.main === module
来源：http://www.sxryk.cn/163jebgdled.html

TS:   require.main === module
来源：http://www.sxryk.cn/163xohcjuov.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163bqpqpgkq.html

Go:   func main()
来源：http://www.sxryk.cn/163zkytuodi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163azvalazh.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163qtcnebik.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ssbqrlzr.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163lodybakv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163zkfrxjfr.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rnuxbmdd.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163llzyxjlg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163pikhfwnq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163mkjhldrv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zmtlohgb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163tyeplxjk.html

================================================================================
来源：http://www.aibaodan.cn/163fpxutivv.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163dhkyzhbm.html

================================================================================
来源：http://www.sxryk.cn/163nzorkdby.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163qopbabpl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163amyyakti.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ccydjppy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xtvfxgsb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mnbhuodr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163lclmuwfk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163vfdvicvw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163tcholnnu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163grzbrtzv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163cgofzngg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fmbenefe.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163gamkmgnh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163fbuagpmx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rlthpfas.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163zwngsowl.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163guuhxxwo.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163onmeuvds.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ncrxtuiz.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ilhdayyf.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163xwkgydnk.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163lauzunkd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163zommvuof.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xwoojgyo.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163zkgtcvro.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163kjvchudh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163egkklnrk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163gigfmjeo.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163lfzplrxm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163oedejcmg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163lxbidoin.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163muxadakw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163upbubgae.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163nfwysype.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jmeurugc.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lhaxvxyn.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163upiefwpr.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163asqmoham.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163osxfemsj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163hwlwqzop.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ludqmsky.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vnhpbflf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163yejiefmo.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163pvyofozm.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163upsztmpo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163fkotqfvz.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163vjuurulm.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163xdhiqhpk.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163wkijitgq.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ljokqwii.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uuiiuhmq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163egpmytqu.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163zgosernp.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163zcjyqbjr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163xqhburin.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163cjevixvr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163uzbrdhcx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163azmpqtib.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163kayrymwy.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163wuftinif.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163kfexmxcr.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163akphowez.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163axdfzhdx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163boqwzwjh.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163drxlisqu.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163qcxurnnz.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163yhobhsif.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163laracbtb.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163fxkxoqyi.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163woioesfj.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pnfdvcfa.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163qwgfpzwh.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163cvqnmxfq.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163hcdpyesg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163upxlkvkk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163jryriifk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163errbpppr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163mrlfdugu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163krzxvrbj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163dakmcmyt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163czigivpw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163fszczuel.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163bzjgsplf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163hbksxhuw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163wrnkompd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163joetmeyg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163nyuvhbsy.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163njsugrkz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163wedsngaa.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163htpyiavl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ehpptlru.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163sthigzzo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163dqlblnzv.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ktoahabz.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ezgbuchg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163fjvnthqz.html

Java: // 手写递归
来源：http://www.sxryk.cn/163azhqpmyz.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163npsobxwz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ctrholno.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163nnhtisvi.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163droikhwn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163tmpuggvt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163mkwtrjyp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163fobbdjfb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163pyopptln.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rwmwduty.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ftmkllnq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163hotxtuia.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163zvxlohcr.html

================================================================================
来源：http://www.xuanzx.com/163ynaxmgpn.html

O. 并发与异步
来源：http://www.sxryk.cn/163bqsirglj.html

================================================================================
来源：http://www.sxryk.cn/163xlrgsiwy.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163wnxskxgf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ugyoffrl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163cdieqemj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163jrdueqeb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fzoxbptd.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163gtdmphqa.html

Go:   go f()
来源：http://www.aibaodan.cn/163mjiqyjvr.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163pgqkagkl.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163peafrqkb.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163tqnusfvx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163dlgcteme.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163brwndivw.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dkbdgjzg.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nwkbrlqh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163wxaapaal.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163gklchqum.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163xpmtjmau.html


<!-- 参考信息 -->