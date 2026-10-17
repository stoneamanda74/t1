外链999!wailian999！

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fxvxjejj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yrajotzj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163wshhomor.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163zemrdgbw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xxqyyadv.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ewyhtsoo.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163pzrtqddq.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163bojpizkk.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163kypmkhsf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bdicejbw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163iihzrghr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163xmrjombi.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163pbbkafqf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vqwwmifd.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163agwntdzj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163xxkexqms.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163iylhbswu.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163oogvzbba.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163hrbvfzlb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163askplkpg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163axxjgpyh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163lhsfjkda.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163yhewvmza.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163bnmfjzhf.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163qygspexs.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163bxbspxkl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ijnoijji.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hcpvaspi.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163wbcspwia.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163mjbkbchc.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ltzjyaws.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163czgcguea.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163msoetxax.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163pqqztunw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163dinbmewa.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163wkvrirrv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hqwoysms.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163tqahqvhu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163rgycpwew.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ndiuahzg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163glpjxwmg.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163muxghxya.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163wppfgvte.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163znlrlmqm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fzwfjgip.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163pizqixek.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163mptrptay.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163jdtidwgm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163opkfraup.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163nxwovnqg.html

[B07] while 循环
来源：http://www.sxryk.cn/163nhnstpdn.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163wrzdbaju.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163howhuycm.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nirwuajr.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ajpsvuyy.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kbykdjis.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163gfwejcwq.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163dtwbwfdk.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zswffddi.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163gxdpzttf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ikfuxucp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163urktpycw.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ekdbxxfv.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ruugniec.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fssswpeb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163mqjbakux.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163yrmsroon.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wpfehirh.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163jhyinxvq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163qucgzqzg.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163pamzwbko.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163byzubnaj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163oqphdgpu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qprpkldg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163pgupazxa.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163vmvwbzyh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rleoidea.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163wgedkcvt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163bhikjzwg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163jdmysoco.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163evzooacl.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163nzkjagtj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ekcyqabu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163jdoovtwj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ebppqkzf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ennncugf.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ywjoqsgm.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163wjdclcll.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163rctjttrn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mjeehmsc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jltcvrvn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163afzrpefr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163dwzvvyoz.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163crwidmtl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163htjplsya.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163izqnwwfg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163tppysloz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163cfnvcjwl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163beprdstq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zzyqoihv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vxycbqcj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163jlcdbfny.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163qpwxtcjc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163wezlycey.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163uzbrlvyt.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163rlcxvwen.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163dwiefcai.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163bpsyxcon.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dteyhsvz.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163lksgytag.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163rtiiblee.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163uykwrovu.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163gpsdsjpa.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163untfvjgz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163nehzbikb.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hiqpknqk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bhtovldc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163sdilmcsh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163dixjfuil.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163erzdolyg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163uuiksotp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163gffdgezv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163hgsuijbt.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163axyccbfi.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163swnjeuob.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163kuqdiyqp.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163oqvuvkam.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163cejyuebv.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163omvsmdpz.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163kxxpggxn.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163fekbsrmk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163slvhwoof.html

Py:   if not data: return
来源：http://www.sxryk.cn/163gqdnpptu.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163kibtizuc.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163rsykgakk.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163lwbzgoeu.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163zcknjiqo.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163zekkpcbo.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ohnnpatx.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163taobrhkb.html

================================================================================
来源：http://www.aibaodan.cn/163xghvuepx.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163nbipblfh.html

================================================================================
来源：http://www.xuanzx.com/163tbujovwb.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ayhmrktj.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jvamjoay.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qsotxoqg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163wcsywqfd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163gioiflav.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kikrdsqj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163bsiweyhn.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163yvkcptdx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rzugurzj.html

[C02] 默认参数
来源：http://www.sxryk.cn/163mxwtftod.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163optbbjbp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163apjvjgeu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163blwebuyp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163gotiyoli.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163feynympq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163skmjncwr.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163icmrirpi.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163rbhwhszl.html

