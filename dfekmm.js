外链999!wailian999！

PHP:  // 递归实现，或用 usort
来源：http://www.aibaodan.cn/163sdldzgvp.html

JS:   const qs = a => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.aibaodan.cn/163rxzachsx.html

TS:   const qs = (a: number[]): number[] => a.length <= 1 ? a : [...qs(a.slice(1).filter(x => x < a[0])), a[0], ...qs(a.slice(1).filter(x => x >= a[0]))];
来源：http://www.sxryk.cn/163fsqlwazn.html

Java: // 手写递归，或直接用 Arrays.sort
来源：http://www.sxryk.cn/163kccopfvn.html

Go:   slices.Sort(arr)      // 手写快排需递归实现
来源：http://www.aibaodan.cn/163uygbyqqo.html

Ruby: def qs(a) = a.size <= 1 ? a : qs(a[1..].select { |x| x < a[0] }) + [a[0]] + qs(a[1..].select { |x| x >= a[0] })
来源：http://www.aibaodan.cn/163smqxeuft.html

C#:   // 手写递归，或 Array.Sort
来源：http://www.aibaodan.cn/163bpmexmwn.html

[N04] 斐波那契数列
来源：http://www.sxryk.cn/163bnlrugju.html

Py:   def fib(n): return n if n < 2 else fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163fvdprdqx.html

PHP:  function fib($n) { return $n < 2 ? $n : fib($n - 1) + fib($n - 2); }
来源：http://www.xuanzx.com/163vbcjnjvs.html

JS:   const fib = n => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163shvkkjgz.html

TS:   const fib = (n: number): number => n < 2 ? n : fib(n - 1) + fib(n - 2);
来源：http://www.sxryk.cn/163fltfkihl.html

Java: static int fib(int n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); }
来源：http://www.aibaodan.cn/163jajxsfin.html

Go:   func fib(n int) int { if n < 2 { return n }; return fib(n-1) + fib(n-2) }
来源：http://www.aibaodan.cn/163qsamdivk.html

Ruby: def fib(n) = n < 2 ? n : fib(n - 1) + fib(n - 2)
来源：http://www.aibaodan.cn/163wgwinqsl.html

C#:   static int Fib(int n) => n < 2 ? n : Fib(n - 1) + Fib(n - 2);
来源：http://www.xuanzx.com/163xjgfeotq.html

[N05] 最大公约数
来源：http://www.sxryk.cn/163nqngyxaz.html

Py:   math.gcd(a, b)
来源：http://www.xuanzx.com/163kzegrmuu.html

PHP:  // 手写：while ($b) { [$a, $b] = [$b, $a % $b]; }
来源：http://www.sxryk.cn/163jwzowzva.html

JS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163vuegzwih.html

TS:   // 手写：while (b) { [a, b] = [b, a % b]; }
来源：http://www.xuanzx.com/163usytvaiw.html

Java: BigInteger.valueOf(a).gcd(BigInteger.valueOf(b))
来源：http://www.sxryk.cn/163amvqzjux.html

Go:   // 手写：for b != 0 { a, b = b, a%b }
来源：http://www.aibaodan.cn/163acmcvada.html

Ruby: a.gcd(b)
来源：http://www.aibaodan.cn/163kfnchnmv.html

C#:   // 手写：while (b != 0) { (a, b) = (b, a % b); }
来源：http://www.xuanzx.com/163zqdtmlnq.html

[N06] 判断回文字符串
来源：http://www.sxryk.cn/163eqozeoza.html

Py:   s == s[::-1]
来源：http://www.sxryk.cn/163tvuqgndm.html

PHP:  $s === strrev($s);
来源：http://www.aibaodan.cn/163iudheprm.html

JS:   s === [...s].reverse().join("")
来源：http://www.aibaodan.cn/163onwgvnaf.html

TS:   s === [...s].reverse().join("")
来源：http://www.xuanzx.com/163cahpshmf.html

Java: s.equals(new StringBuilder(s).reverse().toString())
来源：http://www.sxryk.cn/163orngbrys.html

