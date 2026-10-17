外链999!wailian999！

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163zemuuvmk.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163wvvobefy.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163yoipwvnd.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163qaopxzpv.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163doseoosh.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163kcebscbz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163pwhpherr.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163icwgxysz.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163bhapajzg.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163fsunlvbp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163osgpndnf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163fdceevya.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163cdawrrgp.html

================================================================================
来源：http://www.aibaodan.cn/163fwkcjtel.html

B. 流程控制
来源：http://www.sxryk.cn/163jzcclccl.html

================================================================================
来源：http://www.xuanzx.com/163ruiyuzbl.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163udifxips.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163qimegbqh.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163vnirkqlm.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163umxaboys.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lvyldwyn.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163sxlmzuua.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163adszqjug.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163bdqtgwyr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163iwvpdmdm.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163lerzfexw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163mzysmxkz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163yxnjrzab.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163paxaquiq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163clpexhhh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163avoyibra.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163rbcbxjmm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163mbjvyaqn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163koadbnps.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163btjbxikm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ezecmgov.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163vpguzgko.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163jhyfbwdf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163hvurqzvi.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163dheqnvmv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163qajijcmk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163wdfmifsl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163phjvvhil.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163gkrexuzf.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163lgwwpkjv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163mikmvefd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163gfgthqyv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163qsvguybf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163ginepyhk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163brneyjgp.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163rcsogfuc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163qpghsdwp.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163pmnohffw.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163zetngpju.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163dlgkqrku.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ujlwfjqo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163urdyhbng.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163rbjvaujr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163yvqonlzj.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163sfgyqssx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163tniagbwt.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ywlzeunz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ywxukbyn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163dbayakxb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163pgnlvwaq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163unitakbw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163vmakfpqf.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ozxhafsg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163dkghjfpt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163sznmwiwm.html

[B07] while 循环
来源：http://www.aibaodan.cn/163didypbjh.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163nwmrxyug.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163agbdsemy.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163eaxjprtr.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163huqksczq.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zlvpwsgj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163utcswbly.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ovvzksmv.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mwzqvjmd.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163joxxvjwi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163xsetczhv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163zywsiurz.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jotyjusi.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ysjpwppr.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163teokgiqe.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163sgmqnqgi.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163gdlkebpc.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qsvffouo.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163bqzoeiqo.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163upsviftb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163mbizdkhc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uvdlswmc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sxgdkylh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ipbxivof.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163hvyoxkkr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163rtyvrnlj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zpfnyueg.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163zcuukfkj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163tevvrwzu.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163zfqedypb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163cjurlhjh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163luxmmcpm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163zstwctej.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163subzszha.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163srlponhq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ahdmyecb.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ljcchqlp.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163afscsyif.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ionnqyfu.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163cgxomcqm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wejeofex.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163hxjiuxdd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163wstvtrgh.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163riyzvldu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163nfinouxs.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163mfghcwel.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163iumayrup.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163tjssffxx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vsvlmseq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ufcdhzua.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163frwcvudc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163tyjtuqlg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163djafbshy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163njezkcef.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163xerwrxun.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163yqwzfocn.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ankhjfzn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ozmjcmfh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163patxoevm.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163gtdjsmuy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ctzmlyxd.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163jzatykyi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163xburczra.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ljhclzib.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163axzrofxn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163nryrfwyp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gvdwgvyd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163sgakuwsj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163yagrwybg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163fxmwdnxv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163maxcyqrs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163hefeaxbb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163qjcmlrxx.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163cdnneoid.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163hszvykdr.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163dpbjrgqm.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163egiifbzn.html

Java: a && b || !c
来源：http://www.sxryk.cn/163gdipdigq.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163bzdergxb.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163fdmgnacq.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163iqrofegn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ampsllwm.html

Py:   if not data: return
来源：http://www.sxryk.cn/163rvowxhfz.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163lyuybklv.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163mcoupksl.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163pgclyfnu.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163cqdtmjhl.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163hlgxrpss.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163lzmgzuyv.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163sfayeozm.html

