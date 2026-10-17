外链999!wailian999！

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163utagtieb.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.sxryk.cn/163xcvydvvj.html

Go:   sort.SearchInts(arr, x)
来源：http://www.xuanzx.com/163xtehobwp.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163cltxrxnf.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163cplukoom.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163ntfsmdbf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163tfzvavgj.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.aibaodan.cn/163kcevqcin.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163fnquwrzr.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163xtvsozpv.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163yhcmyulr.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163qfswhwhl.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zpzlnsxw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163wkybjrtn.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163mgsdtedt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163qjbiplgm.html

PHP:  // 递归实现，或用 usort
来源：http://www.xuanzx.com/163gvddsrrr.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163jkhfxddj.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163bmykzqbe.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163pfgquqpe.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163bmpexgrw.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163vkoleedi.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163zvbfghlt.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163bytoahnd.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163dzzqsggq.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163connkgje.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hqomowcx.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163gpwyaaqg.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163yanaadeo.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163vhmsyfjq.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163lknnusuf.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163ammgawpl.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163ggmzixyv.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163oislpajx.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163vnupnwzw.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163gssvxyxj.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163ukzfueyp.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163odytkcfb.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163gprsbhgo.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163vqayqgbe.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163gkiqfzip.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163gkydwwoh.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163mzstcnsn.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163xnfpjbvb.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kdtjetmb.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163lvbkiukl.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163xtvxkvkf.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163diftkzur.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163gexvueqa.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hpjnlpnd.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163kxegmbef.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163izqirhjs.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163fuopltmj.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163ubrbtdrx.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163qaiaqbqh.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163itpzecwd.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163mqctknnq.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163zqrvdtgv.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163coelyztt.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163qepjeinr.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163kaidkwnt.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163znbfwrmt.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163sgbznoot.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163sjrffyph.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163hflywaqr.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163clgewrnf.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163hbxezhcg.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163dtclplps.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163hcxhxzxd.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163ywehotnc.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163tnpxgxmb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163cjvqgext.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163pbftqutp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163yjzayabn.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163qobteqkt.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163bpywnhsv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163exwfrsgm.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163npbggffx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163kforlsrp.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163exagrslm.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ljmcpilt.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163wputizhz.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163hyyvdvrh.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163tytnsrcf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163whrtufak.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163vxneqpet.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163wsababps.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163alpjjytb.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163qhavwnau.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163upoaggbs.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163qxnmqiop.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163bmfuizfa.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163jfwcuhwl.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163emdpfsum.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163bcqobpss.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163xlbtthav.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163qwhbjgdc.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163jfgqgazj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163bpddpfvn.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ziflotlo.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jjgxyivr.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163debjqngp.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163bwnnvabx.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163tpxwvmfu.html

================================================================================
来源：http://www.xuanzx.com/163xcthpuvm.html

O. 并发与异步
来源：http://www.sxryk.cn/163jrjkgdei.html

================================================================================
来源：http://www.sxryk.cn/163wwyajyxb.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163kvwiztye.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163rqefizqq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163lnpuogxf.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163cjdeoeyc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163edserknt.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ltfxxulm.html

Go:   go f()
来源：http://www.xuanzx.com/163orqmwltl.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ivttodfh.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163merhnajx.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163zircxjlr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163kwguewgb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163hnpnkllk.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163pjbmkkqf.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163idhexlhm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163kdlvnrlg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163usbyloak.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163crhaqnhh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163cmwumahk.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163gnhvlvrc.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163hwfayogx.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163lngnwcfb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163eilkstbk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163cwqfggcz.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163qayhoieb.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163vveaznvz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163zrgsayhj.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163bohhywoq.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163sskwldbw.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163trxxejti.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163lenvzcor.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ycshlesx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ivpklfrz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163xtuxtcfc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163axvumsqm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163vtmvprpp.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ytcgocim.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163refkjivr.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163odjpuena.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163wbfvmwys.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ngucprgp.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163kwhwailm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163zjbrkmuu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163qpdkqapv.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163oppbumfa.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163bvvaplgo.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163dflksjhx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163lanakzpa.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163uxuktwyn.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163hirwaczv.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163cqoxcirs.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163eccmxjpg.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163cqzdbysk.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ridwudwj.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ibhfixtg.html

