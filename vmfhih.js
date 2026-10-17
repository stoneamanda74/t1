外链999!wailian999！

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163eovmvedc.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163xvcbdesd.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163xxdpzeur.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163mavzyxhs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163avtsluvc.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163pvchcbay.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163sfdlgmqe.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163mzyevhqu.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163tsvnzonm.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163rjoqycut.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163esfpqlsn.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163jlsiczvh.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163hvakrpoj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163iwmoxtwp.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163jpydirac.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163hocdurqz.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163hmhrcipm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163javtkrrw.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163mawyjvwr.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163wffbddgn.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163qptybmpy.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163dtgcysti.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163enurbsse.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163otpiamci.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163cxnjhapu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163zccfarep.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163wemrtsui.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163wozrfvjv.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163piwbyfet.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163qefjyzvw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163jbxlddfc.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163neticdjx.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163lrtoaepf.html

================================================================================
来源：http://www.sxryk.cn/163detnclak.html

P. 常用工具函数
来源：http://www.xuanzx.com/163jxvrbrit.html

================================================================================
来源：http://www.sxryk.cn/163ftjaaaqj.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163hzquqnzq.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163cgawlomm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163mtjpozac.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ulzgkpdq.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163oejxhxux.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163tgklmivp.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163uiarfwif.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163epvgywjl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163aruomsnh.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163reyodhrj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163fonsouha.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163bbjfpavr.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163woqrmibj.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163fkpgivqw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163mnfesjuv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163yazzjrgg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163figrbtga.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163plziwvsf.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163lcpsxxqh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163tegosdhb.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163nuqphhrg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qxmhkpsp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163sypjyrae.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163sbcfmfdo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163lakglvlv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163fgjphwzg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163bgwaogbt.html

[P04] 求长度
来源：http://www.sxryk.cn/163yisryymr.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163gtthuoio.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163sdkoaeqp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163xronbvht.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163hgssumqj.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163zhqlctwu.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163qbobxxhd.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163npnizjqg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163eyoatfjb.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163iyzmnomp.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163bnwjxlut.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163xnebuwlk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163plurigsa.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163iapgczoq.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ydhfripj.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163utnzswfq.html

Ruby: a == b
来源：http://www.sxryk.cn/163lebszhak.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163pnjwpkec.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163wmsaxnff.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163zclmqwej.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163hgihxoqc.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163zousjbmb.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163kzrhwfup.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163cdypyrdp.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163razrmbqm.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163fpqiwcxt.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163amwitotj.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ztsqumce.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163nqqflezc.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163lavlhntg.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163smhshncq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163ilhhplao.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163khkcxriu.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163pqgrzxjo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163zdraxvwk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163rekrffsh.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163yswbvios.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163sesozrml.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ehepxxik.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163hfjuzzfy.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163lpyralkw.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163zpvghnkv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163fxwjqcgv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163bpkwfiqc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163kvecgcop.html

================================================================================
来源：http://www.xuanzx.com/163dpsqvcls.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163upzzqypx.html

================================================================================
来源：http://www.xuanzx.com/163bgtrxpjx.html

[Q01] 创建表
来源：http://www.sxryk.cn/163anyrocsp.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163snzufrxu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163bqwoolks.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163zeguqgwc.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163owdafwdj.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163jufnncxp.html

);
来源：http://www.xuanzx.com/163gvvizxaf.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163vpwkfths.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163dsnwtnuv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vdmzclrd.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163ipmmzjdu.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ywvrtkpg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163xdeqqqef.html

);
来源：http://www.sxryk.cn/163istaqyux.html

[Q03] 增加列
来源：http://www.sxryk.cn/163okdklgam.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ubetdsrv.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163cwvtmzqd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163rmdmecuf.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163kvuvtxfs.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163sergvzcc.html

[Q06] 删除列
来源：http://www.xuanzx.com/163uomlgerf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163tcxbxfxs.html

