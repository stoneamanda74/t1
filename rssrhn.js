外链999!wailian999！

Go:   encoding/gob
来源：http://www.xuanzx.com/163azlbbugw.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163spqxdbpi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163izxndbpd.html

================================================================================
来源：http://www.xuanzx.com/163kwocuylt.html

L. 网络请求
来源：http://www.sxryk.cn/163suzcwmif.html

================================================================================
来源：http://www.sxryk.cn/163zxkydnsf.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ufeagifd.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163asvvzohy.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163ivacccux.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163svrvjbbj.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163notvnsto.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163zbbgrfym.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ehcvnrly.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163pptbjjod.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163ckqbbipd.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163moioqsyn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163odelbrvd.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163dkiywtst.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163jvucpmwq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163gnxbgcoq.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ziwzdpap.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163rpuqpqjk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163aciacejd.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163jekctous.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163cuypnmhj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163txoryzyl.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163murbiurr.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163lrzghqmn.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163htrvwpun.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163csvrkvbo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163ofzivpuf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163yheteycj.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163czzajznj.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163zjrgluwc.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163jicpirks.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163suzytmqd.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163cfpznvco.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163brficwuy.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163gtpgghzz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163leyiffqd.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163enoeqotd.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163lrpuxnca.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163fzedhtga.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163tunwhcox.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163sbumdjxv.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163haylucgg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xsvmvnep.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163mvzerbdt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163gprpuayj.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163qsgbmkrj.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163ilwyvbdx.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163vbjmpnil.html

Py:   resp.json()
来源：http://www.sxryk.cn/163piyobcho.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163qofsejez.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163atepywwg.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163pmjxqyfz.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163rjujwznc.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163beczevgg.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163mmwylqqz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163qlhcfjog.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163vndxdjqx.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163oatzjpgy.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163mknhspbr.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gmemshfq.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163xhdantjg.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163ihewqtqd.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163qioxyeez.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163oyoxzazz.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163wovdhyft.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163bfvogkgt.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163kdeyozfm.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163xdhmcege.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vogsrgqn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163wysbmxrd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163zmszqhpn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163zopmehan.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163chvpxzey.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163uqntsnqy.html

================================================================================
来源：http://www.sxryk.cn/163coyrqhzx.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163xnyjweyb.html

================================================================================
来源：http://www.aibaodan.cn/163fzwhaqpx.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ebckflui.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163ovvrjgxt.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ecyzhwfk.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163yjdhwhgx.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163vztwufbe.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ekmtqgrj.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163hproixse.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163axtlvjet.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163njchwrbq.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163yrwzvfyn.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163eqoghgjo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163upivvnlt.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163voqkqcxi.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163xrrveoed.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163mijdrril.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163ftnhtuyi.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ekeqapss.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163eebictrr.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163yyzudlcg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163todjvjuu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163nhkcksvv.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163rlusluhl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163mbxhujds.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163ggmxhzia.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163wqkzdinb.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163xnbeweki.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ychbpyon.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163pggmwyas.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163spgznhgx.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ouypgxxl.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163bpyxtjjw.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163ithedjau.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163urbqbnon.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163jhymvdcu.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163vhyyzfcb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163exjlncjj.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163grqmduft.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ozabubdr.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163johfeuyj.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163yjkubeda.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163gmpyjtpv.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163jurrgmov.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163mqxvslxk.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ivamgghq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163jppewaeu.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ndrahcfs.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163uycntenq.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163hpjisyqn.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163lsedlqpi.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163wpgoqzpi.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163rrwzxjxj.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163xiknplnm.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163pfhjwjki.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163znzqthft.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163txwfhwbp.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ljtbkpbw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163jrgmzuuh.html

JS:   require.main === module
来源：http://www.xuanzx.com/163kspjnyfb.html

TS:   require.main === module
来源：http://www.xuanzx.com/163ebrrsvon.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jxukivlb.html

