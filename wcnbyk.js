外链999!wailian999！

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163nxdusmsh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163sotbcqzp.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163myjavcjx.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163rmymtpis.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163hmnijpsy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163xgknlujx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163eklznfdq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163nbnnhtbr.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163eqtiqrhk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163qgadynxc.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163tenujpuj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163inwliqra.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163lsvxajee.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163hqmvctfr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163wgqzlvlm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163cegrfgbj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163myuvueyc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163bytajyte.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ahqkqhxi.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ttkuuhwd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163yocjluru.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163rmcrbaty.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163wgzrlwfx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163sptrmpyz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hiuefdyf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qbzntllb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163uqtvdbhu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163gyuqvwbz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163uwwagczx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163fzwjyqut.html

[B07] while 循环
来源：http://www.aibaodan.cn/163keqwxdny.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ummqskxf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163hhtlsaxp.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163imhksery.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ezjzhbwm.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ygynzkoi.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163zegjhrbp.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163topbkhpl.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nuoomphq.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163xkotypgt.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163mbgnafnv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163xkwwebkf.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vxmrwywd.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zsxcwkqa.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xjgyioih.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163vznshjtx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163gndtgwsq.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nfawlkkd.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163bqupsycw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163tighahip.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163zruzjmxh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jsmomtpp.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163eaxrikpt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fwahdmtj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163wpeeddeu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163elrdxdsr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rejrsmdu.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163rdjdulya.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163gvhgmeal.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163qowrcxnz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163pjwaodda.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163esokxcyd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163dtekqmjl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163ynjodqdu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163oavfeeji.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163qgcdubvd.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163sdfskmdf.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163cuizxcjp.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ttkslwjz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lddgnjuk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qeunvuft.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163jpbicrhs.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163igwwjqdb.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163xegjbjlt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163fuchmbfs.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163upvqupod.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163neljsppw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zsjqsojj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ysexoemj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tditgskm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ibjmbazk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163unkijyeh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163kveppzgt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163bxfxkeuq.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163yflyfbdg.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163sofnflpz.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ewpitrly.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mwhwpmls.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ccvrytds.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163pqypriaa.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xqgujwza.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163isqlufbo.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ngyrhtab.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163lkmnlyyu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ezzpyqos.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ronyryzv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bblztndl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163jyhbicbj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163zgdheeap.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163lfyxqqwv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163whshxpzm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163hdtbprnl.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163esuibudf.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163nruillra.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163kwhicyzc.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163idkesoig.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163nscyftyb.html

Java: a && b || !c
来源：http://www.xuanzx.com/163wjkgzroq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163fpsilhma.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163boepseyk.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163tfxwjabe.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ltcpocar.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163auegdlhk.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163mjcmsubj.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163wqjpimdo.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163eqrunobg.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163xvoihwtu.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163xxwjrsob.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163aeocojvr.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163kxwmkhiu.html

================================================================================
来源：http://www.aibaodan.cn/163lkocymml.html

C. 函数与作用域
来源：http://www.xuanzx.com/163uimmrzoa.html

================================================================================
来源：http://www.sxryk.cn/163johtpbyb.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163wnzbdwly.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163iihwzmmk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cjiymqbj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163kueylgyl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cxoejwbi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ekkrjoro.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163rqazfijo.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163acyknmwo.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lgqadjwj.html

[C02] 默认参数
来源：http://www.sxryk.cn/163iebbcmly.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163yjovzjlt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163dtjruitl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163eovqbeqc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ibyvaqyz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163sticejpq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wvfdcmvz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163paitozdb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163kbjghugs.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163sumhrsfk.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163irwnwxgn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ngkzrguh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ocfuozhj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163rwnwpluz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163zcpzbjag.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163xhoejhkw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163vslgecni.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163vwjioomx.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163xlomfgnw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163xdaoclko.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163nolzyfje.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xsjzquwc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163wdtkooht.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163luyobkox.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163osholhav.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163comyfkff.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tvygtwjh.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163pbkvcvoo.html

