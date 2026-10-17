外链999!wailian999！

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.aibaodan.cn/163krggsmrq.html

[L04] 设置超时
来源：http://www.xuanzx.com/163ccgrgdda.html

Py:   requests.get(url, timeout=5)
来源：http://www.aibaodan.cn/163sjpikmpq.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.sxryk.cn/163hwhfaeca.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163ozytjeim.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163tyvqdfst.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.xuanzx.com/163slbtvqmd.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163ozvdhkam.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.sxryk.cn/163vlbbzvkc.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163pccqgtci.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163twiniwns.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163iixzuqhh.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163vvjptnej.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163llslsfsg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163ubrxthtn.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163updwcadg.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163syisggvr.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.sxryk.cn/163ybdkhcrz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163wkmbssel.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163jvbfauge.html

Py:   resp.json()
来源：http://www.aibaodan.cn/163strrnrar.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163nwicbyqs.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163qmrljxtm.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163xqvjffds.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163mpgldtfl.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163eogfnivc.html

Ruby: JSON.parse(resp.body)
来源：http://www.aibaodan.cn/163tyiflohq.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163ujpaqasq.html

[L07] 处理 HTTP 状态码
来源：http://www.aibaodan.cn/163hhluadra.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.sxryk.cn/163utfozeyt.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.sxryk.cn/163yybteqkv.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163vxyjsduw.html

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163lkkfndif.html

Java: resp.statusCode()
来源：http://www.aibaodan.cn/163muemohvo.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163qvrghwdr.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163reoemnhp.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163nwkisgbi.html

[L08] 并发请求多个地址
来源：http://www.xuanzx.com/163cpwevdyf.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.xuanzx.com/163geulenxj.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163urkqiaaa.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163aszldwqv.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163qyazpuxc.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163xwupliyy.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163jgkuixgn.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163hgbnjmvm.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163iegxxzzc.html

================================================================================
来源：http://www.aibaodan.cn/163nibjdrmd.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163bfpneppy.html

================================================================================
来源：http://www.aibaodan.cn/163emvqluls.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163ievevkvo.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163fvbqlnem.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163lgucxcsh.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163nqikviyp.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163tylaubnb.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163iqcepaqq.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163gnfibdnq.html

Ruby: ARGV
来源：http://www.sxryk.cn/163oqqwoklx.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163khdnbmno.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163fruatjki.html

Py:   os.environ.get("HOME")
来源：http://www.xuanzx.com/163mhhsilqk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163mlfepzaw.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163ggvvkygf.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163eoqrunnq.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163qacwqpvy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163bvvxiqey.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163crgfcliu.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163yozcjgqu.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163nkegxzog.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163vhnjhuib.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163xiebfheh.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ebypyurf.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163ycrunxin.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ynopcdrl.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163jgayhbqj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163jmsfswnd.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163pjmjcwit.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163spmgmphh.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163mtalsagy.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163nwamoqur.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163plttvvof.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163eydiskji.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163ghzgiyii.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163gqbaomli.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163vexhtevn.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163ykdrafhu.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163lexauowc.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163jdtgkyfo.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163psjdxvyt.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163eqyjkttg.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163doniyoma.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163kxdsgzbc.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163tlosekjm.html

Ruby: exit 1
来源：http://www.xuanzx.com/163wtvcvmun.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163pirhlskf.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163qcipkjzb.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163fpiucbcw.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163emxwgugw.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163togbxquy.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163nsezqnde.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163qgyaoycl.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163mmvziftx.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163omzjfman.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163fuyhwtdc.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163yjjkgysd.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163ngcmlevw.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163vhplivcp.html

JS:   require.main === module
来源：http://www.sxryk.cn/163fqlxoerg.html

TS:   require.main === module
来源：http://www.sxryk.cn/163sydtwhfk.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163abatlxeo.html

Go:   func main()
来源：http://www.sxryk.cn/163ncmcidrh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163quicjiwb.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163jcppuprs.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ohpywyuz.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163dxxlthef.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163aworysxe.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163kzjmqpcw.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jjnhuqin.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jnaalonr.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163pozlalxb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163dcanuoas.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163kscvzvvq.html

================================================================================
来源：http://www.sxryk.cn/163oyicvone.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163cugkpldd.html

