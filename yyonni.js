外链999!wailian999！

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163afjtcbhy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163gdmhdkgm.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163bxxonjqo.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163wkjbeiiy.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163kpqsowwz.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163yfbpxywf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163tyqiqjxn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163wcdgcjxq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163oefoehrl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163tqlascxw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163vpmmsujz.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163boqddjir.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163dqfucvgx.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163nlpcwevh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163whsxaazd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163wxlbdtwj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ajpbfxnm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163buntpdmi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163zzancdtv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163oubfvbxg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163hqfarhvg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163iwcthukv.html

[B07] while 循环
来源：http://www.sxryk.cn/163ecnxmaus.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ogapbruz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163wkdzerka.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rgmwimtz.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qmjrzwgb.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163frwwswlx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163rgwmwlwf.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163bbeksvfg.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163iqbnoebo.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163nnszbzws.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163aagegyrg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163kaupgvit.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wnqrahxw.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uyqxrswh.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vsidbfuh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163zxjgtekp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163mbdaknsj.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ddrzstaa.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163blollghi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163nhpztvat.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ftvrlcjw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163whiainlg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163izlucyzm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kgrwfesy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rncbshpq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163lxiavyiz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fxffhljg.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163bdkmcays.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163fkmiyvoc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jvdbsbsy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163lnmyastn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163qxgpxdiq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163rojfcphk.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163paqhqovm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163guznaulk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163wuhmyfxg.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163mwwwkxrl.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163cgkzzgkg.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163nbqjvfkg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nzgfjtkq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163jjqrejqq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163slarqmgw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163zayjrdws.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163yjeeilos.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163xraltjtf.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163gvfjdfod.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xxmzuzcf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163stbjizns.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163zxdwixlx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cmxumijq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gsxmnlic.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163nlxqiwso.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163puttocjm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163hhknjivx.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163vwjpnfes.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163efmkcigh.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163mdghdxfu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ggzjjcek.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163nurjuepe.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163xcqsvfag.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163mrlutdmf.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163zuvxrmxp.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163hlevxhfx.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163hwofxxpb.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ieakldta.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hsreyxrq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163lpyacina.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163pzftnlhk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163amduubsi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163psfljoan.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163yzxfblus.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163hdqnikru.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163sqxvttqv.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163hmvewgnx.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163bxhghywg.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ebnwncii.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163cymmocug.html

Java: a && b || !c
来源：http://www.sxryk.cn/163zvdvshfu.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163qcangsuj.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163nwiprxhl.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163epujjozf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163pwifumwt.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163atpimpae.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163uvxpjszx.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163eraswdho.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163meirucce.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163uprkohba.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ckpsyhgc.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163lblwfmsb.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163xxrohmhn.html

================================================================================
来源：http://www.aibaodan.cn/163otfdpjjn.html

C. 函数与作用域
来源：http://www.xuanzx.com/163yaoclykg.html

================================================================================
来源：http://www.aibaodan.cn/163zxcyriva.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163lfmzthgl.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163cvlxyhog.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ckkpzzgp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163vwlnefvq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fkcwvolt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lbyldimx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163vsnsfpwc.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ffupzpvs.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163biqqphgn.html

[C02] 默认参数
来源：http://www.sxryk.cn/163gireoxct.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163qvqbmboc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163pvphitwp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163kgwqvfrm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163hgrhjqij.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ygjseuik.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163sqslifjp.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163aqoacrxt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163azgnsxqp.html

[C03] 可变参数
来源：http://www.sxryk.cn/163elllpapt.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163fznsnzxe.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vcztjlne.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163leipedus.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163uimnqdoj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163tolyhzes.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163absszlcb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163griybtfj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ttogckfl.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163zmwnrppw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163snixidho.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163iwhipltq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tlfgnmsu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163xbvdkamw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mfcjvvjf.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ckqcxzxe.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cyplzckj.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vycvdyhb.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163yhowbjbk.html

Py:   return a, b
来源：http://www.sxryk.cn/163qqubbjtb.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163kffjbspk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163mxejajhi.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163umfxwgnt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163stlowvou.html

