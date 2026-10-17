外链999!wailian999！

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163uyrtowty.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ngoudloo.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163oykesioo.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163omgfqkii.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163vbthmwmj.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163udvivyqj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163snmjzabp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163fkstjkhd.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163exsfunpr.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163znrwwpjm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ccwbohih.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163tcoptzxw.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163pgacrpkj.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163cxfeurdw.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163ngfqcokb.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163htixcpnz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ylzpymti.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163jitsdnqy.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163iuyderff.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163xsqelser.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163gucezadt.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163kjcyhhnv.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163trygaeke.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163vkawsgxl.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163hqekvtbu.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163stkvcsda.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163wbqrdbqj.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163nmmkmxxk.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163qqjbtqev.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163osrrvsby.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163wcyldbed.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163aqvroglt.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163qmkqdhdb.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163nvcplklq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163deyaflxv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163wglxcytr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163lendcrkp.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163qrebeodb.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163gskourts.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bcsepafa.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163dntctzdr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163edwdkeie.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163ytwwyrzx.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163ebpsysjl.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163zghqthqr.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163bazxwbwv.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163oqjaexbo.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163ggtzazvz.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163vuyulnwu.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163wyscazxs.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163nnhotgqk.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163vcbyzrrn.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163tnaynrav.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163unvwvyyb.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163qtwfgrsk.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163tewepkwg.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ycodzpka.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163lnurnybi.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163jicswhfn.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163cfzxlddn.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163jeffxmtd.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163kteynljz.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163qbbhzczr.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163dxgtkatk.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163srfdnhcj.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163jmufpzih.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ihkqdwfr.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163zlydlvaa.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163huafynkw.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163fyrtaqle.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163jrbqfvld.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163oaxzwhhn.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163yvkybify.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163gyupqoqs.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ewhximll.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163dtznldqf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163dogdwwki.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163jcgouwkk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163vwlaveii.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163mhzhsvaz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163cjenslky.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163rmwnzjgh.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163jcttfabq.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163pmebimlg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163tdyxjhlb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163sraovaun.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ojqwrzlg.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163jaxxyync.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163lqutxunn.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163tyslbsju.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163yesucaea.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163uijyqudn.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tofoehhu.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xzpaozbd.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163izgpvfoi.html

Java: // 手写递归
来源：http://www.xuanzx.com/163psvlewqe.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163ffujigzn.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163osskaoch.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163rvkneumn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163hbycayev.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ucqmwnft.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jvoughsz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163iqppwypg.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163zltmauwu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163vevrnrbn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163sjlzuzxb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163goggjzwx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wdsewklo.html

================================================================================
来源：http://www.xuanzx.com/163nnpxcdmk.html

O. 并发与异步
来源：http://www.sxryk.cn/163yntxsdpx.html

================================================================================
来源：http://www.sxryk.cn/163zqwbkbqf.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163oioretmu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163avkovrtw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163xszjafbd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163mrskqtji.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163qbhlvhao.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163pwvwkfyx.html

Go:   go f()
来源：http://www.sxryk.cn/163mexqnvvt.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163amjpbjji.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163okrmxccf.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163ouutzysy.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163pkgpwzuf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163azyqhbey.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163qcbkemfm.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163xadtfasz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163lbvtpyme.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163knimkusq.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163gxllmftk.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163lyxvatey.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163eoljapal.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163jppnyjur.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163xncpmaur.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163ldjhbhlq.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163mmcszuzt.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163cndtzyzm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ejgoardj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163pqmwscpf.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163iabwmrxd.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163zilvujsi.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163hhqkcxep.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163pwkidvwf.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163pfpruued.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163rfethywa.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163rkdxgbfm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163iglzjjpl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163bqpvhwfv.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163chtrctzx.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163xjgjzage.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163mtixzgqd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163zhczjgdg.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163jvgaulaf.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163elbnpovt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163rowippjz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163stscfrpq.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163kvmwstsn.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ipephidx.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163cigacqwl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163lnajkish.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163csmofzhx.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163eeufqjro.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163dbhfrsqz.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163gveusffl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163bwknnkvh.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163kstowaxk.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163tayfftal.html

