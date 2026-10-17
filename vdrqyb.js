外链999!wailian999！

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163ulhllscb.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163albjstnm.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163jgipyoqs.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163qadzxtky.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163efuwivre.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163dfqrkrgu.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163nyxlyhxs.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163ryunhsnv.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163bengjjnn.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163yvhbrsmz.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163mjodglax.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163kplkstnr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163uwyzetui.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163krjmvmjc.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163jfnomhxc.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163vxvwpwbe.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163zazlgsfi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163uwvvools.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163dutrhlok.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163dbpncarv.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163vvodhtpa.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163tcminzbi.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163iavpihjk.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163idaadsiq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163irdsqpue.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163gbmbwyru.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163kqytmyiz.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163ndjsryud.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ccbafbal.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163kbodmglb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163lnxzflbe.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163zwkkoadr.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163apfobgme.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163hoekndtj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163ytqqqogj.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163ohqieecu.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163kpjmskhk.html

================================================================================
来源：http://www.sxryk.cn/163becbjrif.html

P. 常用工具函数
来源：http://www.xuanzx.com/163dvnkoqvw.html

================================================================================
来源：http://www.xuanzx.com/163rpeihclo.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163grazzsqq.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163dgsxmgdr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163epefcqzc.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163wcajuxoo.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163nhyakqmx.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163mxkcblsr.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163fgrvhpir.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163iibylznb.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163hcfrvfxj.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163kbgfttyu.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163uqltxpvw.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163htdiksmf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163ilhfhymv.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163ayeksvtc.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163scyuqfio.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163tbyhngwl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163zvmzuvhu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163fkdotyko.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163wwwzmpcf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ohhncren.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163czfbmbtx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163guzrxwmu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kvnpkese.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163fnllyfos.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163qzbgqldg.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163dqjczyen.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163tboslxgr.html

[P04] 求长度
来源：http://www.aibaodan.cn/163oferiswz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163rtgunogy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163phjsquzj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163aqiyzomy.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163klytlvrt.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163gsnggcbh.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163jpiarfse.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163nzccxexh.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163wusppawr.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163mucasbvi.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163wbrsqvdk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163dqmbcxhn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163aajkgwze.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163hmggiucu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163jrqfcfyf.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163zgzfuimy.html

Ruby: a == b
来源：http://www.sxryk.cn/163plasbces.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163mhroslzs.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163hfkpkltf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ofvgzgsw.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163dxybkyaw.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163nevzjjvx.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163eltqvnum.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163xqsnycii.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163weabftld.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163vftiknot.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163fahqqbmb.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163rapsugic.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163pxbbldek.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163nnptngbu.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163gnufaojg.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mncqowgj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163jsccuujv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163asywwtaj.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163oadlujdj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163vwfipdfy.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163kgjjwsry.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163wcypppjr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163kyivvhzy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163agvqcbkn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163dbtfrcqx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163gqrlaimn.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163rgqupynq.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163jevhatyn.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163mpiarlso.html

================================================================================
来源：http://www.xuanzx.com/163tkxhbhvf.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ptdvisuk.html

================================================================================
来源：http://www.sxryk.cn/163grtbikqs.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163kilkhqio.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163wzdxosse.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163moebfdsn.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ffzxjfbc.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ifrfoplf.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163zgwqwsql.html

);
来源：http://www.sxryk.cn/163mgtluelx.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163yyojvvpu.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163stneisfs.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163swwepbna.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163uqbqnyjq.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163svlvflfu.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163efdaeaui.html

);
来源：http://www.xuanzx.com/163xmkkqfcu.html

[Q03] 增加列
来源：http://www.sxryk.cn/163pprttlta.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163yydqljut.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163ecnmgjun.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163qqysgpkw.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163qrwvsxzt.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ecjxmekv.html

[Q06] 删除列
来源：http://www.sxryk.cn/163jxexxwvs.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ctifiiny.html

