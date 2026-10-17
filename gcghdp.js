外链999!wailian999！

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.xuanzx.com/163drkccbqv.html

================================================================================
来源：http://www.xuanzx.com/163ooovbqdv.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163punarhaj.html

================================================================================
来源：http://www.sxryk.cn/163dtqlhkno.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163rojpkojb.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163vfomhkiy.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.aibaodan.cn/163kvwbxoly.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163lzprxzuq.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163aomvpyke.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163jxmxfdda.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163aqhqswvo.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163hplmrfbg.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163malelwmd.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163rmuixwkq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163zwfcjeqg.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163tduihyxe.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163mdpzlnas.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163vaosmbtl.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163vmcboiwf.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163lhqwgjjz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163urxhzhce.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163zopwexmr.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163pnwxfdbr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163bhziifbx.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163kghwoyjg.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163thuoqddy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163whxucpla.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163giwvxgjq.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163lvgujscz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163pvhmfwju.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163urrylcae.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163abmoixak.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163iwgnrcrf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163mbztoesk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163oluydcam.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163whvgrfio.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163zmzfhbsy.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163zkxpnjkj.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163xsmdqerl.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163milbaydk.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163yupbzldx.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163tfbclehk.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163nynomjoa.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163shfqvvrm.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163opduvbek.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163gakexrqx.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163wujsnamc.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163nqsiwwpy.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163uzqsjqow.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163xigtoade.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163boybaobb.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163tzsworam.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vbuykfbu.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163waetsmkq.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163wsqumjow.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163cvehhuck.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163fhvxyigm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ijbzjaan.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163hdntjjma.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163aeljsrlm.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163xtjjahnx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163fdutaacu.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163aczddoqe.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163uacrewrf.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163jrurbglt.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163wicmmycu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163sjfwkcrv.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163hljeihwr.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163nlirmbcd.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ywkuqytv.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163qglhadbo.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xbypddcq.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163lkowwyvh.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dxlbqsxt.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163jpszyupr.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163wdvsxwrv.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163xvkkrltz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163sopthmam.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163xlmaeecj.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163mrnxfxbt.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163ncuwtqaw.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163mxapxmoh.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163ijuxtjmk.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163kdmusjan.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163pxbijqhk.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163urmzhpqy.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163ficnlzqe.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163lnxorvls.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163jxlmjoyu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163yqexiwdz.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163ybcqtjhh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163darkdmjt.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163njoghujf.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163fklhqnxx.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163jpiowxun.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163mmizaeot.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163tngijgud.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163adybsrzg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163unrjpwea.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163xswfdgev.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163vkaqelbg.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163khbrsxry.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163repbcgro.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163nrrsgohw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163qrlcmlze.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163hakdmnru.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163pmzlticj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163huyvszco.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163cydzssjl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163pvlgfzyh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163tzgprycs.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163yoobhgpw.html

================================================================================
来源：http://www.aibaodan.cn/163wunvrift.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ufbpbijr.html

================================================================================
来源：http://www.xuanzx.com/163xecvmdys.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163oyiqnijj.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163awzfuilp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163oobmcsmp.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163uezhothn.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ryltwawp.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163lnlcupwl.html

Go:   go f()
来源：http://www.sxryk.cn/163ptgtwhzp.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163pzqzepux.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163vxsgtjss.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163elwzluas.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163spuuycxl.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163febocvzu.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163xftggfvv.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163mejkdcis.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163nggjqkdw.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vybiamij.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163navcrfpo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163fveffrsw.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163axmqgwpc.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163elvltcco.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163zkbetpiv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163puojkicg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163ipwduukm.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163wtkxuezv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163uqpoykrz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163tztujgzd.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163apusidzs.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ttiabave.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163aswozybb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163iezivrpe.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163wxwnujtz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ukzohgav.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163vvufbkhv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163nvftzdbm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163dtbcsgne.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163oqxwjflx.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163wdvyxzqt.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163abcusiok.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163ukwuaeeu.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163iyivdejq.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163bebjulkl.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163pvkrfmxw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ijesqnpw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163zuwbniju.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163qyfzijgr.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163jbjfcdmy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163wzaxnwyp.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163dnrusvuu.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163irficryi.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163phzdobvd.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163phizznph.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163jjmsydcf.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163fogbbgom.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ayuxptpw.html

