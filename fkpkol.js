外链999!wailian999！

TS:   process.platform;  process.version
来源：http://www.xuanzx.com/163mckrkkxw.html

Java: System.getProperty("os.name");  System.getProperty("java.version")
来源：http://www.xuanzx.com/163cyjkrcsb.html

Go:   runtime.GOOS;  runtime.Version()
来源：http://www.aibaodan.cn/163aybvlpdz.html

Ruby: RUBY_PLATFORM;  RUBY_VERSION
来源：http://www.xuanzx.com/163ffcvcdxu.html

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.aibaodan.cn/163opxanjmh.html

================================================================================
来源：http://www.xuanzx.com/163jnbqqudh.html

N. 数据结构与算法
来源：http://www.aibaodan.cn/163nmjzulia.html

================================================================================
来源：http://www.sxryk.cn/163gbvlgwph.html

[N01] 二分查找（有序数组）
来源：http://www.sxryk.cn/163occjizez.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163rhxubvqw.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163juzdrrtr.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163udeftjmk.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.xuanzx.com/163kzukoecp.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163sphxyiaz.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163dgskaocv.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163alqaagwr.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.sxryk.cn/163alrjcyrs.html

[N02] 排序（工程实践用内置实现）
来源：http://www.xuanzx.com/163umnzxmbi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163drwardwl.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163uyulijpy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163jhiapggg.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.sxryk.cn/163mrbyxznq.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163pppfxmis.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163kpfmwukx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mbgsnxqn.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163blxampng.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163oupzteju.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.sxryk.cn/163wkzhmnol.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163mzlzzgaw.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163sxbbrvib.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163pgbwnyjs.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163bglswmsz.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.sxryk.cn/163uyuccnoz.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163mjmhpsng.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.sxryk.cn/163upabytje.html

[N04] 斐波那契数列
来源：http://www.xuanzx.com/163rywqpoel.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163fcblufbw.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.sxryk.cn/163ulqrsmho.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163ykxskawy.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.xuanzx.com/163onlzfuzp.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163uqmnfijf.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.sxryk.cn/163crbtkciz.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wsojztiv.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.sxryk.cn/163cwguowbb.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163pjulkwgd.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163wyfptikf.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163znglhzyt.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163sdslxnyd.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163rqwjoznx.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163hgvtjnaq.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163tsamgnlt.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163jhqbvbxh.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163ykixbjrz.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163hlqhwgbf.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163wzzwhjzr.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163tfkkbbbf.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163soifgtak.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163octfslvx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163msrtcvhp.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163qkygyxth.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163ghngiifm.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163kacvywdd.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163aokaufgs.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163dfidbqmu.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163ktrwhvjm.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163vwqwhbtz.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163angmudjh.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163ejhwdocf.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163kkrcufhi.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163sptgtbkr.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ddsgmdyp.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163yntlnfnu.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163snqfntzk.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163towofpsy.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bjhydnkl.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163qaxtuvpf.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163yrdyqbca.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163fxleoqub.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163neypjbus.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ngincuoq.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163xofdgszx.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163bqaajqab.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163hhngjkzm.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163otxdiuhc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163giwtadbi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163huomthtx.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163vtahhpst.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163bjtovovv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163mbbyhfoj.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163oorpskda.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163kbkspkuy.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ztiasxqr.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163wvsqflbj.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163zjgzfhjw.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163fiqakqjw.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ynpuksmv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163txpwsomv.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163fsgyjkgw.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163gydtnsjk.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163nkodclpo.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163eghfgjfb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163yznyvxtp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163xcrsmxjf.html

Java: // 手写递归
来源：http://www.sxryk.cn/163tikrxwzz.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163fuubgzpr.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163oigubjob.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163lgjiehyo.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163dpjqidsz.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163jlabaatd.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163mwzfwmjb.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163kgidnhvr.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163npjnskpb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ylakdape.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163pfkcyzgl.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163tbpkrzbg.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163klcfibco.html

================================================================================
来源：http://www.xuanzx.com/163sczejdxo.html

O. 并发与异步
来源：http://www.sxryk.cn/163uvwwfjah.html

================================================================================
来源：http://www.sxryk.cn/163psznvslg.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ezponctk.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163snmxqcui.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163wwsraqut.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163nxchplho.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tlimiopt.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163uituximd.html

