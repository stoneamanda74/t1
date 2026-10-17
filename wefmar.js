外链999!wailian999！

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.sxryk.cn/163wnsrrjbs.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.aibaodan.cn/163znnzzqkv.html

Java: class Node { int v; Node next; }
来源：http://www.xuanzx.com/163rizzotea.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163ojytscin.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163mfsteofg.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163ajvyzifk.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163yrjxcmgo.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163hvrmlskm.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163vexeoudn.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163ekdekzep.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.xuanzx.com/163nmbcjuiq.html

Java: // 手写递归
来源：http://www.xuanzx.com/163vzayvnor.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163alkwhwnc.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163ctztnnzr.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163rewghfgl.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.sxryk.cn/163goojjbsh.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.aibaodan.cn/163vjuchnpq.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163kxkgaxbv.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163uvlhcgea.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163jygfmewb.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163ltruvgwe.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163pjxkaxlb.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163chulujcn.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163teizyjwp.html

================================================================================
来源：http://www.sxryk.cn/163btevbyrz.html

O. 并发与异步
来源：http://www.sxryk.cn/163prkupgtc.html

================================================================================
来源：http://www.aibaodan.cn/163kgpqmrru.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163dyyigudd.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163fcepvvmg.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163abewwfgd.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163oslgmkaa.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163pcwvysxa.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163glakqobn.html

Go:   go f()
来源：http://www.sxryk.cn/163vtldnbla.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163hewutbrl.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163wamulpxl.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163efpmurcg.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163ozvnixrp.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163upwmcezj.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163wchsaykt.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163dhcutmug.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163akbqhzsj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163xwvtpenl.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163oovyzjel.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jspzkkja.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163wgqbgotx.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163dwwgjmbs.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163lwyyevdn.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163yptxijdf.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163npajatfy.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163uxfbucrq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163qfraewjp.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163jesyunqc.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163yqhofcit.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163tbsmqtzm.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163awqhwyck.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163hpphqsxz.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163dihgxwdg.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163iarnrpmr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163pxlghyrj.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163iuniiinj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163pzcdgcve.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163pambwmox.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163wtkhjbmx.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163bcuozcwj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163wnhiknpn.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163gtenifda.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qqtrwflh.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163oluehxkq.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163pbeuyetl.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xljvewxv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163lrnvnkud.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163giyxzrgm.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163lkjoiddk.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163fesfezzf.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163karzwvln.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jqkkyecb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163ylyjuxcu.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163xcgzvrfp.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163fyptumuq.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163zhzmrkdo.html

================================================================================
来源：http://www.sxryk.cn/163dkouequc.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163idrbhpaw.html

================================================================================
来源：http://www.xuanzx.com/163sqoqjxym.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163qhalhrpu.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ketffdhz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163yoostgwl.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163uruljlho.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163anbmarzw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163nllqmwda.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163aejqmyjj.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163cugpqrgp.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163dtoakqvx.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ednomkzi.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163dnrvgvlv.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163otxafqbp.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163fhtpbiok.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163ymeihulx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163toiuzwhk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163kerfyfgq.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163qiufmcoh.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163lphzeazk.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163bxleabwb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ugncnwfb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163idtiygiy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163pzwctzjs.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163bvqfkipe.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163awwsqlmz.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163cabtdlnh.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163gfnrprip.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163lunmvpbd.html

[P04] 求长度
来源：http://www.aibaodan.cn/163zeeaedbg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163rpwmksxg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cisgauqf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dgpzrjli.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163idmqupla.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163lwpqnzhr.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163mhrgzpqn.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163fitiqxhe.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163qmntyxgl.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163hbjkfjid.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163fwxwkrsq.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ulvynbcu.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163lywnqmgn.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163epvzrvqk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163sghdvfud.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163exmdmomq.html

Ruby: a == b
来源：http://www.sxryk.cn/163bnfxjrsy.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163rrjfasav.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163fuzjxzii.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163bhtgkvsc.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ecjzgcxu.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163tqriwqtj.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163rajdeyta.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163bffmfiff.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ffanscpr.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163unjovumw.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163qhoccmsj.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163vnsxgilm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ecgrilhl.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163yowondng.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163pfzvmjdr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163yqqywsvx.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163ddgjfnca.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163ciusltmb.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163skqsytmz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163ggkevbxy.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163lknmvmmd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163jaboplob.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ejhxxrxa.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163qtmmdrvs.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163impnvnbf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163wlhkzdmb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163fzksjkqh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163xmexxqfh.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163daapmciw.html

