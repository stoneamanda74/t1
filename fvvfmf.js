外链999!wailian999！

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.sxryk.cn/163kzkqhiif.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.aibaodan.cn/163prsykfkw.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163wzvscmzk.html

Ruby: a.gcd(b)
来源：http://www.xuanzx.com/163nfqcflsj.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.sxryk.cn/163hnzgdhrg.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163epdvqxfy.html

Py:   s == s[::-1]
来源：http://www.aibaodan.cn/163tuxlicjj.html

PHP:  $s === strrev($s);
来源：http://www.xuanzx.com/163ptkaffen.html

JS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163sjffpjcy.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163txarymjx.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.xuanzx.com/163zkhlhhwh.html

Go:   // 双指针从两端比较
来源：http://www.aibaodan.cn/163godexrgo.html

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163idgxpvos.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nvzoaunz.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163gehqsgwt.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163oavgwnpc.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163wthmueqf.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163aqkfgenc.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163vaukhgkm.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163hddoyzyg.html

Go:   // 手写 map[int]int
来源：http://www.xuanzx.com/163itqjzmqm.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163spsrxkev.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163otgeyqjl.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ntqurmql.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163xvaaryik.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163opxdfgvw.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163vpzbfbjj.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ytqjqnlm.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163ddjzbrbd.html

Go:   // 手写回溯递归
来源：http://www.sxryk.cn/163sibogqrb.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163iopxaddw.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163jrwrhdqx.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163evgkkxyw.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.aibaodan.cn/163mqaiqcrt.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163uniyqkky.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163vqwnzrde.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163lummwmpz.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163qckxkmck.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163cgglwyen.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163fpjtjyze.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163ypfqkqcc.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163knjtvxxg.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163ocqkjlux.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163kxrcxyty.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163bjsigqbw.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163yurdftbo.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163xqmisurd.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163uazzuntw.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163vffnlyox.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163gidplwjp.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163bfjixzjx.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163wgwhftuq.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163ffkuaxus.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163mqwpyait.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163dvyttsmg.html

Java: // 手写递归
来源：http://www.xuanzx.com/163magibiry.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163bqkpfdob.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163cjxvfxxg.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163hvgfgjid.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163gmrttjdd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163wrwudnnb.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163ughksuii.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163clfjnxfe.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163hmimraau.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lstqmbmg.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163fytjibxc.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163xjdfqtbf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163zghvnood.html

================================================================================
来源：http://www.xuanzx.com/163alovdeqp.html

O. 并发与异步
来源：http://www.sxryk.cn/163dmpxzxvs.html

================================================================================
来源：http://www.aibaodan.cn/163rliyaxkb.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163sdesvlln.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163vseicvkp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163shhfrgfd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ckfqevon.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uoiwvuid.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163ofmxzmjy.html

Go:   go f()
来源：http://www.sxryk.cn/163uurdrnfn.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163kwvpkqqb.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163caxjdfam.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ypsdmfor.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163teoiobzu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163vnkunnah.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ouxgsiiv.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lifdklsz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163toanhwne.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163arxykztm.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163uvqyuuil.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ckciyzix.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163dpnjrtey.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163ryiljvph.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163tvnumein.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163mmuipvgc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163mvcyeaax.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163iroejiqw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163xrkuickz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163yhgulaxp.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163jpklqjzq.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163szbrheni.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163dzlgmlgr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163kegdhlsv.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163cehvrkck.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163yudjxzzy.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163emmunyni.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163mxlxdehg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163zbltmkcf.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163pzxeseem.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163lffubbho.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163amxpxcqr.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163uamtxvfn.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163dpyismeo.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163byqjrnlj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163asybjnrd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163rssrphhk.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163bntivuaj.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ehmulfdd.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163aiswsncv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163cscxqtog.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163pvzaoewu.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163pfiwfgnf.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163hccmfyhi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163artypimq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ldrvrdja.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163snabaefp.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163phblrtgh.html

================================================================================
来源：http://www.sxryk.cn/163spdxbfxg.html

P. 常用工具函数
来源：http://www.sxryk.cn/163fnevdhxr.html

================================================================================
来源：http://www.sxryk.cn/163aitohfda.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163tsnfdtva.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163mitycbxl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163flgghplt.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163cljepcli.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163eucppcmp.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163qysdriye.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163pkxkpmve.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163znouevck.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163zdfznpnw.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163ygrvbace.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163feokqbnj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163setsceam.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163jzbhjccb.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163bojzayqu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ouhfmkdd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163axfevazi.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163tujpocyb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163amwlvkjf.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163nknxukzx.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163axqlykff.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163bfpuhwgo.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163hupfnsty.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163rehnxijf.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163kuxfustg.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163llftmgjm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163mbkhrfyf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163pzrmoaud.html

