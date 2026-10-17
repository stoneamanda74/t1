外链999!wailian999！

L. 网络请求
来源：http://www.sxryk.cn/163meegqmcu.html

================================================================================
来源：http://www.sxryk.cn/163ybbxpowj.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163dyswsshl.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163oshuxzle.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163efimcvry.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163wspvsgkf.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163ydhgjavm.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163naxnynjp.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163qjsgphwf.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163lufxfhtp.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163cqqsjsik.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163pnjmdswu.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163ozjyfrvb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163pvyfdgoq.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163zrvcluxo.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163sfxqzkry.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163thukonqu.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.xuanzx.com/163tlijzahd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163rsemgjhw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163hthwsxab.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163bjszbcwc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.xuanzx.com/163ognoicus.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.aibaodan.cn/163wdqhxoap.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lmdemfoa.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163vzyrvyfk.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163vykrjodl.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163bwakvugy.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.sxryk.cn/163xqniskrn.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163xzifinbd.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163ncfeikmt.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163sehvjhet.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163egwflggg.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163jtuqgnih.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163phihqvan.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163cewveinb.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163ehyohaza.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163gbgsglgw.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163uindqrlq.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163aejlhjtb.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163jrwvxyej.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163dvfhbdva.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163sdmejlzl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163vffwpfeg.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163bzqdiyxt.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163rhecebkd.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163evkfiwst.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163mmxalpga.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163jckrlzqf.html

Py:   resp.json()
来源：http://www.sxryk.cn/163ndaqvwyq.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163pdqpvtpf.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163nnumrfel.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163ymcpqggk.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.aibaodan.cn/163fxplrkfi.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ilrtgpat.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163moemdrst.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163xkkqmyoh.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163hpcivpob.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163qgkueavd.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163tjujgcpv.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163enkwbjty.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163ffhyupcj.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163grrvgszu.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163lbgswxuv.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163kuqpqxlz.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163jibsbbmq.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163upuwdmnz.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163vligjwky.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163nxgybhoq.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163jegxtfhv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163cneorngs.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163xcvaxuid.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163viohuozm.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163jfvmafvn.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163thsqbaid.html

================================================================================
来源：http://www.xuanzx.com/163beszmukn.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163jacvnbbj.html

================================================================================
来源：http://www.sxryk.cn/163bhtqkmie.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163tdvsnnrw.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163lhlpvwvu.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163ocuhtrud.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qbhybjht.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163bwtxhbxb.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163ubbundan.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163gvrurknm.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163igvktwxd.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163rtwgluwb.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163gtovytnh.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jfcbqedz.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163jfkoaamr.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163ioyjridj.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163jhdrlxci.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163lzgqueiz.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163lrcfvtaj.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163scsazerb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163megooduk.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163tjsuvnsi.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163ptnhfhmy.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163bdetwgju.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163vwbquffs.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163chcgbjye.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163dskfcqyu.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163yptqpcrp.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163ghbgzhlv.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163jlsdrmjh.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163epobkyba.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163uasfzkvw.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ysfqfxzs.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163vdgzkyrm.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163goaikkoi.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163kmobdgvt.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ugiraaen.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163raipccfp.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163gwppseai.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163vbvclwbg.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163vagvzjzc.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163vaxofcov.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ktzmvfdx.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163uilxhfkn.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163qsnqgmvy.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163cthlhnht.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163gcpvvwfx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163xhjtuect.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163ezkoxtce.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163iramdvih.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ltdgaltu.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163gertbapg.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163znporjlb.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163phvljobn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163qznzfuge.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163llkzdlsz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163mhgfrlku.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163syveexet.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163qnysbyzd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ioykrhpv.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jcdhauhy.html

TS:   require.main === module
来源：http://www.sxryk.cn/163kgjhlnej.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163hkjggxyf.html

