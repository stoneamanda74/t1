外链999!wailian999！

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163ieulcsft.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163yerzkbwd.html

Py:   s == s[::-1]
来源：http://www.xuanzx.com/163tswuekjj.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163sewydcxp.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163udpdgzvh.html

TS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hcpneyar.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163vxedngmo.html

Go:   // 双指针从两端比较
来源：http://www.xuanzx.com/163ojxnxbdb.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163kdzvlrpq.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163kybhpbix.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hqoqrfbh.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163aszjgzrn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163mlpmblfv.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163uybudoeq.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163mrehzrjd.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163cehljqua.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163gfxaogrp.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163uqwvexot.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ngtoeqws.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163feiawebs.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163euktzebh.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163grwnngnq.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163jfnngtsz.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163cpuqspvy.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163imxysikm.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ccmmmrqb.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163ictjqzhd.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ptvnxojo.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163mneznubs.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163cyijdivt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163whkpjiad.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163vaiuswgl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163lvauzsyp.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163gobypufp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163xebkwlnv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163ugrpbzxt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163ualhesnx.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163ktzrrqkz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163tqsdzwid.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163iitkoavj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163ledtudtu.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163pkiwgnvm.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163eavpccvy.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163yfsoqmhr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163qbxpzwns.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163zsvjavtv.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163uybtmris.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ntmsfzbi.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163uncwwjwc.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163qusczdgl.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163oohhjnts.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163xnsoqloa.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163vxumihtw.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163emjwakgc.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163wdkvrwme.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163jtmdxwos.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163aabpsfzg.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163hiytletp.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jqkmmbva.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163xnlpqaiv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163kxojxkst.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163otjmmutz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163yccpqusa.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163nxwgfixw.html

================================================================================
来源：http://www.aibaodan.cn/163tetiwblv.html

O. 并发与异步
来源：http://www.xuanzx.com/163lvgumhpg.html

================================================================================
来源：http://www.aibaodan.cn/163pmskywyt.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ordxsgbh.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163pmrsdamu.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163ndsbzyod.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ahpzfimc.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163rdfqzurw.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163gkbqogxw.html

Go:   go f()
来源：http://www.aibaodan.cn/163tyodihpm.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163dlazxxye.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163iykpawhx.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163atekdhgx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163uctokmmf.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163ewienojq.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163xmottmrm.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ciburtbm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163akikzlvr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163kqcqvnij.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163omerfluv.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163dqekhvzo.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163cvqxwtau.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163zvwvxfnf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163ijvbdtxv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163rqkdhmyx.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163scfzjxlu.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163fbfemizm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163yvniutkb.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163rumirhyf.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163ziejpoee.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163wfmvagxi.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ytsmchkr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163cflkssvj.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163pdhackwq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163xbrjitcj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163wuybffdt.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163zijyddpf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163rujjdmci.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163uapuiswm.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163zwhmtctt.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163grtvreqf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ahyyqxit.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163uawnlgmw.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163voyzcdcc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163tcidacrv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163lfrzrdxw.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163zfhyqctt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163xnojenbx.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163umatzbil.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163xqhstwid.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163stjkeyki.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163uvphefcu.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163epfusxbn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163krgamwhi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163bkwutrbw.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163zungkvgs.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163fshzypte.html

================================================================================
来源：http://www.sxryk.cn/163gxdkdnca.html

P. 常用工具函数
来源：http://www.sxryk.cn/163nsivhidm.html

================================================================================
来源：http://www.aibaodan.cn/163yuagcjlo.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163ziwvgzho.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163zfecppjl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163cclfnajo.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vdcgxdxb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ljtehtzx.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163whwlpjbw.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163odbeonig.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163yzilzaho.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163cxkmibeo.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ojcesiye.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163xutytptu.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ervxxnvi.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163kigkxxef.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163hdgabbzy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163wwufoyro.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163lxdldjzb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163utqycbda.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163ybsbddhr.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163gdwknqib.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163krtwqkwh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163szvesfpr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163qcwpxiqm.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163redwxqlz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163vdqslelf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163pvbkkiud.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163nyxounxb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163gnymzfnj.html

