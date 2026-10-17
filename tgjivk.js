外链999!wailian999！

Py:   if __name__ == "__main__":
来源：http://www.aibaodan.cn/163koittvuo.html

PHP:  // 无直接写法：用 debug_backtrace 或定义常量判断
来源：http://www.aibaodan.cn/163jxoqconr.html

JS:   require.main === module
来源：http://www.aibaodan.cn/163hmxzcnws.html

TS:   require.main === module
来源：http://www.xuanzx.com/163asgbftry.html

Java: public static void main(String[] args)
来源：http://www.aibaodan.cn/163inpbvuiy.html

Go:   func main()
来源：http://www.aibaodan.cn/163oudgoidi.html

Ruby: if __FILE__ == $PROGRAM_NAME
来源：http://www.xuanzx.com/163zthlrfro.html

C#:   static void Main(string[] args)
来源：http://www.sxryk.cn/163dkmjynig.html

[M08] 获取系统与运行时信息
来源：http://www.xuanzx.com/163ehetkcxf.html

Py:   platform.system();  platform.python_version()
来源：http://www.sxryk.cn/163nrovnxhr.html

PHP:  PHP_OS;  phpversion();
来源：http://www.xuanzx.com/163ywfvoyan.html

JS:   process.platform;  process.version
来源：http://www.sxryk.cn/163sqiahtpb.html

TS:   process.platform;  process.version
来源：http://www.aibaodan.cn/163wtxuixyl.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.aibaodan.cn/163afgpikbp.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.xuanzx.com/163uvlamhpv.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.aibaodan.cn/163csngomja.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163gkoaawwq.html

================================================================================
来源：http://www.aibaodan.cn/163scofkjlx.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163wnlguhod.html

================================================================================
来源：http://www.xuanzx.com/163fnspenqn.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163xfuwfurq.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163xzfpsnya.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163znxyrkvy.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pouayakm.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163tlmlofdc.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163hfmpkqey.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163aadmvano.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163sdrcbclm.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163qlcoctta.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163chspgiyt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mnuvbzgu.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163uqwsgamc.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wcvrsdcy.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fwbyvnva.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163cfdbgaev.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163hxwkikte.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qwbjbyxi.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163kgcaceak.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163iovuzlyi.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163ypcqqyeu.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163mvsriiuq.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ynpicaec.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163rubjrlvk.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163prtiydsv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163yucjdvts.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163yjqmtnzq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163zixibnen.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163qaqptxla.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163xjqcjhax.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163setysdqy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163iskkonim.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163snnjiyxi.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163yoauzifq.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163rhaktzic.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163bffvwpfp.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163kpkyzzum.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163mkqbukcr.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163womutoij.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163xbceuhtc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163vsclwmbx.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163fckxpzca.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163nnijmuxg.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163knmuochc.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163unsuultr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163otyynwqk.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163tblwmbnn.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163lolnaoak.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163sepynlcs.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vkqhoecm.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163pdlszmyp.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163wilazcvl.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163prctpylx.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163uspjlnne.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wsxbqnbu.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163jtocdsiu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163rqfpgutp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163jiingtgq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163unvrcyyx.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163krsjbcma.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163cfuplubw.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163abqdvtgb.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ihmzkywp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ksthohvx.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ecwlsouo.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163qmpzjzwv.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163bfknpizr.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fdynpdgj.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163mpnhopjc.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163rxczgiav.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163mpczqpmx.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163khjylgml.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163pumtklfl.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163idrijnjp.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163qajldtie.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163mspmiwjz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163zxhdiflt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163agtecdbb.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163hvlumzpb.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163bczrheqr.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163kbjlkogm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163fiqofdpf.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163fepvvhnb.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163htehckzd.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ngfbsxvi.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163boijbzma.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163bcpjqijs.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163vemfmtzx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163jjrjiovo.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163zqoyzzzp.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ukjuixtr.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163trrnilrs.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163jdelfsth.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163xfbhdife.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163emeknctl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163rysnlmox.html

Java: // 手写递归
来源：http://www.sxryk.cn/163txqoknul.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163edlijoei.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163rpkuqplu.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163axrdvtgq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163gebszutw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163iirltzrb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163exmprmrr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ihhbdorg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163drizfape.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163huynplbs.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163nlvijmbe.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163rwmoezaz.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vumobjzc.html

================================================================================
来源：http://www.sxryk.cn/163bsiziqpp.html

O. 并发与异步
来源：http://www.aibaodan.cn/163obyqmrjw.html

================================================================================
来源：http://www.aibaodan.cn/163yvyajpqw.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163awrzfdew.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163gzrjnfbf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163nyjjxdqz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163agwchmev.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163llebpquf.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163qoxgflzf.html

