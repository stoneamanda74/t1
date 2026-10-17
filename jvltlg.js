外链999!wailian999！

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163blcilvzi.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163roipzxcr.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163nvsotrhm.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163grqvmfuu.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163cscoaygi.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163knfgngif.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163yaqlnbjh.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163smivuddr.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163jzpfpxli.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mxjvztrq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163cmychycr.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163eylkgjgq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fxqhqlpb.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163dogpgwvq.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163ljyalguk.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163puwjyvkw.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163zffovkaw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cmhmxgee.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163fvqnhhoc.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.xuanzx.com/163fuhcymwv.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163yqtwusgf.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163zkpgtivm.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163qmufojit.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163tsjtmyhh.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163fluovoiu.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163gbsixyyw.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163htzqqaks.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163jhtmhvkf.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163kvzlbwab.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163qrfdkdwj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163pqjyoczr.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163xoyvrnab.html

[N05] 最大公约数
来源：http://www.xuanzx.com/163qclsnpqy.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163zggobumu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163xrifnjys.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163clffybdw.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rokqcgqq.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163nlumpoyh.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163isaccjvi.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163ubdrckzy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163qhrdnwqm.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163aqunhekv.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163bvcwqhdq.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163pkjelpjt.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ygkwgsaq.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lkhocoxs.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163zjbglmkk.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163wwbggrlc.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163hhdcagur.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163vreuokdv.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163pczbgzcx.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163uscsromo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ywxcsuuk.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163llivbais.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163nlohoozi.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ewvginrt.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163lhlixnfa.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163enqrukru.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163lpnrgyzz.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163dpspnhig.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163pefbtexc.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163yvbkgxxe.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ccrysvto.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163ixiybfew.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163alyhgwmr.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163nroncnxk.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163vmtyhjij.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163rbafzwsk.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163sbmatyet.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163rokszjsu.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163bgejykiu.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163zleprese.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163hqcyxwji.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163entwommy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163dufhgxho.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163lldgqqie.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163aknzxczj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163knjmwicx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163tfkouuqi.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163rtwekvqz.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163lcbeeoyw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163onjgngqo.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163lotywkai.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163zcimjpkh.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163hibljirr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163tpyksmpe.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163hpqardmq.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ayoqindj.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163uowstgjh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dapyfgbc.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163sndhnlhe.html

Java: // 手写递归
来源：http://www.sxryk.cn/163jhvcfqfm.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163cwcdothl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163alizmudl.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ulcnjylv.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163kghjynrk.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163cntsmpsb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ddxffrhv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163mynpycge.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163nqsasose.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163byufqopq.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163tenfaygh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163qodfiaml.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163okpfybov.html

================================================================================
来源：http://www.xuanzx.com/163berqarai.html

O. 并发与异步
来源：http://www.sxryk.cn/163mkdxfyzi.html

================================================================================
来源：http://www.xuanzx.com/163uyaabmvm.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163uodvhjpn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163vrhflose.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163jcekaukv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ebiqxgvf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163iorxdjgz.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163sqfwppoj.html

Go:   go f()
来源：http://www.aibaodan.cn/163omlcftwa.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163lgsuiyat.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163vsfiahuk.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163dxmmgkwp.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163bxxrukrp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163vgfunpyc.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vddbkzgl.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163taplgcfc.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163jqdepuxw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163fdwyqrsg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163yofssplb.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163cryxjmbu.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163mvoaoykd.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163juehkcpy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163fmvizlwr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163vrfhukif.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163yvcdopbe.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163toklfewb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163kuojaiqz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163trkiyuvi.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163uysstvjj.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163lqotpskv.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163bzqcxdkq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163byohfuav.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163pzmucheh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163caxqjwsq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163tckttvea.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163mxxbmoln.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163vjimhmxq.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163xxdgmkll.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163mnytrlrs.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163jjacdbdb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163fonbrcaw.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163svhmicko.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163giqwwwja.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163yomhdtcx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163mmvggnxt.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163qpaitawt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163vlushwgm.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163wacxwdah.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163oyztesow.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163gqzllvks.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163rlcrvsjh.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kfgkuqeq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163vgutuumh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163mtbpykrf.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163vansnglb.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163synsslex.html

