外链999!wailian999！

[O02] 使用线程池
来源：http://www.xuanzx.com/163bsbrcgod.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163nmievzqq.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163umdcxvrj.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163clrfcdjs.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163erxgtrvw.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163kehingfl.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163mqvaqpom.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163zgcrlbcc.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163giasphti.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rfevfbye.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163vomebazp.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163onoqsetr.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163kqnydkmm.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163oganpokl.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163aqchziwp.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163puwegvqc.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163ihbjvprt.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ujrmpqbt.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163mpfqdtwq.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163gchricer.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jrgemist.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163abhwepgj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163htjvaqih.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163hjmxcsnf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163mmouetwh.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163puxtxmyo.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163bcyrswcd.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163wsxdmlli.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163jtkdjbjj.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163txxjxyzd.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163hhoueluo.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163fbqogsml.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163biawnxue.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163gxllxlhy.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163fyxrlfzs.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163cblzxnkg.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163qhgfbfmq.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163ffkcwtai.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163fadislhz.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163bffjlmky.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163qgyxcwkg.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163yjwkztfw.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163qlbhhwwe.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163zmlnwbqp.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163jihxglbc.html

================================================================================
来源：http://www.aibaodan.cn/163mpefbvgk.html

P. 常用工具函数
来源：http://www.aibaodan.cn/163bxlkoeyq.html

================================================================================
来源：http://www.sxryk.cn/163destvuun.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163fgigbvol.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163eipfpqpc.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163iydszcaf.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163hfaosbma.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163chpkogxi.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163rmomqpax.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163vlfocvzj.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163rmyfdybs.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163eqjeencm.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163wasbsucl.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163xuchoekr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163uvkjzsew.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163mxsvgzam.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163rjnrcplw.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163gkdexazb.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163mfeevatl.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163gwnwtbxr.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163uleqvxbw.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163wgjnzwzp.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163gxhvlyzs.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163dszowljx.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163ajbglfzz.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163wqftcomm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163bvdrgcsn.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163oohforlf.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163gruoahcm.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163vmpdychy.html

[P04] 求长度
来源：http://www.xuanzx.com/163kkefiknm.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ydywsspt.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qqrrdecd.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mbkehmck.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ujmeypbg.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163wnqrvnrn.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163lxazjonh.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163imfgppox.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163xtkzasnc.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163brmpmlhg.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163furdsnhh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163oeteorij.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163ebikhctt.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163zpfhkdww.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163yakvujfy.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163ulytwuxq.html

Ruby: a == b
来源：http://www.aibaodan.cn/163ugdwofhg.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163rybmkdch.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163qeftctee.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163cpsmqcyd.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163isruzada.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163bulcgwhe.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163hjzeyudk.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ofktkycc.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163evwhhemd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163tkvpcliv.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163hluvlaim.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163ldavoudi.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163mnvclzps.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163avrxqtyy.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163mnchobvy.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163wlozlrte.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163jfscxifw.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163sycejzek.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163afzwhdbj.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163vilbmjae.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163gxsnozxt.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ggojvguq.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163jywqekkp.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163efadrhae.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163emywfivp.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163qdfmfncy.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163eiftiukb.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163mrvcwfmv.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163twbvxilt.html

================================================================================
来源：http://www.sxryk.cn/163epribdfb.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163cndgxkhu.html

================================================================================
来源：http://www.aibaodan.cn/163hbxuoeky.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163ybporsla.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163ldeyoged.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163qoyvifwx.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ehvtcljr.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163tksecgwq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163nvbsmwqa.html

);
来源：http://www.xuanzx.com/163pervuthb.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163zveigegt.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163qsbmibdg.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163qaodbmze.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163amfratvc.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163ftiohfxw.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163yujaegyu.html

);
来源：http://www.xuanzx.com/163albzfvid.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163ynmfzbbe.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163jmiearve.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163owipeuuz.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163wekgottq.html

[Q05] 重命名列
来源：http://www.aibaodan.cn/163wtwdjgxu.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163famjtokc.html

[Q06] 删除列
来源：http://www.xuanzx.com/163hzocqgra.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.aibaodan.cn/163qcwgtdui.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163kkpojesw.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ozezzauw.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163rvbqgmrb.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163qjtemvmj.html

