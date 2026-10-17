外链999!wailian999！

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163susfsopt.html

Go:   go f()
来源：http://www.aibaodan.cn/163ooyaxiiq.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163xynxzvis.html

C#:   Task.Run(() => F());
来源：http://www.xuanzx.com/163zjzgpsui.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163ffdtxnxu.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.xuanzx.com/163xhyhxgfm.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.xuanzx.com/163nhnmoylq.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163lpguorxl.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163lyrrhwzk.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163cvyagmmh.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163impyiyha.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163iqfjihom.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163jnuwvskc.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163rrrnosxi.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163mytqsfcm.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163zftskzws.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163ibpgabuw.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163tjelmiqf.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163pogwecgg.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163jbpsmxka.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163jyvkaguj.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163aqwuldhl.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163fxgtzpgz.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163ginylxsf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163jaugbxfh.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163nqhkbkfz.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163adscrref.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163mpzckbus.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163xnwidssk.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163kgoekftw.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ciobbgei.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163xvjriswf.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163ecpzzjhi.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163uccmxvdq.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163ikkwujfd.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163vvoryiud.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163qmloorbe.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163anggomjn.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163cnqgtwjb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163cnwcoxhr.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163msywtbki.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163pgzulsvr.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163sjixcujj.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163lqmzqdwt.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163coxypuih.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.aibaodan.cn/163oksztygj.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163lwbpmioq.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163bzteyzay.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163ppbavuca.html

================================================================================
来源：http://www.aibaodan.cn/163qessqaey.html

P. 常用工具函数
来源：http://www.sxryk.cn/163dnhhgezf.html

================================================================================
来源：http://www.xuanzx.com/163fgjgxwmk.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163oywvtgcm.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163dqiwtfjq.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163cihylagy.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163unfcanul.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163pdahfefe.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163yyeiiwkl.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163vmzmrzfa.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163ralvkqbu.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163vikasrsc.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163npxmlnoh.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163bpxlivls.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163jlfvjatn.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163muzlciox.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163hhjwnkbj.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163gmlnnryg.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163gijildhu.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163zezxpwie.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163mkjlcoxe.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163rukkyrfh.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163veasxdja.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163tisqwdrj.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ugotqmkp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163tzekinvy.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163myugdipb.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163qditwpey.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.sxryk.cn/163hprfumlz.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163yustzrjc.html

[P04] 求长度
来源：http://www.aibaodan.cn/163hamcfkmo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163hoqwdane.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dieqcaib.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ubkrskmc.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163hnhuvvyp.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163fzgzcysl.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163oowrbzfo.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163vlbsjbed.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163qmnddqcu.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163yjsjurjs.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163ofewbkul.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163xksunlaf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163sjalzapd.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163ihryeqko.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163qsuktkxk.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163gxdluzzi.html

Ruby: a == b
来源：http://www.sxryk.cn/163qttdupdi.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ntpmlizu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.aibaodan.cn/163icswtnrt.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163ziebgyuy.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163vlxnpwye.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163jphxogfw.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163smteitku.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163jawliqtf.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163xynlvpdj.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163kdexjfba.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163qkkxgauh.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163nsqhewvx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163ablomizx.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163fifmvwdq.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163hndyribm.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163njrwaaez.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163qdddqpjm.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163lqzcivxc.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163uqenvdmn.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163lwmoctge.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163dhjrvrpj.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163fokkeayd.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163suvneuxw.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.xuanzx.com/163csrgwmhl.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163iqxlradx.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163koryogbl.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163npjfgycc.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163whwvcxhd.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163txbigvkh.html

================================================================================
来源：http://www.aibaodan.cn/163sldeejya.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163blmbiqhw.html

================================================================================
来源：http://www.xuanzx.com/163rbkifeuu.html

[Q01] 创建表
来源：http://www.xuanzx.com/163uefirjsw.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163dyiaboys.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jhybpwgh.html

name VARCHAR(50) NOT NULL,
来源：http://www.xuanzx.com/163ghzodlfs.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163nkmwvzjp.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163xsovroxo.html

);
来源：http://www.xuanzx.com/163fptuocae.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163vhrceipc.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163fstdqmay.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ukxipqol.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163wfxlkvbq.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163jxgwcsmp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163btuppmqs.html

);
来源：http://www.sxryk.cn/163juveloyi.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163osxzsfzv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163afjtyzos.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163fxkvwprt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163cnjtzibs.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ksjhuyjf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163rthwgnsv.html

