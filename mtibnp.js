外链999!wailian999！

C#:   Directory.GetCurrentDirectory()
来源：http://www.xuanzx.com/163amkwsklx.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163mkkdikov.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163hbqixxap.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163aoeyiole.html

JS:   process.exit(1)
来源：http://www.xuanzx.com/163dfgoynrz.html

TS:   process.exit(1)
来源：http://www.aibaodan.cn/163acxoiedt.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163ajfucjyr.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163ouncvkcp.html

Ruby: exit 1
来源：http://www.xuanzx.com/163youutapv.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163mtyhmfcb.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163ikjfkqns.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163sctqxjek.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163huqjadmy.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163jdcstwuj.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163mjkfbywy.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163rsekryxq.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163nfjszwbo.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163fyeggtiw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163gltzenpi.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163eoqsntfs.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163cianzvlg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163wvntyyjb.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163dmwtqrus.html

TS:   require.main === module
来源：http://www.xuanzx.com/163zthuvqyu.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163wpihxmay.html

Go:   func main()
来源：http://www.xuanzx.com/163yabxpdka.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163hoducwng.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163vabwzxma.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163bzrtchlo.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163wgkeoojg.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163znylyiwa.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163newargqk.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jbcujhtf.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163anfmwvnp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163xdqfluvi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163jxfloeai.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163sghdrrkk.html

================================================================================
来源：http://www.sxryk.cn/163ppqoqmmq.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163lsuffmlr.html

================================================================================
来源：http://www.aibaodan.cn/163uuvndpev.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163quxfrooy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163qsgjtitl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163trnszqfz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nxuhzpus.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xroxwkfo.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163pcwvmnkp.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163mdfnoowx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163sjycdbnb.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163dpmsfxur.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163uhatqeiw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xiwonwfe.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163wodjdjdy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qtzehbai.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pfwmthym.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163romgbbgj.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163zwfxmfup.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hzadxooa.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163jwmustyf.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zakznccy.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ywrilhss.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163mjbidkol.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163necxkxyq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163bebjczup.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163ypvuises.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163kkqrmwdo.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163vdelunbb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163milaixwy.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163bcmzaofy.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163ydxerjvh.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163pysvejoc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163unnukajc.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163tcdwzscw.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163naxlqmwy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163tjwmjmnq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163hmnjwrny.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ejiouofv.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163mkjfojsb.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163aofhbwki.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163sgzqhlds.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163osvceutj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163iukpnuji.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163uldyssrj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163figyrxmd.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163clzwevmy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163xdetxkyf.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163rlocnymh.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ntidlhrb.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ifqndbre.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163bctoyivt.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163cxdjahfy.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163odzieycx.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163aggkeycu.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163eqlkkaza.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163qorugkrk.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163daorvkwo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163ctskxlnp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ajxdnlar.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163lwcqvtac.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163awzkgted.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163rfwynaqv.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163fbdduocc.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163efgbklph.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163rhueeuzd.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163pjwvdvjz.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163hznqlxqm.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163hbasqzhy.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163qektseki.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163upflahnu.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163wstrsyyl.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163oqcivedt.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ftgtwecy.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163mhryoblc.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163wmrmqyxn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163wtdkkzct.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ugzbeaqr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163rgeoisyk.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163wryiklgp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163oglyiwbo.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163khzdgqee.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163dldqgcmg.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163kqgwerpg.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163gjjkwllc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163linajxsu.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163emiwvxua.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163qilgtuzd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163nuksqacs.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163kyntnuok.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163uhadinxi.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163ympuuwgh.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163jhposlmt.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163chmfttwh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163pbxutewi.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163qbjkrlyp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163tvozripu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mtqsfaxp.html

Java: // 手写递归
来源：http://www.xuanzx.com/163qjpzpavp.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163lvmignbw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163vavrhdcd.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163yjetdrpa.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163jgblcsdz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vsrgmpqa.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163afsgiyey.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xsfshqrv.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163arnmtqxp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163pehbmjda.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163gsmrngao.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163tthvlyjw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163mjtyykte.html

================================================================================
来源：http://www.aibaodan.cn/163rrepmkqg.html

O. 并发与异步
来源：http://www.sxryk.cn/163zxscpxwj.html

