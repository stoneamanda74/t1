外链999!wailian999！

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ksfegoru.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163kbtbujzk.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163sqsrhosl.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ypqzieua.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163jomunwgr.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163yapmtrby.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163qvwlhnfx.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ognpblpx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163qltwdrub.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163neqaztpf.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163myhfsube.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163lmcipzsw.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163vqyhibvo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163rfjtltyu.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163wydbyuvn.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163agykujno.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163axjagwqd.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ezkqjzpf.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163rbsywvwx.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163tknzhjln.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163qjpvoqiw.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163morjztph.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163gtrhflzg.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163femwzcfi.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163zdxweigv.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163fmsonylu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163cudyxeia.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163lvludpda.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163urrltiax.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163qyumjkrq.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163fovjmyre.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163lgsfdvkp.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ebvzyvlm.html

================================================================================
来源：http://www.aibaodan.cn/163pczokuik.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163lrcijxdg.html

================================================================================
来源：http://www.aibaodan.cn/163pziwskyi.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163mqingdaz.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163krzxchvo.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163jrfagqct.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fgiktoul.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163fbttuepw.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ujwsesid.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163dibrllco.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163kfphkhgw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163ckoekyse.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163wkiwfdln.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163yfqjjxwh.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163mpfauhpt.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163wpdmlawp.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163odksqgyv.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163xyvssobp.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163ultlhwih.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163oehmveow.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163zpeiiyvb.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163luadjnal.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163uxzxmoxl.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163kxfmatme.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gweedxir.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163znlnvsao.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163jvgkpcia.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ipyvkbuq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163agtqpvos.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163pjuwygsh.html

[P04] 求长度
来源：http://www.xuanzx.com/163tpizeqqh.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163rfamahrz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163xyhnqpif.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ebjzcyun.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163rokmjwcm.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163wigfqych.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163dknxdsur.html

Ruby: x.length;  x.size
来源：http://www.xuanzx.com/163xoqmojxg.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163migbtkbg.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163ifdycfxn.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163kwxpezlo.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163qzjiylao.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ayrgddqe.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163tvetfywu.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163srxtzcld.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163supjrkjm.html

Ruby: a == b
来源：http://www.sxryk.cn/163iwodkvlc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163ckrpkejr.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163ypkciqwf.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163hdvkqboc.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163hojtzhrs.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163gpyugxvp.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163padhjvuo.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163jogcixsv.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163upyzwjil.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xicdphaa.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163zznqwizs.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163hfsuloml.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163zyglvnby.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163qskubhst.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163insytpme.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ihdwgsdi.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163jxxizppr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163obzjlvnq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163iinnmvqq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163uzinbvdy.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163fsikigoc.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163uthpkvks.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163iwbpkfem.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163icenkjxu.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163uyrprqfc.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163yvpixmlq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163zaicjawy.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163tettyccn.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163udtodwih.html

================================================================================
来源：http://www.sxryk.cn/163klftoutx.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163yuawmqdi.html

================================================================================
来源：http://www.aibaodan.cn/163qnoedsil.html

[Q01] 创建表
来源：http://www.xuanzx.com/163eewetanh.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163zysmqsgx.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163yyrlfgpl.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163islqhmnf.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163ezdndynq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163mwfgmmez.html

);
来源：http://www.sxryk.cn/163bslrropv.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163dxtmzqmc.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163lwpcthqd.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163tfedzpkh.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163nemszsni.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163utijguqs.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163otgzdamv.html

);
来源：http://www.aibaodan.cn/163cwxtkecy.html

[Q03] 增加列
来源：http://www.sxryk.cn/163zjokygcp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163ykjgufye.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163xouakumw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163aifpbkuj.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163otmuqlfo.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163gsnneslh.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163itdvnnux.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163dtvxqaww.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163wdbftrwt.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163nxyvvmqt.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163auhqewoy.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163wewbfhyv.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163sqnhrcvz.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163jynyifds.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163flwkgwcc.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163uqbjsvvk.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163khiawinh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163rgjeuhyi.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163bvaopgzy.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163zyitunse.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163zuryatji.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163xasptthk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163hnxsmpmh.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163codleusi.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163buhmitvs.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163dnbzhaqt.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163kiyssjhu.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ytmgyjqk.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163xszukydp.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163tyhgptaj.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163iefgkvyd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163lbfrqqwy.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163kfoavhsp.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163xnpxjehs.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163zjciojhc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163odkfxedt.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163pfrxbekp.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163rtuciqny.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163hoksykqt.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163llaqadlu.html

