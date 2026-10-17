外链999!wailian999！

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163jbedkkqz.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163fkyzcmdu.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163dilptbbc.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163mysoggog.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163clcebcyr.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163usjvdiuc.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163ydcemuku.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gxkbhsne.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.sxryk.cn/163wewesohe.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163ijvsxkmi.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163rtxzudqb.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163gzwaqvzw.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ulcqsmpc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163xpiprghi.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163myiyihkp.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163jtmyrkhx.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163dsviwony.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163lmddcmsr.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163asowobth.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163qoqxazxz.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163ycrnzvgp.html

[L04] 设置超时
来源：http://www.xuanzx.com/163sgdlrkjm.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163ynqmdobf.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163yhisapia.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jpxpktjr.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163rfddozvj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163pxcamdav.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163arucxlmu.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163ubitcnui.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163flavmpoo.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163qahnrmol.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163xyegklyi.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163auavjaqr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163xkdwpeyh.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wiftjtse.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163igxtxtfj.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163afwvqudy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163rdzmmocp.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163jmdknulo.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163byjjxxqy.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163igcgxhyj.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163spzgdynu.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163rtqkkkrr.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163aweuwgqa.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163bjjwvwym.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163siylgyed.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163yndunvmz.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163hzqkfqnb.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163ynlwsoem.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163hifalfzc.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163frynezok.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163exgamlqu.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163jskmhype.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163psgzrjca.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163ubgctjou.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163triimizl.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163oijbbjlt.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163gzafdzkk.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163gigisxgf.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163msxaxzxb.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163gpwpshtv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163xblwcbai.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163decvdmnw.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163mgjtstqm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163koilukbv.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163udbxhndy.html

================================================================================
来源：http://www.aibaodan.cn/163rfzyvkdg.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163pffojggx.html

================================================================================
来源：http://www.xuanzx.com/163achprxyc.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163wkfqlszp.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163ixftnqpg.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163vmtnlvly.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163uiednsgv.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163nrbwbfvx.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163dqymiokz.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163ssclbxqy.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163pdmxurit.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163uiitzqdr.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163zulfrgtl.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163sawubskt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163qjqielms.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163njeqbcgh.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163fidojcov.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163atudzmkj.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163ffyfjdsq.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163fvfmsakf.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163cmzqpbxt.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163rxicjrpx.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ueqfqykh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163fkdkyjlk.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163uwxklhrg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163oxfgwthv.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163qcnreehr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163olblvldq.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163bcwjwdvl.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163xyndzcge.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163zqhjbzqm.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163zpowoufp.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163gpdefyvm.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163hepwrrth.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163zteobhec.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163gybdsrpx.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163yakcohea.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163auxswsqk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163bqcetrpp.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163smfpqtyq.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163maoxlpyi.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163yywxzvlk.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163qdxohapc.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163idhjbflm.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163gkggjivb.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163xxkirefy.html

Ruby: exit 1
来源：http://www.sxryk.cn/163jkjcvovg.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163lzqqjmyk.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163verzzqox.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fodnwfgf.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163rwyfouwr.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163dkwdaabs.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163opkhtrtf.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163bxadhiww.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163vssfxdko.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163kbtgvffa.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163gcwmvjuy.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163gwneqnxu.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163hdkxzfhn.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163tadaumiu.html

JS:   require.main === module
来源：http://www.sxryk.cn/163idgaddzj.html

TS:   require.main === module
来源：http://www.xuanzx.com/163aejutfsy.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ceendtrw.html

Go:   func main()
来源：http://www.xuanzx.com/163hmpboqic.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163cxgprhph.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163msbrdexb.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163hoizdyem.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163yojventh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163qczlpgpk.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163mlriwnmt.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163blyhlpie.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163tdneucys.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163hhvyfagi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163xjjprzbs.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163wdedwiud.html

================================================================================
来源：http://www.xuanzx.com/163oxhovbwr.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163dfehtuhq.html

