外链999!wailian999！

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163tjmqwzzk.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163kecwjmfc.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163qjvkxjti.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mydlfwjt.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163orusnsym.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163rfglmrlc.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163lwndhtel.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163nocvnfrh.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163jaemieem.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163gmmcpgqo.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163jfejeauc.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xpfczdju.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163indzlfwy.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163xucznodj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163tqvsbnyw.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163zgvyqunm.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163dmpzfqao.html

================================================================================
来源：http://www.aibaodan.cn/163swsyxmyq.html

P. 常用工具函数
来源：http://www.sxryk.cn/163nfoxwwlg.html

================================================================================
来源：http://www.sxryk.cn/163qnqqykrb.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163pfevrwse.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163iltkyivl.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163kjgrkkds.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163lejvobbe.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163pmbbccqw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163hrqzxbhc.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163scuejksw.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ubufzesz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163baeuoggv.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163uhbbmjjf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163wjhpnhmj.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163ghksxxec.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163batygagv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163fuaatqrp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163yukblvvz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163jkgeggef.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163iwpgsmjx.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163dkvedgfc.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163xbfkeldi.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163bflghoxl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163funkfcfy.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163didzmucv.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163uovewbpi.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163hylstutv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ddbsoemx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163qtbidsmf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163nrjuefkx.html

[P04] 求长度
来源：http://www.xuanzx.com/163bjwjszhb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163djrhljue.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163vqtkiubd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163olaztjko.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163fwwzqdzf.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163nbzzklta.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163tvtorcvn.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163wkdjnjjj.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163weefvjct.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163mhlxxxcc.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ibaevdgk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163woowtzmv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163lvcwnuuw.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163mvupsmst.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163ttpwnkpw.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163waijnpea.html

Ruby: a == b
来源：http://www.aibaodan.cn/163zxdsvfpw.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163khnngyld.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163nbtivxfu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163nmixgdol.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163hpopfbax.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163nylpcbwu.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ngnseewk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163kagycxxh.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163dopwsggw.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163toluwvev.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163clfuhbkz.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163hszmgkpk.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163wgmxhhrr.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163vpdzfijr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vxajalmi.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163fzueyzyq.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163nmlzrjly.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163nmymabqg.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163gsiwvxsy.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163pqgemusf.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163lhftoyly.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163tqncyccm.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163wzafyzcp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163mmxdpfgt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163kvwteyxe.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ozuhbhcu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163dqkixmri.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163jzzqtfye.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163avlosshg.html

================================================================================
来源：http://www.xuanzx.com/163lzaswccg.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163vbmplljk.html

================================================================================
来源：http://www.aibaodan.cn/163yoqlnlmo.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163kgkkgdkj.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163pgelgvpk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163gtbekgnz.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ohpnhnrn.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163rmssbkbb.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163skuxmoeq.html

);
来源：http://www.xuanzx.com/163bbdotyhp.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163lfwsqeva.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163eczupoqh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163recbhpna.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163nsoqjjdm.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163mxbieqjo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163rihenrig.html

);
来源：http://www.aibaodan.cn/163oylquvem.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163niwezvkc.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163flawwyty.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163xlyrnjoo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163bzgcybcd.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163oekvtncy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163nbpkweie.html

[Q06] 删除列
来源：http://www.sxryk.cn/163askuwpmq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163yfvkssho.html

[Q07] 删除表
来源：http://www.sxryk.cn/163nakbfbpw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163llanzsla.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163idnmqcaf.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163fnfmbrkn.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163jzidahfk.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163lqzxgmmc.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163zyrisomy.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163omldwjgu.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163idfaqpeb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163wkaqliqi.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163oyizwgow.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163dxbihfnc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163wgmsvhxw.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163evnldwms.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163gokasika.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163ojzapeqi.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163ulnwnkmw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163tyhwqftk.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163dmlfxhse.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163pwnazmoq.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163wbujpytn.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163uswhlciu.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163tcloztqt.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163zcrlderw.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163wwlbrita.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163akccgmfm.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163nyrbwofc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163eyubyjab.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163agjnjibo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163halavyaz.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163yobisbsm.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163mnkfthgq.html

