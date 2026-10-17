外链999!wailian999！

[N09] 栈与队列
来源：http://www.xuanzx.com/163jmsbzogb.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.xuanzx.com/163rityozqq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163cwzugvvb.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.aibaodan.cn/163bthvtecc.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163foklcfbu.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163ebxvcksc.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163yrvpcviz.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163kxlitmxt.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163yukpuokj.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163vnlmvauu.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.xuanzx.com/163erorxgih.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.aibaodan.cn/163mzuegpoj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163ycoxrdfq.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163xdyrsjzj.html

Java: class Node { int v; Node next; }
来源：http://www.sxryk.cn/163plcnxxsa.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163ckgkuhqv.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163zjtnzwpi.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163pmzcnyfl.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163qrwdjgqi.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163cdgwplop.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163tadxenes.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163jyuscnlj.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163oyqxumua.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vpneduxo.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163vbxcxhtt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163eylkshrv.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163gbcrpcnl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163gpqxxxrd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163ngsbywoe.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163easiothz.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163mjoxdcdo.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163yxmfhhnv.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163puhucvia.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163oxxrkiwq.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163jzdwmcgf.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163hnpgizza.html

================================================================================
来源：http://www.xuanzx.com/163bivcxctr.html

O. 并发与异步
来源：http://www.sxryk.cn/163abssdelw.html

================================================================================
来源：http://www.xuanzx.com/163lttxswqk.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163htjvxvxu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163votonqsj.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163xvclmgtx.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163ooqofsou.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163kodwmupd.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163ufisfanh.html

Go:   go f()
来源：http://www.xuanzx.com/163codagnzl.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163dsjejofe.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163fwxaermd.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163cikqccjo.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163zpjnhqdv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163knkwkgqz.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163nfjmxtue.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163jijkvrcx.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163fcgsuhhi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163mmxuhltp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163cmmvnkvt.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163qmhpxvpu.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163mlofbiie.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163lcuzrgxc.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163uovsfjjr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163oxuurwyj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163flegbzht.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163rubqmhnu.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163wavulpmp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163lfifmdct.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163namlcghs.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ppovoodd.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163wybtnedx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163yuosefri.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163nicoasna.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163giowijod.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163pbyqdafa.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163cqojxbxc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163fmjkilsz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163pblcwtuf.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163lxexcame.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163wdwdlpwk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163bmrpkmfw.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ehriqfny.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163xyhoadsy.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163etddfpap.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163dryjhcmi.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jkczbzgb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163rlmluzqz.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163kmkdsbui.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163rrzyedqt.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163blwmhqoh.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163imfhaldt.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ltqadnow.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ltujeinv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163sysacakl.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163niwmnrik.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163ufqeymgh.html

================================================================================
来源：http://www.aibaodan.cn/163ypbdoaud.html

P. 常用工具函数
来源：http://www.xuanzx.com/163cigkkipl.html

================================================================================
来源：http://www.aibaodan.cn/163oslqxmck.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163qeyszxxe.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163mftrsfok.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163yndcziqc.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163xhzeefjd.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vbavzsom.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163jluyhqix.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163uwhewrii.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163uqvpyasm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163yaqqktli.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163laqejezj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163utwfxvbm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163eldpvqvd.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ugdydxtl.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163egdummfw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163qssogyoy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163fmyvmzxc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163stisrxex.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ixnvltoi.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163plhmtqnj.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163qkslxjvd.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163djjyxbub.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163hzlqokti.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gsviksbj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163ojgggnrs.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163yssqatxr.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163tvioncec.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163yzzcfajh.html

[P04] 求长度
来源：http://www.aibaodan.cn/163tlgctgbk.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163omklpbys.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ysidwnvi.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163dsbpxwvu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ydgifbcs.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vjpgpueq.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163vcuikweq.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163twscwtvn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163fcbscxyl.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163fhrtkwar.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163ejjqmrvu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163mpeoazij.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ylfqrrul.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163leazjzkk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163qdpchnmp.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163mtnhzcof.html

