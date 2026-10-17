外链999!wailian999！

L. 网络请求
来源：http://www.xuanzx.com/163cgfgxfsx.html

================================================================================
来源：http://www.aibaodan.cn/163nisrwzov.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163jltcjtpl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163aradefaj.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163xzgwmfyn.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163suqymfsj.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163hqqahxhr.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163uzvhknxh.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nlbjxuig.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163uhpyhoek.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163gbwppfvx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163szabkczu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163drrgflyj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163mlfbutcq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163fqbintaf.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163orkbqbwg.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163eraafxpb.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163knfhpzuq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163vkmlzakn.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163hutvebhb.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163wfozrbsp.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163neyfhtpp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163gnyunxqv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163upjsrtkw.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163ifvyynyg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163gnvpzovm.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163loaeragu.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163whnxqgyn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163cwypuixr.html

[L04] 设置超时
来源：http://www.xuanzx.com/163zfmldsgy.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163vkwcvkbb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163sevgtthp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163rpmgydar.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163oazrmufl.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ymofiqxb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163xbdjvpun.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163fnidhgbo.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163imwabenl.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163nusonejr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163hegeyoht.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163xlyynosp.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163oqjezjzh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gtpbyraf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163zxhhbybz.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163opkrqzam.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ugyonanx.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163kzgdblfw.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ssldtbhq.html

Py:   resp.json()
来源：http://www.sxryk.cn/163dzdwwxbl.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163gihmaxlq.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163ojempmaz.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163udxmhcec.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163kthrwwtg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163jckwldbc.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163zwkdgsnk.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163phwkdyfx.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163vecngpaa.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163ypmardeh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163gzixyrsl.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wqsdhxzu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163cvhdzspz.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163jwsqfxgh.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ergdodga.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163lnzeqvfo.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163lhdjhonc.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163bxpozcet.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163zdxcpgqd.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163iygmysxl.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163hoqhekvq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cvorzwdv.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163monuxcvz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163flyusmdv.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163zqprmqfa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163jxrgtdgp.html

================================================================================
来源：http://www.aibaodan.cn/163sfttkuck.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163gixvplct.html

================================================================================
来源：http://www.xuanzx.com/163hevepjjk.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163mnclacvp.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163jyapitfi.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163mmyhxmwb.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163typeokkt.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qzhzrcnt.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163crehidkr.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163aoglmgnq.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163nmfjxngg.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163nonneqti.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163rephabft.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163qakzghed.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163jojuyxxy.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163datrtuji.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163pbjrqhne.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163yobtkxjy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163miwihodk.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163unbzqjel.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ybcbbxvx.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163nvdiywcd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ifacfomp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163lnvvhxky.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163hvktnctu.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163twywdmfa.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163knjasavz.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jwabpiar.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163fcoulvzk.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163cowreuuj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163lvjaxxyk.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163kqegmcev.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163wxnmbaau.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163iiluffke.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163fhuilicp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163marhpfaw.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163eoaavnnv.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163wkazgjrg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163deeanlkj.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163lrfoygfs.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163mlqriybs.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163eppbcnvu.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163zplkzxcn.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163arandlni.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163mykiglmq.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163hcutffan.html

Ruby: exit 1
来源：http://www.xuanzx.com/163okjpmvlh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163qpifdigm.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163wpfcxinu.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163lpzfbeaz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163zsasgnhh.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ifcoffch.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163nfrrtirf.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163aghkitey.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163xjxjyhgz.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163uqbkeidf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163zlatnwek.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163anuygycb.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163jmekbndr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163rosxpnla.html

JS:   require.main === module
来源：http://www.xuanzx.com/163dgldoome.html

TS:   require.main === module
来源：http://www.sxryk.cn/163tukzlemq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163wjhgcmrb.html

Go:   func main()
来源：http://www.sxryk.cn/163rctyugrt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163rbirwhhc.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163fomkqcrh.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163czpvzwft.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163vvmyxsva.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163rzjaajry.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dsthmszz.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zdfxfpqo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163upmvsugd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163aalhcvam.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163anrcqzzb.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163smdrgdpx.html

