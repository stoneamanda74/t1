外链999!wailian999！

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ppuwtpoo.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163smbotlvi.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163rdzwvqya.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163mzwkyrgo.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163tcznmxea.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163pwqqrtqc.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163oboufifz.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163ykuthfal.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163dxzujhka.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163vkbduzcr.html

JS:   require.main === module
来源：http://www.sxryk.cn/163ddwpusuw.html

TS:   require.main === module
来源：http://www.sxryk.cn/163wsudxcwz.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163cmzodbgb.html

Go:   func main()
来源：http://www.xuanzx.com/163ymwkomrq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163dvjwmoub.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163vsgucixq.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163xvytezmv.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163jhyqbljt.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163dtebocnp.html

JS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163jqsqaxyu.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sdvfklbz.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163ncbkgtla.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163qblbfyrh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163nyryfvfm.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163brrjqyln.html

================================================================================
来源：http://www.aibaodan.cn/163csienvfw.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163dqlmheey.html

================================================================================
来源：http://www.xuanzx.com/163jkpxhdmn.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xcdkghlq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163pytqrsje.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163kyvuutio.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163wqjshyqt.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ylbenxmv.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163noqewzqr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163nuzlbgko.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163xrvanfmj.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163nremfeti.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163akpooisd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xsawjing.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163mcyqhvfp.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163vxehpupy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163bpogiopp.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163iyokkjjf.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163slurntym.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163yauyjsrn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ctggdeus.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163wqhiqlqc.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163tppxvymo.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163visjcihq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163uaywrixh.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163jrktxocp.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163vujogugu.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163ixsqmqsr.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163wunpyvdh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163kjldcsgm.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163fmbxxssv.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163tezizrqx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163vmzibydn.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163yrrcmavw.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ubbwolhb.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163jpnvvbst.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163dtzoyolq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163agzebejh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163aslnbwdn.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163yusmzhdm.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163vhlinrph.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163bhogaazk.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163hcknttjh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xxgsjfeg.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163surnnpkr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163reaolffc.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163njfvwesf.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163hmognubf.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ubfdktap.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163beqybwna.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163gpwgfsdw.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xfzubrhk.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163hmajlcby.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163mspixjsx.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163xgycefvs.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163qyyyxuuy.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lnutjizn.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163amuznqgo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jylqpgij.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163mqsduxvt.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rwgqvaty.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163kmqpetle.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xffpaquv.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163skibttgx.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163fhywjxoj.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163gnwlvsip.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163wvuveoye.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163paewwrky.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163uqwbkgrz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163yggkgupe.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bqmktemx.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163qzgmmzuh.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163bjnrglaa.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163frxnpsvm.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163bwahthmw.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163hvwpnksh.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ritanzgg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163wrvfaeak.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163mrdconkx.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163dzpthzxn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163noklxciz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163jftswaqb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wekwiscb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163gbfzqqqp.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163sbrcbytb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163opozlbtg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163bwcuwypg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163xzcprtuy.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163dbrfdzuo.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163pztrltat.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163byaojgxd.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163rorogdfa.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163xbpffxto.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163qcuetcgx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163tczkgqkw.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163lavihzzn.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rryonaho.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pmcvoshx.html

Java: // 手写递归
来源：http://www.xuanzx.com/163hfttzvgs.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163lsuknkdb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163luqonbxu.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163kmbfljpl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163jqiotnvc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163jvvilnam.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163myyquxar.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163kbxliyit.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163johbpduw.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163dvdsjimb.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163nksxxsef.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163hklfrvbs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xnefjnwb.html

================================================================================
来源：http://www.xuanzx.com/163npequhki.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ngwvnfcu.html

================================================================================
来源：http://www.aibaodan.cn/163fkkloyhl.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163bfbtjfax.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163qrncqtuo.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163zffnmend.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163bffztdsk.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163eqddpfix.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163rbdqmxqq.html

