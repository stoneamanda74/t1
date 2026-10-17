外链999!wailian999！

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163sotxopen.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163brrofyoz.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163mcwmnujm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163jpwczihz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163hkebceiq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163npzketwa.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163oduatcal.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163oelsxdkc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163imkeedro.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163vnauuktt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163geetralv.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163aijyrmdr.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163emmouuss.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163jxqzpfkl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163knuhnfwc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163kpmzzwhf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163vncjrron.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163vwjaofqe.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163bxudnkkf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163zapwcppa.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163uisxvkly.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163deoiuvei.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163vacgcpry.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163dknvjurp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163slpwuaqe.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ugxczprj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ygejrzsk.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163rfqqkkza.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163avyziegd.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163hhlrslyu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163prnavlhw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163skoyhgcr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163sinozshb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jknoiedi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163wryrvzpc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163aeoivouz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163prnqkbbv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163mwwlzwni.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ukbgeweu.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163pztsgxah.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163iarcmyle.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ljhcxoay.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163isxioluw.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rbyzjqfx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163wjbmajuo.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163hmrrcfut.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ctapypev.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163qlxfhozl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163bzllitrp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163vymyrvdv.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xatmpmrw.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163toshdpai.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hrtquobn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163wdlpzgxf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163dsnxpphy.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mdvqxzzh.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163fkhtjtwh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163xspgieup.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163qctasxye.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ihvdzwvc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ectaltde.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rrujqudp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163fwaiaopn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163mxrexnny.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ivraivjt.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163dloplwmx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163oujzunwq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163pqnnnnni.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163mbqkqrnh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163biyubmux.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ajkppogj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163umxhfumb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163tkxtvpno.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ljxkglvh.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163zgskzmru.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163gshsmlys.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163aekoshir.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ckhupoqp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mgdrpmed.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163hkaxxefq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163bjupwicq.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163zqqpdofi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163qjvnfwse.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163imtjzvbd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163lpqafpbo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163dnmugkam.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163mcjixppw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zniljvey.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ncagqbqo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163uguzslpy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163zafbpvwn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163pfqgksms.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163pnbeiwxz.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163oadeqpwk.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163gxdsrnxc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wollhwmx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163bieqayiz.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163zaxuwnrc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163dgjrzyny.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163pzueoopt.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qmjmxczy.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163svwvyavo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163igdddpvq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163vxbmrqxd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163royffwud.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163myjwcdbr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163zmbbjefl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qfevvwot.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kcwxloak.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163zrbcouvq.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163wkxwixuc.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163hluvtwum.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163keoeztpo.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163bfdszvxj.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163pxcohbty.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163usxnuczk.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163gyfnifug.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ndyajohx.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ekfjylqt.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qjhpdsme.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ibzgqgvi.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163pcmrrwbb.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163imvvavnb.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ddtzvglg.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163frixkdcu.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163eflhtonq.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163whojjqph.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163kjyepxgp.html

================================================================================
来源：http://www.xuanzx.com/163rcmznxzk.html

C. 函数与作用域
来源：http://www.sxryk.cn/163oxegsijs.html

================================================================================
来源：http://www.sxryk.cn/163nvdwgfoh.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163lefegavf.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ukkwbmta.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jlnhhwuh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163vvduuewd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163sslfxmrz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163oynbjrkx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163vocjashr.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163asbopyqb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kltaqqaz.html

[C02] 默认参数
来源：http://www.xuanzx.com/163vytswfbe.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ziayeusr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163lqyxtxkh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ymchzaah.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163tqccxkgd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163kkvobwap.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ffaqwtlx.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163kqcnldlm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163orwsvwpe.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ztfsbczv.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163gqwkaavl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163irtitrrw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ersgempe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cpjuuvrj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163vwqeauga.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163eqavarva.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163mnhmdlve.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163sghmemwh.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163eqjxirrg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ainidccv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163qtilohoq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163wdqcxegp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163yuitkcsf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qyjiyvhs.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163alvbjwdl.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gsywrxyf.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rvahmzed.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163lmiwongx.html

