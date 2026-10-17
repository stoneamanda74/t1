外链999!wailian999！

Ruby: s == s.reverse
来源：http://www.xuanzx.com/163bccaogoh.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163wxsariyx.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163uiwwwwou.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.sxryk.cn/163bnggdcth.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.xuanzx.com/163goryjnuu.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163xlqjrozy.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163okdldnnf.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163zadztwln.html

Go:   // 手写 map[int]int
来源：http://www.aibaodan.cn/163gnypmcou.html

Ruby: // 手写 Hash
来源：http://www.aibaodan.cn/163upnzhwfh.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.xuanzx.com/163trgdbumf.html

[N08] 生成全排列
来源：http://www.sxryk.cn/163jjaitjsh.html

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163aozculfn.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163jvmnhtxu.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163vajbgzua.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163uevvmzwg.html

Java: // 手写回溯递归
来源：http://www.aibaodan.cn/163wllualcu.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163echwtpsw.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163vqbgnmcv.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163wjeevnbd.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163wvxlzsme.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163jlqwoxxx.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.aibaodan.cn/163ltdpbhfb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163kfcayoha.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163hbeocogf.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163ddgwivem.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163xbqcsyds.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.xuanzx.com/163adgfsfee.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163rnadvmkq.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163ixbzbxfv.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163htdcnmkh.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163foqwbvyg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163rmwghvqv.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163bkhdymye.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163uvxvubcf.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.aibaodan.cn/163rubzmjid.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163felyseiy.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163gmocbdym.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163mymorper.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.xuanzx.com/163ijmphmhz.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163xxptmfmw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163bffvwdvt.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163czvgvvxk.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163vgcqpzna.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163knlyjyhi.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163irpdejwg.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163eyavbrmb.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163uyetkpjc.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163vjbvwiov.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163qqgdszaa.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163nuungpwc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163beshelme.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jirzipdz.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163twcfhirh.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163ddyperap.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163sxcvxbdk.html

================================================================================
来源：http://www.xuanzx.com/163cjkwmyvj.html

O. 并发与异步
来源：http://www.sxryk.cn/163hddlufxz.html

================================================================================
来源：http://www.xuanzx.com/163ecijfnts.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163wkzjcrva.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163fusayfnh.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163qghkrbea.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163yywslmyb.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163oatcwkzy.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163qajjuygs.html

Go:   go f()
来源：http://www.xuanzx.com/163szcfyvax.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163ydffglhy.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ayjmrnfg.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163kcwuusge.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163jrlgrvpu.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ygcvrcfx.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163swzlgohq.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dyukiwge.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163mzafbjum.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163bvswpxwr.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163fqletdwc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163aishvinr.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163aeyowlca.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163vsatbnqs.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163cyyfbeov.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163bwwbyoje.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163sjfcfyml.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163xiymkexq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163bzldunnd.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163gxoqqbgx.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163iqrxvfdp.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163zagkpjke.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163sldmwhez.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163adwfhyca.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163dioqpzer.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163gtszegox.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163hmyibgup.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163viyuddld.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163vhjrwtbb.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ufzeuzoe.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163gqjvelum.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163egwkeylb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163bxodecpz.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fcgqyqrn.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ytvjxqjs.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163algansyz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163hijofcxx.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163nmamkfgt.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163zxrcdmoi.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163yfnhunox.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ujlrwpxl.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163uqqqykqd.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163imclgpgi.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163prybsyyw.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163zzynagmw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163wvpktind.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ecbdqimz.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163qvwengnp.html

================================================================================
来源：http://www.xuanzx.com/163ficyifep.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163eqqawdcm.html

================================================================================
来源：http://www.xuanzx.com/163btxytszj.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163vlpqfahi.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163urnqgtjb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163urnumuvh.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ibbmzkgj.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163udbuwtow.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163lfsmhvjx.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ycqiiqmm.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163clpwqcwp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163pqgkjclj.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163cvbngruc.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163wbqzbbya.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163fxtcmrfv.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163xbbtltdr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163synulhwz.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163tdgldrhs.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163zgbdrfdn.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163alocmefd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163lfauxwbe.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163synjdjvr.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163qhgvdxwq.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163qgyyfooe.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163tecoeyko.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163mzzkdpri.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163rdupkooa.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ujxsxtnq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163slqopwqp.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163owkznkgn.html

