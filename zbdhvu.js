外链999!wailian999！

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.aibaodan.cn/163kgnwmrhj.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163ocjvqlgl.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163cwppvsel.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.xuanzx.com/163qucnmeto.html

Go:   mime/multipart.NewWriter 写入字段与文件
来源：http://www.sxryk.cn/163awewacct.html

Ruby: req.set_form([["f", File.open("a.txt")]])
来源：http://www.xuanzx.com/163pohyrqyz.html

C#:   var form = new MultipartFormDataContent();  form.Add(new StreamContent(stream), "f", "a.txt");
来源：http://www.xuanzx.com/163ilhinqsz.html

[L06] 解析响应为 JSON
来源：http://www.xuanzx.com/163ndksvryd.html

Py:   resp.json()
来源：http://www.sxryk.cn/163qeacypoh.html

PHP:  json_decode($body, true);
来源：http://www.sxryk.cn/163qaedhwri.html

JS:   await resp.json()
来源：http://www.xuanzx.com/163eewiruaw.html

TS:   await resp.json()
来源：http://www.aibaodan.cn/163qahvbdij.html

Java: new ObjectMapper().readValue(resp.body(), Map.class)
来源：http://www.xuanzx.com/163evthvlfa.html

Go:   json.NewDecoder(resp.Body).Decode(&v)
来源：http://www.xuanzx.com/163ssxwmpav.html

Ruby: JSON.parse(resp.body)
来源：http://www.xuanzx.com/163vxxyckak.html

C#:   await resp.Content.ReadFromJsonAsync<T>()
来源：http://www.xuanzx.com/163vudglwsw.html

[L07] 处理 HTTP 状态码
来源：http://www.sxryk.cn/163sfuwtyhc.html

Py:   resp.status_code;  resp.raise_for_status()
来源：http://www.xuanzx.com/163lyfnxgji.html

PHP:  curl_getinfo($ch, CURLINFO_HTTP_CODE);
来源：http://www.xuanzx.com/163nipdfezf.html

JS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163mgkasunh.html

TS:   resp.ok;  resp.status
来源：http://www.aibaodan.cn/163dmlfnxgv.html

Java: resp.statusCode()
来源：http://www.xuanzx.com/163pccnogeo.html

Go:   resp.StatusCode
来源：http://www.aibaodan.cn/163kofqolbl.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163quyhdfjt.html

C#:   (int)resp.StatusCode
来源：http://www.xuanzx.com/163xbkeluik.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163obbxithe.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163uagtthzw.html

PHP:  curl_multi_init() 系列
来源：http://www.aibaodan.cn/163phfigbrw.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.aibaodan.cn/163jzsxvrwc.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163qjkwshjg.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.xuanzx.com/163ptvbrzvc.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.sxryk.cn/163ovuieodj.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163hwamaeaa.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.aibaodan.cn/163xkmcyfyl.html

================================================================================
来源：http://www.xuanzx.com/163ltqzypqt.html

M. 命令行 / 进程 / 环境
来源：http://www.aibaodan.cn/163ozqdqxtg.html

================================================================================
来源：http://www.aibaodan.cn/163rcvzuwqm.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163mnzrswxc.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163rdqoshdz.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163ccsunnkc.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163cumzvcuy.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163mwogkays.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163qdnpensn.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163ligrghap.html

Ruby: ARGV
来源：http://www.sxryk.cn/163hlbyesnu.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163gufxtqvl.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163hprjoluv.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163unyfptuo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163rccyhgir.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163jmkllaui.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163dqufneoq.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163uagaxifq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163bgsbwpwp.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163igcgyhjo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163cryoiqpi.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163idzbcosv.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163mignwmbs.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163qdsgdkcy.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163pninwexa.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dufvxwkw.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163niyybyaw.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163iedfusbk.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163prtksgsz.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163mnsxtubq.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163bhqswfqz.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163reqrzjeh.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163iskloimr.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163txlawvmr.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163dhurrkmr.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163otcjdzpq.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163toapdcpc.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163brocnxnk.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163gmgkqygf.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163mjpzjbgx.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163ibeobwgk.html

PHP:  exit(1);
来源：http://www.aibaodan.cn/163uuornwby.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163lvtjpzqm.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163yyyhgwei.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163zgjqxoyq.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163zcplhwhq.html

Ruby: exit 1
来源：http://www.sxryk.cn/163nnfynjoa.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163zxdvcxvd.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ywfzolkf.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163uqudvrfy.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163vonjejmh.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163ujervgjn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163lfmzzhsm.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163fpgwahja.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163dvgipcrf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163dzzklvad.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163wzfmlxkj.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163jspsrhba.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163yxufhhjp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163mgjsqcif.html

JS:   require.main === module
来源：http://www.xuanzx.com/163keajcvxf.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163exawicyf.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163aahsebig.html

