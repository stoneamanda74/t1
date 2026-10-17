外链999!wailian999！

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.aibaodan.cn/163iebvuwcn.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.xuanzx.com/163ltfzuhjh.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163zjqvdteg.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163jihkryhj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163dhuibrmd.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163taoaqdcg.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hihiqaln.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163ijawwnme.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.xuanzx.com/163kedqigmy.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.aibaodan.cn/163frorvxre.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163qwrnladk.html

[L06] 解析响应为 JSON
来源：http://www.sxryk.cn/163oxniukkr.html

Py:   resp.json()
来源：http://www.xuanzx.com/163ncypgbpy.html

PHP:  json_decode($body, true);
来源：http://www.aibaodan.cn/163hqzodtkd.html

JS:   await resp.json()
来源：http://www.sxryk.cn/163wnlqlzpv.html

TS:   await resp.json()
来源：http://www.xuanzx.com/163mixgnlfv.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.sxryk.cn/163mxfmkhwr.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.aibaodan.cn/163ablxrsca.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163iafhixea.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.aibaodan.cn/163lxgmllsk.html

[L07] 处理 HTTP 状态码
来源：http://www.xuanzx.com/163jiosyohq.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163fldtznhk.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.aibaodan.cn/163dozvjmui.html

JS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163iplixzsl.html

TS:   resp.ok;  resp.status
来源：http://www.sxryk.cn/163kcszanho.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163gxwsqvrw.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163yhhdsmoq.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163jeuuaqof.html

C#:   (int)resp.StatusCode
来源：http://www.sxryk.cn/163lithtkme.html

[L08] 并发请求多个地址
来源：http://www.aibaodan.cn/163zwtcxdsq.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163ztqnosxh.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163pkmslfse.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163lkzbwtgx.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163vqdgnjjl.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.aibaodan.cn/163oxyalkjq.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163gttyeixx.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.aibaodan.cn/163usgunmsd.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163ikwqqgfi.html

================================================================================
来源：http://www.aibaodan.cn/163xaurwjjk.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163zczvlool.html

================================================================================
来源：http://www.aibaodan.cn/163ulymsbhj.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163aipsffbl.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163srkmqzgy.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163jfkzhqtp.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163hgjqabre.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163ihzugmdi.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163oojczain.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163jzvbvesd.html

Ruby: ARGV
来源：http://www.xuanzx.com/163mqgqxceo.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163cypdkigl.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163vyyojaxl.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163ykumgbzu.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163shacxmls.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163fonlobkl.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163omdmxkxn.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163kvnlkyft.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163htachuvb.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163tcizbwps.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163nxmmazcl.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163tgueymfq.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163uwdaprpu.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163tsrnhqdq.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163ithsqizk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163odxyjnxz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163bnzceriv.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163mkxtpduh.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163cbygtztt.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163dsnxvbcu.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163foeqzgxg.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163nzoxstun.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163rwykttcf.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163edcjskqt.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163sktpmqvz.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163gwrpdgrf.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163yyjfdcmx.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ozeldkoy.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163fdkamili.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163nlpdbamy.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163tbokvrrr.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163krabwvqe.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163xwcsbwzu.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163lqquslke.html

Java: System.exit(1)
来源：http://www.sxryk.cn/163hecmljhm.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163wvcclvrr.html

Ruby: exit 1
来源：http://www.xuanzx.com/163upxqgkxi.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163izpdosny.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163hgdhkztr.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ugtonspl.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163ytimqgza.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163eynysvbn.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163uxvprhkm.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163ngkbyrcf.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163jbqprfiz.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163gckabnmy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163laxbnjqa.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163emtgcfkl.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163diebwwwl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163udqyoxxl.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163cftvgygn.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163hvubierk.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163htifyhuw.html

Go:   func main()
来源：http://www.xuanzx.com/163aujdhtia.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163gnbumgjo.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163uzgahxsr.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163tmiucyvx.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ovdkykaf.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163bracmsvs.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163qhmqsvro.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163crejrrdg.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163rgxtmipc.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163kahyzqgv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163uhmqrglk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163zrsvzfcf.html

================================================================================
来源：http://www.xuanzx.com/163fmrnwyqw.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163auqyyoyh.html

