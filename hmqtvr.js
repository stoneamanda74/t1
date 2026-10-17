外链999!wailian999！

[O02] 使用线程池
来源：http://www.sxryk.cn/163lzrpvmdw.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163eknguicd.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163ofcftzpz.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163xacbkwwc.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163jrndsarq.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163jszismgj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163hgekosnw.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.sxryk.cn/163blmfwecz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163hjglohio.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163lznqujec.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163hpgomtdg.html

PHP:  // 用 flock() 做文件锁
来源：http://www.sxryk.cn/163qyxbaepy.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.sxryk.cn/163vfiblzrg.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163rewpdjer.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163tqmoowwo.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163dnxslybh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163feolnxez.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163tqszvrir.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163cwxtdeol.html

Py:   async def f():⏎    await g()
来源：http://www.xuanzx.com/163bskjxjso.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.sxryk.cn/163sriurhkk.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163otuuywah.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.xuanzx.com/163jsodnbtd.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163rwrhjkav.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163tsgshrxl.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.sxryk.cn/163yktgbope.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163xmnrnnfl.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163rlwcnymm.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163rufuywae.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163haatyjkb.html

JS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163iguuruim.html

TS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163qznuilnq.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163uipxlvow.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163vtssuqwt.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163ccstapxx.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163rhbrkhqy.html

[O06] 使用进程池
来源：http://www.aibaodan.cn/163wcaoxotu.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163yuzkthyu.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163clcaqell.html

JS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163eccaukyr.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163ftqdgvef.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163xazprobz.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.xuanzx.com/163vcnycjyc.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163pcdtewzi.html

C#:   Parallel.For
来源：http://www.aibaodan.cn/163yjngyamr.html

================================================================================
来源：http://www.sxryk.cn/163gwtdhrth.html

P. 常用工具函数
来源：http://www.sxryk.cn/163lnmqxzbf.html

================================================================================
来源：http://www.aibaodan.cn/163rfccdomb.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163zhygsglc.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163dsrlyfah.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163anzxjznp.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163xpztkykz.html

TS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163qccybuaj.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163kribkzzp.html

Go:   // 用 github.com/google/uuid
来源：http://www.sxryk.cn/163yyemlnzi.html

Ruby: SecureRandom.uuid
来源：http://www.aibaodan.cn/163jpdirdyk.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163pppyarpw.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163rbmhetlx.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163zvcduiem.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163panwcqdf.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163jkpxlyym.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163yjmedwgn.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163mnwsiwzh.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163yqllcbps.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163fcijfxea.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163ewhixzvg.html

[P03] 生成短随机字符串
来源：http://www.xuanzx.com/163xkmvxunb.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163wgbzfpdz.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163qvlfargg.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163jushhrqf.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163dyyszcnl.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163iuwejxol.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.xuanzx.com/163poevkmal.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163pkodauqk.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163entsepmz.html

[P04] 求长度
来源：http://www.aibaodan.cn/163tiwibnaz.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.xuanzx.com/163ktfbkihj.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163kahslrsu.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163jnkuebtr.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163vmtptvzw.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163thfxocns.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163jocaoojf.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163rpvcotvb.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163dpogkxfo.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163zerumece.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163zxxuwlyp.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163yezmtefn.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ltdqrynz.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163uqzhdytb.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163xuzxrxps.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163feaojcen.html

Ruby: a == b
来源：http://www.sxryk.cn/163jtsbtoui.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163cqlxlfif.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163axpccnou.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.aibaodan.cn/163mhdjvhnl.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163mcdbdibs.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.aibaodan.cn/163tlcukrxb.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163wphfotym.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163dknssixk.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163ojhieavc.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163xrpemskb.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163blftfmzd.html

[P07] 防抖与节流
来源：http://www.aibaodan.cn/163dubpravy.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163mtubudpu.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163qokzfoyc.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163acxyhesf.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163gktssvox.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.aibaodan.cn/163tcjpmwpx.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163fbfenpwq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163wepucbut.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163mlxxgjxs.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163ostilcqf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163spepuohv.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163qlktbgpk.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163zadggene.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.aibaodan.cn/163ncbhbmbv.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163xhvxeanq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163xivkbgjz.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163kpzmcitb.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163ziirdczg.html

================================================================================
来源：http://www.xuanzx.com/163xjwiwpro.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.xuanzx.com/163dtufsyrn.html

================================================================================
来源：http://www.aibaodan.cn/163azqnafvu.html

[Q01] 创建表
来源：http://www.xuanzx.com/163etamnntn.html

CREATE TABLE users (
来源：http://www.sxryk.cn/163tqazsjuh.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163fnqzwfds.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163poojhhmo.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163fliskwjq.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.xuanzx.com/163pylgqwwp.html

);
来源：http://www.xuanzx.com/163pdaetydd.html

[Q02] 创建带外键的表
来源：http://www.aibaodan.cn/163zjtutnui.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163lqdccthe.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163dvwibcjz.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163osksxuaz.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163hotrrivb.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163xmefouhc.html

);
来源：http://www.aibaodan.cn/163ocqcwshh.html

