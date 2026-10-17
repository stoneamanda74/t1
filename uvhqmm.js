外链999!wailian999！

Ruby: s == s.reverse
来源：http://www.aibaodan.cn/163dzcfazhn.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gdvlbenp.html

[N07] 两数之和（返回下标）
来源：http://www.xuanzx.com/163nnqfdvst.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163ospybhtv.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163nnaqovsa.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.aibaodan.cn/163giloirbr.html

TS:   // 手写 Map<string, number>
来源：http://www.aibaodan.cn/163zuqcbnwn.html

Java: // 手写 HashMap
来源：http://www.xuanzx.com/163pezxsndt.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163qawnlvvp.html

Ruby: // 手写 Hash
来源：http://www.sxryk.cn/163ijlylzqe.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163zqmpdpyf.html

[N08] 生成全排列
来源：http://www.xuanzx.com/163njkpojgk.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163xhifdocd.html

PHP:  // 手写递归交换
来源：http://www.sxryk.cn/163jpbdqevl.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163bvvzvbwg.html

TS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163gcndjyoo.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163gknhunlg.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163ujfvswvb.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163bivktlgj.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163okpyoupk.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163cevcbxae.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163gqeatjfx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163tnfwifqs.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163adtvbwnc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163tucbuglj.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163qqlsowki.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163huwyrjjn.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163hjdjgkpx.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163nvifxkoj.html

[N10] 链表节点定义
来源：http://www.sxryk.cn/163iitetykc.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163caxtuzgg.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163equtbzbn.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163eukomqci.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163nsqmilbc.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163lzgwaeku.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163qsijnrny.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163vtuzfidm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163hoortbgw.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163atcugxwd.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163htyuzybj.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163sijdugin.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163igtcpvss.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163eenckgqi.html

Java: // 手写递归
来源：http://www.xuanzx.com/163eiqemycf.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163ekyemutp.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163opuzomim.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163jncifoxn.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163bznaaarv.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163obxciuxw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163fxkkyayg.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163bkziajdz.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163aphjmzqz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163nqajwusl.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163pcmtfaby.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163axvjtkrw.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163haotttes.html

================================================================================
来源：http://www.aibaodan.cn/163jqtburve.html

O. 并发与异步
来源：http://www.sxryk.cn/163zrqtedes.html

================================================================================
来源：http://www.xuanzx.com/163ceozixhu.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163pilispik.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163tbrosgya.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163wwdoisza.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163fqelngsh.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163myxeuetl.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163vvpvsdwk.html

Go:   go f()
来源：http://www.sxryk.cn/163wjxqqecy.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163kdcyxyxv.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163qofvsxmt.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163hbxsnmvg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ilsuzetw.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163tgjhupdk.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163zoxtejzu.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163kmtbevra.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163aytdxcoj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163dyuealfi.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163yoiaxjgg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163mqoylldx.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163isekptcj.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163jwrspfdj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163zohdpunl.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163fucnrvhe.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163xoyfkpyu.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jfwjvaly.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163tktbyluc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163fvsihiyf.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163jvaskwin.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163vltgobfn.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ygmulbqr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163qnpoxurx.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163mmnqznma.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163xotyhrxe.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163ufggmhhk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163cysueftd.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163zcszcsfk.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163fdbvljxq.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ebuwpffh.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163asprbcxe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163zbiwjyyv.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163xjcsjlwb.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gvfnkyio.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163axekopmu.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163evptkyvl.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163kkljolgp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163ywmzpmym.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163yqusnqpv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163jbifyhuj.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163znquavdm.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ynhtnlfy.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163dfhvczer.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163tyopmnoi.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163mrboferg.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163rhztgvfj.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163qmrrdfhz.html

================================================================================
来源：http://www.xuanzx.com/163mirxqkge.html

P. 常用工具函数
来源：http://www.sxryk.cn/163xdzhxoex.html

================================================================================
来源：http://www.aibaodan.cn/163aojhepvw.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163pcgawvxb.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163emxspdne.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163tensbfik.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163nvfrenoo.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jkhoolaq.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163iryunfpg.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163tjxejuej.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163kagnbgud.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163spsbzxol.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163bnhqqmbi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163almgvxmc.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163zboazjjw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163bjkhgmqw.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163qoygylcx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ctzsqxur.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163qhwxkfbb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163oqchyqon.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ktwcctel.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163eyssgptu.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163iuvdnrgg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163hzbxfbdp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ctajoued.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163fabdcqjd.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163fszhelim.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163nwoyzvmk.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163qsvdflsp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163byokxfdr.html

