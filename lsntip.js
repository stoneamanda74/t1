外链999!wailian999！

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163adnmkyzp.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163cvlodoug.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163nosskqxm.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163toltaukl.html

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163zcdydfwe.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163mjrodgwp.html

JS:   require.main === module
来源：http://www.sxryk.cn/163yusjhfqz.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163oxgovpkp.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163jywrrlht.html

Go:   func main()
来源：http://www.xuanzx.com/163flnsihbs.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163vfqexcnu.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163msqrcfhw.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163dhbauzgj.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163juvqrjrc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163egxxxoks.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163dnfrelwg.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163jncurxnw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163srjhwvwh.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163giutettp.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163tzipwhbh.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163siltagri.html

================================================================================
来源：http://www.aibaodan.cn/163xjczplye.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163nhntkyao.html

================================================================================
来源：http://www.xuanzx.com/163niroesos.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163uutgjimc.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163iijhzggb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163qwvddyup.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163twulfhcs.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ratvtgjz.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163qtdglbpz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163hjtfgyua.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163gpauiree.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163ivkkvnxr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ltvbkmup.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163slwwzkmf.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163kjijvykc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163wufmqskh.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xgeimgxd.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163imkzdezd.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163ddkquyjm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163sbmunwao.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ukacoocb.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163bfvqiweb.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163ycthecdt.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163uckxrjzf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163ermvmmxo.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cvnbjclb.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163cmrnibgj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163iyayrvxo.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163gmshjrpy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163rceizkpg.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163fjdxeoel.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163edkophqx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163xtvveedt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qgeujfhk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ebiscimy.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163xfjhqvqs.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163ikrplira.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bbprsvyo.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163cgmltdns.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163asxxiovu.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163sywtzklc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163buneqobg.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kbltvtlv.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163amlleenr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163wkasvykr.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163whsxuugb.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163mnystqrz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163evjzmtpm.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163oifurywg.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163sblhqlax.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163xnprbdsf.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163uymfmybw.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ilkwrscl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163vlitpwuj.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ydwuawyf.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163hezkqbvb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163edwjaypt.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163kubcgimw.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163wedjlyjc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163fyrqognm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163wjrkcfxz.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163ssslzurz.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163jeiburah.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163coftljji.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163dicnrdib.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163awflsdvb.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163izqfdbgh.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163skhglmyp.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163ckqghebk.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bucdvsxw.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163flbaremg.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163amtvzjtq.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163cybdrspe.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163vpcnqgja.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163uiopqeez.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163hlhgoeur.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163xbdjtumd.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163kfcwbrhl.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163hfaxhdtm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163fcidcgsq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163oudgista.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163fvrfygde.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163oxsodunx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163nzjaesxh.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ihkudrtc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163qbtpiuio.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163frisurqf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163hapakony.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163mdagfhth.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163umlelwdc.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163vbbrxvdx.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163qldarriu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163fbklmume.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163iwdupgos.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163sytjydkq.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163apeaezgt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163cxqfvcrq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rlhylulr.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163ulurlygz.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163jpqmaysm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163pwbpqncz.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ivnslwdp.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163vfyiybkq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163mityhgdt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163tpysdflt.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ckfsjlvw.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lwpwzmxj.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hlswhnya.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163kzfefjvj.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163lnzjngbp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163dhiacrap.html

================================================================================
来源：http://www.xuanzx.com/163dhrtvtrm.html

O. 并发与异步
来源：http://www.aibaodan.cn/163vlpmwmbd.html

================================================================================
来源：http://www.xuanzx.com/163gndpsryy.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163cgtovpqb.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163pjadlxkk.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163gjwecqpd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163rmuyukzx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pipvojud.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163fsnspvwt.html

