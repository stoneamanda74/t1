外链999!wailian999！

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163cswdsylj.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163auxnqzev.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163rhdamayy.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163rrtqdvrh.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163nxibicgq.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163dszwlksb.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163bbvcvtmx.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163tyetvquh.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163mmarcvbu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163jxmaacuf.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163hoghpkng.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163xnzicdtu.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163nyjtpszr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163alrqsoqs.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ibncflcz.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163httfgwoh.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163inxpyksd.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163tuhpqxnq.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163sjvnnphy.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ivbvpdqz.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ibbgarsj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163xmvioinf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163iirmdiny.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163otwxaccv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163bzcudcje.html

[L04] 设置超时
来源：http://www.sxryk.cn/163afxnubdl.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ibkwnkvu.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163aoasvrtl.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dlaigktm.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163zqukhmrd.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163ehcaebhm.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163enehkhnq.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163afzjsezq.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163lymlffpe.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163obrfofjm.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163sljceils.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163mkwvrsfd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163hsyzlrst.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163upohuwpi.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163jpthhhle.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163svcvdcyw.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163qkwblivq.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ymnnnidn.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163jppkvkpy.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163wjcaxxcy.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163vonftgbx.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163xlmisjbb.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163prnxdcvl.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163namtskfy.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163kkodfihh.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ehdilcls.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xzlnydty.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163bzklafhg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163ifjlvtto.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163rgdfdvvw.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163tejgnzdd.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163xdlelxyh.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163xzlzombu.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163dltzyuqk.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163iiyaicxm.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163ykkisual.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163nulaudrg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163zwvbuimr.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163saugrill.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ehedvljp.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163wcxfackw.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163esksbcfc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163hwpoezfb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163xkcavvgf.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163zpifakbd.html

================================================================================
来源：http://www.aibaodan.cn/163tlewxvnf.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163xetqnmvq.html

================================================================================
来源：http://www.sxryk.cn/163jkeeglnj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163rempinsx.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163fyjuiodf.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163xmhysnea.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yybpgevg.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163moezofif.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163juystcva.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163uoavtjcw.html

Ruby: ARGV
来源：http://www.xuanzx.com/163osvdmnrx.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163osnuzjmb.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163wjmtysgb.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163hucvflsp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163bokxvlnu.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163jkipyrhe.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163mvrzjgcg.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163jwdxfuyu.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163xmemdwux.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163cwxhmtfb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163crmzeegz.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163kfiuxpvy.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163mgnbxnvm.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163pgbfdpkx.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163mulnodam.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dotjvjbn.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163tldlqbco.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163iaabtnnt.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163hfnvqune.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163xsiucepi.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163zfivcayn.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163plfqtxxr.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163bgdwcgdv.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163wbruhefu.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163drriossw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163fohvznip.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163kukplhag.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163bmjwecnn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ehuossdq.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163vsgoulpj.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163mfifxgii.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163dpulawwn.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163pivujipg.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163hfgfbnwx.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163zxvkocxl.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163wezecxnb.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163wxvwyfaa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163shzvqfmv.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163zoodsbzy.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163nbnglpam.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163btamkuix.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163xykopxbv.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163liayeqwt.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163pkclempx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163iaiizyqj.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163nanycdju.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163furcufyu.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163mtlvsvxc.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163vpsprcys.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163nkrguoxc.html

JS:   require.main === module
来源：http://www.xuanzx.com/163mvkqvzli.html

TS:   require.main === module
来源：http://www.sxryk.cn/163lzhokqxh.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163korpvihp.html

Go:   func main()
来源：http://www.sxryk.cn/163penoddtp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163xtwslcdn.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163vjktigyd.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ykymdwwz.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163crpxqopj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163dutosycf.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wxmrlkje.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bporrdfn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163pckdskod.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163qcukfukj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163mewctmrs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163hqblrzdp.html