Go:   go f()
来源：http://www.xuanzx.com/163ihpbicxq.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163mwvvadwb.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163rfypmrmy.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163vcrtzshe.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163jhpwizbk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163krjxqcqb.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qxhbazxm.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vackofwh.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ysjcfdll.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163lyjlwame.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163rjtfyoub.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163dqtzriis.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163bwnwhxqz.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163jsbwmnzf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163sshtroda.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163pwtbhakz.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163cxyjoxll.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163yqpqgqtp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163otscvvpf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163lkehjxxt.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163azreffft.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163kpxcxgsy.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163itjojens.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163aaxiqdgz.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163kilyxxjr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163mouzgegt.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163mvrvymsr.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ojshhtwk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163hpnlzoqz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163mpyvyivz.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163sgzrjrkt.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163siiwsrcn.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163dcbcavwc.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163tykcqfnk.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163nacoiqfr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163lclnkcnr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163uhwrifay.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163fyzywvtv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163owfnyjcq.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163zlbmfboq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163qhjgpboz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163lmnodovn.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ndqhynhh.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163nksdihim.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163vcjeoutm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163obeojcls.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163totujufe.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163bxjgldug.html

================================================================================
来源：http://www.xuanzx.com/163dhbplfiv.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163lqtswzsr.html

================================================================================
来源：http://www.xuanzx.com/163uhsunjnp.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163qekhybpe.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163csyjwfao.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163vaygwqsg.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xvryxasm.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163mzsthblg.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163gixzifok.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163iclewslr.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163tmxpdjbw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163dewlrkaq.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ziqbvdwo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ypudejlj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163pycwqzuc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163hngukuik.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163hwmttfdw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163jnoawnqg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163hcusraoz.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163cumofivd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163rdchuscr.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163dylssdyv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163zhynutte.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163vscnnggn.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ttoyuqlr.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163nzdrijke.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163gpzohcdd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163xpdywysh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163esossujv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ntaoxiqg.html

[P04] 求长度
来源：http://www.aibaodan.cn/163eejsqyez.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163kdftiyey.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163fescngeh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163urnhbjgm.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wctikbjt.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163gnrsalci.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163lahpfxhp.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163owixyfso.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163dwzpofpd.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163sukgopuu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163uqeocbvr.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163szhwougj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163pebolumo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163hdtnkpkm.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163eapaukyd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163avcgmtrr.html

Ruby: a == b
来源：http://www.sxryk.cn/163ulgelomu.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163jmprxhvs.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163mdlellvp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163yyhilvuf.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163drksyzrf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163xyidknzu.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163utgcfujj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ednyfezp.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ybprizdb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163rmxwebnf.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ysgazqqb.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163xmaatftv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163hcfelyhc.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163xcieulth.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nrwxaekb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163thayojhc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ozfywwfk.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163mxhphgto.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163xhkoctyb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163njhzkbka.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163tttwllav.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163rrudyelx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163cjpzdduk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163zyfqoegn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163whrzvoco.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163keknarhj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163ojuajggt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163erikvkot.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163iybyrwce.html

================================================================================
来源：http://www.sxryk.cn/163voalogxk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163njwiwzzi.html

================================================================================
来源：http://www.xuanzx.com/163zlankwzp.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ykaipzwa.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163egrkohoy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163rhjxbpyf.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163xxphpdjr.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163zfmfroor.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163hcdltgsh.html

);
来源：http://www.aibaodan.cn/163ucrtwhrx.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163yazmktnq.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163asgvqiwv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163gcdamxhc.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163wdbiuzfh.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ogmmkncu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163kcmoylve.html

);
来源：http://www.xuanzx.com/163wnnwyncl.html

[Q03] 增加列
来源：http://www.sxryk.cn/163zereawmy.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163fbwmfkci.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163pdtzxzwy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163sbijqnru.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ydsrnvht.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ytgrkhxh.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163rugkiaqr.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163vxzhiilm.html

[Q07] 删除表
来源：http://www.xuanzx.com/163yabctkte.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163iwwjtqjn.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163hfrhbrso.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163uwgtffvt.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163yrdmswjn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163rnjdjrmt.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163rvylaeyx.html


<!-- 参考信息 -->