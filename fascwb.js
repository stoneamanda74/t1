外链999!wailian999！

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163jzruascg.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163iwdgkolz.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163xglaeuln.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163ctbhnljh.html

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163kmddrdag.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163djgbiudf.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163eemldcxr.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163vvpgyhoz.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163upsyeuly.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.xuanzx.com/163ckrbruyx.html

TS:   // 手写 Map<string, number>
来源：http://www.xuanzx.com/163oeihqlab.html

Java: // 手写 HashMap
来源：http://www.sxryk.cn/163jiyzotqq.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163efsfgoqk.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163jcuxkzlo.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163dbcshjph.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163hbkwkzir.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163zypcvgbd.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163fzslefrv.html

JS:   // 手写回溯递归
来源：http://www.xuanzx.com/163muhmuqry.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163lvbsfxpf.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163qrmcdqga.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163kptaykog.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163crgiwpei.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163asrhijak.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163gdysrbfn.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163dlhjazcq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163ntawveyr.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163njozavdy.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163sjwoscgi.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163gcqavdvp.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163dllrcybj.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163zezeuljv.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163mzrutaup.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163rssyrxll.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163zxqsjkbs.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163cxufrdcx.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163qsmlhtwa.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163fkblfrzl.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163yvndvwtb.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163clnuietg.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163yxsxoqhc.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ffljizjw.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163talzjknm.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163nnhderco.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163garbnuoy.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pkctuiyg.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163dctbyupv.html

Java: // 手写递归
来源：http://www.xuanzx.com/163lxezwxvt.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163wfttzxxv.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163jwfcpvnl.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163mobfmawz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163oorbaypf.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163rhlrnvzj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163rlllbxci.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163vkcomkvm.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163pbnbgrsm.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163cswyrupd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163unsmwuuk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163hxumbhnu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163fbnjaung.html

================================================================================
来源：http://www.sxryk.cn/163xxoqzqex.html

O. 并发与异步
来源：http://www.xuanzx.com/163vccqminw.html

================================================================================
来源：http://www.xuanzx.com/163zlunovlm.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ltidubrn.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163vrslaifl.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163dtmfcahm.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163egkparpm.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163luhgepbg.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163upndphrz.html

Go:   go f()
来源：http://www.aibaodan.cn/163giwlnfti.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163mhivrncz.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163orwfswva.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163mvjfvcho.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163guqgxaza.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163yynqefta.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hsjiwnbn.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ahttbcbl.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163drtnnuaf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163shkpcwbx.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163javproym.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163fdpmpyay.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163unkuinol.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163zssdrtjs.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ptrcllqa.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163kgvuxjqk.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163vlfbfwyk.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163wctnkuog.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163mwcrxqnd.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163wmwhjdwn.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163dlkhqykh.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163gzoinskp.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163vucafpff.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163yrdclzlw.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163ryowujzo.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163yaklaeug.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163hvglsviv.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163exudstaf.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163phcvonvp.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163zejytyeb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163hypofvhh.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163qpdxgoly.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163zpjlotyo.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163liufkply.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mfwjfbsv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163iphdyqhd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163pbibivan.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163rxewcpcu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163pogecpaz.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163gcxomrxi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163tymhxskm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163nvypoows.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ribpvoef.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ruyfcdpm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163eenxocwm.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163zdwczdqv.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163gtdxyfcw.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163uhfmrcie.html

================================================================================
来源：http://www.sxryk.cn/163cabskcbb.html

P. 常用工具函数
来源：http://www.sxryk.cn/163onbtqsiq.html

================================================================================
来源：http://www.xuanzx.com/163bdyduilg.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163syszeviz.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163zvkiroek.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163paoapcpi.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nsatnsws.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163orjoniae.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163mwhtefkn.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qjdhyiqu.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ixdnpojf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163uhzxilgj.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163rpczhlwr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163tlsxrjoi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163tqvtkvhw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163cmepsfoq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163nxpbgsau.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163lnrzmory.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163zoixintv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163bfazihlr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163bdvivixi.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163lfqifoxt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163mocsxstv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zseycsmw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163asbezajw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163vhpvswvf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163dkecavvd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163wabkjzxw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163gktdhogn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163fgmtxmgc.html

