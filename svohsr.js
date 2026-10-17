外链999!wailian999！

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.xuanzx.com/163trhtivwx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163bounsivh.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.sxryk.cn/163soevbggj.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.aibaodan.cn/163tyanjebh.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163jrtydsob.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163toluckks.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163dnymsbdl.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163ecnzhytm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jeupoumd.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163ephfxsvl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.aibaodan.cn/163adxhqqoc.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163qcvatxvm.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163xacennfa.html

[L04] 设置超时
来源：http://www.xuanzx.com/163srigkqca.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wkkaamzd.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163opyltitb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163sqhxcdoo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163dunlnrbh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163tibylwml.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.aibaodan.cn/163cbuqimma.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163cxowimkk.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163jxuwhneb.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163foorihlp.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163xozjpbux.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163haenjreb.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163hzmodpls.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163etdaglup.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163tdalhmgq.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163exwcofah.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163sezitfcw.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163civqxgmv.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163xjvzfaty.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163dvzgqwyr.html

PHP:  json_decode($body, true);
来源：http://www.xuanzx.com/163sgigdhez.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163mujuxbie.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163azzwtfbf.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163vkvlaewa.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163hdgkjwcw.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ugniizup.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163zjsuvlye.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163uyqpyndc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163qbdamaun.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163pjyuzskz.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163iuapjbgw.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163ehqpyjoc.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163ucykxfms.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163htsiwifb.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163bzhrjfpy.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163agcwrklo.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163sdohdwzq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163gcsjbcaz.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163wshfieez.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163yhuttgzg.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163pxpwzbdp.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ywtfieqs.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163yjkimbkc.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163cxblmljl.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163kiawsmms.html

================================================================================
来源：http://www.aibaodan.cn/163gllmdnaq.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ruwgdqyx.html

================================================================================
来源：http://www.sxryk.cn/163hafpqzcw.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163hpayupok.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163yaagqymr.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163drlymbaa.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163eszbxfhs.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163fgbsxehd.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163oopswogl.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163rxmrlumi.html

Ruby: ARGV
来源：http://www.sxryk.cn/163funewdlk.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163kkrmirrz.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163vkqnzxtz.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163zozkooft.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163zxakaoee.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163dupbzvjj.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163qmfaitbn.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163kjpxghbx.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163gwmfgtob.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163keyvxiiq.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163ttohmqqz.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163apgiitvc.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fbzftgvr.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163tnensyen.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ntgedhlb.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163lkuvmhgk.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163cpvhffzk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163qhlwiqcd.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163xbcxbuoc.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163ibcuuzpp.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163xqkdpzlo.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163jbgsasko.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163naktuwue.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163jhthbvjl.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163ozpxfvud.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163frgbzbqw.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163gfqkfzdj.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163rhvrjspf.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163vnanpovr.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163blxlwtds.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163xmlluwyf.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163qzqiwfum.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163twapkkpt.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163llwyzijm.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ssbxlwwq.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163hzalzixd.html

Ruby: exit 1
来源：http://www.xuanzx.com/163xikromou.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163lzzlcrlb.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163rrwzhjfy.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163rawiyduy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163gjldrnny.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ocdrdjwd.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163zwplectk.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163hdrfojme.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163hjxanvhz.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163chhselwp.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163ylabosls.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xllhpqve.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163lyxwwoge.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ocjcieuv.html

JS:   require.main === module
来源：http://www.xuanzx.com/163iifpwtdi.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163erwtvwdw.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163bqiovpvh.html

Go:   func main()
来源：http://www.sxryk.cn/163wmfkzqvh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163bwnppyml.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163utriazea.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163xboclmjt.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163ujuyxcou.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163yggbcslo.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163hlwxwgdm.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wfiezzkc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163vscwmaob.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163wrgcssvq.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163mgkswewv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163dmkezvqw.html

================================================================================
来源：http://www.aibaodan.cn/163efeqiaus.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163pjkvtbie.html