================================================================================
来源：http://www.sxryk.cn/163uhxxdgni.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163gtgkafja.html

================================================================================
来源：http://www.sxryk.cn/163aftspcei.html

[Q01] 创建表
来源：http://www.sxryk.cn/163flszrdqg.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163drqfujjp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163bbzbtuqb.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163avxspuaa.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ifalwypp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163fbjqaxjh.html

);
来源：http://www.xuanzx.com/163tcchhxhk.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163irruamkq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163akrhgezb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163uxrvuubq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163fbavpkoo.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ngjgrymw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163ehnnadus.html

);
来源：http://www.sxryk.cn/163ljhqlcvj.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163bqxicciq.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163tgkzvjdp.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163sivstdnv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163zlxgvllh.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163zijcplei.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ptyrunwm.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163ppaxmgnu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163arjowqkw.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ukyilckw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163zlxnnftf.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163njxtqbxe.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163zvghdyuu.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163etuklygc.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163whmfwjjt.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163agdgapgd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163hdmwpbyq.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163msydpffa.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163cvhdvvci.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ncjeieko.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163jmfeqghc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163uidqtwav.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163kwrtkpjz.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163ktefhbbn.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163qoateayn.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163msppfehz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163fgbzyugl.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163flqegoup.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163lgfaxowb.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163mdihilzh.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163jazcjvqi.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163jcntdudp.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163jqlpyfab.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163dajioibj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163wzbnqqwv.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163rimmgzbt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163hsljnysl.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163mbyhicqh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163jleiagra.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163vmebxabp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ozlfwmzc.html

[Q22] 排序
来源：http://www.sxryk.cn/163tpbbyvwl.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163tgrvdhyt.html

[Q23] 分页
来源：http://www.sxryk.cn/163ttjrefbk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163pqvnebbu.html

[Q24] 去重
来源：http://www.aibaodan.cn/163bqnqrjhn.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163fpfhzgdx.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163dojbiadj.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163trpofckv.html

[Q26] 计数
来源：http://www.aibaodan.cn/163vcxezteg.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163tozeomut.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163skwkxzta.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163phwpnhja.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163xpybsuxb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163niptxpso.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163pxglchqb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163niypyiqx.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163fqzjmouv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tvpvsuvx.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163fwrvbhku.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163yjucctpt.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163nsbhhgib.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163huakwrid.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163ydxagqca.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163csmaypmr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163ybnwxmau.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163tfwpqult.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163dtihayaw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163jpaxqgro.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163slwbdfbj.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163zyeytlae.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163nkydjvqn.html

[Q36] 左连接
来源：http://www.sxryk.cn/163xcxvgpqp.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163pcsmyihp.html

[Q37] 右连接
来源：http://www.xuanzx.com/163bbzjtaca.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163dtacgxgy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163qezdjauo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163exmrxnuh.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163fynncrun.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163tllrimeg.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163qtuhotyi.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163jhepdehi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ejtojcmr.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163rhezbsrx.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163eyxudxsb.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163pwrrzgrf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163pzgujrhw.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ujqixszg.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163qcnwgjrb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163lcjblvus.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163gtqnhdax.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163fadbkhmw.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163pcjogytc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163tukgplvg.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163tnuifvhk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163kfiiwbtb.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ncvpnkpn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163bsgqdluo.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163uwabpljv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163auxrvexa.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163cczttiaf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163lzkfjiud.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163dtpzyatt.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163hnoznxmv.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163fnlhxfoo.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ryghnanu.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ggwyanmi.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163fxhawecr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163gvpootmj.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163aiqhrzkp.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163fmunjhcz.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163egpbnizx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163iwjoelnd.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ewxotczd.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163emipvfxf.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163pievcapk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163psnsmoun.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163kerzhvzy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163dqoskklu.html

[Q57] 行号
来源：http://www.xuanzx.com/163bxpseglb.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163turtzwlw.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163odytomwb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ztgbegjb.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163wvlqgubh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163uwxegjll.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163ouolullo.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163pfrdwhhl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163sbtlxeip.html


<!-- 参考信息 -->