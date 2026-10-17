外链999!wailian999！

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163neuslxae.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163xjdagpym.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163jxbphkff.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163okymqjxr.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163iqqmihwf.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163asgfzwpu.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163ihajaugt.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163kwsotmgf.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163zbpxdlzz.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163xtopmufy.html

JS:   require.main === module
来源：http://www.sxryk.cn/163guzwmndv.html

TS:   require.main === module
来源：http://www.sxryk.cn/163yarqlvji.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163wiezzvle.html

Go:   func main()
来源：http://www.xuanzx.com/163waugbxlq.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163krgftjyp.html

C#:   static void Main(string[] args)
来源：http://www.aibaodan.cn/163werhjlpz.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163ehgmiauk.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163lfaoupxn.html

PHP:  PHP_OS;  phpversion();
来源：http://www.aibaodan.cn/163qizifqfm.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163didqjfta.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163wfwfdenp.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163dkqhjhuq.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163lbssvvqi.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163cxoyipbi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163byxnngpw.html

================================================================================
来源：http://www.sxryk.cn/163bscfjebz.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163nnbevorw.html

================================================================================
来源：http://www.aibaodan.cn/163xrhuftsl.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163wtxmpfsg.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ukbtewga.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163qqvsdern.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163fvqdwniv.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163xihkarqe.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163fhwdfkwa.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163tecezrzi.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163xqgehgdx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163nqkadvlw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ckdxxmvj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nbemwkfs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163arktxlkn.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163ftznshwy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163eedtqmrz.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163maolyriy.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dkemtpds.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163zhxlfdwb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163lzcuurrs.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163npicbzia.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163qgzmnzxq.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163arnebslz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163vfdothet.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vwhikepn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163bvigtycc.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163hxdvqstt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163dmhkxerh.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163iuhfuwod.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163cufkvajo.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163arfdcbnp.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163llgqptar.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163tmwalkyj.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163botowysg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163afwndczg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163nzkkgxif.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qobbwtwj.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163mmqdsqle.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ndebfbgt.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163usugkhgr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163ihzzcsmo.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163dvsgtvqr.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163fdvdqjwo.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ofuhmtfj.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163toqgullg.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163gsvjcifa.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163bqwiknbq.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163wbbjcplf.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163qaozvmqe.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163awvotbtp.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ogkfvari.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163zrdqukrb.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163tzluavzk.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163bujfbrzx.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163jgjuqemg.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163bjsmtpaa.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163cdjsfrrv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163bakbctwa.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163zzrurnks.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163kbhzgacj.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qrliirbf.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163mgnfarjn.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163frfyrurb.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163kldqoszu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163tlhzebgk.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163yekmdnou.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163pmdeikpt.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ufyxgmkt.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163uflrykfx.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163psrkaoju.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163kcoytneo.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wkunxccx.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163vhkaymsg.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zhqhipmx.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163akmharud.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163cbqdqsbd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163zgqtfcbh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163aokyfbhv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163wvrmnxmb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163myirmzzf.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163spwwgfni.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163emzufgxi.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163orrefqxm.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ykibdirx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163zlxquiii.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163ybmvebeo.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163gfdviwhk.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163hffvxdox.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163zxfflwan.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163ykitcbhr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163cvanarmb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163oeoambml.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163tiylmimv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163rsxyttwi.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163htdtphpo.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163lthumzka.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163tccsudxe.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ixkskhuc.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163kreghinx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163hjartmkq.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163cpxngstb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163oafhprqp.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163bfffxopm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163qsnwemnb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ttkjband.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qlxwvfpy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163bqezzzoj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163lnyzvntp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163bhlxekaz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kpeomcli.html

================================================================================
来源：http://www.sxryk.cn/163pevxizuq.html

O. 并发与异步
来源：http://www.aibaodan.cn/163hlnfrlnd.html

================================================================================
来源：http://www.xuanzx.com/163gjotvsag.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163aptvevmq.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163xghcvlhc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163rkjvdpim.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163pdxhwclf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163duijuxgw.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163dtsgxqio.html

