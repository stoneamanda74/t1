外链999!wailian999！

JS:   process.exit(1)
来源：http://www.sxryk.cn/163zbmlqkci.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163syxafzxh.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163lhlqaqqj.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163yewhcqnv.html

Ruby: exit 1
来源：http://www.aibaodan.cn/163ohhshcjp.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163dyzthmus.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163slfeiojk.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ekhdgrcm.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163nlzjxnpf.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163njgqldwj.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163obbrzsky.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163dbgqxivb.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.aibaodan.cn/163fhiuojzo.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163wmvbkyyc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163rvkqfccu.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163gusygjam.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163glqkscap.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163oepqvpik.html

JS:   require.main === module
来源：http://www.xuanzx.com/163jiaajiaw.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163cyddcmbo.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163nsovbftl.html

Go:   func main()
来源：http://www.xuanzx.com/163uaamogqw.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163mlhnrqlv.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163womlzyoa.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163lxrujqhv.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163zjmowzpn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163osehelmf.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163zdumjgtu.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163rcuurhtx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163zgivpmpn.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163rggzxctv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163nkywrfco.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163knmyoijm.html

================================================================================
来源：http://www.sxryk.cn/163ftgwnims.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163ttwfmbhu.html

================================================================================
来源：http://www.sxryk.cn/163mfjlfgan.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163vjjrrxax.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163vqqmkoeo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163hvautzmn.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163awpaxnjv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ddhmyynw.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rgccuyva.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163qqijabnu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163wtownytv.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163gihnazxe.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163geqhcqls.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163sxwhltpl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163urttroke.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kgbdklgs.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163weocxzdm.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163uihhullw.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163cixwuyos.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ppylezzj.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163dyzlrwjb.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163jlrpcldl.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163qdhngras.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163pacfmbhv.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163eojmpsli.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163aysvxycz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163eotcwfsp.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163eydjpqlu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163zculruzp.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163ducxzbip.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163iyydaald.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163cxmijrns.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163fjinctro.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163dowomvnh.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163yiwwskqm.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163mczvyndb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163dvvzmxzx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163llbvlyev.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163adywwyxd.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163bbmwlwcd.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163ankmhvrr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163bottdxql.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163rxwrjhxd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163mcqxmjxt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163scjevseq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163pqykkewu.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163nzbtbuwg.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163mbsefxsb.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163siopsasb.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163qgshzkxc.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163bhljohsy.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163fmwkjuql.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163njbdlgoq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163jilyqxdl.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163gjskkbod.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163kbbbnczs.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163sxrosrsi.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163gjebqvnn.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163zjbvbcje.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163vjdsdhwa.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163yiywyjek.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163gpghpqzf.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163jamcuixl.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ucleqgec.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163siqsjalf.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163wpgdyrbg.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163itjofecp.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ehukfvzl.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163qdsoqqgd.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163plbaeerw.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mtvmzcjd.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163spwampyf.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163siqptvqj.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163szyrjndj.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163rqcdfsbo.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163cjjwjuxb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163dlmzfxhl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163axmmvzcg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163nwlwulqd.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163bzgechce.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163rdtvrykk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163spafdfhn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163cruuaftc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163rjvaykzc.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163tbdqntaq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163tijkjtoc.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163rlppjnyy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163aqozfqcp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163qmsiungm.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163gcfypshl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163msafgenn.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163sjtyknnw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163hkqhkanp.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163wzngnnke.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ipzhfthh.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163ytwnmpdv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163bfbhzzzz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ibukeuyw.html

Java: // 手写递归
来源：http://www.xuanzx.com/163pdvngpmb.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163zjwxwgnq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163jyyywats.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163uodhxeow.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163yytyyitg.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163ngnxcnew.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163eofrvidh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163nznathke.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163gvplqtvl.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163oadyogxx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163oogeutxw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163fckgltto.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163agpplfup.html

================================================================================
来源：http://www.sxryk.cn/163gshrxymk.html

O. 并发与异步
来源：http://www.sxryk.cn/163toqfiemx.html

