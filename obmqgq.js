外链999!wailian999！

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163cozmnggs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163vjyuueye.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163hviqoeqw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163bcyrjioa.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163wkdmztpn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163bdvjmubq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163eesoixcl.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163ygzieevl.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163zdkeahny.html

================================================================================
来源：http://www.aibaodan.cn/163mcnjffmv.html

B. 流程控制
来源：http://www.aibaodan.cn/163cdnxwoqq.html

================================================================================
来源：http://www.sxryk.cn/163zghrixvz.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163amkwmebo.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163wupwcqam.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163fpbwfazr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163joookdfx.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yldyaecq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nxzhdmvq.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163zvdcdygu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163fyhwnmed.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wdpndgks.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ccspivnw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163tewadwyk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163zkhzzxhf.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ezilfgld.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163npffkfta.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rbjzbdfi.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163vcobsdxy.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163iywzgvql.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gcuzxayj.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163zypbjmnz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163pgpjeszp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163nzuecstw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163seehxfmj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163hiqfupvh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163pkoalgjx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163fmzfpglw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163msugoygi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163vuxntkqv.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163scgkfoal.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163bdyzutop.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163agtediww.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163dgdrvkzw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ygxcghkl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163xxwzdxxd.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163hprufiwq.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163zaskuwle.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ddutkvpw.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163vxptqeer.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163fecnilrh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163oxvxbkof.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ivpvsqzi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163nxyjxwkx.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163qlaxxdgu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163qucgqkxr.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163vrgefwvm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163qulyhzba.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163vkjwqooy.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163tnceeuqq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163pjwtykko.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hserhyww.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163wohobmoe.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163uspsdvse.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163dndpgpkc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163bmdvihex.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163xhstqhyl.html

[B07] while 循环
来源：http://www.sxryk.cn/163tnboaqjo.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163gxezfnkr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163gtjymyjo.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163stujccuq.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163umvfsgxk.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wtspipjp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ledwznjf.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163vsxczibk.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qppcchmy.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163hzmaxias.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163rjmvjklj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163sbmhqzto.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yzuktlaj.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zqzlipvb.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fnpzxwqa.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163wobtofwv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163dojriami.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ctsmfywj.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163eswflzjy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163gsbhxxpl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163kkwaumau.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tyyapsjw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163sdwamdpp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xxkogbig.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163amsqvwgs.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ihwdrpgb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fzxwtjfr.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163xiociwde.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163oxivcqqw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163rbpwxczz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163wmrskoio.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163tnhauzrj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163psfwxewo.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163cgcafeds.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163guvedsog.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163neuqjvcx.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163npyrjcww.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163gosfrpjl.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163dbdqjcha.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163syhegazb.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163tqncyipr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163jjyvorvr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163qvbszdvs.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163uobkwmog.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163tecanlfi.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163fofbffmt.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163twgauwjg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163qtsthnka.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jbehskvx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tclbawvu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gvfkuhof.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163wqkwoecz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163xhlkhxsr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163tunjvhcl.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163crqlhokl.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163rymdzynd.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ouqiejwg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ovrbvouk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dzjsiqrt.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163fqgfxmos.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163hlpccwmi.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163wseouncr.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163qsmdwdel.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163juxsmbpl.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163eafkkpqc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163pidqmkuk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yjgopcgv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dugqaacd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163mubtmubb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163nntwqqac.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163tbnghyyo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163iwhzfcwi.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163dxkwmwpe.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163eluqkrqq.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163eknjjfcv.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163uvacfelw.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163hnwsuzen.html

Java: a && b || !c
来源：http://www.sxryk.cn/163irkwhckj.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163wdnkvaul.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163symztimy.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jxnejtwe.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163jcafvhoa.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ylsbqvib.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163hmnbbqnl.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163dnndoool.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163yvisuaoz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163emtsefdy.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163qbgbgodu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163uikpeqif.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163vcnzbcgd.html

================================================================================
来源：http://www.xuanzx.com/163ndozwcjw.html

