外链999!wailian999！

JS:   process.exit(1)
来源：http://www.sxryk.cn/163zesmwxep.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163tiyrdsfn.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163uoxjmjqd.html

Go:   os.Exit(1)
来源：http://www.xuanzx.com/163puliqnff.html

Ruby: exit 1
来源：http://www.xuanzx.com/163siqdyqwx.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163ivugjouh.html

[M06] 向标准错误输出
来源：http://www.sxryk.cn/163xpbismal.html

Py:   print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163lzsefyrc.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163idapxupt.html

JS:   console.error("err")
来源：http://www.sxryk.cn/163luigledu.html

TS:   console.error("err")
来源：http://www.aibaodan.cn/163kuopwyzb.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163tolowoki.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163zaplnuop.html

Ruby: warn "err"
来源：http://www.aibaodan.cn/163bhjkvfsl.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163chktylef.html

[M07] 判断是否为主入口
来源：http://www.xuanzx.com/163qcrkzqft.html

Py:   if __name__ == "__main__":
来源：http://www.sxryk.cn/163temmlqcv.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163jpncwvxh.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163nybrlvjp.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163bodqntet.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163dwnkxlnc.html

Go:   func main()
来源：http://www.sxryk.cn/163yzonzkpy.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163yecfyfrw.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dbqdxzkt.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163bpltsjdd.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163pgdnqkzv.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163norabeni.html

JS:   process.platform;  process.version
来源：http://www.xuanzx.com/163ghthwztg.html

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163gwmqbijr.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163wrvfmxzx.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.sxryk.cn/163vkdpkhqd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163kryfrlqa.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163aiwxfqjl.html

================================================================================
来源：http://www.xuanzx.com/163thukfnop.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163vcblfiay.html

================================================================================
来源：http://www.sxryk.cn/163hwteiryl.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163lmsavvts.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163xzqwbzaf.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163jhfthoas.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163yfypdmxf.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163ligibvdm.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ahnqyeea.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163yjugkjkw.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163wdbnmrua.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163gchwqolc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163ttuqmnaj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163iplbhjhq.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163jjpkxvfz.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163qmugblyr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163hnoyuovv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163znrgonyc.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163igyzfiyb.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xyigmbxo.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ryancije.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163otyurysa.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163rllainvs.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163rnnfdjsa.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163qtckboce.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163rmzkozrf.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163adxrmscx.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163gugvjyst.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163xyoexhoi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163kawcalvt.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163agrwadti.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163lhmbqkfs.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ctcpyotv.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163rprzzmcp.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163xuesychu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163hrfakyid.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163sikytcjx.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163xgovmcij.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163xeowynbl.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163emfriwfd.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163ogqviyqj.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163fznhugyb.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163kgfcdbwc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163epyzwegd.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163xfyuavwh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163uyvmuvyb.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163efsxcrxq.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163qaojgvoe.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163giaxierr.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163nhdbeoew.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163tlyjndtx.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tvnlylba.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163xkpaeyog.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163zftlapyd.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ssprjrjg.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163fxbxzgno.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163fnhbtqwb.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163zcyaenjq.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163jyyzmutg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163qevpwgbi.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163jnmdnyxq.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163ipsmsvjd.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ioedvlpj.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163depehtrh.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163mhyjspgo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163atjcmupa.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163hhsirkfw.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163kajvvzsy.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163vazhpatu.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163tehvuwwt.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163zugyrviy.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163zjzoybyb.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ecivukgu.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163iqwgjriz.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qnfnycby.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163xyvcumpl.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163clnejzjg.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163eekbfekz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163rlxieeca.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163pgsfvebf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163kderrjtu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163zjunjibp.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163npyiyxpo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163cgijshci.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163lghtfobs.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163fnonuueh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163fkxsmpnc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163zccdrwel.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163botivlla.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163sobnsdrt.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163vunisdqc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163vysoemma.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ltpkbwaz.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163avmscauc.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163gaopdzvq.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163eebeixod.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163zdblezuk.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163chojxnvl.html

Java: // 手写递归
来源：http://www.xuanzx.com/163wbqtagqw.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163seapbgib.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163dpnelzwm.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163yuyjdarz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163zxwsnpzs.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ljmxadhv.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163nzreoigy.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nlcbremu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dfawvgck.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jmbewain.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163qcwvbgko.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163lojiugeq.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fprjxwaa.html

