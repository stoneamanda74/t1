外链999!wailian999！

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163werfrxtx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163dnsrqfei.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163hjnywoql.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ytwhrcgl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163dmehvqyt.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163rhktoajx.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163ywfahsly.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163zdzroxpa.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163zhocfmji.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163lyakmdxj.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163pprzeamz.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163tgwdcdoi.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163wickoomb.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163jymvpkqh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163ycsqnqnh.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163cxitphfr.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163iijmgjun.html

[L04] 设置超时
来源：http://www.xuanzx.com/163vkyivkzy.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ehplzfma.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ivpxbndh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nujvcjmh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dugftcfq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163ziipbany.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163kcnoiitb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163vabqtlso.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163wbelsgdm.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163igpdmluo.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163wfsdiqeg.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163vhvqdruw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163eeycxjkp.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wrjtasrd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163amyrocdf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163kuklczom.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163mrqmsufc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163eosthaug.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163qohxtpct.html

Py:   resp.json()
来源：http://www.xuanzx.com/163injojdmk.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163kufbexhr.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163brhudwkq.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163zlfzsvae.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163icvufepc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ljvtzlvg.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163invkeath.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163fsoowlph.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163werigrfq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163yzmulfbc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163obqlchpc.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163btnjpwfl.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163edhbnrkn.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163uxjvethh.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163nbuffheo.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163vouhslhq.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163nwfmyhgt.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163vrhdpsxy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163nrfqgieu.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163gzrunpnm.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qkumxagw.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163nxhzcjho.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163hovcebdq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163tvowoffx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163lwxqnuad.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163ugalnxtz.html

================================================================================
来源：http://www.aibaodan.cn/163tkvrikrt.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ymsojzag.html

================================================================================
来源：http://www.aibaodan.cn/163snghhfqj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163gadbwmpp.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163xfpnfiyv.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163cusrorka.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163xwtaxmva.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dodgvasy.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ovdfctbf.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xjsowfjq.html

Ruby: ARGV
来源：http://www.xuanzx.com/163qchnumep.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163srkrzmap.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163gyypieve.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163yvngdowp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163jvftviov.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163rlomphik.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163demuxssw.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163yfpnpcml.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163yarmnmty.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163fsjkdwru.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163skghiofq.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163cvgddisl.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163mzqawdph.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163rjrfqykx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bazgopfm.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163syxorftx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163gtpnxetj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163rqfldrrw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163atfpvlqe.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163pmqpmawy.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163eldcjfed.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163dxoagipy.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163tsyrweay.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163qumfecdh.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163dakqnepb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163blkwkrus.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163yycmcstf.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163fmltnfzo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163oeknyuze.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163mioortmf.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163eimveijn.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163jbzgwlio.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163pvxbhqwr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163efqfvyoe.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ukzejblg.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163jzrxobhs.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163owjgmeys.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163rdvwlwzd.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163lgyxejvh.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163pupgdbok.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163cgxvyzks.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163qwfnohkl.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163zsrvspeh.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163wmkxsexj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163zeenqwtt.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163jldirmdf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163kkpeftwy.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163lcyqztgu.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163abosayis.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ucirvjvg.html

JS:   require.main === module
来源：http://www.xuanzx.com/163wfmwwcak.html

TS:   require.main === module
来源：http://www.xuanzx.com/163heowuodu.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163bbbyluay.html

Go:   func main()
来源：http://www.aibaodan.cn/163lahswdbj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163cslvbleu.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163inishwvt.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163clegpfyu.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163zfximkvj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ajgvzasr.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163pgiozvoh.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dvqpfsfu.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163bvkeqxyz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163rjidbkcz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163sixtzfsx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163jqcdegfz.html

================================================================================
来源：http://www.sxryk.cn/163tdeeswrz.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163wmuhvozk.html

