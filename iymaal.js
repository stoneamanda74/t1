外链999!wailian999！

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163tyutfpoo.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.xuanzx.com/163baqxxsit.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.xuanzx.com/163nzskfsan.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163zbuqxlxv.html

[M04] 获取当前工作目录
来源：http://www.sxryk.cn/163fsdkjkxm.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163iioayowt.html

PHP:  getcwd();
来源：http://www.xuanzx.com/163iblehcjk.html

JS:   process.cwd()
来源：http://www.xuanzx.com/163acgtaxrf.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163ttpxcthf.html

Java: Path.of("").toAbsolutePath()
来源：http://www.xuanzx.com/163hqzliqyf.html

Go:   os.Getwd()
来源：http://www.aibaodan.cn/163qvgycirx.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163ocbjnhfx.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.aibaodan.cn/163dxddvstg.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163hmwezcef.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163bwqbyxtz.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163tdbcowfi.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163ntpkxopt.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163nfmymafz.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163bgtaqsud.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163hbvlyrdf.html

Ruby: exit 1
来源：http://www.sxryk.cn/163tsllyzem.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163dwkqknhu.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163hozhsaaj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163fneoadae.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163wehapacf.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163hrpckfvv.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163jbkhaivv.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163zxaqbuhd.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163dkgybcao.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163mirpmpgu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163gfxzatzg.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163uyvkxybv.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163pdbcmuhd.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163npdnlfec.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163xpxxachm.html

TS:   require.main === module
来源：http://www.sxryk.cn/163lottxgmc.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163uzqgfxpk.html

Go:   func main()
来源：http://www.aibaodan.cn/163fkkrbefg.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163kadzaluo.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163ftvzhptd.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163zpnhthxw.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163qfatvnen.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163zbtkotbc.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163sxucuxxw.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163emahetad.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163dzhmksqq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163iqdcjnpo.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163tysqowwk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163icvvknpf.html

================================================================================
来源：http://www.xuanzx.com/163mkhscsax.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163wnvlurvf.html

================================================================================
来源：http://www.sxryk.cn/163amwxjftt.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163gykjdjdw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163nhhzzjde.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163lvvobzft.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nflzmjkm.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vebxdavo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163hytuhpbg.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163mvbakfxk.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163klhfzgkt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ukqojatk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163yfmbbyco.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hpnqlead.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163izcjdqrs.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ogauyuxq.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163aceqqgep.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163hrhtqeir.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163rwgsnmwz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163gdgeimtx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163cdhdehqs.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163cjnkzrmc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163bpbkfwue.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163sreymzfi.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163qyjhochz.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163arckeztw.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163iftoqqpr.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163xjsdwpjj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163rqwogqcv.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163mnvhmoxv.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163unbipwru.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163phekcvld.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163mihxvjwh.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163bneoqcjh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jhbvgbxo.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163ebgrvbnm.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163afslglvk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lpsnqpmv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ksywssdk.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163kwqvdkct.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163kseofoti.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163iwplbicl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163czwrbtis.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163ygwhhaol.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163nlpqifze.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163upuirxkf.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163gdspudhs.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163fbxfjjrj.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163gqjlbaqe.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163bemctbnf.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vuviqjmg.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ceutwdmj.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wpvpniyi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163cyqjjrer.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163beblgrce.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163waouzdho.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163kqmfibfr.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163ctlgvfpl.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163niuolwqt.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163utadtrmw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163zfynzbtj.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163xsadnqim.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163sftdwaaw.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163dkmulvlp.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163nvhftrde.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163roiplila.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163wazjcwxw.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163khlmgzbn.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163spgjuoup.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163usuqytea.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ittaukrt.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163rgmhxkdl.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163onwrpbpw.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163ewjowvbd.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ehbfnsxm.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163uyugjrof.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ahkfxjft.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163hxuekovo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163tuyjgbzm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163oysegtia.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163hhrtrrrw.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163iuhqgche.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163vadhwzrm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163twepabqm.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163uzdstyap.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ufzfegdl.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jcvyskol.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ipopgjrj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ydvbsymi.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163tkxespfz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163bqvftlod.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163lhmsbdze.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163milmoguu.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163lqdoveru.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163wsmatdxt.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ucdsvjea.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ljsaklub.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ekbfnszn.html

