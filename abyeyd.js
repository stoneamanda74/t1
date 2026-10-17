外链999!wailian999！

C#:   Environment.OSVersion;  Environment.Version
来源：http://www.sxryk.cn/163tvwjwamo.html

================================================================================
来源：http://www.sxryk.cn/163khyalnlm.html

N. 数据结构与算法
来源：http://www.xuanzx.com/163delcvbje.html

================================================================================
来源：http://www.sxryk.cn/163qbvyzope.html

[N01] 二分查找（有序数组）
来源：http://www.xuanzx.com/163urmtljpy.html

Py:   bisect.bisect_left(arr, x)
来源：http://www.aibaodan.cn/163ksosjsfl.html

PHP:  // 手写：$lo=0; $hi=count($a)-1; while ($lo <= $hi) { $mid = ($lo+$hi)>>1; ... }
来源：http://www.xuanzx.com/163mptsqgbk.html

JS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163pbvxtjne.html

TS:   // 手写：while (lo <= hi) { const mid = (lo + hi) >> 1; ... }
来源：http://www.aibaodan.cn/163craqoexk.html

Java: Arrays.binarySearch(arr, x)
来源：http://www.aibaodan.cn/163rpmwshhb.html

Go:   sort.SearchInts(arr, x)
来源：http://www.aibaodan.cn/163psvfzoko.html

Ruby: arr.bsearch { |e| e >= x }
来源：http://www.xuanzx.com/163rnpuehep.html

C#:   Array.BinarySearch(arr, x)
来源：http://www.aibaodan.cn/163ttoolwqk.html

[N02] 排序（工程实践用内置实现）
来源：http://www.sxryk.cn/163psifhlkg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qswgxklw.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.xuanzx.com/163xubwizeg.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163yzmtescm.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163ehkpinlg.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.sxryk.cn/163upiccllm.html

Go:   slices.Sort(arr)
来源：http://www.xuanzx.com/163hutpwtck.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163dtwdmqmw.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.aibaodan.cn/163ejlxgksu.html

[N03] 快速排序（分治示例）
来源：http://www.sxryk.cn/163gwspecnx.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163sdnberfq.html

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163ulxkxcfc.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163gewppfjk.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163obvjowom.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163dwyuxmaf.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.xuanzx.com/163iliarikh.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163zmsopqss.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163apquwlpu.html

[N04] 斐波那契数列
来源：http://www.aibaodan.cn/163icsogyod.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wewjdbyf.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163ukeurybr.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163grgkqbko.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163khnkyzei.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.xuanzx.com/163fhzbvalj.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163cmttkqql.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163cbdhhyps.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163vysuvkpd.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163zoilejmg.html

Py:   math.gcd(a, b)
来源：http://www.sxryk.cn/163jheyipeo.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163iridttgs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163qfuuhqbh.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163zszleqlf.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.xuanzx.com/163ftzvfpmd.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.xuanzx.com/163lofdpoxv.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163miyscjns.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163yofsmdfy.html

[N06] 判断回文字符串
来源：http://www.aibaodan.cn/163rqbzrnrm.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163jhgfhrkz.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163mpypvwxl.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163uyqwzvui.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hktnhdjj.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163wbsdxhhu.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163snpeunjv.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163ummpgnvk.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ndxwuism.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163wpvdssbu.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.aibaodan.cn/163dbtafjoo.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163kzuzsdkw.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ieulzvca.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163zbqfyylu.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163qpzoeucz.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163uhjunfdc.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163ztaxajlu.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163ylivavrw.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163xxhzbwdc.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163ghivydct.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163rklhfxrv.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163inixebpm.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163xaiyzxin.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163bdqggksv.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ouecgjav.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ujelmtuy.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163potzimlz.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wphpkhhs.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163udyivmok.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163riuyirvn.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163qpoufejj.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163woshrweq.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163nmawiesg.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163qhkmfnhx.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163izkcwusw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163rcyvwpzz.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163ywgjmoty.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163vvxngign.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163ovekkyou.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163qwwqegze.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163tfshuumy.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163mqwfbzxz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163vcfufbby.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163jizcqqfx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163voboiraz.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163zncfibaa.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163telcaxhy.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163rshzcadf.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163ctyudkgs.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163dplwaujx.html

Java: // 手写递归
来源：http://www.sxryk.cn/163dfytwxzj.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163lycfilrv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163phbbwrog.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163pjvgaftl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163gbghkyaf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ztbzkaae.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163qgiqvzxx.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163jqpfhdne.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163upkopzmy.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163pazxeiua.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163dvjmcciw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163orzotkmd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163fdlmfigs.html

================================================================================
来源：http://www.sxryk.cn/163pregafrz.html

O. 并发与异步
来源：http://www.xuanzx.com/163amypuoqs.html