Go:   func main()
来源：http://www.sxryk.cn/163idwbmwne.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163qlndutbd.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163kiababpl.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163fjattfwh.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jnttaswp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163wvctvagv.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163vkjfcohd.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163pvcbtfwa.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163srxlqanu.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163rauavldk.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163gbxfopyy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163dihepmin.html

================================================================================
来源：http://www.sxryk.cn/163lxwqsbhf.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163uodmcref.html

================================================================================
来源：http://www.xuanzx.com/163xktkcgod.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163mysouvvr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163yatieihj.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163honxqqje.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mjydguph.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163nctwbfbf.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rvvjcbra.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ocuazunh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163gkfkoumu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163saqfbtrn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163diwtdrvu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ctqalhaz.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163nvaxhlnz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jaxuswkr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rbumxuvh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163wgkwniqf.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163nefvdmtt.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163odwpnvtu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163adquapac.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ctowpjfx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163rabdtvvz.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163slrxmtxa.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163dqigflbh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qthzukps.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163lokmzvua.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163upytcfvu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163rvdychoe.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163sjwrjnpf.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163tfglghkm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163giplzafq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163zjimlpsi.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163kjhyageo.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163vfisieri.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163leemhjds.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163bhuvniuf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163abqgvqsk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163auetpkye.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163qyxnzuwb.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163onhznwlt.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163lrpfebyu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163vyqvtovl.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gzhfuycn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163gnrbswlv.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163syotkzxj.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ypicmkny.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163aaoylbpz.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163iuuzkgoe.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163mpdtbkag.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163nbelpset.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zttffiqi.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wfzfyqzh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ocxmqiyr.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163yvaozrhc.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ztfzlsoj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163odrlxxyz.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163hrzwuhfs.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163zlrstebq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ggngatmj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163bhqoltdj.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163xakcgima.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ztjysujn.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163yoitwhxb.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163gmsfbpxi.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163yoqmkjix.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163zqjvqjns.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163sibaklzx.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163atzcpjck.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bkhzuqrh.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163thezrwur.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ixfpwfrh.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163blzrsvwv.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163jyywbjiv.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163acimvtwr.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wispnuiq.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163cenxmzgx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ruptynds.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163bbxlvjvt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163nmgcwnpn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163gxqhtdit.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163gitweagy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163lxubzzda.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ehxoayit.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163dyeshscz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163waqwldqm.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163efshxqgc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163qqdcykku.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163gpzbsceb.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163msatexmz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163mawrmviu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163hfjlbysx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163bhigzvmj.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163frdnvvzk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163gsixpyej.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163zmgpkbxe.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163wcdhizzn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gtstavrc.html

Java: // 手写递归
来源：http://www.sxryk.cn/163eauckcbo.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163aeynxfxk.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163nlijxrww.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163sgqosutn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163lmlokeuc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163lclvdeao.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163aqaaxjag.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163txwwzeqr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163mepggjyw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nicomwbz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163fihyqhls.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163aysevhvu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163icsgkhmp.html

================================================================================
来源：http://www.xuanzx.com/163ltulitge.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ootxgmfc.html

================================================================================
来源：http://www.sxryk.cn/163hzxcnpic.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163lxicjnkv.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ipynfnmj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ldtvitas.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163xuiuygjk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163agzmmuvs.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163hisosenq.html

Go:   go f()
来源：http://www.sxryk.cn/163uyctfqta.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163vzzgbknk.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163clttsabn.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163szcrrfkh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163dbegpbfn.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ozoozfhs.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163uzwirbho.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zottdnsv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ohukqjvg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gsmhwlby.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163wepfsysc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163lgbalzji.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163mhfvbbda.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163gzcciiil.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163qbfzdlqt.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163gkuunvlg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163epstcnjg.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163vtzzeydu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163vufidoka.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163hcdwlfyo.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163agefuiox.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163gegyczcc.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ittncyyx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163mvmlmubs.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ecpvsgpg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163xgpzcfhp.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ugrrqusd.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163gwcofdhl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163mvocpjos.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163wydlakak.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163xqgyadrv.html


<!-- 参考信息 -->