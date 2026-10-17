外链999!wailian999！

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163fvzbbwjg.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163bdumzwfx.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163fxnefjme.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163ucjpluyb.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163lpmuvgoh.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163nxcihvtt.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163ujsikjhh.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163dohurwdn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163pwvlgclu.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163udzswddz.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163xkwekwgz.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163leaslrls.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163svzzoqlm.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163luosjlcl.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163mjejsnwp.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163nsjxmmpv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163mbcxyunk.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163chnxpmnm.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163weuzvkag.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163plxzgmei.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163mqqvzgly.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163sacjfgab.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ilnofeba.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163dniyohwr.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163eznnfbux.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163rmupwsxr.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163jlxjbuad.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163sufbvfup.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163kxtwznvn.html

================================================================================
来源：http://www.xuanzx.com/163gypaijbf.html

P. 常用工具函数
来源：http://www.xuanzx.com/163cdaefagc.html

================================================================================
来源：http://www.xuanzx.com/163vlzjgutb.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163bapiapfa.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163ifbwgqme.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163zgielwqw.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ycrpuydb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163aivbswco.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163qwtilmwj.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163rwmfllnw.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163yviczsia.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163knzbnkfs.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163dnevckmj.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163bqoivzzb.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163rzeeotdn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163oqlnexya.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163acvxyfho.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163tsbvhqvu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163wndleras.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163xpaozmzp.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163jxltnsky.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163bzuegugc.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163ajaijaus.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ftuotuvb.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163anporark.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163yiqdxxkz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163jlcpwpmr.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163hrvvmech.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163vjsvcjab.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163xevetkja.html

[P04] 求长度
来源：http://www.aibaodan.cn/163jnymnvxo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163yyoiouvg.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163spierqsp.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rfeznbmd.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163crkllbbe.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163iemtgsqg.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163mcjxuhyj.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163xndrujqn.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163weqdgmgr.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163ychltmix.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163xhshxpnd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163kkedmjdy.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163qgxyibww.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163rpkudfhx.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163miuletin.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163eciirpvl.html

Ruby: a == b
来源：http://www.xuanzx.com/163dzdcbcza.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163vmeedfwb.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163bohjceoo.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163xvajvsos.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163xbixialy.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163igcpumcv.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163zpwuetrx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163aubnniba.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163krpsyztr.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163emhdrbuv.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163awucnxps.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163xzkytqzj.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163gopjlmbr.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163ujtnkbwt.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163vizqqngw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ezhkkfzf.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163mdnlijrr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163svjgxbyc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163sdkoofwr.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163mrfvqnnb.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163oonckykx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163fodvoogl.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163upvfhcqy.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163xpcocppk.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163nyuvgacg.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163uzrycldt.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163htdlukyk.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163pesshdof.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163dqjlcoqd.html

================================================================================
来源：http://www.aibaodan.cn/163ndkozent.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163zgfddtxb.html

================================================================================
来源：http://www.xuanzx.com/163fqihhzuc.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163mkrozrbl.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163omhwgdic.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163unaweiyq.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ibhzsrvp.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163fxeytmoa.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163ujoghvmp.html

);
来源：http://www.xuanzx.com/163nikmvgby.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163clnehmaz.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163gvudwqcc.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163drfcjsnk.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163zwdhubwv.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163ankzwrsn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163rxuzoodf.html

);
来源：http://www.sxryk.cn/163esmpphnc.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163razwjmyt.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163nyrzhqbn.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163qspiyibo.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163vxnqimgu.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163bqoefolc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163hrlgkese.html

[Q06] 删除列
来源：http://www.sxryk.cn/163uojkpdlj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163fyhsllwx.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163pnznnhki.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163ganipieo.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163yljufptv.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ogdrsobl.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163rxfgarbq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163afjtiqwf.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163wpoqdpss.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163iroafqyj.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163fqehsljt.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163fuxxbsxu.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163wzhqmepp.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163ajjviviu.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163ukvthrtn.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163etzwtcei.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163kmownmlu.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163qcqlirzf.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163vqtpvsyl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163pvklakcs.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163cnjkbjho.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163hutbmeea.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163qmjrkhsu.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fysfipul.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163yqypqseu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163iqxwivcb.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163copukqvr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163etvdasly.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163hkxrtlvy.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163pmebbcgh.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163vyuelmri.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163pkjnwvjx.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163zfeydkkt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ugrnihfc.html

