外链999!wailian999！

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163bymzfdln.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163tltlzwbq.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163ekkyettq.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163admvdbpz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163bykeuhsy.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163nveyvsda.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163jjqvieai.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163lygonofu.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163ihfwaxjb.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163mstmdnxu.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163wlzlvtdo.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163aunorits.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163gjffodto.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163btzjstnn.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163roqtzhxv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163nxfmgcun.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163yrxdxved.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163jwmumuzy.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163xmccqmjt.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163ltltpgjr.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163uqkbalka.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163mvzkpkrx.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163hxqogjpe.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163sdouccop.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163pynhcutd.html

================================================================================
来源：http://www.xuanzx.com/163xyhxboma.html

P. 常用工具函数
来源：http://www.sxryk.cn/163wwoicnmg.html

================================================================================
来源：http://www.aibaodan.cn/163midkswzm.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163mdidxrio.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163ohogeksw.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163pzlxhdnb.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163jpaogizv.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163infymfsr.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163gjzxperq.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163vczqcgnm.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163zzvjoata.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163fwcjmskh.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163yqyfcuds.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163ofdgpefy.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163byjossic.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163vxazdizr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163hkbgnrlo.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163ukunpfcq.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163aadorssb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163figtqjrb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163jydbrapx.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163uraxxral.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163qkivdski.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163ouzhobcv.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rfbbnlay.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163matixopx.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163agvorftr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163gnsmdvvn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163gakhgiav.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163viempigr.html

[P04] 求长度
来源：http://www.sxryk.cn/163zwlopydl.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163gmkgprda.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163oarslvnf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163itlanrya.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163xwdljupi.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163dgewwnen.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163cvwyfnzx.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163gdqdnzue.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163uwlysfji.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163dcftieqd.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163wckeduro.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163wimdlizc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qpasedxu.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163xnmjdvox.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163mqozooqy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163xiveplhx.html

Ruby: a == b
来源：http://www.xuanzx.com/163pszrzvqw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163rcawublz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163guvkldss.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163peahcbct.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ixvuewsf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163tivecusg.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163hdikfiik.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163gtlmuajd.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163vnnmzvfb.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163osukoxdv.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163kifuugjr.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163doyxgtnw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163pgkzmrak.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163guqvwgnx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hvunbxxc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163hsuebtue.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163fcspnfhs.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163pdmxufpw.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163idixpyhy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163yxzufhcx.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163bnamltbr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163egngehlf.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163jdeghjkg.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163ixdkmqqz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163gysdndgz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163wonqlidh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163zvpswhje.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163irtqxkxq.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ynmeemad.html

================================================================================
来源：http://www.aibaodan.cn/163luofaqdq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163kbhfhysh.html

================================================================================
来源：http://www.sxryk.cn/163jdzmbdzl.html

[Q01] 创建表
来源：http://www.sxryk.cn/163jmwgwvgh.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163exqvvzkc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163muqsgpij.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ilbghgld.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163acobylxr.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163xuhitssm.html

);
来源：http://www.aibaodan.cn/163cuknkgaj.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163jjkeeufg.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163hludppiu.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163xxbkzbqu.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163jopgehbi.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163trmujvft.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163wjyuthvn.html

);
来源：http://www.aibaodan.cn/163rcryeylv.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ygxdeelb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163hbzgybxz.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163gjqubzoe.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163sqtuadkw.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163tobtpmef.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163hyoazcel.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163iufvdqie.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163odwieiif.html

[Q07] 删除表
来源：http://www.sxryk.cn/163vdvmmbea.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163amajzjum.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163alqurhtz.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163evokwedc.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163cnstjtvr.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163seocxghi.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ldolyjao.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163yqyhgxgw.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163qfkznxvy.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163cqzjxjye.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163ejcsnpcu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163ghweuchm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163jcmgniml.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163dfwvftlu.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163eyaatblt.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163udvdculd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ewaqffoa.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163itrwtrvs.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ihjjgwrk.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163cstwfetx.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ehdubgir.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163gvweyvnw.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163moecmvfw.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163potgdchc.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163ulckcmsu.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163tatfhrkm.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163hsewvnsy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163gnmdyxkv.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163fkuiopwo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163nftkswcr.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163hntxnrpn.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163abutgaud.html

