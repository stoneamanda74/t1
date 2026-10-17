外链999!wailian999！

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163evebfgwz.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163kstkaxpt.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163fhyzuyex.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163mozmujhg.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163xfildzxo.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163wvpedjfc.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ynfvqdbh.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163hyyggzvi.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163syovwsfw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163ithwauyb.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163lqlumxse.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163daevhzhq.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163pfzidruu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163ayjtlxca.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163xspnsoxr.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163hmdqfsle.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163nczfzkpm.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163udzgiqoa.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163pqpazvxx.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163aregerfa.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163rvptifqa.html

================================================================================
来源：http://www.aibaodan.cn/163zdkefczw.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163wcwpmzpt.html

================================================================================
来源：http://www.xuanzx.com/163gkvtntbo.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163bfxbqwsj.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163pshxrgvm.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163orjuovus.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163gtodbdvx.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163tlgfxwyi.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163terdgbza.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163fifzlouw.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163cgbklich.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163rbxcjncn.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163zxdowdmo.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163gsmvdkda.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163bzuynseg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163iwdpwpfs.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163bfzepjmi.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163xsalhjmu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163nemtsfaf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163zzahiqpo.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163aoltfgas.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163oyczihji.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163eopjhjzn.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163zsbwnblu.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163fuqprdtw.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163lcxwegez.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163gjqiyrxf.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163fqhfkgvp.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163odgsmjqi.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163oiempaxq.html

[P04] 求长度
来源：http://www.sxryk.cn/163gizqnicd.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163tdxuilrc.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163emfaxhqr.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ncwctrpp.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163vzsgblvw.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163qpuovagy.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163itxicnvk.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163vwbymgey.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163sqmvfouu.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163kwbnitjo.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ivnmtexz.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163yuznquho.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163cmhbgsay.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163tkenmyly.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163bkgjplif.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163qohwmhci.html

Ruby: a == b
来源：http://www.sxryk.cn/163rqcdbsbp.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ydybqyyh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163tpwtpqek.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163xokwqzxy.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ogtsygvd.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163fjaywivz.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163dpoipwim.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.aibaodan.cn/163csycuwme.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163wiiedbur.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163xjazlvjd.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163vfcpmywl.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163lfvmmsll.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163xyazmtyl.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163mgfhadws.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163asubtagq.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163rdpdjcvs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163pmgdksus.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163yyqsnobv.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163ihfjkfey.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163lyxnvzyx.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163pupkmrxx.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.aibaodan.cn/163ekkvnuvr.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163zvqhslyx.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163eaxgisaq.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163cjdnoaim.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163ixktyqdb.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163nrymsuef.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163tryvgoon.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163hcnaavql.html

================================================================================
来源：http://www.aibaodan.cn/163mrfckkbw.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163mlqovabo.html

================================================================================
来源：http://www.aibaodan.cn/163rbkycmdr.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ulhksdsc.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163fjlrjtcc.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163vdfdency.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163fwhxqjkm.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163zhvarbhh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163ltkhoqdy.html

);
来源：http://www.sxryk.cn/163sqditcre.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vobwjzhn.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163lrldoluj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163dobmswug.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163qxcwkfeq.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163soloreer.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163krbdsrio.html

);
来源：http://www.xuanzx.com/163uegfunrb.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163rbkrkrcs.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163qdopznre.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163qgcqpgle.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163qwualanf.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163popruywc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163uxtrasxs.html

[Q06] 删除列
来源：http://www.sxryk.cn/163vjmqjqgt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163lekprtyl.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163aejbddif.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163rdajnhqg.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163pdwzdbol.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163uwgeqiha.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163jobyacya.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163jplqyegt.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163bdynqafr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163sdojkddm.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163fnkvwqyh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163azueknes.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163okvbmagl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163vjvldfrc.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163rsoirdii.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163cbtxitpw.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163oszilfks.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163fyhpnwnq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163nipetgtr.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163omllafpq.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163oiwalwtn.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163qdixyirt.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xlnflpst.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163xwrimfyq.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ztvrvlfb.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163urfeieuu.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163hupuidji.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163egzmxtiu.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163iggzncpx.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163szlltayw.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ihiydvdd.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163rskihjhu.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163xzbsntad.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163opgymyss.html

