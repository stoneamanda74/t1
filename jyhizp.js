外链999!wailian999！

Ruby: ARGV
来源：http://www.sxryk.cn/163udmxfriw.html

C#:   args 数组（Main 方法参数）
来源：http://www.sxryk.cn/163uomleaox.html

[M02] 读取环境变量
来源：http://www.aibaodan.cn/163bpwbtwrk.html

Py:   os.environ.get("HOME")
来源：http://www.aibaodan.cn/163buiypucv.html

PHP:  getenv("HOME");  $_ENV["HOME"] ?? null;
来源：http://www.xuanzx.com/163osyzyqbk.html

JS:   process.env.HOME
来源：http://www.sxryk.cn/163qjumlgxh.html

TS:   process.env.HOME
来源：http://www.xuanzx.com/163gkqvmsib.html

Java: System.getenv("HOME")
来源：http://www.xuanzx.com/163aqkavehy.html

Go:   os.Getenv("HOME");  os.LookupEnv("HOME")
来源：http://www.sxryk.cn/163pfcfakxs.html

Ruby: ENV["HOME"]
来源：http://www.sxryk.cn/163bqynscmx.html

C#:   Environment.GetEnvironmentVariable("HOME")
来源：http://www.xuanzx.com/163mwlcfdgs.html

[M03] 执行外部命令
来源：http://www.xuanzx.com/163tkxjprwf.html

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.sxryk.cn/163mkuriabx.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.xuanzx.com/163xunhxlpp.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163swwojwwg.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163uzczkayq.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.xuanzx.com/163mrqbqdyf.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163ztmrpjox.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163hnmwuzff.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163iyozkufj.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163pazlwiux.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163luletany.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163rhglqmja.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163ecqobokp.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163kkkuvnzb.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163fukxsqok.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163eawptttq.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ucpwvfzg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163wobfommz.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163lyjdpcis.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163zfxzebzf.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163wkeofovp.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163whqtfobr.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163ormamorr.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163qmgzfvul.html

Go:   os.Exit(1)
来源：http://www.aibaodan.cn/163iujbonml.html

Ruby: exit 1
来源：http://www.xuanzx.com/163ubcqojvx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ligqcvay.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163drergsvj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163opcygzsx.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163oyxhhspy.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163avyiifqn.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163puitwlbe.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163ytqzmgev.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163ljwpodya.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163mnqhjqrq.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163xkbzhqws.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163nrjwtbqk.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163xfjjvvju.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xtvjcuum.html

JS:   require.main === module
来源：http://www.xuanzx.com/163moywjbdp.html

TS:   require.main === module
来源：http://www.sxryk.cn/163mifihclt.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163rexalent.html

Go:   func main()
来源：http://www.sxryk.cn/163emlffhgj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163xdylzaft.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163jpmqhpix.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163cnllkoim.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163ajofoxfh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163acugmqum.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163iqrklkqh.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wuinjsyf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163svmrvjjv.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163fchynkra.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163orxxudyx.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163crotilxq.html

================================================================================
来源：http://www.sxryk.cn/163lkpeshnq.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163gzycyuzc.html

================================================================================
来源：http://www.sxryk.cn/163ebgbvpep.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163rftybhbr.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163gldchkai.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163ubrjzzqj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163dgagnnjj.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ntvjwoip.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163mjyswasu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163cgntndnb.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163hclbfsyg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163gdpncuti.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163dayubjgv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wfwihxnm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163anojneay.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163afipjkdt.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gabnlwgn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163nqwnqcex.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163qhipzkxi.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ntkdczak.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163gmbslobh.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163vizevild.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163icoasnah.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163mallpgrb.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163wsxyvjqf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163odzgyqer.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163hoglnumr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163vrabznjf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ongotefl.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163nfydmeok.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163jvlfwrdo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ltwyeewk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163zrwnvfnz.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163fuswqvsy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tllzbqqh.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163sfzpygau.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163urijslub.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vltzophu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163njtuasda.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163zapnpywn.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163gzokejqi.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163ynlrjbxx.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163innzlbbb.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rgookitz.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163jzvkktkw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163lhnzupci.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163bxtehhwn.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163awyhlybx.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163ymdnjpgx.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ehjcmxtt.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163fdwmkrqm.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163rtinquqc.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ndlvxkpy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163exodbeyt.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163kvmtamou.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163uwmfqgcp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163cdpemslb.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ufxdlmok.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163dvjpdrmf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163yqwskxtp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163sehurmny.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163hqdqyjhz.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163cmlrryze.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163nrdgxqqo.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163qmjzguac.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163gepfduhb.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163zckqtbys.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163qaoqtbpu.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163venuseoz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163gmiwphfp.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zyjskdsv.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163bwlfcgxr.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kuqexksf.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163zozrateh.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163akcpsdxh.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163hbqnjcib.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163apsgxcvz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163uepcboce.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163teabqlgg.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163sotemeks.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163mfalmjwb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163wzqngpmz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163iutpbowe.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163omhpkyxj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163rniifoze.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ousqbrdu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ejmkmlqo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163rjrsdtbm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163nmiothjb.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163wqplbobu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163vuazdewd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163yqguzjcc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163pmglxmtm.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163kqeaujtj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ghhvwrbk.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163thzuiqzk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163sovqqwmm.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pjmzngit.html