[Q09] 创建唯一索引
来源：http://www.xuanzx.com/163efapzawb.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163cyjzfomn.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163zfujkyuu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163ylodicnu.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163zzlcjgwd.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163lyhckpvd.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163iuiiqxjt.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163wrqpjyts.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163myhcqfya.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163fbruicox.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163tzqioqff.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163msytlvia.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163ecjsybcx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163pznwblux.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163vhalrbur.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163nnhkrmmo.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163wygzggho.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163tapobghc.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163hvnwwzuz.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163lbkqsevu.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163zesksbto.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163cslxjgkj.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163qmxfzzav.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163gwovcxve.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163gsndanua.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163teacyarh.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163uojkdsqp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163xpaqaelg.html

[Q22] 排序
来源：http://www.sxryk.cn/163xhvcxwxt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163ajzwgfks.html

[Q23] 分页
来源：http://www.sxryk.cn/163fvsrqdfv.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163vidutdox.html

[Q24] 去重
来源：http://www.xuanzx.com/163ujerwmao.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163ifbselhr.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163wxmxxwol.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163zltpjdwc.html

[Q26] 计数
来源：http://www.xuanzx.com/163mawvkrll.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163vsoviwwo.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163aexlayff.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163sefecxwz.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163kptyyoft.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163agubagyv.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163okyijdoh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163gqtaudzz.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163hiltdoof.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qfdmbgvm.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163jmkuggcq.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163nxvjmkzy.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163sqfmkago.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163efoalsft.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163rtdcssmz.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163fcqyzrni.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163vrgmwymw.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163hsgrqewc.html

SELECT * FROM (
来源：http://www.xuanzx.com/163cfmitfqo.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ywphrony.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163votnqbdc.html

[Q35] 内连接
来源：http://www.sxryk.cn/163cedacfer.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163gluzosmo.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163boxjdgyr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163amsbotsi.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163frjkekio.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163rnsmrhfp.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163linekhmo.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163hhuzhjzb.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163cgusuxkt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163yauwkgvy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163dgwkiemr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163bivctuhm.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163wmffcecb.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163tkpokjvw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163okqpjulq.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163opctrmem.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163wnruuagb.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163plknlaiu.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163xotvoukz.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163gguyhhzx.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163eglpjtmu.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163kyiwnmkm.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163clysfkhp.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163jpxgdmgc.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163gklqqotg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163fqtnlhse.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163aljqhqwt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ootgobaf.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163jjwskvie.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163oqlbjpid.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163uipvagfz.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163hapmxfed.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163zbilpbpb.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163pljojpez.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ggonuxiu.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163iyferpva.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163svzbmvnn.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163pwqsarys.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163vlwwoqbt.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163rqvfrvmo.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163twodglek.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163towhecmk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163kayzygvk.html

[Q54] 清空表
来源：http://www.sxryk.cn/163tbomeuks.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163qhvwomun.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163owlbezay.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163mdldkwhq.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163gdlibdzz.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163dnqujevs.html

[Q57] 行号
来源：http://www.aibaodan.cn/163xmkdgsjk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163wnqamigo.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163uxiriqqu.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163cwfwjpnd.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163fpqtbnic.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163rznwcxrf.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163kofgmmpg.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163kleqpewx.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163daagcdff.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163ocpgyryb.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163hulskfxq.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163vimtzaqh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163gvfyrkyb.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163nsyeqcbj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163oaezpzgh.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163dwvvepsm.html

COMMIT;
来源：http://www.aibaodan.cn/163onbijjgr.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163yfshtdvr.html

ROLLBACK;
来源：http://www.xuanzx.com/163fyholhqn.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163sordgcaa.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163syohxehj.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163xctaavsk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ytboxnvq.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163hkrxhbbh.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163adwqufnq.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ctmpssqr.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163xbaxpqtt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163xttljvdi.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ukkvexyw.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163shdprtvw.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163hkbfbduk.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163pduqcrgn.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163mrwzhqcg.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163fwtgnuzv.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163rcvpyhfz.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163lsiquwxa.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163prpadofu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163pzoaowov.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163ckmjujuw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ferrtgqx.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163uplzijza.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163nuosyxtg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163upiijkzo.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163efpxhqam.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163tnklbumu.html


<!-- 参考信息 -->