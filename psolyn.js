外链999!wailian999！

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163bmqygekm.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.sxryk.cn/163hfubkjhe.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163kdfmvphd.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ghizdobv.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163twjywtbo.html

================================================================================
来源：http://www.sxryk.cn/163rcmvunim.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163olxtjbgw.html

================================================================================
来源：http://www.aibaodan.cn/163ylzirqoa.html

[N01] 二分查找（有序数组）
来源：http://www.aibaodan.cn/163krpjygup.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.sxryk.cn/163fhfhcxzw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.sxryk.cn/163csdjwway.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.sxryk.cn/163qppkaill.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163vcqxgcaa.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163faqbeihb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163iggynhjq.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.sxryk.cn/163cirzmegl.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163dwonqafw.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163xlimtpld.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jubfizjt.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163hxwdkovu.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ywaqsydd.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163wpdrjzsc.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163wvtigprc.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163dqzaryuo.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ramuebii.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.sxryk.cn/163drfkqjti.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163otfgqdyr.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163maegyood.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163vxfmtlcl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163ffhgpdxx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163ndbfgpos.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163cxsomstb.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163avueykqe.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163hhhqzujw.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163mnbmzytq.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163lzorgycc.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163bluilhfr.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163ycdoekyy.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163kiqsevvd.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ajelwjty.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163zbxytpqg.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163fqgrytmy.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163brenzrtx.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163hrovcgew.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163nvpruhry.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163upaouzgz.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163fryhfkdp.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rbxjzukp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jhjiottn.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163lrgsdhmw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163salvocin.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163kliymxce.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ocfadwfl.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163cxnftllj.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163wemauyyh.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163mqvcfoak.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163tpheqvzg.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163sovwesxg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163zfwzzazi.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163dqgjvtce.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163jslxabjc.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163ocsjhrwf.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163fcbpoawf.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163atylralq.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163vgnxcxcp.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163czjkasjt.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163kmoqccoy.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163yhashkue.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163tkwjbilz.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163hsvzmdrl.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163iczxfxuh.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163vjesstio.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163exuhhxhr.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ynlmdcpi.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163paoavcrv.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163klbjimqq.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163hmahptfd.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163ruxnkrdj.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163xxnlsbme.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163bhldyonj.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163pkuljiyw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163dhzmhusm.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163zpabwjjg.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163ospffetr.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163dfngpmua.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163htizluwi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163fvcvslys.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163stxyayaj.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163oqaiwhvc.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ipmxlsmu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163cybfoyqk.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163moigfzpf.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163yuegcffv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163nfkpohmu.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163gzqxrdlm.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163pyghiwax.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163jkvstrmq.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163oyjngzkm.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163pvqdfuio.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163gzhrsyjb.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163xzvtvclh.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163zfkcawqz.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163veuqtjol.html

Java: // 手写递归
来源：http://www.sxryk.cn/163dfcfaagq.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163ywjenujj.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163qomrkhls.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163ysjueaxi.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163cdiskzjt.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163opdvfixe.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163lhbxlkcf.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ajvbsjun.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bddbeazg.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163tiluhrjv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163lrdjqrqh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163qcjoiauk.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jhrcnvyi.html

================================================================================
来源：http://www.xuanzx.com/163kqkcsovl.html

O. 并发与异步
来源：http://www.sxryk.cn/163ugzvzjay.html

================================================================================
来源：http://www.aibaodan.cn/163kvhupifn.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163efpxgisw.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163uwrkxdfs.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163wnjgopbv.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163qglnzxun.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163oxiovcet.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163yrdebffo.html

Go:   go f()
来源：http://www.aibaodan.cn/163bxroocco.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163ezkdripv.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163cyfirdec.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163aooytbaw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163mmmxfiyb.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163onvrqapo.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163mnsagesn.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fwlytczi.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163jkvjrxgf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163bmezkgko.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163nsuiommp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163zuuxhnrp.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163mcqqmqvs.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163rmfsmnnq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ozumcewu.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163zchlbvtm.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163knkidhtu.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163itekwgtd.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163rifikbzx.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163zldpqzvh.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163muigbnfj.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163fznymfjf.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163egxjchof.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163wodbpeot.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163phpxnacv.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163getibtqf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163dvlawgep.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163svoxsljm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163mbphgczf.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163jywnjcpc.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163nhlaqndd.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163njhybwvv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163umjqzzqx.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163yxzsiwkf.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wsfazcpg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163unazwsus.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163hlxodyri.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ectnbovc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ngbucygb.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163awavdtwr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163setjmgbd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163tkvdahtq.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qaufuzid.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163uromhzoe.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163jhzoacor.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163uedlyktt.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163bwmhbldo.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163wfnkzlth.html

