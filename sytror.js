外链999!wailian999！

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163hjxirwjl.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163uticexqg.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163dylueunz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163fimbuohz.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ulbldity.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163eyrasxgd.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163mlpsexoi.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163gleoavkn.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163yorxvfyw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163vislumfu.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163vndipjvi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163lqttppsd.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163kqnrvjtc.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163aimglmtq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163vjsumjne.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163vetqwlck.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163qwilkrnv.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163qfmzgjmz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163zkkilsbm.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163zapfmzjd.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163zkqqwvti.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163jpurjpnw.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163tbmfxydf.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163cbrdeopt.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163cwknydtl.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163pimjluix.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163jsroacyh.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163jvuegude.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163xjppslaj.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163podflnnk.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163kgwdrwfz.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163jvihoifw.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hpgbomiu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163nxbunrtq.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163wcgzixad.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163siemnhee.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163xyyzbkoq.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163bdfztoos.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fmjvlopl.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163lfmttend.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163hjwdspef.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163wzoztlqu.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163hjjrnrja.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163ckmfnprh.html

Py:   resp.json()
来源：http://www.xuanzx.com/163lwldackn.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ohbmzmsk.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163gwjtahto.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ytzcmwgk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163amkxtckz.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163qhbliizl.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163uoyvxtkg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163ygyjmpdw.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163vqxxkith.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163vkkbabtv.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163hakcftcq.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163veoawpai.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163vlvizcjl.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163dzdjhrai.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163fwigjvil.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163ojhjapcu.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163qzlfhhsd.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163kxpsnntm.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163joxkbbgm.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163fsegwfxo.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163eabauiwj.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163vflhommo.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163trktbphz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163sdvxlopn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163qgnulofm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163naasmacb.html

================================================================================
来源：http://www.aibaodan.cn/163hbyrmxnc.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163aetefpae.html

================================================================================
来源：http://www.xuanzx.com/163eoqmaaes.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163kmoeafyz.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163jvqbcuzg.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163eljrtujv.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163bjhhwnju.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163mulftdls.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163foogvizk.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163grpfbawx.html

Ruby: ARGV
来源：http://www.sxryk.cn/163pmsscrlb.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163cbciwnlg.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163hoywwcxg.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163gbpajpko.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163zlbyrwld.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163vrumekdf.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163aswnmsyk.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163hbhfocjt.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163sjgfbiqe.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163eulezceu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163mqxfxvst.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163ljockuuv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163mmciagsd.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163mdwoiale.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lissdmlt.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ytbkzczt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163jvgqnbso.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163jgcwljgh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163mstusmio.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163nbfnkktx.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163nymvukuc.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163wjajnbem.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163kwkxxjns.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163yazmpgyb.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163zotjclhu.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163hfqtemag.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163hfaqzmbs.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ekfrzewb.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163obqzwuvo.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163twnvdjoa.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163hybupctj.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163kmertrxg.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163xuwzrhep.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163qdufqkkz.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163hyotlbwy.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163fnxfrweb.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163pyawobgl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163gcuiacha.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163wvyzszpa.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fasxqnua.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ziasnamu.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163gzupbxwl.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163akmxhzse.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163owxaojrs.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163vouedzlx.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163xvkkaiqj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163proaiqbl.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fqxriths.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163vndjisxf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163kssouhwm.html

JS:   require.main === module
来源：http://www.xuanzx.com/163rhrtiflf.html

TS:   require.main === module
来源：http://www.xuanzx.com/163mtlpavex.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163gctxdfrh.html

Go:   func main()
来源：http://www.sxryk.cn/163hlssofet.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163fsvuuaio.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ylkcxchb.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163fgefitqf.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163yszruwge.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163sjgyzgog.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163aewrfryf.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163brqretev.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163wnznkuas.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163ofkgfhwc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163lxgbcnmu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163cusjkseg.html

