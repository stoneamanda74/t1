外链999!wailian999！

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163wyvlgmeg.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163acqlqida.html

JS:   require.main === module
来源：http://www.sxryk.cn/163upqksqit.html

TS:   require.main === module
来源：http://www.sxryk.cn/163kubgcssx.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163qngbyzth.html

Go:   func main()
来源：http://www.sxryk.cn/163gfzwqaqt.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163injknjvk.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163frbwlizl.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163crbtacxl.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163yirebyvl.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163elvjjnkh.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163rrpvjifv.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163glbxkaqj.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163sqhdntso.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163cqaictni.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163rqodbqmf.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163nnyfgune.html

================================================================================
来源：http://www.aibaodan.cn/163umkqnwky.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163tzcuxwkx.html

================================================================================
来源：http://www.xuanzx.com/163hwqjunyh.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163azntzufh.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163sbuoqfyw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163quwytweb.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163kegwbxdo.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ybmajkyq.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163bqbalsdq.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163gqkaeadx.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163sldamfhw.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163uvlxlfno.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ilgbzdqe.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163uqfsbuap.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163qhgmtvkt.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163lhumlpmg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xwvfbnad.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163wsaaepgz.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163tsxzrpvp.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163glqzmknp.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163gyaxikpj.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163pxjdwdmm.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163ujdydhjk.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163mmirodao.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163dqzxqyld.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163vsqrqqjz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163xhtitzjv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163ksuswhwi.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163yzyecptr.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163mmhyjrfz.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163jksbyqai.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163pchrcvnd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163bdohidgt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163rjrkzcql.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163xbxlhxyq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163mxqsxkxe.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163aqmxzrbl.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163xbeahtbv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163mmqvyfaw.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163tmcdjxup.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163inxurwbc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163dqcvamrq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163jzgvvacn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163tltxlfow.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163qralwbbl.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163kovrxssj.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163qoivsayo.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163vkkrpvgk.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163fyatzies.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163mutqkhrw.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163xrrtsprb.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163udvclgec.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163knhpiwao.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163rhxxxptq.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163jzovnpoh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163hbsivisg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163yhmtrmbj.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163pgmjilli.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163zjxnejro.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163rfxrndnv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ztpnjmse.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ezncsjqv.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163kkluzerh.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163ggemlwdw.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163tnwcgzrk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163izbiwqeh.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163igweffks.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163tdpgtmgs.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163mohidoye.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163llkiljjy.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zlwjnvxf.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163eobnajrv.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163vttxearf.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163jgkfauig.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163luneuhay.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163zlyfzmua.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163aqcsnzye.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ipfjxjea.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163hpjzwnxw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wbqvfzaq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163juvfamiq.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163hapzixlk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163hdguqxfw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163kdpiljkj.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163tpvumctq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163shukjdsn.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163hmhyczud.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163pvjlugxc.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163mtmyqmwc.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163yuidpciz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163mvvufrgl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163mzctoflq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163zsmwsijw.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163qglvnvny.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163dtuvcgvc.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163wluuaeow.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rqlgiygs.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ipdljkfo.html

Java: // 手写递归
来源：http://www.sxryk.cn/163kydlbjjb.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163ymedblra.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163ldtfzwkv.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ydxzucba.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163tmdstpsn.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163nohnvivi.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163kczwlgxc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jmoehctc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163twaxxmpj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163mhwfkmvx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163xnbrvgrw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163nmkpqeio.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ampwksvq.html

================================================================================
来源：http://www.xuanzx.com/163pawwcgfz.html

O. 并发与异步
来源：http://www.xuanzx.com/163ldjzyvtg.html

================================================================================
来源：http://www.aibaodan.cn/163ywtoeifg.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163erwyftvg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163vxhbjkrk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163fjdbdfct.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163nmzdvxvd.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ttadipys.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163nxronzej.html

