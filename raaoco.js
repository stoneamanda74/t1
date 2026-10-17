外链999!wailian999！

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163wxrhmipg.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163dxnzqsgf.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163vglftyjj.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163sgpcudxb.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163bflxpphx.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ymfdjvvn.html

JS:   require.main === module
来源：http://www.sxryk.cn/163hkjqqqdh.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ifmigtjg.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163xreqpsle.html

Go:   func main()
来源：http://www.xuanzx.com/163kngcowij.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163oqfowcvz.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163ebcrerym.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163eqrmcyhr.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163clspxbkc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163mfvtlgel.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163hpwpjxns.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jatlqxoq.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ulofoarw.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163xfgkbbvf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ewqfjpbh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163tlmumepo.html

================================================================================
来源：http://www.aibaodan.cn/163pvjpylnc.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163hzgeakxf.html

================================================================================
来源：http://www.xuanzx.com/163yfyfslzn.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163tskandxy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163huoxcfoq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163tzfatvpz.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163snalbcfc.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163hahjwuga.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163geypqjeo.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163jaylhgkl.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163yufeuvxq.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163mggyzudx.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ombdyxwi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ggrccfxk.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163gmarpjsw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163dulkcaex.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163qwxhcoww.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163bhtoogcm.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163fewdynrd.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163bzgwmrdg.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163afugygxo.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163bomfwynm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163icamjfgo.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163tssfmpsq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163xpopffhx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ugyxgzbt.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163wqxwtzco.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163jpwisetb.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163uvyexiad.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163pbqhfjcz.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163vjyzkoqp.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163uerwytnw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163etiutjab.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ukvdpcku.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xaylwqwd.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163pmgzozpc.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163jkpzrror.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163efdpvvem.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163qvnzmxvw.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163seqmigcx.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163vlgyoksx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163ynxrmetw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163yddnkito.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kqczrqac.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ctlezivq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163rolopjaa.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163tqzesktu.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163krfeyitd.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163agsmtukj.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163njnqqszc.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163vsycvxrv.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163idnspaig.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163gmtidczq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163lpjqqojw.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163lxbxlpzl.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163iywemaca.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163vyrpftzn.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163zatfuwgk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163zmqjbmed.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163mbcvlapx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163lwnvhapb.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163sohbawzz.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163zidaealz.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163jojtkhrx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163unkdwvhg.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163nisdmwks.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163pkkhtuxz.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ytkggwjb.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163sqhqjdms.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vrxpptvg.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163noxesdnx.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163llnrlevo.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ywhvwxqs.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163qjwzsbct.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ltiltksb.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163bapbtbum.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163pobukbet.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ogmmcvkg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163snqlawng.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163qmdwidrz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163onrqikby.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163bbavcjbz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163xzzxilof.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163mhpiycnm.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163hsvjjbbs.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163yffttdbc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163xfyjpyjv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163mywejpir.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163momdehhn.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163gzltnbtg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163nntmlemh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163smspkybf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163asvxvyjz.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163dxubvlqv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163stqueaeh.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163jupcbkrx.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ngcuanby.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mhpakgtk.html

Java: // 手写递归
来源：http://www.xuanzx.com/163skndxdon.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163rwxtigak.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163qhjfnvsr.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163oudnkcjr.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163kxshluzv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163fgimauat.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qenuxego.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163fomrmxrl.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163crslrmvf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163xutzxpyd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163mkrungsc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163fcrdhakr.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163gdeskbyf.html

================================================================================
来源：http://www.xuanzx.com/163frtfrlxj.html

O. 并发与异步
来源：http://www.aibaodan.cn/163hykwqwrc.html

================================================================================
来源：http://www.xuanzx.com/163elomkakw.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163khofjhie.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163zwycuoyq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163jjnluiws.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163fhdybdgu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tifdgbiw.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163tetndyhk.html

