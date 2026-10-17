外链999!wailian999！

[O02] 使用线程池
来源：http://www.sxryk.cn/163sbhignou.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163fwztvvse.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163bwvsqmeg.html

JS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163irkreikn.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jbmitcuy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163jwsokncl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163pjiwklyn.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163kyocqkvs.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163zbwpvcqh.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rmcjprio.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163gntbezfp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163vuydlrkf.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163trmouwfa.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163clvzwnpl.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163sonodzrq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163qecyrhcc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163gsjdwkyq.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163yahwhewr.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163umilsmku.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163chutagso.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163cifecrqp.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163lwsfqadb.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163zklmbwlz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163fbmkjryn.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163mrzmtxfr.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163gditqdtv.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163fazxklvd.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163cpoccfaw.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163qgrrulzw.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163eoegmiov.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163iydiywxv.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163cpuygxds.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163rjeygvab.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163mtfwyubn.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163xbiemsyf.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163otparcxa.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163vtveguwj.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163odrvxccn.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163gtfnynwi.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163jzszwevj.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vbsnpzze.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ltznufny.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163dnhitvgs.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163rprjaitv.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163tnwxmpsz.html

================================================================================
来源：http://www.xuanzx.com/163sjrvbmjl.html

P. 常用工具函数
来源：http://www.xuanzx.com/163htyhdfcf.html

================================================================================
来源：http://www.sxryk.cn/163yxljbtzn.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163fyqphxol.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163sivsrdba.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163ugvzochq.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163upmdexvk.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163prayfkeu.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163eviwfadn.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ccxkjgap.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163hehzgiaj.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163lyoianrw.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ezjyxkyt.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163esiglykn.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163dfgwzkwc.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163bpktksqy.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163ekmmrxuh.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ulkqyhxj.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163cgurtupg.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.xuanzx.com/163abmoyrtk.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163icoetuxx.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163cxgntezo.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163lmfqqewe.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163szxkoale.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163srhhuvsu.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163rehvofap.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163jmsjwvpd.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163avjtbbhv.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163fviyauxd.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163usaifrzs.html

[P04] 求长度
来源：http://www.aibaodan.cn/163esckludt.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163fcmwplqj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163pfvglciq.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163tqhayusj.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163kzgelbfs.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163oklmzlbr.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163ktmhfxsf.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163rrqfxbxb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163kmoaprvj.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163rdvtvlzk.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163zzgmfhfe.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163zffigfkc.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ztwgamdg.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163oewslmup.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163ppmmokou.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163foexequm.html

Ruby: a == b
来源：http://www.xuanzx.com/163aprjkksm.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163hvavaqpq.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163gioxjbyv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163mwnurpgf.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ujrblspf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163mecfauje.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163wsbxrlxs.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163yuocngir.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ypijeake.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163uippqkdu.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163yneovilg.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163yuigfbvm.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163kxqieirb.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163mgcsrynf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163jefsgeno.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163wqsuynzz.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163fzckqyxa.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163sqnbygck.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163afxiujtk.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163ragkqkdg.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163fynhrvpj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163xjnkodbc.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163mdgpzvps.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163fyvfjylt.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163icximdtt.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163kzwxcejv.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163eudspcbc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163hpafkalg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163jfnvzjvm.html

================================================================================
来源：http://www.sxryk.cn/163bszrjjnr.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163vxfvtqdq.html

================================================================================
来源：http://www.sxryk.cn/163maodiblz.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163nllvptcd.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163tfvbmfel.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163aymyancy.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163kxbfcybe.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163jgfidgpv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163pymavmlu.html

);
来源：http://www.aibaodan.cn/163wkcaopne.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vflicdzq.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163tvnmcjml.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qvkdumwx.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163iienhgzg.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163wbdvygkk.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163mejanzlb.html

);
来源：http://www.xuanzx.com/163rzzhvygy.html

[Q03] 增加列
来源：http://www.sxryk.cn/163uelczaqe.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163xmordnkj.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163rnwbqqvb.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163oxsaynwr.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163gcztvnby.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163caogivtr.html

[Q06] 删除列
来源：http://www.xuanzx.com/163bmeejwit.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163yauatlss.html

