外链999!wailian999！

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rmvjlkvf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163chhzkqsm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163rxwtsogn.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163gtdlyxpv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ehyabknd.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163mnphvjtd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ehlcfgxn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163lrewspgj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163hxiwrztf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163oeapexnu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163zuatrzgw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163psttxrkp.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163xxbkhtcg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163cacxipsm.html

[B07] while 循环
来源：http://www.xuanzx.com/163rycreylv.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163egutqpqr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163wzwyprxa.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fmbgeshe.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yqvltyns.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vqgmkfvr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163agyyfbia.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163zmyburvj.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mmjqbqcf.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163tswbctaw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ydnwaucj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163elbcxteq.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lisejmee.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nxbtyysz.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xqjsagjj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163fbpbwcpc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163kmlffxlq.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163unypviro.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xldzzpjd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163jbciflsc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163uvugtfjs.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ldyvqnxm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gkrromft.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ykqtdwmn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163jkcgauok.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163eonwmmvz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ohxfalkn.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163tqnhbyqb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163bqipnxum.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ijyoqmcu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163vywyjnsk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163wdyrsofx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163cehuljkd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163hlxpeotf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163sfozqdzy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ivyrlyni.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163jdvohwzy.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163gtocmycv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163dzixamnf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163hdczxqsy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mxwgxfly.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163dtzmwtvf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jynufgrn.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163cdfrbjgs.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163dobhdysj.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163fksvybqf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163puosglhy.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163puzgvirb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ohmsdown.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xcznbwsj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qfmztelx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163nusvdyjp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163pfqfoghb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163xowjvolw.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ozhtweol.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ozbagbyo.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163tofikrxm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vyaqhzii.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ravlwnaa.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163iumbjdpi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163bxmiuisx.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163fiyvovoo.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163rfylexdy.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163yaiuwfqq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163tsbxeiix.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163uionktji.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rjxqbpux.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mppnlrnt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163oglozwxt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163hqakheot.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163otmfnost.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163zadpyyid.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163cyipimdw.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163cpgvxsgb.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163filoerdk.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163scpyoiod.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163xtvgyhhk.html

Java: a && b || !c
来源：http://www.xuanzx.com/163aoyclxqj.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163xcafaoqp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163slamocub.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163oeqhghqo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163wkewilbt.html

Py:   if not data: return
来源：http://www.sxryk.cn/163tcryksds.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163lgzmtupy.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163dsealeqb.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163nciodgwg.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163qpulkjne.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163kmbgmgon.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163kunjizay.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163hkpeuzou.html

================================================================================
来源：http://www.xuanzx.com/163rtsbmbmu.html

C. 函数与作用域
来源：http://www.xuanzx.com/163gopuyehr.html

================================================================================
来源：http://www.xuanzx.com/163dxkflhzc.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163qgpauxbl.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163tanldcha.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yhwkjmud.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163tngharqm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mlcevbyb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tbxtgfmc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163gtcuofkt.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163zqghodhw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ejjgyexo.html

[C02] 默认参数
来源：http://www.sxryk.cn/163olukwwqu.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163mqmoolzk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163iipvwrig.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163dvzaddao.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163azkotlbd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jelcorsh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163fwwnultb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163pqmcdmqg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163epontqso.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163knaoodrh.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ooxllhxf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163qwejyezk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163kyxkdrwe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qtxekljp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ibhuhxgg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ullkitrq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ylwwlndn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163nepronxv.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163zqrdvysw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163sljpxitj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163uoyfzjyx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163vjscryft.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163pouskkar.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163bzbbcasz.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163skcxgxbp.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163edxucgir.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yhvzsxfy.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163miuvarsl.html

Py:   return a, b
来源：http://www.sxryk.cn/163djdvibap.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163oyfstypj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ipqfcifu.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163igntkipy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ecxeqlfe.html

Go:   return a, b
来源：http://www.aibaodan.cn/163djtyjgdb.html

