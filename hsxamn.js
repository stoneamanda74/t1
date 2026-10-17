外链999!wailian999！

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.aibaodan.cn/163mkujqmfg.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163dudwqyli.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163vjcunbui.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163wohckbrp.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.xuanzx.com/163lcncymdg.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163yvoapivw.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163yuqpufvo.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163mhgfqgov.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.xuanzx.com/163idlimxmx.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.xuanzx.com/163ztzfriuv.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163csruxwbe.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163bbaqmrdl.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163uysbgorz.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163utegqjgz.html

[N11] 二叉树中序遍历
来源：http://www.xuanzx.com/163edzkscno.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163qkcgiblk.html

PHP:  // 手写递归函数
来源：http://www.xuanzx.com/163dlyxpqjw.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163lnandefr.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163bpzftknc.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163sbxzyjrq.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163pfdfbcsd.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.aibaodan.cn/163kcxxkvxe.html

C#:   // 手写递归
来源：http://www.sxryk.cn/163xkiutija.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163toqhhtjr.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163lyyximzq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163cmpgxqvj.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163lwhxopif.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163kdtdzcyb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163ulkcmtew.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163wfkpzroz.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.aibaodan.cn/163ndrxjufy.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163jmovrily.html

================================================================================
来源：http://www.xuanzx.com/163ghsauusl.html

O. 并发与异步
来源：http://www.aibaodan.cn/163toekvczl.html

================================================================================
来源：http://www.sxryk.cn/163yrkugtlb.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163scrouevs.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163syhieilf.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163uokhszgc.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163ytkwqlzu.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163iyoskccy.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163wrvhxlzn.html

Go:   go f()
来源：http://www.sxryk.cn/163hydejxmc.html

Ruby: Thread.new { f }
来源：http://www.aibaodan.cn/163bcekheqv.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163ptjtnoip.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163wpfjmhhg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163pnihlajj.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163zpkxkrfc.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163abxvplgo.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163rcwqxmqm.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163seacvxkn.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163vrrabgjn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163cnwroqjh.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ehikfava.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163gonlcwui.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163wagqjwwz.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163whifskwz.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163baxxbyhj.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163xhaoxmsc.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163aogulqbp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qqbxdcad.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163zeegdtra.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163bzqwetnr.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163fyuaucyv.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163qzbxxcgw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163vrrrsghu.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163hgtlaqkp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163cgigwwmz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163ckfqsnay.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163jvzbowhz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163caztuncy.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163tpjwvldu.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163wvgwlmof.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163edtlconq.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163qcbknkrj.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qeobqxgr.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163omumubzq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163nawbopll.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163uawqvuat.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163etnzxyyg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163wrbuiisw.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163uxwlekqv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163nxtdyjme.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163ykqofjtl.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163hpsmpcum.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163jrhefhdl.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163zeauohdj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163jrnxjqiq.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163rxowqqfi.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163bfqzvahg.html

================================================================================
来源：http://www.aibaodan.cn/163gymtfiqk.html

P. 常用工具函数
来源：http://www.xuanzx.com/163gyutwadv.html

================================================================================
来源：http://www.aibaodan.cn/163clzpagwg.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163pwesvqbd.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163lhvzubdk.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163yqskkgka.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163fwvgktsr.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hefertta.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163vuyuvpwb.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ptpudyhn.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163axolwlma.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163owewtdmv.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163ikcitfdw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163advnvtev.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163zqiwqgyj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163aqgcfokh.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163eigltawx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ipzabjqy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ijrwzsxs.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163oeotdymt.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163qqxugclp.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163wnguxbub.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163xyqbdjii.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163hzatrczl.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163oktnmwqe.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163hjywtcva.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163hxtfcury.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163rfnyomjc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163yzwwqaps.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163abhjqzbf.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zousjhvo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163xxmbydbz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rijxnmbq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163roltwxor.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163isoecfiq.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163gzsaljcv.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163ronyyxuj.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163squjdlao.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163hzbyqwca.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163eplkvfaf.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ogthsrqp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163gcjzkpog.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163thjusira.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163babsagkg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163czhqgtyq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163dahfsyai.html

Ruby: a == b
来源：http://www.aibaodan.cn/163saitebdj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163qqcwyune.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163fhprscrj.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163vqebawiy.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163gyrvpzcs.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163dbifrwbi.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163nvlsftsu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163crfzteoh.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163sblwxqbx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163qzdmdklk.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163pvqhphin.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163szmzcson.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qumqngwt.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163uspajiwm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dxypywmh.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163tvapugqs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163qwqivalr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163mnfmtsud.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163elkloytp.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163cwbzjhqq.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163ocqiwwbz.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163cremailb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163klnohekt.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163dedkbgjm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163wxugatxv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163qbhmbxwt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163jsdcxtzo.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163mvbpzfyz.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163cvjrfeng.html

