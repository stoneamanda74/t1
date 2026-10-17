外链999!wailian999！

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163pfszzvfu.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163bsyabxaf.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163jlwdxego.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ubzrvynx.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163opmnwegv.html

================================================================================
来源：http://www.aibaodan.cn/163fhakkgel.html

B. 流程控制
来源：http://www.aibaodan.cn/163hgfkxtwo.html

================================================================================
来源：http://www.aibaodan.cn/163qettwsus.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ablltsnf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163trpepuin.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163hefmdiqv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163iboefqwx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rzrjqhao.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163adejmabn.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163hkmkafky.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ehqiyejv.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ohowmcke.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163nvgyiezv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163hfwjxcxm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ldaqebpm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163rajigdzv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ogazxmzs.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yvtufzta.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163boarzfwk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163qczsohfy.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163seaaekey.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163hnreyobv.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163fwhwvqcv.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163fmxnkzbn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163rwvrfpxc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dnkqzwlu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163licgocbl.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ezikptpw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163ixylmddg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163tspgiewb.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163gwnsttxv.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163iiwtowxl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163jebksjok.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163uqjmrrrb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lnwtarmp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163umeqmjaq.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163snwdzugj.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163rozoscsd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163bghdyctu.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163muawylpo.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ggagtfkn.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163trtpxfut.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163mqldvoxo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ilvucqog.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163keiygvfq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163gbhlevok.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163dqbgafru.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163kiymgzcm.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163iesajemt.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163tisdukdx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163vejknofh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163nqhxwjmr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kjayqmqd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163afziztel.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163zzbaodbb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163mbjhcqcv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163athxnoja.html

[B07] while 循环
来源：http://www.aibaodan.cn/163olwcanea.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163bkctpxtm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163fdfxnpec.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hkrvyxbd.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uvyjaguz.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163awaszngz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163pwpgotlg.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ovqaqksg.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163eunncdse.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163pesswnbf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163qxjjyjdz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163lykmfsdl.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zazpqeyg.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zmyjilcu.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jsonfjad.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163rvzophad.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163gkddlkxy.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gcxkxmhh.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163hpoqviil.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163zcutoldt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163wpsbyhzh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163oxnvducs.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gktfnluj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163aaackifu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ixheawpq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163qmzikgct.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ndqbbwzp.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163slpzggtf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163gocyxxuk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163gfbmvfuc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163tugfebrq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ireeobld.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wwrriujh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163dmdbsrhv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163vyotssvo.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163itpjhmgn.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163sszugfsg.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163yokpgijj.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163tpaccumh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163kmvxixkk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wfatuplc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163jlhgzkre.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163kmvhsogo.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163pbkcghtu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163iijbppfl.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163uufaultk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163abpvdgwf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163nekukpap.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163shczeskz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163acaczmid.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rxxctjyl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163kvkmyssq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163xnwzblkf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ngkvlgbl.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163sdxndsit.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163mmjfgeoj.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163gbxatmrq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fhschlnc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163jjoabxtc.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163aqzsxrcw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ezmotobw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ziqptsnk.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163wckqpeps.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163axbocgoe.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163hqlmlayq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163zasfsfey.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163haongdzd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qdtflvec.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xxqegkxa.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163cwnnsluz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163kzagjjrl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163cuiioewk.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163geuyxrkt.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163pbhplfel.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163nhhtejuf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ceeidxhe.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163pvhojvdc.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163zwqtpipw.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163khfceldt.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163tgxeptpi.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163pbdrdfat.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163yykvtzxp.html

Py:   if not data: return
来源：http://www.sxryk.cn/163tbkoeesp.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163zxdvlbqu.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163xrpdloux.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163iyyxfkyi.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163chqwjssf.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163qwbsymka.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ptpubtru.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163akebaors.html

================================================================================
来源：http://www.aibaodan.cn/163geudwijl.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163bibyxlmt.html

================================================================================
来源：http://www.sxryk.cn/163mcawvpjr.html