Go:   // 双指针从两端比较
来源：http://www.sxryk.cn/163fileginq.html

Ruby: s == s.reverse
来源：http://www.sxryk.cn/163kcmuilds.html

C#:   s == new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163lcbruavg.html

[N07] 两数之和（返回下标）
来源：http://www.sxryk.cn/163dogszbgc.html

Py:   idx = {v: i for i, v in enumerate(nums)}      # 再逐个查 target - v 是否在表内
来源：http://www.xuanzx.com/163vmscjmfb.html

PHP:  // 手写哈希表：$map[$v] = $i
来源：http://www.aibaodan.cn/163vlqjwdqx.html

JS:   // 手写 Map：map.set(v, i)
来源：http://www.sxryk.cn/163dxrivloe.html

TS:   // 手写 Map<string, number>
来源：http://www.sxryk.cn/163hdtfglyh.html

Java: // 手写 HashMap
来源：http://www.aibaodan.cn/163gvxzasus.html

Go:   // 手写 map[int]int
来源：http://www.sxryk.cn/163chppxpbx.html

Ruby: // 手写 Hash
来源：http://www.xuanzx.com/163gemuijcm.html

C#:   // 手写 Dictionary<int, int>
来源：http://www.sxryk.cn/163urzltuwg.html

[N08] 生成全排列
来源：http://www.aibaodan.cn/163ouwcvjgf.html

Py:   itertools.permutations(arr)
来源：http://www.aibaodan.cn/163lhauwwnw.html

PHP:  // 手写递归交换
来源：http://www.xuanzx.com/163osptxmtu.html

JS:   // 手写回溯递归
来源：http://www.sxryk.cn/163ptlvrsms.html

TS:   // 手写回溯递归
来源：http://www.sxryk.cn/163mgmybqso.html

Java: // 手写回溯递归
来源：http://www.sxryk.cn/163ivsoazdl.html

Go:   // 手写回溯递归
来源：http://www.aibaodan.cn/163utzpdehe.html

Ruby: arr.permutation.to_a
来源：http://www.aibaodan.cn/163nzmlzqki.html

C#:   // 手写回溯递归
来源：http://www.sxryk.cn/163ogfrchcy.html

[N09] 栈与队列
来源：http://www.sxryk.cn/163vstgnhpf.html

Py:   stack.append(x) / stack.pop()；deque.popleft() 作队列
来源：http://www.sxryk.cn/163fmqwzjwz.html

PHP:  array_push/array_pop 作栈；array_shift 作队列
来源：http://www.sxryk.cn/163lfydksaw.html

JS:   arr.push(x) / arr.pop() 作栈；arr.push / arr.shift 作队列
来源：http://www.xuanzx.com/163ekcyqdgl.html

TS:   arr.push(x) / arr.pop() 作栈
来源：http://www.sxryk.cn/163wslztgxa.html

Java: new ArrayDeque<>() 同时支持栈与队列
来源：http://www.sxryk.cn/163irxdreau.html

Go:   append(s, x) 与 s[len(s)-1] 出栈
来源：http://www.aibaodan.cn/163femfnjyv.html

Ruby: arr.push / arr.pop 作栈；arr.shift 作队列
来源：http://www.sxryk.cn/163muqbkdth.html

C#:   new Stack<T>() 与 new Queue<T>()
来源：http://www.aibaodan.cn/163dvezwhev.html

[N10] 链表节点定义
来源：http://www.aibaodan.cn/163eczojaax.html

Py:   class Node:⏎    def __init__(self, v, nxt=None): self.v, self.next = v, nxt
来源：http://www.sxryk.cn/163pfnrenhw.html

PHP:  class Node { public $v; public $next = null; }
来源：http://www.xuanzx.com/163poiciyfg.html

JS:   class Node { constructor(v) { this.v = v; this.next = null; } }
来源：http://www.aibaodan.cn/163magwvmhp.html

TS:   class Node { constructor(public v: number, public next: Node | null = null) {} }
来源：http://www.sxryk.cn/163timyrurr.html

