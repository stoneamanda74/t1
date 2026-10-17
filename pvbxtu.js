外链999!wailian999！

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163jmjhrrrc.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163xswspwev.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163oenphjew.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163dxvciput.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163qqpwosqb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163lxcitxcq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163gejhgzfe.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163qxeitgmw.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163xmffjrmr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163xmyjhkxq.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163aebtzcvx.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163ykrlsabm.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163etvlopts.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.sxryk.cn/163lizxefpf.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163fbochkfb.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163mxcrpfqj.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163dbvgpbmx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163nysecatx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163icfnukib.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163zqygnfzg.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163myfkboqj.html

[L04] 设置超时
来源：http://www.xuanzx.com/163yfbswekq.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163ntqlfqde.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163fcwmgjyi.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163upsusyyh.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163ccvpmlij.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163yuwlbrzt.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163mqyxlfsx.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163iowqfhyt.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163ulgwjkif.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163bsqsrjbr.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163nbaxpzbl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163egtfhcgr.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163ifiigpjl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163mdjrborb.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163ogepxvdb.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163doqfnexz.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163hpypnqyb.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163xtcaoder.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163swyqtivo.html

Py:   resp.json()
来源：http://www.xuanzx.com/163smwwjosx.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163fzsovopc.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163blbucnlb.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163suixxhmd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163bfskjabt.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163cqvljjhf.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163hoepwmpf.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163oawcnlbp.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163xlxslcpm.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163upvlwdee.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163yqlbvfvm.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vovrwewg.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163kvwffrkc.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163tbesqdcq.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163ljsyvspy.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163whwzymco.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163sgxvkjuz.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163jylcwbvz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163izldfcje.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163zwibybxe.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163pooixcho.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163xrvwdmfz.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163epvxqdbd.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163wnyplefn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163vgkmmojq.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163iybgwwih.html

================================================================================
来源：http://www.xuanzx.com/163ssgdotaa.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163gbeeomha.html

================================================================================
来源：http://www.xuanzx.com/163ulbztjqa.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163jmgrsvqs.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163zpiegufa.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163kmasoxyg.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163gcqstebe.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163kyewnslk.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163dlxyxcfu.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163bkzlhacu.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163teqcoyqa.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163hebenvrz.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vehiapfj.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163fkyjesuj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163izobtfxf.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163dpojtxgk.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163jaqjriuo.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163sfrxehqy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163olueibht.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163lgayxuwl.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163uljjlqpv.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163rsqjjwjf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163xlbovrux.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163fewvoldp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163eukrnqkd.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163pmcoqcdq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163bqddfrgt.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163uxuevklo.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163iteajqks.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163cpjdmkhx.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163xugikxvb.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163lqyciwbe.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163reuadlgj.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ylqrumue.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163arlzasaa.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163ihmnatud.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163xnzidfdm.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163wneaezbt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163qtdgoqyf.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163qahusmux.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163cxihnjae.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163oebkwhbk.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163nlbeshdb.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163fqcpcfzj.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163apewadaq.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163gyxpboyb.html

Ruby: exit 1
来源：http://www.xuanzx.com/163vkjdpkgv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163iudfnvzg.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163xqzulrec.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163quairzxm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163lwplenwq.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163bryxicjn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163viryduig.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163jbxvrmjf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163cprjklir.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163qeqxwbeg.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163wvyfizrb.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163cnhayqvb.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163mgbmeepd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163etfezfrj.html

JS:   require.main === module
来源：http://www.xuanzx.com/163yjzepznw.html

TS:   require.main === module
来源：http://www.xuanzx.com/163tbrwzhra.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163uvzikhgr.html

Go:   func main()
来源：http://www.sxryk.cn/163ctuejfnj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ijxvlojk.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163cjjzuxti.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163biltqgdb.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163tprwzmvr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163uwrrncxr.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ifwqrpuk.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xuigtmhm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ktpqemmu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163eyctqkai.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163wrxjydbw.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163dodwomvm.html

