外链999!wailian999！

PHP:  // 手写递归函数
来源：http://www.sxryk.cn/163okylppzb.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163slvcnrle.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.sxryk.cn/163nokuvbhr.html

Java: // 手写递归
来源：http://www.xuanzx.com/163eygsfcuy.html

Go:   // 手写递归
来源：http://www.sxryk.cn/163vqrbwgne.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163cqwhocpf.html

C#:   // 手写递归
来源：http://www.aibaodan.cn/163giecwlxd.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.xuanzx.com/163rkozsxas.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.xuanzx.com/163tustarfr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.sxryk.cn/163tzpnfzal.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163utbstxul.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163lbygqeya.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163cggbdixa.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.xuanzx.com/163begcwbiu.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163elgbdaxe.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.sxryk.cn/163olzjcgzw.html

================================================================================
来源：http://www.aibaodan.cn/163dbsmoici.html

O. 并发与异步
来源：http://www.sxryk.cn/163uvitdqfd.html

================================================================================
来源：http://www.xuanzx.com/163bgrjqglx.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163azgidxdt.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.sxryk.cn/163cswcyiax.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163qacgaqvo.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163phbiuick.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163fosbfvfy.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163tbizvvvq.html

Go:   go f()
来源：http://www.xuanzx.com/163slaxvvtk.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163chnwladv.html

C#:   Task.Run(() => F());
来源：http://www.sxryk.cn/163vjqwplmw.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163rvekommf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163yyidxjho.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163gshplksh.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163dojwtywi.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163smkaolcf.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ncbvsguc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163elvjtubk.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163hnzdzekz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163rlfilalm.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163kwjuqzpm.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163fdqveknn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163ffjzneep.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163kcfvqlsz.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163khgkurfx.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163ouschupq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163aggbieoh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163xdxzbksj.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163pmqibngu.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163lmklkwzq.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ahvrnpcn.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163kpqicekj.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163usfskoim.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163jamyoxyx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163okyjvlom.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163derjgloq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163qurlvcwi.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163myhhqvtv.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163lhggzpgh.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163mujcmhnk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163xqdwjgdx.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163jfzucarm.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163syqsqpau.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163qxubazle.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163amowydfx.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163pxtdgsoq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ylclnlkl.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163cbrvdwxi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163pgjblqjg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163snmrpjsq.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163qudewylr.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163eknjmoeb.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163vzgnqmot.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163edkwspeh.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163qkcmwhln.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163gjwwbghn.html

================================================================================
来源：http://www.xuanzx.com/163jetspipu.html

P. 常用工具函数
来源：http://www.sxryk.cn/163mxogfczv.html

================================================================================
来源：http://www.sxryk.cn/163xvwobask.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163hlvaxgxn.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163fiqhicnc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163kzfcdxgo.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163cumbzpot.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xeijvnxn.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163rmcljqlk.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163igzzlujf.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ckcrgjae.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163gdjuedso.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163cyokpwxw.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ptcbyjve.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163qpeeqalt.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163pxorydxj.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163wjtczquw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163uditvwur.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163gprmtgmh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163hffysljv.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163guobxidy.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163fjeeryun.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163apexmljb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163wakysxeg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163reypshxe.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163zeecvjac.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163kdjptdnx.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163bhriwbia.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163lznrebch.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ewxiinqx.html

[P04] 求长度
来源：http://www.xuanzx.com/163bgnrxvqd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163afghuokj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163dljkzjjk.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pahotpty.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163lzdzhxkp.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163bhrlwisi.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163tawgufno.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163cnvcmvnu.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163bwewvior.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163rqjebtvt.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163pyxphvpz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163smxlnqha.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163yyemquwl.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163cswkrbjw.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163zaxuwcdi.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163fbedmxgp.html

Ruby: a == b
来源：http://www.xuanzx.com/163bsskthsj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163vdunfdrr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163mczmcbka.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163letafrhz.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163glpqrada.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163accnyszl.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163kwahqtiu.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163iyhrgkfo.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163utcyxvyk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163felcowyg.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163agvjtgng.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163hhzhuplu.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163tlxnlodw.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163krrzhftl.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163tymycawa.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mzoragiy.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163giivigbo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163gopuyelr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163mothfsxc.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163aqptvrlz.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163avszwjeu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163epflltvp.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163usyfilqz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163mkyhujuh.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163pdvtqvsd.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163mpvpbnrq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163bxbhdaoh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163cqyimjzn.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163rfrutava.html

