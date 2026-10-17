外链999!wailian999！

[N09] 栈与队列
来源：http://www.xuanzx.com/163jrhselej.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163rtjyoqil.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163avakyimt.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163isfuafeq.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.xuanzx.com/163cysulrcs.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163rpstkjjy.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163kvcvfvzm.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163kpzkaqqh.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.sxryk.cn/163bvyaqzzw.html

[N10] 链表节点定义
来源：http://www.xuanzx.com/163eubvamhz.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163lodoslos.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.sxryk.cn/163nyrennfj.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163mecbrmts.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163oldyjmct.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163xqwxyyso.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163leoimpmc.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.aibaodan.cn/163wttqfxhw.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.aibaodan.cn/163hqncpsjc.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163dhbunmbh.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163xngugdlw.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163futlmlxv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163pbpemlat.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163rpewukpi.html

Java: // 手写递归
来源：http://www.sxryk.cn/163jdvcpxlf.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163quruqvnt.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163ukfxxrgu.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163srvwjvmd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163revvrhca.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163ambybuhj.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163csvpucmc.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163gjasjpmj.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163syuzsquz.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163rqzcyave.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163sefnhfxk.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163euuatqdm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163lbfkjcve.html

================================================================================
来源：http://www.xuanzx.com/163cawsaseh.html

O. 并发与异步
来源：http://www.sxryk.cn/163egtyiumo.html

================================================================================
来源：http://www.xuanzx.com/163cvaxybxi.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163mnchvqmy.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.aibaodan.cn/163andiryfn.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163amcupunh.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163hvedhujy.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163jtmaggtb.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163potuzlgc.html

Go:   go f()
来源：http://www.sxryk.cn/163tpyvnzda.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163qjowkxnc.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163hhoqqdfm.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163yzkzpinc.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163ayrwixsp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163dtmbcfkq.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163adyxrbrz.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163zewvbadw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163bxpjloyy.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163ugztkrzt.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163tyujkkue.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163zyillmxp.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163sidfqzfx.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163tknlbxxt.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163xqpnvkqk.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163oskrfvxv.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163ugdzbpcb.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ssahwadh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163rvfwlfnp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163bsixjiwu.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163kstsvykq.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163niysunhv.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163exxxxnlc.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163gsklvogm.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163jepsbotg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163gvrcusaf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163rpacccmk.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163nazqoybv.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163svevxchu.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ssxcmeux.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163sxqhmtaw.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163kogggfez.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163fzlcjkci.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hwidwcqp.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ishlgeyv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163htjaiihd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163mrshdxyy.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163qhegxzma.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163iqsztvuw.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163sstmuzeo.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163lktzwglb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163etesodvd.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lxtqlbxt.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163npkafqhv.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ioatiajz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163sudnphlr.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163mjjodsok.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163abjmfmyj.html

================================================================================
来源：http://www.aibaodan.cn/163gcwnmmre.html

P. 常用工具函数
来源：http://www.xuanzx.com/163rqcshpdt.html

================================================================================
来源：http://www.xuanzx.com/163qdremikm.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163bgnwouef.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163vbeyfnun.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163ylfrogdp.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qawouyvq.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163scednjju.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163hstvmibr.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163owgwygqh.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163tgdeodeh.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ecswmoho.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163xbyjxjzr.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163niamtrsw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163zpivrrtm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163rgaucdyz.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163dsksdayy.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163xailwerd.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163gdgwngit.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163abfiyvzx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163qtcsyylb.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163wvxhfuhz.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163cxcnlisx.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163bougxnrx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ksexipyt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163alurnjgk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163hsadxbij.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163tmexamxs.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163dgiafyyw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163iitdobup.html

[P04] 求长度
来源：http://www.sxryk.cn/163sxpcoesg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163jvcrvwen.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rwtarurm.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163yxspaucf.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163yqfgpzuu.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163fombhgat.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163jcibkkrx.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163wfkfeokq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163nazioeml.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163udrosqtv.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163mduammzz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163lvulkqby.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163sailahbt.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ayvotokb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163mvjhqhyy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163nxmcghbo.html

