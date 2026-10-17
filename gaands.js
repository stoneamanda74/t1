外链999!wailian999！

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163kaukfozb.html

[M05] 设置退出码
来源：http://www.aibaodan.cn/163hnjuzdbe.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163lrjxrmds.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163mqxwqdug.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163hdonztqe.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163lcuudfnl.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163kjshdhnv.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163fwrdybxn.html

Ruby: exit 1
来源：http://www.sxryk.cn/163nbbwtqfe.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163mtfozccl.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163baeyymos.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ygdhvjgs.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163acswhhfv.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163dpaievdf.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163ockqzhfl.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163eqdtyjij.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163poayvfqu.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163eecnxbng.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163lclsjneb.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163yeghxpdh.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163drjhjoeb.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163veiyqcjf.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163iwrloaip.html

TS:   require.main === module
来源：http://www.xuanzx.com/163lwdmfhjf.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163avkzeabo.html

Go:   func main()
来源：http://www.aibaodan.cn/163bkrgwaox.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163hcdajjhh.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163rrhwgtsa.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163wheumybz.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163omjkytms.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163bofzjnov.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163cwsraywu.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163ldfedajx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163parqtueb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163vjvrblco.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163mrbfqhgi.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163ynnlkpan.html

================================================================================
来源：http://www.aibaodan.cn/163iprpmliz.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163kkjezmhf.html

================================================================================
来源：http://www.aibaodan.cn/163qyqufyjr.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163eiycegkp.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163dhkcesta.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163vozhgtkj.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163vpbzsbrp.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163ulsgksqj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163xmcrdrxh.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163njagkpzv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163wdyptqtk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163tncdjtym.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163nsnxnhki.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163msfezcvs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163zuvfketg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163sofgihsz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163gsgolulc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163sfyjyvfl.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163xxwbpaea.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163tjfydpqx.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163gkipryut.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ttprdsgb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ktzassco.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163yxjcqlqa.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163yehwjfpb.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163cdkxhbgz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163gtshpuya.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163yyunyryj.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163yesyaeoo.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163jqpugtdz.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163cwczwtpi.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163vckdabnu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163elgyumdc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xmzsrzko.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163bnqsbnmr.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163nhoougqe.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163qusmyard.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163sfjminfh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163mzsecuaf.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163hnxrxeds.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163tjeqsxje.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163rbmhvrff.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163unlkwemj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rlnfmgyt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163jxeykeeu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163keocyadw.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163usuqljol.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163qbgqtwel.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163umqvmaxr.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163qvmvvuzg.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ublekzbv.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cvgsnxww.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163qmkrdtpr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163xtapyyfh.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ptiibhcc.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163rezukwpa.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163lhjkhyul.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163moavfcim.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163vwviyjgj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163ijncyiex.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163lplefyap.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163juvqdyqx.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163mokdavim.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163qarzhrkt.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163nheyvyhk.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163qjzcyyvv.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163bqvcwtdl.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163miracebf.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163anrqwfjp.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fmuabxcn.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ayhdgbgb.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ojqcfuhq.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163unurtbvp.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163mgzqzgzi.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163zpxgiocu.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163eopbgazo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163jmmjanyd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163dvhrbkit.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163awuoyxfv.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163tiywibob.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163kvehnxmx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163elffzjqb.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163mudjkhuq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163rcqchzfm.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163wbozelvt.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163ewjinzas.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163jmghbiin.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163hfkuyrut.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ibqrhydq.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163xqotmaxe.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163yzscxvpi.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163bskeazof.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ehfqlxuv.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163jswazfjs.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163zpsdmpmf.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163mdnottom.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163ngmoveig.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163oyrmwnin.html

Java: // 手写递归
来源：http://www.sxryk.cn/163fypqnvaf.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163cejtzejw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163hubtjjur.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163hzttrhbs.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163sykbdvjd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163piixlryd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163qsmouaqg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163rrgdrkgt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163caxtyyjp.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ufatswmv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163sifimsgf.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163fyuhuyhy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163egltfjbc.html

================================================================================
来源：http://www.aibaodan.cn/163ivkrygmw.html

O. 并发与异步
来源：http://www.sxryk.cn/163kwctfbdh.html

