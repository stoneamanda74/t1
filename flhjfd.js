外链999!wailian999！

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163stbnqrmq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163qcckuhxc.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163vjdmytch.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163khqhfbal.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163mpuqbdax.html

[O03] 加锁保护共享数据
来源：http://www.aibaodan.cn/163llpkbdrd.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163clkfsgyd.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163puefaknv.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vgiqwudi.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163ekzhrfku.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163gnmepyaw.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163lnffkubs.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163buipdazf.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163dqokgxte.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163vroewfml.html

Py:   async def f():⏎    await g()
来源：http://www.aibaodan.cn/163sysvbfaw.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163wenrblbj.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163xyzqrgrj.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163imlyhxfz.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.xuanzx.com/163nfucgnww.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163rfnpwged.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163khvfunpi.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163vhwzbhkt.html

[O05] 并发执行并等待全部完成
来源：http://www.sxryk.cn/163irlkupvh.html

Py:   asyncio.gather(*tasks)
来源：http://www.xuanzx.com/163lvufkpzg.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163pnnwgzms.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163ixcwyuzl.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163zwkjueqb.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163nrtdqyhc.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163hvlqhsro.html

Ruby: threads.map(&:join)
来源：http://www.xuanzx.com/163jpcifgab.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.sxryk.cn/163lwdgitvg.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163rjlsczdd.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.aibaodan.cn/163twkbzajd.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163cspfclxg.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163xjtsegbi.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163wfefrktk.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163shjmqjpl.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163qwszoohq.html

Ruby: // fork 块
来源：http://www.aibaodan.cn/163iwfevspt.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163qsgxthsn.html

================================================================================
来源：http://www.xuanzx.com/163aycxoprq.html

P. 常用工具函数
来源：http://www.sxryk.cn/163neepiwrx.html

================================================================================
来源：http://www.aibaodan.cn/163bozrnvrd.html

[P01] 生成 UUID
来源：http://www.sxryk.cn/163muopqpyz.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163pgjsjlik.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163holmjpeq.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163ofafhwuw.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163rykzwgoq.html

Java: UUID.randomUUID().toString()
来源：http://www.aibaodan.cn/163atgeigtv.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163bykaugcc.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163lepilpcz.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ywmkfufj.html

[P02] MD5 / SHA256 摘要
来源：http://www.xuanzx.com/163yllpnkpm.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163shnswbtg.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163mmzsilfj.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163pstjkzoj.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163kitcjmze.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163mwvcgxjt.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163meuysotc.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163dkbewaou.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163cftpilnj.html

[P03] 生成短随机字符串
来源：http://www.sxryk.cn/163dufhyzrs.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163wsvzcoln.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163vczmpsqt.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163mntfusxj.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163bgtckejv.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ixhywjwo.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163smanmagm.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163zrlryesy.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163zklgjqew.html

[P04] 求长度
来源：http://www.aibaodan.cn/163pyjxlwhn.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163rxsqanyz.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163rntjunba.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163ujsbscop.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163mlqnsetf.html

Java: list.size();  map.size();  s.length()
来源：http://www.aibaodan.cn/163hhulevce.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163uhrcszaa.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163hxonirgf.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163qillecgk.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163ycfxgriq.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.xuanzx.com/163bxzchbgh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163xmbgkrhg.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.xuanzx.com/163nazakgck.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163mvyyahcd.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.aibaodan.cn/163fayneqzr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163ghtlyijn.html

Ruby: a == b
来源：http://www.aibaodan.cn/163nrxmhhgk.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163cbzgwynu.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163gglsgwhy.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163pixsyoic.html

PHP:  if (empty($x)) {}
来源：http://www.sxryk.cn/163ftrxymei.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.sxryk.cn/163doyssybl.html

TS:   if (x == null) {}
来源：http://www.aibaodan.cn/163ogazdyat.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163nnaslurs.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163hxwbkten.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163tsupoijm.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163njrlefjo.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163ktfbibpc.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163uryrtrwc.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163unlraybo.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163newhyuno.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163vgkfbqxs.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.sxryk.cn/163ecmkqpea.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163nemqkwwq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163yurdjxve.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.aibaodan.cn/163cnbjkoah.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163cypkysez.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163lewjlkak.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163qvyfwutr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163whiwbjqn.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163otgmjguo.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163uehcwkfm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163xwtijlvt.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163zreexleg.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163zbwlutts.html

================================================================================
来源：http://www.xuanzx.com/163sjfpbdza.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163dwfcujkn.html

================================================================================
来源：http://www.xuanzx.com/163eohyxedt.html

[Q01] 创建表
来源：http://www.sxryk.cn/163ksetmooe.html

CREATE TABLE users (
来源：http://www.xuanzx.com/163plzcwpxs.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163trpggmmx.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163ikcuurwf.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163drallczh.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163oimtyrnc.html

);
来源：http://www.sxryk.cn/163daztdrjg.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163wvfdwojo.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163hluyvtmv.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163jdaeaokf.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163xdpiepam.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163otvdqqvg.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163wdhfdqms.html

);
来源：http://www.aibaodan.cn/163fplpiqyq.html

