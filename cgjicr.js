外链999!wailian999！

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163menwsjpt.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163fnaaxylf.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163dzswfuqp.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ohufjiws.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163iqcudytn.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163cdlnqixj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163jblnxxlg.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163toiybqbo.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163qmyrgsya.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163lihfgmtl.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163rvlcpmna.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163fjsjslzd.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163masqsgsa.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163stosplhf.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ekztnuic.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163wlzjdyjr.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163jvdjghwh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163hvgwgchw.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163slupdfyh.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163ramklbzv.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163wjgfdypg.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163pircvbod.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163vpssfkbm.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163zgqiqygm.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163axcalacp.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163cqqjktud.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163jvsdtorx.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163naxdjmuj.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163zldxvoyz.html

================================================================================
来源：http://www.aibaodan.cn/163cvdsziog.html

P. 常用工具函数
来源：http://www.sxryk.cn/163mxfsrjtt.html

================================================================================
来源：http://www.xuanzx.com/163jnloxbhc.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163posxoqwz.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163fuleubgx.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163lamcvgzn.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163zoudvkao.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ljfnyzkq.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163ejfisdmg.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163ywpdpixq.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163aombsffm.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163efvrixoc.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163uxzbfyii.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163yaqwcmxe.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163thkjkbuy.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163damzylnf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163lhydumhr.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163erizyuva.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163aulsdnyg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163aptghwnd.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163knivbuuk.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163wwrpxoki.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163mzbqxixv.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163xtqdgzrt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gukgkfrs.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163foegtgyo.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163grzmjdvv.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163sxfftodz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163zjcetjsa.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163rmwgshkz.html

[P04] 求长度
来源：http://www.xuanzx.com/163lzfdyyip.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163gpzxrjvz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rvutgjwa.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kqdxodnf.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163bdoiqzin.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163kotbygub.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163zvwrhprg.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163wckgceei.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163qdvjrxkj.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163qzeidrva.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163oalogbho.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163xqfdjmrn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163fzbytncp.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163hcisffqf.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163fwgpeeph.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ewzyjsio.html

Ruby: a == b
来源：http://www.xuanzx.com/163hmarspse.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163szlfdtcj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163nprujnlf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163srdhjvtz.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163tfcybotq.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163qqsctgvu.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163oqrstwnx.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163finycuzs.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163edsufbji.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163ddkalngl.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163odvfbccx.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163kqylulil.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163tgranvsq.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163wwuvdtaq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163imdgtvqc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163mvsncqwv.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163qiumofku.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163giwynslh.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ojlqfgxf.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163fjhhjiqz.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163viwsvnxe.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163cxufofji.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163jnabcpec.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163qvgxaqxu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163dqsuqtuf.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163gnsfenzs.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163qqxyxeem.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163monvnaro.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163banjwims.html

================================================================================
来源：http://www.aibaodan.cn/163ewbdkztq.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163jnkbpsxi.html

================================================================================
来源：http://www.sxryk.cn/163faglkwba.html

[Q01] 创建表
来源：http://www.xuanzx.com/163stbsblfb.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163saqhbmtq.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163zuyempdh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163canefisf.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163qbxzdukx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163vbiyvjfr.html

);
来源：http://www.xuanzx.com/163qqrelfvg.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163mywgsoey.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163ghqhfhoh.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163vzwbxsrt.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163yqvaogky.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163msbgbyzi.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163kpujdsxe.html

);
来源：http://www.sxryk.cn/163pxldtynd.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163drpoikdi.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163qzcudtwo.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163jdnwgigl.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ehgfxyow.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163ftjxltiq.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163vhofhzrb.html

[Q06] 删除列
来源：http://www.sxryk.cn/163xpvmzmvs.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163bedyjyej.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163thxxptkj.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163raqhovza.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163jbpvwjbu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163blkdmide.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163vbriqqdt.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163opwcpyvn.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163sdnodmve.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163twqksptu.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163rjtoykbw.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163kkvfspfk.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163xafswaxw.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163jqxafezc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163teunzomv.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163zpgevfnx.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163byzkavkc.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163etujqhrz.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163pdeleqdh.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163rqehbtjf.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163srzehkxv.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163kztowcpc.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163zbnzaybv.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fxcrzfbx.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163opwsfyul.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163puduwufi.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163fyyzvzdb.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163ckxdfezv.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163kptasppt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163vwuroalv.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163yjyvoxry.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163nfavlfpl.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163azedgoib.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163vmlotdgh.html

