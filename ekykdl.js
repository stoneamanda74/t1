外链999!wailian999！

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163uteentzj.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163wngutqcx.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163ovimfpoe.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163gdpdhclf.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163skcigcjd.html

[L04] 设置超时
来源：http://www.xuanzx.com/163kchawhpo.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163mfkzyiht.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163duumdrbm.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gymkdylt.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163pdpdgglj.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163apuuanku.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163zprildxa.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163fvnxnrvg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163qlerpqek.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ohemmjfz.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163oxyxifau.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163ltcsfzqd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163qnjcgbgc.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163qgiebdnd.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163bjwnhqrg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.aibaodan.cn/163kbovuceq.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163jccvzzie.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.aibaodan.cn/163zdrghdef.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163agwijabx.html

Py:   resp.json()
来源：http://www.xuanzx.com/163lhwvafvl.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163fsskvwxn.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163jaudyowh.html

TS:   await resp.json()
来源：http://www.sxryk.cn/163ckffopuh.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163bxtqmffx.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163swmnhqof.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163ywakfxxa.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163fahgszcn.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163kdkfvall.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163aostkzkw.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163lqkchjxm.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163oazwpgac.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163esykrjsr.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163mjffopjr.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163asejzkgu.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163bsrjwuxa.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163uocqazfr.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163wecnqzrd.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163wxsgpcoz.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163ajrajxex.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163alolqjvo.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163saivhavy.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163nrdjyqis.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ylgdmhhq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163zpzaadyw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163xhfoodav.html

================================================================================
来源：http://www.sxryk.cn/163boodkhva.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163aninjjxh.html

================================================================================
来源：http://www.xuanzx.com/163ylbewkal.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163nftcfhnf.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163wkxmkghf.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163vmywoton.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163alesglhc.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163fznpmfkr.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163xbkqcxbv.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163vyaqhtww.html

Ruby: ARGV
来源：http://www.xuanzx.com/163nmsvtazy.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163wtapidqu.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163qyopnmof.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ugwzuzkp.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163ulrjvzcb.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163pdizbphb.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163ygxrmpht.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163euhkbwzg.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163rbvoyxcm.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163yhfxucfp.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163infwymvo.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163bvnwabel.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163hegopale.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163tmddxlyl.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163nxlznczi.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163enfprrsl.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163northtxw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163xkominki.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163pfqieeit.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163ayergjtl.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163wlmcbrpi.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163akwplsqt.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163uiyamsyf.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163mksiekuz.html

TS:   process.cwd()
来源：http://www.aibaodan.cn/163bqakfnmb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163quzgxrah.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163dzbljbtt.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163hwkbnhvt.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163rxlspyyz.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163ctzylpnv.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163xjgbaqxf.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163apcwoytr.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163cmezjmej.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163ybvwuigv.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163lkaxcboe.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163ptuwhnzu.html

Ruby: exit 1
来源：http://www.xuanzx.com/163bcdzulad.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163bomkapdl.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163iauvvcly.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qsncktbj.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163yekoqkyi.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163gybnwzng.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163olrqdqrc.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163nacjqrbq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163gvyvugpl.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163rpigdful.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163zprwqhdg.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163xlxmxfsu.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163ofppaeeb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163lrjxjayk.html

JS:   require.main === module
来源：http://www.xuanzx.com/163lvajomgy.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163tqeckwcn.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163abxmuuto.html

Go:   func main()
来源：http://www.xuanzx.com/163pirjvtcd.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163ctzjjadk.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163gzhsyayx.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163geighiya.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163wgzyvekn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163dmwwqyqw.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ckfohkot.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rzyunsso.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ywnacajm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163uauahnsi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163axrrvdem.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163onbovqkk.html

================================================================================
来源：http://www.xuanzx.com/163ihfyhbqi.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163llrexspe.html

