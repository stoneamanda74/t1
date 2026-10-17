外链999!wailian999！

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163jxhhpkce.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163nnppcuyp.html

[N07] 两数之和（返回下标）
来源：http://www.aibaodan.cn/163hqvevijo.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163cehjkbjp.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.sxryk.cn/163lgximcet.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163vdffzkmo.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163iivgsgfo.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163nnqsymtn.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163nmmdtwbj.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163wibjvxzp.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163dylcoxvz.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163ikkybdpd.html

Py:   itertools.permutations(arr)
来源：http://www.xuanzx.com/163ffjmotao.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163ihhnwhkt.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163fcyyqtrj.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163gvvhnvdc.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163uueityeb.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163rrfheiwc.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163sjxhoxzm.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163mjxdwwzx.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163jyfxitxz.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163fupmhczb.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163qmwmrpjz.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163xbmeirbf.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163virkkfnf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163tuwqsucs.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163spwcahle.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163lkhyimnm.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163duscifxi.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163snpaejpl.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163dpadvdbf.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163eisbgtck.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163edupltww.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163hkbycfsl.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163lwwzttun.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163zufibmaf.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163ovjwyign.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163ovtuvese.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163glomoahj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163vxjrpxpk.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163zgqpqotm.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163hwoqmjry.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163galwkokw.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vzxkujnb.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163sdojrpnb.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163korfmjxv.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163xnvjazar.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163dmqfpzni.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163gmpvbqtf.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163whqufjon.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163gilxcyer.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163zjdzjpyz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lyofykop.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163zaowiqla.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163itcmvqpt.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163knpkcevy.html

================================================================================
来源：http://www.aibaodan.cn/163uocruemi.html

O. 并发与异步
来源：http://www.aibaodan.cn/163atgpwbtm.html

================================================================================
来源：http://www.aibaodan.cn/163zwnddiaj.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163hglppafx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163shyudtfp.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163spzowvby.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163xjvzmzld.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163stbdmtyd.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163wyhrsspt.html

Go:   go f()
来源：http://www.sxryk.cn/163iovnforj.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163dacrymum.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163vapbfolw.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163dwdjxynk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163ntuvwlnm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163dfkhvfzr.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wubtsrac.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163zwlezrji.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163pzyqzbar.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163wgricldt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163vojxsnjm.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163wgsrgonq.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163ujwoinca.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qzadujuy.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163tzvkjmmv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163bbpmwyfo.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bycnejfa.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163tinlmsfg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163mdyyakrr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163muiuaprm.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163lcymqrln.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163pqzfgbzj.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163xashajnu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163hmbtjlhv.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163shnupxkk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163xujqmgag.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163jymqyyrt.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163uowghybd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163dxiegemh.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163myodyqde.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163oqtehvao.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163yguwpbwk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163sfvaqdgq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163xnmavkvi.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163nkhnfbnm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163ahjcegdg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163wzswdxkl.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163xwyalfcc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163qelgyrxa.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163mvmoybkd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163umcpvnfh.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163axeyzlud.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ogrpdskr.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zpavnfzw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163gkucqwrv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163fibgbcfn.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163jvqwjbhg.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163gzxlvrgu.html

================================================================================
来源：http://www.sxryk.cn/163wxnerbxt.html

P. 常用工具函数
来源：http://www.xuanzx.com/163qentgfgg.html

================================================================================
来源：http://www.aibaodan.cn/163gmkzmxdx.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163ozemtonn.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163uknwobii.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163qllxwegs.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163roydedkr.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163kfnxwaio.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ppdigpon.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ibbcggbk.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163qletqien.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163chfewbfo.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163lsobzpql.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163ognwsepg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163kviyszwc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163pjkfzqok.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163cyvgzeah.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163mhriapad.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163klkulepu.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163kwnbunxc.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163lkdouyci.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163kdmiyhec.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163gqsmslyk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163vgfoijlw.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163aqqpwyvq.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163pgonqjcc.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163dssqdwey.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163dyjebsbj.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163demmksnw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163jhhgoute.html

[P04] 求长度
来源：http://www.xuanzx.com/163izgudkzl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163lzweqxna.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ohkzahdv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163abuygugk.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kwsmysen.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163mlyrtozt.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163izoygrwk.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ytcapllj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163vytfhzaf.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qnvkfnhu.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163pyoafrfz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163vjafznkq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163zfcgjnvd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163qsdpdqpp.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163cywgktky.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163aoecpouz.html

