外链999!wailian999！

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163qurlilez.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163uistqguz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163elkfzjrz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163mxhhfflc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163oymzyipl.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163crqfiuda.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163thngaocf.html

================================================================================
来源：http://www.aibaodan.cn/163hngecloz.html

L. 网络请求
来源：http://www.aibaodan.cn/163wtkpgcrc.html

================================================================================
来源：http://www.aibaodan.cn/163xhcpaodn.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163slwvlsiw.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163mqjxrydn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163qnypcjwr.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163eypozjbt.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163zgiijtnm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163tabznhrh.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wnofbaaj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163txiohpww.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163yfimimrg.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163vwknraex.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163vadovqkd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163zmtpwzcd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nketywrl.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163uznzyxig.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163rkeudnmt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163scckhgnp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163yeuhuyqm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163phgfwcip.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163pyfkoeix.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163fuokwkur.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163mjgyypxh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163swpqlibz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yczuevcy.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163hvkukswo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163yhrkeevj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163qrtxmdob.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ebhwscoi.html

[L04] 设置超时
来源：http://www.xuanzx.com/163bzryzhzz.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163tabgypxu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ylxusyje.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hdrtdmzv.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163lvmksnao.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163fbihmcjn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163pttqpovp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163uawcrmvg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163wodghpla.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163davjjnvi.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163vbotshni.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ieczinax.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wflkhljo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mvajzhkc.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163duhuqpix.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163afnklfws.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163zvgilunz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163fnbhytyc.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163fsqbjehw.html

Py:   resp.json()
来源：http://www.xuanzx.com/163eliptqbr.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163quadeaer.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163oucwdgah.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163vjhhkhwi.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163wbaffftg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ryrrvdcy.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163cvsxhpaw.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163fhayodly.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ylnuqrcv.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hnofjbsg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163kvivyxfa.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vblfnofd.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163tbmqasun.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163auhodocb.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163sslqxqib.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163jmqfauab.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qfjeacts.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163nurvoiho.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163rlqmuyki.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163tzzfqhre.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163nstcxnzf.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xrekphbq.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163rmxqozdj.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163suaherzc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163kurewlya.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163pizufsmo.html

================================================================================
来源：http://www.xuanzx.com/163chitfnlr.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163xgzquguo.html

================================================================================
来源：http://www.sxryk.cn/163bmtkrxlu.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163aargysxr.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163czyyiige.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163vsmrouxj.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163cjucgdfb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163lflysaqp.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163hewpncbw.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163tgycgscf.html

Ruby: ARGV
来源：http://www.xuanzx.com/163hgwgriik.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ljelrlzq.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163bdapbsey.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163taiyesra.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163dppxilkn.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163dzmavzih.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163cbhwdkfy.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163plrooisn.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163qryewlyh.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163xopkiwfv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163odlrrogh.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ycpeamhf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163pkbpesib.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163snygflic.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163niirrxvl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163abifqzmo.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163xyrspvkx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163sraypjpt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ighuqmgp.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ilcqluyh.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163eukgkzhe.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163dbqspoex.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163jlnbpjtd.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163cdcmpbbo.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163quimgzxs.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ntvdkohd.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163dmlclmhp.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163xrtgfuyq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163etbxuakh.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163redhrqza.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163uaqwnelg.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163dlhqecwi.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163vzlruwco.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163syupkmrb.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163setkchod.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163hforxoji.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163kpcjbzcy.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163apjeasrf.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163czgdyfuq.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163isjmcnmg.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163utewkggy.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163teqibono.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163beftbrql.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163pvtatypo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163pqjluyep.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163fomaixwc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163mzjtktmq.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163wscamqbf.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163mduvquhg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163sqtoobce.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ftwrzbxi.html

TS:   require.main === module
来源：http://www.xuanzx.com/163sscgejxo.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163fhmyskzi.html

