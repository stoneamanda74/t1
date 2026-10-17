外链999!wailian999！

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163xmdfacat.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163uqzkxbxa.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.aibaodan.cn/163lumwhycq.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163wlzxgixv.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163xjuahxup.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163bdrucpqt.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163jemxbxht.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163hnertxps.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163unnfagez.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163wddqqolf.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163mwphxkyf.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zwduznyb.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163gepdvwpb.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163bzpxyfhm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163vvxojvdv.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163chxssxow.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163bhukupsi.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163ugeytwom.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163xubatzkf.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163mfgqhkln.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163wiymkeaj.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163gujhakpj.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163nioofpah.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163ewvfnkgw.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163omlhkqid.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ecclxzec.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163hvdamqlh.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163uydeyprz.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163ohjojikz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163qskedapu.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163nsmidxmn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163ipsxfnwz.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163qyllvijn.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163lbzufcnm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163nxjatnxr.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163vmzqkctc.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163mtnrwavn.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163dbkificp.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163nbywjuzz.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163wehqiosr.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163jhteptar.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163fehoeimw.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163zwgxsqkj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163plsroyxx.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163qmpdrflg.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163zysghwdf.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163tdkhseks.html

Java: // 手写递归
来源：http://www.sxryk.cn/163bynrubtd.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ankxvtqs.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163vtxqyqrj.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163hxvbfsfm.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163ydtbgufh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163hgxgsfvb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163mvyzvfbo.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163cesqindc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jikadlrb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163aplpxukd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163yodobatb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163gvffvxdp.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163szrijagx.html

================================================================================
来源：http://www.sxryk.cn/163npntslug.html

O. 并发与异步
来源：http://www.sxryk.cn/163dvtqbvzr.html

================================================================================
来源：http://www.xuanzx.com/163luybmypy.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163shiglrko.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163kybkkbta.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163lifioell.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163dcbhzxlb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163zexoqdsu.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ukmfujvz.html

Go:   go f()
来源：http://www.xuanzx.com/163xuxxnklq.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163kexlfbgm.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163hkxorrkm.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163daaqksns.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163rpxgnloy.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163whebznjv.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vfqwicbp.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163pzycxnbo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163oezrbjhj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163aoiiqqex.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163pgfqvsng.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163rdjwksrd.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163oxholrwk.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163ckheqqfj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163wtniltzn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163zyfhyxvz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rpdvizdy.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163pkkfnjke.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163yusrccmh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163bopjudmg.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163khzymibn.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163ccwcdazd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163bvjsbgwo.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163aoxzoqcr.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163fesagybx.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163lojdivqj.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163lmtdqjfo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163owzrdmfv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163fqxawazo.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163wnkhwnhs.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163metyklit.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163gnahefit.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163qpdtpecw.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163shbrumts.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xeuoojnu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ibvkmrjx.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163tsevonwi.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163zjfrqgqw.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163mrxenzvs.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163adbbtiji.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163bhrlwsti.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163dvkjqgih.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ppqddlwl.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163cduboezy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163upzkpdra.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163jtnjacog.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163qdkknght.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163kkktscze.html

================================================================================
来源：http://www.aibaodan.cn/163jfjbcapo.html

P. 常用工具函数
来源：http://www.sxryk.cn/163xmwapykd.html

================================================================================
来源：http://www.xuanzx.com/163ppekzqwk.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163oxcnidve.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ckmfrmha.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ujyzbgyy.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163rnzacaed.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163laqfylzq.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163pdufvgdi.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163lekrnggr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163agnjwebq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163nicvodtd.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163doelcogq.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163gtcgrcyz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163vtoeazio.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163mmuxffut.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ltynxnem.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163mgyworpl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163wrqewybv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ozcvannr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163cvddbdwi.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163dfmdytly.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163fhpogtqi.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163vfqbzrbh.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tvszxnbb.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ahcmafsq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163vzydziqq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163hptzmxjm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163eouyupsn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163lrokjsqd.html

[P04] 求长度
来源：http://www.xuanzx.com/163ijhjjwyn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163niiteqqi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163yleieibe.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163psxjnrdk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163usfztzzo.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163wwusozwn.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163hrfjahwg.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163nayfqzxe.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163pmsdrejy.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163vamvpzij.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163rxhnjodh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163qjtfwgjj.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163rmupffpl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163pfoexfco.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163urentbxn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163rqhuveum.html

