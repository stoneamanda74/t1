外链999!wailian999！

================================================================================
来源：http://www.aibaodan.cn/163lsawrrtw.html

[M01] 读取命令行参数
来源：http://www.aibaodan.cn/163iqbmtipx.html

Py:   sys.argv[1:]
来源：http://www.xuanzx.com/163bbhhvcug.html

PHP:  $argv;  $argc;
来源：http://www.aibaodan.cn/163fomtegjn.html

JS:   process.argv.slice(2)
来源：http://www.aibaodan.cn/163sbyhfvon.html

TS:   process.argv.slice(2)
来源：http://www.sxryk.cn/163neypmmnu.html

Java: args 数组（main 方法参数）
来源：http://www.xuanzx.com/163kitbhqkg.html

Go:   os.Args[1:]
来源：http://www.sxryk.cn/163lgpmoebq.html

Ruby: ARGV
来源：http://www.sxryk.cn/163rxlmxbal.html

C#:   args 数组（Main 方法参数）
来源：http://www.xuanzx.com/163iudehlkb.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163vmpqndez.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163hxgsurpo.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163iluqdmws.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163oeczlqam.html

TS:   process.env.HOME
来源：http://www.sxryk.cn/163xiyozwng.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163ywhagztm.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163przbiovc.html

Ruby: ENV["HOME"]
来源：http://www.aibaodan.cn/163ftqlykka.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.sxryk.cn/163vslanbhj.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163xgxdvakg.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ncditahz.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.aibaodan.cn/163zsrwwqen.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.aibaodan.cn/163nmguimjr.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163wnzvochh.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163ysxloneo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163fywlwcve.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163aylxkpsp.html

C#:   Process.Start("ls", "-l");
来源：http://www.aibaodan.cn/163alzixura.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163moogbdck.html

Py:   os.getcwd()
来源：http://www.aibaodan.cn/163wgulrzls.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163uunneltt.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163kqzsqacm.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163jhzuaizb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.sxryk.cn/163nfwwterk.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163beujgbfu.html

Ruby: Dir.pwd
来源：http://www.xuanzx.com/163blvjtniy.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163tcheadua.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163yopxhrma.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163tytggysf.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163hnhkewth.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qgubbehx.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ycftvwvt.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163fahniybw.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163llrnbkrp.html

Ruby: exit 1
来源：http://www.sxryk.cn/163eijnblnb.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ejocaygh.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163revmoqhr.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jhkvirio.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163mgfliofw.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163dubnauhn.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163pyfpugyl.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163blralqmn.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163jovkqlqo.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163nxntapvj.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163atvmenih.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163zqggcajc.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163trmbhndk.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163fmiocrpc.html

JS:   require.main === module
来源：http://www.sxryk.cn/163inkcmcvw.html

TS:   require.main === module
来源：http://www.sxryk.cn/163zdtwabsj.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163voocxxiz.html

Go:   func main()
来源：http://www.aibaodan.cn/163bpvfdqta.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163axhzpwxx.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163ibndysjs.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163jddndmmn.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163tghinlba.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163fmbhdnko.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mbisgowg.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163bidjidiy.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163pxllpwqw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163jxiyrhby.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163oplhjcrf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163vbwcalsz.html

================================================================================
来源：http://www.xuanzx.com/163bepxgcov.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163czrahfjb.html

================================================================================
来源：http://www.sxryk.cn/163bnyalzxv.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163potuusjy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163agqbtajy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163ipqlijnd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163zjgqapul.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163arvtwegz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163iqxqirsd.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163adikqsrd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163urcdcqjg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163mxkczdsy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163wjtwgoov.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ybqkdtca.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163yhawliia.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gwjmuufe.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lmmdqhmh.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163pnemgonv.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163mxenjufp.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163brooqcdi.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163fxghntmq.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163gtksrecn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163llvpnzdd.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163sbcxyzju.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163gtwlknna.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163acdzsqcv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ddhvnsbb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163exzaukmb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163vlpapylh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163nhswnjji.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163whfxcvev.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163luqmwiih.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163vljoeniu.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163hjkzidzn.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ygpruljn.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163dlgmnuqs.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163avbzvlxp.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ddttujtl.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163cuwgndsb.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163ncpjzjvs.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163iogaeiyy.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163xjcqifqv.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163pqbpykyk.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mlbvxbai.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163phazgxki.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163kmlxskpv.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163ltxyyoyj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ykvxsvrv.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163nvlainpr.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163raimotjg.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163fyywwrqd.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163efjjriol.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163idxenhmq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163sjkgdlax.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163zfdoppwm.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163kgrerjfl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163vntngjyr.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163eablwczj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163tvvhccbu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163jokdodfp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163idzgoqeo.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163cefnugqq.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ricwndrd.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163djceicsj.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163djleyxbg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163truxeyim.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163xiqdpzhi.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163judfowlb.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163mimvhuqq.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163bgtudawd.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163gzdwpmcf.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163tasnljva.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dfaafavj.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163azfjfxvh.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163dfallwdm.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163tvrebrxe.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163giaozyyb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163akmgljhf.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163xelkqwzi.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163xqpslpfr.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163bzlwtzwx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163rtrplnnf.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163debvgtry.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163rnqjhkmb.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163iezzsuch.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ixykfzdy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163szwxlohs.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163dfrktgdd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163blvljhhq.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163zpcoyhkn.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163qcxdlwxx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163haeiimay.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fjavbhoe.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163xmrcyujw.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163imojbesu.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163axvqnemr.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rlsonrrq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163yqptrqxj.html