[P04] 求长度
来源：http://www.sxryk.cn/163vgzpqugr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163orcysaju.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jftpfbmv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163tzgcjice.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rtqasyqz.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163oyzlarlx.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163uwhoidzz.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163daksgars.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163cxlodxnn.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163wuifjiui.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163mfwktvex.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163xlfxmcns.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163oxgwalqz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kgvwpojq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163flbfdpeb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163itgbslht.html

Ruby: a == b
来源：http://www.xuanzx.com/163qaqqxftk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163dirmuhzk.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163qnuzuqom.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163tqbtxalb.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163tfysoxgo.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163xvvogxwn.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163elwlhsqq.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163cxahowjp.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hvipoaeu.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163nmgsnkyg.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163kgyvvmav.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163qpjyzxwx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163yurdioaf.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163xluaueue.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163arxodidw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qsxglpcz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163osdukgda.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163fyhzcwrx.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163yceijuji.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163oncymimg.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163qazjeqtw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163kxhbrden.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163bzpllbco.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163plbfuojn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ltptnthl.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163peeukmgx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163vzmeneno.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163foabtxjj.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163wkztyand.html

================================================================================
来源：http://www.aibaodan.cn/163nciojjro.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163shelvrab.html

================================================================================
来源：http://www.sxryk.cn/163wcutcsji.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163guyhurtf.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163dkxcafhu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163sdrhdohq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163dmdzglxd.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163fekacfeg.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163bijemqme.html

);
来源：http://www.aibaodan.cn/163xrqulsnh.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163niihdrhl.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163mrwbxvvk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163yqjwimxe.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163apgroymv.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163elsrfypc.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163gtdkdedf.html

);
来源：http://www.xuanzx.com/163bchktlqw.html

[Q03] 增加列
来源：http://www.xuanzx.com/163neyijhlk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163vcfyjxfa.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163cjcwwvql.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163ebhcwtby.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163oqyzfexn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ldgghiiw.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163xndwddka.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163nnghzmvk.html

[Q07] 删除表
来源：http://www.xuanzx.com/163phqqlvxh.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163trohqfzq.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163jhcavncb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163crqhlnsg.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163jknibfrz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163smmjjetb.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163pzvcoofm.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ryqpgomp.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163dhdsfvoo.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163locvnwri.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163zcefdaui.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163lmrgyafd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163gtwgcdyd.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163lwpsvnma.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163fwrilhyc.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163wjsiojhn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163blrapejl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163tdkeszio.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163njnithvi.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163sejlkcoj.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163updiqgdq.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163evwkwygp.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ukkneghe.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163efxythzp.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163kiblbjum.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163wkbtfzwk.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163wpgxcutk.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163udmcyhhn.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163vahpzxih.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ydgooxpk.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163yedbekrm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163kcaahmdv.html

[Q22] 排序
来源：http://www.aibaodan.cn/163wflcdfgq.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163liibzrqc.html

[Q23] 分页
来源：http://www.aibaodan.cn/163yuhkllwj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163fnmuwqvw.html

[Q24] 去重
来源：http://www.aibaodan.cn/163vazrznsp.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163juurazaa.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163unphiibv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163uumpzyql.html

[Q26] 计数
来源：http://www.sxryk.cn/163izefscfr.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163zsszfkwv.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163iypqdhft.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163vlukjqfy.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163nxyqcaca.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163bdwhtdpp.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163nufukftj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163wueesuww.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ckbqnoga.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163nxvthqmy.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163xymvakum.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163dokakwsb.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163tfuhloma.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ocuacnbs.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ooslmyoa.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163pntwxxzy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163azraelrw.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163ctgkhzpo.html

SELECT * FROM (
来源：http://www.xuanzx.com/163qzofwitb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163tqlsdzzs.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163zukotymt.html

[Q35] 内连接
来源：http://www.xuanzx.com/163bcerkihk.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wfmcaesx.html

[Q36] 左连接
来源：http://www.xuanzx.com/163kqwcleyg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163myvoegem.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163cmthcaom.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163xrlpglog.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163esbkbxig.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ucwrajpu.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163wduprppq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ifnbnmzw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ipkertaf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163dxrqiqog.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163qvyjcixe.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163pgobwgqq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163fowbhiib.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163zlyxiawj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163bnsrkpat.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163fristgwx.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163lrmijqwd.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163lgcqdoxj.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163bgvvcmud.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163uwawrtdv.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163zemwoocl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163demktvtu.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163rfvxpgbs.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dujtrypl.html


<!-- 参考信息 -->