[Q22] 排序
来源：http://www.xuanzx.com/163pwzeicfm.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163pbctohyb.html

[Q23] 分页
来源：http://www.sxryk.cn/163ujtoivnz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163uzuubtfx.html

[Q24] 去重
来源：http://www.sxryk.cn/163jccspymm.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163weudscnh.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163zhzudbhi.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163knkhakbz.html

[Q26] 计数
来源：http://www.sxryk.cn/163tbrgnwcs.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163zltwifyo.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163fiktsxto.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163mlhiqytl.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163xwfygdgt.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163uogdkqyv.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163gueslhkc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163rzofxnou.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163rqfhdulu.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163trvvanqp.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163njkdelry.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163iedphjwd.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163zfyigijx.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lvioueuk.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163xeqhgtud.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163crutlnak.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163qenorvql.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163lgqctcyp.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163vmcecpmm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163omeonipf.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163txcyqmmj.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163czpuisnn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163cbnzojfl.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ohhxohwb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163rvqzvwur.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163xoostoxa.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163lxkhfzjk.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163yuapmzyz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163xwfkxskb.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163oybwaghl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163suocrfbl.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163njkachhn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163cfleuxkl.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163rxnukewp.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163oaxlrpkq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163sawleuat.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163utgppqoj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163siljlgvh.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163flndkkfv.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163akzbigxb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ufgbdguo.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163xinqvirs.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163pttgloia.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163bmflruzm.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163fztjlbtf.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163oztkpmjv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163zwdvebso.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163uhdqjqkk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163wzrrsuds.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163mildbnef.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163nhfdnyxd.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163apiqvpwx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163mibnejeo.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163zcioqpjg.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163jpfgiifg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163sqdzgisi.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163dmnsidsn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163kvfbfuof.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163zyaspwhr.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163btaqgbmi.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163ylyamknb.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163fykvsksp.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163rkeisgpt.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163isjxkeph.html

[Q54] 清空表
来源：http://www.sxryk.cn/163ulcxsiwk.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163hhwmgatt.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163cthltxot.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ongiaybl.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163ptuoubhz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163llapwrqw.html

[Q57] 行号
来源：http://www.sxryk.cn/163xlalokvm.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163znyfhzot.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163xxvcjbta.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163acyqcmdm.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163lmndxvwe.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163scgijhbg.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163mfnjglbo.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163uzchelqt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163vkacomcp.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163padqhlba.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163qvdbfgtf.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163ysxmkqxe.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dmhhxpbk.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163aovidprd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163zeguhgdc.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163gfootmix.html

COMMIT;
来源：http://www.sxryk.cn/163wiwaeghw.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163rjpapexs.html

ROLLBACK;
来源：http://www.sxryk.cn/163oqimqcdo.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163shyjcabv.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163dxbfimed.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163wtiwlais.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163kqahwgpp.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163xyqirnpd.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163rckrewbj.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163vdysbwtx.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163oipoyxid.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163jngodtuh.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163osfpqndc.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163gqckkill.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163wygunvnr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163yhlbiqpj.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163kihjjnko.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163bpqpxknq.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163qchvgtvn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163qydvitak.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ohhbiqfe.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ylsrpyga.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163eusbqtqj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163rhesfcjd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ofuzskwk.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163rmyogugj.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163cgdrbqxa.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163fofyvkec.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163kmjuvhup.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163giojsyqc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ikoryyrx.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ahpdubcx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163qxvaqieh.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163xfqbdcij.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163vybsjjni.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163mviddfzi.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163rawogmsj.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ojraabsa.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163pondxsat.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163nodwzyhb.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163wnbikthl.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163rtqapujk.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163olibjdjb.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163vcvzeqap.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163vlredjvq.html


<!-- 参考信息 -->