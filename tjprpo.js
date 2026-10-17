外链999!wailian999！

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ajfazoko.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163brmlzfzz.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163chjpiibj.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163volbudoi.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163gjnnzfdn.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163ppnukqep.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163wjsioujs.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163epqranzn.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163czgervmc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163bjjsmrsi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163hyrapuwv.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163ypdskdpf.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163awfquoxj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163qtoqcvyg.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163nkivmrrm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163nhdoeuse.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163eoctggih.html

[L04] 设置超时
来源：http://www.sxryk.cn/163nkejoicg.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163rrzhtkcr.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163xdvdeeps.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163uqehmfhh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163rwajojyp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163qojuvhhi.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163fwcrgwnp.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163edjtbfcu.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163vwijicic.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163yxtqcpzh.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163tksuvcrq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163dftgzyzu.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163xiztxhwo.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ahjhhory.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163qezpycrn.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163exjoqzxr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163kpoyofgf.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163lcrovkeu.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163jqzdygbb.html

Py:   resp.json()
来源：http://www.xuanzx.com/163qiuisacv.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163ylllocdi.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163lptbpoai.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163hnvvfwne.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163glofiswk.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163tybveyed.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163uvxzghyl.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163uavoqcgw.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163juhupqlg.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163yvcrqhwz.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163dmkxjxzk.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ekabizzt.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ckdtknhm.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163qubnroxn.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163caoafwug.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163righjpsr.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xunjbmyv.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163bemxxdya.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163kmnagbmb.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163zhewjaus.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163dayihdls.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163gqniftvs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163wyxqudev.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163aiaohkqh.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163mfnenmjv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163rvgufepk.html

================================================================================
来源：http://www.aibaodan.cn/163olufmbxt.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163btusreci.html

================================================================================
来源：http://www.aibaodan.cn/163wrvzlnzb.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163rzlhhdki.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163dxhnduod.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163bvtlbnvy.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163kyiutpyy.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163uxypexaf.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163xvvzlizu.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163kdzfahpk.html

Ruby: ARGV
来源：http://www.sxryk.cn/163rqiluhvt.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163xxdbtguk.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163bsfycyth.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163pbjikasm.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163gbctrxwy.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163ngtmrlam.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163gyusxxmg.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163glqvbehx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163gnlklqpl.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163mxtleuov.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163tvnjuhzs.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163bliabuet.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163imrtexra.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163fsvmknpn.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163iudghega.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163csuhicvl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163szpnmshu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163fqehsmjc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163vombvcrm.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ucoennan.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163wwvpqcyp.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163zmpgakxm.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163loboacgt.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163gjgyxjml.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163slkieeet.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163lobuhdgv.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163wwgznyco.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163lrdwnppk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163wioyvonl.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163kxtcnxbn.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163rdhcihzf.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163xmdblbvd.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163aetpmtko.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163qofbhwzi.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163mayseely.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ybnzxwxx.html

Ruby: exit 1
来源：http://www.xuanzx.com/163qkfnqmtv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163hrsygsij.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163chauqvse.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163tztecrmz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163fqmolxno.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163osucaztb.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163wegzieaa.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163reqtiydk.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163xewhgixf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163cfwoqauz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163wmqfjeps.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163fnhqcfbt.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ayldxgtn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163owfmawmx.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163jilpcltg.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163vnruhfvs.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163vuwwwapp.html

Go:   func main()
来源：http://www.sxryk.cn/163zshbczdc.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163sqehyqxt.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163lqqfaaby.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ilwocteq.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163aemjyhnn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ghzmlyuo.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163whwkikod.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xpyxbwyj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163uofkasch.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163bksputjt.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163objrwcpl.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163yvlzfwta.html

================================================================================
来源：http://www.xuanzx.com/163dbndlcst.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163laxqhaen.html

