外链999!wailian999！

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163celvvpfh.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.xuanzx.com/163yvkzdghf.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163hwebokwj.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163iylwvyjv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163zwsdeexv.html

[L04] 设置超时
来源：http://www.xuanzx.com/163uqyavguk.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163oskucrge.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163kybhhofy.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ukdabtxk.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gzazngbt.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163lrrlnfzd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163xwidykig.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163cdxofiyz.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163msaxbsuo.html

[L05] 上传文件（multipart）
来源：http://www.xuanzx.com/163wcaetkvx.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.aibaodan.cn/163ntjjlsyb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163mknwdwtf.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163fzoenykv.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163gompqbzo.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163kwlnomke.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163esvchydr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163jfhbyico.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.sxryk.cn/163oyjljcwf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163yekeyyxc.html

Py:   resp.json()
来源：http://www.sxryk.cn/163gjiogpdz.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163qkdhepla.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163ndvqjnnw.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163mvdygfkd.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163cljrlits.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163xtiaabqw.html

Ruby: JSON.parse(resp.body)
来源：http://www.sxryk.cn/163kymlzvry.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163hnpqfvea.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163vnrnkxsc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163cxewpamh.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163ccanbqqd.html

JS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163scucjndf.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163yrbvuzyl.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163hwluodgu.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163fsgzaesr.html

Ruby: resp.code.to_i
来源：http://www.aibaodan.cn/163zvlbgjvw.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163ducwqgrw.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163aralscjy.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163rnlhruej.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163vjjsgemj.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163fldqgian.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163zkhrebwd.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163tgdbregn.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.aibaodan.cn/163mfmwnalq.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163tutovvuw.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163tpkqaeko.html

================================================================================
来源：http://www.aibaodan.cn/163atvcesjh.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163cihkttbs.html

================================================================================
来源：http://www.aibaodan.cn/163qdaxehki.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163uinjeeqd.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163rhmajcyh.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163syqlgobo.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qdhbedko.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163sklnbeew.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163sssnpvov.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163dtoycyoc.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163wviuqoot.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163loansdgj.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163muqakvwj.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163nrbmurtc.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163zvruznos.html

JS:   process.env.HOME
来源：http://www.xuanzx.com/163tzqpfjvd.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163ctvyeldi.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163utnzdhwb.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.aibaodan.cn/163tjdkzowt.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ozmhlxnb.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163ydmbwcqn.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163yzudizuk.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163mceogzoh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163xgeaprro.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pwmuilpl.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ohxblqkm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163jgtmdyox.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ajoxbqce.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163jpvajsdq.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163sesvpqfg.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163opvhunef.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163rjdcbwji.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163hdqphohb.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163bmqmziyf.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163vfabrqal.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163endkezkk.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163nwlhptef.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163iruwmxnq.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163iojhwsui.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163nxpxpnib.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163rjpdjrsr.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163zzvgmmla.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163cpuszdbt.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163jgimkshr.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163jcydshnn.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163mjjdwpep.html

Ruby: exit 1
来源：http://www.sxryk.cn/163fmxocqmq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ukvuwuym.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163uxhdenal.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163tftvwltl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163ybceumsx.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163pklgbcnn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163jvkwilnp.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163wbllrmlp.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ghbrfvag.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163bruxqycn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163dxbxjoyq.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163bwtwtfio.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163qhbwtbpt.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163ouqomekx.html

JS:   require.main === module
来源：http://www.sxryk.cn/163xtjovuzv.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163hyacmqcr.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163oiukawum.html

Go:   func main()
来源：http://www.aibaodan.cn/163nhrabbsr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163cnztasay.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163fgyrwabx.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ptazkbtx.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163dydtlljr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163cjttlowu.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163glvvwxol.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ssaeldgw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163nnftlybs.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163inlvstoj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163kkqzofgr.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163mltrynis.html

================================================================================
来源：http://www.aibaodan.cn/163eljstibt.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163bstwdqor.html

