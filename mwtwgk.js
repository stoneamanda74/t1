外链999!wailian999！

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163smhdbcrr.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163nwhwslha.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163casvqjys.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.aibaodan.cn/163updhauyk.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163jzifopll.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.aibaodan.cn/163cnpufnym.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.sxryk.cn/163qwczxmhd.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.aibaodan.cn/163lctnnjcb.html

================================================================================
来源：http://www.xuanzx.com/163vcpzenij.html

O. 并发与异步
来源：http://www.sxryk.cn/163awtsbyzb.html

================================================================================
来源：http://www.sxryk.cn/163vupcgwbo.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163iajdnaxm.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163hhotfqoi.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.sxryk.cn/163hrmbkrnt.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.sxryk.cn/163cyqoryet.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163uiibbruj.html

Java: new Thread(() -> f()).start()
来源：http://www.aibaodan.cn/163aabxttki.html

Go:   go f()
来源：http://www.xuanzx.com/163ogrjcebc.html

Ruby: Thread.new { f }
来源：http://www.xuanzx.com/163asgfwpom.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163ycmouszb.html

[O02] 使用线程池
来源：http://www.xuanzx.com/163cauzletq.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.sxryk.cn/163pwjepjxo.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.aibaodan.cn/163aiiszbgl.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163cmwomgam.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163fibabvyo.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.sxryk.cn/163otwkacxk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.aibaodan.cn/163bnpgrtxz.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.xuanzx.com/163dsotfpya.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.sxryk.cn/163hmajvokg.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163owgwkekn.html

Py:   with lock: shared += 1
来源：http://www.sxryk.cn/163noqtpyyj.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163dkaiuakp.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.aibaodan.cn/163vtjdqazo.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163iuithvpp.html

Java: synchronized (this) { shared++; }
来源：http://www.sxryk.cn/163qeemyhdv.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.xuanzx.com/163tncxbayh.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163aijnegge.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163pbrqamuk.html

[O04] 定义异步函数并等待
来源：http://www.aibaodan.cn/163ohvzavve.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163oqmpljrf.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163olhhpllf.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163mlzjqgqk.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.sxryk.cn/163qytnbshw.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163gurxuvfc.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.xuanzx.com/163uqdunrzj.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.xuanzx.com/163dudootdl.html

C#:   async Task F() { await G(); }
来源：http://www.xuanzx.com/163yvpyygkc.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163iofaulug.html

Py:   asyncio.gather(*tasks)
来源：http://www.aibaodan.cn/163mpywtyna.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163hjpezoac.html

JS:   await Promise.all(tasks)
来源：http://www.sxryk.cn/163uzeqyfpg.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163omxarpkv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163dtuonbbh.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.xuanzx.com/163mwoafexa.html

Ruby: threads.map(&:join)
来源：http://www.aibaodan.cn/163wljrkaii.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.aibaodan.cn/163zdtpuyuo.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163dfxljknk.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.xuanzx.com/163bmevrhna.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.sxryk.cn/163jhorlhmb.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163drlbrmoo.html

TS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163beylixsh.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.sxryk.cn/163basuhbfc.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.aibaodan.cn/163jlufjdui.html

Ruby: // fork 块
来源：http://www.xuanzx.com/163btopbhxk.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163edyvcznd.html

================================================================================
来源：http://www.aibaodan.cn/163qpcvsmks.html

P. 常用工具函数
来源：http://www.xuanzx.com/163xcwdhljs.html

================================================================================
来源：http://www.sxryk.cn/163elylnolu.html

[P01] 生成 UUID
来源：http://www.aibaodan.cn/163bxryyjqz.html

Py:   str(uuid.uuid4())
来源：http://www.xuanzx.com/163wzqjahfr.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.sxryk.cn/163rktbzoug.html

JS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163qyrzevft.html

TS:   crypto.randomUUID()
来源：http://www.xuanzx.com/163vbcdyvxc.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163kydwqfpr.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163vvbwpcbn.html

Ruby: SecureRandom.uuid
来源：http://www.xuanzx.com/163shbgrcgf.html

C#:   Guid.NewGuid().ToString()
来源：http://www.sxryk.cn/163dlfvqads.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163ozmalijb.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.aibaodan.cn/163miblegjm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163xeuxotga.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.sxryk.cn/163icdkwzhq.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.sxryk.cn/163mucciawk.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.xuanzx.com/163ndnvtidw.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.aibaodan.cn/163varfesrh.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.sxryk.cn/163dcxdrzau.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.aibaodan.cn/163wjftkkgb.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163trvsymil.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.xuanzx.com/163svoxlxrh.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.aibaodan.cn/163aieeuuka.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163owkcwywd.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163oememiqq.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.xuanzx.com/163ujpfznpp.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163zkdghryq.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.xuanzx.com/163rnapzopg.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.aibaodan.cn/163iiadfgob.html