[Q06] 删除列
来源：http://www.xuanzx.com/163hmjetdhn.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163qrnwjrwf.html

[Q07] 删除表
来源：http://www.xuanzx.com/163sjkqnsqo.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163yhbybilb.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163vpltaftc.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ydnytrtm.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163szgtcgrn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163hzpjpryx.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163gwqllmyb.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163ulnyquar.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163jivyjtdl.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163qihfukws.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163jdebgaiv.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163qetzkvjm.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163gglexgyo.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163jokkugtf.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.aibaodan.cn/163ipqdzlhq.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163jvwsuvbq.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163xqxhejjm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163bxgusqho.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163sjdrhyvk.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163artyqvns.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163rtyumgne.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163ilnyliiq.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ceircxhd.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163ecoksffe.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163aupemmog.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163okvjinwv.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163qyowymrt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163helygqqd.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163hsivuule.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163dkoyeymc.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163csrwlawx.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163bpuzmfbx.html

[Q22] 排序
来源：http://www.xuanzx.com/163rokbzygp.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163yqwobxhj.html

[Q23] 分页
来源：http://www.aibaodan.cn/163xzeqsyuw.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ozrzekmf.html

[Q24] 去重
来源：http://www.sxryk.cn/163obidjfpp.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163qmnhigxr.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163klekhgnp.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163cmmiinub.html

[Q26] 计数
来源：http://www.sxryk.cn/163ampwijtj.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163uwwiipbu.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163syagxsae.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163swavbcnm.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163fvviwath.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163xarvfcyc.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163vlrauvur.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163lxcahsbs.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163lxvqbdsc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dzjyqboh.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163frwnivsr.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163rgrivypv.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163cirkebhf.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163aszvntvi.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163vjsnpndc.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163pixsfsss.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163cskuomrv.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163vaeqbzuf.html

SELECT * FROM (
来源：http://www.sxryk.cn/163abpvaiwi.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163pcyqieqy.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163fspjfpnz.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163cicibruy.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qfhaivbf.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163eptlzxdy.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cmkztegv.html

[Q37] 右连接
来源：http://www.xuanzx.com/163fslygwdp.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163xaoknxcu.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163pxgygygt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163tjgxcymh.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163incjscyn.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163eeslicmu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163kztddkrz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163kxdpcoih.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163gqycyzzk.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163yaqkfyao.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163dajqrdjs.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163ahvqlqcs.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163dzfobldb.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163bojishiw.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163bevoapck.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163hgslrfga.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ngpdgufe.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163eythpvdj.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163yygmffha.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163jkdssnip.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163oahazhhm.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163xacsngun.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163gangfknj.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163hkvhtlyg.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ltwkgxgb.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163npyawzlo.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163nadzyrby.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163kizjnwio.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163drzafizr.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163mkcmigrg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163rcfmelwt.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163gpqyhcuh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163huqdqvhc.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ftmdeynn.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163zmfmbslr.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163asggmnth.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163zpftkqij.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163wxqxkvfm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163dnowrmet.html

[Q54] 清空表
来源：http://www.sxryk.cn/163tfovnsug.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163hwtuldwn.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163unsbvhsn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163wyjkmuao.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163kcypvlll.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163emxjrlwh.html

[Q57] 行号
来源：http://www.sxryk.cn/163nauiesaw.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163wforfrtx.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qxzxkycd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qyxihwhb.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163oinpjvxh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163fgtxhevx.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163tahsvdck.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163rvgphgvy.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163tkrjoaic.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ggjhjerl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163milcxlqh.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163kiqjoxrx.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163mmnxzinj.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163qbqhahdp.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163worxbbkv.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163bqvtdsgr.html

COMMIT;
来源：http://www.sxryk.cn/163gwnljrem.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163trhgjppm.html

ROLLBACK;
来源：http://www.aibaodan.cn/163avwqcplj.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163tgwzpxnm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163hokbbihs.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163pmasvsgo.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163qwgtkmry.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163ymrdpxbp.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163otrjinqy.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ozdaqqzu.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163ymwdkvte.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163snberhbm.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163yfeixmdw.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fsylwmrl.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163gslrtril.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163nnucqrov.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163toiawtrd.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163xoivybiu.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163xslvlaqi.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163zupygoqo.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163tpmtynov.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163ljvnjwqd.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163tpkisgzr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163wsxcdrcp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163swtewtox.html


<!-- 参考信息 -->