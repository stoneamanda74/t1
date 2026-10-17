外链999!wailian999！

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163yanbjmnh.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163tjqkjnwh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163xdgeukft.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uqeniypz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qgzhzeet.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qpmwqped.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163bdgynjxr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163tjbfhvvk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163feqqfgky.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163zvqsnkcc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163slbxyiwl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163jobiawna.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vhvxhatl.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nmmmocwu.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ubsvauxi.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163wamxsgdr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163dzkkmhqw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zauhukvq.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163cxfsdxpv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163tgeppqwa.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163kvchmsob.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163shakfokr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bqaizbyu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163ugupstlx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163zgixghrs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163sskebats.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163lowhvjwt.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163rbpcearr.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163edxwefhy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163fbfimgvu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163dbprpwdf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ucramyhh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163vzpgblcl.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163pcqjvvdi.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163djtqeike.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163qlnzrsml.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163vlmlzmof.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jxhetqeo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163yfgxoumc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163qetopbkg.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163tximjgis.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163evamwnhe.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163qnbpcrix.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ythxwagf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163knvqcooa.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163gkipglzb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ghsajkpz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163fcqdfpog.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ydpvjbyr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163dhrtixia.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163hrgwligc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163zxaqktzj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163apwgwrhv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163hwjxdksg.html

[B07] while 循环
来源：http://www.sxryk.cn/163icsccojj.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163qelmhgho.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163qlkgqwqi.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163sumzadqr.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163spgpocro.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163enkyryuh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163hqzjwder.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163tkmfdhvl.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163btnarofa.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163iyjmovts.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163buieuqlt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ntbyjhnt.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163axhrhpxg.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lpxaqkpr.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dvobxxzj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163dvivftnk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163mrpiketj.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163eauxgwbr.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163gqogvhah.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163kcavoynl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163uevixycb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hsuagqql.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163acrakzkh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ipckxixb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163sonatuwm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163cgrwdffs.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gyqyoeuj.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163xkbfvevl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163qjmiyafl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163olvnbkyw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163raeeusup.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163xcpkqucd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163edzvuhhm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163zpkbcvqv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163hciekccl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163assxcnbt.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ohgacedo.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163zapocltq.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163qoxjkufz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163endovurs.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163oogvxqyw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163rfotcyxf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163yzglymcn.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163jimcyacy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163tfqkfleh.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163aqamndke.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xlskwoeb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163wlkanqmv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xldgzzco.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ipplyoqh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pqzrebjp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163qgmqroyp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163qrzfdubv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163pvhacefm.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163qligebye.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163gmysaqgc.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163bdgfusxx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163codyipwd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xqypmvfe.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163gnwrfqgc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163mtpefxnx.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163tklymkih.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163blwrgldb.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ogevmtlu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ryazsvvr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163qpeopgkv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nyrohbdr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163wycsldtq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163cgayyeuu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163rtxqwqwh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163jylzxukv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163hsjkgymb.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163xaqrmwhg.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163aevyydsf.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163qusbvghs.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163jkpwknae.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163cvsdnpjh.html

Java: a && b || !c
来源：http://www.xuanzx.com/163niqadywi.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163giwarugq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163lhstjbwj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163idmokamb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163xgnobruw.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163tdqceiul.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163vwucyehu.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163jzjaalva.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163hadwugjh.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163glaafscu.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163rcgbvrmq.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163xppvxxrd.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163zjgxiuim.html

================================================================================
来源：http://www.xuanzx.com/163gusfeutf.html

C. 函数与作用域
来源：http://www.xuanzx.com/163tdqqfdlw.html

================================================================================
来源：http://www.xuanzx.com/163qxldyvjv.html

[C01] 定义函数
来源：http://www.sxryk.cn/163cdqcrdqd.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163jepovhsk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163woaffcmh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163mmbrzyyn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rhhksuwd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163sxlhisdb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163fdqocpqi.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ilpvaeyi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qznpibsb.html