================================================================================
来源：http://www.xuanzx.com/163zgjrwrfj.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163hadddnpk.html

================================================================================
来源：http://www.xuanzx.com/163tdcoyydi.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163rdjhblbr.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163uhggdnyy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163fkovchrg.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163coxwcwxe.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xadkkwfo.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163nzigvfwv.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163kbfchcmi.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163epdqhatt.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163xnbzncbt.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ijppazlk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163bteupxdy.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163eucmzfmw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163jwiuvkxo.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163kvtsqtuq.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163nwjzyhap.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163klartlia.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163xmeuslim.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163mdknymfm.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163imkckzvt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163sdydlfij.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163fktrvbjq.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163wtzgtcgy.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mkkkqcvc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163dmgrgdcz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163jfrutmuf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163elondgvg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163ihjcaphr.html

[P04] 求长度
来源：http://www.sxryk.cn/163gqogkjgj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163clgvifcz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163bveopufi.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163krrvcuvh.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163vpprirrd.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163nezufric.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163qgknoqjt.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163onrewaru.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163cslrfzgm.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163yhqeyjze.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ddrpoyoj.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ikxsmrje.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163kxvtknad.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163lutzbrco.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163voyxlpyf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163nbkzlycb.html

Ruby: a == b
来源：http://www.aibaodan.cn/163pkbwllah.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163chktxzso.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163vrqxsnkb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163cfqywxvg.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163mhsunciz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163tfurmstd.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163enpucoxe.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163vgqbtxkb.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163vubrytrw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163cedspkyx.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163zfpfruaf.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163nqokacpp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163roadikla.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163qeisztsh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zmphjzec.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163lqptkjdr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163vzunllvc.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163pxtqtdio.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163ydnijchg.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163dkyjdpdb.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163yloctyuy.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163wsyalzyy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163nfrmxrtv.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163vhsvgkjb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163krnziwtf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163mdilbqpu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163cpthxioh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163uizwyaut.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163yghehtkj.html

================================================================================
来源：http://www.xuanzx.com/163moceoggi.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163jxsprlsc.html

================================================================================
来源：http://www.sxryk.cn/163qfprvnye.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163tbpcqaid.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163yyazikfe.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mxiackzw.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163aygqudve.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163gbzdlcza.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163jsnkdfpx.html

);
来源：http://www.sxryk.cn/163iuyffdnh.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163wrwwjocj.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zkxilsbm.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163spyjeccq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163hvhqyxrk.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163csqwbukd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163pfbhmqex.html

);
来源：http://www.xuanzx.com/163hwielwvg.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163uokbiyzq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163tbykezxe.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163pdxrpjus.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163umxnwkxu.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163zhtjfvdy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163eqaffegp.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ukampsop.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163tvxvdjeq.html

[Q07] 删除表
来源：http://www.sxryk.cn/163xrbqsvsz.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163lmpzqwpe.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163pigdykhn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163nvfocvyz.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163qiugbpnn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163vuzohotz.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163xktebzff.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163vgwywhfn.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163wevywtvc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163niwspmhi.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163uzmjtele.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163wabhilnd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163oiaaftwe.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163phaqsett.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163rqvngxwp.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163bafrcnpd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163gncjnsew.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163txbpafne.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163mdyfkfis.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163evjpteyg.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ynqhmtoa.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163acipsfkh.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163grmcrjkk.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163khvpdvsh.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163etdwumum.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163gbmwbvij.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ywyscdhj.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163cyucbjge.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163pboilhwm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163irojladl.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163fnjgespn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163sbxrkdnf.html

[Q22] 排序
来源：http://www.sxryk.cn/163shobntpj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163dlsjljij.html

[Q23] 分页
来源：http://www.aibaodan.cn/163ucsglsna.html


<!-- 参考信息 -->