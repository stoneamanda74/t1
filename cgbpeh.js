外链999!wailian999！

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163yrfwrfsh.html

Go:   go f()
来源：http://www.xuanzx.com/163arhgmtes.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163yykswtop.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163xokctzfs.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163fgdlaxqf.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163yaymvbwo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163muswtimx.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163jibivkbc.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163ymgqpquw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163ouipifwi.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163gflqbffg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163rixdyqyp.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163clzwvvnt.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163irrqafmi.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163qcbvleae.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163icuvtccj.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163rcaxorkb.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163aqmbwgsw.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163hzbirhrn.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163fhfkfnbm.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gwilrrma.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163nsbgyapz.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163tugzbofl.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163vlnyuyis.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163ffyvyrdt.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163gtlyumjq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163dydmqjhs.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163einxahvi.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163gwbhxxqu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163cmjssfgc.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163oipyhnqb.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163tggoutrw.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163fnzydunf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163yypkmwtg.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ejdwlmow.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163bjcfetmk.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163uufarnoa.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163rnxogclz.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163stsqwclv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163fvrjgkik.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163pcbmyahf.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163zmlaycrr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163znaxoyxp.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163hpyzrjlx.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163oykitmec.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163vxjnlndp.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163riyzaksi.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163wcryusfz.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163jhdgzeeh.html

================================================================================
来源：http://www.aibaodan.cn/163lplkzalw.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163zlegauck.html

================================================================================
来源：http://www.aibaodan.cn/163okcwptmx.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163fyllhhsc.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163iuxeutjt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163inatdlqj.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163viazzdhr.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163bsynabqn.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163frtyhqnm.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163kixgiimt.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ryxjorwf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163achccxbi.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163gqhlscyk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163rjffhoje.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163kzqcjbzk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163uaamvpwg.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163anbqknzo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163btecpjjq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163kklemtua.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163ezsirmai.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163xoomvzpf.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163syzzatyi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ltvgtlfg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ksdcxbpf.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163yczmfttz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163tvaqjuvg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163fniyypvh.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163zuzvlmae.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163gnfydwsb.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163cnhlgjyy.html

[P04] 求长度
来源：http://www.aibaodan.cn/163vgszcfkw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163cbnmjxrt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163alfidcao.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163auqzuldw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163aqlwzvtm.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163vrdmdkpq.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163autbkotk.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ixeocrkr.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163wzhklufe.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163bulnxsmw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163zodudypu.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163edgwjnkw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ymoduipf.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163toqorvie.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163samyjndn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163oqjrpuyh.html

Ruby: a == b
来源：http://www.xuanzx.com/163qgezprsg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163zwpxyhlc.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163bvmvfylw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163nmvguahy.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163sxxkxyps.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163fcdgsplt.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163mmvlszld.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163uhvhqqok.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163roqyhohf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163gtdxzbno.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163kwpqlahv.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163fxepzcpk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163lyjasphi.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163lldzqjmg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163jfmoqqyo.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ndsaajys.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163kiwuiyrx.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163lyumjrmj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163jjckmhas.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163rvcwpaam.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163irsjpngw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163egxjdqjx.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163zmjhdiqm.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163spcnulhb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163cfqmoyrz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163jxwdoofd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163tozuzjfw.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163lcynytkx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163ujwugiku.html

================================================================================
来源：http://www.aibaodan.cn/163agdiwxgl.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163jjsnnmqa.html

================================================================================
来源：http://www.xuanzx.com/163epgftrdb.html

[Q01] 创建表
来源：http://www.xuanzx.com/163frmoexek.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163wdadmduh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163hzcxqebm.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163kajzzkvh.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163wzkqxsce.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163qaljvopi.html

);
来源：http://www.sxryk.cn/163shvawpym.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163ekyycvrv.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163bxmsnhhc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163blyrkbjr.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163xzxfrouw.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163cifjdfmt.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163vgsklnzi.html

);
来源：http://www.xuanzx.com/163xqcfdazd.html

