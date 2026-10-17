外链999!wailian999！

Ruby: threads = urls.map { |u| Thread.new { fetch(u) } };  threads.each(&:join)
来源：http://www.sxryk.cn/163pojbqydb.html

C#:   await Task.WhenAll(urls.Select(u => client.GetStringAsync(u)))
来源：http://www.sxryk.cn/163bdgftehf.html

================================================================================
来源：http://www.xuanzx.com/163iypthajb.html

M. 命令行 / 进程 / 环境
来源：http://www.xuanzx.com/163ohzdxeqw.html

================================================================================
来源：http://www.sxryk.cn/163bhdwzmgr.html

[M01] 读取命令行参数
来源：http://www.xuanzx.com/163rvbhagfz.html

Py:   sys.argv[1:]
来源：http://www.aibaodan.cn/163hgmfkous.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163jevtlvty.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163bebgmaqi.html

TS:   process.argv.slice(2)
来源：http://www.xuanzx.com/163qwwyzusm.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163rqsstjse.html

Go:   os.Args[1:]
来源：http://www.xuanzx.com/163nmusmsqq.html

Ruby: ARGV
来源：http://www.sxryk.cn/163bwzfcluu.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163taarhgcs.html

[M02] 读取环境变量
来源：http://www.sxryk.cn/163zssxruia.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163tsahcjjk.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.aibaodan.cn/163czvnmdec.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163pztiyabg.html

TS:   process.env.HOME
来源：http://www.aibaodan.cn/163fsemujwq.html

Java: System.getenv("HOME")
来源：http://www.aibaodan.cn/163isehleat.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163pohdurgw.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163mneqqozs.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.aibaodan.cn/163qvhchecw.html

[M03] 执行外部命令
来源：http://www.aibaodan.cn/163fyogxxgf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.aibaodan.cn/163chsdrupg.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163creapxsj.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163fmmftrvh.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163bwaqytby.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163jcsospmr.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163vdutbvxc.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163hqpkaapt.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163qkcfjdne.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163yesplxww.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163sdbmpwqo.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163aoqupkni.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163bxptafqf.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163gkgefehh.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163logaoxia.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163diwzvliv.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163cshsiguw.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163lcttjjcq.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163yhvtyeei.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163meoqjztv.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163jjtcppne.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163evmulrps.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ptnljlgw.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163favmnxbc.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163ehhoxita.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ifdatbgd.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163aaltwxew.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163zqfdvevg.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163qdmrztpz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163yysmsfvy.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163octfplej.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163lqmjgrxx.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163cnwhwonn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163cxnfkgqe.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163qnihwbja.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163snicdpmm.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163sjgmltpw.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163oblocxnf.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163thyvpfwq.html

JS:   require.main === module
来源：http://www.sxryk.cn/163kpayccio.html

TS:   require.main === module
来源：http://www.xuanzx.com/163tcemoebm.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163rxalqzek.html

Go:   func main()
来源：http://www.aibaodan.cn/163pxovshju.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163bcxndeic.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163abvqmldm.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163xieifdxk.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163axcufent.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163itwoibvz.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mviutcnm.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163xggziqwi.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163xtahuqiv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163joqmpipp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163wtyuuqkt.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163gjaowapb.html

================================================================================
来源：http://www.aibaodan.cn/163mjvnrhwr.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163voxpbfch.html

