外链999!wailian999！

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ixaadbiq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163fuopjxzb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163zpccabty.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163cfertqdx.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163mbqjamxa.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163tatjzzkr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163bzhcgsqu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163sicyqiyd.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163gqitdrwy.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163pafdyynt.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bxlimqpv.html

================================================================================
来源：http://www.aibaodan.cn/163kkmvnvaw.html

L. 网络请求
来源：http://www.sxryk.cn/163cwxbqqqn.html

================================================================================
来源：http://www.xuanzx.com/163rckcbkiq.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163xdkvyxqb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163hbflorww.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163kxtysqag.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163mlmeajqk.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163pbcncjvt.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163bhpczkdz.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163dxvkmwyu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163lblqattj.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163nnsvcsmy.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163aotuopyg.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ludcvoem.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163ktypqiug.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163dijzopwq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163pkrsnxub.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163pjsjqdfu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163neqbtqlb.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163htwhrlpe.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163gjkjicho.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163nrmxrjtq.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163mvyklmzb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163wlqclrub.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ltudgdns.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163sujcovkn.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163duzdrsnk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163qnjzhfbm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163xpohdxkq.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163upsyuynz.html

[L04] 设置超时
来源：http://www.sxryk.cn/163unecpjnx.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163azxwibwl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163sonjiejz.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163rprkuuxz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163okacmhnp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163lckiibax.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163apevxhdm.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163xybovprl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163huwundqd.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163yhzirsku.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163trhapove.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163ogejzrsn.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163eoutwyfv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ngesvqdy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163gdeovzxq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163mdeiwxle.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163fckvavqs.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163gopggcfz.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163hoftogxa.html

Py:   resp.json()
来源：http://www.xuanzx.com/163xllsxnie.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163dvqdzksb.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163hbjunhcs.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ueuracxv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163wmqicaiy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163ijfkjour.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163pmbxhskc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163kpheyxis.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163iugggfdf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163jflocldg.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163aaayoojy.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163fssnjasn.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163bzqxsjgt.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ejcikezz.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163lgqdaeej.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ygsfycme.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163hnypjiff.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163iusfhwvy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163oueqikug.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163fiafgntc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ekvpkoxv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163meiryuii.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163wxkbtwfa.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163vspkeupv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163xcrpzsyp.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163nyqufwwx.html

================================================================================
来源：http://www.sxryk.cn/163ozjnmqqw.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163xwjuycba.html

================================================================================
来源：http://www.aibaodan.cn/163mpzwvemx.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163lquueijy.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ewdbifbe.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163uxjeuydm.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163mioofvll.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163vzwyawfb.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163caunbxzr.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163uqqlabko.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bcvkqidx.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163aljzsoos.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163dnbcayhf.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163siueenve.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163xkkcelix.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163jdgyuyjz.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163tflsttis.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163bunrqqtq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163hurkaras.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163epqphjku.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163egkevnpl.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163sxpxenlq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163pmlovjzl.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163xuydtuxz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pjxbkzwf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gammqqrw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163fqjurvjw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163yqnpidum.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163jxqnhniq.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163xqwfjynd.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163cqmaesdk.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163nblrymzv.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163fclydnxk.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163rgzmnqxo.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163lfuxraor.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163buezcnfi.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163wphmunbe.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163sgkmycjc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163qyjgpnfv.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163hbyqsput.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163awxozkml.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ptyacpmh.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163foxdrnqj.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163fiptsitb.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163gnjzgvpp.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163zfsjcuwq.html

Ruby: exit 1
来源：http://www.sxryk.cn/163eskizrhm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163hutdlipf.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163bkaulpeh.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163psdgorjc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163hrggzsha.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163abdpyded.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163qrhgpsde.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163hniqvthu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163duzzdqji.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ggvbwptc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163deprjhdh.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163htgsrcgx.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ubzgqlrv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ytejimog.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163izjtgwst.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ehnunyck.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jvslmqgh.html

