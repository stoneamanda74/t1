外链999!wailian999！

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163vnmqlayz.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163hmpkjptc.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163zvqzqmqq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163geaszqgm.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163nkvrbsym.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163cleiqzfr.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163bvhwmwom.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163xkxfeofi.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ppfxhxbw.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163zxirnzav.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163gogdvsxn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163exfgclpz.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163nukyowkd.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163rbwvgrnj.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163istsjbbc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163zoeqwabi.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163zfjwocno.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163lmxjfkdz.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163fygcsfok.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163cyruwrms.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163nbbnneah.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163qvdnbnev.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163bxzcyxru.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163gtreefjo.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163aovsrlef.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163bblbwlxc.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163jztyydkk.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163pgsvrojr.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163qmllszdb.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163wvsvuctr.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163fuqliaga.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163wesmriep.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163pncgpxep.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163foczhoqr.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163zyeovopd.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163cxtxxztu.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163ccvadnkw.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163osjhkpeq.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163nhzoxenw.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163zppkzdms.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163hjmsdgfe.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jwunponv.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163pvnojhfs.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163jlnstxyo.html

Py:   resp.json()
来源：http://www.sxryk.cn/163fmjzupjb.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163oddoyygp.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163qwividkf.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163qomgtcsf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163nhswxulh.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163kwyhemhp.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163wfxzlacv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163qevdfglp.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163bijdmcft.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163njjujyqq.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163vyxrbqdy.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163wfvyojpl.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163cuvbahdh.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163kdfydwdc.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163hjfkxhfk.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163bwgwzeun.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163hqarhrku.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163hfwtqznu.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163woxaknke.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163vduaetgh.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163oxlcazii.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xqkdtiwa.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163yaduwltq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163pgodnkpc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163qknzattv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163ugcpzqif.html

================================================================================
来源：http://www.sxryk.cn/163gkjsbloq.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ivhntilj.html

================================================================================
来源：http://www.sxryk.cn/163szxxnrwt.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163abegfdve.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163uwwtpfvl.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163kujqinmu.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163ksdxjyru.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163yxtzrfah.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163gfzupact.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163bryrvdet.html

Ruby: ARGV
来源：http://www.xuanzx.com/163ogqxvjtr.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163zmuuhjiq.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163dylkbarx.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163seqjfkdg.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163vipogcne.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163rcnygalj.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163ongyuqml.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163swvlydzb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163wutqoqyq.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163mmybsrgr.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163uvojrlwd.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163kdrnujkz.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163pxosflpp.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163kjmiqlwe.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163cdycgiwp.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ghogxknp.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163nsnorvqi.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jwdwgnhi.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163dpgvjeyw.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163puoktjuh.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163nmcrlngb.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163oikijoga.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163wxyqqsqk.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163xnmycmll.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163uodlukcb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163erkbscbu.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163lbbwimcx.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163dmxyreqa.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163fmfnqmyp.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163qxtkmuea.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163uwejhutc.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163vhplnpwl.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163vovzpkwg.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163msrczvmo.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163qqnoliry.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163nclrwifm.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ctxptlka.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163vkzjfhbb.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163mrfvghyd.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163auaktdgy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163cizsbhpf.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163gtnedtfg.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163vxsophcq.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163saplrnot.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163fwvurdhj.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163xuxeoshe.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163kemcaegc.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163jkptavfp.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163mhlryicx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163polkctiz.html

JS:   require.main === module
来源：http://www.sxryk.cn/163dpsyvyat.html

TS:   require.main === module
来源：http://www.sxryk.cn/163zowytkim.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163lrxdmmzd.html

Go:   func main()
来源：http://www.xuanzx.com/163wdjpeugd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163citfnlle.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163gbgkbpqv.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163ljxwckof.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163rnuksgqp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163twjjxeum.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163yeoovhol.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163ayyhkuwf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163ugvrvmog.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kqrvssgz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163vwagxnpr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163dezlvxru.html

