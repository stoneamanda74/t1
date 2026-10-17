外链999!wailian999！

[N05] 最大公约数
来源：http://www.sxryk.cn/163dadiffyl.html

Py:   math.gcd(a, b)
来源：http://www.aibaodan.cn/163mqnezwua.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163gzbwcovc.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163cwtqucyp.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163bvffolju.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163fvtekcaa.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163uikyckqf.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163rcvcvtya.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.aibaodan.cn/163lrxegyad.html

[N06] 判断回文字符串
来源：http://www.xuanzx.com/163tigynoxk.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163ytdmwpvc.html

PHP:  $s === strrev($s);
来源：http://www.sxryk.cn/163vewwrdzz.html

JS:   s === [...s].reverse().join("")
来源：http://www.sxryk.cn/163phkmuqxb.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cyfrttok.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163karrxbdt.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163jzmnalor.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163xzhyhktb.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fkczihtm.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163qlikeskj.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163mnsjwgsn.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163alqexchx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163lczfibsy.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163jxscidis.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163sytjowyv.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163tevaglaa.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163birxkhjq.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163ivjfxyit.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163cwvmuhhh.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163eequlqey.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163kqjeprad.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163nwjumkrb.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163jqugztmc.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163ddsdwzbl.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dlqwjxal.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163ldgshuph.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163mtzmmqka.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163vczusvkf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163efqucwqa.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163nzgtlsda.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163edvylqgh.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163cthtlrfn.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163qbmeyhrk.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163vrtdmvez.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163wvpmsnvr.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163fflxaiyt.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163erzmkbsi.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163qfkvdklg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163lyqrzono.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163ssutoblz.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163nxriflto.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163ahenamlx.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163zsmyzzav.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163jqugphal.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163mznitbfg.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163owoohizl.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163peiklite.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163jxohxpnv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163kdxpdwsy.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163gvsrvtnu.html

Java: // 手写递归
来源：http://www.sxryk.cn/163mipdpcfd.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163fjzlrttt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163tlabwdgm.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163vvjlmwcq.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163jkuclrbw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163gxdancfy.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163kfqdrkaz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163etyomnhy.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163kavvmenu.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163driwhqnv.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163hhxddaty.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163lnbtaher.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163hitiknqn.html

================================================================================
来源：http://www.aibaodan.cn/163gqplmehw.html

O. 并发与异步
来源：http://www.xuanzx.com/163jgpaqykm.html

================================================================================
来源：http://www.xuanzx.com/163zfoghqve.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163oqmhjfgx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163cxwqzoux.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163cbnqmewm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163yuirqqap.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pmixlmdt.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163vpxnphft.html

Go:   go f()
来源：http://www.xuanzx.com/163edbzsnnp.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163lhmlsgso.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163fmzcqudd.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163yoyjgxbg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163qdvasnna.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163lawhnlck.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lbvahjwj.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163hpwtrmsk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163cmycvgqn.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163pijxuzih.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163wtuwqzmm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163cfxqeblc.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163uofilbkg.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163kuheaork.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163gmhcnhgz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163mmovbubq.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163zndzlime.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163pqgsjlwa.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163uvfdlaan.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163yxnznpxn.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163ymejqxgf.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163lkjsgtnx.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163mnygwlkh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163zhynhinz.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163xepvqdkp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163lrusmifz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163ofahooer.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163lvadmllg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163tepmyhsh.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163sbcxwxyb.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163bjhbyrbf.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rrrfdmnd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163cmcyvfum.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163dpldlqgt.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fpxsuhkx.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163otqktszj.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163snazsjzt.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163vqwmvnuy.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163wypbwgtg.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163jmfdimuc.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163gddwcdyf.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163tckzbbej.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163czdoxrys.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oboalhkn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163beeyprod.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163gpvkizuo.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163wknbkfwy.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163uadjfknz.html

================================================================================
来源：http://www.xuanzx.com/163vkeclzqk.html

P. 常用工具函数
来源：http://www.xuanzx.com/163uridegeg.html

================================================================================
来源：http://www.aibaodan.cn/163wwvqbfmi.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163jegvvqan.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ffhdatdk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163yvbymtwo.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163jbglkhow.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163eukhcxmc.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163esmbdrto.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163mmmagdwg.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163dhpjxioy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ouoywbhu.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163pqpuucrf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163cvyywzbn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163oxlouqok.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163roqikzfs.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163sfmlcxbi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163pcihiaef.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163hroamybt.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163fiakyulz.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163psxtmecj.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163dkukbiqa.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163nxicuqoz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163qypflxxo.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tdwqisss.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163thmjlfcw.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ufcrkvbx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163wrvhvtto.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163yvwduwmy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163bhobozyh.html