Java: class Node { int v; Node next; }
来源：http://www.aibaodan.cn/163faecuogk.html

Go:   type Node struct { V int; Next *Node }
来源：http://www.sxryk.cn/163jsmgvxos.html

Ruby: Node = Struct.new(:v, :next)
来源：http://www.xuanzx.com/163fntuqbvm.html

C#:   class Node { public int V; public Node? Next; }
来源：http://www.sxryk.cn/163dnwbjvhv.html

[N11] 二叉树中序遍历
来源：http://www.aibaodan.cn/163uxwjlcsj.html

Py:   def inorder(n): return inorder(n.left) + [n.val] + inorder(n.right) if n else []
来源：http://www.aibaodan.cn/163bexyygzx.html

PHP:  // 手写递归函数
来源：http://www.aibaodan.cn/163eamhiqmv.html

JS:   const inorder = n => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163tbshhwcb.html

TS:   const inorder = (n: T | null): number[] => n ? [...inorder(n.left), n.val, ...inorder(n.right)] : [];
来源：http://www.aibaodan.cn/163cmmqqyvu.html

Java: // 手写递归
来源：http://www.xuanzx.com/163rtqcimld.html

Go:   // 手写递归
来源：http://www.aibaodan.cn/163latdnaal.html

Ruby: def inorder(n) = n ? inorder(n.left) + [n.val] + inorder(n.right) : []
来源：http://www.xuanzx.com/163gvgcrxmv.html

C#:   // 手写递归
来源：http://www.xuanzx.com/163ffbqtgyz.html

[N12] 动态规划：爬楼梯（每次 1 或 2 级）
来源：http://www.aibaodan.cn/163inrcslef.html

Py:   from functools import reduce;  climb = lambda n: reduce(lambda p, _: (p[1], p[0] + p[1]), range(n), (1, 1))[0]
来源：http://www.sxryk.cn/163cnzycfrx.html

PHP:  // 递推：$a=1;$b=1;for(...){[$a,$b]=[$b,$a+$b];}
来源：http://www.xuanzx.com/163xmefqzod.html

JS:   // 递推：let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.xuanzx.com/163ynqclkvt.html

TS:   let [a, b] = [1, 1]; for (let i = 0; i < n; i++) [a, b] = [b, a + b];
来源：http://www.sxryk.cn/163tqwdjpdd.html

Java: // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163sdlrkzwn.html

Go:   // 递推：a, b := 1, 1; for i := 0; i < n; i++ { a, b = b, a+b }
来源：http://www.sxryk.cn/163qvbrevyy.html

Ruby: a, b = 1, 1;  n.times { a, b = b, a + b }
来源：http://www.xuanzx.com/163yefdlmbm.html

C#:   // 递推：int a = 1, b = 1; 循环更新
来源：http://www.xuanzx.com/163nxnvfwyk.html

================================================================================
来源：http://www.sxryk.cn/163ixcclcol.html

O. 并发与异步
来源：http://www.xuanzx.com/163qwgcppuq.html

================================================================================
来源：http://www.xuanzx.com/163irkziolx.html

[O01] 启动一个线程
来源：http://www.sxryk.cn/163ivxsdyll.html

Py:   threading.Thread(target=f, args=(1,)).start()
来源：http://www.xuanzx.com/163ebzdipee.html

PHP:  // 无原生线程：用 pcntl_fork 或消息队列
来源：http://www.xuanzx.com/163ubddmvwa.html

JS:   // 单线程事件循环：CPU 密集用 worker_threads
来源：http://www.aibaodan.cn/163lpwedltf.html

TS:   // 同 JS
来源：http://www.sxryk.cn/163qjenlitt.html

Java: new Thread(() -> f()).start()
来源：http://www.xuanzx.com/163fvvyglpj.html

Go:   go f()
来源：http://www.aibaodan.cn/163fgcfbzsw.html

Ruby: Thread.new { f }
来源：http://www.sxryk.cn/163skcpjblp.html

