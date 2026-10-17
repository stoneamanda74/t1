外链999!wailian999！

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163fafwmzxy.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163mbiqvbsk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163aaeqpfjr.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163dhddpjun.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163yacihrqu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163yzohaupl.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163evplakbh.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163loghjnhv.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163jtbanrmh.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163whhqrkhr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163ayebbwnl.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163dooizraz.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163dzptcupd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163llvdjqlx.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163zilqyhhl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163gycxglyw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163yeoqzaux.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163kbsmjebd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163dmavyxse.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163xosgghjc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163kkhsrptf.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163nabtwoqy.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163yagtdkwk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163tfuxpksd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163okwrxnhd.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163azklfpps.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163pucppzbn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163wzizfvmi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163jjbzbvqw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163jmclyywn.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163efiyuqgr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163wthqohcw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xfhqukib.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163zzenktiq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lfaiyysi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163zaojounl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163wryfuitf.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wukomqxh.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163rlvkwjaw.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163llrbmdxv.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163apxorfnk.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jgegdcby.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163akhunzao.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163twrnnauc.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163xvmydrxl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163tcsukshf.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163fqvovrtl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163nazyfgrj.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163lfiwsxjl.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163jvowstqb.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163dnfswcvs.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163nnlppxzx.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163lgsewtfp.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163hppxbbfb.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163erinhfzr.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163uqhufsnd.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163gdtorymt.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163vloaqhsr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163gkcskalp.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163pqvediwd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163hwdogtyj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163emwacdzy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163edwgbfkd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163wpiofevu.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163nhzbfvdx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163gecilcvl.html

================================================================================
来源：http://www.xuanzx.com/163nqmlznjp.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163tduhgfcm.html

================================================================================
来源：http://www.xuanzx.com/163vrgensec.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163jjijynxs.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163xcthyqwi.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163nxvtfqgn.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163erxjtxfi.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163rfmxpfzf.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163oaxptjom.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163bvqfihre.html

Ruby: ARGV
来源：http://www.xuanzx.com/163vekodmkf.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163rozsgvyr.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163fokwossp.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163illiyubi.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163cywnumdu.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163tggifpcf.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163fekdhitd.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163asybhgpb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163cjfrskof.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163jldaetnj.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163puhzlqdf.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163tmloerbt.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163pzqmkwwq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163lsylswiv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ihirfsyd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zwykjoxc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163qjszjqqx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163xavrnjzk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163ljvrqdmb.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163olptxpor.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163cuojivve.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163rwtkvffb.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163qgwewxuf.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163srtjtuqn.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163mgndsgmt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163hwfwmptk.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163sykzjxpz.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163rqombfki.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163lmnsblgb.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163nowluiux.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163dnipsuck.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163cejmsrql.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163rmjgtbdw.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163wdigdldx.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163sqcwvehe.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163aqfvwijy.html

Ruby: exit 1
来源：http://www.sxryk.cn/163rpoxhcmp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163gkvghqrp.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163bdqhcmcb.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163gqlhbdvr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163gdptxewz.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ghmvfjql.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163yyjmmbtg.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163xfnxgznh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163bdsyhdox.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163zyibtpce.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ecnipsxz.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ewpjmafv.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163omztxzcg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163zgarmilz.html

JS:   require.main === module
来源：http://www.xuanzx.com/163knhecmcm.html

TS:   require.main === module
来源：http://www.xuanzx.com/163uehblcdu.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163mmncedik.html

Go:   func main()
来源：http://www.sxryk.cn/163oglxtgkt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163qtocupft.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ziaxeaai.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163bbofkzpb.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163oizcxbks.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163rnyqliik.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163uotvicvj.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163txnmylyb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163tgfmnutm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163fapasvif.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163qjuzpqci.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163pnxzuipw.html

================================================================================
来源：http://www.xuanzx.com/163mpxdiscs.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ztgkdpto.html

