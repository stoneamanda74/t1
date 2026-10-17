外链999!wailian999！

JS:   process.exit(1)
来源：http://www.xuanzx.com/163bksuozqm.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163toqswxmk.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163ovpynqnf.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163fyoiwdzb.html

Ruby: exit 1
来源：http://www.xuanzx.com/163gmxdlkjw.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.xuanzx.com/163mbbfwwci.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163bskdxgqi.html

Py:   print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163ohvtaidi.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163ptkjeevq.html

JS:   console.error("err")
来源：http://www.xuanzx.com/163fmrlrngw.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163zipwmlep.html

Java: System.err.println("err")
来源：http://www.xuanzx.com/163qomyheeh.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163kkqbgquz.html

Ruby: warn "err"
来源：http://www.sxryk.cn/163eipgptoz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163lzwyjylv.html

[M07] 判断是否为主入口
来源：http://www.aibaodan.cn/163jlnmszjz.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163oqlaevzs.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.xuanzx.com/163ikekivpo.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163ufnoqeyn.html

TS:   require.main === module
来源：http://www.xuanzx.com/163hrqkwmqn.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163ittijzko.html

Go:   func main()
来源：http://www.aibaodan.cn/163rirfqpkp.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163mhgybhqn.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163unpjrmzo.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163wyncjxkd.html

Py:   platform.system();  platform.python_version()
来源：http://www.aibaodan.cn/163zuspdvmh.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163hoypdcwj.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163vquyvnxu.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zytsnyxx.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163egqolifo.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163mzcpowoh.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163dbxtugil.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163xexyfslo.html

================================================================================
来源：http://www.sxryk.cn/163fcfwafsy.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163jsodnwpi.html

================================================================================
来源：http://www.sxryk.cn/163mgwzirab.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163argiwgxx.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163xhxubyvh.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163zagduich.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163nuyagspw.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163trkdpyqp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163uduroahz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163bzqicbef.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163fkcvrbxy.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163jtaebinb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163rwdbnlva.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163munwbddw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163mhycocdw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163akejgdnn.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163kkmlzqoi.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163gccvabua.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163eablposz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163uqnghtse.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163xtaneorx.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163uvxjacvz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163vpwmbgnk.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163pruxqflg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cyjojgmq.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163vqdfiorc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163rzhwfsfj.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163ypdigyuv.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163vcwjuhhy.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163iyjdozua.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163xilayinu.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163npxnrlal.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163xznrswlc.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163vmxduqhs.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163fkvjamlq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163mdnipwgq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163knhearhh.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163toolvxjc.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163nauwqawq.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163xnqsotsp.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163fghnxhlg.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163lmtsqucb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163lswtxjvw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bigghwmq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163bpedqqnc.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163prnmqnii.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163roqcrfdp.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163qxlocqmm.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163trnfrhsh.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163qyptfqmq.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163xxjnakkw.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163crkctkjs.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163wxlntnbi.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163lhoxuksf.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ozukxvyh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163rkbuknfl.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163oroddunx.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163bzrycknb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163gabaeddm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163xberryrv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163mblxnqjr.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163phrswmzp.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163qttijczf.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163dynranze.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163glaqgrwm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ypuvgjcw.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163rcfuvems.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163sunbkekt.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163zouretqr.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163veutexmv.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163upktgjzj.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163fvgskpno.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kydvefad.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163qjfwlkkm.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bynsofjz.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163pumhaivh.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163stndrvxa.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ryaqtyle.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163rfvpicmy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163rfbujoop.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163scwhzdhs.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163jidtpnkh.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163aksrgmhb.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163qioxtzem.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163pnzbsqgz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163krgdgubi.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163wqhktxvz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163hplbzmie.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163jskmushi.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163velwddsy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163dyraoehl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163drkcrhft.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163kpwspcmb.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163wbnzfgqx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163ceptxabm.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163gezksfhv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163vnwwpcvz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163pkyouwgc.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vtmngpjv.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163qxetwrny.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163kknktwsw.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163ttapvwkx.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ambwzyyl.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163iljwuatj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163rlmfsudc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163zvhlripd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163fsckgvqt.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ftsargrh.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163ryebtybr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163gtzhcone.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163itavsktf.html

================================================================================
来源：http://www.aibaodan.cn/163nlloapto.html