[Q07] 删除表
来源：http://www.xuanzx.com/163snrcejqk.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163qxtjrdlg.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163jklmcamq.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163penndbbk.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163aunsgdly.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163avfmukna.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163fycfvikn.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163jblnsbrb.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163lrlsvkgs.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163skmxagll.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163zozejopr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163dgcikagd.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163ndtdllyv.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163zxhbgbrt.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163gnqacbfj.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163gcljxnem.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163vzuoyiqs.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163caxjhfvi.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163opybozxr.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163mkwkemou.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163yijgredu.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163fxrpbxcg.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ormkrexa.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163ejjywyqa.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163mdobqjuh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163kemlnkwz.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163jvitdsqf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163blimhktf.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163tindogfw.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163wzsvaxwv.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163zzrqwgxu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163hjpogsjw.html

[Q22] 排序
来源：http://www.aibaodan.cn/163jxtihlwh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163poidvgaz.html

[Q23] 分页
来源：http://www.xuanzx.com/163shlbaoeg.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163flchrknj.html

[Q24] 去重
来源：http://www.sxryk.cn/163jhuwkstj.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163hkywbfna.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163mkayxkta.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163ollfrpak.html

[Q26] 计数
来源：http://www.sxryk.cn/163vvptlkrw.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163uznntaio.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ayoonujv.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163yblcbkeh.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163mzdgwtjg.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163pwndpbbv.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163gzobbwcd.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163qmvffmoj.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163vcluvgkw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ecbanjer.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163iinyoqnh.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163ctstsqbr.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163mjfiplis.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tnwvamyx.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163trbqqteq.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163tdfqvwfw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163nlyrjgce.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163duqauvql.html

SELECT * FROM (
来源：http://www.sxryk.cn/163easzysco.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163kmphycld.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163xihcgsrh.html

[Q35] 内连接
来源：http://www.xuanzx.com/163hcfoaydm.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163owhlighr.html

[Q36] 左连接
来源：http://www.sxryk.cn/163jhxjktsb.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163nqvvweuw.html

[Q37] 右连接
来源：http://www.xuanzx.com/163abljjlwv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163ywvujimn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163bfdxtnrk.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163moihygbt.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ddnpbpex.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163mcqeuhmd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163kyzubfrt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163zujomeck.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163cthlgzju.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163otdvtcex.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163qvxoykce.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163labuzugd.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163klqnrnzr.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163umksvzud.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163sugmbksm.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163jjffxowf.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163rvoumlsh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163lnubdspu.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163tzjfxxlk.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163lbluhhha.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163dayhvjav.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163nixswbfd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163yrofpzjb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ldqxflmk.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163xtdwadlj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163rfcgfwsc.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163akgsewki.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163enbmiibx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163feixduhh.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163tfclrttd.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163aeuulczt.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163absmmzzx.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ajevimqt.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163likmyqdz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163mpxsghcd.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163jpdnudzv.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163emagkica.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163pnqxrtlw.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163mdalduws.html

[Q54] 清空表
来源：http://www.xuanzx.com/163flvslsff.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163vscncagn.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163lwmdhhhn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163hvdjvubi.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mqolwfco.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163qtlyxxuy.html

[Q57] 行号
来源：http://www.xuanzx.com/163qernkeip.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163qkeujplr.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163haduuypx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163sdmcvfzf.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163clfyvdtf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163xnuiyvtt.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163bwespiof.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163onjusaqu.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163xhbxkfxr.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163bkudvtgr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163jcnxgmot.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163bpafeaik.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zktnmsiu.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163iqekwzys.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163qhyyyjtq.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163mbmvcqwz.html

COMMIT;
来源：http://www.aibaodan.cn/163otalcuws.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163bodwcuok.html

ROLLBACK;
来源：http://www.sxryk.cn/163tvibomcb.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163etfnexpm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163pzrnlqac.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163cmbozqzc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163sfbqseyk.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163csxmjrfa.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163xadnsrur.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163hkyganrx.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163uodxbaem.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163iqcpzsya.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163yrdolczv.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163kihczwjz.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163wuwddakq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163tggmbsyl.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163vfsjtalr.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163yuzusdhq.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xwjsqldw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163hqiejafq.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163teujbily.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163sjemeeeu.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163rbzlcsdx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163wulxokoy.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163smnfuylw.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163febkbosy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163mkokbuwf.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163boajkpgb.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163nsgsyhhy.html


<!-- 参考信息 -->