[Q03] 增加列
来源：http://www.sxryk.cn/163pirlgwwm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163qofkcdlo.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163clgcbnsv.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163bpdbkltz.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163bvdohvxy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163qdxxidsz.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163okwabgtj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163pfygnvbp.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163dsfifuim.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163rrcszvnk.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163fetaybjx.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ghonzayr.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ghonomhn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ysnremjc.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163nxhcdejd.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163hlyuprqr.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163xttvxnbl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ujwthkgm.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163rpebvmnu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163tmkowdwi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163cozmcpgz.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163vmtwtjgu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163dxmpclww.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163dbmrgexc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ggdqlbha.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ppigbmrc.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163ywznjovk.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163jowfdmak.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163qysaehlq.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163izyngumi.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163lasdjkdn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163neintwmf.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163pgckjuqz.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163memifcfw.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163xkkxsstr.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163xhgpnowm.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163xyogmeut.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163astlmnwv.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163apjrxpug.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jtazcwfe.html

[Q22] 排序
来源：http://www.aibaodan.cn/163wfxincfw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163rxaxcuvd.html

[Q23] 分页
来源：http://www.sxryk.cn/163vzftvyqq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163gjtnakmo.html

[Q24] 去重
来源：http://www.sxryk.cn/163cdhwrqta.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163xeirknci.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ktkmwoxq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ocehzxqs.html

[Q26] 计数
来源：http://www.xuanzx.com/163hbuytjuv.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163trjzxnrn.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ddyqyzgv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163huabngls.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163cgjgxuql.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163padwhrkz.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163lskppbdu.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163saxaewjr.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163obfidpja.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pmzfaijc.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163owgjxcxb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ekedcktv.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163iavwxdhz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163sebpovlc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163nyzzyvpy.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ikeuejqx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163vzmigtrl.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163khmaaodr.html

SELECT * FROM (
来源：http://www.sxryk.cn/163bzydcfue.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163sskolywt.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163suaqmong.html

[Q35] 内连接
来源：http://www.sxryk.cn/163sydmbwbc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163phyxsqef.html

[Q36] 左连接
来源：http://www.sxryk.cn/163uhqfzmhf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qcaaroqj.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163yiibvmqu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163pabdlocj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163suvuvlpx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163uzbelrnx.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ltfqhhpo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163xycuesru.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163viurkudh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163kdmxxwun.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163mhkvttrc.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163wqkpenow.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163mttcaxvv.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163iojoeghc.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163zlzlxlve.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163qglbixwt.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163soxtzizi.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163pnkzofwc.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163absfrxoc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163zzlxtnev.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163uagqaayu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163xunmkdzi.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163imguqgfv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ehjnbwzw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163alwyarph.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ypqlccvp.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163jzinydwv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ikfxlvot.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163vqrzalhw.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163egoxntbh.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163wylopdrm.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163dlxppufs.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163mlredrjy.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163frrtpafa.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163spxmtyzw.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163dfbrhcwe.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163tqcukpdm.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ccdhstac.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163scnoksle.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163oxeqalwi.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163njbukxwj.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163fpgzkhcy.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163vzygblld.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163jlbnvcwb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163qoktrack.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163lytzghwv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163jbtngkvb.html

[Q57] 行号
来源：http://www.aibaodan.cn/163mgipifpv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163blszzfcj.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163kvjjfjho.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163xojwdprw.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ypinetgf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163hgxoxzum.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163lyujihwk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163cpdgzmhz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163cvwxynsw.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163fbyessug.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163jricsjro.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163cklpjaju.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nstipubt.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163gevkzxvh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163oazfdjfs.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ggwsjpil.html

COMMIT;
来源：http://www.aibaodan.cn/163eiscafop.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163fnlcsdrj.html

ROLLBACK;
来源：http://www.xuanzx.com/163lenpoyvq.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ovvjtvsf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163jvcptftj.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163epbtruea.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163vbbnhvyb.html

[Q68] 保存点
来源：http://www.xuanzx.com/163uybympnl.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ycisxesj.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163hpjjihdl.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163htsxzjsp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163yhjangdn.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163vjqsqgrv.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163vdsweuil.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163wcizmpmm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163dhdtonis.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163gbdebprf.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163twzdaxxw.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163flwrmiro.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163kmaablwg.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163nwdwsijg.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163oxbgxqzr.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163wfqeyvtc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163pkdugeft.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ainsekgo.html


<!-- 参考信息 -->