Go:   func main()
来源：http://www.sxryk.cn/163gzkzpljv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163rnuncrtz.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163mplrqcnv.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ixxoxgyu.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163djdwnyyr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163jjhgxthk.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vreeeric.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163rmsbovzi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163yhsdhflg.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163fwaajmoo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163zrtygeta.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163apkkwiiq.html

================================================================================
来源：http://www.xuanzx.com/163qacnvtyx.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163hnksvysz.html

================================================================================
来源：http://www.sxryk.cn/163qbzvyscu.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163sfvonhnu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163hpuijgno.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163rintqzid.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163iulfujys.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ayzuivbj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163cvpjjxai.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163bxlctepu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163kkracyua.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163apundxka.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163zjhsyvqj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163hfjtvbpm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163juyaievy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163hgpovsno.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163emdsxrer.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163uklbjbye.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163cqbixpzz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tkeuajhu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163gsmkepkl.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163qdfpiznn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163syjojsqz.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163noeitexh.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163spizfkmh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163tptyfsyg.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163rqtucvzw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163esqvmkze.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163eeczhvui.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163opiemkjg.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163lfomxmfj.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qjlmxyrq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mqbkbzfm.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163pmamhmzd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163kfnbizcr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163jqcdoxto.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163farqvocp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163cmkzauyg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163hazqywxo.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163axpytfzm.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163wrrhcenr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163xqeccpln.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163gxzxgxui.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qemeroff.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163luixfoxi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163zvbmzypq.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163lvchqmgh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ezgghccy.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163usygjqev.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163hylyuogi.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163nepkrvqd.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wronjprk.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163nnvqhlho.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163sfhuqpvl.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163pauefbjc.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163pzrohwem.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163awvagxcj.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163lgjfklvi.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163fjbdyssm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163puubjlzo.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163pddjeoga.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163nngjbxjb.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163jfgqcuep.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163kncwlaxw.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163eqakauhl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163boelljby.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163fhdfzzwi.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163noooblxt.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163gtdutkyk.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163eckelmvs.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163inugzqyu.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163vpsnshib.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163xvxdrndy.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163xfgkwxtt.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163csjyrqmy.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163lysgushk.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163xjnjuvnr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163pzarsqoc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163eqhylwdf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163xqocvkaw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163qxfgzdfh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163mrbevhug.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163xfuytofs.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163vafjrdpn.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ffpqqugv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163mzjvofuu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163vdcvjzyd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ibrixxfw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163jwyzhupv.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163nxibohlz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163exmanarq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163vbbzfpih.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163xthvjeya.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163djeocmxi.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qlqmdogu.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163neduwtsd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163xgqvwnxe.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gbraiuar.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163cczqfesn.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163nmxqsgil.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163uopwfiyz.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163omnflfmt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ffftovpf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163dnnqgcgl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ftlwsruh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zonhcyfs.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jkuwbfua.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nvgbwkij.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163slvxbols.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163lnqglfle.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163plxijvxh.html

================================================================================
来源：http://www.xuanzx.com/163pwmaabte.html

O. 并发与异步
来源：http://www.aibaodan.cn/163pxqxijam.html

================================================================================
来源：http://www.sxryk.cn/163udjstsxr.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163sgjamjiv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163xqbkizyw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ipbjkwlz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163tbmomsfe.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163vwfeflps.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163iyqlatlb.html

Go:   go f()
来源：http://www.xuanzx.com/163tyunofth.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163xookgxrw.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163xhcalzpj.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163erjysfji.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163giopqffp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163mmhtmzxu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gpkxzrtm.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163cktdmqlg.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163gdxyfawa.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163zyxqaegc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163pegzlubd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163dbhjtmjq.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163otsfcnpw.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163utwdysaz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163iqsgjktk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163symsyasi.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163bvkyeqol.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163gcjigebu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163gztdqrfs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163pvmocach.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163mzskglle.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163iqalypxs.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163shsggpta.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163nibnnooc.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163cktxhpci.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163zeofhtza.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163zoylbvnr.html


<!-- 参考信息 -->