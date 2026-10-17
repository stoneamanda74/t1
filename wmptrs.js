外链999!wailian999！

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163kbkhhrzs.html

Go:   go f()
来源：http://www.sxryk.cn/163yirruwfh.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163znzvwgsp.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163sfunawqp.html

[O02] 使用线程池
来源：http://www.sxryk.cn/163fthnextr.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163nrdkpeio.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163wnvocmec.html

JS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163dmtzycbd.html

TS:   // worker_threads 线程池
来源：http://www.sxryk.cn/163wlkgslpz.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163wruecpyr.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.xuanzx.com/163bwabiehg.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163hyqdnndu.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163hxwwsihp.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163jbgwalye.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163vsbtiaer.html

PHP:  // 用 flock() 做文件锁
来源：http://www.aibaodan.cn/163csrlgxdm.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163lzbuxeox.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163oivpjcgz.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163snonqtpz.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163ynxvklym.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.aibaodan.cn/163dtsjvigv.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163pbsafhlh.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163qqthppiw.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163wvovspoj.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163lfyjgtep.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163etudnwhw.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163rexgykbz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163asjkkqye.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163msxwtwob.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163ogzfbexf.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163lymcgzja.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163ddazweka.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163gonzohrx.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.xuanzx.com/163lprlimgk.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163czyibxxv.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163uqktzznz.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.sxryk.cn/163dhaoaxzi.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163tffqktok.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ltqcxrrd.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163metpiuvu.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163ljrnlcos.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163yybatcmd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.xuanzx.com/163vpmhlttu.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163uvxihoiw.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163zdktlott.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163ynodopwy.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163ueirzgua.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163odxlzqzw.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163wqkbzcel.html

================================================================================
来源：http://www.xuanzx.com/163xezrnfvw.html

P. 常用工具函数
来源：http://www.xuanzx.com/163cshwxgvk.html

================================================================================
来源：http://www.xuanzx.com/163mmgmfbji.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163wgotdnbm.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163vgjbdjja.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.aibaodan.cn/163igmqvgkn.html

JS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163gqhglhif.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163jepsaihq.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163nwfzuojt.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163bimsiqls.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163wzolqyiq.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163fburqyeu.html

[P02] MD5 / SHA256 摘要
来源：http://www.aibaodan.cn/163zcfeprue.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163gzhguvqd.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.xuanzx.com/163shbfjzlj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163yxbnnahr.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163loxqnqzp.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163clooftbk.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163jjglebhy.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163wzvpkxqq.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163qssythom.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163gsgwpvnf.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163bvlhwgzh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163oyyvpxli.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ilgznbgg.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163baqyless.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163smlqagzq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163qvzyyjng.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163ntwuxnoe.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163vssiowuf.html

[P04] 求长度
来源：http://www.aibaodan.cn/163emkndvla.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163umjpzwmi.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163azgabpnh.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163otdpprty.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163bkfjuzat.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163evdambos.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163fhmduxso.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163yfnqsjdl.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163eazxchbn.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163gywajdhl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163jznyzrli.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.sxryk.cn/163deukekdk.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163tsxdfusx.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163urohhrry.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163bsfllnya.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.xuanzx.com/163hvwxdbrr.html

Ruby: a == b
来源：http://www.sxryk.cn/163fiqqexpc.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163bjdhzosy.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163wjgsverx.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163cekdbkvt.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163ynjbzhwe.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163gnttidoz.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163qqivkthz.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163erfjwkcz.html

Go:   if x == nil {}
来源：http://www.sxryk.cn/163ahuhofqy.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163vxpjnuiu.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163rdvquetg.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163dipsctlx.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.sxryk.cn/163aaclndhe.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163zydvqurr.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163faeqnogk.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.xuanzx.com/163qizvfoqn.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163rpgrwjzd.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163jhwlfjzn.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163gszaalex.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163qufavzvl.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163chkqcfxe.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163suundiih.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163vbfwamnq.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163lsrymryb.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163emuwpmbr.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.sxryk.cn/163qggafpqh.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163qjlmaiys.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.xuanzx.com/163nbxssbyc.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163vmlahjco.html

================================================================================
来源：http://www.sxryk.cn/163zozgvvzo.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163bnswziqf.html

================================================================================
来源：http://www.sxryk.cn/163quyhcirb.html

[Q01] 创建表
来源：http://www.sxryk.cn/163pcyycluz.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163nxxthrdn.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163bocpnphh.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163qkblxati.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163wngnjmyv.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163iqmzjypm.html

);
来源：http://www.xuanzx.com/163pdfdxxyk.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163prdidfdm.html

CREATE TABLE orders (
来源：http://www.aibaodan.cn/163lnwlgbpl.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163mcorloba.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163rzzfjpye.html

amount DECIMAL(10, 2),
来源：http://www.aibaodan.cn/163lzxawpqj.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163codipmsm.html

);
来源：http://www.xuanzx.com/163tyykojiz.html

[Q03] 增加列
来源：http://www.sxryk.cn/163gmcsuvjs.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163iyrrrzxw.html