================================================================================
来源：http://www.xuanzx.com/163zmnfkyxc.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163zdqpnizu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163ancvxyyt.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163phaqdbkk.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163hkgtarjl.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tmtriyyv.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163aprazqut.html

Go:   go f()
来源：http://www.aibaodan.cn/163tmpyylkv.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163nlsvzguw.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163efvydjfr.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163cgrqzzsk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ouhjizsw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163aznjqyov.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ooxddtsh.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rrgsuesf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163zgqzpbmm.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163kyhpdskz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163cuzigfey.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163vfumyrrr.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163lhxzcsyz.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163loorpnyp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163mohdiwsj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163yhnimktm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163buxmsorq.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163yizuqfgr.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ujukwfgu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163mwpgjxdy.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ovpaipcu.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163avqfnkfd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163eawdpiha.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pgmpcfyd.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163utultfes.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163nxdecqzc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163txmrdtjb.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163teucledo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163elsuqdud.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ikuggttd.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163clfbjdbh.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ifxklkpt.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163wetnykji.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163uetwjrcl.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163cibhtwdj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ssksnzmv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163hmgpjfiz.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163bmvuudjc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163rpiqnhzy.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163hyhttzwm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163swbvoowg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163otlnxrwf.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163fagnaddt.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ekfctlta.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163jmhwfqaf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163flqtwcta.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163lpntolws.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163pupawqas.html

================================================================================
来源：http://www.sxryk.cn/163hiwvtptw.html

P. 常用工具函数
来源：http://www.sxryk.cn/163citdgtap.html

================================================================================
来源：http://www.sxryk.cn/163yrfofnjx.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163jhbquvfn.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163fxqctpyd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163nxsyyhcp.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163iaecukzm.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163zfysyjtp.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163bnymiwcq.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163wkprlsad.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163zhgppcie.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163fvdrxmzj.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163kzbjoogj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163tjmunroc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163yfzpcadi.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163lyacbote.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163hpzefpzl.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163vjtmkqlt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163adhnijun.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163pbyaaxyk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163tnlilrlz.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163bimcwfuo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163sldongxm.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163phvtiszq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163fnfvhefw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lrojnbnm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163vmyzpigv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ndookxzs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163rflckylj.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163kjcmrbjj.html

[P04] 求长度
来源：http://www.aibaodan.cn/163bocklvhb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163yyyrtdri.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163phblwupt.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zdkkxgrx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163oipgjaxx.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ykuixfyd.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163rvppbbyf.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163pkpmgysc.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163xdbyhklt.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163isagitcj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163nbbckjkk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ndzwrptd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ffyeqnyz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163nqdvaqez.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163xsnmveoe.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qdekykro.html

Ruby: a == b
来源：http://www.aibaodan.cn/163nuhdnguk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163zhjubsco.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163tqavrozv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163ialplrqb.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163nwrzolyk.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163nisobghn.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163lrjhzquo.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163foxiageq.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163wjuidzjs.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163azpjjncx.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ukpabuvs.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163pvbniamg.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163suzkmctk.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163gdveqfix.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ziuyzkft.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163opakqycu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xqjuigfb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163qddpplqn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163qjberobc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163quunzxdm.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163ynymxqup.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163xjcydzbh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163wfvzaoxe.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163zwyfwiek.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163hrdmokoh.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163saydvgei.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163bwuyhrgc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163srpionnz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163cekjgjjm.html

================================================================================
来源：http://www.xuanzx.com/163tablglgx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163khepqdsg.html

================================================================================
来源：http://www.xuanzx.com/163kywrraox.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163mypphoff.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163xziiiymb.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163qjhjiuvl.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163btbtfczx.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163qvkpelab.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163wkmhgeom.html

);
来源：http://www.xuanzx.com/163priwafnf.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163skddzvpe.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163cvswjdyy.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163jzdzrnmq.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163wwsqedvb.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ayqrrubp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163pzgxeksh.html

);
来源：http://www.sxryk.cn/163etesalml.html

[Q03] 增加列
来源：http://www.sxryk.cn/163klwmbkgo.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163jthwvvbz.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163xmavyygx.html


<!-- 参考信息 -->