Ruby: return a, b
来源：http://www.xuanzx.com/163atomyflr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163yynmnvje.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163chqzflqx.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163kebjjfno.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163gdwdxhlp.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163rqqntour.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163vgacfudd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163eyybzmau.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ebdfnzvh.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163gwmrdlkk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163veyvqhco.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163qqrqetgt.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163habnkawr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163fcbvrzpc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163joanlsjp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163sujlslnd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163wdelywku.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163znnitawf.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163mqzdgthi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163aunpqrmz.html

[C08] 闭包
来源：http://www.xuanzx.com/163pexdppbo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163dhlorwop.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163sfgdaxie.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163oeprsjap.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163aithttya.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163smphembc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163vetpssme.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163dawrogbd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tszjtlre.html

[C09] 递归
来源：http://www.aibaodan.cn/163pntuhxgm.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163rfxamqhu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ovukxbas.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ioiczqyd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163cgmmuatx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163jjavzqum.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163xbxbnyij.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163esotqeby.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163gegvhugq.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163xtgqrvtc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hbojjmtd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163qtojbthr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163csyzddxz.html

TS:   同 JS
来源：http://www.xuanzx.com/163kjkthbku.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163nxseezjf.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163tpzbahvs.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163yueljzux.html

C#:   块级作用域
来源：http://www.sxryk.cn/163lxjdwhnt.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163rmginujz.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ajzouaws.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ibzhlizb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163vbesunyk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163fnxtrvxl.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163kyycdofo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163saixiomi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dfsdqdjt.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163zjedgtxq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163zpertmpc.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ganupjoj.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163mcgvlyvp.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ahtimwiu.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163lyrrbrhh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163vjjjaeei.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163rxhglrie.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163zqgbaibh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163hlgixtmt.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163lwxhmrok.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163wlkbnzhr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163utvzzoaf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163meizsamk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163nqnahzdr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vvydofsl.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163yarqpaet.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163noazvnhl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163kmlpuros.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163bvllbyyu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163sdilhqga.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ahfiybgj.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163bnzprslt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163jrnkogyu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ealsbzdz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163iumdlkjw.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163mvigfaaw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163rqpmhjcq.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163dkvtchpr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163xbcudwpx.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163bnnxqkka.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163stzabwpk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163rcfjbxvd.html

Java: // 无解构
来源：http://www.aibaodan.cn/163tfbpyhfi.html

Go:   // 无解构
来源：http://www.xuanzx.com/163lzrznrvx.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163gkeimijv.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ilwruuci.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ykabeime.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163oxcujwtq.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163iotzlkme.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163xowhlmow.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ajesinph.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163khctedlu.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163gtlxwxut.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163yeknbsht.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163uwzmnxpg.html

================================================================================
来源：http://www.sxryk.cn/163vlxklcek.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163xbhhzxag.html

================================================================================
来源：http://www.xuanzx.com/163orioiggd.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163fdhpcaco.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ogwienxr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163vjlbpjnr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163epzveyak.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163kcvhimdx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fnowpsss.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163wjaipcum.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ulxdwasv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ufzdarkr.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163gwplpjmn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163btufnjbo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163xmfnxtyo.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163tcdykgjx.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163vwafbcbi.html

Java: list.add(4);
来源：http://www.xuanzx.com/163pniwdbmg.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jncbiero.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163lkjshndt.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ptssyhax.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163imtabtnb.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163evwwsyhs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163prpaiczk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163mhvdjjiw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163mwirxyxk.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163bswhdiuo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163lycgbcfo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ubzspzlx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163fntikymn.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ktaeztku.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163zoxgsasb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163wgywbowr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163schnxjoq.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ihcpbbco.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163oexnuwip.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163kdfbryxp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163vxpflhne.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163zuxgwpin.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163xbxlpfoz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163aijkkrtp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163uwrszrlx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163mdskoxgx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163khsywvim.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163qbohsguu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163pgjvfyaf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163uptxpqvg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163orwsovqd.html

[D06] 数组长度
来源：http://www.sxryk.cn/163bgxdztrj.html


<!-- 参考信息 -->