[P04] 求长度
来源：http://www.aibaodan.cn/163cvfiljbn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163isxhpkbd.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163squgfrqb.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ddbvhulc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wrxnaajd.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163ojcbjrzp.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163knjvjcnz.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163vzpivequ.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163rjogxfed.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163jemecowb.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163gjpcwlwt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163azawoeyb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163mqcdwrrv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163abhmnilh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163hqyszyqr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ewdibycs.html

Ruby: a == b
来源：http://www.xuanzx.com/163vgftcpzq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163fblaados.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ntufjcvd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163nwpjilbe.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163mhssbwbw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163gbtzjplv.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163jyjunvxa.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163yuaogskn.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ytgclphc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163jnpsegfx.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163kpebuell.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163eqyltiso.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163itryixjg.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163upcjafrv.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163dnsrtvlt.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tclrexqt.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163vqcziywn.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163egbvaoea.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163flqribte.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163moyoqwjw.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ltyikhtt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163qjecsoiq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163kxgrneyp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ofmhczag.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163euxhbuka.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163fntwczln.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163oxahlusr.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163rujnvhfy.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163fzdsdtvy.html

================================================================================
来源：http://www.xuanzx.com/163ipgpndkq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163olxjlibg.html

================================================================================
来源：http://www.sxryk.cn/163ufoqlavc.html

[Q01] 创建表
来源：http://www.xuanzx.com/163nqztgjqm.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ygjqendm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163udiifmcj.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163gkjcfnyh.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163qqxpxcgz.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ijnquajy.html

);
来源：http://www.aibaodan.cn/163dwlkwezn.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163qkvgdncf.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163zaqgxvwb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jrbselfs.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163kmxvcfpt.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163nsvhtteq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163snngwvds.html

);
来源：http://www.xuanzx.com/163ymumnios.html

[Q03] 增加列
来源：http://www.xuanzx.com/163xvxmeumz.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163ofagxfuy.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163swpxzfim.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ssqplmjg.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163jndqcvef.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163dlamhoby.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163rzhanxgh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163zcetakyq.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163ycvkdewr.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163weknsxgl.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163qdjateap.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163iouuafin.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163iffritbb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163nnwoskde.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163syontuzd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163bcewlgcz.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163bmpwzlbn.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163htlezlah.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163lhsflete.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163wimocoqt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163kxxilqux.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163nrcvbynp.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163gxqnguns.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163baysehtl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163utpifmet.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163isdddegf.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163yffcvxvx.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hgfnhwnr.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163qzltmmvi.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163hwvzvrfq.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163hfmxfrje.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ixdxwxcl.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163gxdqibyf.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163oldznjfn.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163vydqdvcq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163tzrocmdb.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163hkwosrex.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163rjztsvgk.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163mwxcwijc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163bcjsqymv.html

[Q22] 排序
来源：http://www.xuanzx.com/163wqjyntsm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163fvrmxfqt.html

[Q23] 分页
来源：http://www.xuanzx.com/163lsjuirut.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ydivgecg.html

[Q24] 去重
来源：http://www.sxryk.cn/163vhmowrks.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163mpgcznaf.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163pgvgcbuh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163kuyzfavb.html

[Q26] 计数
来源：http://www.aibaodan.cn/163benfhkud.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163zzbohekx.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163gwfvctff.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163uinzrjgu.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163gpzskmgv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ihyeauxf.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163jkjnozok.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ozethvhc.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163wjosiexb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163oxdetukn.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163egvqhxoh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163sshukefe.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163aftztcmr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mypkfmtt.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163vjudagfs.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163tplvvjru.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163zcqreeoo.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163cdntrflr.html

SELECT * FROM (
来源：http://www.xuanzx.com/163dzzcfdjs.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163sljstylb.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163zapsiwcm.html

[Q35] 内连接
来源：http://www.xuanzx.com/163hqdjyopi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163icpzbmnk.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163nsguduwl.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163scavwkeu.html

[Q37] 右连接
来源：http://www.sxryk.cn/163rpmduztb.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163opcuafqy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163figlydey.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163orwtngwy.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163gexlwehv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163mxogjzum.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163elteoomi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163vzvuqddb.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163scqluajw.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hcceiroy.html


<!-- 参考信息 -->