================================================================================
来源：http://www.sxryk.cn/163dvctysjt.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ofktmjhm.html

================================================================================
来源：http://www.xuanzx.com/163jyupbexv.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163elrlpfns.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163esowurnt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ehdbapac.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bwtmijzb.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163sztdvihs.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163bozomvqj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163quvdgrwx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163nrjhanax.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163iqoehbzk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163esatycqh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163eyghyxjn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163mdjmzkfm.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163itlurjqa.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163szwhthbd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163plfwmufk.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163bsbzwuel.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163emyhithg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163oycatdsu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163pagyfqgk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163edbvvedn.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163pdbcxeve.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163cgrqccid.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163oixwvkds.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mzzlfpfi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163lbwutsnc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ioxtiizc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163nwuxyoru.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163kttzciqi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163mqsaqeql.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ittgjwpq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163uqsscwfo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hhytkftv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163wnfjolsg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163mvmewday.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163werovkum.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163cjptjyul.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163npplndqn.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163yxeurcrs.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163exzwvico.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163oulgwppo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163yvudxdue.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163rmmeaynt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163xvcrxwsv.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163hfuzwqei.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163fmhirrlh.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163fwqidcjx.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163plrcjllc.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163yzhuhazj.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xlecopce.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163yhedisyf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163bnifrsfi.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ayohrlvs.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163arhtqjsc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163afxkgwvh.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163jjphzzbv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163hbkvrntk.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ttwfythx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ypspllxs.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163ikrsmndu.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163eeifollj.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163iyfflnsi.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163cqskijdd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163xqhxwidk.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163uqsurmtq.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163uliiyipe.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163tujahpeb.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mwqbkfeb.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lqdpsouq.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163pwgzubfd.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ixpyaozq.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163njajyqfl.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163wugmtxac.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163oancavbj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163sehxgkgf.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163jgeplshs.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163zgafkylb.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163tahhqwvs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163thpfrycx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163sykhqicp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163zhntifmk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163canshzru.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163mankjtwi.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163blubellq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163przmjpvv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163uilfjcer.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163oywibvhq.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ytdqsoox.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163zljrbujj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ilnzeinm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163hmgjxcpr.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163bjuyswmm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163prqplrht.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163axwsiskc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bmjjeawx.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tfvhgahj.html

Java: // 手写递归
来源：http://www.sxryk.cn/163mcekyvsh.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163jorysznz.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163xzjnivyg.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163odwlzurt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163iteuvasc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163cabtghzn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ieftpsjn.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fewaltpx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163reyqhjaa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xplmicle.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163aokdoydt.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163vtsrcnbb.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163dfhwiexp.html

================================================================================
来源：http://www.xuanzx.com/163xrpxvcyi.html

O. 并发与异步
来源：http://www.xuanzx.com/163tenkyoxp.html

================================================================================
来源：http://www.aibaodan.cn/163qbcajolp.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ivmtejmm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163nfdsxugc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163mwapsnow.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163qhhsxttv.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163rwxifqcz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163zunhihdk.html

Go:   go f()
来源：http://www.aibaodan.cn/163zdbctdau.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163iyfdqrdj.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163deiohozy.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xeajnvkb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163kmoehlol.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163jkoubwsq.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163vqwyeomz.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ewzznhow.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163kyoiemal.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163nhbxfvwg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163hmkvxevf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163eeotgtlm.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163jcjwuhux.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163gwkuqznn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163tydgqsgz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163pgqikwfu.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qskglbgb.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163zgjzkgbq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163gibftjmn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163onwkpyxq.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163elrctrom.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163oqpnlfta.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163nlmvnceg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163hpscaiof.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163zoggjmih.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163eiftlmfa.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163krbvdoop.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163vkqzwffl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163unfuzbql.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163fjwvftna.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163fuonessh.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163vrrylkyk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163hbrjxdcc.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lcrxjjgo.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fllghuxo.html


<!-- 参考信息 -->