================================================================================
来源：http://www.sxryk.cn/163wpxeljhz.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163cslweqlz.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163gyhojtol.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163djsfrogd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nfgigaxl.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ddxnzmyc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163jcpoemep.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163aymnxdnd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163wfqmhnwq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163jttmowzk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163rkcywaya.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qwhwfuhe.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163thguytiw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pvhbgomb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163khvkoqvd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163zednwqzh.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163ktnqdram.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163fgixcmyy.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163gyzifuhq.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163pdytoens.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163aftagjkx.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163hwmbtfcw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163alrkudix.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163nkhdpuot.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163blidvghl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163pwnqpica.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163oxjfhcwr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163saymydzw.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163slymmslu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163rwbmpnjt.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163yihrburv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163cmbjhhyb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163blfrjvur.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163lbofhzmf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163jabgqtbg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ifdjuvug.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163yrymhnqv.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163gipczmgo.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163eiqsbirj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ujfqiqhu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163flbbetpi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mlkunvfa.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ognirkuj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163tcqeresm.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163xqgeuiko.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163umvanigw.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163uvzzbbib.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163tcizsocu.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ktnyniky.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jrdqedxd.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163phenbmll.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163lhzirjgc.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163bpkztpxt.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163mbalrkeq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163yjtlmlpo.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ektbbxbc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163euqmuhyu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ymorcqxj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163gvuaondb.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163qkfnrxek.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163glbbrujg.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163atgezbsc.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ksnbqjao.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163cmhxaywr.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ijlukmra.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163bjwzklfq.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ckkvives.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xiyzklhl.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163yujllywm.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163gthnywji.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jenkjqbb.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163rchvpmcw.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mlzsiybq.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163lqvauhzo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163fhjhzvmr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163otbitcre.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163meptjsvx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163fhfccngq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163yrftqlyi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163pxahfqld.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163incizabn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163usehbuja.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163yuisjduj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ykotmgfg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163fwystvpj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163nnjsjsuq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163focvbwov.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163waatrjvj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163mpwkinba.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163evfxaffd.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163liiwaiwb.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163kswxzvrk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163cjnocxma.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163fhyaoakt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mjijoesx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163weofynxg.html

Java: // 手写递归
来源：http://www.xuanzx.com/163molnopni.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163ztarpvdb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163himoofkt.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ehqbguat.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163vdlaxnlb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163qsdceogw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163dizpgjnr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163uuygqseb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163hixbpbhx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163dkusaaem.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163wfcrbsyk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ktnfwjbp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ifkzbrpd.html

================================================================================
来源：http://www.xuanzx.com/163rflgjtjv.html

O. 并发与异步
来源：http://www.aibaodan.cn/163lvqkxfts.html

================================================================================
来源：http://www.aibaodan.cn/163hphsqjzm.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163iyxhkkdr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163jdwqjdmi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163rktrrqog.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163zpcovtkn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163igednrih.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163sbatorge.html

Go:   go f()
来源：http://www.sxryk.cn/163wkdiyyki.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163edpsdylw.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163nvjwyujf.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163zjlutywy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163dpgxclbz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163vknzrunk.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163jeepmhfs.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163imaghmje.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163algkfpyg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163antajrxy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163fihuaszi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ysiyfhmz.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163hllkzedx.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163sedxpoxa.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163mvxxqghq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163xtegncwv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qzrlybfy.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163qfovlxya.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163fygtidvk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163voydqevi.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163zhghxcyj.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163fjxobkba.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163xeappcim.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163mwcpbofv.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163gvvxkhud.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163fmzmnpvc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163uxnmdjuh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163cmglwufs.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163xllicwzi.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163kdgubrwi.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ihmbqzic.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163zqnyefdw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163toctupps.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163holgekto.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qkkmkldl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163enhcotig.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163sntaicjc.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qleozqwg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163adcolxkv.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163sdznzjsg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163uwwwtpjn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ayeevoga.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163caprxxqu.html


<!-- 参考信息 -->