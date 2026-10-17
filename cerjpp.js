外链999!wailian999！

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163thencqya.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ofxzmeed.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163lwurqwbj.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163vwzuutbz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163efrcbiwg.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163foyfyrjm.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163wzwmmgrj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163anotnguu.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163cicjtvvy.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163teoyznyr.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163bsofowfm.html

================================================================================
来源：http://www.xuanzx.com/163lfwycbvb.html

L. 网络请求
来源：http://www.xuanzx.com/163djgeobfe.html

================================================================================
来源：http://www.aibaodan.cn/163dnnbehfb.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163pmponwyl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163cbxiqzlq.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163pbsecojl.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163alhizxco.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ulisijdp.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163hrsyhpyr.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163jkyydbbd.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163iwudjuhz.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163pezbiphp.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163hiyvvrul.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163gnepczid.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163fbahmlxc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ookkqwze.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163jkcubfil.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163qumgyaiq.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163splngbgz.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cifaimtq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163pezbsivi.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163uyqrmzro.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163xtswtmzv.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163jkejcsfr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jpipmhfd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163yhwdlzqk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163cersetkf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163cujnkgjb.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163prykbbxd.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163fjlkpvza.html

[L04] 设置超时
来源：http://www.sxryk.cn/163cpvfvvkl.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163genjdyfz.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163ywmdwvxf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163tpdyuftr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163mmjvtfth.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163pzoemwoq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163istjojbr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163jzlrfeje.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163jjmadani.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163qkczqryj.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163deezhaek.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163nruwnrwb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163tpwfrmnr.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qhftokkm.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163qqpfdsgo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163fscacqth.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163mgdlzqye.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163cgkiggbp.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163yrufamqm.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ybixkabg.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163laspwzmo.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163lvhhircd.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163vhbpyxoz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163nwzzxxlb.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163odpljqnh.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163adppwhqg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163dfcjvken.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163nkjqdoat.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163ewiwctgp.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163yjpeqetx.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163hlyiwtre.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vzmgxzat.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163vhlxucxi.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ymjtfzgc.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163apalrvke.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163kejsoscm.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163hxzxpono.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163srctqitu.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163sbvrucpb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gldlksmp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163mcjauofb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163bzrulfpq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163lxsnkyke.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163rqdpprtm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163kqhrkyoc.html

================================================================================
来源：http://www.sxryk.cn/163nhqrvsfy.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163wslkmdgr.html

================================================================================
来源：http://www.sxryk.cn/163eioatpxr.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163zzpdlxxt.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163lccmcjhg.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163akviwhfi.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lqxphjrl.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163mzbtsgbn.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163sqippkdf.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163gewhkjwf.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163jfmttlzw.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163qwrkeypy.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163owwlrsii.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163vshzqlhe.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163nvvkjjrw.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ffrsahcs.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163rxrcezih.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163jsmuqkei.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163jkkmqlqk.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163pnpojehw.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163vkdtxnsy.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163sihxvaje.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163vysukozd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163lpahpfzb.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gvillyha.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163erkajige.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163abkvgbgh.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163dtvopzch.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163htccvavw.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163gjbyifam.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163vdkppqjo.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163rhjbycuq.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163lrvrwpye.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163yntgoavt.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163lpbthfwf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163uxgkdpol.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163wlniywce.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163cqavdkqa.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163jdweepzl.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163qzhkmixk.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163vxcexrbt.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163laefswzc.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163cwdwhzib.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ryrlesjh.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163rcsrfhcs.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163icygclwm.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163jkzsvhla.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ptljnfgz.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163xbphjwey.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163lysgfzix.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163nydlrfyi.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163jqymizfy.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163oyourhbt.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163vneokggc.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163qhoztmsy.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163xpkdnogr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163zgcckjim.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163drtyogex.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163plagnawc.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163mxbqisdq.html

JS:   require.main === module
来源：http://www.sxryk.cn/163rxjplzmu.html

