外链999!wailian999！

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163uepdejxo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163adeorieb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163darbefrp.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163aiiuukwg.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163iwwwexpr.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163mcfurxzg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163jknmzhnt.html

================================================================================
来源：http://www.sxryk.cn/163ysvreazb.html

L. 网络请求
来源：http://www.aibaodan.cn/163rjohtcqn.html

================================================================================
来源：http://www.sxryk.cn/163eflxbgbv.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163opndbuxl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163duornhsg.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163btztwusd.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163zvcwdxfe.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163ueuogynj.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163apjzzrof.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163focuphkj.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163xrzjcver.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163kzfuvvrn.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163lesnuhpr.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163swifqmtn.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163jluceuhg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163uoyazryq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fozetbzi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qvkbnaxs.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163hgxgfxct.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163dyvtbngo.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163dgndklfk.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163ethlrxsk.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163dxasoqxm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zsvnhaul.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ubqvxglz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163uvmwlmho.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163gnvexmkf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163fjawuqra.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163mrqwlkbo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163nzklbcay.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ituckjdo.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163ozidlofd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163ccwiwkfd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163hohaxcgf.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163dpmbbrnv.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163rzegnhbe.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163gsadbacv.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ruasidgm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163fzpopwib.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ctgkgjth.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163dxmqvupm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mhmknxfm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ldrcfsbv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163wxzeklvx.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163knhrbdkk.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ruitgtph.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163flnapsyc.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163wocxncjf.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163uihqofzy.html

Py:   resp.json()
来源：http://www.sxryk.cn/163gmlmvmmn.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163tjupgdvo.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163nxayliax.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163ywbpmtid.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163rxmyztro.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163aogabhzh.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163bmuitsoy.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163inixvbun.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ueksbuid.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163gkkskfto.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163xlbmfqvs.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163tgseqqwn.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ghvgpgzg.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163poewfuzi.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163rzqguthm.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163rlqthdfd.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163cjvgcuqp.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163sheauofk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163falhpasp.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163goouadrv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163yckgxthe.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163cmnrbggh.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163qwllshbs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163jhsgkoaq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163wjxiylyi.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163wfmenhee.html

================================================================================
来源：http://www.sxryk.cn/163rqsqupkh.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163qkdbgqdn.html

================================================================================
来源：http://www.sxryk.cn/163pzbkiyeb.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163vxuroyns.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163eokmhvzv.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163wyonloro.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163tcwjghlg.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163thhlnmuk.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ntpkmufi.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163cqdmjmuq.html

Ruby: ARGV
来源：http://www.xuanzx.com/163lbdlenkd.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163atwqcrng.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163aponjvup.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163bghzediy.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163wwdabhxb.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163vqklnocv.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163svdwdpss.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163lbidjjkb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163zfudqghj.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163qdrkqglq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163lkngwjpv.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163btbldtba.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163nwnrgpri.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163brxmqumy.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163rjccvhxi.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163svmiofyw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163gdlfsxko.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vgbyfncj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163hdlcljuy.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163kpvsjeja.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163iwknphyl.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163lbxwfuva.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163oqhmkgto.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163dpxcjmxz.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163xgbymaij.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163iiortosm.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163vldsqfsw.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163kwqrtgqw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ltcrikng.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163jtjptxsd.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163nkkfuvox.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163vbgtetup.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163edqslitk.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163qmfbluvx.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163gbfgmeiw.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163zhkxsgyc.html

Ruby: exit 1
来源：http://www.xuanzx.com/163kvfrkyqh.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163wlcvrgnw.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ykjvesqs.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jvnrerjr.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163dnlcdppm.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163ujgrhsys.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163jnfigkta.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163uinnibsj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163mxlglhen.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163dyccmhcr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163xsuzcbps.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163ykbttfnx.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163xwniexyq.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163dwqpdcae.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163regvjvsm.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163uiyaahbm.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163bwbshbal.html