[P04] 求长度
来源：http://www.sxryk.cn/163eilgeaku.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.aibaodan.cn/163xdcgpxxy.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163ckzfqyim.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163yblepbnt.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.aibaodan.cn/163wczitpat.html

Java: list.size();  map.size();  s.length()
来源：http://www.xuanzx.com/163xvxhsdif.html

Go:   len(arr);  len(m)
来源：http://www.sxryk.cn/163oilscyld.html

Ruby: x.length;  x.size
来源：http://www.aibaodan.cn/163nwhobxzp.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.xuanzx.com/163pgkzfwiu.html

[P05] 判断两个对象内容是否相等
来源：http://www.xuanzx.com/163imewkhjl.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163slurkycc.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.xuanzx.com/163rjigmiwa.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.sxryk.cn/163tsbtfjhs.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.xuanzx.com/163nkvemzib.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.sxryk.cn/163cbabhxli.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.aibaodan.cn/163khyyrssy.html

Ruby: a == b
来源：http://www.sxryk.cn/163xwgpotup.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.xuanzx.com/163loaltcoz.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.xuanzx.com/163sexclsuw.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.sxryk.cn/163whsbdads.html

PHP:  if (empty($x)) {}
来源：http://www.aibaodan.cn/163vqpxjbaf.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163pxfoldpo.html

TS:   if (x == null) {}
来源：http://www.sxryk.cn/163fqakxjtp.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163ddgdzlcv.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163eofcgtcz.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.aibaodan.cn/163fszhvakt.html

C#:   if (x is null) {}
来源：http://www.sxryk.cn/163xdapboux.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163oicsczhp.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.aibaodan.cn/163vkqisjlb.html

PHP:  // 手写时间戳比较
来源：http://www.xuanzx.com/163iroyxqhm.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163dbhvwyhc.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163czrczngg.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163lpcbqmrr.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.aibaodan.cn/163uysamsiq.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.xuanzx.com/163rhqxxovq.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.sxryk.cn/163phubvjqy.html

[P08] 处理浮点精度问题
来源：http://www.xuanzx.com/163bcbzcdgm.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.sxryk.cn/163memwbvkg.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163ylcpbguc.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.sxryk.cn/163bxmnwfka.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163wqsrupqe.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.aibaodan.cn/163dupssaxd.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.xuanzx.com/163dmcdnltm.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.aibaodan.cn/163xykagvrx.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.aibaodan.cn/163uppsukpu.html

================================================================================
来源：http://www.aibaodan.cn/163pbwzokzn.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163enuvmpai.html

================================================================================
来源：http://www.sxryk.cn/163kerfoaah.html

[Q01] 创建表
来源：http://www.sxryk.cn/163fwdrgmca.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163dogcjqcm.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163tmzgmkmi.html

name VARCHAR(50) NOT NULL,
来源：http://www.aibaodan.cn/163ogherwmy.html

email VARCHAR(100) UNIQUE,
来源：http://www.sxryk.cn/163txinijxa.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.sxryk.cn/163cieqmevf.html

);
来源：http://www.xuanzx.com/163eqgraixy.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163qtzpqnwe.html

CREATE TABLE orders (
来源：http://www.xuanzx.com/163dukbgouw.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.xuanzx.com/163njxpfpak.html

user_id INT NOT NULL,
来源：http://www.xuanzx.com/163vocffjju.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163zrgzrxmp.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.xuanzx.com/163xfdjytyb.html

);
来源：http://www.xuanzx.com/163jirdrapd.html

[Q03] 增加列
来源：http://www.aibaodan.cn/163dnnapmfw.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.sxryk.cn/163gcwuttzh.html

[Q04] 修改列类型
来源：http://www.xuanzx.com/163gxermvxf.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.sxryk.cn/163gnxzkvbo.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163xpsqyalf.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.xuanzx.com/163hggdnllo.html

[Q06] 删除列
来源：http://www.xuanzx.com/163wmlyohvf.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163ljoeenki.html

[Q07] 删除表
来源：http://www.xuanzx.com/163stkmvtbi.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163ekprgqsc.html

