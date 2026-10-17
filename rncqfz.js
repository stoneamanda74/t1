外链999!wailian999！

L. 网络请求
来源：http://www.sxryk.cn/163sykhosks.html

================================================================================
来源：http://www.sxryk.cn/163zdkgotry.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163sfmxaekd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163udernahx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163zygfnxjd.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163qpvvkckc.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ymnyezwg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163dhkruqpd.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163fjmofxdz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163udqtgalu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163xzmjflkj.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163qszwlhrk.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163kywpznqi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163veexomka.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zcbxkxhs.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163yrvwugzz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163nrpedvrl.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163fgbmxejs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163fnxaqqlv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163xszjupqj.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163pfuumffp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163hjrcwala.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163oliqdjea.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xstfuzxq.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zaorrlrp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163byarvroc.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163bexoovah.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163lfjljkot.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ubmzoaxs.html

[L04] 设置超时
来源：http://www.sxryk.cn/163fiokflap.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163hxrscukm.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ckhuibud.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163diqkyoaw.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163iygdbdtf.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163qugtozpi.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163gdgjopgp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163rqkuspvz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163mnvcizan.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163xufyocxl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163gniiiqmr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163qmuwggzf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kqckaowg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163dxphomle.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163acmuowxz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163sspvtaby.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163xnhtlfsg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163qitvvavb.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163sfzdasqu.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163wqwmulbt.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163zkmnnxkk.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163vjoqlbnn.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163jtskdmvu.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163lhmwapmh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163gsqejoxh.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163fxhpxqwe.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ohfjjokq.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163rcunhdys.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163krwtkdkd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163eqoklfcf.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163zmrxtsfd.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163djgfdvww.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163qwpmiwgp.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163mmhhyehp.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163tfimfogf.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163wlemlmoh.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163hiumkhbw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163pgocbkka.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ycvnxmda.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163vpfmvrbl.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163ufcxjejh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163vmedwceo.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163ngdfadmk.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163xwfvdnjv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163arcuohvr.html

================================================================================
来源：http://www.sxryk.cn/163ffrffjeu.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163sopnszfy.html

================================================================================
来源：http://www.xuanzx.com/163evjcgmac.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163ynxyimml.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163xpfqryoz.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163zrwuqgev.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163yshurbps.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163udbywavp.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163awcerrsv.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163dhxqflfi.html

Ruby: ARGV
来源：http://www.xuanzx.com/163zjpxleqx.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163iiyoiiqt.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163upykgfey.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163wbzgslku.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163dwmarnzf.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163fqmohaal.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163pqexdzfu.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163vvixkptu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163nezqpvlk.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ahmsfxkx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163gqojctqe.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163zhspmvos.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163qabuznfn.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163ydvvbdpj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163yeqyyzts.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ajvqmmtb.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163zfssoipe.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163gtnoxzwk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163izkjhdya.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163eumjvgyi.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163okuyskcg.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163kjrkxffe.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163uanhusoa.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163pwbopdts.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163feequjaw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163wjtpwech.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163krcjzkwe.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163cesdwlqp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163uwokurap.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163zeqkoymt.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163fwfvoaho.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163zwtzzztw.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qobmjpet.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163qurpamqt.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163uxkmmyxu.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163uxnzunos.html

Ruby: exit 1
来源：http://www.sxryk.cn/163okxgklsd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163eyokrips.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163dhghwico.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ijylidna.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163bwspojqa.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163vhmuybjo.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163dqiupktv.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163zkeowwce.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163balbtyhd.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163guvhnnmz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163yowtxzww.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163pqcyeuur.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163iwfpealn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163kuxnrirf.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163lmwcdpsk.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163jrsnzhiy.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163baxkannp.html

Go:   func main()
来源：http://www.sxryk.cn/163prdleydg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163jahlnslo.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163lrumopmb.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163jtoyeavp.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163dxirghnh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163onfsbfdu.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vjseiycn.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mtrojyhe.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163djhoclup.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163gxbaehdv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163zizjuokx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163xssgnsfl.html

