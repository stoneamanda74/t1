外链999!wailian999！

TS:   resp.ok;  resp.status
来源：http://www.xuanzx.com/163thadiclk.html

Java: resp.statusCode()
来源：http://www.sxryk.cn/163xroviapa.html

Go:   resp.StatusCode
来源：http://www.sxryk.cn/163kjfixnsa.html

Ruby: resp.code.to_i
来源：http://www.sxryk.cn/163gaucacwc.html

C#:   (int)resp.StatusCode
来源：http://www.aibaodan.cn/163avpplktj.html

[L08] 并发请求多个地址
来源：http://www.sxryk.cn/163qkqdgkao.html

Py:   asyncio.gather(*[fetch(u) for u in urls])      # 或 ThreadPoolExecutor
来源：http://www.sxryk.cn/163bjonnhzx.html

PHP:  curl_multi_init() 系列
来源：http://www.sxryk.cn/163pdtqevzd.html

JS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.xuanzx.com/163frajbkwt.html

TS:   await Promise.all(urls.map(u => fetch(u)))
来源：http://www.sxryk.cn/163ubsxkcql.html

Java: CompletableFuture.allOf(...) 或 HttpClient.sendAsync
来源：http://www.sxryk.cn/163mfdfumat.html

Go:   errgroup 分组并发，或 sync.WaitGroup
来源：http://www.xuanzx.com/163xticyqfi.html

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.xuanzx.com/163oewlcnvx.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.xuanzx.com/163byibwuxj.html

================================================================================
来源：http://www.xuanzx.com/163vywslkro.html

M. 命令行 / 进程 / 环境
来源：http://www.sxryk.cn/163ahzaunzd.html

================================================================================
来源：http://www.aibaodan.cn/163zcfmeicq.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163hawrgxjv.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163hxjxrfjh.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163bteocles.html

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163iwdjxrtl.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163djnkeqwz.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163xjimalld.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163bqglwwzw.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163dsewqbep.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163bsxgfjun.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163zncxqrvu.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163ceruidtb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163qorrkqhq.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163oyaqtgcs.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163eivgoekm.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163gjtfudvq.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163jjukbhzp.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ejaygmql.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163yozmddvr.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163bxrunhqm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jbfwenvo.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163hqalmuav.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dqbiejti.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163lojhigex.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163wpgolkav.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163ddceoeix.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163cumnccmn.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ukoeiirq.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163tkkdwmdf.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163jrypspyn.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163eztkcwuz.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163fdacbzql.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163wgfqmxkp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163gvylngty.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163daxknpdy.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163ppeohete.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163lubndlvv.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163nxlfcfsi.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163cmehijos.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163vfsxyxne.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ouuknnkx.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163vvdgzufq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163dstwhaua.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163othukxth.html

Ruby: exit 1
来源：http://www.sxryk.cn/163lfnqeimq.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163avleklya.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163bjjcsilh.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163pmflcpzs.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163aidroodv.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163wmlyipnb.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163uauhnpuy.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163waphlulq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163xqssxzhm.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163qywzoteu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163kjrkstwb.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163bpjuvuuh.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163ikaeyglo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163pwonehhv.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163doirhgvv.html

TS:   require.main === module
来源：http://www.xuanzx.com/163wmoqwdhm.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163vfjkenqa.html

Go:   func main()
来源：http://www.xuanzx.com/163wczkwdcu.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163qkgxieav.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163fhiplpoa.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163eybjmtee.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163lsnizyrz.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163fzsxkuuc.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163edtqrfga.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163nvxmjekc.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163nikbqcbe.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163cszkkdah.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163qkyixwsp.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163vcdgadkp.html

================================================================================
来源：http://www.sxryk.cn/163khcccbju.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163rfjvujle.html

