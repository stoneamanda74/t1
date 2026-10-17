外链999!wailian999！

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ctigqgro.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163spffvsqm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163cqbjaalg.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163amkzvrpp.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163wpnkzehx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163lkovxwfs.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163xjdxjaaq.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163qnxcwxbf.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163keskvwcn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163bccowkpr.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163jvuiwira.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163nqtraumb.html

[L03] 设置自定义请求头
来源：http://www.sxryk.cn/163djhhleku.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163yfcvpisq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163tbycfqws.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163bpmkwruo.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163zbxpfhlt.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163kkshkrdu.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163iprwbbnj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163darcyxli.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163rzfkyezy.html

[L04] 设置超时
来源：http://www.xuanzx.com/163bmrxxblu.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163hjvcbrhl.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163qsgwusbv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163dpwbfvpa.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mttotdio.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163zkhtbytq.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163gkiygwhp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163wopdilxg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163qcuwpkfd.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163rirxajzf.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163buzsqxso.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163qqtrbiyd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163rsqjhmty.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163zwbdbykv.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163xrkfbamq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163ztqxiuby.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163bnnzspkg.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163vamezhsg.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163crlvfzqf.html

Py:   resp.json()
来源：http://www.xuanzx.com/163lwnrsprw.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163qlozejwp.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163xxbdhvud.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163eewkbdjk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163wdpclvbk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163glfrdmqj.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163uacosyjg.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163zctuipau.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163spgvnvcw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163tdiaetoh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163xlqwbewp.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163sgdfweve.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163gfuxplyu.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163rsdkdqtq.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163kmlyouna.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163twztljpe.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163vksrrfzm.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163rigicqkq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163houvvafy.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163smfxlzzv.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163igqzcpiq.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ksclrbok.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163pdcihofm.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163jdrdqwzd.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163ehvnvrij.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163kfangalf.html

================================================================================
来源：http://www.xuanzx.com/163nhlvzydx.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163deyoerrc.html

================================================================================
来源：http://www.aibaodan.cn/163ertnpcdn.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ksqbsggf.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163govttsfu.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163porpqlfa.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163zlsjgmyu.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163tysostza.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163jjeaeyzz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163msbtercz.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163slafvaqs.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163xlgiwwqw.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163lgernall.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163drxxtxsh.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163sgioqmif.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163dbyzrvpf.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163leqqujte.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ozcuyzsk.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163yfdddmwv.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163lisnmote.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163xbchumxu.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163bstgvpcd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163indtslui.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163faynsovr.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163lmufngvq.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pavdiqmn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163yyentlyy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163mwudkhgt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163udkqpcin.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163fhyahgzk.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163veyghbgr.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163ccpvhafr.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ipkdepzg.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163bqusyeke.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163dbfynmef.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163cuifbuzv.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163fqbltqut.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163istwbdup.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ynxkmxqn.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163axgmxhhw.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163swaviiok.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163belokprv.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163kygqsmik.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163estjmvbj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163gistjvds.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163cksqelea.html

Ruby: exit 1
来源：http://www.xuanzx.com/163awpfbmmr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163mmhoctvd.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163npipxupd.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163bhiltuxn.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163jrynazik.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163qpgufwzm.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163oyxwhzmk.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163shotwgqz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163fqrqkhwg.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163yrkjrazg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ysrfknej.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163tanzzphs.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163pontezkz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163pmumopdm.html

JS:   require.main === module
来源：http://www.xuanzx.com/163zavyjpnd.html

TS:   require.main === module
来源：http://www.xuanzx.com/163dhpvraho.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163nxqygmyg.html

Go:   func main()
来源：http://www.xuanzx.com/163ezjbualm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163yznunpps.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ersuuvlh.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163hgdfeqoc.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ezkatyre.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163jjcbwkjl.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hmfcxfze.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163slgxnpvm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163iqiupikb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163sudjqilq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163kjcfjmjw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163stvmaiev.html

================================================================================
来源：http://www.xuanzx.com/163zwkparxx.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163psizjnbw.html