Py:   return a, b
来源：http://www.sxryk.cn/163fjfnusqs.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163qvqgcrks.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163pfvpoakq.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163erqliuzo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163lwunusng.html

Go:   return a, b
来源：http://www.xuanzx.com/163mzceulvn.html

Ruby: return a, b
来源：http://www.sxryk.cn/163drinnhre.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163nhajnpiv.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163smtsmpln.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qpwpmkmt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163wnziciiq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163saxertio.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163lxfscmdb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163jrctnuyp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163vsvpohzf.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163jdztuplc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163eoxyohwm.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163whumrmnq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ogkzrglm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163wofteaia.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163iewdfhjd.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163jqryuehp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163necaackk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163flnaamma.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163lctuiqry.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163tvpxrhcc.html

[C08] 闭包
来源：http://www.xuanzx.com/163rlzraaey.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163pyxklcjv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163kkutcfgy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lpaydxza.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qizpleyg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163phrzawfl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163nkuiddsy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163xvclnafh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163chlpljkn.html

[C09] 递归
来源：http://www.xuanzx.com/163codtanne.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163lnxmdexe.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163qydfdaqn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ntgdittx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163sbenooqh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163rvnvwvgh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163hxbltfjm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163drbrisfl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163leupnqlr.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163dujdkvcp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163vefnqxdb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163pauaqlou.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163osrkiqzk.html

TS:   同 JS
来源：http://www.sxryk.cn/163ggelyehu.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163knkmvljj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163boiyktmn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ckgrmmym.html

C#:   块级作用域
来源：http://www.sxryk.cn/163yyhbwdgv.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163xdjgacmd.html

Py:   from module import func
来源：http://www.xuanzx.com/163oldsvxxl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ljbymqzv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163qfwfruzj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163dnwyaqqt.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163elhdqaci.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163mogfvdws.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163aivaloby.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163zodonlcw.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163jrdvampd.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163dyrfzaxv.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163dapqlfxo.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fnzviugg.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qeekvxpl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163uozzrerc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163cavcajok.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163jumwvuvo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163xknayvsa.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163pmqrdcix.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163vvalcecw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zgptgnnq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163hacapson.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fslacdgn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163femwgzxc.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163naqnjkra.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163oqjjpnht.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163gpyhkwpk.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163kmpautmu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163civdbgmy.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163zhkffsdt.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163nyqiwmhp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163upwczvid.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163dxjcpeij.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ieicdlsk.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vphlhzci.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163mvkcxrak.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163gmyktxxp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163oxjlayaz.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163jghnqdzu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ikwwsxuz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163clpwgvcn.html

Java: // 无解构
来源：http://www.xuanzx.com/163efhqsjux.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163evswpkxn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163hcbsaehe.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163rfvccnja.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163wpgiqxfm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xotqhnqf.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163gtgwuppe.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163zzjivipf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163eoywbnqs.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163mymdszwx.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163jfmreovd.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163xsupavek.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163lcfdcwlt.html

================================================================================
来源：http://www.sxryk.cn/163kgpzdwgn.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163lasurubo.html

================================================================================
来源：http://www.sxryk.cn/163wqyhhlug.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163gtjjqkkm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kyvbwqiw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163urvtzejc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163glzawuxh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163fgfnraia.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163hogmpcrs.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163durrbdip.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163wnhlewoi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163jtldqpwn.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qrxjrswr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163sjrxwoej.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163kujjiazi.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163dlnququw.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ifgikzmp.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163kftdsbnd.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163pdbgfqcn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163avskknrx.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163zwgiutui.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ufrppnye.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163vsubjucc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163xuafojqo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163hhajresh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163mmwnjqrk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163vkgzzasr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163copvqdag.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163pxbbewpb.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163rghkhhkr.html

[D04] 删除元素
来源：http://www.xuanzx.com/163jsaweotl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163xxtrcdhe.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163urvrwmyp.html


<!-- 参考信息 -->