Ruby: a == b
来源：http://www.sxryk.cn/163ljfubjnv.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163bknnolch.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163aasdadrb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163qkjhzonu.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ommblctk.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163lhphikii.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163odzviozw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163tjuqhrit.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163kwdzdbce.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163mdcnwqkj.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163luivaoha.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163mpcpjnky.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qjvwxqho.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163gwwsnwer.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gabmqjjh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gffzjjym.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163dlydayak.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163wrcsuhux.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163pccjdbpk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163omizarac.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163ourodept.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163tugcqish.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163iqibfxxe.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163bzwdspxx.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163xttduysy.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ohdapatb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163xvwasrwy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163egbaxjet.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163sioipswo.html

================================================================================
来源：http://www.xuanzx.com/163crykyuqy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163cjeqqtja.html

================================================================================
来源：http://www.aibaodan.cn/163vcqpmbdh.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ezyeygny.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163zzhescfr.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163izivgqvo.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163nffyiika.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163bdferxcx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163yxsqgzyl.html

);
来源：http://www.xuanzx.com/163nqycuxop.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163kxfsurpf.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163szapqtss.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163gqnvvoil.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163iiwpqykt.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163aeyuoode.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163edircoew.html

);
来源：http://www.xuanzx.com/163czhowvor.html

[Q03] 增加列
来源：http://www.xuanzx.com/163kqtautld.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163cypkeuja.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163eeqvaqfr.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ygzslbgl.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163kectsnyd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163swkrzmny.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163gsjmwmvt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163dbrbskjs.html

[Q07] 删除表
来源：http://www.sxryk.cn/163fbxlvgsm.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163xbkqvfdw.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163ldxdxvbc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163sglciydr.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163efsyvicp.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163exmlvuwn.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163lqdzzsqs.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163aqydljgy.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163vrylenrk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163iqealtse.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163iwzknyki.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163nvsrcccm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163qreiyqka.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163ecnijnei.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163eiytaolc.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163qozvwnrz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163kqruhejx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163zwxkoyis.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163nqrmdoud.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163sgkewuab.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163ljmazxzi.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ncompcmw.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163jnehhchn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163ftlazhzj.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163vtwlhjho.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163jayrtlgg.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163mocnzhzm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163wwkakhqy.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ypnkbcer.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163zcrsvtfv.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163mqzccxpq.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163uvjkojsw.html

[Q22] 排序
来源：http://www.sxryk.cn/163xkhbyzka.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163byfyspqh.html

[Q23] 分页
来源：http://www.sxryk.cn/163rvhqzhfm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163wsycgwxt.html

[Q24] 去重
来源：http://www.sxryk.cn/163ihmzeoac.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163jhuapoim.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163xnmorfez.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163qebtsfnc.html

[Q26] 计数
来源：http://www.xuanzx.com/163qgpixtni.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ikgrpqfa.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163nobetzcj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163rigpwoag.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163lbovchzt.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163izdoergj.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163ouceewwb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163adrcwhoe.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163jbjnttnq.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ewkmkgta.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163xqbqtute.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163wuplwuml.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163rednomgd.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163pyirhrdx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163vjxlkplk.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163hbjjmkyd.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163gqjxjlnx.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163nkechnvh.html

SELECT * FROM (
来源：http://www.xuanzx.com/163zmhyoicp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163gmtsfihf.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163idcmtmfk.html

[Q35] 内连接
来源：http://www.xuanzx.com/163rgukvbor.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163gjsdvglz.html

[Q36] 左连接
来源：http://www.xuanzx.com/163rhgpvazs.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fnxukdtf.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163orrfxcfh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163fdokmeya.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163tsvpvnht.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163wklwtwpp.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163rojlgumf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163yfwvffal.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163gavjrkaq.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163unipjxpj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163dsdvfzyu.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163aeotxbdv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163xtvhqjvx.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163xwljeqks.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163nlyiqkmz.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163zbwxdxgy.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163vhaykgdv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163nvklsggj.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163cqlccqhm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163owbqjowr.html


<!-- 参考信息 -->