================================================================================
来源：http://www.xuanzx.com/163xeldczrx.html

P. 常用工具函数
来源：http://www.xuanzx.com/163fhgimgzp.html

================================================================================
来源：http://www.xuanzx.com/163mshujpzm.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163qgsiuulq.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163gfxajmzd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163akatfgpu.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fucmdpxv.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ebaxdjsm.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163htpnikda.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163bfcoxydu.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163yszwzjvx.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163uiblngfd.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163bocfabkz.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163zliwvjra.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163dniwxhfq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163voqfhfub.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ewbyltyc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163nkzlheiy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ltwyqfxf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163hmrzaaht.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163xecenvyq.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ouvafbwo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163ylxfveah.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163wbotznms.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163boeocaak.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tbyynskg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163ydwroylk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163augqscfj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163tnkuosik.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163naggwkmk.html

[P04] 求长度
来源：http://www.xuanzx.com/163nttbnsff.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163wrcufkpv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163gfdfggyj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163yfawnqtb.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163zfutugrw.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163aldrxqnk.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163fwrpmhgu.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163zfgwhfqq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163hbuxapvc.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163syosnbdw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163pjybknir.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163kcxsnoxj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163wboxgqxy.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163qgxphttk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163riezsuyq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163utqjjzcm.html

Ruby: a == b
来源：http://www.sxryk.cn/163omarwwty.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163lskbjqdq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ugpcarkc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163fkxqnmnr.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163hxzmsvzi.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ccvfugrk.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163fwkamvuk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163eheiqfhs.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163dzoplqfa.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ffsfepsm.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163pukhcxjb.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163munuaiar.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163kzzhmhda.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163lxagcxai.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ktpbcgte.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qgsyjlhq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163mlerptrt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163pcmzwxeu.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163xbtuwsiu.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163ykodxgij.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163msrckjzn.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163objkxhoz.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163hydwiium.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163nutygyvf.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163pncwoxya.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163egtevguq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163xilpyrxt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163xuqhuvri.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ubzqvpeq.html

================================================================================
来源：http://www.xuanzx.com/163yawoaikw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163nxxbwlkk.html

================================================================================
来源：http://www.xuanzx.com/163hrpkiheg.html

[Q01] 创建表
来源：http://www.xuanzx.com/163taisfyjd.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163qvfzjhul.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163etdqdwxv.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163mhiuuaun.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163agsscsvv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163dmazwbhq.html

);
来源：http://www.xuanzx.com/163fmsfquih.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163chdjpotm.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163dtorxgae.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163smwayavz.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163kcywbcxz.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163gaorpiur.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163norsdomu.html

);
来源：http://www.xuanzx.com/163gaugshtu.html

[Q03] 增加列
来源：http://www.sxryk.cn/163hyjrnszf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163benihpdi.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163htijirvu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163kdubbcqo.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163gfcgvsvm.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163sowuzrur.html

[Q06] 删除列
来源：http://www.xuanzx.com/163sycoymbj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163rwndlevl.html

[Q07] 删除表
来源：http://www.sxryk.cn/163kvfonbkh.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163hwlovocw.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ocagewts.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163cxgdfiaw.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163gjhedcap.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163dbhyxupo.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163mycrnqjh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163pxlaibnk.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163eqwqztbu.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163aawykono.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163dvnkrzfl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163xvlqzkjg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163qeqzyoak.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163bjcheqkn.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163tdtuobmm.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163egbzevlk.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163zpnnzagb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163tpmdanlh.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ckfbzcai.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163qkohikvh.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163cptdyael.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163nabovhfo.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163fnkautnz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ulcbttnk.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163iavhfvcy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163zduthqjr.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163zdclwvnb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ufsrxtjh.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163cpjpljmt.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163oatxyayz.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163asmdmups.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163hhgqvxba.html

[Q22] 排序
来源：http://www.sxryk.cn/163nwxlmmrk.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163milwortq.html

[Q23] 分页
来源：http://www.sxryk.cn/163vfgigzti.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163oheulybj.html

[Q24] 去重
来源：http://www.aibaodan.cn/163taqheupz.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163aocfcpdu.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ogyezafn.html


<!-- 参考信息 -->