Java: // 手写递归
来源：http://www.sxryk.cn/163wyhcetmc.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163rhivmcra.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163cmbomndq.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ixzkamkq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163oyhljdzp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163kguuqblm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163fbpquobu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qdwczjtu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rwynhznf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rqjosadw.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163qkotlyey.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163cbpfmnke.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ftntrwzr.html

================================================================================
来源：http://www.sxryk.cn/163vxadakqq.html

O. 并发与异步
来源：http://www.xuanzx.com/163mrcqazjb.html

================================================================================
来源：http://www.xuanzx.com/163styheubd.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163kveilxri.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ygucwqgq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ipygyiwr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163bgmbnrcn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ohglxyxw.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163lekjbxwx.html

Go:   go f()
来源：http://www.aibaodan.cn/163mlrmujgo.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163adjqcmfo.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163mosytbeb.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ylwkrdlu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163lzhgvbhh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163pwjvfvwq.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ykgumgfw.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fudsyebz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163tsgfqsib.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163eupaertg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163dprgrbsh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163hvxztuak.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163tmtfagbh.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163hemhjidx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163fkbnwamh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163sqvxkyzl.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163codrqhoi.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163layncxcm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163yhdnfpbj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ptttcskm.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163sovpdufv.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163wjdprzjk.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163kncmdcpy.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pddgbezg.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163mwtyzzxu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wyexabtk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163tkpobqhc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163vwvftilu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163gpepoxaw.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163tieufyav.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163fialwtjn.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163fskcwlwo.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163yocddwsr.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163milqnvxv.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163mmukfonh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ewinkuwd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ivsxpyhz.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163xoojykpu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163frmmieti.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163mxzmxomx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163icurzqzb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163tbrddmrt.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163lfweperr.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163brhfxmvj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163sykbyugn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163qvbezphd.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163hhlqgixo.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163oycqqjxm.html

================================================================================
来源：http://www.sxryk.cn/163hnncyttj.html

P. 常用工具函数
来源：http://www.sxryk.cn/163forahpwq.html

================================================================================
来源：http://www.aibaodan.cn/163pettctrm.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163fkfecdne.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163klmuyepd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163cnensuac.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dsdqvwve.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163hajcuapr.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163iricoxxi.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163anfofsgt.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ymdfsbhv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163hpgcjuoh.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ahyciaen.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163fratckqd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163vqovmrks.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163gttregbb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163rhoriiln.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163euwfyfst.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163syqhlcbw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163iysnhqpi.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163qfikcpts.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163xwnkmbmx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163uadkftfm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163emqagwja.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163pkfjcxxl.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gxyujcgc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163jfxebcss.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163anndeuqr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ogwcfwnl.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163bqmaryrm.html

[P04] 求长度
来源：http://www.xuanzx.com/163urajiwpl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163dbgskkxx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163umuearpr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163lkiakwrn.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163plfosgvr.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163yhnwnesy.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ildegxpq.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163cayripnp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163odrkkbfr.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163mfpxtjux.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163arujwmgm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163wsiklbme.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163dhseqewg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163pskyfsqf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163epqsidox.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163tkeelaro.html

Ruby: a == b
来源：http://www.sxryk.cn/163telvdbpy.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163tdzzvfjz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163gebychyu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163nupayfvq.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163eelrnukc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163qkqbmmmg.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163afziokkr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163usddvcee.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163jbwozycz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163yipfskhv.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163rzylhhjo.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163leeoxtbo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163cvhetegi.html


<!-- 参考信息 -->