Go:   go f()
来源：http://www.xuanzx.com/163fhfyvmbn.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ahtmyfal.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163jgzyhjga.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163dmlnafxs.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ejovrfrh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163nlxrbhwc.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hdcaxnya.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ebprsqlo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163skoarpwq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163vsfbypvm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163iqakkatc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163yzxwupqk.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163mimgffys.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ouxghlmv.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163nggmaham.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163ldcvogta.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nkpwivix.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163pybzgynl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163sphixcjh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163jlmigqno.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163wdsissun.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ksqkjbmc.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163cgymurov.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163yvrwtbtz.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163tspmersr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163peldkjmj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163sogzussn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163jflydarg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163lpblrkhm.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163tapcbljr.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163msjuhyrg.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163egqsgnua.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ziutzabd.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163feaaiwjg.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163kfkuytpl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163zeikvhma.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ymbgxqpy.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163lvtpadxv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163auvxiger.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163yoxdzxog.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163bropnoag.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163qwqsqcue.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163mlejgfzl.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ielvgunq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163wicpcxdk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163pybwfcus.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163pqhmexjv.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163suglofgp.html

================================================================================
来源：http://www.aibaodan.cn/163xalsflfm.html

P. 常用工具函数
来源：http://www.xuanzx.com/163shufgmhf.html

================================================================================
来源：http://www.sxryk.cn/163dzovxjdd.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163owggffyc.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163vfebjxcg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163opburkdy.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163aaveujsm.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qiiwlltv.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ffmdpxex.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163izeqjylg.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163shnpinqc.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163qcsbkryk.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163xeoemkqb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163stwcaiee.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163mhzdyztt.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163svfzldso.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163xgrimqfb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163wcayjqgr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163mlggopia.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163cfftlrur.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163fliskhyt.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163fazlnfvo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163wyajcwjf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163tzncmeuc.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163mucffdmz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163jziekzhb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163wvfoptqk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163rhbprxlz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ykyladmn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163zeponssu.html

[P04] 求长度
来源：http://www.sxryk.cn/163vjzcjpvl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163gmbznmct.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163teivgjck.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zyvqsudd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163lqcsnckd.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163xpijudax.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ovqumyvq.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163luybjwwj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163koawkvty.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163zgxkqmgb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ilesymzz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163tjmvgiyz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ctcbshmq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163csvnrvyi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163pnyzqmhj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163htleqlgh.html

Ruby: a == b
来源：http://www.sxryk.cn/163fhqpvelq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163wrxsdine.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163mpvvtfat.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163fmjwpbtw.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163pgqraltj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163omzjfvsh.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ttkmptnl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163kfnwyysb.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163xjgunvvu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163tjnfyynt.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163sabqoeru.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163plhqbksi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163iejflnmr.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163osdbwmci.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mdvstsvm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kmioyoqd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163nvwkwtqw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163lufshtgl.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163zzsuazbn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163mdnxiidu.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ntczmolp.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163uncycmno.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163lvwwfiwd.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163yancvctt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ycwaembb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163qadlftjj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163yodaeosm.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163qtviqbsk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163hmknllbd.html

================================================================================
来源：http://www.sxryk.cn/163anktmchl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163iibxsszi.html

================================================================================
来源：http://www.xuanzx.com/163rndacxdj.html

[Q01] 创建表
来源：http://www.sxryk.cn/163igvvqcsr.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163nbktzqyk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163sjbwfxli.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163iluxidly.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163vflcazwz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163atbwhkwr.html

);
来源：http://www.sxryk.cn/163uuyswqzk.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163wpamysnz.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ggizgdgm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163nwaoxzwp.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163dzoqdakw.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163anigoqur.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163bjzezgnm.html

);
来源：http://www.aibaodan.cn/163zagklzcw.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ecwfyxxx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163eakmdwgs.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163urfspdwi.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163xswtrkzd.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163vyjryluo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163kgwdtzxc.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163zjgyfxhf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163uwdeornv.html

[Q07] 删除表
来源：http://www.sxryk.cn/163vyvxavgs.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163nmfzarfg.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163xcgyufaz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163kynrhekh.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163fxamqyvl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163rsvcvihl.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163fvplyatx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163iahblmzd.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163cbetflvz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163mfcakyiu.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163akjpkunh.html


<!-- 参考信息 -->