Go:   func main()
来源：http://www.sxryk.cn/163emzzouvp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163lysjuazp.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163azqeullr.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163cjotzsxi.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163dvshotkb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163dvruchgi.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mzufoyrg.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dlfgycfx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163arzhxpdn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163qcbllaqc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163hgrqndzh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163lxmwjkag.html

================================================================================
来源：http://www.xuanzx.com/163xaoduorg.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163sdvadcrr.html

================================================================================
来源：http://www.xuanzx.com/163jmpwkwcq.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163hvmscwke.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163cmvuzoiu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qbvkoils.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mtzlukto.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163gaivcbzq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163jovxpitk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163ybkfnqsc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163abuvkyns.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163vwoxvkha.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163jgmgyozc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kjttsiin.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163pdtwpniz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rkkvdbmj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163tueczngs.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163iqjyzksa.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163fmwrwbqu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163daxyyrjh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163fqksfbph.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ffygheqo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163awcixkhm.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163rcaonxla.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ithtoick.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bfuzndxc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163bnakhwjm.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163gijrbvoj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163xvxblpri.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163nycbafzu.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163hkoddane.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hjcytmbd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163xqslqaqi.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163viinhzza.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ntjiulai.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vojrqcbi.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163wduwhfvd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163dtdmrhki.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163xerqrtdb.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163dmbxlfxq.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163pblhodws.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163lrrzkgac.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zxavausm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xcqekfdw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163lzgwetgv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163qoavkslo.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163uanxrxnz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163mxuifjgz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163qtkctewg.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163nxibcuey.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163prgdptux.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163sldddtiw.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hkkektyh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163thzyvmip.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163muxokbrj.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163fwfdpzfx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163osruoqyp.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163utdmnayv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163pofgldxm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163iisckcxz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163vavezthy.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qteauafh.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163fwlnbleo.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163vwxveezu.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163wbyokykf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163uxxfsrln.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163loswixzk.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163gtdfetsw.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163ahkrobyn.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nkrqkvie.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vsmlohmb.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163kqxfkndv.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163mitamiyq.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ksjnhmor.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163etmmyzpw.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163pyfabavl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163yqzrvvva.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163gppsgunx.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163shorbuwl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163aucbciob.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163voulaotq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ucchjffh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163yldyjfyu.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163yhzsdwxq.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163dtxblgfr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163stauiide.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163lnbfebvm.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163vrnvdckn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163danwuxra.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163oflehexn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163vnlxhkcq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163rastahal.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163fmchvkbb.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163xorjjqqq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ayaouqgq.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163nrsyvryx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bmpcicbs.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163npvthhfj.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163eekqrzvs.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163vfbtcgku.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163mpmzxcfb.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163yvkriukz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163anzmwejs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163udthzvoh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163dmknwjtj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163forubssx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lwtrlngp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163iwbvjxpg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163zdbpyylj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163fteomtxn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163liejmxmg.html

================================================================================
来源：http://www.xuanzx.com/163yhdsguap.html

O. 并发与异步
来源：http://www.xuanzx.com/163zozpgrlv.html

================================================================================
来源：http://www.aibaodan.cn/163azsmomyy.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163glfzspkc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163rfkftlaj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163iosaqiee.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163mipvnmnl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xhyspeqo.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163rcnjnara.html

Go:   go f()
来源：http://www.sxryk.cn/163wweprugz.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163qzylwtdt.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163opsoukdg.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163dklrmfaf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163zqlkryix.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163dqslpobk.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fvsyechz.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163amjzgbli.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ondtdofp.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163qmbwuodg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163lepzlaoz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163kizryuzh.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163mjqzmqmg.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163lysveffp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163tkrbilgm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163khqbxgeo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pdibzxws.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163vcdxsjpo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163lrtkptgk.html


<!-- 参考信息 -->