================================================================================
来源：http://www.xuanzx.com/163zbesgclu.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163njhiyqgx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163isauelbd.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ermnxkff.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nxjdvfqs.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163buvhekrt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163ifoxjccb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163kcpyvnsk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163pjajdzsw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163jfruyife.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163bdyzvtli.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163xmwlzsby.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163hmynqfqz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fespchip.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163yzytnqeq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163dbvmazoz.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163xtxfuaze.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dcmuhonr.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ddmuuayi.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163yboeviin.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163csuvltrh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163msvfhosd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yosmxprc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163jiobqfaw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163nusjzvwb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163lurozufi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163smwuievm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163crcaymat.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163wakeozlk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163mrkmnzfr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163qrcflhcz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163yeglmhjx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gvgalyif.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163opalibmf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163kpogkwze.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ipygtzma.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163povsflnn.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163kjfdvbpk.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163hkmwdwdc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163jerjttly.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163juxgucet.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163chbkhksu.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163dzwgzdaf.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163xekswblk.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ynzlsbkw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163bbfhknaz.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163gptsiswn.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163davreytr.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163axxhjvkh.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mcuchgzm.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xbibmtum.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163izimnbup.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163eabilkrc.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163oculknus.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wufjnuti.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163gzmfghpp.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163nmgatunw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163tgpudsou.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163xcczgafg.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163evymimbo.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163hihqqapr.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163mwlapepy.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163aqdgeqgw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163legkiucw.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163mgmhcwdh.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163pyovawmj.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163hbsbjesc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163fsvctwgy.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lbeukciq.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163sysnxuom.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163fucxjkux.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163cxlbqgpr.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163fiisatmr.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163xaqzmixm.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ybjgcysi.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163iheofuln.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mpxtbbcq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163dgcjgpgp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163wdvscddc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163bwjnsazx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163mrjgzgem.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163bwwwldmo.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163iuooabah.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163jphxtfml.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163njivorrb.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163dgnhohld.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163czhzdxju.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163pdadeyqz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163bptrloet.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163xlxqjnwy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163aipzkqmg.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163ywexhuqz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ohoslzra.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163cblexnpw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163pndqtrgs.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163aflvojbh.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ucykaykq.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163bxuahpcy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163wfwrguig.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163btruhxev.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163zetcdsdm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163bjybdcqq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163bzyrjasi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xdwnvdsl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163usvgxvym.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ybnxmaqj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163skpegnpo.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163nrtylvun.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vsuvbgup.html

================================================================================
来源：http://www.xuanzx.com/163mxwytoho.html

O. 并发与异步
来源：http://www.aibaodan.cn/163tlpzaklk.html

================================================================================
来源：http://www.sxryk.cn/163iofvpngw.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ykueuwxj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163qmlzysal.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ckzdpyam.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ickhpuzl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rfmvrnxl.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163pttteymf.html

Go:   go f()
来源：http://www.aibaodan.cn/163powzgrvx.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163kmbtwksq.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163dpqbgqiy.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163bhzjouwb.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163hrktkyfz.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163xksykyox.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nsrzehxv.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qtjommvh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163zksaqqfy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gtgtajvz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163yhvpkrwr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163inyvttgl.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ycayexgp.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163bqnrsegf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ujudipjw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ztylnasz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163jcbdtrjj.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163pdgkjuon.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163qitmledy.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163dkgtoxop.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ltfiyncb.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163pviicrlz.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163rkplpdiv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163qkyknpcf.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163bcvyzcxv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163bwxdzoxx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163dndhoyns.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163xypnwtli.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163sitwpokz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163drblibne.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163uspotszx.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163isqskuhe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163uobvbstr.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163cverbwqa.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bwunjqoo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163shjmmrvo.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163tsrcydwg.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163rzkzstwm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ndaxezmv.html


<!-- 参考信息 -->