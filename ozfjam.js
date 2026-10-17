外链999!wailian999！

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fhvzcimy.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163lloauijj.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163uyplbulc.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163omnqvbah.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.aibaodan.cn/163dfbyczoa.html

[O03] 加锁保护共享数据
来源：http://www.sxryk.cn/163nunuatal.html

Py:   with lock: shared += 1
来源：http://www.xuanzx.com/163xxgtvism.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163fantxhgw.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163tvxzsfvj.html

TS:   // 同 JS
来源：http://www.aibaodan.cn/163amdsrcna.html

Java: synchronized (this) { shared++; }
来源：http://www.aibaodan.cn/163nrukbhcj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.sxryk.cn/163dcojgnbk.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.sxryk.cn/163keegfaon.html

C#:   lock (gate) { shared++; }
来源：http://www.aibaodan.cn/163dvbyiuag.html

[O04] 定义异步函数并等待
来源：http://www.xuanzx.com/163tiejalpu.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163erjgiolx.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.aibaodan.cn/163omqvcabw.html

JS:   async function f() { await g(); }
来源：http://www.aibaodan.cn/163ojohuvhn.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163pefvxrpt.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163hqzfuqpy.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.aibaodan.cn/163cyvezyoo.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163agtpimxh.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163ebgypvyg.html

[O05] 并发执行并等待全部完成
来源：http://www.aibaodan.cn/163fjuwxwyc.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163bhlcfvrs.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.aibaodan.cn/163cspprsnr.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163gmffuque.html

TS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163egsznnpc.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163minullnz.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.sxryk.cn/163qizyliqp.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163qihlhlfb.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163vmkohzix.html

[O06] 使用进程池
来源：http://www.sxryk.cn/163cokbuwfr.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163rlyqvila.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163galfflsp.html

JS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163zeeavpkz.html

TS:   // child_process / cluster 模块
来源：http://www.sxryk.cn/163vuzxafys.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163hyicnqni.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163tgkonikr.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163iymhaqkv.html

C#:   Parallel.For
来源：http://www.sxryk.cn/163ntdhbyin.html

================================================================================
来源：http://www.sxryk.cn/163cnsoqeyd.html

P. 常用工具函数
来源：http://www.sxryk.cn/163ozpsarxh.html

================================================================================
来源：http://www.sxryk.cn/163ikjjgjdy.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163pkbnynrt.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163vjzmbhma.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163szqyiuyo.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163jinmvgqw.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163qprnhyhn.html

Java: UUID.randomUUID().toString()
来源：http://www.xuanzx.com/163ebcjrbvf.html

Go:   // 用 github.com/google/uuid
来源：http://www.aibaodan.cn/163qcxyulya.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163faeevjgy.html

C#:   Guid.NewGuid().ToString()
来源：http://www.xuanzx.com/163ewqsjhrq.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163edbzpnne.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.xuanzx.com/163eantzqnr.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163lqanzhmg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.aibaodan.cn/163dymoqoaf.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.xuanzx.com/163hvywgeso.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.aibaodan.cn/163beybwbuu.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.sxryk.cn/163ttclnbgv.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163abswljxm.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.sxryk.cn/163azpzrtgs.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163potkizwm.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.aibaodan.cn/163wsrdopph.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.xuanzx.com/163jwhmdzch.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163gnryigxx.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.sxryk.cn/163hziliimm.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.sxryk.cn/163jqgtxfbq.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.sxryk.cn/163dhisydqc.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163pjvqhvgf.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.sxryk.cn/163tceczypx.html

[P04] 求长度
来源：http://www.xuanzx.com/163xypfuzmb.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163znlqtxke.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163azmbmcgf.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.sxryk.cn/163lueukiaa.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163djtocjpr.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163jhonyxry.html

Go:   len(arr);  len(m)
来源：http://www.xuanzx.com/163hjcuekde.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163ajvjgbys.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.aibaodan.cn/163zwxitsnx.html

[P05] 判断两个对象内容是否相等
来源：http://www.sxryk.cn/163xsnatgrm.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163ypalwgvg.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163ynazhmqf.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163ayqusqcs.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.sxryk.cn/163vrtgyoha.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163mbdknprr.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163bpusmpiz.html

Ruby: a == b
来源：http://www.xuanzx.com/163xhfroiba.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.sxryk.cn/163mvcowtyy.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163encylipv.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163rakgfptf.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163snmqkqnp.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163ibstbtkh.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163zamiiesy.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.sxryk.cn/163zjvylaxy.html

Go:   if x == nil {}
来源：http://www.xuanzx.com/163omlyjanf.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.xuanzx.com/163rfxbqlrx.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163kbmucvqx.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163zektxspb.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163pwhdrmcb.html

PHP:  // 手写时间戳比较
来源：http://www.aibaodan.cn/163uyjjlear.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163nyzeksyp.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.sxryk.cn/163yaholfyw.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163aojaxowf.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163ukuxymif.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.aibaodan.cn/163qaglgtei.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163jszcypbh.html

[P08] 处理浮点精度问题
来源：http://www.sxryk.cn/163conpozbd.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163bbjuyavw.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.xuanzx.com/163fohyrrhr.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163qnvtvexp.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163jgsbjofz.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163yjzgfzzm.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.sxryk.cn/163wwhuubao.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163idjqgnhi.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.xuanzx.com/163tlabjzty.html

================================================================================
来源：http://www.sxryk.cn/163behyleqh.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.sxryk.cn/163wdzuowym.html

================================================================================
来源：http://www.sxryk.cn/163noczulcu.html