================================================================================
来源：http://www.xuanzx.com/163xdmsnrce.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163wdxtfzbx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163egkilvzz.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163umcwjkje.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163dlauvxnl.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uanxbxuh.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163azqhxrwo.html

Go:   go f()
来源：http://www.sxryk.cn/163ihqbkfeu.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163efongppj.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163dttwdylk.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163amytqquv.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163wxgsngaa.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163fzphkund.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163kxewcsyb.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hyuigljb.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163fovcxpeg.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163vahchbhv.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163kgocmvbo.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163awrfjeah.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163vspifbvo.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163cgwatryq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163okbkpued.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163kawslffc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163jblmuhku.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ralajtwy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163uhbhonjd.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163jnnmtkrs.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163jhyjdxrf.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163rotlxhtm.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163pyqalzbb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163fswopqhy.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163trcyhllb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163satksefd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163qdsmdptt.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163tikbpknc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163zokgbjri.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163zyrpewjm.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163dzbsqirf.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163jojjgzjp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163laivdynr.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163zdxmfoff.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163nddsbkmt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ozuaalfv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163dzolcfro.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163zsfiqgnc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163bgzbbxbw.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163nbddipaz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163jqvspsaz.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163mmbojsbd.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163vezqvhbx.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163jahpzmba.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163sxdxkqvd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163vsrjibry.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163eueploab.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ahsqckik.html

================================================================================
来源：http://www.xuanzx.com/163pqqraauu.html

P. 常用工具函数
来源：http://www.sxryk.cn/163zagzlstr.html

================================================================================
来源：http://www.aibaodan.cn/163kkbuldhk.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163yvqnwamd.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163baialfmx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163qhrlscrw.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163luxmryvj.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fgymfiut.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ogaivmsg.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163kpyvhira.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163fubpztqo.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163khehdabr.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163lnprxqqn.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163xomlsqey.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163qjahivoe.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163slohvfbv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163xznhjvyc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163qaxoifup.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ldantzfe.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ygrxykhm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163psovsxlk.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163hkohplca.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163rceqkflf.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163aycuguir.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ypxieyxd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163sbriznso.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163lsshqlpo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163rtkxkouk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163acjcvuut.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163rypnptzx.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zdiznzbd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163owkrddyp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wriyrjni.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163lrhkaulg.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163edubdjtg.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163lomwactm.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163dqwplclc.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163ducpnqia.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163xrtwuvck.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163qabvpytb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163iypfabxs.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163apidhnej.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163rlnariue.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163xrjwvfeh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163efhfajkd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163oinzjvgl.html

Ruby: a == b
来源：http://www.xuanzx.com/163hppklxae.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163fpnszbmy.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163vjmccyxc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163fxzzhklo.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163paoxvwhj.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163kvtgmgdc.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163kersjrgf.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163oaajiwsr.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163wvhqsxgc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ezjwtyng.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163icsuqode.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163rjetsvis.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163wmlvboqo.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163njyupfjh.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163mlxqyxvo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mmwedggt.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163fjjpbkdo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ywlgzpdc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163fnywkkhc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163dbslivzz.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163svywwhoc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163lvofuvkf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163gvqcgazy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163mvrrpcke.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163pvoebyrd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163bqrdiezz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163yctwydpc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163jwzauahf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163obzqujud.html

================================================================================
来源：http://www.sxryk.cn/163vwapkivx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163eihhkawi.html

================================================================================
来源：http://www.aibaodan.cn/163kwlfvbay.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163hmcibahq.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ghwbshpr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163dmyasicf.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163vwqlawzx.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163czicdurp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163vycbyejy.html

);
来源：http://www.aibaodan.cn/163utstyeyf.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163xxhdzxlf.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163qlalqfop.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ocjpnzpa.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163vxdpalxk.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163qcnesviw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163mmwcmyvt.html

);
来源：http://www.xuanzx.com/163ovrwphfv.html

[Q03] 增加列
来源：http://www.sxryk.cn/163jvombipf.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163asfeznrp.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163wayvwxzu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163kiwxsolj.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163cmpmelbj.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163pvutswgq.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163bpmijzng.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163jirnxack.html

[Q07] 删除表
来源：http://www.sxryk.cn/163lmpnqlfg.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163whhituwi.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163leqzbtdx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163qejblmxh.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163qthqqjbn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163fdwfbgzu.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163kpriurmn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163polrumvo.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163xutemksd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163waxnxndx.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ptlouptv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163mpidhdvz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163lbjaxayu.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163klvazsaw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163tfdtgqzl.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163sduvuwdz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163syqldxjd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163bwkinbem.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163mbbpwabp.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163rxhasqhn.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163mjsjpnth.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163hrzjqhma.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163ldymxkgz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163zaifnlem.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163tvccxvwa.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163rriniyhy.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163exkbmzag.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163omzdrxsu.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163pikorpvr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ovsqpnuy.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163bzeebwgh.html


<!-- 参考信息 -->