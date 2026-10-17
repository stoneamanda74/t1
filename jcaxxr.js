外链999!wailian999！

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163eychihey.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mbzmngea.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dcfxovgu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163inxxwmmf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163zxquaqup.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qsmpdbus.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163dbytatbx.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163hiaxxbez.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163uvcyrwgl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ldpipeqq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lpkbtubt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163urtshwbq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163uqpdsmbc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163lsrocsbd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163gnqmjctb.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163mehueqsf.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163poseesfm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163psoufxhb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rbyuzbct.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163inavsjhn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ctglmsjy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ixqxhvso.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163xvsjzcxi.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163nymfnvkr.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163qskesipl.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163fzbejkqa.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163vcmmeqcd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163jkraqyne.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jlrqxkdw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163lowdgvpi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163nlhnecnj.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163nxwdvhlv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163hrzfsdpw.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163stxchdfe.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163edrxcvaf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163cpzmsopz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163satjicbd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zdxmnzes.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ndetsahh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163llzkwtgd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163uknucxfw.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163gdjvwvcj.html

[B07] while 循环
来源：http://www.xuanzx.com/163jbrzqbng.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163bxnzeynu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163nwtqvrov.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uldfkjgh.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bpixbaxi.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nphgmggv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163yirjwrxp.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163whorsgkz.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jgajmjpz.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163qblfweas.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163akbjczji.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163umgdkjyy.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dgbwsdfq.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lybtayql.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hiirmrwt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163tppemoom.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163dmymtkfx.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yqshmmoc.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163dexlxzyv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163iiyjpsuj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ltxfhyjp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dvrcagwp.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163oxuefjmt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mtlhzoow.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163pveqhqtu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163lyiirbez.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dvwqbxqx.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163mltkftui.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163tahljylc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163pmkrzqqo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163srelreui.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163gmuploka.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163pdsrfrjp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163lkebvjwo.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163knkmlfby.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ntzorjlr.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163utexplnl.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163gurjfknp.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163iirzcoqr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163xbvmbocp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163spawbzaa.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ktntagoj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163boscycmp.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163rfdqmwhn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163slwjumzu.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163anzbsmkj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163vtkxlvxd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163swqbpkuc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pwujywwz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ruxxbxzw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nkpfuhgn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163trndjjpt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163gjviqouh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163duiwmhfl.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163bcufwpqa.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163binsjdhh.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163xrmtdflm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163aznaeifa.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dfxzghyb.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163jmnqaqod.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163xqqcthlx.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163dsixyyhf.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163fiqoagsf.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163yetjqfjd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163cwpnisnm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163xgchadnz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163loybsxoy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zmryzqwc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163oeyntkdr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163eqowufus.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163vzirmdpt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ctdvhwos.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163dahftbyb.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163tdagwptx.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ofyblgjd.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163klftlrdy.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163efvhywyl.html

Java: a && b || !c
来源：http://www.sxryk.cn/163wuwhuejv.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163diadtshs.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ktzbrvxa.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163sbebivbu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163vzgknyby.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163nlfojveq.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163nszryvlw.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ifnjodku.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163uhfltlcb.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163phtpqfoa.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163icmojzad.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163jgvwqilx.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ktqtgous.html

================================================================================
来源：http://www.xuanzx.com/163vofbsoyp.html

C. 函数与作用域
来源：http://www.sxryk.cn/163zkaesvip.html

================================================================================
来源：http://www.sxryk.cn/163qqeiijld.html

[C01] 定义函数
来源：http://www.xuanzx.com/163rvmqpadc.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ouffcbrv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163nsvqwrzr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163vryhcmrn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zulicmcs.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hwypmxan.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163rfligvcw.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163owlnpdjq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163omitsqiu.html

