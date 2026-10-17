外链999!wailian999！

Ruby: exit 1
来源：http://www.aibaodan.cn/163sywxwhft.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163ygohxfck.html

[M06] 向标准错误输出
来源：http://www.aibaodan.cn/163uetbjvof.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163ymbubxnd.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.aibaodan.cn/163xfsoqrns.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163cgyqbubl.html

TS:   console.error("err")
来源：http://www.xuanzx.com/163fhjbuvrp.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163kznjsrdy.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163aublzoex.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163zmolqotw.html

C#:   Console.Error.WriteLine("err")
来源：http://www.xuanzx.com/163sahoelki.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163lzblnkwu.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163hjtnfaxs.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.sxryk.cn/163bfpkbdwx.html

JS:   require.main === module
来源：http://www.sxryk.cn/163eiebklae.html

TS:   require.main === module
来源：http://www.sxryk.cn/163ukdidogv.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163xrmryvgo.html

Go:   func main()
来源：http://www.aibaodan.cn/163gxuemdti.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163jyhmcclk.html

C#:   static void Main(string[] args)
来源：http://www.xuanzx.com/163egiquvcp.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ruigbwen.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163oygeigfk.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163gfdersjn.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hmddixom.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163yvovruqr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163yoqirbjy.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163xmogodaf.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163hpycntfo.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163uwbirhtb.html

================================================================================
来源：http://www.sxryk.cn/163brshcoqi.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163sypyewod.html

================================================================================
来源：http://www.xuanzx.com/163husbildz.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163bjnszasa.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163pwprrvup.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163wvxucgnv.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163drogwdko.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163jclnvcem.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163zmjomypx.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163fwrlwyli.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163bnqywdkt.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163lrncfmkf.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163oshhqejx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163sojgxeec.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163lcictruj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163fgxgzgat.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163slttyftf.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ysiwwied.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163hwuksler.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dxrwdgoc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163hywvinqr.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163vtwrxkkt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163rlbmikuc.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163gsroqelz.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pewnuvag.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163cybqktfo.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163xkmhzhuz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163fjondkrt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163dvjmocaw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163isiuojno.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163mzdavrof.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zjyjwflg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163rpjljtsj.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163ehmhpugk.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163emdsndmk.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163oizuiuri.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163nsdefcen.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163ojnvtwhd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163gjaqtnad.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163cbbooxin.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163hyfwsqjc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163axvhhnnl.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163annqyopw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163xovmraol.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ooencere.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163mkxpdsda.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163kqbnypkb.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163uyylwswb.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163unbgbkpi.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163uaglyaeg.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163buuebhyd.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163fwojdjbb.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pnyayrlr.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163ybovsziu.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163xatgpxhu.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163pesjbsil.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xqqstrbj.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163baapxzgu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163xptmhigp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163cklyfhcs.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163wbauhwed.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163jnvtjnui.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163opqjlkdy.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163uopsduer.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163kebwkuas.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163jgsebrnw.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163dwyuakrv.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163mahzorxs.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163twqudpqj.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ogsoczqt.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lhftgugb.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ldvccnbm.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163fapkdwml.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163pnawagxk.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zesumwxx.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163fictrgpr.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163phxzbxzh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163lucubxso.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163vusolfag.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163rvebjoua.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163uxqwdeey.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163bacexovj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163dkijfpbn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163gsriohrr.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163syzvkzbq.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163naodolwv.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163mdagxjdk.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163apaxubwm.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163esfdkepw.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163hobceezh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163gyefyzvo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163czwjdpvb.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163dlykneni.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163isghxqon.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163jewlacri.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163fverxcke.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dtxolefu.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zwaayglm.html

Java: // 手写递归
来源：http://www.sxryk.cn/163ocvldagj.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163soariahu.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163follsbyd.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ihtddkzy.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163mdwfhydr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163jjphdmnb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163pwmtvtyv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ottqvgin.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163qstinlit.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163wbgvkemc.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ylgxmatr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163sumozelp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163zrsxmqyp.html

================================================================================
来源：http://www.xuanzx.com/163xvvlovme.html

O. 并发与异步
来源：http://www.sxryk.cn/163axwyyqnd.html

