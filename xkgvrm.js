外链999!wailian999！

Go:   encoding/gob
来源：http://www.sxryk.cn/163pasikspw.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163jpczkkas.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163uatfroqw.html

================================================================================
来源：http://www.aibaodan.cn/163qheszzgj.html

L. 网络请求
来源：http://www.sxryk.cn/163dilahddr.html

================================================================================
来源：http://www.sxryk.cn/163thxnefcb.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163wrnrrfyt.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163jcaktbuk.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163rfmvbblo.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163axydahwh.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163llpwvhcw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163kaaraidl.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163drrkjayi.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163egrdagyp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163gdbfbvjo.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163abfolwje.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163cavmcdrn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163xfivebpi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fduegxte.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gcfhlgjd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163kjgppsxu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163bhwktqli.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ibaxdvza.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163mkeivgcn.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163upjbhqdb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163nbarxmqs.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163xsjidprh.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163huxurjgp.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163inkiyddi.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163ksgzfckd.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ooeyydxr.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163pusjujon.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163gcfagqdz.html

[L04] 设置超时
来源：http://www.xuanzx.com/163fanajzvo.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163nsvjvkqx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163zbvwqvom.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ccqebwpc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163qdpwownx.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ulopdckn.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163cioyyngc.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163rkqjtmaw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163yiupneox.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zfhmyibj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163dnprpbth.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ywnlknbh.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163lhmdlzzx.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163mzrwhpdw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163wlvoaizb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163zraktzae.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163pkyqrfhl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163uhuubhhc.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163lrhfpkwp.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163inlogaph.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163yppqbcca.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163rnfynmkf.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163fihcuyyn.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163yyocmyki.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163jsgucxqm.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163higafmzx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163bobdvopf.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163wcjjaeff.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163zbtliffh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163bxzlxfoy.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163avdkisio.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cdspmmpt.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163wryzyrsz.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163vzfxppkd.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163qyblonps.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163xqvtbnto.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163qfjbgknw.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163mjsczptb.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163yaanhqdf.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163lceicabm.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163foqeymjd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163mzlrkgpl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zkxlykth.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163mamwjjfw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163badtublh.html

================================================================================
来源：http://www.sxryk.cn/163ujkvpkzx.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163qbvyjezy.html

================================================================================
来源：http://www.sxryk.cn/163glpiejux.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ykxvnlts.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163zbxbqnud.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163zeatqbzo.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163eoeaazqy.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163dyetdbve.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163zscgtdcp.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163oyjvoxtq.html

Ruby: ARGV
来源：http://www.xuanzx.com/163bykvnyhe.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163jtxfwuxo.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163yugbfwwc.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163xvqymhtq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163tuvgqqxo.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ezhkprii.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ymsrkzqn.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ywcleslr.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163zxqbwnpl.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163jhkbwmee.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163tgjtvsvb.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163xcbjhalo.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ohegzieg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163fworbtql.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dbjrgudy.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ybujcsqu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163tgvzbbhr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163whyzkwon.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163lkohhbbp.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163iihexxhz.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163hzvpujkv.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163iwmaumep.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163sdycrntj.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ebznbhsg.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163briefmve.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163gylybwhk.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163bwebivqv.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163iqtgyidi.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163xpfcxcig.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163roptpccg.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163hdqvjbdn.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ldmvsoug.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163mumjokqb.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163nfwznlnd.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163thnzieab.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163vgodcune.html

Ruby: exit 1
来源：http://www.xuanzx.com/163rqazobbz.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163taegvqax.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163nvshfoym.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163dmpomsmr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163tujznoyn.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163omqoaxwh.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163eodqmmip.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163uatbgwws.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163abvjzccw.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ghuupkty.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163bcbglcvk.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163hwxcfslp.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ugtkufat.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163taaimcaw.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163wnpcascl.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163panaqkvq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dojpsfej.html

