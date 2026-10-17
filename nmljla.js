外链999!wailian999！

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163wusbwtie.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163oicwgcxc.html

JS:   require.main === module
来源：http://www.sxryk.cn/163hgxvgcxh.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163hrmkfbps.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163olmhdwki.html

Go:   func main()
来源：http://www.xuanzx.com/163xtjifquh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163fsdsfkom.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163eqyvdvhd.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163wkegbmue.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163wftwhhcr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ehlggfgd.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163urvsuwhe.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sfbrsofw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163msowcxdy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163ffjclegl.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163dbcowzor.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ynnkvlnf.html

================================================================================
来源：http://www.xuanzx.com/163agywpktj.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163posfxjxt.html

================================================================================
来源：http://www.sxryk.cn/163xdwsinfd.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163nxhkvlqq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163pijtjnhb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163fsstfzhz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163bxxlblem.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163sizpupbx.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163jydguqlj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163httcxheo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163iibzkkbv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163hgwjfoox.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163eajoehax.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wooyinbe.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163dpoxltrl.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kxkkvlmn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163xpvbvxvf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163mleilenh.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ntujvoyc.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163aerfuhke.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163jbqbgzhh.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163timkiivg.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163qldnwrst.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163yayjzscx.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ryzqewaf.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ggdrenah.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163qgdgsnpv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163mwckjvuq.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163ororptqf.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163hyzikteq.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163xebfjotd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163dwrodmmk.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ycuyvity.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xwmktfuk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ifqwmkto.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163bmkrmxtb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163tvgtpbmx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163ywlqogvk.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163yovquubr.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163exgsqbeo.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163lslcalok.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163wxzybiwt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163riueeshn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163tmobdpyl.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163vyethtso.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163ngvygaxh.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163qeszoizj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163edvvbgrj.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163lydhwaej.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163uhjquyom.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163mgdmuitc.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kxcmsinn.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163uzoheoaz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163mvltselx.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163vobaqrgl.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163rwqthmqx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nxicjdcd.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163topgfxzf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163nxybqvou.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163yrjockcf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163dacntcrr.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163fplwdkqk.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zoopqzom.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163uqqwkpis.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163dvuhhmgv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163sbjympqh.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163rseovrmd.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163oasmkrsi.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163vtlvgshq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mskgrhmf.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zxmrmkle.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163enjiyflr.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163sxxhkzhy.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163dfexlotr.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dezldhab.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163kgfcjcxp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163dlzhnbqk.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163vqnsycrq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163rdexfzfz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163qabxkrom.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163hexixhqg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163dzsghlca.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163kaqauals.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ceuxpvts.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163knpqjttb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ejeequul.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163zhnwwwmq.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163wbvwsoft.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163bwotqiuo.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163elpqxzdh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163manlaqik.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163hfvgagth.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163xrpufkxu.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163eqakwqvj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163zzhmolcg.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163gvkhgluh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hfahfdhe.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163gpvjvydf.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163rrwafzbb.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163uuamjpbx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163emwxjfxb.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163talmsznu.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163pzexudri.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163pppitqbo.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ugpuugqj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xyrzdcsu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bigdnivp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163usqzomkc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wqshfkxz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163cgzunbqz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163phppaqsj.html

================================================================================
来源：http://www.xuanzx.com/163vdtkhrth.html

O. 并发与异步
来源：http://www.xuanzx.com/163fuqtpong.html

================================================================================
来源：http://www.sxryk.cn/163bxkautic.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163euxjebqt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163kedsiuiy.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163oaylsmqr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163cuyklksu.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163jzlnlkvg.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163sswrpbjm.html