[Q03] 增加列
来源：http://www.sxryk.cn/163vzwbifdb.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163zevgbvch.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163lzaceogt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163afvmseei.html

[Q05] 重命名列
来源：http://www.sxryk.cn/163hpurzaoe.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163asxnclas.html

[Q06] 删除列
来源：http://www.aibaodan.cn/163vxwqmmas.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163asuaqyae.html

[Q07] 删除表
来源：http://www.xuanzx.com/163yuiccbpe.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ltreaexj.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163pfqcftsa.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.sxryk.cn/163bbjjxreg.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163vfrjrzow.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163fhfmcaxv.html

[Q10] 插入单行
来源：http://www.sxryk.cn/163kxffamfu.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163yvpskqei.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163pqwglmil.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163qstgnxzm.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163jyyonmkl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163eqbnnpqw.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163wbnaqhjw.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163oqnsqvuv.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163rqdojoia.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163dysedkio.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ofskuzlg.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163ilfapbpb.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163tqglejgo.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163lhrxchcx.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163dfjtturs.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163czzudkqu.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163izdcodwh.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163nlejsfad.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163evtootxy.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163bvgypmkz.html

[Q19] 范围查询
来源：http://www.xuanzx.com/163abqcqrfg.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163tervwovj.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163buokjade.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163pecgmamc.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163umfalnjp.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163ppcaydbi.html

[Q22] 排序
来源：http://www.sxryk.cn/163euwccdtf.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163iuxkzgdg.html

[Q23] 分页
来源：http://www.xuanzx.com/163ozhmjasd.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ctbutkjk.html

[Q24] 去重
来源：http://www.sxryk.cn/163tizomzzd.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163iwixniit.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163mkjboqxx.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163vuarkrig.html

[Q26] 计数
来源：http://www.xuanzx.com/163zpentosr.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163rstyjmmv.html

[Q27] 条件计数
来源：http://www.xuanzx.com/163obqahmuj.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163omqgknxx.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163ntiegdac.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163fmqjualb.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163veuunnzj.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163gnkqgehm.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163wdyfvkya.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163wbusreah.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163rbpdbozb.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163itgwdwkq.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163khauwyfw.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zpujuhcl.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163wurkktfb.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163dfmeeshi.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163uhmuwlqj.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163xyhqrkzu.html

SELECT * FROM (
来源：http://www.sxryk.cn/163ieimnifp.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163vrumudwd.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163clvjhdok.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163pbhymmcj.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163gfkafjxi.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163qtgufamq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163ukhxurtc.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163mdfktrwe.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163dfkxbquf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ufhtajyt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163rxmhnqnr.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163cudrroia.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163xnyxzbnf.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163stletybe.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163ktapicgq.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163mrgybkge.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163uubolcpp.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163pverbezu.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163qqdcsplj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163qyowavic.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ubcsfkqf.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163wqhrdlef.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163lcscszgi.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163pnlnhoip.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163acmtsblo.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163tpswnomj.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163pdtzhyqi.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163lqwhcqbu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163asdpdusf.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163mmbkvesu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163nqbhniig.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163ypawumog.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163vunbgiro.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163lukmaild.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163kmwjanca.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163xacgeuln.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163gbmhfadr.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163amilmmlo.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163teodgilo.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163dowvuwvk.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163uputtkez.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163qbovypky.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163iuldmneu.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163muuhmoqe.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163fttcjnqv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163nuvpukyd.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163xxhwubub.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163iwxumxrp.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163uimyzbto.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163ubqhhhoy.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163pdvzekgy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163facpnffr.html

[Q57] 行号
来源：http://www.aibaodan.cn/163bafhocvq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163nwhzxqrz.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163wibovmof.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163clhzzixb.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163obsujgrw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163rwevtomx.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163scacrftt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163cdtwndky.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163qtuozrem.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163cnppcwyf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163pfvyqika.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163maicyzac.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mmnymehx.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163qswdbvma.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163qfulvhra.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163jxcaetzu.html

COMMIT;
来源：http://www.aibaodan.cn/163qydfbytl.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163kkmypvmj.html

ROLLBACK;
来源：http://www.aibaodan.cn/163ecckwfzw.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163okpdzoxs.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163odlkkslz.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163cpuxdxix.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rcluceoq.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163iuziavpi.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163bqymkxtk.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163yomikned.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163lhdsawwt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163hxtvmphp.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163xkuukxmi.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163bewxgkug.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163jzfjyvbl.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163jfyyvfpo.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163ewnqllmp.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163kujdsszt.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163glrzjkia.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163vsxoosvh.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163hoxeclwx.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163ksroccxk.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163kwmgtwle.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163kcxxsvme.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163zhmdumqb.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163nytvkwvg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163fvcaqmfg.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ulramybc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163czazrprj.html


<!-- 参考信息 -->