================================================================================
来源：http://www.xuanzx.com/163ngnfhana.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163gkaxocbo.html

================================================================================
来源：http://www.sxryk.cn/163bevvczqy.html

[Q01] 创建表
来源：http://www.sxryk.cn/163imobazwe.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ulmpljbq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163tnztndob.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163oriipgfs.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163kfokfxbu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163pukfhbeo.html

);
来源：http://www.xuanzx.com/163kqyvnyor.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163wuzgfhsn.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163anggawev.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163goodxocx.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163xuvrzybz.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163nohauguz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163pnigaqak.html

);
来源：http://www.xuanzx.com/163kgxyemou.html

[Q03] 增加列
来源：http://www.sxryk.cn/163utofrwfa.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163vcbbkzga.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163kwhgpmuh.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163kzajdlsj.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163tlcfrfiy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163kkkeavab.html

[Q06] 删除列
来源：http://www.sxryk.cn/163emtvwoyy.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163dgqxwcus.html

[Q07] 删除表
来源：http://www.xuanzx.com/163kzdkyssh.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163nhqwaugo.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ieeygzcn.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163btbivbku.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163zyxstccs.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163yiexgyvv.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163prwjzvbj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163omwplroo.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163srsvojxe.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163hyqvfkwz.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163bgowskda.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163xwfcqhvj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163sdmddpdy.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163fpebebmp.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163csvpeqgl.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163efyllkfa.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163gipwbvql.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163mtaycdct.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163nyslreuj.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163quwibigq.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163iwjhbxga.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163gqokfgdo.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163jgymdumg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163yxhozozl.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163szjwfcnw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163nkrjzotn.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163dhplojld.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163bytivsat.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163glnsmsox.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163pngyofmv.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163hzaxkeul.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163socyqxjk.html

[Q22] 排序
来源：http://www.aibaodan.cn/163kwznuzzn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163whdjbqsp.html

[Q23] 分页
来源：http://www.sxryk.cn/163hqjlycet.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163hizkyjzr.html

[Q24] 去重
来源：http://www.xuanzx.com/163biulgdsv.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163atmcvxiy.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163clmakzsa.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163wxqkiihq.html

[Q26] 计数
来源：http://www.sxryk.cn/163ixpmdkwk.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163odezuwuy.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163owyztjud.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163rownrytn.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163hgjsplif.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ttsahjqf.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163frdbtsec.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163zuuryzga.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163duobjqvy.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163olgwjnrs.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163dgrotjqz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ttexingg.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163bpkpktxs.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zvjdxowz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163rgwxexdo.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163dbpzxvlk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163uxzsxjyv.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163phqecabj.html

SELECT * FROM (
来源：http://www.sxryk.cn/163qqubrqbt.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163mcovxefq.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163cwitaxtq.html

[Q35] 内连接
来源：http://www.sxryk.cn/163amhbgafo.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163cklqtval.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163stpjfpyg.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ivblrxgc.html

[Q37] 右连接
来源：http://www.xuanzx.com/163zabgdnwx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163jaxxblwc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163avyhgola.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163xqydbyvw.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163rdcflwmt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163tapkksij.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163onafvbmk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163lddjpfkc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163npmqvfrp.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163nbaivtpa.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163kscqdysg.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163lysnihfi.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163vxympsoe.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163cbvtdvjy.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163kowoaejl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163lgqtloka.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163fqszkclm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163dzrmmswb.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163egxwpioy.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163dygwbuwj.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163sbpvyosa.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pgveknsn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163hssjwlgm.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163felyfetp.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163xdskgazy.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163dkchxdsi.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ynnvolft.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163efkdpspn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163izwumjnx.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163awjatvgp.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163dzumnqvu.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ovzlonlj.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163thgicrvg.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163bzbwavls.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163yfxphudj.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163mswmwawy.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163mrwcwwvz.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163adysvubv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163ricfwhzu.html

[Q54] 清空表
来源：http://www.xuanzx.com/163gvqqtiss.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163eebdpxno.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163wnugcwne.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163cdkuejxn.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163guwtmlre.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163deotzbjc.html

[Q57] 行号
来源：http://www.sxryk.cn/163cjnbaaxf.html


<!-- 参考信息 -->