Java: // 手写递归
来源：http://www.sxryk.cn/163nohoczvb.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163wkftarew.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163kvylhprs.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163bwkfnqib.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163lxiylwso.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163eltjqrgq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ebcgmtnz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163uyrcnbhw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163vamjjnem.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qctvplzy.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163cdqanfut.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163lndgtdwq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163qeymvmib.html

================================================================================
来源：http://www.aibaodan.cn/163bvtkhkwd.html

O. 并发与异步
来源：http://www.xuanzx.com/163tzofincn.html

================================================================================
来源：http://www.xuanzx.com/163txbrgjzu.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163rfdxxtno.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163wcacbjns.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163ibabubtq.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163jwtfaqgg.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rkrulhuc.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163oqazuvvs.html

Go:   go f()
来源：http://www.sxryk.cn/163pderudjg.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163pswnuhnf.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163wagwgxkg.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163hhepvpqx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ikpcpddd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163zwbhbzgl.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gpmupwks.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163wbuawcti.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163vjgxcbxu.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163mrmvwinn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163xgyiaswd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vdxivmmx.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163glgracei.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163qibureuc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ujkzjamg.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163mmzrqsew.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fknqivoj.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163rcpgsbss.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163lxadpptn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163aorgzqkz.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163urtzlels.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163wyqqvlwp.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ffahtvgp.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163wspswkil.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163jkdnunqq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wnzhlwkf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163nzholeox.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163brgolulg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163aacclxwm.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163apxpnvbg.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163bkidsmis.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163lqwwqsrv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163tqvkvjhp.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163oosumqhr.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wdtencmx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163wjowlpzg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163cwtwagib.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163tnhiejpr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163xtgsahgh.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163jdotyzvc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ygmsvdyo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163qjlfnqlm.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jjlkttfp.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163racqksgs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ufwdjxlp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163yhgnhjnc.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163beyjttju.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163gexyocmv.html

================================================================================
来源：http://www.sxryk.cn/163ovsqrirh.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163vijxaedt.html

================================================================================
来源：http://www.xuanzx.com/163droxyknw.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163zgggtvre.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163itebkedu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163phamfeeu.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163bfxbudwp.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hsmeeqtc.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163toahrbvp.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163whelzqei.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163lgaabeoy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163jrtazxvo.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ihuanmsp.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163sqghkwve.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163mvwatbso.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163hkawplwq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163vwoohujk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163awtyynih.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163mkgkxdld.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163mpwysaic.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163jrkbpxoi.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163gvvoiqnm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163envhajul.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163thxgsucw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163gbrtlsjo.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kumiynan.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163nzvjposu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163dsttafpc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163xowujxpz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163merwfhib.html

[P04] 求长度
来源：http://www.sxryk.cn/163sopajlwe.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163gcylwrxb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163oquynjpr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163cdkpvevk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zuzjbkxl.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163wtimuimi.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163vqjtrigh.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163cewmuqso.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163juvgnvmg.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163kdmhqjby.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163xjsblsef.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163aceqszpi.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163bedvanaa.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163byfyjmbw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ezdjrzmy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163guaknwtm.html

Ruby: a == b
来源：http://www.sxryk.cn/163bmfsgoov.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ciqdlvtb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163alakdpem.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163iaxvfkad.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163eaqgdmld.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163alvkefpj.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163fbfxuoxb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163dslasvem.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ultilqep.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163fvmqwkqm.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163haqcsujr.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163vduxthew.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163dvelwxfc.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163cohhgcvt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tclytgev.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163hwmsvlmm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163dztupdza.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163jsyufdah.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ccngigxg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163lxcxseiw.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163qupvohpy.html


<!-- 参考信息 -->