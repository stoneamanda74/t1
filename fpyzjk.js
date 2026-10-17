外链999!wailian999！

Ruby: Node = Struct.new(:v, :next)
来源：http://www.sxryk.cn/163yqgnlpjx.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.xuanzx.com/163ifcdycjm.html

[N11] 二叉树中序遍历
来源：http://www.sxryk.cn/163utykvczp.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.sxryk.cn/163kmibonwk.html

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163ovtabqha.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163twwfvtgp.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163tnzibafm.html

Java: // 手写递归
来源：http://www.aibaodan.cn/163wfaynnqb.html

Go:   // 手写递归
来源：http://www.xuanzx.com/163xeagrfdm.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.sxryk.cn/163tqhdphui.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163pnfxdtdg.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163epgyqxrd.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163cichngyt.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163oqsilfbs.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163tndhmlnt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163pwfngjmh.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163valfxgpx.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163sowzrwkd.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163vvtbsyah.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163hijxhtqa.html

================================================================================
来源：http://www.xuanzx.com/163pbenvxve.html

O. 并发与异步
来源：http://www.sxryk.cn/163zkvtdrmr.html

================================================================================
来源：http://www.xuanzx.com/163dtmffhaq.html

[O01] 启动一个线程
来源：http://www.xuanzx.com/163lyujhfjx.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163hqoopnfw.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.aibaodan.cn/163dcogilow.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163kdeoobaz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163nczgsxoy.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163jjmzyrht.html

Go:   go f()
来源：http://www.sxryk.cn/163zucuypme.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163vpiqzhln.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ktdihynk.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163cfgpxgar.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163euhdwlba.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163wxidhpnk.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163lhghjjks.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163kffxfioj.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163laxqdqfn.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163micvwrwp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163uyhxvgge.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163bhdokdos.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163arnpstwn.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163qtbhlvyh.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163qqtizian.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163jnaneqzr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ucmafzdp.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163zimuprwz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163xonlpbaf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163idckhueo.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ecohpkpu.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163kjekhdnm.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163wytmqmoy.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163ugzlpcfj.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163tjmzckzz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163atitebnz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163bdylmmdy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163foeolfug.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163xtilgsmu.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163btitflhp.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163yqutrsse.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163leevzkii.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163nqbwhppy.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ljkykriq.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163qpwjawbz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163reoauowp.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163jibezgum.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163noltjtrc.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163viwdscji.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163rpsghcvr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163mpdninfx.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163xikigxms.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163slhtreyx.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163olauyshq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ikiswmug.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163zeufdvnx.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163iajcdsys.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163wbqdgfpd.html

================================================================================
来源：http://www.aibaodan.cn/163mowqrdab.html

P. 常用工具函数
来源：http://www.sxryk.cn/163tamqgpdl.html

================================================================================
来源：http://www.sxryk.cn/163gyywyqiw.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163xealectr.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163dghgykxz.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163qowbwsfp.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163mldzxapg.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ajpwbrcc.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ziplqfpu.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163frplbjnw.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163fxrkfxhb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163vzzpqkam.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163qzvblyww.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163ckcinwpi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163kxsjnslt.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163nvzfsufi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163lryyyers.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163tbjgjwmq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163geoxbiqb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163rhkugcki.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163siexfyer.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163cpgyhxay.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163wppnmpfp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163rbdtfrlz.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lhgcwopx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163bmmppefv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163rowotopk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163eddhatuo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ljsumuwe.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163sjltafjd.html

[P04] 求长度
来源：http://www.xuanzx.com/163cpbefxvg.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163gjpyzcnk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nfdmnnqh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163czryfmbr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163sdaasmzw.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163cxkkcwed.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163lekxzwej.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163sminihbs.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163zvwwxeuq.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ziakigdh.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163zvwauwdw.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163lkfqecgb.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163pbzuvuel.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163ehsdyvyg.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163gvagjhtm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ssxdslph.html

Ruby: a == b
来源：http://www.aibaodan.cn/163jwemgvou.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163sknswlzh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163sbrbbbcs.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163uiqlftcb.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163yruuzejz.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163xuryzwcj.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163byhtknou.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163dtjfxbdm.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163asenamlq.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163kwdjrkvf.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163kqhhkjfh.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163gupnyojy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163czqofcnr.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163gzyqfabj.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163gkcasvno.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163sqpzzyio.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163rlrwruoy.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163upkjlymh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163xxihnbhr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163hbnnomfb.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163cqtywffu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163bddwsink.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163mkklgmpe.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163uhxlovvo.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163kehwayrx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ndtcwfbv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163szsexphx.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163ecmiwyip.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163edcwnidm.html

