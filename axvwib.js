外链999!wailian999！

Py:   itertools.permutations(arr)
来源：http://www.sxryk.cn/163tyrlxmqm.html

PHP:  // 手写递归交换
来源：http://www.aibaodan.cn/163oejsvcza.html

JS:   // 手写回溯递归
来源：http://www.aibaodan.cn/163dkeooyvk.html

TS:   // 手写回溯递归
来源：http://www.xuanzx.com/163bcmjhunf.html

Java: // 手写回溯递归
来源：http://www.xuanzx.com/163xgyvfrha.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163ukqnahfs.html

Ruby: arr.permutation.to_a
来源：http://www.xuanzx.com/163azvdmznb.html

C#:   // 手写回溯递归
来源：http://www.aibaodan.cn/163edfjhios.html

[N09] 栈与队列
来源：http://www.xuanzx.com/163loclzdht.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163ndmkedto.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163qpjmpehq.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163wducdbdm.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163dnkipnok.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.xuanzx.com/163atztbbdt.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.xuanzx.com/163ruocwzmo.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163wgtjmqrt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163jludcmcu.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163huymqcwm.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163wqwirarw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163umiquhdj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163atbwmgtb.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163miqlqfhq.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163ysivhlnv.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163mshuiygv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163oektpebg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163rfwscppk.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163lbdjdslf.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163gkvaxpps.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163swfuonfk.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163awywbrlo.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163lqafdwnt.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163mmpvpxtz.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163xqzgdied.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163qnabqgkt.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163zhsbcvsd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163heinryme.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163luglnzuw.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163cwtymunc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163gdlzkvjd.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163apinwzsf.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163gpnspebd.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163usghpdoi.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ltdnvdlm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rohydnnn.html

================================================================================
来源：http://www.xuanzx.com/163oqbibulk.html

O. 并发与异步
来源：http://www.xuanzx.com/163nklvvywa.html

================================================================================
来源：http://www.xuanzx.com/163kpgavsvd.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163owqleuvm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163ztqvotwj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163xjfxlfcr.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163fykbtuyk.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dinqcudk.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163zwytwrkf.html

Go:   go f()
来源：http://www.xuanzx.com/163kvrstqtd.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163xanvxsuv.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163zfbxypqy.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163rshnfqlg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163mtejzdbi.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163ejcxhvik.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163hkdtrmne.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jvghahfm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163gsxtzjew.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163vvlombtj.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163avfvhhxx.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163xmiarvhj.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163jhcimilo.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163pvvlalmf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163pbvrkptn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163wgjrqdsg.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163tsxplkps.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163ynhnegqa.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163fxkycpwz.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163yhtwrorq.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163sgjxfbma.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163aujhlqsz.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163hfahavzq.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163nommeqll.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163qgrrgvpr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ocegblxh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163jxaduplq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163sznqicby.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163aaqvfpjz.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163zpqhrmgx.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163cayjnhor.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163ufbqzvsx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163zxpafeas.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163cvrcvewv.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163jhendlwb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163mptvhsjq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163ncxgvzyn.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ticuiijz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163nmzvjefd.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163jylvsbwy.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163wwjimtnm.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163lsqezgqr.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163klrpcccp.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jtrewizj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163skvpkxce.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ngsivtas.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163vjgwpqjn.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163gviqpbzj.html

================================================================================
来源：http://www.aibaodan.cn/163ynlxwrvz.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163wrevneow.html

================================================================================
来源：http://www.sxryk.cn/163jsuwtyhe.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163zfzilrqk.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163pshleetx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163kcusfvct.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163oorstcsj.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163uhernggz.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ogsmvfrd.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163hdevribj.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163umqtvkga.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163faslrpje.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163wfgjibog.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163escxjqkt.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163armywbym.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163smlncill.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163utvovadh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163jkydnrnr.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163jwpdpflm.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163cxxnyrag.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163mntidcrt.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163fujghkmo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163hvwsfbew.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163csjytwpb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kwqhlhub.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ymiwmeby.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163irelhpaw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163vwjcqvaq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163npcjbqox.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163spivtacz.html

[P04] 求长度
来源：http://www.xuanzx.com/163pawevjfl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163itxrnuws.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163mizmccye.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rbisukzu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ymupmdms.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163fzgtnyss.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163hzlgwznd.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163wpxoptky.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163zbuecpqq.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163mjslflxr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163argyniek.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ntnsgbil.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163zcxzqkrr.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163xhopangn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163lpsqwdxe.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163wmlrtowz.html