================================================================================
来源：http://www.xuanzx.com/163hhutsnbf.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163eukgfxrt.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163yqdjpdsg.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163gizupdsx.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163dvpzmswc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bdqqygdp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163wltakgsh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163qylabodn.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163yeyliyyd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163nohgjjtn.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163aehmvzix.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163iklozsim.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163wkcaafmj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163grhoiskj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tmlesdwe.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163unnowdxj.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163vyiqwupw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hyxyuiai.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163sgkmelxa.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ffbvpqlv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ikpamkfq.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163mbkrfhmw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ldogoehc.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ygdisytq.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163ohbewovi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163gkxnjlcj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163sylxdvjb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163mzqjjban.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163nrchpmko.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dnmqully.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163pkwcgzvh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163yyerjkmx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163gjsqeyml.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163vjwuzftn.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ppqjpjhv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163clwemupq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163yviuworf.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163lgbypftc.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163irkesryy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163airkdivi.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163frvlsoak.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163odeljkym.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163vzhdrczt.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163iuehjtul.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163mqvbdjev.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163zckxguei.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163harzhfua.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163tlphekcf.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163hzhskqdo.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163jkcdmhnk.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hhlylysv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163tlevcdbz.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163vkjmacbk.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163vlofwicg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163glnlcebt.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163jgalmmzh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163jtakurfg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163avxwtlil.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163tvtmbzem.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163rmszqhgw.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ocbsyqhr.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163jdaojjjo.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163efcikzmt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ymvmcchr.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163zqarykjv.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163tpbisacf.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163daeoiqch.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163sdakfzfi.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163htdrwgzc.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163nmnbumgj.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163kenvfcmn.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ciiqckow.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kseffklk.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163sotcpyzj.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163dizauxze.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ylmtlbgp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ytvtrtva.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163xxugknzo.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163bnnvzmap.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163nyztwckg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163lnafbnms.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163rtsrtvys.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163qkeyofva.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163djpvhwzh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163qziacxin.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163hjhnruhy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163shbvavsk.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ocrmnezx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163hrbrkuta.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ijqluqfm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163dqhuywei.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163skicghhj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163ghmvkvnp.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163eessikci.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163eqoshfbm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hbocvmcu.html

Java: // 手写递归
来源：http://www.xuanzx.com/163tajboknz.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163flmngswj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163sxjphmrr.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163fwnukjyg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163baijzbsj.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163hkndbypk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163etmrrbwe.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163hfckvnbu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jfaxekum.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163juspjqab.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163kftadfic.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163pzvokyop.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ubndrqqc.html

================================================================================
来源：http://www.xuanzx.com/163fvljqgra.html

O. 并发与异步
来源：http://www.sxryk.cn/163pccbpcwq.html

================================================================================
来源：http://www.sxryk.cn/163qewzdsjv.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163qjdjszgc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163cnueahqb.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ilzypzkg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163svqmgupp.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mkkxejyt.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ifwdehjk.html

Go:   go f()
来源：http://www.sxryk.cn/163dimiflpq.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163qvrhgzil.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163wvswmutd.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163cwkektpx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ewexvnio.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163kgkohlul.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163pbbwiqdm.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bhmymhrl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163nlumtvlj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xntoozgf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163yocordvl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163iitquwfa.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163juhhctvq.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163btixytfi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163zvtickzu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163owepdgcx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ywoolbty.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163vdqzwarw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163uzlahmxh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ikbmvseu.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163rbnfsetz.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163srxooahn.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ajrilhfo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jemjsfgg.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163omnzoxts.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ukbjerjd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163gttvmfvk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163fndexcbj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163vhfqotja.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163cwnrafak.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163eicwhcsy.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163hlhypfrx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163rfobscbp.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wdlgnjef.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163eibrycul.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163oisandqz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163oyfzksix.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163kxutablk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163atbzjczw.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163xmdsylpi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ebuxwuhj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163aklvzdjd.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163hqaermdu.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163itsgarpp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163kainhrhd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163suoockmh.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163cxoihomc.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163nsmrykoa.html

================================================================================
来源：http://www.sxryk.cn/163bdwsvyxr.html

P. 常用工具函数
来源：http://www.sxryk.cn/163wvcsugaz.html

================================================================================
来源：http://www.aibaodan.cn/163ysfyolfx.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ddgcbkzd.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163eynzfvwm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163xmjzvasx.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163axuxiwun.html


<!-- 参考信息 -->