[Q22] 排序
来源：http://www.sxryk.cn/163klfrvyqb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163cdgxdrxw.html

[Q23] 分页
来源：http://www.sxryk.cn/163oiyxtdbd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ajyeikci.html

[Q24] 去重
来源：http://www.sxryk.cn/163gpjmauwx.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163egirdvsk.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163xjetnptn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163tawtzuow.html

[Q26] 计数
来源：http://www.aibaodan.cn/163yrpkixxi.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163eodmthtr.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ajfdtrlc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163ofkxppbt.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163vmlvhznr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163ixgmlrbg.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163anhkdpit.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163xipomzge.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163bqhrvlrb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163rgyhtnte.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163tbopdelk.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ihcbyzpb.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163nmjiknie.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yfcitisa.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163jkzfqsbt.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163wjskrxfa.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163eqpkkjjo.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163uhwzuaqe.html

SELECT * FROM (
来源：http://www.xuanzx.com/163qaokukud.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163tpiayqoh.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163kawipdcb.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163mkbcqood.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zbecyiyy.html

[Q36] 左连接
来源：http://www.sxryk.cn/163maevudfm.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ggdblzcd.html

[Q37] 右连接
来源：http://www.sxryk.cn/163qnapdfsn.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163asbrkolb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163wxkxxkcq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163ccjonnbd.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163vmtnaycc.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163pfyseidh.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163ewsjrmry.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163zrzgyyex.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163brljvjyp.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163smcgsjrf.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163hxazjrsi.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163nstpphok.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163sqtrwbah.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163rsxjipru.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163vxzylkrq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163xcdhlwpz.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163rosyhvxi.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163pyidisxv.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163vsydxqwz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163gbzhyzvm.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163twpyevzk.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ssjcfeob.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163qbmwjpwj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163qkfokojw.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163oniwdrhx.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163zwpvpynu.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163bxejwkfv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ecbogsbi.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163dbsqmnov.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163exsatpjr.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163hciixhnq.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163dkohplfr.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163vlksltlv.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163uoiofbtu.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163noiozshr.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163dnipvghe.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163xawinvsk.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163shxsfojk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163prpkrsgc.html

[Q54] 清空表
来源：http://www.sxryk.cn/163twdxpehr.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163zesksbbi.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163vuvpdldf.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163gdlwwgdn.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mouzlzso.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163rkzrgnxt.html

[Q57] 行号
来源：http://www.aibaodan.cn/163icpnvewd.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163tudwchcj.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163zxygjlmk.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163tpusmwlc.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163vuspxxxv.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163wnnavybx.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163zwisqons.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163vdpswanl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163rtfmxiut.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163naogncgn.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163sjvolszs.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163gzljeqgr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tulrrgdz.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163mxdxlbgn.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163iwuffggt.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163kagrjrvv.html

COMMIT;
来源：http://www.aibaodan.cn/163itadhftr.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163rfnnziuu.html

ROLLBACK;
来源：http://www.sxryk.cn/163ckvzyktm.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163msgsdksq.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163uxsomcgg.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ziraueyf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ihvubxsj.html

[Q68] 保存点
来源：http://www.xuanzx.com/163kdaefngf.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163wbuoqrtb.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163tvjbhbgv.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163lexrfkms.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163yfayqwjk.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163atgkkbyj.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163zlegqwfz.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ehftfvov.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163qetxjbcy.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163nxtdlkjs.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163bjqhokdz.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163cdjtbppg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ocwispmt.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ilsezpqd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163dwwofaeh.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163nxfggllt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163kfmirmic.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163vdzukgso.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163wcxjldxl.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163slmsmkfz.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163yncilswn.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ehcaysua.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163dlejgghx.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163cksdbzgp.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ubjugqan.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163jflrbceb.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163uodbikpi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163igjirgha.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ezdypozb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163wmpabeaq.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163tdztuylo.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163sbiyhsov.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163mujlvkyq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163indbnbmf.html


<!-- 参考信息 -->