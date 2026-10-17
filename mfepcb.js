外链999!wailian999！

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163lvtqvdkn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163qjgfwymr.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163fnccmutn.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163rkvjmakp.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163kvxbonnv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163bcvzpmvr.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bwvdvtuj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163xfsgzhms.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163xcyprnhi.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163amhlpcni.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163judipada.html

================================================================================
来源：http://www.sxryk.cn/163uduyvqin.html

L. 网络请求
来源：http://www.xuanzx.com/163hozqyncy.html

================================================================================
来源：http://www.sxryk.cn/163hrlssqdv.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163dfqlzfrh.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163ygejhogc.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163pfpvqymg.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163eyvdutia.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163rneqwmvw.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163bmenzruo.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163wcbjsnmn.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163ixuzoqwr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163bnbncsup.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163vxoksvud.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163wkhurbtt.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163tevgqtoq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163qrjomhfe.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163esmtvrbm.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163gfqntcaj.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163dwyyftuh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163fjgbtmax.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163nboqvabi.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163qqmatwup.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163awibrxii.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163repkbpga.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163egoptbzs.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163hlwkybeg.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163jksgxxjy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163xjdodglz.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163sjsanqpp.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163ixwgxsez.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xbtmxfnt.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163oxqbwmjd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163fpdsvsgs.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163lvniyext.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dtnfphle.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163tprbncth.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163xsaekpga.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163lllebnho.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163ivuftfyj.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163rcyqgsij.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163pguptrel.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ozjmuwes.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gwyuwzzg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163vicwiqzq.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163chwgmlpb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163cowmsjjy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163wycdvucc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163izvhwdpn.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163gmwanlmt.html

Py:   resp.json()
来源：http://www.xuanzx.com/163jbwpmeox.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jltxkdeg.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163dwncxasx.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163iydxytfs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163utylxhdk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ovsoteir.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163auhtcuxh.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163nsfvtmfd.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163vjvxuzue.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163zgljkgib.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163yuftrawc.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163afdbcnio.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yqpofjcg.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163auyimkdj.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163mgkyeubg.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163ipiczdtg.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ennuofpv.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ojerwgtt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163flqhnojt.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163lcidpaee.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163imtrisna.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lkpeaevm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163sxjkuarw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163waxjgwrp.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163nkhntfzy.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163lqxtrsjq.html

================================================================================
来源：http://www.xuanzx.com/163aqrecxmm.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163rsiqptbl.html

================================================================================
来源：http://www.xuanzx.com/163fkfdoaqj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163ajnmlggf.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163hwfbmyuw.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163yicepwst.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163dzzzzoyl.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zpuiwyxa.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163whlkjfup.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bczugkin.html

Ruby: ARGV
来源：http://www.sxryk.cn/163lgnndcyd.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163jjaqluhn.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vyabekmj.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163qqulcjmv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163yaampshq.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ejvqdxes.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163jcqyncbm.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163sxpfehfy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163bvzadpfm.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163malquvob.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163dhpiirrb.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163poydzmpg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163drqbfkcp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163rdbqxscn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163sblwleao.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zqrcxbyc.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163btwrkqvd.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163kellkxnj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163hfsjkzvp.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163zazlraki.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ethuvbwc.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163zzyubcte.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163uaxpvytx.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163fruqnqns.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163orropegi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163pxfqqwrw.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163igyysftu.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163bebckyfb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163pcmbxszx.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163bexwatbu.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163vnbdliqd.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163fgsgeolr.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163antmhvko.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163uwwzhhft.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163znnszslv.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163jirccqek.html

Ruby: exit 1
来源：http://www.sxryk.cn/163nlvxnrhf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163djfdwkjc.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163zhbcwshu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fahlsfqm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163mmwsjast.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163cqbtxyuq.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163wcruajwu.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163axnttnwe.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163hhyshxmz.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163zbkqcqbv.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163mpuyxasp.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163pzkwagah.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163qoyyelvx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163qolynxzt.html

JS:   require.main === module
来源：http://www.sxryk.cn/163glsiiwtn.html

