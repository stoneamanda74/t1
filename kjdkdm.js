外链999!wailian999！

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gtsnrrbp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zohgtjqe.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163bgtlyzgg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ttxpoowu.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vwxfuvfw.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163crqivhlk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163gorrjvan.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163vfeveymt.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pvomjith.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kxuniymp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wkzwixbu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163muaorzee.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163crpkcpry.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tnyfdkjr.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163awnovcrm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163bbdgbmrb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163nlqriuyv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163skanwgxs.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zxpnauqz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163amjcaiou.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163agjbbofq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163nitmkoik.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163zdlgzktc.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163gnolcvve.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163cdnpcvbr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163mfvdhfsb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163tswxweun.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lkccvndf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163twyfkwtm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163dagflppt.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163lzavspfa.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163uuobtmnw.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163fpftpecl.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163olxydyle.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163lfqnrglu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163syjuakog.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163howrbugm.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163mtgebebk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163xukmwegn.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163rmnqqaje.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163gjfgdvjt.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ylbvpqfh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163gudgimoa.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163qkpbkxhh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zqfjsoiy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163onkbugjm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163llsqvrot.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163zgxcnqkg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ptvyxefg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ioejqbhw.html

[B07] while 循环
来源：http://www.sxryk.cn/163gedyhrhj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163fdqxvcsl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ajcyvclq.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163anvqybmz.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zhbhbqyv.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qhrysnfr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163iecxyisk.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163kxhysdwv.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163psretuhm.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163mwomtzsn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163odhkalum.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163mfdjsgmt.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kakkxkwu.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rpmbwnok.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163seaukhrh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163xpjbweym.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163wzdpvehh.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lizoqcsg.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163twovznny.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163oejxbbpx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163hsxsslmo.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dzfewjrs.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ccvrrgpb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cruqchyy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163horpuxgf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163bbbqhwoc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rovjcrgc.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163lqehvacv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163uslzxpmm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163etywxfch.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163hemvfvem.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163zkqiiacz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163athpkgsy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163aeqlmynr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163qbdcgqgs.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163vbigcyom.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163byjkknum.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163sjvwisxd.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163trwsrxbm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163dvgmdibb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163cjtjabts.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163bfzoovah.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163tmzwuwru.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163crssifib.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163aosblqce.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163upwimyul.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ozarxtzt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163dkfqdjll.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pdszdcrd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163eepmumbl.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cvpmxfym.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163gbivwawv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163nqzcjnil.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163dnjsvfbn.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163bwzivchy.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163szvuaemx.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163sfldhnkp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163eqdmafql.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dejomydy.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163yoxrqzbv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163swsowima.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163omairiqf.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163kopacqis.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163phturzvj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163cwwbvfmk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163npvhjxts.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dqtsrzep.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ubcgtrab.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xbxeiudq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163zuhkmcvh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ptxolyya.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163gdokqcme.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163vifddoap.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163cjwwlbts.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163onvrhhge.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163sotevvao.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163kqigtqls.html

Java: a && b || !c
来源：http://www.sxryk.cn/163kvvmfnuq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163dqbbqjoy.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163fzheedtr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163whacyvxb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ihxdryno.html

Py:   if not data: return
来源：http://www.sxryk.cn/163zfkpjxrv.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ouczxxyy.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163bhkbtciu.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163birmulck.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163eybvzgjr.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163fvkmkqjv.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163zpjyksvi.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163xzogglgs.html

================================================================================
来源：http://www.sxryk.cn/163jmblgpeh.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ubehpnux.html

================================================================================
来源：http://www.sxryk.cn/163jqgwnpin.html

[C01] 定义函数
来源：http://www.sxryk.cn/163wyxfqwfk.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163uldfpevi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cbctctfk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163pexgcorb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fzmszgqk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jwyhpdop.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163dqvdyxmq.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163bwaqdmza.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163trenepxv.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163thwkhnhk.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163gfgnxrvi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163opuecdcv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ecikldgo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163bllznrpt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163dnllrtnl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163yaydpwlf.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163plvjiasx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163xtvfxydb.html

