外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163iwiizxhx.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163pgzkwtdp.html

Py:   sys.argv[1:]
来源：http://www.sxryk.cn/163cmclcqla.html

PHP:  $argv;  $argc;
来源：http://www.sxryk.cn/163ajirndne.html

JS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163dhntsvhz.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163opezedrz.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163abzvbbvg.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163mgwzyncp.html

Ruby: ARGV
来源：http://www.xuanzx.com/163aqtxoytp.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163lzcyqwyd.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163dyjulzao.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163terwuukq.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163umufuquj.html

JS:   process.env.HOME
来源：http://www.aibaodan.cn/163aneupowd.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163akgtoxnp.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163kieikrkf.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163lqzthhbt.html

Ruby: ENV["HOME"]
来源：http://www.xuanzx.com/163nfrxfwwy.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163rpthveew.html

[M03] 执行外部命令
来源：http://www.sxryk.cn/163jmnvmlbm.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163kulmjier.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163setpbvna.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163gaqbmlbk.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163gmbabuho.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163pyaohosy.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163mqcjucao.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163tfpxcrpk.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163ctquhgxh.html

[M04] 获取当前工作目录
来源：http://www.aibaodan.cn/163vekbzeld.html

Py:   os.getcwd()
来源：http://www.xuanzx.com/163rsrthhcb.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163gmwuxnen.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163mxzyykvk.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163mxcbgoyk.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163nbamsdzh.html

Go:   os.Getwd()
来源：http://www.xuanzx.com/163rdepjwkp.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163csejovbg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163sywlagbk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163kcuimdkq.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163jsnogfns.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163kjdmhcvs.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ppobxian.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163jkkoopwl.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163zqqbbdrc.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ihsrjzyb.html

Ruby: exit 1
来源：http://www.sxryk.cn/163nmgbyosl.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163lfcnljji.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163nuprmpsv.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hhmtcqlc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163rwnbysqv.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163frkbmrlj.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163zconjwux.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163yaiznzfx.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163ogkwhbqq.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163nycpzbre.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163slcgantl.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ilmvxoia.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163bixciqjx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163tpjjozgw.html

JS:   require.main === module
来源：http://www.xuanzx.com/163dctubagu.html

TS:   require.main === module
来源：http://www.sxryk.cn/163eaqxufan.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163ykesuvtz.html

Go:   func main()
来源：http://www.sxryk.cn/163cedcntxv.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163jobutzit.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163usmuukck.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163illvvwtk.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163fgpaseqj.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163gmsdvjdy.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wlxlhcar.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163jsfdaids.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ijvbgvxf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163cjqxynrg.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163wrcncnoq.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163raijiifq.html

================================================================================
来源：http://www.sxryk.cn/163gceckehe.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163typovycv.html

================================================================================
来源：http://www.aibaodan.cn/163otxdwkwu.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163fbpqfnon.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163joovcmzm.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163pokjbcit.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163jnygmmky.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163xutybifu.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163vmvvskma.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163vpxwpkok.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163luocbulx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163mjxsqsst.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163vhndqxgy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fpaqjzaf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163kgwoayxs.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fzmyleqc.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gcrnixit.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163qlvhinkn.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163lsmvjjvu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dwaxnxqq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163meiywqui.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163xzsrlxlr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163vnoorbsz.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163lkmooixd.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ubtmxgnr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163umxzlnyi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163itqzyxec.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163idimncvb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163qxtkbrhs.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ldavzupn.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163clsoggck.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163tevtowcd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163enttppbf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gvlkyitl.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ziiulnvs.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163lioadhsa.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163htirshcs.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163sgpbhqbz.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163ustwgnaw.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163pqojwwcx.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vpjrmurm.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163khjbgbnf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163pfzkgpry.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163zquuudto.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163nofefhfz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163kscpmrux.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163scjjunzt.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163xxtvkoux.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163fipivaor.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163xwmhbnsh.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163qixlerbz.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lkwxwdla.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163dottqfyi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163vglmcpso.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163qlalcyjc.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163nzzjnwhi.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ajmyjmcg.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163wbykrori.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163dhxgxgps.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163xvlrgkyz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163hjezbqhn.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163mstwoqrg.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163czmxjdpm.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163eyhgdvuk.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163olxvvgtd.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163shbefriy.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163vyvctwzw.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163oytzjvgw.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ikmdcodb.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163epobxmei.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ibgwtxif.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163vygdldmw.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ntshnqij.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163pchdawmx.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163zgvepufu.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163maevcujy.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163kergocwb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163mxerklcp.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163vhrxwucx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163idsjktcr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163hskdnprg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163bbjanlsp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hwjrynvm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163gbgxrcsp.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163devsxjuj.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163jifbmnaq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163zrsyenuz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163lrecsbmd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163bartxvuc.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163iqiicrnk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163bnbwryio.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163rqxvmoxo.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163oxovtzfd.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163yffiriqa.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163hlmipgbg.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163kmgbmgna.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dsphtzwf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xiwxwrlg.html