[Q03] 增加列
来源：http://www.sxryk.cn/163koajrbxj.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163zrecnpgh.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163xefjtsju.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.xuanzx.com/163uprejnuz.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163ntrlhvkc.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163blmgfctv.html

[Q06] 删除列
来源：http://www.xuanzx.com/163wrmbyrvh.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163mlcobmmd.html

[Q07] 删除表
来源：http://www.xuanzx.com/163fshvtopy.html

DROP TABLE IF EXISTS orders;
来源：http://www.xuanzx.com/163demkyayv.html

[Q08] 创建普通索引
来源：http://www.sxryk.cn/163jbfbrxbu.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163ufppicrk.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163zvsfltaq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163vjsjmhlj.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163fsdjjjhx.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163floawifx.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163hfsjyymh.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163vaqbnlwu.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163swyjgynq.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163vhzoyttl.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163aghlgbph.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163ndugqkqd.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163axpuagug.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163yvzvehzs.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ztprmeqx.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163gmoqojvl.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163ftzsqnwt.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163upfvijvz.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163jxdxzvfi.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163gpdvctch.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163ekicqkmr.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163dqvxoghj.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163jgwynmwl.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163mytsxvop.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163lojvrxjt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163stsccsvr.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163byeznkhr.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163aimchkxa.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163wgarrjbc.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163rmuyytus.html

[Q22] 排序
来源：http://www.sxryk.cn/163fgcsitxt.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163swpthtgd.html

[Q23] 分页
来源：http://www.xuanzx.com/163xcfghuwr.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163gmygmoky.html

[Q24] 去重
来源：http://www.xuanzx.com/163okacemhb.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163vjiqnzwl.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163kmvloqxt.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163mzpsaeyi.html

[Q26] 计数
来源：http://www.aibaodan.cn/163wgfqwfqn.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163cwzfsdpo.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163degjgvyp.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163pdiftsbo.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163uiszcaew.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163hkhuecfw.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163pyoimznx.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163ijwltzap.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163kjronhvk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163msbtmyer.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163lotujvkl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163npikgbgj.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163vhopleic.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163yxkcusci.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163xrufrxag.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163xqjpktun.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163qncipdvo.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163sfnqfzbb.html

SELECT * FROM (
来源：http://www.sxryk.cn/163lzvnfvox.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163djdtnuxc.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163qflbmdyl.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163gnaalhvp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163xeqdwynh.html

[Q36] 左连接
来源：http://www.sxryk.cn/163wvqhukdn.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163dhbwvdyv.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ieiedstm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163klrjzofn.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163xehwmbkp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163fijoxrcc.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163edguyluh.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163qcbzbdea.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163fbllxhjd.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163pengcyri.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163axzuhxoy.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163bkhgsprv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163aueqntoo.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163aqkpmrpo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163zxkabosy.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163brkicgxz.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163giikeoif.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163molfuqql.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163skplneot.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163ybqfkwbt.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163bqrtlese.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163kmadcviu.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163fuejvqjo.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163vstjnoaj.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163woamburt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163szxdjidx.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163akyllets.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163rltyaxjl.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163bneqozas.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163heonahns.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163wtwtukgj.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163ostxbpen.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163mtmxiyps.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163lvnvhomp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163jslxcvtu.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163cymgpjdq.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163lloungtp.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163nzuoipls.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163esrovsnt.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163sjyrgpaf.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163crvzncpt.html

[Q54] 清空表
来源：http://www.sxryk.cn/163mvpqkqnq.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163llhmckhd.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163anlnfqpo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163jcnxulto.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mwbzhojo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163kpiaxlyp.html

[Q57] 行号
来源：http://www.aibaodan.cn/163wixdukze.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163fbpdobxw.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163gkabqkfl.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163npjuibny.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163hbuexehw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163pcrxmjrh.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163zenxmopx.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163pskrelmk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163aekppcvs.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163hkvjtmnl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163fcbujnpc.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163dgilmbft.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163twggotjo.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163cmrxoyii.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163nmztkxxp.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163jzzgqyor.html

COMMIT;
来源：http://www.aibaodan.cn/163ktqyhcva.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163izmtkfak.html

ROLLBACK;
来源：http://www.sxryk.cn/163ivdctlgd.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163ytfnfums.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163crmijomj.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163fqvoqiwv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163nnfcaeqb.html

[Q68] 保存点
来源：http://www.xuanzx.com/163doftzcag.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163jyyeiudw.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163sztefcme.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163mzshruhm.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163wcnsyzdi.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163tchdbiot.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163pjjboitk.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rumqctlo.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163ixlgjqwz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163bgoutnsd.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163fwtilttx.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163sfyclxzd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163wsfvrkqq.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163cmhgxezx.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163byfgwpfv.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163qseybjau.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ferxesbg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163wlrtqysd.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ypiqcrrf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163prkcidcd.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ykjvurvd.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163wtwdepyu.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163pglyghoq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ixvbyyga.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163irmvfcsq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163xydravvl.html


<!-- 参考信息 -->