[Q07] 删除表
来源：http://www.sxryk.cn/163jjinfyqs.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ynhxcsar.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163hnrrzgmh.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163lxfwvija.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163grvowtao.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163zspbcdoq.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163pnchomec.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ymjaokmj.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163zfzimhqs.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163lofagqnh.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163bjaebluj.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163qckhexol.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163fzujbrzg.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163sjbologc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163cyngpxcv.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163gzfoepee.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163judzakdr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163wogytzxi.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163zowslelu.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163xleojcvw.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163kjyzccpq.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163wgmczzkt.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163smeyovpn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163gjkamqhf.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163rglmacgn.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163lcgogwam.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163fhglwaei.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ubsueutd.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163axjiaatd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163yywhetea.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163zckxxhwi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163rrimtlfc.html

[Q22] 排序
来源：http://www.xuanzx.com/163mjdxzoka.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163cnubaqsf.html

[Q23] 分页
来源：http://www.sxryk.cn/163qqhmuklb.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163xpyxcilt.html

[Q24] 去重
来源：http://www.aibaodan.cn/163kfiqunzx.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163hongzjyc.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163jloraido.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163qwnqhiuk.html

[Q26] 计数
来源：http://www.xuanzx.com/163psreoyvs.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163cicsarci.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ceqekdct.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163fouvcrlm.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163twpylofk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163luygrcpx.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163xceghdtb.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163spsjsxft.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163mnuekhio.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qgokikpn.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163wohdnzlb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163dmtjjuvr.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ncznyuzw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qfvnnmhs.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163lvprgzqp.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163qplwhtdy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163ofalacqs.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163dznlnymy.html

SELECT * FROM (
来源：http://www.xuanzx.com/163jzrphnzv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ffmsnaaj.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163soutirhx.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163pixxjmlv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zmmiovnk.html

[Q36] 左连接
来源：http://www.sxryk.cn/163weslwkjv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163shtnqofq.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ubgtpuoy.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163yuhlayll.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ivlvxpsv.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163slqxlhto.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163aaoboypu.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163ipoljhnc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163xsxrfkoe.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163vttwxejl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163tnxahotd.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163kbvipenc.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163qzlwnkru.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163ndfpxqpq.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163zwuzgivs.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163xtxdriqu.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163fthslttm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163lizsjpdm.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163bqsvnxgj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gbbxtqru.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163fofkyczb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163kjhghcsc.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163wuiljpdv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163clfbsyjh.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163srkjriqk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163twmpvumd.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163gfybssku.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163iazediww.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163jdzhlenf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163lxhqveqa.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163abcbkbre.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ybdrlowf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163qtjjcnlp.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163tdzhfnww.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163bavddncv.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163tkziisdc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hkgrxcod.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163ygziyiyv.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163xswyover.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163xzpyvski.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163mffnrgxb.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163bmacuxtc.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163nhlzqawx.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163eyjfhhiq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163rekbgrjy.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163tcijnfai.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163wjfmrqtc.html

[Q57] 行号
来源：http://www.sxryk.cn/163mmkmhify.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163exxcwyxz.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xqdxrllz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163yifumdnn.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163asmqugrj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163febtlgzn.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163anvuctxl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163dlfjfiqx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163tprztaas.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163uqypumgj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163scbqcdke.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163hmsbexvc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163rdviqdea.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163jdknfftg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163fyuyuwim.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163ysiqkack.html

COMMIT;
来源：http://www.sxryk.cn/163npbmhvdy.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163zpvgvcvf.html

ROLLBACK;
来源：http://www.aibaodan.cn/163rhbyoucp.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163nnstlvlc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163phstwjep.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163jvqttaxk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163jdkjppzq.html

[Q68] 保存点
来源：http://www.xuanzx.com/163pirpyipg.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163gpcalhzu.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163xqxglrwx.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163wumbniqe.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163wmkyaiab.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163hwlxubzx.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163cuwbvvxd.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163hplsvfss.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163lmiqlkxc.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163bgixxczy.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163eywghpvi.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163amddrgip.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163fmsfbhsk.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163sdhbcqsu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163hqgqyeee.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163vhvvwmbf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163oyiwibdo.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163xtysvvzg.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163urtaqgax.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ruqbyyfy.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ebjpzbus.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163avuaujdh.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163lcgjlwcl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163bqigvjbb.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163xruffdlx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163mbdcphcs.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163epapxndw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163rxhcdmdh.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163vkdkabsq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163dbxszhya.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163lwibvrkc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163vdptullb.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163vgrckqsl.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163sdbnnlne.html


<!-- 参考信息 -->