C#:   Task.Run(() => F());
来源：http://www.aibaodan.cn/163pfbrulez.html

[O02] 使用线程池
来源：http://www.aibaodan.cn/163auvckuyk.html

Py:   concurrent.futures.ThreadPoolExecutor(max_workers=4)
来源：http://www.aibaodan.cn/163qkjrxkhh.html

PHP:  // 用 Swoole / ReactPHP 等扩展实现
来源：http://www.sxryk.cn/163lzwoieup.html

JS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163ucgniqsy.html

TS:   // worker_threads 线程池
来源：http://www.xuanzx.com/163nhimowsa.html

Java: Executors.newFixedThreadPool(4)
来源：http://www.aibaodan.cn/163mjwjytfk.html

Go:   // 协程轻量，无需池；限并发用带缓冲 channel 当信号量
来源：http://www.sxryk.cn/163ccfzlftp.html

Ruby: // 用 concurrent-ruby 的 ThreadPool
来源：http://www.aibaodan.cn/163rneemrmz.html

C#:   Task.WhenAll(...)  或 Parallel.ForEach
来源：http://www.xuanzx.com/163ensdswsy.html

[O03] 加锁保护共享数据
来源：http://www.xuanzx.com/163jfhgdjnf.html

Py:   with lock: shared += 1
来源：http://www.aibaodan.cn/163mjplvzyn.html

PHP:  // 用 flock() 做文件锁
来源：http://www.xuanzx.com/163phwhhwis.html

JS:   // 单线程无需锁；跨线程共享内存用 Atomics
来源：http://www.xuanzx.com/163lwoamrvr.html

TS:   // 同 JS
来源：http://www.xuanzx.com/163iabinpsq.html

Java: synchronized (this) { shared++; }
来源：http://www.xuanzx.com/163bjfdtigj.html

Go:   mu.Lock();  defer mu.Unlock()
来源：http://www.aibaodan.cn/163gcgsznjr.html

Ruby: mutex.synchronize { shared += 1 }
来源：http://www.xuanzx.com/163kmcbtztr.html

C#:   lock (gate) { shared++; }
来源：http://www.sxryk.cn/163ljjwlizl.html

[O04] 定义异步函数并等待
来源：http://www.sxryk.cn/163ewkrfdez.html

Py:   async def f():⏎    await g()
来源：http://www.sxryk.cn/163qutoerra.html

PHP:  // 无原生 async：用 Fiber 或 Swoole
来源：http://www.xuanzx.com/163qiwlodpc.html

JS:   async function f() { await g(); }
来源：http://www.sxryk.cn/163oehysitu.html

TS:   async function f(): Promise<void> { await g(); }
来源：http://www.aibaodan.cn/163vausanol.html

Java: // 用 CompletableFuture 或虚拟线程
来源：http://www.aibaodan.cn/163lwnjfgrf.html

Go:   // 无 async 关键字：直接 go 调用，用 channel 收结果
来源：http://www.sxryk.cn/163nfxcride.html

Ruby: # 用 Fiber 或 async gem
来源：http://www.aibaodan.cn/163mboevegx.html

C#:   async Task F() { await G(); }
来源：http://www.sxryk.cn/163qdomgwlm.html

[O05] 并发执行并等待全部完成
来源：http://www.xuanzx.com/163smjglbog.html

Py:   asyncio.gather(*tasks)
来源：http://www.sxryk.cn/163igxwvqqf.html

PHP:  // curl_multi 或 Amp 的 Promise\all
来源：http://www.sxryk.cn/163uetxqgkb.html

JS:   await Promise.all(tasks)
来源：http://www.aibaodan.cn/163vzoqzirw.html

TS:   await Promise.all(tasks)
来源：http://www.xuanzx.com/163ovimlxlv.html

Java: CompletableFuture.allOf(f1, f2).join()
来源：http://www.aibaodan.cn/163vnqxjtqv.html

Go:   sync.WaitGroup 或 errgroup.Wait()
来源：http://www.aibaodan.cn/163tjpsaibc.html