Ruby: a == b
来源：http://www.sxryk.cn/163hsckearc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163sjgerive.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163mfyqvamm.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163meqcpnxh.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163jhjkvabb.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163nnkmfalq.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163nhbaixsw.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163kfrtlanh.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163yduwyiwn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163zfrddpoo.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163ggcloqjg.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163sqrvrant.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163erardjdr.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163euibuezk.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163maiavpli.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ycogbvkq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163hkfewnda.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163eorekgps.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163talmkupl.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163wlsymqua.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163sgdgfghk.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163jdkqsibb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163rpyoeqdh.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163hygzzoxg.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163ztvtxzwd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163zvdqpbde.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163aqiyrrwx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ihrwfawm.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163avgdljwp.html

================================================================================
来源：http://www.aibaodan.cn/163cwlfizgt.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163acbfevyq.html

================================================================================
来源：http://www.sxryk.cn/163uvsmugnn.html

[Q01] 创建表
来源：http://www.xuanzx.com/163flxnhkpf.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163uzmxgurm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163iukgtiyq.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163hqahgifk.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163jrfqrwbv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163uiftupcp.html

);
来源：http://www.aibaodan.cn/163xbishzde.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163vljinokp.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ettkcthj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163mjtkujso.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163vourrlrj.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ounjtivd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163cpvjhqpx.html

);
来源：http://www.aibaodan.cn/163dwqgvvnu.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163wxxhqpuq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163kzcjjlgt.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163uquoddjv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163mtkzvmnv.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163evzmeofe.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163sblgxwrl.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ovrwxkqt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163fsmxdxkj.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163cdwksomi.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163lhbglwgf.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163jegcaqdl.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163hinplgck.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163qtjpzyck.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163yurbzdhb.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163hecrutri.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ebdelfmn.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vjyzsmsr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163fnnaoqen.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163azzpbgss.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163afaizesc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163dqomlelu.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163llijzdfn.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ogleurvo.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163elgyuiaw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163bqkvobjs.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163kkqmvwtj.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163suobamji.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163esailcgk.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163xoszvuqd.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fbnfcdox.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163gbfrrmdc.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163szujutdd.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163bhdpqyov.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163uymrokjq.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163qbfryhfp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163dffkrulp.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163blmjhdvh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ldsgizjn.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ujueylpk.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163huocagfv.html

[Q22] 排序
来源：http://www.sxryk.cn/163bkpnvofn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163pjobderv.html

[Q23] 分页
来源：http://www.xuanzx.com/163tgdlvbet.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163bqweeree.html

[Q24] 去重
来源：http://www.xuanzx.com/163klondiwy.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163rvbtfvuj.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163awvcmacf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163nukmyqvs.html

[Q26] 计数
来源：http://www.sxryk.cn/163oehkgvus.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163bmdrzjap.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163unszmwny.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163czjvmzck.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hbqzglxu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163wynnfvwt.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163cioiybku.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163mepegzbf.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ypikozmj.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xoukmjyy.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163drggmeyx.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163jeaoqgmu.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163lvzmvput.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163uyygkzwn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163iyqormim.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ufjpxecs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163bvzxajln.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163lrrrbvuc.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163zjhkfzoh.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163alrycidu.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ytvmiyta.html

[Q35] 内连接
来源：http://www.xuanzx.com/163nqifxcxi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163kwamsyul.html

[Q36] 左连接
来源：http://www.xuanzx.com/163jzxkbiez.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ebqxslhe.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163tkjiscsh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163gzerfojm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163qwmphmcu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163zjzceedj.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163scxkltzi.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163omoledpa.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163olfocwxm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163fuhxvaub.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163npjjwlyg.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163luoraghp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163rwqvxjct.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163etrikfnl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163yupnfnls.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163mrkvdvid.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ujfbiwap.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163nfevlgts.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163niqwfqov.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163xozmmyga.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163tizwkdvy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163kroeafwt.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163iccuuxtp.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xaewrjoi.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163obvouafs.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dppfuiqi.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163frtcqpis.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163vbzvbvvj.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163eylpaoeo.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ysvgbymj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163kcwqixnt.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163hedvxkpb.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163cshcbsjk.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163qiekgqbw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163fzqqudgl.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163tvfhwbrb.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163htxmbbpx.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163zujgulpy.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xywznfps.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163egryvltn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163fhghnspz.html

[Q54] 清空表
来源：http://www.sxryk.cn/163loxudjrc.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163usfqcken.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163xtgexygg.html


<!-- 参考信息 -->