Go:   go f()
来源：http://www.xuanzx.com/163lvvpvtmm.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163yxcbivjc.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163nyewgyhz.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163mjpcjxil.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163flinhraw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163hnajqmxs.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163iplqxvvl.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163bmuzzegb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163rhpcydvk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163dqiuiycm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163gyucflgv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163fncoigzu.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163fwlmlmgo.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163hzjznykh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163rzfoqxjw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163wrpqwxud.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163bytkqtti.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163uuwvkgtl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163xjzknfii.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163upyzbnxb.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163mdwlkyhf.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163eixuhdtp.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bryqpoqo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163lulaaspk.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ugptdycb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163twxiidkf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163qjvsjicq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163wweiblev.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163hrmmzrzc.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163praljrzo.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163opszsqyl.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163qrqutmeb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163avaklpcf.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163kaugnpdd.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163rdxgdrwa.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163bmjrfmzb.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163qkkvkwba.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163wnlubhts.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ycqgyjwi.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163oorrjsyl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163fptdkqaf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163bstfbjdk.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vungmtvz.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163apuznrcb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163zxgzxvzf.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163smhnphzo.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163moehdees.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163jwlvfalj.html

================================================================================
来源：http://www.aibaodan.cn/163bdqgcsly.html

P. 常用工具函数
来源：http://www.xuanzx.com/163mreytptz.html

================================================================================
来源：http://www.aibaodan.cn/163yuxfemcz.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163xpxepdli.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163smkmljvd.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163urhijcpg.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ijramihe.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vrlyancb.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163iumkxpvy.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163zmkwvlhh.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163mxujkjbf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163bhphjnpy.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163nsmcodis.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163cpzgclhm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163yebamjie.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ribagzqr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163hwruqfqa.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ttrrqujl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ljsgwoej.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163edtzajrk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163olortjqk.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163fprwdpzm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163lvqatzxs.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163prjqdakl.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rhfdwexc.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ysfbnoxq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ishedzrp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ngwgybtq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163uyyfaxcw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163fpraxmwl.html

[P04] 求长度
来源：http://www.xuanzx.com/163qtaxknrp.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163ubvuinbq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163lqntpisx.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ttkgmdzl.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163sjcuzuya.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163izvgvfxb.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163mdqdpqol.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163buqsmwas.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163giqxzyzy.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163cbbpbuvt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163lvlnognl.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163nlbgjymz.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163txkjazyx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163hbcrdvmg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163uzsrbrxf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163lprmlzzq.html

Ruby: a == b
来源：http://www.aibaodan.cn/163wwhbduaw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163xctxrbkn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163xenwaynm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163gqufgrvc.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163diwbudxc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163giduhfhy.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163lppwmtxx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ahipjdrr.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163wudkziqy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ufqxuwwu.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163auqgxvqm.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ktecthyv.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163yjgrentc.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163cwobxscd.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163daelvvou.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163bdqvoueu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163estrtjop.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163zgfiitev.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163lxmgugna.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ersfwqkx.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163hvcqafsc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163vnkmiibi.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163lqyovwgy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163byhujwtk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163xudxrmiy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163zpcaqbst.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163jlsngkml.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163pchvtdub.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163nhxxslit.html

================================================================================
来源：http://www.aibaodan.cn/163lguhzneg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163hcjfqsyr.html

================================================================================
来源：http://www.sxryk.cn/163iigmzmli.html

[Q01] 创建表
来源：http://www.xuanzx.com/163gztfszuj.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163wxvhqdwe.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zlloqzyw.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ghjegkih.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163pfseoqkm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163rrsgpqyn.html

);
来源：http://www.xuanzx.com/163fkzeznvw.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163kfqmeske.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163tviedsph.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163cchmjxoo.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163llluazgl.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163vbjkoalw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163crsgpoxe.html

);
来源：http://www.xuanzx.com/163hmssxedb.html

[Q03] 增加列
来源：http://www.xuanzx.com/163cmblnblm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ppsvgput.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163lnaisgqd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163cqhgktjr.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163qclywuav.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ixkiasgz.html

[Q06] 删除列
来源：http://www.sxryk.cn/163qmijoutf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163dqzdochc.html

[Q07] 删除表
来源：http://www.xuanzx.com/163suyksaju.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163hkzjvolc.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163qmmbisxj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163zvvfjjqa.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163cwwouole.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163xazeekgo.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163jvzwxsts.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163pijhfjdp.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163dgudghcv.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163htefjzlj.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163awidvcnd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163lftunidz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163amzibvwo.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163spsjonet.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163vkfrenju.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163tqkonotx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163tibschjc.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163mileiyud.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163dgblvbbu.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163nqecpykk.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ulrgxoqr.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163mynqfhkv.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ccgaggaw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163jaughzlf.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ufsbukcd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163uteysmqv.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163owhdclms.html


<!-- 参考信息 -->