Go:   func main()
来源：http://www.sxryk.cn/163zisuogmg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163gfcdecpq.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163musvyvzi.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163gxlkktoy.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163thrpozdr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163ocbvsbze.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163kqttjavb.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dtzuejnl.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jegdagty.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163mqxnghph.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163sovgryap.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ruqpmhqf.html

================================================================================
来源：http://www.sxryk.cn/163lluhketk.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163nqidtwrp.html

================================================================================
来源：http://www.aibaodan.cn/163rjiutrol.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163fbhjtipg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163dbucrtmt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163dbmneszw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mqvkldug.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163retidykj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163lqtdrfmz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163nrznupwf.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163avdmiazh.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ekdyvqez.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163fwatwajx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163rfpljyym.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163yyhneduz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163rhtrspvb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dtwronbr.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ywvvyubz.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163tnmgeika.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163sushalvu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ekgdnywj.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163dqzoqejs.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ovvopptn.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163qmmvipmf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163lrkwejvk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cubmqiie.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163cicipvoe.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163xuzgcjbd.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163twpkowmr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ehlozmlo.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163tfrrxnse.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163fqohpocj.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mdnxkdop.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163oksrvssd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163qccjjzpl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163lqpbpcth.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163wfntbdrb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163pcalweqy.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163osbigxiu.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163tqmjkcbj.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163vxidhnlo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ocmrnvvk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163dwssomwa.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163txmuptel.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163zuxoeogu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163anhoelyo.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163lqqcgajj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163vtccpwpv.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163zcakngzw.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163xubhbbuf.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163xajmxqif.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vvbsykqc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163wnsegpij.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163coddrbil.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163txdrxkmv.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163stwlafwf.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163clpcupki.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163oildewlx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163wmciagji.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163lhwvxaee.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163hixmlyqg.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163qhidefzk.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163vpadinep.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163lspboecq.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163syxbgjjz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163hequfwys.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163wymuxnyx.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163tfjwwnej.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163dqavffbl.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mwotaamt.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rluvvqya.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ldkyszev.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163qhpvgywa.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163scohrzkr.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163dyneotsn.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163bdqcutcz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163bxutxbjv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163qtatsdlc.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mqyyrlqm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wlalkebq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163zivtogmn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163qswacxbw.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163gcoyukdd.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163tkoxqhxm.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ugetnuxe.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163zongdaao.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163lbmwmond.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163opxxfmcs.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163udwwvyya.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163bxnvmatu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163hbjrzswx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163hqfbmlnt.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163iqsuuhwy.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163tlogghny.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163gqgfuzag.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163liahrkmy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163hsazkrmb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163hjzhtvci.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163riqffcuk.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163pnauxgti.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163olqadujh.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163evpzhyxs.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ioddxnzo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163bdxycvkg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163jqydziyi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vortxtmr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ibsbqjcx.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163uyttyxyf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163vmgikfjy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ourenrot.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nhgtflrl.html

================================================================================
来源：http://www.sxryk.cn/163cedrfvir.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ncjqbfxv.html

================================================================================
来源：http://www.sxryk.cn/163kollkzwr.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163kxljmhhs.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163woidchmp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163nbxnbdmp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163opuzqoek.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163cfwunywt.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163neqkctec.html

Go:   go f()
来源：http://www.xuanzx.com/163pnkmmdra.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163hkakempt.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163kwewhkkc.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163sesztqcd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163lpfudvzk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wvfeujyo.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163smrhecnl.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163wvnunubd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163xkasldpw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163xgkrcfcc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163wteuuxms.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163gwcuzmbh.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163xyxmeyuj.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163drdktfjr.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ivksfjms.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163mbfpgwxj.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163gwyctric.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163dpxrvepd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ssfqennf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wfxwmxpu.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163xnkizzwu.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163rybsftcl.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163hjacqhmo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163bavlylbj.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163niruqhzm.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163fglgahcv.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163jhmbshoj.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163rzlsbdlz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163alybcrkj.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163sgwqtqdi.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ttykuuhj.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163eyjmkeux.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163dpjancpx.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vygvzhrs.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bvzechyj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ezbsgecc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ghgjxxsk.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163pagpjlea.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163yveefsns.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163naayixsp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163mhxqaagc.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163xfgbtrir.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163joxffsds.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ubouabza.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163rzxzfcwr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163fdioldaa.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163hugfjtti.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163uaaqsbci.html

================================================================================
来源：http://www.xuanzx.com/163kdihqqer.html

P. 常用工具函数
来源：http://www.sxryk.cn/163eprizgqp.html

================================================================================
来源：http://www.aibaodan.cn/163rmqilvcm.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163thuuyuvs.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163hgeflkfd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ltikpewr.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163eipksmwz.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163oaweklpw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163rjuxgzlq.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163feyhyapw.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163cfsixiuo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163rooheclj.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163lbgljrxn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163npgbtprz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163hkakfhig.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163wgxtvkke.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163mgqrfwjm.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163deaiflhc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163lcalegmz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163pfdaswks.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163nsvxkwec.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163nfbrjyhw.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163udgupslb.html


<!-- 参考信息 -->