[C02] 默认参数
来源：http://www.xuanzx.com/163iuuxqroq.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163aazykgqj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163pkvucdkd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163zpygxnjz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163yuuzctpz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163eozzppxy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wxuhakzz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163vpmsyuyx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163lurofvoo.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ufronccv.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163vkcatdze.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163lcfjtduo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dzuqlhpg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rbdkedvn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163gwczepzs.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163qjrrcbez.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163lzcexqbz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163xihxroxw.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163sqsbvdba.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163gzcbqswq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163woplhuwm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163nmijlwel.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163tbwrptaq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163mhdxihtv.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qwiogimt.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163megkjruc.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qyvzfiim.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163rllzhwjh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163pjkvhxgi.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163wudiqqnq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163repzucrf.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163hxlexrsq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ovnjlqsg.html

Go:   return a, b
来源：http://www.aibaodan.cn/163hljtylsw.html

Ruby: return a, b
来源：http://www.sxryk.cn/163zyftuozh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163xmlysqbd.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163yeejcphf.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163xcofmpfl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ejfckrmn.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163znvjesed.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163hetrkiox.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163qlghrjby.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163nwztmami.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163rxkcnifs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163zjrleqqz.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163wyjuvwvs.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163exdfdzag.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163hfjrlpii.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163nuienzqm.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163agnnrpov.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163mpkvrxoh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163txkjamxa.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163uszfjnmb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163suapztjc.html

[C08] 闭包
来源：http://www.aibaodan.cn/163tosroyyt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163zabnopth.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ywvltoyy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ejqrugxu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fdvnbsqz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163mfzdonwn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163sheilujr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163fykpbdzn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163eigvnonn.html

[C09] 递归
来源：http://www.sxryk.cn/163jnrpokoz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163yncebabd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163wvvfhpxn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163seqficup.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mgvjwawn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163vxhsibft.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163uuoelhzx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163lxvzhvgm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ptuziukr.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163jykzxxzp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163wvcbsusf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163lichvbsx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xxwdpldp.html

TS:   同 JS
来源：http://www.aibaodan.cn/163sbeimept.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163zehxupjj.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163rdrlnjmq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163mzkzvkho.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163wwrdrypt.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163kzcarsle.html

Py:   from module import func
来源：http://www.aibaodan.cn/163belvmskp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163lrqfwycj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163rbdbcarc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163cvavampj.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163hguugpvb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163pacbllpt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xxnvhzqi.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163bfucvzdx.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163dlvwitei.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163xkuwmigg.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163yjiefnae.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xjffluln.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163daljhfzn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163djdxfsfd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163qnqwbqit.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163mgxtljll.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163rugfjebi.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163mofxrlss.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ojrlbcmx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163cvltzhaj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163dvqzdkcs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qqrdhuly.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163koexxuvi.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163fqxlvfiv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163elwcjbmm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ekqmlfvz.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163uthebohx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163glevtlzq.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163shudrwpl.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ruqizpgw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163pwhvgsvt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163vjagirgx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163xhynssjq.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163wzwyrico.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163defsmxxp.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ydyuxoet.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163vcivtexo.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163thwpmzox.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163rmgqecam.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163nuhmjgoj.html

Java: // 无解构
来源：http://www.xuanzx.com/163mtagyxzm.html

Go:   // 无解构
来源：http://www.xuanzx.com/163bjbttblk.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ngygnmgk.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ppjdfokc.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163sotdshbt.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163hclqwlmj.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163swvyiwez.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163uxdoborg.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163kiadpnfi.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163zhfofjkx.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163uokfacvb.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163uxzctciv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ygeqphrl.html

================================================================================
来源：http://www.aibaodan.cn/163zzahiysp.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163fwymcffh.html

================================================================================
来源：http://www.aibaodan.cn/163xdgptyll.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163zpyqvvoz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163hgrtsivy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163iusghtso.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163tcnhpvrv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163rszjmbep.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163tvurwhkb.html


<!-- 参考信息 -->