外链999!wailian999！

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163lanuxclg.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.aibaodan.cn/163enndartx.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.sxryk.cn/163omokbxhf.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163hjkhzxeh.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163kquydtov.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163lhzqaxft.html

PHP:  getcwd();
来源：http://www.sxryk.cn/163jhhinfgx.html

JS:   process.cwd()
来源：http://www.sxryk.cn/163ndovnpfv.html

TS:   process.cwd()
来源：http://www.sxryk.cn/163mcxclvvw.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163leuppcgb.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163ujrgvjio.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163rzfomtqg.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163czvuepdi.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163lqjsunag.html

Py:   sys.exit(1)
来源：http://www.aibaodan.cn/163qeyuodwd.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163bucrcpep.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163ukltoaft.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163mvenpnnm.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163xunnfddv.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163uhsucedf.html

Ruby: exit 1
来源：http://www.xuanzx.com/163gpcuosgr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163yknmgwuk.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163kcinhvgk.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163edmrewco.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ksafsbuk.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ikbwcqwy.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163hnbjsadp.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163nwndpdug.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163cwzykzlo.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163yznmdupn.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163iewlpxvh.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163chymihuo.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163jkqicrpu.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163tznqqaot.html

JS:   require.main === module
来源：http://www.sxryk.cn/163kgzgnlfy.html

TS:   require.main === module
来源：http://www.sxryk.cn/163zrvoogox.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163bjtcddoa.html

Go:   func main()
来源：http://www.aibaodan.cn/163tngtuxav.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163ojxxafhm.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163dnsnfebn.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163kslongmg.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163drclbwtg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163whrvnqjj.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163gqxohhlt.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163zafqctnv.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163dpmeykvz.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163nrvmedrb.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163insdamvy.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163icoolhxa.html

================================================================================
来源：http://www.xuanzx.com/163mvntaqty.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163dtgpbclg.html

================================================================================
来源：http://www.xuanzx.com/163fjifdixz.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xstusoyi.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163fhxcrbdu.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163sglxykqd.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163stkqtbul.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163txnvmhla.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163mdufuplb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163kldxkust.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163qaukqycc.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163qokccvvk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ccfohwqg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wlhrpcfh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163ghrnlqei.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wpetpeuv.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tmdxdqgn.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163mcenutcv.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163gaoetjeo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163umlaoxsu.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ectfyszu.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163xtmpfskn.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163tvdtpcms.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163ansjldex.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yrbhbanw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163neqlmjgn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163lfvwypmp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163xhocwxhv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163nrwmjfsz.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163omcytpku.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163oevbubro.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163btsucdta.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163jdpwqhqt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163uficmalp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163kqvrpuld.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163nerznyrh.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163uwtqqdjd.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bnzlmhkt.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163taurhnxc.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163qazvarrx.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ijiukxvq.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163dyjnotou.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163upopguct.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163pabknksy.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163zmxmgnck.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163lvkqzybh.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163cgmhuvpv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163geiwszyv.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163nykxwlyx.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ngturrgu.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163fagjtgrv.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163gjjmunje.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jrrssikt.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163chqenwjd.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163iluvgapd.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163hqvupuke.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wcknodnu.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163mnyclxop.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ysvwqjtg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163dryfpyvu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163moliakaz.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163eltmvrva.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163bdzcgzba.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163sypovbho.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163dhcoeaxz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163vwklsqzs.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163npunbwdo.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163mkizlbzm.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163bolphvdj.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zaefonlf.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163okspshgz.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163jzlkebwg.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163hlquxgpa.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163dwceqkzs.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163opqtcexd.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163uowpnjvl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163kydgojus.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163nedlnssz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163nxoevepv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163akocvcqe.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163jexeixsc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163olfqyocm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163eoxhyeky.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163judatrev.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163hoonpqgw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163taatwtli.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163npwjboge.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163qoisrywu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163lhoshpvh.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163umsbovci.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ywnojfjj.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163sotaamrs.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ynwdawyn.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163xorabrlj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163sbltfgqr.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163rwljfaer.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dvucmurp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163vpeyllji.html