[Q08] 创建普通索引
来源：http://www.aibaodan.cn/163dnqfytbk.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163buidtqbt.html

[Q09] 创建唯一索引
来源：http://www.aibaodan.cn/163jogweuav.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163zizbbqzd.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163skeathnh.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.sxryk.cn/163uqvwrqpt.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163zlyfkbko.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.aibaodan.cn/163bnbuzlsd.html

[Q12] 插入后取自增 ID
来源：http://www.aibaodan.cn/163dfgwskke.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.sxryk.cn/163bgrhwpzt.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.aibaodan.cn/163izetnbcf.html

[Q13] 忽略重复插入
来源：http://www.aibaodan.cn/163zubptjpb.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163gbzsfsqi.html

[Q14] 存在则更新（upsert）
来源：http://www.xuanzx.com/163zzrhpgtm.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163dktpdkln.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163maxdhzjn.html

[Q15] 查询全部
来源：http://www.sxryk.cn/163kokbrybs.html

SELECT * FROM users;
来源：http://www.aibaodan.cn/163quurgfun.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163knvchfya.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163nsqttjny.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163kwwcgbut.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163uovsoekk.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163jjogvchd.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163euqdbpju.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163uquhilxq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163udohweru.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163qbpfcjfa.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163tielhaix.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163ujupnisi.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163ljhhuvid.html

[Q22] 排序
来源：http://www.xuanzx.com/163neudmdfr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163vojzhijf.html

[Q23] 分页
来源：http://www.sxryk.cn/163owrvuwoo.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163gymmtaoy.html

[Q24] 去重
来源：http://www.sxryk.cn/163mlclujxp.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163qwvqvbjt.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163zhhdaerg.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163vlaehyjl.html

[Q26] 计数
来源：http://www.aibaodan.cn/163jbavdxnb.html

SELECT COUNT(*) FROM users;
来源：http://www.sxryk.cn/163xjkkwidm.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163mptfesds.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163ksmexmly.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163livivjmu.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163tnwhhiae.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163wsipsejg.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163patidbdh.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163dzxgsnkk.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ciibhdmb.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163xnumenrp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163sspjojtg.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163zgaveecj.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163llsjljup.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ktreyemn.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163gfkenygx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163steihfre.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163wszuhtjx.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163oeidvfqm.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163cxepaqbi.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163xpgnqafe.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163jdzxmiar.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163zetqcgiv.html

[Q36] 左连接
来源：http://www.sxryk.cn/163shbbnlig.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163bypdpzkm.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ufyaanwu.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163nsbvrnwg.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163eghdyuby.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163gtqzsjwe.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163noobnuqd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163wcxtpttz.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163cqtdbqwm.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163dyymkzsy.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163qwojmvis.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163pawfitjv.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163hbtibgwo.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163qetyhlov.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163mgwnxvfc.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163wkdyfdfm.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163qndfuozl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ksgcdzmg.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163fwibxivz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163jmlrkfoc.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163jsfdbvqw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163lfsrkyjf.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163kzldbxol.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ktgfogkm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163ovwxmhtr.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163nkgilcrc.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163oqenhmss.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163hlckpzqp.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163urisvmsy.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163plgizicw.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163xdqhhpxo.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163wfalspft.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163eqfrydjo.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163vidnqufh.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163lcztixfl.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163yxtneril.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163mwybztla.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163xwlevcdn.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163qvvbvqew.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163hdezpcxb.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163pkdnurnf.html

[Q54] 清空表
来源：http://www.sxryk.cn/163aymznvyn.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163svarmjnc.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163zvedkxre.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163zlcmscfg.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163mrmpobzh.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163jkcsoljo.html

[Q57] 行号
来源：http://www.aibaodan.cn/163qpwgchjr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163cehiqirk.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163aomstroc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163kthijjpr.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163oaipzyaf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163yypcjzjf.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163nuyuzgdj.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163klctcebc.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163ohvalrwg.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163zofcxzxr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163hdbzdhpr.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163licwwumc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163kkydfcnd.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163bbktqcqw.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163rkrydrsr.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163mzubwgnf.html

COMMIT;
来源：http://www.aibaodan.cn/163mikqfeog.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ppptdrdi.html

ROLLBACK;
来源：http://www.xuanzx.com/163rfgfcfad.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163aaylgpcw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163povipcvh.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163ckpivodl.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ddialemm.html

[Q68] 保存点
来源：http://www.sxryk.cn/163nlvvqqgy.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163siqtgaim.html


<!-- 参考信息 -->