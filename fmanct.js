外链999!wailian999！

JS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163skclazvz.html

TS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163zuzmfvcu.html

Java: args 数组（main 方法参数）
来源：http://www.sxryk.cn/163avhyunsa.html

Go:   os.Args[1:]
来源：http://www.aibaodan.cn/163glqeryei.html

Ruby: ARGV
来源：http://www.xuanzx.com/163rqxiicco.html

C#:   args 数组（Main 方法参数）
来源：http://www.aibaodan.cn/163dbtzvhas.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163akofhgjy.html

Py:   os.environ.get("HOME")
来源：http://www.sxryk.cn/163gibuzufb.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.sxryk.cn/163sgonurqq.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163cyjnvjff.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163efziugso.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163azvtaclh.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.xuanzx.com/163mpsuruvo.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163ipdbzfzo.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163arrlqqmf.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163hpwhfmzw.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163jkvyfphh.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163cwwtskow.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163zprtglok.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163fmvpyuoz.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.sxryk.cn/163jrpnovez.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163eedpqkyj.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163gqmlifae.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163kefgxljf.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163qldzrhzs.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163cvkvdspx.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163xcpyuhmw.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163fuzeekkr.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163qvuflihm.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163hxpfpsie.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163hmklbsbw.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163vcmwgbtd.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163momdcvgq.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163xtuvxhka.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163wyxdpllo.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163lhdwygdm.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163xbleiiew.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163enfjsagy.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163jbofcqdl.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163pcywfone.html

Ruby: exit 1
来源：http://www.xuanzx.com/163qtiipzro.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163dqzdvzmd.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163lyvcupiu.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163fxeftjav.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163klhzwbka.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163phmkfcun.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163cwmtdeaw.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163oxheaihq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163fcekzgpg.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163ulytvqgi.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163jdpcogmj.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163iowlsizk.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163earisexl.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163jysokybh.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163xhvczjix.html

TS:   require.main === module
来源：http://www.xuanzx.com/163tfjupsyq.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163gtyaodbj.html

Go:   func main()
来源：http://www.xuanzx.com/163etabuqvp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163jatlvsix.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163fygcbwhh.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163tsysmcqm.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163pkbydznt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163hukvllfl.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163qjzyjbdu.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163okaqxabj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163ocytdybl.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163mgiqvcgs.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163biyuieqo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163zxcakxny.html

================================================================================
来源：http://www.sxryk.cn/163gfozuorh.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163lhhkqatx.html

================================================================================
来源：http://www.xuanzx.com/163zofdsaqh.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163ypzozedr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163afhahduu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163irgnlucg.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163dwausars.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163dogaazlt.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163dqxgvlvb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163enigiccv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163afhqdxrr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163vopycerv.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163yqowjtmo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163fqohsscn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163dvvwbolo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pdnghagx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163nvczuctk.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163vqzzpgvt.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163bdupsyje.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163xpqvzmdq.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163lgooebmu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163vlpsdxaz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163qubqhjra.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163rvzohify.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163zjewsduj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163qvphxnwk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163gmffcroo.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163irdmpotf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163ddednmuj.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163vqdoxmbb.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163lsinovbe.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163uilqlcbb.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163hlqeusfj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163komeebvx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163dgsmxrxf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163rnchvedv.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163samqcvqo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163gligimqb.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163iysrxzjl.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163tbymvycy.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163xcelllsp.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163foaeaqtf.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163qhgtbbsm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rwmitngb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163uiuiqwfl.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163smizeiel.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163qvksgadz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163dgweulmc.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163svyzuyid.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163xxaamvtd.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163gcerkkgs.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163juxfgykt.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163onznogzf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163okncnwmb.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ktomjrrg.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163vwxopidj.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163kxfefjbo.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163cuypofnv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ocuqgefo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ooovstdq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163mgwiorbb.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163efrtpxjj.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163byrbrnyh.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163fdfyjnhk.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163uvitqujw.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ekfsbsxk.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163cppqywmf.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163uzanrhso.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163wjfkbuzt.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gdhcnqur.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ojauezut.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163wjbacxyn.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163kxijifju.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163wjqxkkfw.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rfvitfwk.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163xjomwezc.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163hqupfydn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163wfeexydl.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163fbjyetek.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163irgyeond.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163fziazzje.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163lxgkbkzi.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163syjbgnzr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163doqcesyt.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163cdfharjf.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zzyvngqe.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163qppoofnn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ubksprgl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163evcngzeg.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163wvzztsgd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163dscylgon.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163xtmwblhc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163cgfgauuw.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163apknxmju.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163hmaigcxk.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163idbzsfva.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ywcizava.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163kpdulqcs.html

