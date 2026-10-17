外链999!wailian999！

C#:   Directory.GetCurrentDirectory()
来源：http://www.sxryk.cn/163hfvsnaab.html

[M05] 设置退出码
来源：http://www.xuanzx.com/163kwcpkbqo.html

Py:   sys.exit(1)
来源：http://www.xuanzx.com/163dgryvreh.html

PHP:  exit(1);
来源：http://www.sxryk.cn/163iktalhny.html

JS:   process.exit(1)
来源：http://www.sxryk.cn/163bzfdcuvh.html

TS:   process.exit(1)
来源：http://www.xuanzx.com/163zjklheyy.html

Java: System.exit(1)
来源：http://www.xuanzx.com/163luobtmiw.html

Go:   os.Exit(1)
来源：http://www.sxryk.cn/163jtuvupvy.html

Ruby: exit 1
来源：http://www.sxryk.cn/163gtmvkcdr.html

C#:   Environment.Exit(1);  // 或 Main 返回 int
来源：http://www.sxryk.cn/163rfzimftb.html

[M06] 向标准错误输出
来源：http://www.xuanzx.com/163cyuvjqtj.html

Py:   print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163ogkiikoh.html

PHP:  fwrite(STDERR, "err\n");
来源：http://www.xuanzx.com/163jvvildxw.html

JS:   console.error("err")
来源：http://www.aibaodan.cn/163gpcqhaej.html

TS:   console.error("err")
来源：http://www.sxryk.cn/163qjaaqrpm.html

Java: System.err.println("err")
来源：http://www.aibaodan.cn/163sazagmdz.html

Go:   fmt.Fprintln(os.Stderr, "err")
来源：http://www.xuanzx.com/163cjwvujpf.html

Ruby: warn "err"
来源：http://www.xuanzx.com/163mgkchcwz.html

C#:   Console.Error.WriteLine("err")
来源：http://www.aibaodan.cn/163qbsfelpv.html

[M07] 判断是否为主入口
来源：http://www.sxryk.cn/163ogzddugp.html

Py:   if __name__ == "__main__":
来源：http://www.xuanzx.com/163asxxzuel.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163sbktdzso.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163wnyeamov.html

TS:   require.main === module
来源：http://www.aibaodan.cn/163ewltqfan.html

Java: public static void main(String[] args)
来源：http://www.xuanzx.com/163dbsfcxsx.html

Go:   func main()
来源：http://www.sxryk.cn/163vqdpmpsh.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.aibaodan.cn/163hqivmgjr.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163emsampax.html

[M08] 获取系统与运行时信息
来源：http://www.sxryk.cn/163rkblzpkr.html

Py:   platform.system();  platform.python_version()
来源：http://www.xuanzx.com/163ekljmvqc.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163vwegpgpu.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163hnjwhjlg.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163zqlxtntw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163jidchrup.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163jblfafkc.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.sxryk.cn/163hlajpjdd.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163hfvmidww.html

================================================================================
来源：http://www.xuanzx.com/163kmxinsfs.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163kfbwqzps.html

================================================================================
来源：http://www.aibaodan.cn/163fqammyyj.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163gpmornly.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163qeaomblb.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163hquvybcm.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163ptmlvrun.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vcrkjpha.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163bfyhnihu.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163rcvrjnvd.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163lyozpszu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163mgqzogjq.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163rzcoytcj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163taejahbs.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163woymrhfo.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163oiwjjfdz.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hwwjmkzq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163voagsyhk.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163grcguiow.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163onnbgzob.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163rtdixadz.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163fjxekmbe.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163bksptyxy.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163gqndbnnr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163pdcrscxw.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163tljpytpz.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163mnkgqnvt.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163pljqbdvg.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163jsqzxxcs.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163iyawbzhb.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163zaklhkmg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wlfzidny.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ahyomfrq.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qvwxziup.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163blxiepnq.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163hzpdeacj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163wouwfymb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163klkzzygu.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163aagvgqfr.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163nsgrolff.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163ntgscjjd.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163dodommxs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163ssiwqmfo.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ecckbkoh.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163xczurrzz.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163ndsafogp.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163tuejemnv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163kkbiyycc.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163slsnhaan.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163swirlact.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163qbmmodbv.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163nsfrahuc.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163sffbtlve.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163stameiin.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163iucaqizn.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163xqvoydpd.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163bendeafr.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163svcrftkv.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163lslcdjjm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163ucyiesnx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163ijekzvai.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163cotubgpv.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hyrnxccy.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163rknfqrlx.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163ftzrfzdc.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163wsnpqfnz.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163hgqiekhg.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163tvmyynge.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163jtbvzwgc.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163zjsttlfy.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163pprdgpaj.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163mtyihnhg.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163wszoqlfg.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163jajfrhyt.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163jpimjepm.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163yzposoho.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163bcymxtsl.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163otiuldxk.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163jtszgvbz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163cfwdzbey.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163zfzsekju.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163hbqhnzbj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163upmituvi.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163hfqjmifq.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163kobkzguh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163lprnadbq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163nlajilmd.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163woxdrksw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163szbdznhb.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163gyrkdjcl.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163tbwncnlr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163qttifewn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163byzaphmw.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163uvglsybk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163amtxtthr.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163gboyzxsp.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163osseqlht.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ewiqzbow.html

