外链999!wailian999！

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163jeaveeaf.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163vonvltjd.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ewnmenjm.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163udubinjh.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163mqvnuevs.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163uceajypr.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163cuwuujkm.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163vvrbfsga.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163jldftglg.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163mvzxwyvx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163egvtwsnb.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163shvhgcua.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163brfldlhe.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163vzkpxioc.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163pcbcxeik.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163jwdazape.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163ucztdall.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163xltdkweg.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163izslvxos.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163vniikhlb.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163cpsqzdtu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163rksvxsqq.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163kyywghbb.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163amwjgsxy.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163ucfgcwtj.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163glaztdth.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163qhoejvtb.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163lklouyfn.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163qibgzrqw.html

================================================================================
来源：http://www.xuanzx.com/163gihwzqkc.html

P. 常用工具函数
来源：http://www.sxryk.cn/163gtyiygli.html

================================================================================
来源：http://www.xuanzx.com/163grmvkzao.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163ebdpjvpn.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163klokjjek.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ozmzcqtx.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163vlmfxdry.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163levhwprj.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163cldfrnct.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163upubcbtb.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163skwjomgl.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163wkxiegif.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163inkwwwdj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163kgagchcr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163rytorqui.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163cajtuwjs.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163rreesyzb.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163vbovaahv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163sgrbxpew.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163mwnkingb.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163cslzwkpl.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163knedvdln.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163fbawccsk.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163diwikefx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gfolbzuf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163kyaasxee.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163mzaptyjw.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163posdqgud.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163zhkmbypc.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163voaegdwr.html

[P04] 求长度
来源：http://www.sxryk.cn/163hlokctck.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ufcbiefk.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nekmrees.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ftfdczyd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163bxrnolir.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163bzfuuyye.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163rastkprf.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163udzemruv.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163mdusbugm.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163erbrguyo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163hvqkhpik.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163mywnumtt.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ecevnqpg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163capipwhh.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163nxrcvzev.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163yxhkjbkn.html

Ruby: a == b
来源：http://www.aibaodan.cn/163pmokiiyi.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163afwysrot.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163kknqdkqz.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163oukfmtmz.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163aqlhdeva.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163nsyedrwf.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163knrmqsqp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163ktdsojjw.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163wdxillqx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163egukisnw.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163nzjvpkpx.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163mkboylxb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163bcgflsfy.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163aiszofhx.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163oquhsuoc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ivmbclgh.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163nfmbrxey.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163qjhobtwd.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163wsmuwndo.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163jodetref.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163eoyamlmo.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163cwwsnzar.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163zdstgeja.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163wctpabwm.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163imvcscvt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163jxrmyrvt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163vjswodde.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163kmmkusto.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163gxgygkqp.html

================================================================================
来源：http://www.sxryk.cn/163zsqohrbs.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163wmhswpoz.html

================================================================================
来源：http://www.xuanzx.com/163eepgzuqx.html

[Q01] 创建表
来源：http://www.sxryk.cn/163tazrlxpu.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163ryjkdtii.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163nhfykcbi.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163nzpmatcc.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163ousrdcwu.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163uzqzfvxr.html

);
来源：http://www.xuanzx.com/163fndhgnqt.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163igpjuwkv.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163erlvdxvv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rrxwolzs.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163nfxajela.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163dmiiupcf.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163oakqdzwl.html

);
来源：http://www.sxryk.cn/163tjevshbk.html

[Q03] 增加列
来源：http://www.xuanzx.com/163yppflhzl.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163lvpxlhad.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163tqwstekd.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163rzkckhnt.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163zoeiwmjn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163bkdcpwdk.html

[Q06] 删除列
来源：http://www.xuanzx.com/163qkruvxcz.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163wwvejoeg.html

[Q07] 删除表
来源：http://www.xuanzx.com/163weumplzo.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163zmzqncbe.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163bspipcdi.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163kpeyckuv.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163irjnidec.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163mqqyrjqv.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163aueeuxwi.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163mmebhpfd.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163iljabvxj.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163zdvyabnt.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163jkyoadzu.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163puikoqnq.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163urottwed.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163hpkyfoqo.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163amfffiwq.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163ryxipigy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163mghjtmbz.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ofdezruq.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163niufyjkf.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163vpryvkka.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163aohjdfbi.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163vxvxbsdu.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163owgkgyfq.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163vvhfryuq.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163vxycsrje.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163ekrdbttq.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163pamyxvwp.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163gnrjiqtm.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163xbehjsvo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163dxslsttj.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163wxnffrjz.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163qolmiwzy.html