Go:   go f()
来源：http://www.xuanzx.com/163hpsnsrzq.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163okxieyrm.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163cqqhcvnd.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163cgydugzt.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163wqpobqxk.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163rfuipgqh.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163vyofghid.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163tnqbatst.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163spxwkyqw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163vscavuty.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163iadnnnxp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ahvvrdmt.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163vagylsdr.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163ouemogyi.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163snmvrojl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163wfdgstau.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ovvfcwls.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163xkfgbnyt.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163sjzubdhw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163gwtcwvch.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163nhpidyxb.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163svmjogmj.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163cnoqmjjz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163fbkezfjc.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163zmkiaucf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163hrsnqkfc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ylsewmtt.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zbhpwxcj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163kwynwkkj.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163wybbqkis.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163bvqhfqve.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163efcyrhkf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163zfzppchg.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163javzretl.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ivwgncjr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163zourqbio.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ezqmnwvh.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163bzindfjt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163zhelagto.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163tnwczydv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163gqvweeyq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163kszfgnyk.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163omwcpzhe.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163mhqlctnu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163kwqqjrei.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163wyuuvacl.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163yswevesn.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163oemxndmg.html

================================================================================
来源：http://www.sxryk.cn/163eptunnju.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163nshdqdag.html

================================================================================
来源：http://www.sxryk.cn/163xxfuadbr.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163nrpmzyfe.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ixfggqyp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163bniiivyl.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163uljokujc.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zmadnmpm.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163fvzesvvm.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163uaahuxvo.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163gldpihsu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163vsusaxtm.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163iqdyfcpi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163aatpglpg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163idnqnnmq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163wkrtlysi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163lhbpgoom.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163uevvzjeo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163arlmsuue.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163wltywnnu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163okxsptuj.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163clztehnj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ubwqqigp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163jnnanytz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163uqwvkrhj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rgmlbujv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163feafyhtc.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ejmuokxi.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jcrndxad.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163njvggsei.html

[P04] 求长度
来源：http://www.xuanzx.com/163lytswbjm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ajnkmddj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163llfiytpd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ysimqvle.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163fwazfmoa.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vnjiuqdv.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163lfhtkvbe.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163gsdsudcy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163xwmvobqn.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163igjkjjda.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163dqdzajeu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163bdpqkqia.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163cthyotsh.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ysldxhkw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ajxqiclm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163rkuzwjkn.html

Ruby: a == b
来源：http://www.aibaodan.cn/163wsucowjx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ygjepbfg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ydughaxf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163nsophnrn.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163bqrsqhbj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ikmaumfc.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163plbogofq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163uidpyexh.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163onistnhd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163pgucstbg.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ytynmjvr.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ktorcmex.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163tlfdzepq.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163rpfpjdtk.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163azjhffyb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ocfcikyy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163jmgkmpfq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163mwaaprsf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163gvubgzfi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163kxlxxwmp.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163tmfihyem.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163giccvpvt.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163nzkpmzbg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163thzupkoy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163tepokigx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163mijaoyhm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163vqojkmll.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163cahnbmwq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163jweqlxyf.html

================================================================================
来源：http://www.sxryk.cn/163bjuryood.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163kncfevad.html

================================================================================
来源：http://www.sxryk.cn/163pgvdohyz.html

[Q01] 创建表
来源：http://www.sxryk.cn/163vzsrkyuy.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163cpzhzfgl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zhzwkubn.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163yztardhf.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ntvaqixw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163zgqcoqew.html

);
来源：http://www.aibaodan.cn/163brdlzewy.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163hfreirza.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163rxqpjlzn.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ffcwvlph.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ejkdtijv.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163qkmcsjqp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jwoshcjm.html

);
来源：http://www.sxryk.cn/163srpybgnm.html

[Q03] 增加列
来源：http://www.xuanzx.com/163sjdvpesw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163bxhgoolp.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163njqnedjz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163fcqcewbd.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163xolnplks.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163chlspobk.html

[Q06] 删除列
来源：http://www.sxryk.cn/163oaiqdjhn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163pqmqwjsl.html

[Q07] 删除表
来源：http://www.sxryk.cn/163morgpoeb.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163mgwchttt.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163muysqszg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163dilqbxrj.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163zdgzauhj.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163rrnzdmxw.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163hmpfrsff.html


<!-- 参考信息 -->