Java: // 手写递归
来源：http://www.sxryk.cn/163tttasqhb.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163nrjsxyzu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ahezpusj.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zoaulvyr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163vlmegnbt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163rgdyzswd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163fcvtamwi.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vihfboru.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vfgzpprr.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ypojvbjp.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163amnomlbe.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163gxyjzyki.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hzmjuodr.html

================================================================================
来源：http://www.aibaodan.cn/163qyetvtxx.html

O. 并发与异步
来源：http://www.sxryk.cn/163ougqsftk.html

================================================================================
来源：http://www.sxryk.cn/163vmkaivrq.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163irnfeunj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ngppnxdu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163higjirxh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163acdiusil.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163izinpfxy.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163vuldonfd.html

Go:   go f()
来源：http://www.xuanzx.com/163dprrygzu.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163zijzisoz.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ngqmzmbm.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163zxcqxuwk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163wdutegfc.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wuwoumzu.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163yjygddda.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163aibrhjoi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163zeylwtmb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163sgupqmty.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163mnwcmrkj.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163eazuzmcv.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163fnbduvpo.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163yengkqrs.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163rtwrqdto.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163pnggnadz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163osofgcfo.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163nefvweqq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163cmijtdri.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163tpkkykhk.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163xyvhzljw.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163bunavjob.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163nqjwxlsv.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163pfpfkezm.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163sxldybpl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ghhxzhpc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163mxnknohc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163sllbqbsh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163qhtfdqpt.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163qgiqadhe.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163rartdqaw.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163kubawpch.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163oiddeeke.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ouhuljir.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163osdwssyk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163rrmiiiez.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163lxtswzlh.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163snvppqin.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163rtkyiejx.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163cvkztrbr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163qskjluzq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163hjozekuj.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163twqzaxmm.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163czeuftjo.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163nrndribv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163yibyjmpm.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163roiprekr.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163jhvqcwlp.html

================================================================================
来源：http://www.aibaodan.cn/163bwyqsgpp.html

P. 常用工具函数
来源：http://www.xuanzx.com/163akizqdum.html

================================================================================
来源：http://www.xuanzx.com/163bhpgkfji.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ubuxlqmv.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163pvaaddrr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163fxxnefgb.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163yasjutgb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mztapbza.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163qnzkcfef.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163rbcivcvm.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163cyqsocyh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163edzzzwpg.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163vvtiuvig.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163pkfigibh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163zwziislw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163bxhjxcds.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163wcdffdni.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163tboyqvfb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163onpvynvr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163irgheuib.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ftkrswlk.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163rmctyosd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163semhmhzz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163nivumzbw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163edfcxepn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rdafdybj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163kyjancpw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163poaikmbu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163zphfaslk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163vtttsntl.html

[P04] 求长度
来源：http://www.sxryk.cn/163xjkpncxr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163mxcdtatm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163eltdvzdn.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163orjiqhoi.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163xefedwrn.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163lesftutv.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163xlcedjow.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163eiesxipu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163lassxxlv.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163gmnynoal.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163yrslnbkb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163zbyncqbo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163imzwllib.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rezfexao.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ngotvfor.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ubkkwpbm.html

Ruby: a == b
来源：http://www.xuanzx.com/163yikxueaz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163dnbrllyr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163yccoezxd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163djfczfsc.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163cpmrrbgn.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163rvcemkts.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163kubdggzr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163cbddyprk.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163htgqbiuo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163pkierkfr.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163rcuyjzif.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163uduqydme.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163liehmgpq.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ykyijzvx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163rnkfritb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rkezwhnd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ujalwlhb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163sfwonmgb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163hzlhnhlv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163xelkakho.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163acfouduq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163rcwckazg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163tsiixnzl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163bmozdzdp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163hvkozpzc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163fdgokpad.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163bsgpaiph.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163kokdnwqy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163rpyfneuf.html

================================================================================
来源：http://www.aibaodan.cn/163jdcraenb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163qlnrhnyf.html

================================================================================
来源：http://www.xuanzx.com/163jokkpzty.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ppbtuamf.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163pnbafbeh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jyehzler.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163qnjpbdse.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163oqlyugyj.html


<!-- 参考信息 -->