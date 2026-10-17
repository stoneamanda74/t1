外链999!wailian999！

================================================================================
来源：http://www.xuanzx.com/163sztysqqr.html

O. 并发与异步
来源：http://www.aibaodan.cn/163ojdwllfd.html

================================================================================
来源：http://www.xuanzx.com/163zpofprkp.html

[O01] 启动一个线程
来源：http://www.aibaodan.cn/163kwvdtlpu.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163nudrihxe.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163tmmjvfws.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.xuanzx.com/163bkgjmtdy.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163yjxnwyaj.html

Java: new Thread(() -> f()).start()
来源：http://www.sxryk.cn/163jhjizfxa.html

Go:   go f()
来源：http://www.sxryk.cn/163qblfprem.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163riuqacpe.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163yyusphco.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163javdmdnx.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163wvjgbolv.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163vllsilnc.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163vkrapxdu.html

TS:   // worker_threads 线程池
来源：http://www.aibaodan.cn/163fzusqlbq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.xuanzx.com/163birurgms.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163eipquisw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163qthdfinl.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163sdmkfqmk.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163jrganxmf.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163fkvqxdsq.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163etdwlksd.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163rwlucsuc.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163updgewrp.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163fytqqdeq.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163ajddafqk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163xyhrlibj.html

C#:   lock (gate) { shared++; }
来源：http://www.xuanzx.com/163lbljymiz.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163sbikkekq.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163hwjlxyff.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163yitttxmn.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163aqnkkomp.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163hebfcxxf.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.sxryk.cn/163vdmeyabc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163ruknsmrq.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163cgzfolhu.html

C#:   async Task F() { await G(); }
来源：http://www.aibaodan.cn/163ssmcfyft.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163lobijaao.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163weqlgzda.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163xaaltrcn.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163hhbeimop.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163klhrhkbs.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.xuanzx.com/163ovewlkcg.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163stedwvvf.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163denlgvre.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163touswbuk.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163pgfrsorx.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163bgmbrgqi.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163djezioip.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163oyvrnzrh.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163koomtfer.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163uiyhjjgo.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163achyontt.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163uldchtje.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ucivhjwd.html

================================================================================
来源：http://www.xuanzx.com/163uykudpho.html

P. 常用工具函数
来源：http://www.xuanzx.com/163sbfwlqob.html

================================================================================
来源：http://www.sxryk.cn/163xbmodlyh.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163bavlyqfm.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163qypopepp.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163tdbaqvbf.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ccqltdnl.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163uofeupzx.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163wxpygpup.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163rgsknukr.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163golfpqxw.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163tiyboyha.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163winuwydf.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163bzvionyk.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.sxryk.cn/163volrnhsq.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163oiqrqfmq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163kuetqnxf.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163pikmtksv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163ktsvgsbv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163apfmruei.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163dmhyiqsu.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163iasarnix.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163glntzgyc.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163plmvcavs.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163qvnscmxa.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163kugjgxtn.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163gbrnehak.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163nklexvvx.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163dbemoygt.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163xxxtingp.html

[P04] 求长度
来源：http://www.sxryk.cn/163dvrcvxbc.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ccwvqkql.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163vxveutaj.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163ubrbvbpv.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163pglaosrb.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163fmohnvks.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163lcjyygcu.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163rinmxuah.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163gvvnoxpm.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163izowdaya.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.aibaodan.cn/163bzjbxgac.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163ftcvxcvd.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163ddxrfpbu.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163rmxyitus.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163elxzlsmn.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163rvxoqvsr.html

Ruby: a == b
来源：http://www.sxryk.cn/163jmhkipdq.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163mshiaizh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163azmmwdgu.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163kokugvla.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ccuotwnx.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163yaqfgsmv.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163bnhnmiua.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163uhxmbvmu.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163yzewgiqd.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163txrlhwtm.html

C#:   if (x is null) {}
来源：http://www.aibaodan.cn/163zvnneuxh.html

[P07] 防抖与节流
来源：http://www.xuanzx.com/163ffqnanqx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163wybxlvjf.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163cjggqbol.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163wlbjhpki.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163qaerpgvk.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163lxxkwbve.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.sxryk.cn/163fadfeytr.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163xcgbckoz.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163txsrsdqb.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163esdhtqfa.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163ukipbaai.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163ooqjppdr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163wvlnyuiw.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163snxnosrm.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163zwmznxml.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163lggiaduj.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163epsgxtoc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163uzenmbjn.html

================================================================================
来源：http://www.xuanzx.com/163vnrowjlv.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163ebshbzzx.html

================================================================================
来源：http://www.xuanzx.com/163vluwjtsn.html

[Q01] 创建表
来源：http://www.sxryk.cn/163tviwglkl.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163rbawkcfu.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163tokhmidk.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163xkhupmqa.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163pceesgot.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163odjqlvez.html

);
来源：http://www.xuanzx.com/163yjjpsfga.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163byfjmbkp.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163bwqqbrlf.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163stmrdasq.html

