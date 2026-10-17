外链999!wailian999！

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.aibaodan.cn/163pzqibunx.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163xsvmsizv.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.sxryk.cn/163kviauuqm.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.xuanzx.com/163odyqdayy.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163dlsibowb.html

[L04] 设置超时
来源：http://www.sxryk.cn/163uflwapzu.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163diklmrpg.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.xuanzx.com/163nixwcamn.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163yorgguot.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163whxgpwke.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163kenjtvbi.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ituqnqld.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163bpuprnhh.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163qhkdslkn.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163krpuektg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.sxryk.cn/163ycaqjffh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163izmhrngy.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163wlxhllga.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163tlfzodpy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163brhlcnin.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163bosytxlb.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163srwhopad.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163jovvyzpf.html

[L06] 解析响应为 JSON
来源：http://www.aibaodan.cn/163idyxupss.html

Py:   resp.json()
来源：http://www.xuanzx.com/163cuviictf.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163juvihslq.html

JS:   await resp.json()
来源：http://www.aibaodan.cn/163pyebsgxa.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163qaiqjmjx.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163phuyssqf.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.sxryk.cn/163hqqhctfw.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163xrroiytv.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163iszaqeaa.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163fsabxbhw.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.aibaodan.cn/163jmktlhda.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163cefaolty.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163ijicfcjw.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163otfqjgsv.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163tqzszchb.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163mysipxlp.html

Ruby: resp.code.to_i
来源：http://www.xuanzx.com/163owmjvtbq.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163ghmiuzkd.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163ddaxomlg.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163xyqqnmli.html

PHP:  curl_multi_init() 系列
来源：http://www.xuanzx.com/163wpzcdmbw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163zrhmadez.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163icieaenb.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163bayrgeoi.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163kpebwqfb.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163kpmubrot.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163lbwsgqmj.html

================================================================================
来源：http://www.sxryk.cn/163zxntgdhu.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163dvqbohop.html

================================================================================
来源：http://www.aibaodan.cn/163shtgjlid.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163emllwvkn.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163gxgakrbn.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163zaoyvzaz.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163lqpvhtwa.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163qlpsszbs.html

Java: args 数组（main 方法参数）
来源：http://www.aibaodan.cn/163gmzmolxr.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163wqvivpqd.html

Ruby: ARGV
来源：http://www.sxryk.cn/163lzgdysmj.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163qubzmdrl.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163tuirehjt.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163qzqusley.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163tkvnshyr.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163kitoowqk.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163bwatcbof.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163unrjuwkh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163jsipqhvi.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163atetnokc.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163etguftcq.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163jrtvtlll.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163piubqljs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163lxlilzjz.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163xeygwvqe.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163munihsfm.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163xzdrtcur.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163wjgvkmcj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163royouvyg.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163vnykngti.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163bzxayczf.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163swcyices.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163zoukzlhp.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163upiufpmb.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163mbgazche.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163vjnxfrug.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163kyufkyvr.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163qzcdqtra.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163vyigqwcr.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163bjpwttew.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163nlrnytox.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163yhllxzxq.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163umvsiyca.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163hwrlfqhz.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163cqakijxx.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163utehkweh.html

Ruby: exit 1
来源：http://www.sxryk.cn/163sxbqgyge.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163clznfhfd.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ctbtakpc.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ubsfnidp.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163vdpiqqpr.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163zkzdmvok.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163bzuytaln.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163oxccpcdx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163lptrjmiq.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163mdqbnlmx.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163platuupx.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163bjdwfsws.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163rfijrpxy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163ocnwjent.html

JS:   require.main === module
来源：http://www.xuanzx.com/163ptohnopg.html

TS:   require.main === module
来源：http://www.xuanzx.com/163bwzdtdhl.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ejvaflvn.html

Go:   func main()
来源：http://www.xuanzx.com/163bbqshwpr.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163hgllxfam.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163zsxvyqdl.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163eqoydcej.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163wulgchdp.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163atphcmzt.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jgjztwja.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ctsaboqe.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ifcqufab.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163dlflsecj.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163addhoecn.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163wcbqpzqy.html

================================================================================
来源：http://www.sxryk.cn/163orxjvinx.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163wtwflptt.html