================================================================================
来源：http://www.sxryk.cn/163muluqjji.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163miiuocjy.html

================================================================================
来源：http://www.xuanzx.com/163rutvliwx.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163oxavtwjk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163porpyjfh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qluzbrqv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163skluqbtt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163dxzwmusj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163aefdjnqv.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163fgyuqfiv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163fxwyuwkf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163iqdizmio.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163bynwogiu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163aquvoimh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ilkfwhxt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163zbzdqllg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wiwolgbm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163nkpgagtc.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vcvdrdlk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163whpzogyj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163dgbsvpod.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163gatiwsrd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163zcodyrrd.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163jemyhxgb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fdxipqwh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163iabqjhpb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163tngvvdpe.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163tbnqnfqa.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163qywmqrho.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163zrzirach.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163qnnvyqmh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163rmgaeqsf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163yczpelqg.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163dlvgltmo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163luphsdpq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163yujpowno.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163rphndflg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163kpdhsmyd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163bifqgfhr.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163jdxjhugc.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ylifcbpd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163vwxbpubi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ncecvavk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163gainalks.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163lrnogmzt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163afslrpvo.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163pzkiwfoc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163csolceus.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163eulfilbd.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163hwiuefgs.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163wtbtpeek.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163oqkyskot.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ijwplrse.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163mppikmis.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163hisqestl.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163zgufbmix.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163mxtnscgw.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ctbijtkn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163nnspxjum.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163jacetujs.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163sdhsfhyi.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163jqvrtowe.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163spmqvkbu.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163vuqyeggx.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ruixcvzk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163pdfekwts.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163wacgkyfn.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163hnqbjtag.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ppffpiwg.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163orvlxyfh.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qhrrmzfl.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ixmaqtwh.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163rcyxreoa.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163jbsrfjaz.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163tdxwghlo.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163edcepmqx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ybgiosio.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163zjzoihvj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163yixvqqyh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163tbfqcrym.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163jxchtmws.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163dokzocux.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163iemvallc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163wasufgww.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163elmkmjdj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ltxsnwtz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163nninxhbf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163etnanrew.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163ixjdqtxw.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163wwfirubs.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163nzppzflf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163dyqjikuy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ixkhnrrd.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163xdvuigtg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ztlalmaw.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163gfnpdrhl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163bnbwtamv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163yoxdmvql.html

Java: // 手写递归
来源：http://www.xuanzx.com/163qacmznmi.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ckpmtjxi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163hbbddchx.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163cfjvesrg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163vdbpqwrs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163swaurdod.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163mryytgui.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163xnmxfdno.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ggkxdnuy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tyryjhqp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ahcttdle.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ovlxyevo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163iwgerpyz.html

================================================================================
来源：http://www.xuanzx.com/163wiwsrgnn.html

O. 并发与异步
来源：http://www.aibaodan.cn/163wnwckfvc.html

================================================================================
来源：http://www.sxryk.cn/163uwesnsmc.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163jqachpmt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163rxkpeccr.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163drjxbftf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163rsxcbizj.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xhrvkyly.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163pabbegql.html

Go:   go f()
来源：http://www.aibaodan.cn/163kopccfas.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163bvaxgkpd.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163qpumrmwq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163wofhudsd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163jtxpswtt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xnnnsaaq.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tnmqttoy.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163wncmjeng.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163pxouemia.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163xwwhjqmc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163xoesivlf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163myxypjju.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163bztpirve.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163slkoozab.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163hucivbbk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163iebnngly.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ugdenknl.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163hizrpbpz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163tzmntxda.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163schtrftt.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163lubrwpvf.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163rwqfrgfu.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163rzwposil.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163dtgldgbl.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163mabozavs.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163olrmisgb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163fqtsmhge.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163xkdgluxb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ytfxjlta.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163frefeaez.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ecizuyqd.html


<!-- 参考信息 -->