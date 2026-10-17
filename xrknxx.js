外链999!wailian999！

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163eoudfhma.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ampwsfpt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163uireihmw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163glnfmvgv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163hqeiflnl.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163badiyoac.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163trdxyquz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ltmmchej.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163azzsphtc.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163orxelkcb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163cmprnesp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pkdvgory.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163riuszeqn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163oeekxram.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163rysorgqp.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163stnskzjy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ldddvgnh.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163kozhhqpp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163jxbjxobq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163rljlkvmp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rsvfdmtd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163twnqqtwe.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163fyexrtkm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163lvzmpyjc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ynyrnlfx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163yjrcpccl.html

[B07] while 循环
来源：http://www.xuanzx.com/163gzosloff.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163qbdamnap.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163pefzwrok.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pozpqzuh.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163anfudemx.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ayvvvgvl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163uldqvjsl.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163xzgjmoeo.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163khnjvdao.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163dxqgipxt.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163hakkvraz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163whiyphwm.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ikqescpr.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163iqngacca.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hxvhwlqf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163fdjpchgj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163phbfwecs.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ahrssvye.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163tnipldbz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163qskdvzjn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163djprxqwd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qvavsnha.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yfhxmsus.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zekbhkvb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163xqegbgkj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163gzoumnol.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vnenwuwh.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163saznbupb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ryhwmbqh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163zxdywwml.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163vamckhcb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163rwaikyih.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163yviaabfm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163jmcethcj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163urybxqbp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163aqcrbwmr.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163fdtoijdt.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163maukpplx.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163jrvwgepi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163vnokefdq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dtrwjplg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163kwikisiy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163npvnlkrl.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163zjnogctz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163tojulfrn.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ynbtsqne.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163dohhfsjk.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163khgtlisv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uheahjqg.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lxpufglc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ypovecwt.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163xzxjnzfl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163iwppbdtc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163piiqdzuk.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163yiparbni.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163sfmjowns.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163dhcctwbs.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163sdlccqoh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ytaxpsmg.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163hihzcbbu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163npfvoxmg.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ulaelxxy.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163dujmdsgs.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163dusselxp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ykvqlzec.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163eocxnyry.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tjhkrmdq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163lfqeiwyd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163xzvoumdj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ewkmadoj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163rnpjmvew.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163deblsenj.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163uqckffvs.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163fwjptdxt.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163shpbjgvx.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163gxtvgudq.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163dlskjsru.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vsazjugf.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163wgchwwqa.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163uwdduopx.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163rvgnfdvy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163dyweglcf.html

Py:   if not data: return
来源：http://www.sxryk.cn/163bffwmnww.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163yhxhbmdb.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163jokzwaxl.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163tczvbdoo.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163sscutyby.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163azyuzztk.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163jookzkcb.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163uusnfald.html

================================================================================
来源：http://www.xuanzx.com/163wtjhcgcg.html

C. 函数与作用域
来源：http://www.xuanzx.com/163rnqghlfb.html

================================================================================
来源：http://www.xuanzx.com/163vilwqcsw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163pmgoeztc.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163xxxgzkel.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163oskmqqfk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163gvqfdjlo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lgjnsfxh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bxzlgrne.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ltcenqkr.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163shaxnumx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hznfqnal.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qgqmqiar.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163xvlkszmi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163hkuzyqli.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163qxkhsjjp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163mzvtkzqf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163kepsgxnm.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163aisvjreh.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163qkwtrtpk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163rrhtzwgq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163acbfmqnt.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163auyoyivg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163lcqhelsk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163yqswhsrm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163epzfqxsr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163nwmtaxjb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163yrkhauxz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163oglnpiwu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163tlldxqvv.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163dcdwzmyq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163pmkfzsnm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163gehnaqxf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xqczgvxa.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ahpmject.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163zatafadc.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ijtjthrn.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163krxxuxvt.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mfyuyqov.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ubsyufbh.html

Py:   return a, b
来源：http://www.sxryk.cn/163afbsqvsc.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ivdspsen.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163eqklaged.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163zemtkohn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163dzxxfrmo.html