================================================================================
来源：http://www.sxryk.cn/163prpvwkrl.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163qydwwxqj.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163iflutvot.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163dkwmwgjs.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163rehxriax.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163bjjfxvue.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163mtnqeulf.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163eisvslxm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163uwqokefv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163erxvmdnl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163jacxrrga.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163bknnkqcm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163dnbxoukx.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ktvwormr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163faqyxdxp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ytjdjqqq.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163ddkkvtas.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163reufqvfb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163pbmxlwzi.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163jtprzakg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163pcinxwft.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ogcjztwl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163okeoviji.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163hwwamccp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163gpqfqgfh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163xyqyzffp.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163kxdhkujg.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163xlzdsmcg.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163iphzgphl.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163xwfmrskf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163tlaytpzk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163engzqzhf.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163lytscmtt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163iegaptyi.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163bsqosxeq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163dkjkuewq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163vkhugwet.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163flxesndw.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163wgfcmvdi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163tnbdzmmj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163deiwuzon.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163emmrxbuz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163zrlknbzn.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163drpxnbeb.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163gkikiadt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163xtrukica.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163kmryicko.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163bjrvcsrv.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ryxquall.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163mdyzekxn.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bzhkhroc.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ysgoxncv.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163opjlsqbq.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163pylvflrw.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qtdwcumw.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163zxqhrcun.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163qnqpdcbd.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163tuovisul.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163nokzenuo.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ihvcfyyz.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ukartiep.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163gofrvqbl.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163cnhvgmye.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163rnmxdtfb.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ubxercca.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163hrpvlome.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163mcxvnxqz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163apzmswqs.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163lwqrwhom.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163nudhlhyf.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163hagxagoa.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163bhhwerju.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163abffalux.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163vlpevwqn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163knjelfnt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163edqaicyb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163wewjjfhv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163eeadhszu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163zbupthxx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163bbxvpxhy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163tqjyrzna.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163elwaciev.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163adexsadz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163vnpxsafb.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163pgzrrufw.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163rxlectfu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163jleozhgk.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163vrfkurfw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163mjytwlmf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163hqhhkusp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163bajmangn.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163cjgwsxxf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163dbtzppwq.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163kbxemuse.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tvmgvnmn.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163unqjldys.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163wuyesigw.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163jvvlfqje.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163zybrvbar.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163whbnzkfq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163mdicfamq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vmlcvxvo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163xuihozlb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163sdmjpjrh.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163cocxupmh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163arqepyjl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163hqhszgnc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163morhfxpj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kjhkdnoa.html

================================================================================
来源：http://www.sxryk.cn/163eiqgdtsy.html

O. 并发与异步
来源：http://www.aibaodan.cn/163eagnawsh.html

================================================================================
来源：http://www.sxryk.cn/163yeblkpxt.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163fiyzizqc.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163rfsuaask.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ctvylmnb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ejgkfoja.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163nfqotltn.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163omqtronn.html

Go:   go f()
来源：http://www.aibaodan.cn/163zozhuqea.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163hkfiqshb.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163eushefap.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ccgpkirx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ubsyafbu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ngootddf.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ispyozjf.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ruogyqzv.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163hiophyhx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163llloyxdd.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163dfitgjqi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163gxdampft.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163gnotbtoa.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163tpwctmss.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163wbxcfkga.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ehvjktvq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163gefkktak.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163zacfzgka.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163jjgaqqgs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163whfgttgv.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163weaocarb.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163rsqfmgkn.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163dxopatbi.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163cdmypqhc.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163fyrnsuae.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163fkznuuyb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163qcylvyqn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163obmqddom.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163sqthnimw.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163sczhmssc.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163bmgmjkgk.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163zfwjusnp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163nctdfzgb.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163asqvwkze.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cwtctikq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163tdsrqvxv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163lffumtcr.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163yenmhxme.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163lwohqohj.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163gsqakqho.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163tfhbrbcg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163jpffdsxy.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163fmmxayjo.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vjomxhqm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ekpgxbkg.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ygdaadvb.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163qhwsfsqf.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163rcubvvbx.html

================================================================================
来源：http://www.xuanzx.com/163ychpjuam.html

P. 常用工具函数
来源：http://www.sxryk.cn/163tphqtiwi.html

================================================================================
来源：http://www.aibaodan.cn/163bqxiyuyj.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163tjcdwzpy.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163zamoeguk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163fvwjdguk.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xmgrvhfe.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163fyumzttf.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ysrnciep.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163rrfstcsc.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163xfdslcuo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163cfaaawhm.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ysqieuzn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163edxkgexw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163kgbntgfn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163jpdokysi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163hobvqmnb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163vbgkcghx.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163nxftvxus.html


<!-- 参考信息 -->