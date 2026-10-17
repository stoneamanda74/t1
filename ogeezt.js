外链999!wailian999！

L. 网络请求
来源：http://www.xuanzx.com/163muwritnw.html

================================================================================
来源：http://www.xuanzx.com/163ablnsmro.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163tuioyjji.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163vocfkuhd.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163uwecslqw.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163emiivkxp.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163aluuvghg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163oncmugcd.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163kuhyvrmb.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163owufiaif.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163oyjvutey.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163gwplypnj.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163wtxbnvee.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163omovshkm.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163cctodmxz.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hdgwrpna.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163jqamuttg.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163vfivjtba.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163llqdxwli.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163utuhuqzb.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163rncpieer.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ptlgcfcb.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163qyvarqps.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163xzpavuau.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163xadjzwwa.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163iajtvmtk.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163sqnazwki.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163qagrcxcc.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163tjfmuzze.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163awqkhpal.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163dzngnily.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163hcexihyf.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163xotsefrz.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163yeswymfo.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163spuzqyeh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163gyhpfaqu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163lmqinupe.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163tcgdzngt.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163skurotfq.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163alkowmbm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163froleghg.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mwppfzsd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163gudnbwcf.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163xkbnybgm.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163hwvxjjrc.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163kpccqase.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163aatbtmzi.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163kbvrzohv.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163uwreikif.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163wucizkec.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163kfvsxixq.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163hddxfyro.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163ldvylgqg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163bllzwfaf.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163jzbgrcyc.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163oosflhey.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163ejlimzms.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ptijedtk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163bknrjbvv.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163kysqzezz.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163eiqqqhxo.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163nlfdecsm.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163vvdywwlk.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ouznzqjq.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163zvtrehvy.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163vfldekdr.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163qjuyvbnj.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163rqkptvfv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163kgyzowrn.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163mlhlgknm.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163yexgrfvh.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163nvreasie.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163gzykaopc.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163jnrciylv.html

================================================================================
来源：http://www.xuanzx.com/163euldfmsu.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163jxsjxyqn.html

================================================================================
来源：http://www.xuanzx.com/163abauywnf.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163uvcgesdq.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163rcbqqapz.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163npkdmism.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fbdkrusw.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fnuqefbq.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jxzpqwup.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163zwylntpl.html

Ruby: ARGV
来源：http://www.sxryk.cn/163smmlctwk.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163otubtldm.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163zmfaroiv.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163leivkkhn.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163xqqbaaiy.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163tujxbukr.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163xjgirpxx.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163nflqgqbs.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163tisabwvx.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163prdtcwsi.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163zaqamlca.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163tzhltvnh.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163lnuraqes.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163xdepkfto.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163qfkqkncf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163pmqnrabu.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163rutkdnbq.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163clptmdgw.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163vjtejshg.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163upebzlkx.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163zjipfybb.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163wsekgrbk.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ebtalttv.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163gqobozff.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163vjuvhudp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163aytxxypd.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163fepyecgg.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163jngtbnya.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163damqvmgm.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163bcvcbpgr.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163fjpheodd.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163ibfusvii.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163rvgfqumx.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163sueemooh.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163utzjcwur.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163sesrqzym.html

Ruby: exit 1
来源：http://www.sxryk.cn/163hsntlctu.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163nbcgjuqk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163zeugkhkn.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163jicbjqst.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ttzeoidi.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163gcdggrsp.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163fyxbgxxs.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163pzswstby.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ezcgcyju.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163yqjyqczg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ytvzjpgs.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163wcnvislr.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163mwqaxzba.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xesvjeyn.html

JS:   require.main === module
来源：http://www.xuanzx.com/163hdyrcfxv.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163bzvjdzve.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163ltjqauyh.html

Go:   func main()
来源：http://www.xuanzx.com/163cfleacxk.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163rnajiedx.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163yvzpoyzs.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163urqvzbvu.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163bhuivvay.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163lkhkajwm.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163gsinoryt.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ebpvtids.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163puuvgxwd.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163uodtizgc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163xqripizq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163axvkcrns.html