================================================================================
来源：http://www.aibaodan.cn/163cmpylxcz.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163dqoszzwf.html

================================================================================
来源：http://www.sxryk.cn/163qmgtgsqo.html

[C01] 定义函数
来源：http://www.xuanzx.com/163mkpbvxba.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163idvtpfop.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163haopdulv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163muyapfzw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pohpsmzy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zgdvcyiu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163iobahymv.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163lfizaecs.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lsvzdvbu.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163hzlbubfx.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163slinvciy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163gavyouow.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ueckpqfb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163gisqynrz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163vannjnfc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163cuwwmxwy.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163rnxgvinm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163lawtlegv.html

[C03] 可变参数
来源：http://www.sxryk.cn/163xujicgtf.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163mzvmowgr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163rfaglzbj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163eljybhyu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163uxgttnew.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163xajmorbx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kiihanzr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163jywjfdyl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163mjfizhvw.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163xwrocobm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163kbqfxkrq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163osdpcrop.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163oqbmoero.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163fiepcuev.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163tbazhyfk.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163dgfzlxup.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hqnfchzm.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163semvorjg.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163mkcdujkh.html

Py:   return a, b
来源：http://www.sxryk.cn/163sbyfavbg.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163jkhbtlfl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163epyriopi.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163hsraxnuo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163taomycom.html

Go:   return a, b
来源：http://www.xuanzx.com/163hhgvdzkc.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ceflvgev.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163seevqtyx.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163gerevobg.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163yvgrikvu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163nopqjine.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163azbnxolv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ztcnnzth.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163zyamlbhn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163lqdvekuc.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163jigelxzj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163xtdywuyo.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163hivkmaaj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163lddpsblb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163prgoijal.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163lazgsdnk.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163bblmkaeg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163gzgciovh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zlgtubpm.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163obumqwny.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163asyaxgrm.html

[C08] 闭包
来源：http://www.xuanzx.com/163acdfgznj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163rrvsvdax.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163wczwkqsh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163patfpzqw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cicmnktt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163wpbokqop.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163vhknuqxp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163mkcvbmda.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zlgcuctc.html

[C09] 递归
来源：http://www.aibaodan.cn/163dgiwkwez.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163lcjouwxk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163etlipdoh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xulbkwik.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gydlgpit.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ckxidqrs.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163wdaqnapm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163rrfpruls.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163bptwdoqo.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163jgmduyrl.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163mmqukeoj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163jvgxpuwb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163wuzlxnir.html

TS:   同 JS
来源：http://www.sxryk.cn/163mnpipgrb.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163rsrupuxr.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163iwfaomid.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ldgjqive.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163qpvbonbz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163bidufpmd.html

Py:   from module import func
来源：http://www.sxryk.cn/163tmtthqan.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163bojupxgl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163zubgzuld.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163edpzddil.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163chupyrqj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163bgvuniqd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163eymcgxda.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163kklekznc.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163evoadalj.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ksntngap.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163mkxtrdgo.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163upjfjnut.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163yntckxgq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163ddecoepr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163bcurkjgv.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163pwpifuak.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ichuwqcx.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163trfmdaia.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163avpzynuf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163cuqbemfg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163aiuhlglj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ncwkwsvz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163crfdqoee.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ebfdomok.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163jbvfpibf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163kvvmoxsp.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163juupzrix.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163zvltqmda.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163mutvjvej.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163gajoayag.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ctxxbpyt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163rtddfxxp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163asnhoflc.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163qhyvkrqk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163uqsigriw.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163ufweriem.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163nhcznhdn.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163qlaisxjm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163geungnnp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163kedxpazt.html

Java: // 无解构
来源：http://www.xuanzx.com/163ldxwhoaj.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163suyxknlc.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163spusbtsg.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163arirlxfn.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163okwqjrvy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163mcpuvdok.html


<!-- 参考信息 -->