[P04] 求长度
来源：http://www.xuanzx.com/163erflfvfy.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163xhmtjonv.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xqkcahve.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bemxwwyx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163jykqwupo.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163bvicjejp.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ndsrnkbh.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163hbfaieue.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163drwnvlos.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ytfcfjsn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163gsircecx.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163dnjqmuiw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ckjgkkdr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ryjtaxcj.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163urpykiuq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qngjqmit.html

Ruby: a == b
来源：http://www.sxryk.cn/163cnyksgdt.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ftztjazg.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163fwumxkff.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ghprapwi.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163oroptnav.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163rmbbqzmx.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163aazsvkwq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163faepkiey.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163dfydhjro.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163mcpmoivn.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163opgshvqv.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163vqutohem.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163zjmrdutp.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163dvtzvwte.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tvbtfcyd.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cslccvii.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163vkzdkbwq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163stxvfgka.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163wqabdczf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163zsqtjfbt.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163gukiyddh.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163nyodqdhh.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163eobyvwjt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163vdsorrmr.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163kphatklx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163pjmrvtrs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163kzpavuit.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163kxkuhmor.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163sayxkjbv.html

================================================================================
来源：http://www.xuanzx.com/163zrupjyjo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163nctsfybj.html

================================================================================
来源：http://www.sxryk.cn/163mppffawf.html

[Q01] 创建表
来源：http://www.xuanzx.com/163vlxxpuoc.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163jscmqkih.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jfcjefmq.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163xxrcpnro.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ooollmkq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163acnetznj.html

);
来源：http://www.xuanzx.com/163oylzvdro.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163firdvmgd.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163hhnqxpmb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jdulwrnl.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163oibiteuc.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163erxcutrx.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163wujehqnp.html

);
来源：http://www.xuanzx.com/163seejficw.html

[Q03] 增加列
来源：http://www.xuanzx.com/163xspajady.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163yjglhrxu.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163fxzgikde.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163isuesymz.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163obwamkqr.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163rypwcyub.html

[Q06] 删除列
来源：http://www.sxryk.cn/163xqiftlkj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ckhyirfv.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163hujfioit.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163cphfpfuw.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163wgqjkpgg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163awdkmntj.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163gtwjisur.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163tarjkwyw.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163guzodigk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163uksbmwee.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163uqxptcya.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ywpgkjjr.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163vgpzpcfp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163qeviidet.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163qhyeqwxv.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163vjmiuuyb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163gtznxfky.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163qxrkqtov.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163rizektbw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163pgqlseps.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163qegpkmox.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163equnorye.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163jhrkhgwq.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163lopfyjrm.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163xeitwgqh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163kusowdtt.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163nmivwogf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163povkgiad.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163zntjppph.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163lyvuoqrr.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163wejyrqpa.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163schghtpn.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163bxpissfk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163znzasxdr.html

[Q22] 排序
来源：http://www.sxryk.cn/163svrtvkkl.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163lehnemet.html

[Q23] 分页
来源：http://www.sxryk.cn/163csdxhkvj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163tdafdmfy.html

[Q24] 去重
来源：http://www.aibaodan.cn/163xooahwoa.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163nozartkn.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163zitshznz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163fjpzcpbf.html

[Q26] 计数
来源：http://www.sxryk.cn/163crzmrbhn.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163kmbjhkpo.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ceakfjps.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163lqnstobu.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163chruykky.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163vqbycvwh.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163oosdouif.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163wefmyjbn.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ddfsmtuy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vybjbylc.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163fgocjsaf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ewlyutdt.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163sttplwry.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163yzzphwyp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163tszueexl.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163bysqfhmq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163pnhcpaeu.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163wzeauffp.html

SELECT * FROM (
来源：http://www.xuanzx.com/163hatxmbqp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163xsatzxpl.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163fweextkn.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163sacgcbdr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cqoatcii.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163kralwmfv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ccbvrrjo.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163wbpgbvad.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163bdqhdxqz.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163swnuiazn.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163llpnxbiy.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163fqvhrnjk.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163wlhhlncl.html


<!-- 参考信息 -->