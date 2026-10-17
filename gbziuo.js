外链999!wailian999！

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163rqvhxgye.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163ngkglbeq.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163hcmjkuwj.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163mappxezq.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163tfmpaoah.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163idankxew.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zftdkueu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163dqtfowvc.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163xiucjhti.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163eoctipnw.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bryverjt.html

================================================================================
来源：http://www.sxryk.cn/163ogmjgkxf.html

L. 网络请求
来源：http://www.aibaodan.cn/163trrvmuau.html

================================================================================
来源：http://www.xuanzx.com/163teerfqga.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163coomqvso.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163gvdhqzbx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163kgbrhzwo.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163zmeyykel.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163zbuiocir.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163satyogrt.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163flxgqnwu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163qnsccrnh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163lszymmeq.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163dmhtxskj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163zdutaxsq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163qshoyznb.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163mjydiuih.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xxzvxxfl.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163edqetons.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163zoviyguz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163bjaiqkag.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ypsxqqom.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163veddzkju.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163iijlwhud.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163cwxqmxrm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yfcsgdjf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163tgfkzxoo.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163uswsvafy.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163vidmqxfw.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163uslszosv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ahuwdziv.html

[L04] 设置超时
来源：http://www.xuanzx.com/163gctazzcx.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163zlosignx.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163mbwkythl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163daponvaf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163azmtcfpb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163rhcgbysf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163jxfyryny.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163emjqazmv.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ftxcrxgg.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163weypnofb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163bnvetzxm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163stvskfbz.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kqvqcohe.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163slczutoz.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163capklove.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163dksqvbsy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163gxvtujqm.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ntfzgxmy.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163tdopvugc.html

Py:   resp.json()
来源：http://www.xuanzx.com/163meqozfcv.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163lqpnharj.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163rocfxixp.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163cxlvucrm.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163piyajyqu.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163axbmstry.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163ajxtnfau.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163ssgeuzla.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163zkmjykpq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163rnqvkcmo.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163zszonczl.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cvvqafgg.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xnlbqocv.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163wdwewbia.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163csuiqfzx.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163wlshduqy.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163nzixqqzv.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163gwxmuywl.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163flchfrgy.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163gaubqrmx.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163akmfantx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ysuonggt.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163xpekyxhe.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163kovdlxia.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163nlyxkazl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163nmyglfvx.html

================================================================================
来源：http://www.sxryk.cn/163dzzrmnxo.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163srupxeom.html

================================================================================
来源：http://www.sxryk.cn/163hrylnltq.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163awexpoit.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163eiijmphe.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jacvjvlo.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163girrskup.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163innxjudq.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163utnhvotm.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163aqfzkzzg.html

Ruby: ARGV
来源：http://www.xuanzx.com/163pihrpwzg.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163nklbkzqx.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163zgmbfqyq.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163vzmwabyz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163okankdmd.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163xstbfzxu.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163bjnutyxy.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163zbvdawbg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163uqgyjvij.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163bjrwedis.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163jqamtpaw.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163zlvwlykm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163mfuoknvy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163ihxwvfwi.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163aolnpxpe.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163xzcgbrwa.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ubfdctby.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163twqxmgvv.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163uipaprye.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163aewcfxsc.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163ffpmujof.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163zzkgtjpj.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163ptxaobhd.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163hntdtkub.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163wjkfhdqv.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163mtdwhpfp.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163ayqbrnxk.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163cwmvnjbg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163nguehwhz.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ryhhypyo.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163wjbnrubb.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163bsgxzggn.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163ohbzrqpd.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163oewyklzt.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163gjgdscnb.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ljzrjcef.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163rjrpmfre.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163hplnkmwj.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163gjslvagk.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163aepaffoq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163vuzopxaj.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163qrdvosza.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163siwtrcad.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163jxijjcuj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163gtvbscef.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zaynzvhp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163yuartsql.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163mkjxjrku.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163dyiqwock.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163dtdvummw.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ikekbzyx.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ozxiahyg.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jbzcsmrt.html