================================================================================
来源：http://www.sxryk.cn/163riyznijc.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163mxekzwru.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163eypxggko.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163isclemsw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vxpgzulg.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163unhvzfic.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ynlefijs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163bhshnqdr.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163abmpzxhr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163lyodjckx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163alrogtjz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dnjwazmb.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163qciaquag.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163wdunswzy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ngmfkkyd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163qcrterko.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ucssmjtd.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xpiceari.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163dcgacbuz.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163gzruqcck.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163uakljznj.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163inkocmha.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163xzdguouw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qyshcqxh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163zdpuqyrp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163dxlwovao.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163wqnmbdjx.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163axoflnmt.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163eosomnwn.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xtotnfrw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163xralhhpe.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163shovdhud.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163pchdspfr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163xybcpaas.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163phaqxtfb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wlihmwcq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163sqwstjde.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163flfomaut.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163qmlmcnfa.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ctinxbuo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163teunffps.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163lnwylxgj.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163brvkprqu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163yuhtxnqf.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163daifbyzv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163dtrdbvzq.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163mavmmglo.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163nxllteqw.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163yonvranx.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xpoivnpd.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163mavbwvxk.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163gjoipnfi.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163ijhmigug.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163pogbcear.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163vcgbrrur.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163afqnehhs.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163wwczloyr.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163znarvjnt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mgtzcrgh.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163unpqmffu.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163crguista.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163wekknjdu.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163cpuxgmwb.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163tsrckbkv.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163hpqyyank.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163xtkucywt.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163kvnqhjrb.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hjrddmtw.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163kasphiqf.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163fmmxlntj.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ikdyveza.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163riobztel.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163rggtwppf.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163jckiwean.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163fvfxhiab.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163qxdafojc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163nimqjtoa.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163tqmfqhla.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163aaizolrs.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163afixhapu.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163btjyfuqn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163roxvvixn.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163tdyhaqvf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ytgeykzj.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ivtknvah.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163phutjpda.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163yhpodrgx.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163nkmftmye.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163qcmdmqeq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163tgfjqmhx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163fsedvomr.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163rsjyqjpr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163zowtyiiu.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163sharfivv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163sllhjpfe.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163bjprnful.html

Java: // 手写递归
来源：http://www.xuanzx.com/163yuedraba.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163bczdlxfy.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vaafbaxk.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163rhcnahzo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163sdmuclaw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163mdhsskmw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163lrsvjasw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163cdicofwo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163iodxleer.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hrtpjmfj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nkmcxbge.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ufftdngk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gtspvyjq.html

================================================================================
来源：http://www.sxryk.cn/163szmmfcka.html

O. 并发与异步
来源：http://www.aibaodan.cn/163cjlseznh.html

================================================================================
来源：http://www.sxryk.cn/163uocoegjs.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xrjkjdit.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163otatxurk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163edrtrwtw.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163bfdvhfus.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ergstozt.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163pdzneiwa.html

Go:   go f()
来源：http://www.sxryk.cn/163jjayhwgw.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163iyxfqffl.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ynomzspp.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163bckxqqzr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163tsjqdexw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163johganje.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lmuqyvid.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dukhiode.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163jtfaltoq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163hdlmstoj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163tbbwxaiw.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163rzvmtsjd.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163rjrbuqkv.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163qsctplse.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163nvikfiea.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163fbwdccqd.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163fliorzur.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163pqzgyyou.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163aptoozbx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163gbvrmlan.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163uplugdea.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163pkoreftl.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163jyjqytra.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163utggixyv.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163qqiplrqv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163vudszwmt.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xoqfupgr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163pbumbbnn.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163jezfldki.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163xnnoclkv.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163tjzcnruq.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163myaqogaz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163otigtmky.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163womaktyp.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vfatcnup.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163czlauzee.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163hdgybatt.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163fntfbxyr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163yntivfyu.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163sehbsejs.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163mdiphhru.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163lzbssznj.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oqwifoik.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qickzvpj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163wbegsfjn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163chzfnfnc.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163jxwpgjvp.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163khmlipeu.html

================================================================================
来源：http://www.sxryk.cn/163zsjmhlkn.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163vfrztrsp.html

================================================================================
来源：http://www.sxryk.cn/163mtobnjiz.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163iawtyvpm.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163zohksylu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163sledhjsr.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163uuhlylab.html


<!-- 参考信息 -->