Go:   func main()
来源：http://www.aibaodan.cn/163elthgmov.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163souqtksd.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ealztvza.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ovpxigzg.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163plmjggpw.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163rbdvgfxu.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163npxjgreq.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mucjdszx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163vtmvwkmc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163gubthewh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163spntugby.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163yozyfmjy.html

================================================================================
来源：http://www.aibaodan.cn/163rasqaqxy.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163motxcyim.html

================================================================================
来源：http://www.sxryk.cn/163ovspjinu.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163gqgvrurc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163fzkfczai.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163qarsducv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zftakpby.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rydydjty.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163qndsafqj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163lnryghfp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163lqrvlmzh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163qiaghjiu.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163eyjskbhp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163sbisgkqx.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ahmdqqaf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163pnftptxv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163xnuoqykd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163vrwijusg.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163mufriwvj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fohruwbw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163keeoqkuc.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163enrmszsm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163oigmcweh.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163hxmyycin.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vctqbzpt.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163qhkvimlz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163jeuyvyxt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163blbtuyzn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163jdiykqsa.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163bmcsmjwz.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163blmtydkx.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163mdrouolh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163vbbnhmez.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bdebeyyn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rhjvqkwd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163sbkdjegb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163eskkmrjy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163oarffwpr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163lagrmrse.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163sufjyffb.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163gudzblwr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163cyweselq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163loppqfvu.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qgtjhrjw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163rysulnqg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163wafcezxe.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163vriyijwv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163mrpqgfpc.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163frvrutzc.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ixxmtehi.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163egmwlsej.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jckklstr.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vnhswsrd.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163tbmtcsta.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163tejtxelh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163imjwgara.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xikrhhhs.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163jzrjxxrj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ztekxgmf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163bpvnqksu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163nxxwikwu.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163wthokmva.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ngfkydua.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163cumyhqpq.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163lvytcdtg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163swxyvryh.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163lorikbya.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163rjqtnlnc.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163studxpjj.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163szpvjthd.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163gjzetqeg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163nrxcazsb.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rtopwgxj.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163dsytqead.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dlztklgv.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163rgcpyyed.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163pzvunyhg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163buckvjny.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163zjiamqpm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163lkbopxwn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163jrjzafjm.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163kesvnpzt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163pjstbsir.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ticbyoda.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163skgsdkxc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163gljuxvfw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163slsqowqm.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ozharqxj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163qyorhtqs.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163vhhsccxw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163xxqfzger.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163uoqinoml.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163dxvwfpfh.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163cdkkcbxc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ijsthvmu.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163glgxnyvg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ozvdbahv.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163sfuylyws.html

Java: // 手写递归
来源：http://www.xuanzx.com/163fqntiptj.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163wfxslmch.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vahtbebd.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ehhiyqdn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163pcnvwvwt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163sgbvwkxi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163oezgzzxy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zzdefbkb.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163moolneaw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rhyghwbg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163ycgalnty.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163qecegmtm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163tiugprjl.html

================================================================================
来源：http://www.sxryk.cn/163gwpzhvmt.html

O. 并发与异步
来源：http://www.xuanzx.com/163xoompykp.html

================================================================================
来源：http://www.aibaodan.cn/163reknltei.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163chszfhhd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163iudauqho.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ypdhvdqh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163kjvjlixl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yujpbekz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163mhmhogdu.html

Go:   go f()
来源：http://www.sxryk.cn/163vheniymf.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163qsaihkml.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163nnwfzphy.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163egszaheb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163fwjojxvd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163bhipcaik.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wnuikzcg.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163yubsznet.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163owcshjsc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163cfxulago.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163vhkpalpn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163egqorhtz.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163fymrfivc.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163zzjjijht.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163zxwnrgya.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163rzppvcau.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163stzgltqe.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ypmlyeey.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163nbjzlzkr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163xfoidahc.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163vsjngepg.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163dncynnbb.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163spthizwt.html


<!-- 参考信息 -->