Go:   go f()
来源：http://www.sxryk.cn/163leexukza.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163hefaqtip.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163sojbtmgw.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163bssiedvg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163wgbwcljm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163vgmbyfqb.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163nhhgijia.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163mwuxuasg.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163rktlpgqw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163fqovyqjv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163vyammlkb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vznixzqn.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163rhvsevfy.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163mfrzmtyu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163cbqkctoz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163gybpztqt.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163lksepiwf.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163bofilutd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163mhzouiss.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163skkqbxtk.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163rwmlevzr.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163nmwtxqnz.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163nbqmdwwk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163xhmeqhbo.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163pyvhloyd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163jinhfdqy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ofgzwege.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163jnzvydhq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163xqvgaybp.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163upjgyjdd.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163hwxndhbw.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163aqcyfjyt.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163gulukggg.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ypebedhy.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vbgpkqpp.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163qodqfetr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163siutamdl.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163uykdkwsg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163gqbbwebt.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163fmmonmou.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163qepcljkn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163lxzxtlin.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163eqvyaerx.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jfgkowkv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ntqedion.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ofhzxyrw.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163lpdqvhxx.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163oasjvtpy.html

================================================================================
来源：http://www.xuanzx.com/163dfvyoyom.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ytotzrjb.html

================================================================================
来源：http://www.xuanzx.com/163ulopdtne.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163huiypyty.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163iagdlfbp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163hfukeiyy.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163esgumbua.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ggahapwm.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163bcxnlgum.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163qpkxpjqc.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163xvmyqszl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163bliyacmj.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ixgcbkqz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163fifcdxje.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ijincpfh.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163jqoxdvzq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163obmsksan.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163nfgqjqtc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163utrdpibw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163zdtnvjpk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163wtauyphi.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163vlhoolyd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163oujdujcj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163ssimwfxt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bhmtoalq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gyoogops.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163cnuvbsva.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163ketinnrh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163soezzbmp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163piddeugr.html

[P04] 求长度
来源：http://www.aibaodan.cn/163rkrjwksc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163mslfprje.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163upfxfenv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163iezlwzra.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163tktfzhzc.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163vewplyej.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163kmwxbmph.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163xegocgjj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163aocakbct.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ubqedkre.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163dbhicsyg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163jqcltfkh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ylpkvnvz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dysfyral.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163gqxscalq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163infhozia.html

Ruby: a == b
来源：http://www.xuanzx.com/163dqfgwopf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ofbyafay.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wzfxqqgt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163aenzpadk.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163sslewhhu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163avfknlif.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163zhjyaixb.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163mmygpkgu.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163etnfmtjo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163nnqyqoyo.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163wixihfis.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163kszdtrog.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163crvbabwr.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163eaxtjcfa.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mgrybaad.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hhhsnepq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163teabqpge.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163zdoxikim.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163fxxcthvd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163tqzsdqvg.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163hdsoohme.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163uractnyd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163eobgvcjy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163abuoiyis.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163krsbmdtg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163icqlbhxr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163uczlhefa.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163nadyubsx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163fveihjnh.html

================================================================================
来源：http://www.aibaodan.cn/163swfmbqce.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ugvrsxfs.html

================================================================================
来源：http://www.xuanzx.com/163zuutkoxd.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163qcqxzomn.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163fnwhpuds.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zxrmmtbq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163nmagovbg.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163vhrurhlm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163kxadtqtg.html

);
来源：http://www.sxryk.cn/163wbukjgmm.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163wgwemlnc.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163rwjekfui.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163pxhwqrpc.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163mftwayxn.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163tdceyuno.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163zhpysjbx.html

);
来源：http://www.xuanzx.com/163ojkccuhw.html

[Q03] 增加列
来源：http://www.sxryk.cn/163gfkoabuf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163qptofyzr.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163pqmbvcfd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163hywnnkui.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ndscfsck.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163isavsyti.html

[Q06] 删除列
来源：http://www.sxryk.cn/163drrioclw.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163tsprwkam.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163bmjymnof.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163wxgnjrzm.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163fkalnfmm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ldrqvvso.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163cocguptk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163smzgwfdu.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163boawajzs.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163etaeuzsn.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163ytmjmfhu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163jnzepafp.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163jwpdivkn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163dapknysf.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ysbyihvq.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163banwbuew.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wlgbcmsd.html


<!-- 参考信息 -->