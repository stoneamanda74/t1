外链999!wailian999！

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163vggxbxgk.html

================================================================================
来源：http://www.xuanzx.com/163ymnasggt.html

N. 数据结构与算法
来源：http://www.sxryk.cn/163vbnlmykf.html

================================================================================
来源：http://www.sxryk.cn/163eknlscsy.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163qdesrjor.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.xuanzx.com/163xtdqpptt.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163xophugev.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163mfwcbvdn.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pxkgoveh.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163fajhylib.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163hqldrafu.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163iktxzrnu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163ajfcbsrb.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163ttxcuzaj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ywakonkj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163rlufpjer.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163kfafoxll.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hpsokjxc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163aopsofyc.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163pdttgpvo.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163enqxoqto.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163fbmoqgkx.html

[N03] 快速排序（分治示例）
来源：http://www.aibaodan.cn/163smrnazpz.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163djhsyipa.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163onakbysy.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163dgvntwix.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163idrtxczi.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163axqvyqes.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163lqplgqav.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163eohhpndq.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163kfabubcj.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163mrjpfasr.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163zsoqobcv.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163hryvuhvf.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163pypvegtg.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163ilttfzet.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163grsipnss.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163slqlexxo.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163cjphsbfh.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163tzlvvcjx.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163cfykmmeu.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163arwbckqc.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163iclzsdpr.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mqqvsprt.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163hmhevevb.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163plrfcvcp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163cyhvunys.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163eetcctxz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163wpyobmzh.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163ilgpodxz.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163tbihminx.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163uqtafsdc.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wcazopgh.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cjshtmll.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163hufjkdtu.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163fsnpqpha.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163xriiaery.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dpnylwjz.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163pbgujlza.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163vtawxiuw.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163nkyahksq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163cxbzlaao.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163iwyafjdg.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163xznxzbfx.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163rxrvjtol.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163fetirwpa.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163tuchtbke.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163czucwaxk.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163tacjsfmg.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163jwsmippm.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xnuiwixg.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163dqlfrxsz.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163eevtqkyb.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163iimajmre.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163kqcfvnmn.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163uajbefym.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163crwbdpdo.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163mdyjxfnn.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163iubxkiim.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163atmdsqph.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ulwibnkz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163pljtkpun.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163xvefkojv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163nefqnyyc.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ifffcvsh.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163kzrhdkxn.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163vcrvdwct.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163qjxqnijy.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163wezbcetd.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163wgpjcjet.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163bjpudqfy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163mcusxrdl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163gehgiqbl.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163wachbsoh.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163hwjbekuv.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vodjjtxh.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163keyzxhkh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163gegyfilq.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163opasqyho.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163xfjdcttx.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163tunxtwsh.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163btszprue.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zscfqkfb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163skpqurzi.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163pdgrjvpk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163welebukr.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ollzgxzf.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xtrzyobt.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163kyjhpnmi.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163hngznovg.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163imywgpjl.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163qcswkypp.html

================================================================================
来源：http://www.xuanzx.com/163dbzgjuir.html

O. 并发与异步
来源：http://www.sxryk.cn/163cxxlykom.html

================================================================================
来源：http://www.aibaodan.cn/163lwjdnksu.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163syrprrop.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ibmninuc.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163zzsebujp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163mwvonlkc.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163lpieazud.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163nhoyrxgc.html

Go:   go f()
来源：http://www.xuanzx.com/163qidkjfhb.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ilzduimc.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163havqxmxb.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163cyqmeqfe.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163cxhqzgip.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163qdsxnnrm.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xblgvcxf.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163osrjuzmx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163akhlqrxc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163hkhonmlb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163ezluogbq.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163voxemdtp.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163csdbuewm.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163lybubceh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163scfchktx.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163mwznafoc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fukfjdyv.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ifvjrhny.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163jyrfmsnl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163lwiciakx.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163xxftqpwt.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ifxoodqs.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163qncygekk.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163uxmrrsia.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ppqgjrcx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163raymogpq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163egwcktnu.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163pggzfxwv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ovqtfqem.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163atcnyfnq.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ukyifsdf.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rgyzjcyi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mtwfdaso.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yysnpsrk.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163tlqcawzy.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163lnextvds.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163rfinxmgq.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jfwnzejr.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ldcxgtzj.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163dpcrbhbi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163tffweydx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ktjpzyuu.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163wopfdbsl.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163wtehalva.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163tqxsihql.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163makjivze.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163nvabjrhf.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163gkjtjfsi.html