Ruby: threads.map(&:join)
来源：http://www.sxryk.cn/163isdxkimv.html

C#:   await Task.WhenAll(t1, t2)
来源：http://www.xuanzx.com/163qsldahms.html

[O06] 使用进程池
来源：http://www.xuanzx.com/163fplbyvop.html

Py:   concurrent.futures.ProcessPoolExecutor()
来源：http://www.sxryk.cn/163gqwymuns.html

PHP:  // pcntl_fork 或多进程队列
来源：http://www.aibaodan.cn/163fkhzrwor.html

JS:   // child_process / cluster 模块
来源：http://www.xuanzx.com/163yrdibslu.html

TS:   // child_process / cluster 模块
来源：http://www.aibaodan.cn/163nvqdhema.html

Java: // ForkJoinPool 或 ProcessBuilder
来源：http://www.xuanzx.com/163dyzexnww.html

Go:   // goroutine 已占用多核，直接并发即可
来源：http://www.sxryk.cn/163pgxtmxhi.html

Ruby: // fork 块
来源：http://www.sxryk.cn/163ajmojxvb.html

C#:   Parallel.For
来源：http://www.xuanzx.com/163edlzcvvl.html

================================================================================
来源：http://www.aibaodan.cn/163hpswkqzb.html

P. 常用工具函数
来源：http://www.sxryk.cn/163eqakhcfi.html

================================================================================
来源：http://www.aibaodan.cn/163rtobqoib.html

[P01] 生成 UUID
来源：http://www.xuanzx.com/163nrsqsykm.html

Py:   str(uuid.uuid4())
来源：http://www.sxryk.cn/163sijaapcy.html

PHP:  bin2hex(random_bytes(16));        // 或 ramsey/uuid
来源：http://www.xuanzx.com/163kqfawvnt.html

JS:   crypto.randomUUID()
来源：http://www.sxryk.cn/163ftbnureb.html

TS:   crypto.randomUUID()
来源：http://www.aibaodan.cn/163gfzgsxat.html

Java: UUID.randomUUID().toString()
来源：http://www.sxryk.cn/163ksuhixww.html

Go:   // 用 github.com/google/uuid
来源：http://www.xuanzx.com/163ijcrqlvl.html

Ruby: SecureRandom.uuid
来源：http://www.sxryk.cn/163gprsctgs.html

C#:   Guid.NewGuid().ToString()
来源：http://www.aibaodan.cn/163hqgegcbt.html

[P02] MD5 / SHA256 摘要
来源：http://www.sxryk.cn/163xyzsopay.html

Py:   hashlib.sha256(b).hexdigest();  hashlib.md5(b).hexdigest()
来源：http://www.sxryk.cn/163jlpqblpm.html

PHP:  hash("sha256", $s);  md5($s);
来源：http://www.aibaodan.cn/163vmmkqbeg.html

JS:   crypto.createHash("sha256").update(s).digest("hex")     // Node
来源：http://www.xuanzx.com/163jftiomla.html

TS:   crypto.createHash("sha256").update(s).digest("hex")
来源：http://www.aibaodan.cn/163dwnxrwce.html

Java: MessageDigest.getInstance("SHA-256").digest(bytes)
来源：http://www.sxryk.cn/163jsdissiv.html

Go:   fmt.Sprintf("%x", sha256.Sum256([]byte(s)))
来源：http://www.xuanzx.com/163zqzruxbx.html

Ruby: Digest::SHA256.hexdigest(s)
来源：http://www.aibaodan.cn/163znqxxwtw.html

C#:   Convert.ToHexString(SHA256.HashData(bytes))
来源：http://www.xuanzx.com/163gubjgabl.html

[P03] 生成短随机字符串
来源：http://www.aibaodan.cn/163hakhqgls.html

Py:   "".join(random.choices(string.ascii_letters + string.digits, k=16))
来源：http://www.sxryk.cn/163pfzpuxcg.html

PHP:  substr(str_shuffle(str_repeat("abcdefghijklmnopqrstuvwxyz0123456789", 2)), 0, 16);
来源：http://www.sxryk.cn/163ekltlczi.html