================================================================================
来源：http://www.sxryk.cn/163vhexxsif.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163rzwfzhcw.html

================================================================================
来源：http://www.sxryk.cn/163dekqklyw.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163lwawlmnu.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163erjnyqmx.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163apmpnlyd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163odplxang.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163qszsuaui.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ggxantka.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163tkothmpt.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163douiezwn.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163qdgomdwl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163hzckrqid.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zkvammtq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163kjrkovme.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163usayihdn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163oztcklbv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163qdvntuqt.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163dxvqijpm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vaoexjbf.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163mdyluwid.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163hsxhbxgb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163mvquxzsz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163zskwlvps.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ovuyapmj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163eiulfosi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163dkfuochw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ljoxrqkn.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163rwrpiido.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163tbytsszb.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163ckxskwoa.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163mzjdecid.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mppxgyhe.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163livwfihj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163phfqiinf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163tzwzrofn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163xcyqmzql.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163qovajfwg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163boukjjax.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163zrsoiaon.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163zubccjzp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163vgsrpjtk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163xzienxfs.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jydfzudi.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163zdtsbaph.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163vdvvfpkm.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163hsdpvead.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163iuuahxjs.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163hkcyyhwa.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163oknvqaeu.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163psgjwskl.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ybzlafry.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163tcpunavj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163tilueedq.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163jdnqtfca.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163fgejrvtv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163btacqrnb.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163qbnqsnji.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163jqdotmkp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163rkrssska.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163aonvyeid.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ggenylen.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163fhlepgoa.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163tnywkffx.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ijexbwff.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163lmbtfjhf.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163rfaaepfv.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163hvywzgwg.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163xoholzfj.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xuduxshm.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163keudscyz.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163vcdzubod.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163utvrdjmf.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ratkrpsv.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163aijklidn.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163wepuxazq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163npmariik.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163zkqgwevm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163aleyfive.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tguisrrr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ngsymosf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ikzqxkpq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163zotdthdp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163gasqfuvq.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163dtcgzdfp.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163alzybuau.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163mmmenpkz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163jfcwodct.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163xtpcxbsj.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163aogbujdb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163lhdenofs.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163thvtfvrs.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163amzxfrnt.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163wdfaoxob.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163wfjrfkrk.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163nycasyzb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163mwkmijjr.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163njpwgrcr.html

Java: // 手写递归
来源：http://www.xuanzx.com/163clughaya.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163xinmqadq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163bqvvsycu.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163lnguqxth.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163gdnxugek.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163uehoclgu.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163qyykbwjy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163oqhbhaph.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163sanlidmw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fdkzytrf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163eizlefzf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163grvskpkn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163juhaenzj.html

================================================================================
来源：http://www.sxryk.cn/163tcbopyzf.html

O. 并发与异步
来源：http://www.xuanzx.com/163xfixgldz.html

================================================================================
来源：http://www.aibaodan.cn/163kimazsyk.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163mpkcegzq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163qalibhss.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ogaodyhx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163tlswoeed.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vfqlrjns.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163wnhyrpcl.html

Go:   go f()
来源：http://www.sxryk.cn/163kajqbups.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vthmpfkm.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163vxoabsik.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163aclevbrs.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163nwjhmqtf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163dxwokull.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163cekkfcyz.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ikhlulcv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163eomgihms.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163wrldqpow.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163wnjxltsd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163aqpeitch.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163mszezqtt.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163qnwrwmxk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163dzlhyntq.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163cdgltoxn.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wkcyxopj.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163brndvzkw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163jptmrzjo.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163bxssiwao.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163oxbnfkwk.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163vubyxudo.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163kvlgiehm.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ycdukmer.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163aopeqoct.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163zbhagypw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163zotxhbeg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163bqtlsuls.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163rivaezje.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163pmuyfgaw.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ulwioqwh.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ntkeryew.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163bytimrth.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gvejemkd.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163rncmkxwg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ruunbrzo.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163oakprrtu.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163kqdtjanm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163msujajwo.html


<!-- 参考信息 -->