Java: // 手写递归
来源：http://www.xuanzx.com/163bfecveud.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163lrgnyrbj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163qwzzvmpr.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ceehjphs.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163mpftzfjy.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163baveqjht.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163yzpyplhj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163elemkref.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163usyjvhaa.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163gxshgotx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163lauwsskm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163owrxcgyz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nlxtfjeg.html

================================================================================
来源：http://www.xuanzx.com/163jmuxpykk.html

O. 并发与异步
来源：http://www.sxryk.cn/163qbhyweew.html

================================================================================
来源：http://www.xuanzx.com/163osznskzx.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163zzpazzne.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163jqbiawkt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163vdliztil.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163lbpwyawl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163judquemy.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163iuktqbmn.html

Go:   go f()
来源：http://www.sxryk.cn/163kwhjnoph.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xskfvylw.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ncmkwcvy.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163qhzzvbhy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163myubgqol.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163kgaascgw.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163shyeazzk.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163uckgjvzj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163utfnulzt.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163fazevrek.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163myltrdst.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163zvtwmjwc.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163jegklcak.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163lyffpqra.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163rtpulwed.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163czoutmxn.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163eyldgkpr.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ptqsqjnu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163cqvrcrcu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163xpcjacox.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163xptfjupx.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ehzuxzag.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163mrylhmvw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163ytpycllb.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163imbsaoan.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163fobbusgz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163qiuxqagy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163enjhfoxf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163zpimsdsh.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163nmkvjwda.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163xxfxvjcg.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163xwtwfwzg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163wfynqfvd.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163qfirbxvl.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wcxddalq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163nghrrfmf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163zcgdjzgk.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163haiwwghm.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163cvonnwlg.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163khktycdw.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qdjrafep.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163dduiiqca.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163yyetqyso.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163juowgczl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163calpvcke.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163zhzosbwd.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163bjcifoek.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163dybsyqff.html

================================================================================
来源：http://www.xuanzx.com/163nfwmmpfp.html

P. 常用工具函数
来源：http://www.sxryk.cn/163dqwmzzlr.html

================================================================================
来源：http://www.xuanzx.com/163pscimtze.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ofxtcxgk.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163bavwqmgv.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163nprmbxof.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nnmbdmho.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163bhjafqux.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163pyvfiazm.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ccgzwbcg.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ilikdrxa.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163mxxdjdrz.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163hkvcpqoi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163mwxogwbx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ozjcynzq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163vvgtghmb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163novsahiq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163fisiqtcm.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163tuvqmdya.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163cqtnglre.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ehilayqm.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163haykhmqu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163qjpvcmgz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163yytcrjbv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163blpbwyet.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xujgwibe.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ewessujx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163dxdstbbg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163yktjyleh.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163wfybazof.html

[P04] 求长度
来源：http://www.sxryk.cn/163fzeqiocg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ddmucdeu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163icgbecxt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bbtruwug.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163fkrswlxs.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163tpjlnaqs.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163xtdvgwam.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163hukgtqto.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163rhvatvxv.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163bwnemwmo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163thxmkehz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163bzkhzhyx.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163gkbnfhul.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163gfqgmjte.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163uollgdxg.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163uxharvoz.html

Ruby: a == b
来源：http://www.aibaodan.cn/163lljlawgi.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163cjjmchmg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163wjsjaymo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ldqaaupk.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163evedukep.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163weayhlcy.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163odrggmkg.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163vovefazr.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hvvcmkhu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163znlprxvl.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163kozewdvv.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163mbuynpga.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ymxozrai.html


<!-- 参考信息 -->