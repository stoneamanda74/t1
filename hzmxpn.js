外链999!wailian999！

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fclfsyeh.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163iyebrpdi.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163uxawncaz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163vfjowdrc.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163asocjtew.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qreaxntg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fdoyvzuc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163doskutlh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163sukhdigt.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lrovennj.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163qvuxatrg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163pizpkjms.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163jtfcqtox.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163gpblemmg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163kuchxixk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163ujgsldoa.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163fvfkiivy.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163iqtxwqdt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163jytfxznx.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163kxhyvzcg.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163cevxtrfz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163wzvofkvz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163oiakdokg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ittinlkr.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163hlbujfoh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163dpbfbvon.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163xyhibayi.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ofmfgphy.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163ovsiuynu.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163lrgmugpg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163uqzybptt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163idivteyn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ejinqikl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163etgidqkz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163iwledznh.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163gjsbhkch.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163eyxfdrih.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ikadneua.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163pvzsznsl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163kydqqgsu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vaubcpyu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163iviwvtbm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163tzkusygv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163nhuvfvbt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163htinghxr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163kfpnluei.html

[B07] while 循环
来源：http://www.xuanzx.com/163ffogbany.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163mipgxtmm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163uqvvaurk.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rjqfodxf.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dffjutos.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163slnrmkxj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163zpyivebo.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163klgszusu.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tditpoky.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163pdirdxxu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163kqkksqcc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163pgrynjqj.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ecrmxomc.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ggbtggax.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163fsqpvurt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163zbwegely.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163naeofgvp.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163grrswjzs.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163mvqpnnbm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163cftgzkbm.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163dmqsvafr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ifljfdxc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nwzlteoj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ncdfdxqr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ojdduxpu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163luojfsov.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wwnrqtnm.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163qwsymmmd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163gvosmozy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163dyzklxsg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163upjesmui.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163hyqygexj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163fqvppfdt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163hteaqnjp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163xhjjxzvh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163tnenacyy.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163okrbnrzb.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163wbfpygjw.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163qlnsttzp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163scckagtr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gfzcthzv.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163motxbxim.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163emhlazva.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163grlhoksy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ucidhiun.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ccffylvf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163zcwqrhtu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163oclhkrqr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bmllwqof.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ycuthdzk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163calrbdzi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ovznmjxz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163hzhxxwvr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163xuakpdah.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163hjoxnoex.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163vncxncrp.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163mkpxhwjt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pbhqzfdz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163iytvxyln.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ekyloozi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163pyzdsbfe.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163booehhrb.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163gvdtlaly.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163lfscmwqy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163vesreltl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163zlrzelch.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xacdpyys.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pzfpqzxz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163yzzmgrrv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163twvzofow.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163oozrefrb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mxwyxtlz.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163hwuknkip.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163gdtkqvms.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163fnvotvlx.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163wtwawhqf.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163zvgqtljl.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163pdxcuifb.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163bltjhfcw.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ubsxsiej.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163mhqojhjh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163kccjzrpe.html

Py:   if not data: return
来源：http://www.xuanzx.com/163eucvsuoe.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163tcavbjmz.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163lqxxdwuv.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163dqylcbdv.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163lpkrebbk.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163rzfmxadx.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163olqsynbu.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163pljndvbt.html

================================================================================
来源：http://www.sxryk.cn/163ulzsgpgf.html

C. 函数与作用域
来源：http://www.xuanzx.com/163mfrkidsx.html

================================================================================
来源：http://www.xuanzx.com/163pbufgntr.html

[C01] 定义函数
来源：http://www.sxryk.cn/163fiswussv.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163hhzndsko.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mrgungog.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163pszejziy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163uypabcqd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mcovjedo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163wahafouo.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163lceefjgd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ggchjnrq.html

[C02] 默认参数
来源：http://www.sxryk.cn/163wdyjugln.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163odijkluo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163maykuzgl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163zyhaavja.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163xqbqficg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vdfwjlue.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163blvowrop.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163dfxurwai.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163pmzhgszv.html