[Q22] 排序
来源：http://www.xuanzx.com/163ziaufnqj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ynprhryc.html

[Q23] 分页
来源：http://www.aibaodan.cn/163yckmdtmz.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163lvckqbtw.html

[Q24] 去重
来源：http://www.sxryk.cn/163dkhrfupm.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163gfluhuxn.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163vbcsmvxe.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163bxqyzkpr.html

[Q26] 计数
来源：http://www.xuanzx.com/163yzaeiign.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163kcbzbynp.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163kluuywuh.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ccvoinmx.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163yweqgdvz.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163mknzdatk.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163jieabqjk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163snflbjqz.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163frnamikv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163oyhvcigb.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163hsfzatxo.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163nsthlfxd.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163lusqzrvm.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163cbhemeam.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163eymoawdn.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163sgfoktpd.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ejqldzul.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163caoqbfri.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163recqqccz.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163zkmsrvxu.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163djkexjhi.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ydqamnyr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163myhbwxtq.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163rcscdoxf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163twncvmzu.html

[Q37] 右连接
来源：http://www.xuanzx.com/163yvbtgvll.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163yipmflmi.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163rqbknuiz.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163pvooocau.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163lahbwzda.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163vdgtauef.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ayorrcpj.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163rogtzgxv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163srxqqtti.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163afhvjzqq.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163lfemxqmf.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163yvfuxfis.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163fcsmjpxy.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163ncubequt.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163arqheblr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163lkobphqe.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163yzqtsvrm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163ngoobqtm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163ipgznnpn.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163zgeeehfq.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163uhtcdilr.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163lejpjohq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163qucvwezn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163spywlbmy.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163xqftswku.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163laauaaly.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ujwexdew.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163kxmyniho.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163pralkzup.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163peoufvug.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163evpllusb.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163rzikrmie.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163mhjphfig.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163vlxzgrjv.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163onbxjpeq.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163lzbaydzk.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163qgyzqnfa.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163sjfwvqda.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163sodvhmrr.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163jdqsqsip.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163qndgzqpg.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163bqnbbsbe.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163xtknygrg.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163npsdfkkr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163fbykpdnz.html

[Q57] 行号
来源：http://www.aibaodan.cn/163afwmzayz.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163uzkglyel.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163lncxdvqs.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163evqsxdrw.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163suqkrkem.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163irzhnten.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163mksynhwy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163phemkyga.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163tztcctzu.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163cpuynney.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163sjvujlfa.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163drphibgs.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163adebuude.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163pdhpfcao.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163ongdfpao.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163chgjvqjw.html

COMMIT;
来源：http://www.aibaodan.cn/163dotghkvu.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163hnizdpqy.html

ROLLBACK;
来源：http://www.aibaodan.cn/163aukajitf.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163wrcezxjh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163twukcgto.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163pgqozlgh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163hzaugppq.html

[Q68] 保存点
来源：http://www.sxryk.cn/163uwtdgkkc.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163frwpurzd.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163pgfehtsx.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163busywjil.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163zjxsbjqp.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ociquoei.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163dmsdeyed.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163vnorboej.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163mpckxytn.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163mlzfccno.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163zoaiogbg.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163sbymsmlg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163zccaoymh.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ksxmicvu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163jjvbgfcr.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163dbmuppdq.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163swrtlhmy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163dkskgxbr.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163ttyqahrq.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163hsypxctw.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163dezcquud.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163oziqhmou.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163oizddkha.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163jjcjhoez.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ojlyqmod.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163lcltfeul.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163aaudnotg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163yllrmfdo.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163bhltrmye.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163iyuntfcg.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163ezwozkpj.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163rcdpqpsn.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163bgjdbasj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163grgdlpll.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163lhrubkxb.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163pnahgbyr.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163jidxjvcb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163wamcwcyn.html


<!-- 参考信息 -->