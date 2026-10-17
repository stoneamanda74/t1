外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163ixpgzppg.html

[M01] 读取命令行参数
来源：http://www.sxryk.cn/163lydejlid.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163vfnfgrwe.html

PHP:  $argv;  $argc;
来源：http://www.xuanzx.com/163tloutfao.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163rjwjnbys.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163sgezkgle.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163yoajxejn.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163wylzengj.html

Ruby: ARGV
来源：http://www.aibaodan.cn/163cosjfohe.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163rlukckxp.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163cjhqkpbc.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163jzfcibbt.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163qawhcvxj.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163dcrvunhz.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163zuxqglrp.html

Java: System.getenv("HOME")
来源：http://www.sxryk.cn/163oqodiwjv.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163vlcydmou.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163mctzhtwv.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163njwrpeyc.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163azvbqyah.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163vcnaqotk.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163umyqerot.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163louewkoa.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163hzhejgrs.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163ftvdjjtj.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163bncgzvpe.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163iywsokcc.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163nzmgflpz.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163qezpbvgt.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163dflijpkl.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163jmgtqpwd.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163shtwytjw.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163wfhqvnzc.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163nlyijzck.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163tkxhvazy.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163uwqgudtx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163tqewnxpy.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163jmkypgrn.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163rubljvte.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163hpkoacvn.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163iwubnzmg.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163vzntbryb.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163pbybjvlo.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163unefmtyq.html

Ruby: exit 1
来源：http://www.sxryk.cn/163rwowmvij.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163eojwujbm.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163wepswosh.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ozjpvxqv.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163wycrufty.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163rrmpyjnb.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163sqskdgsc.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163dmnsccgm.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163pgwgfjwc.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163dkmrbpfo.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163pulbrjpz.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163wpztfvum.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163auqicdof.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163eejtubnt.html

JS:   require.main === module
来源：http://www.sxryk.cn/163zxsvwioh.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163evvxwybq.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163kguqhejv.html

Go:   func main()
来源：http://www.sxryk.cn/163hfujezdm.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163igmxoohb.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163tabizaqu.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163fveynmdc.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163usxmhddh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163nthlyuuh.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163qcousawn.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ewcjuaoq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163xgkcuibw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163psxqurhw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ejeyktaj.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163flobstzb.html

================================================================================
来源：http://www.xuanzx.com/163wlhdaapz.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163bjnzrznk.html

================================================================================
来源：http://www.sxryk.cn/163irkdshlg.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163ezadonjg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163lzeerdud.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163nhposqiy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xksfeppz.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163umqbhsnh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rkoeedxe.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163njtvvema.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163etslgahm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163vjbfwdxl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ucpcdqos.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163onivipdk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163vfjsrkgj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xfdhsajq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163noihaoeu.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163frnfljuc.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163aravmtws.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163bzhtblgb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163touvizrb.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ouracgcd.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163qmcvejbh.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163yerywhwd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163tvfowmwk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fxdegkqc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163wiklweec.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163sjtknalb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mdxsqnnt.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163krvgpcot.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163zjgnhtry.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163hwntqyzg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163xadlbqlj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163nmjuxknc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163lefqfjhc.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163knoaxfsw.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163vcldlruv.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163acdooyzv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163upobtrxj.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ncjzqfnb.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163jzcuhhjm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ladlpsqj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lcmpkspn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ioydwpcv.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163imwmxokm.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163yzmttaug.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163sqkyeijr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163molphvui.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163wrmqkvqn.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163zixzvydq.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ozqzvixb.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163usthsxou.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163crjahjrv.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163keftftnz.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163hkskqaqb.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163yxtvcppd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163rbalsujt.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163tgrlivhr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163lsssftsu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163reoiyiig.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163knbnmjxd.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163bzuisvtv.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163sylcflpk.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163gzvdsqrt.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163xzoyxckf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163lpaygfhf.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163vcgetlld.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163qgsxllrt.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163pwpzzqok.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wjndrvfb.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163pfbnzvce.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163edwkvrxy.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dpmyidiz.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163xnmqeksr.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163lnkpigwe.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163ggthzbve.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163pjhoehah.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163hbjafmzo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163lvqtzcyx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163orvexgis.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163mhvkioea.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163hbwhuiya.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163nqoihaja.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163nexvapqa.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163sxmnliht.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163setwxozf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163wqjzjing.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163xdhfxldn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163esvplxrw.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163fihmlcco.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ousrynre.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163ntvrrwjr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163biktwdvy.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163vzbqhuqf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163eibwtlsp.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163tarrhgvd.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hsjsrmnt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163syskjnak.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ezclszmy.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163qedodpkw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163aecubota.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163zfheqeml.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163kgjqrvot.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163gxfdknsc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163ljwvsbzd.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ojvmayvl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vbbejofy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163aojorktw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163tawmmdzh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163xzcckuzg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hvhjusfb.html