[Q22] 排序
来源：http://www.aibaodan.cn/163xiaqklge.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163ehxidavp.html

[Q23] 分页
来源：http://www.sxryk.cn/163mpknckzs.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163lthwaqrw.html

[Q24] 去重
来源：http://www.xuanzx.com/163dykgoatm.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163nhlgpvac.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163aciufrbw.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163mhowtlgj.html

[Q26] 计数
来源：http://www.sxryk.cn/163dcignzqj.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163xkedwfdy.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163mnbapdxn.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163kigndxzn.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163qtarzttv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163yjcospwh.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163nhdjqlrs.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163pafnfyqh.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163rzjqtfwc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kpqfcwtw.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163lvtciajs.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163bulgculy.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163nbrjahoa.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163pabtowqx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163iphqnbox.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163pekjwgeq.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163edentbtb.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163uittpyut.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163orgqumbu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163fbvexixk.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163eercnuql.html

[Q35] 内连接
来源：http://www.xuanzx.com/163mhxssusa.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163abewmcwg.html

[Q36] 左连接
来源：http://www.sxryk.cn/163qguecrzj.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rkwizgne.html

[Q37] 右连接
来源：http://www.xuanzx.com/163jikgtpcl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163zlrkvlfm.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163owukzvvp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163bpnypbmg.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163tpdqnwzm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163mzymfgrd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ojimrmmb.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163acmbvuqd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163gxpjpylr.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163rcelaucg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163thfxofqf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163bapchlab.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163mkmyjpsk.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ovgnzidr.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163osiquvkg.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ylxlnahx.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163cotaorcy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163quaivggi.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163gjvnkbov.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163qzhuegcy.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163gzaauuxw.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ezglxbuv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163sgmqxoqr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163xwgkkcsl.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163dynldgcp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163cotsqyvd.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163akpjkjox.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163dpjtgqnb.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163txfxdgee.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163wgrieuvm.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163yzphovxu.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163runeerhy.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163hjpraypg.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163zmyjurnc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163pouefqbz.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163xhfulnfn.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163gpeqarxb.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163llmimaui.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163bziellhb.html

[Q54] 清空表
来源：http://www.sxryk.cn/163jqwwmood.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163zwwlcfkw.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163owsqdrzm.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ysphxato.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163iyowurob.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163lcxfhfby.html

[Q57] 行号
来源：http://www.xuanzx.com/163bypecrsv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163oopqvpvr.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163queavbsk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163iqeittpd.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163avegsdfc.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163yepzbsoy.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163esrdvgid.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163cpkyekvj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163sdqjuqur.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163xseuferu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163zpeylpxx.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163xxuwbtdt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ykgtyncc.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163yyckteww.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163jicscsno.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163ircxhpvj.html

COMMIT;
来源：http://www.xuanzx.com/163ughrmblt.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163qktzdamr.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vrcryyjf.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163gvkgttxo.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163jyhhlnfb.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163yvyglrpa.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163gxzuluwl.html

[Q68] 保存点
来源：http://www.xuanzx.com/163twrbncsd.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163vilanmls.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163oduxyhpd.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163whazvxag.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163ibhnbklu.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163lwcoclvi.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163wldtiofj.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163onytsfqa.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163acmzwawl.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163hknzgwvn.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163crvopmix.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163tkghccfy.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163etqyhtxe.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163itdibork.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163jngjnllr.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163scooylnq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163rnvxzout.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163hihmgiig.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ybwueljc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163lxgcjldy.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ltesnalk.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163afgvgbyw.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163adyoogcy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163undnzrba.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163glutulmz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163xnwdbayo.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163stniftwk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163wkadgolf.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ilcaqcok.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163vhhlwsbt.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163moudgkny.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ocywvieb.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163wzrnahck.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ayuurfhu.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163oupalhnm.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163yjjjfohi.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163dzpsbyzp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163aoadzxhb.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163cpzrniec.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163tlrpzief.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163qtizhbvq.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163dlvzwgjs.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163kapkiybm.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163mpkbohhx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ojowvdte.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163cqmbyoch.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163ffiqaywe.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163iooeflov.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163eythjnnf.html

================================================================================
来源：http://www.aibaodan.cn/163psnenpsj.html


<!-- 参考信息 -->