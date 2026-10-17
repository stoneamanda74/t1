外链999!wailian999！

Java: new ProcessBuilder("ls", "-l").start()
来源：http://www.aibaodan.cn/163nqnnmmxe.html

Go:   exec.Command("ls", "-l").Output()
来源：http://www.sxryk.cn/163grcbncla.html

Ruby: system("ls -l");  `ls -l`
来源：http://www.aibaodan.cn/163fftcskiy.html

C#:   Process.Start("ls", "-l");
来源：http://www.sxryk.cn/163lxhzmhaw.html

[M04] 获取当前工作目录
来源：http://www.xuanzx.com/163aodfhqvs.html

Py:   os.getcwd()
来源：http://www.sxryk.cn/163xhhfqugc.html

PHP:  getcwd();
来源：http://www.aibaodan.cn/163cibwaqoj.html

JS:   process.cwd()
来源：http://www.aibaodan.cn/163rfgfzrrs.html

TS:   process.cwd()
来源：http://www.xuanzx.com/163zacdedkl.html

Java: Path.of("").toAbsolutePath()
来源：http://www.aibaodan.cn/163khccihgy.html

Go:   os.Getwd()
来源：http://www.sxryk.cn/163ecigixwp.html

Ruby: Dir.pwd
来源：http://www.aibaodan.cn/163qoswnczm.html

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163grrgltzm.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163byqyqhrh.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163uhkpojih.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163xyetsffq.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163tjplbdau.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163pypjiojc.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163vxbcvqvf.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163tlzdcwrm.html

Ruby: exit 1
来源：http://www.sxryk.cn/163ylfjcily.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163oixoxcwr.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163bkrdaqdv.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hnsjrlrz.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163mfknbpnq.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163cpvjqkep.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163zjdwsmws.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163azlpxtzq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163omuozdxh.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163xvoragfo.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163whedtplv.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163lroyriad.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163yqutnbir.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163zqkymfih.html

JS:   require.main === module
来源：http://www.sxryk.cn/163phyuluie.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ecemwjdg.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jtmbpxjw.html

Go:   func main()
来源：http://www.xuanzx.com/163yvjffkhy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163dbwbpmux.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163cjvqxouz.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163fmwvrwfo.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163jkfrhnvc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163higsdyhz.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ccrqzgmz.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163dwiqkrte.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163rrcuhooh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163bdypfwtx.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163ekiommmk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163qeowzoga.html

================================================================================
来源：http://www.sxryk.cn/163sogkxhaz.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163ovwdwulk.html

================================================================================
来源：http://www.aibaodan.cn/163xoejgymp.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163krknhlge.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163zqkxmpmr.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163yycwbghh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ghjyzsov.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rvixfaqm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163mzruawvc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163oczuzwuc.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163dfjlqrdd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163kmqxerjy.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163rorkxufa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163tqbvqzze.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163qbycsakh.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163phulwkkj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wmjiaitq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163kugeeehr.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163mufjxyeu.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163yqdqbxdl.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163eftpbqxs.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163rmmdgjao.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163dmsjtxlg.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163nqfwumyx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163chbtxusp.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163bmjhqgll.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163fzbedhoz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163lrcwtvyk.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163fxefzvsf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163kyfbntzj.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163ipoqmhhz.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163jjvnlxkh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163okwqbxue.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163yusnojbd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163zawwedtk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163xpsrwsll.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163ibkysull.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163kuubfcsg.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163adzolzkn.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163ldjnzjji.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163tfmncoyv.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163kewthtto.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ycqxrmjy.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zanmxsla.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163cbpvglzi.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163rngsfjxy.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163kmrylppl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163hukjoxdu.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163oqtrjfvr.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163nrsjvjif.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ypaixqfo.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lrtgxwqk.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163ovvsgipg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163btdaahrl.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163dtolrice.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163sctahtew.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163dlfwhhnk.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163inehwtwt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ublxejpq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zrytkwsc.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163cmpabemf.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163leqvzqcx.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163mfvqeyfm.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163bcbegzsq.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163wkgtcsdq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163mmgpjosq.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163rwazxizk.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163mdkfgptj.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163lsyfbpng.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163flbkgpcm.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163lbophgni.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163mcdbfkzj.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163edmmqjva.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163lexzoath.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ksrihgmx.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163lwxqzydu.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163cofdrmck.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163gxtnylds.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163lnsoboix.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163cwchsyxa.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163xevfjiub.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163mzmzqfkh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ausolvzl.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163dncdiyrr.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ynmakrcw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163yzjpewqq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163dykeyksa.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163nnttjwhs.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163zropmrop.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163dgyyrsyl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ocasmiau.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163dprotrbe.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163diwkdfmh.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163pepsbttr.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ohrjcbgw.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ueovjwvu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dmydbnfd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lxawaffx.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163wfjwmuhg.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163bluednjm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vadgqejc.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163mxtmkeaa.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163tjuluuiw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163xqjufsgi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163xqkybkyg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163zawiybuk.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163bjlvxhvc.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163mmqjbjzf.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163avqbqzjf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163ewiiwrnr.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nhqnmzby.html