================================================================================
来源：http://www.xuanzx.com/163cyqfdwvj.html

P. 常用工具函数
来源：http://www.sxryk.cn/163dxdrfdcz.html

================================================================================
来源：http://www.xuanzx.com/163sewgcwsa.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163sbmovuja.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ddswoetk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163ezlmeyun.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163lmtrvqte.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vwlnudnk.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163zjnkrfpq.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163jritavye.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163saozhrhk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163fzojisir.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163gjcthtsz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163pyowubpu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163zfnabale.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163wythlwub.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163itrqgyeo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163vzkxeiqt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163swkrbrwj.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163yookqquy.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163fgudunvo.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163bggpnpkr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ulvcejjv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163danrakys.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ygsphnzp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163tsexuubg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163tozckzwh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ltabxkqb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ntseemzx.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163jrjzgunb.html

[P04] 求长度
来源：http://www.xuanzx.com/163pvteznwm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163nerlsplu.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163elopkvbr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gzumvisw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163kvqaxqom.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163dqhbkbkg.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163gosnaymn.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163fqxqpcom.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163gsbfgwmn.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163rwvoqrwc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ozdshvou.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163cumsezak.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163wgdegdhu.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163zhgkfgte.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163hnwjycnn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163thonaylh.html

Ruby: a == b
来源：http://www.aibaodan.cn/163euaelqjx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163qjocjvoo.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163jhmzvhsr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163fhqbazyd.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ppultwbx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163pvcmmdeo.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163xuwoixbd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ekusggmt.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163qifywwvp.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163wlsmkeoc.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163cnqqenna.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163hypygrer.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163mehcgmqt.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jrrclzyj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163uoeswjja.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163haqvgweq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ppwzgjyl.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163tzmtemsw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ozuayuye.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163hhfakytr.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163zyletzri.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163vurzzwvk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163cxzcbfsw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163smujlder.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ibypfpjk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163onbheuua.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163sxaxexkc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163hhicnqbk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163opiqecnz.html

================================================================================
来源：http://www.sxryk.cn/163hyioykhj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163huhlzidu.html

================================================================================
来源：http://www.aibaodan.cn/163xyvvqpur.html

[Q01] 创建表
来源：http://www.xuanzx.com/163uzydieew.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163gujhseej.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163szthzuan.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163cllsmwrr.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163lntqkhri.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163qtkajsyk.html

);
来源：http://www.xuanzx.com/163hzsvhwne.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163fqmuvijn.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163wniufasd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ftxzghtd.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163dbmmszks.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163muofybgg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163quphlnmz.html

);
来源：http://www.xuanzx.com/163sdhmqoul.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163hryndqhc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ukobuwai.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ujbelleb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163zoyzybku.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163qejobcla.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163kemioglf.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163yecxwgnp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ntwfqojh.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ywhqfmbz.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163loufptyk.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163krqtayeq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163veztkmor.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163dzzjbppe.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163tyrlqeea.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163sujilrns.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ndrhhxap.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163niqwdzuz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163pmnpydod.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163wllgmueq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163dizglghc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wassqxlz.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163uyvhmwby.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163tjtuiquq.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163zsunfeer.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163apoyilqt.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163wfhaaevz.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163waovqlyf.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163iffbdjev.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163fclvoxdn.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163plvbfijz.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163cazlfszv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ndliqjyj.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163ghczylhb.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163oamzylrd.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163jhzqdjrt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163wnkmrtbz.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163cxuqoczs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ywvqbwck.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163hbgijmis.html


<!-- 参考信息 -->