[Q22] 排序
来源：http://www.xuanzx.com/163szcjixft.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163htrlaiqm.html

[Q23] 分页
来源：http://www.xuanzx.com/163zfyekpre.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163iilwysng.html

[Q24] 去重
来源：http://www.sxryk.cn/163fmyudpbt.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163pglfnxyd.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163vcyxeajv.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163ldqkpmqi.html

[Q26] 计数
来源：http://www.aibaodan.cn/163zwdwfufz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163zntovqbj.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163lakryyom.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163pincqfvq.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163kuulqiub.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163bqmierxl.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163rpiwvkdh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163covkmxsj.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ynhocnek.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163plajlsjm.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163pdqvuuqm.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163sgvupfmp.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163evevpvyt.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lwjpxzxp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163oxuugees.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163bwnefjup.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163bipgfqmf.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163hdrhcyen.html

SELECT * FROM (
来源：http://www.xuanzx.com/163ohddlsyd.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163tjlrtzai.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163zluocgwk.html

[Q35] 内连接
来源：http://www.xuanzx.com/163rvxinywi.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qqkloatz.html

[Q36] 左连接
来源：http://www.xuanzx.com/163riwhtdsn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tnepkhmv.html

[Q37] 右连接
来源：http://www.xuanzx.com/163mxzdnqzw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163muajpxbs.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163tsxcieps.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163pdiwmmtw.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163muwvobww.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163rsxnuifp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163iocjgmjh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163lowxrvph.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163gdfxdprl.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163txwrmbky.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163zejipalp.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163frwkropv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lrbwmoht.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163fddcwful.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ovuijedg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163nfsmakou.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163xtiigxfm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163rfplepst.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163kisahopj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163uprrxixf.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163gndzxvdi.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163iknxphpa.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163subwnnwt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163dvvfdnzz.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163tcxsyujc.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163mxfmxuxb.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163rycpfqrb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163ndtmxedr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163qdtwfcgu.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163eazkibkq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163sqesxnko.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163frxwakms.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ptynopzr.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163xjbiagub.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163opdoehbm.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163wzqnntqn.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163hlmprmll.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163iibaboro.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163wcnqruwt.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163frzgyfyt.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163xcmacioj.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163lfvmssul.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163knbrhfkr.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163sypcgndl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163vyamezfb.html

[Q57] 行号
来源：http://www.aibaodan.cn/163taxsnznd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163oapcgvwn.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163exvsqhee.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163zxdxigza.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163crijocbg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163qqtctokp.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163nmdsxqur.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163yxrwulnn.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163xnvmqruc.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163nzyxsyqa.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163brknmyoe.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163prntuazw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163paxtrjqd.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163znkrlkhh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163iokpayky.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163kvaqoncb.html

COMMIT;
来源：http://www.sxryk.cn/163ncprwlyj.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163pawpvtoo.html

ROLLBACK;
来源：http://www.sxryk.cn/163tlyzpwyx.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163imldzreq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163mwmyrfch.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163gfgnftai.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163srzubhuz.html

[Q68] 保存点
来源：http://www.xuanzx.com/163obdsdbyk.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163fjjhuquh.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163dcysreco.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163sheftrel.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163uzenwmke.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163ncecgjvj.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163uyujsqhi.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mgqsbkiw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163qmxzdlyp.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163qceyohya.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163lrdebyst.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163kqyvktny.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163llmzuhcs.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163keljvmkd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163slvmffon.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163msaehutr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163cenfuafq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163litgnvhj.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163giysxhbf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163rbycaukx.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163pgsyffsy.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163epmqyqej.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ifkzoybo.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163lrmujgya.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163dtnqoned.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163epfpqvsq.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163wtesofgo.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163vtbbrmms.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163tenoognf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163hwtbaxds.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163anypqzey.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163idyjhezv.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163eaebazgw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163sbigocww.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163qfbcwesc.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163lpiolbxj.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163hcynqerl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163imfumygw.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163paifxssb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163wzfbtoyj.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163bilwguga.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ofrhgtgk.html


<!-- 参考信息 -->