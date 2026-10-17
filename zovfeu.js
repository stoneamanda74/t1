外链999!wailian999！

Py:   subprocess.run(["ls", "-l"], capture_output=True, text=True)
来源：http://www.xuanzx.com/163ksllkicv.html

PHP:  exec("ls -l", $out);  shell_exec("ls -l");
来源：http://www.sxryk.cn/163xfjekuzf.html

JS:   child_process.execSync("ls -l").toString()
来源：http://www.xuanzx.com/163dbxemyaz.html

TS:   child_process.execSync("ls -l").toString()
来源：http://www.sxryk.cn/163uxoojbrt.html

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163mpqoghfk.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163zebzehwy.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163vqsppkfq.html

C#:   Process.Start("ls", "-l");
来源：http://www.xuanzx.com/163wgkxjyrh.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163azhvhdyf.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163ifywgpwl.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163ugkqxdcc.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163pgawfwcd.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163jvezruyp.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163nbohkowq.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163wcijxdqf.html

Ruby: Dir.pwd
来源：http://www.sxryk.cn/163trevxqgc.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163oiteyhug.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163pmlcywmw.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163adkzvtjm.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163ymsyjwwx.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163gzukuqar.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163gvlxenwq.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163mmlgqzvf.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ngcfzsyo.html

Ruby: exit 1
来源：http://www.sxryk.cn/163otypxchw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163jilltpuk.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163pijofmsd.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163rlamynsc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163smrcsucy.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163yvajlozl.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163emorfbyb.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163ydvunpng.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163dgzxldjo.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163dtjmlfoy.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163tqdkptsa.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163szuemcne.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163omixzsgy.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163xezdyoms.html

JS:   require.main === module
来源：http://www.sxryk.cn/163bbwbypdk.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163husnqunx.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163fkaajufn.html

Go:   func main()
来源：http://www.aibaodan.cn/163ixplpala.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163wflewcku.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163kfsevous.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163jzitrggy.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163hyrwhqtx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163eajcxuwq.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163wevfstwj.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163roywldxh.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163utywlsgm.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163igjvgrpw.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163sxaczpby.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163myrgyxvk.html

================================================================================
来源：http://www.sxryk.cn/163aqzfzzjy.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163avjyjncw.html

================================================================================
来源：http://www.sxryk.cn/163wpbmrujn.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163swvdlqiy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163qqluhvgt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163uvyilmtj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163hjrnugry.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163zqtqaoke.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rqzqmdsr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163uosdseeq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163qprnxeqy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ojcqhxlt.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163tzwcpcnk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wjibttbw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163tbzjuyva.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163elpmrwnx.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163bxxkiwbt.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163ubtdspkr.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163vijfjhcb.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ewzgrevl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163mkdsvjrk.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163ebctvmpr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163xzxskmfi.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163vckqtxek.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163omznleql.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vemqplax.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163dwrpqhav.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163fxonscck.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163qwttbhry.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163fedocqwm.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ldsbrdpa.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163wrbjiiod.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163eigsgjad.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ywethwrb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163acuszpdv.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163dpfiwkak.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163vjonpteb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163imosxpqh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163hmmkkmbg.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163vlxabgvn.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163skwvvwec.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163qzpjkpox.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163cpwopgyq.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163yuzodyvy.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163bdgqgtza.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163myavipjw.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163cwlhcdti.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163qvqlsgez.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163uqfnkcnl.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163duktfmmv.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163uuromxfi.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xajxengh.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uklbgdbz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163snxbjwsk.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163kipuukkf.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163vnyoynha.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ipbsrhmy.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163cunguikd.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163xrmkzhzb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163bhaisdtz.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163nbyaaspa.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163wshulyib.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163gbulvhyn.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163gwukklqb.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163fsiptqkt.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ylwhbhwk.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163dryhwzqn.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163stdmvaol.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ykosuelx.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xajgdhgn.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163isnihhtw.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163eovgympo.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163nnqbbfdw.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ehlqufyc.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ccwdltdn.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163bdquqnwg.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163zjpzkliv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163mfzkuoda.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163tnylctuo.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163urtwpmyi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163fksanion.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163mfdkeymq.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ewfprfqt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163qwrdvdxj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163fibltxxu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163mzpawkfr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163owpprjzc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ltykgirl.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163opcyxlnn.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163wdfxqzvs.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163njlxdrps.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163fesfrqwa.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163hjwnhemy.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163gssczwzl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163mkhjxuqh.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163naqhhztt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bzlygpzk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dohavmcy.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163cyrdwmpt.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163flwikcwu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163gupzevsa.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163dkzjrrtx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163zulcmpoo.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163dnpcvhlc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jfgfbddi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163fklxjqav.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bsrycrsy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163taffqkqb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163doqkotcm.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163hngcxgak.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163iwwhvopc.html