================================================================================
来源：http://www.xuanzx.com/163twlitdwk.html

O. 并发与异步
来源：http://www.aibaodan.cn/163jznbakhx.html

================================================================================
来源：http://www.aibaodan.cn/163xpnoyaon.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163gddtlygu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ddulqwkg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163tlfeqxky.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163kqrpgwrc.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ivslixac.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163mujonasw.html

Go:   go f()
来源：http://www.xuanzx.com/163tataeosi.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163qhecqlmg.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163cupammbi.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163zabsqshz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163zxzxbzpq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ilitvfla.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ifjpsttw.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163qnsllnhc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163jpvijgfh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163beyirjyr.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163rturrhtp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163utxeaeym.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163nppzyqsp.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163upkfpval.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ijobiaql.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163aomjvrjn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163odxignlj.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163wzvsmmpb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ubavmyhs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163vffyomfp.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163qihiqbcn.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163zepdyhqt.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163rwfwtlno.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ttltamqr.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163gqeoghux.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163jyhqxolj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163iwjxqkvo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163clzyoulv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163mnpgxdtm.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163daitheef.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163puyhbrti.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163sjkoeybi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163gyzkenxn.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mjaafsng.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163npjuelfv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163yhxmcewj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163zgakpyth.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163awriaaib.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163dgxufjnw.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ylwtjlcm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163rwoirfec.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163gfgfxdrc.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ibokpndi.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163blrgrbzl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163rwqcigbx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163gisfxblo.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163srsgrsiu.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163mjwalusq.html

================================================================================
来源：http://www.aibaodan.cn/163rqprmgnf.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163wnwiqlge.html

================================================================================
来源：http://www.aibaodan.cn/163bholvudn.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163bvnvlgzq.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163bcuskwfq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163klyrxjxs.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163psuctrah.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fiwrmuha.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163dyokvfzc.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163myoazuci.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163wmbftrae.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163bnlhnelf.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163irglbzsm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163sflojwhg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163adavkabh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163postyfne.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163mlwftdni.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ssohyxkj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163qvkhkodd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163uijwoheg.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163eodaodwg.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163agurovdb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163eyrlnhey.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163vlugdrql.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bxycqvqw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dzqrgueg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163foiekudp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163vunqoetb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163nsmmmogg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163gwseyzbg.html

[P04] 求长度
来源：http://www.xuanzx.com/163iauwtcdw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163vjuhjqfi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ilkvmwku.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bbktyqbf.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163qxuzzrde.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163urhgxrwb.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163wykcrfrw.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163aaknlkdj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163xkzvdino.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ofzabfrq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163kkcbpljb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163oozvizre.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ohdwavch.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163jaybhgzh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163lzzzwwjo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163tpwkfkky.html

Ruby: a == b
来源：http://www.aibaodan.cn/163qemtream.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163fyejnjpu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ddnwixpi.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163vxfceoxf.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163tusqiskj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163quepejdi.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163weuwhyoq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163tfvdhnld.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163zjebhbjs.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163akfcljlp.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163cgacgzsw.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163temskzpk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163mfzbfyun.html


<!-- 参考信息 -->