[P04] 求长度
来源：http://www.aibaodan.cn/163nouvuxes.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163amgpjjdk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ilasjxsu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163yuzbzpdu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163pkrwnigt.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163khkezysf.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163rblbphtd.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163hpftrsoz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163qvnvyymp.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163hhrlovoc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163jmmskcau.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163lylxalnq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163rnqhwefl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163vamfunbs.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ztqjrqsy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163tkinkbgv.html

Ruby: a == b
来源：http://www.sxryk.cn/163wrladlgr.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ilmbzjyi.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163qeowaqge.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163gsloskrh.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163zglphhkr.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163jsosrhea.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163dawvviam.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163pibtfjyw.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163sagzupmm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163vqvemrto.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163lmbwgnsl.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163lffhywdo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163iganknph.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163vbrgwovx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163upsbfzpi.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163lyvgubcf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163sjladzqo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163xdzboltf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163opugxtkk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ujgjeudj.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163prozltuc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163pgldexsi.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163qynneqnt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163xizuuzwy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163mxgwsolw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163dosiiygh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163axuvdwjz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163jdolszdy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163opewapsv.html

================================================================================
来源：http://www.sxryk.cn/163yjhrunuv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163guaboylo.html

================================================================================
来源：http://www.sxryk.cn/163ppqdpqtm.html

[Q01] 创建表
来源：http://www.sxryk.cn/163qmkwufto.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163lhwoxzxh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jvenavhm.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ivpamokk.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ghzkmzcu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163xxnzlmqp.html

);
来源：http://www.xuanzx.com/163oijzcfor.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163leoxkyim.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163hvrmeeql.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163djqdmtoe.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163axptwbfv.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163cnsdtxpb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ajogvcrn.html

);
来源：http://www.sxryk.cn/163hwpqrusn.html

[Q03] 增加列
来源：http://www.sxryk.cn/163jbdgjsoa.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163iqdkuflz.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163wvdcskqn.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163nfegevos.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163mfvgdmoe.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163wamunbpb.html

[Q06] 删除列
来源：http://www.sxryk.cn/163hxraatuk.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163pcfliido.html

[Q07] 删除表
来源：http://www.xuanzx.com/163nctnwiyc.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163sfovhyks.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163utsgpiqk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163cesplcex.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163acsxoqaz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163gbtvuqdh.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163usurcgrp.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163atufychp.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163evfmqfls.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ucqipstj.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163mhukeqap.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163nkfdvslz.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163fholtlmg.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163hophuklc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163kwgdhbio.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163cmilbgtx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163bupjldvv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ccldxfmh.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163qgegtvtt.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163jhawzyrb.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163rlpgyisd.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163awsfeuap.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163yjgvktcc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163qxwsqphb.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163bkgjftiz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163oyzklqdy.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xbmgrdsl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163xwyvqxtx.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163zhgumbkl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163ecuatnus.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163qcnqzqmz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163mgbhcgsp.html

[Q22] 排序
来源：http://www.xuanzx.com/163qkuhryyv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163wyyrgrsy.html

[Q23] 分页
来源：http://www.xuanzx.com/163ssnpdhyp.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163qcpmbyzj.html

[Q24] 去重
来源：http://www.xuanzx.com/163nfmjzqkp.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163sqxhfhdv.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163mtjodnup.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163yvenxmub.html

[Q26] 计数
来源：http://www.sxryk.cn/163kpbtaxyp.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163lqgthcwh.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163rxpigjcj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163yshhwxpd.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ktdqfwjq.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163jjotvycw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163vcsysura.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163cnvcpavt.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163hixxikbm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163yowzssap.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163vmsfxfqh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163tovqswkt.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163fqvyxrco.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zelsjkfx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ncbyedje.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163yceeoqwi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163lobtqhfq.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163issftmrm.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ycskmfaz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ewvgnhmk.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163miwyimrm.html

[Q35] 内连接
来源：http://www.sxryk.cn/163kmsrpdhv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163onvpqbia.html

[Q36] 左连接
来源：http://www.sxryk.cn/163mnooxtvm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163pbkjciuq.html

[Q37] 右连接
来源：http://www.sxryk.cn/163fcdvwpny.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163uhccgsal.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163urdwyrby.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ppszijrh.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163kpikcbeg.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163wceykgpp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ifnjhtuz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ywrwvkpm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163vyysoqch.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163eflkfjas.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163ukrwogjq.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ovmvgwpj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163fklbskgr.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163usrkkjxt.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163obpabytr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163wtqvfdts.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ziurrzmb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163komvqoik.html


<!-- 参考信息 -->