================================================================================
来源：http://www.xuanzx.com/163lkhbxcya.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163uxkwueiy.html

================================================================================
来源：http://www.aibaodan.cn/163hkssfftl.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163iibqdhcc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163lsppcuex.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163fldokgzz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kndytktz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bdvfmafd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163mxpnanuj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163asrzmxks.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ewzixwle.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163wuwzadqf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163lheoinmj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ijqfmjkw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163nxhlwwtj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163knktmfwd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163aciorcrz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ewhksgbo.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163mbihxipw.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163cejdgiqm.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163zxjwzshy.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163kilxbbmj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163fbgcryvi.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163dpbyjysx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163nkexyzke.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163hvwzaupx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163laktkuag.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163fpqoiixt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163vjrkgcpm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163lkqomfof.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163rcsmbbec.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163kwplwzyu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163eojvordp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ocyiqitw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vafyaged.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163kyzatlwn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163vhylbmho.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163uulvzpkp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163lwylwzpr.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163zbtoiuzr.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163iwzxdnyp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163trlyxomh.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vkmeuqad.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pagzpjdq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163fkfumbxz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163hrbpmvpq.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163jdcnldlk.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ngmtcmgf.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163ipsthifb.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163fbnncdtu.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163zikhgypn.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163rtfjxdjm.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163exuxebyv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163btoabzpe.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163btxjbbyp.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163pskcjrix.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lbazesug.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163omoaufuz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163scgruaky.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163wvfvisyf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mfayrbwd.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ybqbjjkp.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xjkgbydk.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163fkxqmrbx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163svsrcgfp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163hwsfmmsx.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163zmtmbgmx.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163jrhyacgs.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163rtlbelet.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qzhiytjs.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163iaaovifn.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ndouaezf.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163hpbbzcyo.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163dwzbzymv.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fmkbfnce.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163avzeoejd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ooolwwha.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163gxqqcyzk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163nnuvrimp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163jtwidqtz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163nbiiyjij.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163vervdoqg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163dytilcwy.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ljgkayvs.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163yybnhlqt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163znzpvsta.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jqikqfxe.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163lyyrvnvh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163rypkutcb.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163bmkcmqia.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163zzlbkuet.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163nnuhibmi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163mpwcynnh.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163isiyusst.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163tmdlmyyj.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163gaiokwui.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163sznjqmuq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rznecsow.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163yolmdslb.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163qtxjybbe.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163yybcryqs.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163moyhfomr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163etkvbmay.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163zpkzzlwu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163kkyergrn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163dwgjjiac.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163xoojotfr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163vrswbytm.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163galbztdw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163pokslyiq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163yypjlzsh.html

================================================================================
来源：http://www.xuanzx.com/163yxjbgqcb.html

O. 并发与异步
来源：http://www.xuanzx.com/163fjydcxce.html

================================================================================
来源：http://www.aibaodan.cn/163xssrrcvn.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163fpafzjpo.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163mesmsghu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163dberuqwn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163gtftgxzf.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163mjyedwun.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163gmunefsh.html

Go:   go f()
来源：http://www.xuanzx.com/163hllskexp.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163thalytgb.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163elryuqvq.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163evmdsjaz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163shvlxups.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ayawflux.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163aufrbrod.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hkdiialn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163xwlkkvby.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163xzgblfec.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163lfmnqxnn.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163qnridqex.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163yljeohjo.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ubqjfwlm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ujxdvvlh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163glxpmdhl.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163pruamwzf.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163gbtutejz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163yrevokvi.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163qjtolatz.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163snjuokze.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163tdnsvzog.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ncmnmkdj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tuzxkshf.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163xppqivuc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163hwvfbyuf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163tfaoofob.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163cywuxfkh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163oskrgwzd.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163iiwpjwgv.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163eapkypmi.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163cqrwcuok.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163alvfttzq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vecczhbh.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ckprcrht.html


<!-- 参考信息 -->