Ruby: a == b
来源：http://www.xuanzx.com/163dpwxoebf.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163dacilaak.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163jcrbzgoy.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163fflprjyt.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163iqdascgt.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163ibfezuad.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163oymgvuqs.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163sopihrod.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163yxpftlwn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163jdnmemcc.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163gkuajman.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163kztpdbif.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163ofzxkjbz.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163ugscndww.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163aoppcfch.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163msrliryp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163fcqibsrj.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163sotrqizr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163rhateyhz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163rviqyrhu.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163hpamwtab.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163lzaetblw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163apuwslmw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163feegsaoc.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163fxlxvvtv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163zrbilgap.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163mgfxvjdw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163zwfsvjmh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163jdfwwaef.html

================================================================================
来源：http://www.xuanzx.com/163bopmrhlu.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163bzrjypip.html

================================================================================
来源：http://www.xuanzx.com/163grteitus.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163tthikcoe.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163vkxqcrzo.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ftmcvyee.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163nzpydynb.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ynkdsmzi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163zdeasqty.html

);
来源：http://www.aibaodan.cn/163aexpwuha.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163ilsddybu.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163bzurrvrd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163lrydkpda.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163kfsnynbp.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163isbdlgnw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163jnibubjz.html

);
来源：http://www.aibaodan.cn/163uoetdwlk.html

[Q03] 增加列
来源：http://www.xuanzx.com/163sppquhmk.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163nkxvjqca.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163uuuaseuf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163xaeeotro.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163lmelaozz.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163amyvkagi.html

[Q06] 删除列
来源：http://www.sxryk.cn/163bnmmlnff.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ybdnhmtq.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163gidpspjq.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163nvtyxeha.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163pgewiube.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163mabblkcz.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163zlihodjb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163kghtzhjz.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163endplckn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163zzxgnxkx.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ovpxlimr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163fulniqms.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163qxflolxd.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163xjrlqxly.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163jesegiiq.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163oyhwjlmb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163tnctdefv.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163zgewnrxd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163yealmfsv.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163eqplogyv.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163bewofcri.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163rkqfzsdr.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163jevpkkvb.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163xurdbqjc.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163measlfvl.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163hpoudxlj.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163dzocyxkh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163eosklwir.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163ulkvfred.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ezjgzwzh.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163igqxvtcc.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163iovdzder.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163fbvhuaog.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163mzohqann.html

[Q22] 排序
来源：http://www.aibaodan.cn/163xfphllsc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163pnfrhbfg.html

[Q23] 分页
来源：http://www.sxryk.cn/163ileykaxq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163jyhmenmp.html

[Q24] 去重
来源：http://www.xuanzx.com/163ntsykatt.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163ufgvfocl.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163dryaerkd.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163qanhkerl.html

[Q26] 计数
来源：http://www.aibaodan.cn/163xgjrlrfe.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163jhmjdhpd.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163riwrbpbn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163jhnqypgs.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163rsqmxabl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163arxofspo.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163rtzahsuy.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163hxrogqxy.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163ztlbeiwo.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163stbqpvso.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163viqzlxjz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163iiptnrwt.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163soridcwn.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hbxmaqel.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163gvkpdtjw.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163mewpddmb.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163wiumkzpy.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163iaeuzgkm.html

SELECT * FROM (
来源：http://www.sxryk.cn/163julyzpdn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163yvfcfqcp.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163eeqmxphj.html

[Q35] 内连接
来源：http://www.sxryk.cn/163fdbojazm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163frkuqwem.html

[Q36] 左连接
来源：http://www.sxryk.cn/163tikkozoz.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163iznzrwmz.html

[Q37] 右连接
来源：http://www.xuanzx.com/163lcdtkosd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ucjwiyuk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163dsrqvqpr.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163luunidjs.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163qaejqkvu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ifcendss.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163xqzvuvxz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163ewxaudar.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163tnypirts.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163tfoivrjd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163lttlsqkj.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163nwgqzwxu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163xefjefxl.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ctkhfzqe.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163rqsazofa.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ikqgjsvv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163glsosyqy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163lmokaizn.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ntglpjxl.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163czpyuinp.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163tmidhhoy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163etznrags.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163wewbfxyu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163nciqljld.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163gkqcbhne.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163cfcxdgik.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163bfhrfkwl.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163tfnvxsix.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163fnvtewdc.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163izvhqwsd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163xrkbpelw.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163euhoazqx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163akflymkz.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163dlncnzhp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163bunvdotn.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163dlpszmei.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163uthynzlh.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163mnlawnpu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163jmrmzmks.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163vfszxbkg.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163fpfacckc.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163wbmmemgn.html


<!-- 参考信息 -->