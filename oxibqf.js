外链999!wailian999！

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163bsikociy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163vckuacmf.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163yegceura.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163ecsdhzfg.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163uonntpzg.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163eluydghq.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163nqzvrjej.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163jjadlpjd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163esqpljaf.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163svvadico.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163hzugjhyh.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163oexiujpn.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163uajauvkm.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163vdychmkk.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163yojfssbs.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163ljjsrwcs.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163pftdgwag.html

JS:   async function f() { await g(); }
来源：http://www.xuanzx.com/163rngahiho.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163tmwugogr.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163wkfgnxfz.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163qbfxevnq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163uzxyqiyd.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163chbtqxmh.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163zuxdwzrz.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163nwjpyvha.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163ghseazet.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163vpkawqla.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163owkldxqj.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163lmrkvpud.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163hhkndvfz.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163llrsxsrk.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163myybefxn.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163lourqsdp.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163zadxnwsr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163ptaxqkyd.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ylqqntad.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163endrvvdu.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163zaxdiyvh.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163ibeakwnw.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163pyqxmgxy.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ylfpnbca.html

================================================================================
来源：http://www.aibaodan.cn/163gnszrbfc.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163tgqdollq.html

================================================================================
来源：http://www.sxryk.cn/163uwnvhazk.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163hpasdivr.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163aflyhhol.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163anyenlni.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ipiepuyr.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163jprfdjwr.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163pymndoty.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163gfnegamo.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163eybrjkpr.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163aeezuncs.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163oicctrjh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163orhabpze.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163jamajasm.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163ohxfidtc.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163uhrkpqnx.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163wdcmwzgl.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163kondwttf.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163jqqqkfya.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163bvjlphaz.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163aahkykih.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163zawilxfj.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163gbpsvrmr.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163jzmoxwgi.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163phbtpmnr.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163hsrycjzb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163qzmsmduw.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163svfdtydn.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163jhzipfsm.html

[P04] 求长度
来源：http://www.xuanzx.com/163kgmwnvup.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163corqxjpt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163akoqkejl.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163dmrztcul.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163wkwstbwl.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163atzmrnxc.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163osnyinfp.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163rberiruq.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163ojtsslpn.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163qbqohpso.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163mvkecdgt.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163wyqyrejg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163acivsdrs.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163gieusopl.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163hrrgrxkq.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163qrvjthok.html

Ruby: a == b
来源：http://www.xuanzx.com/163oqtlpmbz.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163ldfkdktj.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163ljjshakk.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163mwueoktj.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163xjiegqxx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163pqrpywjv.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163ytrxovtt.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163zfjdpjdk.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ihposkvx.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163eyalfwpa.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163vrxfxupp.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163zlfnlbat.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163knzmrlay.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163jarheipf.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163kbjxjarm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163snnoprfp.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163miqgcxtv.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163fhycehyo.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163ciczeqld.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163wbxlycfl.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163rkypjfzu.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ubqgoqgi.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.sxryk.cn/163shpbakcn.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163sycyrtcw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.sxryk.cn/163hzexaomn.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163qynfrczc.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163utvalpyz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163rkhzbgkt.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163xfpkkoiy.html

================================================================================
来源：http://www.xuanzx.com/163jtaeniqo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163qujioavt.html

================================================================================
来源：http://www.aibaodan.cn/163wumhdblt.html

[Q01] 创建表
来源：http://www.sxryk.cn/163cslrmbmt.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163tmgjrjmz.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163sgcrpfsx.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163tyrxaahk.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163krvnrjdx.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163jtjswztx.html

);
来源：http://www.xuanzx.com/163zipehevo.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163trxdpvnt.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163newljzcj.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163afvjajur.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163pgboaozb.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163tloujlqd.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163vllybgrr.html

);
来源：http://www.xuanzx.com/163wpcylwua.html

[Q03] 增加列
来源：http://www.xuanzx.com/163sofcqqlp.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163kxrqvjvy.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163jzfsfckw.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163byokykze.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163tdthxcgn.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.aibaodan.cn/163ptgshshv.html

[Q06] 删除列
来源：http://www.xuanzx.com/163kyorfdjj.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163gakecimj.html