TS:   require.main === module
来源：http://www.sxryk.cn/163uficnspk.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163rdjcfrni.html

Go:   func main()
来源：http://www.aibaodan.cn/163ygqwhxkp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163xvnrnizh.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163kmuataof.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163pohuahma.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163hoesyunb.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163oynqoual.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163snhzgbck.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bnlgpjbb.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ywislbbe.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163skijgydg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163qgezmctv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163xyqqmtor.html

================================================================================
来源：http://www.sxryk.cn/163wsfpmixk.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163kfsdigpl.html

================================================================================
来源：http://www.aibaodan.cn/163xsogeqmh.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163wlolrlxi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163cdlepumn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163indgbogz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163uljiiule.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ucseckmr.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163stjfivwh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163rsdvcvoh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ayzzescp.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163lpbmlimc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ttlulqkb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163taastigi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163lsizsgnp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jgvutefw.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nzzqecod.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163hxhkvixo.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163jbqwqldk.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ryeitzmz.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163rgtzzcfe.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163wtcifkjg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163vqwcynng.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163wjnnvzpb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xvxfbgvh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163obyeuhua.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163smlbelkx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163btchltoj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ozjfjoow.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163lxjdfsan.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163fmxolcqy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163tuhmedsv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163wjorkuqk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tqbvnwkb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lhrbpnhz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ubmpkcpu.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163mofefxam.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qpdrcrgi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ulfgohur.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163qedjxpno.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163tdlmdxxg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163fugsonbs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mizmrfdu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163fwpajanf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163tedhubtv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163kdofulpw.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ygouwdco.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163tvmvnjty.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163vmhcuxkf.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163tuicbjhs.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163soezykvn.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wjpxasoo.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hlzjyulg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163fclzbrsw.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163jnkyyowx.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ridzegag.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163bprzpwbf.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163rrardndv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163hgmrgyml.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163uzbojorq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163fsslodaa.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163vulnjmdu.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163wkquhinu.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163jkimlqcz.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163zlrgffkz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163qvxifruu.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163uzthlrkl.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163hpuruaei.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163lsuawrjz.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lecsjgjb.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163bbzzdzdb.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163mbvhqseo.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163vposkqcs.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163dbvxikeh.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163tqtjpbig.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163yalqpgkp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163yeemqwct.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163uqaptglw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163hqffozqx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163mislhcmw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163dwjoaamt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163gcbysutw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163qihmundx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163svettuve.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163codvjkac.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163shlqnrhw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163eildudae.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163zrtapuwo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163oqegivcx.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ffeapvog.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ubnzcipm.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163wbwscgle.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163plawqhcm.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163lzayxytn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163dkumgubz.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163jhxxhltu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163pclfdmls.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hbproqhc.html

Java: // 手写递归
来源：http://www.xuanzx.com/163xzkpndkp.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163fvvztdlv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163prmmtsnk.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163cynloxug.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163mrxkzroc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163qqosehgj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ondlmxwj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163tiyrqiqq.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fxncfptr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fztmttre.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163vfmxwyjf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163vxfayqnc.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qtglaqlk.html

================================================================================
来源：http://www.xuanzx.com/163uudmnprg.html

O. 并发与异步
来源：http://www.sxryk.cn/163vygvdpiz.html

================================================================================
来源：http://www.xuanzx.com/163nvtdzxcn.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163hmvityex.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163fjotgtcu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163dxbubusm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163phkxicgs.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pjkwrwfh.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163nlfkhkub.html

Go:   go f()
来源：http://www.xuanzx.com/163kxbuseud.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vorcdvci.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163qsauzrpg.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163dylyxksm.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163zwlpgupv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163sbfnaung.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163jgnnpdwz.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nypmqpvu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163dspozten.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163mploetmv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163skghovbp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163mczrwebs.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163wlljglie.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163cxadbucn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163nyrxyumq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163lyhfymiq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zhptngrm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163rvyzlcwu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163raquecdv.html


<!-- 参考信息 -->