================================================================================
来源：http://www.sxryk.cn/163paadicaa.html

O. 并发与异步
来源：http://www.xuanzx.com/163gxbggoju.html

================================================================================
来源：http://www.xuanzx.com/163hfpeodnz.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163gpihcile.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163krqpeahg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163mbnzyjel.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163fldgesdy.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163pwvdkqky.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163tykdfnmb.html

Go:   go f()
来源：http://www.aibaodan.cn/163lakpqlhh.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163iqdgugtb.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163zjkydjyw.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163gfehvkhs.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163prxarcjr.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ocihiybg.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163byvolcgj.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163yoajsdrw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163qxsjrvjj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163vupjelbo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163utovoeut.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163bxmyhvyt.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163yiqxamzl.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163jajuevrc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163rtkscogc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163zuxotyns.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163wdjczjtu.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163tbyjdzsi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163rnzterkn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163gnrrnzlm.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163rfbwqreb.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163xzqdsetv.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163bwapodes.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163zkzxzccu.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163omkydpeb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163nufyclee.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163djdcsgob.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163npofzrmw.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163aemnsleg.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163kwnugvca.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163yjfpkpde.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163rgnxbtus.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163kknyiwxy.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163gblafzir.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163cmkbyszd.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163kjyrwysl.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163pyudohgu.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163namfytmo.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ibaziepj.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163evgsknea.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163vdvfqagq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163eubbxlnz.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163sbmcdabj.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163pynybtbp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163cpfutedt.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163qmivudkn.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163gqteirpm.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163acdqkzir.html

================================================================================
来源：http://www.sxryk.cn/163hfsbtlpa.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163zgtnrcoc.html

================================================================================
来源：http://www.aibaodan.cn/163uiofnngx.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163mkddeyxd.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163pttrcsre.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163zftlcwtn.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gcxiwakl.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163apeewmdh.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163rudhkmii.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163veugvdxr.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163rgymbqmv.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163bvjzxbfx.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163kxdqnckn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163giydciad.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163gdrfxvxy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163uamxugyg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ezbaetgn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163whvwicbx.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163vrgnupbg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163tcovqhdo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163pubouoer.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163amhgxctz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163vuozejfd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163nqhootro.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163cyfpwtof.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ukluuwgl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ngbfkyzu.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163rqunoyot.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163nxtppuze.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163iadxytem.html

[P04] 求长度
来源：http://www.sxryk.cn/163ugbmnkey.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163vkjreoda.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qdsqilpj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163qxxggthv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163fkxjkszn.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163raeutuxx.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163qfttwdsr.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163pujzshct.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163hesfusnf.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163syedrieg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163iabbeenh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163dtkfamue.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163yubgjxnj.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163pqcigkbi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163tyginfic.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163bndyrdae.html

Ruby: a == b
来源：http://www.aibaodan.cn/163gcprjzbr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163jcpywgtl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163kwuyrbip.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163xistixbe.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163gbeuprzi.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163ymepgfvq.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163rvimylco.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ijfxfuxo.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ahmnyyae.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163wdbhonjb.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163lbngvmhr.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163xcoducqs.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163wwukvkmc.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163rveznypj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ntpbbhpc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ponxywvn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163mrvcsiwr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163rwbvfpdg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163fkfkheke.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163bjwgnfqb.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163oddxkcxt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163jneoucmd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163bylcsrej.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163oqgndqau.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163zzqrvxtq.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163kyyfbzhi.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163bnofopnt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163amjjofvq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163awjzxwyl.html

================================================================================
来源：http://www.xuanzx.com/163rbfqsgtf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163xcjdvana.html

================================================================================
来源：http://www.sxryk.cn/163vrnecugd.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163gtzowmrb.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163okehqflm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163osgankfx.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163fpihiles.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163krzsamxu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163xkqlukhu.html

);
来源：http://www.xuanzx.com/163gmfdopkp.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163nqcnafvr.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163vmzzzrpm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zeqyvnfk.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163porjqkhy.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lgxqphrz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163werccwbg.html

);
来源：http://www.sxryk.cn/163cofifsyc.html

[Q03] 增加列
来源：http://www.sxryk.cn/163eyxgkuky.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163hkqmzqbn.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163qurkvebn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163iilyfrqn.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163fkkxojop.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163yhrhuotu.html

[Q06] 删除列
来源：http://www.sxryk.cn/163mvfdkuzm.html


<!-- 参考信息 -->