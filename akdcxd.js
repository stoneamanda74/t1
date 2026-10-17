外链999!wailian999！

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ucbomyxc.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163hgymwyzq.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163yikosmjr.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163adpwzabe.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163iqmazono.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163vcvqtfgt.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163akfyqggj.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163goidqlms.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ngbplkwl.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163rhnameeb.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163xjrcbnod.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163kntnvjti.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163zilkzbaa.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163znfwpczw.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163giqtzsnt.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163mjphxqmp.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ebyobdoi.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163tfsdgrzy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163kxgswiah.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163tplnjvfd.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163kqnezzdl.html

================================================================================
来源：http://www.xuanzx.com/163uhvfwkge.html

P. 常用工具函数
来源：http://www.sxryk.cn/163paiqmbbn.html

================================================================================
来源：http://www.sxryk.cn/163cgbtgftf.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163hbhzysti.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163vhnawbjj.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163qxstjpaz.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163wsnejscf.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163vrjxlvnh.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163vnnnbkon.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163wdcdwukq.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163ajitkhrw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163hooasyid.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163tnfyrtkt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163hsvngqui.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163loaasszc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163jmnulbgk.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163wglcvklb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163vxpuhdcv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163elqajdto.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163uacpvkdu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163jquslnbp.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163ndiwkpig.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163hcxlyupt.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163nscvdmpb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163xzjojpbn.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163qjvmmbbt.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ezxvlbya.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ompdiebq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163gvcpvoao.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163mliyuorp.html

[P04] 求长度
来源：http://www.aibaodan.cn/163fwjlcqhu.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163rsopcnpz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wsjsusnw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163gxvacpuw.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ldpnretw.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163sqrhgadu.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163tloshlen.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ojvvvvmn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163yiondvvs.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163sgvxbriw.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163uoksnpbb.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163gejrfziw.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163hyfmblai.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163vxsbhaeh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163wttijtko.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163hyanifbn.html

Ruby: a == b
来源：http://www.sxryk.cn/163bugfhrvw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163vcdzzusn.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163obtjvirb.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163klwtwrpu.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163xyioeede.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163gomyqhdp.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ijjbjxki.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163cfmdpkgk.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163zfgicqzk.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163poqpezac.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zovufwuc.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163werfwago.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163bzfcpzbr.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163nubulyvw.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163ikrkoziz.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163migopism.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163bsyfdkqy.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163mfcfksud.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163wbeztxnk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163imtrawuo.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163jdsryaue.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163zdsejlmo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ldpbjnpk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163hkkntgsp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163ehazieej.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163dvcsmqni.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163lcmuauej.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163lihvvvzq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163qphtwctr.html

================================================================================
来源：http://www.sxryk.cn/163mbdxhnqr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163iytxlous.html

================================================================================
来源：http://www.aibaodan.cn/163iyaoaods.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ikhinjtq.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163nlrxoglz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163aqtewsni.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ptxzawqw.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163clvbvuul.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163tbihrhrv.html

);
来源：http://www.sxryk.cn/163iscetxqu.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163ytgbjwzu.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163ixacmsjw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163wjyunxig.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163tikmpuvv.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163rtxphvsq.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163tpdkbatb.html

);
来源：http://www.xuanzx.com/163plmirccw.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163cbvmoxcm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163hrmftnnz.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163mtpricko.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163pxattxiq.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163faskaiir.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163kmdauace.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163qalrjwcc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163ycbdclco.html

[Q07] 删除表
来源：http://www.xuanzx.com/163hbwwnsqi.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163aygpdzyb.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163hibqcfzs.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163xfxeilse.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163mlrdevvq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163vtqhmkek.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163ouolcqwy.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163jxhcwwpu.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163lvuodmgx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163uorlmsmf.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163nphvmmgl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ciqfzxqj.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ilaibmhj.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ngkswihy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163zhlttyxk.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163rcxgbcjl.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163mhtsazqz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163ijhgtdhy.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163lmcodtjs.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163wfeuqeje.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163whfkjuic.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163tbgzngax.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163dqkpafgg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163viwprmkc.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163cluazavq.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163zxbwhucm.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163fygdajzb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163fgrljdwu.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163fcnjfmus.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163nzevbuzn.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163saxymlgp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163mhasjgku.html

