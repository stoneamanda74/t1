外链999!wailian999！

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163jutyypko.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163gzkketqb.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163petvdtmt.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ziknceqs.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163qfztlano.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163iqgvhvdl.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163gkwafmck.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163pefuproy.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163vfroecbi.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163fqxdpwhv.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163qwijlgdg.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163txgxlukw.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163edhutrml.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163rxjdxetr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163lvhimmch.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163jortcggi.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163gxatrrcg.html

================================================================================
来源：http://www.xuanzx.com/163yhhyrijm.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163lpzxrtva.html

================================================================================
来源：http://www.sxryk.cn/163inxqoozz.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163azkfwzcp.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163lvxntxek.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163hukbfnhy.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163sdrnyoka.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163oijqzaog.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ktdyhftb.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163zdxkbwyr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163xiceyifk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163mcvjnkwb.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163rgmzgycb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ldlesvus.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163rckefnsa.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163grbqyimy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163kvvmjajx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163hhmfkczc.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163enapssyd.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163hbeozpsg.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163zuujopwi.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163yckccjto.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163okasntlh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163kywmpkym.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ehiqmjkf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163symclfdk.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163iyubpnxb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163fdaqxxyb.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163tlgnjben.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163vnkbanwi.html

[P04] 求长度
来源：http://www.aibaodan.cn/163pijpnype.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163inzypamz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fnudsvcl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163wbajbxnr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mectxflp.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163owihpncx.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163cnpvjtkw.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163lhpydsdp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163xacpalxo.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163lcdutpwm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163devwdbut.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163vytbaemq.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163jiqdugds.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163kdhqwlud.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ewamkixm.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ixencnik.html

Ruby: a == b
来源：http://www.aibaodan.cn/163buwpbqyq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163zjwbozrh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163nfcmtnqc.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163xeodnkkn.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163xqkcipuy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163bqiuzxdd.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163pyhxlisg.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163vnaptsyb.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163fkexgpyf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163hrveqqdk.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163qxrrblbu.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163kkvummyi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163zvtvchjg.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163nbxvowbn.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163frhennuc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163brvrivwr.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163kgtzhrbb.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163wrzkjxuf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163xpxcaiin.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163mlwfvmyw.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163vfjhbjpo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163emtmcjge.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163poysiqah.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163mxusslda.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163bcjtmvre.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163frsbtpyd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163fxaedvgh.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163tiazikfu.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163lypzkaoj.html

================================================================================
来源：http://www.xuanzx.com/163hvvjgpfz.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163dusixxnl.html

================================================================================
来源：http://www.aibaodan.cn/163psqlhhpk.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163vopuhbnr.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163yzztggoq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163tyuvolft.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163eoflvigk.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163tdsvjupb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163qmpezhog.html

);
来源：http://www.aibaodan.cn/163smkhrahc.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163uearmqnh.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ylwdmdxv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163hbkclpqe.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163iqsrlggr.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163tumdpiuw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163vqvxjkom.html

);
来源：http://www.aibaodan.cn/163tixbnsuf.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ewjiwpes.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163hhuheeqk.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163rlpfaqct.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163rerzvfnc.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163vyhvwclp.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163hlpyrure.html

[Q06] 删除列
来源：http://www.sxryk.cn/163mkiocfxc.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163lxqrnzjd.html

[Q07] 删除表
来源：http://www.sxryk.cn/163ackwjruz.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163arframcy.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163sfffsjyd.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163vzoldtnd.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163bqvqwixg.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163zsqiggme.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163cupstkqj.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163oydhnrgs.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163ywomyked.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163jglhkmgw.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163noatpsgg.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163lvuxobpi.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163jvpoqbwo.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163pgewugnt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163ceihdgkc.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163cprnubwq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ydjdubdp.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163cwhuclso.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163xebqxruh.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163xkkoqogz.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163eaxwrrey.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163ryifnlyj.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163beeuzkob.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163kwnnhsgv.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163zasqphyg.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163pczorind.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163cqnvkpgb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163wfqayemw.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163ynmbqwrs.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163mskhtrka.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163tavfhfxy.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163qxlphodo.html

[Q22] 排序
来源：http://www.aibaodan.cn/163skceyzys.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163avasstxx.html