[Q07] 删除表
来源：http://www.xuanzx.com/163faqjihzo.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163jfgshudj.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163nfuhgrpc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163xizzwgeb.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163zcocgdqw.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163lxwfvlpe.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163owcmieuu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163neyjqirv.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163sczcjvea.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163tddoxzdr.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163suijuhef.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163zfauikuq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163cduoebcu.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163kwcyxnjg.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163holycrty.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163nyyqbgqw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163hvxakbjd.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163gcglqxvd.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163qgnldgto.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163ushlkavt.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163bbdncbeu.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163engztfax.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163esajtxjl.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163pngnkoaj.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163gxbuksol.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163xtnbtnnm.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163lqdxqrcq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163oflwkulo.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163lglkgpds.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163uqjuatrt.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163qqbaalmd.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163zvkzluzc.html

[Q22] 排序
来源：http://www.xuanzx.com/163wflhuesg.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163wfaemppa.html

[Q23] 分页
来源：http://www.aibaodan.cn/163binqeary.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163kuahkqdb.html

[Q24] 去重
来源：http://www.aibaodan.cn/163agykbszt.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163zkotohip.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163btfissiz.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163glxmcsjl.html

[Q26] 计数
来源：http://www.xuanzx.com/163gbzoarrz.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163ecqdijvu.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163awnnvidv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163icezuhxx.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163rnunoxrl.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163vvldbpcx.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163zpdqqrxi.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163qxiqasrd.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163ndczsxmk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163pkwxvgew.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ajifvmtj.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ostjzigh.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163bndcobew.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ustvfrkl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163iwgsouzy.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163uoavzapg.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163kfnktpaz.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163tplygaet.html

SELECT * FROM (
来源：http://www.xuanzx.com/163oktihuuo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163wtavtuio.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163mwjyzmgm.html

[Q35] 内连接
来源：http://www.sxryk.cn/163siyinkry.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ldgkphbo.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163axwurnbt.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163lztutpuy.html

[Q37] 右连接
来源：http://www.sxryk.cn/163rqakddyj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163qccrkoyl.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163ybzjwsoh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163vpbxzhgt.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163jnerdlki.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163yjhiqiwr.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163fjdlihom.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163bksdiozh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163gvgpjuuy.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163hdukrqhc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163fnfajygk.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ybfmpxva.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163qmawdnkt.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ojbntizb.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163kodwueuf.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163fefwhgub.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163uwokjihf.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163amanvoxh.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ewhnzeyh.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163sryqkmln.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163rxwheiyh.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163pkdqnpob.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163zwmlrfcj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163whupcucn.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163deuxbpyx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163xgqoafbo.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163qubaxyty.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163sphzjnll.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163qlaiqkhj.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163zaujmmhq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163qaxaurla.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163wmfsdtaq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ilngvsre.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163uhciycyg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163txhespkb.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163mzugffbu.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163wrqrpsmw.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163nmxacezu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163adeaocrb.html

[Q54] 清空表
来源：http://www.xuanzx.com/163weeodkbw.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163hiugtfus.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163qhprguyk.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163yjpsmxqn.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163cobgsino.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163yvfmgzkj.html

[Q57] 行号
来源：http://www.xuanzx.com/163qipvmlmp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163gxcvsznm.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xjusyfpr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163okzxbxme.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163yggnygqs.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163zzbwggnr.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163oxdoqwpc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163qapispem.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163vlnwsxzr.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163xphtmyuz.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163rqxoihlu.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163eigvyerm.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tqpggzzs.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163hfnmvjvr.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163usdwfoii.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163zivufvel.html

COMMIT;
来源：http://www.xuanzx.com/163nyltvmnp.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163tnlecpfu.html

ROLLBACK;
来源：http://www.aibaodan.cn/163kidfstjw.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163pruylore.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163tgommfwg.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ipowssaw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163atilgvqh.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163boymuzth.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163nulmbbpu.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163jscyahvt.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163mwtsrgmx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163niqugbck.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163esttikxy.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163czsrfdqw.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163dnzbichx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163kqfbzqra.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163cyigwgpg.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163msgbxdwr.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163eqqdjqes.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163vzuyvxjn.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163vhwvwojj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163wgeuegjq.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163krwsyyyy.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ehaawutu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163lryyxdon.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163prnozbow.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163mghldqig.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163zchbqgpw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163lsnibgop.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ihsecicc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qpndvzat.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163uuqknizn.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163abiiajdx.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163vwmzjqwl.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163oacankso.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163lhnmtyar.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163qqfyfgig.html


<!-- 参考信息 -->