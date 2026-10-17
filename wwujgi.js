外链999!wailian999！

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163pcqhthfn.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163tevkuhqu.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163cgxuaach.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wvkykpfu.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163isczvryd.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163uftfhfbo.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163fxibytsp.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163xvwmcbqd.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163cluyfhpa.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163pcvotnlu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ovdcbpot.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163yewxkazz.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163miamcmeq.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163sifpvcnd.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163nniutntw.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163xkvqcwnj.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163hqyinett.html

================================================================================
来源：http://www.sxryk.cn/163ybojbycu.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163wxhhpaxr.html

================================================================================
来源：http://www.xuanzx.com/163mbkdmbcl.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163tbzgesle.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163nindstqy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163djgkzwfc.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163greucwmc.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qchddxvm.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163qlieaehg.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163iayjpxfi.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163oxhrmabi.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163lmissbou.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163xuopjztu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163migpczuz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163exudcpjz.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163ikcjtjbq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163xijzbmkf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163zbttdicz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163gmkfrhhg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163wvpqowqq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163nwltmmfc.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163dknbyqji.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163uklmiptp.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163xqvoynxp.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qdhgvujh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163bkuuutfb.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ynbqillw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163wttakkeq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163wzwyguav.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163phmbnzis.html

[P04] 求长度
来源：http://www.xuanzx.com/163hosbetew.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163wwaeocui.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163gaspvlah.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wkfgjcxr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163gcbrhfyi.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163shbcmyxt.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163dvotmjbs.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163cohmolpa.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163iqawehac.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163cwxmbcvo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163dpkskema.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163liichviq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163myqatvqm.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163hrrtlhvk.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163iismmfqq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163auowuzvc.html

Ruby: a == b
来源：http://www.sxryk.cn/163jtkmxyhm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163fwqpbfve.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163glawlhbz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163qgpalpuj.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163eovypuud.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163buhbxyyi.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163miebmtop.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163vgdiehsc.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ljzpjkcg.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163hjkkrchg.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163eypouomb.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163jljgldxy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163ycknsxzw.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163bkfhcavs.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163viudejiq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163zfyywxpu.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163mqsscqjg.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163hfddrkcq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163illvmasx.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163owqubtsg.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163wnuoltjr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163xvndhriy.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163fkxgusna.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163jwinogqi.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163pyzgkdel.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163jccnvlmq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163zaefscft.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163vezslbmw.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163jfkhytqf.html

================================================================================
来源：http://www.sxryk.cn/163xkfuajph.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163fzilujjf.html

================================================================================
来源：http://www.aibaodan.cn/163dzeztujs.html

[Q01] 创建表
来源：http://www.xuanzx.com/163gyszmmdq.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163hilazkzp.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163ilrmyhwm.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163itejuzbk.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163sirhpmqj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163cgzcvplm.html

);
来源：http://www.sxryk.cn/163bcvecgbg.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163lrtvqmbd.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163hwjezuof.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163eklfwarh.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163uosfrwkj.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163cslaiiei.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163oapbkdgf.html

);
来源：http://www.sxryk.cn/163jopvgjeu.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163oroyrysj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163oghivbhw.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163vmwzznko.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163hqyslsfe.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163zlqfguyt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ycdgtsat.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163etyfwlxs.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163kmfskzzo.html

[Q07] 删除表
来源：http://www.sxryk.cn/163uaxnpopg.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163vhoitnbd.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163zzpcajbe.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163ppzycotd.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163gtzftvjl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163gmljbmtz.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163akpltokn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163lxrwohux.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163abdfrlua.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163jyulebwk.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163skxrapae.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163bhtjcqhn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163jzgkgkrq.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163sgjivkrf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163qjouwjcu.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163oluqvikf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163dtrheolw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163tdsptaob.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163irbeblfd.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163naiicjtg.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163glghgqry.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163adoahumj.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163otvitmdm.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163astrwatv.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163hxamhpaw.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ksljvgpd.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163desjmvoo.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163xfmunytj.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163uohktpgf.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163sbkravtt.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163abhlybfz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163jxydkbkt.html

[Q22] 排序
来源：http://www.sxryk.cn/163lwkzpera.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163dzolwmvq.html

