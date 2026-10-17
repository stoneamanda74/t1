外链999!wailian999！

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163meixxyng.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.xuanzx.com/163ybgeglcn.html

Go:   sort.SearchInts(arr, x)
来源：http://www.sxryk.cn/163soiquoij.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.aibaodan.cn/163ugdagceo.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163dtvxdatg.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163dwxpdjxa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ucxjzxzi.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163xnjiqwmi.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nadgqdnu.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163nfyayrva.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.xuanzx.com/163qmsuxijl.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163udlowric.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163cndofnnc.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163fvqxyimv.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163sfzexfdj.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.xuanzx.com/163pffugvma.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ebwhzzdl.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163vbhuhdpr.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163cvwgfdkh.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.aibaodan.cn/163wxualjxw.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163tqjbjpjm.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.xuanzx.com/163sjmhoxcc.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163zmwmvrxb.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163jwcmjgov.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163yirlwncd.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163encvwrdk.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163shkfdhlt.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163mbkjlskz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163cxnpztsz.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163qngsrktf.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163siffuscd.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163qxhdybzv.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163zdbsqiyj.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163wjqlfyuf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.xuanzx.com/163iuvvmbyt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163jniokvws.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.aibaodan.cn/163uejfxbmt.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163civjjivk.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163oqtcqllc.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163gfawocmr.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163yjtxjtst.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163icsrvsxx.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163moimlqie.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163umanibuc.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ggptyfmv.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163whwlaywn.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163yrwdcgls.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163nnfpdwrx.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163rpnhiwdp.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163vzqxgndi.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163vlbwjpgm.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163lojyerpf.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163cnlxwbhh.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163gmbrnawz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163nhgetdws.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163ioeepdse.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163wkmllpqs.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ahidqnrm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163aihxewkc.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163bghdctlv.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163bepmitzs.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163tmofmpvq.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163xcxwpzll.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163adklidmx.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163gxnxlbpi.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163edsxunda.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163gragrzjn.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163nxhnkawo.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163ovtznhnb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163nluhdgwh.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ihiiquto.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163ynplfdvi.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163ucsikpkf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163opoygwpi.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163nbwajhjx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163ukhihuzo.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ixltkrge.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163apdspgdx.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163cqytajcz.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163rfdqapih.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163uimllttj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163uuwxveow.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163dpbxxrgk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163idxpyenu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163oosogblu.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163xuppcdcr.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163iupluxrz.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xzxliqun.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ewbbkiqt.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dpzccupe.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163czkmssth.html

Java: // 手写递归
来源：http://www.xuanzx.com/163hfqsyozh.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163mpftyylx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163zwneeonp.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163dhbhkxhw.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163pxaktnbq.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163yslqhtet.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163yqmqgwqm.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163jxmcubwm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163dodobjmq.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163wfmuvtkx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163irinarxr.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163kokkotga.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163jifgvxjq.html

================================================================================
来源：http://www.xuanzx.com/163ejzuztjr.html

O. 并发与异步
来源：http://www.aibaodan.cn/163iixwsube.html

================================================================================
来源：http://www.xuanzx.com/163gwfywbia.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163xzwriyhd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163chpcqkau.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ckxzcumb.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163eklhoipt.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163afvkidwv.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163iergyigh.html

Go:   go f()
来源：http://www.xuanzx.com/163jekndmmc.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163gxdqngqg.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163cfrmamax.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163jsheokmz.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163nzzidhdi.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163vowntmmh.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163kmeqkcxo.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163gaxuxnwk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163gnmllrcb.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163yszdepwo.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163zxtjokcf.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163xotifdzq.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163rjzkscih.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163krbonoly.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163rhhfyfji.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163awduxvyy.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ipmtyltw.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163dafbpypi.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mglezfzl.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163kxjlkfxa.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ubshigen.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163tehzqtsw.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163nzususke.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163puazkhzh.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163brjdmgxp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163sahdwuic.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163uimgjeru.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163mtfndbcm.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163uzpwkoeb.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163padskqht.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163zbhwjqun.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163vwuxqcyu.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163efsoovgm.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163edudhlfa.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163uzclmmpg.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163nooamymc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163fsibrean.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163ntberlcu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163atjqxlcj.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163wzrlvrcl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163szvusltd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163kbpeebuu.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163wqfzhhjw.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163moewtzon.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163vxdlxibw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163lxiuvxrp.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163kxbnnfaq.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163oxvabqhp.html