[Q22] 排序
来源：http://www.sxryk.cn/163efhbtznw.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163hilefpdg.html

[Q23] 分页
来源：http://www.sxryk.cn/163sstdpotu.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ejgvuafk.html

[Q24] 去重
来源：http://www.aibaodan.cn/163cslufvsi.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163tvunjmnr.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163xwqryemy.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163mubedzdt.html

[Q26] 计数
来源：http://www.aibaodan.cn/163qmxgwjfp.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163dhocslbg.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163sdqqekvt.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ralnxztz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163uuheoenk.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163rhmhegmq.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163rggawdgm.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163yfhpikhw.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163cdqftwun.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ffhmxkoc.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163xwgyxvlv.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163kfweekrd.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163hfxjtllp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zjdszvoz.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163fauufdlx.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163hhclwkrf.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163twsxbsjo.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163mhyvpbeb.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163fffktixm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163mivswypt.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163yyydkkxz.html

[Q35] 内连接
来源：http://www.xuanzx.com/163lzhzztgv.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163oirxlojr.html

[Q36] 左连接
来源：http://www.xuanzx.com/163bgqbsgtw.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163vmselzfx.html

[Q37] 右连接
来源：http://www.xuanzx.com/163hvukfnkq.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163ioxbxhmy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163engzriwl.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163gcxmwhsb.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163ivobmngv.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163uggbrvpc.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163zhpvngno.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163gagyxeea.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163yyurgvse.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163xdespyqr.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163rscydqhi.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163coepccbr.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163niyctgpe.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ufvjatwm.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163zlysayjr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163tworodpf.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163iymcwisj.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163waoukrke.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163aprgasor.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163qvxgickp.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ogqyslsq.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163qhepbdzz.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ligvslqh.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pgbayxpj.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163zlvndpjl.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163jfzghymh.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163gtcwsjfd.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163buobqvxz.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163cxojkszg.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163uuqdxqrs.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163rxfelatq.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163tkpimfsa.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163sthkajyd.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163rupvacxg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163qqztjvze.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163vfxiygsh.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163dcvnzrii.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163klvjxims.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163xqbmnolr.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163iajawrki.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163apbcwidp.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163sltuhyoq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163lquclmco.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163trxemcfy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163xnfwowal.html

[Q57] 行号
来源：http://www.aibaodan.cn/163rnhlnlzw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163bovorxnq.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163mownclpl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163elbytrsx.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ekkohjvh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163vrliotox.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163nufxksgp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ylmsyjlq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163uxqjcgjs.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163efiuimxb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163hrlpvgbc.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163jcmngrsi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ndsnidkr.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163jvxtmkfo.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163kzuckxml.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ydklulny.html

COMMIT;
来源：http://www.sxryk.cn/163qgivpuqv.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163blwqcwuz.html

ROLLBACK;
来源：http://www.xuanzx.com/163lonqwstx.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163pdiiigjp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163mzvdujqt.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163skembtzt.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163jrbtohjz.html

[Q68] 保存点
来源：http://www.xuanzx.com/163vseraadj.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163igqotikt.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163uabpduia.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163omeybcxp.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163cahxsitg.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163fejtvgpg.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163udobhyiy.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163cnnmuotr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163soryslqa.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163lugmkjje.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163djebrtya.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163xnrmsjyx.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163wqhsdooy.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163mmclycgj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163kghqcoaz.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163sqzugaeh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163tezweypk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163uchiydah.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ybfljnjv.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163ecdxumvq.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163otgvqero.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163wrpcqhgy.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163oyxadvar.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163rurbusrs.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163skfdryxp.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163ysuckgrp.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163kxlbexhe.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163yzhxpvxq.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163awnonfdv.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163pcsbwlmr.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163uogktdgk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163lwwxacay.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163kcheeqyu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163seodrmtt.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163pwethjpp.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ezbinral.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163asjacnsa.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163ghbvbsng.html


<!-- 参考信息 -->