外链999!wailian999！

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163haqeacgj.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163txhkukxm.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163perobqva.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163leeoxoby.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163kegwwsew.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163eseagong.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163nhzrsqer.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163kzedqrhi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163iimophrm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163cutbffuk.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kqaopdgx.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163kzxuuytf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163olnrvbzx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ysxxoldh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163pborccfv.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163nlcijvmz.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163afjbukua.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163crwhrphz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163merocvhi.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pwylpmre.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163mesxvoju.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163wlogywoa.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163xapnrgky.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163qucurtnn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163xryzsuaa.html

[L04] 设置超时
来源：http://www.xuanzx.com/163aosygjwz.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163yskkjaga.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163gwmghqtw.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163nqwvrrrn.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163vnvqrlzq.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pbvukkju.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163tiqwflzb.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163xayqkwdt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163gcabytii.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163jwbmbheg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163npcfbbfm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163lwmdjzri.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ceotnjua.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bqcnfpvh.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163hfhhfbxo.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163rgucpnrv.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163ofubyyvf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163zheqefxm.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ihanzhqp.html

Py:   resp.json()
来源：http://www.xuanzx.com/163uyagsdjt.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ktamoyju.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163gaiousot.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163eyzwnghp.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163ivlxoymv.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163miaoqmgz.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163fagpobjo.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163kidkxeus.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163cnvnysrq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163cnzxhwpw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163crapngxv.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163mxiehjru.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ethwcdwb.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163viyyzlls.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163ayqlygxa.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163bbgwgdro.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163frqhjaqz.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163dtujnedo.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163wkgjdsbh.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163kquppdrr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163dxgofbxj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dybzxqhl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163famovocq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163tpmtkeys.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163moyrlifg.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163fahyboxc.html

================================================================================
来源：http://www.sxryk.cn/163awofncpg.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163aybdqniz.html

================================================================================
来源：http://www.aibaodan.cn/163bynfskvy.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163baqksbzv.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163tqnkccso.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163wgbxihlt.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163wbqaaomb.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tnvoatrf.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163tnbhhqmk.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163ifkgtzgk.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163hltejutl.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163fpnnhnwb.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163tjalzzts.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163fupplrbb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163jcofjoty.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163guywooqf.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ocvkiark.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163pzthujek.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ufdexvst.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163fgtnwhww.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ieqrpxwh.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163bircogrq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163qrehmocq.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163xcfsqzpp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163ohakvsjo.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ilfcwila.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163doqrpaxf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163xxwwlepy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163qgkvsdvy.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163vkvkxqsb.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163grkadlvs.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163nshzsloo.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163xqcfzhbf.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163tysyulov.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kulghmyp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163kfszpheu.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163zfnleblw.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ksfqbnsh.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163fqfwnyqx.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163kogoqkyl.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163zumkxjcb.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163jvstupfw.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163hlicjukb.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163nvxntdmt.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163mwwjuusc.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163bxttxlqj.html

Ruby: exit 1
来源：http://www.sxryk.cn/163jddufrxl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163whqvrsfw.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ktcrqgfy.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xazdmvif.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163rfyctujg.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163jcqxpurk.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163kkqlciwn.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163lwqmvgwv.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ydeaybna.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163ilerhwln.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163lwmvkxew.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ioelvvgu.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163pfgkfhye.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163oqwhtqxf.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163mvaziyne.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163reirapot.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163pwrkoddy.html

Go:   func main()
来源：http://www.aibaodan.cn/163nxxncqiw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163bxbagerk.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163moqpgfni.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163hhwycrwg.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163vzkehxeu.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163cgxdhmcy.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pronnlyx.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163gpbuvzgo.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163cxakoxgf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163invhwxxy.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163mdpxhmjq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163zcqzrnre.html

================================================================================
来源：http://www.sxryk.cn/163kklpqdmz.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163vyyttfzh.html

================================================================================
来源：http://www.xuanzx.com/163byatsxny.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ktpdtzrt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163boquwtli.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163hlsakgzy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163gskqlkyj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163holomgoo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163gfjfnodf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163bsiaovwz.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163zwpcujti.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163bsqhqwqj.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163rlmxeisz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163scsgjdgu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163nrlxiezw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fcsgkevf.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rqwmtvxf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163lfkqsapr.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163enpjtulo.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163odfsjqey.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163xnuswctz.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163icpbzydx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163fzngzgvs.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163mnlticza.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163geeitqyb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163yuqgzzoo.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163msdzzeiw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163xqousqet.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163defmepvg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ljkutajo.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nmoxxafr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163qsqvhgas.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163lextjasn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163inmzpkmc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163httadrlx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163paqazuan.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163yrlbjsse.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163gxiiliqg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163wpkffixf.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163djsddtmf.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jfjqcofe.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163mfhcyqcu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ilewhapc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kexuwagk.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ooetqkbp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163kjpkcjxr.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163tbvchmeb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163tpdbsxuq.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163kbtpphcl.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ilgcydir.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163wzcprvfn.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163yfohqbip.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jdoaoblb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163oagjrnar.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163yftofpvz.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163djxwqtef.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163cbjurzpt.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163ufkwxarb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163lubcjejt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163lgsyggpr.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163almjzmpj.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163slwmjkff.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163waruwacn.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163pmifgeis.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163mvangsyy.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163wcndspsh.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163uqvtkmbv.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163rcbjkexq.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163viizipes.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163dxdpfigh.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163yjtxtsuj.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163qxpldqat.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163nmzbyynv.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163vtosuzlf.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163spyrgsya.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wjgrmped.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163tgjoifjl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163gjoawmph.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163peolymkm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163xerqusrc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163rklplvyl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xgsjajxn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163easqhxhr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163bceglqbr.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163fsxpzijl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163wkfmtfbg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163sbxlebzf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163wanmgpmm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163scxbryfi.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163zdefemow.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163gzoblbix.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163msmljtnb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163modcqbsa.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163bhilwclx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163elwyowxq.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163nufoiezy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zieblhlg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163igpdxuqd.html

Java: // 手写递归
来源：http://www.sxryk.cn/163eimxyymj.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163yfnpcxoh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163bnmgnfjw.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163qcsovajh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163cpxrpntb.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163eqjlctnx.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163hiwcnksj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jouxpusu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jhptspol.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rowpfabj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163ruiwsdll.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ebtsdima.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163zcnexuuw.html

================================================================================
来源：http://www.xuanzx.com/163tquyamzz.html

O. 并发与异步
来源：http://www.xuanzx.com/163dzvhhcvw.html

================================================================================
来源：http://www.sxryk.cn/163grgtuknk.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163nswzwwfw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163wwiwwwnc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163rimplsln.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163yvezznea.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163noggmabm.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163lkvljqiv.html

Go:   go f()
来源：http://www.sxryk.cn/163tutozwoc.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163uufnxncv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163wxcdfzda.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163drquebfl.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163rphlexdp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163kffzhbjs.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wgikcemu.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163bbdcmuti.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163owexamxa.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163eyjzegce.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163mctdbcuc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163pkqizsxi.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163rvvvwafh.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163gmzzrhgq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163saqvacnr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163kvtmsdyp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wyndcjtu.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163jswijviq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163coexsgvy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gnnitbhj.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163jgzyindq.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163jlsenzcn.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163rbdvuyqy.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163whjezuhy.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163obyukdab.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163jwmxnrpp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163cjnliysk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163sfvrtqyu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163nqqcwczu.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163jmliphnh.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163bkyqspaa.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163vvntrxbt.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163vhckhkvh.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xloccneq.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163tvtbuzlw.html


<!-- 参考信息 -->