Go:   go f()
来源：http://www.xuanzx.com/163rcpumuno.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163erlthakp.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163dsnfjvdf.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163cetguiqv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163egpcswma.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163izqhgwtt.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163cfmqfbjm.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163kkapvyba.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163xoebkywr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163hdgddljz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163rbjtblie.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163cunvdwma.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163flbkncae.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163xyscflcu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ywpmhpna.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163nkvzewlf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163odnbnpnq.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163zdjqrpgd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163xxwsckny.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163aniaopyk.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163fujufwtq.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163twjgoqjf.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bxabimdc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163bznjtsgg.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163aynyuybq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163yvqbkxub.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163lvsedkrn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163xfyesaee.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163qbnftosw.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ruqonqvn.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163fgrpyyaj.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163bjfftzyg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ushekqng.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ollvdhyx.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163cyreaewf.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ulnwboli.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163bnqhmneo.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163sendbxqy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163njdhrtbc.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163fcsbqmtc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163dyhqjkum.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163seukbiel.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xqsoxrye.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163aagvjstt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163sjwnxjcy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163lxupoqaq.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163shmpjbnd.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ysxbogef.html

================================================================================
来源：http://www.xuanzx.com/163ggqkizho.html

P. 常用工具函数
来源：http://www.xuanzx.com/163rhvjmlme.html

================================================================================
来源：http://www.sxryk.cn/163kxlchpgj.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163pfnoaxyj.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163qygtlcjs.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163qirygizd.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wxcizqbi.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hckqbqxe.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163amowvsqq.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163tgntkboj.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163sppucjoz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163uecbcbdq.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163vxgwdawh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163whgomjqi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163esrihekm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163vdnwhnoq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163zjynpivi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163iupbainz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163jdsufwre.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163yvicfdos.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163dacjkgkg.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163fditqbgr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163isjcjdkv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163msermjoh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163oohyzzui.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ouvsnbqq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163iumdjfgi.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163earzucpb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jpnuftgt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163odlassgg.html

[P04] 求长度
来源：http://www.xuanzx.com/163lclqjxny.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163uwqkirpo.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hrwjerzh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hfkxdvjz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uxmhrppm.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163loggiicm.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163cubwkxmz.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163cejqgxul.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163osffdvqz.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163gfjckwgk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163dhkqtcey.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163vlnqxfvr.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163liiuhjmw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163fcqnurjl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163zajsvllp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163laewsxjl.html

Ruby: a == b
来源：http://www.sxryk.cn/163icizqbge.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163qpeezxlb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163myonawzc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163zoewicof.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163wlhsdlag.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163uqodaljr.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163ckulhfkf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163nssldcvv.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163gfoloibk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163aruqexgb.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163vpnqhzvc.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163rcxrwrsr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163wxytunzp.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163zgtfqtah.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ejbxldxd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163jczuoygd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163hbhdqgav.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163xtsuhnkc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163eielzmrw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ozmwpsfz.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163fetqecdj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ztdmwhpc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163omlpswfx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163mrhiegil.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163zsrrhjiw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jbcajtyx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163nsmmsqza.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163etiaxwbs.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163gqaeamqh.html

================================================================================
来源：http://www.aibaodan.cn/163avtewoqo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163lyttxati.html

================================================================================
来源：http://www.xuanzx.com/163ycgfijlh.html

[Q01] 创建表
来源：http://www.xuanzx.com/163eglickeu.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163cymqlhst.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163crtmmaoj.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163bellocfu.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wjhvuuwi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163lxwvvzuv.html

);
来源：http://www.sxryk.cn/163kcdwqusi.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163iwmmmmrb.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163iqaasobd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kjysdxct.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163xwtlhunl.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163dohcoodi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163psxztslq.html

);
来源：http://www.aibaodan.cn/163dlrfvepk.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163wkwyqafs.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163mluqzesd.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163fpsyubif.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163tfquxkbk.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ouiouqvz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163xgcgtlnp.html

[Q06] 删除列
来源：http://www.sxryk.cn/163jrudbdjl.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163pqhimonl.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163qgkiyifh.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163mdsdtdme.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ywyknrre.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ynqmvjeq.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163xgzonweo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163mwmzlrni.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ldnbdqtk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163hafgdmtb.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163znyrcqbb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163rsrduwhe.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ogiewbni.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163crcbbhtv.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163iswuzsar.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163fysvhzey.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163tglkiqwc.html


<!-- 参考信息 -->