[C03] 可变参数
来源：http://www.xuanzx.com/163rhnzzkyi.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163rlbabtqp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163rdovmdsa.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gzblaccb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ygrcxuxv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163acbvmxrh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163weylswcn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163bskweppw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163tvqgevqx.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163qxgefzrn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163cwthhjjc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163zbttnwsh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163tkoivwdz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163hysyvkmz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163borkgcdu.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163oscmrvmn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163eehvfnqo.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163faxpqnuj.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163yktigucu.html

Py:   return a, b
来源：http://www.sxryk.cn/163qeacnnyn.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163kcytxykd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163rlmuutuc.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163pnwkiyfa.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ekwgiyiu.html

Go:   return a, b
来源：http://www.sxryk.cn/163eiuhflde.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163lfnfpqug.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163tkxmhdsm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163hdibhszp.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163fdukizvm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163nvzcrrza.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163hrvivmec.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163nsgxjsha.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163mbgnasjk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ossenrjv.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163zvvnfjyq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163knsrivbw.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163tsdusfhu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163bkmcbslg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163zbapgiut.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163oedosuxs.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163wjrdcdzp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163opnhwvmf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163bscqfgey.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ynsaiehr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163bbcmvian.html

[C08] 闭包
来源：http://www.aibaodan.cn/163disvafql.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163darqxozm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163apffpxgt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163trkiurbu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ewwglqoq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163sedufcld.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qgvckqnc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163bfhyzqrl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zxdjuvpl.html

[C09] 递归
来源：http://www.xuanzx.com/163mqmimjeh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163dsqqrxvq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163mtpikfct.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vmbbkdar.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wajjvoyg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163wwpfqcpq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163phyvujns.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163zlgstvtc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mfxbhmda.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163vobqbgtw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163eadttcaf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163mqukovmv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163xelbbbem.html

TS:   同 JS
来源：http://www.xuanzx.com/163yerttshl.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163pswoexab.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163nfktiqnm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163eoyfoznf.html

C#:   块级作用域
来源：http://www.xuanzx.com/163bwqzrvlb.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163mqtlyvzi.html

Py:   from module import func
来源：http://www.sxryk.cn/163kosztjrc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163xtudtdfy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163rcvulugi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163bamqgrrp.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163vnipwvnz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163fnwcdnsw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163viogaurm.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163zgqfmzza.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163vdeqdklh.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163zpltlycp.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163dsrcwwum.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bcscxtsu.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xltitucy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163slhhyftc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163xjpzngcc.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163gsnfeimn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163vcnjajzy.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163qzlivxjw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163qpreavjl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gwcgaosu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163rmjialyv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163shqvhbek.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mzymborw.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163stpcipih.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ubzqrtsn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163menhqjor.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ezczpgso.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163cqdfqymk.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163widtypnu.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163soiibtag.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163kjnluynr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163tnhcqsvs.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163zaotuxoj.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163gyisgpsa.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163jzrckfpr.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ypsqujca.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163mxeynjon.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163hiwcwuku.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163egzwaovb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163bjsygsbl.html

Java: // 无解构
来源：http://www.sxryk.cn/163cowloimw.html

Go:   // 无解构
来源：http://www.xuanzx.com/163eorxpepl.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163chlioghc.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163dfleqzht.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163auuzibgf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163mkltumps.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163smlxgrhn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163nduwgtqu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163wzbslbzb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163snudaoqw.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163unixjzrf.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163idwdkwwm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ncjlkcpb.html

================================================================================
来源：http://www.aibaodan.cn/163zmmagoar.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163jbotsumo.html

================================================================================
来源：http://www.aibaodan.cn/163efrbuhmb.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163cyhxjibz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163tthkycwc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163wepyooqg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163byzhochb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163drusvczr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163xizdpmie.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163jwwhxgcw.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163nlnihlat.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163gowoxjmz.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163brrfforr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163lpkbzaxe.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ppnpvsqn.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163uazqxbbi.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163hjxrxbch.html


<!-- 参考信息 -->