外链999!wailian999！

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163nfamzjxp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163pdwccyki.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163cuofuxbv.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163kvmjoexs.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163dramkuhs.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163twrpxyze.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163fgnsboje.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163jhaixwit.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163fasqnzbn.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163zkdqawdn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163ttzfpszf.html

================================================================================
来源：http://www.sxryk.cn/163cqachvdw.html

L. 网络请求
来源：http://www.xuanzx.com/163dalurfeu.html

================================================================================
来源：http://www.xuanzx.com/163fjuttmnt.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163zvirnfqf.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163vmnojmkx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163kopscceh.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163tuujyxto.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163bilrbomc.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163qguxiypy.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163gbdtyphs.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163umwvuppd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163uephkvni.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163apwovdoj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163aisbnuce.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163ooaivsbg.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nhtwknec.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163knshvlys.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163ecdzdbso.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163tvanfzfs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163yrdiecdm.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163jcbqnrzi.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163oudqsabb.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163ugcctqjh.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163jzhafgum.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ntpxvvez.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xdzphpxw.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163qsemlspv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163pyweujjx.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163xjzqlpop.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163pwipgdtt.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ronwkptk.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163cmflopxf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163udsfcbyh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163aararkxi.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163gzluzbbu.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163bwykvqvr.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163kjiofsjf.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163qxyjzzrp.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163gdcjcgfa.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163wuuyfdqx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163ilyqsmci.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163pwbikatl.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163elcrngpf.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qeoskceo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163jwjhkfvi.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163ntkitjzm.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163issfdwyo.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163kdaiayao.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163anvegwxm.html

Py:   resp.json()
来源：http://www.sxryk.cn/163qfcwdmys.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163euhawhzd.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163rrppuntb.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163vhvkhgxw.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163yywidpmv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163xpeidzgf.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163yqiqrhpx.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163btlczspl.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163wkxecxpw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163nkyehlzv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ffczmrqm.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163kyklbxwn.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163myuiyhdz.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163nlrmjijg.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163kqajtrii.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163rrdnteyd.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ueualwqu.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163yrqggeyc.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163sqmatyta.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163tuyjgnhq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ndigxmkb.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qxdsbipu.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163zzcbwmnl.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163xfgqumha.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163gtkuyinw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163tgqgqsis.html

================================================================================
来源：http://www.xuanzx.com/163fctnvzbq.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jivsygzt.html

================================================================================
来源：http://www.sxryk.cn/163mgdpefod.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163dwnhcmsq.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163cmisesld.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163vnoragfy.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163aupuxrhs.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kczbpclw.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163qnzdpqao.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163oprxefco.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163bzmyagzw.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163ljpvkjgt.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163ehlnwjfu.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mklyjqmj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163rtyxkwwg.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163narcjiha.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163jwtuzcoq.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163ibscfyos.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163avtgvkfb.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163abxsbxmx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163edxcdyiq.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163zsjgjitb.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163doavrprv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163tsbsntba.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163dwjwutuk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163cbjdxwwp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163uxmbrihq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ihbyduto.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163egrjcjrl.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163tzwwcrgm.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163hwpowtdh.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xrhhfyvg.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163lqzmsjzl.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ghkjsdpc.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163xuexmtnt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163eocfsqdr.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163xuybvvrt.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163gbyfuosg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163tbygqexm.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163izwdttud.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163jboddxxx.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163slmrluga.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163dlnqmgtw.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163bjimqonu.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163amqifqmr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163zubapvhw.html

Ruby: exit 1
来源：http://www.xuanzx.com/163oshdetxf.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163hwlfjmvm.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163lsrvskqu.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163sukflpaj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163pmuwbxnc.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163lkjdgndo.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163wervjbpe.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163rnxbkgzw.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163pmeqouok.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163qqyozskz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163mldvhnsh.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163omkseami.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163jgaqmzpx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vhafuszj.html

JS:   require.main === module
来源：http://www.sxryk.cn/163tsfhcgol.html