[C03] 可变参数
来源：http://www.xuanzx.com/163rpwtmxiq.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163lzyhidxb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163rqcrhesv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ddisbzud.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163suoepedf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163wlorfaiv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163wcuspdjh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163npyksgro.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163zhrdfcnt.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163qeruxkbm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qhthutgb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163risirmdp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zaydbeal.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163xjzhqgsj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qeruwkyu.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163styoathw.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xjfbsjsg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fgqgwibi.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xnmkxpvt.html

Py:   return a, b
来源：http://www.sxryk.cn/163dpyjiwyt.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163rpakwubs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ihjxfsmf.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ocwhujlv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163abskvuhv.html

Go:   return a, b
来源：http://www.sxryk.cn/163krqaxplq.html

Ruby: return a, b
来源：http://www.sxryk.cn/163zmusaglb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163owslrtcx.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163nmswgsjn.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163gbxcihua.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163yiwoxjmc.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163biopsgne.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163pdqkcfgm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163rqkclkmx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163gidgixpx.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163mnvbogvd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ytnnpwgr.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163pxlfrrwp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163tasxybsb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163bsozzeid.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163siloulsq.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163hidqkvqk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163facyqdzl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ghbcrnep.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163suvhsoaf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163owxoxzmy.html

[C08] 闭包
来源：http://www.sxryk.cn/163wxahmyrx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163qadgpqxy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ayxsegtn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163znrxeqmp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jmrpcksi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163pnyjssps.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ugmckeov.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163lmcvkqig.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jeldnrwj.html

[C09] 递归
来源：http://www.aibaodan.cn/163rfazxtas.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163pemgztey.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163qaaesomf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163aixmektb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163wxcvnpic.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163yamzxkhr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vabaflbu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163palpraev.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xqsxbdhq.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163nxipzwiw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ycabhvre.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163luztdyag.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163czhuprir.html

TS:   同 JS
来源：http://www.aibaodan.cn/163egbpgfrx.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163nidiuxqg.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163fjswhvpq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163vjlewvdi.html

C#:   块级作用域
来源：http://www.xuanzx.com/163wshzbmca.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163hsplhgzu.html

Py:   from module import func
来源：http://www.sxryk.cn/163uzhjuwji.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163pqzyodbn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163oblxwiuc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ihvqpwef.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163dgcoinmz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163yxlifnso.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163mqgmnvda.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163tqrqdjyy.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163yvkpmkci.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163rcnmolyb.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163xjrimhrh.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163evadabjj.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163igxcweqh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163adycesyg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163kpcxgxkx.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163hqicbrek.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163xitwqpxr.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163lwzqeacq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163fsplyobh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163svtvldyr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163jddcjtar.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xlcpayny.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rvsyslic.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163drbxettm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163vkvszoeo.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163dcyixjvx.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163iaipqwno.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163zlaokfwn.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163qckqrcwn.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163gebdtyqz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163nlnbxyao.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163jwuzvkoi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163zpjedbln.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163xnygfxqq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163upppngvb.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163yrooixij.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163dludthhf.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163gyfldxvk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163bnkkpeag.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163odlfclpm.html

Java: // 无解构
来源：http://www.aibaodan.cn/163almkmgdx.html

Go:   // 无解构
来源：http://www.xuanzx.com/163onsrpbtc.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163dhpvmfyk.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163fgbnnqnv.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163rbgmruag.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163fpffzdro.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163uhmdemcz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163znekmoey.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ksvbqrra.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163onplmgxf.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163rafcoepf.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163kvkfbxqn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163lajaljmw.html

================================================================================
来源：http://www.sxryk.cn/163uxxpobgj.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163dejdpdty.html

================================================================================
来源：http://www.aibaodan.cn/163gviepxit.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163qdjdpawp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163mtknkato.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ioqfgwca.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163mcktnuhp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163mwdfyerl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bioqxmmi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163uprzyiqn.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ehcifzda.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163usqldpsj.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ziqrnuef.html


<!-- 参考信息 -->