Ruby: a == b
来源：http://www.aibaodan.cn/163dcotlljf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163btoogbbl.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163qpwlvfor.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163kjoxjuok.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163fesexocv.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163cnwdwjtn.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163hhzwmyak.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163swolheqa.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163vrjywapk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163kgmpjmfi.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163maofusjx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163rltwcwwy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163jhydrzqr.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163hwhfxhrz.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163chfmmoda.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163fxevpqpd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ocnhyogi.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163chzypjsr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163hzmwlexw.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163xdmtmtdz.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163xpgosjwe.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163yyzzkhhx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163tehkahlb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163hepddigm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ippknodf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163evjqzcgs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163vpdzbwwc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163dnjawgqd.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163wrnkrhfc.html

================================================================================
来源：http://www.sxryk.cn/163dfnsldmg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ajdgavtz.html

================================================================================
来源：http://www.sxryk.cn/163tlcfgbkg.html

[Q01] 创建表
来源：http://www.xuanzx.com/163vbxqdqls.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163wgtawyvf.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mrptulfx.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163idosucpx.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163uogtbtsj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163tnubjfru.html

);
来源：http://www.xuanzx.com/163wnpojqzt.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163dqxvrqhc.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163nkdffxjr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163pmaqetwm.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163flmneihy.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163hqvrlcoq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163sjoztxhc.html

);
来源：http://www.sxryk.cn/163exgaijrs.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163evcsqyvk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163kqlixhgr.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163zekuzyvl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163tsvdoqff.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163mjomsmlg.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163csxfbzdm.html

[Q06] 删除列
来源：http://www.xuanzx.com/163eysntalz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163gsmedygl.html

[Q07] 删除表
来源：http://www.xuanzx.com/163vhikxxjd.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163ujneppnf.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163tzsphdbu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163zjxlglpf.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163rjnrbsei.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163pntzmdmp.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163visnzcyi.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163tyqjksgx.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163thgjrtlt.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163lqasnghx.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163hypuiabg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163nqyaldgm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163dxdjievm.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163tqqfbrkq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163gtrzpepg.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163hqpacvhu.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163tbnyrqye.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163cfrmhfzu.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163gqvqttgd.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163vycgxwrl.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163sddmdjzb.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163awmudfor.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163zhubstlx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163pvuweekp.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163lvnmqpmp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163rkgevhcl.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163iblamoht.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ajhvvard.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163fhgzlktx.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163lvigtobr.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163gariccwm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163tngscyqp.html

[Q22] 排序
来源：http://www.sxryk.cn/163rqpnvqxb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163whdvsnqj.html

[Q23] 分页
来源：http://www.sxryk.cn/163afvevocz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163nancqouk.html

[Q24] 去重
来源：http://www.sxryk.cn/163llitlbzu.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163crpsddfa.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163qohwvhak.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163piksxpjm.html

[Q26] 计数
来源：http://www.xuanzx.com/163bdnrwypi.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163qxkbbcyu.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163jambxxli.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ktxonaqn.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hubvvfbn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163abeczyaa.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163qvrwkcee.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163fapimwrs.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163bbqlapom.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163isiaamuc.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163fhbirhdd.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163fxpympeb.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ubdudggo.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163pknibooy.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163fifwlbrs.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163rpsfivnh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163rupxpsbn.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163hqupiecj.html

SELECT * FROM (
来源：http://www.sxryk.cn/163vwozeskd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163sdnqgroh.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163tchpqanb.html

[Q35] 内连接
来源：http://www.xuanzx.com/163omgxygva.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163nvyfzrmb.html

[Q36] 左连接
来源：http://www.xuanzx.com/163cdpybhbt.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163akumrboz.html

[Q37] 右连接
来源：http://www.xuanzx.com/163uggjczid.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163brguvvzi.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163wwxwjmws.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163xcgvofyk.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163zwfsxqta.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163tiwmpkuz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163pfmswfmf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163eyharfmo.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163lrjmjdhs.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163zxpzuwzn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163ybwvnfwn.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mzhtbzur.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163tqxooqgk.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163crrgovyd.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163brfdxguo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163nvfetuyy.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163xaezdzxg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ofuregoa.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ibqjzwhc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163qoxborux.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163vhpneztk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163rbgghqrk.html


<!-- 参考信息 -->