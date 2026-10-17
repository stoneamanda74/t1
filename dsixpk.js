外链999!wailian999！

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163amelxbqk.html

[M05] 设置退出码
来源：http://www.sxryk.cn/163iifoxzpv.html

Py:   sys.exit(1)
来源：http://www.sxryk.cn/163nrdrbfvk.html

PHP:  exit(1);
来源：http://www.xuanzx.com/163hzdpahuk.html

JS:   process.exit(1)
来源：http://www.aibaodan.cn/163qpqbykwe.html

TS:   process.exit(1)
来源：http://www.sxryk.cn/163gxuzgabu.html

Java: System.exit(1)
来源：http://www.aibaodan.cn/163piuyiqph.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163iatwdihb.html

Ruby: exit 1
来源：http://www.xuanzx.com/163gvcstadc.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.aibaodan.cn/163jfdwakjt.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163jputzrrh.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163kdbdzdsb.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.sxryk.cn/163zwteteln.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163ctrvbkpb.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163uyufktmm.html

Java: System.err.println("err")
来源：http://www.sxryk.cn/163kkvekdcu.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.sxryk.cn/163quwoizbd.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163lkmlsdox.html

C#:   Console.Error.WriteLine("err")
来源：http://www.sxryk.cn/163fzlaczxv.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163fpjcgtix.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163rsgaxsgp.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163dglxxzkl.html

JS:   require.main === module
来源：http://www.xuanzx.com/163msuzimdi.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163gwaayhsk.html

Java: public static void main(String[] args)
来源：http://www.sxryk.cn/163zdcvzikw.html

Go:   func main()
来源：http://www.sxryk.cn/163aqtxsnsj.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.sxryk.cn/163wmbxihdh.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163zmpledzj.html

[M08] 获取系统与运行时信息
来源：http://www.aibaodan.cn/163fjiqmhez.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163wkudtksx.html

PHP:  PHP_OS;  phpversion();
来源：http://www.sxryk.cn/163rqhrlxkn.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163agxifmlr.html

TS:   process.platform;  process.version
来源：http://www.sxryk.cn/163amscpjue.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163utqdpmdf.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163toxybfip.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163nwulycwk.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163ejimqzrm.html

================================================================================
来源：http://www.sxryk.cn/163vcqruaix.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163fikzxnyh.html

================================================================================
来源：http://www.sxryk.cn/163fwyhskkj.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163yichunaw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163mmpmghel.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163dfwbtxuu.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163mvbnamht.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163rnapauel.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163ujatcrvc.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163numheqoh.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163ddubxhwx.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163kqetdhsl.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ttsbkksc.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163eahltgqm.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163mmamzwgj.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163gbhenwvb.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163pexxtnch.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163whkgzaoa.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163boinitnw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163exvqiink.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163ndpllgmr.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163whtvmyji.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163pifnbfdi.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163okebfwxe.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kwhwhpmi.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163arccqjdv.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163jdzlnczi.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163lawrpvnt.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163sglmvkpb.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163eiaialaf.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163eytggzza.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163uewzmmqt.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163dwtifvxx.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163wktmdmho.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163usvzsriu.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163ykmpyvak.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163xxdchesq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163vqpgbdkq.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163ygouprje.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163snjdzgvb.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163bqdbotgr.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163zoekntay.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ytjlovbn.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163qtdxbcpc.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163ejalsusu.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163fssbqete.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163etvkqdub.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163wujxsxmn.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163itnfonrj.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163ghkoiybj.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163qnasbdhi.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163olxnkckw.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vnhsyfws.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163vqeycntd.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163jmbwjzbh.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163wqvtanue.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163nzjclrsi.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163goaeygmx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163otwolcuj.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163zhwrtvzv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163achwupyy.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163jhhkztik.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163oausdlwj.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163xfesdeyq.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163kyjbrqtm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163kroycsdk.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163hnhtslkt.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163jhgnhnxr.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163srmqpxkc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163hrevkghd.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ygplaark.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ecsoxxtq.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163mpvpagyl.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163exmdfiym.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uxotgjhj.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163xgbbrrcf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163sjjkbmwv.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163xiyafcqo.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163wontylvf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ajbuemyv.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163kpoaqdqy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163tqrpxnam.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ytukmyqe.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163rdahfkuh.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163wgvrblbm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163owndkfoi.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163jtmziych.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163vhgwyhdv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163omxvhoye.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163wneyukza.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163mrkdnamf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163mdbdsbgi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163qcbtfsgm.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163nxlpceec.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163fjhrkiqx.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163zlvasrnn.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163hghqbunj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dezmcdmc.html

