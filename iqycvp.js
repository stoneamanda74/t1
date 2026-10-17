外链999!wailian999！

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163mdgsjppa.html

Go:   // 手写回溯递归
来源：http://www.xuanzx.com/163gyjlqvth.html

Ruby: arr.permutation.to_a
来源：http://www.sxryk.cn/163tcjqhtso.html

C#:   // 手写回溯递归
来源：http://www.xuanzx.com/163mvkykwad.html

[N09] 栈与队列
来源：http://www.aibaodan.cn/163uqfkqhop.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163wamtjctq.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.xuanzx.com/163dszsrjqt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.sxryk.cn/163zkaansxp.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163mnnacmio.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.aibaodan.cn/163tmlwdfyz.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.sxryk.cn/163wckvtira.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.aibaodan.cn/163burmqxuw.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163vcdtdlwz.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163fjbqpwft.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.aibaodan.cn/163lxabasbo.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163ebcwlvjh.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163wssyzncg.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163ikmamiay.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163eupctmfu.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.xuanzx.com/163hfamrkmu.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163qeoesumr.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163hikcwubu.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163zldzfbfi.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163popwpoyg.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163gxtuahvs.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163xpzzzlrr.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163xnbbjssh.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163jexxukui.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163fchhainx.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163bkgajiak.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163uxnvvyfh.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163lkfzsptw.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163jqvmtcqk.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.aibaodan.cn/163admvxnqq.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163rdeclhpc.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163ctnmkdid.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163shscmquk.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163duqgyfuz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163xedaniiu.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163bqrolaam.html

================================================================================
来源：http://www.aibaodan.cn/163ikcztimu.html

O. 并发与异步
来源：http://www.sxryk.cn/163pcsjnitf.html

================================================================================
来源：http://www.xuanzx.com/163qohedcku.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163ccbfsjar.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163dutwhubd.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163vrueskhz.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163jzauxywb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163bucopsmr.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163nwjnxszb.html

Go:   go f()
来源：http://www.xuanzx.com/163ocgqpeaj.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163boedodti.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163ygskzkki.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163vyigfomg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163evecqbmg.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163zezhvsgt.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163hgdlvyil.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163glvxsuep.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163jcbwmvfk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163gliwzxpw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163npqymgad.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163lfqlfgsi.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163jzdfuzxh.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163nouefmqw.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163lmfqfgol.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163cweostgv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163xtsymnzu.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163jqwwtxcy.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163cdizjrgt.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163nzxnjwks.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163weechcua.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163xciuypap.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163abiwkyft.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163zvivjzfl.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163gveaqgag.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163svhkgwfw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163hyelhptq.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163lbgajcem.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163tevriabc.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163pjwcnrqe.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163ctunrvvp.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163vcducjvp.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163oaeeljvh.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vctratxy.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163oacyxqum.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163sngkjhhg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163rgmdlpxr.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163atmdzdnx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163yxdxvyuv.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163zyocazzt.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ewgcpqun.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163qwmogzot.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163flhwbggm.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jrirqyoh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163glzkvcmv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163hqxyqwhk.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163soupbuzd.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163tqvpnoeu.html

================================================================================
来源：http://www.aibaodan.cn/163qxxeuqgr.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163yzlawacw.html

================================================================================
来源：http://www.aibaodan.cn/163vlragpeq.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163xveowivz.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163uvjhztuu.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163wyuakixk.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163umpssiyd.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163kcjvpgnq.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163uveazwxk.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163eclspoiz.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163qaqkmifq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ngrlwhqn.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163lcixvuop.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163zadkldja.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ywklzlkk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163mymzqrie.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163yysmvmja.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163kygvoqxy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163rljuhgbi.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163lpsravld.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163plawhuqe.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163rthkzezt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163telrebss.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163kbtufzsk.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163smnoeepx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kmdpemcj.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163cpobiwjn.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ywmzenik.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163bigevmjb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163wlvvdtiu.html

[P04] 求长度
来源：http://www.sxryk.cn/163itxpzgtj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163tpomujqp.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163maagofdo.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ittvxrcs.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vbtjaayt.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163groifqfv.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163upmhekdp.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163fevckbff.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163imzbmyqe.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163shljqqrq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163pvdqvawn.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163dnukqpnv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163seuzkkbt.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163thfyopqn.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163inskeoib.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163puphgqnl.html