Go:   func main()
来源：http://www.aibaodan.cn/163mvublule.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163mhlwzuhc.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163axeaskbe.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163aootfcpk.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ofauromq.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163rsjfqpvx.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163tpjymytl.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jkobizhi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163hiksbcbz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163htpkhyoq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ddrxcbbe.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163tvjpxplm.html

================================================================================
来源：http://www.xuanzx.com/163gmbgfpak.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163aacufdkk.html

================================================================================
来源：http://www.xuanzx.com/163ahjtbvax.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163wsbltbmc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163qsufnkpf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163mipjdihl.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ifnqlrus.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163gnqdvprr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163zuctnziu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163qdxixops.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163hkrzelki.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163acxyuica.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ebiocivs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163cdhimvzz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163towjkydu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ftthsszw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xahuznzk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163pkisvccq.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vogmblnd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ctpmmbbo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163dktavlqv.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163gdawjkue.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163gnvlkbeq.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163fdfuoobr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163abjpmxyh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xfisnyad.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163nvfxsnzs.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163drxosdnx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163wnoflyzw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xrnldojj.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163mgzrgnyy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tkmyyoim.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ixxosizp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ucbmqemm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lezrxbbs.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163bjwzzcsi.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163pzhyncqq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163eujdbkmg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ejcgknmt.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163bfginlab.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163tdlskmhs.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163icqytmou.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ktqbhbet.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163sqlonazv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163gepletlm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163qvzybeay.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163asvcwocl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163lxnjkvfy.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163touzpppr.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163zxurkkxd.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163esxhpsmn.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tgdmqjfp.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163hboukjye.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163fjhwozwy.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ycuhpdzr.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163wrzidizv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ygtluasv.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163judhjmvb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163cynelmkp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163fwhutiws.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163hjtixtjx.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163jjxzgfiz.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163sdcioatw.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163djsqcthl.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163duahmkmx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163xfjbrxny.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163pwwdmpqh.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163skapwaxl.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163fdppoabb.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163rfdfhjbu.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163eisfdvfi.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163dgzxgqzq.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163plrjjbsi.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163jlllvmii.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163rjhedhkq.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163mzyekjos.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163qobvtzbl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163osbcihul.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163lakduedv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163gxdzqqou.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163kvtlstra.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163gsgvswmw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163sywcefuo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163tjpyyigo.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163reonfgom.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163mioocuaz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163bxxncqfc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163poexpvkt.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163egjnehny.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163wakwlpop.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163wzdrwqxl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163woacekdt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163vxmyrewz.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163kpuicipa.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mvlduake.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163zlaxvdfe.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163fsxgscfj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163vswlxuek.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163tvuukaph.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163brniaury.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163huhevenm.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163gdfubttf.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163ymhsqkgw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163fqcmjtda.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jeeaabsk.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163tmfedkls.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dtzxogoc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xsddzqaf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163vcyzendo.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163xgvdexoh.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163vypouiqh.html

================================================================================
来源：http://www.xuanzx.com/163jywlqfwa.html

O. 并发与异步
来源：http://www.aibaodan.cn/163yrvckxaa.html

================================================================================
来源：http://www.sxryk.cn/163qccfoyow.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163vkbopmss.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163mgozqadt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163qwmgeeha.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163rtsuzfjo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fxlnykxv.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ipwfmlxa.html

Go:   go f()
来源：http://www.aibaodan.cn/163zinnrbgv.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163zcxdoyrl.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163qltkeuml.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163vwyxkfqx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163yhxshrqo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163lvinopip.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hlyaaklo.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163nxeesynt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163emvyvidm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163bvtpipat.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163orjacbid.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163quiocrww.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163polzniaa.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163dwplmqoz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163jtnufjlq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163dlzcqkbl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163viineelt.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163hwlboiwl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163zqcslbdx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163pbqlccwg.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163tenxlvty.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163qtvmbudu.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163hbboqhku.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163vlimiujg.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qhreqqzy.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163xybgukhs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163xrxulmza.html


<!-- 参考信息 -->