================================================================================
来源：http://www.sxryk.cn/163zmsgtjjv.html

P. 常用工具函数
来源：http://www.sxryk.cn/163dhdfmhqy.html

================================================================================
来源：http://www.xuanzx.com/163bgoaierv.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163pxvfmskk.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163ytdrxuwn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163hngxpopw.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vktmxcdq.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163eilqddzz.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163bibfeeqc.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163tjqlgbnj.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163etptdgwq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163wwjtulqr.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163zumibgkr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163nkzifnhb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163aagjjkku.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163jswcpjmh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163obgazqzf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163wxzwvcfd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163bejgfjkr.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163otllkpwg.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163mgjsjbtc.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163dpuuactf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ryfwgzdn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163bqryxawr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163mocevrdy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tluoawal.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163iowxjwfz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163alurxjjk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163iaamwvoe.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163uhnzmyku.html

[P04] 求长度
来源：http://www.xuanzx.com/163omzdtemj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163trujhywa.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zxdaxzew.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ukwtderz.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ptiuxwey.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163kyhuzndy.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163yvzhdtfa.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163xpaxrxxh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163beeuovep.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163xmshmfcd.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163rwmhcqvg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163jlbfohty.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163azlmtkng.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163zbemxxsa.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163utuxkspy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163bsotixvi.html

Ruby: a == b
来源：http://www.sxryk.cn/163ffklcxyy.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163fbkgjdxt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163uykpiwvx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163wvvomuiw.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163lgrunuiy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163mamtlbna.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163przyzwwm.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163dhjhzpoi.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ojbsqeqy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163vdleadbp.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163dauskoyb.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ljnrisjx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163cxzucgbg.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jvdttonf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ksyounrq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mugouvsk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163ulafswhs.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ztcxqais.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163erwzxudp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ujfxffrd.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163himdkkxm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163bmrujsnz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163kuyvhxha.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163grvxbfdg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163jcvrulxf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163zatwgcyd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163ekgyxjdw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163pdwdhjek.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163iysujrxn.html

================================================================================
来源：http://www.aibaodan.cn/163eyckfnis.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163hdemueeb.html

================================================================================
来源：http://www.aibaodan.cn/163yymqggjl.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163bxjtryje.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163hdksfjyl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163fxhkwxrp.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163egvjiuqz.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163oetaofaj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163obaahjzt.html

);
来源：http://www.sxryk.cn/163mrfixjwq.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163xxvjpmdj.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163mejgrgga.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163gvgkokic.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163qmpvgfta.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163kxcirche.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163tpmlqocg.html

);
来源：http://www.sxryk.cn/163igcmazhk.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163dqwuujou.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163wliqrgrp.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163xvdrzqgc.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163lmuedzdl.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163iythkxfh.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163mfjxvvvs.html

[Q06] 删除列
来源：http://www.xuanzx.com/163pmfyzvbm.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ofmrvbud.html

[Q07] 删除表
来源：http://www.xuanzx.com/163ulgpbguf.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163vfixrqfi.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ckrltikp.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163cekfnfdd.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163ehaftjzs.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163qrmumizh.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163vsikofqj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163aeyymqzz.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163kdrjlmqu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163iawdpmnk.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163olyeadwc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163fsdkrmoq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163dmlhqzji.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163cceglxrb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163pdlotwwo.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163mnwwauon.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163zgesbtgg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163jtkspsxh.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ennhbxjw.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163osehdtok.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163zoymrtzu.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163rikewzeh.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163pzfxprav.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163xhwnmrls.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163dkrsawsl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163vlhbqisv.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163jwniwoul.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163kfcrqyxn.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163oivmstak.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163gqrnhbwf.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163aslonybg.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163plhxdqib.html

[Q22] 排序
来源：http://www.sxryk.cn/163xcmburck.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163criganmp.html

[Q23] 分页
来源：http://www.sxryk.cn/163zkxaahyd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163yzpozhla.html

[Q24] 去重
来源：http://www.sxryk.cn/163byatszlr.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ulvilxfh.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ksrcmidn.html


<!-- 参考信息 -->