[Q07] 删除表
来源：http://www.xuanzx.com/163bndqsapr.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163qdnfukbq.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163njrwmews.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163epicjgwb.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163euhqupvl.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163ftqewegr.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163jhfqwuug.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163cdafrblc.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163tfmjzlyi.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163hsapjbno.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163tvsyuxzl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163jdgyxuhn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163cjwlscci.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163bblwexlm.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163uwidiwhu.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163xmuussux.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163atolftnl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163zudyecih.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163sffjsnuy.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163kcziuudd.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163ohbxqfcn.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163naxsigxu.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163hvjtnmdg.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163kpdojilj.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163jahkvlyk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163wmxftwry.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163zgxnamez.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163jprldrdw.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163umrbwhyq.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163krchsstk.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163qrdvwzpr.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163mfugyebw.html

[Q22] 排序
来源：http://www.aibaodan.cn/163jesgxzna.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163zvtfakrk.html

[Q23] 分页
来源：http://www.aibaodan.cn/163emlaanxh.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163egdymiin.html

[Q24] 去重
来源：http://www.xuanzx.com/163owbdgpko.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163urvkwnvz.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163nwcbnypo.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163jgomdihh.html

[Q26] 计数
来源：http://www.sxryk.cn/163vlgwrhlt.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163ydirncyy.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163ypidczjl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163gtuzigky.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163lmpxsqqn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163xckexibb.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163bxdzhpix.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ndtsujcw.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163ldzbyxqs.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163voqzjexe.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163dqzawvvp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163gzpfmaay.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163xadklpna.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163mtbsiwvl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163srpuypxa.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ldkmlvtr.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163ipentesz.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jusvqomw.html

SELECT * FROM (
来源：http://www.xuanzx.com/163fzoygnjr.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163somcqzmg.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163rvejszme.html

[Q35] 内连接
来源：http://www.xuanzx.com/163vogsxcwa.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163medwfbyu.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mnyqreev.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ylmjrelh.html

[Q37] 右连接
来源：http://www.xuanzx.com/163mqmwgclj.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163cwikvbbu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163daluisge.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163zbmjbygm.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163asmvpyje.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163irqucqof.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ntmlszue.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163npzprnhd.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163yxiqbpqt.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163mjmbfbpd.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163xxjddlfr.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163xuyfperw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163wedwseva.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163lagrroyk.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163ygmqskxr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xfigtawk.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163jxxbcvkh.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163emspusad.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163sgzirltd.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163kxgkbisz.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163fgzccgof.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163bpxpccub.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163spbtrfhs.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163jywrdxln.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163xljeltjq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163pictezoe.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163ejydvvvx.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163xdhonrrk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163wiwigbnt.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163oiftyxlx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163dsxumawm.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163rwadkzuc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163fabbgymm.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163izhkwhtm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163dchtiflf.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ebjfonhh.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163pannwlvr.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163bwibvzwy.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163mvuveeyk.html

[Q54] 清空表
来源：http://www.sxryk.cn/163wamgkgko.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163eebtetuy.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163zpakfgoq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163sbuuoaqw.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163htkjsuro.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163ohuzgsil.html

[Q57] 行号
来源：http://www.aibaodan.cn/163vkczdyjw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163khlfusgp.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163pkvhrilf.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163jilcojxd.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163tcymojvu.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163uaakcsyc.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163tjdvawpy.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163vzqftvwv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163knhkmzmp.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163vjaqkvfj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163fizydovp.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ngeolonf.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qnqtpgqc.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163etvwspbe.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163bieevlms.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163whhqlnbf.html

COMMIT;
来源：http://www.sxryk.cn/163pweqpfak.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163gsmhhdlc.html

ROLLBACK;
来源：http://www.xuanzx.com/163eesudqxx.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163bxdsziyz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163vgvhoqut.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ipcrbfwk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ywjmwchk.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163nabzqrtd.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163uquwlmvt.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163gvotalwd.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163gachxjwi.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163hzsfeart.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163xdpagmev.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163tazbaibf.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163nxqvsmwq.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163beuuspmm.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163lieqmwoa.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163speaghmv.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163xbzskpjh.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163jqcqpcvq.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163szbdjntl.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163dexehwjm.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163obpncdtt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163fnhvffnw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163sntdksvv.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163teicremh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163ssgjgpbe.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163txcqphkp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163vxbwidfp.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163gpbhstgf.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163fhafipan.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163wapnlkzy.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ynwcuyjh.html


<!-- 参考信息 -->