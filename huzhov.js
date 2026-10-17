外链999!wailian999！

C#:   Array.BinarySearch(arr, x)
来源：http://www.xuanzx.com/163nmeeaiyc.html

[N02] 排序（工程实践用内置实现）
来源：http://www.aibaodan.cn/163jqrcgqse.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wwatiubp.html

PHP:  sort($arr);  usort($arr, $cmp);
来源：http://www.sxryk.cn/163ipbirmiy.html

JS:   [...arr].sort((a, b) => a - b)
来源：http://www.xuanzx.com/163hkipigqi.html

TS:   [...arr].sort((a, b) => a - b)
来源：http://www.aibaodan.cn/163rrbnmzee.html

Java: Arrays.sort(arr);  Collections.sort(list)
来源：http://www.aibaodan.cn/163uabjhcjm.html

Go:   slices.Sort(arr)
来源：http://www.sxryk.cn/163keuusrhp.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163cpbxucny.html

C#:   Array.Sort(arr);  list.Sort()
来源：http://www.xuanzx.com/163fnbeufvm.html

[N03] 快速排序（分治示例）
来源：http://www.xuanzx.com/163zbidlewt.html

Py:   def qs(a): return a if len(a) <= 1 else qs([x for x in a[1:] if x < a[0]]) + [a[0]] + qs([x for x in a[1:] if x >= a[0]])
来源：http://www.aibaodan.cn/163aimyfqtq.html

PHP:  // 递归实现，或用 usort
来源：http://www.sxryk.cn/163nybbrijf.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.xuanzx.com/163aufyplcy.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163eixreomd.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163agapfxoh.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163pgobjztx.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.sxryk.cn/163cxeudgpk.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.xuanzx.com/163ljfoivjt.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163nqvxohak.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.sxryk.cn/163wfvbcahs.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.aibaodan.cn/163mwrevdek.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163hqomtsty.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.aibaodan.cn/163qmitckmz.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.sxryk.cn/163tzxtopsp.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.xuanzx.com/163gvlbydkb.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.xuanzx.com/163lerkxong.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.aibaodan.cn/163wcbwbysr.html

[N05] 最大公约数
来源：http://www.aibaodan.cn/163mocspmyl.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163nfxvwsbe.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.aibaodan.cn/163zclxofgs.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163goegfydc.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163xpzdtcnr.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163hokitffp.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.sxryk.cn/163maawuvsw.html

Ruby: a.gcd(b)
来源：http://www.sxryk.cn/163qixrvhmz.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163qlxbbulk.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163yawdnxwb.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163mvoslsiv.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163ptkofvww.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163ndixlorj.html

TS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163szoleqwg.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163vljiivpa.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163gojlkycz.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163vyjkjfzx.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163wcozvgjo.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163jdpbvauy.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163lmifnimz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163dvyawgut.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163rkftsooo.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163frflwstc.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163snjtdueg.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163huwyaygz.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163xqwuvvph.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.aibaodan.cn/163ewinawjx.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163xmhhowqx.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163nyhqbnsz.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163oiucnufn.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vztessab.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163kewksahc.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163mcuyagcj.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163qkwcskkt.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163gtkzgogc.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ctlrmmsd.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163iqbufcih.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163vlroeknw.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ulyqayys.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163ghoktciy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163rpkvcttm.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163espblnfu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163wonigkbc.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163exeaqiaq.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163sldpyhku.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163copotzbw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zeciuzih.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163arlkefsv.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163iotwtwsu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163bzddcarb.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163jskmraph.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163mixrnqvc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163plilynwg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ljamthpx.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163nckwuuda.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163nhzxneee.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163bknznzsb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163obmguczi.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163cfgahdkc.html

Java: // 手写递归
来源：http://www.sxryk.cn/163eehwxfpb.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163scfkezrq.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163etmwcegy.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163yemitodg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163wspftxls.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163yervowja.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163mvrghbbh.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163apukokgm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163ysdapdus.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ufnsnbxn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163uydlvccw.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163xsiafzad.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163ypemhbcm.html

================================================================================
来源：http://www.xuanzx.com/163cpduhiqq.html

O. 并发与异步
来源：http://www.sxryk.cn/163maiwszry.html

================================================================================
来源：http://www.aibaodan.cn/163mxpbonej.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163ahzznmxf.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163jfokggsq.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163jskwbpbg.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ytavjovo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tbqjjdeu.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163ekzcjtco.html

