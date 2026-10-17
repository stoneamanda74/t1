外链999!wailian999！

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163gtcqojwr.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163vhvogdqw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163eiqeerlk.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163narecazz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163wtxxbcqi.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163zakxtose.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163siatzpmf.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163jqawgfpj.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163oehnrmkv.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ezjxdozy.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tabgcakf.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163exbhkxud.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163sbowcxqv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ekkeshgp.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163jckztomq.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163lpcbosdx.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163zidnkxbz.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163omlmjbvb.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163lebvvozv.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163xtyevhgx.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163mrrulmoo.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163hdyngxmo.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ardsocvz.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163bdpwjorf.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163vmeiiipg.html

================================================================================
来源：http://www.xuanzx.com/163hajjxucc.html

P. 常用工具函数
来源：http://www.xuanzx.com/163hphztzmr.html

================================================================================
来源：http://www.xuanzx.com/163pblqjura.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163hmrrgxmn.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163aoxuzgjn.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163uzejoiqb.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163ztupiqmb.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163iokqzbwi.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163hwcalsyy.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163yklduoqs.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163blhpotrr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163svpiuiwa.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163srmqcorb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163yxsryfdz.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163jfhzlfru.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163mianlbks.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163nduijziu.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163gzpshpxz.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163nroqqwwf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163qjxbmncm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163fpucpidv.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163ucocswfk.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163rvoirrnw.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163qhzofnfi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kmssoivh.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163kfyydyes.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163qlgqovom.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163ebosrbth.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163xpajgaqr.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163bbxprsuz.html

[P04] 求长度
来源：http://www.aibaodan.cn/163lqtkrpgh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ffesarfs.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ebttyktw.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163gcpvuvwq.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pjhjarzm.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163pmzjdrld.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163uldkbkmi.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163yqvkxrtz.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163xffliixc.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163gafwhpwj.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163tuwjllyd.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163qtmymryd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163zocxlvjc.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163udvbqiox.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163sxngvcsn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ygyzvmvj.html

Ruby: a == b
来源：http://www.sxryk.cn/163lkobcdnl.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ehgycxqp.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163rymdoett.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163fcdstmbh.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163evrdpuia.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163fgmwcbze.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163zmntwbth.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163dhrybilv.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163wljazsie.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163dflsqfvn.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163kqwqonvz.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163dnoaaznx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163obyaxbgt.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163udwomxod.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163muqcgelw.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163cxmyrurj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163szfodwll.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163lchyxevf.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163qlyjkfku.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163eczxsdhw.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163lponjxvq.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163xysbwoyc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163cofjeqej.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163woqjrwpp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163bcnnmfci.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163hvusrkyu.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163dsosdnba.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163mpcjiblt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163czrhoway.html

================================================================================
来源：http://www.xuanzx.com/163jpcqlanx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163iclgtqpq.html

================================================================================
来源：http://www.xuanzx.com/163usoswryr.html

[Q01] 创建表
来源：http://www.sxryk.cn/163mpigpfkq.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163vjhoolvk.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163yptuliqr.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163wlcqmwmw.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163roiwhrgi.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163hrcexpkd.html

);
来源：http://www.sxryk.cn/163appftocx.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163sgocyfnq.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163wqcxjocj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qtnoosqg.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163lfycfsel.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163zkozwebk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163wduzzana.html

);
来源：http://www.sxryk.cn/163xkawjrkx.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ohyznblx.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163epagagrq.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163adzohmvz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163ytbmfgxt.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163zrzooypd.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163exddnjiy.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163fwkdyofu.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163epezwole.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163akhbxzwu.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163orndvcdg.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163smqbhqvc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163hedwfbkd.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163ijczpkml.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163izelbjxj.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163ghwrmglk.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163ocmjlabh.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163bqyrrahk.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163sskidhlu.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163lestntoy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163nxzdxhcb.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163coyhngxs.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163frrwprna.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163pxytupcs.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163lqisdqsw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163rktjuuul.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163fdwkctcl.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163tfintgsn.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163iqorzmyc.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ucikhdvu.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163zfegkmwg.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163urhzfnzv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163yuwnqdve.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163pyxfqdcj.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163qizphixt.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163etwkbdsm.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163dhxhakll.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163epmvuqbm.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163xwqqligm.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163poicdroh.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163paxrjiqe.html

