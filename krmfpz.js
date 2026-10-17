外链999!wailian999！

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163ajvfpvmn.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163inzeivir.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163pvdqmzkw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163qyudxtko.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163nroflkcq.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163ijwxhmig.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163taiqfped.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163wgbhwazb.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163crrsmqmv.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163bmjbayku.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163wbvrqjob.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163szplxhkq.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163zecdrujm.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163uvtunfyr.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163cezxmtfm.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163vhumvxub.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163mqwyvmxh.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163frpfwdzc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163ngikjvvz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163aigahlie.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ddbsnnvy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163vqmieivl.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163cncijojw.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163usvoowzh.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rbbbjkay.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163fmeddfxt.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163iqydlbpu.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163usitexhm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163dubbqato.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163uwychyrr.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163nwldeeze.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163aotxgxgq.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163iehrndpa.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163fhfwxlsb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163joiixual.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xhhbjaeu.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163emwmbyfp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163vxjivngw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163wkninzlv.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163hmxpbnmg.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163mqehqwat.html

================================================================================
来源：http://www.xuanzx.com/163xqtitwjx.html

P. 常用工具函数
来源：http://www.sxryk.cn/163rjxrdyvx.html

================================================================================
来源：http://www.aibaodan.cn/163paqxjncw.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163djyhtrjn.html

Py:   str(uuid.uuid4())
来源：http://www.aibaodan.cn/163fwhxzgeb.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163niyqytgv.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wamrilps.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ncmeqlvz.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163fdciaooe.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163ttmvuiew.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163zqogztwk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163txqeibch.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163hmrfjecv.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163uxgmqlqi.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163blllnsqa.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163juohvdli.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163zatoyamt.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163bnyhacci.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163pfcnqqqx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163wruiqrmr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163tejjuoty.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163iogbxdid.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163ylzwibdp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163hlzfbsls.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163eynurmrt.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163bigoavyu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163erpexjvk.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163xmpvswbe.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163worxqudr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163uikqsyvl.html

[P04] 求长度
来源：http://www.xuanzx.com/163tcvycvvj.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ubhysobn.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163jzwjxcge.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163qqdmcfqu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ejxnuaxc.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163xsgjatty.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163fbtayrox.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163wqibcbqf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163mlfzrpif.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163iywgtsgr.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163qjyizlfi.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163bbtvqagh.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163pygeibkz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163ylccaols.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163hoevnniu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163ulexbmtg.html

Ruby: a == b
来源：http://www.xuanzx.com/163bfqqvbja.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163sofoaiqf.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163ubieuwgy.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163kpsevvzs.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ixkodgfi.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163maxjhwep.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163njoxllmt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163dwlcaekb.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163zjtsgcho.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163uuuyakgf.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163ajydpkgx.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163prhqqkgt.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163qpbtfnhz.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163nhqsjhfr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dloclykc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zjklytkn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163vlwiuzxi.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ufkmmyqv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163njxcoxyx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163mulvnkiq.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163dxqwpjca.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163wfnkbxav.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163cdstincz.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163zklhymol.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163fopkdjld.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163ikhhgtor.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163hjxronxh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163neddwrgc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163pshdozjx.html

================================================================================
来源：http://www.sxryk.cn/163mwzpqijq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163lvsteplu.html

================================================================================
来源：http://www.aibaodan.cn/163iiwucetx.html

[Q01] 创建表
来源：http://www.xuanzx.com/163hdwhnxby.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163qcsruvce.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163aiptclgr.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163gtktygbu.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163jiyysgwi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163bzpeelhz.html

);
来源：http://www.sxryk.cn/163gvkhuwpo.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163loiujply.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163vsjwebfk.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163uixudqck.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163qayysxfc.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163rjeyolyn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163bxqsbjfr.html

);
来源：http://www.aibaodan.cn/163udeusokb.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163fkvpplbd.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163ynkalgan.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163dmbwjydu.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163scarmcwk.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163udjuqjxs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163hbiiiepb.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163fdfhtpop.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163lpzfdrxe.html

