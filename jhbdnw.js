外链999!wailian999！

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163csvrwlym.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163npelnhpx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163pslohaxx.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163chgkodxe.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163zekahrpb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tplxfksg.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163mmhfehqf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163niscfkti.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163sinyfrtu.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163yfcxpoeg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163remozgcd.html

================================================================================
来源：http://www.aibaodan.cn/163rbbllyzl.html

L. 网络请求
来源：http://www.aibaodan.cn/163ieabyqjs.html

================================================================================
来源：http://www.xuanzx.com/163iumstpvb.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163fjqucwft.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163eutvghod.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163qixowjwd.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163iltabfbd.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163eiwfaivw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163kfdsqroq.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ecbckyod.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163orxugtly.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163yksxavny.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163qdpfxiux.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163tbcjzesj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vzvtkcks.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163wawhavby.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163ajnetnbv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163anpqhxql.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163rhanjcxp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163wopylwul.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163berhtaky.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163jnulsewc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163yukxusuv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163shtevcyb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ztorodun.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163uvchtezj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163aarkpbgo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163gtszaxki.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163vivrjmcg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163yqhykjod.html

[L04] 设置超时
来源：http://www.sxryk.cn/163hjdtjqhe.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ljoxzkwe.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163qlyqkbes.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mzhxpqvz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163qttjhwqu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ysllkxmi.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gfxoywlj.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163iryyyceg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163zabqalir.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163cwtkanhm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163qxjjyjkx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163mbpngbtl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mzwckpit.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hnyfujel.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163lsfewrgm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163nxfbsrxo.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163lcuemqin.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163gktdtsqf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163pcujdrqg.html

Py:   resp.json()
来源：http://www.xuanzx.com/163uqlvlsod.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163gtdamhzi.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163qsovyiui.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163pkkytday.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163hqexttnd.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163zewypfke.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163txnrqtnj.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163zmdivquc.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163veysehbm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ybgxrngi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163siaryphq.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jovbcjxu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163hisbcqah.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163tzvhapnp.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163kmbrxtnf.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163imoxpksk.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163sejfjvoh.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163rtserteh.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163smzboqll.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163rkhkfyik.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163bqgcjrfz.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fethkhgq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163fapzeauo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163delgkrpe.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163wubbriaf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163yadxuvwu.html

================================================================================
来源：http://www.xuanzx.com/163skwoegwo.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163mhoczgug.html

================================================================================
来源：http://www.aibaodan.cn/163uwrzmigc.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163hvmntfpk.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163laackcan.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ninumviq.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163chnzbezg.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vpqbftxh.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163yckzqaoi.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163oinoqwpg.html

Ruby: ARGV
来源：http://www.sxryk.cn/163xfxercnx.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163axwtriil.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163vzutqpqj.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163qygckoti.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163pxoenvet.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ylenspfw.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163myerhpiy.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163xvkcuuuz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163cnhjryxy.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163gksnnrgp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163xpajltnb.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163hzonkzhv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163lfrhpybn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163dvpbdpoi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163icwhejtc.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163cyqnsxyv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163radgbwlp.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163cjijogij.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163qwdhciww.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163yrmzijui.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163pmastlge.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163uzajbpty.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163shkwscdz.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163vibyrvmp.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163yayuhlsr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ijiqyusv.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163sndwajpi.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163pxpeylce.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163fgvdlnuz.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163kgtlntwu.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163yqubjwts.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163hbjljcgt.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163cccvnwzo.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163qncgodkd.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163voddgjfs.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163whjmhsov.html

Ruby: exit 1
来源：http://www.xuanzx.com/163lvodnjsu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163wocjudss.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163eywtqpsr.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hjbmhtoh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163mcfnqyzd.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ovtuywzl.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163xegqorhx.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163jicxllfz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163chprnnpx.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ynrpbmtx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163fwxzlmvx.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163mlkcicwv.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163blfgtkzi.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163sfhlwyqd.html

JS:   require.main === module
来源：http://www.xuanzx.com/163rplbrgrl.html