================================================================================
来源：http://www.sxryk.cn/163tuumtqyo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163rwclbieq.html

================================================================================
来源：http://www.sxryk.cn/163cyrjwdep.html

[Q01] 创建表
来源：http://www.sxryk.cn/163knayvtaq.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ndaxaeej.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163zwuyldou.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163lmrellci.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163nesqfeme.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163vxyaqxec.html

);
来源：http://www.sxryk.cn/163pcvuzfsq.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163keisxkky.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163vcjzlxqs.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163jirurebf.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163qkehjoaq.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163anvmauim.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163caqcstmg.html

);
来源：http://www.sxryk.cn/163ylgwokvd.html

[Q03] 增加列
来源：http://www.xuanzx.com/163mxaemhha.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163iuwjwklq.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163kncosqwx.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163uvntpdwi.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163mjidsato.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163rwjqhlrl.html

[Q06] 删除列
来源：http://www.xuanzx.com/163xkzkatvp.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163qtjxwnzo.html

[Q07] 删除表
来源：http://www.xuanzx.com/163xkshwiqz.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163wqrtothr.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163tgbbviwr.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ivgkeahu.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ciszmmwi.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163htstsyvi.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163xkxnqssh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163qdkdazid.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163vqvbjtrz.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163tqqylkep.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ixfljvzf.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163thlchyap.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163xloteasd.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163aszikktm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163veqalqdc.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163jmfqrgng.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163zfjdjbwb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163twezhvlr.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163slhltgrt.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163zbrxanzi.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163xodobelj.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163qtvxpmdo.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163jgzdipei.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163jtyncedr.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163ffsvadnw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163jrbxccrd.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163nvgrnkvl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ygpiuoxb.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163tkimclus.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163nggsngot.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163jgwosbpb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163mhdytgtn.html

[Q22] 排序
来源：http://www.aibaodan.cn/163tjncaqtn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ugmoazuo.html

[Q23] 分页
来源：http://www.xuanzx.com/163prsxuuwj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163lqgshrlg.html

[Q24] 去重
来源：http://www.sxryk.cn/163ibdpvwws.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163vtijovgp.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163vurykoee.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163irktnotv.html

[Q26] 计数
来源：http://www.aibaodan.cn/163gjqtzuyb.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163mljagaer.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163qyryykrb.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163upxiboxe.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163vdpjttdy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163atbewlqw.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163rikdiovd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163noljnspv.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163qqfqyurx.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ghmnabrg.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163rchadtzj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163eylathve.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163xxhyctjq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rbdoypsq.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163llwqpshy.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163vxpwafhv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163umvikeba.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163nawdxgrd.html

SELECT * FROM (
来源：http://www.sxryk.cn/163esmyfvyo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163niaejcbz.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163rtfqzouk.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ahwmlksi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tlhtzyzy.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163obtonsac.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tumwvusl.html

[Q37] 右连接
来源：http://www.sxryk.cn/163goslngbf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163obysgnrc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163dhpjmdrw.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163xexagpfx.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163dcnmisqr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163fmqafbor.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163wrylicgp.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163kcburcnz.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163kkdplvay.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163hbokofby.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163onaitxui.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163nveoarlm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163blsecddy.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163gfuqfbfk.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163igcrpbxa.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163hxqhbogh.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163wsxbgnbx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163jnadlfdw.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163qknobwap.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163wbqtxdvl.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163xzpcoddo.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163szjhgoyq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163rwppuyzb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163fmpotjqq.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163evazylfv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163exeductq.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163uqtbucrv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163spnrdxrg.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163pizfqpzx.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163qrxvmptm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163vhbyyatm.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163cphnykii.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ewhzfyke.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163gzjzuhhs.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163cbnpykjp.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163bxqaonkm.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163giwwarhb.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163xaghtfgz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163juyjxvry.html

[Q54] 清空表
来源：http://www.sxryk.cn/163sexpkcot.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163acwcxooj.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163qsnvjhfw.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163nyemclan.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163eutqwwlk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163xajfwhqh.html

[Q57] 行号
来源：http://www.xuanzx.com/163cliclowd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163heekeiwe.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163beewhrxe.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163nzrptspm.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163thieapcu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163ymyvuljc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163terooobw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163imngzfvv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163cgtismmj.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ceixdpnc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163kuvhyfjp.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163oefjcyus.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lwtyxupb.html


<!-- 参考信息 -->