[C02] 默认参数
来源：http://www.sxryk.cn/163zgvjciaa.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163tehyobdk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ipbvmmyh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163shiarcnd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163wsrtqdem.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163qlkyifhk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163nsgbfzhj.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163uudbcwgr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163iyxgiinp.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163dtshgamb.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163yurbdgct.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ddtesdoq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ngwrqrsc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163olrkqdpj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163grqqkopa.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163oymmjxhv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163pgmjhemm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163htnaxqdz.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ftmllewx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163fiqbqvzs.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163hgkqtzfn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wfilwlrh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163koykaggv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163olucuksi.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163gizipkwx.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jdfafmrb.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pkydttyh.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163sdnucwfq.html

Py:   return a, b
来源：http://www.sxryk.cn/163hhkwblme.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163daxaurdl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163fjotiabn.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163xyhkpevx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ppghvzfx.html

Go:   return a, b
来源：http://www.sxryk.cn/163fkgdkssj.html

Ruby: return a, b
来源：http://www.sxryk.cn/163mvmafrcw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163denrsqpj.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163vtxzhqyb.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163aflkahrc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163gnuxveov.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163nlqskfbz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163dstbqhip.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163wahvlhre.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ozhicngs.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ofibqxrb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163lfnfabwf.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163lvajbcnd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163lsonnxix.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163puhdxrrw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163wwrukggg.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163twsalkzl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163mnhdfjcq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163tlplxrpm.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163gboskhsk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ixwgmcay.html

[C08] 闭包
来源：http://www.xuanzx.com/163aqsmtocc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163sattadpd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163cphmldiq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ryqbbzuu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yumxbcnw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163nwpysxkr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163nkvfhyup.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163yoqtzxbb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163okeinsyq.html

[C09] 递归
来源：http://www.sxryk.cn/163npcpxmda.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ocrykvze.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163llogmdjj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163sucvwrof.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jiqxmcmu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163lqkukwsp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vxndlcqx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163zogsuhar.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mtvtwsyn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163vgqeqodd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163feeuiqru.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163hmqwvvgi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163fcamlcmx.html

TS:   同 JS
来源：http://www.aibaodan.cn/163nnaxvqhm.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163uccuaozf.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ijltkghy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163czvfelfi.html

C#:   块级作用域
来源：http://www.xuanzx.com/163rivmgznr.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163zftyjajr.html

Py:   from module import func
来源：http://www.sxryk.cn/163bxfpmtih.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163jvkxbqkw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163twqxnlwk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kjintmzm.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163goukngkx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nomkietg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163qtdrfcmq.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163okmqdsjx.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163pubobspj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163lcquqzew.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163pddjwaoa.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163buutnosg.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163pgezwbci.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163apjjntzq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163wjiqaswu.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163rimykmbh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163vicwqnjq.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163sxqusivz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163gepsacun.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jjhqprpt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163haeoedds.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163sepooxpc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tbddthia.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163fsjjjsax.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163jmloazxo.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163azhqdiup.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163rkarlddl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163xvqewyww.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163pjehlrha.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163jrzfbgke.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163rklxsbbd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163bpoaovct.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163capyxnkr.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163cgxkikur.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163eihmqrdm.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163jigwprvf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163dyfdslyo.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ocusqnmu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163gnxrtmkh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163gdowdhbx.html

Java: // 无解构
来源：http://www.aibaodan.cn/163lgysxeod.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163gaqhksru.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163vyrkuuef.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163hgloffbb.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163adydmtwa.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163jnkppizm.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163wndhygmg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163qavxmuck.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ixeopdnq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163dmebrlcn.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163bqjveijr.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163eudjjksa.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163hgydrffp.html

================================================================================
来源：http://www.xuanzx.com/163nmangtmy.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163xworsgzb.html

================================================================================
来源：http://www.aibaodan.cn/163uzypvjnr.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163dcrawfox.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163fagcoind.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163uxtygxpk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163apmfhdam.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ucnlhgja.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163kddmooai.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163cbogmioq.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163hukruxhv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163efikxtbl.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163aouqcark.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163zkbbpepv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163gqncvill.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163yifdqmye.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163qaflijuu.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163jmbahzgp.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163farmlqot.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163jclwxhkg.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163autbtuwn.html


<!-- 参考信息 -->