JS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.aibaodan.cn/163ysxdlllp.html

TS:   [...crypto.getRandomValues(new Uint8Array(16))].map(b => (b % 36).toString(36)).join("")
来源：http://www.xuanzx.com/163yotdldzz.html

Java: new BigInteger(130, new SecureRandom()).toString(36).substring(0, 16)
来源：http://www.aibaodan.cn/163lnrbrlix.html

Go:   // crypto/rand 生成随机字节后 base64 或 hex 编码
来源：http://www.aibaodan.cn/163ifofixcz.html

Ruby: SecureRandom.alphanumeric(16)
来源：http://www.aibaodan.cn/163kpudmkbw.html

C#:   RandomNumberGenerator.GetHexString(16)     // .NET 8+
来源：http://www.xuanzx.com/163nackyndb.html

[P04] 求长度
来源：http://www.xuanzx.com/163yuraltqo.html

Py:   len(x)            # 字符串、列表、字典通用
来源：http://www.sxryk.cn/163ahoiuwnx.html

PHP:  count($arr);  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163hakxsjba.html

JS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163lxjegzpu.html

TS:   Array.isArray(x) ? x.length : Object.keys(x).length
来源：http://www.xuanzx.com/163ninbqidt.html

Java: list.size();  map.size();  s.length()
来源：http://www.sxryk.cn/163vqcksykx.html

Go:   len(arr);  len(m)
来源：http://www.aibaodan.cn/163sjttmbra.html

Ruby: x.length;  x.size
来源：http://www.sxryk.cn/163nvehjlcy.html

C#:   list.Count;  dict.Count;  s.Length
来源：http://www.sxryk.cn/163myqvwwxp.html

[P05] 判断两个对象内容是否相等
来源：http://www.aibaodan.cn/163dtrevwim.html

Py:   a == b              # 列表与字典递归比较内容
来源：http://www.sxryk.cn/163dghbcfjh.html

PHP:  $a == $b            // 值比较；$a === $b 要求顺序与类型一致
来源：http://www.aibaodan.cn/163ckjerffv.html

JS:   JSON.stringify(a) === JSON.stringify(b)   // 简单场景；复杂用深比较库
来源：http://www.aibaodan.cn/163igjmgtnt.html

TS:   JSON.stringify(a) === JSON.stringify(b)
来源：http://www.aibaodan.cn/163indzfcze.html

Java: a.equals(b)         // 需正确实现 equals；数组用 Arrays.equals
来源：http://www.xuanzx.com/163vzhsutoo.html

Go:   reflect.DeepEqual(a, b)
来源：http://www.sxryk.cn/163cqxhcxrp.html

Ruby: a == b
来源：http://www.xuanzx.com/163fodnlutj.html

C#:   Equals(a, b)  或 StructuralComparisons
来源：http://www.aibaodan.cn/163ejhtwpqh.html

[P06] 综合判空（null / 空串 / 空集合）
来源：http://www.sxryk.cn/163pbggnria.html

Py:   if not x:           # None、""、[]、{}、0 均为假
来源：http://www.xuanzx.com/163qlnvmjgx.html

PHP:  if (empty($x)) {}
来源：http://www.xuanzx.com/163gjxttnml.html

JS:   if (x == null) {}    // 同时覆盖 null 与 undefined
来源：http://www.xuanzx.com/163bkluyjas.html

TS:   if (x == null) {}
来源：http://www.xuanzx.com/163xjfagdck.html

Java: if (x == null || x.isEmpty()) {}
来源：http://www.xuanzx.com/163gyyyeaup.html

Go:   if x == nil {}
来源：http://www.aibaodan.cn/163dlhkindn.html

Ruby: if x.nil? || (x.respond_to?(:empty?) && x.empty?)
来源：http://www.sxryk.cn/163guhoyfms.html

C#:   if (x is null) {}
来源：http://www.xuanzx.com/163fztnhoyw.html