================================================================================
来源：http://www.sxryk.cn/163dpmywdmq.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163exxhnjsu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163yjsgbojs.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163zrekjthx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163lyndkqsp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xjkbclbf.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163rzloqsqz.html

Go:   go f()
来源：http://www.aibaodan.cn/163bckpoxrh.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163kowjytlw.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163wlpnccsq.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163xrsityul.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163wfxleomd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wdzkseyi.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bgsaimry.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163fendxaag.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163vidsqeae.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vkcfjcmu.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163gcwevocl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163csmtadrx.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163wdzwyeai.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163wjgowxqh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163mjexigog.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163cobjixpf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163aridhdmh.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163pypddkhp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163zwzftsma.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163zlgidkpw.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163uhwrzmuh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163vlzowqkp.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163zdvrkelq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163pjbhveha.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163oqzmwtzc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163avvqeggw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163lfasjkne.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163nopkjvhl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163zceewrsu.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163sbdxltes.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163gttnhnow.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163fsukuqbz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163qgzhnsyr.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163jybzhfxf.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wbzwxwnw.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163wumjajkh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163iocriddr.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163dxsoajfe.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163cnzmkohx.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163sfysnshz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163uhhiwbio.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163fbmqpubz.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163rrtsbwxg.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163bsepbxbl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163cdsqpshl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163pgeafozp.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163hjelruiw.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163nnvkwegz.html

================================================================================
来源：http://www.sxryk.cn/163ehfitxvt.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163wvjnacdm.html

================================================================================
来源：http://www.xuanzx.com/163ncpvpnpa.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ilzgmamb.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163jnrksovc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ipagfbpp.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163iakrzgwr.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163qbhkjdsf.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163sznrwwsr.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163zkrsmsgh.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163netcamhh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163wxampber.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163citwwxyi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163xinbuzqp.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163obzelvdu.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163xcrcpana.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163cntpyqtg.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163uwyujryb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163iarcdmpp.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163fgijccjy.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ixcfjsco.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163pumymval.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163qlhzxeht.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163byhshhui.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163gbhhjewb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dhanabfd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ryztqpfr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163mvlintiw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163waoqazru.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163vuvjlimv.html

[P04] 求长度
来源：http://www.sxryk.cn/163ufplptau.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163qicmbixf.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nohwovmx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zgyfnfvy.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163xatcvglh.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163fsdnwylp.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163qwafblda.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163unlnfjnl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163mpywnbku.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163irfogtcg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163shjssihm.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163nfcgvsxm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163utmxmbzw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163nvnyrfcy.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163diybxybc.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163bjrlteav.html

Ruby: a == b
来源：http://www.aibaodan.cn/163huuopapb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163kwxqfkvl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163dwmgkese.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163xdxhkccz.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163lyebxqhd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163nrxrbnht.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163aojkufel.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163lcdkkzqe.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163jwzlavog.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163rdhywztg.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163knkvubuh.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163tjtvbxfo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163xtidbfrb.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163wqcbqexf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gqrcayhj.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lotqypfw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163doizuymc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163hfnvjjfg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163rwepmcss.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163zudjbzrk.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163qieohgum.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163qxtscnkq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163lzyjjomh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ammkyydh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163yyhizpzk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163loqqgyea.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163kglzzvtp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163zxlqhsse.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163agpxuxkf.html

================================================================================
来源：http://www.xuanzx.com/163jdjqqopc.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163brmzbdis.html

================================================================================
来源：http://www.xuanzx.com/163iyxcgdqd.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163copknbvr.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163nnuefhzr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tdjdrnzh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163taekxljq.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163jxylrixa.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163zpdswbry.html

);
来源：http://www.sxryk.cn/163fxkvsmoi.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163xfpulakj.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163lowpzsgp.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163scmghbqr.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163pxtehaxk.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163blrmachy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163fvrucels.html

);
来源：http://www.aibaodan.cn/163ytzbitiy.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163uwnsgrgr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163gfaznsjt.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163mmsxbsla.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163gglzdvqn.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163lhziztby.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163eulgxlfa.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163walpoeih.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ihfuopxl.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ofdeigfs.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163vsnefgkn.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ywnoklio.html


<!-- 参考信息 -->