================================================================================
来源：http://www.aibaodan.cn/163nztwepbz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163qhwhyjia.html

================================================================================
来源：http://www.aibaodan.cn/163xqtwignk.html

[Q01] 创建表
来源：http://www.sxryk.cn/163jveuxodm.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163hnfktwkl.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163azakwqdm.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ratqlyte.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163oayigymk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163qnvqsttq.html

);
来源：http://www.aibaodan.cn/163npkfqwkc.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163eixedmkq.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163htabbunb.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ajavbjse.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163gqxmjjry.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163gtwxokxk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163vpcvifmf.html

);
来源：http://www.aibaodan.cn/163amnbmgpd.html

[Q03] 增加列
来源：http://www.sxryk.cn/163ksmoehwl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163qkkxwjmo.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163xnftgcwp.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163gemwvfki.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ruajqwtl.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163mlvxzxkf.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163xeggjjin.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163dzmhdwve.html

[Q07] 删除表
来源：http://www.xuanzx.com/163mdzzcsxo.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163hetwlcqb.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163orrigztj.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163cpwlxcgj.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163zqkjwumf.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163qlbgvsyc.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ribrckpr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163pyczgszh.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163xywtulxs.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163swiblsmg.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163bmldhztg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163rcxoobgg.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163grpnnxdm.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163xceoqift.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163fwfqqubx.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163bpjoffsi.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163srdhbouh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ioebrxax.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163ckiaxhcs.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163jusevqpo.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163gcdrugof.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163xvwliaiv.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163nroviizx.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163zhooenwl.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163tqoogljc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tubcendn.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ywfvpjek.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163ocoojykr.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163fdotdasw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163qnusoknf.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163resveiyi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163suikeduy.html

[Q22] 排序
来源：http://www.aibaodan.cn/163niglghiv.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163vuqwyfpz.html

[Q23] 分页
来源：http://www.sxryk.cn/163kmzcxurq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163jwvqvasa.html

[Q24] 去重
来源：http://www.xuanzx.com/163szoobftw.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163wkpjmevs.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163pakhkpqx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163nygmogfq.html

[Q26] 计数
来源：http://www.aibaodan.cn/163xcygmuhx.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163inyzaary.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163amqdowyl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163fbgyauxo.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163tjpaposy.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163xjfpmody.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163uoobajte.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163otammlpz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163flvqzyor.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rntucdvf.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163sgpnmizo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163vdeubrkt.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gopvcazj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qgcfxglf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163bilxhdfo.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163vqdpughq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163pgotufzo.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163svrkspal.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163gisoptxd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163icgzyodw.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163nhwvaeup.html

[Q35] 内连接
来源：http://www.sxryk.cn/163lofzpflv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ydetixsg.html

[Q36] 左连接
来源：http://www.sxryk.cn/163lsqlglzs.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163guyyvgej.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163fsqluydm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163iclmkcca.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163etmydvyd.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163dsbzkqgq.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163urwlfjkw.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163hkpzjzca.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ymxesxlg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ncotildp.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163britlose.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163lmfwxoxe.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163rpghkbob.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163wjiinoox.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163fzthzzdk.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163qdiijfon.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ddmktyzm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163ysqfycsz.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163thypsozr.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163nzxbncmv.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163jgpgopst.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163aonekicf.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163dojvkglt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dejsthtd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163tijbxvyv.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163pjorvrnk.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163unerifdf.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163ekahlufb.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ihruaakc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163ouvpscgn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163hohfnocn.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163bwtmknnq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163ubyvyacp.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163qdbbgbyp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163usskhayq.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163jynwmrzp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163humyjhgc.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ykauqjqi.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163njiqzjcn.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163eswpehss.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163uxwdvcuw.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163chhgnmql.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163wsylsbkc.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163ubeioado.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163mianqefc.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163dsxdpmqe.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163ptlbbkgk.html

[Q57] 行号
来源：http://www.xuanzx.com/163fmxyqefr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163xvmotbax.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163ybdqxunc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qsjaxrpz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163vdiimqnn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163zqvttend.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163apgdafam.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163narakwzi.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163axuklfpe.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ltbbymlk.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163afjqhbin.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163lydedeeu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mkwybcxw.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163qgbqzwmk.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163kfdwbxai.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163bvjuzmmp.html

COMMIT;
来源：http://www.xuanzx.com/163pcyigsei.html


<!-- 参考信息 -->