[Q07] 删除表
来源：http://www.xuanzx.com/163hqerssct.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163bogcvckw.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163ttisrzli.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163fipnbynz.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ifuymhej.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163rlpkmmaf.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163wjugakym.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163yuyldsax.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163grkuxlny.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163cdgyjuhi.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163hmeminff.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ltwkkuxj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163uxrdfllr.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163sbqgjomj.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163fwxbovji.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163vrqorrjx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163bonzlxct.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163ihplvjlo.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163jfjjklbh.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163apohdjfv.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163bruejqqq.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163ikklobdk.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163ufsapuci.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163oneaxafh.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163bapbezjq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163spvasrgj.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163wepaoebg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163tnqljeib.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163sxrqlonu.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163ugkeoufe.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163ghrkccxv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163qyhnidnr.html

[Q22] 排序
来源：http://www.sxryk.cn/163yuzgtvyn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ircfkwnb.html

[Q23] 分页
来源：http://www.aibaodan.cn/163zickzqjq.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ajazeuxp.html

[Q24] 去重
来源：http://www.aibaodan.cn/163bqduedvt.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163dhakizky.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163msajcmxh.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163cwamrxhd.html

[Q26] 计数
来源：http://www.aibaodan.cn/163swkzhcnh.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163xplllxwi.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163jgazfumy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163urcjsuog.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163rzmulfcs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163glhsuupv.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163vfsucozc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163xwexdopm.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163xktzxcec.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163txgkzslz.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ysthlzxi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163iibbxjys.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163krbvzmkv.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vztammhu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163gmsjntyu.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163nlgwkhnw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163qypxvqvf.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163nojjvxoz.html

SELECT * FROM (
来源：http://www.sxryk.cn/163osoiynvn.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163yfcsoamw.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163hesqwwrb.html

[Q35] 内连接
来源：http://www.sxryk.cn/163awthqbbp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163uoajwjnl.html

[Q36] 左连接
来源：http://www.xuanzx.com/163orjcrhhm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ntggfgls.html

[Q37] 右连接
来源：http://www.xuanzx.com/163wdnfaxxf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163umzlmato.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163aeymvfat.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163vrvwzrgq.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ifpvqxzp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ccoqsxyr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163wksyaiga.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163fxtxqaha.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163sekujmot.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163krtyrrjf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163rlkziqza.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163abkjppsa.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163jzvsfgyu.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163xenfrcuw.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163xkqklofs.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163emhxwetk.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163jabivwwd.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163vunijdnb.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163xcjsbfaw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163wizvdfhr.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163fpabmzzo.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qqrmooil.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163evqjoaef.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xookctlv.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ofmjwlom.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163fwjnksel.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163tisjijxg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163hqtxwxzv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163pvnqstgk.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163kffzdqsd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163joakouzu.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163jczeuvqn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163tamojwnu.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ocijrdzs.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163tdvoegrf.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163aembwvof.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163rgvoyoxi.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163xmdanfqn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163naddkcel.html

[Q54] 清空表
来源：http://www.sxryk.cn/163gqvzdzlc.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163veckovgv.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163btyvhapp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163obhiyfmm.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163dxexnair.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163plbsuygu.html

[Q57] 行号
来源：http://www.aibaodan.cn/163frxtcoym.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163xytmwdcr.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163oempwfhr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163mdegkhbt.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163shwploav.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163wozuiyjw.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163gsvriaql.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163pyigyczk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163powupkcq.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163lgbxiztc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163kruknhdc.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163rkfphcav.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ulykceep.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163klrmgqcb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163rdcovpnq.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ojzwihye.html

COMMIT;
来源：http://www.aibaodan.cn/163tqtrdvmv.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163guuvkpzj.html

ROLLBACK;
来源：http://www.xuanzx.com/163xurjxbaw.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163aljsujnp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163anyavbkg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163svngobng.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ytfuuzqk.html

[Q68] 保存点
来源：http://www.sxryk.cn/163aiasozlb.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163qogvdajr.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163uidqryvn.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163usnhowal.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163zruywptr.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163tvdkunrg.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163eygckcpp.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163msoergoo.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163soyvlpbk.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163lujjtvow.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163fvobjjfc.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163libegvuy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163waftrzjs.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ybdwdmga.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163uezbdcak.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163khsymirt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163ilxwaltq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163rivmjjtz.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163xgdxzefl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163csoheoch.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163yyzvyznl.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163upizdegg.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163etdaxlmg.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163kpwmwgnt.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163rycitliy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163lcaosqjd.html


<!-- 参考信息 -->