================================================================================
来源：http://www.aibaodan.cn/163tqloemtn.html

P. 常用工具函数
来源：http://www.xuanzx.com/163wwwfhbgt.html

================================================================================
来源：http://www.aibaodan.cn/163qvjkzczq.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163rksuhttm.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163bllqepqc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163yifsdagy.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163sctmkaog.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163xhlmdvel.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163nmfmlggt.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163tewgmcul.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163gxolrvgp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163rxpugnbk.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163aujlvfym.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163lqcicfjz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163brovavce.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163usskxfpt.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163kzrcbkvr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163qwolejzk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163cqxollwl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163tjkuajib.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163drheqzva.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163baptdvnb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163cxswrhug.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zgsmoind.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xblhajqx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163iovtbcow.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163cchszyua.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163qqnxckya.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163shvlnrik.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163lqisllhh.html

[P04] 求长度
来源：http://www.aibaodan.cn/163pxntudaa.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163mulhwirs.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163vhxjtace.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163aerhnivp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163uggbjhzp.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163bcywdjjk.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163mdoiukhc.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163kmwgjtfs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163bedkdeeb.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163pbayozdb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163kyuykqbk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163lzpcnxwm.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163mdydscet.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kumbzrzi.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163zwodtbbm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163omhbfgfs.html

Ruby: a == b
来源：http://www.sxryk.cn/163fsiplrly.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163jwmlihuf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163uhazavtr.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ofylszve.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163zvtvbjcc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163fgsrektt.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163sntybdet.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163teziecyl.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163epmdirrw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163tqorpzvb.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163yhhlebib.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163pxgobocr.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163unvzhpvn.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163bkvkjiks.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gbsssyks.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hsuvkdlj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163jpvscyjf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163mxbmwouf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163zvgjllvv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163sevnzrjj.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ojhjnhwh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ngqgeecp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163swaauudo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ltnyczhl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ldtepqms.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163nlfekhsw.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163fzclqbss.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163irfzruhj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163rkrjhllc.html

================================================================================
来源：http://www.xuanzx.com/163terdswcj.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163ngmaalvv.html

================================================================================
来源：http://www.aibaodan.cn/163jxuxiyst.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163elwxqrrb.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163kfpjfrbz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mnjykkvl.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163koezyzrj.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163evhwaqcd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163kgpfcdcl.html

);
来源：http://www.xuanzx.com/163vwnzauqx.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163fmoabxod.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163mdjhfgrf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163axsjbioo.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163wwemnuvt.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163girxclrz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ibcppaip.html

);
来源：http://www.xuanzx.com/163biowsxis.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ymtzymxm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163yxjfqymw.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163jyfqmsca.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163uneuadai.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163qylyvyin.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163imqhiajr.html

[Q06] 删除列
来源：http://www.sxryk.cn/163tvxdeetv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163xxntlzqw.html

[Q07] 删除表
来源：http://www.xuanzx.com/163dzuzattp.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163yejohqbm.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163itkyecnw.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163kajdvlht.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163zwtnwkly.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163hkgpkqbd.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ikisohfd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163eruxwmqq.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163kilnqsdo.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ngygbcnl.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163eoegsmez.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163dxjyqmhc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163asyxmxnw.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163jqwvcceb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163pchwzywi.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163yxmnhjds.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163voefaerj.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163khcklswq.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163oyrbuasp.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163wvzxyhfx.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163acbkvkjf.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163dcmwecym.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163oepslvlq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163nlhcahgx.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163gqjehgaa.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163cofeevfq.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163kgkravoa.html


<!-- 参考信息 -->