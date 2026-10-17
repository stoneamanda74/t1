外链999!wailian999！

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ntnkbxfx.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163wuyevrkt.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ejskmydn.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163gcjmdeks.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163aftppvnp.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163helsxhgu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163zwbijxuu.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163gxzxfppo.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ssdycfgi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ipjekbgd.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163rriwkuan.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163mlldkkjw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163istnlmcv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ldcyhmaj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163xpxkmgbv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163ndpfylxe.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163sxocoetx.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163sejvdmwh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163xoofkxdv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163fthknwen.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163oycxfbyu.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163khzwnbpw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163vebaccwe.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163oofvuqzy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163uosgtlyg.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163qsihvbli.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ehfktouw.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163ebvvtdtt.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163locfdpyk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163mfgrmexx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163fovnstly.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163mplxwlzz.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163yfqhrztl.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163oympwatz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163swkbuycw.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163hpgsgsxv.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163jtnyaqph.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wailqiag.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163krpwcldw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163uddxyvfj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163qmaquvcn.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163brkxtanm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163zcvfdwmt.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ilanqhki.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163olzpteex.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163vlzufnpy.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163msegdrte.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163tzdiwukk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163tylkafzw.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163wpyogfmw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163krfnskrd.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163zbyiwzml.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163niuxbtok.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163pzazvvee.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ucqeinoi.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163nburlsdv.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vvfilvyb.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163gkadwrtm.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163uspxhmld.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163esvjijon.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ahaddcka.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163forhhauj.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163dstjdvuq.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163ecnqymbz.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163nvmbqgvr.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ezoggccp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163ynqpqgxt.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163elbvezol.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163nkiqcrrz.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163txndvzgv.html

================================================================================
来源：http://www.xuanzx.com/163pbniwwpm.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163tgctaiax.html

================================================================================
来源：http://www.xuanzx.com/163mptpslsd.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163wmjtfrcq.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163xmfygrzi.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ajknlsip.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163icnwckve.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tgkkcluj.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163uhleecdr.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163esughstp.html

Ruby: ARGV
来源：http://www.sxryk.cn/163buathhrg.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163saamnufh.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163gocjffyf.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163xuqgbbcw.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163oxyjxxug.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163glcmkooj.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163nygwjwwn.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163hxoanwdk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163nnuvwkrt.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163njxpeajh.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163xphslnhh.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163vczuyynj.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163yuhrzvli.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163tinjulbt.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163cwfoqsdz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163yyfkqncj.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163iladdvdx.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163hltuggke.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163xgwjabwo.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163uoapwahw.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163rfnizjgl.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163mgjwawmt.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163rtexediu.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163tekezggv.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kxlrytyt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163rejiuqki.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163grcrlkbp.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163scvlsoeo.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163xcaudazq.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163xoauyble.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163thhhajqx.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163amxwkbmw.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163egsuqqko.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163untcpbuy.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163sadqqbhc.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163bdmkcjjw.html

Ruby: exit 1
来源：http://www.xuanzx.com/163qyiqzzkk.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163gzqgteks.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163cmlofuro.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163sipvypfn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163rddxcynq.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163synksizj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163tltmmaag.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163jlepyuvr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163fkgrnktr.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163dneydhrt.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163hvgnhipa.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163sgrmcucy.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163navupijk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163qgluvxpd.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163fetgdczm.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163lkqjmbtc.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163qftlgnxj.html

Go:   func main()
来源：http://www.aibaodan.cn/163goxqjnau.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163qlagimxw.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163chbejlzd.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163oupaebxs.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163xhtxywra.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163qzjkjwvr.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xucrrgen.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163pelnexjb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163mmeavqug.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163hnkpvfia.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163bxqxbkkc.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ufxsbmij.html

================================================================================
来源：http://www.aibaodan.cn/163tdpomeav.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163gduhutxr.html

================================================================================
来源：http://www.sxryk.cn/163wuolrgmm.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163qhutougj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163pgstwnuc.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163gnddeigo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bquslrzs.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163zreqsegy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163nskgiapx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ymuufmno.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163atkieviz.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163vrfnjmko.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163jvmwqnau.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qzuufgxx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163lkmrrffm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nsbutcwp.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163qfbhxcoc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163bfwffxpt.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163uzgksgal.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163stiocubz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163vlxkzkzr.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163jkegxaji.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163rnjdgggw.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163jouqwwni.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163oatcxueb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rdaquins.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163rnjreati.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163wuljljth.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163mplnsfxw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163tbltrphc.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163xotmqwpn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163hunidhgz.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163utdlhxrk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ifsmybwy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fsfrdzsx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163peqpgupk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163sgemkgvh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163rbychtxa.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163eegkvfgl.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163hfntzlrb.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163rmikxwua.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163tcqqklkb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163nrmgpdfi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gjkftide.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163fbmbmxrz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163xntvbcyf.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163vahrvhcg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163tjfykkfj.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163cvxbnxxk.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163timaucjy.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163sysarqhw.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163rdnulpvm.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tyizbprg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163hvbqvzgt.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163cnfkgnqz.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163uawyblua.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163opskwmid.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ygpugjsx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163uvtuxwjn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163dhetftst.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163rppcpevn.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163kkiimxsa.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163udbnzkyq.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163nuyogbjx.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ihbvoesj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163wqzansqc.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163yjeciabe.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163egwyjjqs.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163txpombbw.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lliytgtj.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zbfpoyfa.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163urvqcvrg.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ifoaaszd.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163uocidyad.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163abmkbpmr.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163vaafbbhq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163lkwfqemk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163xkaedkli.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163lofxmvrz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163wynldpny.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163jcwlfuan.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163csymdibt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163jwlcoqca.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163qvzfpqnq.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ltkbwyfz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163cnzerhdr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163xwhglyus.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163barbrhos.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163dtccvqvq.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163pjuizzrc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163nvlnonyx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163hnmnxmju.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163herwgkvg.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163quhatebk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163jafvgyid.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163adtcuheg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163heqpepne.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wzfybtjl.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ayyexecp.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163dkazhqhw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163nssvsnkx.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163aejsbsqb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163jdkfvthg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ynlcbajj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jpsubeue.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163cazukvsc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qqwsvdic.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mzwxdnxr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163iebjnqba.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163eottxvfh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ndzbycer.html

================================================================================
来源：http://www.sxryk.cn/163ucqvfbum.html

O. 并发与异步
来源：http://www.xuanzx.com/163olueyvua.html

================================================================================
来源：http://www.xuanzx.com/163jfldujtb.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163dfxosxbh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163xcczfkny.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163yfpypucp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ovtfdlsl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ngaqlljp.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163qkrhxycp.html

Go:   go f()
来源：http://www.sxryk.cn/163kzhcqohh.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163qrqcoggw.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163buypjdyz.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163jvppbflh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163frrsndjg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163oukioday.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hjhrmzzd.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fitinacm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ehhopnqc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163jooxkczf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163eejwplqd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163zozujqnx.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163cfrgfufi.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163pawowxuw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163fvqzoiwr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163mxdriuet.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163sxnlsakb.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163yjtpwubv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163jivnufgw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163qgfuhtdi.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163aarbmlhy.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163hvscyeqy.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163fuludeua.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163wdwxfefs.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ygkodlow.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163semkglsi.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163htcwzapr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163hninjfrn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163jbjridtz.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163sjkxfaje.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163awdcphtp.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163xwhpidcz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163umimxfdx.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mqwkmzzt.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gkbsddtn.html


<!-- 参考信息 -->