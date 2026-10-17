外链999!wailian999！

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163zfpszafb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163sowxmgud.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163awqwgoco.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163fxhrekxx.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163rompxaih.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163kzdexxfw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163stuwqwri.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163lffcfyas.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dovqxtbg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163hmeyhqxt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ookexbyd.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163wblzcenz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163rdpyugpv.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163nozuotgp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163vchocanc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163qzjtpymy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163mloiljmo.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163mlnteiqq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163yqguqzqr.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163haryxhyc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163nzudxlsh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163oapegcsi.html

[B07] while 循环
来源：http://www.sxryk.cn/163zuzdfoqr.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163rrfqzwio.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163kpwlsacu.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tsuypcbi.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ovxingvv.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ydpchnsw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163mfzyjelb.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163jxusvxml.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jbvcnuwa.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163sxgdeazk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163vydmjftm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163tidphuwf.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zkuhzhor.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163snyhrdvv.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gqhnirbi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163asyirxte.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163haadoxeu.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163injiedwx.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163lilebvpd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163pkmatdxh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163dtnkaozp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yrxholuc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gzfagkox.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cfmsfiun.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ulhplcjt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163aqqzymdb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163khlluotf.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163qcxvtvdy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163rbtgnslr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163vqukmkrv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163zltafsvq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ebrkwntx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163xcxotmog.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ymdyqeao.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163flbxdwkb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163wfcxwatw.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ypawdzfz.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163nfcfmngn.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163sbldcona.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163czexozsg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qbitphns.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163awhvsplv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163rcdzqwgs.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163pvlrfdfd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ipgtkwsn.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163hcbtorff.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163jcvlugcp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163wwtnsndq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163heoqiylv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tufwiumk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gyxfxwrf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163hsykqqcs.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163qhhenqvc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163oepzficm.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163zofzwqdy.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163cumvpvxq.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cmgeisuw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163mxnjkxja.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163cjtrlcpe.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163pwtjotgh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163njbcjwak.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163kyadvrlk.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163eaydvfrp.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163lkgehhgh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163nqwbijit.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ndnhqthg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dklfbati.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rfdnkurg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163hteujutr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163oqfpjswi.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163dnbalobm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zrygnmeu.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163spzwefuh.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163dttrfzfu.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163lhgjtbvh.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163gxxeupai.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163dkorjonp.html

Java: a && b || !c
来源：http://www.sxryk.cn/163vydjpavm.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163tgxhelrj.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163vwdwadak.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163qyasronc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163eywajnkf.html

Py:   if not data: return
来源：http://www.xuanzx.com/163sjfvekkn.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163beaxhexl.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163oqbcetzt.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163gqwdshgm.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163hssmaaxj.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163sbwgcvka.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163wcfcmndb.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163lvzewpmt.html

================================================================================
来源：http://www.xuanzx.com/163gjmksmid.html

C. 函数与作用域
来源：http://www.xuanzx.com/163qpdifasn.html

================================================================================
来源：http://www.sxryk.cn/163ludaiikl.html

[C01] 定义函数
来源：http://www.sxryk.cn/163vpejzxkw.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163qczjkvmg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gojdkcsx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163fvefenwj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163kzuowkrd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yzjdvcwl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163tmdpuuik.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163uycpcecm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nadxemtr.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163zjfbfxzn.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163acsivzvv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163lnpxsyti.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163yjldnigu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163rjjiwjuo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163xseqqrro.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ivmapoyr.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163vdbrpqsk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163cupwewcd.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163hejlbarx.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163geepcxyw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163infspboe.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ylldvsld.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163rnrpftoy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163nzacvghj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163prptvdiy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163zcrorrgu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163dwhgofpq.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163bgsigzys.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163qxhipoiv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163qbmnegak.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163eapdbynf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163avzphomp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163knxvhjww.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163pqauxmwv.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xecdapmq.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163tozvjeif.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163jokzvdrk.html

Py:   return a, b
来源：http://www.sxryk.cn/163shsjeveq.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163kmgsfvnk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ivnxfhqg.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163jbdkoeeu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163bkzzafol.html