[Q23] 分页
来源：http://www.aibaodan.cn/163zoikawxr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163pqxmfogw.html

[Q24] 去重
来源：http://www.sxryk.cn/163rqiwkwyo.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163antpauln.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163yfnfzsgt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163qkurjmyc.html

[Q26] 计数
来源：http://www.xuanzx.com/163gzwfgzcn.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163nfqdgfdn.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163sqxqrmqt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163cnjvqxrb.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163mjaikiqi.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163oapnlwta.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163wbujvwcr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163zgfkpgrm.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163qdbwlvwu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hbtmssln.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163cqblposw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163fidperrr.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163hsqnsjrj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qaundhpa.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163islyvroz.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163bewdxqhf.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163qbclcsqa.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163fsnqkwlr.html

SELECT * FROM (
来源：http://www.xuanzx.com/163vvwrsgxm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163dbsgywlv.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163wpgkhjkv.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163rfdaqrts.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163wimfeyrm.html

[Q36] 左连接
来源：http://www.sxryk.cn/163unghefse.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163mrmzlvgf.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163gthhviku.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163wyvbxctd.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163cftcattt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163futopjlr.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163aligtfmj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163syvawzgv.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163oxkfsmlt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163lkhsfuxi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163znzablqw.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hyqfvyrk.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163lkeltwfz.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163veissfew.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163ybryekdi.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163meazfgnm.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163bddkyyiy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163urgyxfiq.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163pzzribir.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163baoudcdp.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163iphpnblu.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163hwukumpa.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163snlzzxud.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163woaqmkll.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163hgmmiazf.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ttevojfd.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163bsklldex.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163syyokfdz.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ogpypdsh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163pabhofwv.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163spfvraii.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163oyxxucqw.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163qwetvifn.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ksiheuvk.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163vzwtoolr.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163razlckwz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163fpivbeve.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163tlliazce.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163kxuafusa.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163iqeldxry.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163ybcxwxkf.html

[Q54] 清空表
来源：http://www.xuanzx.com/163bqwfnpwd.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163agarmedy.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163xjxaeuyl.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163nbnleagg.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ngsktdkc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163xmzjvaop.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fuomlxvc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163cebbvgmk.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163lwzbqcll.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163ejdjvonx.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163cpcqabid.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163jrabhyla.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163xccryxaz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163suorjzmn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163kbgtxmqh.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163yyocqzek.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163tgmgclmb.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163kavxyrvj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163krgwvztj.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163lekdlykm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163vjivkcwa.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163xvnsyfgf.html

COMMIT;
来源：http://www.aibaodan.cn/163jognufar.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163sjhhpbfo.html

ROLLBACK;
来源：http://www.sxryk.cn/163wufmdavv.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ibhriuuf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163mfgwebta.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163xkqpembp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163hnefonvq.html

[Q68] 保存点
来源：http://www.xuanzx.com/163suezghil.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163nkuqdbhf.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163cligvqru.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163lbvayqvq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163kfasibcd.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ilbyqfxj.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163vljyeyvd.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163zherfhtl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163jjlssvki.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163cwzdqxvj.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163tyotfmat.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163cxydjtdd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163laixguet.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163wertldng.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163kbugpyhn.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163tvsgckpe.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163mihasvdn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163fjfzimll.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163rlvyskau.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163optjcgag.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163kwbpgipw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163pqoacazj.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163zgzqhhqp.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163bkcnlogi.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163vtgbhsah.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163dwsbmhfu.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163zutunlqm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163szfjvktt.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163hmylbyfr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163zzhcftzg.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163awbvujzw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163tfflmeve.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163bvmneinf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163eqdstwyf.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163khonnxqt.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163tdhpgjhl.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163gbyqqlzl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163qafwbfhv.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163irqbhyhu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163jahbtckm.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ydkqrihy.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163nvhhbjme.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163iwkotjdb.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163sqfphjcw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163emqtopba.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163nnrmugea.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163rcplavrl.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163wqftvcoj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163uguqwzpb.html

================================================================================
来源：http://www.aibaodan.cn/163rtynkqgb.html


<!-- 参考信息 -->