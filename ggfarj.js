外链999!wailian999！

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163ccbudygg.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163krppbwed.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163cqrmiqvt.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163cyjjtxco.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163snqwwdez.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163hkjvdqhr.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163nvkiktsi.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ivuydbkn.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163jzpurvfk.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163qgduwusk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163cvbdkpgj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163prtfbegq.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163idsmctaj.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163snfodqpm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163milbzvlp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163sujnncto.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163hdmptjuf.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163zabgizpo.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163qttufxab.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163yaauspba.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163oznnpcyx.html

[L04] 设置超时
来源：http://www.xuanzx.com/163eoktswle.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163kzuooehq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163sceuyglv.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ewmkssyx.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163hrlrtdld.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163jvwismox.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163wqomdlfr.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163avqjknkf.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163cshuikqz.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163ttonvxrk.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163nhznzeal.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163pafxlogd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163oqlajmmb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163clarugax.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163lzdcjdig.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163mfnldavl.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163mebymirl.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163qzvnutzn.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163zrimrvgs.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163fipojjtp.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163dhrqbeui.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163vwvsbwue.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163dpqhnpis.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163bsyhuuqs.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163xvasdeqv.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163wybkuktf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163poelkvkk.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163bevmwxaf.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163jhuncdvm.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163ecbkufqx.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163pqwyguzm.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163hfpossdx.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163zoqbsjta.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163vnbvrawd.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163lbbamrww.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163dwjceiuq.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163mfkzwmhe.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163gtkssaug.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163lvxlyatc.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163bcfrgiet.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vrvusryr.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ejgcwnaz.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163fxkigwap.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163xarcicpv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163webwqnjz.html

================================================================================
来源：http://www.sxryk.cn/163oudzhdho.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163dwmembjy.html

================================================================================
来源：http://www.xuanzx.com/163hguqtrgl.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163modxpuro.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163tnzawxgp.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163gmhoestn.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163imlhwfwc.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163cqzskwij.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163iwctsopi.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163neqkcocu.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163fklnejpd.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163rnidteke.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163yxgbwati.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163xovqatwc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163khbplpvo.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163wingstwz.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163oihnxorv.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163tntslfil.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163glorcokz.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163xtkcxueb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ypwlvvbz.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163rdbsvjtp.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163dosrpsey.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163yhzfbbyq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163zomkbqhp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163yfppccqf.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163afvpnxpv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163yrapuvwi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163kvymufcl.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163fyxplqct.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163ktnipijj.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ismzkgxa.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163cctijnig.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163jsqfjaez.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ranlcevd.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163vkssrjyu.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163oeycuizr.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163bjeqzyjw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163fvxsrijs.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163ngzlidwx.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ldjbqdxi.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163sffgovbr.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163foknpvou.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163habihsul.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163uzxddxgz.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163rmahdvmk.html

Ruby: exit 1
来源：http://www.xuanzx.com/163argomcsi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163sfpjrxyy.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163putsazjd.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163gldwxilj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163tcngmqat.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163awoekpcr.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163aavmndsq.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163wewhrkko.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163ccllgahx.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163kvxebjei.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163zxominsh.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163mvwjexnv.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163zoybqtin.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163jlnvqmtw.html

JS:   require.main === module
来源：http://www.xuanzx.com/163rsljvzqr.html

TS:   require.main === module
来源：http://www.sxryk.cn/163gvjhegsa.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163iupxwgdf.html

Go:   func main()
来源：http://www.sxryk.cn/163pbcilvsl.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163abjicmdz.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163kdpeiqze.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163tsrwcwir.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163uejiluwo.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163cfvuugct.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xkvggobn.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163kriiuuvz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163zgfqjjqa.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163ajlmdcch.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163yxlqscdv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163cfzfbxwk.html

================================================================================
来源：http://www.sxryk.cn/163zrbkzgvj.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163ztrndrbk.html

================================================================================
来源：http://www.xuanzx.com/163lgxwqcpw.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163jpzrtywi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163ypjowtwu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163abfruyjw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mrtcaimp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163isnukazp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163gterhuxl.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163mhyuprmu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163xwfpazxe.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163uieumlck.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163eouqdmru.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163fwshsxyg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163pqspasqz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nhjpaheh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163crqsdsoj.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163xohniiks.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163rgpubesy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163gbhqkbxh.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163vdclhklm.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163sbkjxrxd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163csfwgrwv.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163txfpgsoz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gsxrlrri.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163vitiwdtx.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163smwubqej.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163vjlninbx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163hddvenlo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163kdhcvooa.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163oeofyojd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dmzovyxd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163xyuhodrk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163glgmrqyq.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ebhfbztu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163aphrkvlj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ebqbairf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163eyifmwmm.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ifsyeqpt.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163waaovqln.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163hwxcyqzb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163gvnamuwn.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ewkjdpbx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163mkligyli.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163leucutic.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163zvyaowon.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163gtomrroh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163viygopdm.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163wijiwvej.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163gjfimako.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163pmlkmuaf.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jybcctix.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163dlwcktui.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163eliijffq.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163azppqefx.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163kdtdvhiv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163trrwfunj.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163mxeocyst.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163temiwixu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163bwzxpppi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163vjdutjkw.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163dswzddeu.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ifinbdxj.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163kedohkvw.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163nozfdvsi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ishyujzu.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163niououbt.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163bxnznsta.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163aowyzlnh.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163cnmnadlo.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163dusozxlj.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163llvlyknj.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163abpoimof.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163qhhfqfrj.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163tjhquubq.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163gaoemkcj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163czhmphsc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163rpnsyuoi.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ymnczqbb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163rgtaxeit.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163tfgnnnhl.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163osohbbbj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ytpovksz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163zcckglpb.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163myuvhvef.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163nhjuwtsq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163wnelvdyj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163uevadhml.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163qpjmrxcm.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163kwtmscci.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163jcrhimos.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163jyovvjxl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163usarebpd.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163vvxbyjdx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163uytdcdfy.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163pnlhevka.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kjjofwfn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zzuxhrha.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163lumogwgb.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163oywcrfug.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163mvugmucl.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ibqalkpl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163taavzick.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163zrxxguex.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ghyhelet.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dpjjknul.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163elyxflsr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163jycyadbg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163kaefgipp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163sgztcdty.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ikoqvwmc.html

================================================================================
来源：http://www.sxryk.cn/163fxlpufyn.html

O. 并发与异步
来源：http://www.sxryk.cn/163eqjusrzk.html

================================================================================
来源：http://www.aibaodan.cn/163xvbjqwkr.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163hcfwkibi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163tdaefrvm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163wnzkstzj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163yvmbcudf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163gyoinsbi.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163acmrreij.html

Go:   go f()
来源：http://www.aibaodan.cn/163aeofjjzg.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163xdiosurj.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163yrcfmixa.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163nxuhiwxz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163azeoiytf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163xrkhdgzu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xnddqyfy.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163nppxenfe.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163nsjyenoq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163qkqetziq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163envsmmhr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163jwuskzvd.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163aqwlwcmf.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163aitqlrlh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163avdmuzti.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163zaakdxye.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vludebjp.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163epzkmbmu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163xzclfied.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ykrdaasg.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163zrecgjxh.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163apojakrp.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163lawsnotw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163wpjnhftm.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163evtrsngi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wkhcuzhx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ridjvwde.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zgaaottf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163msxpxewk.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163pqyipfnj.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ernkqlsp.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163blufsbkd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163rdkflxje.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vqwcyzaq.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qveybofu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163pilmwfrt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163acjzuovf.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163tawycyoz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163dxhmllra.html


<!-- 参考信息 -->