Go:   func main()
来源：http://www.aibaodan.cn/163gmbetxie.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163wuxsdxnv.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dccqjdsd.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163qqyedvrw.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163bxddjolh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163jxlkwpzq.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163uxjwqadm.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163igvfcusj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163hkuwrhdg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163izaxoldm.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163kltjzcbp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163hixmfyvj.html

================================================================================
来源：http://www.xuanzx.com/163dmhcvnpt.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163zcyjiodl.html

================================================================================
来源：http://www.xuanzx.com/163wlwsafkz.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163vhepsbyj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163sonweidf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163mnofvuzx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163qvsysqrs.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163osaubhsp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163gnwumwrr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163rjtwjkez.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163mwbvuktl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163kwawlbdw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163zpdctprg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ykjukfzy.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163dkridopd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gotvyvfu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163othahkiz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163vqpjgsmn.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163kzcwhaqm.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zbkwqxjw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163efyypaev.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163myfalqvo.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163kkkmfadg.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xouechat.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wtthgxba.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163knlzffvq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163rfeqlhls.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ausqvlzt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163huirnwvz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163bbwxosdy.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163qabyxvxi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xmayyfnb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ianpfhpw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163xqtylkmk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163viueapmi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163lbdoncxv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163fwpsedzo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cykjxsun.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163rbfijvkx.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163gqvzfysb.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163kttuubyn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ktgjhscv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163edxjcwyf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ohpvayjj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163hoysedzy.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ekzsnbsn.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163gpskzyte.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ftbulnly.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163kgrrbzjb.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ryhqlvsw.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163yogoeisk.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wkcdavnj.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bnwqfqgx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163lmyfrkjq.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163swcbikdb.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163mognfnjp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163hgsqorik.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163pznzfkca.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163wturzphg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163kqvrsgeu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163waavxqoc.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163wtlmjylx.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163bdypeaxf.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163singtosj.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163tgllhrvb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163xirvspqc.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163jaudbxzs.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ejfvoero.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163vofgvxqr.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163nevzojfn.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hpscsjwc.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ksfustvs.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163pqbinill.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163gtkegrxx.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163prgnrbfa.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163uxrpmvhk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163qlyimqql.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163fwzjqlpt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163lfcygoaq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163hpttsdoe.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163lqxdobqq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163aknapzvs.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163fkcvvhcn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ktazlmov.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163jhkduujn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163afdoxknb.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ufpuakyz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163uqyervfz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163nrdquixd.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163qzssucry.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ryymwpii.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163wudnybpe.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163lvhwzrxc.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163lsrzfdty.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163symrfmos.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163euduchpd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qwrpzpqz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163elrkagwj.html

Java: // 手写递归
来源：http://www.sxryk.cn/163dagbwfcl.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ejocqypt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ltyzkytx.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163owkgtjvq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163tfntmguu.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163fvqvcfza.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163tlgghwoy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163yhpborcc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rnnsrxli.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kdexiubc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163lvtwpquz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163cfuyezaf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163udeemwgd.html

================================================================================
来源：http://www.xuanzx.com/163hzhsvfvi.html

O. 并发与异步
来源：http://www.sxryk.cn/163psqgvdpl.html

================================================================================
来源：http://www.aibaodan.cn/163efiyclle.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163vnrkowhq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163pvntjsbu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163nybeypaw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163aguqibcd.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ckpfmkjn.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163elhjocsz.html

Go:   go f()
来源：http://www.xuanzx.com/163sjkeclua.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163ejkigwpm.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ibexfdun.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163spvegxmo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163kpwnqltn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163eabdommn.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163yarbuydd.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vivkxwez.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163kxisvhgg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163cpihngsw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163peqrxujk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163fbhuczmx.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163jrzlbkdn.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163edcbikbq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163pbdhqijd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163bwgqllkj.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ugetnpxe.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163xdvhwgsr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163esbfligq.html


<!-- 参考信息 -->