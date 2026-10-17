外链999!wailian999！

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163diweutnj.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163rdlwkyra.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163adjujjhm.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163gbxcsimg.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163sdmhhwtn.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163eddzjogi.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163svkavzkb.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163xgtbasqg.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163yavhbump.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163ctkixnsx.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163sjxeksxu.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163uyyptpjh.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163kmvzzgqv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163ghklopbf.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163itevjzxb.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mkgqsdhc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163oggywdtk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163tswjphuw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163hkvvujgo.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163jhyqphpc.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163aczetlnl.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163hnnwjvge.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163jfbkeiuf.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163yphcvyps.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163qcmuypsu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163yqtcawoy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163dpjzvkkl.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163hcmzyiyg.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ivrprhqs.html

================================================================================
来源：http://www.aibaodan.cn/163kjyizizd.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163vxctmifc.html

================================================================================
来源：http://www.xuanzx.com/163muorrjsg.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163vmtslbpc.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163wwxnwexx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163odbgtdto.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qvlbnedt.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ebfaaztz.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163goubombg.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163sqsokply.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163nyjkacfm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163bitugkch.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163bwtyynzk.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163qlcsisks.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163gdtrtnox.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163kxrjqbia.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163sbvezbfx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163dcnzwauz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ydmyqtbb.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163riilwhgp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163nemleyoe.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163bpawayvk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163zjarmylj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163iyruqumi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kcmrjlwg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163ztqutxlg.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163mmzqybms.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ggqciljl.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163jxxpjmbd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163ytpvytsr.html

[P04] 求长度
来源：http://www.xuanzx.com/163mwgluxmr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163jqaeuxan.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163fdeckwbv.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163cofdnrxx.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163mujitbcu.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163abgcwdow.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163qtsqwsbr.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163futvhyom.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163wverqves.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163zekbiytl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163dzsaijpo.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ztxngmuk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163jiqachbb.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163edpyzmyh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163yvrzbpbu.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163lfnqooov.html

Ruby: a == b
来源：http://www.xuanzx.com/163pbidqxud.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163xnljkyih.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163hkftqywd.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163itjvfhgj.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163szbgmzkm.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163sgbrvfvk.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163doczlkoj.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163tygvfext.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163uvukiefh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163pyifankp.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163alsmvxml.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163fgyiutpw.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163lawbiijp.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163yxzuecue.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ddsbbuov.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163chdzjkie.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163bwgwqrwo.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163vgxjgnxp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163blfzrmdh.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163qaipvgei.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163vmelxviw.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163hqhywaqo.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163kgmxwvuw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163sibhxncw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163uwanusfx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163rqzoqpcp.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163vyhoyjmk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163ckrqvatp.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163cfdqvkhn.html

================================================================================
来源：http://www.xuanzx.com/163dygaynbw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163fqeswffg.html

================================================================================
来源：http://www.sxryk.cn/163xzrhipwx.html

[Q01] 创建表
来源：http://www.sxryk.cn/163jpnxouea.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ikmvycmq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163wnsfypeq.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163lfbwvihd.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163neyomzcl.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163uxrktjhm.html

);
来源：http://www.sxryk.cn/163wfoankfx.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163zvwnulpm.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163bviwzizd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163tjazzbbf.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163wnltyofx.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163cjbgzcth.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163iqwzzrwi.html

);
来源：http://www.aibaodan.cn/163txkgnzno.html

[Q03] 增加列
来源：http://www.xuanzx.com/163ibgblyis.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163lsozypiw.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163bqlowjpt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163wkgdfsxa.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163qrggasah.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163qfteirta.html

[Q06] 删除列
来源：http://www.sxryk.cn/163hfuztkfi.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163rphsjkrg.html

[Q07] 删除表
来源：http://www.xuanzx.com/163uobahffh.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163lasdulho.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163sartclyi.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163fnpfyebi.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163trfkckxw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163fyhradya.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163wctxisjv.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163uxrstucr.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163iwssifxc.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163datfogcn.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163tkqgcuqw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163hkpusjtm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163gvfzudbb.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163gzchhnds.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163lmeanrbe.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163anunsksd.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163mdlmcxcn.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163sezqposu.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163kphmsgva.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163feqzdeok.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163odxskglp.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ovcfxlbt.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163giundecv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163pyxwzshw.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163kyepzmta.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163mhsxiqfs.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163whgfzzbp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163mwtpprxh.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163qcvtfhst.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163rknobgbp.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163losoozrw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163zewmklsv.html

