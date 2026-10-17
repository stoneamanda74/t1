外链999!wailian999！

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163mgssuime.html

================================================================================
来源：http://www.xuanzx.com/163kawlkltc.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163jfqxlano.html

================================================================================
来源：http://www.xuanzx.com/163oriwwhfy.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163bozegnnw.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163fnsuqpkq.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163mgyljcjh.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163dbiadfxd.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163uhnsauxp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163wcomxkik.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163cyfjhkux.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163dueuupdk.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ektuzuif.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163euxorsti.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163uexsihkn.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163mbjuhjje.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163gulzhoyu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163tzgiraxi.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163tvixghix.html

Go:   slices.Sort(arr)
来源：http://www.aibaodan.cn/163emlheuzl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163beakfhjk.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163ilwdirzc.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163tgibhuxx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163avqzagvh.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163caujklqf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163lnqmdhvx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163wjzctdtn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163pdwzvpxg.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163xjblyral.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163gkjttiik.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163odsfvbgs.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163fjexklhg.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163imknoayg.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163efooapxt.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163wbvigffb.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163yjjoxixg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163vapubcqd.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163lmjirpua.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163djltwtum.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163rkllmvie.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163onninqvu.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163uckgvura.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163xyyduzsq.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ndeckghf.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163mdiilwks.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163vuqgxeac.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ukdnotot.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163eqqpfynh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163rawjguui.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163fttinfre.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163wqtezdhr.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163otycqqio.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163pxiknapp.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163dpujhgcj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163cagbezwt.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163kctrooee.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163jslvzheh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163gfxzchll.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163jvuwsukb.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163orllmwvq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163yntpqhzq.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163rccercuz.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163buvvpiin.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163qtvrenrf.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163enyiutfj.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163fkplpqck.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163bifllvlv.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163bubwneko.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163rvtetdqb.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163bxplbzsz.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163gcfkxldg.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uwgmdkmy.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163wmnqjnwy.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163uccjrydp.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163fedxmpas.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163aeuvkbij.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163bfxiowef.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163hmwcqgbr.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163fwhqnymg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163wcjqojjw.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163hvbyvknu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ruusjimx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163bvlsgfxg.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163hozhxksn.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163wzelmdmm.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163xorqfoix.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163umyrzlaa.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163tbccqser.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ayrvibgv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163pdrmosqq.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163xwygcprm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163rujlzxfg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163loiroyxm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ucmonrpo.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163hqebgvxf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163bexbadzz.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163eigxmcsh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163uewuhias.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163feakfthg.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163arowiazi.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163pculkgba.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ybunnnwx.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163kvtrtrsd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163xwrjovns.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163armdphdp.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jhyyluiu.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ksgzswqu.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ktqnkdag.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163rscvhlzz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163aygcgwcz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163kfhbbckj.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163kddmnuje.html

================================================================================
来源：http://www.xuanzx.com/163nzbajrly.html

O. 并发与异步
来源：http://www.aibaodan.cn/163vrkgwoli.html

================================================================================
来源：http://www.aibaodan.cn/163sqqkccag.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163fgoyjlav.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ewodrqca.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163fmepmusj.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163vlyjttcg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163lkatscaq.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163tduywfao.html

Go:   go f()
来源：http://www.sxryk.cn/163pcbywlzk.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163zzglapfr.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163yvzjllqr.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163zwaagwef.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163jrnzfydb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163eluqlydp.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163pstjnzac.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hhkgvctd.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163acahpwwl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163ncyqhodb.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163dssxybkx.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163bzuurtpw.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rbiihhio.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163osocnkne.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163xzdpscqb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163vaosrucx.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163tmjxfiny.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ezszrbny.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163caqdktde.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163ogzwdkbo.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163rsecmhcx.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163drsjzezq.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163hbffgfek.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163dzxtwwmy.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163doobpcre.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163nkhwuygn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163pghrqttj.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163cthynhxr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163wshzgtlm.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163myyungzc.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163horalueb.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163qnztgzat.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163vvlflprp.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163nzkutvcl.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163rpgrfmhe.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163oknvciwy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163dtqadwzx.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163fxkstdbh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163dpflvfyk.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163jpnyjuck.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163mbywiwrm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163qwzmskwh.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163soyvazgp.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163opgzsgwk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163ftszogrn.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163xqhozxjn.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163tvsiyebp.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163rwnvotju.html