Go:   func main()
来源：http://www.sxryk.cn/163sxjdlilh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163sjcmkpoe.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163lsmktfqi.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163jjexsucx.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163rxilzfqn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163jkfnaqla.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163msyzlxzu.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163tpoqklvr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163kdrhxvoy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163njodsuld.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163terzgzgp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163vkmdljmb.html

================================================================================
来源：http://www.xuanzx.com/163exxihelw.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163tkarjnqw.html

================================================================================
来源：http://www.sxryk.cn/163uxglacaa.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163zzlwphte.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163wivoxeqt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ftltyhjg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ntrvwgyr.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163euiuvafm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163hfdvnumv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163xjwqsdfu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163hmefyqrv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163reulsuqt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ldbzuqoy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rhqmcoad.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163zznaxkev.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nnbolwvg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163lkgzngya.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163wlgyklkj.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163szbkfhvc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163fjlgdrju.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163eaqzqwiu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163muhoecqw.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163tnwhvqqa.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163wzvcizzc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163xlrwhaab.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qsgehngy.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163lhmurosn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163frjlmctl.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163onubesaa.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163vuqzutzi.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jmschvnd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163yxwzgacm.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163itdybjae.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vbbepnyx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163dylxetee.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163cidywhsy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163xpxvniqw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ufgdlllk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163qkhsddsc.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163atiefrdb.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163iijgimci.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163xoudscmq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163yvavkupd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ewchmwqr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163sksfdbeg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ehjsyxgb.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163hcmsoeav.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163dqqwobjq.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ikwdnjvx.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163uiuixwuz.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163pzjovbua.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pzjjeiaj.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163khahkykb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163hekygils.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163sdsfsawo.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163drnuienk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163akzolknn.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163dztaetdg.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163zqfspjym.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163tgoeekbb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163dvhuzjsx.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163hblzdeme.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163wjrvifpp.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163odbagzjx.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163azoqtewo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163zzwbhhii.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163mnnczekd.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163mwlaxeyk.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163qmunkhky.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163tbnwuotx.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hlzmmnma.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ytwveyhz.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ygekzyfj.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ekmznqxm.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pbxrfvug.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163pligajcc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163icjaubpe.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163myirlwis.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163jjspvyhy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163cnlcmtim.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163krtgtkcl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163psvjqtyx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163kfnxafku.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163awvvwogc.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163bjnrvylb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163lxljuqtr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ppnhgisl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163loukehxx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163hrtzkfus.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163euagcpso.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163egqhakcu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163idlnzyqz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163wpwpqaxc.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163lugoncgh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163zbfnudle.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163arslcbbp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gdqrlzdc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163vmfuqpym.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163rsdurrhq.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163spqcrgvm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163kburcntl.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163opfbbnwf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163idbeiixa.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163jbvwfuyw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163oxxzkcgh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163yfvfvpbc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163glcwwbau.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xzbyophb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163azbsyyza.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163bqmmijfo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163llwzluld.html

================================================================================
来源：http://www.xuanzx.com/163sjcckpda.html

O. 并发与异步
来源：http://www.xuanzx.com/163qpnpteeb.html

================================================================================
来源：http://www.xuanzx.com/163qxrztjtg.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163rneknfab.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163wkaidfyp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163jgiursma.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163bxgwiafj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vqbmvygz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163fjehbryj.html

Go:   go f()
来源：http://www.xuanzx.com/163iczpaege.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163keneguyr.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163xfgfqoay.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163htxfyglm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163xnqrpqrv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163gvbgmdue.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bjmgshrt.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163psjthdnf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163qhmzvywx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gkoyfbfi.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ylwltwvw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163afllhhhy.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163pncpukbf.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163kizygcis.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163otqaozot.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163irvfghsh.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xxyepnwj.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ppokexcj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163futgluwk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163znilmdax.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163yyvbpwos.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163esicwjyn.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163uxtnlanv.html


<!-- 参考信息 -->