Go:   return a, b
来源：http://www.xuanzx.com/163lojsqrvg.html

Ruby: return a, b
来源：http://www.sxryk.cn/163apwripay.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163tqsdxnov.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163nvoyibcb.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163qjiazvuj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jnustkdo.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163lurkzsry.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163phbnslku.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ysyahqcm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163lnnbvurq.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163bzkfjqnc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163bdnxwlvl.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163skxzdrlv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163lbvyiyui.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163zbaceykj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163mjvqkotb.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163qswkedhd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163resxlymy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ajciifoh.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163sszotnpy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163opwuvudz.html

[C08] 闭包
来源：http://www.aibaodan.cn/163wthojgff.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163kskvbbbh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163pqbsuhgf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163odgjexjx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163odfjhruo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163tjegcpbg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163rlxlkhjd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163rmhnqkzz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ltbcukbb.html

[C09] 递归
来源：http://www.aibaodan.cn/163kmgzeynn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163eozvnsif.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163cequsksi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jevrsjyp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163iaphbtzd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163apykrmth.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vgxxrhza.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163hwlhdhuu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163qjuekqtt.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163nzzjipef.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zrnqpqfy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ajvdvjbk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163etiglbvi.html

TS:   同 JS
来源：http://www.aibaodan.cn/163iccyyrsd.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163yrqflwzv.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ncuhhtvv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163nzcyaqzh.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163kiocjfgo.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163orwhqmed.html

Py:   from module import func
来源：http://www.aibaodan.cn/163jwmnuiks.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163avhdrzbn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163wgghdnwo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163kgfwduub.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ophrahwc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163xhxgivsw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ggzfzbrx.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163cjgujhaf.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163knjcpnom.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163bawxxcgu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163zntdfnus.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dbitjocc.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163nzrsavwy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ddmldvmw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163mgiwwfqc.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163iywqlale.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163egfajsyf.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163otaoxjxy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163vlzqbgee.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163olwhfdst.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163xljfqnwx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163dhayyprc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cvylzuli.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163panowmer.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163zjauyuxa.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163fgqbzfhk.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163tdpxevno.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163edcdtgnb.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163wwjluatx.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163dxygsewh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ufgnzmkf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163iwillgqb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163prsdigrm.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ocudxeie.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163mkwygjtw.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163kesptblg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163psngxohh.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163peswqzqu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163gadmervf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163jseioqfp.html

Java: // 无解构
来源：http://www.sxryk.cn/163gbpsmkji.html

Go:   // 无解构
来源：http://www.sxryk.cn/163rndxizre.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qoodrclb.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163gtjwxgnz.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163wammeour.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163vksfgvzs.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163tqdizxkj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163wgzztxkh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163vzmnwhbi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ryuqtvau.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163mdctfvxx.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ofovxvom.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163tvqmievg.html

================================================================================
来源：http://www.sxryk.cn/163qlzejcpx.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163pumptgpi.html

================================================================================
来源：http://www.xuanzx.com/163csxkpoyu.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163tfbdbdwk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163xtfsdfpt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163eukjmtrz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163wstvtoyz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jlappfte.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ggxpzjas.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163dczmouhd.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163wmmcmxfg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163tqjrvong.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163mmcasocr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ofjtxouu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163totchwma.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163oxnvxcqq.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163qjqqmnzv.html

Java: list.add(4);
来源：http://www.xuanzx.com/163grwjfcjg.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163dydabdue.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163mpatexri.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163dsadphdn.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ctqcaxaf.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163bzahagzu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163smatagww.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163trnmimqs.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163hanagvfv.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163vkvrbiyy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163fdrewrib.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163hdvpzfbd.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163uasgtega.html

[D04] 删除元素
来源：http://www.sxryk.cn/163etpurenh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163gwytlasg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ntiqcocn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163kkkkdumo.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ssspjzcd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163lbudrphe.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163swgdootp.html


<!-- 参考信息 -->