O. 并发与异步
来源：http://www.aibaodan.cn/163fvrwgqkj.html

================================================================================
来源：http://www.sxryk.cn/163lwsmvuzm.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ehaapwbe.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163nxslnaaa.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163hmsbvmrj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163htyxyuln.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163vpljobrn.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163kueeeymo.html

Go:   go f()
来源：http://www.aibaodan.cn/163zigolsjj.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163wbhpobtc.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163aufwwnls.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163kawasffd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163hbcvykqh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163karvcndb.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163njrnrxcm.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163gvhzepvg.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163sgttenqh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163sqpdvbqt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163elncgogh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ctuwnwyd.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163qxjiwxjz.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163jzeyeavl.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163rqelpkgj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163wyfiojag.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bvmxtfte.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163uggkyzpv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163xgyycreq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163pblufuid.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163enmzqewb.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ekzkjmmz.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163yrphsynq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163bjqxjhqb.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163dzcowglk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163wgswkwpb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163zvjtwtzm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163belxegfu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163dkxipjjc.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163obyyhgpy.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ngybirnv.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163tlmfztoq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163wjsohbvj.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ultbbnlu.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163szwmuedc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163jvizetiq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163pedrbrjq.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163vfgtszmj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163jyobbuwy.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163nlysdosn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163pdvippuw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163wzbkktui.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163wmjxouku.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163vxikguwe.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163fifotztf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163kklgwnuq.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163bqbcxmqs.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ozauxgim.html

================================================================================
来源：http://www.aibaodan.cn/163imrozbcf.html

P. 常用工具函数
来源：http://www.xuanzx.com/163kehzgqka.html

================================================================================
来源：http://www.xuanzx.com/163jwywwlda.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163vnqpkwxx.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163quxpvliy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163mtorfcgn.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ivqlhtig.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wcllnisq.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163rofnqaob.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163snzjwnje.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163vjtokwlm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163stfstjnw.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163uzlgkvtg.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163bonnzhlb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163lqcftraf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163vumscxsq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163tiupqybb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163cmxvdkjz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163bgryndat.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163sqjlkddx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hjzghujv.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163lqjaikvq.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163zdiqkdte.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163xuqjqaed.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163htrjwfku.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163akgfrefg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163dzukuror.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163vlyiklde.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163vnaefqrk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163okgkdgxh.html

[P04] 求长度
来源：http://www.xuanzx.com/163vsylvduf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163hewvbadu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dzajdhum.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cjqwkvoo.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163bnkzpxjx.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163alwtvidq.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163kijdgabx.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ccoyvime.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163ilwmhzea.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163lixwuaup.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163npqnxgut.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163axopjaab.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163gwzyipav.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163moweahzh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163gyvojhmu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163gojwwgnj.html

Ruby: a == b
来源：http://www.aibaodan.cn/163rlsgnynb.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163dpeakahs.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163fxlatrpp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163mhqzxofu.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163axzpyyno.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163hvncvrsa.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163kwezkvmo.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163ltsostqa.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163wpiblnnx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163cmumedgz.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163sjmkirpz.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163jcgzfniz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163covskhdq.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163gcbbgqqr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163bbvuzazi.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163nuwvodhe.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ldojnatl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163drhwdtnr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163cgvhmhmf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163cremervm.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163dwbdoxdr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163tozhlucg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163zowfygza.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163etukmveu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163uqdgzutw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163epzexdzf.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163aynoipbg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163jmgchnwe.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ggniwomg.html

================================================================================
来源：http://www.aibaodan.cn/163rupsdcep.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163wzyhviqn.html

================================================================================
来源：http://www.xuanzx.com/163rjjqwpiy.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ejppqbvx.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ayqexrut.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qtcshuxu.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163fqtunqhp.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163vzuvqmce.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163scrvrezs.html

);
来源：http://www.sxryk.cn/163siqvbdtq.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163usmdnzro.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zzozejuu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163eixgeutu.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163hiukkjqs.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163scadyneg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163bdyykfih.html

);
来源：http://www.xuanzx.com/163uvclvbdq.html

[Q03] 增加列
来源：http://www.sxryk.cn/163wrfypbwi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163hkpvbxan.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163xsdcydit.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163qiwmmstm.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163ttwdqewh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163suhssxiw.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ehqdxxcc.html


<!-- 参考信息 -->