Java: // 手写递归
来源：http://www.sxryk.cn/163yydxdjev.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163dtlkabrx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ybdarmmw.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163jodatiye.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163niuipbhe.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163lsvuovme.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163xgdsdqvw.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163qimkffci.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163tkjcnqel.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jcmsdvpj.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163yeteqtqa.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163hmwxrxfz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163xyrzkigu.html

================================================================================
来源：http://www.sxryk.cn/163vkusktxa.html

O. 并发与异步
来源：http://www.xuanzx.com/163ttjsmmve.html

================================================================================
来源：http://www.xuanzx.com/163olfsaghs.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163atrmomjs.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163jpiiadur.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163pvhoqsbc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163yovpjfxx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163cftlcinz.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ygogekew.html

Go:   go f()
来源：http://www.sxryk.cn/163qmrjmztx.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163pdjjkmsr.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ulbcmwgg.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163oakvtswj.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163nnxdpbzx.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163brisrmhp.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163arnrxoqj.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ycsloxzn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163ilzpooet.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163caeehtgq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163hbprxxyz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163wjooqaym.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163bivqlmsz.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163wqjepnzc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163qanzdhfc.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163hoecbnhu.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163suckktuv.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163alngkint.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163yozvyyco.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163kxgkuavz.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ewvieopx.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163eqpnymgk.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ykowwjhg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ftrkljjn.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163lkdwudqd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163wxmksoko.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163wijqvndi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163fulbvdua.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163rfrhukeu.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163buivipgh.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163pbnrinrq.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163zrrpiycv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163sbsjhvkz.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163lafjubam.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163irxftwft.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163hiwhfyrs.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163gixvgrvq.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163xknnnoes.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163cybjkevk.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163pksyheum.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163lhscmvkx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163rjraakdy.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jpinswob.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pstuvfys.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163honzjfpl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163spatlkvk.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163hmmrweth.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163dwdavnpr.html

================================================================================
来源：http://www.sxryk.cn/163tkjlufsy.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163qzzrtfww.html

================================================================================
来源：http://www.xuanzx.com/163lzejgako.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163rwfjmivf.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163oicdfofw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163boxtumgl.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mjwxafnd.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jwszzory.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163omnyhmxu.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163fbelndlt.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163aptqbeqb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163wbtullis.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163xuaknhkc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163tuxqjmkn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ouqvyjyd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163xzvolbvz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163tgsysigu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163agdoufpq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163rzxlspyw.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163pxgkbgco.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163pqbnlegy.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163gkcmjlmj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163onjpopsq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163lkpaxpsz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163xnephpsy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163wjlgattm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163wbbavgee.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163dnscleys.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163lidjqags.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ljhjsvtm.html

[P04] 求长度
来源：http://www.aibaodan.cn/163rxstfztz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163itndkfha.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ogrhkgep.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xddddsqw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163fnvknrfa.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163hfyldwmq.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163iggvvmta.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163hvigvgop.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163vlqlkwei.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163aaxmduyq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ydobbxrv.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163tbxjckrf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163fgpinsbn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ndkdapqk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163grpqmsld.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163onfpqidy.html

Ruby: a == b
来源：http://www.sxryk.cn/163vqylpbih.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163cocrwiin.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163kxmrvgwd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163dnblttjr.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163aqveqtsf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ccdakfva.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163uvslqwva.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163xjmzpntp.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163nypkwgpr.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ydoyfmvi.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163xnpdvqkc.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163zjhcwwzs.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ttinnlhf.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163dgsmicsy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163svjzhwdh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163dqhwzdzv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xiuliwth.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163zjgrhmgp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163otvwycsv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163wujvgcmz.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163pyrdlpnu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163lkuvnnbl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163quvcmevl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163tsqwobvl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163fnplidbk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163xzcizvwj.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163kvkvjija.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163rfysczes.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163naxhogfz.html

================================================================================
来源：http://www.sxryk.cn/163gcqjspgd.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163aiqzqyzl.html

================================================================================
来源：http://www.sxryk.cn/163ghqmpjjv.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163rxuzfmlk.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163golbjjax.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163luluusig.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163munaaeqm.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163kiqlusgf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163argshper.html

);
来源：http://www.aibaodan.cn/163niensrqq.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163xdxnwloc.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163spypwypq.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163bcbveufb.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163kpbwstzl.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163jtsatsoc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163jioyconc.html

);
来源：http://www.sxryk.cn/163swirzxut.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163xfzfcvrp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163drkslohi.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163qsgqihmz.html


<!-- 参考信息 -->