================================================================================
来源：http://www.xuanzx.com/163jqsmavbt.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163hytqkvjq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163rxhaprlx.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163pdgdsmhu.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163aurwmguo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wvyvcgfh.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163gchwbejf.html

Go:   go f()
来源：http://www.sxryk.cn/163mymcngtd.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163iosjgzca.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163qmkakdbs.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163puvpwnbc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163vjyccyfp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163caliwswg.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163donfxzzo.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ovkcdjfy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163sidqahsw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ofrgxrgb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163bnmwxgto.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163xcugftrh.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163chhcjypj.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163kfeazjdk.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163lcvgdfhm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163qxqqxqwp.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163hhtbbxgp.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jxvdsgie.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ufvegeho.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163ogqajwsp.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ldlchnej.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163eslocorv.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163littjvxu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163yzvdqnll.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163rwxjgbmh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163cqmqeljo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163dvsauexr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163fwwdbpbm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163lxrilwic.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163oqytbflv.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163xkjmwmmx.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ghabltoj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163fbsihrqp.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163aoefbwhi.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163fsbqcucc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163vgomekny.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163vhqygdpg.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163ermaovsc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163gutetecw.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163nktoauwm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163goqwrsyk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163xrpjwxgk.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163eqviadjf.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163dcylfpqr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163rltfkbfe.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163tvnhsmmu.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163djzwcspc.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163pcsjxehg.html

================================================================================
来源：http://www.sxryk.cn/163fhusjgim.html

P. 常用工具函数
来源：http://www.xuanzx.com/163mxuspkug.html

================================================================================
来源：http://www.aibaodan.cn/163idvdfmwi.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ltpqjmjo.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163cygrofdi.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ftwbjqda.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163phjzyhjc.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163oubstcxq.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ylgeujsb.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163iclmkhir.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163wzfjwaej.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163qengjavn.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163pifqqfst.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163tpphvrhg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163igqjsnqe.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163trjvtpnc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163yaudnhpw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163stpcoovk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ftqoeuou.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163lzookvei.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163wqekvyez.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163briabjyl.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163orwhqquk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163tqxguqug.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163emgjpnht.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163mxbsuxdj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163huprpgim.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163vufmjdwc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ebzahmfk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163emfpbilw.html

[P04] 求长度
来源：http://www.aibaodan.cn/163ecwimkit.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163itwfgffq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ytiuumny.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163qcqkuguv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163aonadlsa.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163zfpdskbx.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163kruvzoyh.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163tnvznhwm.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163quyysbiv.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ffrpouuf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163iivvhxvl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163oecmzmtf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163clubuloj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163bbhbcbrb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163fzjjxzzn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163llodcetg.html

Ruby: a == b
来源：http://www.aibaodan.cn/163evakyhim.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163qkmtpvwh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163vmxmfdxx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163awdrdmsj.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163nrgzngie.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163opducbsm.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163guezvtix.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163kyvreeyo.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163tbgjehan.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163zmhjvlym.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163mokmdoki.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163nkishvbt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163gldhzsoo.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163klxwlnyy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163eadkdwxb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xuhyvtsu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163lnoidrjc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163uxpljaay.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163foshzamu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ubelmwvi.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163zigarkfe.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163kxjrmoly.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163gnbakwws.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163cbvcdlsi.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163njbsveki.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163brqmgmsz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163abuchhgh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163yxvxjplf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ovqlpatg.html

================================================================================
来源：http://www.aibaodan.cn/163nryjeshs.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163finjjpwb.html

================================================================================
来源：http://www.aibaodan.cn/163zwywzits.html

[Q01] 创建表
来源：http://www.xuanzx.com/163eeactzcg.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163kawnwvkn.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163zubukout.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163jsrbuqog.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163rbomoptn.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163hqcqcoib.html

);
来源：http://www.aibaodan.cn/163bksmgyig.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163wpvheovz.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163hkdienla.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ykzdalfj.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163oyqisauv.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ciocilnq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163kaxlrvee.html

);
来源：http://www.aibaodan.cn/163kbpnqeph.html

[Q03] 增加列
来源：http://www.xuanzx.com/163jcrjttez.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163dvpmeeeb.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163qjjkqboh.html


<!-- 参考信息 -->