================================================================================
来源：http://www.xuanzx.com/163pxxbouqu.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163turduluc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163nnxzqmym.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163pbldvcfr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163sshegkqb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bikxqymp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163jbzkktyz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163jtazyqjy.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163evxwjpey.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163zzbayknw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163yrhihfnx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163llxmsnnz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ixgtzisf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163dxyuyblu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163sbcbkiga.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163cswzzwdo.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163xwkpaudu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vawuodcd.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163jtwykmtm.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163fpfeqtvs.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hiznovzr.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163gjzdiuvg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vtlgufza.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ffngbkly.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163vvwyyisk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ghpbrmfy.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163kygyxrud.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163zmezhpqh.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163febkoymu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163sfumclxk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163yrjpryqb.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jalyppur.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jbzirvwu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163nnruusxi.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163gtpuyfjn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163frtfbdik.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163sfidtflr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163akwhehie.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163yfihirex.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163reijpzug.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163plbbxzdv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ywthaecw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163vbczikfv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ohhhpxui.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163qaqcbnqk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163spvldxwc.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163bfbhjixm.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163shortzym.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163fyjuendj.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xfibotba.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163slputhdv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163spliuzrp.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163fzosgpnf.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rjynerbl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dvqkomnl.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163eteieinc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163pvmsvfix.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163lxnbdjwt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163xvzatjyl.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163vbjjbfpz.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ijgboxeq.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zbelqpmi.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163bjnslkqu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163wpcmwjys.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163qdnemzos.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163zqnqwaqr.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163eohiucls.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vfitauhw.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163arzwmmyi.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163lregdquw.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lmjorsqr.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163bstesrvg.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163weyrfyph.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163qryegzbt.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163mmmssimv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163fowjzevp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163qcrudios.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163wawgoocp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163vpwrapxq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163kinywbsy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163lvtibwpp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163gxxjderq.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163cdiorxfe.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163vmxcwhio.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163moyhhspz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163pqtjqouj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163qszgopcf.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163odtflmxo.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163cbqdiuvc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163heomvxmz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fpdosuke.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163cbjwovee.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163fqktmyag.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163tujkzrgu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qjbobqmy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hsynejyk.html

Java: // 手写递归
来源：http://www.xuanzx.com/163qcoetiap.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163slddjacm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ctkuqqhy.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163hmmrkgva.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163zzwaqdgp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163xqcleetz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163lmnlkwjf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fosceshs.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ceijnfvg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nlizwjmp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163mjgpzhau.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ihvunbqt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zgqzwvah.html

================================================================================
来源：http://www.sxryk.cn/163rmkfsubu.html

O. 并发与异步
来源：http://www.sxryk.cn/163ejxxayec.html

================================================================================
来源：http://www.sxryk.cn/163rfafeorv.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163jewaobvg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163cgxvssuk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163asttgegm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163rrywyqas.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bcbhxdjv.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ghlqcgmj.html

Go:   go f()
来源：http://www.aibaodan.cn/163mqdstkkx.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163oilckksv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ypfdyfwt.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ewzmvoem.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163nmywitjd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163tmdbbgwo.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ezbnolvd.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lfzoilxl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163eltjfzlf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163xmbvkmyp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ksvezonr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163piwauchj.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163hknqdpqe.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163kefxuqsp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163sestvkrb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163luwwnobq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mhjeipzz.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163csdfgysk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163nhfinxqx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163vpvzbafo.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163kjzmlnxz.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163nshflaqv.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163pmkzdusa.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163qizefadf.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163xhychuts.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163lsnpvlvq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163yypflogo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163dlfseozx.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163caliohtm.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163gnuwcspt.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163zfcxbvub.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163rsvglllw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163xfmpioym.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xwhogmjp.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lpbpaaft.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163aascvdyn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163infgitxj.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xdbltdxr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163utbnwagv.html


<!-- 参考信息 -->