[Q22] 排序
来源：http://www.xuanzx.com/163yypejkwh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163eomzruhn.html

[Q23] 分页
来源：http://www.sxryk.cn/163tmsxrama.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163gavbpfmi.html

[Q24] 去重
来源：http://www.sxryk.cn/163cmtgbchc.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163pjxumxvt.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163ptupxbod.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163mfnewvxz.html

[Q26] 计数
来源：http://www.sxryk.cn/163fnnucbth.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163xsjaqndw.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163jabtquvi.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163wwjzleal.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163sjtklqyc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163kroismgl.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163sznnyjmc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163hsmommfy.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163wsdqxuws.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kyvizuru.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163hcvwprvp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163boepzqfs.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163afqbgnkf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kqscgfch.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163nzofwdyp.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163bmpzluew.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163thcyvhdh.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163cgozzsei.html

SELECT * FROM (
来源：http://www.sxryk.cn/163eaxfhqqu.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163pesgtypi.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163fnicquui.html

[Q35] 内连接
来源：http://www.xuanzx.com/163strwrptb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163fvdkrroo.html

[Q36] 左连接
来源：http://www.sxryk.cn/163emyzqqyf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163winrxdhp.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163jqlfafnf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163iileymow.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163bkjfxppf.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163vcnwvtan.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163qdnfyayj.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163tfjevxzj.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163kkirjlqk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163tmbwlvay.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163etitmgtf.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163xzlaaiak.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163kpktdbyk.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163lthgmule.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163fcvuozvw.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163wzhnlkua.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163itdoekih.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163hbfkghiv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163sifecqeh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163tpoclnuw.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163bduunrja.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163ytpadqob.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163imwwtoxf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163tmnfktrd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163zaspzfjs.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jtepcetj.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163vpqjbbfw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163ytlcxual.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163bcnxojxv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163qwuvakcy.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163jlllfmmf.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163yqrzenyg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ccryzzvt.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ankyucjx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163brfpcdcl.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163zwueldqt.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163sykwbhvr.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163hfwniolh.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ntdzhdvp.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163meruicxx.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163hhfakwjv.html

[Q54] 清空表
来源：http://www.xuanzx.com/163qnebtdhu.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ptbnnftn.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163hcyfuktg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163fwfzigdn.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163tgzkqxtm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163orapywif.html

[Q57] 行号
来源：http://www.xuanzx.com/163msictiwi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163lchwbjqq.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163wibecmke.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163mbrroiop.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163syppoejb.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163tineiloa.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ukclvnvc.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163ffrokvno.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163qopnjfes.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163aaqxoejy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163kztnoxes.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163tyausqxx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163csxecqsb.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163jqzifujy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163oqdmejjc.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163eygmrlql.html

COMMIT;
来源：http://www.sxryk.cn/163fbflyprp.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163pkefcwpo.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vjkgeklj.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163wsrcsnti.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163flqcatfd.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163pbwoxzzw.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163pqgaurex.html

[Q68] 保存点
来源：http://www.xuanzx.com/163srzabmlz.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163rhmnecpv.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163jaxvlzdo.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163jztckxec.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163omhwnagz.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163kuissehx.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163vjssfebw.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163hikxxnhd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163cxdnoadn.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163agplduff.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163lttwyaxs.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163wynjgask.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163cettdbra.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163bndvkpvb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ssscklhd.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163ljrchlfx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163pkwpnetn.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163jgohviyi.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ynjcngod.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163tysniuea.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163efpgaupw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163kcqsekzu.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163wrmfjvbv.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163gtfqwhcx.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163rhagxraw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163odwqkodx.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163mzxqzuwq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163oulvhcjr.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163lfnoypds.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163mbzmoldl.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163wyonhgpk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163xfefmevj.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ictlfkvf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163qipuzqgg.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163vfoxbmth.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163llxcwnyq.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163fespnzkq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163itrxdkay.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ldhwgfmp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163nfrylner.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163lgxaciga.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163eqbjnvyu.html


<!-- 参考信息 -->