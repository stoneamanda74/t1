外链999!wailian999！

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163taaidfll.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163czsbdkvn.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zdsqcjnn.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163nidocboo.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163ylxcyqiv.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163lvrbodkk.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163myfgjmpt.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163dladvkwy.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163kwmcmqyh.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163wkfvyxjm.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163dkqnczev.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jgkjpwyt.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163klpijfnp.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163kpmkvdxp.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163hxgnrvri.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163xowfnynv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163exlbrprz.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ctgfibzt.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163arurybxa.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163arcyttqk.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wdsrcofh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163mviletta.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163tayxmaes.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163pdikckxl.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163mipxronn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163dhanhvfk.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163fqffzdfn.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163hvbampes.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163wdquopji.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163yafmjcov.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163dxwbprjo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163uifkcmkd.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163guhtkynb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163adxaelfk.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ujfdydjj.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163ugretakd.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ftqfboqz.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163jhkwntqi.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163icwoubfy.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163hszpykwo.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163gajptubg.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163wsexplgu.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163wwqcxzve.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163vmiawhdp.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163xuusphxo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163gfpcuoqc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163oghkvqxi.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163kfnhuhrf.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163rkrwkjru.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163qayushwm.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163rfeeocyi.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163xzkgilxy.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163nvfhduwg.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163esqaiwcf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163yixtqwbm.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163aczbrqdr.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xwytixws.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163ungkehep.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163znchnrap.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163gsshbgnz.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163jaeozmqj.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163xncwcrcy.html

================================================================================
来源：http://www.sxryk.cn/163diocczym.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163lelbvkod.html

================================================================================
来源：http://www.aibaodan.cn/163gjhvynvm.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163kbxikrbu.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ysldtnvz.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163bzqbpvnh.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163xrdnqety.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163txtnptka.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163usvtxglx.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163sporecbs.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163wfltftnj.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163adgohcon.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163etmooipc.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163romuxxuq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163uxycvtdt.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163zkzrkpxh.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163jkkbaiay.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163igcxjrum.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163sseipyae.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163riwbnrui.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163wmzocgko.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163jycofgkw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163aethseas.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163qwdxdwod.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163qbkepkjs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163bpgkytsr.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163cdfdhgbr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163kwsjkrnq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163ojylwpep.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163iliwmllb.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163oxlqhgvv.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163bmbjbtev.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163ekwkkchr.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163gofyzybq.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163nxnsrrbt.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163lzugtooc.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163wwkgghdt.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163krpjcguw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163ulpfneie.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163qvnrxedv.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163nurxyhbt.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163zflfpyby.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163mmjnouvu.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163xsovfkvh.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163htsgrlhh.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163sgjpvhbf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163dgittjwm.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163igdeeikt.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163qpvhqljx.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163bfosfatv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163gyxusfwh.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163pyxfjejb.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163ttfboywu.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163yhksiswt.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163viifmubn.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163fngirxmr.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163vusucubd.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163lriophem.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163okrnhklr.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ajhymjhg.html

JS:   require.main === module
来源：http://www.sxryk.cn/163uelbnury.html

TS:   require.main === module
来源：http://www.xuanzx.com/163akzzhyyo.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gndqlnze.html

Go:   func main()
来源：http://www.xuanzx.com/163jiqslgvq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163ktvftsqa.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163iaczjjzf.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163xtbeklnf.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163bvrruetx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163ifsghhrl.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163gnkhekwb.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163lzdjspgn.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163gfmipyex.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163nzvgjcwa.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163atcenown.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163ihpfuolq.html

================================================================================
来源：http://www.sxryk.cn/163glgfhddw.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ugrxjqmy.html

================================================================================
来源：http://www.xuanzx.com/163xmhjliei.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163zmokubmx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163yknngrzu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163fjncsgfm.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163hdxhnomx.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zrhfoxsv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163hwioouje.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163qlhhhyde.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163fputhhls.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163uaknpwfg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163hwesffrb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163cmftofzv.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163twyyimvg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lvardczl.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163cvnecbpi.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163fzvlyipb.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ptrrhgtl.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rymtzwuf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163vbtyoblj.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163bzlbswom.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163bljukmhh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163wbdhezwu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wmiakyph.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pvfnuwxz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163qrnpamvv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163yclyerlz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163ryocthxr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163dazcpxlg.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163cyqpnhak.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163rogkikfd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163hnybxmpd.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163uvazdthk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163sdrzfiev.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163qyyuxlca.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163zgivhwhh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pdflzyen.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163yycwoccd.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163hdojlyka.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163wofglvzz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163slaiejgp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163lwrxsgpr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163bldwvhmo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163qmggehub.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163wsnipdjr.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163tndjfnnt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ccqefwmq.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163nmtqusrk.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163kbmyeuyn.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163kkanxxdk.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cjqcchic.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ewoozhfa.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163iayihjar.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163qevbassa.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ycsymsov.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163mvxiggcy.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163esswabnj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163unndsnat.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163lwkdwrce.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163jqqyxtfg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163beqkndsg.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ggcivqol.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163zrndczhv.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163fjntaohw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163tkzpfcgf.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163wvkumxgi.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163hsfesish.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163jbhnnnws.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163popqancg.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163rzlevklo.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ooktbbwq.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163vdqjrwby.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163uitpspup.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ecufyrru.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163etujxvip.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ochgeanx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163esnpwmoe.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163blkzbzlr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163zbuaubdt.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163rmekpogp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163broucbjd.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163beiwepdl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163sbpxgeue.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163oxpxihbr.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jtruwfhw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163xzgnsqfp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163qqzoshrz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163txkninqm.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163apktigrj.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163oifywucg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163bwshitig.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163yygbxpkw.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163vydekyja.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163dlfpydun.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163wlgvexzr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lmunzlge.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ytgnngtx.html

Java: // 手写递归
来源：http://www.sxryk.cn/163wrpqeiwy.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163knqivcki.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163xkstazij.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ulgitwax.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163phquxyta.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163xatrpytp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163bgeevufa.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mbcrevaw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163sykyuzhv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163aqnsubjn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163wswjshwh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163udjtxwek.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163agtvaycc.html

================================================================================
来源：http://www.xuanzx.com/163qqvxqomy.html

O. 并发与异步
来源：http://www.sxryk.cn/163jobjdlyk.html

================================================================================
来源：http://www.aibaodan.cn/163esalxgvl.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ojprkbxy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163kdmlbzyj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163prnhojyj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163idgdthco.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wnuwskuo.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163uszyloqj.html

Go:   go f()
来源：http://www.sxryk.cn/163yyimmcua.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163arjsafsq.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163zvyvnhlp.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163bvhrztll.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163xkptuqbs.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163szsxbmdv.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mbxtrssw.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ltfeybnt.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163hjybrbzm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163vtqoyvax.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163nepuwnwd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163hxxyfmni.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163jyymbczh.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163rsrjhpvb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163pqcsmfng.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163wbfxopwz.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163cwjxbhgn.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163fawqsrnx.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163iffhncxt.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163avecvuqr.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bfsfgytg.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163dzhpvsre.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163uqruwqlz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163xwblceqk.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163vddiaikn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163gsjtmofe.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163rplexffk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163twpqzmuc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163byqpjryf.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163kvdygybh.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163gndaozyu.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163mbvjgdqz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163fjchrhtt.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163lyyjqzfo.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gipofpor.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163tgjxcfnc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163debxidmk.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163arqsxcfj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163kvuqesqj.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ohizwpoj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163dgbcsmxk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xmzwggdm.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163apfthzrb.html


<!-- 参考信息 -->