Go:   go f()
来源：http://www.aibaodan.cn/163dwtdbnsa.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ufkgukbp.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163mjmcubdr.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ctnaokqn.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ewrfczrf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163hfulwsjw.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163pfpkirjo.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163uehiojkk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163xetpbcyq.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163celxkkdw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163sptxssww.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163kbrounzf.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163gzzwoxis.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163nmltemzb.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163lyjxaitr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163qloofetr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ayrydmye.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ntinstah.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163udaqjmlk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wnayezih.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163meteacns.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163szrdqkzb.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163vstaihay.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163dmeebjdt.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163tkybrvvs.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163grhjcmqo.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163jzstheva.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163kskzhiqy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163oyghzojz.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163wipfptxj.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163kytkqqhe.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163qrbfqvbw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163dqgdnute.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xdmfhgau.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cmmrbwmp.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163vgfiavsr.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163isbmuqzo.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163pazdtbyd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163uwkydcan.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163rjktmmod.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163ltwosnxg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163cesafxqj.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vxnnxssz.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163choltiqo.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163qojteluk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163morcabwi.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163wafxxgyq.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163mdlnxhir.html

================================================================================
来源：http://www.sxryk.cn/163jusmuvlx.html

P. 常用工具函数
来源：http://www.sxryk.cn/163udxkzrrm.html

================================================================================
来源：http://www.aibaodan.cn/163xgbpbekn.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163cgthhrcc.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163gwkypigz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163pwktbwys.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163tdfcxraz.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163yqkinlvh.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163tiwoyojv.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163byswtiqr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163znkbsots.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163qujhxcwz.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163sixmwyre.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163quenbbuh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163aasqpkuc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163hmwejqgy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163xzgjvnai.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163sikytgkt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163tarkmksl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163yijfiwta.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xrtfyvow.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163eerkpktv.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163okswyank.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163wgrrsaqb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163uqprknnf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163urzglikn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163thsptpma.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163daniuhkx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163iuogzqge.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163wakcihgc.html

[P04] 求长度
来源：http://www.sxryk.cn/163isrjhuub.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163oeqdjrys.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163nylwuonh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rmoduyys.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xkgwvzqq.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163usjottcp.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163laksjjhg.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163lnrramxk.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163napbnvyk.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163dvunxych.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163lcicdatx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163iguftybl.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ewwardms.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163eyhjwqhw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163kpomodbw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163gtgbdavm.html

Ruby: a == b
来源：http://www.xuanzx.com/163iyumgiti.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163nfmjluzw.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163dgpkhzmw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163trkdxxkf.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163aipimhou.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163gtrabtlv.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163fnnanjpz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163romqmxjs.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163bocihveq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163dtukyqgm.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163fgsqxwuf.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163hynynrnx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163jxotyqpg.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163znayadeg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163akjwlmzw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nhwdgbet.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163dxapnktd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163bavjmeut.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163mvtihtoq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163evuxounb.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163nimooidf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163dwquwmwo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163tfrjykkh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163awztktlw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163nmdzcmhs.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163icychjue.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163pcapqahu.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163gfikpkui.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163jfhpouoi.html

================================================================================
来源：http://www.xuanzx.com/163kdkcvlyn.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163mpvsjfin.html

================================================================================
来源：http://www.sxryk.cn/163mvcowqyt.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163farngqzh.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163bggslieh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163kprohzlg.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163eltlowrc.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163pdvsjofw.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ocbticuw.html

);
来源：http://www.aibaodan.cn/163giquacmy.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163iqmbmhxx.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163uqjshyqk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tcsgpsus.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163mmgbirsg.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ruqxmyie.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163sazdngtz.html

);
来源：http://www.sxryk.cn/163ycffhfiz.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163dmptijjv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163bhcmujnl.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163seuzgjrf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163twobgeah.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163mukaahzw.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ydvtakct.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163tzhhuejk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163qcpkzbsj.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ugbwvaru.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163sddyrvgl.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163jirplqky.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163anxygrry.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163fwlkkyvi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163biqvqiob.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163okhpijhd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163gbawmydt.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163woidhdvk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163xulmmtyx.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163styhmtup.html


<!-- 参考信息 -->