[P04] 求长度
来源：http://www.sxryk.cn/163ndjwvohk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163lszqrkdd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mugkwqtg.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163wrvmbqud.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163umdrrdol.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163ljcgjmuu.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163srxxbust.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163tgoaypry.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163ftttomea.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163wstterjq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163iprmogky.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163fjttzgeg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163wekayzuo.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163dywblkdu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163mtkefslf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163sxwgbkzz.html

Ruby: a == b
来源：http://www.aibaodan.cn/163uaaahxji.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163hcvnnmvy.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163rvprasen.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163trivetdu.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ztyrscpe.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163eftofume.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163cfcnfkqy.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163cnfulxwh.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ochqhdwz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163ztgbyano.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163onqwftti.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ehdbyhew.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163hzlyaucc.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163yexsntmm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163lgofdisd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163psrxdvrf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163pmjzaphh.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163kntsgzrp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163nantjwtd.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163eytnknvg.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163xpqgauea.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163npzwwabe.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163zlrsaryj.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163unkdyvfr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163togsstbi.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163mpcvbgvu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163inmsngvb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163wlmtguwl.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163rwgxgfvv.html

================================================================================
来源：http://www.sxryk.cn/163xjongmyv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163hlvxmerc.html

================================================================================
来源：http://www.xuanzx.com/163culfkovi.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163gvlrlqrn.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163upltimhw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163zchujbul.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163oonnggbz.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163fdxndzjo.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163axnosnse.html

);
来源：http://www.aibaodan.cn/163rrgllbom.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163esbqwemk.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163muubucyb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163dofswgsn.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163lymqzxtc.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163rdoxgxzw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163uwqugvcc.html

);
来源：http://www.aibaodan.cn/163jqulabmy.html

[Q03] 增加列
来源：http://www.sxryk.cn/163yyibnlpm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163pzbejngd.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163ifzgvkul.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163arsozmty.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163kxojjiln.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163rferdxzc.html

[Q06] 删除列
来源：http://www.sxryk.cn/163lsoqshvn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163dwltiiot.html

[Q07] 删除表
来源：http://www.xuanzx.com/163vakzgela.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163qnavhvkk.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163vbxzhjjc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163lqncnwoh.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163tdiubdvq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ydzjrnhp.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163lkhvgakj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163atbotwox.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163krxfnzdz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163aovrunsp.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163pbysbnru.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163xzgnyepp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163rkrquwhv.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163lmwrlwka.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163zxlzfqee.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163bjtxvgus.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163lfubdbya.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163tggkoubx.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163pxqiacza.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163oflmwnnk.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163iqzzefbu.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163gjstbqcy.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163mvtsxcjc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163tygfgrui.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163sjkrirax.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163mftinber.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163fryabuqh.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163jrxalfzt.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163jcylhuuq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163vaaxgjjs.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163mugncsdb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163xerieklv.html

[Q22] 排序
来源：http://www.aibaodan.cn/163jzegbvxd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163gpblqwqe.html

[Q23] 分页
来源：http://www.aibaodan.cn/163sgkexxph.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163mnahgwck.html

[Q24] 去重
来源：http://www.xuanzx.com/163djsbgnxx.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163vahziubf.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163umcoftvg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163dcnvqncv.html

[Q26] 计数
来源：http://www.xuanzx.com/163jigrbceo.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163kosjnxtz.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163oflrtack.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163mykblvpd.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163oqpozdca.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163njxlojzr.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163sjqafjtj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163sabciftc.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163lgbdeqcr.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wiocihsb.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163gibjbopi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163enulmgji.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163ojggxomt.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jijudgya.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163otfakfwj.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163parpurzx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163xvpmogqx.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163dgcmkyrl.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163fikeijqo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163hrxsopbc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163vlozwafh.html

[Q35] 内连接
来源：http://www.xuanzx.com/163jlwdaimh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zgcbiflc.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163dbcnrvai.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ezbagade.html

[Q37] 右连接
来源：http://www.xuanzx.com/163pwvvunuq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163pkxpkrvf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163kgfgefqf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163bosvpmks.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163puufefoj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163zscjnncm.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163rgiptzmf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163tfoknieq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rgikztvt.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ahpblsuu.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163jbxthjhy.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163tzvcpqcp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163spjyolgi.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ppgkemfs.html


<!-- 参考信息 -->