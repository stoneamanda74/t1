外链999!wailian999！

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163bwjjawhl.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163lcnjmmjs.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163oxdoifuf.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163drvzdvgh.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163hfzghhry.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163hzzhhgkk.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163kbvhtfqo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163xcyskwgu.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163kkvwuvdg.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163lgeycfmf.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163rzitwizi.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ntrcjobr.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163juxabihv.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163jnbjhapt.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163brgezitx.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163vniariwc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163dekinypp.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163xnsqrkgs.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163ydstoxwb.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163wymnezgf.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163hgtweedx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163icucrjpu.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vglqoohq.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vssftjnm.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163fleuuavh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163wgbrohya.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163zljcmftu.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163vdxsmfoe.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163jabgxzkq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163gtcnzshd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163htbgtzfd.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163sdlfjpgf.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163cuuppaxt.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163welqhpzz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163uvbmrzpv.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163feyicqil.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163zojgrtpm.html

================================================================================
来源：http://www.sxryk.cn/163bhihdktw.html

P. 常用工具函数
来源：http://www.xuanzx.com/163ndxaimsg.html

================================================================================
来源：http://www.xuanzx.com/163lohfycps.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163mzomazcs.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163lzatotlt.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163uphvdejy.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163dtrecngz.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ltbvpsfp.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163wslolgeh.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ubqcfckm.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163bpusbxak.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163qvkmsmup.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163teeomzvo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163poatsddd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163ywjkpoxw.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163zwyhxgxi.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163ypfbahkn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163wegxlzpy.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163xnmbfpro.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163ixizuqtu.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163hojumonu.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163hsmqfmvh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163evyyektc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163cjdencax.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163zaczqjza.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163xzkbzalv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163zluccawe.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163aposmgdn.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163tyydgamv.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163xhdzqeoq.html

[P04] 求长度
来源：http://www.aibaodan.cn/163lqklgcfz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163keiyxsfm.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lwdovqbj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163plbgbzci.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163yjcebqoo.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163lzdauvfj.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163jcejzsdd.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163ekafmdqn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163zghuixbl.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163jdyagrzs.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163odwrndjk.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ykavnktk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163lhitkozv.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163fzasadsd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163qpcssydb.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163tzwkcpkv.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ebvmuzec.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163rcfyqqyt.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163fevxtsid.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163bcfsejlq.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163gkgsxcxf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163ccauzlrs.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163borhckqr.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163cpomaqjv.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163djjenysh.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163xfmidiug.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163hxpdcgbj.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163szyvhxgn.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163kndchzmi.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163wytoensg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163xwmzlmjr.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ekskrfob.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163xcbfdows.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163fmdfitmy.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163bgnhjzfq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163dkkqhhhm.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163zvgfzrgr.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163vowqmcsb.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163mkfgzboo.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163qqxsktiz.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163olsvuuaw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163pgadhlsx.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163uyokgmay.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163vypwawtf.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163nxemsqyr.html

================================================================================
来源：http://www.sxryk.cn/163ytusnqav.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163akulscyg.html

================================================================================
来源：http://www.aibaodan.cn/163obqimqat.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163brxwbdfw.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163kjalgedz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163eatxadqi.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163hiihxxjw.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163pvgvobcy.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163puookkoj.html

);
来源：http://www.sxryk.cn/163jdvpktek.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163rpdqjxol.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163apribvvl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qfehdbvo.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163pmvbkpyy.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163kyszruqd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163qfrmhonk.html

);
来源：http://www.xuanzx.com/163neinditf.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163aeiknyex.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163sffglspa.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163usnzullz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163iyizjkwc.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163srhrijgv.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163ykxbhekz.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163zyhybktq.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163zykixnpf.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163xnpzzmgo.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163swjbibpf.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163vauibeuh.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163bjiwoooz.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163wpxzzwlz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163svtykmwm.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163ufmjgxuy.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163xkjpyhlz.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163rfjjbcei.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163apexurzz.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163acmzvdki.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ooawhzbw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ikqzjozx.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163mcanbthw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ghbkdxfj.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163rzuvdxnq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163oxdeouxb.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163mqtqxzlm.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163euixoynl.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163clkmbleo.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163pndhkfyx.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ixpdvwtd.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163rapuxrdn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163qtrhftjw.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163humblpwm.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163wxmnciwd.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163ggipuzds.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163jwukvcqc.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163oqeelivl.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163fniykdjt.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163gabfoulu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163yzzynerl.html