[P07] 防抖与节流
来源：http://www.sxryk.cn/163mbgfgzee.html

Py:   # 用装饰器 + threading.Timer 实现；或 functools.lru_cache 做缓存
来源：http://www.xuanzx.com/163gubcvfrx.html

PHP:  // 手写时间戳比较
来源：http://www.sxryk.cn/163kwczdfik.html

JS:   const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ezhkmalx.html

TS:   const debounce = <A extends unknown[]>(fn: (...a: A) => void, ms: number) => { let t: ReturnType<typeof setTimeout>; return (...a: A) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
来源：http://www.aibaodan.cn/163ffgrjamj.html

Java: long last = 0;  if (now - last > ms) { last = now; run(); }
来源：http://www.xuanzx.com/163avntstgt.html

Go:   time.AfterFunc 实现，或用带缓冲 channel 丢弃
来源：http://www.xuanzx.com/163kjdanlnp.html

Ruby: // 手写闭包 + Time.now 判断
来源：http://www.sxryk.cn/163yqnhgwtv.html

C#:   // 用 System.Timers.Timer 重置实现
来源：http://www.xuanzx.com/163wogxxqqu.html

[P08] 处理浮点精度问题
来源：http://www.aibaodan.cn/163tixkycnf.html

Py:   Decimal("0.1") + Decimal("0.2");  round(0.1 + 0.2, 10)
来源：http://www.xuanzx.com/163wmraarui.html

PHP:  bcadd("0.1", "0.2", 2);
来源：http://www.aibaodan.cn/163kjrjrgfb.html

JS:   (0.1 + 0.2).toFixed(2);  Math.round((0.1 + 0.2) * 100) / 100
来源：http://www.aibaodan.cn/163aeyjfjkj.html

TS:   (0.1 + 0.2).toFixed(2)
来源：http://www.xuanzx.com/163yptwnkdk.html

Java: BigDecimal.valueOf(0.1).add(BigDecimal.valueOf(0.2))
来源：http://www.xuanzx.com/163ecbmuejq.html

Go:   math/big.Float，或全部换算成整数分再算
来源：http://www.aibaodan.cn/163klntzvrv.html

Ruby: BigDecimal("0.1") + BigDecimal("0.2")
来源：http://www.sxryk.cn/163kntrytpk.html

C#:   decimal d = 0.1m + 0.2m;      // decimal 为精确十进制
来源：http://www.sxryk.cn/163fozkvnvp.html

================================================================================
来源：http://www.xuanzx.com/163btuluxui.html

Q. SQL 专题（以 MySQL 8 为主，附 PostgreSQL 差异）
来源：http://www.aibaodan.cn/163xaoccydn.html

================================================================================
来源：http://www.aibaodan.cn/163avltsujt.html

[Q01] 创建表
来源：http://www.aibaodan.cn/163bjmaztzs.html

CREATE TABLE users (
来源：http://www.aibaodan.cn/163bypntuya.html

id INT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.sxryk.cn/163ejtuptfu.html

name VARCHAR(50) NOT NULL,
来源：http://www.sxryk.cn/163aqjiphyb.html

email VARCHAR(100) UNIQUE,
来源：http://www.xuanzx.com/163qxcweyhd.html

created_at DATETIME DEFAULT CURRENT_TIMESTAMP
来源：http://www.aibaodan.cn/163sktlykvb.html

);
来源：http://www.aibaodan.cn/163mgcgpavc.html

[Q02] 创建带外键的表
来源：http://www.sxryk.cn/163nisdywmi.html

CREATE TABLE orders (
来源：http://www.sxryk.cn/163jbubuhli.html

id BIGINT PRIMARY KEY AUTO_INCREMENT,
来源：http://www.aibaodan.cn/163sxbadoyo.html

user_id INT NOT NULL,
来源：http://www.sxryk.cn/163gejgysip.html

amount DECIMAL(10, 2),
来源：http://www.sxryk.cn/163mjcgcwxo.html

FOREIGN KEY (user_id) REFERENCES users(id)
来源：http://www.aibaodan.cn/163aeeuepwg.html

);
来源：http://www.aibaodan.cn/163ohwqkxee.html

[Q03] 增加列
来源：http://www.xuanzx.com/163kifylntn.html

ALTER TABLE users ADD COLUMN age INT DEFAULT 0;
来源：http://www.xuanzx.com/163wipvahxy.html

[Q04] 修改列类型
来源：http://www.aibaodan.cn/163jvfqxmkt.html

ALTER TABLE users MODIFY COLUMN name VARCHAR(100) NOT NULL;
来源：http://www.aibaodan.cn/163xzufbyfx.html

[Q05] 重命名列
来源：http://www.xuanzx.com/163qwufdmal.html

ALTER TABLE users RENAME COLUMN name TO full_name;
来源：http://www.sxryk.cn/163ekqbbqms.html

[Q06] 删除列
来源：http://www.sxryk.cn/163cryjqeow.html

ALTER TABLE users DROP COLUMN age;
来源：http://www.xuanzx.com/163mkrdnkza.html

[Q07] 删除表
来源：http://www.aibaodan.cn/163etzjugis.html

DROP TABLE IF EXISTS orders;
来源：http://www.sxryk.cn/163rrtqeiza.html

[Q08] 创建普通索引
来源：http://www.xuanzx.com/163rkfzekgm.html

CREATE INDEX idx_users_email ON users(email);
来源：http://www.aibaodan.cn/163dkjwbggf.html

[Q09] 创建唯一索引
来源：http://www.sxryk.cn/163iwnwysoq.html

CREATE UNIQUE INDEX uq_users_email ON users(email);
来源：http://www.aibaodan.cn/163hiqwtirs.html

[Q10] 插入单行
来源：http://www.aibaodan.cn/163qkmsslni.html

INSERT INTO users (name, email) VALUES ('Tom', 'tom@a.com');
来源：http://www.xuanzx.com/163zmxovlnx.html

[Q11] 一次插入多行
来源：http://www.xuanzx.com/163zpfgbqxx.html

INSERT INTO users (name, email) VALUES ('A', 'a@a.com'), ('B', 'b@a.com');
来源：http://www.sxryk.cn/163ishpjwao.html

[Q12] 插入后取自增 ID
来源：http://www.sxryk.cn/163snbmifbl.html

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163ddbdfqsn.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.sxryk.cn/163ywoqxxwz.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163uinznmoy.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.sxryk.cn/163bkvxioqk.html

[Q14] 存在则更新（upsert）
来源：http://www.sxryk.cn/163prcqejyy.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.xuanzx.com/163oflwfrmm.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.aibaodan.cn/163haxjatev.html

[Q15] 查询全部
来源：http://www.aibaodan.cn/163cnlhqekc.html

SELECT * FROM users;
来源：http://www.sxryk.cn/163ttaaiefp.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163dwrnuxse.html

SELECT id, name FROM users;
来源：http://www.xuanzx.com/163tshayvmr.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163btfpeett.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163wrvpmorn.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163onurdvrb.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163gqdnrzhc.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163rflmonwz.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163nxbmmmcu.html

[Q20] IN 列表
来源：http://www.sxryk.cn/163uggtcloh.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163fwkxcqxf.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163ymrkrawo.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163mlwwthsm.html

[Q22] 排序
来源：http://www.aibaodan.cn/163qbghqnzj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163vcjwgvjw.html

[Q23] 分页
来源：http://www.xuanzx.com/163behrbgcy.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163ptkxjjtv.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ittbbftu.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163ueeeulbk.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163kojierhr.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163tkuacbsa.html

[Q26] 计数
来源：http://www.sxryk.cn/163bidhnleu.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163duneyjnq.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ulxfirde.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163bqpgvbio.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163ojdokddd.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163uthfizlw.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163bttgkfhn.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163btydwert.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163fpdmfxsv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163utpudljv.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163hcghyrxl.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163eveayctg.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163gkwizocr.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163jgycnynu.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163qhzzhyfl.html


<!-- 参考信息 -->