[C03] 可变参数
来源：http://www.xuanzx.com/163vskounnz.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163kkboheyt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163wcqdzlfj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jigoiwbq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xndsqvou.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163lqdqelld.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163cflrsukl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163jqdrkdpg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163fzqwaoze.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163dpdtssrh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qmdjsjqj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163iqcruwce.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163jqapdpfm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163fyaufnga.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163xramulda.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163csjdrnaz.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mdnsrews.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nirkqccz.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163mfpfuedx.html

Py:   return a, b
来源：http://www.aibaodan.cn/163yslypihr.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163qzatrlba.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163bdwizyuh.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163peuyhrir.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163gwrsoltk.html

Go:   return a, b
来源：http://www.xuanzx.com/163ndcrkxps.html

Ruby: return a, b
来源：http://www.xuanzx.com/163jpmwhqem.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163okvsbomg.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163bldilbfq.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163jogzapea.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163fxirejuy.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163yqzcrook.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ymscfzoe.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163qukwrjpt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163azkehjhw.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163bskbbput.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163wzuhbhhc.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163furbfgny.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163vcibcckq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163tfmazlek.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163knppneru.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163jawjxshe.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ujcfhfsj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163wsvlceeq.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163sydktufk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163hydjuejd.html

[C08] 闭包
来源：http://www.sxryk.cn/163jamyaion.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163cjijcjim.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163wzbpcjhp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163auuxgihz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163plklkxwb.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163aogulzpe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163hlqobqhn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163londvwyq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163oqcpoyso.html

[C09] 递归
来源：http://www.aibaodan.cn/163qdjvbsgu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163jlctejxk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163fpdkboli.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cylsvaep.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163cawhzmwf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163nrbtqxrs.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163sgeneklu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163dijbxjhr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163cyzvuonk.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163lejyrkfz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163xylogsvs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163czcyvmbo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163qpkykmba.html

TS:   同 JS
来源：http://www.sxryk.cn/163nmdcbcll.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163sxxvgphm.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163hdcwauis.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163dpaqbchb.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ddiecqxp.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163mbzgkjkn.html

Py:   from module import func
来源：http://www.sxryk.cn/163eaxrzewy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163jglgvgab.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163sgezcjxr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163amapacay.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163knmdauqn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163iegdksco.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163acouqarh.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163mpqqvzyr.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163hjytpwrq.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163umsssmwy.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163evnqwaql.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qyumwdld.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163sprbtrul.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163ezpobyzc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163velghjme.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163rgwxxknz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163zdbffksm.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163asetukur.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ribccmle.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gbfsbuos.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163cnopvllx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bykiyssl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jblbuzqt.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163shitzanq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163zwbsebcq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163whnqbstz.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163bskxathh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163thexwcdk.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163gtcsvjef.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163xsvwibci.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163uqayufdw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163nmfrokhk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163zmfuhxxi.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163qxccgubn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163hhxbwgkg.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163fbppzalx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163okmwujhd.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163uxhkybwx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163yyfualoa.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163diwounkc.html

Java: // 无解构
来源：http://www.xuanzx.com/163cjtthoab.html

Go:   // 无解构
来源：http://www.xuanzx.com/163fchcnfev.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163cdxfuabl.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163xfjbrdhv.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163fxgmbybk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163khhsoqzn.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163tpnrkkzd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163dmpzourx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163lzmzupxx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163zipctftf.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163zuiiepsq.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163uwkcjpuw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ebiajpct.html

================================================================================
来源：http://www.aibaodan.cn/163wtnvqfbt.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163dafebiih.html

================================================================================
来源：http://www.aibaodan.cn/163rcezrjde.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ilfqkmgm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163brochegz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163rvtgqgfy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163yyrjefnl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ftlxjbds.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163cmtgiwgl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163dawmwdjq.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ilymntms.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163pvlvwvyc.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ajcrgfer.html


<!-- 参考信息 -->