================================================================================
来源：http://www.sxryk.cn/163qtkhypgc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163imojqeky.html

================================================================================
来源：http://www.sxryk.cn/163mtstejum.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163afcfbbxz.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163vyoswutx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163antqspdw.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163tdajqfld.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wmlkayor.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163keevdjjo.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ilstaatz.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163hmlgmdqg.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163duovvdgq.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163lepbwsvl.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163hmdavqek.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163awvpxcsb.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ckmczhko.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163ubvfidga.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163islmssgr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163driwgexx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163alvazknl.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163uwofwhjg.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163wculgwvd.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163smojxmol.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163yglursco.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163dzbzxmaj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163iiacteif.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ywftihvb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163jxqmkeld.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163ifeasaqo.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163okktcklc.html

[P04] 求长度
来源：http://www.xuanzx.com/163qynbpclz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163eiuhaswd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dbjvsozv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163cgarnxyx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163jivtkfgz.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163gdgebcoa.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163txtrwxaa.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163eerfapjn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163auigkkjr.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163hkvzsfyq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163bljqhxms.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163khvgwoln.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ylhzrdpo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ouxvcbkq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163xkutdsih.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163vmelqmfe.html

Ruby: a == b
来源：http://www.sxryk.cn/163sbingvon.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163djaidsom.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163hxnmmnjp.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163bdacxlsz.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163lgrdndyq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ybfjzxlx.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163gnnkmqkl.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163xzjuhgxx.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163ykujppai.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163lktdtvdj.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163nlcgintq.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163addodija.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163axhkevgf.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163yluywbok.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163dmjlhgbb.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163xdbdormm.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163prbrpzep.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163rhshtrtv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163inkgefuq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163lyieavof.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163joswtlrc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163kqowyuwq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163znswsbvw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163mfyslisa.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163hnfyvnjy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163bonlhyny.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163whgnafgp.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163lfttzdjs.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163bryonvck.html

================================================================================
来源：http://www.sxryk.cn/163pejvtyuk.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163mahrhrgu.html

================================================================================
来源：http://www.aibaodan.cn/163jlhlajls.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163jpobmhbb.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163lqudopyq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mvwhwkwt.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163qbbxlncq.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163xmxmlbka.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163vqydhdze.html

);
来源：http://www.sxryk.cn/163jnxtaahz.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ikuhxwie.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163aeilvcwm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163orhpkhrl.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163airnldcu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163czufljnv.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163kklfyojw.html

);
来源：http://www.sxryk.cn/163nltjihow.html

[Q03] 增加列
来源：http://www.sxryk.cn/163eodwngxq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163dfsqgpci.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163rdoldlxj.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163zafllrfp.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163kgobdrpk.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163iemerydk.html

[Q06] 删除列
来源：http://www.xuanzx.com/163eprefsup.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ofyujogw.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163hwfslezw.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163dfvhsqzt.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163gnafosjd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163pkxrvowt.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163dfcplmlw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163sfrdjggb.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163tbgzwszv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163xrrrklaf.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163nwxwelvc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163nnvpmeie.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163dqeavsmx.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163qsolwfhm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wtbkuzkr.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163jtuaqlxr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163qdkaoagr.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163hrmussqn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163lohsfjpa.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163fsuxawhv.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163lwrehnng.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163abvwiiop.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163rilyfnhq.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163qhekrysu.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163skxbpjxr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163czkwiodp.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163mlphnhwy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163mkkjulqn.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163aqbaxqbl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163exfsrfxq.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163eadpftrs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163pqpzyinc.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ehlkepzc.html


<!-- 参考信息 -->