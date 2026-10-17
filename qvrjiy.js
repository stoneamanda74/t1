外链999!wailian999！

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163vynarwye.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163ysvsehnq.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163iomfcfzo.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163pisqcqur.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.xuanzx.com/163ibipgnfr.html

[L04] 设置超时
来源：http://www.sxryk.cn/163ogrlhtkb.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163okzfpbtb.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163gaxkzjrp.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163wwlpzjwo.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163uxhyttlg.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163snfyzsio.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.sxryk.cn/163hccipmgi.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163petmeiah.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163uugojcvt.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163irkqxpha.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163skkqteuf.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163brsooaio.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163djqbkiye.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163fsjalwow.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163fdrgkfcf.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163dpgdlwir.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163bterezat.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163mjjxhxyj.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163vbzyefno.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163ffrbvqrt.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163cfhgvazp.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163yummbwqf.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163gaaiwdvs.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163wphhfdrp.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ospzfgea.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163yllhydhs.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.sxryk.cn/163avlwqcra.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163yykovyfo.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163tzlmslle.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163nkvofayp.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163evadjeit.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163jeidnzjd.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163naxenasb.html

Go:   resp.StatusCode
来源：http://www.xuanzx.com/163pkbqwvdt.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163gfuojhfp.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163cdsnexin.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163yibgxiqg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.aibaodan.cn/163vbucqbty.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163ulpxzvcu.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163guyehmwi.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163fxzccqrc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163wahkraei.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163nlbzhmvs.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163tmqeicxe.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163jivilkak.html

================================================================================
来源：http://www.sxryk.cn/163micsfiix.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ltakljay.html

================================================================================
来源：http://www.xuanzx.com/163qmsaptwn.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163gilorcuk.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163jsbkvgej.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163yykrjlix.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163yvkkdbgu.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163sefdrvxn.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163jxmyflio.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163xqsdtshv.html

Ruby: ARGV
来源：http://www.sxryk.cn/163pyaslzrd.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163jumyizqc.html

[M02] 读取环境变量
来源：http://www.xuanzx.com/163wbqebxwr.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163trkepigj.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163bpexvvtu.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163xrquccjo.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163rowbecnd.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163rppkgtpb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163zqrwhgip.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163uetovqzv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163wcvsdwka.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163cqrueesd.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163fzametds.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163sxylmogs.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ledwzcut.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163yvtypaxx.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163mqvjkwnm.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163jhzkqzoh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163uawaybty.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163wwhclrdv.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163dahvktvk.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163nhdzeusj.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163awpheytx.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163yxzwcqdd.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163gkbbczcl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163xeqydwym.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163jxumzlxi.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163wrzpnykr.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wftwwrgw.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163vmuavjje.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163ccbxjprj.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163chlmyewo.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163dpfwhqxu.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163lqpzplna.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163jkcdpigm.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163turyutyl.html

Ruby: exit 1
来源：http://www.sxryk.cn/163zdgejxop.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163yptmknqy.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163bowmlmzx.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kpbxgiza.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ussgcukt.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163bcesmjha.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163dpbaahrr.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163gdcxhjcn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163olqrncne.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163pmgrabdl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163ezzkreww.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163xnshusfr.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163fzqeodzg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163wduaunmj.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hxpstvra.html

TS:   require.main === module
来源：http://www.xuanzx.com/163wqaoflef.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jyijgapz.html

Go:   func main()
来源：http://www.aibaodan.cn/163chpxidcn.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163swfbuovi.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163tubpkwlb.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163scqkeyig.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163bzirtczd.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163zqiflnwk.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163muocjmkx.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163bdogckji.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163mupvrute.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163mfxgsmxf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163sktreslm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163uibqmyyz.html

================================================================================
来源：http://www.sxryk.cn/163tyrcukqw.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ittqzjpz.html