[P04] 求长度
来源：http://www.aibaodan.cn/163kczpnzla.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163xezrlpuq.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163minfxhar.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163zykymqwc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gbfssthg.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163yhnmwfqb.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ycsjueco.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163bfypjpvq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163hurovdaj.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163dmvohxwn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163orwhjnti.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163fozckggv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163fxhpwukz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163osekvrta.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163urwdyzqd.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163eyzlaktr.html

Ruby: a == b
来源：http://www.xuanzx.com/163awilsmmq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163zogloqsm.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163mxyxvoaw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163mcsotdnb.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163ojigtmxw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163biqphjbc.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163nochyvdn.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163oaihsrbu.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163blgvjgfo.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163ynowojil.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163rxouoaai.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163waugcfaj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163thwobgqc.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163uvdqscpa.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163jjghvuah.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ptsexzjs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163tqbhcexs.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163bhdlvdsy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163gjkeglae.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163uomehpnx.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163wzlxganc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163rhxblzlu.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163jsgsepba.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163ubzcsggi.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163etnjjsac.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163aatsbzup.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163mnwunxac.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163dykkvabr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163rvyuufsr.html

================================================================================
来源：http://www.xuanzx.com/163tdgwtwta.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163yuwboeqf.html

================================================================================
来源：http://www.sxryk.cn/163tftuqwie.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ppxrzlqc.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163yusiizuq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163erqsslle.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163xkmnezau.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163xongwzyy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163xmluofri.html

);
来源：http://www.xuanzx.com/163naurbnfp.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163sgwvodco.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163kvmivlal.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163kglhofzp.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163cttouenq.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163hfwhvadn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163dpsppxio.html

);
来源：http://www.xuanzx.com/163nndhqtow.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ymdsjpgx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163cdgupclw.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163ljoetgta.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163lunrobuy.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163kxmxvzsi.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163zosqatqf.html

[Q06] 删除列
来源：http://www.sxryk.cn/163vvairgxu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163hhjaibem.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163oapbwtgk.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163tfvxicjn.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163tszwojty.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163qnmfnxfu.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163mkzkcych.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163homqzcrm.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163xqlvqmdn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163klguzxau.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163jumzfelw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163silvumty.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163vjugpimn.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163kxxhydfp.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163wvxidogg.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163uzegpscm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163qbdzbtfg.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163xexenvqx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163xypqbtzr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163qefbflbg.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163agojvzog.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163xslbxipq.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163rcoytkgs.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163yeowjgyl.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163fuirtssy.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163gepbbmhk.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163weydmtgt.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163kmranwkj.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163iuwthqnt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163alwxlfrq.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163zghrzfxn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163ayrqwmbl.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163umgdtgdi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163xkbhnucq.html

[Q22] 排序
来源：http://www.sxryk.cn/163ljrmcktj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ucuerbab.html

[Q23] 分页
来源：http://www.xuanzx.com/163pdrpgqra.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ybdmzdbt.html

[Q24] 去重
来源：http://www.xuanzx.com/163wlsbvtsw.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163qqegshmg.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163qemjciab.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163seempbdp.html

[Q26] 计数
来源：http://www.aibaodan.cn/163dosgqlwn.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163fheljmtq.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163cbvfyjie.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163jkrwqotj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163klwenqhm.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163grgxegik.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163afngtvie.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163duknpshl.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163cpquszrg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163vqjbbmie.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163vdjxdmrg.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163xelcikhr.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163gfmtzwuk.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ycjcrqif.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163wfvlvjor.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163skplsozu.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163obyydquu.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163gzhnstfh.html

SELECT * FROM (
来源：http://www.xuanzx.com/163rblcfvpu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163aszdwlnp.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163qonjfdpb.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163aoflfymt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zfughqry.html

[Q36] 左连接
来源：http://www.sxryk.cn/163zcwgmkid.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vqtorgms.html

[Q37] 右连接
来源：http://www.xuanzx.com/163huhpldxm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163rncedcug.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163tkvjmoqo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163xfzdzfab.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163qkcwvjnq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163ornekait.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163spmnipuy.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163suqinqhs.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163pqaykmad.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163ygcuuszo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163fkzwuoyf.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163aqjmmuph.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163poxucnmx.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163wayzeazp.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163kubolfpw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163tsghhous.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163zfotyrjg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163qqvifsvz.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163buuomzfl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163febfbzyy.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163bazciwaq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163icmfyinw.html


<!-- 参考信息 -->