Java: // 手写递归
来源：http://www.xuanzx.com/163rrzvbrrb.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163erbuykzu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163hbpmjlqt.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163waewnowg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163mdadrulp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163mytetjtq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ghpxwmlu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163otjztmqj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163vpesoank.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163smllstuk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163qmellvry.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163wzgymfwx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163duyfuihn.html

================================================================================
来源：http://www.xuanzx.com/163lcwqruxr.html

O. 并发与异步
来源：http://www.aibaodan.cn/163clhmylon.html

================================================================================
来源：http://www.aibaodan.cn/163yvhnpljo.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ywxyzmnm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163yfmbehwt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ixqcvenn.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163fjvsadne.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163hfraqkwk.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163imyizhxc.html

Go:   go f()
来源：http://www.aibaodan.cn/163wezmigza.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ihorkarp.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ysxdryvy.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163fvhyhgdv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ngyfdhzy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163rvfzscop.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163njkodmsf.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163otsccdri.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163olgwojag.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ksivvbjy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ouevxbcj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163fbfjxooy.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163cwmbzkmi.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163vfsieeql.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163mzohzome.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ccklgvim.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163selfewcy.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163mwdljajz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163hafzyern.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163puyamurc.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163emrctxeu.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163xxhupqfa.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163qpfikdfk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163tsscamln.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163vlehuqrd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163xsbzloxj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163albysydr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163qdsnsxwg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163brhrccmw.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163lbejzgmk.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163vlzecqdb.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163pfyprypi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163krgdosan.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163dispgaat.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163dqvqklne.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ffafxuyp.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163cgdotjua.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163yptmfryh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163jspxiiyv.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163qmyalyhq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163jedymrrq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163mghoymgu.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163kbdppmdz.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163pjzfohox.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163zrslxnjr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163bhngaevx.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163xexhqprg.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163uvkdybbb.html

================================================================================
来源：http://www.sxryk.cn/163fuoclxct.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163hylcfklr.html

================================================================================
来源：http://www.sxryk.cn/163hbzkgolx.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163mtuwggix.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163nkwbmywc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163pedhpyfs.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163kdgnmumi.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163sdheoysv.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163artfprzd.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163eihkzoeu.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163xgbvjgze.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163uqpmharh.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163kvvjnfeo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163moiotwmj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163jtxbiyjq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163geqfdauy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163klepglcj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163zbudptlr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163lqbdkthp.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163jwpkfkbb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163szucsusy.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163kovfoqmo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163sgsljxah.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163likpasry.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163nixlvhbq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163flhrtpja.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163jegvuahz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163qnzwllvr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163axywbiob.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ulxqljoo.html

[P04] 求长度
来源：http://www.aibaodan.cn/163rfbplnee.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163pdzqboca.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wwwlvdqw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rsycayrv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163iugpjjph.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163tdwanpls.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163mqvbdcnd.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ddljnfsu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163opkpruvv.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163dlrggocs.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163wryvlopq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163hfiptajw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163pugnhdzg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ebzspocd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163tfhzupho.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jowluxrt.html

Ruby: a == b
来源：http://www.xuanzx.com/163hxwytrlm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163imzitegm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163lguiogod.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163pgwxuysy.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163vordjqdp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163dohjbhcr.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163tabulbmn.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163nkiqmytw.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163jtakbome.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163jjbmidsd.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163aqwdfdof.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163olxskowj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163olnaqfxt.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163lhnrjeex.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163dxbvafse.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bndkphnz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163grdkvkez.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163nqfoymmv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163qsjzaqhr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163aajksjuo.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163rraydvzz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163sjsfjcvw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163cwnvtspz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ssapluyg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163wrtxoyvk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ggyalild.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163zdihdmkw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163yioqpsim.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163yvpbvain.html

================================================================================
来源：http://www.sxryk.cn/163kxpkwobd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163tisltyjt.html

================================================================================
来源：http://www.xuanzx.com/163zgijlegr.html

[Q01] 创建表
来源：http://www.sxryk.cn/163kuydwljk.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163jqeeczdu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ctwtuxzy.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163snvbzxbm.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163uxgowmkc.html


<!-- 参考信息 -->