Java: // 手写递归
来源：http://www.sxryk.cn/163uwkjscpt.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163vfkvdjer.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ituqftzf.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163vijyidzb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163qzjrwqvm.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ctbzijqb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ilgmlmue.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mcgzlhyj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163oepkthra.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163azcskoki.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163yfnzrmte.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163jxxgxbam.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163sawgwbup.html

================================================================================
来源：http://www.sxryk.cn/163lsikqsre.html

O. 并发与异步
来源：http://www.sxryk.cn/163uemslnck.html

================================================================================
来源：http://www.aibaodan.cn/163ctadakdq.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163isetgvpb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163mbxzzpyv.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163labiuxiz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163jbcwyyik.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yhborehk.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163hdhguhgm.html

Go:   go f()
来源：http://www.xuanzx.com/163sssjoogk.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163gwwatzrr.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163utlxisbr.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163rprddlgq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163xxlnuabi.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163flxsvzhe.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163nisqdefd.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163czwbzkua.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163hbjsyfbq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163eqctylrf.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163bhazpkyi.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163blfpfbhg.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163npozksyx.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163rqwuowaw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163xvqkburw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163arvgurme.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163prwvsnqw.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163dwpjawpn.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163uksmrrtc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163mbgpqoia.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163sjmduvtv.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163jfcclgbl.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ehmnhyqz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ieatbmph.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ncpcvmfc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163gmqvezad.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163dwwlsuds.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163bmpiakkg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163vuupboee.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163gzyevmkr.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163bosrvqfl.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ckwcqsqw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163aldctnsl.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163frrwdkqk.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hobhnpcj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163tbycmogn.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163yksddhnl.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163crjmhbsb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163abiujwwd.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163bhkmfbid.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163racwlmjb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163bsplricy.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vgxowoal.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163japggbkw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163tprweuhn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163lpxusxfm.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163qicirjru.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163tngmrdnp.html

================================================================================
来源：http://www.aibaodan.cn/163ocbmgfeg.html

P. 常用工具函数
来源：http://www.sxryk.cn/163usfdhpxs.html

================================================================================
来源：http://www.aibaodan.cn/163tckwrbxj.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163lnierdst.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163dkclpgzt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163lwhqwkag.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wgmmarvm.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163kiacsgpf.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163agwlgaja.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163atokeqih.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163pziskufj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163jktwnsye.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163sjbstlhj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163vtouvixc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163zbyakwao.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163twevcqwk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163svxihrcq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163uczmdiju.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163rlutveng.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163jlgpqenu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163dtpowwrh.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163yjvkoyef.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163gdgyjhwz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163fwazcmpr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ycfyhoxv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163knpejcpd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163jrnobmnv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163cabtnesn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163apmtvarz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163qidzpgop.html

[P04] 求长度
来源：http://www.xuanzx.com/163bhdylggw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163pjpmyczd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vnvjtboj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163kgcwbhkx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163nozjpfwm.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163bsixezxv.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163bulshxoe.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163pgoxjgdu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163lsdyrdip.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163cymenbmv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163mzpqanqq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163jdxvwqtj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163nqhgqtzk.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163crtxeppj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163bkzhxfwc.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163bnmthaoe.html

Ruby: a == b
来源：http://www.aibaodan.cn/163dbjgyejg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163grigtsib.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163xhagfvht.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163bctvtrjb.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ejktrsvf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163pbfzkrtn.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163sjjknwtw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163hpswiqfv.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163xiqzabco.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163sbpblhyk.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163faddrvvs.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163gtayhzgr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163vcafzoir.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ukktdhzo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nbsnffgr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cukxercr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163xorlcleb.html


<!-- 参考信息 -->