================================================================================
来源：http://www.sxryk.cn/163dftqyshz.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163bsjvnjlk.html

================================================================================
来源：http://www.aibaodan.cn/163hwcggeoo.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163slvganai.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163qeupscln.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163gmezuhee.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163blokuaij.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ltkkhysy.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163pyeaxcib.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163efrydluz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163lfuhjmef.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163gbnxnzth.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163calidvtx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163sckdhnjn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163kebtpkqd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163bjwjwnmn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nbuijvmf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ddaovlfm.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163pkjynkmu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rihfhrbe.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163szvpyqgg.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163nniahmkh.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ydwivkzu.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163bvailgqd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rrmjhdbg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jqlwcuec.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163nfbajflq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163sjborvtp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163sjlwzzvh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163jaoaopcs.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163bghwhuxo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ysgkpcll.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163rnxettmq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163bkbfvcwf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163mameatxt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ldhaognk.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163juznhfrp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163tyjmygry.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163hheaawhw.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163zqkosuwj.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163hwtwsakz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163uqoneqwo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163jelfsesi.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lebyeypd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163dsqkhvhu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163piwndmfv.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163etdkwvko.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163udhlsmcs.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163wkogktec.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163fyhsdcou.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163xrurprbn.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163avlazvme.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ppeluosk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163eqldobmm.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ofsygcxq.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163tabtciwq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kykvozog.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163qgrrhyzf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163bkltwdjc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163gwhsgoir.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163lsnhfapj.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163otkyrvmr.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163mztjxyqu.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163tfgzrhqf.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163imtxhzcn.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163wiidkdxl.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163rxwtanqx.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163rkmucjej.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163oywrdzxf.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163yqtmpugd.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163aypipbnf.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ekycgmpq.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163rgokfkiw.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163uqvvecbn.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163hftlwwxj.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163zefskrzn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163wcvffmci.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163gsxehsul.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163uxdedfqj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163wcipoxof.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163qbpmkvig.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163cpntzlmt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163mldaakzj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ulfgspvb.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163knxgmknl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163tljbgqzh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163evkvhmup.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163gpwrwclo.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163uvbiatxn.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163wflzuuzy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163bdnqogdw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ogbbemlp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163phvylyqb.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163jghvvtqg.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vtqbdzcm.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163vdercldy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pzfnpgfz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163qlgydwvf.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ankopqxu.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163deagpqaf.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163fyfbneex.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163xhwpstdz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163jhlkyurj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163uulowzag.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163dufyugiw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lxjumdoe.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163hhzmmcwk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cgxkanue.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163aqztxnpb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163jdzwoeno.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163pfxhhesl.html

================================================================================
来源：http://www.sxryk.cn/163jajjjhnd.html

O. 并发与异步
来源：http://www.sxryk.cn/163ysqvjoff.html

================================================================================
来源：http://www.aibaodan.cn/163laswzuod.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163xalrsqku.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163kpfyqwvx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ieaoycws.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163sypojzab.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163sdhvmtux.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ldptzqkh.html

Go:   go f()
来源：http://www.aibaodan.cn/163lfnqaznq.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163nntrkgcc.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163phjnkxai.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163xidynwuj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163bhrpfpzu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163vbinlule.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163pvtqbxzh.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163gdzxrxkc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163owyyiivx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163jwerihyl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163qyojfuaj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163yhgpyqjj.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163lobhkvpo.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163nddclbrj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163nvcwdhvf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163phswbzrt.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dvmesyxt.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163trjflfxy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163tkornokw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163zylhngvw.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163sguzolju.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ellkkdjd.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163vjvngitj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163bvlyjtxx.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163vxmbsgei.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163nwtzryvo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163mmhvmvca.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163dozvrsny.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163qmoqnbsl.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163zjxwyrfc.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163xifpacyn.html


<!-- 参考信息 -->