Go:   return a, b
来源：http://www.xuanzx.com/163xkpxkifh.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163tzttxuoe.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163qlffbugg.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163vparltmi.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163kfuxvrqz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163xullzkry.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163puuhdjym.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163njdozllw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163fbqxgdap.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163igwabadd.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163qvhpsyvy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163seikfpkv.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ilqdupfq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163fvjbcoio.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163esvxrmbf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163kdyuezwq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ieaxkswa.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163pvqzqwgm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163kyqicqwx.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163efbfqvkc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163jhffjybb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163wiisiueh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163jxqijjlo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163dgvsdfaj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jduxnsgc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ycotwyiz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163wnobqeiv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163dbdmehxs.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ccndvydi.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163pcuftowx.html

[C09] 递归
来源：http://www.xuanzx.com/163srclopce.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163lcuartfl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163zachiawk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163njermcnq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mgfarwfq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ckxfvgfx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163oyoqlztg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163urfnhbdo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163uowawcgz.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163dupugrjl.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163gzzfpdig.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ukpmcdbh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163aaeqlcre.html

TS:   同 JS
来源：http://www.xuanzx.com/163wzmkxiei.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ofwsphse.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163jkestrhp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163vavbkvtj.html

C#:   块级作用域
来源：http://www.sxryk.cn/163mrurnznf.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163luqmrxxc.html

Py:   from module import func
来源：http://www.xuanzx.com/163wjfwtkyu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163uikioerg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163dnlniixz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163jfhckcqg.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163gwseihlu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163amiutjcq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163eyrfzeit.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163jvkdeynn.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163vofusrab.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163genzbotj.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ivfbbibl.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ayyuksoc.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jcshsgxj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163wehhhtvs.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163rmgvnyjh.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163qdmpchlb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ykjhmzgq.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163mczqyezk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ldprohha.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zkpqxzhx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163tteofkjw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mecnihgt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wyuwznkt.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163baqzavvd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163lrzxfrkj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163bdumrorb.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163zinbsyle.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163eijxmztu.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163pqflaaoz.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163tcmlxfrk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163hcnkdcil.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163wwcluyzp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163mvyvcvqr.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163psojolmj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163wzcyqesi.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163fycqkbaf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163szhynltk.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ixbdbwgh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163axlvklfs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163kfbyacyq.html

Java: // 无解构
来源：http://www.xuanzx.com/163icfejoet.html

Go:   // 无解构
来源：http://www.xuanzx.com/163eoptiduj.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163uxvfqhkh.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163bzvjpuyc.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163sbfmbdyl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163oggaxvnz.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163zvwziowx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163umfwljdv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163romrwsse.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163fqsxqlku.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163qoknzveb.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ahsnbvor.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163upiyxsyb.html

================================================================================
来源：http://www.xuanzx.com/163jsjazbxg.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163yqzchche.html

================================================================================
来源：http://www.aibaodan.cn/163kjxqxwel.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163dtroneap.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163wxziercm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qkgvkeeb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163qxsyaywe.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163rlyaxbtp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163cxofskcq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163cmnuelid.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163pckpkdzv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ewocchpp.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163cxygpdqr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163adjfxrzv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163evoyfxib.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163uhxvgjuv.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163gpvwpfjv.html

Java: list.add(4);
来源：http://www.sxryk.cn/163etcatnaa.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163bpfwirmr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163auzirxjk.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163qtksrdje.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163axxakrmu.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163sknizgry.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163djkqlzjm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163cxifwtrk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163zzdgrrel.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163uwyhbziz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ehejilig.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163vlizvqva.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163yodgofth.html

[D04] 删除元素
来源：http://www.sxryk.cn/163gkueanul.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163holtzjas.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163afwizyjj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163yladpden.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163pkustwsg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163srdrsefb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163bshiowfl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163wypkczxu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163hdokwmkh.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ygwgohis.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hocsdymt.html


<!-- 参考信息 -->