================================================================================
来源：http://www.aibaodan.cn/163dhwmqacf.html

O. 并发与异步
来源：http://www.sxryk.cn/163kytxmwit.html

================================================================================
来源：http://www.xuanzx.com/163avnmadww.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163sgdutfnd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163gfgzojkf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163omnltsgk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163czpfoflx.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163jlcftsug.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163jnnhkdou.html

Go:   go f()
来源：http://www.sxryk.cn/163nvbguerw.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163jasvyokn.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163frkoyayy.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163hxqfxwdd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163kiqzgfff.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163uejhuzdq.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ujqskyzd.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163zovgdhgw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163jztetbiv.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163vtxtbkkg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163awzfnzkr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163rjwpdvun.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163mafeduyh.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163wkufjocb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163yvosctoo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163hgsqhlpu.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bwmpvcvi.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163hoizgdry.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163cqitazvv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wqbetiyg.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bwdfbvke.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163rwczowwc.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163pgepjkwx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163npogeack.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163trcnsyix.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163awmgtpqm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163xsgkwtph.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163snaiiaoh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163edbittui.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ixidjhvf.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163dsinncgk.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163vbbhzrsq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163gjthoamz.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ctnnmkjj.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163aslljqzn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ufnuoysf.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163unprflif.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163cajazlbc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163nnpirsbm.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163kpnqmadh.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163zlgstnwx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163eqbexgqz.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163refqxkxm.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163mdyeztim.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163sqetzlxb.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ruwktaaq.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163zasrfcrw.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163oytbpjvr.html

================================================================================
来源：http://www.sxryk.cn/163bkzgayfp.html

P. 常用工具函数
来源：http://www.xuanzx.com/163blhdhuwx.html

================================================================================
来源：http://www.xuanzx.com/163kitgetkm.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163itfahfmf.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163teixtbri.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163wlrmxupv.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163htlmzdsz.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163hlyscjuu.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163wdbnzmfn.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163omhjeiqb.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163pxvbcebu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163kfjinipa.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163aeajnrkc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163gpxxyojl.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ockafuve.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163muxnvank.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163bbzbzhaq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163aohcbdje.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163rvxbxjod.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ijhoqtmz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xounzaal.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163pqxetrrb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163cqdajjxy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163pocrzdhp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xbjmjxzy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163vzfiekzs.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ovjotnmy.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163pfdklbzv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163zwsyvfil.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163yymqivjv.html

[P04] 求长度
来源：http://www.sxryk.cn/163hurdofvt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163jhhdgjge.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163uhojnnvo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kajwnktu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dqsznrez.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163cisxwrot.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163bjnycupk.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163kgurpizv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163pcwjubuh.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163luhpuvts.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163dmiagrgk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163biljubju.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163kjxgnasd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163duocemub.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163hzdcgvza.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163nxcqhxwc.html

Ruby: a == b
来源：http://www.sxryk.cn/163qxolxnzu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163crzpxysb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163jtutlxyd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ngcgvdfi.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163quwxpevv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ivebmnjc.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ekclirrd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163euwaztdl.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163gtiaivnn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163djlfylgx.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163oiccyxur.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163lddyehcj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163univfhcg.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163spjncrkb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cyrksrpm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163jdgrssti.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163yratofyh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163uusvdpsg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163jtggktnt.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163qjalhjft.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163yvatyenn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163sqdhryrt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163dtfxxbww.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163pyzmywhu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ndymfkxq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163pfuqhqhb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163dfgnhcgo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163jmpgvcgt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163hlkjlsrj.html

================================================================================
来源：http://www.sxryk.cn/163ueutgcuv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163dtmqqpvz.html

================================================================================
来源：http://www.xuanzx.com/163elzaqscv.html

[Q01] 创建表
来源：http://www.sxryk.cn/163nndojwly.html


<!-- 参考信息 -->