================================================================================
来源：http://www.sxryk.cn/163bncnccoa.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163hnmdzjny.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163yizirxux.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163qwduemaf.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lrieoatw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163uvahlraa.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163qlwhutgh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163ydmrhfky.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163foujnhqv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163fksbfoeq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163pzptemtr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xkdzinzt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163iueygowz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hoqsnasg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163jtyztcfw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163wzuoqmrv.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163lntjqtxq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163yohwyoty.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163mpvaynro.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163wwmqzxst.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163hukuefgo.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163xhaxcjkr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ntknisth.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163drwjyypw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163opgtdsrz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163zztafrmk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163uaurnrsp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163qhoqsfes.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163hrvbltzg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lodxqhtb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163spxcghbj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163uiltwtnf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wepnlogi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163jfbyuajm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163yhwbimlj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163oshawvoi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163disijgif.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163gnoebawi.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163qqentghj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163rtkwedfp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163dhmwlyif.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jytpsevs.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163gkomwhzs.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163khqhssry.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163kejocieo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163posruplx.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163zduktqfj.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163cwzreeah.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163wrakxxrl.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wyfsubra.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163oeomyxzh.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163caanvdyj.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163vgmaxzfh.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163qeikqoym.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fyclcenx.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163pnlvldzz.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163drcgogwc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163lkqucmbs.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163bojuccny.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163umdswiss.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163dvoviryl.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163btirhdvm.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163kwfekwkp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163dloisutn.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163phjfnmqi.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ximcrukg.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163kqggefwx.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ggoidflm.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163dsdozydo.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qgqyjetc.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163cicxdomb.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163uvomgvvb.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vmxyyilg.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163nygtikna.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163mlnhhtef.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163gxllmznb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163rkxpecjm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163htgmlcnu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163ugjhzhjb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ksvqqhnx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163dsmmbhyd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163rzhrgzbb.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163gjsutjdq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163vfyxltfk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163rrmlivfh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163cjqscrbw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ivlbnjdu.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163rsekmhtu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163hefbitln.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ofqdlulj.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163veiehfeo.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163krkjzmky.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163bamyqpqa.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163vnmrgjbb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163cgrlvcgh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163omoqakgb.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163oxyvxyne.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ofrphvdv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163yqgkcgpp.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163jfzgghvc.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163wlszqhwj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163eqbhszxh.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163xubogmlb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163naplamub.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ibjxooxz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rejuxtdt.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163fhdhmqbo.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163vnegkqvp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gbvongkq.html

================================================================================
来源：http://www.sxryk.cn/163zezzewgq.html

O. 并发与异步
来源：http://www.xuanzx.com/163qhcmxnhi.html

================================================================================
来源：http://www.aibaodan.cn/163gqxtubbk.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163yfpxupvm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163hrrihnpj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163aoffndjh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163svxavgfz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wmkammef.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163gnwlsgwu.html

Go:   go f()
来源：http://www.sxryk.cn/163qibsxdiw.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163vficohbn.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163oanxlixc.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163jlppobvy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163dtneyqyt.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163mdmjfozp.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163cyjmhyvk.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nquvjgqo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ateslecq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163mgjcqnvd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163unoejhcy.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163fjpwhguu.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163tswxqdrm.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163mimtxufj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163trmltydn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163esnavkof.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163syqqycnv.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163blcfmahb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163iayiejii.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163qamacujf.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163tuclbcwz.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163qwcxigva.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ienvwnfs.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163vrycwtsi.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163cukdzrke.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163tfwjuqat.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163sryumrxm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163judjxlws.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163udacgjrk.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163wcxyrxps.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163iemndwrs.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163zfrqhtin.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163rhncshzz.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163iukofxvr.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wurzyzdl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163twqtprjd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163zrhekrlp.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163bagurdbx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163knprdwhb.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163vfwphjoi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163mfwnnfpr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163vttpifxo.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163yprrvdff.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163owvrjzul.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163bojpwzia.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163obghgrup.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163htdtpjke.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163xmqvfhgs.html

================================================================================
来源：http://www.sxryk.cn/163qbnggiyq.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163anilfpzu.html

================================================================================
来源：http://www.sxryk.cn/163itcwxbjd.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163sciqrycz.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163axytjsxz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163rtkyibqn.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zevgneij.html


<!-- 参考信息 -->