================================================================================
来源：http://www.aibaodan.cn/163ejntsrng.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163wltxlmzq.html

================================================================================
来源：http://www.aibaodan.cn/163ixponufx.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xjqabccg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163haszlhwm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163wdkmpqbr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163tltrgfiu.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163gylmlydh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163odfhcblj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163jsbesztb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163tpqqghvd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163sgrxfxmb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ksawkuri.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mbfdwhzt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ezsqlkwh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163isxxhsrx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163oqbfwcwa.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163mszhwixn.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163czfcyimk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lclvilcs.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163xjsykxdc.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163zgmtczdy.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163zjkvwzeq.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163iimhvydb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ysgkyacr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rggmngss.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163mxiipizd.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163jnixshen.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163dvsnkzpd.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163owrbefhg.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163mzviiron.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xltmxyex.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ryrfityr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163brtekcnm.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kakvtukp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163pjpothek.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163oquvdnbz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163jslmuhlg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163qwwuuily.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163uwjnqmeu.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163emeosxtf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163nrmupqoj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zyiwtenb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163txnthtyf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163pppkevbr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163sztftxke.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163erppgdbj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ercahskh.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163weenzajz.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163vdkepryp.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163izywahvf.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163njrlulji.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kwzwinip.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163gvepwmam.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163hvcuoemo.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163fpebiiau.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gpznlmqg.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163iibctvvu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ekdwzvaf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163bnflbeex.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163vdgrotlc.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163evvtqisc.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163bxdwlrih.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163khuhgufz.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ptdwgsec.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ebwaokbn.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ickeelsu.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163mlhzozwj.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163vbmazqkn.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dkivgrfs.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163hksdylok.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163orhnlbkk.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163bffhuntu.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163eqblayrd.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fsfaagiz.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163daullovm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163feigepzi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163natwwwre.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163cncpnwww.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163qzdepmrc.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163jdiatpty.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163uotzrrxd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163bursoeqm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163wydsaytl.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163hehtyhwy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163myfvucba.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163airajhhj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163drelvfzm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163pkwnxmwj.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163opmatgvp.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163xjigbdoa.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163joecekgg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163lhjatndq.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163pdutsjfk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163kexqftpx.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163vhwulgtf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163uxbhfmie.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163panpiyfb.html

Java: // 手写递归
来源：http://www.xuanzx.com/163yfvjzcax.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163gukjgkpl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163kmflkzmq.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163wfjxwign.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hidabibk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163nqveljov.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163qekbekgb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jsmmeale.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163okjkcuaa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kpazanzr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163sbpoilni.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163newfxhyi.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mbereuey.html

================================================================================
来源：http://www.xuanzx.com/163ygiotljj.html

O. 并发与异步
来源：http://www.aibaodan.cn/163cmftbezg.html

================================================================================
来源：http://www.sxryk.cn/163zthfjakx.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163lkbkosla.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163icrzhqqd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ohraiohq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163tbuagfgu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163btdngpll.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ddegfsbo.html

Go:   go f()
来源：http://www.sxryk.cn/163gejuemcq.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163aaeghjat.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163qphzarkm.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163lwsyntjv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163jtcjebja.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ysrjxhae.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163aczclowk.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163kghqcznm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163idoxrrzf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163lubfjtyt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163atdoqdfv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163huttybbb.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ccvgzfas.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ybqsnrnd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163rjjouhcy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ztwbnibu.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qbipwqcy.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163qwknazoc.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163gqavzisz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163snponyho.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163vnfwtlxa.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163pvxfmmez.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163lruysoft.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163uawbicii.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163gtfgvaih.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163itbyuvjz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163lfqdkbli.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163bzfcqtuf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163meruywiz.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163wttbxwds.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163wkewjdmh.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163gsbuxdif.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163idclgkoa.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163twlvqhze.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163omyqdyzl.html


<!-- 参考信息 -->