================================================================================
来源：http://www.sxryk.cn/163onstsetf.html

O. 并发与异步
来源：http://www.sxryk.cn/163szlrgmoo.html

================================================================================
来源：http://www.sxryk.cn/163evvdlgkc.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163cofevugi.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163zqjidytm.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163yklesjsu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163oaujkbqw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zofeulfr.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163vaqxtbsy.html

Go:   go f()
来源：http://www.xuanzx.com/163iaengkkz.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163jdhfzyij.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163suqxgxki.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163ssuykiko.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163zsokdzyh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163mijcztxn.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163atwaedly.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xxdvhbsh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163imdhoitx.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163hfehthhy.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163twimmkgr.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163tdmkgfaq.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ayungakd.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163cmzyldjv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163nfydwnvo.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163hlvciqxn.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163oqlwagdc.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163xpbfgvhh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163bgzzmtvf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ovqmggwn.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163zuodcgzr.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163nmqiwygu.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163xoqdtktu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163gspvbgrz.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163qexroigl.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163libesfnu.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163hplnuzwi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ptfztant.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163augizbjo.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163kimowfph.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163obcpaqnp.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163zbdztuvn.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163jhxceywt.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cjqkgsoc.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163huqudykr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163wxsscszc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163ebccyxup.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163inagcijj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163lvmtloxy.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163pqdfdpqe.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qozqoxsl.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163gnrbbswm.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163wudpkhng.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163uqmynzoq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163vxbgohpu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163fcpxssnm.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163kodyvbqq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ejubntet.html

================================================================================
来源：http://www.aibaodan.cn/163iwyicrpl.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163lqoqcmyv.html

================================================================================
来源：http://www.sxryk.cn/163tvtyqvur.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163uoggwgqb.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163bxnoshuy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163hpujiouh.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163guucwbgd.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163azvvqecb.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163bcsbdbru.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163surwqaoy.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163fxylmhhk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163ncscsfsn.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163hvjfsnwg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163qcftince.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163bxwinruc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163mlfhxflw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ivjkgzow.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163drszfzgk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163hzdpabzh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163glvbzojn.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163uwaxqfjb.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163gqwcaige.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163jsbvhffb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163brzorynp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163igsxtoit.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163bjcffezx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163zrncqasa.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163kzningha.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163pcxgjssn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163pzbsbinz.html

[P04] 求长度
来源：http://www.aibaodan.cn/163tpkkybwa.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163phxojtya.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zjehocpz.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zryezerr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163flitngyn.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163igjhtamd.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163eafughif.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163dgyjpiwx.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163xbnjpvfb.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163kprhwbtv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163wacxdhsp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ixnfcfem.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ljqxcyaq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163dygboneb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163bzpokgoo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163phksetpy.html

Ruby: a == b
来源：http://www.xuanzx.com/163oaiziqej.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163jsftfghb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163dehofoks.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163iufconbk.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163pvmnntja.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163wlbjbwuk.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163jhlspyoa.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ntdohzrr.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163pijiicgg.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163fmkssame.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163rlcwpcyu.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163uykahzvv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163jszoeupy.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163mwuatfuw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tyztssyk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163zyxnhopz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163oniynyrh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163tunxnnsd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163dbdrjcjk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163dbfetuzx.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163gakkcwof.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163uysaxicr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163aezfclxx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163qhsqozoi.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ehkwrwbn.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163aimurbeb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163pigrmaav.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163dgbtvwsu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163sbfhzivw.html

================================================================================
来源：http://www.sxryk.cn/163cjskyxhi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163wyldzoso.html

================================================================================
来源：http://www.xuanzx.com/163mhxsmkxv.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163dmjuptji.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163diwbceun.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163menybqni.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163yowwmxbi.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163exwgvplc.html


<!-- 参考信息 -->