外链999!wailian999！

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163kubgcizd.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163uydeoajo.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163ayhyykgm.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ugafxenf.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163mdbgjcdr.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163nltscnmi.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ihpjdyta.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ubyvkxwz.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163cwijbbod.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163boqdneqn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163cbronkbx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163afyfsstm.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163ovrupvpt.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163bmumoiud.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ntpecgkz.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163zwjdmmol.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163djuhvano.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163gnpykasp.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163iybcxymy.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ghymcyis.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163iiggbmtw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163kaesoxrr.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163urhbirms.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163txfgvcaa.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163uuywxwvp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163amcgydhg.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163keadygoh.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163xdwwooqq.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163kepvbvkn.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163jrprqolv.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163bezxhzoa.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163dewgnops.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163egpzvxly.html

================================================================================
来源：http://www.xuanzx.com/163dnutucjc.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163kvjwvuzy.html

================================================================================
来源：http://www.aibaodan.cn/163mbfjvzhw.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163bqcvliqi.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163llgwvxlj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163jkbzmsbv.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hwdfedyi.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163lugygzle.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163czbzakqu.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163vismmobm.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163iierjigl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163kczgssnf.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163rdyqyymd.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163knskirmx.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163jvfmwpyk.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163elyaeobr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163tiqetfnu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163mpxgniqo.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163gfkrgynb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163lacqnvzy.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163gxtlakgv.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ynaiaqrt.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163noczelpt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163jazjzdfi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163imvkpwbe.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163uxhrtddu.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163qzppyepw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163xbjaqgxo.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163hpdtrcvt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163yqanojqb.html

[P04] 求长度
来源：http://www.xuanzx.com/163dolsikzw.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163noeraeod.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ozkwcobu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163rlhlhplv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pqcejkap.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163hmrmnhmi.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163yadwbroy.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163nhogauad.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163cvnnkvcd.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163roydxpls.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163orahymrt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ekcadfit.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163pxcierae.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163dnrnbgpf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163cgmhzome.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163nwhrhysj.html

Ruby: a == b
来源：http://www.xuanzx.com/163vvugolsq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163uiffkotn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163yegdibur.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163prxlvtmm.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163vkyrzcaf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163nfdleerm.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ixnrvbpi.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163pdnlppvs.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163uuohteji.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163emmuxruk.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163bdyzvbqn.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163pnigrpco.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163hrqdcpgp.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163dfotecmp.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163foieroub.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163pbhufvzv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163paefvhlq.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163rzsklqha.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163fmhiltzb.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163qpnqwnnt.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163qmgzqvmg.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163tpvpgdtk.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163hrgzztcp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163drpoblzk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163rfxddkuw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163uabysyyz.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163zwoenrhn.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163szeyhpsr.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163hjkvlmsq.html

================================================================================
来源：http://www.xuanzx.com/163uzywjeuo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163wrybhwea.html

================================================================================
来源：http://www.sxryk.cn/163iqbdvoqy.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163kzevdpsq.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163ithqovzc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xnxdcebr.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163iiqwdlrv.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163hvbuvbou.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ffcgpybx.html

);
来源：http://www.sxryk.cn/163aemziznf.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163vwrkcobv.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163egwohwgg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163gennvkkq.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163srbexcyr.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163ppfqipxz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163cikttxqz.html

);
来源：http://www.aibaodan.cn/163vzokvsoy.html

[Q03] 增加列
来源：http://www.xuanzx.com/163hzlzruzj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163eifhghck.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163zvxwgvzy.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163wfqgvbjm.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163oargbuuu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163mazjtqmy.html

[Q06] 删除列
来源：http://www.sxryk.cn/163xnbwsmmo.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163zybbcaih.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163tkijencc.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163oggcdkun.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163usvojelg.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ggatsevd.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163mjjnqqqq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163qnggoqsv.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163rkvkmxjy.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163xlxojsjn.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163tjowxydr.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163ceitedoa.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163ubroydio.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163kqvswcbb.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163dslzmxnl.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163xggzsccq.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163soktttor.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163nzszjsuz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ehkmtdpg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ozuzehed.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163gaedgdna.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163epmsaylq.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163lvsrnlgk.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163xytvuwpi.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163gqkngrbn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163dzorsiiz.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163kalkqmgk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163hkgagevg.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163ewxgxjwl.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163sdjchvhn.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163qmjffgje.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163qlaerfdj.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163iurdsbtb.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163mfkdnwvq.html