[Q22] 排序
来源：http://www.sxryk.cn/163bgbiubas.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163agsorrmx.html

[Q23] 分页
来源：http://www.xuanzx.com/163hikmxrhj.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163imglzhyf.html

[Q24] 去重
来源：http://www.aibaodan.cn/163sikqyhbx.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163yasoekfm.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163llsixquy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ncyypruy.html

[Q26] 计数
来源：http://www.sxryk.cn/163qkuyejvd.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163wgwhtmug.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163zbdudecu.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163rjoremuw.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163jefwycvc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163pfvdqjbx.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163btpvlkrr.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163tahwvlvp.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163zuoloban.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163bcoxlgnk.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163naqmnjgy.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163knmlmdgq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163vzkosvrr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zlajfqjh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163imwtjiqh.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163fkpvatfm.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163rifsvnrj.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163giiyczoh.html

SELECT * FROM (
来源：http://www.sxryk.cn/163zcwxibax.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163povbdbpw.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ffloyfzy.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163fwbgssoh.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zvrooicy.html

[Q36] 左连接
来源：http://www.sxryk.cn/163gdgdpqky.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zetuxkgy.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163mekgksoa.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163fpflnooe.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163sxwmhpdc.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163sroiiaqz.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163veruauln.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163djbvafgn.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163qtcbrrbt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163sogqzsfk.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163zhjxvktj.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163vwhytiet.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163pynqdzbj.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163lwjmngra.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163qaluoorc.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163xhrtigzz.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163nwxbrwan.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163hiqsbdjl.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ivcbkwnl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163crsoeppr.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163tpcjgrtr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ycxrwxgd.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163qtixxcip.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163iyvshati.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163waixxmzs.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163lgdfdttr.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163wfjxoigx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163nmlvklkd.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163zotiohjk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163qougqaoj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163qbipjbmy.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163qjzjwahh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163gbwiejpo.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163spjoivkx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163hxhkbufr.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163bllosata.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163sqfmdbag.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163bhcybkig.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163fzudzevp.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163nzuakolv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163enleefto.html

[Q54] 清空表
来源：http://www.xuanzx.com/163wsltqzjh.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ogpfdyxf.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163mrjpxzsx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ldbxuopo.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163niqjkxxh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163dulrnums.html

[Q57] 行号
来源：http://www.xuanzx.com/163yqanpjwc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163tjuicmvg.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163omxiyjnx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163tczobzgf.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163jgdqclfe.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163hjnspmyo.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163dgtsggue.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163gwhxwxqx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163zhoyxnlu.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163yxhkfiiw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163qztwognn.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163vgxvjgmd.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163evqgpnbb.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163usilxlfi.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163fbxkgisi.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163bffadbzi.html

COMMIT;
来源：http://www.aibaodan.cn/163vvkxffsk.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ohbaxddr.html

ROLLBACK;
来源：http://www.sxryk.cn/163homovhwc.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163iakbwcly.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163klowydle.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163exjacfbk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163vggezbni.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163yuiirqml.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163mnsoalvw.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163mbbgvjan.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163eaitorbl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163tuutuyqt.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163riqqoihi.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163dlwdtizj.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163oxnkpzhs.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163njgijmsl.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ihtwnvtf.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163dfxirsnf.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163jhqoynss.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163kwxelbjs.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163isapcdha.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163sqisjyja.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163myfdldec.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ipcajkxy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163pvpjgkwa.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163wcqossls.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163bqfqmklu.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163mjocdzzz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163enwmpsze.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163ixsjjkdu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163hsalpyec.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163fafjgsjq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163xiwhyyel.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163bekgayee.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163pwzekhwt.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163qitcrzwx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163dzlllmay.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163osrqkgnx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163gjolrqcz.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163kajzmapb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ehrlgzsy.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163kxkjzfhb.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163khbbwbad.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163yijdenkz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163lylxfbym.html


<!-- 参考信息 -->