[Q01] 创建表
来源：http://www.xuanzx.com/163tsiozbxq.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163xxmesiob.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163gmkcpihv.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ecwjqcoc.html

email VARCHAR(100) UNIQUE,
来源：http://www.aibaodan.cn/163tfilposk.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163arwilrkl.html

);
来源：http://www.xuanzx.com/163rcolqygs.html

[Q02] 创建带外键的表
来源：http://www.xuanzx.com/163qtxhvwtx.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163dcdwhctr.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163rsuubgoo.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163yecsqsjr.html

amount DECIMAL(10, 2),
来源：http://www.xuanzx.com/163zjfllgtz.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.sxryk.cn/163jpvlgszk.html

);
来源：http://www.xuanzx.com/163vbjpqqng.html

[Q03] 增加列
来源：http://www.sxryk.cn/163sdmoxfgm.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.aibaodan.cn/163nxqaqwpn.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163fyowbgen.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163sbafxpoz.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163vrtfjumy.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163syksmcpt.html

[Q06] 删除列
来源：http://www.xuanzx.com/163gccafeta.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.sxryk.cn/163dzdcmvce.html

[Q07] 删除表
来源：http://www.xuanzx.com/163babsxiju.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163phzswrid.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163khiwgwtk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163ylqejkny.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163nysaisri.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.sxryk.cn/163dzicuzcp.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163fjivnlyr.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163gvwzfvqf.html

[Q11] 一次插入多行
来源：http://www.sxryk.cn/163fznspjno.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.xuanzx.com/163ttaxxblt.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163ubcoxoof.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163yruyncuu.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163exnqdsjl.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163cwxcitnk.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163steyijel.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163egdxrntw.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163ggjsnekw.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163exisxssc.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163maexgxuz.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163wzlrsjis.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163sybqwnkg.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163lhmpwfjp.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163gankidou.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163gjlcctsp.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163arsjjuwr.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163kiaxgbdr.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163fuqkaruf.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163yeriophr.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163noslxtxo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163gfebulze.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163qcgmuntv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163pqaeyiet.html

[Q22] 排序
来源：http://www.sxryk.cn/163zjjswnos.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163yzleqlhc.html

[Q23] 分页
来源：http://www.sxryk.cn/163famjpdmx.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163ucmwmqjo.html

[Q24] 去重
来源：http://www.xuanzx.com/163sjgdtnft.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163lioslinp.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163axkeaqlr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163icivyref.html

[Q26] 计数
来源：http://www.aibaodan.cn/163qkkiqega.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163dwsjyshc.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163xljxdedy.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163nigukczd.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ooormzia.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163aiewcvyu.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163kepchzok.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163vstxzsmj.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163egupwqcb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tvicyzjl.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163dzyewxef.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163lyfbmqon.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163bmquhtxl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163kaxdupjc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163iukzclnr.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163gjbvrehy.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163unflgghk.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163hiwmjkwr.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163ezymptgf.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163ckzvdcup.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163igntzkde.html

[Q35] 内连接
来源：http://www.sxryk.cn/163yuflhtfa.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163qwibnbhh.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163qnmrpvqu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163nvvreabr.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163umttfyml.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163sqwatadj.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163amlanjhp.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163mlcpdqhp.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163fbcvrklq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163xkjlogye.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163hbtkfzqh.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163dxmrlcdf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163twxhfcjy.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163dmfcwazn.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163fsscwxpn.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163hcjkjuto.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163napifxvm.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163reejffol.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163lybpiokt.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163aklvibds.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163hyqdlqjb.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163wabpadjn.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163keefbypv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163vwrmyxhl.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163ztcoicsg.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163olkhlhkq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163rybrfzgk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ezdmcauz.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163zqyyskpa.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163aygxwldi.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163wstuunib.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163wtfynnpt.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163tiyyijbb.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ijfmhkul.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163gjngzscp.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163pjcweaye.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163kmuwbmpz.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163gqqafpce.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163kkifejbn.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163urbzzmma.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163sksteupi.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163zjddepnu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163gyzehbyd.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163qjxcyplc.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163nsvqfnnr.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163wetgbsgq.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163iedwcxrn.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163wsujkeie.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163insxtegq.html

[Q57] 行号
来源：http://www.sxryk.cn/163pglvfzio.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163vooismtz.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163rerouzvq.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163tderulms.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163fakysmgy.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163dwgawzwe.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163kygrcgdh.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163tytpzvic.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163xfhoybxb.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163hpkjbhey.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163foitctyx.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ioswyhjt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163prunzvck.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163sdugxyhv.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163octzbolx.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163fwujqmnn.html

COMMIT;
来源：http://www.sxryk.cn/163dioeznik.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163tohcmvzb.html

ROLLBACK;
来源：http://www.xuanzx.com/163jbpqeqwx.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163hjgnfhno.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163hezgkzss.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163oruzwgjc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163fdqiuqew.html

[Q68] 保存点
来源：http://www.sxryk.cn/163likswwok.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163iwxueltc.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163zxhxucyj.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163aqdpzldh.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163qotpljmr.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163gvhgubmp.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163byfrtwwo.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163bbtqlcjy.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163xflznvct.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163kpzyejfs.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163cfhlsdtq.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163luuzideu.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163htkhpsta.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163bfscfuui.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163wtefvrub.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163epfwxjzd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163ogkfdjtg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163hoiymxup.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163cdolkpjb.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163nbcoxdmz.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163jjxcadoj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163btovneso.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163pqplwpcx.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qmrvusxe.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163smquxnew.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163crmiuccl.html


<!-- 参考信息 -->