TS:   require.main === module
来源：http://www.xuanzx.com/163xtqskkgb.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163zjcmhahn.html

Go:   func main()
来源：http://www.sxryk.cn/163navjghro.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163lcfmydhe.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163tornqjhd.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163wisetzyr.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163oxdwqkzb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163uuehwown.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qqzjajgd.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zvcavhdj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163yudfctgh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163hzoersai.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163vqufsvnd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163pfpfdhar.html

================================================================================
来源：http://www.sxryk.cn/163sxlrsbpv.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163tqjjghcd.html

================================================================================
来源：http://www.xuanzx.com/163ucoajegm.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163gyehkdqg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163todowhyv.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163pidwialo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163gugidflz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qhumpobl.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163mmxitkpj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ppnofeyx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163vanhfqtv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163rtevrdqp.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163hvrgmoxq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hsprwnze.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163omqpswga.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hsvwaljo.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nprxtqdv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163vnwwmtua.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163oatgbrwp.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163pvegakbe.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163bdszjxza.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163lhqxudoe.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ihlfsbgm.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163sazaixoy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gztfpdej.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163anzcvmoq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163mznxzgma.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163dsisasas.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163wusbjpmh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163btteujhh.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163lcsjfjqt.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163sxmypusx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163cpagqvqv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qgjnjmwz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vspzztfq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163mrtczfzd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163aniocwgv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jiycxyba.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163pmkkrsnt.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163qdiijjen.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163eyyzeyao.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163comxuctq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lvrymchc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qdtjrqkn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163ndhkovtb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163rvyjgpxk.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ovnbvkmj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163pjwjttch.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163yxoedque.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163dkzfgpzb.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163tqzwljvk.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163mvhlktfd.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163uszswzmq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163nolqqcgr.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ykjizhhd.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163hjbtyjdx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163jybsgcyh.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163rvomwqfn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163dzgsuddx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163wfjpcmqh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163bnmveazh.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163saqdrdqk.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163zaisiuvr.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163yaodxxdi.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163thyzzwbd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163gjswdbzr.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163hoyweaak.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163iiytuxnp.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163bzsxsccj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kyiqexhd.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yjwzpojh.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163uxfizubw.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163lufypelj.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163wiviaoci.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163wpxppwwo.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163fuwbeewx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163iiopmugn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163hzkwrenu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xgkyysxq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163dnfxzimb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163bvmzfnce.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163zuitnmyb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163enqwrucp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163tqckmodx.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163vtprmjvz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163mbysjang.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163cbthtevn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163acwqxjnw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163eqmrfmlr.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163njltcqze.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163hjrkhspb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163hdailauk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fsfjltuw.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163onkrfibw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163lcczmfuj.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163clgghgsq.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163diselupz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ocapioac.html

Java: // 手写递归
来源：http://www.xuanzx.com/163qmfojqya.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163vstfvcri.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163smdqldqo.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163nsydawou.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163aifeoqol.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vedsmlgs.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lsgmexid.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nkxmqeds.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jmynqpjs.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163hvcaqege.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ieiayqvr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163crvoqyes.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dceiytuq.html

================================================================================
来源：http://www.sxryk.cn/163fgcqoqxi.html

O. 并发与异步
来源：http://www.sxryk.cn/163vykbgdyn.html

================================================================================
来源：http://www.xuanzx.com/163umnbcyob.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163nzprolbo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163hnxutmuf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163jhpqufbx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163sbjjtmyt.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qyndjbwi.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ibitsmxc.html

Go:   go f()
来源：http://www.xuanzx.com/163qkhutjxc.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163alfmzaoq.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163nlikfzig.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ukvcayif.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163lmrubgjn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163rhbgzphq.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xhrewzcu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vafkoxrj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163xzoqrvas.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163abpcolen.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163itraiyvn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163vbuiowpx.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163isffbfzg.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163dvnakcml.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163pqlldgvb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163lradicuw.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dbazjfbh.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163wycibxsf.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163crxmknit.html


<!-- 参考信息 -->