================================================================================
来源：http://www.aibaodan.cn/163ffmwgalh.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163bkicicwd.html

================================================================================
来源：http://www.aibaodan.cn/163syioyonx.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163tbuwsmwx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163xswuwkiu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ditmaljq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163krgwagyw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hxmfnjlu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163amnxgzoq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163zrowzcbv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163owagkdds.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163kipfftvj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163secbkqmn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163uwvkmggi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163hwixqogw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fakulbct.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kpzjaxfk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ojagumrq.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163opjboxoz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163qepnvmyh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ygtzszhh.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163tlspuadp.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163qbtqwyxs.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163gvuxmifr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cmvedtef.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pmqsuuht.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163codbcjzk.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163cmupifsj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163wuezjnpb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163jcaeueeg.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163eieckltc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pfwllhye.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163gcyfcmlc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ypnhqxgh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163pojdzztk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163sglovzsq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163bglbvsgx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163rbajxiaf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163nafxbfye.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163egaxwaot.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ejmyfywn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163nyokfvgb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163geoxopjn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mwmzmghb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163xnplhlmc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163cvszinqw.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163kpgftmcl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163wkbhdwik.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163qnalnfsb.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163gdoiubyy.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163aadvykli.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163mupfczib.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163oyfqujtx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ctkxssqp.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ebsexczo.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163npyklxep.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163jtnsgyxz.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hosogrkp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163dfiuaxbk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163afbxbgvk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163mwomslyp.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163slnsjjux.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163kvwapinh.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163layhpbdi.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163gubjbuja.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163yqwlkujx.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163bnuguyyc.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163crzglvji.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163peuiqntb.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xcynmjpf.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163wtuzvhry.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163txlugjez.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ijhdvifx.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163dtxhrwxr.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ctqdviel.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163akhrpyfk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ihqxnkvi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163fcncxdjb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163nffwtayc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ljshduvl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163kmzkkbfe.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163dxovckll.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163fgewykek.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163tjyxwiqr.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163izysllkd.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163kqzzwobb.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163zgwqpvws.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163xezprmkq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163cwgwgcyy.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ortwhjah.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163owcjhtam.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163vznmljsc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163emqgwuit.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163amlrznqt.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163whulvbnp.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163pglvjgew.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cpdaqavz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rbpfwwoj.html

Java: // 手写递归
来源：http://www.sxryk.cn/163hczxuwoy.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163gsfcwguy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163sigzkung.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163hvucyayi.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163icnysnht.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163wjvszolf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163rzovcxtq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163afhxmnxm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163nvwnaglq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163epfgpsch.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163qeleagzf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ofigbgho.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lzdrsyvh.html

================================================================================
来源：http://www.xuanzx.com/163linumpds.html

O. 并发与异步
来源：http://www.sxryk.cn/163ccljwgsw.html

================================================================================
来源：http://www.aibaodan.cn/163uwbzeyjg.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163rgrrsjgk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163kgmfktga.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163htaxnazz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ernrzodn.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wdtdwxpo.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163tuanflig.html

Go:   go f()
来源：http://www.xuanzx.com/163qrdsawfm.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163wszyllus.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ujhtdkiu.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163gkmohnms.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163neqemdyl.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163hijufxuw.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dqhuoiol.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zndyuxpp.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ipryiytc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163hkofiddl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163muydooci.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163cwaevjxx.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ojygrehy.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163hxpzzqfg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163rdzzbnop.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ljhwgwpb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tdvzpdqv.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163buhfsgnl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163yusopwpu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163zwbhfhxh.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163wpchkojj.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163pfssteyt.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163kgaktjnk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ioktwnyn.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163tpchdvog.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wgbkhshr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163wwukdrgg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163wwzxzmje.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163ewomuuzk.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163wpcfjqsx.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163prszdooq.html


<!-- 参考信息 -->