[Q22] 排序
来源：http://www.sxryk.cn/163miuygegb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163wkblgfio.html

[Q23] 分页
来源：http://www.sxryk.cn/163zetxthno.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163umonsqjq.html

[Q24] 去重
来源：http://www.xuanzx.com/163xyvuvnoi.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163yheocawz.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163duceghlm.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163wyqvzzam.html

[Q26] 计数
来源：http://www.aibaodan.cn/163shtuypuj.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163yolshruy.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163sbeiatrk.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163vdtsgdth.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163tgedmvrr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163zlhxtqjr.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163ajfxoqwt.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163jthfslha.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163axfwyudi.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163xeghbjdy.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163inxlqoeh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163wjyipyag.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163ikvcwhtq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xnxjfnsf.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163akmvbbzc.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163zuiyjmli.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163hfqynhwt.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163lwwrngco.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163trninnbi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ucmbctor.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163lmxzpcuv.html

[Q35] 内连接
来源：http://www.sxryk.cn/163wgpcugwu.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163qnrhqqwz.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163xvclmpno.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163iyflcers.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163eefrhhxm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163hslduaqp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163tgaaeefb.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163tpooenrf.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163skgjjpyz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163zidvfxbs.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163pqvhsycf.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163tjsizysi.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163nerhmpjw.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163zhwnkzxj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163omtspsph.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163hfwpxawm.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163glxrzahq.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163xnprwfit.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163kvrlidim.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163urwevfky.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163adxzegdx.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ddhuarhq.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163idcmncie.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163dasyexko.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ufytjxdd.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xzizeyvg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163nrsexhpq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163culafbay.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163zsnrjnoz.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163jvevopmb.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163hbanwgdk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163zibpqazq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163hsyzfubf.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163bklhiodg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163qypbyuak.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163dqufnngo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ntqxszeb.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163inydljmk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163nuofxozh.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163zwzelaxv.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163shxdrxol.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163wbestlkg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163jpoeirvj.html

[Q54] 清空表
来源：http://www.sxryk.cn/163onyjsmnj.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ilzktzev.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163xpgmfhjl.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163grmianct.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163fwcponww.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163wzrizvjy.html

[Q57] 行号
来源：http://www.sxryk.cn/163syvuxgfc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163dwfilyzl.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ttzltijo.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163nzjjsbyr.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163pauclbfl.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163tqandkzk.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163gqbtubod.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163tlggvliy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163neuvwkps.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163bnpnwqgm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163auoffcjl.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163hituluwg.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163brnzpxrm.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163fbmnqfaj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163cjxhvtxr.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163febpgquv.html

COMMIT;
来源：http://www.aibaodan.cn/163flxdxycj.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163pzfoqlbj.html

ROLLBACK;
来源：http://www.sxryk.cn/163cjuqcjkx.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163eprmyqfz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163nbhzuras.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163yuoyqkdu.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ysmcpwpm.html

[Q68] 保存点
来源：http://www.sxryk.cn/163xmfehpaq.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163pifrhzzm.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163jholflpo.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163wxgscdkw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163qbdaozyt.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ykgdrdfx.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163obgugapn.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163zocbikcv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163kyfdsyme.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163rafekmpf.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163udomavjj.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163vmsbtytp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163hnrszavu.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163tjrifzvd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163fmvtdrkg.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163noslitrf.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163crbceahq.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163uvkommhu.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163bchcjrxc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163zyiwfsmn.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163jpmckbnd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ssjbmswt.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163drhuazqj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163syclsoll.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163ocuxghbd.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163nugqjjug.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163yadtaywv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163enxebjty.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163ukqsopmb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ocnzdjpr.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163zvsxonrw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163fyjcrtwz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163jqzzfrql.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163ucfivjzg.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163ficjndqs.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163ehgxgnqm.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163zafdqndb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163nlpxhaxp.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163atwkkrqp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163wlcmnyod.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163itjwbuef.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163hzrlvnrc.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163moqngtpj.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163nefrtwnp.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163bbvbgvdi.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163hrdkboks.html


<!-- 参考信息 -->