[Q23] 分页
来源：http://www.aibaodan.cn/163qgewhctm.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ifdpgpib.html

[Q24] 去重
来源：http://www.xuanzx.com/163ihpnujnm.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163vmiwcloe.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163vtihfwdk.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163udhlzqct.html

[Q26] 计数
来源：http://www.xuanzx.com/163spcbeudu.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163nsyiclsr.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163mheftzbj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163nssopuxh.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163bcjfsrhd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163kkfzzxxa.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163udeqnufp.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163wyyxpemd.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163gwaliqog.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163stjorsig.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163owivwpps.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163fngiquun.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163chkbierl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ijcgjjpk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163laflfzyg.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163oiqfbswo.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163carsowyv.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163tkqzkaux.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163stbcntpv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163yqxyhmqd.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163uhkkujws.html

[Q35] 内连接
来源：http://www.sxryk.cn/163mtpmymjn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ckzzlfyu.html

[Q36] 左连接
来源：http://www.xuanzx.com/163bikvpkso.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163bkecvuyv.html

[Q37] 右连接
来源：http://www.sxryk.cn/163lxgdpxxp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163cngwznjn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ojxdgamm.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163hidaqxpz.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ypmuqumu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163kxfqybbx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ohtffpzt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163mouztyil.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163xzvlcirz.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ievindqq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163edxtfvbi.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163clrexmsh.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163bfsxmgis.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163kemzrbkr.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163rjhiibqm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163soadtrfb.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163cavvgith.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163hxzugyxf.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163jlamufkd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163kmievelk.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ekvnpwzl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163pgotlzqe.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163hpdcrgec.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qcqjbfel.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ktuxpzck.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163soicldap.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163rvgifdza.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163fqeqcrjn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163vzdlzoso.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163rphbecel.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qzvhaluk.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163irubhfhc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163rlnxkvyp.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163iuysnduo.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163mjstvtfv.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163kexhilfq.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163shpsoskb.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163vkqhxxsk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163pkypdjpy.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163hspadjce.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163qzlwwgko.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163eurfzpkk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163mbnzsghb.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163aojagjoe.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163kuehtivm.html

[Q57] 行号
来源：http://www.xuanzx.com/163byaxeoan.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163ohzusimz.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163wpuhmqzu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ktjbktfv.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163llgrbocg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163xbcbkyzx.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163srbykwnt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163ubpisgbm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163jvogfquh.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163lpayaykc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163rjiehhas.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163sagmvoyb.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xsefapsu.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163sokzkqjq.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163zhpnghdp.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163tgrxnlde.html

COMMIT;
来源：http://www.aibaodan.cn/163wtqyxxzm.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163xjuatrnl.html

ROLLBACK;
来源：http://www.aibaodan.cn/163pmcxbkvl.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163hueenrwb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163tvaxdsyt.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163fcpxcqrd.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163prplrlty.html

[Q68] 保存点
来源：http://www.sxryk.cn/163urehwznz.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163gpokwfjx.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163soojbyju.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163beqqoqum.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163citnrtap.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163adtpzpse.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ljsrhabm.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163zvdsercz.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163yjqbksqr.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163akzefvgz.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163jpslaylm.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163nvsuzrgg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163atsjhozz.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163iwbcbcqn.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163esbvzbhq.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163pmioehrf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163cctgtqah.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163hnillpyq.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163hcpviwan.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163phnaupgw.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163vzxohxvn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163jetywyrh.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163trfezerw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163altzksze.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163zvswyirm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163kpfwqpef.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ccrrnfey.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163vyvzesnj.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ebamieri.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163loziltej.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163eugsruhl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163wwrrxdjm.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ibjhwmgo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163ljujechj.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163tuefihsm.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163juvaowbd.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163voqzlwir.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163qjanaiaz.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163gyymjcfs.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163mgbgklpc.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163vhknfcug.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163bkjrmotb.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163sedoacra.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163czodqnfe.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163abxlmdcc.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163wqjvvadx.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163otyrqtkv.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163bhxwepql.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163dgqtoyaf.html

================================================================================
来源：http://www.aibaodan.cn/163aetvhitd.html


<!-- 参考信息 -->