================================================================================
来源：http://www.aibaodan.cn/163hntqaczp.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163orcafakv.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163xxlmkung.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163izpuhazd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163lrkoptyk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tohtcbjh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163tjffspbr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163qjtvgqgh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163gzozljiw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163iuibdgdi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163cdgwokoi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163bfvewitc.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163ypcvefvz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163svcqtxwg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dfcrjmuh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163trhgznge.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163laaiiqup.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ssifwyya.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163exbtzkpx.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163rwlffuyj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163bjserqqi.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163bwbcaldu.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163cdwwbahb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163mqhngjvk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163ppbixzkl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163lhixalnr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ivvozhee.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ecrrkliy.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163nilppkqd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wfjnzzgi.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163sscylgmp.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163sewanesp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163uzntfaka.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163lboprnpg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163czvsbztp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vaqejgmi.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163qdkqvbuo.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163jbfwfryp.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163mlamdqsn.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163vzstiyvt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163pjssnlnt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163tnlnpdee.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163rzvcgxtr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163dfvyajnw.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ckgjhebf.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163wwlhwhcm.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163vthqcfez.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163khezsing.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163cspwdfne.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163zfcgknlh.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163chyghacj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163ylzwjgmw.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163bvsuqnde.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163vdcvgoij.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163tcqxsarj.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hhukiycn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163mmbhssod.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163wrnpjmqj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ccubrbqg.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163eukjsebn.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163ocvlxcvl.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163jblomzeh.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163lvgcexpm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163mprprxex.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163kuljlxgk.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163sxiicpdz.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163tswvtepc.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163vkxwpsqg.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lfkfxbna.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163stcgfqkg.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163kupcpfcz.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163txjwixmq.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163solrhtwp.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163cabeqcpi.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163qcmzardo.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163edcowivk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163dpbpftyd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163kipezcpn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163brmlbojq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163erdjrlvn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wryfukst.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163ivnswqdj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163hwhixsfz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163fznvygiw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163hyplzapm.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163fwftzfzr.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163llsnoxzl.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163idmjomqa.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ahwfjyzq.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163rqffvjdn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163aoptjjtb.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163qtcquaje.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xszwbenn.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163pnmnzeut.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hrfsctlf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163xkeinpum.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163biyaozmu.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163xqsqozby.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163czecqlsq.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163bhvcmeqo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163heeexjop.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163hmaqklmn.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163erkmujeu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ziyojbjg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ynyagqvl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ovlgddsn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163vbupbtah.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163aifmamco.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fwppynwa.html

================================================================================
来源：http://www.sxryk.cn/163gejnwzqf.html

O. 并发与异步
来源：http://www.aibaodan.cn/163sdigzhxf.html

================================================================================
来源：http://www.sxryk.cn/163dcyhjeib.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163lqellyeu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ljtdsgpa.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163oxkurnfy.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163dzsudckm.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nzlbamhr.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ppzytavn.html

Go:   go f()
来源：http://www.aibaodan.cn/163vjjunwgw.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163oixowkit.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163bnvqlous.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163oiwvuhwk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ffcnrexe.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163cokbihsx.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ntnmaxkv.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163irxwxiij.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163xtbofroj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163bykbldpf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163atnnjwfc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163nsurkuzb.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163llrsorki.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163rkqefxmo.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163rssnkmti.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163tqltzoiy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163kvshyhzj.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163clxiinfk.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ootvvvau.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ybewzych.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163yyxnkbvq.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163hnukrola.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163clniqqxy.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163dakzvizv.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163hdyphgnr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163yysqrpvb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163vghrsfct.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163xeqrsbbb.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ozsdvlwp.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163pomptvkw.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163bvdoerjc.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163izsjtcyp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ibhovgtz.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ovstzbdb.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163djkiaukx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ofrkejkt.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163zfbiucru.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163jvkhctei.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163yonhaprs.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163qsajfevf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163leaftvhq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163pdwalkhy.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kkfgckrp.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ajsgsvof.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163uwctmrat.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163xvqeqvnb.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163rfpicvpp.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163gqimrjxp.html

================================================================================
来源：http://www.sxryk.cn/163vanedrjr.html

P. 常用工具函数
来源：http://www.sxryk.cn/163zylqewry.html

================================================================================
来源：http://www.aibaodan.cn/163eoguqjvw.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163yioukhnf.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163maoeutnu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163rzkyecgv.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163oluqypyo.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163lixsayes.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163pnloprij.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163vsmortuo.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163xcyjjyvp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163qsuptwvg.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163nnuotuvt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163wukcajxf.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163kyztctbx.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163isdrxwiq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163feiepiyp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163bitefdtb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163cmjiwcgu.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163lhfnxvvh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ammvchhd.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163yyxllkhg.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163igkcaeza.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163bnnziqhd.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mrljufcc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163fekmixcw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163hzuprrdz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ansrnobu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163hdvprgpi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163phjdlflb.html

[P04] 求长度
来源：http://www.xuanzx.com/163adljgmbh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163sczyctwt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163iucilwgz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163urzqueuz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mgzvikkj.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163sftroccf.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163rjgvnxdj.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163krerzhri.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163jvjghfce.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163svejlqsr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163bwhpojjo.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163npczycnr.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163emjrxztn.html


<!-- 参考信息 -->