================================================================================
来源：http://www.xuanzx.com/163racgahbc.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163dmssndvk.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163kcwlqaxa.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163xsahobpq.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163foxspapj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jhkvasey.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163opwpqxuk.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163yycqefol.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163sotbqitl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ufwccztv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163mzdcmtkq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rsetcnmn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163kzbeijmr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163cmfbfdjv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163nguxnaac.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163esqbfhng.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163vyqislhf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ynqmxwjg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163yjetiigo.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163pyovbgvz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qilfvifu.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163xanvozre.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ecxxbboh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zguozffc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163duurkwvi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163jwzazklw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163rritzkiu.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163psuuyzou.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163iicglevy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163nicobkmr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163blpnbsuq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xgqpamdo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163rexczrfx.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163qxlkcrnc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163hrtwpuia.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163txcbxrsx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163weiairut.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163xtqmopoq.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163irehoahi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163wsphmeye.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163wcilzqdw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hmpkgato.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163gavmuycd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ccnwmdla.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163xuwanlru.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163mnnqtzou.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163fdxcjhkt.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163pceechge.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163iyetiusd.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163emlfswvk.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163aoryrrdp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163opjvqbki.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163dilakbiy.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163uluqcvqv.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qfdzzvwi.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163lhgafqnt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163hhbuwnwx.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163wjrhwqbp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163mxbrlgpo.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163qeqdtwze.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163wvjuisjp.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163whbmvqba.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163tjwesvef.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163aanqyfxx.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163gqcqweth.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163yaufjzfc.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163pfffelnj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vulafjlv.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163abjraadf.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163aocfkyve.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163evachalx.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ybxtwyrk.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rrcdnwzw.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ffalwjfx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163ggvucvjd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163yveazmor.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163oqxzryfa.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163njifajql.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163bxwowlzz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163lvuvbclh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163dnqdcmex.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163tqvftsbs.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163cctkktxm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163niymmbkt.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163svjaazqp.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163lvdjmgtq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163odeiruyd.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163roenxuqn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163efxjefbj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163sesamabo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163kbgqxdxl.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163nijhioxz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163pvxvucgf.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163kjnsbwle.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163vlovuyqh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163sxlzzhul.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163dwbhitny.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163zsoogthj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163olribyok.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163cjcgcquv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163qtfzsfds.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163gnnbepsv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163nhclherq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ialvtwqe.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qnzyjdax.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163lofjztzt.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163iwlcxzvl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163qwiaiwfo.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hsluevao.html

================================================================================
来源：http://www.sxryk.cn/163aqzkvtmh.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ykchfzbb.html

================================================================================
来源：http://www.xuanzx.com/163emjnhvmm.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163utlgazxc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163kmjjsnla.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ultfptwf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163jfzblwbm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nnlyfmrh.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163brwhchdg.html

Go:   go f()
来源：http://www.sxryk.cn/163ssdjzvok.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163gsvotsez.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163cdgwdhec.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163pvkaiaie.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163atxrqvda.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163rndtxdfx.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163kgtivoap.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163iowznuqh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163noinyolq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163eokqnihq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163hnkgmpwb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163srnbvidf.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163oeyjmowo.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163vquuzfws.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163mccgaoda.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163oxevlmub.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163diyzgbau.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163txwpvhog.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163tvbkbwkn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163jlejdsqa.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163mhmytmff.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163iiofmady.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163dgkphuil.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163bpelmtbg.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163qebcsjve.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163vcpfocjc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163twwwobcy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163elfeusgj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163eqsfrrpf.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163yfbvjgeh.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163yzzqawfw.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163xlrpkpkg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163hzcmjsfu.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xhzwtcia.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163heimfdae.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163jtlrwxtg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163tvobqyxn.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163impdepzw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ljyvvxns.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163carlqymb.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ikfbbjwq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163xnwirszk.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163khuxgotv.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ibilirzj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163foluovnj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ymlsonbf.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163xijrbawe.html


<!-- 参考信息 -->