Go:   go f()
来源：http://www.aibaodan.cn/163glmshoim.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163aqkkvlrc.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163omimkxcd.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163agnejpni.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163teripqhy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wargmpdd.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xzplsnbd.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163eqakgwbz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163ljxjwpms.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163lxztczqj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163jfqsjopy.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163olkhtvat.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163mvmgrsoh.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163bhwcnzea.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163wkcuokhd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163asrjfgwe.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163cyuttele.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163dzxbgteh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163rfbjwwxj.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163irtbcahn.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163dcbkbuvh.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163djoiwmhu.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163sunjwhxs.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163tkftpihm.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ioxqekyh.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163wpeegubs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163bzvayzhx.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163abkbqmnk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163nhehiofe.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163dkczwcww.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163lplpwtdw.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ocqxgkhz.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163fnewueiv.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xwkyqofr.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163sdaeugrb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163qeinoqwh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163mtizaqbj.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163tqqlddny.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163dxqnoyqf.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163ziimtpeo.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163gxasvxdb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163rtyaxhpy.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163eksjdveb.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ysaggzix.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xafqnpum.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163fgbyirea.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163fqyqaenn.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163iylimeue.html

================================================================================
来源：http://www.xuanzx.com/163urwjojia.html

P. 常用工具函数
来源：http://www.xuanzx.com/163zwomjfhe.html

================================================================================
来源：http://www.aibaodan.cn/163bhpylijk.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163zhkbqcxi.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163pkkyhmrk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163zvkhezpd.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hxndjhsn.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163dbwnepli.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163uvdvkvjp.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163skyhzgvp.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163kjatvfey.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ywngbzbr.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163wtxmshjy.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163fiirrvph.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163sxydrkbf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163oeyeoqup.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163bkvadocr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163iifeijyc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163acuusfcv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163cyjkresh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163wllbamwn.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163uxzvuaok.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163nzvqokdd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163lgtqvbye.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163cbdnxzym.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163cotugcjf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163npxtevor.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163jxncglbu.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163vxbekkar.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163kwayorzp.html

[P04] 求长度
来源：http://www.sxryk.cn/163gbzypcex.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163rrgdazbb.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163xkjfhcls.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163oqvasuen.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163lkfsqedw.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ggxvxnpd.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163vgxeswcx.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163goxuhans.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163gweklrek.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163qylxljwt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ecgtdgtx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163armntwwu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163fbtxlyga.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163tsefubyc.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163atoryyua.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163jgfoulej.html

Ruby: a == b
来源：http://www.aibaodan.cn/163dtycaokn.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163hqbghpku.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163bqbbcrkk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163huccglgi.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163euslmhyu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ftpklfdz.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163bjqtgodd.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163nsaludji.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163uunytsag.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163doraiokb.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ncwtzztg.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163xdfulcic.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163auqwrmkt.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163nepvfohy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163cggpacho.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163oalqawlg.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163jerkgtda.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163jfvkqjzx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163hepwakth.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163dyvntwml.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163mkemrsci.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163xowylqle.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163qenuodqb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163swpjqado.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lwpuevdb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163cssbvoii.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163nnylzpyv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163ojcoqwtz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163nqowlnjf.html

================================================================================
来源：http://www.sxryk.cn/163uboqjkru.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163jsluomxd.html

================================================================================
来源：http://www.sxryk.cn/163vhfhsbso.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163mzskynsr.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163hnxelmgy.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163sihmdqlg.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163tfkavxuu.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163whiepmwv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163dndgrqot.html

);
来源：http://www.xuanzx.com/163iappzddf.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163jufmdffw.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163lzntxcgt.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163wolgjcpr.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163fxzbmdvb.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163xiafwazi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163wgwthnkx.html

);
来源：http://www.sxryk.cn/163sultwhff.html

[Q03] 增加列
来源：http://www.sxryk.cn/163rruwmyyi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163fidiiukk.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ceipious.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163enhffyrc.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163sabiqsks.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163kiwiodfy.html

[Q06] 删除列
来源：http://www.xuanzx.com/163ajkuptfz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163gmgxacjj.html

[Q07] 删除表
来源：http://www.xuanzx.com/163pwwpwzsy.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163savvqwte.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163tazgzrcj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163bzdlgpda.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163rdxpgloc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163labmkbey.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163nczapzlm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163baqjpmlm.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163vsabjiul.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163tsmntozg.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163sjfkjgoy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163kzwhacql.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ikcnnzlv.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163mhflgvrb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163wdzyvlwb.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163odmasuce.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163bibvtvrx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163pmimuprm.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163vnvdqcqt.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163gjipwglj.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163qkozhjfg.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163rybztfso.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163wvtfyazw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163whadzyet.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163hdfhrebf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163bzjclhem.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ewilpscc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163uwqgdxfb.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163cqatveje.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163denokwyu.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163zfpprrpr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163nppxxczl.html

[Q22] 排序
来源：http://www.sxryk.cn/163aspxjobh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163mykwfjnr.html

[Q23] 分页
来源：http://www.xuanzx.com/163zolouisa.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163pxtxwgpc.html

[Q24] 去重
来源：http://www.sxryk.cn/163fcurmhoo.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163jhcgffpn.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163lzabmzcj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163qwvcdzln.html

[Q26] 计数
来源：http://www.sxryk.cn/163toytyqhv.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163frjhmqse.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163wlnqdpqu.html


<!-- 参考信息 -->