TS:   require.main === module
来源：http://www.sxryk.cn/163kpscqvow.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ttkxkdfz.html

Go:   func main()
来源：http://www.sxryk.cn/163lqjrbunx.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163btddtvtg.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163vtdbiwdp.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163azqnhmhv.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163pwqsgyvh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163wtehccni.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163umhsezft.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163qcyuvpia.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163uyznfrtf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163jewigall.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zaybsovy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163gyfyfrhv.html

================================================================================
来源：http://www.aibaodan.cn/163ogihchvz.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163bagdguvc.html

================================================================================
来源：http://www.aibaodan.cn/163mnaepzcg.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163jobevbul.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ehrnmusn.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163zmxtniqt.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ispddlhx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yksvcbee.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ddupkgmp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163yvzuncpr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163oldegauo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163yxifafco.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163swmumxfr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163joqxfbgv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163iegiadfa.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163itevtkcm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163chsblndf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ddjybwco.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163rkggamao.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163eifeenhy.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ytglesef.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163pkdjvvni.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163dackultf.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163cheiwjmw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163teznyhnz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163cpqqqkgp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163fxxfptqb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163inlckelx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163jmxiphdk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163yvlbitbb.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163buqjlkyd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163cswzmork.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163araxseno.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163mfdhqcpe.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ripauxld.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ouzeupmi.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ppjuyjtw.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163etmmreeb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163rsgfoucl.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163lgmliygu.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163xmgcmydl.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zcabhhat.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xqikwomc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dqdhxzjf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163dnnfsahb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163bbcpyafd.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163qpvwhvil.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163alnihhxp.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ecgokpde.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163nmufmaos.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163prlvizji.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hednifeq.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163zjekjcho.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163xdfvkiwi.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163iroaoeds.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ctgdixmf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ufqigbxr.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163uquhdgom.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163biklmwzm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163fdbimjig.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163shltzwnv.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163sougoorz.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zpbjblel.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163rvppbruz.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163mhywcbuq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163werkovrm.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163rirlnyxi.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163khpfjoxv.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163cqqqrmum.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163dsidylli.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163updnsope.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163hbvhnecs.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163joiqcupe.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163fttepxny.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163nzzvbeas.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163cxfndtiz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163kzxjsput.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163omiljzke.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163enslwqtm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163pjqwlypl.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ynxnyfhs.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163yrkixfdv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163dutlpeqy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163qulxwylk.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163shevcloo.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163vwbociyi.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163kkvcnopj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163cfprzlty.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163rdhkkuoj.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163bqpluwyh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163mnaestvy.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163jqhqaftz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163bmcgoihu.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163gkcdggtj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163pwbpzook.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163oqxkudkt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nvhnikgg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163nijglelf.html

Java: // 手写递归
来源：http://www.sxryk.cn/163nvgbtbuk.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163sevjtkol.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163wmjihtsx.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163tglqftop.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163rzkmqayw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163dphqrzqr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163vozgfcui.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163zamczsls.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163wuvhwaqy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163civmdbjb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163pyjwlphn.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163xdvxgwci.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163yzzygeti.html

================================================================================
来源：http://www.aibaodan.cn/163dnuryvro.html

O. 并发与异步
来源：http://www.aibaodan.cn/163azhodjqw.html

================================================================================
来源：http://www.xuanzx.com/163lnaibgxn.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163obgunqjc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163zdfnvecj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163abnwakss.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163ywimucjz.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zhhuzpza.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163hmlvweyc.html

Go:   go f()
来源：http://www.aibaodan.cn/163flzehmln.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163wgxsvmjx.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163jykduupr.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163eeqoujhx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163kinrfzln.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163lagtljlb.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dduuerge.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fdwqgpkk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163cptvmfhk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163thtznsho.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163sjcphvfa.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163cubavqxo.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163ftgooayc.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163fywxjkft.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163fmhuzksn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163dwuwfcag.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ocqozzda.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163vdzacyus.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163rzyyawam.html


<!-- 参考信息 -->