================================================================================
来源：http://www.xuanzx.com/163bksdjmjj.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163vhdcnsru.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163llyrmdjd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163nmcqbihf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163kpurpnbd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163yruzoinb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163boofsdsk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163npipqdva.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163fzmbdbxw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163briutgsi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163wlseypql.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163tlxcegyi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163xzoqagpf.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vlpfmoje.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163iquriuum.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163rploijrq.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163akvvtywe.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lpbywwql.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163dmebfvwk.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zargmzyt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163eeufictx.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163xiumexet.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163oawdaldu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163aqlswdks.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163awmkmjin.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163qxpxtgxh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163amdaxbdz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163ktsrcdrm.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163sflidfwc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163nnzufdhl.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163hwvhkqaf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163dhnbaazo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163mkvquepz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163qanuppwy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163euiubmmq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163pvqaqjqx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163njaygoek.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163yzaxswja.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163pkxswlid.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ddjpbdvs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lhmjhkia.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163kpgbpzhv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163kkikhgcp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163qqenpaef.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163gwxmpxfg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163vjkqcdbz.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163axscjosg.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163onjrgbam.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163khgtrlrs.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jslejkbw.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163weqissxx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163fzgramok.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163bmewxbdm.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ccvzivlr.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163adtnrjyv.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163oyoucesl.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163thghkqpu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163wjxvkcnk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ycqvdmlj.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163vfeuhvvc.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163qycdkqfy.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163oqnjutic.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163upjfzcys.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163wsalguih.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163yhrtjcle.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163qanxvhuo.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163qavdamci.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hhsteufs.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163sqfxwbxq.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ikrddfkm.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163bkxajmxu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163hllncqld.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gfygbbic.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163sbbaghfv.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163jcnudcyb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163gelxdsfd.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163tleeffmj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163orbomijg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163zawyxqev.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163yigqiavu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163twzhjsje.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163jtjzljhp.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163azhguekv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ncrwyiwh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qtrabywl.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163lmlekpla.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163bnsidwfw.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163xzsjhftd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163geveftsb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163akiubmso.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163nisdqtyd.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163rstmkihh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163fwrhqfab.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163rtqdsfll.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vcvdzcao.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163typspfgl.html

Java: // 手写递归
来源：http://www.xuanzx.com/163mofkdsof.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163skxzqzrt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163wmpjdbal.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163kyexqwll.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163quuxxkmc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163kbtzhqxo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163fzhqkqnw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vvelzfji.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163puvxhapa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163dxctnlir.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ukrxvjmm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163yvodcnsz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ihngpfar.html

================================================================================
来源：http://www.aibaodan.cn/163hhpkcnsk.html

O. 并发与异步
来源：http://www.aibaodan.cn/163sofuctxq.html

================================================================================
来源：http://www.sxryk.cn/163nipupqkf.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163jdqwdaal.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163zzcsqijj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163cpjddfwa.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163mnfltppi.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163iqsjspoe.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163imymffwn.html

Go:   go f()
来源：http://www.sxryk.cn/163ygbiwzsb.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163gezzsbul.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163lymdnggn.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163krhgsjgg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163wwcjctwg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ozihqeon.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163qhlmfnjq.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fxkscvdd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163jsykugay.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163bgaxdqmx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163yhuztejv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163qldujumx.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ieqvpefl.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163myjfmcvl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ropdhmnp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163iojgteqq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kpoupzat.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163naxqnmei.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163zvtmdffq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163fgbfpixf.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163yytoosoi.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163dmsicgmq.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163drclpyym.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163zwpltfue.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163fjdakabq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ntbkzmvp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163dkkstnkv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163sxzxdlpx.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163boooxlts.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ypbmriay.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163mdnbrhco.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rdfhvjyl.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163bxlpczsk.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163pyebshnq.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163pplxhjpr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163kuanofbj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ymyxhnhh.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163foartfqt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163arezuuig.html


<!-- 参考信息 -->