[Q22] 排序
来源：http://www.aibaodan.cn/163pspukavz.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163ugfopukj.html

[Q23] 分页
来源：http://www.xuanzx.com/163yhoegifi.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163bcnbsubw.html

[Q24] 去重
来源：http://www.xuanzx.com/163gccihtvc.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163pnnitjry.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163jxphknrg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163tsyhziyf.html

[Q26] 计数
来源：http://www.xuanzx.com/163prcfbyso.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163wrzobnaj.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163hphbrtlp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163eihlpryn.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163sopbxxjd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163doylcwij.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163nsochsnl.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163gggpflxv.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163qfxxedtn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zmwmwnbg.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163cfwupawv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163wiahemjr.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qoowcrsy.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rlirlqdh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163cbzuyubc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163mehuqlon.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163zcqozfah.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163xlrhdhir.html

SELECT * FROM (
来源：http://www.xuanzx.com/163qpdkfafa.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163axembwdj.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163ekczhccl.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163dfujgikc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dzbaamtr.html

[Q36] 左连接
来源：http://www.xuanzx.com/163cgefbryd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163iummorob.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163ljmpfosx.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163vpfcwhcg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163usdiugob.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163wbnykxwn.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163lklwujuc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163qktqlhya.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163aqwtweqj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163iousauar.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ywbngbwg.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163hzjvvlus.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163eyhizsnb.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163zhoeolcq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163iobozjal.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163dramgdwg.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163hnllvapj.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163wgljcnac.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163yerodbop.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163xhlfvgla.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163zcoxyqmi.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163anbyryje.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163fehjfjgd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163fhsjncji.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163ednqmfma.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163wdzmpker.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163rwebteuu.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163cihliwoy.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163tghtqyez.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163imsqnmtq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163fxrnrenc.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163lprejtvd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163igjoechp.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163aqmandke.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163llbhilul.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163chicvhvc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ujrfzzmp.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163konbvqts.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163dxlmqunq.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163ysctvwos.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163oxuyrfky.html

[Q54] 清空表
来源：http://www.xuanzx.com/163riyrjzvh.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163dmfwfitg.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163rpgkpmlv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163qrzmbbre.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163fzzfpqtc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163jxrsxafe.html

[Q57] 行号
来源：http://www.xuanzx.com/163oxfwamhh.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163npvlgdmi.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163qrchehyj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163sjhfbosi.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163nymihmsg.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163tvszdwhp.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163tqvfyxdg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163eaifknhy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163onqiaofd.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163meajbgxr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163fpbrrseh.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163qjaorerk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163auoybytm.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163bdeiklbb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163doaltauf.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163rycioyga.html

COMMIT;
来源：http://www.aibaodan.cn/163ypqhpvie.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163czujomsb.html

ROLLBACK;
来源：http://www.sxryk.cn/163zahkbkco.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163ngadhidb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163vzrffncb.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163gkgylkqk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163hyyafavo.html

[Q68] 保存点
来源：http://www.xuanzx.com/163aaaxfayo.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163nstlvnmd.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163owbepakm.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ucvkpwri.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163wcogquob.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163bsuieptj.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163uvdnkqmv.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163jylduvpk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xuqrxpjj.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ileygawk.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163zjbtahch.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163wkzklktj.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163vksxttzh.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163ruhgmpjw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163tqqcdcez.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ydhevczh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163rtlxkrft.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163ypsgmpiy.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163eabadylk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163tqexfzxo.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163ogzixsrf.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ybzopecz.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163osaavkvc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163zxbkepwa.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163lshlcpwv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ifppwoxq.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163zhbhppew.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163zabkeldf.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163mgfajheh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163xoleiwbb.html


<!-- 参考信息 -->