[Q04] 修改列类型
来源：http://www.sxryk.cn/163bxakcufm.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163yfljwghn.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163rtfhgxwy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ggzeqhvy.html

[Q06] 删除列
来源：http://www.xuanzx.com/163brkecnyo.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163kbpycsvz.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163qgfbjoap.html

DROP TABLE IF EXISTS orders;
来源：http://www.aibaodan.cn/163jblefftx.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163xidigpnh.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.xuanzx.com/163kdlzduza.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163rqfbienn.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163tfmnpptj.html

[Q10] 插入单行
来源：http://www.xuanzx.com/163jizvamhl.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.aibaodan.cn/163anmtisun.html

[Q11] 一次插入多行
来源：http://www.aibaodan.cn/163kqixqtcb.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ydkwomge.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163dsbiwlry.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163mdvtsjcl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ldcqpqfu.html

[Q13] 忽略重复插入
来源：http://www.sxryk.cn/163rdimupxc.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163wqwmuyma.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163vvcballg.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.aibaodan.cn/163yqwhnzgi.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163wcvdcble.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163lzeuwiyz.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163jqmfvkps.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163yabmvkyu.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163bowjmbvp.html

[Q17] 条件查询
来源：http://www.aibaodan.cn/163tbultuuh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163hnkaplxm.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163myxehflc.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163jylwdjbg.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163wncehbro.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163bymjxkbc.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163ytdlqohy.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163durbgqal.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163egdfoytp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163aqfgcjsn.html

[Q22] 排序
来源：http://www.sxryk.cn/163wixlsqyl.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163xwliiuzt.html

[Q23] 分页
来源：http://www.aibaodan.cn/163hxnqufhe.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163rknjoeoy.html

[Q24] 去重
来源：http://www.xuanzx.com/163pbqrhdhc.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163yomhuqys.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163qfdhhtka.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163uegukndq.html

[Q26] 计数
来源：http://www.sxryk.cn/163nobasxyg.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163bqodoste.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163cdredfvl.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163dihwoejr.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163byvwgceu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163czyoqclp.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163omqxuvpe.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ovdtgeae.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163olxfjgce.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rxvdwtal.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163ygvsxxsw.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163erkcpjee.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163kxwzkcqs.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163caabaoxp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163wjfioqvp.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163skxwrxcz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163rmpfwjik.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163ecgnzilb.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163jenzzene.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163hohnjxky.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163wphluyjh.html

[Q35] 内连接
来源：http://www.sxryk.cn/163meodhmis.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163wqnyurng.html

[Q36] 左连接
来源：http://www.sxryk.cn/163hfpsqikv.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163poxrabey.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163myovxzcv.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163okigczhy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163zgenouno.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163rtknbfpy.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163qfeaptdy.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163mqahwxny.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163tgstseww.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163izlvraxw.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163fhiwlnbs.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163nxgwfqfg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163rykznugl.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163apibjtvz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163bvmxauht.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163otwbuyik.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163izfwuyyr.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163nwgibias.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163qvrrqjxp.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163absvueby.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163rpyjqjvv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163bqpdfyjx.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163cthzdqjf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163nnhsbxrw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163infumguk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163bwfxlszf.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163vuwkaykq.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163ydaoynkv.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163albceunf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163fdhizcob.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163nauolxum.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163kivaykao.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163rbkeaipo.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163nkyfgdao.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ozmscrss.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ieefrfdg.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163duvgdcwl.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163wlxhmslm.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163vddxrlqr.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163fzrchtjj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163aribhmjh.html

[Q54] 清空表
来源：http://www.xuanzx.com/163wsktopme.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163exqdtbqm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163vhuvelij.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163hddsrtxw.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163hivtfwkv.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163udzrimvd.html

[Q57] 行号
来源：http://www.sxryk.cn/163amnkkkec.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163sjoudpvc.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163wqkrrdhb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163ruohhspx.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163wwluykbn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163eownyfib.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163uxspmkxx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163jyajndug.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163cwmosqsa.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163epbaajzs.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163nnewxkpr.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163qfxrgqmd.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163wuoyiusw.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163jdpuvxpx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163lgkubmdd.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163qiiiseed.html

COMMIT;
来源：http://www.xuanzx.com/163zgfehzhs.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163nyiqsimj.html

ROLLBACK;
来源：http://www.aibaodan.cn/163icyzoeoy.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163oqhwviph.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163effniukb.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163phqhkvsv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163glwfkbfu.html

[Q68] 保存点
来源：http://www.sxryk.cn/163muusjwte.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163qkokjhgo.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163outaerlg.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163yadvthtm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163jqehvtax.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163joikikxh.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163pvuyacca.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163ngvxwost.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163xwnhawaf.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163qqvojizr.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163oqcxwert.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163mfvsrvzb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163falytfvu.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163xzjvxdog.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163kudzhynu.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163qknjnsbc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163hhphayjh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163zdffdnyj.html


<!-- 参考信息 -->