Py:   return a, b
来源：http://www.aibaodan.cn/163weginmht.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163oqiaodrd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163wrcklmrr.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163rluaieky.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163mivzpngb.html

Go:   return a, b
来源：http://www.sxryk.cn/163vqmcuhjl.html

Ruby: return a, b
来源：http://www.sxryk.cn/163stddabgl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163qckhdaki.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163shkxevwb.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163zcadomjb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163vsrddqhj.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163fajakfjw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163zahhgttj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163hpxaiowl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163aiwgxnrp.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163pafywtkw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ntvggotz.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163qovskzvp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ryvtetcb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ylpdnias.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163dpezysjp.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163qdqgjdur.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163vgudqppv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163dlclgewh.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163npjesixz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ftpcazag.html

[C08] 闭包
来源：http://www.xuanzx.com/163oraumqiv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163hqrarpcs.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163rnespmre.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mvdyaofh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gvcvhson.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ufgwyjzi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163exqexeym.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163bcmrwqei.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fpyijbuu.html

[C09] 递归
来源：http://www.sxryk.cn/163usnartgm.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163nsnxkskz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163hhhwmxsq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nlxxgwph.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163uebexlwi.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163cqgwpklb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163haoguwnt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163dsmwrpae.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163sczuvifa.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ihtvfuvw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163mhagfiyh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163vylkbplf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163kgkqjmlk.html

TS:   同 JS
来源：http://www.aibaodan.cn/163odeyjikg.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163xesocaux.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qqikeary.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ynffdocm.html

C#:   块级作用域
来源：http://www.sxryk.cn/163hackrjtt.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qumtmsck.html

Py:   from module import func
来源：http://www.sxryk.cn/163pgxttevr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jbeblcph.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163wbcfpmyx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163efjhmiim.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163uyksgpee.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163omfthtux.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163hrossnqy.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163juvrdypz.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ogcdswkh.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163meswcadm.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163bbmdfeco.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163chrwmvod.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qcgmkbia.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163sxfpsiic.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ycaenhzl.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163xxacbqho.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ajslbmfg.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163sdphkbgo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163rwxxhepo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tqcjiock.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163kjtjavrv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vetsmeod.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zfnihfwn.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163jdmcwwmy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163xanqkwxx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163daghgzhf.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jdhalsay.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163qkvyrvwp.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163kmgqjlwt.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163bpqjbyyl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163knyypnjj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wsbvllsc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163pfjawral.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ezjhwjwu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163fcnaeymp.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163yuvkvpgp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163finxricd.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jvbwygup.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163uznifcqo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163rxxkfjzf.html

Java: // 无解构
来源：http://www.sxryk.cn/163vaknljkx.html

Go:   // 无解构
来源：http://www.xuanzx.com/163hmuswtrd.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163iunaormt.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163lvqonpll.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163pvhbahuz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ojusxbcv.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163wpggbcyl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163rzxqpict.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163kyxxuvhj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163aoctutue.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163eqmszzqu.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163gauykvhj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163bkrgilku.html

================================================================================
来源：http://www.xuanzx.com/163lbkpkebo.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163xbfvnioq.html

================================================================================
来源：http://www.aibaodan.cn/163sypdmxrs.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163acmqodhl.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163xruvunzr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163qrykeyum.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163jkdpebcr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163gmiszohe.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163pqvtnkhq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163igjujxwc.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163purskfmi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ausgpsyp.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163dbbmzame.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mjmwcdxk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ldkpybdu.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163bachnzca.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163yvwnpojb.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163lyblvfff.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163wurbaert.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ldfbjibr.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163seqqnfeo.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163fjxzbebr.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163rswoddrl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163xchgdrvu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163izubaekv.html


<!-- 参考信息 -->