================================================================================
来源：http://www.xuanzx.com/163mulqwdmi.html

P. 常用工具函数
来源：http://www.xuanzx.com/163aucwopgj.html

================================================================================
来源：http://www.aibaodan.cn/163miuukwub.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163pmtidznk.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163kwvqpxzg.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163txcigxej.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dvybmktu.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163wqtipnwi.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163lxghticl.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163asxvguvd.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163pmcvfypq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163xeuxnqmi.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163lpukdjvi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163dblgoxwg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ljahctec.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163qthxzrhh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163wyueaunh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163jhdtulky.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163mfufvsfb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163bgjysfpe.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163jotmrncj.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163yqkazcny.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163drnxxjvy.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163vcfhttpx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163zoesrnxk.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163mlkfvfih.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ehksmsdz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163satsmaxv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163oivcpcpe.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163aybsnhko.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zyaqfvyf.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ttzpxags.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rkmvnnda.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gfvldhwu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xgmkjwwe.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163wmxzvrvg.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163zgomapuo.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163zefwbiov.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163egjzhodq.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qtvxemxu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163mltuonlq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163dehdgdob.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163qhtbtyve.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ibtftzvx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163ntytevus.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qsjdgbnb.html

Ruby: a == b
来源：http://www.aibaodan.cn/163sjnfdcfq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163rfmsrnsd.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163eaytenaw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163qlfdrhzf.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163srejvltx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163dmznmdqy.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163rdgzlysd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163bvnlmymf.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163qpztizhy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163vuxxbzep.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163vmjdpvaq.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163vwjssisl.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163bcnwklij.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jkrqkkzb.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rbaiucds.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xglkefoz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163zidmahrz.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163oqihdnsx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163xkvjbaha.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163spsjqkfg.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163aicezrse.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163urgiejpx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163ujcviebt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163muauttaz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163kxuyrjbr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ompngcxr.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163icayuvlv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163fjfpstlk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163qgdjujgk.html

================================================================================
来源：http://www.sxryk.cn/163bovrehzl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163iaqbtzwp.html

================================================================================
来源：http://www.xuanzx.com/163ckmnfava.html

[Q01] 创建表
来源：http://www.sxryk.cn/163shyydyrv.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163whrwzuoy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163knbbfmyp.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163wgaofaha.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163sahdaunp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ethazjtm.html

);
来源：http://www.sxryk.cn/163oomanscm.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163qgflqxtb.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163rnjthizb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vbwswpkp.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163fhqbjhmn.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163sekfetfy.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163gkspzfen.html

);
来源：http://www.xuanzx.com/163xcqgkfym.html

[Q03] 增加列
来源：http://www.sxryk.cn/163qagmldme.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163gmfgvbwz.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163kiclfiau.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ttgczqwg.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163exsnldeb.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ayhyrihu.html

[Q06] 删除列
来源：http://www.sxryk.cn/163fkxscdqv.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163wdbjpkwi.html

[Q07] 删除表
来源：http://www.xuanzx.com/163zmytfgpg.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163jombrlpw.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163bntapjwm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163nakrvncz.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163rgmmnmuo.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163iyuauwgb.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163irosqtsx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163zxhzpeii.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163tzefweum.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163nanfbjwx.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163bjjgiriw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zbahsxpd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163matoxseh.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163sgjnxiuv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163bxgggwlp.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163fktileqw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163tyugwwtc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163obtyerjh.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163gawjqfks.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163scleapsc.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163yjstuljy.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163nqvvlrsp.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163lffypokr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163acvkzqaa.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163bouvrvzj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163qfkguvku.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163fjvoktgm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163bsuvxdnh.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163iekqrlma.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163edgrxdrg.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163gtiacquq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163tazjxwin.html

[Q22] 排序
来源：http://www.sxryk.cn/163obolxksi.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163hqxuzjqb.html

[Q23] 分页
来源：http://www.aibaodan.cn/163dojvswvl.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163mbuwhjfl.html

[Q24] 去重
来源：http://www.sxryk.cn/163fgzacjbb.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163cziukmaw.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163sigcecfa.html


<!-- 参考信息 -->