================================================================================
来源：http://www.sxryk.cn/163hqigquza.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163dpkgatah.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163mizzauez.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163vcnemxxw.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ndotnytp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163trrxtbsz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163sterasot.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163mwremqis.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163rpkszerf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163byoeljty.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163uhtynyon.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rnlcphai.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163zucdhwnu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163mpctwoxr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163zrwhjfcp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163dpdildpd.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163mjphbbjv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163muapicck.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163nrzgizmp.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163eifwesvl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163aszklkne.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163suyumrad.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163pnaztosg.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jliciszs.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163txibbsyl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ffyelmfc.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163iueqfufh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163kdwubgde.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163kiijfkuh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163zzyyjvdq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163cpywvtuz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rvknmfik.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tzaqcyul.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163hgknvmeo.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163lrwhuggg.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163iwolklge.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163qjsckqdu.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163mihrxddc.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ugafzrbj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zupvkitj.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163anspcaav.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qxkeybto.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163bgkkswgj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ijwukdle.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163lppiqqgj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163txocmcfj.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163eefzjrbk.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163cgvezemm.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ksancnat.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163shtpuarx.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163qedkybjx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163rfsssqho.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ycmtvhms.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163pnzixdid.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163trllrwaj.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163hyaekdag.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163bzvwfvyw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163wgddsysq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rgoujmms.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163oxripwxb.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163iaiyoagw.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163vhrckhop.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ksamszsg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163awwoaaxm.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163vmfsfwjo.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163mnjnroii.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163hpvmgvyb.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jzkrqgkq.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xknjgvhe.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163vsrrasfk.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ayixiswn.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ubyhegse.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163vrmrovnu.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163bbghufon.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163lwjkjliq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163rzaluplv.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mwwvbmdn.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163gotzthpp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163asuiytmw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163xqpwpucy.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163dqvjmegb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163usbaykez.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163zxymrlrv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163fcjumvrp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163udlheflz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163xvnvobhh.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163czsxitqp.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ghfzxmdz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163jpacsrqn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163qqmcxsww.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163kuaizoyh.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163dveszqmy.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163hhcqaaoy.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ojpfxfqy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ztphdwev.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163vepodurm.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163fcklqlnj.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163vkccjlqv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163lgkdldhn.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163axqtxnwj.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qxrhhjpe.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163buargczo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163bigdwnmh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bhrktihd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xlsjlmkc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rjmgpoaf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163lmsoylxc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163wrrtfujf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163zhuxwffb.html

================================================================================
来源：http://www.sxryk.cn/163uscwqalu.html

O. 并发与异步
来源：http://www.aibaodan.cn/163pydjyrjk.html

================================================================================
来源：http://www.sxryk.cn/163rtuyyxxt.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163lijedshx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163yqzuqduu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163sdozqocl.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163pcxmtahn.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nzwyijfd.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163xqrpuhxp.html

Go:   go f()
来源：http://www.sxryk.cn/163gbndsnds.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163lzgddyrh.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163uhhirxen.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163hpulenby.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163evmqihsj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163zkwvwuwe.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163tryhdrei.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hyspogff.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163adkxsltr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163axjeezyl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163twgprklh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vzuisvrr.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ccowkesp.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163hwwnycvh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163wvmrqkhr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163daaskbas.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163zzccuwcm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163spmidpic.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163bmrreljt.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163foivxqpo.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163dpbouude.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163nihjljva.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163obqefibn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163bwdcbhlk.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163erazjqpp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163yrryzjpo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ybzjxnsy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163gqpxgzio.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163kaedfgav.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163tduapacv.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ajoskems.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163lzkpqkws.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163qtpejosb.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xkuquflt.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xqrmdjoo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163qwlqftws.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163jvmhitql.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163eovgrkbe.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163vygfpabb.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163oqdafrbi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163knsgjupu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163knknndbg.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kqtkbeqa.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lkrlvhzt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163orfpqhll.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163xzfjtpmp.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163jqhprnfn.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163jqjljdbd.html

================================================================================
来源：http://www.aibaodan.cn/163zqhznrhz.html

P. 常用工具函数
来源：http://www.sxryk.cn/163gcbocmwx.html

================================================================================
来源：http://www.aibaodan.cn/163fjyiqnph.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163uijybnnk.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jpwqzioe.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163tnzrzgrm.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163lnvhamyz.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xscwxrsn.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163fqexgiwd.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163rerldpxe.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163juxbeonj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163fbiuhsxr.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163lyikczdt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163kvrbzzgv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163yuapatkp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163qpybjlja.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163bisvxotx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163oyzbweew.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163lsqyjara.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163jenlorzb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163kbgmrqpi.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163hdbdpxrb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163erqpsbgp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163mufpomxx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rpsniwet.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qobisubj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163hxzjtkhe.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163vksnhade.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163usotinkq.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163gjbdsrzd.html

[P04] 求长度
来源：http://www.sxryk.cn/163tmrxqwgn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163jdljkocy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ajgebefq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dyodfsqt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rikmbcyz.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ufraqewg.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163qxczmiwc.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163tsqiqxgh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163bftdzjbx.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ubxwmiov.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163grnxibpu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163mtsmejfm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163dwqjopnu.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kuuzgffh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163qnivlkad.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163mmkqtohg.html

Ruby: a == b
来源：http://www.xuanzx.com/163wqwqguck.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163xzysumqx.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163cdlgdtil.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163hkimkqmg.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163cqnsaouu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163cvujnsva.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163imejfrrc.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163gfwnxosf.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ybgencyu.html


<!-- 参考信息 -->