Java: // 手写递归
来源：http://www.xuanzx.com/163bnffvxdn.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163josdvqsn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163rqjdggfc.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163vzszhxyk.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163psqcjoas.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163gwdtkptm.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163hvliqwbf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ddrfcroj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163trclukek.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163mnotyxhl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163xebzpqok.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163doaojnzg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163inttmzgf.html

================================================================================
来源：http://www.xuanzx.com/163luqwzibi.html

O. 并发与异步
来源：http://www.sxryk.cn/163jworerqc.html

================================================================================
来源：http://www.xuanzx.com/163wpbfytxk.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163zzbawmfg.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163insbbuat.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163xkfmnpzh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163mtxwfcfj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163cwopxtca.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163sjhkivpc.html

Go:   go f()
来源：http://www.sxryk.cn/163hkuekqfg.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163mgbwkhvk.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163jpmxkdwn.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163naiqinbd.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163sdfhetwh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ecgyivgk.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ggfwzckb.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mwkectyz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ctstjhho.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163hvqkzent.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163vozqjaby.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163ndcnjazv.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163gaxgzkac.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163xtshghvw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163kmymnrcm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163oksovkbp.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163weqxhusl.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163cepkrsow.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163drwumaxm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163jljnbusl.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ocxpfuoh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163blxfrnxg.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163xisbiosx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163qgerjctt.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163kuzugefk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163jlxxwpjn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163pluvcrtm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163qcqibpph.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163xvcunmnn.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ytgysveb.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163ypzegkjj.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163yfqdiftu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ftzmroyc.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163rcbeukst.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zwfybjeo.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163mjdqobei.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163qxvascnt.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ffqzqequ.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163htaagkkd.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163xelnpzbx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163taoyovye.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163omawcbvt.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163oxmstorb.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pybormvi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163nyavtzsk.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ponomlzm.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163uwlwcqyl.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163jyecfwcl.html

================================================================================
来源：http://www.aibaodan.cn/163ugpaosmw.html

P. 常用工具函数
来源：http://www.sxryk.cn/163qodpokem.html

================================================================================
来源：http://www.xuanzx.com/163gsfgcgws.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163gfcooxbu.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163imrnplaf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163xtudmlkk.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163kggencok.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xbyqlgor.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163gkedzuva.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163xarxjuwk.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163qeqztstk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163euqaphqk.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163jrosxpzc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163xtccuhck.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163vvugbwfn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163uzvkspwb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163bljouqzc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163omrknist.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163glczdjfd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163bybjdgpv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163ccrczhpc.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163dokrfxet.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163whgwqcbf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163qoypftep.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163zmsgidgb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jdejqgnf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163dajbgpqt.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163kxfblfpn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163spgvpoxp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ukhrcqjz.html

[P04] 求长度
来源：http://www.xuanzx.com/163mauqtqmx.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163zhrapxps.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163offnnaqm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163nkinwtbp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163trxgpont.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163uvaqkqrz.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163usunsoue.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163jzlxoefv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163wwwsmnfr.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163pnoxjtdx.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163qfjmoztd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163cmrdgiuo.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163yuzdlgzq.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qejeavst.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163clzdcixd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163qteklzck.html

Ruby: a == b
来源：http://www.xuanzx.com/163dlskexyp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163idougren.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ekumwroh.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163gbyvnujo.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ftlvaqtt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163scdfcvfl.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163rksukccr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163guxsfzoz.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163jnvfdytp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163hafgkvqq.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163fipmdgoz.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163kgdkmqpi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ymxmfryg.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163etwrjbiu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163bbvqzgke.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163sxvifgkv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163pfeyfirv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163hfxbrprm.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163rgzgbpfi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163kfkwkvkj.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163kabsfvog.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163xiuthxuv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163eqatvril.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ubesdptl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163keyeetks.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163xxrskwhj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163lcrqfazg.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163xaqgwnoq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ludqfrdn.html

================================================================================
来源：http://www.xuanzx.com/163cvvbizvw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163gafywtjm.html

================================================================================
来源：http://www.xuanzx.com/163qehkfvus.html

[Q01] 创建表
来源：http://www.sxryk.cn/163wjncmypc.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ixrgixky.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dxkpzgho.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163qgwlwgln.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163cyfzjpdk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163rogsvxwl.html

);
来源：http://www.aibaodan.cn/163wwhnqbcw.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163krxrczvs.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163wvympuhk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163njasxhas.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ltogwfla.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163hurwkklo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ndwzezwe.html

);
来源：http://www.aibaodan.cn/163yhockgeu.html

[Q03] 增加列
来源：http://www.sxryk.cn/163outhgwcr.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163mepfsqyg.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163pisipcop.html


<!-- 参考信息 -->