================================================================================
来源：http://www.sxryk.cn/163dchfezdj.html

P. 常用工具函数
来源：http://www.sxryk.cn/163jxetbsbj.html

================================================================================
来源：http://www.sxryk.cn/163jormkuum.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163qcgnhewi.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163bihvxowf.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163piprboaf.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fatsmbik.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163bgtakuyb.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ugiwqmts.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163jfyopibh.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163avyzhmip.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163udapckqi.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163vedhbucx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163bjwpuefu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163tnkezxih.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zvrxmlch.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163pjphvqlg.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ylxhfhnv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163xpljobtp.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163reblaawj.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163fwbiqran.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163deajmyng.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ifwjfcpg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163gcsaghmx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kqmamdwc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ojcdlljk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163acyvixzo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163dsbgqogo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163prdsffce.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163brkpzvoa.html

[P04] 求长度
来源：http://www.xuanzx.com/163tjhwnesh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163hvdwybol.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163aivqunht.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dkhojydd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163qknkovhv.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ioyiihnw.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163ncsesavt.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163vfdlgdbs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163oqucjpzy.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ipdyemus.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163wzvxygbu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163gadibtui.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ojfzuojf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163gefjrcrz.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ozylwytr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163rgahzyxu.html

Ruby: a == b
来源：http://www.aibaodan.cn/163keoxaoyx.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163jhtpblfb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163cdhvxpot.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163wwujugfh.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163athyigte.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163hspuutiy.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163itiipxpr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163tzfmpvps.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163zpqtuuit.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163donmrfiv.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163hqnapyuh.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163icrfwlvg.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163tdbtmlmj.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163enyjewox.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163sedbdwqf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163yncaeoeb.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xzmegurw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ptxchboz.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163eiludbxm.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163kxqvuwrz.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163stcgwbzn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163labuvydq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163udlzakdl.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163ofjfhiqc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163vgydmclu.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163qnztzpol.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163edjyeopj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163bxsewtba.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163xlkxzwiu.html

================================================================================
来源：http://www.xuanzx.com/163yvefuxwj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163mmozevgx.html

================================================================================
来源：http://www.aibaodan.cn/163shbjnira.html

[Q01] 创建表
来源：http://www.xuanzx.com/163kifpwkua.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163znxavohe.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hbvjmsut.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163mearmqxh.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163qlshvacz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163mbcoqvom.html

);
来源：http://www.aibaodan.cn/163utaeilna.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163xvufxjpu.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163wpwruiwi.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hgqfbbsy.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163xnlmvokn.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163jyeimlfr.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163kyyycnhd.html

);
来源：http://www.aibaodan.cn/163jsqcvevz.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163aevotmec.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163nnsgffzs.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163tdwrbkqq.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163rzqogxbg.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163xowualhl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163htnrypmp.html

[Q06] 删除列
来源：http://www.sxryk.cn/163joqkwiqz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163okoplmpb.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163wrpyaikt.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ugzqdwdz.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163utzgigwm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163hrunpcwy.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163joginqix.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163ubonwvdr.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163oivpfgnt.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ehroeson.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163ltxbjnvr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163zxqrxvft.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163pwhronfn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ktugnspx.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163yxwhmpaz.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163wzxiifhr.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163xcwyczdz.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163pwdhvnmt.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163hbcqvjuk.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163zriztuoy.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163nsgicmwv.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163csooskgq.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163cxqehdhx.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163syrmyvdb.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163qhchqvtj.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163pzkjzxde.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163trsrmnft.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163yzefvasn.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163zpminrmd.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163hbyzthvy.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ncmzquqg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163bxzthyei.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163zllksxth.html


<!-- 参考信息 -->