[C01] 定义函数
来源：http://www.xuanzx.com/163zcukgibo.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163dznvergj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jefvcxwv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163xlkuykkn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163pisghaes.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cxqflgyv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163zxgxazqw.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163rsbqpyrf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163medyqvtu.html

[C02] 默认参数
来源：http://www.sxryk.cn/163faivxhnp.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163shgcfdiz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163uwraofxb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163jkuaqvsd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163hregmbfc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163giauktug.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163dnppxmee.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163feuzqbgf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ybaqiqbv.html

[C03] 可变参数
来源：http://www.sxryk.cn/163sbwanjlk.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163crpqfbya.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163hgtopqfm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qpwgsfjw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163sruvwdmq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163lmhlszcj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163wwsdivin.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163kggkasji.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163qkamnfoh.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163imzugyio.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ardaxitk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163nygiavhk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163szxywwef.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163snpzzlcs.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163owcphisu.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163theatgxl.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163peaccbjy.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163brecyzhf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163lyklkfxx.html

Py:   return a, b
来源：http://www.aibaodan.cn/163yceohenz.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163prswodmt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163mhzxubbl.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163grexwreq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163idnpgwfv.html

Go:   return a, b
来源：http://www.sxryk.cn/163ylxzwpzi.html

Ruby: return a, b
来源：http://www.xuanzx.com/163zmbynsut.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163bgczxfuq.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163pibmotyd.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163juexcspi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163gbsrwouq.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163hriiqdjy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163tvvbwvtr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163zkqpcjbh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163kletfbpr.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163icktpzjg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163hwcciuhp.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163bqvovikx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163lgldqani.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163zrapxhdt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163kiysiglr.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163qxtjsrfe.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163nhlvbjxe.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163aahkuypb.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163zfgjguud.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vybvxhht.html

[C08] 闭包
来源：http://www.aibaodan.cn/163wwbibzcj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163kwpxzdll.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163bcairrea.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gyfsvjrv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mavbbqrl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163uygnmycf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163gcmaqjie.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163bebypjye.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rmvsvtsy.html

[C09] 递归
来源：http://www.xuanzx.com/163puwalkth.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ayphrdri.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163fyzspmwj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nnlcsuxh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gjcpsnhq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163wrsiuruw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163xhrgmcuw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163qxwtzlky.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163oigxsbbb.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163vrxzvruy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163htnpwlbp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163xzifiyxl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163fttfxuzk.html

TS:   同 JS
来源：http://www.xuanzx.com/163madthcwf.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163rrzpptcz.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163hercxzck.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163zjpylztk.html

C#:   块级作用域
来源：http://www.xuanzx.com/163yqpsijea.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163hschknle.html

Py:   from module import func
来源：http://www.xuanzx.com/163uewdxobq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163absiccwk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163xxqcnyaq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163apcfsiml.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163hlwdznhg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163bafnxspq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163adsbiywg.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ohjquwqm.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163dqmaiuhe.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163vtilepif.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163lyiahduk.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dbiunbwq.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vwnsndws.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163usztvzwr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163alypipzz.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163hczucrjo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163abxgndcm.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163pbtognsa.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163lygfagez.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vahmsguc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163etprgenh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163jlbezvrq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163oymrnevz.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ygcdwjgm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163yonnaxgb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163szlrqmox.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163gauonxam.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163qnljksrd.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163glwpvasl.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163sxjdperu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163uelwtruk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163chsmoqcz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163lrgryums.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163nvvetsfj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163duaafnrq.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ogshnvhf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163pcxxzyrj.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163atrfyjvd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163pktztpcx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ixivmseg.html

Java: // 无解构
来源：http://www.aibaodan.cn/163eytcbqts.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163khankqic.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163gotqygwx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vrnnlfqc.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163xrnlslmo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163gbowblvh.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163kjawqujh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163bvuitdil.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163fokdqnow.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163xrarbkfz.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163uzogrdti.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ijbgzxzz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163fgyuoqxz.html

================================================================================
来源：http://www.sxryk.cn/163hwcpxupx.html


<!-- 参考信息 -->