================================================================================
来源：http://www.sxryk.cn/163tzoffimc.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163fuhmpyit.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163cujxbmyh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163lnqebidh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jswwuxct.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163fmzmwzfc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163mvqmorgs.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163ozlclmvk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163bplawsia.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163mxmjztfv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163nvsteque.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163cmdzbojl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163nasxbmjl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163plrttjzg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xvxopfjl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163zhqovape.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163uwpjllzj.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163wqkqroqk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163jphsfszq.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163muvqbqqv.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163uczjnbcp.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163eabicepa.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163mrgrdnxe.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163csbivgfh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163qunsdcjz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163biamtghg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163roozzhth.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163tezobici.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163tkythpur.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163jceuhovr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163teiyocrc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163hncopuqj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hziwizct.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163kdngtpjx.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163irlkyjkn.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wqrhdlvj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163twcgzrpv.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163cycjxgrw.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163jlglnhsc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163mftgafvb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163royfhoss.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mqdmllwc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ybpxtosx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163algxycpz.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163uawvmgqw.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163ewwqdzqf.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163vgbvotsv.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163ffxyndkx.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163pkxeljtg.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cudplumz.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163vooggvlj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163kruycupa.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163flosvcuq.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163qilpfjms.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163cqgrlhca.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163edbcgrhx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163huhybctl.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163cbgdwhrb.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163glxlqjfn.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163vjuefjvi.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jjrwxpgo.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163doqlhjqh.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163xkbhciyx.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163mtanuoml.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163wamkknfg.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163lzwgtcdg.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163lovldlup.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163uoodbhcc.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163wmyhvznh.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163uulntgem.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ncoiwsyw.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163fdnwkyzh.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ltxdeksk.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163paebylyl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163idyuymlq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163jshqzjdt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163alexopwk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163myclxdgn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163mjwhhari.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ljcizflg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163lnfnryha.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163bygnvzut.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ziqwyhyj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ziuzeinq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163yfsbohau.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163qndpuqtn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163zeggknts.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163jlhdbzog.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163khwdrald.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163evcjzexu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163fyvpjemj.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163gjjqptvl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163lzsbpycy.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ctsojmut.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163kytvyvuh.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zjmwygye.html

Java: // 手写递归
来源：http://www.sxryk.cn/163umvbgodp.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163cqvpixwj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163pjlbixha.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163fsyybzeh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163qfkyvwqq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ftkxprfz.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163zzzxvhzx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163stlnkuss.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ogenzvxi.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xzjesnlu.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163kmyvwgnx.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163vnfsiuuk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163fdktnxts.html

================================================================================
来源：http://www.aibaodan.cn/163jxlqbief.html

O. 并发与异步
来源：http://www.aibaodan.cn/163nqhutymk.html

================================================================================
来源：http://www.aibaodan.cn/163dtnwbaoc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163zgoupalr.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163rezvbkmg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163yckkikyd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163oflcrucd.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163mhqzygxa.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ddkugwlf.html

Go:   go f()
来源：http://www.aibaodan.cn/163tusungtk.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163tshyxbip.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163wofmjnco.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163bktowhsu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163xsmornal.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163etgughgc.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ntcwifgv.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163rvgvhpgx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163fwgdyigt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163cyynqnqk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163codhqyfl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163xvualfzw.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163eiuocqqi.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163dlvfwocs.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163yrhgrodh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163lsynimsa.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163qoehbhgd.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163qchmlifx.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163lzzkeeky.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163rluayipl.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163vfbrhzeb.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163otwxceum.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163rzbeoyql.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163hkjybuuc.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163jjlbjyfc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163fuwkyrvd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163cqkshjvi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163uggnvifc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163rcnyvaed.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ykimquzo.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163oaloodtv.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163oxdtcafn.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163talgjqcj.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hnvbwetp.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163drljdviu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163aeycdwgy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163nocpgvwl.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ccvewrgv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163gtyanayy.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163xkfziqxs.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163afxgydfd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163pzqnwytt.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163iijtffbe.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ntppbgjt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163hhzbeyov.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163wcgfqlei.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163gtpnblri.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163xnzwaben.html

================================================================================
来源：http://www.xuanzx.com/163wumwmiea.html

P. 常用工具函数
来源：http://www.xuanzx.com/163qiqyptvi.html

================================================================================
来源：http://www.aibaodan.cn/163gcxdxxxe.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163rjmjevgu.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163pxxbjola.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163gqplxbzk.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nfdnhscu.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wckpyfdj.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ccfruasd.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163matymtkg.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163wichmrze.html


<!-- 参考信息 -->