Go:   go f()
来源：http://www.aibaodan.cn/163izartdpn.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163pkuvznxy.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163aafgghys.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163xqpjcpfq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163xizpmciq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ivdnamxm.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ugljewao.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xwtqcyha.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163evbwivnc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ycklmbxv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163irdwfdax.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163iyhwycjz.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163knlgyvnw.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ueagldqu.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163ebfosblu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163imuznqmp.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ubzqegew.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163dnyawuxg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163eltmkkpw.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163tcdgpawv.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163hbgbokuf.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163kitkyaez.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163wxomrnew.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163rbitwohk.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163dccfjrkd.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163pwtwaujn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163xbetpphl.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163ahwgggof.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163opgdhyud.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163skrmqxrw.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163xgjomrow.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163dgkstivf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163htoelafl.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163agidelun.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qoiqeuet.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163hceycrls.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163bnaqpxqq.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163rcppydvn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163xbeovjas.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163gqjozcgn.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163mhnvxjuf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163qtlfrxny.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163kcaftgqc.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163naltkcaw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163aakciapv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163djoiknpb.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163cymohmkn.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ziacgofy.html

================================================================================
来源：http://www.sxryk.cn/163orxzsewv.html

P. 常用工具函数
来源：http://www.xuanzx.com/163bcawgyur.html

================================================================================
来源：http://www.aibaodan.cn/163ezehfksz.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163dckochjk.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ricrvqwd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163yoprvaub.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ekpkaxej.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163hjmrdmyf.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163mgbfwgly.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163amlhajxt.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163vfqypzak.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163jkhvwjxl.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163hrmgfafv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163rfpuqxwq.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163ypycmjrp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163xcwyxxps.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163kfwdgaif.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163tufazxay.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163mveodtik.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163dphdsyba.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163nicolidr.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163eyprcgwa.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163tcnxyqgr.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163cqackyen.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163cukqrrhh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163awbfmipf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163vdqdydqf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163spwhqclw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163awpasmyz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163uetdabyj.html

[P04] 求长度
来源：http://www.aibaodan.cn/163pdqkrfbp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163obljgduu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163lwsmprvb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hqimkocc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163jtqqphen.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ohhtamji.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163xkbwkqtd.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163bwehqygj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163eqgcivgi.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163eovgaaub.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163vsgocgaw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163edackzrr.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163wdcdvlix.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xtrbsvgw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163crovnmaf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163pfvwthym.html

Ruby: a == b
来源：http://www.aibaodan.cn/163vyuupmem.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163vpveqcfs.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163wyodgsvk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163zttzrekm.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163kehugluh.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ezliwuhz.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163vnezfndw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163rpsrhdbs.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ekwacmux.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163qdildbez.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ssxnqlzq.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163bpkxrgyi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ffwpxzyw.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163tytwxukj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163kojgjfyl.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rxfepwzc.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163vgvnednp.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ycslfqak.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163sgdefaoj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163fzvzjoxx.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163otesggjr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163qfzhmyfd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163yrgaxkro.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163udqfewai.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163eoifcasw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163xmtuziqu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163tkrfzwid.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163pilxumey.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163ynzkgwtl.html

================================================================================
来源：http://www.xuanzx.com/163jqxefxyg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163uwagtiil.html

================================================================================
来源：http://www.sxryk.cn/163ulaoukhf.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163mqfrkmvg.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163mfsosfuz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163nghwvdtv.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163sspwagze.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163egokjsrt.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163kofrxndy.html

);
来源：http://www.sxryk.cn/163vycbyhpo.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ehfqrbtv.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163flghkpng.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ltdmqbik.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163qhdkeplg.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163cbmupgay.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163jsyprhgv.html

);
来源：http://www.xuanzx.com/163gunzzckr.html

[Q03] 增加列
来源：http://www.xuanzx.com/163muiiakpp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163eqrnkwzx.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163rcqpwcan.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163spfnvpfx.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163kqvqprnc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ggspozib.html

[Q06] 删除列
来源：http://www.sxryk.cn/163rzuaetqf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163nkdrwyvg.html

[Q07] 删除表
来源：http://www.sxryk.cn/163kjkbmjlp.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ezjtkgej.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163uiacojzf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163bynmnghx.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163jpmzrdfm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163fexgmvly.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163gwpgvtwt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163tfxhglfz.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ieoudmfl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ekhjrdwa.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163pyqotcto.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163idnnfazb.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163hjetqbjl.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163kststilz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163xbqoubyj.html


<!-- 参考信息 -->