================================================================================
来源：http://www.xuanzx.com/163najcdrxl.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163vgkvxhia.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163brkhtaje.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163ebfplftz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nmdzaero.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163faldgxtd.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163cdnlzgmr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163etksovol.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163iovvgruy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163mufebnsd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163pvtgffvu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kbsfatpl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ltylpsul.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163irpngwnr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163axhyiudl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163kcrkdxui.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163iaxhsier.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ypzckzpy.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163andcvolc.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163kebntwfk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163wxpxowla.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163raxzjoet.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163gycncbrx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bmcedwhe.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163vapeeejf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163tlggzvno.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163fswruevt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163mkslwvxq.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163mbpxlvxm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163nfomvhpr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163utxzcvmj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163aoacpnek.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163crbkyshs.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163vokbvocb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jhhwarwl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bjrfnkyp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163vadxukna.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163oehfapex.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163shhorddj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163hybjzypl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xahrdweq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qekzddfx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163rvhcmtbs.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163wiqbjgqq.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163dujxcrwc.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163sdjbbomy.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163crtuxvxy.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163hgqvpfmu.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163zxjjrjkj.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kfpmrptv.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lnyqnlnz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163kyptxmmk.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ghlzvqit.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163sorlumpu.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163idnaabvh.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hyeiqsot.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163mbwgidfd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163qcnrewrs.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163fzgcqusw.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163emvilkod.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163kepmeupn.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163naunmncb.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163usofdvmo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163lzbelzey.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163clmviros.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163bodndrwg.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163eubknzhx.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163houfdrfm.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fxmsoevc.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163oifcmmll.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ekjlpqrw.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163xhrfsvms.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163eytnfnis.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163pitzsoez.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163tpuvucem.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ysbzkstr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163dtiorvbw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163xbhhjywm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163nywgocax.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163mkydmiac.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163vacrjraa.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163wfmkchhc.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163yxzfrvge.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jaxrvkau.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163nkbrmkey.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wvvbduck.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163gjeabkpf.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163hqeaahbb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163lgttamow.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163doxdcemp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163rwlmfztm.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163xabczkhh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163gspelvxt.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163knmxzhog.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zknedikm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163wmbmjlpd.html

Java: // 手写递归
来源：http://www.xuanzx.com/163ftlauhnu.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163scbttlxg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163oddiafnw.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163rhdfoeue.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163gbcaqmsc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163nwbqhlph.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163kdjiwren.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fbvfwwvx.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bowgxhph.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163oyvywxbb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163yqnioflf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163glcapdtt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163legniaol.html

================================================================================
来源：http://www.aibaodan.cn/163cygushrd.html

O. 并发与异步
来源：http://www.sxryk.cn/163uvrwmqqf.html

================================================================================
来源：http://www.xuanzx.com/163uaulwoos.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xzwmpskv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163hyecucbq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163xarrcsax.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ycpcbksc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vffqqnkr.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ynmzvptm.html

Go:   go f()
来源：http://www.aibaodan.cn/163nnbwkant.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163obdajszb.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163tgmgzqho.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163qwxwsbtq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163nysovwrd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163wpilqybz.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163itgjowue.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dgrucxgu.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163zvrcoijy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163qjhpaylo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163ktvsdfrk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ikusldvs.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163rzhbznvz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163gicptqmz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163qkdrlsgi.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163zqejarqn.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xtbqpaae.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163jeubjjdy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163lzwvrrlk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163mztnvepv.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163swwcicff.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163stwmzgrr.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163wwsetciq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jzceemze.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163qmvjykgj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163okqstfwg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163spfpzxnv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163rycyvxdz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163sgrbdgzq.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ruivefnc.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163pivywojq.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163cglxyugo.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163pqbseflz.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163msgjufph.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163jxbdvhfp.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163cugttlzj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163nthakhac.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163rlijadok.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163jnaoxbuh.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163ltimnnpk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163mkdqebqm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163gjmjfxue.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fzlsofdk.html


<!-- 参考信息 -->