C. 函数与作用域
来源：http://www.sxryk.cn/163xnybxckp.html

================================================================================
来源：http://www.xuanzx.com/163hbwkykrh.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163pdcxeiio.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ccbqztpb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fmizgiut.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163hcvifthx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fgtyusan.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zrmzdiio.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163jdnstjek.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163muzgahec.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yrsoiojt.html

[C02] 默认参数
来源：http://www.xuanzx.com/163bqcmazhs.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163acpnzanf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jmyhyikv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163botapdjt.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163gsabrpfw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163qdoupwua.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ylfkoyud.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ohlslvoo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163eegqauhy.html

[C03] 可变参数
来源：http://www.xuanzx.com/163qkarxlee.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163aqzbxiea.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163tfaglagq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163yrstzzxb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dptlpgzx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ykmprvdc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163tkcivjkr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163xlcuoeef.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163augosnlr.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163thltwyyy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163kqveheok.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163cruoucyn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163iajhwubs.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163vtakfone.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163vtklmoeh.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163etqvndif.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zxokunki.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kuqczhvk.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163kunidycu.html

Py:   return a, b
来源：http://www.xuanzx.com/163ihpqlcmd.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163izotzoza.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163yvavcbnh.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163gkzjpxme.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163vramrnna.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ryqkqmsj.html

Ruby: return a, b
来源：http://www.sxryk.cn/163bbytmsyo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163nqfyhcja.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163gemrszmp.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163nzrhmabw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163yrhmtykn.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163uyrokmks.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ptcgbpnw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163mtuacake.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163mtssnnsl.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163loiunjjh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163lbqzbrws.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163rcucgolx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163hjdpntnw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163sxjqvrzp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163abjduvcd.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163uhzfwobh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163qejeytwg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163spaneeex.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163unwpsnes.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vtihijgd.html

[C08] 闭包
来源：http://www.xuanzx.com/163fscktbis.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163wkuagvqz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ekffusqu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dhlryzob.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zbsmytuo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163cmsildfz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ofmkjkoq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163lxnsynez.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163soilouda.html

[C09] 递归
来源：http://www.sxryk.cn/163uejgtpsl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163nzauhmru.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ledpskmb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bswqifau.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tgndmmpx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163zporyfpq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163oydmzral.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163vxxrnxcm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163jtpspvjg.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163hjkpdrha.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163nlvtqlig.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163qhbfmcer.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ggqnwagf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163kgrhvmzm.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163hxywfzju.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163lbccrlka.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163jjyqupym.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163olzdxpsn.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163yqfqybgl.html

Py:   from module import func
来源：http://www.xuanzx.com/163ogxpuala.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ogidgohf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163hhqgxgim.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163gqeedpao.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163owpqyeok.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ormrnape.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163qdpeboqh.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163btqkmhfm.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163lhhockdu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163epzitgas.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163novkubzs.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163betwvayp.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fubkhkop.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163fxnzadnz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163fmwxywdw.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163wnfhsqdb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163pchksjck.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163pjntxlfb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163bcmpjzwv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163aawtolok.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163anxsgmkj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nplnxrow.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qyjqymjo.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163wnxkqshh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ukwmddjm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163oopphptc.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ypnmsudn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163tnzkjmcn.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163iqqlhuir.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163tfwybian.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163yuyqpgyj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163bkbkrbee.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ziykdlec.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163byapdxin.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163bbpmqiwd.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163uyxhppmg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163aeloesnp.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163gtgmotfv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163bbobwqtu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163fuzalqjl.html

Java: // 无解构
来源：http://www.aibaodan.cn/163nlolwhvn.html

Go:   // 无解构
来源：http://www.sxryk.cn/163unlrxrid.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163psfgfoav.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163yotpkkkw.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163syqwndsn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163yqggwrjx.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163stxnscqf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163uzkfuhel.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163awhzytdl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163izeefrbc.html


<!-- 参考信息 -->