user_id INT NOT NULL,
来源：http://www.aibaodan.cn/163hjeplplz.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163fndlhcsn.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163vhgoauzs.html

);
来源：http://www.xuanzx.com/163zcwwmmik.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163jsaglkdv.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163dwvxfeqf.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163rvavsvrk.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163ihzdqyyn.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163uudjboag.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163oskjjtrv.html

[Q06] 删除列
来源：http://www.sxryk.cn/163pliczhqt.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163srkchhyl.html

[Q07] 删除表
来源：http://www.xuanzx.com/163biouxbfm.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163kjtzbttc.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163laknfmco.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163uqqfqlgq.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163cbcmedhm.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.xuanzx.com/163lxykzoee.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163zmgqrymw.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163fkdxbdnp.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163rnzyvvas.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163fjslpwxc.html

[Q12] 插入后取自增 ID
来源：http://www.xuanzx.com/163nmpqvmnr.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.xuanzx.com/163khdpzyit.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wnncwzza.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163rryaqrwd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163idxmunbo.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163mdcmoydw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163zauclwcg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163hoaigmeg.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163pgnpwbjk.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163sqcdkhwl.html

[Q16] 查询指定列
来源：http://www.aibaodan.cn/163ihybqeqf.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163oazgsaxy.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163svftcpxu.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163viyzlzif.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163mqbuizuv.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163zdevxesg.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163qjqawwch.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163cqsswfyz.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163gxsushcg.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163czqcmavh.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163vkcaugtu.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163mkvovhxz.html

[Q22] 排序
来源：http://www.sxryk.cn/163htfzsvfd.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163dacbwjow.html

[Q23] 分页
来源：http://www.xuanzx.com/163poaogiqy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163neexedaj.html

[Q24] 去重
来源：http://www.aibaodan.cn/163zclexipu.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163nnijtwux.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163cxdontww.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163rbtbuiwl.html

[Q26] 计数
来源：http://www.xuanzx.com/163pvsnjons.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163pgrrkemr.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163ihotweon.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163cwnddkxj.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163knooyndn.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163xogujoro.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163xioigxrw.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163kwxbnjjk.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163mjjdafbe.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qepvirmu.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163usqxbpve.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163rpljfnjf.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163ypramgsi.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163zpfccpmu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163thppxosp.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163moxufkdv.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163ffgskrvo.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163yxcgsuki.html

SELECT * FROM (
来源：http://www.xuanzx.com/163icwjmhnv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163aprjyefg.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163xobtoifv.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163rcbuxehr.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163cclbliyh.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163rcbmowtf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xgievjrg.html

[Q37] 右连接
来源：http://www.sxryk.cn/163yxznrhxh.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163jkaxkbpb.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163tqgtiool.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163pdpxflsb.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163zigoniyl.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163eclaxtbd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163gsmkahad.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163zwuphogq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163alkwcfob.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163csekghck.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163grbwmvzj.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163mbvoobte.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163llvcasel.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163anypwytg.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163ltvijbxn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163xjtuzggm.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163yxvehpgc.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163saaqmgjv.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ozdrneti.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163czcccibx.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163zmhajptt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ytaapera.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163cdptxzkz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163tohogtxp.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163auzbnckg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ouhsajzb.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163gppksdoi.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163dkhnizpj.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163qgrmrsco.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163zkirrrao.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163tobqosvf.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163eqkeiydw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163nrsdswjs.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163axrcwvzc.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163sxsrcavf.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163yrownbfk.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163awsulrmt.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163ordycqtm.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163ntkdrkyf.html

[Q54] 清空表
来源：http://www.xuanzx.com/163nuyfnqkr.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163dxhgaxsi.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163sdjkjvfi.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163bsjygidm.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163haorfhln.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163stgitsgq.html

[Q57] 行号
来源：http://www.xuanzx.com/163orhbzjoy.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163edhggtik.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163nnhhrzhw.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163oczmcjiw.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163imgrajbz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163jdetktkg.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163vrvgkple.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163wfynulcf.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163exincxsq.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163jeamzfah.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163baxsekyf.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163csqcujfk.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ueqoxatu.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163bgeirybg.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163uuizamwr.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163aujxdzkw.html

COMMIT;
来源：http://www.sxryk.cn/163oulcqlbz.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163rksvcquh.html

ROLLBACK;
来源：http://www.xuanzx.com/163beiwquyw.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163caweytqz.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163axszxpuz.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163qfrmvubh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163lfzhslrr.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163wlrzbjpn.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163lnlzfitc.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163zqsxmkbh.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163elecshpl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ypxcgijz.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163mmjdmmiw.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163kdfzrwaj.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163eeymjtao.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163xqcgiqyi.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163mlyxfmsi.html


<!-- 参考信息 -->