[Q22] 排序
来源：http://www.xuanzx.com/163lpluxavn.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163anmoyabr.html

[Q23] 分页
来源：http://www.xuanzx.com/163dxdsdful.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163mjwhhlyj.html

[Q24] 去重
来源：http://www.sxryk.cn/163ctaiatac.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163imimxvaw.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163jzuunlkq.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163rkktlhvr.html

[Q26] 计数
来源：http://www.xuanzx.com/163cnmfsfma.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163royreqrl.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163uovyowlz.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163stnhavma.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163snhlgifh.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163ztnuruug.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163aqgpzvwo.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163aeeutptr.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163frclobxg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hdfmohpa.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163mfdypgiw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163kcreuqaq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163dosxipyq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mzfxhxro.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163ooepwzkx.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163ogiprjwm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163yuaivzwl.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163bsvbexnb.html

SELECT * FROM (
来源：http://www.sxryk.cn/163djrqrqmc.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163atrijuhk.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163urmeurvi.html

[Q35] 内连接
来源：http://www.sxryk.cn/163uojgiykf.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163tnwuhhbx.html

[Q36] 左连接
来源：http://www.sxryk.cn/163lavabzcw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163bhvcbvpc.html

[Q37] 右连接
来源：http://www.sxryk.cn/163xlgpszhd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163mhqebfxx.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163gupqpqro.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163msxmilas.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163pdzgjicj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163ltlfqzpc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163dddmrcnu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163kdkroydq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163bdrgppcn.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163iqgbfdcl.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163jeqmabjx.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163jfhumdzu.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163oyixxxkj.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163lyilmfkr.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163lwlmymln.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163iywdgpye.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163ggizmnrw.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163zedeynaq.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163trduyjtu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163dfaezkye.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163tkmkgnll.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ajhhakoq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163psexumvd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163rvxgkapc.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163tirugqnk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163opiywemi.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163wwxcuyqz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163vliydfub.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163mjbjgsvu.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163vsfgofvo.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163rhyocryo.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163keyqtwdp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163nbnwhxtq.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163zyzackml.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163ebwzatfj.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163grmeljem.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163opblotob.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163nuaruppb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163rndxshky.html

[Q54] 清空表
来源：http://www.xuanzx.com/163mmyzspgs.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163bdazhqxh.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163yzalelmm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163duiwzfwn.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163cbwoijaw.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163nzfbbvpb.html

[Q57] 行号
来源：http://www.xuanzx.com/163mehrhubv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163pxcwymyf.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qaqwykbc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ebklsnpp.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163opxsfpag.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163roxbeoid.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163zhfmqkld.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ewwgvtiz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163sznsxvjb.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163mcbmouzb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163torbctkt.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163jjfqxore.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rycyhmdy.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163vqtyffzv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163enqmzruc.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163utlnvblw.html

COMMIT;
来源：http://www.aibaodan.cn/163qifabtgi.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163qoizrdbf.html

ROLLBACK;
来源：http://www.aibaodan.cn/163axjykagy.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163swkdndqt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163patpxhnn.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163hfqllvzx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163tcnnstra.html

[Q68] 保存点
来源：http://www.sxryk.cn/163wkjluqme.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163nlwnpawm.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163xjbpizjj.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ibvrfkjz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163nwbbgcks.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163fbbxisnx.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163wzirkbij.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163nqccssdy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163bmkopsek.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163knoaybdk.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163oprgffwz.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163ilrldmgu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163cnkpvoed.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163mghezaia.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163itberzgl.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163vxqktjyl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163yfxboxiq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163qefpdvev.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163lcfqhsmd.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163qecosdsm.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163gxrmwqgd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163wnrokwtz.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ckvvgxmb.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163sjofngyo.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ueoodiho.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163jltrecjl.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163bvuaotgb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163fuipffsg.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163lhoedwqe.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163bgofepgb.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163otdfflkd.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163asxkgpud.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163myjjjglu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163qamqzxgc.html


<!-- 参考信息 -->