Go:   return a, b
来源：http://www.aibaodan.cn/163fspgzuzu.html

Ruby: return a, b
来源：http://www.sxryk.cn/163dmejfknb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ymtstcjv.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163gdizwlpu.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163epirwvuy.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163swizdand.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163nebpiskr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163moodvvcp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163jocvizae.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163rftcygja.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163maxqorjm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163pmdvvqzf.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ungkbdlo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163rnbkvukm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163yzgzzbuz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jjjidqkh.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163lbfuqmjx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ylaysjfh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163qgxywkir.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163qfrqqkwe.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163cyumuuix.html

[C08] 闭包
来源：http://www.xuanzx.com/163fdgazotj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ikwdkhlp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163cyhzqzvc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qwdimpvk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163beazhero.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163lpaxbaro.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163uxacbvmj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163bmapynco.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163yfhtvtoz.html

[C09] 递归
来源：http://www.sxryk.cn/163epkihepd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163qxaerqrj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163juujwavf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hiqylvpl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163osvelrxb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163vbyvydpu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163czyefkeb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163mypcpgqt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ypegyjsx.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163eozpbpho.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163hnpqebls.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163tvkdssrv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163qvtyuaca.html

TS:   同 JS
来源：http://www.xuanzx.com/163ibvxqbik.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163sxwflazo.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163emwnhfqu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163dswqhikv.html

C#:   块级作用域
来源：http://www.xuanzx.com/163oydyioba.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qgiczhyz.html

Py:   from module import func
来源：http://www.sxryk.cn/163akqmybpf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163gusllbfu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163mdgwgqpj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163mmejhshz.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163eirhwwlo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163syfuriyn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ferjmzlz.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163jllznwvb.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163dibzmxvd.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ferlbkpy.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163gpjwztpp.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163piosbkoh.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bdhqtjif.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163meeaazcj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163lsvxqhxk.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ivwkzsmk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163wbolgpcz.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163bahmqpun.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163zzlspidc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163yaicinqk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163inhzmhpo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mldilmwq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jwfquril.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ncffhshz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163npblsxnr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163goyfbrem.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163peqwwkvx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163fwscsdoe.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ejhnixdp.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163mococusk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163idbzesck.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163fcuvxgfp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163tnjnnjos.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163yhjromsm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163obkfppsm.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163rtmfmmbl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163qhcdnwqd.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163khtxjknh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163avhloqvw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163rcoqfsxe.html

Java: // 无解构
来源：http://www.aibaodan.cn/163euhydgid.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ldzwqgqe.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163jhdrhneo.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163bomwclnt.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ccmnccgf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163vmtcgcsj.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163iphqphbe.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163fswsblpk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163kypsvjie.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163owazclwb.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163rtsbaule.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163wtbdpzrz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163hbchnsfb.html

================================================================================
来源：http://www.sxryk.cn/163dfffxuzz.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163wmzrtxdr.html

================================================================================
来源：http://www.xuanzx.com/163sjtlmzkk.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163kkvlznyt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163kekeagpm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163sxqerdhf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163wmbjxyrg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163koltrhii.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ndefmsji.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163stkbezsx.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163dfeteoan.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163betorbzd.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163eduqgkre.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163fiqtgcpf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163qxfjmfsc.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163pjupgluc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163yvgrwwqo.html

Java: list.add(4);
来源：http://www.xuanzx.com/163syusjzly.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163kaiczeds.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163oggmqccx.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163aioqmweb.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163dxopbtjt.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ankludqh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163urtfnxdl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163dnydrdku.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163oqqugnno.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163trppgkbb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ozqqefzi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ztqqsbsh.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163jjacfcwv.html

[D04] 删除元素
来源：http://www.sxryk.cn/163hwkapszi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163pztgwtqi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163lmdacmyy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163unvkzryx.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163oywcovqq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163sbekomvo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vxnkihnb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163rddzqxoc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163rovbnapl.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163avchzchm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zhchzquz.html


<!-- 参考信息 -->