Ruby: a == b
来源：http://www.xuanzx.com/163ebxnuaoe.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163kumiagea.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163kdrbgcgx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163fhnoklfd.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163srbabaii.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163retfbasx.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163wwjccoju.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163squnyxnk.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163gsyxqfrq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163utroyfoq.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163ytljiqwo.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ixcchblz.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163svzdacii.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163gmchxhcs.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163frebqhid.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163rikyakvd.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163bnjowjoq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163workoqxy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163cbondhzz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163pkwjypzy.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163kfmasbjs.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163dexrqsot.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163uwyjvtrf.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163cfqtzdhc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163xbosmpel.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163bknnhyop.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163gfqfzezc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163qynawdde.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163zvuntelp.html

================================================================================
来源：http://www.xuanzx.com/163mmyzwncy.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163dfvguiwp.html

================================================================================
来源：http://www.xuanzx.com/163qxemhugt.html

[Q01] 创建表
来源：http://www.xuanzx.com/163ihngjjmq.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163oyzlxlaw.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tuhhkddo.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163tqhppygc.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163upxgsfni.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163cdmcfnyz.html

);
来源：http://www.aibaodan.cn/163hleuozjp.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163csqkzqeb.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163tzhnymnb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163kkaocidu.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163etlfqroc.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163othkvowf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163ouhdksks.html

);
来源：http://www.xuanzx.com/163norhhmbi.html

[Q03] 增加列
来源：http://www.sxryk.cn/163zfcrguyu.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163lckjenyn.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ymwatiwf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163kcesyxkb.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163hayfzuvq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163frgyqgmh.html

[Q06] 删除列
来源：http://www.sxryk.cn/163sidyvhqn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ysiclzjc.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163lpbvykwv.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163cigvgrct.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163exyejfuu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163xgurfjqm.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163sovbzgyg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163lkkdngbg.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163orrcmjls.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163rzhkuzzt.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163yuxqtodo.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163fsrtyiuc.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163zsftzoin.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163hnscylka.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163lxwwzgau.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163ujvjiyjh.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163fhxqbanm.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163renupjit.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163xawniria.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163arguoihy.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163roezkhyh.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163yfcojexq.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ooywxhxn.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163htnbawyt.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163lmhbhmle.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163anwnwwkm.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163hhmsrpdi.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163qcgdctgk.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163amrtjzli.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163nrqnbkwq.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163pzgvzvqr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163mndyipdx.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163oqurajcn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163utdlkiwd.html

[Q22] 排序
来源：http://www.xuanzx.com/163wwtpkcch.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163jpcjvfkz.html

[Q23] 分页
来源：http://www.sxryk.cn/163voxikdmq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163fwpapymk.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ejdmennf.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lxkiznwj.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163mpangzvx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163nzgvcotu.html

[Q26] 计数
来源：http://www.xuanzx.com/163vilyvyjo.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ihjrcvrr.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163xwdtrywt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163tbmzvbda.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163tnokbfkd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163madckvab.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163pjumoels.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163kbmdfgkw.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163kctbdzsp.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163liyztaku.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163lepmfwem.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163aftyfdzx.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163adhbstkb.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163romrchfp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ymfokiyu.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163lnavpvfs.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163pvhreuyt.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163zvcsqqxk.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163axrfqyjd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163plfxefug.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163xxibngpw.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163zcvfkfhw.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163gzmnyzqy.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163fnlwtplp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nxwwdusq.html

[Q37] 右连接
来源：http://www.sxryk.cn/163ykiuhodo.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163bsktdegj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163mxibmtur.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163jygsdfpn.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163nzdblpdy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163gyyhglvq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163doslbaml.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163jowazspw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163bkbgjnos.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163pcoldyhn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163nhlrysmr.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163jownprcl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163txsclbbe.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163cuagwypf.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163jgbipqzo.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163kvufvtpi.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163uravteyf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163klswbnxj.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163khoxwwys.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163rcpcthxi.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163vovjayvy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qglzbwcq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163mszpsqrt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163fhjrvmwq.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163kpldxmuy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163nubhmklq.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163kgsapidh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163oyaukppi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163fuiljysl.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163xcwigndt.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163wfpltssm.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ckrvavbo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163bavrucbe.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163dadltamr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163ftzuftvx.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163reoiatxh.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163lsvfqesb.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163opjbtwsl.html


<!-- 参考信息 -->