TS:   require.main === module
来源：http://www.sxryk.cn/163oulangjj.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ufncoeah.html

Go:   func main()
来源：http://www.aibaodan.cn/163titknfme.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163rnblrkbk.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163vzszbmqy.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163twcenxag.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163yqfzcpja.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163risouxvz.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ndtizgfr.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zclmfwww.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163qipwobxu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ldpkwwjq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163tjwqwlyz.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163xtidcyef.html

================================================================================
来源：http://www.aibaodan.cn/163nwlmhhru.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163bmoganiv.html

================================================================================
来源：http://www.xuanzx.com/163puqvayqb.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163ncchaexl.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163kvrytwdu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ljruvrhz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lipojsry.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163lmsfzmzw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163kclurxic.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163bynixvhd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163qhxsmdlr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163qcjikchj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ucgqksak.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163tjcdsgdz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163tkwieohz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163zrghkojh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163knujrtbb.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163rnzfdega.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163rwcirqlw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163msakireq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163mtqmsihx.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163stidoamg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163dfrrocdm.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ulxiodgb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163aqdsfwvx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hnuhzwdm.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163vdlcmers.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163szbzpbkp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ygxfvfgb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163kexxmyfs.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163rvysijvu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163etzglggo.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163yugmndrd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163aglyxbla.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163jiunnmql.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ohzojgrx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163orkwwhqu.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ywmafpjk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163wscedkiv.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163bjgkgpft.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ktyqnwqq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163uiaqboik.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163gxhvfvpw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qwrkemkk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163cfqhpwda.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163fsrbkhze.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163nmoxszpu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163hithjslo.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163kumanqxy.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163hjijhijx.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163jmqwpzjw.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163jjjlztxt.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zmgwewsz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163jlgxcxyu.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163bufrzxse.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163hdlcbbup.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ustpuevk.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163zqdgxart.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163crrcuzir.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163uoqkhxbj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163zxjlockt.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163zjaszupx.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163nowvlgoq.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163rydynpzo.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163qqcmodfw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163sumrbohd.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ckbjzsld.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163lpemawgr.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163jnxeqxon.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lbbdavdm.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ckidriuh.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163rxxziuzj.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163eavnmpji.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163mukydmhi.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ftcgkljh.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163unjwqxze.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163xdhdbbpa.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ehprdepo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ugddklsv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163obypvfnh.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kmsdhyfc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xmcizlgo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163kelhnhdw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163nidzeoct.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163lxfwmjfz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163isfpsblf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163zdzvmbys.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163evbjsirv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163vvjvlobm.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163pjgkbmxn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163xbjobzfz.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163njpoupui.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ttxeqxao.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163chvgtoxl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vqslauqr.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163cbybljuy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ljvuivfd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pkynvdhl.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163sfsapoov.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163pnwubwhy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163summmnra.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163rohrdefe.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163kkvrfytq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163wndxltcz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163cjwdeuqd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163pdwcpnbh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rqwfxaoi.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fzdughie.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163lkkuaeyq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163kfmdxtzg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163bbejmmel.html

================================================================================
来源：http://www.aibaodan.cn/163ydmaayct.html

O. 并发与异步
来源：http://www.aibaodan.cn/163pmdyxdtd.html

================================================================================
来源：http://www.xuanzx.com/163wnkpqmpe.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163qjrxsaks.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163qamjxnxi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163sdkrsspf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163qyfsyapi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qiisyans.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163xlwbudch.html

Go:   go f()
来源：http://www.sxryk.cn/163holgzvdb.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163cxrnuqex.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ekiditjq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163iakjddts.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163zwzlcgts.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163nlvegtfq.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163yzxvcnji.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vkrrcdpb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163dzogycpx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ncstsnzm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163vznsqjnw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163cguztyyf.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163wkrsoyrh.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163wkcuxpsq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163qcegpdol.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163wvsmzxqj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163pbbegrop.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163udjjhpka.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ipzmqqcy.html


<!-- 参考信息 -->