[Q22] 排序
来源：http://www.sxryk.cn/163kelaexaa.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ssbdhexw.html

[Q23] 分页
来源：http://www.sxryk.cn/163caoxgnzj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163qifaetqy.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ruzusxry.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163toouedmu.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ssjrgcvf.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163pgupxojx.html

[Q26] 计数
来源：http://www.xuanzx.com/163iqxldruu.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163jqejcdju.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ivbxskll.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163zyyricnr.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163rxfdwxpi.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163rtsjzlac.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163zlkeyosh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163jffbyfmh.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163cdeufchl.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163iminxhmy.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163muaolzlo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163epgqgsbr.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163nknxyeiz.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ygfqcwno.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163amwyrzrf.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163kxlmblbt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163iqqrbhyi.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163gldhkzmq.html

SELECT * FROM (
来源：http://www.sxryk.cn/163gdfrngaa.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163uuadqrev.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163hjmjjltd.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163kvqzsxwt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163rzpjamoz.html

[Q36] 左连接
来源：http://www.xuanzx.com/163gwayfkls.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163tkfimqoe.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163elunyhes.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163tdfvetes.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163jexakhgz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163vhpxrhoz.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163xqjcoljr.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163bmhawrqi.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163kcksqjsb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163sljtjoww.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163xdzrbdva.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163yhlueias.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163fvngllxd.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163sshmngnt.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ojzwlxkn.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163umigfsdf.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163cnhknepj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163veulwmch.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163kjrkchvu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163pgsqzbte.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163lmeldsgz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163vjjzwekh.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163osobmktb.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163upimsekp.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163hinkoivj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163wpejpoiv.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163tprfersm.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163fqwlcery.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163oameijvv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163uclthznl.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163pandnajx.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163eovldxyc.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163pjkqnxvb.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163fnwctskh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163txozgdhr.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163hzglvklg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163bbjlltzt.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163xmnavhiv.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163eyysqzcj.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163wdrsezvg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ukidphca.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163yxwvymvt.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163yjzkxdyh.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163inwiygoh.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163nzwbkwmr.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163vnhyzeqt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163gzextqpj.html

[Q57] 行号
来源：http://www.sxryk.cn/163lszqdzbf.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163yxmvnkcv.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163syenxxsq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163iobcmopc.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ysecbank.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jgjjwudl.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163plmepsec.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163wtkojzhe.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163vohhxajg.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163mavsymcx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163izykbkeg.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163hkhxsymm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zbsuktmg.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163hpgycvsd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163fxoqwjnt.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163zcckxwqr.html

COMMIT;
来源：http://www.xuanzx.com/163joqsvlgf.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163dtyqiion.html

ROLLBACK;
来源：http://www.sxryk.cn/163ivlqwyte.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163weltrzry.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163kqskbcyq.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163lvhepgen.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163gcsosjlq.html

[Q68] 保存点
来源：http://www.sxryk.cn/163aebozepn.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163pdilmfbh.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ecgafizo.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163pzbtmued.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163kuyhydfq.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163mvhlgcdi.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163nuzdmzni.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163jddjnopi.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163qrkudpzh.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163fgithrdo.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163kjnzvhgy.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163mhlxpkvh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163zacmdfxk.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ktczelqy.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163wxfdegyo.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163iumahxix.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163tykyxiyj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163asuoantm.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ghnnxkmn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163bbcdyisd.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ntolfrna.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163glqhcatf.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163powxiubj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163smwwwigb.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163rpbkhgaz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163nvgwqkec.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163izprsmee.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163shvlbqml.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163acevsusx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163zffvlxxl.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163glmgaxst.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163nbrejbeo.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163bwwdwuqh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163nqfyqfcx.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163xhbxwmjt.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163jvgvfczb.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163sdcxdbhw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163heqppios.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163javuihaa.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163xojhompx.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163zcxkepcb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163atmkzvha.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163cpkjkxba.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ccvwzjue.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163bgycmlds.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163xykkkgjt.html


<!-- 参考信息 -->