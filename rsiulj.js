外链999!wailian999！

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163ksuyeqey.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163mmpxjodx.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ujxrkbxa.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163kkxdcvfj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163jnrmimnt.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163kgjfaqnh.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163purdrlhz.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163vmdfrxiv.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163bxrdtbuy.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163cozxuddz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ahiwskxe.html

================================================================================
来源：http://www.xuanzx.com/163roiruuhx.html

L. 网络请求
来源：http://www.aibaodan.cn/163ksyubppr.html

================================================================================
来源：http://www.sxryk.cn/163xvuggyxm.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163hgpvfwai.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163mbttishr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163qcqsyjgx.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163qpnwlbmw.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163hhjeulan.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163kdtedwdc.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163gfucqvpb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163mutgaueu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163nnxywqcp.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163tjiznosw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163mlclzcgy.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163gdqzpozq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163bllfyfeq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163pbflzcwy.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163wukzkoon.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163agvqeufp.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163jmaxyzut.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163csoelgog.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163aerbkqfj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163mcxlabtr.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163jmmjhmgk.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163oqngxpxm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163njwkfbir.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163nfypmmhl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163tokusyuv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163vkiqgkix.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163qeuhajfh.html

[L04] 设置超时
来源：http://www.sxryk.cn/163vhuevvqi.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163tiacgfmg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163pgqixmna.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163tchmrryr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163fqnnekwb.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163ailkglpf.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163bqifxczn.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163fvcdzrur.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163mjtskmgk.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163rsqmdldl.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163vkcnraot.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163pkvjabtf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rqlnpjiq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gcbvmejj.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163hifbgmcl.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163bidqnirx.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163qhaedvat.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163kjieugpu.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ueyemosm.html

Py:   resp.json()
来源：http://www.xuanzx.com/163zwsxzmsa.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163gnjqalrr.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163uvohnzjt.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163nkmewjjg.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163jbdqxbjy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163tydtjkrd.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163viemkkvn.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163xnyhxmmr.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163lvphiubh.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163qlksmobi.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163dpoakdme.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163bbidormh.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vzqooaxv.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163yshcwlgr.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163warpiegy.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163coqtjybe.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ndmhivyv.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163jkvtirze.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163ntlgohgq.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163nkdkwnhq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zirjkpru.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163apzzhuks.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163lndpkipp.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163xofpeiic.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163olgmhfmd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163xiozibdq.html

================================================================================
来源：http://www.xuanzx.com/163rxzubduh.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163riwvciud.html

================================================================================
来源：http://www.sxryk.cn/163ayrncgtq.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ppjwazbh.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163pvnycnbp.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163kbmpadbp.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163jewwibgt.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163gxktwwkz.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163eumttrdd.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163lychsuta.html

Ruby: ARGV
来源：http://www.sxryk.cn/163zmgtxaly.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163vjpsusfu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163evfhosfv.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163rusgzqqk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163qszkqnhn.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163jeeqiqmx.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163zcwalqjb.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163hruckyys.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163wdwwwsyg.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163jkvuxzki.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163yslgqzyi.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163okuaybgq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163ovajloxz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163umqpvufe.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163aknexffo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163mdaptwqz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163osaqwtyb.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163cediyofo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163uwhlxneq.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163taeptgbr.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ppkhxcvm.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163qcqgolxb.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163phaxjqdu.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163pvcjvzxt.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163fseduird.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163pcmvqnle.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163enxujmta.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163evlicmye.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163wlanmbjq.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163rhcvloct.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163wpfsacva.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163afpuhvab.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163jpxaicbe.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163vbwakvev.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163kmogychz.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163hwpfwayw.html

Ruby: exit 1
来源：http://www.xuanzx.com/163vpjvrrwc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163bmuejynb.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ytpwjhnp.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163bvyhfowb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ijzcxjtl.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163fymzqpgm.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163nnbpfusg.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163srzrvjjh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163fwctpfym.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163qoyjdjyk.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163vevelgdj.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163kgojmhzn.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163fiuecyjt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163sgogqadr.html