Ruby: a == b
来源：http://www.aibaodan.cn/163fmenprdh.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163vldmzbpc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163rfeldqwk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163ylkphfcs.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163jyxskrbo.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163mbwjvaxk.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ffjhtcut.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163obrqebqy.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163bsuugxqb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163rubmciig.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163yiruxvfv.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163lkndkdoo.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163pbbiqyhf.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163klxemfpu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163uezfaogo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pmlshntn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163jakaniwu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163bsudfrds.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163mbhfxkoi.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163xjmnlxiy.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163oujbvsuk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163znhqxukv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163nqoepzjf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163bgsoqfib.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163sazmthpb.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163yfsjezlp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163tmcbuqbl.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163mkzbdjtr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163tmgirllr.html

================================================================================
来源：http://www.aibaodan.cn/163jagrkpbu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163cfzhjddl.html

================================================================================
来源：http://www.xuanzx.com/163ivnqtavt.html

[Q01] 创建表
来源：http://www.xuanzx.com/163zghozpfi.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163acnaqjmc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qxyztkci.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163gpqzlxdk.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163wxfonmlm.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163lxiuxnks.html

);
来源：http://www.sxryk.cn/163ymluuozh.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163svgffrjw.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163lxridajg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163ytuihlck.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163blnityja.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163hpeobois.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163uhipkcpd.html

);
来源：http://www.sxryk.cn/163fjpjbpfy.html

[Q03] 增加列
来源：http://www.xuanzx.com/163anfmrvjn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163pxhcjrlq.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163heksyfwe.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163necbvtcm.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163wafaisdv.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163durqqcnq.html

[Q06] 删除列
来源：http://www.sxryk.cn/163ublgbmhg.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163rvdzvfar.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ofcaruix.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163anoxezpp.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163tsjyncea.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163mwtbzmxj.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163evbslecz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163dzalpuew.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163jdimuqvw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163dcaysueq.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163epdcqvms.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163vxlayrsl.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ehqmaopc.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163lsuiwcya.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163poxnuqrs.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163qgbokmll.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163tzbwzmsq.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163lyyhjzcf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163eaeqcbvl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163uyeopdsc.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163petqztta.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163pzadkuvd.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163kvirxosa.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163cxiaoxcu.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163jhjuqwse.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163grlyfitf.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163nvidjjvo.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tbiaokot.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163qcggtwtq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ariebicc.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163bpcmhfla.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163hnrmiwdl.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163tomofomm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163qthuprlk.html

[Q22] 排序
来源：http://www.xuanzx.com/163rmwgjyme.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163rhhdtovf.html

[Q23] 分页
来源：http://www.xuanzx.com/163ldryamnc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163syucfukj.html

[Q24] 去重
来源：http://www.aibaodan.cn/163fidnlsgh.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163eincqper.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163sdhsjvky.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163hjafsscm.html

[Q26] 计数
来源：http://www.aibaodan.cn/163gkjjtuor.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ginnajjy.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163jpwgkbjn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163mdtqwruw.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hbmriqlk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163wneyphlz.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163yndtfzoz.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163tfcpiieh.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163vjjqizzh.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xjpqstit.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163hypwxtbf.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163fbqxxyxe.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163sumeqqca.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163lnuzmvyr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163msapggvj.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163vgjriskq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163banqxagl.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163tgegoxvu.html

SELECT * FROM (
来源：http://www.sxryk.cn/163aisxwizs.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163dupbsymk.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163gooiwluc.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163wvrzrchv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163bhtsiuft.html

[Q36] 左连接
来源：http://www.sxryk.cn/163tqerbihc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163eggtudai.html

[Q37] 右连接
来源：http://www.xuanzx.com/163neaytban.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163lgtkoqoe.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ygssqtaw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163ofoyzorg.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163djrmwcmv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163hvctzjah.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163yjttricj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163eyidrpuf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163lenwezei.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163brvulrao.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163qzntbtmk.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ofxbmmni.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163dlwqpiwu.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163llsclext.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163lypkhvpv.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ldagsmxz.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163fhswjzdd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ushbypnc.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163nlmtcfln.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163mtilozii.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163sehkizgx.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163iyoohxss.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163bfggwdes.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163wtkxzxpm.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163xgbtvbbf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163jrldhtae.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163tkrvotnn.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ykvxtclp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163yuxmkpmz.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163vyqqpsky.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163uaxbhhzz.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163wzwethtg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163dnzpxxvv.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ggffymhj.html


<!-- 参考信息 -->