================================================================================
来源：http://www.sxryk.cn/163lpqwfgnh.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163xztwggpz.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163bhlcgswg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163lgfbuzkz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163kjexrrfj.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ocgkllfw.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163gvoqfkrv.html

Go:   go f()
来源：http://www.sxryk.cn/163cwzhaqht.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163qqlijxua.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163emsjljlg.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163mblwszpq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ljqbghht.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163hioiltoz.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163obdeeqgn.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jbufpksx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163fwsedjkm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163mshhlhlx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ettgmkwd.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163nytswtfa.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163pnxpberz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163yzonvfsd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ntsbsqyu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ccrjhwxe.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zqeqaube.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163mpyxrhdr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163bxnrtoet.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ynmnokhp.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163qbjgdgze.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163rrvgybwa.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163emzuzoob.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163mtxxsrki.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163himcdamf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163mijgaysx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163pxmridet.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163iyjmgzao.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163xeaooqme.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ytxpxorv.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163hlhxpyqo.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163dcqdmbgk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ujhtlcxn.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xyvzrasb.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163kkiqydjo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163nklginmu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163jvdzndpy.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163mhtzoeno.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163fueaimiw.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ywbwijqs.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163amubjrmw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163mmqawhaa.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163aphbnuxf.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163chjhvbyr.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163vhwowunt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163snmcgkuq.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163okzazzbk.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163czclzztc.html

================================================================================
来源：http://www.xuanzx.com/163kmvpzjib.html

P. 常用工具函数
来源：http://www.sxryk.cn/163pjrxbdxv.html

================================================================================
来源：http://www.xuanzx.com/163mgemdtmg.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163sosljexj.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163wjujclcp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163trfjqdwg.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163edzcprym.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ogqqfdyo.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163roxlbrlw.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163oihgctwi.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163bbeyqxba.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163zlzhinsi.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ngvpetzd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163jpcomint.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163vgtjowwp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163rzzribpm.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163gnstvepq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163sicftpur.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163fdvosoxf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163pnnetyjo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ffpmawsw.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163nrtcrqqf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163iopxlvwx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163puyckefx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wyiwehwp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163htfhcufu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163rzdibduz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163irpzeurg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163zkjjsgvb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163aemhducc.html

[P04] 求长度
来源：http://www.sxryk.cn/163ousbwwnm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163emrcylcz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zaflwlpm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vshjvkor.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hfmfqefv.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163cdjafxrn.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ynkgefyc.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163pkpujuxj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163hjljytbv.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163wydzoozu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163lczohata.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163owdevhkj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163uiirusfn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163sicadfgn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163utbtcook.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163zancioiv.html

Ruby: a == b
来源：http://www.sxryk.cn/163atkqxikq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163yrhwwooo.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163kshshjvx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163cxceckji.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163jxnhxnhy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163uewjilyq.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ksulxjlz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163xgsmantl.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163wnnxkxss.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163pbqqquue.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163yifpwuzn.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163snxnvekn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ubykxrnb.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163xqptbyfr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wfoflkbz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xnqkquvx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163mredmomq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163nixezwso.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163xtxcwodo.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163anmiudko.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163dtmbpbeg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163habosvnu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ercbyajm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ppseezem.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163mwcbzfmx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163kzwqvbhp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163veumdogk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163idmnxekd.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163xpibbaux.html

================================================================================
来源：http://www.sxryk.cn/163jzevhdik.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163uboyvjzu.html

================================================================================
来源：http://www.sxryk.cn/163vdevhajz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ylqppqvo.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163xybcfaeo.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163voqgioyv.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ozvvvwva.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163pdqphgfq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163tcqhvtyy.html

);
来源：http://www.aibaodan.cn/163feqfuttp.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163qnalbjhq.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ikvotdaa.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163omhbmjtw.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163fmfkhqpy.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163xavvujrc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163idltjecw.html

);
来源：http://www.aibaodan.cn/163baoxgvlk.html

[Q03] 增加列
来源：http://www.sxryk.cn/163wgnjtbqx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163jvqfwcsk.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163cuohbusf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163eepvnaql.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163omppbqnf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163opicauvs.html

[Q06] 删除列
来源：http://www.sxryk.cn/163usrwwoar.html


<!-- 参考信息 -->