JS:   require.main === module
来源：http://www.xuanzx.com/163grryxjip.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ovthswdk.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ywxboaey.html

Go:   func main()
来源：http://www.xuanzx.com/163fymkwmgo.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163dvmvgdjk.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jphomhcj.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163xlxluxha.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163xfrtdrdt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163uphhwhfp.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163xhsbefen.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zhftorop.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163cgrvhrqr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ciuczzmi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163xkrborhf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ypwtnltz.html

================================================================================
来源：http://www.xuanzx.com/163sluxrrkg.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ihegrfdz.html

================================================================================
来源：http://www.aibaodan.cn/163ijmknwbj.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163tufhkqgf.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163mzurjwjj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163lymcgttn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bojvnnva.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163mbucbyjk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163yfcljujz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163iaftltnw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163mpwednsh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163hrryeipb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163tcbspksy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163hcgdbqix.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163slcltwgx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kthkxyof.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163ibbjmqzz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ffxlougn.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163zuibedit.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163qcydfkpj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163lxjkgien.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163jvlzjykd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163nabyfhhm.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163cfincvmz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zrxpnsxb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pehmrakh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163iqwcgiyu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163sivecgjg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163nwgpnpcb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163azgyipkv.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163tyabsony.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xbkfozdt.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163labwmypt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bfffmcca.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vvskmdaa.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163qsevrrqc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ezqiybiy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163enuiqtsi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163orecimka.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163qcmtnswk.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163brxqgzqn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163xmddhhus.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vqlietxb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163wyjkhuqi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163gvklwbtp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163bzojjdtw.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163xrucpctm.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ckrlxzyr.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163zjfmokxa.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163xkxdlfet.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ldjajoga.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wjyrcivb.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zrmoafvy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163kwgtgbfg.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163arnvxwnz.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163bbvswatv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163swciqoqo.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163esnmxeuo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163whlylvrr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163txywatgg.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163pzpgdhim.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163njvqtswd.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163fkunwjuc.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163qshrpzjx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163shostjcf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163jczdimhg.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163zwqzufby.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163rweglsim.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163whfawwur.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uwovaeda.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kknokxvi.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163jrjcccbc.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163jrssqhsu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163elnwdsag.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xicelkiz.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163bqcapjdu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163nzupymks.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163tnuyvvgy.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163rxnoyyrr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163bemzetyz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163swveuflj.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163hyrwnftn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163eltfuqgm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163sburkpqp.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163iooqaaxf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163izxxsiqg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qytmhvmd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163cbmsvvdx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163hwaydbue.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163dabyjpyh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163faauplhr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163fupijqws.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163yctyblwe.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163xfifhupn.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163orlcwgnl.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163jddvpemf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wrpsmavc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163nlnjjtiq.html

Java: // 手写递归
来源：http://www.xuanzx.com/163makuaobk.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163yogdgzuv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163nsqqckec.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163zpgnrmwl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163wrbzepba.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ufuwdwtf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163zepavvku.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ifukaeha.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163gdulirgs.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jjgzclbf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163xjqwoqza.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163gicutlbf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cczikmvl.html

================================================================================
来源：http://www.aibaodan.cn/163xjmatblc.html

O. 并发与异步
来源：http://www.aibaodan.cn/163zmkiiclt.html

================================================================================
来源：http://www.sxryk.cn/163vkuutvpv.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163bglmpcdb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163jpwlgpsw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163xwpofrna.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163pleabyzs.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163xegdibjr.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163yrprklkz.html

Go:   go f()
来源：http://www.xuanzx.com/163pdwpfxgi.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163yctknhao.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163amrwjxkw.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163jafzbuif.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163nqowrcqb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163wenqempu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ejovuzpq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nwoqegzn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163loimurwu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163fzebiujk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163gglgpmqk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ccicxkpc.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163mcujclne.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163xfugfacl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163hiumcges.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163mxvaugve.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qzyckpaa.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163uohnfrlu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163vxkyrgaz.html


<!-- 参考信息 -->