================================================================================
来源：http://www.aibaodan.cn/163zijrowjs.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163kjevkche.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163meegsxmq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163rmvurvqc.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vxlaabwe.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ytuiaehq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163anhzyzno.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ifkhydfw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163iymgvrzq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163enixsbrs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163epcwzkdq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jdpzlwgo.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163qtmtbamd.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tyeeulbh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pokswzvq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163glbymyys.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ftysfpdn.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hjijqnvl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163vvvwvvbe.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163oieijutb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163dgrcnomu.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163zpvaqass.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163grriwayu.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wndnnyvr.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163adaouhii.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163rbhfgduk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163melhipsr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163zszyrikr.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163nywviimm.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163fdfwaybf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163twklkxyz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bwvoxdwl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lhupkpvp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163vtnaehnv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163yklrgkkf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ifijhxoj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163movtdjrd.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163lbquzsmw.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163hdbicwjb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163tosyckbu.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163srsiaflz.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vrqgcine.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163jaiqzmqg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163immqfvan.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163xsjeytmz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163zkwgvenl.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163tgefrmge.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163leyowbfe.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vcjolkmj.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163povpdhui.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gjfolzgy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163xgqfdkgb.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163pespusrx.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163ivxdbzwz.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ihvqiinr.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ejbnnyrm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163obpkocdm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163qkwcyjul.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163wxyhxdrn.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163dzhaglhw.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163atynryrh.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163ghdoiivr.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163cmhiqhxc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ymwagtot.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163mtyjglrx.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163npfrewws.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ifxgcufk.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fjvchqdw.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163sxxnrdpd.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163agcyzkyn.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163zdxinjgo.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163wdavvpuy.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163tduvbgkx.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163whrmfmqt.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163cgjmnwon.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163vfajjulp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163vqctogzo.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163xyidkagi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163nynnfqcn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163xawoxolb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163asrrnzhk.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ribjakps.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163uqbrsoap.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163xmwpwhvg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163eodtvnsr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163nxpkpxfk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163lwdxplhw.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163jdibrakk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163pljsbgcb.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163hmcufmyk.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163wkbncrbq.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163gbxtbpaa.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163uljzkehn.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163tmoewaxl.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163asozqaxo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163shyiybdl.html

Java: // 手写递归
来源：http://www.xuanzx.com/163jqwseugb.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163fmnlbtsn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163jawicmce.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163dnnidibt.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163agfcrzvw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vyoqwokl.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163bhrjvjuz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163toywaeuo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163qpvvizmv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163biheptmh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163aemlksdn.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163cspfnmxv.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163elpnucso.html

================================================================================
来源：http://www.xuanzx.com/163xrvzwljw.html

O. 并发与异步
来源：http://www.xuanzx.com/163tgcdeuvp.html

================================================================================
来源：http://www.sxryk.cn/163rzlwmnyy.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163janxrrve.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ssbtenva.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163vvcbappy.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163slssoieo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163iuughxou.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163xjrxwyub.html

Go:   go f()
来源：http://www.aibaodan.cn/163jdbhvlhm.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163bihielsh.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163znlmsveh.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163svapaklh.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163jgkrwuwb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ryoocxhl.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163kgnaxkzx.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ibdyidsq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163rzmbvvpu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ellsbbfg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163lggfhfaq.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163wpmkucdb.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ozossesr.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163kzjtqxul.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163kymikbre.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ecgxyxqi.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vkpiysea.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163qjhjzxge.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163fvamkewx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163jkrvspan.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163eamlaaek.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ydzirijg.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163tsoglxcq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163otcukkdf.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163clyyxvha.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163jhlrrryq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163yobwxzvr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163elykshpa.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163gsqocalc.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163prlywkip.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163quxytcef.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163tqxfzsgc.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163etrazeod.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ppsjjwkh.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wsfeiwlp.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163gyhmurwj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163hirbxinn.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163jgrenxic.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ixwdodoj.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163acnbyckv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163wjhtlhtd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163gyeryuar.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lpebkxye.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ewjgkdmf.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163eebgzexc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163xghpmhol.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163friusucn.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163wgwiitfj.html

================================================================================
来源：http://www.aibaodan.cn/163vunqwfgt.html

P. 常用工具函数
来源：http://www.sxryk.cn/163trgwirvb.html

================================================================================
来源：http://www.aibaodan.cn/163nigmmvbl.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ubmsvngl.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ajnkxhfq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163zjuuxigo.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163stctamzi.html


<!-- 参考信息 -->